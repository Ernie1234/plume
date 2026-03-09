import { Inject } from '@nestjs/common';
import { Args, Context, Mutation, Query, Resolver } from '@nestjs/graphql';
import type { Client } from '@grpc/grpc-js';
import GraphQLJSON from 'graphql-type-json';

import { Public } from '../../../auth/decorators/public.decorator';
import {
  grpcCall,
  TWEET_SERVICE_CLIENT,
} from '../../../config/grpc-clients.module';

type GraphqlRequestContext = {
  req?: {
    user?: {
      sub?: string;
    };
  };
};

@Resolver()
export class TweetsResolver {
  constructor(
    @Inject(TWEET_SERVICE_CLIENT)
    private readonly tweetServiceClient: Client,
  ) {}

  @Public()
  @Query(() => GraphQLJSON, { name: 'tweetById' })
  async getTweetById(
    @Args('tweetId', { type: () => String }) tweetId: string,
  ): Promise<unknown> {
    return grpcCall(this.tweetServiceClient, 'GetTweet', {
      tweet_id: tweetId,
    });
  }

  @Mutation(() => GraphQLJSON, { name: 'createTweet' })
  async createTweet(
    @Args('content', { type: () => String }) content: string,
    @Context() context: GraphqlRequestContext,
  ): Promise<unknown> {
    const authorId = context.req?.user?.sub;
    if (!authorId) {
      throw new Error('Unauthorized');
    }

    return grpcCall(this.tweetServiceClient, 'CreateTweet', {
      content,
      author_id: authorId,
      type: 'TWEET_TYPE_TWEET',
    });
  }

  @Mutation(() => GraphQLJSON, { name: 'likeTweet' })
  async likeTweet(
    @Args('tweetId', { type: () => String }) tweetId: string,
    @Context() context: GraphqlRequestContext,
  ): Promise<unknown> {
    const userId = context.req?.user?.sub;
    if (!userId) {
      throw new Error('Unauthorized');
    }

    return grpcCall(this.tweetServiceClient, 'LikeTweet', {
      user_id: userId,
      tweet_id: tweetId,
    });
  }
}
