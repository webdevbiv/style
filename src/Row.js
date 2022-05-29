import React from 'react'
import styled from '@emotion/styled'

export const Row = styled.div`
    display: flex;
    flex-direction: ${props => props.direction === 'vertical' ? 'column' : 'row'};
`;