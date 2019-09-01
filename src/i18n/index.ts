import en from './en.json'
import zh from './zh.json'

import i18n, { MessageInfo } from 'macoolka-i18n'
export const defaultOption = {
    defaultLanguage: 'en',
    locale: 'en',
    languages: ['en', 'zh'],
    data: {
        en,
        zh
    }
}
export type Message = MessageInfo<keyof typeof defaultOption.data.en, { value?: unknown }>
export default i18n<Message>(defaultOption)
