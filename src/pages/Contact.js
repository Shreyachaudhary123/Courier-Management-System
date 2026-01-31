import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import '../styles/Contact.css';
import {
    MDBInput,
    MDBCheckbox,
    MDBBtn
} from 'mdb-react-ui-kit';

export default function App() {
    const [userData, setUserData] = useState({
        name: '',
        email: '',
        message: ''
    });
    let name, value;
    const postUserData = (event) => {
        name = event.target.name;
        value = event.target.value;
        setUserData({ ...userData, [name]: value });
    }
    const submitData = async (event) => {
        event.preventDefault();
        const { name, email, message } = userData;
        if (name && email && message) {
            const res = await fetch('https://cmsystem-30ee3-default-rtdb.firebaseio.com/contactDetails.json', {
                method: "POST",
                Headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name,
                    email,
                    message
                })
            }
            );
            if (res) {
                setUserData({
                    name: '',
                    email: '',
                    message: ''
                })
                alert("Your Feedback/Query would be shortly addressed by our team, keep an eye on your mail");
            } else {
                alert("Please fill the data properly");
            }
        } else {
            alert("Please fill the data properly");
        }
    }
    return (
        <div className="full">
            <Navbar />
            <form className="contactForm" method="POST">
                <MDBInput id='form4Example1' wrapperClass='mb-4' value={userData.name} name="name" onChange={postUserData} label='Name' />
                <MDBInput type='email' id='form4Example2' wrapperClass='mb-4' value={userData.email} name="email" onChange={postUserData} label='Email address' />
                <MDBInput wrapperClass='mb-4' textarea id='form4Example3' rows={4} value={userData.message} name="message" onChange={postUserData} label='Message' />

                <MDBCheckbox wrapperClass='d-flex justify-content-center mb-4' id='form4Example4' label='I agree to be contacted by the Support team' />

                <MDBBtn type='submit' onClick={submitData} className='mb-4' block>
                    Sign in
                </MDBBtn>
            </form>
            <footer className="landing-page__footer">
                <div className="landing-page__footer-container">
                    <div className="landing-page__footer-contact">
                        <h3>Contact Us</h3>
                        <p>Email: shareyac@gmail.com</p>
                        <p>Phone: +91 8273551453</p>
                        <p>Made in INDIA</p>
                        <p>Made With ❤</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}