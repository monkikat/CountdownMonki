import EmailModel from "../models/EmailModel";
import { IdEmailType } from "../schema/EmailSchema";
import { EmailType } from "../types/EmailType";

export async function storeEmail(email: EmailType): Promise<IdEmailType> {
    try {
        const storedEmail = await EmailModel.create(email);

        if (!storedEmail) {
            throw new Error("Email could not be stored");
        }

        return storedEmail;
    } catch (err) {
        throw new Error("There was an error storing email");
    }
}

export async function checkEmailExists(email: EmailType): Promise<boolean> {
    try {
        const doesEmailExist = await EmailModel.findOne({ email: email });

        return !!doesEmailExist;
    } catch (err) {
        throw new Error("There was an error checking if email exists")
    }
}