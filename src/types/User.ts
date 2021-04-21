export type UserType = {
    id: number,
    first_name: string,
    last_name: string,
    email: string,
    avatar: string,
}

export type UserResDataType = {
    data: UserType[]
}

export type UserError = {
    message: string
}

export type Auth = {
    user: {
        displayName: string
    }
    token: string,
}