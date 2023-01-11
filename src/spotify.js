// spotify will take care of this
// user will be thrown to spotify auth
export const authEndpoint = "https://accounts.spotify.com/authorize";

// user will be redirected to this after auth
const redirectUrl = "http://localhost:3000/";

const clientId ="d73dfb72f57543fbaec50f9f0f95f630";

// scope/limits of user or what can user do
const scopes =[
    "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];

export const getTokenFromUrl = () => {
  return window.location.hash
  .substring(1)
  .split('&')
  .reduce(( initial, item) => {

    var parts=item.split('=');
    initial[parts[0]]= decodeURIComponent(parts[1])

    return initial;
  }, {});
};

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUrl}&scope=${scopes.join(
    "%20"
  )}&response_type=token&show_dialog=true`;