export interface CreateUserRequest {
    birthDate: string;
    documentNumber: string;
    documentType: string;
    email: string;
    firstLastName: string;
    frequent: boolean;
    lastLastName?: string;
    name: string;
    numberOfFlights: number;
    password: string;
    phone: string;
    prefix: string;
    role: string;
    title: string;
}
