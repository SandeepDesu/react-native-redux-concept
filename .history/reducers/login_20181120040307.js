const LoginReducer = (state = [], actions) => {
    switch(actions.type){
        case 'GET_USER_CREDENTIALS':
            return Object.assign({},state,{username:'sandy',password:'desu'})
    }
}