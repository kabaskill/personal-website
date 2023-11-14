document.addEventListener("DOMContentLoaded", function () {
  const playlist = [
    "https://open.spotify.com/embed/track/2H2riBoltlfKrU7i495hvf?utm_source=generator",
    "https://open.spotify.com/embed/track/0hhXziDUO0wNYPsstDQWN6?utm_source=generator",
    "https://open.spotify.com/embed/track/6VO9i1n879SKNqjZkzaPvB?utm_source=generator",
    "https://open.spotify.com/embed/track/0xJLcjd0gaZct43xG1UlXS?utm_source=generator",
    "https://open.spotify.com/embed/track/4DTre6JWDOXWqx7vb5U4rt?utm_source=generator",
    "https://open.spotify.com/embed/track/4DDyybdhC9su038YIG6JDj?utm_source=generator",
    "https://open.spotify.com/embed/track/24wWKCW8Ubu6fvkZYdYCYJ?utm_source=generator",
    "https://open.spotify.com/embed/track/30g7Nf8blTgU43R7AIjp7D?utm_source=generator",
    "https://open.spotify.com/embed/track/6AyXbkn4cwrErFIMbRBRDs?utm_source=generator",
    "https://open.spotify.com/embed/track/1jDJFeK9x3OZboIAHsY9k2?utm_source=generator",
    "https://open.spotify.com/embed/track/5wHcVQtBejPsnlC3jecMeJ?utm_source=generator",
  ];

  const randomIndex = Math.floor(Math.random() * playlist.length);
  const randomSongIframe = document.querySelector('[data-js="random-song-iframe"]');

  randomSongIframe.src = playlist[randomIndex];
});
