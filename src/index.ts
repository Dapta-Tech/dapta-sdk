export class DaptaSdk {
  apiKey: string | undefined;
  /**
   * @param {string} apiKey Dapta API key
   */
  constructor(apiKey: string | undefined) {
    this.apiKey = apiKey;
  }

  /**
   * @param {string} urlEndpoint Dapta API Url Endpoint
   * @param {string} method Fetch type (GET, POST, PUT or DELETE)
   * @param {any} apiheaders Fetch Headers object
   * @param {any} apiBody Fetch Body Object
   * @param {string} queryParams Url query params object
   * @returns {any}
   */
  async executeDaptaCall(
    urlEndpoint: string,
    method: 'GET' | 'POST' | 'PUT' | 'DELETE',
    apiheaders?: any,
    apiBody?: any,
    queryParams?: any
  ) {
    try {
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

      const urlParsed = new URL(
        (urlEndpoint + (queryParams ? new URLSearchParams(queryParams) : ''))
      );
      const request = new Request(urlParsed, options);
      const resFetch = await fetch(request);
      const body = await resFetch.json();

      return body;
    } catch (error: any) {
      throw new Error(error);
    }
  }
}
