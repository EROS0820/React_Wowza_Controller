export default function logout() {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
}

export const INVALID_TOKEN = "Auth token is invalid.";