import React from 'react';
import {Link} from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Home(props) {
    var settings = {

        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1};
    return (
        <div>
            <div className="desktop">
                <video className="video" src="fon3.mov" muted loop autoPlay> </video>
                <div className="Title1">
                    The best way to learn to <br/>code
                </div>
                <div className="Title2">
                    Courses designed by experts with real-world practice. <br/>  Join our global community. It's free.
                </div>
                <button className='button3' > <Link to="/admin/register">Start learning now</Link> </button>

                <Slider className="carousel11" {...settings}>
                    <div className="card">
                        <div className="box1">
                            <div>
                                <div className="circle1">
                                    <img src="./icons/1073.png" alt=""/>
                                </div>
                                <div className="name">
                                    Pyton Core
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="card">
                        <div className="box1">
                            <div>
                                <div className="circle1">
                                    <img src="./icons/1051.png" alt=""/>
                                </div>
                                <div className="name">
                                    C++
                                </div>
                            </div>

                        </div>

                    </div>
                    <div className="card">
                        <div className="box1">
                            <div>
                                <div className="circle1">
                                    <img src="./icons/1068.png" alt=""/>
                                </div>
                                <div className="name">
                                    Java
                                </div>
                            </div>

                        </div>

                    </div>
                    <div className="card">
                        <div className="box1">
                            <div>
                                <div className="circle1">
                                    <img src="./icons/1073.png" alt=""/>
                                </div>
                                <div className="name">
                                    JavaScript
                                </div>
                            </div>

                        </div>

                    </div>
                    <div className="card">
                        <div className="box1">
                            <div>
                                <div className="circle1">
                                    <img src="./icons/1165.png" alt=""/>
                                </div>
                                <div className="name">
                                    Coding For <br/>
                                    Marketers
                                </div>
                            </div>

                        </div>

                    </div>
                    <div className="card">
                        <div className="box1">
                            <div>
                                <div className="circle1">
                                    <img src="./icons/1080.png" alt=""/>
                                </div>
                                <div className="name">
                                    C#
                                </div>
                            </div>

                        </div>

                    </div>
                    <div className="card">
                        <div className="box1">
                            <div>
                                <div className="circle1">
                                    <img src="./icons/1014.png" alt=""/>
                                </div>
                                <div className="name">
                                    HTML
                                </div>
                            </div>

                        </div>

                    </div>
                    <div className="card">
                        <div className="box1">
                            <div>
                                <div className="circle1">
                                    <img src="./icons/1023.png" alt=""/>
                                </div>
                                <div className="name">
                                    CSS
                                </div>
                            </div>

                        </div>

                    </div>
                    <div className="card">
                        <div className="box1">
                            <div>
                                <div className="circle1">
                                    <img src="./icons/1162.png" alt=""/>
                                </div>
                                <div className="name">
                                    Responsive <br/>
                                    Web Design
                                </div>
                            </div>

                        </div>

                    </div>
                    <div className="card">
                        <div className="box1">
                            <div>
                                <div className="circle1">
                                    <img src="./icons/1157.png" alt=""/>
                                </div>
                                <div className="name">
                                    Pyton for <br/>
                                    Beginners
                                </div>
                            </div>

                        </div>

                    </div>
                    <div className="card">
                        <div className="box1">
                            <div>
                                <div className="circle1">
                                    <img src="./icons/1161.png" alt=""/>
                                </div>
                                <div className="name">
                                    Pyton for <br/>
                                    Data Science
                                </div>
                            </div>

                        </div>

                    </div>
                    <div className="card">
                        <div className="box1">
                            <div>
                                <div className="circle1">
                                    <img src="./icons/1060.png" alt=""/>
                                </div>
                                <div className="name">
                                   SQL
                                </div>
                            </div>

                        </div>

                    </div>
                    <div className="card">
                        <div className="box1">
                            <div>
                                <div className="circle1">
                                    <img src="./icons/1093.png" alt=""/>
                                </div>
                                <div className="name">
                                    Data Science
                                </div>
                            </div>

                        </div>

                    </div>
                    <div className="card">
                        <div className="box1">
                            <div>
                                <div className="circle1">
                                    <img src="./icons/1094.png" alt=""/>
                                </div>
                                <div className="name">
                                    Machine <br/>
                                    Learning
                                </div>
                            </div>

                        </div>

                    </div>
                    <div className="card">
                        <div className="box1">
                            <div>
                                <div className="circle1">
                                    <img src="./icons/1097.png" alt=""/>
                                </div>
                                <div className="name">
                                    React+ Redux
                                </div>
                            </div>

                        </div>

                    </div>
                    <div className="card">
                        <div className="box1">
                            <div>
                                <div className="circle1">
                                    <img src="./icons/1092.png" alt=""/>
                                </div>
                                <div className="name">
                                    Anjular+ <br/>
                                    NestJS
                                </div>
                            </div>

                        </div>

                    </div>
                    <div className="card">
                        <div className="box1">
                            <div>
                                <div className="circle1">
                                    <img src="./icons/1158.png" alt=""/>
                                </div>
                                <div className="name">
                                    Intermedia
                                    <br/>Python
                                </div>
                            </div>

                        </div>

                    </div>
                    <div className="card">
                        <div className="box1">
                            <div>
                                <div className="circle1">
                                    <img src="./icons/1160.png" alt=""/>
                                </div>
                                <div className="name">
                                    Kotlin
                                </div>
                            </div>

                        </div>

                    </div>
                    <div className="card">
                        <div className="box1">
                            <div>
                                <div className="circle1">
                                    <img src="./icons/1164.png" alt=""/>
                                </div>
                                <div className="name">
                                    Go
                                </div>
                            </div>

                        </div>

                    </div>
                    <div className="card">
                        <div className="box1">
                            <div>
                                <div className="circle1">
                                    <img src="./icons/1089.png" alt=""/>
                                </div>
                                <div className="name">
                                    C
                                </div>
                            </div>

                        </div>

                    </div>
                    <div className="card">
                        <div className="box1">
                            <div>
                                <div className="circle1">
                                    <img src="./icons/1159.png" alt=""/>
                                </div>
                                <div className="name">
                                    Pyton Data <br/>
                                    Structures
                                </div>
                            </div>

                        </div>

                    </div>
                    <div className="card">
                        <div className="box1">
                            <div>
                                <div className="circle1">
                                    <img src="./icons/1059.png" alt=""/>
                                </div>
                                <div className="name">
                                   PHP
                                </div>
                            </div>

                        </div>

                    </div>
                    <div className="card">
                        <div className="box1">
                            <div>
                                <div className="circle1">
                                    <img src="./icons/1081.png" alt=""/>
                                </div>
                                <div className="name">
                                    Ruby
                                </div>
                            </div>

                        </div>

                    </div>
                    <div className="card">
                        <div className="box1">
                            <div>
                                <div className="circle1">
                                    <img src="./icons/1075.png" alt=""/>
                                </div>
                                <div className="name">
                                   Swift 4
                                </div>
                            </div>

                        </div>

                    </div>
                    <div className="card">
                        <div className="box1">
                            <div>
                                <div className="circle1">
                                    <img src="./icons/1082.png" alt=""/>
                                </div>
                                <div className="name">
                                   jQuery
                                </div>
                            </div>

                        </div>

                    </div>
                </Slider>
                <div className="container-fluid fon2">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4 boxxes">
                                <div className="card">
                                    <div className="box">
                                        <div>
                                            <img src="./icons/home-why-solo-1.svg" alt=""/>
                                            <div className="title">
                                                Tailored to you
                                            </div>
                                            <div className="text">
                                                No matter your experience level, you'll be writing <b>
                                                real,
                                                functional code within minutes
                                            </b> of
                                                starting your first course.
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 boxxes">
                                <div className="card">
                                    <div className="box">
                                        <div>
                                            <img src="./icons/home-why-solo-2.svg" alt=""/>
                                            <div className="title">
                                                Bite-sized
                                            </div>
                                            <div className="text">
                                                Go step-by-step through our unique courses. Assess what you’ve learned with in-lesson
                                                quizzes, and <b>gradually advance your skills with practice.</b>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 boxxes">
                                <div className="card">
                                    <div className="box">
                                        <div>
                                            <img src="./icons/home-why-solo-3.svg" alt=""/>
                                            <div className="title">
                                                Get proof
                                            </div>
                                            <div className="text">
                                                <b> Earn a certificate</b> to validate your newly acquired skills.
                                                Post it on social for others to see.
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row fon3">
                            <div className="col-md-8">
                                <div className="card d-flex">
                                    <div className="d-flex">
                                        <div className="left">
                                            <dev className="line1">
                                                Learning on the go
                                            </dev>
                                            <dev className="line2">
                                                <b>Learn on the web or on the go. </b> Sololearn is
                                                always ready for you and you'll never lose your place.
                                            </dev>
                                            <dev className="line3 d-flex">
                                                <a href="https://apps.apple.com/us/app/sololearn-learn-to-code/id1210079064">
                                                    <button className='button4'>
                                                        <div className="foricon">
                                                            <img src="apple1.png" alt=""/>
                                                        </div>
                                                        <div className="forname">
                                                            <div className="title">
                                                                Download on the
                                                            </div>
                                                            <div className="name">
                                                                App Store
                                                            </div>
                                                        </div>
                                                    </button>
                                                </a>
                                                <a href="https://play.google.com/store/apps/details?id=com.sololearn">
                                                    <button className='button4'>
                                                        <div className="foricon1">

                                                            <img src="play-market.png" alt=""/>
                                                        </div>
                                                        <div className="forname1">
                                                            <div className="title">
                                                                Download on the
                                                            </div>
                                                            <div className="name">
                                                                App Store
                                                            </div>
                                                        </div>
                                                    </button>
                                                </a>
                                            </dev>
                                        </div>
                                        <div className="right">
                                            <img src="./icons/home-whu-solo-4-rebranding.svg" alt=""/>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card">
                                    <div className="line">
                                        <img src="./icons/home-why-solo-5.svg" alt=""/>
                                    </div>

                                    <div className="line1">
                                        More than 20 courses
                                    </div>
                                    <div className="line2">
                                        From Python, through data, to web dev. <b>
                                        We got everything you need.
                                    </b>
                                    </div>
                                    <div className="line3">
                                        <a href="#">Go to courses ></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
            <div className="container-fluid fon4">
                <div className="row">
                    <div className="col-12">
                        <div className="text">
                            The perfect platform to boost <br/> your technical skills
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-5 offset-1">
                        <div className="card">
                            <img src="./icons/home-perfect-platform-1-rebranding.svg" alt=""/>
                            <div className="name">Students</div>
                            <div className='text'>
                                Prepping for the big test or want to ace your first interview? Use Sololearn's
                                real-world practice to reinforce what you've learned and get you ready for that big moment.
                            </div>
                        </div>
                    </div>
                    <div className="col-md-5 ">
                        <div className="card">
                            <img src="./icons/home-perfect-platform-2.svg" alt=""/>
                            <div className="name">Professionals</div>
                            <div className='text'>
                                You can learn something totally new to advance your career. Or maybe you just want to knock off the rust.
                                Try Sololearn to get access to a variety of courses, from machine learning to web development.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid bg-One">
                <div className="row">
                    <div className="col-md-2">
                        <div className="circleOne">

                        </div>
                        <div className="circleTwo">
                            <img src="./icons/community-user-3.png" alt=""/>
                        </div>
                        <div className="circleThree">
                            <img src="./icons/community-user-5.png" alt=""/>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="text1">
                            Supportive community
                        </div>
                        <div className="text2">
                            46 474 573
                        </div>
                        <div className="text3">
                            Share your code or questions and get instant feedback or become a creator and spread your
                            knowledge and experience with our global community of learners.
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="circleFour">

                        </div>
                        <div className="circleFive">
                            <img src="./icons/community-user-11.png" alt=""/>
                        </div>
                        <div className="circleSix">
                            <img src="./icons/community-user-14.png" alt=""/>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-2">
                        <div className="circleSeven">
                            <img src="./icons/community-user-17.png" alt=""/>
                        </div>
                        <div className="circleEight">
                            <img src="./icons/community-user-19.png" alt=""/>
                        </div>
                    </div>
                    <div className="col-md-8 forVideo">
                        <video className="video" src="video1.mp4" muted loop autoPlay> </video>
                    </div>
                    <div className="col-md-2">
                        <div className="circleNine">

                        </div>
                        <div className="circleTen">
                            <img src="./icons/community-user-23.png" alt=""/>
                        </div>
                        <div className="circleEleven">
                            <img src="./icons/community-user-21.png" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid BgForMain">
                <div className="row">
                    <div className="col-1">

                    </div>
                    <div className="col-4">
                        <div className="textMain">
                            We have helped hundreds of
                        </div>
                    </div>
                    <div className="col-2">
                        <div className="textMain1">
                            Designers
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="textMain2">
                            to finally  <b> land a dream job</b>
                        </div>
                    </div>
                    <div className="col-1">

                    </div>
                </div>
            </div>
            <div className="container-fluid bgFonText">
                <div className="row">
                    <div className="col-12">
                        <div className="textWhy">
                            Why <b>code</b>
                        </div>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-12">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-4 Cards">
                                    <div className="card">
                                        <img src="./icons/home-why-code-1.svg" alt=""/>
                                        <div className="Name">
                                            It’s popular
                                        </div>
                                        <div className="text">
                                            Technical skills are in high demand. Over 60% of new jobs worldwide will require tech skills.
                                        </div>
                                    </div>

                                </div>
                                <div className="col-md-4 Cards">
                                    <div className="card">
                                        <img src="./icons/home-why-code-2.svg" alt=""/>
                                        <div className="Name">
                                            It's promising
                                        </div>
                                        <div className="text">
                                            Unlock your earning potential! Entry-level programmers in the U.S. earn on average over $78,000 in salary.
                                        </div>
                                    </div>

                                </div>
                                <div className="col-md-4 Cards">
                                    <div className="card">
                                        <img src="./icons/home-why-code-3.svg" alt=""/>
                                        <div className="Name">
                                            It’s fun
                                        </div>
                                        <div className="text">
                                            Imagine combining your passion and skill with your creativity, and making something new everyday!
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 ButtonFon">
                        <div>
                            <div className="TexT">
                                Start right here on Sololearn by coding with our Code Playground and posting <br/> your coolest projects for all to see!
                            </div>
                            <div className="d-flex justify-content-center align-items-center mt-5 mb-5">
                                <button className='button3' > <Link to="#">Start learning</Link> </button>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
            <div className="container-fluid BGFONDARK">
                <div className="row">
                    <div className="col-12">
                        <div className="textONE d-flex align-items-center justify-content-center">
                            Invest in yourself with <div className="Pro">PRO</div>
                        </div>
                    </div>
                </div>
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-4 FooterCard">
                            <div className="card">
                                <div className="text1">
                                    Unlimited practice
                                </div>
                                <div className="text2">
                                    2x
                                </div>
                                <div className="text3">
                                    Pro users are twice as likely to incorporate practice in their learning plan
                                </div>
                            </div>
                        </div>
                        <div className="col-4 FooterCard">
                            <div className="card">
                                <div className="text1">Ad-free experience</div>
                                <div className="text2">+132%</div>
                                <div className="text3">Pro users spend <b>132% </b>  more time learning than regular ones.</div>
                            </div>
                        </div>
                        <div className="col-4 FooterCard">
                            <div className="card">
                                <div className="text1">Habit formation</div>
                                <div className="text2">92%</div>
                                <div className="text3">Pro users that set up daily goals have the highest lesson completion rate of <b>92%!</b> </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 d-flex">
                            <div className="FooterCheck d-flex justify-content-center align-items-center">
                              <div className="ForCheck">
                                  <img src="check.png" alt=""/>
                              </div>
                                <div className="textForName">
                                    Unlimited practice
                                </div>
                            </div>
                            <div className="FooterCheck d-flex justify-content-center align-items-center">
                                <div className="ForCheck">
                                    <img src="check.png" alt=""/>
                                </div>
                                <div className="textForName">
                                    Ad-free experience
                                </div>
                            </div>
                            <div className="FooterCheck d-flex justify-content-center align-items-center">
                                <div className="ForCheck">
                                    <img src="check.png" alt=""/>
                                </div>
                                <div className="textForName">
                                    Progress statistics
                                </div>
                            </div>
                            <div className="FooterCheck d-flex justify-content-center align-items-center">
                                <div className="ForCheck">
                                    <img src="check.png" alt=""/>
                                </div>
                                <div className="textForName">
                                    Daily goals
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 d-flex justify-content-center align-items-center mt-3">
                            <div className="FooterCheck d-flex justify-content-center align-items-center">
                                <div className="ForCheck">
                                    <img src="check.png" alt=""/>
                                </div>
                                <div className="textForName">
                                    Habit building features
                                </div>
                            </div>
                            <div className="FooterCheck d-flex justify-content-center align-items-center">
                                <div className="ForCheck">
                                    <img src="check.png" alt=""/>
                                </div>
                                <div className="textForName">
                                    Lesson shortcuts
                                </div>
                            </div>
                            <div className="FooterCheck d-flex justify-content-center align-items-center">
                                <div className="ForCheck">
                                    <img src="check.png" alt=""/>
                                </div>
                                <div className="textForName">
                                    Real life challenges
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 ForBtn d-flex justify-content-center align-items-center">
                        <button className='button5' > <Link to="#">Start learning like a pro</Link> </button>
                    </div>
                </div>
            </div>
            <div className="container-fluid BgForPerson">
                <div className="container ">
                    <div className="row">
                        <div className="col-8 offset-2 mt-5">
                            <div className="forPerson">
                                <img className='personImg' src="person.jpg" alt=""/>
                                <div className="icon1">
                                    <img src="photo1.png" alt=""/>
                                </div>
                                <div className="icon2">
                                    <img src="1160.png" alt=""/>
                                    <div className="Kotlin">

                                        Finished the Kotlin track
                                    </div>

                                </div>
                                <div className="icon3">
                                    <img src="photo2.png" alt=""/>
                                    <div className="Certificate">
                                        Web developer Certificate
                                    </div>
                                </div>
                            </div>
                            <div className="">
                                <div className="TitlePerson">
                                    The Success Story of
                                </div>
                                <div className="NamePerson">
                                    Neetish R.
                                </div>
                                <div className="TextPerson">
                                    Neetish R. started using Sololearn during his sophomore year as a computer science student with no coding experience. Through the Sololearn community, he met David C., an experienced developer and tech lead for a team located in India. David mentored Neetish, learned he was from India, and invited him to interview for a job on his team. Neetish followed through, nailed the interview process, and got his first job! Here's what Neetish has to say about Sololearn:
                                    "If you are a learner then you might find your family among the Sololearn community."
                                    <br/> <br/>
                                    Neetish R., 2018
                                </div>
                                <div className="linePerson"></div>
                                <div className="Thanks">
                                    <img src="photo3.png" alt=""/>
                                    Thank you Neetish R.!
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid BgForFooter">
                <div className="container ">
                    <div className="row">
                        <div className="col-10 offset-1 mt-5">
                            <div className="forFooter ">
                                <div className="textFooter">
                                    Award winning experience
                                </div>
                                <div className="d-flex justify-content-center align-items-center">
                                    <div className="boxFooter1">
                                        <div className="lineOne d-flex justify-content-center align-items-center">
                                            <img src="star.png" alt=""/>
                                            <img src="star.png" alt=""/>
                                            <img src="star.png" alt=""/>
                                            <img src="star.png" alt=""/>
                                            <img src="star.png" alt=""/>
                                        </div>
                                        <div className="lineTwo">
                                            <div className="tinyTex1">
                                                4.8 from 5
                                            </div>

                                            <img className='flover1' src="flower1.png" alt=""/>
                                            <img className='flover' src="flower.png" alt=""/>
                                            <div className="tinyText">
                                                Stars on the AppStore
                                            </div>
                                        </div>
                                    </div>
                                    <div className="boxFooter1">
                                        <div className="lineOne d-flex justify-content-center align-items-center">
                                            <img src="facebook.png" alt=""/>
                                        </div>
                                        <div className="lineTwo">
                                            <div className="tinyTex1">
                                                App Of The Year
                                            </div>

                                            <img className='flover1' src="flower1.png" alt=""/>
                                            <img className='flover' src="flower.png" alt=""/>
                                            <div className="tinyText">
                                                FB Start by Facebook
                                            </div>
                                        </div>
                                    </div>
                                    <div className="boxFooter1">
                                        <div className="lineOne d-flex justify-content-center align-items-center">
                                            <img src="play.png" alt=""/>
                                        </div>
                                        <div className="lineTwo">
                                            <div className="tinyTex1">
                                                Editors' Choice
                                            </div>

                                            <img className='flover1' src="flower1.png" alt=""/>
                                            <img className='flover' src="flower.png" alt=""/>
                                            <div className="tinyText">
                                                Google Play
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid BgForFooter1">
                <div className="container ">
                    <div className="row">
                        <div className="col-10 offset-1 mt-5">
                            <div className="forFooter1 ">
                                <div className="textFooter1">
                                    Coding has never been easier
                                </div>
                                <div className="d-flex justify-content-center align-items-center mt-5">
                                    <button className='button3' > <Link to="#">Start learning now</Link> </button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="lineFooter ">

                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 d-flex FooterBtn">
                        <div className="boxx1">
                            <a href='https://www.linkedin.com/company/sololearn-inc-/'>
                                <img src="premium-icon-linkedin-3128329.png" alt=""/>
                                <div className="name">
                                    Follow us on
                                    Linkedin
                                </div>
                            </a>

                        </div>
                        <div className="boxx1">
                            <a href="https://www.facebook.com/Sololearn/">
                                <img src="premium-icon-facebook-3128304.png" alt=""/>
                                <div className="name">
                                    Check out our facebook
                                </div>
                            </a>

                        </div>
                        <div className="boxx1">
                            <a href="https://twitter.com/SoloLearn">
                                <img src="free-icon-twitter-733579.png" alt=""/>
                                <div className="name">
                                    See what we tweet about
                                </div>
                            </a>

                        </div>
                        <div className="boxx1">
                            <a href="https://www.instagram.com/sololearn/">
                                <img src="premium-icon-instagram-4923005.png" alt=""/>
                                <div className="name">
                                    Join our instagram
                                </div>
                            </a>

                        </div>
                        <div className="boxx1">
                            <a href="https://www.youtube.com/channel/UCXiOyrjY_jqNCFoQTotILTw">
                                <img src="free-icon-youtube-174883.png" alt=""/>
                                <div className="name">
                                    Watch our Youtube
                                </div>
                            </a>

                        </div>
                        <dev className="line3 d-flex">
                            <a href="https://apps.apple.com/us/app/sololearn-learn-to-code/id1210079064">
                                <button className='button4'>
                                    <div className="foricon">
                                        <img src="apple1.png" alt=""/>
                                    </div>
                                    <div className="forname">
                                        <div className="title">
                                            Download on the
                                        </div>
                                        <div className="name">
                                            App Store
                                        </div>
                                    </div>
                                </button>
                            </a>
                            <a href="https://play.google.com/store/apps/details?id=com.sololearn">
                                <button className='button4'>
                                    <div className="foricon1">

                                        <img src="play-market.png" alt=""/>
                                    </div>
                                    <div className="forname1">
                                        <div className="title">
                                            Download on the
                                        </div>
                                        <div className="name">
                                            App Store
                                        </div>
                                    </div>
                                </button>
                            </a>
                        </dev>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Home;