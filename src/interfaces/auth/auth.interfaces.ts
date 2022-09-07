export interface User {
    uid: string | null;
    name: string | null;
}

export interface AuthState {
    online: boolean;
    user: User | null;
}