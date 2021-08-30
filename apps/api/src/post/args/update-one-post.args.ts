import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PostUpdateInput } from '../inputs/post-update.input';
import { PostWhereUniqueInput } from '../inputs/post-where-unique.input';

@ArgsType()
export class UpdateOnePostArgs {

    @Field(() => PostUpdateInput, {nullable:false})
    data!: PostUpdateInput;

    @Field(() => PostWhereUniqueInput, {nullable:false})
    where!: PostWhereUniqueInput;
}
