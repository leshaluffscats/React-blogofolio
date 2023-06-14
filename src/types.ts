import { FormEventHandler, SetStateAction, Dispatch } from 'react';



export interface IMenuProps {
    setActiveBurger(prev: any): void;
}

export interface IPostItemProps {
    id?: number;
    image?: string;
    text?: string;
    date: string;
    title: string;
    author?: number;
}

export interface IUserName {
    name: string;
}

export interface IThemeProps {
    theme: string;
}

export interface IWithThemeContextProps {
    children: React.ReactNode
}

export interface IThemeContext {
    isDark: boolean,
    setIsDark: React.Dispatch<React.SetStateAction<boolean>>
}

export interface IAction {
    type: string,
    payload: string,
}

export interface IPostState {
    posts: IPostItemProps[]
}

export interface ISelectedPage {
    selected: number;
}

export interface IErrorMessage {
    errorMessage: string;
}

export interface IHeading {
    heading: string;
}

export interface IPostContent {
    id: string;
    title: string;
    image: string;
    text: string;
}

export interface IFavPosts {
    favPosts: IPostItemProps[]
}

export interface IModal{
    message: string;
}

export interface IResetPassFormProps {
    text: string;
    handleReset: FormEventHandler<HTMLFormElement>;
    setFunc: Dispatch<SetStateAction<string>>;
    email?: string;
    password?: string;
    buttonText: string;
}