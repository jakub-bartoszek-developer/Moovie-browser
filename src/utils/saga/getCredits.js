// export const getPersonDetails = () => {
//    const getPersonDetails = fetch(
//       `https://api.themoviedb.org/3/person/popular?api_key=feb080419348f9a4826b380f202227f9&language=en-US`
//    )
//       .then((response) => {
//          if (!response.ok) {
//             throw new Error(response.statusText);
//          }
//          return response;
//       })
//       .then((response) => response.json());

//    return getPersonDetails;




// export const getCredits = (movieId) => {
//    const getCredits = fetch(
//       `https://api.themoviedb.org/3/movie/${movieId}/credits??api_key=feb080419348f9a4826b380f202227f9&language=en-US`
//    )
//       .then((response) => {
//          if (!response.ok) {
//             throw new Error(response.statusText);
//          }
//          return response;
//       })
//       .then((response) => response.json());

//    return getCredits;
// };