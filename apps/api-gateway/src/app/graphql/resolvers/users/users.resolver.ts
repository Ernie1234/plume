import { Inject } from '@nestjs/common';
import { Args, Context, Mutation, Query, Resolver } from '@nestjs/graphql';
import type { Client } from '@grpc/grpc-js';
import GraphQLJSON from 'graphql-type-json';

import { Public } from '../../../auth/decorators/public.decorator';
import {
  grpcCall,
  USER_SERVICE_CLIENT,
} from '../../../config/grpc-clients.module';

type GraphqlRequestContext = {
  req?: {
    user?: {
      sub?: string;
    };
  };
};

@Resolver()
export class UsersResolver {
  constructor(
    @Inject(USER_SERVICE_CLIENT)
    private readonly userServiceClient: Client,
  ) {}

  @Public()
  @Query(() => GraphQLJSON, { name: 'userById' })
  async getUserById(
    @Args('userId', { type: () => String }) userId: string,
  ): Promise<unknown> {
    return grpcCall(this.userServiceClient, 'GetUser', {
      user_id: userId,
    });
  }

  @Public()
  @Query(() => GraphQLJSON, { name: 'userByUsername' })
  async getUserByUsername(
    @Args('username', { type: () => String }) username: string,
  ): Promise<unknown> {
    return grpcCall(this.userServiceClient, 'GetUserByUsername', {
      username,
    });
  }

  @Mutation(() => GraphQLJSON, { name: 'followUser' })
  async followUser(
    @Args('followingId', { type: () => String }) followingId: string,
    @Context() context: GraphqlRequestContext,
  ): Promise<unknown> {
    const followerId = context.req?.user?.sub;
    if (!followerId) {
      throw new Error('Unauthorized');
    }

    return grpcCall(this.userServiceClient, 'FollowUser', {
      follower_id: followerId,
      following_id: followingId,
    });
  }
}
