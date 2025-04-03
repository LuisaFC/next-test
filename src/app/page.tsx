"use client";

import TaskForm from '@/components/TaskForm/TaskForm';
import { TaskList } from '@/components/TaskList/TaskList';
import { Button } from '@/components/ui/button';
import { useTaskStore } from '@/store/tasksStore';
import { Task } from '@/types/task';
import { BarChart3 } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
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
            <Button
              onClick={() => router.push('/analytics')}
              variant="outline"
              className="flex items-center gap-2"
            >
              <BarChart3 className="h-4 w-4" />
              <span className="hidden sm:inline">Dashboard</span>
            </Button>
          </div>
        <TaskList />
      </div>
    </main>
  );
}
