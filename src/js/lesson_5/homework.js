/**
 * Паттерн "строитель": реализуйте создание объекта Request используя https://refactoring.guru/ru/design-patterns/builder
 *
 * Синтаксис создания объекта:
 * ``` new Request.RequestBuilder().setMethod('GET').setUrl('https://www.ya.ru').build(); ```
 *
 * Примечания:
 * 1. У пользователя также должна быть возможность создавать объекты класса Request с помощью конструктора:
 *    ``` new Request(method, url, body) ```.
 * 2. Нельзя давать пользователю модифицировать полученный объект (добавлять, удалять и изменять свойства и их значения),
 *    т. е. он должен быть полностью __immutable__. При попытке изменить объявленные свойства, программа должна завершиться с ошибкой:
 *    ``` throw new Error('Request instance is immutable, modification is not supported,
          create a new object using Request.RequestBuilder() instead'); ```.
      При попытке удалить свойства или добавить новые, программа также должна завершиться с ошибкой:
      ``` Cannot add property {имя_свойства}, object is not extensible ```.
      Удаление свойств просто не должно никак влиять на объект.
 * 3. Если при создании объекта c помощью строителя не будет указан url, программа должна завершиться с ошибкой:
 *    ``` throw new Error('Request instance cannot be created: provided empty url'); ```
 */
class Request {
    #method;
    #url;
    #body;

    get method() {
        return this.#method;
    }

    set method(method) {
        throw new Error(`Request instance is immutable, modification is not supported,
    create a new object using Request.RequestBuilder() instead`);
    }

    get url() {
        return this.#url;
    }

    set url(url) {
        throw new Error(`Request instance is immutable, modification is not supported,
    create a new object using Request.RequestBuilder() instead`);
    }

    get body() {
        return this.#body;
    }

    set body(body) {
        throw new Error(`Request instance is immutable, modification is not supported,
    create a new object using Request.RequestBuilder() instead`);
    }

    static RequestBuilder() {

        constructor(){
            Request.#method = method;
        }

        method;
        url;
        body;

        setMethod() {
            
        }

        setUrl(url) {
            return url;
        }

        setBody(body) {
            return body;
        }

        build() {
            return constructor();
        }



    }

    constructor(method, url, body) {
        this.#method = method;
        this.#url = url;
        this.#body = body;
        Object.freeze(this);
    }
}

export { Request };
