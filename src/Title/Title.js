import React from 'react'
import PropTypes from 'prop-types'
import s from './Title.module.scss'

const Title = ({ text }) => {
    return (
        <div className={s.wrapper}>
            <h1 className={s.container}>{text}</h1>
        </div>
    )
}

Title.propTypes = {
    text: PropTypes.string.isRequired
}
export default Title