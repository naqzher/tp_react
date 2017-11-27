import React, {Component} from 'react';
import '../App.css';
//import ReactDOM from 'react-dom';

      class Post extends Component{
        constructor(){
          super();
            this.state = {
              post : []
            }          
        }

        componentWillMount(){
          fetch('https://jsonplaceholder.typicode.com/posts')
            .then((respuesta)=>{
              return respuesta.json()
            })
            .then((data)=>{
              this.setState({post : data})
              console.log(this.state.post);
            })
        }
        render(){
          return(
            <div>
              {this.state.post.map(post=>{
                return(
                  <div className="row contenedor-post" key={post.id}>
                    <div className="col-md-1 contenedor-avatar">
                      <figure>
                        <div  className="avatar"></div>
                      </figure>
                    </div>
                    <div className="col-md-11 contenido">
                      <span className="usuario">usuario n°{post.userId}</span>
                      <p>D{post.title}.</p>
                      <p>F{post.body}</p>
                      <div>
                        <span className="icon-message-circle"></span>
                        <span className="icon-retweet"></span>
                        <span className="icon-heart"></span>
                        <span className="icon-envelope"></span>
                      </div>
                    </div>                   
                  </div>
                )
              })}
            </div>            
          )
        }
      }
	
export default Post;