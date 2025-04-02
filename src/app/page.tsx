"use client";
import TaskItem from '@/components/TaskItem/TaskItem';

export default function Home() {

    const handleUpdate = (updatedTask: unknown) => {
        console.log('Tarefa atualizada:', updatedTask);
      };

      const handleDelete = (taskId: number) => {
        console.log('Tarefa excluída:', taskId);
      };
  return (
    <div>
      <TaskItem
        task={{
          id: 1,
          title: 'Task 1',
          description: 'Description 1',
          status: 'A Fazer',
          priority: 'Baixa',
          favorite: false,
        }}
        onUpdate={handleUpdate} onDelete={handleDelete}
      />
    </div>
  );
}
