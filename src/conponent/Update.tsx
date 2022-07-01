import React ,{useState} from 'react'
import { Topic } from'./Nav'
interface UpdateProps{
    SelectedId:number
    topics:Topic[]
    UpdateTopics(t:string,s:string):void
  }
  export function Update(props:UpdateProps){
    let title
    let desc
    let i = 0 
    while(i < props.topics.length){
      if(props.topics[i].id === props.SelectedId){
        title = props.topics[i].title
        desc = props.topics[i].body
        break
      }
      i= i+1
    }
    const [StateTitle,setStateTitle] = useState(title)
    const [StateDesc,setStateDesc] = useState(desc)
    return (     
      <article>
        <h2>Update</h2>
        <form action='/update_process' method='post' 
          onSubmit={(event:any)=>{
            event.preventDefault()
            const t = event.target.title.value
            const d = event.target.desc.value
            props.UpdateTopics(t,d)
          }}>
          <p><input type='text' name="title" placeholder='title' value={StateTitle} onChange={(e)=>{setStateTitle(e.target.value)}}></input></p>
          <p><textarea name='desc' placeholder='description' value={StateDesc} onChange={(e)=>{setStateDesc(e.target.value)}}></textarea></p>
          <p><input type='submit' value='update'></input></p>
        </form>
    </article>
    )
  }


  export default Update;