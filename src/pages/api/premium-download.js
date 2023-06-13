import { generateKeyFromDate } from '@/lib/generateKeyFromDate';
import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
	const filePath = path.join(process.cwd(), 'src/packages/premium/latest.rar');
	const clientKey = req.query.key;
	const key = generateKeyFromDate();

	try {
		if (key !== clientKey) {
			res.status(405).json({ status: 'Wrong key' });
		} else {
			if (fs.existsSync(filePath)) {
				res.setHeader(
					'Content-disposition',
					`attachment; filename=school-game_latest.rar`
				);
				res.setHeader('Content-type', 'application/rar');
				const fileStream = fs.createReadStream(filePath);

				fileStream.pipe(res);
				res.end();
			} else {
				res.status(500).json({ status: 'failed downloading' });
			}
		}
	} catch (error) {
		console.log('Error downloading: ', error);
	}
}
