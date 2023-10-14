<img src="https://github.com/Dapta-Tech/dapta-sdk/assets/13544910/87cbe8d7-4057-47c2-afc9-c0cc33ef054d" width="250">

# Welcome to the official Dapta SDK

[Dapta](https://dapta.ai/) is a powerful low-code backend that enables users to deploy and manage APIs with business logic, microservices, and connect multiple data sources to centralize data easily. Create your first API [here](https://app.daptatech.com/register)

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
daptaSdk.run(
    'daptaFolder/input', // Url endpoint (Required).
    'GET', // Fetch Method: GET, POST, PUT or DELETE (Required).
    { 'Authorization': 'Bearer testJWT' } // Fetch headers object (Optional). The following Headers are already included: 'Content-Type', 'Accept', 'x-api-key'.
    { bodyKey1: 'bodyValue' } // Request body (Only for POST or PUT).
    { testUrlParam: 'objectId1' } // This could also be included manually in Endpoint (Optional).
    "testQuery=valueQuery"// Only for query params you can also use {'testQuery': 'valueQuery'} or "testQuery=valueQuery" (Optional)
).then((response) => {
    // Returns fetch response
    console.log("RESPONSE: ", response)
}).catch((error) => {
    console.error(error);
});
```

## Real Examples

### Simple get API in Dapta

```typescript
// Import DaptaSdk class
import { DaptaSdk } from "dapta-sdk";

// Initialize a DaptaSdk object instance with your Dapta API base url and your api key
const apiKey: string =
  "ChHIy-409fff24-ce1f-4ad2-8e48-a6f351d49292-1690388298995";
const dapta = new DaptaSdk(apiKey);

dapta
  .run("dapta-167-451-3/hello-dapta", "GET")
  .then((response) => {
    // Returns api response
    console.log("RESPONSE: ", response);
  })
  .catch((error) => {
    console.error(error);
  });
```

### Complex API using all parameters

```typescript
// Import DaptaSdk class
import { DaptaSdk } from "dapta-sdk";

// Initialize a DaptaSdk object instance with your Dapta API base url and your api key
const apiKey: string = "Zmpjc-409fff24-ce1f-4ad2-8e48-a6f351d49292-a";
const dapta = new DaptaSdk(apiKey);

dapta
  .run(
    "dapta-167-451-3/complex-api",
    "POST",
    undefined,
    { testBody: "valueBody" },
    { testParamURL: "valueParamURL" },
    [["testQuery", "valueQuery"]] // Only for query params you can also use {'testQuery': 'valueQuery'} or "testQuery=valueQuery"
  )
  .then((response) => {
    // Returns fetch response
    console.log("RESPONSE: ", response);
  })
  .catch((error) => {
    console.error(error);
  });
```

## License

[MIT](https://choosealicense.com/licenses/mit/)
