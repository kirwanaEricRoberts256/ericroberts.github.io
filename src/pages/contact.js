import Footer from '../pages/footer'
import React from "react"
import './contact.css'
import logo from "../pages/logo.JPG";
import Button from 'react-bootstrap/Button';

import {Link} from "react-router-dom"
export default function Contact(){
    return(

<div className="About">
     <div className="background-image">
      
      
        <div className="text"><h1>Contact me via the form below;</h1></div>
      </div>
      <div className="button"><button><Link to="/home">DISCOVER</Link></button></div>
      
      
      <div className='form'>
<h3>Contact Form</h3>
<form >
    <input type='text' placeholder=' Your name goes here'></input><br></br>
    <input type='email' placeholder='eg spongebob@gmail.com'></input><br></br>
    <textarea placeholder='your message goes on here' ></textarea><br></br>
    <input type='submit' placeholder='SEND'></input>
</form>
</div><br></br>
      <Footer/>
    </div>
    )
}