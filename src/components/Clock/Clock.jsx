import React , { PureComponent } from 'react';

export default class Clock extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      date: new Date()
    }
  }
  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState({
        date: new Date()
      });
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.intervalId);
    this.forceUpdate();
  }
  render() {
    const { date } = this.state;
    return (
      <div>
        <h2>{date.toLocaleTimeString()}</h2>
      </div>
    )
  }
}