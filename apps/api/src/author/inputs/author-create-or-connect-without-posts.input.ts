import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AuthorWhereUniqueInput } from './author-where-unique.input';
import { AuthorCreateWithoutPostsInput } from './author-create-without-posts.input';

@InputType()
export class AuthorCreateOrConnectWithoutPostsInput {

    @Field(() => AuthorWhereUniqueInput, {nullable:false})
    where!: AuthorWhereUniqueInput;

    @Field(() => AuthorCreateWithoutPostsInput, {nullable:false})
    create!: AuthorCreateWithoutPostsInput;
}
