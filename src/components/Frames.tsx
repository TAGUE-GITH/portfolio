/** Capture d'ecran presentee dans une fenetre de navigateur, avec l'adresse du site. */
export function BrowserFrame({ src, alt, url }: { src: string; alt: string; url?: string }) {
  return (
    <div className="overflow-hidden rounded-xl bg-white shadow-2xl ring-1 shadow-slate-900/20 ring-slate-900/10">
      <div className="flex items-center gap-2 border-b border-slate-200 bg-slate-100 px-3 py-2">
        <span className="size-2.5 rounded-full bg-red-400" />
        <span className="size-2.5 rounded-full bg-amber-400" />
        <span className="size-2.5 rounded-full bg-emerald-400" />
        {url && <span className="ml-2 truncate rounded-md bg-white px-2 py-0.5 text-[11px] text-slate-500">{url.replace('https://', '')}</span>}
      </div>
      <img src={src} alt={alt} loading="lazy" width={1440} height={900} className="block aspect-[16/10] w-full object-cover object-top" />
    </div>
  )
}

/** Capture d'ecran de telephone. */
export function PhoneFrame({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="w-full rounded-[1.6rem] bg-ink p-1.5 shadow-2xl ring-1 shadow-slate-900/30 ring-white/10">
      <img src={src} alt={alt} loading="lazy" width={390} height={844} className="block aspect-[390/844] w-full rounded-[1.2rem] object-cover object-top" />
    </div>
  )
}
