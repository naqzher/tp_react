import React, {Component} from 'react';
import '../App.css';
//import album from './descarga.jpg';
//import ReactDOM from 'react-dom';
import {
  //BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

      class Albums extends Component{
        constructor(){
          super();
            this.state = {
              albums : []
            }          
        }

        componentWillMount(){
          fetch('https://jsonplaceholder.typicode.com/albums')
            .then((respuesta)=>{
              return respuesta.json()
            })
            .then((data)=>{
              this.setState({albums : data})
            })
        }
        render(){

          return(
            <div className="container">
              {this.state.albums.map(album=>{
              	const link = `/Photos/${album.id}`;
                return(                
                    <div className="col-md-3 album" key={album.id}>                  		
                		  <div className="album_superior">
                        <span className="album-usuario">usuario n°{album.userId}</span>
                        <p className="album-titulo"><b>Titulo:</b></p>
                        <p>{album.title}</p>  
                      </div>	
                    <div className="album_img"></div>
                		<Link to={link}>Ver</Link>             
                  	</div>                                 
                )                
              })}
            </div>            
          )
        }
      }
	
export default Albums;