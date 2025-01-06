import reactLogo from "../assets/svg/react.svg";
import viteLogo from "/vite.svg";
import mongodbLogo from "../assets/svg/mongodb.svg";
import nodeLogo from "../assets/svg/node.svg";
import expressLogo from "../assets/svg/express.svg";
import "../App.css";
// import useCounterStore from "../lib/store";
import { Version as VersionModel } from "../models/version";

interface VersionProps {
  version: VersionModel;
  onUpdate: (version: VersionModel) => void;
}

const VersionID = ({ version, onUpdate }: VersionProps) => {
  const incrementPatch = () => {
    onUpdate({ ...version, patch: version.patch + 1 });
  };

  const incrementMinor = () => {
    onUpdate({ ...version, minor: version.minor + 1, patch: 0 });
  };

  const incrementMajor = () => {
    onUpdate({ ...version, major: version.major + 1, minor: 0, patch: 0 });
  };

  const decrementPatch = () => {
    if (version.patch > 0) {
      onUpdate({ ...version, patch: version.patch - 1 });
    }
  };

  return (
    <>
      <main className="container">
        <h1 className="font-bold font-mono text-4xl text-blue-500 m-2">
          VITE × MERN
        </h1>
        <p className="font-mono text-sm text-slate-600 mb-2">
          Project Loxodonta v{version.major}.{version.minor}.{version.patch}
        </p>
        <div className="flex items-center justify-center my-4">
          <a href="https://www.mongodb.com" target="_blank" rel="noopener noreferrer">
            <img src={mongodbLogo} className="logo" alt="MongoDB logo" />
          </a>
          <a href="https://expressjs.com" target="_blank" rel="noopener noreferrer">
            <img src={expressLogo} className="logo" alt="Express logo" />
          </a>
          <a href="https://vite.dev" target="_blank" rel="noopener noreferrer">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
          <a href="https://nodejs.org" target="_blank" rel="noopener noreferrer">
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
            disabled={version.patch === 0}
          >
            ✚
          </button>
          <button
            className="rounded text-blue-400 bg-slate-800 mx-2 py-2 px-4"
            onClick={incrementMajor}
            disabled={version.minor === 0 && version.patch === 0}
          >
            ✦
          </button>
        </div>
      </main>
    </>
  );
}

export default VersionID;