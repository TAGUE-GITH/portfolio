import { ArrowRight, ArrowUpRight, BadgeCheck, Briefcase, CalendarCheck, Check, Code2, Copy, Download, FileText, GraduationCap, Languages, Mail, MapPin, Menu, Phone, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { CONTACT } from './content'
import type { Project } from './content'
import { BrowserFrame, PhoneFrame } from './components/Frames'
import { GithubIcon, LinkedinIcon, WhatsappIcon } from './components/Icons'
import { useLang } from './lang'

const SECTIONS = ['projects', 'skills', 'journey', 'contact'] as const

function Monogram({ className = '' }: { className?: string }) {
  return (
    <span className={`flex size-9 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-glow text-sm font-extrabold tracking-tight text-white ${className}`}>
      FT
    </span>
  )
}

/** Photo de profil, cerclee du degrade du portfolio. */
function Portrait({ className = '' }: { className?: string }) {
  return (
    <span className={`block shrink-0 rounded-full bg-gradient-to-br from-brand-400 to-glow p-[3px] shadow-lg shadow-brand-900/40 ${className}`}>
      <img src="/franck-tague.webp" alt="Franck Tague" width={640} height={640} className="size-full rounded-full object-cover" />
    </span>
  )
}

function LangSwitch() {
  const { lang, setLang } = useLang()
  return (
    <div className="flex rounded-full bg-white/10 p-0.5 text-xs font-bold ring-1 ring-white/15" role="group" aria-label="Langue / Language">
      {(['fr', 'en'] as const).map((value) => (
        <button
          key={value}
          type="button"
          onClick={() => setLang(value)}
          aria-pressed={lang === value}
          className={`rounded-full px-2.5 py-1 uppercase transition ${lang === value ? 'bg-white text-ink' : 'text-slate-300 hover:text-white'}`}
        >
          {value}
        </button>
      ))}
    </div>
  )
}

function Header() {
  const { t } = useLang()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed inset-x-0 top-0 z-40 transition ${scrolled || open ? 'bg-ink/85 shadow-lg backdrop-blur-md' : ''}`}>
      <div className="mx-auto flex max-w-6xl items-center gap-6 px-4 py-3 text-white sm:px-6">
        <a href="#top" className="flex items-center gap-2.5 font-bold">
          <Monogram />
          <span className="hidden sm:inline">Franck Tague</span>
        </a>
        <nav className="ml-auto hidden items-center gap-7 text-sm font-semibold text-slate-300 md:flex" aria-label="Navigation">
          {SECTIONS.map((id) => (
            <a key={id} href={`#${id}`} className="transition hover:text-white">
              {t.nav[id]}
            </a>
          ))}
        </nav>
        <div className="ml-auto flex items-center gap-2 md:ml-0">
          <LangSwitch />
          <button type="button" className="rounded-lg p-2 md:hidden" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Menu">
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>
      {open && (
        <nav className="border-t border-white/10 px-4 pb-4 md:hidden" aria-label="Navigation">
          {SECTIONS.map((id) => (
            <a key={id} href={`#${id}`} onClick={() => setOpen(false)} className="block rounded-lg px-3 py-2.5 text-sm font-semibold text-slate-200 hover:bg-white/10">
              {t.nav[id]}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}

function Hero() {
  const { t } = useLang()
  return (
    <section id="top" className="relative isolate overflow-hidden bg-ink pt-28 pb-20 text-white sm:pt-36 sm:pb-28">
      <div className="hero-grid absolute inset-0 -z-10" aria-hidden />
      <div className="absolute -top-40 -left-32 -z-10 size-[36rem] rounded-full bg-brand-600/30 blur-3xl" aria-hidden />
      <div className="absolute top-20 -right-40 -z-10 size-[28rem] rounded-full bg-glow/15 blur-3xl" aria-hidden />
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-[1.1fr_1fr]">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full bg-emerald-400/10 px-3 py-1 text-sm font-semibold text-emerald-300 ring-1 ring-emerald-400/30">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex size-2 rounded-full bg-emerald-400" />
            </span>
            {t.hero.badge}
          </p>
          <div className="mt-8 flex items-center gap-4">
            <Portrait className="size-20 sm:size-24" />
            <p className="text-lg text-slate-300">{t.hero.hello}</p>
          </div>
          <h1 className="mt-3 text-5xl font-extrabold tracking-tight sm:text-7xl">
            Franck <span className="bg-gradient-to-r from-brand-300 to-glow bg-clip-text text-transparent">Tague</span>
          </h1>
          <p className="mt-4 text-xl font-semibold text-white sm:text-2xl">{t.hero.title}</p>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-300">{t.hero.text}</p>
          <p className="mt-4 flex items-start gap-2 text-sm text-slate-400">
            <GraduationCap className="mt-0.5 size-4 shrink-0 text-brand-300" aria-hidden />
            {t.hero.school}
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a href="#projects" className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-semibold text-ink transition hover:bg-brand-50">
              {t.hero.cta}
              <ArrowRight className="size-4" aria-hidden />
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-xl px-6 py-3 font-semibold ring-1 ring-white/25 transition hover:bg-white/10">
              <Mail className="size-4" aria-hidden />
              {t.hero.contact}
            </a>
            <a href={CONTACT.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="rounded-xl p-3 ring-1 ring-white/25 transition hover:bg-white/10">
              <LinkedinIcon className="size-5" />
            </a>
            <a href={CONTACT.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="rounded-xl p-3 ring-1 ring-white/25 transition hover:bg-white/10">
              <GithubIcon className="size-5" />
            </a>
          </div>
          <dl className="mt-12 grid max-w-lg grid-cols-3 gap-4 border-t border-white/10 pt-8">
            {t.hero.stats.map((stat) => (
              <div key={stat.label}>
                <dt className="sr-only">{stat.label}</dt>
                <dd className="text-3xl font-extrabold text-white">{stat.value}</dd>
                <dd className="mt-1 text-xs leading-snug text-slate-400 sm:text-sm">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="relative hidden lg:block" aria-hidden>
          <div className="rotate-2 transition duration-700 hover:rotate-0">
            <BrowserFrame src="/projects/floreevent-home.webp" alt="" url="https://flore-event.vercel.app" />
          </div>
          <div className="absolute -bottom-10 -left-10 w-[46%] -rotate-3">
            <BrowserFrame src="/projects/milatech-app.webp" alt="" />
          </div>
          <div className="absolute -right-6 -bottom-16 w-[24%] rotate-3">
            <PhoneFrame src="/projects/shoemanager-mobile.webp" alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}

function SectionTitle({ kicker, title, text, dark = false }: { kicker: string; title: string; text?: string; dark?: boolean }) {
  return (
    <div className="max-w-2xl">
      <p className={`text-sm font-bold tracking-widest uppercase ${dark ? 'text-glow' : 'text-brand-600'}`}>{kicker}</p>
      <h2 className={`mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl ${dark ? 'text-white' : 'text-ink'}`}>{title}</h2>
      {text && <p className={`mt-4 text-lg ${dark ? 'text-slate-300' : 'text-slate-600'}`}>{text}</p>}
    </div>
  )
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const { t } = useLang()
  const reversed = index % 2 === 1
  return (
    <article className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16" aria-labelledby={`project-${project.id}`}>
      <div className={`relative pb-10 ${reversed ? 'lg:order-2' : ''}`}>
        <div className="absolute inset-x-6 top-8 bottom-0 -z-10 rounded-3xl opacity-20 blur-2xl" style={{ backgroundColor: project.accent }} aria-hidden />
        <BrowserFrame src={`/projects/${project.id}-app.webp`} alt={`${project.name} : ${project.context}`} url={project.links.site} />
        <div className={`absolute -bottom-2 w-[22%] min-w-24 ${reversed ? '-left-3' : '-right-3'}`}>
          <PhoneFrame src={`/projects/${project.id}-mobile.webp`} alt={`${project.name} sur téléphone`} />
        </div>
      </div>
      <div>
        <p className="text-sm font-bold tracking-wide" style={{ color: project.accent }}>
          {String(index + 1).padStart(2, '0')} · {project.context}
        </p>
        <h3 id={`project-${project.id}`} className="mt-2 text-3xl font-extrabold tracking-tight text-ink">
          {project.name}
        </h3>
        <p className="mt-4 leading-relaxed text-slate-600">{project.summary}</p>
        <ul className="mt-6 space-y-2.5" aria-label={t.projects.highlights}>
          {project.highlights.map((item) => (
            <li key={item} className="flex gap-2.5 text-slate-800">
              <Check className="mt-0.5 size-5 shrink-0" style={{ color: project.accent }} aria-hidden />
              {item}
            </li>
          ))}
        </ul>
        <ul className="mt-6 flex flex-wrap gap-2" aria-label="Technologies">
          {project.stack.map((tech) => (
            <li key={tech} className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-slate-700 ring-1 ring-slate-200">
              {tech}
            </li>
          ))}
        </ul>
        <div className="mt-8 flex flex-wrap gap-3">
          {project.links.site && (
            <a
              href={project.links.site}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:opacity-90"
              style={{ backgroundColor: project.accent }}
            >
              {t.projects.site}
              <ArrowUpRight className="size-4" aria-hidden />
            </a>
          )}
          <a
            href={project.links.code}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-2.5 text-sm font-semibold text-ink ring-1 ring-slate-300 transition hover:bg-slate-50"
          >
            <Code2 className="size-4" aria-hidden />
            {t.projects.code}
          </a>
          {project.links.extra && (
            <a
              href={project.links.extra.href}
              className="inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
            >
              <Download className="size-4" aria-hidden />
              {project.links.extra.label}
            </a>
          )}
        </div>
      </div>
    </article>
  )
}

function Projects() {
  const { t } = useLang()
  return (
    <section id="projects" className="mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32">
      <SectionTitle kicker={t.projects.kicker} title={t.projects.title} text={t.projects.text} />
      <div className="mt-16 space-y-28">
        {t.list.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  )
}

function Skills() {
  const { t } = useLang()
  return (
    <section id="skills" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionTitle kicker={t.skills.kicker} title={t.skills.title} />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {t.skills.groups.map((group) => (
            <div key={group.title} className="rounded-2xl bg-slate-50 p-6 ring-1 ring-slate-200 transition hover:-translate-y-0.5 hover:shadow-md">
              <h3 className="font-bold text-ink">{group.title}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li key={item} className="rounded-lg bg-white px-2.5 py-1 text-sm font-medium text-slate-700 ring-1 ring-slate-200">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Journey() {
  const { t } = useLang()
  return (
    <section id="journey" className="mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32">
      <SectionTitle kicker={t.journey.kicker} title={t.journey.title} />
      <div className="mt-12 grid gap-12 lg:grid-cols-[1.3fr_1fr]">
        <div>
          <h3 className="flex items-center gap-2 font-bold text-ink">
            <Briefcase className="size-5 text-brand-600" aria-hidden />
            {t.journey.experience}
          </h3>
          <ol className="mt-6 space-y-8 border-l-2 border-brand-100 pl-6">
            {t.journey.jobs.map((job) => (
              <li key={job.company} className="relative">
                <span className="absolute top-1.5 -left-[31px] size-3 rounded-full bg-brand-600 ring-4 ring-slate-50" aria-hidden />
                <p className="text-sm font-semibold text-brand-600">{job.period}</p>
                <h4 className="mt-1 text-lg font-bold text-ink">{job.role}</h4>
                <p className="flex items-center gap-1.5 text-sm text-slate-500">
                  {job.company}
                  <MapPin className="size-3.5" aria-hidden />
                  {job.place}
                </p>
                <p className="mt-2 leading-relaxed text-slate-600">{job.text}</p>
                <p className="mt-2 text-sm font-medium text-slate-500">{job.stack}</p>
              </li>
            ))}
          </ol>
        </div>
        <div>
          <h3 className="flex items-center gap-2 font-bold text-ink">
            <GraduationCap className="size-5 text-brand-600" aria-hidden />
            {t.journey.education}
          </h3>
          <ol className="mt-6 space-y-4">
            {t.journey.degrees.map((degree) => (
              <li key={degree.title} className="rounded-2xl bg-white p-5 ring-1 ring-slate-200">
                <p className="text-sm font-semibold text-brand-600">{degree.period}</p>
                <h4 className="mt-1 font-bold text-ink">{degree.title}</h4>
                <p className="text-sm text-slate-500">{degree.school}</p>
                {degree.note && (
                  <p className="mt-2 flex items-start gap-1.5 text-sm font-semibold text-emerald-700">
                    <BadgeCheck className="mt-0.5 size-4 shrink-0" aria-hidden />
                    {degree.note}
                  </p>
                )}
                {degree.proof && (
                  <a href={degree.proof.href} target="_blank" rel="noreferrer" className="mt-1 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 hover:text-brand-700">
                    <FileText className="size-4" aria-hidden />
                    {degree.proof.label}
                  </a>
                )}
              </li>
            ))}
          </ol>
          <p className="mt-6 flex gap-2 text-sm text-slate-600">
            <Languages className="mt-0.5 size-4 shrink-0 text-brand-600" aria-hidden />
            {t.journey.languages}
          </p>
          <p className="mt-2 flex gap-2 text-sm text-slate-600">
            <MapPin className="mt-0.5 size-4 shrink-0 text-brand-600" aria-hidden />
            {t.journey.mobility}
          </p>
        </div>
      </div>
    </section>
  )
}

function Contact() {
  const { t } = useLang()
  const [copied, setCopied] = useState(false)
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT.email)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2000)
    } catch {
      // presse-papiers indisponible : l'adresse reste affichee
    }
  }
  return (
    <section id="contact" className="relative isolate overflow-hidden bg-ink py-24 text-white sm:py-32">
      <div className="absolute -bottom-40 left-1/2 -z-10 size-[40rem] -translate-x-1/2 rounded-full bg-brand-600/25 blur-3xl" aria-hidden />
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
        <Portrait className="mx-auto mb-6 size-24" />
        <p className="text-sm font-bold tracking-widest text-glow uppercase">{t.contact.kicker}</p>
        <h2 className="mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl">{t.contact.title}</h2>
        <p className="mx-auto mt-5 max-w-xl text-lg text-slate-300">{t.contact.text}</p>
        <h3 className="mt-10 text-sm font-bold tracking-widest text-slate-400 uppercase">{t.contact.searchTitle}</h3>
        <ul className="mt-4 grid gap-4 text-left sm:grid-cols-3">
          {t.contact.searches.map((search) => (
            <li key={search.kind} className="flex flex-col rounded-2xl bg-white/5 p-5 ring-1 ring-white/10">
              <p className="text-lg font-bold text-white">{search.kind}</p>
              <p className="mt-1 flex items-center gap-1.5 text-sm font-semibold text-emerald-300">
                <CalendarCheck className="size-4 shrink-0" aria-hidden />
                {search.when}
              </p>
              <p className="mt-3 mb-4 text-sm leading-relaxed text-slate-300">{search.text}</p>
              <a
                href={search.cv.href}
                download
                className="mt-auto inline-flex w-fit items-center gap-2 rounded-xl bg-white px-4 py-2 text-sm font-semibold text-ink transition hover:bg-slate-200"
              >
                <Download className="size-4" aria-hidden />
                {search.cv.label}
              </a>
              {search.proof && (
                <a href={search.proof.href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 pt-3 text-sm font-semibold text-glow hover:text-white">
                  <FileText className="size-4" aria-hidden />
                  {search.proof.label}
                </a>
              )}
            </li>
          ))}
        </ul>
        <p className="mt-8 text-xl font-semibold break-all text-white sm:text-2xl">{CONTACT.email}</p>
        <p className="mt-2 text-lg font-semibold text-slate-300">{CONTACT.phone}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a href={`mailto:${CONTACT.email}`} className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-semibold text-ink transition hover:bg-brand-50">
            <Mail className="size-4" aria-hidden />
            {t.contact.email}
          </a>
          <button type="button" onClick={copy} className="inline-flex items-center gap-2 rounded-xl px-6 py-3 font-semibold ring-1 ring-white/25 transition hover:bg-white/10">
            {copied ? <Check className="size-4 text-emerald-300" aria-hidden /> : <Copy className="size-4" aria-hidden />}
            {copied ? t.contact.copied : t.contact.copy}
          </button>
          <a href={CONTACT.tel} className="inline-flex items-center gap-2 rounded-xl px-6 py-3 font-semibold ring-1 ring-white/25 transition hover:bg-white/10">
            <Phone className="size-4" aria-hidden />
            {t.contact.call}
          </a>
          <a href={CONTACT.whatsapp} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl bg-[#25D366] px-6 py-3 font-semibold text-ink transition hover:bg-[#1ebe5a]">
            <WhatsappIcon className="size-4" />
            {t.contact.whatsapp}
          </a>
        </div>
        <div className="mt-8 flex justify-center gap-3">
          <a href={CONTACT.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold text-slate-300 ring-1 ring-white/15 transition hover:bg-white/10 hover:text-white">
            <LinkedinIcon className="size-4" />
            LinkedIn
          </a>
          <a href={CONTACT.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold text-slate-300 ring-1 ring-white/15 transition hover:bg-white/10 hover:text-white">
            <GithubIcon className="size-4" />
            GitHub
          </a>
        </div>
      </div>
    </section>
  )
}

export default function App() {
  const { t } = useLang()
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <Journey />
        <Contact />
      </main>
      <footer className="border-t border-white/10 bg-ink py-8 text-center text-sm text-slate-400">
        <p className="flex items-center justify-center gap-2">
          <Monogram className="size-7 text-xs" />
          {t.footer} · {new Date().getFullYear()}
        </p>
      </footer>
    </>
  )
}
