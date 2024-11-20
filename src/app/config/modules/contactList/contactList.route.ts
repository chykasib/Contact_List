import express from "express";
import { ContactInfoControllers } from "./contactList.controller";
const router = express.Router();
router.post("/create-contactInfo", ContactInfoControllers.createContactInfo);
router.get("/", ContactInfoControllers.getAllContactInfo);
router.patch("/:contactId", ContactInfoControllers.updateContactInfo);
router.delete("/:contactInfoId", ContactInfoControllers.deleteContactInfo);
export const ContactInfoRoutes = router;
