export const languages = {
	zh: {
		name: "简体中文",
		dir: "ltr",
	},
	en: {
		name: "English",
		dir: "ltr",
	},
	ar: {
		name: "العربية",
		dir: "rtl",
	},
} as const;

export type Locale = keyof typeof languages;

export const locales = ["zh", "en", "ar"] as Locale[];
