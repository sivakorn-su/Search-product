import { Route, Routes } from 'react-router-dom';
import PageHome from './component/PageHome';
import Page404 from './component/Page404';
import PageDeteil from './component/PageDeteil'
function App() {

  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<PageHome />} />
      <Route path='/product/:postId' element={<PageDeteil/>}/>
      <Route path="*" element={<Page404/>} />
      </Routes>
    </div>
  );
}

export default App;
