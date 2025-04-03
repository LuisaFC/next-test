import { Task } from '@/types/task';
import { ErrorState, EmptyState, TaskListView } from './components';
import { useTasks } from '@/hooks/useTask';
import { Loader } from '../Loader/Loader';

interface TaskListProps {
  readonly onUpdate: (task: Task) => void;
  readonly onDelete: (taskId: number) => void;
}

export function TaskList({ onUpdate, onDelete }: TaskListProps) {
  const { tasks, isLoading, error } = useTasks();

  if (isLoading) return <Loader />;
  if (error) return <ErrorState error={error} />;
  if (tasks.length === 0) return <EmptyState />;

  return <TaskListView tasks={tasks} onUpdate={onUpdate} onDelete={onDelete} />;
}