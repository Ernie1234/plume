import { Inject } from '@nestjs/common';
import { Args, Context, Mutation, Query, Resolver } from '@nestjs/graphql';
import type { Client } from '@grpc/grpc-js';
import GraphQLJSON from 'graphql-type-json';

import {
  grpcCall,
  NOTIFICATION_SERVICE_CLIENT,
} from '../../../config/grpc-clients.module';

type GraphqlRequestContext = {
  req?: {
    user?: {
      sub?: string;
    };
  };
};

@Resolver()
export class NotificationsResolver {
  constructor(
    @Inject(NOTIFICATION_SERVICE_CLIENT)
    private readonly notificationServiceClient: Client,
  ) {}

  @Query(() => GraphQLJSON, { name: 'notifications' })
  async getNotifications(
    @Args('limit', { type: () => Number, nullable: true }) limit = 20,
    @Args('cursor', { type: () => String, nullable: true }) cursor?: string,
    @Context() context?: GraphqlRequestContext,
  ): Promise<unknown> {
    const userId = context?.req?.user?.sub;
    if (!userId) {
      throw new Error('Unauthorized');
    }

    return grpcCall(this.notificationServiceClient, 'GetNotifications', {
      user_id: userId,
      cursor,
      limit,
    });
  }

  @Mutation(() => GraphQLJSON, { name: 'markNotificationsAsRead' })
  async markNotificationsAsRead(
    @Args('notificationIds', { type: () => [String] }) notificationIds: string[],
    @Context() context?: GraphqlRequestContext,
  ): Promise<unknown> {
    const userId = context?.req?.user?.sub;
    if (!userId) {
      throw new Error('Unauthorized');
    }

    return grpcCall(this.notificationServiceClient, 'MarkAsRead', {
      user_id: userId,
      notification_ids: notificationIds,
    });
  }
}
