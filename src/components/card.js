import React from "react";
import '../styles/Card.css'
const Card = ({ trackingNumber, recipientName, recipientAddress, recipientCity, recipientState, recipientZipCode, weight, value }) => {
    return (
        <div className="card">
            <div className="card-header">
                <h2>Tracking Number: {trackingNumber}</h2>
            </div>
            <div className="card-body">
                <ul>
                    <li>Recipient Name: {recipientName}</li>
                    <li>Recipient Address: {recipientAddress}</li>
                    <li>Recipient City: {recipientCity}</li>
                    <li>Recipient State: {recipientState}</li>
                    <li>Recipient Zip Code: {recipientZipCode}</li>
                    <li>Weight: {weight}</li>
                    <li>Value: {value}</li>
                </ul>
                <br />
            </div>
        </div>
    );
};

export default Card;

