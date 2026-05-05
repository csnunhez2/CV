import i18n from '../i18n'

export default function LanguageSwitcher() {
  return (
    <div className="lang-switch">
      <button onClick={() => i18n.changeLanguage('en')}>EN</button>
      <button onClick={() => i18n.changeLanguage('es')}>ES</button>
    </div>
  )
}