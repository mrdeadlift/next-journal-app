import { Checkbox } from '@/components/ui/checkbox'
import type { Task } from '@/types'

interface TaskItemProps {
  task: Task
  onToggle: (id: number) => void
}

const TaskItem = ({ task, onToggle }: TaskItemProps) => {
  return (
    <div className="flex items-center space-x-2 mb-2">
      <Checkbox
        checked={task.completed}
        onCheckedChange={() => onToggle(task.id)}
      />
      <span className={task.completed ? 'line-through' : ''}>
        {task.content}
      </span>
    </div>
  )
}

export default TaskItem
