import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import type { JournalEntry } from '@/types'
import ActionPlanSection from './ActionPlanSection'
import BulletJournalSection from './BulletJournalSection'
import FutureVisionSection from './FutureVisionSection'
import GratitudeSection from './GratitudeSection'
import TaskSection from './TaskSection'

interface JournalTabsProps {
  journalEntry: JournalEntry
  onJournalChange: (field: keyof JournalEntry, value: string) => void
}

const JournalTabs = ({ journalEntry, onJournalChange }: JournalTabsProps) => {
  return (
    <Tabs defaultValue="gratitude" className="w-full">
      <TabsList className="grid w-full grid-cols-5">
        <TabsTrigger value="gratitude">感謝</TabsTrigger>
        <TabsTrigger value="future">3ヶ月後の理想</TabsTrigger>
        <TabsTrigger value="actions">行動計画</TabsTrigger>
        <TabsTrigger value="tasks">タスク</TabsTrigger>
        <TabsTrigger value="bullet">バレットジャーナル</TabsTrigger>
      </TabsList>

      <TabsContent value="gratitude">
        <GratitudeSection
          value={journalEntry.gratitude}
          onChange={(value) => onJournalChange('gratitude', value)}
        />
      </TabsContent>
      <TabsContent value="future">
        <FutureVisionSection
          value={journalEntry.futureVision}
          onChange={(value) => onJournalChange('futureVision', value)}
        />
      </TabsContent>
      <TabsContent value="actions">
        <ActionPlanSection
          value={journalEntry.actions}
          onChange={(value) => onJournalChange('actions', value)}
        />
      </TabsContent>
      <TabsContent value="tasks">
        <TaskSection
          value={journalEntry.tasks}
          onChange={(value) => onJournalChange('tasks', value)}
        />
      </TabsContent>
      <TabsContent value="bullet">
        <BulletJournalSection
          value={journalEntry.bulletJournal}
          onChange={(value) => onJournalChange('bulletJournal', value)}
        />
      </TabsContent>
    </Tabs>
  )
}

export default JournalTabs
