import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { AffectedRows } from '../prisma/outputs/affected-rows.output';
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

  @Query(() => Author, { name: 'AuthorFindUnique' })
  findUnique(@Args() args: FindUniqueAuthorArgs) {
    return this.prismaService.author.findUnique(args);
  }

  @Query(() => AuthorCountAggregate, { name: 'AuthorAggregate' })
  aggregate(@Args() args: AuthorAggregateArgs) {
    return this.prismaService.author.aggregate(args);
  }

  // @Query(() => AuthorCountAggregate, { name: 'AuthorCount' })
  // count(@Args() args: AuthorCountAggregateInput) {
  //   return this.prismaService.author.count(args);
  // }

  // @Query(() => AuthorGroupBy, { name: 'AuthorGroupBy' })
  // groupBy(@Args() args: AuthorGroupByArgs) {
  //   return this.prismaService.author.groupBy(args);
  // }

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
