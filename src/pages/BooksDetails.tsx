
import { Card, Spinner } from 'flowbite-react';

import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { IReview } from '../interfaces/common';
import ReviewRating from '../components/ReviewRating';
import { useState } from 'react';
import AddReview from '../components/AddReview';
import { AiTwotoneEdit } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import EditBook from './EditBook';
import { toast } from 'react-toastify';
import { useAppSelector } from '../redux/hooks';
import { useDeleteSingleBookMutation, useGetSingleBookQuery, useGetSingleBookReviewQuery } from '../redux/features/books/booksApi';
export default function BooksDetails() {
    const navigate = useNavigate();
    const { pathname } = useLocation();
    const { isLoggedIn } = useAppSelector((state) => state.persistedReducer);
    const [openModal, setOpenModal] = useState(false);
    const [openEditModal, setOpenEditModal] = useState(false);
    // const navigate = useNavigate();

    const { id } = useParams();
    const { data, isLoading } = useGetSingleBookQuery(id);
    const { data: reviews, isLoading: reviewLoading } = useGetSingleBookReviewQuery(id, { refetchOnMountOrArgChange: true });
    const [deleteSingleBook] = useDeleteSingleBookMutation();
    // handle edit button    
    const handleEditBook = () => {
        setOpenEditModal(true);
    };
    // handle delete button
    const handleDeleteBook = async () => {
        await deleteSingleBook(id).unwrap().then((response) => {
            // console.log(response);
            if (response.statusCode === 200) {
                toast.success(response.message);
            }
        }).catch((error) => {
            if (error) {
                toast.error(error?.data?.message);
            }
        });

    };
    if (isLoading || reviewLoading) {
        return (
            <div className='text-center'>
                <Spinner aria-label="Extra large spinner example" size="xl" />
            </div>
        );
    }

    if (data.data === null) {
        return (
            <div className='text-center h-[50vh] grid content-center'>
                <p className='font-medium text-2xl'>Sorry, no book data available.</p>
            </div>
        );
    }

    const { imgUrl, title, author, genre, publicationYear } = data.data;
    const reviewsList = reviews.data;
    // console.log('I am grom BooksDetails', reviewsList);
    const handleAddReview = () => {
        if (!isLoggedIn) {
            sessionStorage.setItem('previousPrivateRoute', pathname);
            navigate("/signin");
        } else {
            setOpenModal(true);
        }
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
            <div className='text-center font-medium text-md  mb-1'>
                <button onClick={handleEditBook} className='hover:underline' style={{ display: 'inline-flex', alignItems: 'center', gap: '0.1rem' }}><span>Edit book</span> <span className='mr-48'> <AiTwotoneEdit></AiTwotoneEdit></span> </button>
                <button onClick={handleDeleteBook} className='hover:underline' style={{ display: 'inline-flex', alignItems: 'center', gap: '0.1rem' }}><span>Delete book</span> <span> <MdDelete></MdDelete></span> </button>
            </div>
            {!reviewsList.length ? <> <h1 className='text-center text-lg   mb-4 '>No reviews yet,click add review button to add a review </h1>  <div className='text-center'>
                <button onClick={handleAddReview} className='text-center text-2xl  mb-4 outline outline-stone-700 hover:bg-gray-100  p-1 rounded-md'>Add Your Review</button>
            </div> </> : <>
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

            </>
            }
            <AddReview openModal={openModal} setOpenModal={setOpenModal} />
            <EditBook data={data.data} openEditModal={openEditModal} setOpenEditModal={setOpenEditModal}></EditBook>
        </>
    );
}


