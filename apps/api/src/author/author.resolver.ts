import {
  Args,
  Int,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { Post } from '../post/models/post.model';
import { AffectedRows } from '../prisma/outputs/affected-rows.output';
import { Pagination } from '../prisma/outputs/pagination.output';
import { PrismaService } from '../prisma/prisma.service';
import { AuthorAggregateArgs } from './args/author-aggregate.args';
import { CreateManyAuthorArgs } from './args/create-many-author.args';
import { CreateOneAuthorArgs } from './args/create-one-author.args';
import { DeleteManyAuthorArgs } from './args/delete-many-author.args';
import { DeleteOneAuthorArgs } from './args/delete-one-author.args';
import { FindFirstAuthorArgs } from './args/find-first-author.args';
import { FindManyAuthorArgs } from './args/find-many-author.args';
import { FindUniqueAuthorArgs } from './args/find-unique-author.args';
import { UpdateManyAuthorArgs } from './args/update-many-author.args';
import { UpdateOneAuthorArgs } from './args/update-one-author.args';
import { UpsertOneAuthorArgs } from './args/upsert-one-author.args';
import { Author } from './models/author.model';
import { AuthorCountAggregate } from './outputs/author-count-aggregate.output';

@Resolver(() => Author)
export class AuthorResolver {
  @Query(() => Author, { name: 'AuthorFindFirst' })
  findFirst(@Args() args: FindFirstAuthorArgs) {
    return this.prismaService.author.findFirst(args);
  }

  @Query(() => [Author], { name: 'AuthorFindMany' })
  findMany(@Args() args: FindManyAuthorArgs): Promise<Author[]> {
    return this.prismaService.author.findMany(args);
  }

  @Query(() => Pagination, { name: 'AuthorPagination' })
  async pagination(@Args() args: FindManyAuthorArgs): Promise<Pagination> {
    return {
      total: await this.count({ where: args.where }),
      pageIndex: Math.ceil((args.skip || 0) / (args.take || 25)),
      pageSize: args.take || 25,
    };
  }

  @Query(() => Author, { name: 'AuthorFindUnique' })
  findUnique(@Args() args: FindUniqueAuthorArgs) {
    return this.prismaService.author.findUnique(args);
  }

  @Query(() => AuthorCountAggregate, { name: 'AuthorAggregate' })
  aggregate(@Args() args: AuthorAggregateArgs) {
    return this.prismaService.author.aggregate(args);
  }

  @Query(() => Int, { name: 'AuthorCount' })
  count(@Args() args: FindManyAuthorArgs) {
    return this.prismaService.author.count(args);
  }

  // @Query(() => AuthorGroupBy, { name: 'AuthorGroupBy' })
  // groupBy(@Args() args: AuthorGroupByArgs) {
  //   return this.prismaService.author.groupBy(args);
  // }

  @ResolveField(() => [Post])
  posts(@Parent() author: Author): Promise<Post[]> {
    // TODO replace with service
    return this.prismaService.post.findMany({ where: { authorId: author.id } });
  }

  @Mutation(() => Author, { name: 'AuthorCreate' })
  create(@Args() args: CreateOneAuthorArgs): Promise<Author> {
    return this.prismaService.author.create(args);
  }

  @Mutation(() => AffectedRows, { name: 'AuthorCreateMany' })
  createMany(@Args() args: CreateManyAuthorArgs): Promise<AffectedRows> {
    return this.prismaService.author.createMany(args);
  }

  @Mutation(() => Author, { name: 'AuthorDelete' })
  delete(@Args() args: DeleteOneAuthorArgs): Promise<Author> {
    return this.prismaService.author.delete(args);
  }

  @Mutation(() => AffectedRows, { name: 'AuthorDeleteMany' })
  deleteMany(@Args() args: DeleteManyAuthorArgs) {
    return this.prismaService.author.deleteMany(args);
  }

  @Mutation(() => Author, { name: 'AuthorUpdate' })
  update(@Args() args: UpdateOneAuthorArgs) {
    return this.prismaService.author.update(args);
  }

  @Mutation(() => AffectedRows, { name: 'AuthorUpdateMany' })
  updateMany(@Args() args: UpdateManyAuthorArgs) {
    return this.prismaService.author.updateMany(args);
  }

  @Mutation(() => Author, { name: 'AuthorUpsert' })
  upsert(@Args() args: UpsertOneAuthorArgs) {
    return this.prismaService.author.upsert(args);
  }

  constructor(private readonly prismaService: PrismaService) {}
}
