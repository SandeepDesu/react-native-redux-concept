export const HomeReducer = (state = [], actions) => {
    switch (actions.type) {
        case 'GET_USER_CREDENTIALS':
            return Object.assign({}, state, { username: 'sandy', password: 'desu',email:'sandeepdesu34@gmail.com' });
        default:
            return state;
    }
}