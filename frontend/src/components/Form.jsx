import React, { useState } from 'react';
import Education from './Education';
import Experience from './Experience';
import PersonalData from './PersonalData';
import Project from './Project';
import axios from 'axios';
import { saveAs } from 'file-saver';

const Form = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        linkedin: "",
        github: "",
        skills: "",
        exp1_org: "",
        exp1_pos: "",
        exp1_desc: "",
        exp1_dur: "",
        exp2_org: "",
        exp2_pos: "",
        exp2_desc: "",
        exp2_dur: "",
        proj1_title: "",
        proj1_link: "",
        proj1_desc: "",
        proj2_title: "",
        proj2_link: "",
        proj2_desc: "",
        edu1_school: "",
        edu1_year: "",
        edu1_qualification: "",
        edu1_desc: "",
        edu2_school: "",
        edu2_year: "",
        edu2_qualification: "",
        edu2_desc: "",
        extra_1: "",
        extra_2: "",
    })

    const [page, setPage] = useState(0);
    const formTitle = [
        "Personal Data",
        "Education",
        "Experince",
        "Projects",
    ];

    const pageDisplay = () => {
        switch (page) {
            case 0:
                return <PersonalData formData={formData} setFormData={setFormData} />
            case 1:
                return <Education formData={formData} setFormData={setFormData} />
            case 2:
                return <Experience formData={formData} setFormData={setFormData} />
            default:
                return <Project formData={formData} setFormData={setFormData} />
        }
    }
    return (
        <>
            <div>
                <div className='d-flex justify-content-center'>
                    <div>
                        <h1 className='text-center'>{formTitle[page]}</h1>
                        <div className="progressbar">
                            <div style={{
                                width:
                                    page === 0 ? "25%" : page === 1 ? "50%" : page === 2 ? "75%" : "100%",
                            }}></div>
                        </div>
                        <div>
                            <div>{pageDisplay()}</div>
                            <div className="d-flex justify-content-center gap-3 p-5 m-10">
                                <button className='btn btn-light'
                                    disabled={page === 0}
                                    onClick={() => {
                                        setPage(page - 1);
                                    }}>Prev
                                </button>
                                <button className='btn btn-info'
                                    onClick={() => {
                                        if (page === formTitle.length - 1) {
                                            axios
                                                .post('http://localhost:8080/create-pdf', formData)
                                                .then(() => axios.get('http://localhost:8080/fetch-pdf', { responseType: "blob" }))
                                                .then((res) => {
                                                    const pdfBlob = new Blob([res.data], {
                                                        type: "application/pdf"
                                                    })
                                                    saveAs(pdfBlob, "sample.pdf")
                                                })
                                        } else {
                                            setPage(page + 1);
                                        }
                                    }}
                                >
                                    {page === formTitle.length - 1 ? "Download Resume" : "Next"}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Form