window.goBack = function (e) {
  const defaultLocation = 'http://localhost:3000/';
  const oldHash = window.location.hash;

  // eslint-disable-next-line no-undef
  history.back();

  const newHash = window.location.hash;

  if (
    newHash === oldHash &&
    (typeof document.referrer !== 'string' || document.referrer === '')
  ) {
    window.setTimeout(function () {
      // redirect to default location
      window.location.href = defaultLocation;
    }, 1000); // set timeout in ms
  }
  if (e) {
    if (e.preventDefault) e.preventDefault();
    if (e.preventPropagation) e.preventPropagation();
  }
  return false; // stop event propagation and browser default event
};

export default window.goBack;
