import { Task } from '@/types/task';
import TaskItem from '@/components/TaskItem/TaskItem';

interface TaskListViewProps {
  tasks: Task[];
  onUpdate: (task: Task) => void;
  onDelete: (taskId: number) => void;
}

export const TaskListView = ({ tasks, onUpdate, onDelete }: TaskListViewProps) => (
  <div className="space-y-4">
    {tasks.map((task) => (
      <TaskItem
        key={task.id}
        task={task}
        onUpdate={onUpdate}
        onDelete={onDelete}
      />
    ))}
  </div>
);