const apiKey = '17822127-e9a9a0a140ac0dca1ff979a25';

export default {
  searchQuery: '',
  page: 1,
  fetchPictures() {
    const url = `https://pixabay.com/api/?key=${apiKey}&q=${this.query}&image_type=photo&page=${this.page}&per_page=12&orientation=horizontal`;
    return fetch(url)
      .then(res => res.json())
      .then(({ hits }) => {
        this.incrementPage();

        return hits;
      });
  },
  resetPage() {
    this.page = 1;
  },
  incrementPage() {
    this.page += 1;
  },
  get query() {
    return this.searchQuery;
  },
  set query(value) {
    this.searchQuery = value;
  },
};
