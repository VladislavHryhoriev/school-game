import { generateKeyFromDate } from '@/lib/generateKeyFromDate';
import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
	if (!!req.query.key) {
		try {
			const platform = req.query.platform;
			const clientKey = req.query.key;
			const key = generateKeyFromDate();
			const filePath = path.join(
				process.cwd(),
				`src/packages/premium/latest-${platform}.zip`
			);

			if (key !== clientKey) {
				res.status(405).json({ status: 'Wrong key' });
			} else {
				if (fs.existsSync(filePath)) {
					res.setHeader(
						'Content-disposition',
						`attachment; filename=school-game-latest_${platform}.zip`
					);
					res.setHeader('Content-type', 'application/zip');

					const fileStream = fs.createReadStream(filePath);

					fileStream.pipe(res);
				} else {
					res.status(500).json({ status: 'failed downloading' });
				}
			}
		} catch (error) {
			console.log('Error downloading: ', error);
		}
	} else {
		res.status(403).json({ status: 'Access denied' });
	}
}
