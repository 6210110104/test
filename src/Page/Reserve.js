import React from "react";

import { Link } from "react-router-dom";


function Reserve(){
    return (
        <div>
            <nav>
        <ul>
          <li>
            <Link to="/home">หน้าแรก</Link>
          </li>
          <li>
            <Link to="/">จองห้อง</Link>
          </li>
          <li>
            <Link to="/status">สถานะการจอง</Link>
          </li>
          <li>
            <Link to="/Input">ออกจากระบบ</Link>
          </li>
        </ul>
      </nav>
            <h1>จองห้องเรียน</h1>
        </div>
    )
}

export default Reserve;
