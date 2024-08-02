// communicate between components - props
import PropTypes from 'prop-types'; // define the type of the props

export const Props = ( {title, subTitle } ) => {
    // console.log(props)

    return (
        <>
            <h1>{ title }</h1>
            <p>{ subTitle }
            </p>
        </>
    )
};

Props.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.number.isRequired
};

Props.defaultProps = {
    title: 'Hello',
    subTitle: 123,
}