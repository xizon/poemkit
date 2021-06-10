export function authHeader() {
    // return authorization header with JWT(JSON Web Token) token
    let user = JSON.parse(localStorage.getItem('user'));

    if (user && user.token) {
        return { 'Authorization': 'Bearer ' + user.token };
    } else {
        return {};
    }
}

// Example:
// axios({headers: { ...authHeader(), 'Content-Type': 'application/json' }})