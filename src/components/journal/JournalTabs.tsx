import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import type { JournalEntry } from '@/types'
import ActionPlanSection from './ActionPlanSection'
import BulletJournalSection from './BulletJournalSection'
import FutureVisionSection from './FutureVisionSection'
import GratitudeSection from './GratitudeSection'

interface JournalTabsProps {
  journalEntry: JournalEntry
  onJournalChange: (field: keyof JournalEntry, value: string) => void
  onSubmit: (entry: JournalEntry) => void
}

const JournalTabs = ({
  journalEntry,
  onJournalChange,
  onSubmit,
}: JournalTabsProps) => {
  return (
    <div className="flex flex-col h-full">
      <Tabs defaultValue="gratitude" className="w-full flex-1">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="gratitude">感謝</TabsTrigger>
          <TabsTrigger value="future">3ヶ月後の理想</TabsTrigger>
          <TabsTrigger value="actions">行動計画</TabsTrigger>
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
        <TabsContent value="bullet">
          <BulletJournalSection
            value={journalEntry.bulletJournal}
            onChange={(value) => onJournalChange('bulletJournal', value)}
          />
        </TabsContent>
      </Tabs>

      <div className="flex justify-end mt-4">
        <Button onClick={() => onSubmit(journalEntry)} className="w-32">
          投稿する
        </Button>
      </div>
    </div>
  )
}

export default JournalTabs
