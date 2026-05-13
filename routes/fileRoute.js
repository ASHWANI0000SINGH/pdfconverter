import express from "express";
import multer from "multer";
import {
	convertJpgToPdf,
	uploadConverter,
	testRoute,
} from "../controllers/pdfConverter.js";

const router = express.Router();

const upload = multer({ dest: "uploads/" });

router.get("/test", testRoute);
router.post("/upload", upload.single("image"), uploadConverter);
router.post("/convert", upload.single("file"), convertJpgToPdf);

export default router;
