'use client';
import { Button, Label, Modal, TextInput } from 'flowbite-react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { IBook } from '../interfaces/common';
import { toast } from 'react-toastify';
import { usePostEditBookMutation } from '../redux/features/books/booksApi';

type EditBookProps = {
    openEditModal: boolean;
    setOpenEditModal: React.Dispatch<React.SetStateAction<boolean>>;
    data: IBook;
};
export default function EditBook({ openEditModal, setOpenEditModal, data }: EditBookProps) {
    const { id } = useParams();
    const { register, handleSubmit, formState: { errors } } = useForm<IBook>();
    const { imgUrl, title, author, genre, publicationYear } = data;

    // use mutation hook for creating review
    const [postEditBook] = usePostEditBookMutation();
    const bookSubmit: SubmitHandler<IBook> = async (data: IBook) => {
        await postEditBook({ data, id }).unwrap().then((response) => {
            if (response.statusCode === 200) {
                toast.success(response.message);
            }
        }).catch((error) => {
            if (error) {
                toast.error(error?.data?.message);
            }
        });
    };

    return (
        <>
            <Modal show={openEditModal} size="md" popup onClose={() => setOpenEditModal(false)}>
                <Modal.Header />
                <Modal.Body>
                    <form onSubmit={handleSubmit(bookSubmit)} >
                        <div className="space-y-6">
                            <h3 className="text-xl font-medium text-gray-900 dark:text-white">Edit your book</h3>
                            <div>
                                <div className="mb-2 block">
                                    <Label htmlFor="title" value="Book title" />
                                </div>
                                <TextInput id="title" type='text' defaultValue={title}  {...register("title")} />
                                {errors.title && <p>{errors.title.message?.toString()}</p>}
                            </div>
                            <div>
                                <div className="mb-2 block">
                                    <Label htmlFor="author" value="Book author" />
                                </div>
                                <TextInput id="author" type="text" defaultValue={author}   {...register("author")} />
                                {errors.author && <p>{errors.author.message?.toString()}</p>}
                            </div>
                            <div>
                                <div className="mb-2 block">
                                    <Label htmlFor="genre" value="Book genre" />
                                </div>
                                <TextInput id="genre" type="text" defaultValue={genre}  {...register("genre")} />
                                {/* {errors.rating && <p>{errors.rating.message?.toString()}</p>} */}
                                {errors.genre && <p>{errors.genre.message}</p>}
                            </div>
                            <div>
                                <div className="mb-2 block">
                                    <Label htmlFor="publicationYear" value="Reviewer name" />
                                </div>
                                <TextInput id="publicationYear" defaultValue={publicationYear} type="text"  {...register("publicationYear")} />
                                {errors.publicationYear && <p>{errors.publicationYear.message?.toString()}</p>}
                            </div>
                            <div>
                                <div className="mb-2 block">
                                    <Label htmlFor="imgUrl" value="Book imgUrl" />
                                </div>
                                <TextInput id="imgUrl" defaultValue={imgUrl} type="text"  {...register("imgUrl")} />
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


