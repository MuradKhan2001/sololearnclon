import React, {createContext, useEffect, useState} from 'react';
import axios from "axios";
import AddCourseChapter from "./chapter/add-course-chapter";

export const CourseContext = createContext();

function AddCourse(props) {

    const [course, setCourse] = useState({name: "", base64: "", content_type: ""});
    const [text, setText] = useState("");
    const [courseList, setCourseList] = useState([]);

    useEffect(()=>{
        axios.get("/api/sololearn/course/list").then((response)=>{
            setCourseList(response.data.data)
        })
    },[]);

    function handleInputChange(event) {
        let files = event.target.files;
        let reader = new FileReader();
        reader.readAsDataURL(files[0]);

        reader.onload = (e) => {
            setCourse({
                ...course,
                base64: e.target.result.substring(23),
                content_type: ".png"
            })
        }
    }

    function addCourse() {
        axios.post("/api/sololearn/course/add", course, {
            headers: {
                "Authorization": localStorage.getItem("token")
            }
        }).then((response) => {
            setText(response.data.message)
            axios.get("/api/sololearn/course/list").then((response)=>{
                setCourseList(response.data.data)
            })
        }).catch((error)=>{
            if (error.response.status === 403)
                setText("sizga bu amal bajarish uchun huquq yoq")
        })
    }


    return (
        <CourseContext.Provider value={{courseList: courseList}}>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="container">
                            <div className="row">


                                <div className="col-md-12 ">
                                    <div className="card form mt-5">
                                        <h3 className={' text-center text-primary mt-1 text-uppercase'}>ADD COURSE</h3>
                                        <h5 className={'text-center text-success'}>{text}</h5>
                                        <div className="card-body">
                                            <div className="form-group mt-2">
                                                <label htmlFor="full_name">Course name</label>
                                                <input name={'name'} type="text"
                                                       id={'username'} onChange={(e) => setCourse({...course, name: e.target.value})} className={'form-control'}/>
                                            </div>
                                            <div className="form-group mt-2">
                                                <label htmlFor="full_name">Choose image</label>
                                                <input onChange={handleInputChange} type="file" className={'form-control'}/>
                                            </div>

                                        </div>
                                        <button onClick={addCourse} className={'btn btn-primary mt-2'}>Add</button>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <AddCourseChapter/>
                    </div>
                </div>
            </div>
        </CourseContext.Provider>

    );
}

export default AddCourse;