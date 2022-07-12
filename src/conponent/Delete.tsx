interface DeleteProps{
    confirm():void
}

export function Delete(props:DeleteProps){
    return(<p onClick={(e)=>{
        e.preventDefault()
        props.confirm()
    }}></p>)
}

export default Delete