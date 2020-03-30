import React from 'react'
import UnsplashLogo from '../../img/unsplash_logo.svg'
 
export const ImgGrid = ({ resultsOfSearch, search }) => {

    let results
    if(resultsOfSearch.results) results = resultsOfSearch.results
    else results = resultsOfSearch

    return(
        <div className="container-fluid pt-5 m-top-header">
            <div className="row">

                <div className="col-12 text-center">
                   { search === ''
                       ? null
                       : <p className="h6 my-3 border rounded-pill px-4 py-3 ">
                           {resultsOfSearch.total} results of "{search}" </p> 
                    }
                </div>

                <div className="col-12 grid">

                    { results.map(hit => (
                        <div className="grid-item rounded-lg" key={hit.id}>

                            <div className="card-img">
                                <img className="" 
                                    src={hit.urls.small} 
                                    alt={hit.alt_description} 
                                    width="100%" 
                                />
                            </div>

                            <div className="creator d-flex px-1 py-1">
                                <div className="creator_img">
                                    <img 
                                        src={hit.user.profile_image.medium} 
                                        alt={hit.user.username} 
                                    />
                                </div>

                                <p className="my-auto mx-3">
                                    <a 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        href={hit.user.links.html}>
                                        {hit.user.username}
                                    </a>
                                </p>
                            </div>

                            <div className="download-link border px-4 py-1 border rounded-pill">
                                <a 
                                    download 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    href={hit.links.download}
                                    >
                                    Download
                                </a>
                            </div>
                            
                            <div className="credits invert">
                                <a 
                                    className=""
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    href={hit.links.html}>

                                        <img src={UnsplashLogo} 
                                        alt="Unsplash Credits" 
                                        title="View on Unsplash" 
                                        width="10px" />

                                    </a>
                            </div>

                        </div>
                    )) }    

                </div>
            </div>
        </div>
    )
}
