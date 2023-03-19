import React, { memo } from "react";
import { Link } from "react-router-dom";

import "./Contacts.css";

function Contacts() {
  return(
    <>
      <div className="contactsConteiner">
      <div className="socialMedia">
        <p className="contactUs">Свяжитесь с нами</p>
        <div className="socialMediaContainer">
          <div className="sotialMediaImgText">
            <img src='images/iconInstagram.png' alt="instagram icon" className="sotialMediaIcon" />
            <form action="https://instagram.com/kushai_bucket?igshid=YmMyMTA2M2Y=" target="_blank">
              <button className="sotialMediaBtn">INSTAGRAM</button>
            </form>
          </div>
          <div className="sotialMediaImgText">
            <img src='images/iconVk.png' alt="instagram icon" className="sotialMediaIcon" />
            <form action="https://vk.com/kushai_bucket" target="_blank">
              <button className="sotialMediaBtn">VKONTAKTE</button>
            </form>
          </div>
          <div className="sotialMediaImgText">
            <img src='images/iconWhatsapp.png' alt="instagram icon" className="sotialMediaIcon" />
            <form action="https://api.whatsapp.com/send?phone=79518480333" target="_blank">
              <button className="sotialMediaBtn">WHAT'S APP</button>
            </form>
          </div>
          <div className="sotialMediaImgText">
            <img src='images/iconTelegram.png' alt="instagram icon" className="sotialMediaIcon" />
            <form action="https://t.me/+bFGbqkHqu3VmMmRi" target="_blank">
              <button className="sotialMediaBtn">TELEGRAM</button>
            </form>
          </div>
        </div>
      </div>
      </div>
      
    </>
  );
}

export default memo(Contacts);