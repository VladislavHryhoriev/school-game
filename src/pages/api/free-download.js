import axios from 'axios';

export const config = {
	api: {
		responseLimit: false,
		// responseLimit: '8mb',
	},
};

export default async function handler(req, res) {
	const fileId = req.query.fileId;
	const platform = req.query.platform;
	const version = req.query.version;

	const fileUrl = `https://drive.google.com/uc?export=download&confirm=no_antivirus&id=${fileId}`;

	try {
		const response = await axios({
			url: fileUrl,
			method: 'GET',
			responseType: 'stream',
		});

		res.setHeader('Content-Type', 'application/zip');
		res.setHeader(
			'Content-Disposition',
			`attachment; filename="school-game-${version}_${platform}.zip"`
		);

		response.data.pipe(res);
	} catch (error) {
		console.error('File download error:', error);
		res.status(500).send('File download error.');
	}
}
