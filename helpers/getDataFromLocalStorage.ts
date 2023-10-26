
export default function getUserFromLocalStorage() {
    const user = localStorage.getItem("user");
    return user ? JSON.parse(user) : null;
}