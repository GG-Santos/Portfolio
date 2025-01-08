import "./assets/styles/App.css";
import { useEffect, useState } from "react";
import { Version as VersionModel } from "./models/version";
import VersionID from "./components/core/version";
import * as VersionApi from "./api/version_api";
import { Button } from "./components/ui/shadcnui/button";


function Version() {

    const [versions, setVersion] = useState<VersionModel[]>([]);
  
    useEffect(() => {
      async function loadVersion() {
        try {
          const version = await VersionApi.fetchVersion();
          setVersion(Array.isArray(version) ? version : [version]);
          
        } catch (error) {
          console.error(error);
          alert(error); 
        }
      }
      loadVersion();
    }, []);

    const handleUpdateVersion = async (updatedVersion: VersionModel) => {
      try {
        const newVersion = await VersionApi.updateVersion(updatedVersion);
        setVersion([newVersion]);
      } catch (error) {
        console.error(error);
        alert(error);
      }
    };
  
    return (
    <>
      {versions.map(version => (
        <VersionID version={version} key={version._id} onUpdate={handleUpdateVersion} />
      ))}
    </>


    );
  };
  
  export default Version;