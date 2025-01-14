import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import * as Localization from 'expo-localization'
import { Platform } from 'react-native'
import { en } from './translations/en'
import { es } from './translations/es'
import { de } from './translations/de'
import { fr } from './translations/fr'
import { km } from './translations/km'
import { zh } from './translations/zh'
import { ar } from './translations/ar'
import { he } from './translations/he'
import AsyncStorage from '@react-native-async-storage/async-storage'
export const languageResources = {
  es: { translation: es },
  en: { translation: en },
  zh: { translation: zh },
  de: { translation: de },
  fr: { translation: fr },
  km: { translation: km },
  ar: { translation: ar },
  he: { translation: he }
}
const getStoredLanguage = async () => {
  const lng = await AsyncStorage.getItem('enatega-language')
  i18next.use(initReactI18next).init({
    compatibilityJSON: 'v3',
    lng: lng,
    fallbackLng: 'es',
    resources: languageResources
  })
}
if (Platform.OS === 'android') {
  getStoredLanguage()
}
if (Platform.OS === 'ios') {
  i18next.locale = Localization.locale
  i18next.use(initReactI18next).init({
    compatibilityJSON: 'v3',
    lng: i18next.locale,
    fallbackLng: 'es',
    resources: languageResources
  })

  i18next.changeLanguage(i18next.locale)
}

export default i18next
