import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AuthorWhereInput } from '../inputs/author-where.input';
import { AuthorOrderByInput } from '../inputs/author-order-by.input';
import { AuthorWhereUniqueInput } from '../inputs/author-where-unique.input';
import { Int } from '@nestjs/graphql';
import { AuthorCountAggregateInput } from '../inputs/author-count-aggregate.input';
import { AuthorMinAggregateInput } from '../inputs/author-min-aggregate.input';
import { AuthorMaxAggregateInput } from '../inputs/author-max-aggregate.input';

@ArgsType()
export class AuthorAggregateArgs {

    @Field(() => AuthorWhereInput, {nullable:true})
    where?: AuthorWhereInput;

    @Field(() => [AuthorOrderByInput], {nullable:true})
    orderBy?: Array<AuthorOrderByInput>;

    @Field(() => AuthorWhereUniqueInput, {nullable:true})
    cursor?: AuthorWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => AuthorCountAggregateInput, {nullable:true})
    _count?: AuthorCountAggregateInput;

    @Field(() => AuthorMinAggregateInput, {nullable:true})
    _min?: AuthorMinAggregateInput;

    @Field(() => AuthorMaxAggregateInput, {nullable:true})
    _max?: AuthorMaxAggregateInput;
}
