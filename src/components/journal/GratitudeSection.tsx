import { Textarea } from '@/components/ui/textarea'

interface JournalSectionProps {
  value: string
  onChange: (value: string) => void
}

const GratitudeSection = ({ value, onChange }: JournalSectionProps) => {
  return (
    <Textarea
      placeholder="今日感謝したことを書き留めましょう..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="min-h-[200px]"
    />
  )
}

export default GratitudeSection
