import { TooltipContentProps } from "recharts";


const formatTimestamp = (timestamp: string | number | undefined): string => {
  if (!timestamp) return '';

  const timestampNum = typeof timestamp === 'string' ? parseFloat(timestamp) : timestamp;
  const date = new Date(timestampNum * 1000);

  return date.toLocaleString('es-PE', {
    // year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  });
};

export default function ParameterGraphTooltip({ active, payload, label }: TooltipContentProps<string | number, string>) {
  const isVisible = active && payload && payload.length;

  return (
    <div className="custom-tooltip bg-(--bg-2) p-2 rounded-lg" style={{ visibility: isVisible ? 'visible' : 'hidden' }}>
      {isVisible && (
        <>
          <p className="label">{`${formatTimestamp(label)} : ${payload[0].value}`}</p>
        </>
      )}
    </div>
  );
};
