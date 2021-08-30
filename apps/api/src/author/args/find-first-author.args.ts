import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AuthorWhereInput } from '../inputs/author-where.input';
import { AuthorOrderByInput } from '../inputs/author-order-by.input';
import { AuthorWhereUniqueInput } from '../inputs/author-where-unique.input';
import { Int } from '@nestjs/graphql';
import { AuthorScalarFieldEnum } from '../enums/author-scalar-field.enum';

@ArgsType()
export class FindFirstAuthorArgs {

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

    @Field(() => [AuthorScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof AuthorScalarFieldEnum>;
}
