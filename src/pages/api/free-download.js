import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
	const version = req.query.version;
	const platform = req.query.platform;
	const filename = `${version}_${platform}`;

	const filePath = path.join(
		process.cwd(),
		`src/packages/free/${platform}/${version}_${platform}.rar`
	);

	try {
		if (fs.existsSync(filePath)) {
			res.setHeader('Content-disposition', `attachment; filename=${filename}.rar`);
			res.setHeader('Content-type', 'application/rar');

			const fileStream = fs.createReadStream(filePath);

			fileStream.pipe(res);
		} else {
			res.status(500).end();
		}
	} catch (error) {
		console.log('Error downloading: ', error);
	}
}
