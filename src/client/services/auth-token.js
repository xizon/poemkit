export default () => {
    // return authorization header with JWT(JSON Web Token) token
    let user = JSON.parse(localStorage.getItem('user'));

    if (user && user.token) {
        return user.token;
    } else {
        return null;
    }
}