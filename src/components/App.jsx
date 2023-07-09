import { useState } from 'react';

import Input from './Input';
import TodoList from './TodoList';
import './App.css';

const App = () => {
  const [list, setList] = useState([]);
  const onNewTodo = (value) => {
    if (value === '' || value === null || value === undefined) {
      alert('Digite uma nova tarefa');
      return;
    }
    setList([
      ...list,
      { id: new Date().getTime(), title: value, checked: false },
    ]);
  };

  const toggle = (todo) => {
    setList(
      list.map((obj) =>
        obj.id === todo.id ? { ...obj, checked: !todo.checked } : obj
      )
    );
  };

  const remove = (todo) => {
    setList(list.filter((obj) => obj.id !== todo.id));
  };

  return (
    <section id="app" className="container">
      <header>
        <h1 className="title">To do</h1>
      </header>
      <section className="main">
        <Input onNewTodo={onNewTodo} />
        <TodoList list={list} toggle={toggle} remove={remove} />
      </section>
    </section>
  );
};

export default App;
