import React from "react";

import { Link } from "react-router-dom";

import Detail from "../Component/Detail";
import Date from "../Component/Date";

function Reserve() {
  return (
    <div className="Reserve">
        <nav>
          <ul className="Bar">
            <li className="BarHome">
              <Link to="/home">หน้าแรก</Link>
            </li>
            <li className="BarReserve" >
              <Link to="/">จองห้อง</Link>
            </li>
            <li className="BarStatus">
              <Link to="/status">สถานะการจอง</Link>
            </li>
            <li className="BarLogout">
              <Link to="/Input">ออกจากระบบ</Link>
            </li>
          </ul>
        </nav>
        <header>
        จองห้องเรียน
      </header>
      <div>
        <Date />
      </div>
      <div>
        <Detail />
      </div>
    </div>
  );
}

export default Reserve;
