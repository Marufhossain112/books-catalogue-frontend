export type IUser = {
    name: string;
    email: string;
    password: string;
    gender: string;
    contactNo: string;
    bloodGroup: string;
    presentAddress: string;
};
export type ILoginUser = {
    email: string;
    password: string;
};
export type IBook = {
    _id: string;
    id: string;
    title: string;
    author: string;
    genre: string;
    publicationYear: string;
    imgUrl?: string;
    reviews?: IReview[];
};
export type IReview = {
    title: string;
    body: string;
    rating: number;
    author: string;
    book: string;
};