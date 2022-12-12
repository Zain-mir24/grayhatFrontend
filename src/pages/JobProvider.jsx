import React, { useState, useEffect } from 'react'

import { useNavigate } from 'react-router-dom';
import axios from "axios"
import Card from '../components/ViewHistory';
import PeopleApplied from '../components/peopleApplied';
function JobProvider() {
    const [data, setData] = useState([])
    const [people, setPeople] = useState([])
    let navigate = useNavigate();
    const getJobs = () => {
        try {
            axios.get('http://localhost:3000/jobs/Viewjobhistory?Eid=63860f3dfba497b6ad7511aa').then((res) => {
                setData(res.data.data)
            }).catch(e => {
                console.log(e)

            })

        } catch (e) {
            console.log(e)
        }
    }
    const getAppliedUsers = () => {
        try {
            axios.get('http://localhost:3000/jobs/PeopleApplied').then((res) => {

                let data = res.data.data.map((i, key) => {
                    return i.appliedUsers
                })


                setPeople(data)
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

            }).catch(e => {
                console.log(e)
            })
        } catch (e) {
            console.log(e)
        }
    }
    useEffect(() => {
        getJobs()
        getAppliedUsers()
    }, [])
    return (
        <div className='main'>
            <div className='row'>
                <div className='col-md-12 col-sm-8 mainBackground'>
                    <div className='insideMain'>
                        <h1 style={{ color: "white" }}>
                            Welcome Back <br />    Job Provider
                        </h1>

                        <div className='d-flex'>
                            <button onClick={() => navigate('/')}>
                                Switch to Service Provider
                            </button>
                        </div>
                        <div>
                            <div style={{ display: "flex", flexDirection: "row", justifyContent: "flex-start" }}>
                                <h1 style={{ color: "white" }}>
                                    Job History
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
                        <div>
                            <div style={{ display: "flex", flexDirection: "row", justifyContent: "flex-start" }}>
                                <h1 style={{ color: "white" }}>
                                    People applied
                                </h1>

                            </div>
                            <div style={{ display: "flex", flexDirection: "row" }}>
                                {people.map((i, key) => {


                                    return (
                                        <PeopleApplied

                                            people={i}
                                        />

                                    )
                                })}

                            </div>

                        </div>
                        <div>
                            <div style={{ display: "flex", flexDirection: "row", justifyContent: "flex-start" }}>
                                <h1 style={{ color: "white" }}>
                                    Post job
                                </h1>

                            </div>


                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default JobProvider