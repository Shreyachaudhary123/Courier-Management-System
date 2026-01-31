import React from 'react';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import { pdfjs } from 'react-pdf';
import myPDF from "../pages/Report.pdf"
import '../styles/PDFviewer.css'
import Navbar from '../components/Navbar'
const PDFViewer = () => {
    return (
        <div>
            <Navbar />
            <object data="https://drive.google.com/file/d/1v7geIPrEDdAIsJVph49vN_0QvvD0gS2-/view?usp=drive_link" type="application/pdf" width="100%" height="100%">
                <p>Alternative text - include a link <a href="http://africau.edu/images/default/sample.pdf">to the PDF!</a></p>
            </object>
        </div>
    );
};

export default PDFViewer;