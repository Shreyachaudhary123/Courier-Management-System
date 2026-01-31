import React, { useEffect, useState } from "react";
import Card from "../components/card";
import { ref, onValue } from "firebase/database";
import { database } from "./firebase";
import Navbar from '../components/Navbar';
import '../styles/ShipCreate.css';
const ShipTrack = () => {
    const [shipmentData, setShipmentData] = useState([]);

    useEffect(() => {
        const userDataRef = ref(database, "userDataRecords");

        onValue(userDataRef, (snapshot) => {
            const data = snapshot.val();
            if (data) {
                const shipmentDataArray = Object.values(data);
                setShipmentData(shipmentDataArray);
            }
        });
    }, []);

    return (
        <div className="full">
            <Navbar />
            <h1 className="topic">Shipment Tracking</h1>
            <div className="Cards">
                {shipmentData.length > 0 ? (
                    shipmentData.map((shipment) => (
                        <Card
                            key={shipment.trackingNumber}
                            className="Card"
                            trackingNumber={shipment.trackingNumber}
                            recipientName={shipment.recipientName}
                            recipientAddress={shipment.recipientAddress}
                            recipientCity={shipment.recipientCity}
                            recipientState={shipment.recipientState}
                            recipientZipCode={shipment.recipientZipCode}
                            weight={shipment.weight}
                            value={shipment.value}
                        />
                    ))
                ) : (
                    <p>Loading data...</p>
                )}
            </div>
            <br />
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

export default ShipTrack;
