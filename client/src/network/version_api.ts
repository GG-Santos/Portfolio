import { Version } from './../models/version';

async function fetchData(input: RequestInfo, init?: RequestInit){
  const response = await fetch(input, init);
  if (response.ok) {
    return response;
  } else {
    const errorBody = await response.json();
    const errorMessage = errorBody.message;
    throw Error(errorMessage);
  };
};

export async function fetchVersion(): Promise<Version[]> {
  const response = await fetchData("/api/version/677b5f42d11ea7f079b0ddd8", { method: "GET" });
  return await response.json();
}

export interface VersionInput { 
    major: number,
    minor: number,
    patch: number,
}

export async function updateVersion(version: VersionInput): Promise<Version> {
    const response = await fetchData("/api/version/677b5f42d11ea7f079b0ddd8", {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(version),
    });
    return response.json();

}