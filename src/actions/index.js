
export const changeVideo = (url) => {
    return{
        type:"CHANGE_VIDEO",
        payload:{
            url:url
        }
    }
}