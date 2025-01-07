import axios from 'axios';
import { Course } from './../models/course';

const axiosInstance = axios.create({
  baseURL: '/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

export async function fetchCourses(): Promise<Course[]> {
  try {
    const response = await axiosInstance.get<Course[]>('/courses');
    return response.data;
  } catch (error) {
    handleAxiosError(error);
  }
}

export interface CourseInput {
  term: string;
  type: string;
  code: string;
  units: string;
  title: string;
  description?: string;
  professor?: string;
  section?: string;
  midterm?: string;
  final?: string;
  status: string;
  modules?: string[];
}

export async function createCourse(course: CourseInput): Promise<Course> {
  try {
    const response = await axiosInstance.post<Course>("/courses", course);
    return response.data;
  } catch (error) {
    handleAxiosError(error);
  }
}

export async function updateCourse(courseID: string, course: CourseInput): Promise<Course> {
  try {
    const response = await axiosInstance.patch<Course>("/courses/" + courseID, course);
    return response.data;
  } catch (error) {
    handleAxiosError(error);
  }
}

export async function deleteCourse(courseID: string): Promise<void> {
  try {
    await axiosInstance.delete("/courses/" + courseID);
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