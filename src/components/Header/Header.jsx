import React, { memo, useState } from "react";
import { NavLink } from "react-router-dom";

import './Header.css'

function Header() {
  const [show, setShow] = useState(false);
  
  return (
    <div className="header">
        <NavLink to="/">Главная</NavLink>
        {show && 
          <ul className="subMenu">
            <li className="subMenuItem"><NavLink to="/driedFruits">Из сухофруктов</NavLink></li>
            <li className="subMenuItem"><NavLink to="/fruits">Фруктовые</NavLink></li>
            <li className="subMenuItem"><NavLink to="/man">Мужские</NavLink></li>
            <li className="subMenuItem"><NavLink to="/sweet">Сладкие</NavLink></li>
          </ul>
        }
        <p className="assort" onClick={() => setShow(!show)}>Ассортимент</p>
        <NavLink to="/contacts">Контакты</NavLink>
    </div>
  );
}

export default memo(Header);