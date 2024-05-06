import React from "react";

export function Card() {
    return (
        <div className="card" style={{ width: "18rem" }}>
            <img src="https://placehold.co/500x325" className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, laboriosam. Sit enim quis ea reiciendis in dolorum nostrum laborum dolore quo maxime cupiditate beatae nemo exercitationem, voluptate provident sint debitis!.</p>
                <a href="#" className="btn btn-primary">Find out more!</a>
            </div>
        </div>
    )
};