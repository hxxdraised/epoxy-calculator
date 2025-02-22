import { Chip } from "@heroui/react";
import { Calculator } from "./components/Calculator";
import { PageLayout } from "./components/layout/PageLayout";

const App: React.FC = () => {
  return (
    <PageLayout>
      <div className="mb-6 flex items-center gap-2">
        <h1 className="text-2xl font-bold">Epoxy calculator</h1>
        <Chip size="sm" classNames={{ content: "font-semibold" }}>
          v.0.0.1
        </Chip>
      </div>
      <Calculator />
    </PageLayout>
  );
};

export default App;
