export const Loader = () => (
  <div className="flex justify-center">
    <div
      className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-primary border-r-transparent motion-reduce:animate-[spin_1.5s_linear_infinite]"
      role="status"
    >
      <span className="sr-only">Carregando...</span>
    </div>
  </div>
);