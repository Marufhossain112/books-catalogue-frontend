import { Types } from 'mongoose';
export interface IUser {
    name: string;
    email: string;
    password: string;
    gender: string;
    contactNo: string;
    bloodGroup: string;
    presentAddress: string;
}
export interface ILoginUser {
    email: string;
    password: string;
}
export type IBook = {
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
    rating: string;
    author: string;
    book: Types.ObjectId | IBook;
};