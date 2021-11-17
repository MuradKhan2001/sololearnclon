import React, {useEffect, useState} from 'react';
import axios from "axios";
import Course from "./course";
import {Link} from "react-router-dom";

function Chapters(props) {
    const [course,setCourse]=useState({});
    const [courseChapter,setChapterCourse]=useState([]);
    const [courseLesson,setCourseLesson]=useState([]);
    const [courseChapterId,setcourseChapterId]=useState(0);




    useEffect(()=>{

        axios.get("/api/sololearn/course/chapter/"+props.match.params.id).then((res)=>{
           setChapterCourse(res.data.data);
        });

        axios.get("/api/sololearn/course/list").then((response)=>{
            Array.from(response.data.data).forEach((item)=>{
                if (item.id === parseInt(props.match.params.id)) {
                    setCourse(item);
                }
            })
        })


    },[]);

    function getCourseChapter(id) {
        setcourseChapterId(id);
        axios.get("/api/sololearn/user/lesson/list/"+id, {
            headers: {
                "Authorization": localStorage.getItem("token")
            }
        }).then((res)=>{
            setCourseLesson(sort(res.data.data));
        });

    }
    function completeLesson(id) {
        axios.get("/api/sololearn/course/chapter/lesson/complete/"+id, {
            headers: {
                "Authorization": localStorage.getItem("token")
            }
        }).then((res)=>{
            getCourseChapter(courseChapterId);
        });
    }

    function sort(arr) {
        let newArr = Array.from(arr);
        for (let i=0; i<newArr.length; i++){
            for (let j=0; j<newArr.length; j++){
                if(newArr[i].id < newArr[j].id){
                    let temp = newArr[i];
                    newArr[i] = newArr[j];
                    newArr[j] = temp;
                }
            }
        }
        return newArr;
    }

    return (
        <div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 circleChapter">
                        <div className="prev">
                            <Link to="/course/">  Back to courses </Link>
                        </div>
                        <div className="Pyhton">
                            <img src={course.image_url} alt=""/>
                        </div>
                        <div className="textChapter">
                            <div className="Name">
                            {course.name}
                            </div>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam animi corporis culpa, <br/>
                                cupiditate dolorum est facere impedit porro similique tenetur!
                        </div>
                    </div>
                </div>

            </div>
            <div className="container Topp">

                    {courseChapter.map((item,index)=>{

                        return <div className='row '>
                            <div className="col-12 ">
                                <div className="ChapterBox">
                                    <div className="ChapterPhoto">
                                        {item.image_url}
                                    </div>
                                    <div className="ChapterName">
                                        {item.name}
                                    </div>
                                    <div className="ChapterBtn">
                                            <img className={'pointer'} onClick={() => getCourseChapter(item.id)}  src="/Chapter1.png" alt=""/>
                                    </div>
                                </div>

                                { courseChapterId === item.id ? <div>
                                     <div className="lessonBox">
                                            <div className="container">
                                                <div className="row d-flex">
                                                    {courseLesson.map((item,index)=>{
                                                        return <div onClick={()=>completeLesson(item.id)} className= {item.is_open ? "col-4 " : "col-4  disableddd"} >
                                                        <div className="lessonCard">
                                                            {item.is_open === false ? <div className="sloy">
                                                                <img src="/locked.png" alt=""/>

                                                                </div> : "" }
                                                            <div className="LessonName">
                                                                {item.lesson_name}
                                                            </div>
                                                        </div>
                                                    </div>
                                                    })}
                                                </div>
                                            </div>
                                        </div>




                                    <div className="clear"> </div>
                                </div> : ""}

                            </div>

                            </div>

                    })

                    }


            </div>





        </div>
    );
}

export default Chapters;