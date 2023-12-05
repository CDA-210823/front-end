import {useState} from "react";
import {Rating} from "react-simple-star-rating";

const Stars = () => {
    const [rating, setRating] = useState(1)
    const handleRating = (rate) => {
        console.log(rate)

        setRating(rate)
    }
    return (
        <Rating
                // fillColor='#BADA55'
                tooltipArray={['pas convaincu', 'bof', 'moyen', 'top', 'genial']}
                showTooltip
                ratingValue={rating}
                onClick={handleRating}

        />
    )
}
export default Stars




