import { SubmitHandler, useForm } from "react-hook-form";
import { Button, Label, TextInput } from 'flowbite-react';
import { usePostLoginUserMutation } from "../redux/features/api/apiSlice";
import { ILoginUser } from "../interfaces/common";
import { useAppDispatch } from "../redux/hooks";
import { login } from "../redux/features/user/userSlice";

export default function Signin() {
    const dispatch = useAppDispatch();
    const [postLoginUser] = usePostLoginUserMutation(undefined);
    const { register, handleSubmit, formState: { errors }, reset } = useForm<ILoginUser>();
    // submit the form
    const onSubmit: SubmitHandler<ILoginUser> = async (data) => {
        await postLoginUser(data).unwrap().then((response) => {
            console.log(response);
            if (response.statusCode === 200) {
                const user = data.email;
                const token = response.data.accessToken;
                dispatch(login({ user, token }));
            }
        }).catch((error) => {
            console.log('errors', error);
            if (error.status === 406) {
                // setFailed(error?.data?.message);
                // setShowCross(true);
            }
        });
        reset();
    };
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


