import { css } from '@emotion/css'
import React from 'react'
import PropTypes from 'prop-types'
// import s from './Title.module.scss'
import { PRIMARY_COLOR } from '../colors'

const Title = ({ text }) => {
    return (

        <div className={css`
            color: ${PRIMARY_COLOR}
        `}>
            {text}
        </div>
    )
}

Title.propTypes = {
    text: PropTypes.string.isRequired
}
export default Title