import './Contact.css';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        subject: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const sendEmail = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        emailjs
            .sendForm('service_o0xkx4r', 'template_a1x180i', form.current, {
                publicKey: '8ItWBLLyQxP4SKNJ2',
            })
            .then(
                (result) => {
                    console.log('SUCCESS!', result.text);
                    setSubmitStatus('success');
                    setFormData({
                        firstname: '',
                        lastname: '',
                        email: '',
                        subject: ''
                    });
                },
                (error) => {
                    console.log('FAILED...', error.text);
                    setSubmitStatus('error');
                }
            )
            .finally(() => {
                setIsSubmitting(false);
                setTimeout(() => setSubmitStatus(null), 5000);
            });
    };

    const contactInfo = [
        {
        
            label: 'Email',
            value: 'taheni.dziri@ensi-uma.tn',
            link: 'mailto:taheni.dziri@ensi-uma.tn'
        },
        {
            icon: '',
            label: 'Phone',
            value: '+216 25 664 753',
            link: 'tel:+21625664753'
        },
        {
            icon: '',
            label: 'Location',
            value: 'Tunisia',
            link: null
        }
    ];

    return (
        <section className="contact" id="contact">
            <div className="contact-container">
                <div className="contact-header">
                    <h1 className="contact-title">Get In Touch</h1>
                    <div className="title-underline"></div>
                    <p className="contact-subtitle">
                        Let's discuss your next project !
                    </p>
                </div>

                <div className="contact-content">
                    {/* Contact Information */}
                    <div className="contact-info">
                        <div className="info-card">
                            <h2 className="info-title">Let's Talk</h2>
                            <p className="info-description">
                                I'm currently available to take on new projects and collaborate 
                                on exciting opportunities. Whether you have a project in mind, 
                                want to discuss potential collaborations, or just want to say hello, 
                                I'd love to hear from you!
                            </p>

                            <div className="contact-details">
                                {contactInfo.map((item, index) => (
                                    <div key={index} className="contact-item">
                                        <div className="contact-text">
                                            <span className="contact-label">{item.label}</span>
                                            {item.link ? (
                                                <a 
                                                    href={item.link} 
                                                    className="contact-value"
                                                >
                                                    {item.value}
                                                </a>
                                            ) : (
                                                <span className="contact-value">{item.value}</span>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="availability">
                                <div className="availability-indicator"></div>
                                <span>Available for new projects</span>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="contact-form-section">
                        <form ref={form} onSubmit={sendEmail} className="contact-form">
                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="firstname" className="form-label">
                                        First Name *
                                    </label>
                                    <input
                                        type="text"
                                        id="firstname"
                                        name="firstname"
                                        value={formData.firstname}
                                        onChange={handleInputChange}
                                        className="form-input"
                                        placeholder="Enter your first name"
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="lastname" className="form-label">
                                        Last Name *
                                    </label>
                                    <input
                                        type="text"
                                        id="lastname"
                                        name="lastname"
                                        value={formData.lastname}
                                        onChange={handleInputChange}
                                        className="form-input"
                                        placeholder="Enter your last name"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="email" className="form-label">
                                    Email Address *
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className="form-input"
                                    placeholder="Enter your email address"
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="subject" className="form-label">
                                    Message *
                                </label>
                                <textarea
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleInputChange}
                                    className="form-textarea"
                                    placeholder="Tell me about your project or just say hello..."
                                    rows="6"
                                    required
                                ></textarea>
                            </div>

                            <button 
                                type="submit" 
                                className={`submit-btn ${isSubmitting ? 'submitting' : ''}`}
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? (
                                    <>
                                        <div className="spinner"></div>
                                        Sending...
                                    </>
                                ) : (
                                    'Send Message'
                                )}
                            </button>

                            {submitStatus && (
                                <div className={`submit-status ${submitStatus}`}>
                                    {submitStatus === 'success' 
                                        ? '✅ Message sent successfully! I\'ll get back to you soon.'
                                        : '❌ Failed to send message. Please try again.'
                                    }
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;