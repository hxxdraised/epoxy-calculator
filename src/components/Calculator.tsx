import { useMemo, useState } from "react";
import { BigNumber } from "./ui/BigNumber";
import { NumberInput } from "@heroui/react";

export const Calculator: React.FC = () => {
  const [volume, setVolume] = useState(0);
  const [density, setDensity] = useState(1.1);
  const [ratio, setRatio] = useState({ a: 2, b: 1 });

  const result = useMemo(() => {
    const a = (volume * density * ratio.a) / (ratio.a + ratio.b);
    const b = (volume * density * ratio.b) / (ratio.a + ratio.b);
    const both = volume * density;
    return {
      a: Number.isNaN(a) ? "..." : a.toFixed(2),
      b: Number.isNaN(b) ? "..." : b.toFixed(2),
      both: Number.isNaN(both) ? "..." : both.toFixed(2),
    };
  }, [volume, density, ratio.a, ratio.b]);

  return (
    <div className="flex flex-col gap-6">
      <NumberInput
        size="lg"
        label="Объем молда (мл)"
        value={volume}
        onValueChange={setVolume}
      />
      <div className="flex flex-wrap items-end gap-4">
        <div className="grow">
          <NumberInput
            size="lg"
            label="Плотность эпоксидной смолы (г/см^3)"
            value={density}
            onValueChange={setDensity}
          />
        </div>
        <div>
          <p className="text-sm text-default-600">
            Соотношение смолы к отвердителю, в ч.
          </p>
          <div className="flex gap-2">
            <NumberInput
              size="sm"
              label="А"
              value={ratio.a}
              onValueChange={(a) => setRatio({ ...ratio, a })}
            />
            <NumberInput
              size="sm"
              label="Б"
              value={ratio.b}
              onValueChange={(b) => setRatio({ ...ratio, b })}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-2 sm:gap-4 sm:p-6">
        <BigNumber label="Компонент А" value={result.a} />
        <h1 className="text-4xl font-black text-slate-500">+</h1>
        <BigNumber label="Компонент Б" value={result.b} />
        <h1 className="text-4xl font-black text-slate-500">=</h1>
        <BigNumber label="Общая масса" value={result.both} />
      </div>
    </div>
  );
};
