import React from 'react'
import PropTypes from 'prop-types'
import s from './Link.module.css'


const Link = ({ url, label }) => {
    return (
        <a className={s.container} href={url}>
            {label}
        </a>
    )
}

Link.propTypes = {
    url: PropTypes.string.isRequired,
    label: PropTypes.node.isRequired
}

export default Link