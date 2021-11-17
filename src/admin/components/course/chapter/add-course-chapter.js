import React, {useEffect, useState, useContext} from 'react';
import axios from "axios";
import {CourseContext} from "../add-course";

function AddCourseChapter(props) {

     const context = useContext(CourseContext);

     const [courseChapter, setCourseChapter] = useState({ name:'',content_type:'.png',base64:'', course_id:1});

     const [text, setText]=useState('')

    function addChapter (){
        axios.post("/api/sololearn/course/chapter/add", courseChapter , {
            headers: {
                "Authorization": localStorage.getItem("token")
            }
        }).then((response)=>{
            setText(response.data.message)
        })
    }


     function handleInputChange(event) {
        let files = event.target.files;
        let reader = new FileReader();
        reader.readAsDataURL(files[0]);

        reader.onload = (e) => {
            setCourseChapter({
                ...courseChapter,
                base64: e.target.result.substring(23),
                content_type: ".png"
            })
        }
    }

    console.log(courseChapter)

    return (
        <div>
            <div className="container">
                <div className="row">


                    <div className="col-md-12">
                        <div className="card mt-5 form">
                            <h3 className={' text-center text-primary text-uppercase'}>ADD COURSE CHAPTER</h3>
                            <h5 className={'text-center text-success'}>{text}</h5>
                            <div className="card-body">
                                <div className="form-group mt-2">
                                    <label htmlFor="full_name">Course chapter name</label>
                                    <input onChange={(e)=>setCourseChapter({...courseChapter, name: e.target.value})} name={'name'} type="text"
                                           id={'name'}  className={'form-control'}/>
                                </div>

                                <div className="form-group mt-2">
                                    <label htmlFor="full_name">Choose course</label>
                                    <select name="" onClick={(e)=>setCourseChapter({...courseChapter,course_id :e.target.value})} className={'form-control'} id="">
                                        {context.courseList.map((item)=>{
                                            return <option value={item.id}>
                                                {item.name}
                                            </option>
                                        })}
                                    </select>

                                </div>

                                <div className="form-group mt-2">
                                    <label htmlFor="full_name">Choose image</label>
                                    <input onChange={handleInputChange} type="file" className={'form-control'}/>

                                </div>
                            </div>
                            <button onClick={addChapter} className='btn btn-primary mt-2'>Add</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddCourseChapter;