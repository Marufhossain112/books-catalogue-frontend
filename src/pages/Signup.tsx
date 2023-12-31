import { SubmitHandler, useForm } from "react-hook-form";
import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";

import { useState } from "react";
import { IUser } from "../interfaces/common";
import { usePostCreateUserMutation } from "../redux/features/user/userApi";

export default function SignUp() {
    const [isChecked, setIsChecked] = useState(false);
    const [postCreateUser] = usePostCreateUserMutation();
    const { register, handleSubmit, formState: { errors }, reset } = useForm<IUser>();
    const singupSuccessNotify = () => {
        toast.success("User created successfully.");
    };
    const singupFailNotify = (error: string) => {
        toast.error(error);
    };
    const handleCheckboxChange = () => {
        setIsChecked((prevState) => !prevState);
    };

    // submit the form
    const onSubmit: SubmitHandler<IUser> = async (data) => {
        await postCreateUser(data).unwrap().then((response) => {
            // console.log(response);
            if (response.statusCode === 200) {
                singupSuccessNotify();
            }
        }).catch((error) => {
            console.log('errors', error);
            if (error) {
                singupFailNotify(error?.data?.message);
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

                <Button disabled={!isChecked} type="submit">
                    Register new account
                </Button>
                <ToastContainer />

            </form >
        </>

    );
}


