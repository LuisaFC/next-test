import { CustomTooltipProps } from "./types";

export default function CustomTooltip({ active, payload, label }: CustomTooltipProps) {
  if (!active || !payload?.length) return null;

  return (
    <div className="bg-card border rounded-lg shadow-sm p-2">
      <p className="font-medium">{label}</p>
      <p className="text-muted-foreground">
        Total: {payload[0].value}
      </p>
    </div>
  );
}