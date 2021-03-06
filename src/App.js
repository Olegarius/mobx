import React from "react";
import { observer } from "mobx-react";
import { Search, SearchResults } from './components';
import MainStore from './stores/MainStore';
import { MainContainer } from './app.style';

const { StoreProvider } = MainStore();

const App = observer(() => (
    <StoreProvider>
      {store => (
        <MainContainer>
          <Search store={store} />
          <SearchResults store={store} />
        </MainContainer>
      )}
    </StoreProvider>
  )
);

export default App;
