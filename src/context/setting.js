import React, {createContext, useEffect, useState} from "react";
import {loadSettings, saveSettings} from "../common/store";

const initialSettings = {
    "language": "en",
};

const SettingsContext = createContext({
    language: initialSettings.language
});

export function SettingsProvider(props) {
    const [settings, setSettings] = useState(initialSettings);

    useEffect(() => {
        Promise
            .all([loadSettings()])
            .then(([data]) => {
                setSettings({...settings, ...data})
            })
            .catch(e => console.log(e))
    }, [settings]);

    const updateSettings = (update) => {
        try {
            const updatedSettings = {
                ...settings,
                ...update
            };
            setSettings(updatedSettings);
            saveSettings(updatedSettings);
        } catch (e) {
            console.log(e)
        }
    };

    const toggleLanguage = (lng) => {
        updateSettings({language: lng})
    };

    const contextValue = {
        language: settings.language,
        toggleLanguage
    };

    return <SettingsContext.Provider value={contextValue}>{props.children}</SettingsContext.Provider>
}

export {SettingsContext}
