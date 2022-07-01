  
  interface HeaderPorps{
    title?:string
    onChangeMode(_mode:string):void
  }
  

export function Header(props:HeaderPorps){
    return (
      <header>
        <h1><a href="/" onClick={(event)=>{
          event.preventDefault()
          props.onChangeMode('welcome') }}>{props.title}</a></h1>
      </header>
    )
  }
  
  
export default Header;