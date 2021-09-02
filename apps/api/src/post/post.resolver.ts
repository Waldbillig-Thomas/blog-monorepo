import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { AffectedRows } from '../prisma/outputs/affected-rows.output';
import { PrismaService } from '../prisma/prisma.service';
import { CreateManyPostArgs } from './args/create-many-post.args';
import { CreateOnePostArgs } from './args/create-one-post.args';
import { DeleteManyPostArgs } from './args/delete-many-post.args';
import { DeleteOnePostArgs } from './args/delete-one-post.args';
import { FindFirstPostArgs } from './args/find-first-post.args';
import { FindManyPostArgs } from './args/find-many-post.args';
import { FindUniquePostArgs } from './args/find-unique-post.args';
import { PostAggregateArgs } from './args/post-aggregate.args';
import { UpdateManyPostArgs } from './args/update-many-post.args';
import { UpdateOnePostArgs } from './args/update-one-post.args';
import { UpsertOnePostArgs } from './args/upsert-one-post.args';
import { Post } from './models/post.model';
import { PostCountAggregate } from './outputs/post-count-aggregate.output';

@Resolver(() => Post)
export class PostResolver {
  @Query(() => Post, { name: 'PostFindFirst' })
  findFirst(@Args() args: FindFirstPostArgs) {
    return this.prismaService.post.findFirst(args);
  }

  @Query(() => [Post], { name: 'PostFindMany' })
  findMany(@Args() args: FindManyPostArgs): Promise<Post[]> {
    return this.prismaService.post.findMany(args);
  }

  @Query(() => Post, { name: 'PostFindUnique' })
  findUnique(@Args() args: FindUniquePostArgs) {
    return this.prismaService.post.findUnique(args);
  }

  @Query(() => PostCountAggregate, { name: 'PostAggregate' })
  aggregate(@Args() args: PostAggregateArgs) {
    return this.prismaService.post.aggregate(args);
  }

  // @Query(() => PostCountAggregate, { name: 'PostCount' })
  // count(@Args() args: PostCountAggregateInput) {
  //   return this.prismaService.post.count(args);
  // }

  // @Query(() => PostGroupBy, { name: 'PostGroupBy' })
  // groupBy(@Args() args: PostGroupByArgs) {
  //   return this.prismaService.post.groupBy(args);
  // }

  @Mutation(() => Post, { name: 'PostCreate' })
  create(@Args() args: CreateOnePostArgs): Promise<Post> {
    return this.prismaService.post.create(args);
  }

  @Mutation(() => AffectedRows, { name: 'PostCreateMany' })
  createMany(@Args() args: CreateManyPostArgs): Promise<AffectedRows> {
    return this.prismaService.post.createMany(args);
  }

  @Mutation(() => Post, { name: 'PostDelete' })
  delete(@Args() args: DeleteOnePostArgs): Promise<Post> {
    return this.prismaService.post.delete(args);
  }

  @Mutation(() => AffectedRows, { name: 'PostDeleteMany' })
  deleteMany(@Args() args: DeleteManyPostArgs) {
    return this.prismaService.post.deleteMany(args);
  }

  @Mutation(() => Post, { name: 'PostUpdate' })
  update(@Args() args: UpdateOnePostArgs) {
    return this.prismaService.post.update(args);
  }

  @Mutation(() => AffectedRows, { name: 'PostUpdateMany' })
  updateMany(@Args() args: UpdateManyPostArgs) {
    return this.prismaService.post.updateMany(args);
  }

  @Mutation(() => Post, { name: 'PostUpsert' })
  upsert(@Args() args: UpsertOnePostArgs) {
    return this.prismaService.post.upsert(args);
  }

  constructor(private readonly prismaService: PrismaService) {}
}
