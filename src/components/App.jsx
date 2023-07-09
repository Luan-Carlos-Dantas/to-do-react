import './App.css';
import { useState } from 'react';
import { Trash } from '@phosphor-icons/react';

const App = () => {
  const ESCAPE_KEY = 27;
  const ENTER_KEY = 13;
  const [list, setList] = useState([]);
  const [value, setValue] = useState('');
  const clearOutput = () => {
    setValue('');
  };

  const submit = () => {
    setList([
      ...list,
      { id: new Date().getTime(), title: value, checked: false },
    ]);
    clearOutput();
  };

  const onChange = (event) => {
    setValue(event.target.value);
  };

  const addTask = (event) => {
    if (event.which === ENTER_KEY) {
      submit();
    } else if (event.which === ESCAPE_KEY) {
      clearOutput();
    }
  };

  const toggle = (todo) => {
    setList(
      list.map((obj) =>
        obj.id === todo.id ? { ...obj, checked: !todo.checked } : obj
      )
    );

    // const remove = (todo) => {
    //   setList(

    //   )
    // };
  };
  return (
    <section id="app" className="container">
      <header>
        <h1 className="title">To do</h1>
      </header>
      <section className="main">
        <input
          className="new-todo"
          type="text"
          placeholder="Digite uma nova tarefa"
          value={value}
          onChange={onChange}
          onKeyDown={addTask}
        />
        <ul className="todo-list">
          {list.map((todo) => (
            <li key={todo.id.toString()}>
              <span
                className={['todo', todo.checked ? 'checked' : ''].join(' ')}
                onClick={() => toggle(todo)}
                // onKeyPress={() => toggle(todo)}
                role="button"
                tabIndex={0}
              >
                {todo.title}
              </span>
              <button
                className="btn-remove"
                onClick={() => remove(todo)}
                type="button"
              >
                <Trash size={28} />
              </button>
            </li>
          ))}
        </ul>
      </section>
    </section>
  );
};

export default App;
