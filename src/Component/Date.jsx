import React from "react";

function Date() {
    return (
<div className="Date" >
        <input itemType="select" className="Day" placeholder="วันที่"/>
        <input itemType="select" className="Time" placeholder="เวลา"/>
        <input itemType="select" className="Classroom" placeholder="ห้องเรียน" />
        <button className="Re">จอง</button>
    
</div>
    );

}

export default Date;