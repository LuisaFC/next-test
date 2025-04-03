"use client";

import TaskForm from '@/components/Tasks/TaskForm/TaskForm';
import { TaskList } from '@/components/Tasks/TaskList/TaskList';
import { useTaskStore } from '@/store/tasksStore';
import { Task } from '@/types/task';

export default function Home() {
  const { addTask } = useTaskStore();

  const handleAddTask = async (newTask: Omit<Task, 'id'>) => {
    try {
      await addTask(newTask);
    } catch (error) {
      console.error('Erro ao criar tarefa:', error);
    }
  };

  return (
    <main className="container mx-auto p-4 md:p-8">
      <div className="space-y-4">
        <div className="flex items-center justify-between gap-4">
            <div className="flex-1">
              <TaskForm onAddTask={handleAddTask} />
            </div>
          </div>
        <TaskList />
      </div>
    </main>
  );
}
