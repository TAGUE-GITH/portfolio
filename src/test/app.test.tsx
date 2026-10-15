import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from '../App'
import { LangProvider } from '../lang'

const renderSite = () =>
  render(
    <LangProvider>
      <App />
    </LangProvider>,
  )

beforeEach(() => localStorage.clear())

describe('Portfolio', () => {
  it('presente les 4 projets avec leur site et leur code', () => {
    localStorage.setItem('portfolio_lang', 'fr')
    renderSite()

    for (const name of ['FloreEvent', 'MilaTech Management', 'DevManager', 'ShoeManager']) {
      const project = screen.getByRole('article', { name })
      expect(within(project).getByRole('link', { name: /Voir en ligne/ })).toHaveAttribute('href', expect.stringMatching(/^https:\/\/.+\.vercel\.app$/))
      expect(within(project).getByRole('link', { name: /Code source/ })).toHaveAttribute('href', expect.stringMatching(/^https:\/\/github\.com\/TAGUE-GITH\//))
    }
    expect(screen.getByRole('link', { name: /Application Android/ })).toHaveAttribute('href', expect.stringContaining('DevManager.apk'))
  })

  it('passe en anglais et garde ce choix', async () => {
    localStorage.setItem('portfolio_lang', 'fr')
    renderSite()
    expect(screen.getByText('Développeur full-stack Java · Python · React')).toBeInTheDocument()

    await userEvent.click(screen.getByRole('button', { name: 'en' }))

    expect(screen.getByText('Full-stack developer Java · Python · React')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'en' })).toHaveAttribute('aria-pressed', 'true')
    expect(document.documentElement.lang).toBe('en')
    expect(localStorage.getItem('portfolio_lang')).toBe('en')
  })

  it('donne les moyens de contact, avec la photo', () => {
    localStorage.setItem('portfolio_lang', 'fr')
    renderSite()
    expect(screen.getAllByRole('img', { name: 'Franck Tague' })[0]).toHaveAttribute('src', '/franck-tague.webp')
    expect(screen.getByRole('link', { name: /Écrire un e-mail/ })).toHaveAttribute('href', 'mailto:taguefranck3@gmail.com')
    expect(screen.getAllByRole('link', { name: /LinkedIn/ })[0]).toHaveAttribute('href', 'https://www.linkedin.com/in/tague-franck')
  })
})
