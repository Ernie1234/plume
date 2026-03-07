// scripts/wait-for-postgres.js
const net = require('net');

const host = process.env.POSTGRES_HOST || 'localhost';
const port = parseInt(process.env.POSTGRES_PORT || '5432', 10);

function waitForPostgres() {
  return new Promise((resolve) => {
    const tryConnect = () => {
      const socket = new net.Socket();
      socket.setTimeout(1000);
      socket.on('connect', () => {
        socket.destroy();
        resolve();
      });
      socket.on('error', () => setTimeout(tryConnect, 1000));
      socket.on('timeout', () => {
        socket.destroy();
        setTimeout(tryConnect, 1000);
      });
      socket.connect(port, host);
    };
    tryConnect();
  });
}

(async () => {
  console.log(`Waiting for Postgres at ${host}:${port}...`);
  await waitForPostgres();
  console.log('Postgres is ready!');
})();
