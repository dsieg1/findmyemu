export function setUrl(url){
    return{
        type: "SET_URL",
        payload: url
    }
}
export function setOpen(openState){
    return{
        type: "SET_OPEN",
        payload: openState
    }
}