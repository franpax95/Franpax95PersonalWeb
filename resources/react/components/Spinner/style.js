import styled from 'styled-components';
import theme from 'styled-theming';
import { THEME } from '../../states';
import { colors } from '../../styles/vars';

const color = theme('mode', { [THEME.LIGHT]: colors.black, [THEME.DARK]: colors.white });

export const StyledSpinner = styled.div`
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;
    
    & div {
        position: absolute;
        border-style: solid;
        border-width: 4px;
        border-color: ${color};
        opacity: 1;
        border-radius: 50%;
        animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
        transition: border-color .2s;
    }

    & div:nth-child(2) {
        animation-delay: -0.5s;
    }

    @keyframes lds-ripple {
        0% {
            top: 36px;
            left: 36px;
            width: 0;
            height: 0;
            opacity: 1;
        }
        100% {
            top: 0px;
            left: 0px;
            width: 72px;
            height: 72px;
            opacity: 0;
        }
    }

`;
