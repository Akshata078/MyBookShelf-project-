const additionalBooks = [
    { id: 7, title: 'Time Machine', author: 'R.L. Stevenson', releaseDate: '1895', coverImage: './images/img6.jpg', info: 'The Time Machine, first novel by H. G. Wells, published in book form in 1895. The novel is considered one of the earliest works of science fiction and the progenitor of the “time travel” subgenre.' },
    { id: 8, title: 'The Tempest', author: 'H.G Wells', releaseDate: '1623', coverImage: './images/img8.jpg', info: 'The Tempest, drama in five acts by William Shakespeare, first written and performed about 1611 and published in the First Folio of 1623 from an edited transcript, by Ralph Crane (scrivener of the King\'s Men), of the author\'s papers after they had been annotated for production.' },
    { id: 9, title: 'Ulysses', author: 'James Joyce', releaseDate: 'December 1920', coverImage: './images/img11.jpg', info: 'Ulysses is a modernist novel by the Irish writer James Joyce. Parts of it were first serialized in the American journal The Little Review from March 1918 to December 1920, and the entire work was published in Paris by Sylvia Beach on 2 February 1922, Joyce\'s fortieth birthday.' }
];
let currentAdditionalIndex = 0;
function displayAdditionalBooks(index) {
    const additionalBooksContainer = document.getElementById('additionalBooks');
    additionalBooksContainer.innerHTML = '';
    if (index >= 0 && index < additionalBooks.length) {
        const book = additionalBooks[index];
        const bookElement = document.createElement('div');
        bookElement.className = 'book';
        bookElement.innerHTML = `
            <img src="${book.coverImage}" alt="${book.title}" onclick="showBookDetails(${book.id}, '${book.title}', '${book.author}', '${book.releaseDate}', '${book.info ? book.info.replace(/'/g, "\\'") : ''}')">
            <div class="book-details">
                <strong>${book.title}</strong>
                <p>${book.author}</p>
                <p>${book.releaseDate}</p>
            </div>
        `;
        additionalBooksContainer.appendChild(bookElement);
    }
}
document.getElementById('prevBtn').addEventListener('click', () => {
    if (currentAdditionalIndex > 0) {
        currentAdditionalIndex--;
        displayAdditionalBooks(currentAdditionalIndex);
    }
});
document.getElementById('nextBtn').addEventListener('click', () => {
    if (currentAdditionalIndex < additionalBooks.length - 1) {
        currentAdditionalIndex++;
        displayAdditionalBooks(currentAdditionalIndex);
    }
});
// Initial display
displayAdditionalBooks(currentAdditionalIndex);







