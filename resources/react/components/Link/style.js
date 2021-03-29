import styled, { css } from 'styled-components';
import theme from 'styled-theming';
import { THEME } from '../../states';
import { colors, fonts } from '../../styles/vars';

import { Link } from 'react-router-dom';

const color = theme('mode', { [THEME.LIGHT]: colors.black, [THEME.DARK]: colors.white });

const genTransitionDelayProps = n => {
    const delay = 0.05;
    let css = "";

    for(let i = 1; i <= n; i++) {
        css += `
            & div span:nth-child(${i}) {
                transition-delay: ${i * delay}s;
            }
        `;
    }

    return css;
}

const animatedStyles = css`
    --text: ${color};
    --line: #275EFE;
    --font-size: ${fonts.desktop.md};
    --duration: .44s;
    --duration-line: .84s;

    display: inline-block;
    position: relative;
    text-decoration: none;
    color: ${color};

    & div {
        overflow: hidden;
    }

    & div:first-child {
        display: flex;
        overflow: hidden;
        text-shadow: 0 var(--font-size) 0 var(--text);
    }

    & div:last-child {
        position: absolute;
        pointer-events: none;
        right: 0;
        left: 0;
        bottom: -3px;
        height: 5px;
    }

    & div:last-child svg {
        display: block;
        position: absolute;
        right: 0;
        top: 0;
        width: 300%;
        height: 5px;
        fill: none;
        stroke: var(--line);
        stroke-width: 1.5px;
        stroke-linecap: round;
        stroke-dasharray: 63.5px 128px;
        stroke-dashoffset: var(--line-offset, 190.25px);
        transform: translateX(var(--line-x)) translateZ(0);
        transition: transform var(--line-d, 0s), stroke-dashoffset var(--line-d, 0s);
    }

    & div span {
        display: block;
        backface-visibility: hidden;
        font-style: normal;
        transition: transform var(--duration) ease;
        transform: translateY(var(--m, 0));
    }

    ${props => genTransitionDelayProps(props.length)};

    &:hover {
        --m: calc(var(--font-size) * -1);
        --line-d: var(--duration-line);
        --line-x: 65.66%;
        --line-offset: 63.5px;
    }
`;

export const StyledAnimatedLink = styled(Link)`
    ${animatedStyles};
`;

export const StyledAnimatedAnchor = styled.a`
    ${animatedStyles};
`;
