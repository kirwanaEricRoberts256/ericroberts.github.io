import React from "react"
import Spinner from 'react-bootstrap/Spinner';

function Project(){
    return(
        <div>

<h1>loading</h1>

<Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>




        </div>
    )
}


export default Project;