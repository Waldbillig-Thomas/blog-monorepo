import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PostWhereInput } from '../inputs/post-where.input';
import { PostOrderByInput } from '../inputs/post-order-by.input';
import { PostWhereUniqueInput } from '../inputs/post-where-unique.input';
import { Int } from '@nestjs/graphql';
import { PostCountAggregateInput } from '../inputs/post-count-aggregate.input';
import { PostMinAggregateInput } from '../inputs/post-min-aggregate.input';
import { PostMaxAggregateInput } from '../inputs/post-max-aggregate.input';

@ArgsType()
export class PostAggregateArgs {

    @Field(() => PostWhereInput, {nullable:true})
    where?: PostWhereInput;

    @Field(() => [PostOrderByInput], {nullable:true})
    orderBy?: Array<PostOrderByInput>;

    @Field(() => PostWhereUniqueInput, {nullable:true})
    cursor?: PostWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => PostCountAggregateInput, {nullable:true})
    _count?: PostCountAggregateInput;

    @Field(() => PostMinAggregateInput, {nullable:true})
    _min?: PostMinAggregateInput;

    @Field(() => PostMaxAggregateInput, {nullable:true})
    _max?: PostMaxAggregateInput;
}
