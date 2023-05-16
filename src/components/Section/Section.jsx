import { Heading } from "./Section.styled";
import PropTypes from 'prop-types';

const Section = ({ title, children }) => {

    return <section>

        <Heading>{title}</Heading>
        {children}
    </section>

};

Section.propTypes = {
    title: PropTypes.string
};
export default Section;