import { useState } from 'react';
import type { Task } from '@/types/task';

export const useTaskManagement = (task: Task, onUpdate: (task: Task) => void) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState(task);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setEditedTask({ ...editedTask, [e.target.name]: e.target.value });
  };

  const handleUpdate = () => {
    onUpdate(editedTask);
    setIsEditing(false);
  };

  const handleFavorite = () => {
    onUpdate({ ...task, favorite: !task.favorite });
  };

  return {
    isEditing,
    setIsEditing,
    editedTask,
    handleInputChange,
    handleUpdate,
    handleFavorite,
  };
};