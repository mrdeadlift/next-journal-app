import { Textarea } from '@/components/ui/textarea'

interface JournalSectionProps {
  value: string
  onChange: (value: string) => void
}

const FutureVisionSection = ({ value, onChange }: JournalSectionProps) => {
  return (
    <Textarea
      placeholder="3ヶ月の理想の姿を記載しましょう..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="min-h-[200px]"
    />
  )
}

export default FutureVisionSection
