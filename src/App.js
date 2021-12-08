import React, { Component } from 'react';
import FeedbackOptions from './components/FeedbackOptions';
import Section from './components/Section';
import Statistics from './components/Statistics';

const MockButtonFeadback = ['Good', 'Neutral', 'Bad'];

class App extends Component {
    static defaultProps = {
        countPositiveFeedbackPercentage: 0,
    };
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
    };
    counterFeadbacks = e => {
        if (e.target.textContent === 'Good') {
            this.setState({ good: this.state.good + 1 });
        } else if (e.target.textContent === 'Neutral') {
            this.setState({ neutral: this.state.neutral + 1 });
        } else if (e.target.textContent === 'Bad') {
            this.setState({ bad: this.state.bad + 1 });
        }
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
                    {/* <FeedbackOptions
                        // key={but}
                        onLeaveFeedback={this.counterFeadbacks}
                    /> */}

                    <FeedbackOptions
                        buttonNames={MockButtonFeadback}
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
