import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Gender } from '../../prisma/enums/gender.enum';
import { PostCreateNestedManyWithoutAuthorInput } from '../../post/inputs/post-create-nested-many-without-author.input';

@InputType()
export class AuthorCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    firstName!: string;

    @Field(() => String, {nullable:false})
    lastName!: string;

    @Field(() => Gender, {nullable:false})
    gender!: keyof typeof Gender;

    @Field(() => PostCreateNestedManyWithoutAuthorInput, {nullable:true})
    posts?: PostCreateNestedManyWithoutAuthorInput;
}
