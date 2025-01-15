import { Textarea } from '@/components/ui/textarea'

interface JournalSectionProps {
  value: string
  onChange: (value: string) => void
}

const ActionPlanSection = ({ value, onChange }: JournalSectionProps) => {
  return (
    <Textarea
      placeholder="理想の姿になるための日々の行動を整理しましょう..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="min-h-[200px]"
    />
  )
}

export default ActionPlanSection
