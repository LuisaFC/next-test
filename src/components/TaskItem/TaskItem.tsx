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

interface TaskItemProps {
  readonly task: Task;
  readonly onUpdate: (task: Task) => void;
  readonly onDelete: (taskId: number) => void;
}

function TaskItem({ task, onUpdate, onDelete }: TaskItemProps) {
  const [isEditing, setIsEditing] = useState(false);

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
                className={task.favorite ? 'fill-yellow-500 text-yellow-500' : ''}
                size={20}
              />
            </Button>
            <TaskActions
              onEdit={() => setIsEditing(true)}
              onDelete={() => onDelete(task.id)}
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
    </>
  );
}

export default TaskItem;