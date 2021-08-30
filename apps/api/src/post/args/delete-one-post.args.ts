import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PostWhereUniqueInput } from '../inputs/post-where-unique.input';

@ArgsType()
export class DeleteOnePostArgs {

    @Field(() => PostWhereUniqueInput, {nullable:false})
    where!: PostWhereUniqueInput;
}
