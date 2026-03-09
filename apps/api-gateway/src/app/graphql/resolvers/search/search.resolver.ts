import { Args, Query, Resolver } from '@nestjs/graphql';
import GraphQLJSON from 'graphql-type-json';

import { Public } from '../../../auth/decorators/public.decorator';

@Resolver()
export class SearchResolver {
  @Public()
  @Query(() => GraphQLJSON, { name: 'search' })
  async search(
    @Args('query', { type: () => String }) query: string,
    @Args('limit', { type: () => Number, nullable: true }) limit = 20,
  ): Promise<unknown> {
    return {
      query,
      limit,
      tweets: [],
      users: [],
      hashtags: [],
    };
  }
}
