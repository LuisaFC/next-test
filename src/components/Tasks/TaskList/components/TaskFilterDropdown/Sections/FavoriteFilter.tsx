import { DropdownMenuCheckboxItem } from "@/components/ui/dropdown-menu";
import { useTaskStore } from "@/store/tasksStore";

export function FavoriteFilter() {
  const { filters, setFavoriteFilter } = useTaskStore();

  return (
    <DropdownMenuCheckboxItem
      checked={filters.favorite}
      onCheckedChange={setFavoriteFilter}
    >
      Favoritas
    </DropdownMenuCheckboxItem>
  );
}