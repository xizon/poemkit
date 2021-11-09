export default () => {
    // return authorization header with JWT(JSON Web Token) token
    let user = JSON.parse(localStorage.getItem('user'));

    if (user && user.token) {
        return { 'Authorization': 'Bearer ' + user.token };
    } else {
        return {};
    }
}

/*
Example:

import authHeader from '@poemkit/helpers/auth-header.js';
axios({headers: { ...authHeader(), 'Content-Type': 'application/json' }})


Note: For Node.js Express back-end, please use x-access-token header like this:

export default () => {
    // return authorization header with JWT(JSON Web Token) token
    let user = JSON.parse(localStorage.getItem('user'));

    if (user && user.token) {
        return { 'x-access-token': user.token };
    } else {
        return {};
    }
}

*/
