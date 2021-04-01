import styled from 'styled-components';
import theme from 'styled-theming';
import { THEME } from '../../states';
import { colors } from '../../styles/vars';
import { addOpacityToColor } from '../../utils/index';

const boxShadow = theme('mode', { 
    [THEME.LIGHT]: `inset 0px -10px 10px 10px ${addOpacityToColor(colors.white, 1)}`, 
    [THEME.DARK]: `inset 0px -10px 10px 10px ${addOpacityToColor(colors.black, 1)}` 
});

export const StyledFadeHeader = styled.header`
    width: 100%;
    height: 100vh;

    display: grid;
    place-items: center;

    box-shadow: ${boxShadow};
    -webkit-box-shadow: ${boxShadow};

    & img {
        object-fit: cover;
        width: 100%;
        height: 100%;

        box-shadow: ${boxShadow};
        -webkit-box-shadow: ${boxShadow};
    }
`;