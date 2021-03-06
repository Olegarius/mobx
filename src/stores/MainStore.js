import { observable } from "mobx";
import { observer } from "mobx-react";

const MainStore = () => {
  const store = observable({
    dictionary: [],
    letter: '',
    startWithCount: (letter) => store.dictionary.reduce((sum, word) => (sum + Number(word[0] === letter)), 0),
    endWithCount: (letter) => store.dictionary.reduce((sum, word) => (sum + Number(word[word.length - 1] === letter)), 0),
    appearCount: (letter) => store.dictionary.reduce((sum, word) => (sum + Number(letter && (word.match((new RegExp(letter, 'g'))) || []).length)), 0),
    doubleAppearCount: (letter) => store.dictionary.reduce((sum, word) => (sum + Number(letter && (word.match((new RegExp(`${letter}${letter}`, 'g'))) || []).length)), 0)
  });

  const Provider = observer(({ children }) => (children(store)));

  return { store, StoreProvider: Provider };
};


export default MainStore;
