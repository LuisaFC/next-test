import { Button } from '@/components/ui/button';
import { AnalyticsHeaderProps } from '@/types/analytics';
import { RefreshCw } from 'lucide-react';

export function AnalyticsHeader({ onRefresh }: AnalyticsHeaderProps) {
  return (
    <header className="flex items-center justify-between">
      <div>
        <h1 className="text-3xl font-bold">Painel de Controle</h1>
        <p className="text-muted-foreground mt-1">
          Visualize as estatísticas das suas tarefas
        </p>
      </div>
      <Button
        variant="outline"
        size="sm"
        onClick={onRefresh}
        className="gap-2"
      >
        <RefreshCw className="h-4 w-4" />
        Atualizar
      </Button>
    </header>
  );
}