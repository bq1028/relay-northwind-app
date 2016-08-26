import React, { PropTypes } from 'react';
import Loading from 'react-loading';
import { Jumbotron } from 'react-bootstrap';

export default class LoadingPage extends React.Component {
  static propTypes = {
    children: PropTypes.node,
  };

  render() {
    return (
      <Jumbotron style={{ textAlign: 'center' }}>
        <h2>
          One moment, please...
        </h2>
        <Loading type="bubbles" color="#3385b5" />
      </Jumbotron>
    );
  }
}