const functions = require('firebase-functions');
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');
admin.initializeApp(functions.config().firebase);

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions


exports.sendEmail = functions.https.onCall(async (emailData, context) => {
	console.log('> sendEmail called with: ' + JSON.stringify(emailData, null, 4));
	const { message, name, senderEmail, receiptEmail } = emailData;
	const email = functions.config().email;


	const mailTransport = nodemailer.createTransport({
		service: 'gmail',
		auth: {
            user: email.address,
            pass: email.password
		}
	});

	const mailOptions = {
		from: `${name} <${senderEmail}>`,
		to: receiptEmail,
		subject: `${name} filled out a contact form at Holistic Web`,
		text: message
	};

	await mailTransport.sendMail(mailOptions);
	return 'success'
});