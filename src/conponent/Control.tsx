export interface ControlProps{
    Mode:string
    onChangeMode(_mode:string):void
    delete():void
  }
export function Control(props:ControlProps){
    let control
    if(props.Mode === 'read'){
      control =  (<article>
          <ul>
            <li><a href="/create" onClick={(event)=>{
              event.preventDefault()
              props.onChangeMode('create')}}>create</a></li>
            <li><a href="/update" onClick={(event)=>{
              event.preventDefault()
              props.onChangeMode('update')}}>update</a></li>
            <li><input type="button" value='delete' onClick={(event)=>{
              event.preventDefault()
              props.delete()}}></input></li>
          </ul>
        </article>)
    }else if(props.Mode === 'welcome'){
      control = (<article>
          <ul>
            <li><a href="/create" onClick={(event)=>{
              event.preventDefault()
              props.onChangeMode('create')}}>create</a></li>
          </ul>
        </article>)
    }else{
      control=(<article></article>)
    }
    return control
  }
  

  export default Control;