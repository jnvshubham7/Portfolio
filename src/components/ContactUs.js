import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMapMarkerAlt, faPhone, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './ContactUs.css';




const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');
  const [showAlert, setShowAlert] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://contact-form-backend-jnvshubham7-shubham-kumar-bhoktas-projects.vercel.app/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      });

      if (response.ok) {
        setStatus('Message sent successfully');
        setName('');
        setEmail('');
        setMessage('');
      } else {
        const errorMessage = await response.text();
        setStatus('Failed to send message');
        console.error('Error message:', errorMessage);
      }
    } catch (error) {
      setStatus('Failed to send message');
      console.error('Error:', error);
    }

    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 3000);
  };



  

  return (
    <div className="contact-us-container">
      <h1 className="contact-us-heading">Contact Us</h1>
      <p>
        Feel free to reach out to me via email, connect with me on WhatsApp, or use the contact form to send me a message to discuss potential collaborations or opportunities.
      </p>
      <p>
        I'm always open to exciting projects and new connections within the tech and development community. Looking forward to hearing from you!
      </p>
      <div className="contact-cards">
        <div className="contact-card">
          <h2>Send a Message</h2>
          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <textarea
              placeholder="Please describe your needs here..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
            <button type="submit" className="send-message-button">
              <FontAwesomeIcon icon={faPaperPlane} />
              SEND MESSAGE
              {showAlert && (
                <span className={`alert ${status.includes('successfully') ? 'alert-success' : 'alert-error'}`}>
                  {status}
                </span>
              )}
            </button>
          </form>
        </div>
        <div className="contact-card">
          <h2>Contact Information</h2>
          <div className="contact-info">
            <p>
              <FontAwesomeIcon icon={faMapMarkerAlt} className="icon" />
              <strong> Address:</strong> Madhupur, Deoghar, Jharkhand, India (815353)
            </p>
            <p>
              <FontAwesomeIcon icon={faPhone} className="icon" />
              <strong> Phone:</strong> +91 7654889915
            </p>
            <p>
              <FontAwesomeIcon icon={faEnvelope} className="icon" />
              <strong> Email:</strong> <a href="mailto:jnvshubham1@gmail.com">jnvshubham1@gmail.com</a>
            </p>
            <p>
              <FontAwesomeIcon icon={faWhatsapp} className="icon" />
              <strong> WhatsApp:</strong> <a href="https://wa.me/+917654889915" target="_blank" rel="noopener noreferrer">Chat on WhatsApp</a>
            </p>
            <p>
              <FontAwesomeIcon icon={faLinkedin} className="icon" />
              <strong> LinkedIn:</strong> <a href="https://www.linkedin.com/in/shubham-kumar-bhokta-97113116b/" target="_blank" rel="noopener noreferrer">Connect on LinkedIn</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
