import { Calculator } from "./components/Calculator";
import { PageLayout } from "./components/layout/PageLayout";

const App: React.FC = () => {
  return (
    <PageLayout>
      <h1 className="mb-6 text-2xl font-bold">Epoxy calculator</h1>
      <Calculator />
    </PageLayout>
  );
};

export default App;
