import React from "react";

import { Link } from "react-router-dom";

function Status() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/home">หน้าแรก</Link>
          </li>
          <li>
            <Link to="/reserve">จองห้อง</Link>
          </li>
          <li>
            <Link to="/">สถานะการจอง</Link>
          </li>
          <li>
            <Link to="/Input">ออกจากระบบ</Link>
          </li>
        </ul>
      </nav>
      <h1>บันทึกจองห้องเรียน</h1>
    </div>
  );
}

export default Status;
