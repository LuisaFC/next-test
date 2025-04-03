'use client';

import { useEffect } from 'react';
import { useTaskStore } from '@/store/tasksStore';
import { TaskListView } from './components/TaskListView';
import { Loader } from '../../Loader/Loader';
import { TaskListHeader } from './components/TaskListHeader';

export function TaskList() {
  const {
    tasks,
    isLoading,
    error,
    filters,
    fetchTasks,
    updateTask,
    deleteTask,
    cloneTask
  } = useTaskStore();

  useEffect(() => {
    fetchTasks();
  }, [fetchTasks]);

  if (isLoading) return <Loader />;
  if (error) return <div>Erro: {error}</div>;

  const filteredTasks = tasks.filter(task => {
    const matchesStatus = filters.status === 'all' || task.status === filters.status;
    const matchesPriority = filters.priority === 'all' || task.priority === filters.priority;
    const matchesFavorite = !filters.favorite || task.favorite;

    return matchesStatus && matchesPriority && matchesFavorite;
  });

  return (
    <div className="space-y-8">
      <TaskListHeader />

      {filteredTasks.length > 0 ? (
        <TaskListView
          tasks={filteredTasks}
          onUpdate={updateTask}
          onDelete={deleteTask}
          onClone={cloneTask}
        />
      ) : (
        <div className="text-center py-10">
          <p className="text-muted-foreground">
            {tasks.length === 0
              ? 'Nenhuma tarefa encontrada. Crie uma nova tarefa!'
              : 'Nenhuma tarefa corresponde aos filtros selecionados.'}
          </p>
        </div>
      )}
    </div>
  );
}
