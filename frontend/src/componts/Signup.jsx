import React, { useState } from 'react'
import "./Signup.css";

const Signup = () => {
    const[userDetail,setUserDetail] = useState({
        name:"",
        email:"",
        password:""
    })

    function handleInput(event){
        console.log(event.target.value);
        setUserDetail({...userDetail,[event.target.name]:event.target.value});
    }

    async function handleSubmit(){
        if(userDetail.name == ""){
            alert("Please enter your name");
            return;
        }

        if(userDetail.email == ""){
            alert("Please enter your email");
            return;
        }

        if(userDetail.password == ""){
            alert("Please enter password");
            return;
        }
        try {
            const data = await axios.post("http://localhost:8080/user/signup")
            console.log(data);
            alert("Signup Successfull");
        } catch (error) {
            console.log(error);
            alert("Something went wrong");
        }
    }


  return (
    <div className='regis-box'>
        <form action="" onSubmit={handleSubmit}>
            <label htmlFor="">Name</label>
            <input type="text" name='name' placeholder='Enter name...' onChange={handleInput}/>
            <label htmlFor="">Email</label>
            <input type="email" name='email' placeholder='Enter email...' onChange={handleInput}/>
            <label htmlFor="">password</label>
            <input type="text" name='password' placeholder='Enter password' onChange={handleInput}/>
            <input type="Submit" />
        </form>
    </div>
  )
}

export default Signup