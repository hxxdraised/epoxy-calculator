interface BigNumberProps {
  className?: string;
  label: string;
  value: string;
}

export const BigNumber: React.FC<BigNumberProps> = ({
  className,
  label,
  value,
}) => (
  <div className={className}>
    <p className="text-sm text-default-600">{label}</p>
    <p className="text-2xl font-semibold">{value}</p>
  </div>
);
