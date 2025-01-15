// src/components/layout/MainLayout.tsx

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import type { JournalEntry, Task } from '@/types'
import CalendarView from '../calendar/CalendarView'
import JournalTabs from '../journal/JournalTabs'
import TaskList from '../tasks/TaskList'

interface MainLayoutProps {
  date: Date
  tasks: Task[]
  journalEntry: JournalEntry
  onDateChange: (date: Date | undefined) => void
  onTaskToggle: (id: number) => void
  onJournalChange: (field: keyof JournalEntry, value: string) => void
}

const MainLayout = ({
  date,
  tasks,
  journalEntry,
  onDateChange,
  onTaskToggle,
  onJournalChange,
}: MainLayoutProps) => {
  return (
    <div className="max-w-4xl mx-auto p-4 space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>カレンダー</CardTitle>
          </CardHeader>
          <CardContent>
            <CalendarView date={date} onDateChange={onDateChange} />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>今日のタスク</CardTitle>
          </CardHeader>
          <CardContent>
            <TaskList tasks={tasks} onTaskToggle={onTaskToggle} />
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>ジャーナル</CardTitle>
        </CardHeader>
        <CardContent>
          <JournalTabs
            journalEntry={journalEntry}
            onJournalChange={onJournalChange}
          />
        </CardContent>
      </Card>
    </div>
  )
}

export default MainLayout
