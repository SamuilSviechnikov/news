import React from 'react';
import './normalize.css';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Navbar from './component/layout/Navbar';
import Dashboard from './component/dashboard/Dashboard';
import CreateNews from './component/createNews/CreateNews';
import SignIn from './component/signIn/SignIn';
import SignUp from './component/signUp/SignUp';
import ArticleDetailes from './component/news-page/article/ArticleDetailes'
import SimpleSlider from './component/news-page/slider/Slider';
import Footer from './component/news-page/footer/Footer';


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header><Navbar /></header>
        <main>
        <Switch>
          <Route path='/newspage' component={Dashboard}/>
          <Route path='/project/:id' component={ArticleDetailes} />
          <Route path='/create' component={CreateNews}/>
          <Route path='/signin' component={SignIn}/>
          <Route path='/signup' component={SignUp}/>
        </Switch>
        </main>
        {/* <SimpleSlider/> */}
        <footer> <Footer/></footer>
      </div>
    );
  }

  async componentDidMount() {
    // Load async data.
    
  }
}

export default App;

