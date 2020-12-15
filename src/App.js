// import logo from './logo.svg';
import S from 'styled-components';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Footer from './components/footer/Footer';
import ScrollToTop from './ScrollToTop';
import DesktopMenu from './components/menus/DesktopMenu'
import HomePage from './components/home_page/HomePage'

function App() {
  return (
    <Router>
       <DesktopMenu  />
       <ScrollToTop />
        <ComponentWrapper>
          {/* <MobileMenu /> */}
          <Switch>
            <Route exact path="/" component={HomePage}/>
            {/* <Route exact path="/projects" component={Projects}/>
            <Route exact path="/services" component={ServicePage}/>
            <Route exact path="/services/:id" component={IndividualServicePage}/>
            <Route exact path="/reviews" component={Testimonials}/>
            <Route exact path="/project/:id" component={IndividualProjectPage}/> */}
          </Switch>
        </ComponentWrapper>
        <Footer />
    </Router>
  );
}

export default App;
 
const ComponentWrapper = S.main`
  position: relative;
  min-height: 100vh;
  padding-bottom: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;