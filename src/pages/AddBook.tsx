import { SubmitHandler, useForm } from "react-hook-form";
import { Button, Label, TextInput } from 'flowbite-react';

import { IBook } from "../interfaces/common";
import { ToastContainer, toast } from "react-toastify";
import { usePostCreateBookMutation } from "../redux/features/books/booksApi";

export default function AddBook() {
    const [postCreateBook] = usePostCreateBookMutation();
    const { register, handleSubmit, formState: { errors }, reset } = useForm<IBook>();
    // toast messages
    const bookCreateSuccessNotify = () => {
        toast.success("Book created successfully.");
    };
    const bookCreateErrorNotify = (error: string) => {
        toast.error(error);
    };

    // submit the form
    const onSubmit: SubmitHandler<IBook> = async (data) => {
        // console.log('receive data', data);
        await postCreateBook(data).unwrap().then((response) => {
            // console.log(response);
            if (response.statusCode === 200) {
                bookCreateSuccessNotify();
            }
        }).catch((error) => {
            // console.log('errors', error);
            if (error) {
                bookCreateErrorNotify(error?.data?.message);
            }
        });
        reset();
    };


    return (
        <>
            <h3 className='text-center font-medium text-3xl '>Add New Book</h3>
            <form className="flex max-w-md mx-auto flex-col gap-4 mb-4" onSubmit={handleSubmit(onSubmit)}>
                {/* title */}
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="title"
                            value="Enter title"
                        />
                    </div>
                    <TextInput
                        id="title"
                        placeholder=""
                        required
                        shadow
                        type="text"
                        {...register("title", { required: 'title is required' })}
                    />
                    {errors.title && <p>{errors.title.message?.toString()}</p>}
                </div>
                {/* author */}
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="author"
                            value="Enter author name"
                        />
                    </div>
                    <TextInput
                        id="author"
                        placeholder=""
                        required
                        shadow
                        type="text"
                        {...register("author", { required: 'author is required' })}
                    />
                    {errors.author && <p>{errors.author.message?.toString()}</p>}
                </div>
                {/* genre */}
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="genre"
                            value="Enter genre"
                        />
                    </div>
                    <TextInput
                        id="genre"
                        required
                        shadow
                        type="text"
                        {...register("genre", { required: 'genre is required' })}
                    />
                    {errors.genre && <p>{errors.genre.message?.toString()}</p>}
                </div>
                {/* publicationYear. */}
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="publicationYear"
                            value="Enter publication year"
                        />
                    </div>
                    <TextInput
                        id="publicationYear"
                        placeholder=""
                        required
                        shadow
                        type="text"
                        {...register("publicationYear", { required: 'Publication year is required' })}
                    />
                    {errors.publicationYear && <p>{errors.publicationYear.message?.toString()}</p>}
                </div>
                {/* imgUrl */}
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="imgUrl"
                            value="Enter  imgUrl"
                        />
                    </div>
                    <TextInput
                        id="imgUrl"
                        placeholder=""
                        required
                        shadow
                        type="text"
                        {...register("imgUrl", { required: 'imgUrl is required' })}
                    />
                    {errors.imgUrl && <p>{errors.imgUrl.message?.toString()}</p>}
                </div>

                <Button type="submit">
                    Add new book
                </Button>
                <ToastContainer></ToastContainer>
            </form >
        </>

    );
}


