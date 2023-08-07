import { Button, Navbar, TextInput } from 'flowbite-react';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { logout } from '../redux/features/user/userSlice';
import { FaFilter } from 'react-icons/fa';

import "./../styles/styles.css";
// import { useState } from 'react';
// import { useGetSearchedBooksFromLatestQuery } from '../redux/features/api/apiSlice';
import { setSearchTerm } from '../redux/features/searchFilters/action';
// import { useGetSearchedBooksFromLatestQuery } from '../redux/features/api/apiSlice';
export default function NavbarWithCTAButton() {
    // const [searchTerm, setSearchTerm] = useState('');
    const isLoggedIn = useAppSelector((state) => state.persistedReducer.isLoggedIn);
    // const handleInputChange = (event) => {
    //     setSearchTerm(event.target.value);
    // };
    // const { data } = useGetSearchedBooksFromLatestQuery(searchTerm);
    // console.log('')
    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     console.log('Input value:', searchTerm);
    //     // You can perform further actions with the input value here
    //     setSearchTerm("");
    // };
    const dispatch = useAppDispatch();
    const handleLogOut = () => {
        dispatch(logout());
    };

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const searchTerm = event.target.value;
        dispatch(setSearchTerm(searchTerm));
    };

    // const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     const filterTitle = event.target.value;
    //     dispatch(setFilterTitle(filterTitle));
    // };
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
                        src="/src/assets/images/book1.png"
                    />
                </div>
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
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
                            required
                            type="text"
                            onChange={handleSearchChange}
                        />
                    </div>
                    <div>
                        <div className='flex items-center gap-2'>
                            {/* <Button type="submit">
                                Search
                            </Button> */}
                            <FaFilter></FaFilter>
                            {/* <div className="flex flex-col">
                                <p className='text-stone-500 hover:underline'>Genre</p><p className='text-stone-500 hover:underline'>Publication year</p>
                            </div> */}
                        </div>
                        <div className='top-2 left-8 relative'>
                            {/* <div className='top-2 relative'>
                            <p>Genre</p>
                            <p>Publication Year</p>
                        </div> */}
                        </div>
                    </div>
                </form>
            </div>
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
                        <Navbar.Link onClick={handleLogOut}>Sign Out</Navbar.Link>
                    ) : (
                        <Navbar.Link href="/signin">Sign in</Navbar.Link>
                    )}
                </>}

                <Navbar.Link href="/signup">
                    Sign Up
                </Navbar.Link>
            </Navbar.Collapse>
        </Navbar>
    );
}


