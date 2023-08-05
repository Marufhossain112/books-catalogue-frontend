import { useForm } from "react-hook-form";
import { Button, Label, TextInput } from 'flowbite-react';

export default function Signin() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data: unknown) => console.log(data);
    return (
        <>
            <h3 className='text-center font-medium text-3xl mt-5'>Sign in</h3>
            <form className="flex max-w-md mx-auto flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="email1"
                            value="Your email"
                        />
                    </div>
                    <TextInput
                        id="email1"
                        placeholder=""
                        required
                        type="email"
                        {...register("email", { required: 'Email is required' })}
                    />
                    {errors.email && <p>{errors.email.message?.toString()}</p>}
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="password1"
                            value="Your password"
                        />
                    </div>
                    <TextInput
                        id="password1"
                        required
                        type="password"
                        {...register("password", { required: 'Password is required' })}
                    />
                    {errors.password && <p>{errors.password.message?.toString()}</p>}
                </div>

                <Button type="submit">
                    Submit
                </Button>
            </form>
        </>

    );
}


