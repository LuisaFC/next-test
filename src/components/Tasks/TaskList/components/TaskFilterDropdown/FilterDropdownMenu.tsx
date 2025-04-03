import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { FilterSections } from "./FilterSection";

interface FilterDropdownMenuProps {
  children: React.ReactNode;
}

export function FilterDropdownMenu({ children }: FilterDropdownMenuProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        {children}
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <FilterSections />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}