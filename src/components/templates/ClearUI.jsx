import React from 'react'

export const ClearUI = () => {
    return(
        <div className="container-fluid py-5 mt-5 loading">
            <div className="row pt-5 text-center">
                <div className="col-12">
                    <h1 className="text-info my-5">Start your search</h1>
                    <p className="text-muted loading_circle"></p>
                </div>
            </div>
        </div>
    )
}
