const LoginReducer = (state = [], actions) => {
    switch (actions.type) {
        case 'GET_USER_CREDENTIALS':
            return Object.assign({}, state, { username: 'sandy', password: 'desu',emal:'sandeepdesu34@gmail.com' });
        default:
            return state;
    }
}