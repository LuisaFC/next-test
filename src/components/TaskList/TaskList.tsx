'use client';
import TaskItem from '@/components/TaskItem/TaskItem';
import { Task } from '@/types/task';

interface TaskListProps {
  tasks: Task[];
  onUpdate: (updatedTask: Task) => void;
  onDelete: (taskId: number) => void;
}

function TaskList({ tasks, onUpdate, onDelete }: TaskListProps) {
  return (
    <div className="space-y-4">
    {tasks.map((task) => (
      <TaskItem key={task.id} task={task} onUpdate={onUpdate} onDelete={onDelete} />
    ))}
  </div>
  );
}

export default TaskList;