// import axios from 'axios';

// export default async function handler(req, res) {
// 	const id = req.query.id;
// 	const platform = req.query.platform;
// 	const version = req.query.version;

// 	const fileUrl = `https://drive.google.com/uc?export=download&confirm=no_antivirus&id=${id}`;

// 	try {
// 		const response = await axios({
// 			url: fileUrl,
// 			method: 'GET',
// 			responseType: 'stream',
// 		});

// 		res.setHeader('Content-Type', 'application/zip');
// 		res.setHeader(
// 			'Content-Disposition',
// 			`attachment; filename="school-game-${version}_${platform}.zip"`
// 		);

// 		response.data.pipe(res);
// 	} catch (error) {
// 		console.error('File download error:', error);
// 		res.status(500).send('File download error.');
// 	}
// }
