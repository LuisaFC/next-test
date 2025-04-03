"use client";

import TaskForm from '@/components/TaskForm/TaskForm';
import TaskList from '@/components/TaskList/TaskList';
import { Task } from '@/types/task';
import { useState } from 'react';

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

  const [tasks, setTasks] = useState<Task[]>(testTasks);

  const handleAddTask = (newTask: Task) => {
    setTasks([...tasks, newTask]);
  };

  const handleUpdate = (updatedTask: Task) => {
    console.log('Tarefa atualizada:', updatedTask);
  };

  const handleDeleteTask = (taskId: number) => {
    setTasks(prev => prev.filter(task => task.id !== taskId));
  };

  return (
    <main className="container mx-auto p-4 md:p-8">
      <div className="space-y-4">
        <TaskForm onAddTask={handleAddTask} />
        <TaskList tasks={testTasks} onUpdate={handleUpdate} onDelete={handleDeleteTask} />
      </div>
    </main>
  );
}
