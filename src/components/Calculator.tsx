import { useMemo, useState } from "react";
import { NumberInput } from "./ui/NumberInput";

export const Calculator: React.FC = () => {
  const [volume, setVolume] = useState(0);
  const [density, setDensity] = useState(1.1);
  const [ratio, setRatio] = useState({ a: 2, b: 1 });

  const result = useMemo(
    () => ({
      a: ((volume * density * ratio.a) / (ratio.a + ratio.b)).toFixed(2),
      b: ((volume * density * ratio.b) / (ratio.a + ratio.b)).toFixed(2),
      both: (volume * density).toFixed(2),
    }),
    [volume, density, ratio.a, ratio.b],
  );

  return (
    <div className="flex flex-col gap-4">
      <NumberInput
        label="Объем молда (мл)"
        value={volume}
        onValueChange={setVolume}
      />
      <div className="flex flex-wrap items-end gap-4">
        <div className="grow">
          <NumberInput
            label="Плотность эпоксидной смолы (г/см^3)"
            value={density}
            onValueChange={setDensity}
          />
        </div>
        <div>
          <p className="text-sm">Соотношение смолы к отвердителю, в ч.</p>
          <div className="flex gap-4">
            <NumberInput
              label="А"
              value={ratio.a}
              onValueChange={(a) => setRatio({ ...ratio, a })}
            />
            <NumberInput
              label="Б"
              value={ratio.b}
              onValueChange={(b) => setRatio({ ...ratio, b })}
            />
          </div>
        </div>
      </div>
      <p className="font-semibold">Масса компонента А: {result.a} г</p>
      <p className="font-semibold">Масса компонента Б: {result.b} г</p>
      <p className="font-semibold">Общая масса: {result.both} г</p>
    </div>
  );
};
