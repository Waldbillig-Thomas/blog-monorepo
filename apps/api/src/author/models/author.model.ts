import { Field } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Post } from '../../post/models/post.model';
import { Gender } from '../../prisma/enums/gender.enum';

@ObjectType()
export class Author {
    @Field(() => ID, { nullable: false })
    id!: string;
    @Field(() => String, { nullable: false })
    firstName!: string;
    @Field(() => String, { nullable: false })
    lastName!: string;
    @Field(() => Gender, { nullable: false })
    gender!: keyof typeof Gender;
    @Field(() => [Post], { nullable: true })
    posts?: Array<Post>;
}

@ObjectType()
export class Pagination {
    @Field(() => Int, { nullable: false })
    total!: number;
    @Field(() => Int, { nullable: false })
    pageSize!: number;
    @Field(() => Int, { nullable: false })
    pageIndex!: number;
}
