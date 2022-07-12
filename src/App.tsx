import React, { FormEvent, ReactElement, ReactHTMLElement, ReactInstance, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { NavigationContext } from 'react-router/lib/context';
import Nav, { Topic } from'./conponent/Nav'
import Article from './conponent/Article';
import Header from './conponent/Header';
import Control from './conponent/Control';
import Create from './conponent/Create';
import Update from './conponent/Update';
import Delete from './conponent/Delete';
import { JsxChild, JsxElement, JsxExpression } from 'typescript';
import { eventNames } from 'process';
//import { PromptProps } from 'react-router-dom';


function App() {



  const [Mode,setMode] = useState('welcome')
  const [HeadTitle,setHeadTitle] = useState('react')
  const [topics,setTopic] = useState([
    {id:1, title:"HTML", body:"html is ..."},
    {id:2, title:"CSS" ,body : " css is ..."},
    {id:3, title:"TS" ,body: "ts is ..."}
  ])
  const [SelectedId,SetSelectedId] = useState(0)
  const [MaxId,SetMaxId] = useState(3)
  let article
  let delete_state

  if(Mode === 'welcome'){
    article = <Article title="welcome" body="react"></Article>
  }else if(Mode === 'read'){
    let i = 0
    while(i < topics.length){
      if(topics[i].id === SelectedId){
        article = <Article title = {topics[i].title} body={topics[i].body}></Article>

      }
      i = i+1
    }
  }else if (Mode === 'create'){
    article = <Create 
      InsertTopics={(_title,_body)=>{
        const _topics = Array.from(topics)
        const _topic = { id:MaxId+1,title:_title,body:_body}
        _topics.push(_topic)
        setTopic(_topics)
        SetMaxId(MaxId+1)
        SetSelectedId(MaxId+1)
        setMode('read')
      }}></Create>
  }else if (Mode === 'update'){
    article = <Update SelectedId={SelectedId} topics={topics} 
    UpdateTopics={(_title,_body)=>{
      const _topics = Array.from(topics)
      let i =0 
      while( i<_topics.length){
        if(_topics[i].id === SelectedId){
          _topics[i]= {id:SelectedId,title:_title,body:_body}
          break
        }
        i= i+1
      }
      setTopic(_topics)
      setMode('read')
    }}></Update>
  }else if( Mode === 'delete'){
    delete_state = <Delete 
      confirm={()=>{
        console.log('sdf')
        const result= window.confirm('really')
        console.log('sdf')
        if(result){
          let _topics = Array.from(topics)
          let i =0 
          while( i<_topics.length){
            if(_topics[i].id === SelectedId){
              _topics.splice(i,1)
              console.log(_topics)
              setTopic(_topics)
              setMode('welcome')
              break
            }
            i= i+1
          }
        }else{

        }}}></Delete>
  }



  return (
    <div className="App">
      <Header title="react" onChangeMode={(_mode:string)=>{setMode(_mode)}}></Header>
      <Nav list={topics} onChangeMode={(_mode:string,_id:number)=>{setMode(_mode); SetSelectedId(_id)}}></Nav>
      {article}
      <Control Mode={Mode} onChangeMode={(_mode)=>{setMode(_mode)}} 
        delete={()=>{
          const result= window.confirm('really')
          if(result){
            let _topics = Array.from(topics)
            let i =0 
            while( i<_topics.length){
              if(_topics[i].id === SelectedId){
                _topics.splice(i,1)
                console.log(_topics)
                setTopic(_topics)
                setMode('welcome')
                break
              }
              i= i+1
            }
        }}}></Control>
      {delete_state}
    </div>
  );
}

export default App;
