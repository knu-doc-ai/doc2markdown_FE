import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '@/components/Layout';
import Home from '@/pages/Home';
import ConversionProgress from '@/pages/ConversionProgress';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="converting" element={<ConversionProgress />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
