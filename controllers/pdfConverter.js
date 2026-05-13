import fs from "fs";
export const testRoute = (req, res) => {
	console.log("pdf converter is working...");
	res.send("pdf converter is working...");
};

export const uploadConverter = (req, res) => {
	console.log("pdf converter is working...", req.file);
	res.send("pdf converter is working...");
};

export const convertJpgToPdf = (req, res) => {
	// step1 get the file using fs module
	const files = fs.readdirSync("uploads");

	// step2convert the file from jpg to pdf

	//step3 downlaod the pdf file to the user

	res.send("pdf converter is working...");
};
