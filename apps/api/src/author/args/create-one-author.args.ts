import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AuthorCreateInput } from '../inputs/author-create.input';

@ArgsType()
export class CreateOneAuthorArgs {

    @Field(() => AuthorCreateInput, {nullable:false})
    data!: AuthorCreateInput;
}
