/*
 * Методы объекта и this при обращении к свойствам в методах
 *
 * http://fecore.net.ua/books/m5ph3r-javascript/module-03/images/context.jpg
 *
 * - changeName
 * - addTrack
 * - updateRating
 * - getTrackCount
 */

const playlist = {
  name: 'Мой супер плейлист',
  rating: 5,
  tracks: ['трек-1', 'трек-2', 'трек-3'],

  changeName(newName) {
    this.name = newName;
  },
  addTrack(track) {
    this.tracks.push(track);
  },

  updateRating(newRetind) {
    this.rating = newRetind;
  },

  getTrackCount() {
    return this.tracks.length;
  },
};

console.log(playlist.getTrackCount());

playlist.changeName('New name');

playlist.addTrack('New track');
console.log(playlist.getTrackCount());

playlist.updateRating('New rating');
console.log(playlist);
