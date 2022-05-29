import React from 'react'
import PropTypes from 'prop-types'
import s from './Title.module.css'

const Title = ({ text }) => {
    return (
        <h1 className={s.container}>{text}</h1>
    )
}

Title.propTypes = {
    text: PropTypes.string.isRequired
}
export default Title