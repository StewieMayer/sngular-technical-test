import Card from "./components/Card";
import Layout from "./components/layout/Layout";
import SerieDescription from "./components/serieDescription/SerieDescription";
import SerieForm from "./components/serieForm/SerieForm";
import SerieResult from "./components/SerieResult";
import { SerieProvider } from "./context/SerieContext";

const App: React.FC = () => {
  return (
    <Layout>
      <Card>
        <SerieProvider>
          <SerieDescription />
          <SerieForm />
          <SerieResult />
        </SerieProvider>
      </Card>
    </Layout>
  );
};

export default App;
