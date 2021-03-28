import React, { useContext } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import { useTransition, animated, config } from 'react-spring';

import { LANG, THEME } from '../states';
import useLanguage from '../hooks/useLanguage';

/** Theme Change Test */
import theme from 'styled-theming';
import styled from 'styled-components';
import { SettingsContext } from '../contexts/SettingsContext'; 
import Home from '../pages/Home';
import Work from '../pages/Work';
const backgroundColor = theme('mode', { [THEME.LIGHT]: 'white', [THEME.DARK]: 'black' });
const color = theme('mode', { [THEME.LIGHT]: 'black', [THEME.DARK]: 'white' });
const StyledApp = styled(animated.div)`
    min-height: 100vh;
    color: ${color};
    background-color: ${backgroundColor};
    transition: background-color .2s, color .2s;
`;
/** */


function App() {
    const [{ App: txt }, setLang] = useLanguage();
    const [settings, { setTheme }] = useContext(SettingsContext);

    const onClick = () => {
        if(settings.lang === LANG.ESP) {
            setLang(LANG.ENG);
        } else {
            setLang(LANG.ESP);
        }
    }

    const onThemeClick = () => {
        if(settings.theme === THEME.LIGHT) {
            setTheme(THEME.DARK);
        } else {
            setTheme(THEME.LIGHT);
        }
    }

    /** transition between routes */
    const location = useLocation();
    const transitions = useTransition(location, location => location.pathname, {
        from: { opacity: 0, position: 'absolute' },
        enter: { opacity: 1 },
        update: { opacity: 1 },
        leave: { opacity: 0 },
        config: config.molasses
    });

    return (<>
        {txt}
        <button onClick={onClick}>Cambiar idioma</button>
        <button onClick={onThemeClick}>Cambiar tema</button>
        {transitions.map(({ item:location, props, key }) => (
            <StyledApp key={key} style={props}>
                <Switch location={location}>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/work" component={Work} />
                </Switch>
            </StyledApp>
        ))}
    </>);
}

export default App;
