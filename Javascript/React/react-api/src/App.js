import React, { Component } from 'react'
import Inputfield from './Components/Inputfield'
import Images from './Components/Images'

export default class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       root:'https://pixabay.com/api/',
       key:'13971460-c15064f378a923d1e5f0396d1',
       query: '',
       url: '',
       letSearch: false,
       loadedImages: null
    }
  }
  saveQuery = (e) => {
    this.setState({query:e.target.value,letSearch:false})
  }

  searchImages = () => {
    let words = this.state.query.split(' ');
    //https://pixabay.com/api/?key=13971460-c15064f378a923d1e5f0396d1&q=yellow+flowers&image_type=photo
    let newURL = this.state.root+'?key='+this.state.key+'&q='
    words.forEach((word)=>{
      newURL += word +'+'
      console.log(newURL)
    });
    this.setState({url:newURL,letSearch:true,loadedImages:null})
  }
  loadImage = () => {
    let newImages = <Images url={this.state.url} />;
    this.setState({loadedImages:newImages,letSearch:false})
  }
  
  render() {
    if(this.state.letSearch){
      this.loadImage()
    }
    return (
      <div>
        <Inputfield change={this.saveQuery} click={this.searchImages} />
        {this.state.loadedImages}
      </div>
    )
  }
}
