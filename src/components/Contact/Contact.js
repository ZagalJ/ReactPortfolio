import React from "react";
import "./Contact.css";
import {useForm, ValidationError} from "react";
import {validateEmail} from "../../utils/helpers"
import { Container, Form, Section } from "react-bootstrap";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";



function Contact () {
    return (
        <section id="contact">
        <div className="row section-head">
           <div className="contact-container">
              <h1 className="contact-text">
                 Please feel free to contact me
              </h1>
           </div>
        </div>
        <Form id="contact-form">
           <div className="contact-title">
              <label htmlFor="name">Name *</label>
              <input required type="text" className="form-control" />
           </div>
           <div className="contact-title">
              <label htmlFor="exampleInputEmail1">Email address *</label>
              <input required type="email" className="form-control" aria-describedby="emailHelp" />
           </div>
           <div className="contact-title">
              <label htmlFor="exampleInputSubject">Subject *</label>
              <input required type="text" className="form-control" aria-describedby="subjectHelp" />
           </div>
           <div className="contact-title">
              <label htmlFor="message">Message *</label>
              <textarea required className="form-control" rows="5"></textarea>
           </div>
           <button type="submit" className="contact-submit">Submit</button>
           <span></span>
           <span></span>
        </Form>
        <ul className="icons">
                       <li className="social-icons">
                           <a href="https://github.com/ZagalJ"
                           target="_blank">
                               <AiFillGithub></AiFillGithub>
                           </a>
                       </li>
                       <li className="social-icons">
                           <a href="https://www.linkedin.com/in/jonathan-zagal-893946165/"
                           target="_blank">
                               <AiFillLinkedin></AiFillLinkedin>
                           </a>
                       </li>
                   </ul>
     </section>
        );
};

export default Contact;