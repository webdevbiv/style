import React from 'react'
import PropTypes from 'prop-types'


const Link = (props) => {
    return (
        <a href={props.url}>
            {props.label}
        </a>
    )
}

Link.propTypes = {
    url: PropTypes.string.isRequired,
    label: PropTypes.node.isRequired
}

export default Link