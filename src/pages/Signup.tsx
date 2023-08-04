
'use client';

import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import { Link } from 'react-router-dom';
import RadioButton from '../components/ui/Radio';
import { DatePick } from '../components/ui/DatePick';
import BloodGroup from '../components/ui/BloodGroup';
export default function SignUp() {
    return (
        <>
            <h3 className='text-center font-bold text-4xl '>Sign up</h3>
            <form className="flex max-w-md mx-auto flex-col gap-4">
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
                    />
                </div>
                {/* email */}
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="email2"
                            value="Your email"
                        />
                    </div>
                    <TextInput
                        id="email2"
                        placeholder=""
                        required
                        shadow
                        type="email"
                    />
                </div>
                {/* password */}
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="password2"
                            value="Your password"
                        />
                    </div>
                    <TextInput
                        id="password2"
                        required
                        shadow
                        type="password"
                    />
                </div>
                {/* gender */}
                <RadioButton></RadioButton>
                {/* Date of Birth */}
                <div>
                    <>Choose date of birth : </>
                    <DatePick ></DatePick>
                </div>
                {/* BloodGroup */}
                <BloodGroup></BloodGroup>
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
                    />
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
                    />
                </div>
                <div className="flex items-center gap-2">
                    <Checkbox id="agree" />
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
                <Button type="submit">
                    Register new account
                </Button>
            </form>
        </>

    );
}


