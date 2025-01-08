import reactLogo from "@/assets/svg/react.svg";
import viteLogo from "/vite.svg";
import mongodbLogo from "@/assets/svg/mongodb.svg";
import nodeLogo from "@/assets/svg/node.svg";
import expressLogo from "@/assets/svg/express.svg";

import "@/assets/styles/App.css";
import { Button } from "../ui/shadcnui/button";

import { Version as VersionModel } from "@/models/version";

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

  const revertVersion = () => {
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
          Project v{version.major}.{version.minor}.{version.patch}
        </p>
        <div className="flex items-center justify-center my-4">
          <a href="https://www.mongodb.com" target="_blank" rel="noopener noreferrer">
            <img src={mongodbLogo} className="logo mongo" alt="MongoDB logo" />
          </a>
          <a href="https://expressjs.com" target="_blank" rel="noopener noreferrer">
            <img src={expressLogo} className="logo express" alt="Express logo" />
          </a>
          <a href="https://vite.dev" target="_blank" rel="noopener noreferrer">
            <img src={viteLogo} className="logo vite" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
          <a href="https://nodejs.org" target="_blank" rel="noopener noreferrer">
            <img src={nodeLogo} className="logo node" alt="Node logo" />
          </a>
        </div>
        <div className="my-4">
          <Button
            className="rounded text-blue-400 bg-slate-800 mx-2 py-2 px-4"
            onClick={revertVersion}
            disabled={version.patch === 0}
          >
            Revert
          </Button>
          <Button
            className="rounded text-blue-400 bg-slate-800 mx-2 py-2 px-4"
            onClick={incrementPatch}
          >
            Update
          </Button>
          <Button
            className="rounded text-blue-400 bg-slate-800 mx-2 py-2 px-4"
            onClick={incrementMinor}
            disabled={version.patch === 0}
          >
            ✚
          </Button>
          <Button
            className="rounded text-blue-400 bg-slate-800 mx-2 py-2 px-4"
            onClick={incrementMajor}
            disabled={version.minor === 0 && version.patch === 0}
          >
            ✦
          </Button>
        </div>
        <p className="font-mono text-xs text-slate-700 mb-2">
          Template by Gino Santos
        </p>
      </main>
    </>
  );
}

export default VersionID;