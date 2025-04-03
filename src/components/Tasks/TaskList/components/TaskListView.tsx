import { Task } from '@/types/task';
import TaskItem from '@/components/Tasks/TaskItem/TaskItem';

interface TaskListViewProps {
  tasks: Task[];
  onUpdate: (task: Task) => void;
  onDelete: (taskId: number) => void;
  onClone: (task: Task) => void;
}

export const TaskListView = ({ tasks, onUpdate, onDelete, onClone }: TaskListViewProps) => (
  <div className="space-y-4">
    {tasks.map((task) => (
      <TaskItem
        key={task.id}
        task={task}
        onUpdate={onUpdate}
        onDelete={onDelete}
        onClone={onClone}
      />
    ))}
  </div>
);