import { createI18n } from 'vue-i18n'

// 2. Create i18n instance with options
const i18n = createI18n({
  locale: 'en', // set locale
  legacy: false,
  fallbackLocale: 'en', // set fallback locale
  messages: {
    en: {
      hello: 'Hello - Global',
      close: 'Close - Global'
    },
    fr: {
      hello: 'Bonjour - Global',
      close: 'Fermer - Global'
    }
  }
})

export default i18n
