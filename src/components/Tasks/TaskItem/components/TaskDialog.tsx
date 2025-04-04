import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Task } from "@/types/task";
import { Label } from "@radix-ui/react-label";

interface TaskEditDialogProps {
    isOpen: boolean;
    onClose: () => void;
    task: Task;
    onUpdate: () => void;
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  }

  export const TaskEditDialog = ({
    isOpen,
    onClose,
    task,
    onUpdate,
    onChange
  }: TaskEditDialogProps) => {
    return (
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Editar Tarefa</DialogTitle>
            <DialogDescription>Edite os detalhes da tarefa.</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="title" className="text-right">Título</Label>
              <Input
                id="title"
                name="title"
                value={task.title}
                onChange={onChange}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="description" className="text-right">Descrição</Label>
              <Input
                id="description"
                name="description"
                value={task.description ?? ''}
                onChange={onChange}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="status" className="text-right">Status</Label>
              <Input
                id="status"
                name="status"
                value={task.status}
                onChange={onChange}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="priority" className="text-right">Prioridade</Label>
              <Input
                id="priority"
                name="priority"
                value={task.priority}
                onChange={onChange}
                className="col-span-3"
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="button" onClick={onUpdate}>Salvar</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    );
  };