/* eslint-disable no-undefined */
import { Button, Modal } from 'flowbite-react';
import { HiOutlineExclamationCircle } from 'react-icons/hi';
// type for props
type DeleteReviewProps = {
    deletePopup: boolean;
    setDeletePopup: React.Dispatch<React.SetStateAction<boolean>>;
    setYesPopup: React.Dispatch<React.SetStateAction<boolean>>;
    // handleDeletePopup;
    handleDeletePopup: () => void;
};
export default function DeletePopUp({ deletePopup, setDeletePopup, handleDeletePopup }: DeleteReviewProps) {

    return (
        <>
            <Modal show={deletePopup} size="md" popup onClose={() => setDeletePopup(false)}>
                <Modal.Header />
                <Modal.Body>
                    <div className="text-center">
                        <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
                        <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                            Are you sure you want to delete this book?
                        </h3>
                        <div className="flex justify-center gap-4">
                            <Button color="failure" onClick={handleDeletePopup}>
                                Yes, I'm sure
                            </Button>
                            <Button color="gray" onClick={() => setDeletePopup(false)}>
                                No, cancel
                            </Button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal >
        </>
    );
}


