import { Locale } from "next-intl";
import { getRequestConfig } from "next-intl/server";
import { cookies } from "next/headers";

export default getRequestConfig(async () => {
	const cookieStore = await cookies();
	const t = cookieStore.get(process.env.LOCALE_COOKIE_KEY)?.value as Locale;

	const locale = t || "zh";

	return {
		locale,
		messages: (await import(`../locales/${locale}.json`)).default,
	};
});
