import fs from 'fs';
import { NextRequest, NextResponse } from 'next/server';
import path from 'path';

function generateKeyFromDate(date) {
	const utcYear = date.getUTCFullYear();
	const utcMonth = date.getUTCMonth();
	const utcDate = date.getUTCDate();
	const utcHours = date.getUTCHours();
	const utcMinutes = date.getUTCMinutes();
	return utcYear + utcMonth + utcDate + utcHours + utcMinutes;
}

export default function handler(req, res) {
	const filePath = path.join(process.cwd(), 'src/packages/premium/latest.rar');
	const clientKey = req.query.key;
	const serverKey = generateKeyFromDate(new Date()).toString(34);

	try {
		if (clientKey !== serverKey) {
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
