import PropTypes from 'prop-types';
import './styles.css';
import { useState, ReactPropTypes } from 'react';

const Input = ({ onNewTodo }) => {
  const ESCAPE_KEY = 27;
  const ENTER_KEY = 13;
  const [value, setValue] = useState('');
  const clearOutput = () => {
    setValue('');
  };

  const submit = () => {
    if (!onNewTodo) {
      return;
    }
    onNewTodo(value);
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
  return (
    <input
      className="new-todo"
      type="text"
      placeholder="Digite uma nova tarefa"
      value={value}
      onChange={onChange}
      onKeyDown={addTask}
    />
  );
};

Input.propTypes = {
  onNewTodo: PropTypes.func.isRequired,
};

export default Input;
