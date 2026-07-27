interface SectionLabelProps {
  text: string
}

/** Small dark-panel heading with the reference's purple accent bar. */
export function SectionLabel({ text }: SectionLabelProps) {
  return (
    <h2 className="flex items-center gap-2.5 font-display text-base font-medium text-white/90">
      <span
        aria-hidden="true"
        className="h-4 w-1 rounded-full bg-accent-purple shadow-[0_0_10px_rgb(139_92_246/0.8)]"
      />
      {text}
    </h2>
  )
}
