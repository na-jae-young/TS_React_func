

export interface Topic {
    id:number;
    title:string;
    body:string;
  }
export interface NavProps{
    list:Topic[]
    onChangeMode(_mode:string,_id:number):void
  }
  

export function Nav(props:NavProps){
    let i = 0
    const list = []
    
    while(i < props.list.length){
      let lis = props.list[i]
      list.push(
      <li key={lis.id}>
        <a href={'/read/'+lis.id}
        onClick={(event)=>{
          event.preventDefault()
          props.onChangeMode('read',lis.id)}}>{lis.title}
        </a>
      </li>)
      i=i+1
    }
    return (
      <nav>
        <ol>
          {list}
        </ol>
      </nav>
    )
  }

  export default Nav;