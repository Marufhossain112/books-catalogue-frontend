'use client';

import { Card, Spinner } from 'flowbite-react';
import { IBook } from '../interfaces/common';
import { useAppSelector } from '../redux/hooks';
import { useFilterBooksByGenreFromAllQuery, useFilterBooksByGenrePublicationYearFromAllQuery, useFilterBooksByPublicationYearFromAllQuery, useGetBooksQuery, useGetSearchedBooksFromAllQuery } from '../redux/features/api/apiSlice';
import { useNavigate } from 'react-router-dom';
export default function AllBooks() {
    const searchTerm = useAppSelector((state) => state.searchAndFilter.searchTerm);
    const isFilterGenre = useAppSelector((state) => state.searchAndFilter.isFilterGenre);
    const isFilterPublicationYear = useAppSelector((state) => state.searchAndFilter.isFilterPublication);
    const isFilterGenrePublicationYear = useAppSelector((state) => state.searchAndFilter.isFilterGenrePublication);
    const FilterGenreValue = useAppSelector((state) => state.searchAndFilter.filterGenre);
    const FilterPublicationValue = useAppSelector((state) => state.searchAndFilter.filterPublicationYear);
    const FilterGenrePublicationValue = useAppSelector((state) => state.searchAndFilter.filterGenrePublicationYear);
    // console.log("TATATATATATAT", FilterGenrePublicationValue);
    // console.log(FilterGenreValue);
    const navigate = useNavigate();
    const { data, isLoading: Loading } = useGetBooksQuery(undefined);
    const { data: searchResponse, isLoading } = useGetSearchedBooksFromAllQuery(searchTerm);
    const { data: filterGenreResponse, isLoading: LoadingGenre } = useFilterBooksByGenreFromAllQuery(FilterGenreValue);
    const { data: filterPublicationYearResponse, isLoading: LoadingPublicationYear } = useFilterBooksByPublicationYearFromAllQuery(FilterPublicationValue);
    const { data: GenrePublicationYearResponse, isLoading: LoadingGenreYear } = useFilterBooksByGenrePublicationYearFromAllQuery(FilterGenrePublicationValue);
    if (isLoading || LoadingGenre || LoadingPublicationYear || Loading || LoadingGenreYear) {
        // return <p>I am Loading</p>;
        return <div className='text-center'>
            <Spinner
                aria-label="Extra large spinner example"
                size="xl"
            />
        </div>;

    }
    console.log("both", GenrePublicationYearResponse);
    let books;
    if (isFilterGenrePublicationYear) {
        books = GenrePublicationYearResponse.data;
    }
    else if (filterGenreResponse === "" || filterPublicationYearResponse === "") {
        books = data.data;
    } else if (isFilterGenre === true && filterGenreResponse != "") {
        books = filterGenreResponse.data;
    } else if (isFilterPublicationYear && filterPublicationYearResponse != "") {
        books = filterPublicationYearResponse.data;
    }
    else if (isFilterGenre && isFilterPublicationYear) {
        books = GenrePublicationYearResponse.data;
        console.log("duitai true", books);
    }
    else {
        books = searchResponse.data;
    }
    // const books = isFilterGenre ? : searchResponse.data;
    return (
        <>
            <h1 className='text-center text-3xl mb-5 underline'>All Books</h1>
            <div className='flex flex-wrap container mx-auto justify-center'>
                {books.map((book: IBook, index: number) => {
                    const { author, genre, publicationYear, title, imgUrl, _id } = book;
                    return (<Card
                        onClick={() => navigate(`/books/${_id}`)}
                        key={index}
                        horizontal
                        imgSrc={imgUrl ? imgUrl : "/src/assets/images/book1.png"}
                        className='mx-auto mb-6 root'
                        style={{ minWidth: "25rem", maxWidth: "25rem", }}
                    // style={{ height: "15rem", width: "25rem" }}
                    >
                        <div>
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
                    </Card>);
                }
                )}
            </div ></>
    );
}


