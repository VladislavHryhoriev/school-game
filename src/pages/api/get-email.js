import mysql from 'mysql2';

// Define your Next.js API handler
export default async function handler(req, res) {
	const email = req.query.email;

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

		res.status(200).json(rows);
	} catch (error) {
		console.error('Error connecting to MySQL:', error);
		res.status(500).json({ error: 'Internal Server Error' });
	}
}
