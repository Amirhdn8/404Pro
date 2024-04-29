import React from 'react'
import Style from "./newsDetail.module.css"
import { FaRegUser } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";

const NewsLeftSide = () => {
  return (
    <>
    <div className="col-md-12 shadow p-3 mb-5 bg-white rounded text-end">
        <div className='user mt-1'>
            <span className={`ms-2 ${Style.iconColor}`}><FaRegUser size={20} /></span>
            <span className={`${Style.txt}`}>امیرحسین</span>
        </div>
        <div className='seen mt-3'>
            <span className={`ms-2 ${Style.iconColor}`}><FaEye size={20} /></span>
            <span className={`${Style.txt}`}> 34 </span>
        </div>
        <div className='seen mt-3'>
            <span className={`ms-2 ${Style.iconColor}`}><FaCalendarAlt size={20} /></span>
            <span className={`${Style.txt}`}> 15تیر 1400 </span>
        </div>
    </div>
    </>
  )
}

export default NewsLeftSide