import React, { useRef } from 'react';

import { Container, Typography } from '@mui/material';
import emailjs from '@emailjs/browser';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Navbar from './Components/Navbar';
import { useLocation } from 'react-router-dom';

const ContactUS = () => {
  const location = useLocation();
  console.log(location.state)


  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_w5beqmf', 
      'template_bjfj3rl', 
      form.current, 
      'RC4FX5KzZfIt9I7wi' 
    )

    .then(
      (response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Email sent successfully!'); 
      },
      (error) => {
        console.log('FAILED...', error.text);
        alert('An error occurred while sending the email. Please try again.'); 
      }
    );

  };

  return (
    <>

      <Navbar/>
      <Container sx={{
        height: 150, 
        backgroundColor: 'rgba(23, 44, 87, 1)',
        marginTop: '5vh',
        borderRadius: '10px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <Typography sx={{
          fontSize: '2rem',
          fontWeight: '2rem',
          color: 'white',
          fontFamily: 'Poppins',
        }}>
          Send Invite Request For Hackathon
        </Typography>
      </Container>
      <div className="container mt-5">  
        <form ref={form} onSubmit={sendEmail} className="row">
          <div className="col-md-6 mb-3">
            <label htmlFor="user_name" className="form-label">
              Your Name
            </label>
            <input
              type="text"
              name="user_name"
              required
              className="form-control"
              id="user_name"
            />
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="user_email" className="form-label">
              Your Email
            </label>
            <input
              type="email"
              name="user_email"
              required
              className="form-control"
              id="user_email"
            />
          </div>
          <div className="col-md-12 mb-3">
            <label htmlFor="to_email" className="form-label ">
              Email to (Developer)
            </label>
            <input
              type="password"
              name="to_email"
              required
              className="form-control "
              id="to_email"
              value={location.state?.developerEmail || ''}
              readOnly
            />
          </div>
          <div className="col-md-12 mb-3">
            <label htmlFor="hackathon_name" className="form-label">
              Hackathon Name
            </label>
            <input
              type="text"
              name="hackathon_name"
              required
              className="form-control"
              id="hackathon_name"
            />
          </div>
          <div className="col-md-12 mb-3">
            <label htmlFor="message" className="form-label">
              Message (e.g., Enter your experience)
            </label>
            <textarea
              name="message"
              required
              className="form-control"
              id="message"
            />
          </div>
          <div className="col-md-12 d-flex justify-content-center">
            <input type="submit" value="Send" className="btn btn-primary" style={{ width: 400, height: 45 }} />
          </div>
        </form>
      </div>

    </>
  );
};

export default ContactUS;
