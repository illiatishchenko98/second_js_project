const numberOfFilms = +prompt('Сколько фильмов вы уже просмотрели?', '');
const personalDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
// personalDB.movies[c] = d;
for (i = 0; i < 2; i++) {
    const a = prompt('Один из последних просмотренных фильмов?', ''),
          b = prompt('На сколько оцени его?', '');
    if (a != null && b != null && a != '' && b != '' && a.length < 50 && b.length < 50) {
        personalDB.movies[a] = b;
        console.log('done');
    } else {
        console.log('Введите все данные');
        i--;
    }
};
if (personalDB.count < 10) {
    console.log('Слишком мало');
} else if (personalDB.count > 10 && personalDB.count < 30) {
    console.log('Not bad');
} else if (personalDB.count >= 30) {
    console.log("Very good");
} else {
    console.log('Error');
}
console.log(personalDB);