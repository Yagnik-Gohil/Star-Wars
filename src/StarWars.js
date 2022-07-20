import React, { Component } from 'react'

class StarWars extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
        name: null,
        homeworld: null,
        species: null,
        gender: null,
        height: null,
        mass: null,
        imagePath: null,
        isDataLoaded: false
      }
    }   
    
    searchCharacter(){
        const randomNumber = Math.round(Math.random() * 88)
        const url = `https://raw.githubusercontent.com/akabab/starwars-api/master/api/id/${randomNumber}.json`
        fetch(url).then(response => response.json())
        .then(data=>{
            this.setState({
                name: data.name,
                homeworld: data.homeworld,
                species: data.species,
                gender: data.gender,
                height: data.height,
                mass: data.mass,
                imagePath: data.image,
                isDataLoaded: true,
            })
        })
    }

    render() {
        return (
        <div>
            {   
                this.state.isDataLoaded &&
                <div>
                    <img src={this.state.imagePath} alt="image1" id="bgImage"/>
                    <img src={this.state.imagePath} alt = "image2" id="mainImage"/>
                    <h1>{this.state.name}</h1>
                    <p>Homeworld: {this.state.homeworld}</p>
                    <p>Species: {this.state.species} | gender: {this.state.gender}</p>
                    <p>Height: {this.state.height} | mass: {this.state.mass}</p>
                    
                </div>
            }
            <button id="searchBtn" onClick={() => this.searchCharacter()}>Search</button>
        </div>
        )
    }
}
export default StarWars