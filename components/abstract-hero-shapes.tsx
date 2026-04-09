/**
 * Decorative background — no pointer events, hidden from assistive tech.
 */
export function AbstractHeroShapes() {
  return (
    <div
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      aria-hidden
    >
      {/* Soft organic blobs (ellipses + rotation for variety) */}
      <div className="absolute -top-32 -left-28 h-[28rem] w-[32rem] rotate-12 scale-x-110 rounded-full bg-blue-500/18 blur-[64px] dark:bg-blue-400/14" />
      <div className="absolute top-[22%] -right-16 h-72 w-80 -rotate-6 rounded-full bg-sky-500/14 blur-[56px] dark:bg-sky-400/12" />
      <div className="absolute bottom-4 left-[8%] h-52 w-[24rem] rotate-3 scale-y-90 rounded-full bg-cyan-500/12 blur-[48px] dark:bg-cyan-400/10" />
      <div className="absolute top-[12%] right-[22%] h-44 w-44 rounded-full bg-indigo-400/12 blur-[40px] dark:bg-indigo-400/10" />
      <div className="absolute bottom-[30%] left-[45%] h-32 w-48 -rotate-45 rounded-full bg-blue-600/10 blur-[44px] dark:bg-blue-500/8" />

      {/* Thin abstract curves */}
      <svg
        className="absolute inset-0 h-full w-full text-blue-500/35 dark:text-sky-400/25"
        viewBox="0 0 1200 800"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <path
          d="M-40 180C120 120 280 280 480 220s360-160 520-80 280 200 440 160 320-120 520-60"
          stroke="currentColor"
          strokeWidth="1.25"
          strokeLinecap="round"
          opacity="0.55"
        />
        <path
          d="M80 620c160-80 320 40 520-20s400-200 600-120"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
          opacity="0.35"
        />
        <path
          d="M900 40c-60 140-20 300 80 400s220 120 340 60"
          stroke="currentColor"
          strokeWidth="0.9"
          strokeLinecap="round"
          opacity="0.3"
        />
      </svg>
    </div>
  );
}
