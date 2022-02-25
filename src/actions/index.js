
 export const changeVideo = (url) => {
    return{
        type:"CHANGE_VIDEO",
        payload:{
            url:url
        }
    }
}

export const changeLogin=(inline)=>{
    return{
        type:"CHANGE_LOGIN",
        payload:{
            inline
        }
    }
}

export const changeSignup=(inline)=>{
    return{
        type:"CHANGE_SIGNUP",
        payload:{
            inline
        }
    }
}

