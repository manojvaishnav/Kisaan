import React from "react";
import './Table.css'
const Table =(props)=>{
return(
    <>
        <table>
            <caption>{props.title}</caption>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Mobile No.</th>
                <th>Address</th>
                <th>Update</th>
                <th>Delete</th>
            </tr>
            <tr>
                <td>989</td>
                <td>mksmck</td>
                <td>9988776655</td>
                <td>mksai</td>
                <td>Update</td>
                <td>Delete</td>
            </tr>
        </table>
    </>
)
}

export default Table;