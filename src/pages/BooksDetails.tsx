
import { Card, Spinner } from 'flowbite-react';
import { useGetSingleBookQuery, useGetSingleBookReviewQuery } from '../redux/features/api/apiSlice';
import { useParams } from 'react-router-dom';
import { IReview } from '../interfaces/common';
import ReviewRating from '../components/ReviewRating';
import { useState } from 'react';
import AddReview from '../components/AddReview';
export default function BooksDetails() {
    const [openModal, setOpenModal] = useState(false);
    // const navigate = useNavigate();

    const { id } = useParams();
    const { data, isLoading } = useGetSingleBookQuery(id);
    const { data: reviews, isLoading: reviewLoading } = useGetSingleBookReviewQuery(id);
    console.log("My reviews", reviews);
    // handle loading
    if (isLoading || reviewLoading) {
        return <div className='text-center'>
            <Spinner
                aria-label="Extra large spinner example"
                size="xl"
            />
        </div>;
    }
    const { imgUrl, title, author, genre, publicationYear } = data.data;
    const reviewsList = reviews.data;
    const handleAddReview = () => {
        // OpenModal();
        // navigate('/add-review');
        setOpenModal(true);
    };
    return (
        <>
            <Card
                horizontal
                imgSrc={imgUrl ? imgUrl : "/src/assets/images/book1.png"}
                className='mx-auto mb-6 root'
                style={{ minWidth: "25rem", maxWidth: "25rem", }}
            >
                <div className='md:pt-14'>
                    <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                        <p>
                            {title}
                        </p>
                    </h5>
                    <div className="font-normal text-gray-700 dark:text-gray-400">
                        <p>
                            {author}
                        </p>
                    </div>
                </div>
                <div>
                    <p><span className='font-bold'>Genre : </span>{genre}</p>
                    <p><span className='font-bold'>Released : </span>{publicationYear}</p>
                </div>
            </Card>
            {!reviewsList.length ? <h1 className='text-center text-xl  mb-4 '>No reviews yet,click add review button to add a review </h1> : <>
                <h1 className='text-center text-3xl underline mb-4 '>Reviews</h1>
                {reviewsList.map((review: IReview, index: number) => {
                    const { author, body, title, rating } = review;
                    return (<Card
                        key={index}
                        horizontal
                        className='mx-auto mb-6 root'
                        style={{ minWidth: "25rem", maxWidth: "25rem", }}
                    >
                        <div>
                            <div className='flex'>
                                <h5 className="text-lg font-bold tracking-tight text-gray-900 dark:text-white mr-40">
                                    {author}
                                </h5>
                                <ReviewRating userRating={rating}></ReviewRating>
                            </div>
                            <div className="font-semibold text-gray-700 dark:text-gray-400">
                                <p>
                                    {title}
                                </p>
                            </div>
                            <div className="font-normal text-gray-700 dark:text-gray-400">
                                <p>
                                    {body}
                                </p>
                            </div>
                        </div>
                        <div>
                        </div>
                    </Card>);
                }
                )}
                <div className='text-center'>
                    <button onClick={handleAddReview} className='text-center text-2xl  mb-4 outline outline-stone-700 hover:bg-gray-100  p-1 rounded-md'>Add Your Review</button>
                </div>
                <AddReview openModal={openModal} setOpenModal={setOpenModal} />
            </>
            }

        </>

    );
}


