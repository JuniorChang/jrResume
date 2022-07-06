import React from "react";
import {
  faAt,
  faEnvelope,
  faSquarePhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Form, Button, FormControl } from "react-bootstrap";
import emailjs from "@emailjs/browser";

const sendEmail = (e) => {
  e.preventDefault();

  emailjs
    .sendForm(
      "service_j2yfi0o",
      "template_wbcxwdc",
      e.target,
      "D0YOMFtf6BKpAzngT"
    )
    .then(
      (result) => {
        console.log(result.text);
        alert("Message Sent Successfully");
      },
      (error) => {
        console.log(error.text);
      }
    );
  e.target.reset();
};

const Contact = () => {
  return (
    <div className="flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover custom-img">
      {/* contact form */}
      <div className="z-[2]">
        {/* Icons Start */}
        {/* <div className=' grid grid-cols-4 gap-1 ml-10 '>
                    <FontAwesomeIcon icon={faEnvelope} size='3x' className='-rotate-12 fas col-start-2  ' />
                    <FontAwesomeIcon icon={faAt} size='3x' className='fas  ml-5' />
                    <FontAwesomeIcon icon={faSquarePhone} size='3x' className=' rotate-12 fas ml-6' />
                </div> */}
        {/* Icons End */}

        <div className="">
          <p className="font-bold text-center  text-2xl">Contact Me</p>
        </div>

        {/* Form Container Start*/}
        <div className="flex mt-10">
          {/* Form Label Start */}
          <div className="flex flex-col items-end">
            <p className="mr-5">Name:</p>
            <p className="mr-5 mt-3">Email Address:</p>
            <p className="mr-5 mt-3">Message: </p>
          </div>
          {/* Form Label End */}

          {/* Form Input Start */}
          <div>
            <h2 align="center"> </h2>
            <Form onSubmit={sendEmail}>
              <Form.Group className="mb-3 ">
                <Form.Control type="text" placeholder="Full Name" name="name" />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  name="email"
                />
                <Form.Text className="text-muted"></Form.Text>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Control
                  as="textarea"
                  rows={5}
                  placeholder="Your Message to me."
                  name="message"
                />
              </Form.Group>
              <Button
                variant="primary"
                type="submit"
                className="bg-[#25D366] border-double border-4
                border-black
                rounded mt-5"
              >
                <b className="p-3">Send Message</b>
              </Button>
            </Form>
          </div>
          {/* Form Input End */}
        </div>
        {/* Form Container End */}
      </div>
    </div>
  );
};

// border-indigo-600

export default Contact;
