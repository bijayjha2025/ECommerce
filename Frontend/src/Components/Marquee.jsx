
const Phrases = [
    "NEW COLLECTION 2026",
    "HANDICRAFTED IN NEPAL",
    "FREE SHIPPING NATIONWIDE",
    "ETHICALLY MADE",
    "HERITAGE IN EVERY THREAD",
    "LIMITED EDITION DROPS",
    "SUSTAINABLE FASHION",
    "EXPERIENCE NEPAL",
    "WEAR THE CULTURE",
    "WEAR THE STORY",
]

const items = [...Phrases, ...Phrases];

export default function Marquee() {
    return (
        <div className="relative w-full overflow-hidden my-6">
            <div className="py-4">
                <div className="absolute left-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-r from-transparent to-transparent pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-l from-transparent to-transparent pointer-events-none" />

                <div className="flex w-max hover:[animation-play-state:paused]" style={{ animation: 'marquee 30s linear infinite' }}>
                    {items.map((phrase, i) => (
                        <span key={i} className="inline-flex items-center gap-5 px-7 whitespace-nowrap">
                            <span className={`font-serif text-[11px] tracking-[0.35em] uppercase ${i % 2 === 0 ? 'text-[#0f172a]' : 'text-[#0f172a]/80'}`}>
                                {phrase}</span>
                            <span className="text-[#b8860b] text-[10px]">◆</span>
                        </span>
                    ))}
                </div>
            </div>
        </div>
    )
}