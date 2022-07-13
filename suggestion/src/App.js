import './App.css';
import React, { Component } from 'react'

export class App extends Component {
  Uttar_Pradesh=this.Uttar_Pradesh
  Uttar_Pradesh =[
    'Agra',
    'Allahabad',
    'Aligarh',
    'Ambedkar Nagar',
    'Auraiya',
    'Azamgarh',
    'Barabanki',
    'Budaun',
    'Bagpat',
    'Bahraich',
    'Bijnor',
    'Ballia',
    'Banda',
    'Balrampur',
    'Bareilly',
    'Basti',
    'Bulandshahr',
    'Chandauli',
    'Chhatrapati Shahuji Maharaj Nagar',
    'Chitrakoot',
    'Deoria',
    'Etah',
    'Kanshi Ram Nagar',
    'Etawah',
    'Firozabad',
    'Farrukhabad',
    'Fatehpur',
    'Faizabad',
    'Gautam Buddh Nagar',
    'Gonda',
    'Ghazipur',
    'Gorakhpur',
    'Ghaziabad',
    'Hamirpur',
    'Hardoi',
    'Mahamaya Nagar',
    'Jhansi',
    'Jalaun',
    'Jyotiba Phule Nagar',
    'Jaunpur district',
    'Ramabai Nagar (Kanpur Dehat)',
    'Kannauj',
    'Kanpur',
    'Kaushambi',
    'Kushinagar',
    'Lalitpur',
    'Lakhimpur Kheri',
    'Lucknow',
    'Mau',
    'Meerut',
    'Maharajganj',
    'Mahoba',
    'Mirzapur',
    'Moradabad',
    'Mainpuri',
    'Mathura',
    'Muzaffarnagar',
    'Panchsheel Nagar district (Hapur)',
    'Pilibhit',
    'Shamli',
    'Pratapgarh',
    'Rampur',
    'Raebareli',
    'Saharanpur',
    'Sitapur',
    'Shahjahanpur',
    'Sant Kabir Nagar',
    'Siddharthnagar',
    'Sonbhadra',
    'Sant Ravidas Nagar',
    'Sultanpur',
    'Shravasti',
    'Unnao',
    'Varanasi'
]
  state={
    arrElements:[],
    inpvalue:''
  }

  recommendationHandler = (event)=>{
    var inp = event.target.value
    // alert(inp)
    var arr = this.Uttar_Pradesh.filter((item)=>{
      if(item.substring(0,inp.length).toLowerCase()===inp)
      return item
    })
    // var toinp = arr[0]
    this.setState({
      arrElements:arr,
      inpvalue:inp
    })
  }
  render() {
    return (
      <div>
        <input onChange={this.recommendationHandler} value={this.state.inpvalue}/>
        <ul>{
          this.state.arrElements.map((item)=> <li>{item}</li>)}</ul>
      </div>
    )
  }
}

export default App

