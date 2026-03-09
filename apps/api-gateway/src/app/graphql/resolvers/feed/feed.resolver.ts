import { Args, Context, Query, Resolver } from '@nestjs/graphql';
import GraphQLJSON from 'graphql-type-json';

type GraphqlRequestContext = {
  req?: {
    user?: {
      sub?: string;
    };
  };
};

@Resolver()
export class FeedResolver {
  @Query(() => GraphQLJSON, { name: 'homeFeed' })
  async getHomeFeed(
    @Args('limit', { type: () => Number, nullable: true }) limit = 20,
    @Args('cursor', { type: () => String, nullable: true }) cursor?: string,
    @Context() context?: GraphqlRequestContext,
  ): Promise<unknown> {
    const userId = context?.req?.user?.sub;
    return {
      userId: userId ?? null,
      items: [],
      cursor: cursor ?? null,
      limit,
      hasMore: false,
    };
  }
}
