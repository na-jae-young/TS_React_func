
interface CreateProps{
    InsertTopics(_title:string,_body:string):void
  }
export function Create(props:CreateProps){
    return (
      <article>
        <h2>Create</h2>
      <form action='/create_process' method='post' 
        onSubmit={(event:any)=>{
          event.preventDefault()
          const t = event.target.title.value
          const d = event.target.desc.value
          props.InsertTopics(t,d)}}>
        <p><input type='text' name="title" placeholder='title'></input></p>
        <p><textarea name='desc' placeholder='description'></textarea></p>
        <p><input type='submit' value='create'></input></p>
      </form>
      </article>
    )
  }

export default Create;