import React from "react";
import "./AboutUs.css";
import DevCard from "./DevCard";
import AboutHeader from "./AboutHeader";
import devPicImg1 from "../../assets/Images/dev-pic1.png";
import devPicImg2 from "../../assets/Images/dev-pic2.png";
import devPicImg3 from "../../assets/Images/dev-pic3.png";

function AboutUspage() {
  return (
    <main className='AboutUs-container'>
      <AboutHeader />
      <div className='AboutUs-card'>
        <section className='AboutUs-brief'>
          <h1>What is Delta Bookings?</h1>
          <p>
            Delta Bookings is the project we decided to take as part of our
            study plan at Make It Real. It is a fully fledged website we
            developed from the ground up, be it design, front-end and back-end
            functionality, we made it. Of course, it was only possible due to
            the help of our mentors at Make It real, as well as some extra help
            we got along the way.
          </p>
          <p>
            So, to answer the question, what is “Delta Bookings”? It is an
            application designed to allow the user to search and book hotel
            reservations all around the world. All the results are filtered by
            city and preferred date.
          </p>
          <h1>Usability</h1>
          <p>Users should be capable of:</p>
          <ul>
            <li>Log-in / log-out</li>
            <li>Change & recover passwords</li>
            <li>Search Hotels by city / date</li>
            <li>Get more details from any hotel</li>
            <li>Book a reservation</li>
            <li>Get emails with their reservation information</li>
            <li>Review their reservations</li>
            <li>Access the site on desktop and mobile devices</li>
          </ul>

          <h1>Tools used</h1>
          <p>
            The software, Libraries, API’s & platforms used for this project
            consist of:
          </p>
          <ul>
            <li>GitHub.com</li>
            <li>Visual Studio Code</li>
            <li>React</li>
            <li>etc</li>
          </ul>
        </section>

        <section className='AboutUs-developers'>
          <div className='developers-title'>
            <h1>Our Team</h1>
          </div>
          <DevCard
            cNick='RandomBlueDev'
            cImage={devPicImg1}
            cName=' Andrés Vélez'
            cTitle='Web Developer'
            cEmail='randombluemail@gmail.com'
            cGithub='github.com/RandomBlueGuy'
            cLinkedin='/andres-camilo-velez/'
            cColor1='rgb(14, 170, 222)'
            lnkedinUrl="https://www.linkedin.com/in/andres-camilo-velez/"
          />
          <DevCard
            cNick='Oscar_Nuñez'
            cImage={devPicImg2}
            cName=' Oscar Javier Nuñez'
            cTitle='Web Developer'
            cEmail='oscar.nunez07@hotmail.com'
            cGithub='github.com/Oskarnuz'
            cLinkedin='/in/oscar-javier-nunez/'
            cColor1='rgb(15, 207, 111)'
            lnkedinUrl="https://www.linkedin.com/in/oscar-javier-nunez/"
          />

          <DevCard
            cNick=' Michael_Saénz'
            cImage={devPicImg3}
            cName='Michael Saénz'
            cTitle='Web Developer'
            cEmail='michaelsaenz96@hotmail.com'
            cGithub='github.com/MSaenz1011'
            cLinkedin='/michael-steven-sáenz-téllez/'
            cColor1='rgb(215, 207, 111)'
            lnkedinUrl="https://www.linkedin.com/in/michael-steven-sáenz-téllez/"
          />
        </section>
      </div>
    </main>
  );
}

export default AboutUspage;
