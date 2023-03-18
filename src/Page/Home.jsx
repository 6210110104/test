import React from "react";

import { Link } from "react-router-dom";

function Home() {
  return (
      <div className="Home">
          <img 
          className='Img'
              src="https://menhouse.net/img/ib/kKQhnfkBx6.png" 
              alt="" 
          />
          <header> Room With We</header>
          <h1><a href="./Input">register/login</a></h1>
          <ul>
              <h3>MENU</h3>
              <li><a class="active" href="./home">หน้าแรก</a></li>
              <li><a href="./reserve">จองห้อง</a></li>
              <li><a href="#contact">บันทึกการจอง</a></li>
              <li><a href="./Input">log out</a></li>
              <img className='pic' src="https://sv1.picz.in.th/images/2023/03/06/ecX3SI.png" alt=""/>
          </ul>
          <h2>ระบบจองห้องเรียน</h2>
          <h4>ห้องเรียนขนาดเล็ก Size S</h4>
          <h5>ห้องเรียนขนาดกลาง Size M</h5>
          <h6>ห้องเรียนขนาดใหญ่ Size L</h6>
          <img className='Img1' src="https://menhouse.net/img/ib/kKQhnfkBx6.png" alt=""/>
          <img className='sizes' src="https://sv1.picz.in.th/images/2023/03/08/eQE5Y8.jpg" alt=""/>
          <img className='sizem' src="https://sv1.picz.in.th/images/2023/03/08/eQE2Xl.jpg" alt=""/>
          <img className='sizel' src="https://sv1.picz.in.th/images/2023/03/08/eQEXeS.jpg" alt=""/>

      </div>


  );

}


export default Home;
