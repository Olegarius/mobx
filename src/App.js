import React, { useContext } from "react";
import { observer } from "mobx-react";
import { Search, SearchResults, Main } from './components';
import  { store, StoreProvider } from './stores/MainStore';

const Loader = (() => (
  <Main>
    <Search />
    <SearchResults />
  </Main>
));

const App = observer(() => (
    <StoreProvider store={store}><Loader /></StoreProvider>
  )
);

export default App;
