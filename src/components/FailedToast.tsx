'use client';
import { RxCross2 } from 'react-icons/rx';
import { Toast } from 'flowbite-react';
type UserAuthFormProps = {
    isFailed: string;
};
export default function FailedToast({ isFailed }: UserAuthFormProps) {
    return (
        <div className="flex flex-col gap-4">
            <Toast>
                <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-red-100 text-red-500 dark:bg-red-800 dark:text-red-200">
                    <RxCross2 />
                </div>
                <div className="ml-3 text-sm font-normal">
                    {isFailed}
                </div>
                <Toast.Toggle />
            </Toast >

        </div >
    );
}


