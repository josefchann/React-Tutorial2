import Stat from "./Stat"
import "./Stat.css"
import Data from "./Data"

export default function Stats() {
    
    const statElements = Data.map(d => {
        return <Stat img={d.img} rating={d.rating} ratingNum={d.ratingNum} country={d.country} description={d.description} price={d.price} />
    })
    return (
        <div className="container">
            {statElements}
        </div>
    )
}