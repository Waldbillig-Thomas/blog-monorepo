import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PostWhereInput } from '../inputs/post-where.input';

@ArgsType()
export class DeleteManyPostArgs {

    @Field(() => PostWhereInput, {nullable:true})
    where?: PostWhereInput;
}
