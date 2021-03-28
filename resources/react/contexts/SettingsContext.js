import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { LANG, THEME } from '../states';
import { isStateValue } from '../utils';


const SettingsContext = React.createContext([{}, () => {}]);

const SettingsProvider = ({ children }) => {
    const [settings, setSettings] = useState({
        lang: LANG.ESP,
        theme: THEME.LIGHT
    });

    const getLang = () => settings.lang;

    const setLang = lang => {
        if(isStateValue(LANG, lang)) {
            setSettings({ ...settings, lang });
        }
    }

    const getTheme = () => settings.theme;

    const setTheme = theme => {
        if(isStateValue(THEME, theme)) {
            setSettings({ ...settings, theme });
        }
    }

    const value = [settings, {
        getLang,
        setLang,
        getTheme,
        setTheme
    }];

    return (
        <SettingsContext.Provider value={value}>
            <ThemeProvider theme={{ mode: settings.theme }}>
                {children}
            </ThemeProvider>
        </SettingsContext.Provider>
    );
}

export { SettingsContext, SettingsProvider };
