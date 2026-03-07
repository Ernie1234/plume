import pino, { type Logger as PinoLogger } from 'pino';

export type LogLevel = 'trace' | 'debug' | 'info' | 'warn' | 'error' | 'fatal';

export interface LoggerConfig {
  level?: LogLevel;
  service: string;
  pretty?: boolean;
}

export class Logger {
  private logger: PinoLogger;

  constructor(config: LoggerConfig) {
    this.logger = pino({
      level: config.level ?? (process.env['NODE_ENV'] === 'production' ? 'info' : 'debug'),
      name: config.service,
      transport:
        config.pretty || process.env['NODE_ENV'] !== 'production'
          ? {
            target: 'pino-pretty',
            options: {
              colorize: true,
              singleLine: false,
              translateTime: 'SYS:standard',
              ignore: 'pid,hostname',
            },
          }
          : undefined,
      formatters: {
        level: (label) => ({ level: label }),
      },
      base: {
        service: config.service,
        env: process.env['NODE_ENV'],
      },
    });
  }

  child(bindings: Record<string, unknown>): Logger {
    const child = Object.create(this) as Logger;
    child.logger = this.logger.child(bindings);
    return child;
  }

  trace(msg: string, data?: Record<string, unknown>): void {
    this.logger.trace(data ?? {}, msg);
  }

  debug(msg: string, data?: Record<string, unknown>): void {
    this.logger.debug(data ?? {}, msg);
  }

  info(msg: string, data?: Record<string, unknown>): void {
    this.logger.info(data ?? {}, msg);
  }

  warn(msg: string, data?: Record<string, unknown>): void {
    this.logger.warn(data ?? {}, msg);
  }

  error(msg: string, data?: Record<string, unknown> | Error): void {
    if (data instanceof Error) {
      this.logger.error({ err: data }, msg);
    } else {
      this.logger.error(data ?? {}, msg);
    }
  }

  fatal(msg: string, data?: Record<string, unknown> | Error): void {
    if (data instanceof Error) {
      this.logger.fatal({ err: data }, msg);
    } else {
      this.logger.fatal(data ?? {}, msg);
    }
  }
}

// Factory function for creating service loggers
export function createLogger(config: LoggerConfig): Logger {
  return new Logger(config);
}

// Singleton loggers per service
const loggers = new Map<string, Logger>();

export function getLogger(service: string): Logger {
  if (!loggers.has(service)) {
    loggers.set(service, createLogger({ service }));
  }
  return loggers.get(service)!;
}