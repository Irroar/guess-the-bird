import React, { Component } from 'react';
import NavigationElement from './NavigationElement';

class Navigation extends Component {
  static defaultProps = {
    categoryNames: ['Warmup', 'Passerines', 'Forest birds', 'Songbirds', 'Predators', 'Seabirds']
  };
  render() {
    const props = this.props;
    return (
      <div className="Navigation">
        {props.categoryNames.map((name, index) => (
          <NavigationElement categoryName={name} isActive={index === props.level} />
        ))}
      </div>
    );
  }
}

export default Navigation;
