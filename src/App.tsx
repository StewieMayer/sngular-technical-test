import Card from "./components/Card";
import Layout from "./components/layout/Layout";
import SerieDescription from "./components/SerieDescription";
import SerieForm from "./components/SerieForm";
import SerieResult from "./components/SerieResult";

const App: React.FC = () => {
  return (
    <Layout>
      <Card>
        <SerieDescription />
        <SerieForm />
        <SerieResult />
      </Card>
    </Layout>
  );
};

export default App;
