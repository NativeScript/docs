---
title: Http
---
<!-- TODO: Add links -->
This class allows you to make http requests.


## Using Http

### GET request with a response body as a string

A simple way to make a GET request returning a response as a string is to use the [getString()](#getstring) method:

```ts
Http.getString('https://httpbin.org/get').then(
  (result: string) => {
    // do something with the string response
  },
  e => {}
)
```

### GET request with a response body as a JSON

Use the [getJSON()](#getjson) method for a GET request with a response as a JSON:

```ts
Http.getJSON('https://httpbin.org/get').then(
  (result: any) => {
    console.log(result)
  },
  e => {}
)
```

### GET request with a response body as a file

Use the [getFile()](#getfile) method for a GET request with a response as a [File]():

```ts
Http.getFile('https://d1lfyz5kwt8vu9.cloudfront.net/nativescript-logo-2021.png').then(
  (resultFile: File )=> {
    // The returned result will be File object
  },
  e => {}
)
```

### GET request with a response body as an image

Use the [getImage()](#getimage) method for a GET request with a response as an image([ImageSource]()):

```ts
Http.getImage('https://httpbin.org/image/jpeg').then(
  (res: ImageSource) => {

},
  e => {}
)
```

:::tip Note
The above methods can also take, instead of the url string, an [HttpRequestOptions](#httprequestoptions-interface) object. Also, alternatively to the above methods, you can use the [request](#) method and call the appropriate(e.g `.toJSON()`, `.toString()`) method on the [HttpResponse](#httpresponse-interface) object's `content` to get the response type you want.
:::

### Making a POST request
To make a POST request, use the [request()](#request) method:

```ts
 Http.request({
      url: 'https://httpbin.org/get',
      method: "POST",
      headers: { "Content-Type": "application/json" },
      content: JSON.stringify({
          username: "tony",
          password: "pass"
      })
    }).then((response) => {
    const result = response.content?.toJSON();
}, (e) => {
  // error
})
```

## API

### getString()

```ts
Http.getString(url: string): Promise<string>
```
Downloads the content from the specified URL as a string.

---
### getJSON()

```ts
Http.getJSON<T>(url: string): Promise<T>
```

Downloads the content from the specified URL as a string and returns its JSON.parse representation.

---

### getImage()
```ts
Http.getImage(url: string): Promise<ImageSource>
```
Downloads the content from the specified URL and attempts to decode it as an image.

---

### getFile()
```ts
Http.getFile(url: string, destinationFilePath?: string): Promise<File>
```
Downloads the content from the specified URL and attempts to save it as file. `destinationFilePath` is an optional location of where you want to save the returned file.

---

### request()
```ts
Http.request(options: HttpRequestOptions): Promise<HttpResponse>
```

Makes a generic http request using the provided options and returns a [HttpResponse](#httpresponse-interface) Object.

---

### HttpRequestOptions interface

The HttpRequestOptions interface has the following members:

#### url
```ts
const requestOptions = {
  url: "https://httpbin.org"
}
```

A string value representing the request url.

---

#### method

```ts
const requestOptions = {
  url: "https://httpbin.org",
  method: "POST"
}
```
Gets or sets the request method.

---

#### headers

```ts
const requestOptions = {
 
  headers: { "header-name" : "header-value" },
}
```
_Optional_: gets or sets the request headers in JSON format.

---

#### content

```ts
const requestOptions = {
 
  content: formData,
}

//or

const requestOptions = {
 
  content: "some string",
}
```
_Optional_: gets or sets the request body.

---

#### timeout
```ts
const requestOptions = {
  timeout : 22333
}
```

_Optional_: gets or sets the request timeout in milliseconds.

---

#### dontFollowRedirects

```ts
const requestOptions = {
  dontFollowRedirects : true
}
```

_Optional_: boolean value that sets wether to **not** follow server's redirected request.

---


### HttpResponse interface

#### statusCode

Gets the response status code.

_Type_: `number`

---

#### content

Gets the response content.
_Type_: [HttpContent](#httpcontent-interface) 

---

#### headers

Gets the response headers

---

### HttpContent interface

#### raw

```ts
response.content?.raw
```

Gets the response body as raw data.

---

#### toString()

```ts
response.content?.toString()
```

Gets the response body as string.

---

#### toJSON()

```ts
response.content?.toJSON(encoding)
```

Gets the response body as JSON object. The `encoding` is an optional of type `'UTF8' | 'GBK'`

---

#### toImage()

```ts
response.content?.toImage()
.then((image: ImageSource)=>{

}).catch(error=>{

})
```
Gets the response body as [ImageSource]().

---

#### toFile()

```ts
const file: File = response.content?.toFile(destinationFilePath)
```
Gets the response body as a file. `destinationFilePath` is an optional location of where you want to save the returned file.


