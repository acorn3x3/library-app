import BookList from './components/book/BookList';
import './App.css';
import { Route, Switch } from 'react-router-dom';

import BookDetail from './components/book/BookDetail';

function App() {
  return (
    <main className="container">
      <Switch>
        <Route exact path="/books" component={BookList} />
        <Route path="/books/:id" component={BookDetail} />
      </Switch>
    </main>
  );
}
// TODO: Add routes to books & views

export default App;
