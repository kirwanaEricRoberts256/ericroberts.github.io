import './home.css'
import './form.css'
import React from "react"
import './about.css'
import {Link} from "react-router-dom"
import logo from "../pages/logo.JPG";
import Footer from '../pages/footer.js'

export default function Home(){
    return(
        <div className="home">
        <h1 className='head'>Hi there,</h1>
       
        <div className='columns'>
        <div ><p>My name is <b>Kirwana Eric Roberts,</b> i create websites using html,css and react
        i also enage in backend developement with experience in php and mysql come join me in this wonderful adventure of creating websites and steadfast mobile applications.
         </p> </div><div className="button"><button><Link to="/about">DISCOVER</Link></button></div>
       
         
         
        </div>
        <img  src={logo}/><br></br><br></br>
        <div className='form'>
<h3>Contact Form</h3>
<form >
    <input type='text' placeholder=' Your name goes here'></input><br></br>
    <input type='email' placeholder='email eg spongebob@gmail.com'></input><br></br>
    <textarea placeholder='your message goes on here' ></textarea><br></br>
    <input type='submit' placeholder='SEND'></input>
</form>
</div><br></br>
        <Footer/>

        </div>
    )
}