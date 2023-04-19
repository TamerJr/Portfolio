import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <section className="Footer">
        <h2>Contact Me</h2>
      <form
        id="contactform"
        action="https://formsubmit.io/send/294c621e-c5ad-48e0-bd78-56183347ffb9"
        method="POST"
      >
        <p>
          <label>Name </label>
          <input
            name="name"
            type="text"
            id="name"
            placeholder="Enter Your Name"
          />
        </p>
        <p>
          <label>Email</label>
          <input
            name="email"
            type="email"
            id="email"
            placeholder="Enter Email to contact"
          />
        </p>
        <p>
          <label>Message</label>
          <textarea
            name="comment"
            id="comment"
            rows="3"
            placeholder="Enter Your Message"
          ></textarea>
        </p>

        <input name="_formsubmit_id" type="text" style={{ display: "none" }} />

        <input value="Submit" id="button" type="submit" />
      </form>
      <ul>

      </ul>
    </section>
  );
};

export default Footer;
