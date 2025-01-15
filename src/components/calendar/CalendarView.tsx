import { Calendar } from '@/components/ui/calendar'

interface CalendarViewProps {
  date: Date
  onDateChange: (date: Date | undefined) => void
}

const CalendarView = ({ date, onDateChange }: CalendarViewProps) => {
  return (
    <div className="w-full">
      <Calendar
        mode="single"
        selected={date}
        onSelect={onDateChange}
        className="rounded-md border"
      />
    </div>
  )
}

export default CalendarView
