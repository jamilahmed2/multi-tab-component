import React from 'react'

const Details = ({ TabsName, }) => {
    return (
        <>
            <div className='details-container'>
                <h1>Details</h1>
                <div>
                    {TabsName()
                    }
                </div>
            </div>
        </>
    )
}

export default Details