![Dapta](https://i.imgur.com/enqO3Nm.png)

# Welcome to the official Dapta SDK

[Dapta](https://daptatech.com/) is a powerful low-code backend that enables users to deploy and manage APIs with business logic, microservices, and connect multiple data sources to centralize data easily. Create your first API [here](https://app.daptatech.com/register)

This repository contains a library that enables easy and faster connections within front-end projects using TypeScript (React, Angular, Vue, etc.) to APIs created with Dapta

# Installing the SDK

Use the package manager [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) to install Dapta SDK.

```bash
npm install dapta-sdk
```

# Usage

```typescript
// Import DaptaSdk class
import { DaptaSdk } from 'dapta-sdk';

// Initialize a DaptaSdk object instance with your Dapta API base url and your api key
const baseUrl: string = 'https://example.your-api-url.com/v1/api/example/';
const apiKey: string = 'your-key';
const daptaSdk = new DaptaSdk(baseUrl, apiKey);

// Execute a fetch
daptaSdk.executeDaptaCall(
    'endpoint', // Url endpoint (Required).
    'method', // Fetch Method: GET, POST, PUT or DELETE (Required).
    { header1: 'value', header2: 'value', header3: 'value',...} // Fetch headers object (Optional). The following Headers are already included: 'Content-Type', 'Accept', 'x-api-key'.
    { bodyKey1: 'value', bodyKey2: 'value', bodyKey3: 'value'... } // Fetch body object (Optional).
    { pathParam1: 'value', pathParam2: 'value', pathParam3: 'value',... } // Url path params object (Optional).
    { queryParam1: 'value', queryParam2: 'value', queryParam3: 'value',... } // Url query params object (Optional).
).then((response) => {
    // Returns fetch response
    console.log("RESPONSE: ", response)
}).catch((error) => {
    console.error(error);
});
```

## License

[MIT](https://choosealicense.com/licenses/mit/)
