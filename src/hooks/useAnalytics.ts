import { useState, useCallback, useEffect } from 'react';
import { toast } from 'sonner';
import type { AnalyticsData } from '@/types/analytics';
import { fetchAnalytics } from '@/services/api/AnalyticsService';

export function useAnalytics() {
  const [data, setData] = useState<AnalyticsData | null>(null);
  const [loading, setLoading] = useState(true);

  const refresh = useCallback(async () => {
    try {
      setLoading(true);
      const analyticsData = await fetchAnalytics();
      setData(analyticsData);
    } catch (error) {
      console.error('Erro ao carregar dados:', error);
      toast.error('Não foi possível carregar os dados do dashboard');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    refresh();
  }, [refresh]);

  return { data, loading, refresh };
}