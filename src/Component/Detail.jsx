import React from "react";

function Detail() {
    return (
        <div className="Detail">
            <p className="Head_Detail" >รายละเอียดห้องเรียน</p>
            <div className="Size_S">
                <img className="Image_S" src="https://sv1.picz.in.th/images/2023/03/08/eQE5Y8.jpg" alt="" />
                <p className="Text_S">ห้องเรียนขนาดเล็ก Size S  สามารถเรียนได้ 5-6 คน ราคาชั่วโมงละ 200 บาท</p>

            </div>
            <div className="Size_M">
                <img className="Image_M" src="https://sv1.picz.in.th/images/2023/03/08/eQE2Xl.jpg" alt="" />
                <p className="Text_M">ห้องเรียนขนาดกลาง Size M  สามารถเรียนได้ 8-10 คน ราคาชั่วโมงละ 300 บาท</p>

            </div>
            <div className="Size_L">
                <img className="Image_L" src="https://sv1.picz.in.th/images/2023/03/08/eQEXeS.jpg" alt="" />
                <p className="Text_L">ห้องเรียนขนาดใหญ่ Size  L สามารถเรียนได้ 12-15 คน ราคาชั่วโมงละ 400 บาท</p>

            </div>
        </div>

    );
}

export default Detail;