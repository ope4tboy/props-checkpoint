import React from 'react'
import { CiStar } from "react-icons/ci";
import { FaCartArrowDown } from "react-icons/fa";



const Card = (props) => {
    return (
        <div>
            <div class="card" style={{ width: "18rem" }}>
                <img src={props.image}/>
                <div class="card-body">
                    <h5 class="card-title">{props.name}</h5>
                <p class="card-text">{props.description}</p>
                <p class="card-text">${props.price}</p>
                    <div className='mb-3 d-flex justify-content-between'>
                    <CiStar />
                    <CiStar />
                    <CiStar />
                    <CiStar />
                    <CiStar />
                    </div>
                    <br />
                    <a href="#" class="btn btn-primary w-100 Toheeb" ><FaCartArrowDown/> Add to Cart</a>
                </div>
            </div>

            <div class="card" style={{ width: "18rem" }}>
                <img src="./images/photo.jpeg" class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>

            <div class="card" style={{ width: "18rem" }}>
                <img src="./images/photo.jpeg" class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
    )
}

export default Card