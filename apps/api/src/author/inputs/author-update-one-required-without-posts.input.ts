import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AuthorCreateWithoutPostsInput } from './author-create-without-posts.input';
import { AuthorCreateOrConnectWithoutPostsInput } from './author-create-or-connect-without-posts.input';
import { AuthorUpsertWithoutPostsInput } from './author-upsert-without-posts.input';
import { AuthorWhereUniqueInput } from './author-where-unique.input';
import { AuthorUpdateWithoutPostsInput } from './author-update-without-posts.input';

@InputType()
export class AuthorUpdateOneRequiredWithoutPostsInput {

    @Field(() => AuthorCreateWithoutPostsInput, {nullable:true})
    create?: AuthorCreateWithoutPostsInput;

    @Field(() => AuthorCreateOrConnectWithoutPostsInput, {nullable:true})
    connectOrCreate?: AuthorCreateOrConnectWithoutPostsInput;

    @Field(() => AuthorUpsertWithoutPostsInput, {nullable:true})
    upsert?: AuthorUpsertWithoutPostsInput;

    @Field(() => AuthorWhereUniqueInput, {nullable:true})
    connect?: AuthorWhereUniqueInput;

    @Field(() => AuthorUpdateWithoutPostsInput, {nullable:true})
    update?: AuthorUpdateWithoutPostsInput;
}
