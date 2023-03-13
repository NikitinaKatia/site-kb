import React, { memo } from "react";
import { Link } from "react-router-dom";

import "./Contacts.css";

function Contacts() {
  return(
    <>
      <div className="contactsConteiner">
        <div className="contactsTextBox1">
          <p className="contactUs">Свяжитесь с нами</p>
          {/* <p className="media">Социальные сети</p> */}
        </div>
      <div className="socialMedia">
        <div className="socialMediaContainer">
          <div className="sotialMediaImgText">
            <img src='images/iconInstagram.png' alt="instagram icon" className="sotialMediaIcon" />
            <button className="sotialMediaBtn"><Link to={'https://www.instagram.com/kushai_bucket/?igshid=YmMyMTA2M2Y%3D'}>INSTAGRAM</Link></button>
          </div>
          <div className="sotialMediaImgText">
            <img src='images/iconVk.png' alt="instagram icon" className="sotialMediaIcon" />
            <button className="sotialMediaBtn"><Link to={'https://vk.com/kushai_bucket'}>VKONTAKTE</Link></button>
          </div>
          <div className="sotialMediaImgText">
            <img src='images/iconWhatsapp.png' alt="instagram icon" className="sotialMediaIcon" />
            <button className="sotialMediaBtn"><Link to={'https://api.whatsapp.com/send?phone=79518480333'}>WHAT'S APP</Link></button>
          </div>
          <div className="sotialMediaImgText">
            <img src='images/iconTelegram.png' alt="instagram icon" className="sotialMediaIcon" />
            <button className="sotialMediaBtn"><Link to={'https://t.me/+bFGbqkHqu3VmMmRi'}>TELEGRAM</Link></button>
          </div>
        </div>
      </div>
      </div>
      
    </>
  );
}

export default memo(Contacts);