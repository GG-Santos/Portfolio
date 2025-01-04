import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import useCounterStore from './lib/store';

const App = () => {
  const count = useCounterStore((state) => state.count);

  return <OtherComponent count={count} />;

};

const OtherComponent = ({ count }: { count: number }) => {
  const increment = useCounterStore((state) => state.increment);
  const decrement = useCounterStore((state) => state.decrement);

  return (
    <>
      <main className="container">
        <div className="flex items-center justify-center space-x-4">
          <a href="https://vite.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1 className="font-black text-4xl text-blue-500 m-2">Vite + React</h1>
          <h2 className="font-bold text-xl text-slate-300 m-4">Count is {count}</h2>
          <button className="rounded text-blue-400 bg-slate-800 m-2 py-2 px-4" onClick={increment}>Increment</button>
          <button className="rounded text-blue-400 bg-slate-800 m-2 py-2 px-4" onClick={decrement}>Decrement</button>
        <p className="text-sm text-slate-600 mt-4">
            Edit <code>src/App.jsx</code> and save to test HMR
        </p>
        <p className="text-xs text-slate-800">
          Click on the Vite and React logos to learn more
        </p>
      </main>
    </>
  );

};

export default App;
