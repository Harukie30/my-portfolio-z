/**
 * Decorative “conversation” motif for the contact section — line art only, low opacity.
 */
export function ContactConversationDecor() {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden
    >
      {/* Envelope — bottom left */}
      <svg
        className="absolute -bottom-6 left-0 h-36 w-36 text-muted-foreground opacity-[0.2] sm:-bottom-4 sm:left-4 sm:h-44 sm:w-44"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>

      {/* Chat bubble — top right */}
      <svg
        className="absolute -right-4 top-4 h-32 w-32 text-muted-foreground opacity-[0.18] sm:right-8 sm:top-8 sm:h-40 sm:w-40"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>

      {/* Smaller speech tail — mid right */}
      <svg
        className="absolute right-[12%] top-1/2 hidden h-24 w-24 -translate-y-1/2 text-muted-foreground opacity-[0.15] lg:block"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
      </svg>
    </div>
  );
}
