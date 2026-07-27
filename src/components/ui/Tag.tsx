interface TagProps {
  label: string
}

export function Tag({ label }: TagProps) {
  return (
    <span className="inline-flex items-center rounded-full border border-line bg-accent-soft/60 px-2.5 py-1 font-mono text-xs text-ink/80">
      {label}
    </span>
  )
}
