import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '@/components/Layout';
import Home from '@/pages/Home';
import ConversionProgress from '@/pages/ConversionProgress';
import Result from '@/pages/Result';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="converting" element={<ConversionProgress />} />
          <Route path="result" element={<Result />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
