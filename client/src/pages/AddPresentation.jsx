import '../styles/AddPresentation.css';
import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { addPresentation } from '../service/api';
import { useNavigate } from 'react-router-dom';

/* Default Value for form data */
const defaultValue = {
    name: '',
    imgLink: '',
    year: '',
    date: '',
    streams: '',
    postType: '',
    type: '',
    pptLink: '',
    program: ''
};

/* Add Presentation Page */
const AddPresentation = () => {
    document.title = 'Add Presentation | NITJ\'s Jobify';
    const [presentation, setPresentation] = useState(defaultValue);
    const [btnText, setBtnText] = useState('Add Presentation Details');
    const navigate = useNavigate();

    /* On value change of the form data input */
    const onValueChange = (e) => {
        setPresentation({ ...presentation, [e.target.name]: e.target.value });
    }

    /* Add presentation functions */
    const addPresentationDetails = async (e) => {
        e.preventDefault();
        await addPresentation(presentation);
        setBtnText('Added Presentation!');
        navigate("/presentationRequests");
    }

    return (
        <>
            <motion.h1 initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.2 }} className='head text-center mt-4'>Add Presentation Details</motion.h1>
            <div className='container'>
                <form onSubmit={(e) => addPresentationDetails(e)} method="post">
                    <input autoComplete="off" type="text" style={{ color: "black" }} className='dateInp' required name='name' placeholder='Enter Company Name' onChange={(e) => onValueChange(e)} />
                    <input autoComplete="off" type="text" style={{ color: "black" }} className='dateInp' required name='imgLink' placeholder='Enter Company Logo Link' onChange={(e) => onValueChange(e)} />
                    <input autoComplete="off" type="text" style={{ color: "black" }} className='dateInp' required name='year' placeholder='Enter Batch Year For Presentation (Eg: 2024)' onChange={(e) => onValueChange(e)} />
                    <input autoComplete="off" type="text" style={{ color: "black" }} className='dateInp' required name='date' placeholder='Enter Time-Date-Year For Presentation (Eg: 11 AM-12 September2023' onChange={(e) => onValueChange(e)} />
                    <input autoComplete="off" type="text" style={{ color: "black" }} className='dateInp' required name='streams' placeholder='Enter Streamd Allowed For Presentation Separated With Dash (Eg: IT-CSE-ECE)' onChange={(e) => onValueChange(e)} />
                    <input autoComplete="off" type="text" style={{ color: "black" }} className='dateInp' required name='type' placeholder='Enter Type Of Post (Eg: SDE)' onChange={(e) => onValueChange(e)} />
                    <input autoComplete="off" type="text" style={{ color: "black" }} className='dateInp' required name='pptLink' placeholder='Enter Presentation Link' onChange={(e) => onValueChange(e)} />
                    <select style={{ color: "black" }} value={presentation.postType} required name="postType" onChange={(e) => onValueChange(e)} className='dateInp'>
                        <option value="Select Post Type">Select Post Type</option>
                        <option value="Full Time">Full Time</option>
                        <option value="6 Months Intern + FTE">6 Months Intern + FTE</option>
                        <option value="6 Months Internship">6 Months Internship</option>
                        <option value="2 Months Internship">2 Months Internship</option>
                    </select>
                    <select style={{ color: "black" }} value={presentation.program} required name="program" onChange={(e) => onValueChange(e)} className='dateInp'>
                        <option value="Select Program">Select Program</option>
                        <option value="B.Tech">B.Tech</option>
                        <option value="M.Tech">M.Tech</option>
                        <option value="MBA">MBA</option>
                        <option value="M.Sc">M.Sc</option>
                    </select>
                    <button className='add' type='submit'>{btnText}</button>
                </form>
            </div>
        </>
    );
}

export default AddPresentation;