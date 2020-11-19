const sgMail = require("@sendgrid/mail");

const sendgridAPIKey = process.env.SENDGRID_API_KEY;

sgMail.setApiKey(sendgridAPIKey);

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "bmovlanov@yandex.ru",
    subject: "Thanks for joining in!",
    text: `Welcome to the app, ${name}. Let me know how you get along with the app.`,
  });
};

const sendCancellationEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "bmovlanov@yandex.ru",
    subject: "Sorry to see you go!",
    text: `It is sad day for us, ${name}. Please let us know anything we could do better.`,
  });
};

module.exports = {
  sendWelcomeEmail,
  sendCancellationEmail,
};
