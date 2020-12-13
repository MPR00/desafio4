import React from 'react';
import { TouchableWithoutFeedback } from 'react-native';

//era para curtir com dois toques na fora, mas n conseguimos colocar pra funcionar.

export default class DoubleTap extends React.Component {
  
  static defaultProps = {
    delay: 300,
    onDoubleTap: () => null
  };
  handleDoubleTap = () => {
    const now = Date.now();
    if (this.lastTap && now - this.lastTap < this.props.delay) {
      this.props.onDoubleTap();
    } else {
      this.lastTap = now;
    }
  };
  render() {
    return (
      <TouchableWithoutFeedback onPress={this.handleDoubleTap}>
        {this.props.children}
      </TouchableWithoutFeedback>
      
    );
  }
  
};
