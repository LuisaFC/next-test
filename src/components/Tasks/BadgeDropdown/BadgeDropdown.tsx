import { useState, ReactNode } from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';

interface BadgeDropdownProps<T extends string> {
  value: T;
  options: T[];
  itemId: number;
  onChange: (itemId: number, value: T) => void;
  renderBadge: (value: T) => ReactNode;
}

export function BadgeDropdown<T extends string>({
  value,
  options,
  itemId,
  onChange,
  renderBadge
}: BadgeDropdownProps<T>) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <div className="cursor-pointer">
          {renderBadge(value)}
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start">
        {options.map((option) => (
          <DropdownMenuItem
            key={option}
            className={option === value ? 'bg-gray-100 font-medium' : ''}
            onClick={() => {
              onChange(itemId, option);
              setIsOpen(false);
            }}
          >
            {option}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}