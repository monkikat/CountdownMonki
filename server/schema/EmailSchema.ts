import { Schema } from "mongoose";
import { EmailType } from "../types/EmailType";

export interface IdEmailType extends EmailType {
    _id: string;
}

const EmailSchema = new Schema<IdEmailType>({
    email: {
        type: String,
        required: true,
        unique: true
    }
})

export default EmailSchema;