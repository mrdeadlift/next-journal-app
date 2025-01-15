import { ScrollArea } from '@/components/ui/scroll-area'
import type { Task } from '@/types'
import TaskItem from './TaskItem'

interface TaskListProps {
  tasks: Task[]
  onTaskToggle: (id: number) => void
}

const TaskList = ({ tasks, onTaskToggle }: TaskListProps) => {
  return (
    <ScrollArea className="h-[300px] pr-4">
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} onToggle={onTaskToggle} />
      ))}
    </ScrollArea>
  )
}

export default TaskList
