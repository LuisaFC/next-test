import { FavoriteFilter } from "./Sections/FavoriteFilter";
import { StatusFilter } from "./Sections/StatusFilter";
import { PriorityFilter } from "./Sections/PriorityFilter";
import { ResetFilters } from "./Sections/ResetFilters";

export function FilterSections() {
  return (
    <>
      <FavoriteFilter />
      <StatusFilter />
      <PriorityFilter />
      <ResetFilters />
    </>
  );
}