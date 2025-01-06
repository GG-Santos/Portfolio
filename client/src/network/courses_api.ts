import { Course } from './../models/course';

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

export async function fetchCourses(): Promise<Course[]> {
  const response = await fetchData("/api/courses", { method: "GET" });
  return await response.json(); 
};


export interface CourseInput { 
    term: string,
    type: string,
    code: string,
    units: string,
    title: string,
    description?: string,
    professor?: string,
    section?: string,
    midterm?: string,
    final?: string,
    status: string,
    modules?: [string],
} 

export async function createCourse(course: CourseInput): Promise<Course> {
    const response = await fetchData("/api/courses", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(course),
    });
    return response.json();

}

export async function updateCourse(courseID: string, course: CourseInput): Promise<Course> {
  const response = await fetchData("/api/courses/" + courseID, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(course),
  });
  return response.json();
}

export async function deleteCourse(courseID: string) {
    await fetchData("/api/courses/" + courseID, { method: "DELETE", });
}