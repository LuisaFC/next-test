'use client';

import { useEffect } from 'react';
import { useTaskStore } from '@/store/tasks';
import { ErrorState, EmptyState, TaskListView } from './components';
import { Loader } from '../Loader/Loader';

export function TaskList() {
  const { tasks, isLoading, error, fetchTasks, updateTask, deleteTask } = useTaskStore();

  useEffect(() => {
    fetchTasks();
  }, [fetchTasks]);

  if (isLoading) return <Loader />;
  if (error) return <ErrorState error={error} />;
  if (tasks.length === 0) return <EmptyState />;

  return <TaskListView
    tasks={tasks}
    onUpdate={updateTask}
    onDelete={deleteTask}
  />;
}