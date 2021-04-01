import React from 'react';
import { StyledFadeHeader } from './style';

export const FadeHeader = ({ lightSrc, darkSrc }) => {


    return (
        <StyledFadeHeader>
            <img src={lightSrc} alt="" />
        </StyledFadeHeader>
    );
}
