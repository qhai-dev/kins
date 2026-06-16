import { routing } from "@/shared/i18n"
import messages from "@/shared/i18n/messages/zh-CN.json"

declare module "next-intl" {
    interface AppConfig {
        Locale: (typeof routing.locales)[number]
        Messages: typeof messages
    }
}
