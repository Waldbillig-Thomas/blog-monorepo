import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../../prisma/inputs/string-field-update-operations.input';
import { EnumGenderFieldUpdateOperationsInput } from '../../prisma/inputs/enum-gender-field-update-operations.input';

@InputType()
export class AuthorUncheckedUpdateManyInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    firstName?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    lastName?: StringFieldUpdateOperationsInput;

    @Field(() => EnumGenderFieldUpdateOperationsInput, {nullable:true})
    gender?: EnumGenderFieldUpdateOperationsInput;
}
