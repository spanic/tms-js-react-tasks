/**
 * Import functions you want to be included into the main JS bundle.
 * This code will be executed as soon as the bundle is loaded
 */

import { Request } from './homework';

let request;
request = new Request('POST', 'https://www.ya.ru', {});
// or
request = new Request.RequestBuilder()
  .setMethod('POST')
  .setUrl('https://www.ya.ru')
  .setBody({})
  .build();

console.log(request);
