import React from 'react';
import { Rating } from 'flowbite-react';

interface ReviewRatingProps {
    userRating: number;
}

export const ReviewRating: React.FC<ReviewRatingProps> = ({ userRating }) => {
    const maxRating = 5; // Assuming a maximum rating of 5 stars

    const renderStars = () => {
        const stars: JSX.Element[] = [];
        for (let i = 1; i <= maxRating; i++) {
            const starClass = i <= userRating ? 'gold-star' : 'white-star';
            stars.push(<Rating.Star key={i} className={starClass} />);
        }
        return stars;
    };

    return (
        <Rating>
            {renderStars()}
        </Rating>
    );
};

export default ReviewRating;
