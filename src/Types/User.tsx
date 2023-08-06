
interface IUser {
    name: string;
    email: string;
    password: string;
    gender: 'male' | 'female';
    contactNo: string;
    bloodGroup?: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';
    presentAddress: string;
};