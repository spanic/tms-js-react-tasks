const loginRequest = new Request('https://reqres.in/api/login', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    email: 'peter@klaven',
  }),
});

fetch(loginRequest)
  .then((res) => {
    return res.ok
      ? res.json()
      : res.text().then((value) => Promise.reject(value));
  })
  .then(console.log)
  .catch((e) => {
    console.warn(e);
  });
