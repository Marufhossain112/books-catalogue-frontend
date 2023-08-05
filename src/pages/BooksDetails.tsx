
import { Card } from 'flowbite-react';
export default function BooksDetails() {
    return (
        <>
            <Card
                horizontal
                imgSrc="/src/assets/images/book1.png"
                className='mx-auto mb-6'
            >
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    <p>
                        Noteworthy technology acquisitions 2021
                    </p>
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    <p>
                        Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                    </p>
                </p>
            </Card>
            {/* <p className='text-center text-3xl underline mb-4'>Reviews</p> */}
        </>

    );
}

