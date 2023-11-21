export default function useLang(lang, langPage) {
  return langPage[lang] || langPage.en
}
