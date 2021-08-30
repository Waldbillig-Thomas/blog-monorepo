import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PostWhereInput } from '../inputs/post-where.input';
import { PostOrderByInput } from '../inputs/post-order-by.input';
import { PostScalarFieldEnum } from '../enums/post-scalar-field.enum';
import { PostScalarWhereWithAggregatesInput } from '../inputs/post-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { PostCountAggregateInput } from '../inputs/post-count-aggregate.input';
import { PostMinAggregateInput } from '../inputs/post-min-aggregate.input';
import { PostMaxAggregateInput } from '../inputs/post-max-aggregate.input';

@ArgsType()
export class PostGroupByArgs {

    @Field(() => PostWhereInput, {nullable:true})
    where?: PostWhereInput;

    @Field(() => [PostOrderByInput], {nullable:true})
    orderBy?: Array<PostOrderByInput>;

    @Field(() => [PostScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof PostScalarFieldEnum>;

    @Field(() => PostScalarWhereWithAggregatesInput, {nullable:true})
    having?: PostScalarWhereWithAggregatesInput;

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
