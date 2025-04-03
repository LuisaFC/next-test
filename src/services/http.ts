export class HttpError extends Error {
  constructor(public response: Response, message?: string) {
    super(message);
  }
}

export const http = {
  async get<T>(url: string): Promise<T> {
    const response = await fetch(url);

    if (!response.ok) {
      throw new HttpError(response, 'Erro na requisição');
    }

    return response.json();
  },

  async post<T>(url: string, data: unknown): Promise<T> {
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    if (!response.ok) throw new HttpError(response, 'Erro ao criar recurso');
    return response.json();
  },

  async put<T>(url: string, data: unknown): Promise<T> {
    console.log('PUT Request:', { url, data });

    const response = await fetch(url, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });

    console.log('PUT Response:', { status: response.status });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('PUT Error:', errorData);
      throw new HttpError(response, 'Erro ao atualizar recurso');
    }

    return response.json();
  },

  async delete(url: string): Promise<void> {
    const response = await fetch(url, {
      method: 'DELETE'
    });
    if (!response.ok) throw new HttpError(response, 'Erro ao deletar recurso');
  }
};