import React from 'react'
import "./Card.css"
function Card({ jid, description, jobName, salary, apply, appliedUsers
}) {
    console.log(salary)
    // 63870d8899e5210b8b76a99b

    return (
        <div>
            <div className='col-xs-12 mainCard'>
                <p className='d-flex' style={{ fontSize: "12px", alignContent: "flex-start", padding: "4px" }}>
                    {description}
                </p>
                <p className='jobTitle'>
                    {jobName}
                </p>
                <p className='salary'>
                    Monthly Salary:{salary}
                </p>
                <p className='applied'>
                    +{appliedUsers.length} applied
                </p>
                <div className='cardLower'>
                    <button
                        onClick={() => apply(jid, "63870d8899e5210b8b76a99b")}
                        style={{ marginTop: "4px" }}>
                        Apply</button>
                </div>
            </div>


        </div>
    )
}

export default Card