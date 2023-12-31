import { FormEvent, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import emailjs from "emailjs-com";
import { GenericProps } from "../App";
import traductionsJSON from "../assets/Traductions.json";

interface IStatus {
  success: boolean;
  message: string;
}

export const Contact = ({ language }: GenericProps) => {
  const formInitialDetails = {
    first_name: '',
    last_name: '',
    message: '',
    phone: '',
    reply_to: ''
  }
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState(traductionsJSON.Send[language]);
  const [status, setStatus] = useState<IStatus | undefined>();

  const onFormUpdate = (category: string, value: string) => {
    setFormDetails({
      ...formDetails,
      [category]: value
    })
  }

  const handleSubmit = async (e: Event | FormEvent) => {
    e.preventDefault();
    const userID = import.meta.env.VITE_PUBLIC_KEY_EMAIL;
    setButtonText("Sending...");
    console.log(userID);
    
    const resp = await emailjs.send(import.meta.env.VITE_EMAIL_SERVICE_ID, import.meta.env.VITE_EMAIL_TEMPLATE_ID,
    formDetails
    ,userID);
    setButtonText(traductionsJSON.Send[language]);

    setFormDetails(formInitialDetails);
    if (resp.status == 200) {
      setStatus({ success: true, message: 'Message sent successfully' });
    } else {
      setStatus({ success: false, message: 'Something went wrong, please try again later.' });
    }
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us" />
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>{traductionsJSON.GetInTouch[language]}</h2>
                  <form onSubmit={(e) => {
                    handleSubmit(e)
                  }}>
                    <Row>
                      <Col size={12} sm={6} className="px-1">
                        <input type="text" value={formDetails.first_name} placeholder={traductionsJSON.FirstName[language]} onChange={(e) => onFormUpdate('first_name', e.target.value)} />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input type="text" value={formDetails.last_name} placeholder={traductionsJSON.LastName[language]} onChange={(e) => onFormUpdate('last_name', e.target.value)} />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input type="email" value={formDetails.reply_to} placeholder={traductionsJSON.EmailAddress[language]} onChange={(e) => onFormUpdate('reply_to', e.target.value)} />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input type="tel" value={formDetails.phone} placeholder={traductionsJSON.Phone[language]} onChange={(e) => onFormUpdate('phone', e.target.value)} />
                      </Col>
                      <Col size={12} className="px-1">
                        <textarea rows={6} value={formDetails.message} placeholder={traductionsJSON.Message[language]} onChange={(e) => onFormUpdate('message', e.target.value)}></textarea>
                        <button type="submit"><span>{buttonText}</span></button>
                      </Col>
                      {
                        status ? status.message &&
                          <Col>
                            <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                          </Col>
                          : null
                      }
                    </Row>
                  </form>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
