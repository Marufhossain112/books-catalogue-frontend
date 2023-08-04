
import { Label, Select } from 'flowbite-react';

export default function BloodGroup() {
    return (
        <div
            className="max-w-md"
            id="select"
        >
            <div className="mb-2 block">
                <Label
                    htmlFor="blood"
                    value="Your blood group"
                />
            </div>
            <Select
                id="blood"
                required
            >
                <option>
                    A+
                </option>
                <option>
                    A-
                </option>
                <option>
                    B+
                </option>
                <option>
                    B-
                </option>
                <option>
                    AB+
                </option>
                <option>
                    AB-
                </option>
                <option>
                    O+
                </option>
                <option>
                    O-
                </option>
            </Select>
        </div>
    );
}


