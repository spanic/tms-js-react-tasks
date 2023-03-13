function Request(method, url) {
  this.method = method;
  this.url = url;
}

const request = new Request('GET', 'www.onliner.by');

class RequestClass {
  _method;
  _url;

  static _validMethodsList = [
    'GET',
    'POST',
    'PUT',
    'DELETE',
    'PATCH',
    'OPTIONS',
  ];

  get method() {
    return this._method;
  }

  set method(method) {
    // GET, POST, PUT, DELETE, PATCH, OPTIONS
    const isMethodValid = RequestClass._validMethodsList.some(
      (value) => value === method
    );
    if (!isMethodValid) {
      throw new Error(
        'Provided method is invalid, expected GET, POST, PUT, DELETE, PATCH, OPTIONS'
      );
    }
    this._method = method;
  }

  get url() {
    return this._url;
  }

  constructor(method, url) {
    this.method = method;
    this._url = url;
  }
}

const requestInstance = new RequestClass('PATCH', 'www.onliner.by');

class ExtendedRequestClass extends RequestClass {
  #port;

  constructor(method, url, port) {
    super(method, url);
    this.#port = port;
  }

  get port() {
    return this.#port;
  }

  set port(port) {
    if (isNaN(port)) {
      throw new Error('Invalid value for port, expected number');
    }
    this.#port = +port;
  }
}

const extendedRequestInstance = new ExtendedRequestClass(
  'GET',
  'www.tut.by',
  '80'
);

extendedRequestInstance.method = 'PUT';
