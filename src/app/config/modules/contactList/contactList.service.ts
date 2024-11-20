import { TContactInfo } from "./contactList.interface";
import { ContactInfo } from "./contactList.model";

const createContactInfoIntoDB = async (contactInfo: TContactInfo) => {
  const result = await ContactInfo.create(contactInfo);
  return result;
};
const getAllContactInfoFromDB = async () => {
  const result = await ContactInfo.find();
  return result;
};
const updateContactInfoIntoDB = async (
  id: string,
  payload: Partial<TContactInfo>
) => {
  const result = await ContactInfo.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  });
  return result;
};

const deleteContactInfoIntoDB = async (id: string) => {
  const result = await ContactInfo.deleteOne({ id });
  return result;
};
export const ContactInfoServices = {
  createContactInfoIntoDB,
  getAllContactInfoFromDB,
  updateContactInfoIntoDB,
  deleteContactInfoIntoDB,
};
