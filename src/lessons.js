import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import axios from "axios";

function Lessons(props) {

    const [courseLesson,setCourseLesson]=useState([]);
    const [courseLesson2,setCourseLesson2]=useState([]);
    const [courseLesson3,setCourseLesson3]=useState({});



    useEffect(()=>{

        axios.get("/api/sololearn/course/chapter/lesson/" + props.match.params.id,{
            headers: {
                "Authorization": localStorage.getItem("token")
            }
        }).then((res)=>{
            setCourseLesson2(res.data.data)
        });

        axios.get("/api/sololearn/user/lesson/list/"+props.match.params.id, {
            headers: {
                "Authorization": localStorage.getItem("token")
            }
        }).then((res)=>{
            setCourseLesson(res.data.data);
        });




        console.log(courseLesson);
        console.log(courseLesson2);




    },[]);




    return (
        <div>
        <div className="container-fluid">
            <div className="prev2">
                <Link to="/chapters/:id">  back </Link>
            </div>



        </div>
        </div>
    );
}

export default Lessons;