'use client';
import { Button, Label, Modal, TextInput } from 'flowbite-react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { IBook } from '../interfaces/common';
import { usePostCreateReviewMutation } from '../redux/features/api/apiSlice';
import { toast } from 'react-toastify';
import { addReview } from '../redux/features/Review/reviewSlice';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
interface EditBookProps {
    openEditModal: boolean;
    setOpenEditModal: React.Dispatch<React.SetStateAction<boolean>>;
    data: IBook;
}
export default function EditBook({ openEditModal, setOpenEditModal, data }: EditBookProps) {
    console.log('I am from the edit book', data);
    const { id: book } = useParams();
    const { register, handleSubmit, formState: { errors }, reset } = useForm<IBook>();
    const { imgUrl, title, author, genre, publicationYear } = data;

    // use mutation hook for creating review
    const [postCreateReview] = usePostCreateReviewMutation();
    // toast messages
    const reviewCreateSuccessNotify = () => {
        toast.success("Review created successfully.");
    };
    const reviewCreateErrorNotify = (error: string) => {
        toast.error(error);
    };
    const reviews = useAppSelector((state) => state.storedReviews.reviews);
    console.log('from store', reviews);
    const dispatch = useAppDispatch();

    const reviewSubmit: SubmitHandler<IBook> = async (data: IBook) => {
        // const rating = (data.rating);
        dispatch(addReview({ ...data, book }));
        await postCreateReview({ ...data, book }).unwrap().then((response) => {
            console.log(response);
            if (response.statusCode === 200) {
                reviewCreateSuccessNotify();
            }
        }).catch((error) => {
            console.log('errors', error);
            if (error) {
                reviewCreateErrorNotify(error?.data?.message);
            }
        });
        reset();
    };

    return (
        <>
            <Modal show={openEditModal} size="md" popup onClose={() => setOpenEditModal(false)}>
                <Modal.Header />
                <Modal.Body>
                    <form onSubmit={handleSubmit(reviewSubmit)} >
                        <div className="space-y-6">
                            <h3 className="text-xl font-medium text-gray-900 dark:text-white">Edit your book</h3>
                            <div>
                                <div className="mb-2 block">
                                    <Label htmlFor="title" value="Book title" />
                                </div>
                                <TextInput id="title" type='text' value={title} required {...register("title")} />
                                {errors.title && <p>{errors.title.message?.toString()}</p>}
                            </div>
                            <div>
                                <div className="mb-2 block">
                                    <Label htmlFor="author" value="Book author" />
                                </div>
                                <TextInput id="author" type="text" value={author} required  {...register("author")} />
                                {errors.author && <p>{errors.author.message?.toString()}</p>}
                            </div>
                            <div>
                                <div className="mb-2 block">
                                    <Label htmlFor="genre" value="Book genre" />
                                </div>
                                <TextInput id="genre" type="text" value={genre} required {...register("genre")} />
                                {/* {errors.rating && <p>{errors.rating.message?.toString()}</p>} */}
                                {errors.genre && <p>{errors.genre.message}</p>}
                            </div>
                            <div>
                                <div className="mb-2 block">
                                    <Label htmlFor="publicationYear" value="Reviewer name" />
                                </div>
                                <TextInput id="publicationYear" value={publicationYear} type="text" required {...register("publicationYear")} />
                                {errors.publicationYear && <p>{errors.publicationYear.message?.toString()}</p>}
                            </div>
                            <div>
                                <div className="mb-2 block">
                                    <Label htmlFor="imgUrl" value="Book imgUrl" />
                                </div>
                                <TextInput id="imgUrl" value={imgUrl} type="text" required {...register("imgUrl")} />
                                {errors.imgUrl && <p>{errors.imgUrl.message?.toString()}</p>}
                            </div>
                            <div className="w-full">
                                <Button type="submit">Edit book</Button>
                            </div>
                        </div>
                    </form>
                </Modal.Body>
            </Modal>
        </>
    );
}


