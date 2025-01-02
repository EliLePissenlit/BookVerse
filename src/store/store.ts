import { defineStore } from 'pinia';

export const useBookStore = defineStore('book', {
  state: () => ({
    books: [] as { title: string; description: string; image: string }[],
  }),
  actions: {
    setBooks(newBooks: { title: string; description: string; image: string }[]) {
      this.books = newBooks;
    },
  },
});
