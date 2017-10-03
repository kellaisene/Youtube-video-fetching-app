import React, {Component} from 'react';

const API = 'AIzaSyAOYG1Ai4mZy6L-ifZgQ8bzS87vA6v3JdA';
const channelId = 'UCXgGY0wkgOzynnHvSEVmE3A';
const result = 10;


//https://www.googleapis.com/youtube/v3/search?key=AlzaSyAOYG1Ai4mZy6L-ifZgQ8bzS87vA6v3JdA&channelId-UCXgGY0wkgOzynnHvSEVmE3A&part=snippet,id&order=date&maxResults=10

var finalURL = `https://www.googleapis.com/youtube/v3/search?key=${API}&channelId${channelId}&part=snippet,id&order=date&maxResults=${result}`

class Youtube extends Component {

    constructor(props){
        super(props);

        this.state = {
            resultyt: []
        };
        this.clicked = this.clicked.bind(this);
    }
    clicked(){
        fetch(finalURL)
            .then((response) => response.json())
            .then((responseJson) => {
                // console.log(responseJson);
                const resultyt = responseJson.items.map(obj => "https://www.youtube.com/embed/qEASE_raPX0"+obj.id.videoId);
                this.setState({
                    resultyt
                });
            })
            .catch((error) => {
                console.error(error);
            });
    }
    render(){
        // console.log(finalURL)
        console.log(this.state.resultyt)
        
        return(
            <div>
                <button onClick={this.clicked}>Get Youtube videos</button>
                {
                    this.state.resultyt.map((link, i) => {
                        console.log(link);
                
                        var frame = <div className="youtube" key={i}><iframe width="560" height="315" src={link} frameBorder="0" allowFullScreen></iframe> </div>
                        return frame;
                    })
                }
                {this.frame}
            
                
                </div>
           
        );
    }
}

export default Youtube;