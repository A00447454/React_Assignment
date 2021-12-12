import React from 'react';
import Weather from './Weather';
export default class MyTown extends React.Component
{
    constructor(){
        super();
        this.state = {
            degreesValue : null,
            isCelsiusDegree : true,
        }
    }
    componentDidMount(){
        fetch('https://api.openweathermap.org/data/2.5/weather?q=Bangalore&units=metric&appid=e80062dbb7699a97f52301696a320b97')
        .then((res) => res.json())
        .then(weather => this.setState({degreesValue: weather["main"]["temp"]}))
    }
    changetoOtherValue(item)
    {
        this.setState({
            isCelsiusDegree : item,
        })
    }
    render(){
        return(
        <div>
            <img src= 'https://static.toiimg.com/photo/54559212.cms' alt = 'Halifax, NS.jpg' width="600" height="300" />
            <h1>I am from Bangalore, India.</h1>
            <p>Bangalore, also called as Bengaluru is the capital of India's southern Karnataka state. Bangalore is famous being the Silicon Valley of India, and a well known IT hub. Some of the world's major It corporations operate out of the city.<br/> Apart from MNCs, Bangalore is also home to many startups and Indian tech companies.Bangalore is also known for its parks and nightlife. .</p>
            {this.state.degreesValue > 20 ? <img alt='Sunny Weather.jpg' src = " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRezLyLhe5o0HUNfVIPkEHRqcpH1fa7FVuQ3Q&usqp=CAU" /> : this.state.degreesValue < 10 ? <img alt='Cold Weather.jpg' src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoR2bm95Q2NTLm5qJKl6WDK3Z8yTTCCAUsww&usqp=CAU" /> : <img alt='Mild Weather.jpg' src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqRbnrcyphNFCza52EGIpNcXFTKWXEMmsjJw&usqp=CAU" />} 
            <Weather data = {{isCelsiusDegree : this.state.isCelsiusDegree, changetoOtherValue:this.changetoOtherValue.bind(this)}} degreesValue = {this.state.degreesValue}/>
        </div>
        )
    }
}