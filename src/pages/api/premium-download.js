import fs from 'fs';
import path from 'path';

function generateKey() {
	const time = new Date();
	const timeKey = time.getMonth() + time.getHours() + time.getMinutes();
	return (timeKey + 5659).toString(34);
}

export default function handler(req, res) {
	const filePath = path.join(process.cwd(), 'src/packages/premium/latest.rar');
	const clientKey = req.query.key;
	const serverKey = generateKey();

	try {
		if (clientKey !== serverKey) {
			res.status(404).json({ status: 'Key lifetime expired' });
		} else {
			if (fs.existsSync(filePath)) {
				res.setHeader(
					'Content-disposition',
					`attachment; filename=school-game_latest.rar`
				);
				res.setHeader('Content-type', 'application/rar');

				const fileStream = fs.createReadStream(filePath);

				fileStream.pipe(res);
			} else {
				res.status(500).json({ status: 'failed downloading' });
			}
		}
	} catch (error) {
		console.log('Error downloading: ', error);
	}
}
