const BASE_URL = `https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api`;

export const fetchAllBooks = async () => {
  try {
    const response = await fetch(`${BASE_URL}/books`);
    if (!response.ok) {
      throw new Error("Network response /GET all books failed!");
    }
    const result = await response.json();
    return result.books;
  } catch (error) {
    console.error("There was an error /GET all books!");
  }
};
