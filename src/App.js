import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./components/Home";
import {
  createBrowserRouter,
     Route,
  createRoutesFromElements,
  RouterProvider} 
  from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';
import Layout from './components/Layout';
import details from './data/details'
import Cards from './components/Cards';

// import About from './components/About'
// import AllRecipes from './components/AllRecipes';
// import Reviews from './components/Reviews';
// import HelpLayout from './components/HelpLayout';
// import Faq from './components/Faq';
// import Contact from './components/Contact';
// import NotFound from './components/NotFound';
// import ScrollToTop from './components/ScrollToTop';




const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
         <Route index element={<Home 
         details={details}>
          <Cards />
         </Home>}
          />

          {/* <Route path='allrecipes'  element={ <AllRecipes details={details}/>}/>
          <Route path='reviews'  element={ <Reviews />}/> */}
          
          {/* Nested Routes */}

          {/* <Route path='help' element={<HelpLayout/>}>
            <Route path='faq' element={<Faq/>}/>
            <Route path='contact' element={<Contact/>}/>
          </Route>
          <Route path="*" element={<NotFound />} /> */}
      </Route>
  )
)

function App() {
  return (
    <>
      <RouterProvider router={router}/>
        
  {/* <ScrollToTop /> */}
  <Footer className='m-3'/>
    </>
  );
}

export default App;
