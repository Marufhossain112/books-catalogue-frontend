'use client';

import { Card, Spinner } from 'flowbite-react';
import { useGetBooksQuery } from '../redux/features/api/apiSlice';
import { IBook } from '../interfaces/common';
export default function AllBooks() {
    const { data, isLoading } = useGetBooksQuery(undefined);
    console.log("AllBooks", data);
    if (isLoading) {
        // return <p>I am Loading</p>;
        return <div className='text-center'>
            <Spinner
                aria-label="Extra large spinner example"
                size="xl"
            />
        </div>;

    }

    console.log("data", data?.data);
    // eslint-disable-next-line no-unsafe-optional-chaining

    // const { author, genre, imgUrl, publicationYear, title } = data.data;
    const books = data.data;
    // console.log('imgUrl', imgUrl);
    return (
        <div className='flex flex-wrap container mx-auto justify-center'>
            {books.map((book: IBook) => {
                const { author, genre, publicationYear, title, imgUrl } = book;
                return (<Card
                    horizontal
                    imgSrc={imgUrl ? imgUrl : "/src/assets/images/book1.png"}
                    className='mx-auto mb-6 root'
                    style={{ minWidth: "25rem", maxWidth: "25rem", }}
                // style={{ height: "15rem", width: "25rem" }}
                >
                    <div>
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            <p>
                                {title}
                            </p>
                        </h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                            <p>
                                {author}
                            </p>
                        </p>
                    </div>
                    <div>
                        <p><span className='font-bold'>Genre : </span>{genre}</p>
                        <p><span className='font-bold'>Released : </span>{publicationYear}</p>
                    </div>
                </Card>);
            }
            )}
        </div >
    );
}


