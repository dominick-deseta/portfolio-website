import React from 'react';
import './../index.css'
import './PDF.css'
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleLeft, faDownload } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const PdfPreview = () => {
  const pdfUrl = process.env.PUBLIC_URL + '/resume.pdf';

  return (
    <div className='PDF-frame'>
      <iframe src={pdfUrl} width="100%" height="80%"/>
      <div className="button-box">
        <Link to="/">
            <motion.button whileHover={{scale:1.1}} class="back__button">
                <FontAwesomeIcon className="back__button-icon" icon={faCircleLeft} />
                <span className="back__button-text">Return to Main Page</span>
            </motion.button>
        </Link>
        <a href={pdfUrl} download="Dominick-DeSeta-Resume.pdf">
            <motion.button whileHover={{scale:1.1}} class="PDF__button">
                <FontAwesomeIcon className="PDF__button-icon" icon={faDownload} />
                <span className="PDF__button-text">Download as PDF</span>
            </motion.button>
        </a>
      </div>
    </div>
  );
};

export default PdfPreview;