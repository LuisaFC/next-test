import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useTaskStore } from "@/store/tasksStore";
import { useDebounce } from "./hooks/useDebounce";

import { useState, useEffect } from "react";

export function SearchInput() {
  const { setSearchQuery } = useTaskStore();
  const [value, setValue] = useState("");
  const debouncedValue = useDebounce(value, 300);

  useEffect(() => {
    setSearchQuery(debouncedValue);
  }, [debouncedValue, setSearchQuery]);

  return (
    <div className="relative w-full max-w-sm">
      <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
      <Input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="pl-9"
        placeholder="Buscar por título..."
      />
    </div>
  );
}