
import './App.css';
import { Switch, Route } from 'react-router-dom';
import { DashboardPage, Accueil, Menu, Premium,PageNotFound, Staff } from './pages';



function App( ) {
  return (
    <> 
    <Switch>
      <Route path='/' exact={true} component={ Accueil }/>
      <Route path='/dashboard/:id/sécurité' exact={true} component={ DashboardPage }/>
      <Route path='/dashboard/:id/principal' exact={true} component={ DashboardPage }/>
      <Route path='/dashboard/:id/roleplay' exact={true} component={ DashboardPage }/>
      <Route path='/dashboard/:id/utilitaire' exact={true} component={ DashboardPage }/>
      <Route path='/dashboard/:id/commandes' exact={true} component={ DashboardPage }/>
      <Route path='/premium/:id' exact={true} component={ Premium }/>
      <Route path='/staff' exact={true} component={ Staff }/>
      <Route path='/menu' exact={true} component={ Menu }/>
      <Route component={PageNotFound} />
      </Switch>
    </>
  );
}

export default App;
