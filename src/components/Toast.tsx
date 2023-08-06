'use client';
import { FaCheckCircle } from 'react-icons/fa';
import { RxCross2 } from 'react-icons/rx';
import { Toast } from 'flowbite-react';
type IToasterOptions = {
    eventName: string;
    isPass?: boolean;
};
export default function Toaster({ eventName, isPass }: IToasterOptions) {
    return (
        <div className="flex flex-col gap-4">
            <Toast>
                <div className={isPass ? `inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200` : `inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-red-100 text-red-500 dark:bg-red-800 dark:text-red-200`}>
                    {/* <HiCheck className="h-5 w-5" /> */}
                    {isPass ? <FaCheckCircle /> : <RxCross2 />}
                </div>
                <div className="ml-3 text-sm font-normal">
                    {eventName}
                </div>
                <Toast.Toggle />
            </Toast>

        </div>
    );
}


