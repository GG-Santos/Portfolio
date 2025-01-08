import axios from 'axios';
import { Version } from '@/models/version';

const axiosInstance = axios.create({
  baseURL: '/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

const VERSION_ID = "677b5f42d11ea7f079b0ddd8";

export async function fetchVersion(): Promise<Version[]> {
  try {
    const response = await axiosInstance.get<Version[]>("/version/" + VERSION_ID);
    return response.data;
  } catch (error) {
    handleAxiosError(error);
  }
}

export interface VersionInput {
  major: number;
  minor: number;
  patch: number;
}

export async function updateVersion(version: VersionInput): Promise<Version> {
  try {
    const response = await axiosInstance.patch<Version>("/version/" + VERSION_ID, version);
    return response.data;
  } catch (error) {
    handleAxiosError(error);
  }
}

function handleAxiosError(error: unknown): never {
  if (axios.isAxiosError(error) && error.response?.data?.message) {
    throw new Error(error.response.data.message);
  }
  throw new Error('An unexpected error occurred.');
}