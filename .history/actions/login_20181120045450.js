export const getUserDetails = () => {
    return {
        type:'GET_USER_CREDENTIALS'
    }
}



export const updateUserDetails = (value) => {
    return {
        type:'UPDATE_USER_CREDENTIALS',
        value:value
    }
}


export const getSubjectList = () => {
    return function(dispatch){
        fetch('https://api.talentscreen.io/v1/subject').then((res)=>res.json)
    }
}