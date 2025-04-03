"use client";

import TaskForm from '@/components/TaskForm/TaskForm';
import { TaskList } from '@/components/TaskList/TaskList';
import { useTaskStore } from '@/store/tasks';
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
        <TaskForm onAddTask={handleAddTask} />
        <TaskList />
      </div>
    </main>
  );
}