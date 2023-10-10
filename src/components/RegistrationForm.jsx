import React from "react";



const  RegistrationForm=()=> {
    function handleSubmit(e){
        let firstname=e.target.fname.value
        let lastname=e.target.lname.value
        let username=e.target.user_name.value
        let password=e.target.pass.value
        console.log(firstname,lastname,username,password)
        console.log(e)
        e.preventDefault()
    }
    


  return (
    <>
    <form className="reg-form" onSubmit={handleSubmit}>
        <div className="hel">
        <div>
            <input type="text" placeholder="firstname" name="fname"/>
        </div>
        <div>
            <input type="text" placeholder="lastname" name="lname"/>
        </div>
        <div>
            <input type="text" placeholder="uesrname" name="user_name"/>
        </div>
        <div>
            <input type="password" placeholder="password" name="pass"/>
        </div>
        <div>
            <button className="reg-btn" type="submit">Register</button>
        </div>
        </div>


    </form>
    
    </>
   
  )
}

export default RegistrationForm