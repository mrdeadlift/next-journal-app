import { Textarea } from '@/components/ui/textarea'

interface JournalSectionProps {
  value: string
  onChange: (value: string) => void
}

const TaskSection = ({ value, onChange }: JournalSectionProps) => {
  return (
    <Textarea
      placeholder="一日を始める前に頭の整理を行いましょう．．．"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="min-h-[200px]"
    />
  )
}

export default TaskSection
