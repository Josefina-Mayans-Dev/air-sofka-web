import { FormGroup } from "@angular/forms";
import { IInput } from "./input.interface";
import { IButton } from "./button.interface";
export interface Inav {
    type: string;
    action?: string;
    inputData?: IInput;
    formData?: FormGroup;
    buttonData?: IButton;
    divider?: boolean;
}
