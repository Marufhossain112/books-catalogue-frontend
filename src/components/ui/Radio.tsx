
import { Label, Radio } from 'flowbite-react';

export default function RadioButton() {
    return (
        <fieldset
            className="flex max-w-md flex-col gap-4"
            id="radio"
        >
            <legend className="mb-4">
                Choose your gender
            </legend>
            <div className="flex items-center gap-2">
                <Radio
                    defaultChecked
                    id="male"
                    name="gender"
                    value="male"
                />
                <Label htmlFor="male">
                    Male
                </Label>
            </div>
            <div className="flex items-center gap-2">
                <Radio
                    defaultChecked
                    id="female"
                    name="gender"
                    value="female"
                />
                <Label htmlFor="female">
                    Female
                </Label>
            </div>


        </fieldset>
    );
}


