

async function fetchBooks() {
  try {
    const response = await fetch('https://anapioficeandfire.com/api/books', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }

    const data = await response.json();
    renderBooks(data); 

  } catch (error) {
    console.error('Error fetching books:', error);
  }
}

// import { fetchBooks } frondex';m './i
 

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve([{ title: 'Book 1' }, { title: 'Book 2' }]),
    ok: true,
  })
);

describe('fetchBooks', () => {
  it('sends a fetch request to the API and renders books', async () => {
    const renderBooks = jest.fn();

  

    await fetchBooks(renderBooks);

    expect(fetch).toHaveBeenCalledWith('https://anapioficeandfire.com/api/books', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      },
    });

    expect(renderBooks).toHaveBeenCalledWith([{ title: 'Book 1' }, { title: 'Book 2' }]);
  });
});


function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
