import nodemailer from 'nodemailer';

export default async function handler(req, res) {
	if (req.method === 'POST') {
		const { name, email, message } = req.body;
		const user = process.env.MAIL_AUTH_USER;
		const pass = process.env.MAIL_AUTH_PASS;

		try {
			const transporter = nodemailer.createTransport({
				host: 'smtp.beget.com',
				port: 465,
				secure: true,
				auth: {
					user: user,
					pass: pass,
				},
			});

			const mailOptions = {
				from: 'kaitos8o@slothscommand.ru',
				to: 'kaitos8o@slothscommand.ru',
				subject: `Feedback: ${name}`,
				text: `
				Имя: ${name}
				Адрес электронной почты: ${email}
				Сообщение: ${message}
				`,
			};

			await transporter.sendMail(mailOptions);

			res.status(200).json({ message: 'Mail send successful' });
		} catch (error) {
			console.error('Error send contact data:', error);
			res.status(500).json({ message: 'Server error while sending mail' });
		}
	} else {
		res.status(405).json({ message: 'Method not allowed' });
	}
}
