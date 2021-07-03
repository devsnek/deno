// Copyright 2018-2021 the Deno authors. All rights reserved. MIT license.

const client = Deno.createHttpClient({
  proxy: {
    url: "http://localhost:4555",
    basicAuth: { username: "username", password: "password" },
  },
});

const res = await fetch(
  "http://localhost:4545/test_util/std/examples/colors.ts",
  { client },
);
console.log(`Response http: ${await res.text()}`);

client.close();