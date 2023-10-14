export class DaptaSdk {
  apiBaseUrl: string = 'https://api.dapta.ai/api/';
  apiKey: string | undefined;
  /**
   * @param {string} apiBaseUrl Dapta API base url, remember to add an '/' at the end.
   * @param {string} apiKey Dapta API key.
   */
  constructor(apiKey: string | undefined) {
    this.apiKey = apiKey;
  }

  /**
   * @param {string} urlEndpoint Dapta API url endpoint complement.
   * @param {string} method Fetch type (GET, POST, PUT or DELETE).
   * @param {any} apiheaders Fetch Headers object. The following Headers are already included: 'Content-Type', 'Accept', 'x-api-key'.
   * @param {any} apiBody Fetch Body object. Leave it undefined if you don't need it.
   * @param {any} pathParams Object that contains url path params. Leave it undefined if you don't need it.
   * @param {any} queryParams Object that contains query params for url. Leave it undefined if you don't need it.
   * @returns {any} Fetch response.
   */
  async run(
    urlEndpoint: string,
    method: 'GET' | 'POST' | 'PUT' | 'DELETE',
    apiheaders?: any,
    apiBody?: any,
    pathParams?: any,
    queryParams?: any
  ) {
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Accept", "*/*");
    headers.append("Access-Control-Allow-Origin", "*");

    if (this.apiKey) {
      headers.append("x-api-key", this.apiKey);
    }

    if (apiheaders) {
      Object.keys(apiheaders).forEach((key) => {
        headers.append(key, apiheaders[key]);
      });
    }

    let options: any = {
      method: method,
      headers: headers,
    };

    if (apiBody) {
      options.body = JSON.stringify(apiBody);
    }

    let url = this.apiBaseUrl + urlEndpoint;
    if (pathParams) {
      Object.keys(pathParams).forEach((key) => {
        url += `/${pathParams[key]}`;
      });
    }
    const urlParsed = new URL(
      (url + (queryParams ? ('?' + new URLSearchParams(queryParams).toString()) : ''))
    );

    const request = new Request(urlParsed, options);
    const resFetch = await fetch(request);
    const body = await resFetch.json();
    return body;
  }
}
