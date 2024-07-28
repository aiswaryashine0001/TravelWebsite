import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            if (response.ok) {
                alert('Message sent successfully!');
                setFormData({
                    firstName: '',
                    lastName: '',
                    email: '',
                    phone: '',
                    message: ''
                });
            } else {
                const errorData = await response.json();
                alert('Failed to send message: ' + errorData.message);
            }
        } catch (error) {
            alert('Error: ' + error.message);
        }
    };

    return (
        <div className="contact-container">
            <h1>Contact Us</h1>
            <form className="contact-form" onSubmit={handleSubmit}>
                <div className="input-group">
                    <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        placeholder="First Name"
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        placeholder="Last Name"
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="input-group">
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        placeholder="Email"
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        placeholder="Phone Number"
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="input-group">
                    <textarea
                        name="message"
                        value={formData.message}
                        placeholder="Your Message"
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit">Send Message</button>
            </form>
        </div>
    );
};

export default Contact;
