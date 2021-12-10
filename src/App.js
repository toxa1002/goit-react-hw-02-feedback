import React, { Component } from 'react';
import FeedbackOptions from './components/FeedbackOptions';
import Section from './components/Section';
import Statistics from './components/Statistics';

const MockButtonFeadback = ['good', 'neutral', 'bad'];

class App extends Component {
    static defaultProps = {
        countPositiveFeedbackPercentage: 0,
    };
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
    };
    
   counterFeadbacks = (feedback) => {
    this.setState((prevState) => ({
      [feedback]: prevState[feedback] + 1
    }));
  };
    
    render() {
        const { good, neutral, bad } = this.state;
        const countTotalFeedback = good + neutral + bad;
        const countPositiveFeedbackPercentage = Math.round(
            (good * 100) / countTotalFeedback,
        );
        return (
            <div>
                <Section title="Please leave feedback">
                   <FeedbackOptions
                        options={MockButtonFeadback}
                        onLeaveFeedback={this.counterFeadbacks}
                    />
                </Section>
                <Section title="Statistics">
                    {countTotalFeedback ? (
                        <Statistics
                            good={good}
                            neutral={neutral}
                            bad={bad}
                            total={countTotalFeedback}
                            positivePercentage={countPositiveFeedbackPercentage}
                        />
                    ) : (
                        'No feedback given'
                    )}
                </Section>
            </div>
        );
    }
}

export default App;
