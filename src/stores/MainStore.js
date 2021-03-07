import React from "react";
import { observable } from "mobx";
import { observer } from "mobx-react";

export const store = observable({
  dictionary: [],
  letter: '',
  counters: () => {
    const initialAcc = {
      startWithCount: 0,
      endWithCount: 0,
      appearCount: 0,
      doubleAppearCount: 0
    };

    if (!store.dictionary.length) {
      return initialAcc;
    }

    return store.dictionary.reduce((acc, word) => ({
        startWithCount: acc.startWithCount + Number(word[0] === store.letter),
        endWithCount: acc.endWithCount + Number(word[word.length - 1] === store.letter),
        appearCount: acc.appearCount + Number(store.letter && (word.match((new RegExp(store.letter, 'g'))) || []).length),
        doubleAppearCount: acc.doubleAppearCount + Number(store.letter && (word.match((new RegExp(`${store.letter}${store.letter}`, 'g'))) || []).length)
    }), initialAcc)
  }
});

export const StoreContext = React.createContext();
export const StoreProvider = observer(({ children }) => (
  <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
));
