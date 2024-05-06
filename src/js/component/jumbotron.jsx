import React from "react";

export const Jumbotron = () => {
    return (
        <div className="px-4 pb-3 mb-4 bg-secondary rounded-3">
            <div className="container-fluid pb-5">
                <h1 className="display-5 fw-normal jumbotronTitle">A Warm Welcome!</h1>
                <p className="col-12 fs-5">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque, ducimus? Impedit doloremque odit nesciunt numquam, deserunt laudantium voluptates vero vitae in cupiditate sed facere vel pariatur, saepe rerum quasi atque.</p>
                <button className="btn btn-primary btn-lg" type="button">Call to action!</button>
            </div>
        </div>
    )
}

