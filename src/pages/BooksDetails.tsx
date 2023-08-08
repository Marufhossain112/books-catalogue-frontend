
import { Card, Spinner } from 'flowbite-react';
import { useGetSingleBookQuery } from '../redux/features/api/apiSlice';
import { useParams } from 'react-router-dom';
export default function BooksDetails() {
    const { id } = useParams();
    const { data, isLoading } = useGetSingleBookQuery(id);
    console.log("My data", data);
    // handle loading
    if (isLoading) {
        return <div className='text-center'>
            <Spinner
                aria-label="Extra large spinner example"
                size="xl"
            />
        </div>;
    }
    const { imgUrl, title, author, genre, publicationYear } = data.data;
    return (
        <Card
            horizontal
            imgSrc={imgUrl ? imgUrl : "/src/assets/images/book1.png"}
            className='mx-auto mb-6 root'
            style={{ minWidth: "25rem", maxWidth: "25rem", }}
        >
            <div className='md:pt-14'>
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
        </Card>

    );
}


