import { Button } from '@/components/ui/button';
import { BarChart3, Plus } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { TaskFilterDropdown } from './TaskFilterDropdown/TaskListFilterDropdown';
import TaskForm from '../../TaskForm/TaskForm';
import { useTaskStore } from '@/store/tasksStore';
import { SearchInput } from '../../Search/SearchInput';

export function TaskListHeader() {
  const router = useRouter();
  const { addTask } = useTaskStore();

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-4">
        <h1 className="text-3xl font-bold">Tarefas</h1>
        <SearchInput />
        <TaskFilterDropdown />
      </div>
      <div className="flex items-center gap-4">
      <Button
          onClick={() => router.push('/analytics')}
          variant="outline"
          className="flex items-center gap-2"
        >
          <BarChart3 className="h-4 w-4" />
          <span className="hidden sm:inline">Dashboard</span>
        </Button>
        <TaskForm onAddTask={addTask}>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Nova Tarefa
          </Button>
        </TaskForm>
      </div>
    </div>
  );
}
