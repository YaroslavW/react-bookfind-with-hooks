import React, { Component } from 'react';
import axios from 'axios';
import Header from './Components/Header';
import Books from './Components/Books';
import SearchInput from './Components/SearchInput';
import {Container, Row, Col} from 'react-bootstrap';
import './App.css';


class App extends Component {
    state = {
      books: [],
      text: 'Harry Potter'
    }
  
  componentWillMount() {
    this.getBooks();
  }
  getBooks(text=this.state.text) {
    axios.request({
      method: 'get',
      url: 'https://www.googleapis.com/books/v1/volumes?q=' + text
    }).then((response) => {
      this.setState({
        books: response.data.items 
      },  () => { console.log(this.state.text) } );
    }).catch((error) => {
      console.log(error)
    })
  }
  handleChange(text) {
    this.setState({ text: text }, this.getBooks(text))
  }
  render() {
    return (
      <div>
        <Header />
        <Container>
          <SearchInput getValue={this.handleChange.bind(this)}  />
          <Row>
            <Col xs={12} md={12} lg={12}>     
              <Books books={this.state.books} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
