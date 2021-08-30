import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AuthorWhereUniqueInput } from '../inputs/author-where-unique.input';
import { AuthorCreateInput } from '../inputs/author-create.input';
import { AuthorUpdateInput } from '../inputs/author-update.input';

@ArgsType()
export class UpsertOneAuthorArgs {

    @Field(() => AuthorWhereUniqueInput, {nullable:false})
    where!: AuthorWhereUniqueInput;

    @Field(() => AuthorCreateInput, {nullable:false})
    create!: AuthorCreateInput;

    @Field(() => AuthorUpdateInput, {nullable:false})
    update!: AuthorUpdateInput;
}
