"use client";

// Apple-styled video thumbnail. Shows the YouTube thumbnail image with a
// play overlay; pass an onClick to trigger the VideoLightbox.

export function VideoThumb({
  youtubeId,
  label = "Watch the walkthrough",
  onClick,
}: {
  youtubeId: string;
  label?: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group relative block w-full aspect-video overflow-hidden rounded-2xl bg-ink-50 shadow-card hover:shadow-card-lg transition-shadow focus:outline-none focus:ring-2 focus:ring-accent/40"
      aria-label={label}
    >
      <img
        src={`https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`}
        alt=""
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
        onError={(e) => {
          // Fall back to hqdefault if maxres isn't available
          (e.currentTarget as HTMLImageElement).src = `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`;
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/95 flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300">
          <svg
            width="22"
            height="26"
            viewBox="0 0 22 26"
            fill="none"
            className="ml-1.5"
            aria-hidden
          >
            <path d="M21 13L0 25.9904V0.00961876L21 13Z" fill="#0A0A0A" />
          </svg>
        </div>
      </div>

      <div className="absolute bottom-4 left-5 text-white text-[13px] font-medium tracking-tight drop-shadow">
        {label}
      </div>
    </button>
  );
}
