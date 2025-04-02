"use client";

import TaskList from '@/components/TaskList/TaskList';
import { Task } from '@/types/task';

const testTasks: Task[] = [
  {
    id: 1,
    title: 'Tarefa 1',
    description: 'Descrição da tarefa 1',
    status: 'A Fazer',
    priority: 'Alta',
    favorite: false,
  },
  {
    id: 2,
    title: 'Tarefa 2',
    description: 'Descrição da tarefa 2',
    status: 'Em Andamento',
    priority: 'Média',
    favorite: true,
  },
  {
    id: 3,
    title: 'Tarefa 3',
    description: 'Descrição da tarefa 3',
    status: 'Concluída',
    priority: 'Baixa',
    favorite: false,
  },
];

export default function Home() {

  const handleUpdate = (updatedTask: unknown) => {
    console.log('Tarefa atualizada:', updatedTask);
  };

  const handleDelete = (taskId: number) => {
    console.log('Tarefa excluída:', taskId);
  };

  return (
    <main className="container mx-auto p-4 md:p-8">
      <div className="space-y-4">
        <TaskList tasks={testTasks} onUpdate={handleUpdate} onDelete={handleDelete} />
      </div>
    </main>
  );
}
