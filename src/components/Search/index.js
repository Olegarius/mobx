import React, { useCallback, useRef, useEffect, useContext } from 'react';
import { observer } from "mobx-react";
import { StoreContext } from '../../stores/MainStore';
import { SearchInput, SearchPage, SearchBar } from './index.style';

const Search = observer(() => {
  const store = useContext(StoreContext);
  const inputElement = useRef(null);
  const onSetLetter = useCallback((e) => {
    const word = e.currentTarget.value;

    store.letter = word[word.length - 1] || '';
  }, [store]);

  useEffect(() => {
    if (inputElement.current) {
      inputElement.current.focus();
    }
  }, []);
  
  return (
    <SearchPage>
      <SearchBar>
        <SearchInput
          type='search'
          placeholder='Search letter in the dictionary'
          onChange={onSetLetter}
          value={store.letter}
          ref={inputElement}
        />
      </SearchBar>
    </SearchPage>
  );
});

export default Search;
