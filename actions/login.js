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


const updateSubjectList = (value) => {
    return {
        type:'UPDATE_SUBJECTS_LIST',
        value:value
    }
}


export const getSubjectList = () => {
    return function(dispatch){
        fetch('api_url')
        .then((res)=>res.json())
        .then((res)=>{
            dispatch(updateSubjectList(res))
        });
    }
}