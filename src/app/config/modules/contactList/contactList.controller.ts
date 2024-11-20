import { Request, Response } from "express";
import { ContactInfoServices } from "./contactList.service";
const createContactInfo = async (req: Request, res: Response) => {
  try {
    const contactInfo = req.body;
    const result = await ContactInfoServices.createContactInfoIntoDB(
      contactInfo
    );
    res.status(200).json({
      success: true,
      message: "ContactInfo is Created Successfully",
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};
const getAllContactInfo = async (req: Request, res: Response) => {
  try {
    const result = await ContactInfoServices.getAllContactInfoFromDB();
    res.status(200).json({
      success: true,
      message: "ContactInfo is retrieved Successfully",
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};
const updateContactInfo = async (req: Request, res: Response) => {
  try {
    const contactID = req.params.contactId;
    console.log(contactID, req.body);
    const result = await ContactInfoServices.updateContactInfoIntoDB(
      contactID,
      req.body
    );
    res.status(200).json({
      success: true,
      message: "ContactInfo is updated Successfully",
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

const deleteContactInfo = async (req: Request, res: Response) => {
  try {
    const { contactID } = req.params;
    const result = await ContactInfoServices.deleteContactInfoIntoDB(contactID);
    res.status(200).json({
      success: true,
      message: "ContactInfo is deleted Successfully",
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};
export const ContactInfoControllers = {
  createContactInfo,
  getAllContactInfo,
  updateContactInfo,
  deleteContactInfo,
};
