// FILE: LocaleContext.js
import React, { createContext, useState } from "react";
import { I18n } from "i18n-js";
import { translations } from "../constants/Languages";

// Initialize I18n with the translations
const i18n = new I18n(translations);

export const LocaleContext = createContext();

export const LocaleProvider = ({ children }) => {
	const [locale, setLocale] = useState(i18n.locale);

	const changeLanguage = () => {
		const newLocale = locale === "en" ? "zh" : "en";
		i18n.locale = newLocale;
		setLocale(newLocale);
	};

	return <LocaleContext.Provider value={{ i18n, locale, changeLanguage }}>{children}</LocaleContext.Provider>;
};
