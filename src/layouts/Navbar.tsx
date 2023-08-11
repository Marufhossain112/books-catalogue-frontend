import logo from "/src/assets/images/book1.png";
import { Navbar, TextInput } from 'flowbite-react';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { logout } from '../redux/features/user/userSlice';
import { FaFilter } from 'react-icons/fa';
import "./../styles/styles.css";
import { setFilterGenre, setFilterGenrePublicationYear, setFilterPublicationYear, setSearchTerm } from '../redux/features/searchFilters/searchFilterAction';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
export default function NavbarWithCTAButton() {
    const navigate = useNavigate();
    const [isFilterClick, setIsFilterClick] = useState(false);
    const [isGenreClick, setIsGenreClick] = useState(false);
    const [isPublicationYearClick, setIsPublicationYearClick] = useState(false);
    const [genre, setGenreValue] = useState('');
    const [publicationYear, setPublicationYearValue] = useState('');
    // const [publicationYearValue, setPubli] = useState('');
    const isLoggedIn = useAppSelector((state) => state.persistedReducer.isLoggedIn);
    // const isFilterGenrePublication = useAppSelector((state) => state.searchAndFilter.isFilterGenrePublication);
    const dispatch = useAppDispatch();
    const handleLogOut = () => {
        dispatch(logout());
    };
    const handleAddBook = () => {
        navigate('/new-book');
    };
    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const searchTerm = event.target.value;
        dispatch(setSearchTerm(searchTerm));

    };
    const handleGenreChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const genreValue = event.target.value;
        setGenreValue(genreValue);
        dispatch(setFilterGenre(genreValue));
    };

    const handlePublicationYearChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const publicationYearValue = event.target.value;
        setPublicationYearValue(publicationYearValue);
        dispatch(setFilterPublicationYear(publicationYearValue));
    };
    const handleFilters = () => {
        setIsFilterClick(true);
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleGenreClick = (e: any) => {
        e.preventDefault();
        setIsGenreClick(true);
        // dispatch(setFilterGenre(genreValue));
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handlePublicationYear = (e: any) => {
        e.preventDefault();
        setIsPublicationYearClick(true);
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleGenrePublicationYear = (e: any) => {
        e.preventDefault();
        if (genre == "") {
            dispatch(setFilterPublicationYear(publicationYear));
            // console.log(1);
        }
        else if (publicationYear == "") {
            dispatch(setFilterGenre(genre));
            // console.log(2);
        } else {
            dispatch(setFilterGenrePublicationYear({ genre, publicationYear }));
            // console.log(3);
        }
    };
    // useFilterBooksByGenrePublicationYearQuery()
    return (
        <Navbar
            fluid
            rounded
        >
            <Navbar.Brand href="/">
                <div className="logo max-h-20">
                    <img
                        alt="Books Logo"
                        className="mr-0  h-20 "
                        src={logo}
                    />
                </div>
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white ">
                    Books Zone
                </span>
            </Navbar.Brand>
            <div className="flex md:order-2">
                <Navbar.Toggle />
            </div>
            <div className='order-3 '>
                <form className="flex max-w-md gap-4">
                    <div>
                        <TextInput
                            id="email1"
                            placeholder="Search..."
                            // required
                            type="text"
                            onChange={handleSearchChange}
                        />
                    </div>
                    <div>
                        <div className={!isFilterClick ? `flex items-center  gap-2 relative top-3` : `flex items-center  gap-2 `}>

                            <FaFilter onClick={handleFilters}></FaFilter>
                            {isFilterClick && <div className="flex flex-col">
                                <button onClick={handleGenreClick} className="flex gap-1"> <p className='text-stone-500 hover:underline'>Genre</p>
                                    {

                                        isGenreClick && <input onChange={handleGenreChange} type="text" style={{ height: "1.5rem", width: "5rem" }} />
                                    }
                                </button>
                                <button onClick={handlePublicationYear} className="flex gap-1 mt-1 ">  <p className='text-stone-500 hover:underline'>Publication year</p> {
                                    isPublicationYearClick && <input onChange={handlePublicationYearChange} type="text" style={{ height: "1.5rem", width: "5rem" }} />
                                }</button>

                                <button className='outline mt-1' onClick={handleGenrePublicationYear}>Filter</button>
                            </div>}
                        </div>

                    </div>
                </form>
            </div >
            <Navbar.Collapse>
                <Navbar.Link
                    active
                    href="/"
                >
                    <p>
                        Home
                    </p>
                </Navbar.Link>
                <Navbar.Link href="/all-books">
                    All books
                </Navbar.Link>

                {<>
                    {isLoggedIn ? (
                        <> <Navbar.Link onClick={handleAddBook}>Add Book</Navbar.Link>
                            <Navbar.Link onClick={handleLogOut}>Sign Out</Navbar.Link></>
                    ) : (
                        <Navbar.Link href="/signin">Sign in</Navbar.Link>
                    )}
                </>}

                <Navbar.Link href="/signup">
                    Sign Up
                </Navbar.Link>
            </Navbar.Collapse>
        </Navbar >
    );
}


