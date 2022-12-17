"use strict"
// const personalMovieDB = {
// 	count: 0,
// 	movies: {},
// 	actors: {},
// 	genres: [],
// 	private: true,
// 	start: () => {
// 		personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
// 		while (personalMovieDB.count == '' || personalMovieDB.count == null ||
// 			isNaN(personalMovieDB.count)) {
// 			personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
// 		}
// 	},
// 	detectPersonalLevel: () => {
// 		if (personalMovieDB.count < 10) {
// 			alert("Мало просмотрено");
// 		} else if (personalMovieDB.count <= 30) {
// 			alert("Вы классический зритель");
// 		} else {
// 			alert('Киноман');
// 		}
// 	},
// 	rememberMyFilms: () => {
// 		for (let i = 0; i < 2; i++) {
// 			const a = prompt('Один из последних просмотренных фильмов'),
// 				b = +prompt('На сколько его оцените?');
// 			if (a != null && b != null && a != '' && b != '' && a.length <= 50) {
// 				personalMovieDB.movies[a] = b;
// 				console.log('done');
// 			} else {
// 				console.log('error');
// 				i--;
// 			}
// 		}
// 	},
// 	showMyDB: () => {
// 		if (personalMovieDB.private == false) {
// 			console.log(personalMovieDB);
// 		} else {
// 			alert('error');
// 		}
// 	},
// 	writeYourGenres: () => {
// 		for (let i = 1; i <= 3; i++) {
// 			const yourFavoritegenreNumber = prompt(`Ваш любимый жанр под номером ${i} `);
// 			if (yourFavoritegenreNumber == '' || yourFavoritegenreNumber == null) {
// 				i--
// 			}
// 			personalMovieDB.genres[i - 1] = yourFavoritegenreNumber;
// 		}
// 		personalMovieDB.genres.forEach(
// 			(item, i) => console.log(`Любимый жанр ${i + 1} : ${item}`)
// 		)
// 	},
// 	toggleVisibleMyDB: function () {
// 		if (personalMovieDB.private === false) {
// 			personalMovieDB.private = true;
// 		} else if (personalMovieDB.private === true) {
// 			personalMovieDB.private = false;
// 		}
// 	}
// };




