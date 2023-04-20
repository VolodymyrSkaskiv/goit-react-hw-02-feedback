import { Component } from 'react';
import { Feedback } from './feedback/Feedback';
import { Section } from './section/Section';
import css from './App.module.css';
export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  render() {
    return (
      <div className={css.container}>
        <Section title="Please Leave feedback">
          <Feedback
            options={Object.keys(this.state)}
            onLeavefeedback={this.updateState}
          />
        </Section>
      </div>
    );
  }
}
