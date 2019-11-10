const router = require("express").Router();
import nodemailer from 'nodemailer';
import data from './images.json';

require("dotenv").config();

router.get("/", (req, res) => {
  res.status(200).render("home");
});
router.get("/about", (req, res) => {
  res.status(200).render("about");
});

router.get("/events", (req, res) => {
  res.status(200).render("events");
});

router.get("/gallery", (req, res) => {
  res.status(200).render("gallery", {
    data
  });
});
router.get("/contact", (req, res) => {
    const {name, email, subject, message} = req.body;
    var transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: "patrickotieno39@gmail.com",
          pass: process.env.PASS
        }
      });
    var mailOptions = {
        from: "patrickotieno39@gmail.com",
        to: "patrickotieno39@gmail.com",
        subject: "NEW CONTACT",
        html: `<strong>Below are your user details</strong>`,

      };

      transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          console.log(error);
        } else {
          console.log("Email sent: " + info.response);
        }
      });
  res.status(200).render("contact");
});

router.post("/contact", (req,res)=>{
  res.status(200)
})
module.exports = router;
