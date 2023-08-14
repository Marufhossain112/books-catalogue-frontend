

import { Card, Spinner } from 'flowbite-react';
import { IBook } from '../interfaces/common';
import { useAppSelector } from '../redux/hooks';
import { useNavigate } from 'react-router-dom';
import { useGetBooksQuery } from '../redux/features/books/booksApi';
import { useFilterBooksByGenreFromAllQuery, useFilterBooksByGenrePublicationYearFromAllQuery, useFilterBooksByPublicationYearFromAllQuery, useGetSearchedBooksFromAllQuery } from '../redux/features/searchFilters/searchFilterApi';
export default function AllBooks() {
    const searchTerm = useAppSelector((state) => state.searchAndFilter.searchTerm);
    const isFilterGenre = useAppSelector((state) => state.searchAndFilter.isFilterGenre);
    const isFilterPublicationYear = useAppSelector((state) => state.searchAndFilter.isFilterPublication);
    const isFilterGenrePublicationYear = useAppSelector((state) => state.searchAndFilter.isFilterGenrePublication);
    const FilterGenreValue = useAppSelector((state) => state.searchAndFilter.filterGenre);
    const FilterPublicationValue = useAppSelector((state) => state.searchAndFilter.filterPublicationYear);
    const FilterGenrePublicationValue = useAppSelector((state) => state.searchAndFilter.filterGenrePublicationYear);

    const navigate = useNavigate();
    // get all books data
    // eslint-disable-next-line no-undefined
    const { data, isLoading: Loading } = useGetBooksQuery(undefined);
    // get searched books from all books data
    const { data: searchResponse, isLoading } = useGetSearchedBooksFromAllQuery(searchTerm, { refetchOnMountOrArgChange: true });
    // get filtered books from all books data based on genre
    const { data: filterGenreResponse, isLoading: LoadingGenre } = useFilterBooksByGenreFromAllQuery(FilterGenreValue);
    // get filtered books from all books data based on publicationYear
    const { data: filterPublicationYearResponse, isLoading: LoadingPublicationYear } = useFilterBooksByPublicationYearFromAllQuery(FilterPublicationValue);
    // get filtered books from all books data based on genre & publicationYear
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
    // console.log("both", GenrePublicationYearResponse);
    // handle all books data based on different criteria
    // let books;
    // if (isFilterGenrePublicationYear) {
    //     books = GenrePublicationYearResponse.data;
    // }
    // else if (filterGenreResponse === "" || filterPublicationYearResponse === "") {
    //     books = data.data;
    // } else if (isFilterGenre === true && filterGenreResponse != "") {
    //     books = filterGenreResponse.data;
    // } else if (isFilterPublicationYear && filterPublicationYearResponse != "") {
    //     books = filterPublicationYearResponse.data;
    // }
    // else if (isFilterGenre && isFilterPublicationYear) {
    //     books = GenrePublicationYearResponse.data;
    //     // console.log("duitai true", books);
    // }
    // else {
    //     books = searchResponse.data;
    // }
    // const books = isFilterGenre ? : searchResponse.data;



    // Combine the conditions to determine which set of books to display
    let books = searchResponse.data;
    if (isFilterGenrePublicationYear) {
        books = GenrePublicationYearResponse.data;
    } else if (isFilterGenre && filterGenreResponse !== "") {
        books = filterGenreResponse.data;
    } else if (isFilterPublicationYear && filterPublicationYearResponse !== "") {
        books = filterPublicationYearResponse.data;
    } else if (isFilterGenre || isFilterPublicationYear) {
        // Show books based on the last applied filter
        books = (isFilterGenre) ? filterGenreResponse.data : filterPublicationYearResponse.data;
    } else if (!searchTerm && !isFilterGenre && !isFilterPublicationYear) {
        // If no filters and search terms, show all books
        books = data.data;
    }
    // if (books.length < 1) {
    //     // console.log("komo kkkkkkkkkkkk");
    //     setNoBookFound(true);
    // }
    return (
        <>
            {books.length < 1 ? <div className='text-center flex justify-center items-center py-60'><p className='text-2xl font-medium'>No book found</p> </div> : <>  <h1 className='text-center text-3xl mb-5 underline'>All Books</h1>
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
                </div ></>}
        </>
    );
}


