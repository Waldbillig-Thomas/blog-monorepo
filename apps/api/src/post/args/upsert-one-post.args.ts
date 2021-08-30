import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PostWhereUniqueInput } from '../inputs/post-where-unique.input';
import { PostCreateInput } from '../inputs/post-create.input';
import { PostUpdateInput } from '../inputs/post-update.input';

@ArgsType()
export class UpsertOnePostArgs {

    @Field(() => PostWhereUniqueInput, {nullable:false})
    where!: PostWhereUniqueInput;

    @Field(() => PostCreateInput, {nullable:false})
    create!: PostCreateInput;

    @Field(() => PostUpdateInput, {nullable:false})
    update!: PostUpdateInput;
}
