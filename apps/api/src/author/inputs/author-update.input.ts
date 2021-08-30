import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../../prisma/inputs/string-field-update-operations.input';
import { EnumGenderFieldUpdateOperationsInput } from '../../prisma/inputs/enum-gender-field-update-operations.input';
import { PostUpdateManyWithoutAuthorInput } from '../../post/inputs/post-update-many-without-author.input';

@InputType()
export class AuthorUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    firstName?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    lastName?: StringFieldUpdateOperationsInput;

    @Field(() => EnumGenderFieldUpdateOperationsInput, {nullable:true})
    gender?: EnumGenderFieldUpdateOperationsInput;

    @Field(() => PostUpdateManyWithoutAuthorInput, {nullable:true})
    posts?: PostUpdateManyWithoutAuthorInput;
}
