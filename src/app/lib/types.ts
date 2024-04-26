export type Note = {
    id: string;
    title: string;
    content: string;
    date_created: Date;
}

export type User = {
    id: string;
    name: string;
    email: string;
    password: string;
};