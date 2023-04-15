import { Request } from './homework';

xdescribe('Validating Request builder', () => {
  let method, url, body;

  beforeAll(() => {
    method = 'POST';
    url = 'https://www.ya.ru';
    body = { test: true };
  });

  test('creates Request instance using constructor', () => {
    const request = new Request(method, url, body);
    expect(request.method).toBe(method);
    expect(request.url).toBe(url);
    expect(request.body).toStrictEqual(body);
  });

  test('creates Request instance using RequestBuilder', () => {
    const request = new Request.RequestBuilder()
      .setMethod(method)
      .setUrl(url)
      .setBody(body)
      .build();
    expect(request.method).toBe(method);
    expect(request.url).toBe(url);
    expect(request.body).toStrictEqual(body);
  });

  test('throws when trying to create Request using RequestBuilder with empty url', () => {
    expect(() =>
      new Request.RequestBuilder().setMethod(method).setBody(body).build()
    ).toThrowError(/request instance cannot be created: provided empty url/i);
  });

  test.each([
    function () {
      this.url = 'https://www.onliner.by';
    },
    function () {
      this.method = 'PUT';
    },
    function () {
      this.body = null;
    },
  ])(
    'throws when trying to change the declared properties values',
    (modificationAttempt) => {
      const request = new Request.RequestBuilder().setUrl(url).build();
      expect(() => modificationAttempt.call(request)).toThrowError();
    }
  );

  test('throws when trying to add new non-declared properties', () => {
    const request = new Request.RequestBuilder().setUrl(url).build();
    expect(() => (request.protocol = 'sftp')).toThrowError(
      /cannot add property .*, object is not extensible/i
    );
  });
});
