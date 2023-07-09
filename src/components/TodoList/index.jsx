import './styles.css';
import PropTypes from 'prop-types';

import { Trash } from '@phosphor-icons/react';

const TodoList = ({ list, toggle, remove }) => (
  <ul className="todo-list">
    {list.map((todo) => (
      <li key={todo.id.toString()}>
        <span
          className={['todo', todo.checked ? 'checked' : ''].join(' ')}
          onClick={() => toggle && toggle(todo)}
          // onKeyPress={() => toggle(todo)}
          role="button"
          tabIndex={0}
        >
          {todo.title}
        </span>
        <button
          className="btn-remove"
          onClick={() => remove && remove(todo)}
          type="button"
        >
          <Trash size={28} />
        </button>
      </li>
    ))}
  </ul>
);

TodoList.propsTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      checked: PropTypes.bool.isRequired,
    })
  ).isRequired,
  toggle: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired,
};

export default TodoList;
