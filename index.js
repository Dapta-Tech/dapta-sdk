// import { Request, Headers } from "node-fetch";
// import fetch from "node-fetch";

// module.exports = class Dapta {
//   /**
//    * @param {string} apiKey Dapta API key
//    */
//   constructor(apiKey) {
//     this.apiKey = apiKey;
//   }

//   /**
//    * @param {string} urlEndpoint Dapta API Url Endpoint
//    * @param {string} method Fetch type (GET, POST, PUT or DELETE)
//    * @param {any} apiheaders Fetch Headers object
//    * @param {any} apiBody Fetch Body Object
//    * @param {string} queryParams Url query params object
//    * @returns {any}
//    */
//   async executeDaptaCall(urlEndpoint, method, apiheaders, apiBody, queryParams) {
//     try {
//       let headers = new Headers();
//       headers.append("Content-Type", "application/json");
//       headers.append("Accept", "*/*");
//       headers.append("Access-Control-Allow-Origin", "*");

//       if (this.apiKey) {
//         headers.append("x-api-key", this.apiKey);
//       }

//       if (apiheaders) {
//         Object.keys(apiheaders).forEach((key) => {
//           headers.append(key, apiheaders[key]);
//         });
//       }

//       let options = {
//         method: method,
//         headers: headers,
//       };

//       if (apiBody) {
//         options.body = apiBody;
//       }

//       const urlParsed = new URL(
//         (urlEndpoint + (queryParams ? new URLSearchParams(queryParams) : ''))
//       );
//       const request = new Request(urlParsed, options);
//       const resFetch = await fetch(request);
//       const body = await resFetch.json();

//       return body;
//     } catch (error) {
//       throw new Error(error);
//     }
//   }
// }
