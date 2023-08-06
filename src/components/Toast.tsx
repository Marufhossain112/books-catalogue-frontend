'use client';
import { FaCheckCircle } from 'react-icons/fa';
import { Toast } from 'flowbite-react';
type IPassToaster = {
    eventName: string;

};
export default function Toaster({ eventName }: IPassToaster) {
    return (
        <div className="flex flex-col gap-4">
            <Toast>
                <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
                    <FaCheckCircle />
                </div>
                <div className="ml-3 text-sm font-normal">
                    {eventName}
                </div>
                <Toast.Toggle />
            </Toast>

        </div>
    );
}


