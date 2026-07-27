import { exploringTerminal } from '../../data/site'

/**
 * "Currently Exploring" terminal (reference style): traffic-light dots,
 * monospaced list, blinking block cursor, a soft purple glow along the
 * bottom edge and a lightweight CSS dotted sphere on the right. No fake
 * command execution.
 */
export function TerminalPanel() {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-night-deep/85">
      {/* Header */}
      <div className="flex items-center gap-1.5 border-b border-white/5 px-4 py-2.5" aria-hidden="true">
        <span className="h-2.5 w-2.5 rounded-full bg-[#f87171]/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#fbbf24]/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#34d399]/80" />
      </div>

      {/* Body */}
      <div className="relative px-5 py-5 font-mono text-[13px] leading-relaxed ">
        <p className="text-emerald-400">&gt; {exploringTerminal.intro}</p>
        <ul className="mt-2 space-y-0.5">
          {exploringTerminal.items.map((item) => (
            <li key={item} className="text-white/70">
              <span aria-hidden="true" className="text-accent-purple/70">&gt; </span>
              {item}
            </li>
          ))}
        </ul>
        <span
          aria-hidden="true"
          className="mt-1.5 inline-block h-4 w-2 animate-[caret-blink_1.1s_steps(1)_infinite] rounded-[1px] bg-accent-purple/80 motion-reduce:animate-none"
        />

        {/* Dotted sphere — pure CSS, slow spin */}
        <div
          aria-hidden="true"
          className="absolute top-1/2 right-5 hidden h-28 w-28 -translate-y-1/2 sm:block"
        >
          <div className="bg-halftone h-full w-full animate-[orbit-spin_36s_linear_infinite] rounded-full opacity-70 mask-[radial-gradient(closest-side,black_58%,transparent)] motion-reduce:animate-none" />
          <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_34%_30%,rgb(139_92_246/0.25),transparent_60%)]" />
          <div className="absolute inset-0 rounded-full border border-accent-purple/20" />
        </div>
      </div>

      {/* Purple accent along the bottom edge (outer halo lives in the parent) */}
      <div
        aria-hidden="true"
        className="absolute inset-x-8 bottom-0 h-6 bg-accent-purple/25 blur-xl"
      />
      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-accent-purple/60 to-transparent" />
    </div>
  )
}
