'use client';

import { Button, Label, Modal, TextInput } from 'flowbite-react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { IReview } from '../interfaces/common';
import { useState } from 'react';
// import { useParams } from 'react-router-dom';
interface AddReviewProps {
    openModal: boolean;
    setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}
// interface IReviewData {
//     [key: string]: any; // You might want to use a more specific type than "any"
// }


export default function AddReview({ openModal, setOpenModal }: AddReviewProps) {
    const [storeReview, setStoreReview] = useState({});
    const { id: book } = useParams();
    const { register, handleSubmit, formState: { errors } } = useForm<IReview>();

    const reviewSubmit = (data: IReview) => {
        setStoreReview({ ...data, book });
    };
    console.log("review data", storeReview);

    return (
        <>
            <Modal show={openModal} size="md" popup onClose={() => setOpenModal(false)}>
                <Modal.Header />
                <Modal.Body>
                    <form onSubmit={handleSubmit(reviewSubmit)} >
                        <div className="space-y-6">
                            <h3 className="text-xl font-medium text-gray-900 dark:text-white">Give a review</h3>
                            <div>
                                <div className="mb-2 block">
                                    <Label htmlFor="title" value="Review title" />
                                </div>
                                <TextInput id="title" placeholder='Give a review title' type='text' required {...register("title", { required: 'title is required' })} />
                                {errors.title && <p>{errors.title.message?.toString()}</p>}
                            </div>
                            <div>
                                <div className="mb-2 block">
                                    <Label htmlFor="body" value="Review description" />
                                </div>
                                <TextInput id="body" type="text" placeholder='Give a review description' required  {...register("body", { required: 'body is required' })} />
                                {errors.body && <p>{errors.body.message?.toString()}</p>}
                            </div>
                            <div>
                                <div className="mb-2 block">
                                    <Label htmlFor="rating" value="Review rating" />
                                </div>
                                <TextInput id="rating" placeholder='Rate 1 to 5' type="number" required {...register("rating", {
                                    required: 'Rating is required', min: { value: 1, message: "Rating must be at least 1" },
                                    max: { value: 5, message: "Rating must be at most 5" },
                                })} />
                                {/* {errors.rating && <p>{errors.rating.message?.toString()}</p>} */}
                                {errors.rating && <p>{errors.rating.message}</p>}
                            </div>
                            <div>
                                <div className="mb-2 block">
                                    <Label htmlFor="author" value="Reviewer name" />
                                </div>
                                <TextInput id="author" placeholder='Enter reviewer name' type="text" required {...register("author", { required: 'author is required' })} />
                                {errors.author && <p>{errors.author.message?.toString()}</p>}
                            </div>
                            <div className="w-full">
                                <Button type="submit">Post a review</Button>
                            </div>
                        </div>
                    </form>
                </Modal.Body>
            </Modal>
        </>
    );
}


