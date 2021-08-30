import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AuthorCreateWithoutPostsInput } from './author-create-without-posts.input';
import { AuthorCreateOrConnectWithoutPostsInput } from './author-create-or-connect-without-posts.input';
import { AuthorWhereUniqueInput } from './author-where-unique.input';

@InputType()
export class AuthorCreateNestedOneWithoutPostsInput {

    @Field(() => AuthorCreateWithoutPostsInput, {nullable:true})
    create?: AuthorCreateWithoutPostsInput;

    @Field(() => AuthorCreateOrConnectWithoutPostsInput, {nullable:true})
    connectOrCreate?: AuthorCreateOrConnectWithoutPostsInput;

    @Field(() => AuthorWhereUniqueInput, {nullable:true})
    connect?: AuthorWhereUniqueInput;
}
