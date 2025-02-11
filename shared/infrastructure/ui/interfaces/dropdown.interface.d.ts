export interface IDropdown {
    id: string;
    label?: string;
    options: {
        label: string;
        value: any;
    }[];
    size?: string;
    formControlName?: string;
    required?: boolean | true;
    disabled?: boolean | false;
}
