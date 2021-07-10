import React, { useEffect, useState } from 'react'
import Axios from '../config/axios'
import {
    Link,
} from "react-router-dom";

export default function Home() {
    const [data, setdata] = useState({})
    const [loading, setloading] = useState(true)
    useEffect(() => {
        Axios({
            url: '/user',
            method: 'get',
            headers: {
                token: localStorage.token
            }
        })
            .then(function (response) {
                // handle success
                console.log(response.data, "response<<<<<<<<<<<")
                setdata(response.data)
                setloading(false)
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });
    }, [])

    if (loading) {
        return (<h1>Loading...</h1>)
    } else {
        return (
            <div>
                <Link to="/add">
                    <button className="button is-info"
                        style={{ marginBottom: "30px", marginTop: '30px' }}>Add User</button>
                </Link>
                <table className="table is-hoverable is-fullwidth" style={{ marginTop: "50px", marginLeft: "50px" }}>
                    <thead>
                        <tr>
                            <th>NIK</th>
                            <th>Nama</th>
                            <th>Email</th>
                            <th>Kampus</th>
                            <th>Tanggal Mapaba</th>
                            <th>Aksi</th>
                        </tr>
                    </thead>

                    <tbody>
                        {data.map((x) => (
                            <tr key={x.id}>
                                <td>{x.NIK}</td>
                                {/* <td><figure className="image is-32x32"> <img src={x.media} alt="img" style={{ height: "25px" }} /></figure></td> */}
                                <td>{x.name}</td>
                                <td>{x.email}</td>
                                <td>{x.kampus}</td>
                                <td>{x.tanggal_mapaba}</td>
                                <td>
                                    <Link to={`/edit/${x.id}`}><button className="button is-info" style={{ marginRight: "10px" }}>Edit</button></Link>
                                    <button className="button is-info" onClick={(e) => {
                                        e.preventDefault()
                                        Axios({
                                            url: 'http://localhost:3000/post/' + x.id,
                                            method: 'delete',
                                            headers: {
                                                token: localStorage.token
                                            }
                                        })
                                            .then(function (response) {
                                                // handle success
                                                console.log(response, "response<<<<<<<<<<< SUKSES GAKKKKKK")
                                                window.location.reload();

                                            })
                                            .catch(function (error) {
                                                // handle error
                                                console.log(error);
                                            })
                                    }}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        )
    }
}