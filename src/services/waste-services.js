import { parseFetchResponse } from '../parse-fetch-response/parse-fetch-response';

const baseURL = 'https://dev-lead2change-ctw.azurewebsites.net/example/';

/**
 * It makes a request to the server, parses the response, and returns the students
 * @returns An array of students.
 */
export const getWasteList = async () => {
  const response = await fetch(`${baseURL}getWaste`, { method: 'GET' });

  const parsedResponse = await parseFetchResponse(response);
  return parsedResponse;
};

/**
 * It makes a POST request to the endpoint, and returns the student object that was created
 * @param student - The student to add
 * @returns The student object
 */
export const addWaste = async (student) => {
  const response = await fetch(`${baseURL}createstudent`, {
    method: 'POST',
    headers: {
      Accept: 'application/json, text/plain',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(student),
  });
  const parsedResponse = await parseFetchResponse(response);
  return parsedResponse;
};

/**
 * It makes a POST request to the endpoint with the updated student
 * @param student - The student to update
 * @returns The response from the server.
 */
export const updateWaste = async (student) => {
  const response = await fetch(`${baseURL}updatestudent/${student.id}`, {
    method: 'PUT',
    headers: {
      Accept: 'application/json, text/plain',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(student),
  });

  const parsedResponse = await parseFetchResponse(response);
  return parsedResponse;
};
