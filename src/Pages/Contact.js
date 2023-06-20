import React from "react";

const Contact = () => {
  return (
    <>
      <section id="contact">
        <h2>Contact me</h2>
        <form action="mailto:alexanderestrella23@gmail.com" method="POST">
          <input
            type="text"
            id="name"
            placeholder="YOUR NAME"
            required
            minLength="2"
            maxLength="30"
            size="30"
          />
          <input
            type="email"
            id="email"
            placeholder="YOUR EMAIL"
            size="30"
            required
          />
          <textarea id="story" name="story" rows="5" cols="33"></textarea>
          <button className="btn btn-primary">Send</button>
        </form>
        <a id="top" href="#home">
          back to top
        </a>
      </section>
    </>
  );
};

export default Contact;
