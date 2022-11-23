---
title: Http
---
<!-- TODO: Add links -->
This class allows you to make http requests.


## Using Http

## Making a GET request with a response body as a string

A simple way to make a GET request returning a response as a string is to use the [getString()](#getstring) method:

```ts
Http.getString('https://httpbin.org/get').then(
  (result: string) => {
    // do something with the string response
  },
  e => {}
)
```

### Making a GET request with a response body as a JSON

Use the [getJSON()](#getjson) method to for a GET request with a response as a JSON:

```ts
Http.getJSON('https://httpbin.org/get').then(
  (result: any) => {
    console.log(result)
  },
  e => {}
)
```

### Making a GET request with a response body as a file

Use the [getFile()](#getfile) method to for a GET request with a response as a [File]():

```ts
Http.getFile('https://d1lfyz5kwt8vu9.cloudfront.net/nativescript-logo-2021.png').then(
  (resultFile: File )=> {
    // The returned result will be File object
  },
  e => {}
)
```

### Making a GET request with a response body as an image

Use the [getImage()](#getimage) method to for a GET request with a response as an image([ImageSource]()):

```ts
Http.getImage('https://httpbin.org/image/jpeg').then(
  (res: ImageSource) => {
    // getImage method returns ImageSource object
  },
  e => {}
)
```


## API

### getString()

```ts
Http.getString(url: string): Promise<string>

```

---
### getJSON()

```ts
Http.
```

---

### getImage()
```ts
Http.
```

---

### getFile()
```ts
```

---

### request()
```ts
Http.
```