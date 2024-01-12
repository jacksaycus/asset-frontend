export interface IAccount {
    displayName: string;
    email: string;
    photoURL: string;
    role: string | undefined;
}

export interface NavItemConfig {
    title: string;
    path: string;
    icon: JSX.Element;
    info?: string;
    children?;
}

export interface HeaderLabel {
    id: string;
    label: string;
    alignRight: boolean;
}
