import Image from 'next/image';

const CATEGORIES = [
  {
    title: 'Automation & Control',
    count: 'Up to 30+ Components',
    image: '/images/placeholders/Rectangle 25.png',
  },
  {
    title: 'Circuit Protection',
    count: '56 Components',
    image: '/images/placeholders/Rectangle 26.png',
  },
  {
    title: 'Panel Accessories',
    count: '98 Components',
    image: '/images/placeholders/Rectangle 27.png',
  },
];

export default function CategoryCards() {
  return (
    <section className="w-full bg-[var(--color-bg-page)] pt-0 pb-10 px-[var(--space-12)] lg:px-[var(--space-16)]">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        {CATEGORIES.map((cat) => (
          <div
            key={cat.title}
            className="bg-white rounded-[1.25rem] pl-7 pr-5 py-6 flex items-center justify-between gap-6 shadow-sm border border-gray-100 cursor-pointer hover:shadow-md transition-shadow"
          >
            <div className="flex flex-col gap-1">
              <h3 className="text-[var(--color-text)] font-[var(--weight-extrabold)] text-[length:var(--text-xl)] leading-[var(--leading-snug)]">
                {cat.title}
              </h3>
              <p className="text-[var(--color-text-subtle)] text-[length:var(--text-sm)]">{cat.count}</p>
              <a
                href="#"
                className="flex items-center gap-1.5 text-[var(--color-primary)] text-[length:var(--text-base)] font-[var(--weight-bold)] hover:underline underline-offset-2 mt-3"
              >
                Browse All
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
            <div className="flex-shrink-0 self-stretch -mr-3 -my-3 w-[7.5rem] rounded-[0.875rem] overflow-hidden">
              <Image
                src={cat.image}
                alt={cat.title}
                width={120}
                height={160}
                className="w-full h-full object-cover"
                unoptimized
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
