
import logo from './logo.svg';
import './App.css';
import ConditionalRendering from './components/ConditionalRendering';
import ConditionalRenderingUsingTernary from './components/ConditionalRenderingUsingTernary';
import ConditionalRenderingUsingANDORLogicalOperators from './components/ConditionalRenderingUsingANDORLogicalOperators';
import StateEx from './components/StateEx';
import TogglePara from './components/TogglePara';
import ChangeEvent from './components/ChangeEvent';
import SubmitEvent from './components/SubmitEvent';
import RegistrationForm from './components/RegistrationForm';
import Form from './components/Form';
import FormOnSubmit from './components/FormOnSubmit';
import Todo from './components/Todo';
import Todo2 from './components/Todo2';
import FetchApiaxios from './components/FetchApiaxios';
import FetchApiAxiosUseEffect from './components/FetchApiAxiosUseEffect';
import FetchApiAxiosUseEffectImagesKey from './components/FetchApiAxiosUseEffectImagesKey';
import FetchApiAxiosUseEffectImagesKeySuperHeros from './components/FetchApiAxiosUseEffectImagesKeySuperHeros';
import FetchApiAxiosUseEffectImagesKeyGitcardComponent from './components/FetchApiAxiosUseEffectImagesKeyGitcardComponent';
import FetchApiAxiosUseEffectKeyCovid from './components/FetchApiAxiosUseEffectKeyCovid';
import FetchCovidStatewise from './components/FetchCovidStatewise';
import FetchCovidStatewiseOneTable from './components/FetchingCovidStatewiseOneTable';
import A from './propsDrilling/A';
import FetchOmdbApiSearchingOption from './components/FetchingOmdbApiSearchingOption';
import A1 from './OverCommingPropsDrilling/A1';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';



function App() {
  return (
   <>
   <BrowserRouter>
   <Navbar/>
   <Routes>
     <Route path='/' element={<FetchApiAxiosUseEffectImagesKeyGitcardComponent/>}/>
     <Route  path='/togglepara' element={<TogglePara/>}/>
     <Route  path='/covidtable' element={<FetchCovidStatewiseOneTable/>}/>
     <Route  path='/FetchApiAxiosUseEffect' element={<FetchApiAxiosUseEffectImagesKeyGitcardComponent/>}/>
     <Route  path='/todo' element={<Todo/>}/>
    </Routes>
    

   </BrowserRouter>
   {/* <A1/>
   {/* <A/>
   <FetchOmdbApiSearchingOption/> */}
   {/* <FetchApiAxiosUseEffectImagesKey/>  */}
 {/* <FetchApiAxiosUseEffect/> */}
 {/* <FetchApiAxiosUseEffectKeyCovid/> */}
 {/* <FetchCovidStatewise/> */}
 {/* <FetchCovidStatewiseOneTable/> */}

 {/* <FetchApiAxiosUseEffectImagesKeyGitcardComponent/> */}
  {/* <FetchApiAxiosUseEffectImagesKeySuperHeros/> */}

   {/* <FetchApiaxios/>

    <Todo2/>

    <Todo/>

  <FormOnSubmit/>

   <Form/>
   <RegistrationForm/>
   <ConditionalRendering/>
   <ConditionalRenderingUsingTernary/>
   <ConditionalRenderingUsingANDORLogicalOperators/>

   <StateEx/>

   <TogglePara/>
   <ChangeEvent/>
   <SubmitEvent/>   */}
   </>
    
  );
}

export default App;
