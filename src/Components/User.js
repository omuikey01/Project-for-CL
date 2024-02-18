import axios from "axios"
import { useEffect, useState } from "react"

let User = () => {
    let userid = window.localStorage.getItem("userid")
    userid = parseInt(userid)

    let [userdata, setUserData] = useState([])

    function loadData() {
        axios.get(`http://127.0.0.1:8000/api/task/studenttask/`).then((res) => {
            setUserData(res.data)
        })
    }




    let alltast = userdata.map((key) => {
        let idddd = parseInt(key.use_id)
        console.log(idddd)

        if (idddd === userid) {
            return (
                <>
                    <tr>
                        <td> {key.user_name} </td>
                        <td> {key.taskid} </td>
                        <td> {key.tast_name} </td>
                        <td> {key.tast_des} </td>
                        <td> {key.start_date} </td>
                        <td> {key.end_date} </td>
                        <td> {key.submit_date} </td>
                    </tr>
                </>
            )
        }
    })




    useEffect(() => {
        loadData()
    }, [])


    // console.log(userdata)


    return (
        <>
            <h1> User {userid} </h1>
            <table>
                <tr>
                    <th> Name </th>
                    <th> Task Id </th>
                    <th> Task Name </th>
                    <th> Task Des </th>
                    <th> Task Start </th>
                    <th> Task End </th>
                    <th> Task Submit </th>
                </tr>
                {alltast}
            </table>

        </>
    )
}
export default User