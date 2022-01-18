import GlobalStyles from './globalStyles';
import { Switch, Route, useLocation } from 'react-router';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from './components/Themes';

import Main from './components/Main';
import About from './components/AboutPage';
import Blog from './components/BlogPage';
import MySkill from './components/MySkillPage';
import Work from './components/WorkPage';


import { AnimatePresence } from "framer-motion";
import SoundBar from './subComponents/SoundBar';


function App() {

  const location = useLocation();


  return <div>
      <GlobalStyles />
      <ThemeProvider theme={lightTheme}>
        <SoundBar />
        <AnimatePresence exitBeforeEnter>
          <Switch location={location} key={location.pathname}>
            <Route exact path='/' component={Main} />
            <Route exact path='/about' component={About} />
            <Route exact path='/blog' component={Blog} />
            <Route exact path='/work' component={Work} />
            <Route exact path='/skills' component={MySkill} />
          </Switch>
        </AnimatePresence>
      </ThemeProvider>
    </div>
    
}

export default App

