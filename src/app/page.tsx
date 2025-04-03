"use client";

import TaskForm from '@/components/TaskForm/TaskForm';
import {TaskList} from '@/components/TaskList/TaskList';
import { Task } from '@/types/task';

export default function Home() {

  const handleAddTask = (newTask: Task) => {
    // TODO: Implementar POST para API
    console.log('Nova tarefa:', newTask);
  };

  const handleUpdate = (updatedTask: Task) => {
    // TODO: Implementar PUT para API
    console.log('Tarefa atualizada:', updatedTask);
  };

  const handleDelete = (taskId: number) => {
    // TODO: Implementar DELETE para API
    console.log('Tarefa deletada:', taskId);
  };
  return (
    <main className="container mx-auto p-4 md:p-8">
      <div className="space-y-4">
        <TaskForm onAddTask={handleAddTask} />
        <TaskList onUpdate={handleUpdate} onDelete={handleDelete} />
      </div>
    </main>
  );
}
