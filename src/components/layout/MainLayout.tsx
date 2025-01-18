// src/components/layout/MainLayout.tsx

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import type { JournalEntry, Task } from '@/types'
import CalendarView from '../calendar/CalendarView'
import JournalTabs from '../journal/JournalTabs'
import TaskInput from '../tasks/TaskInput'
import TaskList from '../tasks/TaskList'
import Header from './Header'

interface MainLayoutProps {
  date: Date
  tasks: Task[]
  journalEntry: JournalEntry
  onDateChange: (date: Date | undefined) => void
  onTaskToggle: (id: number) => void
  onJournalChange: (field: keyof JournalEntry, value: string) => void
  onJournalSubmit: (entry: JournalEntry) => void
}

const MainLayout = ({
  date,
  tasks,
  journalEntry,
  onDateChange,
  onTaskToggle,
  onJournalChange,
  onJournalSubmit,
}: MainLayoutProps) => {
  return (
    <div className="min-h-screen p-8 space-y-8 bg-background">
      <Header />
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="newspaper-card">
            <CardHeader>
              <CardTitle className="newspaper-heading">カレンダー</CardTitle>
            </CardHeader>
            <CardContent className="h-[300px] overflow-y-hidden border-l border-black/10">
              <CalendarView date={date} onDateChange={onDateChange} />
            </CardContent>
          </Card>

          <Card className="newspaper-card">
            <CardHeader>
              <CardTitle>今日のタスク</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <TaskInput
                  onSubmit={(): void => {
                    throw new Error('Function not implemented.')
                  }}
                />
              </div>
              <div className="max-h-[250px] overflow-y-auto">
                <TaskList tasks={tasks} onTaskToggle={onTaskToggle} />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="max-w-5xl mx-auto">
        <Card className="newspaper-card">
          <CardHeader>
            <CardTitle>ジャーナル</CardTitle>
          </CardHeader>
          <CardContent>
            <JournalTabs
              journalEntry={journalEntry}
              onJournalChange={onJournalChange}
              onSubmit={onJournalSubmit}
            />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default MainLayout
