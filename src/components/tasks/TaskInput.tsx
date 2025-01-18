import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { type FormEvent, useState } from 'react'

interface TaskInputProps {
  onSubmit: (content: string) => void
}

const TaskInput = ({ onSubmit }: TaskInputProps) => {
  const [content, setContent] = useState('')

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (content.trim()) {
      onSubmit(content.trim())
      setContent('')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
      <Input
        type="text"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="新しいタスクを入力してください"
        className="flex-1"
      />
      <Button type="submit" disabled={!content.trim()}>
        追加
      </Button>
    </form>
  )
}

export default TaskInput
