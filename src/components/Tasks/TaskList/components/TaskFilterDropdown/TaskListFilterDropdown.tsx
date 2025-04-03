import { Button } from "@/components/ui/button";
import { Filter } from "lucide-react";
import { FilterDropdownMenu } from "./FilterDropdownMenu";
import { useTaskStore } from "@/store/tasksStore";

export function TaskFilterDropdown() {
  const { filters } = useTaskStore();
  const isFiltering = filters.status !== 'all' || filters.priority !== 'all' || filters.favorite;

  return (
    <FilterDropdownMenu>
      <Button
        variant="outline"
        size="icon"
        className={isFiltering ? "bg-primary text-primary-foreground hover:bg-primary/90" : ""}
      >
        <Filter className="h-4 w-4" />
      </Button>
    </FilterDropdownMenu>
  );
}