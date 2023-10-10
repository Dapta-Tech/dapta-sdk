# Welcome to the official Dapta SDK

This repository contains a library that allows an easy implementation of Dapta API's in FrontEnd with TypeScript.

# Installing the SDK

Use the package manager [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) to install Dapta SDK.
```bash
npm install dapta-sdk
```

# Usage

```typescript
// Import DaptaSdk class
import { DaptaSdk } from 'dapta-sdk';

// Initialize a DaptaSdk object instance with your D base url and your api 
const baseUrl: string = 'https://example.your-api-url.com/v1/api/example/';
const apiKey: string = 'your-key';
const daptaSdk = new DaptaSdk(baseUrl, apiKey);

// Execute a fetch
daptaSdk.executeDaptaCall(
    'endpoint', // Url endpoint (Required).
    'method', // Fetch Method: GET, POST, PUT or DELETE (Required).
    { header1: 'value', header2: 'value', header3: 'value',...} // Fetch headers object (Optional).
    { bodyKey1: 'value', bodyKey2: 'value', bodyKey3: 'value'... } // Fetch body object (Optional).
    { pathParam1: 'value', pathParam2: 'value', pathParam3: 'value',... } // Url path params object (Optional).
    { queryParam1: 'value', queryParam2: 'value', queryParam3: 'value',... } // Url query params object (Optional).
).then((value) => {
    // Returns fetch response
    console.log("RESPONSE: ", value)
}).catch((error) => {
    console.error(error);
});
```

## License

[MIT](https://choosealicense.com/licenses/mit/)
