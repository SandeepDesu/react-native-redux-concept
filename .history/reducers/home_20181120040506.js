export const HomeReducer = (state = [], actions) => {
    switch (actions.type) {
        case 'GET_LIST':
            return Object.assign({}, state, { username: 'sandy', password: 'desu',email:'sandeepdesu34@gmail.com' });
        default:
            return state;
    }
}