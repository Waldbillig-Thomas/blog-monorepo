import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Gender } from '../../prisma/enums/gender.enum';
import { AuthorCountAggregate } from './author-count-aggregate.output';
import { AuthorMinAggregate } from './author-min-aggregate.output';
import { AuthorMaxAggregate } from './author-max-aggregate.output';

@ObjectType()
export class AuthorGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    firstName!: string;

    @Field(() => String, {nullable:false})
    lastName!: string;

    @Field(() => Gender, {nullable:false})
    gender!: keyof typeof Gender;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => AuthorCountAggregate, {nullable:true})
    _count?: AuthorCountAggregate;

    @Field(() => AuthorMinAggregate, {nullable:true})
    _min?: AuthorMinAggregate;

    @Field(() => AuthorMaxAggregate, {nullable:true})
    _max?: AuthorMaxAggregate;
}
