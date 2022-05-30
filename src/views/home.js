import React from "react";

function Home() {
    return(
        <div className="jumbotron">
            <h1 className="display-3">Welcome!</h1>
            <p className="lead">Use the navbar to access each page.</p>
            <hr className="my-4"/>
                <p className="lead">
                    <a  className="btn btn-primary btn-lg" href="#" role="button">Sign Up</a>
                </p>
        </div>
    )
}

export default Home