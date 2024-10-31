import { Request, Response } from "express";
import asyncHandler = require("express-async-handler");
import { checkEmailExists, storeEmail } from "../services/EmailServices";

const storeEmailController = asyncHandler(async (req: Request, res: Response) => {
    const { email } = req.body;

    const emailExists = await checkEmailExists(email);

    if (emailExists) {
        res.status(400).json({
            message: "You're already registered!"
        });
    }

    const storedEmail = await storeEmail(email);

    res.status(201).json({
        message: "You have successfully registered!"
    });
});

module.exports = {
    storeEmailController
};