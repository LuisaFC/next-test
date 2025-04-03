import { Button } from "@/components/ui/button";
import { DropdownMenuSeparator } from "@/components/ui/dropdown-menu";
import { useTaskStore } from "@/store/tasksStore";

export function ResetFilters() {
  const { resetFilters } = useTaskStore();

  return (
    <>
      <DropdownMenuSeparator />
      <Button
        variant="ghost"
        className="w-full justify-start font-normal"
        onClick={resetFilters}
      >
        Limpar Filtros
      </Button>
    </>
  );
}