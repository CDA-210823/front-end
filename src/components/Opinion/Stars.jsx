import {Rating} from "react-simple-star-rating";

const Stars = ({setRating, rating}) => {
    const handleRating = (rate) => {
        console.log(rate)

        setRating(rate)
    }
    return (
        <Rating
                onClick={handleRating}
                ratingValue={rating}
            // fillColor='#BADA55'
                className="style-module_emptyIcons__Bg-FZ empty-icons"
                tooltipArray={['pas convaincu', 'bof', 'moyen', 'top', 'genial']}
                showTooltip
        />
    )
}
export default Stars




