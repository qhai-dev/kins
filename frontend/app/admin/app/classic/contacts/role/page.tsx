import { Metadata } from "next"
import { getTranslations } from "next-intl/server"

export async function generateMetadata(): Promise<Metadata> {
	const t = await getTranslations("metadata")
	return {
		title: t("dashboard"),
	}
}

export default function Page() {
	return <div>test page</div>
}
