import React, { useState } from 'react';
import { Rating } from 'flowbite-react'; // Import the appropriate icon from Flowbite

interface ReviewRatingProps {
    userRating: number;
}

export const ReviewRating: React.FC<ReviewRatingProps> = ({ userRating }) => {
    const totalStars = 5;
    const [hoveredStar, setHoveredStar] = useState<number | null>(null);

    return (
        <div className="flex items-center">
            {Array.from({ length: totalStars }, (_, index) => (
                <Rating
                    key={index}
                    size="md"
                    className={index < (hoveredStar !== null ? hoveredStar : userRating) ? 'text-gold-500' : 'text-white'}
                    onMouseEnter={() => setHoveredStar(index + 1)} // Set the hovered star when mouse enters
                    onMouseLeave={() => setHoveredStar(null)} // Reset hovered star when mouse leaves
                />
            ))}
        </div>
    );
};

export default ReviewRating;
