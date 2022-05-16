import React from "react";
import { about, contact } from "../../portfolio";
import CallIcon from "@mui/icons-material/Call";
import "./Contact.css";
function Contact() {
  return (
    <>
      <h1 className="heading link">CONTACT</h1>
      <div className="personal-details">
        <img
          src="/images/avatar.jpg"
          alt="profile-pic"
          className="profile-pic"
        />
        <div className="details-data">
          <span className="data-title">Contact Card</span>
          <img
            src="/images/qr_linkedin.png"
            alt="QR Chip"
            className="qr-code"
          />
          <span className="data-phone">
            <CallIcon />
            &nbsp;{contact.mobile}
          </span>
          <hr className="data-hr" />
          <div className="bottom-data">
            <span className="data-name">{about.name}</span>
            <span className="data-email">{contact.email}</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
