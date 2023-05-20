import { Component } from 'react';

import Section from './components/Section';
import FeedbackOptions from './components/FeedbackOptions';
import Statistics from './components/Statistics';
import Notification from './components/Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleButtonClick = name => {
    this.setState(state => ({
      ...state,
      [name]: state[name] + 1,
    }));
  };

  countTotalFeedback = () =>
    Object.values(this.state).reduce((acc, items) => acc + items, 0);

  countPositiveFeedbackPercentage = () =>
    this.countTotalFeedback()
      ? ((this.state.good / this.countTotalFeedback()) * 100).toFixed(2)
      : 0;

  render() {
    const arrayKeysState = Object.keys(this.state);
    const arrayValuesState = Object.values(this.state);
    return (
      <>
        <Section title="Please leave feedback" header={true}>
          <FeedbackOptions
            options={arrayKeysState}
            onLeaveFeedback={this.handleButtonClick}
          />
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() ? (
            <Statistics
              arrayFeedbackOptions={arrayKeysState}
              arrayFeedbackValues={arrayValuesState}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </>
    );
  }
}

export default App;
