import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
	const filePath = path.join(process.cwd(), 'src/packages/premium/latest.rar');

	const token = 'RdHl2w';

	try {
		if (token !== req.query.token) {
			res.status(404).json({ status: 'failed token' });
		} else {
			if (fs.existsSync(filePath)) {
				res.setHeader(
					'Content-disposition',
					`attachment; filename=${req.query.v}.rar`
				);
				res.setHeader('Content-type', 'application/rar');

				const fileStream = fs.createReadStream(filePath);

				fileStream.pipe(res);
			} else {
				res.status(500).end();
			}
		}
	} catch (error) {
		console.log('Error downloading: ', error);
	}
}
