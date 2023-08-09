'use client';

import { Button, Checkbox, Label, Modal, TextInput } from 'flowbite-react';

export default function AddReview({ openModal, setOpenModal }) {
    return (
        <>
            <Modal show={openModal} size="md" popup onClose={() => setOpenModal(false)}>
                <Modal.Header />
                <Modal.Body>
                    <div className="space-y-6">
                        <h3 className="text-xl font-medium text-gray-900 dark:text-white">Give a review</h3>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="title" value="Review title" />
                            </div>
                            <TextInput id="title" type='text' required />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="body" value="Review description" />
                            </div>
                            <TextInput id="body" type="text" required />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="rating" value="Review rating" />
                            </div>
                            <TextInput id="rating" type="text" required />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="author" value="Reviewer name" />
                            </div>
                            <TextInput id="author" type="text" required />
                        </div>

                        <div className="w-full">
                            <Button>Post a review</Button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
}


