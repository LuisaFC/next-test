import { Skeleton } from '@/components/ui/skeleton';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

function HeaderSkeleton() {
  return (
    <div className="flex items-center justify-between">
      <div className="space-y-2">
        <Skeleton className="h-8 w-[200px]" /> {/* Título */}
        <Skeleton className="h-4 w-[300px]" /> {/* Subtítulo */}
      </div>
      <Skeleton className="h-9 w-[100px]" /> {/* Botão */}
    </div>
  );
}

function StatsGridSkeleton() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {[...Array(6)].map((_, i) => (
        <Card key={i}>
          <CardHeader className="pb-2">
            <Skeleton className="h-4 w-[140px]" />
          </CardHeader>
          <CardContent>
            <Skeleton className="h-7 w-[100px]" />
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

function ChartsSkeleton() {
  return (
    <div className="space-y-4">
      {[...Array(2)].map((_, i) => (
        <Card key={i}>
          <CardHeader>
            <Skeleton className="h-6 w-[160px]" />
          </CardHeader>
          <CardContent>
            <Skeleton className="h-[300px] w-full" />
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export function AnalyticsSkeleton() {
  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="space-y-8">
        <HeaderSkeleton />
        <StatsGridSkeleton />
        <ChartsSkeleton />
      </div>
    </div>
  );
}