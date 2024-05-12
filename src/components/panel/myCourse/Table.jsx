import React from "react";
import Style from "./myCourse.module.css";
import { MdDelete } from "react-icons/md";

const Table = ({ Data }) => {
  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col" className={`${Style.tableNumb}`}>#</th>
            <th scope="col">نام دوره</th>
            <th scope="col"> تاریخ ثبت دوره </th>
            <th scope="col"> وضعیت دوره </th>
            <th scope="col">مدرس دوره</th>
            <th></th>
          </tr>
        </thead>
        {Data.map((data) => {
          return (
            <tbody>
              <tr className={`${Style.tableBody}`}>
                <th className={`${Style.tableNumb} `} scope="row"> {data.number} </th>
                <td> {data.course} </td>
                <td> {data.date} </td>
                <td> {data.condition} </td>
                <td> {data.professor} </td>
                <td> <MdDelete size={18} className="text-danger" /> </td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </>
  );
};

export default Table;
