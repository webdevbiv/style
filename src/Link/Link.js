import { css } from '@emotion/css'
import React from 'react'
import PropTypes from 'prop-types'
import s from './Link.module.scss'
import { SECONDARY_COLOR } from '../colors'


const Link = ({ url, label }) => {
    return (
        <a className={css`
            color: ${SECONDARY_COLOR}
        `} href={url}>
            <div className={s.labelWrapper}>
                {label}
            </div>
        </a>
    )
}

Link.propTypes = {
    url: PropTypes.string.isRequired,
    label: PropTypes.node.isRequired
}

export default Link