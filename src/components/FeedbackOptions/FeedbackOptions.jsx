import { nanoid } from 'nanoid';
import { Button, ButtonWrapper } from './FeedbackOptions.styled';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ buttonNames, onLeaveFeedback }) => {
  return (
    <ButtonWrapper>
      {buttonNames.map(buttonName => {
        return (
          <Button
            type="button"
            onClick={onLeaveFeedback}
            name={buttonName}
            key={nanoid(4)}
          >
            {buttonName}
          </Button>
        );
      })}
    </ButtonWrapper>
  );
};

FeedbackOptions.propTypes = {
  buttonNames: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
