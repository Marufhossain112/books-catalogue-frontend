import { Navbar } from 'flowbite-react';

export default function NavbarWithCTAButton() {
    return (
        <Navbar
            fluid
            rounded
        >
            <Navbar.Brand href="https://flowbite-react.com">
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
            <Navbar.Collapse>
                <Navbar.Link
                    active
                    href="#"
                >
                    <p>
                        Home
                    </p>
                </Navbar.Link>
                <Navbar.Link href="#">
                    All books
                </Navbar.Link>
                <Navbar.Link href="/signin">
                    Sign in
                </Navbar.Link>
                <Navbar.Link href="/signup">
                    Sign Up
                </Navbar.Link>
            </Navbar.Collapse>
        </Navbar>
    );
}


