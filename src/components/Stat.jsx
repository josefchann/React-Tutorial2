import "./Stat.css"
import { star } from "../assets"

export default function Stat(props) {
    return (
        <div className="cardContainer">
            <img src={props.img} alt="" className="images" />
            <div className="card-text">
                <div className="ratings">
                    <img src={star} alt="" className="bullet" />
                    <span>{props.rating}</span>
                    <span className="gray">({props.ratingNum})•</span>
                    <span className="gray">{props.country}</span>
                </div>
                <p>{props.description}</p>
                <p><span className="price">From ${props.price} </span>/ person</p>
            </div>
        </div>
    )
}