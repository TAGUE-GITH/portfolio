import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import type { ReactNode } from 'react'
import { CONTENT } from './content'
import type { Content, Lang } from './content'

type LangValue = { lang: Lang; t: Content; setLang: (lang: Lang) => void }

const LangContext = createContext<LangValue | null>(null)
const KEY = 'portfolio_lang'

/** Langue choisie, sinon celle du navigateur (francais par defaut). */
function initialLang(): Lang {
  try {
    const saved = localStorage.getItem(KEY)
    if (saved === 'fr' || saved === 'en') return saved
  } catch {
    // stockage indisponible (navigation privee) : on garde la langue du navigateur
  }
  return navigator.language?.toLowerCase().startsWith('en') ? 'en' : 'fr'
}

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(initialLang)
  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])
  const value = useMemo<LangValue>(
    () => ({
      lang,
      t: CONTENT[lang],
      setLang: (next) => {
        setLangState(next)
        try {
          localStorage.setItem(KEY, next)
        } catch {
          // sans stockage, le choix vaut pour la visite en cours
        }
      },
    }),
    [lang],
  )
  return <LangContext.Provider value={value}>{children}</LangContext.Provider>
}

// eslint-disable-next-line react-refresh/only-export-components
export function useLang() {
  const value = useContext(LangContext)
  if (!value) throw new Error('useLang doit etre utilise dans LangProvider')
  return value
}
