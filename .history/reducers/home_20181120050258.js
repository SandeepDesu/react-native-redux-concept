export const HomeReducer = (state = [], actions) => {
    switch (actions.type) {
        case 'GET_LIST':
            return Object.assign({}, state, { message:'welcome'});
        case 'UPDATE_SUBJECTS_LIST'
        default:
            return state;
    }
}