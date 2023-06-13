import mysql from 'mysql2';

export default async function handler(req, res) {
	if (req.method === 'POST') {
		const email = req.body;

		console.log(email);

		try {
			const connection = mysql.createConnection({
				host: process.env.MYSQL_HOST,
				user: process.env.MYSQL_USER,
				password: process.env.MYSQL_PASSWORD,
				database: process.env.MYSQL_DATABASE,
			});

			connection.connect();

			const query = `SELECT * FROM datebase_with_cute_ass WHERE Email = '${email}'`;
			const [rows] = await connection.promise().query(query);
			connection.end();

			const user = rows[0];

			if (user) {
				if (user.Tier !== 'Supporter') {
					return res.status(200).json({ status: 'ok' });
				}

				if (user.Tier === 'Supporter') {
					return res.status(200).json({ status: 'supporter' });
				}
			}

			res.status(200).json({ status: 'failed' });
		} catch (error) {
			console.error('Error connecting to MySQL:', error);
			res.status(500).json({ error: 'Internal Server Error' });
		}
	} else {
		res.status(405).json({ error: 'Method Not Allowed' });
	}
}
