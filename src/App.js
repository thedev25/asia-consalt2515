import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./routers/Layout/Layout";
import Forabits from "./routers/Forabits/Forabits";
import Universts from "./routers/Universts/Universts";
import Feedbacks from "./routers/Feedbacks/Feedbacks";
import News from "./routers/News/News";
import About from "./routers/About/About";
import Stocks from "./routers/Stocks/Stocks";
import Contacts from "./routers/Contacts/Contacts";
import Main from "./routers/Main/Main";
import Form from "./components/Form/Form";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />}></Route>
          <Route path="forabits" element={<Forabits />}></Route>
          <Route path="universts" element={<Universts />}></Route>
          <Route path="feedbacks" element={<Feedbacks />}></Route>
          <Route path="news" element={<News />}></Route>
          <Route path="about" element={<About />}></Route>
          <Route path="stocks" element={<Stocks />}></Route>
          <Route path="contacts" element={<Contacts />}></Route>
          <Route path="form" element={<Form />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
