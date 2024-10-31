import { model } from "mongoose";
import EmailSchema, { IdEmailType } from "../schema/EmailSchema";

const EmailModel = model<IdEmailType>("eventmonkiemails", EmailSchema);

export default EmailModel;