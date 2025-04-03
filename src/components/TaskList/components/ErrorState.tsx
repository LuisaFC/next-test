interface ErrorProps {
  error: string;
}

export const ErrorState = ({ error }: ErrorProps) => (
  <div>Erro: {error}</div>
);