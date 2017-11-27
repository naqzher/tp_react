import React, {Component} from 'react';
import chloe from './chloe.jpg';
import scarlett from './scarlett.jpg';
import star_wars from './star_wars.jpg';
import justice_league from './justice_league.jpg';
//import album from './descarga.jpg';
import '../App.css';

class Home extends React.Component{
	constructor(){
			super();
			this.state = {
				nombre: "Juan",
				apellido: "Perez",
				edad: 20,
				imagen: "chloe.jpg"
			}
		}
		render(){
			return(
				<div className="container">
					<center><h1><b>TOP ALBUMS</b></h1></center>
					<div className="row slide">
						<div className="col-md-12">
							<img className="img-home"src={justice_league}/>
							<center><button className="btn btn-primary btn-home">Ver</button></center>
						</div>
					</div>
					<div className="row albums">
						<div className="col-md-3 container-img-home">
							<img className="img-home"src={scarlett}/>
							<center><button className="btn btn-primary btn-home">Ver</button></center>
						</div>
						<div className="col-md-6 container-img-home">
							<img className="img-home"src={star_wars}/>
							<center><button className="btn btn-primary btn-home">Ver</button></center>
						</div>
						<div className="col-md-3 container-img-home">
							<img className="img-home"src={chloe}/>
							<center><button className="btn btn-primary btn-home">Ver</button></center>
						</div>						
					</div>
				</div>
			);
		}
}

export default Home;