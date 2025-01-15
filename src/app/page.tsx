'use client'

import MainLayout from '@/components/layout/MainLayout'
import type { JournalEntry, Task } from '@/types'
import { useState } from 'react'

export default function Home() {
  const [date, setDate] = useState<Date>(new Date())
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, content: 'タスク1', completed: false },
    { id: 2, content: 'タスク2', completed: false },
    { id: 3, content: 'タスク3', completed: false },
  ])
  const [journalEntry, setJournalEntry] = useState<JournalEntry>({
    gratitude: '',
    futureVision: '',
    actions: '',
    tasks: '',
    bulletJournal: '',
  })

  const handleDateChange = (newDate: Date | undefined) => {
    if (newDate) {
      setDate(newDate)
    }
  }

  const handleTaskToggle = (taskId: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task,
      ),
    )
  }

  const handleJournalChange = (field: keyof JournalEntry, value: string) => {
    setJournalEntry((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  return (
    <MainLayout
      date={date}
      tasks={tasks}
      journalEntry={journalEntry}
      onDateChange={handleDateChange}
      onTaskToggle={handleTaskToggle}
      onJournalChange={handleJournalChange}
    />
  )
}
