import './Contact.css';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
        .sendForm('service_o0xkx4r', 'template_a1x180i', form.current, {
            publicKey: '8ItWBLLyQxP4SKNJ2', // Ensure the public key is correct
        })
        .then(
            (result) => {
            console.log('SUCCESS!', result.text);
            },
            (error) => {
            console.log('FAILED...', error.text);
            }
        );
    };

    return (
        <div className="contact">
        <div className="contact-title">
            <h1>Get in touch</h1>
        </div>
        <div className="contact-section">
            <div className="talk">
            <p>
                I&apos;m currently available to take on new projects, so feel free to
                send me a message about anything you&apos;d like me to work on. You can
                contact me anytime.
            </p>
            <br /> <br />
            <p>
                <i className="fa-solid fa-envelope"></i> taheni.dziri@ensi-uma.tn
            </p>
            <br />
            <p>
                <i className="fa-solid fa-phone"></i>+216 25 664 753
            </p>
            <br />
            <p>
                <i className="fa-solid fa-location-pin"></i>Tunisia
            </p>
            </div>

            <div className="send">
            <form ref={form} onSubmit={sendEmail}>
                <label htmlFor="fname">First Name</label>
                <input
                type="text"
                id="fname"
                name="firstname"
                placeholder="Your name .."
                />

                <label htmlFor="lname">Last Name</label>
                <input
                type="text"
                id="lname"
                name="lastname"
                placeholder="Your last name .."
                />

                <label htmlFor="subject">Subject</label>
                <textarea
                name="subject"
                id="subject"
                placeholder="Write something.."
                style={{ height: '200px' }}
                ></textarea>

                <input type="submit" value="Submit" />
            </form>
            </div>
        </div>
        </div>
    );
};

export default Contact;
