import { nanoid } from 'nanoid'
import { Button, ButtonWrapper } from './FeedbackOptions.styled';
import PropTypes from 'prop-types';

const FeedbackOptions = ({options, onLeaveFeedback}) => {
    return (
        <ButtonWrapper>
            {options.map(option => {
               return <Button type="button" onClick={onLeaveFeedback} name={option} key={nanoid(4)}>{option}</Button>
            })}
        </ButtonWrapper>
    );
};
    
FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onLeaveFeedback: PropTypes.func
};
    
export default FeedbackOptions;