export class DaptaSdk {
  apiBaseUrl: string;
  apiKey: string | undefined;
  /**
   * @param {string} apiBaseUrl Dapta API base url, remeber to add an '/' at the end.
   * @param {string} apiKey Dapta API key.
   */
  constructor(apiBaseUrl: string, apiKey: string | undefined) {
    this.apiBaseUrl = apiBaseUrl;
    this.apiKey = apiKey;
  }

  /**
   * @param {string} urlEndpoint Dapta API url endpoint complement.
   * @param {string} method Fetch type (GET, POST, PUT or DELETE).
   * @param {any} apiheaders Fetch Headers object.
   * @param {any} apiBody Fetch Body object.
   * @param {any} pathParams object that contains url path params.
   * @param {any} queryParams Object that contains query params for url.
   * @returns {any} Fetch response.
   */
  async executeDaptaCall(
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
