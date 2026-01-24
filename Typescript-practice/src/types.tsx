type Info={
    id: number;
    name: string;
    email: string;
}

type Admin=Info & {
    lastLogin: Date;
}

type User=Info;

export {type Admin,type User};