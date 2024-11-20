import { model, Schema } from "mongoose";
import { TContactInfo } from "./contactList.interface";

const ContactSchema = new Schema<TContactInfo>({
  name: { type: String, required: true, trim: true },
  phone: { type: String, required: true, trim: true },
  email: { type: String, required: true, unique: true, trim: true },
  address: { type: String, required: true, trim: true },
});

export const ContactInfo = model<TContactInfo>("ContactInfo", ContactSchema);
