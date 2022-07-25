const baseURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/yda7RRzD8a6swaxEX2Uu/books/';

export const getData = async () => {
  const response = await fetch(`${baseURL}`);
  const data = await response.json();
  const books = Object.entries(data).map((pair) => ({
    ...pair[1][0],
    id: pair[0],
  }));
  return books;
};

export const uploadData = async (book) => {
  const apiObj = { ...book };
  delete Object.assign(apiObj, { item_id: apiObj.id }).id;
  await fetch(`${baseURL}`, {
    method: 'POST',
    body: JSON.stringify(apiObj),
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

export const removeData = async (id) => {
  await fetch(`${baseURL}/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });
};
