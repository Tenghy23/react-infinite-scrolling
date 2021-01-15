import React from 'react'

const Post = (props) => {
  return (
    <div>
      <h1>hello</h1>
      {props.images.map( (item) => {
       return <img src={item.urls.thumb} alt=""/>
      })}
    </div>
  )
}

export default Post;

