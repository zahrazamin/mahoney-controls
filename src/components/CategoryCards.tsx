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
              <h3 className="text-[#0a1128] font-[800] text-[1.25rem] leading-snug">
                {cat.title}
              </h3>
              <p className="text-gray-400 text-[0.8125rem]">{cat.count}</p>
              <a
                href="#"
                className="text-[#2d8a3e] text-[0.875rem] font-[700] hover:underline underline-offset-2 mt-3"
              >
                Browse All
              </a>
            </div>
            <div className="flex-shrink-0 w-[6.75rem] h-[6.75rem] rounded-[0.875rem] overflow-hidden">
              <Image
                src={cat.image}
                alt={cat.title}
                width={108}
                height={108}
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
