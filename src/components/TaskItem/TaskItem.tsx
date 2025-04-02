"use client";

import { TaskStatusBadge } from './components/TaskStatusBadge';
import { useTaskManagement } from './hooks/useTaskManagement';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card';
import { Star } from 'lucide-react';
import { Button } from '../ui/button';
import { TaskItemProps } from '@/types/task';
import { TaskActions } from './components/TaskAction';
import { TaskEditDialog } from './components/TaskDialog';
import { TaskPriorityBadge } from './components/TaskStatusPriorityBadge';

function TaskItem({ task, onUpdate, onDelete }: TaskItemProps) {
  const {
    isEditing,
    setIsEditing,
    editedTask,
    handleInputChange,
    handleUpdate,
    handleFavorite,
  } = useTaskManagement(task, onUpdate);

  return (
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
            <Star className={task.favorite ? 'fill-yellow-500 text-yellow-500' : ''}
    size={20} />
          </Button>
          <TaskActions
            onEdit={() => setIsEditing(true)}
            onDelete={() => onDelete(task.id)}
          />
        </div>
      </CardFooter>

      <TaskEditDialog
        isOpen={isEditing}
        onClose={() => setIsEditing(false)}
        task={editedTask}
        onUpdate={handleUpdate}
        onChange={handleInputChange}
      />
    </Card>
  );
}

export default TaskItem;