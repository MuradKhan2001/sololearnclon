import React, {useEffect, useState} from 'react';
import axios from "axios";
import "./lesson.css";

function Lesson(props) {

    const [isText, setIsText] = useState(true);
    const [courseList, setCourseList] = useState([]);
    const [courseChapterList, setCourseChapterList] = useState([]);
    const [contentList, setContentList] = useState([]);
    const [text, setText] = useState("");
    const [lesson, setLesson] = useState(
        {
            name: "",
            content_list: [],
            course_chapter_id: 0
        }
    );
    const [inputText, setInputText] = useState("true");

    useEffect(()=>{
        axios.get("/api/sololearn/course/list").then((response)=>{
            setCourseList(response.data.data)
        })
    },[])

    function addIsText(e) {
        if (e.target.value === "TEXT")
            setIsText(true)
        else
            setIsText(false)

        if (inputText !== ""){
            setContentList(
                contentList.concat({lesson_content_type: "TEXT", data: inputText})
            );
            setInputText("");
        }

    }

    function getCourseChapterList(e){
        axios.get("/api/sololearn/course/chapter/" + e.target.value).then((response)=>{
            setCourseChapterList(response.data.data)
        })
    }

    function getInputValues(e){
        let newLesson = {
            ...lesson,
            [e.target.name]: e.target.value
        }
        setLesson(newLesson)
    }

    function getContentList(e){
        if(!isText){
            let files = e.target.files;
            let reader = new FileReader();
            reader.readAsDataURL(files[0]);

            reader.onload = (e) => {
                setContentList(
                    contentList.concat({lesson_content_type: "IMAGE", data: e.target.result.substring(23) })
                );
            }
        }
    }

    function addLesson(){
        const newLesson = {
            ...lesson,
            content_list: contentList
        }
        axios.post("/api/sololearn/course/chapter/lesson/add",newLesson,{
            headers: {
                "Authorization": localStorage.getItem("token")
            }
        }).then((response)=>{
            if(response.data.status_code === 0){
                setText(response.data.message)
                setLesson({
                    name: "",
                    content_list: [],
                    course_chapter_id: 0
                })
            }
        })

    }

    return (
        <div>
            <div className="container">
                <h1>{text}</h1>
                <div className="row">
                    <div className="col-md-8 offset-2 bg-dark">
                        <div className="form-group mt-2">
                            <label htmlFor="">lesson name</label>
                            <input type="text" name={'name'} value={lesson.name} className={'form-control'} onChange={getInputValues} placeholder={'enter name ...'}/>
                        </div>

                        <div className="form-group mt-2">
                            <label htmlFor="">choose course</label>
                            <select className={'form-control'} name="" onClick={getCourseChapterList} id="">
                                {courseList.map((item, index)=>{
                                    return <option value={item.id}>
                                        {item.name}
                                    </option>
                                })}
                            </select>
                        </div>

                        <div className="form-group mt-2">
                            <label htmlFor="">choose course chapter</label>
                            <select className={'form-control'} onClick={getInputValues} name="course_chapter_id"  id="">
                                {courseChapterList.map((item, index)=>{
                                    return <option value={item.id}>
                                        {item.name}
                                    </option>
                                })}
                            </select>
                        </div>

                        <div className="form-group mt-2">
                            <label htmlFor="">choose</label>
                            <select className={'form-control'} name="" id="" onClick={addIsText}>
                                <option value="TEXT">TEXT</option>
                                <option value="IMAGE">IMAGE</option>
                            </select>
                        </div>
                        {
                            isText ? <div className="form-group mt-2">
                                <label htmlFor="">text</label>
                                <input className={'form-control'} onChange={(e)=>setInputText(e.target.value)} type="text" placeholder={'enter text ...'}/>
                            </div> : <div className="form-group">
                                <label htmlFor="">choose image</label>
                                <input className={'form-control'} onChange={getContentList} type="file"/>
                            </div>
                        }

                        <button className={'btn btn-primary mt-2'} onClick={addLesson}>add lesson</button>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Lesson;