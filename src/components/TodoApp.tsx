import React, { useState, useEffect } from 'react';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const quotes = [
  {
    q: 'The only way to do great work is to love what you do.',
    a: 'Steve Jobs',
  },
  {
    q: 'Believe you can and you’re halfway there.',
    a: 'Theodore Roosevelt',
  },
  {
    q: 'The future belongs to those who believe in the beauty of their dreams.',
    a: 'Eleanor Roosevelt',
  },
  {
    q: 'Don’t watch the clock; do what it does. Keep going.',
    a: 'Sam Levenson',
  },
  {
    q: 'Success is not final, failure is not fatal: It is the courage to continue that counts.',
    a: 'Winston Churchill',
  },
  {
    q: 'The only limit to our realization of tomorrow will be our doubts of today.',
    a: 'Franklin D. Roosevelt',
  },
  {
    q: 'The secret of getting ahead is getting started.',
    a: 'Mark Twain',
  },
  {
    q: 'If you want to achieve greatness stop asking for permission.',
    a: 'Anonymous',
  },
  {
    q: 'Success is walking from failure to failure with no loss of enthusiasm.',
    a: 'Winston Churchill',
  },
  {
    q: 'The best way to predict the future is to create it.',
    a: 'Peter Drucker',
  },
  {
    q: 'I think it is possible for ordinary people to choose to be extraordinary.',
    a: 'Elon Musk',
  },
  {
    q: 'Strength does not come from winning. Your struggles develop your strengths.',
    a: 'Arnold Schwarzenegger',
  },
];

const TodoApp: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [inputText, setInputText] = useState('');
  const [quote, setQuote] = useState({ q: '', a: '' });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  const handleAddTodo = () => {
    if (inputText.trim() !== '') {
      const newTodo: Todo = {
        id: Date.now(),
        text: inputText,
        completed: false,
      };

      setTodos([...todos, newTodo]);
      setInputText('');
    }
  };

  const handleToggleComplete = (id: number) => {
    setTodos(prevTodos =>
      prevTodos.map(todo => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      })
    );
  };

  const handleDeleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  useEffect(() => {
    const getRandomQuote = () => {
      const randomIndex = Math.floor(Math.random() * quotes.length);
      setQuote(quotes[randomIndex]);
    };

    getRandomQuote();
  }, []);

  const totalTodos = todos.length;
  const completedTodos = todos.filter(todo => todo.completed).length;

  return (
    <div className="bg-gray-900 min-h-screen flex flex-col justify-center items-center">
      <div className="max-w-lg w-full mx-4 p-4 bg-gray-800 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-white mb-4">TaskMaster</h1>
        <div className="flex mb-4">
          <input
            type="text"
            value={inputText}
            onChange={handleInputChange}
            className="flex-grow bg-gray-700 text-white placeholder-gray-400 border-gray-400 border-2 p-2 rounded-l-md focus:outline-none"
            placeholder="Add a new todo..."
          />
          <button
            onClick={handleAddTodo}
            className="bg-blue-500 text-white px-4 rounded-r-md hover:bg-blue-600 focus:outline-none"
          >
            Add
          </button>
        </div>
        <ul className="space-y-2">
          {todos.map(todo => (
            <li
              key={todo.id}
              className={`flex items-center bg-gray-700 p-3 rounded-md ${
                todo.completed ? 'text-gray-500 line-through' : 'text-white'
              }`}
            >
              <span className="flex-grow">{todo.text}</span>
              {!todo.completed ? (
                <button
                  onClick={() => handleToggleComplete(todo.id)}
                  className="text-green-500 hover:text-green-600 ml-2 focus:outline-none"
                >
                  ✓
                </button>
              ) : null}
              <button
                onClick={() => handleDeleteTodo(todo.id)}
                className="text-red-500 hover:text-red-600 ml-2 focus:outline-none"
              >
                X
              </button>
            </li>
          ))}
        </ul>
        <div className="mt-8 text-white">
          <p>
            Total Todos: {totalTodos} | Completed Todos: {completedTodos}
          </p>
          <p className="mt-2">
            <em>"{quote.q}"</em> - {quote.a}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TodoApp;
