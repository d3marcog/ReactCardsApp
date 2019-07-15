import React, {Component} from 'react';
import Card from 'react-bootstrap/Card'
import './App.css';
import {Text, View} from 'react-native';



class App extends Component {
  constructor(props) {
      super(props)
      this.state = {
        loading:true,
        films: []
      }
    }

    componentDidMount() {
      this.setState({loading:true})
      fetch('https://ghibliapi.herokuapp.com/films')
        .then(response => response.json())
        .then(data => {
            this.setState({
              loading: false,
              films:data
            })
        })
      }

        render() {
          let { loading, films } = this.state;
          if(loading) {
            return <div>Loading...</div>;
          } 
          else {
            return (
          
    

  
    <div>
      {films.map(films => ( 
  <Card className="Card" key={films.id}>
    <Card.Body>
      <Card.Title>{films.title}</Card.Title>
      <Card.Text>{films.release_date}</Card.Text>
      <Card.Text>
        {films.description}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Rating: {films.rt_score}</small>
    </Card.Footer>
  </Card>
  )
  )}
</div>
            )

          }
        }
      }    
  




export default App;
