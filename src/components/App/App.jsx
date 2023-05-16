import { useState, useEffect } from "react";
import Container from "./App.styled";
import Statistics from "components/Statistics/Statistics";
import FeedbackOptions from "components/FeedbackOptions/FeedbackOptions";
import Section from "components/Section/Section";
import Notification from "components/Notification/Notification";




 const App = ({option}) => {
     const [good, setGood] = useState(0);
     const [neutral, setNeutral] = useState(0);
     const [bad, setBad] = useState(0);
    // state = {
    //     good: 0,
    //     neutral: 0,
    //     bad: 0
    // }

    const optionsForButtons = ['good', 'neutral', 'bad'];
        


   const incrementValue = (prev) => {
        [option]: prev[option] + 1,
     


    //     this.setState(prevState => {
    //         return {
    //             [name]: prevState[name] + 1,
    //         };
    //     });
    // };
   };

   const countTotalFeedback = () => {
        return good + neutral + bad;
    };

   const countPositiveFeedbackPercentage = () => {
        return countTotalFeedback() !== 0 ?
            Math.round((100 / countTotalFeedback()) * good)
            : 0;

    };

    

        return <Container>
            <Section title="Please leave feedback">
                <FeedbackOptions options={optionsForButtons} onLeaveFeedback={incrementValue} />
            </Section>

            <Section title="Statistics">
           
                {countTotalFeedback() === 0 ?
                    <Notification message="There is no feedback"></Notification> : 
                    <Statistics
                    good={good} neutral={neutral}
                    bad={bad} name={optionsForButtons}
                    total={countTotalFeedback()} positivePercentage={countPositiveFeedbackPercentage()}
                />}
                
            </Section>
        </Container>
    

    
};

export default App;