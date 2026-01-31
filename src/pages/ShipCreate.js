import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { Form, FormControl, FormLabel, Button } from 'react-bootstrap';
import "firebase/auth"
import '../styles/ShipCreate.css';

const ShipmentForm = () => {
    const [userData, setUserData] = useState({
        trackingNumber: '',
        recipientName: '',
        recipientAddress: '',
        recipientCity: '',
        recipientState: '',
        recipientZipCode: '',
        weight: '',
        value: ''
    });
    let name, value;
    const postUserData = (event) => {
        name = event.target.name;
        value = event.target.value;
        setUserData({ ...userData, [name]: value });
    };

    // connect with Firebase
    const submitData = async (event) => {
        event.preventDefault();
        const { trackingNumber, recipientName, recipientAddress, recipientCity, recipientState, recipientZipCode, weight, value } = userData;

        if (trackingNumber && recipientName && recipientAddress && recipientCity && recipientState && recipientZipCode && weight && value) {
            const res = await fetch('https://cmsystem-30ee3-default-rtdb.firebaseio.com/userDataRecords.json', {
                method: "POST",
                Headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    trackingNumber,
                    recipientName,
                    recipientAddress,
                    recipientCity,
                    recipientState,
                    recipientZipCode,
                    weight,
                    value
                })
            }
            );
            if (res) {
                setUserData({
                    trackingNumber: '',
                    recipientName: '',
                    recipientAddress: '',
                    recipientCity: '',
                    recipientState: '',
                    recipientZipCode: '',
                    weight: '',
                    value: ''
                })
                alert("Data Stored Successfully")
            } else {
                alert("Please fill the data properly")
            }
        } else {
            alert("Please fill the data properly")
        }
    };

    return (
        <div className="full">
            <Navbar />
            <div className="forms">
                <Form method="POST">
                    <h1>Create Shipment</h1>

                    <FormLabel for="trackingNumber" className='Titles'>Tracking Number</FormLabel>
                    <FormControl
                        className="boxes"
                        type="text"
                        id="trackingNumber"
                        placeholder="Enter tracking number"
                        value={userData.trackingNumber}
                        name="trackingNumber"
                        onChange={postUserData}
                    />

                    <FormLabel for="recipientName" className='Titles'>Recipient Name</FormLabel>
                    <FormControl
                        className="boxes"
                        type="text"
                        id="recipientName"
                        placeholder="Enter recipient name"
                        value={userData.recipientName}
                        name="recipientName"
                        onChange={postUserData}
                    />

                    <FormLabel for="recipientAddress" className='Titles'>Recipient Address</FormLabel>
                    <FormControl
                        className="boxes"
                        type="text"
                        id="recipientAddress"
                        placeholder="Enter recipient address"
                        value={userData.recipientAddress}
                        name="recipientAddress"
                        onChange={postUserData}
                    />

                    <FormLabel for="recipientCity" className='Titles'>Recipient City</FormLabel>
                    <FormControl
                        className="boxes"
                        type="text"
                        id="recipientCity"
                        placeholder="Enter recipient city"
                        value={userData.recipientCity}
                        name="recipientCity"
                        onChange={postUserData}
                    />

                    <FormLabel for="recipientState" className='Titles'>Recipient State</FormLabel>
                    <FormControl
                        className="boxes"
                        type="text"
                        id="recipientState"
                        placeholder="Enter recipient state"
                        value={userData.recipientState}
                        name="recipientState"
                        onChange={postUserData}
                    />

                    <FormLabel for="recipientZipCode" className='Titles'>Recipient Zip Code</FormLabel>
                    <FormControl
                        className="boxes"
                        type="text"
                        id="recipientZipCode"
                        placeholder="Enter recipient zip code"
                        value={userData.recipientZipCode}
                        name="recipientZipCode"
                        onChange={postUserData}
                    />

                    <FormLabel for="weight" className='Titles1'>Weight(in kg)</FormLabel>
                    <FormControl
                        className="boxes"
                        type="text"
                        id="weight"
                        placeholder="Enter weight"
                        value={userData.weight}
                        name="weight"
                        onChange={postUserData}
                    />

                    <FormLabel for="value" className='Titles1'>Value(INR)</FormLabel>
                    <FormControl
                        className="boxes"
                        type="text"
                        id="value"
                        placeholder="Enter value"
                        value={userData.value}
                        name="value"
                        onChange={postUserData}
                    />
                    <br />
                    <Button type="submit" className='buttonCol' onClick={submitData}>Create Shipment</Button>
                </Form>
            </div>
            <footer className="landing-page__footer">
                <div className="landing-page__footer-container">
                    <div className="landing-page__footer-contact">
                        <h3>Contact Us</h3>
                        <p>Email: shareyac@gmail.com</p>
                        <p>Phone: +91 7505035476</p>
                        <p>Made in INDIA</p>
                        <p>Made With ❤</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default ShipmentForm;
