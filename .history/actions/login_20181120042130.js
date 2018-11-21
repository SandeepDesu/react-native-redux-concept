export const getUserDetails = () => {
    return {
        type:'GET_USER_CREDENTIALS'
    }
}



export const updateUserDetails = (value) => {
    return {
        type:'update_USER_CREDENTIALS',
        
    }
}