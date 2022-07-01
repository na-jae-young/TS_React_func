

interface ArticleProps{
    title?:string
    body?:string
  }

export function Article(props:ArticleProps){
    return (<article>
      <h2>{props.title}</h2>
        {props.body}
      </article>
    )
  }

  export default Article;