import React ,{useEffect, useState} from 'react';
import './global.css';
import axios from "axios";
import {Link} from "react-router-dom";


function Course(props) {
    const [course,setCourse]=useState([]);

    useEffect(()=>{
        axios.get("/api/sololearn/course/list").then((response)=>{
            setCourse(response.data.data);
        })

    }, []);



    return (
        <div>
            <div className="container-fluid BgForCourse">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className='textTitle'>
                                What would you like to learn?
                            </div>
                        </div>
                    </div>
                    <div className="row m-5">
                        <div className="col-10 offset-1">


                            <div className="container">
                                <div className="row">
                                    { course.map((item,index)=>{
                                        return <Link to={"/chapters/" + item.id} className="col-md-3">

                                            <div className="d-inline-block">
                                                <div className="cardCourse">
                                                    <div className="box1">
                                                        <div className="box">
                                                            <img src={item.image_url} alt=""/>
                                                        </div>
                                                    </div>
                                                    <div className="name">
                                                        {item.name}
                                                    </div>
                                                    <div className="learners">
                                                        7.3M Learners
                                                    </div>
                                                </div>

                                            </div>
                                        </Link>
                                    })
                                    }

                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Course;