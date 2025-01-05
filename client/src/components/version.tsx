import reactLogo from "./assets/svg/react.svg";
import viteLogo from "/vite.svg";
import mongodbLogo from "./assets/svg/mongodb.svg";
import nodeLogo from "./assets/svg/node.svg";
import expressLogo from "./assets/svg/express.svg";
import "./App.css";
import useCounterStore from "../lib/store";

function Version() {
  const major = useCounterStore((state) => state.major);
  const minor = useCounterStore((state) => state.minor);
  const patch = useCounterStore((state) => state.patch);
  const incrementMajor = useCounterStore((state) => state.incrementMajor);
  // const decrementMajor = useCounterStore((state) => state.decrementMajor);
  const incrementMinor = useCounterStore((state) => state.incrementMinor);
  // const decrementMinor = useCounterStore((state) => state.decrementMinor);
  const incrementPatch = useCounterStore((state) => state.incrementPatch);
  const decrementPatch = useCounterStore((state) => state.decrementPatch);

  return (
    <>
      <main className="container">
        <h1 className="font-bold font-mono text-4xl text-blue-500 m-2">
          VITE × MERN
        </h1>
        <p className="font-mono text-sm text-slate-600 mb-2">
            Project Loxodonta v{major}.{minor}.{patch}
          </p>
        <div className="flex items-center justify-center my-4">
          <a href="https://www.mongodb.com" target="_blank">
            <img src={mongodbLogo} className="logo" alt="MongoDB logo" />
          </a>
          <a href="https://expressjs.com" target="_blank">
            <img src={expressLogo} className="logo" alt="Express logo" />
          </a>
          <a href="https://vite.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
          <a href="https://nodejs.org" target="_blank">
            <img src={nodeLogo} className="logo" alt="Node logo" />
          </a>
        </div>
        <div className="my-4">
          <button
            className="rounded text-blue-400 bg-slate-800 mx-2 py-2 px-4"
            onClick={decrementPatch}
          >
            Revert
          </button>
          <button
            className="rounded text-blue-400 bg-slate-800 mx-2 py-2 px-4"
            onClick={incrementPatch}
          >
            Update
          </button>
          <button
            className="rounded text-blue-400 bg-slate-800 mx-2 py-2 px-4"
            onClick={incrementMinor}
            disabled={patch === 0}
          >
            ✚
          </button>
          <button
            className="rounded text-blue-400 bg-slate-800 mx-2 py-2 px-4"
            onClick={incrementMajor}
            disabled={minor === 0 && patch === 0}
          >
            ✦
          </button>
        </div>
      </main>
    </>
  );
}

export default Version;