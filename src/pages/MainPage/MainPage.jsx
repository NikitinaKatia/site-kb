import React, { memo } from "react";

import './MainPage.css'

function MainPage() {
  
  return (
    <>
      <div className="MainPage">
        <p className="mainPageBlock1">Кушай Букет - мастерская съедобных букетов в Таганроге</p>
        <div className="mainPageBlock1Text">
          <p>Гарантируем свежесть каждого букета</p>
          <p>Отправляем фото перед вручением букета</p>
          <p>Учитываем каждый нюанс в заказе</p>
        </div>
        <div className="mainPageBlock2">
          
        </div>
    </div>
    </>
    
  );
}

export default memo(MainPage);