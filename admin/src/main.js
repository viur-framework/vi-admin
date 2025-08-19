import "./shoelaceConfig"

import bone from "@viur/vue-utils/bones/edit/bone.vue" //import before App.vue
import Wrapper_nested from "@viur/vue-utils/bones/edit/wrapper_nested.vue" //import before App.vue
import { initApp } from "@viur/vue-components/app"
import ActionHandler from "@viur/vue-components/handler/ActionHandler.vue"

import { createApp } from "vue"
import App from "./App.vue"

const app = createApp(App)
initApp(app)

import router from "./routes"
import { createPinia } from "pinia"
import { createI18n } from "vue-i18n"
import en from "./translations/en"
import de from "./translations/de"
import piniaPluginPersistedstate from "pinia-plugin-persistedstate"

const pinia = createPinia()
app.use(pinia)

pinia.use(piniaPluginPersistedstate)
app.use(router)

// eslint-disable-next-line vue/multi-word-component-names
app.component("Bone", bone)

app.component("WrapperNested", Wrapper_nested)

app.component("ActionHandler", ActionHandler)

// @ts-ignore
import { de_translations, en_translations } from "@viur/vue-components/translations/translations"

const i18n = createI18n({
  legacy: false,
  locale: "de",
  fallbackLocale: "en",
  messages: { en: { ...en_translations, ...en }, de: { ...de_translations, ...de } },
})

app.use(i18n)

app.mount("#app")
