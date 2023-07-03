import React from "react";
import logo from "../pages/logo.JPG";
import './about.css'
import Footer from '../pages/footer'
import './form.css'

export default function About() {
  return (
    <div className="About">
     <div className="background-image">
      
      
        <div className="text"><h1>My name is Eric Roberts</h1></div>
      </div>
      <div className="button"><button>DISCOVER</button></div>
      
      <div className="information"> 
      <p>  
      <b>HOBBIES</b><br></br>Besides work and studies, I love playing football and I am a strong supporter for Arsenal. Love playing video games and and watching movies.Then swimming, especially when am with my boys. 
      i adore natural scenary and love photography. talk about leadership, i enjoy mentoring my fellow youths by working with the Africa
      Youth leadership Forum, an organisation who's major aim is to impart leadership skills unto the youth. I engage in Bible study sessions.

      </p>
      <p> 
       <b>WORK</b><br></br>I am a junior developer with much enthusiasm for web and software development. i also happen to work do networking and its configurations
       I do graphic and poster design using photshop. I also work with Jesus leaders Network, an organisation whos main aim is to teach 
       youths the Bible, and make thwm love the word of God.
       I alo volunteer with the Africa Youth leaders forum in mentoring young leaders with skills based on Jesus' teachings
      </p>
    
      </div>
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
  );
}
