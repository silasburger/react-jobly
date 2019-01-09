import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Jumbotron } from 'reactstrap';
import './Home.css';
import photo from './50958.svg';

class Home extends Component {
  render() {
    if (this.props.currUser) {
      return (
        <Jumbotron className="m-5">
          <div className='user-name'>Welcome back, {this.props.currUser.first_name}.</div>
          <img id="home-banner" src={photo} alt="workers" />
          <Link to="/jobs">
            <Button color="success">Checkout some jobs!</Button>
          </Link>
        </Jumbotron>
      );
    }
    return (
      <div className="home-container">
        <Jumbotron className="m-5">
          <img id="home-banner" src={photo} alt="workers" />
          <Link to="/login">
            <Button color="success">Get Started</Button>
          </Link>
        </Jumbotron>
      </div>
    );
  }
}

export default Home;
