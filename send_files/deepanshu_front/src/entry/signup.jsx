import React,{useState} from "react";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import axios from "axios";
import Main from "./main";
import { Link, useNavigate } from "react-router-dom";
import { signupservice } from "../services/user";
import Signnav from "./signnav";
import email from "../images/email.png";
import signup from "../images/signup-image.jpg";
import key from "../images/key.png";
import style from "../css/style.module.css";


function Sign(){

  const [obj,updateobj]=useState({email:"",pwd:"",con_pwd:"",type:"type"});

  const nagivate=useNavigate();
  const update=(event)=>{
      var {name,value}=event.target;

      updateobj({...obj,[name]:value});
  }

  function check(){
        if(obj.type==="type")
        return false;
        if(obj.email==="")
        return false;
        if(obj.pwd==="")
        return false;
  }

  // const signupuserwithquery=async()=>{

  //     var url="http://localhost:2002/user/signup-user-post";
  //     var resp=await axios.post(url,obj);
  //     if(resp.data.status)
  //     {
  //       nagivate("/");
  //     }
  //     else
  //     {
  //       alert(resp.data.message);
  //     }
  // }

  const signupuserwithquery=async()=>{

      var resp=await signupservice(obj);
      if(resp.data.status)
      {
        nagivate("/");
      }
      else
      {
        alert(resp.data.message);
      }
  }

    return(
        <div>
          
          <Signnav></Signnav>

          <div><div className={style.main}>

<section className={style.signup}>
    <div className={style.container}>
        <div className={style.signup_content}>
            <div className={style.signup_form}>
                <h2 className={style.form_title}>Sign up</h2>
                <form method="POST" className={style.register_form} id="register-form">
                    
                    <div className={style.form_group}>
                        <label for="email">
                        <img src={email} height="10px" width="10px" alt="" /></label>
                        <input type="email" name="email" id="email" placeholder="Your Email" onChange={update}/>
                    </div>
                    <div className={style.form_group}>
                        <label for="pass">
                        <img src={key} height="10px" width="10px" alt="" /></label>
                        <input type="password" name="pwd" id="pass" placeholder="Password" onChange={update}/>
                    </div>
                    <div className={style.form_group}>
                        <label for="re-pass">
                        <img src={key} height="10px" width="10px" alt=""/></label>
                        <input type="password" name="con_pwd" id="re_pass" placeholder="Repeat your password" onChange={update}/>
                    </div>
                    <div className={style.form_group}>
                        <Form.Select type="select" name="type" id="name" placeholder="signup AS" onChange={update}>
                        <option placeholder="signup AS">Signup as</option>
                        <option value="Client">car-owner</option>
                        <option value="Service-Provider">parking-Provider</option>
                        </Form.Select>
                    </div>
                    
                    <div className={`${style.form_group} ${style.form_button}`}>
                        <input type="button" name="signup" id="signup" className={style.form_submit} onClick={signupuserwithquery} value="Register"/>
                    </div>
                </form>
            </div>
            <div className={style.signup_image}>
                <figure><img src={signup} alt="sing up image"/></figure>
                <Link to="/login" className={style.signup_image_link}>  
                    I am already member
                </Link> 
            </div>
        </div>
    </div>
</section>
</div>

        </div>
        </div>
    )
}

export default Sign;