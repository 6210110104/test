import React,{useEffect} from "react";

function Input( props ) {

const handleInputUserName = (event)=>{
    props.setUsername(event.target.value)
}

return(
    <div className="Input">
        <div className="Input__header">Login</div>
        <input className="Input__username" type="text" placeholder="Username" onChange={(e)=>handleInputUserName(e)}/>
        <input className="Input__password" type="text" placeholder="Password"/>
        <button className="Login">เข้าสู่ระบบ</button>
    </div>
    

)
}

export default Input;