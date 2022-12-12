import React from 'react'
import "./Card.css"
function PeopleApplied({ people }) {

    // 63870d8899e5210b8b76a99b

    return (
        <div>
            <div className='col-xs-12 mainCard'>
                <p className='d-flex' style={{ fontSize: "12px", alignContent: "flex-start", padding: "4px" }}>

                </p>



                <p className='applied'>
                    {people[0].Uid.name}and {people.length} have applied
                </p>

            </div>


        </div>
    )
}

export default PeopleApplied