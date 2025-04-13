import React, {useState} from "react";

// TourCard renders individual tour details
const TourCard = ({id, name, info, price, image, onRemove}) =>{
    // local state to toggle Read More / Show Less
    const [readMore, setReadMore] = useState(false);

    return (
        <article className="tour-card">
            <h3>{name}</h3>
            <h5>{price}</h5>
            <h4>{image}</h4>

            <p>
                {/* Show full description if readMore is true, otherwise a slice */}
                {readMore ? description : `${description.substring(0, 80)}...`}
                <button onClick={() => setReadMore(!readMore)}>
                    {/* Toggle button text */}
                    {readMore ? "Show Less" : "Read More"}
                </button>
            </p>

            {/* Button to remove the tour card*/}
            <button className="btn-remove" onClick={() => {
                onRemove(id)
            }}>Not Interested</button>
        </article>
    )
}

export default TourCard;
