export default async function handler(req, res) {
	try {
		const body = JSON.parse(req.body);
		console.log(body);
		res.status(200).json({ status: 'OK' });
	} catch (error) {
		console.error('Error send contact data:', error);
	}
}
