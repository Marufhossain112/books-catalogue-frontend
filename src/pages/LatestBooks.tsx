'use client';

import { Card, Spinner } from 'flowbite-react';
import { useGetLatestBooksQuery, useGetSearchedBooksFromLatestQuery } from '../redux/features/api/apiSlice';
import { IBook } from '../interfaces/common';
import { useAppSelector } from '../redux/hooks';
export default function LatestBooks() {
    const searchTerm = useAppSelector((state) => state.searchAndFilter.searchTerm);
    const { data: searchResponse, isLoading } = useGetSearchedBooksFromLatestQuery(searchTerm);
    // console.log('Lalalala', searchResponse?.data);
    // const { data, isLoading } = useGetLatestBooksQuery(undefined);
    // console.log('latest data', data);
    // console.log("data");
    if (isLoading) {
        // return <p>I am Loading</p>;
        return <div className='text-center'>
            <Spinner
                aria-label="Extra large spinner example"
                size="xl"
            />
        </div>;

    }

    // console.log("data", data?.data);
    // eslint-disable-next-line no-unsafe-optional-chaining
    // searchResponse.data.map(n => console.log('mapping cholse', n));
    // const { author, genre, imgUrl, publicationYear, title } = data.data;
    // let books;
    // // const books = searchResponse.data && searchResponse.data;
    // if (searchResponse.data != undefined) {
    //     books = searchResponse.data;
    // } else {
    //     books = data.data;
    // }
    // console.log('imgUrl', imgUrl);
    const books = searchResponse.data;
    return (
        <div className='flex flex-wrap container mx-auto justify-center'>
            {books.map((book: IBook) => {
                const { author, genre, publicationYear, title, imgUrl, id } = book;
                return (<Card
                    key={id}
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
                </Card>);
            }
            )}
        </div >
    );
}


