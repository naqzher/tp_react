import React,{Component} from 'react';
import '../App.css';
//import ReactDOM from 'react-dom';
class Photos extends Component{
	constructor(){
		super();
		
		this.state={
			photos: [],
			albumId: ""
		}

	}
	componentWillMount(){
		const albumId = document.location.hash.split('#/Photos/')[1];
          fetch('https://jsonplaceholder.typicode.com/photos')
            .then((respuesta)=>{
          		return respuesta.json()
            })
            .then((data)=>{
              	this.setState({photos : data.filter( p => p.albumId == albumId) })
            })
            this.setState({albumId: albumId})
        }	
	render(){
		return(
			<div className="container">
				<h2 className="numero-album"><center>Album n°{this.state.albumId}</center></h2>
				{this.state.photos.map(photos=>{
                return(
        			  	<div className="col-md-3 foto" key={photos.id}>
        			  		<div className="titulo-foto"><h4>{photos.title}</h4></div>
	                	  	<img src={photos.thumbnailUrl}/>
	                  	</div>
                )
              })}
			</div>
		);
	}
}

export default Photos;