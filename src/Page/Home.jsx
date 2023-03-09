import React from "react";

import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">หน้าแรก</Link>
          </li>
          <li>
            <Link to="/reserve">จองห้อง</Link>
          </li>
          <li>
            <Link to="/status">สถานะการจอง</Link>
          </li>
          <li>
            <Link to="/Input">ออกจากระบบ</Link>
          </li>
        </ul>
      </nav>
      <h1>หน้าแรก</h1>
    </div>
  );
}

export default Home;
