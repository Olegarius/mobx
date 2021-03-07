import React, { useEffect, useContext } from 'react';
import { observer } from "mobx-react";
import request from '../../services/request';
import { StoreContext } from '../../stores/MainStore';
import { MainContainer, Loading } from './index.style';

const Main = observer(({ children }) => {
  const store = useContext(StoreContext);

  useEffect(() => {
    if (!store.dictionary.length) {
      request({url: '/dictionary.json'})
        .then(result => store.dictionary = result.body || [])
        .catch(e => console.error(e));
    }
  }, [store]);
  
  return (store.dictionary.length > 0 ? (
    <MainContainer>{children}</MainContainer>
  ) : (
    <Loading>Dictionary is loading. Please wait...</Loading>
  ));
});

export default Main;
