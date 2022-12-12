import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from "axios"
import Card from '../components/Card';
import "./serviceworker.css"
function ServiceWorker() {
    const [data, setData] = useState([])
    let navigate = useNavigate();
    const getJobs = () => {
        try {
            axios.get('http://localhost:3000/serviceProvider/Viewalljob').then((res) => {
                console.log(res.data.data, "Response")
                setData(res.data.data)
            }).catch(e => {
                console.log(e)

            })

        } catch (e) {
            console.log(e)
        }
    }
    const applyJob = (jid, uid) => {
        try {
            axios.patch('http://localhost:3000/serviceProvider/ApplyJob', {
                jid: jid,
                uid: uid
            }).then((r) => {
                alert('You have applied to the job kindly refresh the page')
                console.log(r)
            }).catch(e => {
                console.log(e)
            })
        } catch (e) {
            console.log(e)
        }
    }
    useEffect(() => {
        getJobs()
    }, [])
    return (
        <div className='main'>
            <div className='row'>
                <div className='col-md-12 col-sm-8 mainBackground'>
                    <div className='insideMain'>
                        <h1 style={{ color: "white" }}>
                            Welcome Back <br />    Service worker
                        </h1>

                        <div className='d-flex'>
                            <button onClick={() => navigate('/JobProvider')}>
                                Switch to jobProvider
                            </button>
                        </div>
                        <div>
                            <div style={{ display: "flex", flexDirection: "row", justifyContent: "flex-start" }}>
                                <h1 style={{ color: "white" }}>
                                    Upcoming Jobs
                                </h1>
                            </div>
                            <div style={{ display: "flex", flexDirection: "row" }}>
                                {data.map((i, key) => {
                                    console.log(i)
                                    return (
                                        <Card
                                            jid={i._id}
                                            description={i.description}
                                            jobName={i.jobName}
                                            salary={i.salary}
                                            apply={applyJob}
                                            appliedUsers={i.appliedUsers}

                                        />

                                    )
                                })}

                            </div>

                        </div>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default ServiceWorker