import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AuthorCreateManyInput } from '../inputs/author-create-many.input';

@ArgsType()
export class CreateManyAuthorArgs {

    @Field(() => [AuthorCreateManyInput], {nullable:false})
    data!: Array<AuthorCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
