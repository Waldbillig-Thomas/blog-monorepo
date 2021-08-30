import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AuthorUpdateInput } from '../inputs/author-update.input';
import { AuthorWhereUniqueInput } from '../inputs/author-where-unique.input';

@ArgsType()
export class UpdateOneAuthorArgs {

    @Field(() => AuthorUpdateInput, {nullable:false})
    data!: AuthorUpdateInput;

    @Field(() => AuthorWhereUniqueInput, {nullable:false})
    where!: AuthorWhereUniqueInput;
}
