import type { AnalyticsData } from '@/types/analytics';

const API_URL = '/api/analytics';

export async function fetchAnalytics(): Promise<AnalyticsData> {
  try {
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error(`Erro ${response.status}: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Erro no serviço de analytics:', error);
    throw error;
  }
}