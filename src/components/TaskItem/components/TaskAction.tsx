import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Copy, MoreHorizontal, Pencil, Trash } from "lucide-react";

interface TaskActionsProps {
    onEdit: () => void;
    onDelete: () => void;
    onClone: () => void;
  }

export const TaskActions = ({ onEdit, onDelete, onClone }: TaskActionsProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <MoreHorizontal />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem onClick={onEdit}>
          <Pencil className="mr-2 h-4 w-4" /> Editar
        </DropdownMenuItem>
        <DropdownMenuItem onClick={onDelete}>
          <Trash className="mr-2 h-4 w-4" /> Excluir
        </DropdownMenuItem>
        <DropdownMenuItem onClick={onClone}>
          <Copy className="mr-2 h-4 w-4" /> Clonar
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};