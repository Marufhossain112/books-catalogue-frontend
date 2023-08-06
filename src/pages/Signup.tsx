import { SubmitHandler, useForm } from "react-hook-form";
import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import { Link } from 'react-router-dom';
import { usePostCreateUserMutation } from "../redux/features/api/apiSlice";

import { useState } from "react";
import Toaster from "../components/Toast";

interface IUser {
    name: string;
    email: string;
    password: string;
    gender: string;
    contactNo: string;
    bloodGroup: string;
    presentAddress: string;
}
export default function SignUp() {
    const [isSuccess, setSuccess] = useState(false);
    const [isFailed, setFailed] = useState("");
    const [showCross, setShowCross] = useState(false);
    const [isChecked, setIsChecked] = useState(false);
    const [postCreateUser] = usePostCreateUserMutation();
    const { register, handleSubmit, formState: { errors }, reset } = useForm<IUser>();
    const handleCheckboxChange = () => {
        setIsChecked((prevState) => !prevState);
    };

    // submit the form
    const onSubmit: SubmitHandler<IUser> = async (data) => {
        await postCreateUser(data).unwrap().then((response) => {
            // console.log(response);
            if (response.statusCode === 200) {
                setSuccess(true);
            }
        }).catch((error) => {
            // Handle the error here
            console.log('errors', error);
            if (error.status === 406) {
                setFailed(error?.data?.message);
                setShowCross(true);
            }
        });
        reset();
    };

    return (
        <>
            <h3 className='text-center font-medium text-3xl mt-5'>Create Account</h3>
            <form className="flex max-w-md mx-auto flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
                {/* name */}
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="name"
                            value="Enter name"
                        />
                    </div>
                    <TextInput
                        id="name"
                        placeholder=""
                        required
                        shadow
                        type="text"
                        {...register("name", { required: 'Name is required' })}
                    />
                    {errors.name && <p>{errors.name.message?.toString()}</p>}
                </div>
                {/* email */}
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="email2"
                            value="Enter email"
                        />
                    </div>
                    <TextInput
                        id="email2"
                        placeholder=""
                        required
                        shadow
                        type="email"
                        {...register("email", { required: 'Email is required' })}
                    />
                    {errors.email && <p>{errors.email.message?.toString()}</p>}
                </div>
                {/* password */}
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="password2"
                            value="Enter password"
                        />
                    </div>
                    <TextInput
                        id="password2"
                        required
                        shadow
                        type="password"
                        {...register("password", { required: 'Password is required' })}
                    />
                    {errors.password && <p>{errors.password.message?.toString()}</p>}
                </div>
                {/* gender */}
                <div>
                    <label>Gender Selection</label>
                    <select {...register("gender")}>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                {/* BloodGroup */}
                <div className="max-w-md" id="select">
                    <div className="mb-2 block">
                        <Label htmlFor="blood" value="Your blood group" />
                    </div>
                    <select id="blood" required {...register("bloodGroup")}>
                        <option value="A+">A+</option>
                        <option value="A-">A-</option>
                        <option value="B+">B+</option>
                        <option value="B-">B-</option>
                        <option value="AB+">AB+</option>
                        <option value="AB-">AB-</option>
                        <option value="O+">O+</option>
                        <option value="O-">O-</option>
                    </select>
                </div>
                {/* ContactNo. */}
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="contactNo"
                            value="Enter contact no."
                        />
                    </div>
                    <TextInput
                        id="contactNo"
                        placeholder=""
                        required
                        shadow
                        type="number"
                        {...register("contactNo", { required: 'Contact no is required' })}
                    />
                    {errors.contactNo && <p>{errors.contactNo.message?.toString()}</p>}
                </div>
                {/* Present Address */}
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="address"
                            value="Enter present address"
                        />
                    </div>
                    <TextInput
                        id="address"
                        placeholder=""
                        required
                        shadow
                        type="text"
                        {...register("presentAddress", { required: 'Address is required' })}
                    />
                    {errors.presentAddress && <p>{errors.presentAddress.message?.toString()}</p>}
                </div>
                <div className="flex items-center gap-2">
                    <Checkbox checked={isChecked} onChange={handleCheckboxChange} id="agree" />
                    <Label
                        className="flex"
                        htmlFor="agree"
                    >
                        <p>
                            I agree with the
                        </p>
                        <Link
                            className="text-cyan-600 hover:underline dark:text-cyan-500"
                            to="/forms"
                        >
                            <p>
                                terms and conditions
                            </p>
                        </Link>
                    </Label>
                </div>
                {isSuccess && <Toaster eventName="User created successfully" isPass={true} ></Toaster>}
                {showCross && <Toaster eventName={isFailed} isPass={false} ></Toaster>}
                <Button disabled={!isChecked} type="submit">
                    Register new account
                </Button>
            </form >
        </>

    );
}


