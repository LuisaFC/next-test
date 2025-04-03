"use client";

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star } from 'lucide-react';
import { TaskStatusBadge } from './components/TaskStatusBadge';
import { TaskEditForm } from '../TaskForm/components/TaskEditForm';
import { Task } from '@/types/task';
import { TaskPriorityBadge } from './components/TaskStatusPriorityBadge';
import { TaskActions } from './components/TaskAction';
import { DeleteTask } from './components/DeleteTask';

interface TaskItemProps {
  readonly task: Task;
  readonly onUpdate: (task: Task) => void;
  readonly onDelete: (taskId: number) => void;
  readonly onClone: (task: Task) => void;
}

function TaskItem({ task, onUpdate, onDelete, onClone }: TaskItemProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = () => {
    setIsDeleting(true);
  };

  const handleConfirmDelete = () => {
    onDelete(task.id);
    setIsDeleting(false);
  };

  const handleClone = () => {
    const clonedTask = {
      ...task,
      id: 0,
      title: `${task.title} (Cópia)`,
      favorite: false
    };
    onClone(clonedTask);
  };

  const handleFavorite = () => {
    onUpdate({ ...task, favorite: !task.favorite });
  };

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle className="text-xl font-bold">{task.title}</CardTitle>
          <div className="flex space-x-2">
            <TaskStatusBadge status={task.status} />
            <TaskPriorityBadge priority={task.priority} />
          </div>
        </CardHeader>

        <CardContent>
          <CardDescription>{task.description}</CardDescription>
        </CardContent>

        <CardFooter className="flex justify-between">
          <div className="flex space-x-2">
            <Button variant="outline" size="icon" onClick={handleFavorite}>
            <Star
                className={`transition-colors duration-200 ${
                  task.favorite
                    ? 'fill-yellow-500 text-yellow-500'
                    : 'hover:text-yellow-500'
                }`}
                size={20}
              />
            </Button>
            <TaskActions
              onEdit={() => setIsEditing(true)}
              onDelete={handleDelete}
              onClone={handleClone}
            />
          </div>
        </CardFooter>
      </Card>

      <TaskEditForm
        task={task}
        isOpen={isEditing}
        onClose={() => setIsEditing(false)}
        onUpdate={onUpdate}
      />
      <DeleteTask
        isOpen={isDeleting}
        onClose={() => setIsDeleting(false)}
        onConfirm={handleConfirmDelete}
        taskTitle={task.title}
      />
    </>
  );
}

export default TaskItem;