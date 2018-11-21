export const HomeReducer = (state = [], actions) => {
    switch (actions.type) {
        case 'GET_LIST':
            return Object.assign({}, state, { message:'welcome'});
            
        default:
            return state;
    }
}