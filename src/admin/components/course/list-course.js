import React, {useEffect, useState} from 'react';
import axios from "axios";
import "./course.css"

function ListCourse(props) {

    const [courseList, setCourseList] = useState([]);
    const [courseChapterList, setChapterCourseList] = useState([]);
    const [id, setId] = useState(0);

    useEffect(() => {
        axios.get("/api/sololearn/course/list").then((response) => {
            setCourseList(response.data.data)
        })
    }, [])


    function getCourseChapterList(id) {
        setId(id);
        axios.get("/api/sololearn/course/chapter/" + id).then((response) => {
            setChapterCourseList(response.data.data)
        })
    }

    console.log(courseChapterList)
    return (
        <div>
            <div className="row">
                <div className="col-md-12">
                    <table className={"table"}>
                        <thead>
                        <tr className={'text-center'}>
                            <th>#</th>
                            <th>name</th>
                            <th>create date</th>
                        </tr>
                        </thead>
                    </table>
                        {courseList.map((item, index) => {
                            return <div>
                                <div  className={"zzz"} onClick={() => getCourseChapterList(item.id)}>
                                    <div className={'zzz1'}>{++index}</div>
                                    <div className={'zzz1'}>{item.name}</div>
                                    <div className={'zzz1'}>{item.created_date}</div>
                                </div>
                                {id === item.id ? <div>
                                    {courseChapterList.map((item,index)=>{
                                        return <div className={"zzzz"}>
                                            <div className={'zzz1'}>{++index}</div>
                                            <div className={'zzz1'}>{item.name}</div>
                                            <div className={'zzz1'}>{item.created_date}</div>
                                        </div>
                                    })}
                                    <div className="clear"></div>
                                </div> : ""}
                            </div>
                        })}
                </div>
            </div>
        </div>
    );
}

export default ListCourse;