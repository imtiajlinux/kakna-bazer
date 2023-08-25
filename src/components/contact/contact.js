import "./contactStyle.css";
import React, { useState } from "react";

const Contact = () => {
  const [data, setdata] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
  });
  const hendelchange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setdata({ ...data, [name]: value });
  };
  const handelsubmit = (e) => {
    e.preventDefault();
    if (
      data.name === "" ||
      data.email === "" ||
      data.number === "" ||
      data.message === ""
    ) {
      alert("plz fill them all");
    } else {
      const form = e.target;
      form.action = "https://formspree.io/f/mzblraoj";
      form.submit();
    }
  };

  return (
    <div className="scale-up-ver-center contact-container ">
      <div className="contact-form">
        <form action="" method="post" onSubmit={handelsubmit}>
          <h1>
            contact <span>here</span>
          </h1>
          <input
            type="text"
            name="name"
            onChange={hendelchange}
            value={data.name}
            placeholder="foysal imtiaj...."
          />
          <input
            type="email"
            name="email"
            onChange={hendelchange}
            value={data.email}
            placeholder="exam@mail.com"
          />
          <input
            type="number"
            name="number"
            onChange={hendelchange}
            value={data.number}
            placeholder="+8801777777777"
          />

          <textarea
            name="message"
            cols="30"
            rows="10"
            onChange={hendelchange}
            value={data.message}
            placeholder="type your message....."
          ></textarea>
          <button type="submit">submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
