import PropTypes from 'prop-types';

function Section({ className, title, children }) {
    return (
        <section className={className}>
            <h2>{title}</h2>
            {children}
        </section>
    );
}

Section.propTypes = {
    children: PropTypes.node,
};

export default Section;
