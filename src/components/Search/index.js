import React, { useCallback, useRef, useEffect } from 'react';
import { observer } from "mobx-react";
import request from '../../services/request';
import { SearchInput, SearchPage, SearchBar } from './index.style';

const Search = observer(({ store }) => {
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
  
  useEffect(() => {
    if (!store.dictionary.length) {
      request({
        baseurl: `${document.location.protocol}//${document.location.host}`,
        url: '/dictionary.json'
      })
        .then(result => store.dictionary = result.body || [])
        .catch(e => console.error(e));
    }
  }, [store]);

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
