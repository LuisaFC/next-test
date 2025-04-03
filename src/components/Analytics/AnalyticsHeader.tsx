import { Button } from '@/components/ui/button';
import { AnalyticsHeaderProps } from '@/types/analytics';
import { ArrowLeft, RefreshCw } from 'lucide-react';
import { useRouter } from 'next/navigation';

export function AnalyticsHeader({ onRefresh }: AnalyticsHeaderProps) {
  const router = useRouter();

  return (
    <header className="flex items-center justify-between">
      <div className="flex items-center gap-4">
      <Button
          variant="ghost"
          onClick={() => router.push('/')}
          className="!h-10 !w-10 hover:bg-muted mr-1" // Forçando tamanho com !important
        >
          <ArrowLeft className="!h-6 !w-6" /> {/* Forçando tamanho com !important */}
        </Button>
        <div>
          <h1 className="text-3xl font-bold">Painel de Controle</h1>
          <p className="text-muted-foreground mt-1">
            Visualize as estatísticas das suas tarefas
          </p>
        </div>
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