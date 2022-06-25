import React, { useState } from "react";
import { about, contact } from "../../portfolio";
import { motion } from "framer-motion";
import { Tooltip } from "@mui/material";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import "./Contact.css";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
function Contact() {
  const [copyText, setCopyText] = useState("Click to copy");
  const copyField = (data) => {
    navigator.clipboard.writeText(data);
    setCopyText("Copied");
  };
  return (
    <motion.div
      initial={window.innerWidth>850?{width: 0}:{opacity: 0}}
      animate={window.innerWidth>850?{width: '100%'}:{opacity:1}}
      exit={window.innerWidth>850?{x: Window.innerWidth}:{opacity:0}}
    >
      <h1 className="heading link">CONTACT</h1>
      <div className="personal-details">
        <LazyLoadImage
          effect="blur"
          src="/images/avatar.jpg"
          alt="profile-pic"
          className="profile-pic"
        />
        <div className="details-data">
          <span className="data-title">Contact Card</span>
          <LazyLoadImage
            effect="blur"
            src="/images/qr_linkedin.png"
            alt="QR Chip"
            className="qr-code"
          />
          <Tooltip title={copyText} placement="right">
            <span
              className="data-phone"
              onMouseOut={() => {
                setCopyText("Click to copy");
              }}
              onClick={() => {
                copyField(contact.mobile);
              }}
            >
              <FontAwesomeIcon icon={faPhone} />
              &nbsp;{contact.mobile}
            </span>
          </Tooltip>
          <hr className="data-hr" />
          <div className="bottom-data">
            <span className="data-name">{about.name}</span>
            <Tooltip title={copyText} placement="right">
              <span
                className="data-email"
                onMouseOut={() => {
                  setCopyText("Click to copy");
                }}
                onClick={() => {
                  copyField(contact.email);
                }}
              >
                {contact.email}
              </span>
            </Tooltip>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Contact;
