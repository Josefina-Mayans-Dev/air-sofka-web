export interface IInput {
    id: string,
    label?: string,
    value: string,
    placeholder: string,
    type: string,
    error?: string,
    formControlName: string,
    required?: boolean | true,
    disabled?: boolean | false
}