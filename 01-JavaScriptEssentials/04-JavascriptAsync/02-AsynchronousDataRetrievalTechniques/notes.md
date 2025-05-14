# Asynchronous Data Retrieval Techniques

## Understanding Promises For API

### Callbacks

A callback is a function passed as an argument to another function and executed later or after a specific event occurs.
JavaScript commonly uses callbacks to handle asynchronous operations such as event handling, timers, and user interactions.

Let's consider a realistic example where you want to get user information and recent posts from an API and then display
the user's information and posts on a web page.

```javascript
// Simulated API requests with callbacks
function getUserInfo(userId, callback) {
  setTimeout(() => {
    const userInfo = {
      name: 'John',
      email: 'john@example.com'
    };
    callback(userInfo);
  }, 1000);
}

function getUserPosts(userid, callback) {
  setTimeout(() => {
    const posts = ['Post 1', 'Post 2', 'Post 3'];
    callback(posts);
  }, 1500);
}

// Callback hell scenario
getUserInfo(1, (userInfo) => {
  console.log('User Info:', userInfo);

  getUserPosts(1, (userPosts) => {
    console.log('User Posts:', userPosts);

    // Update the UI to show the user info and posts
  });
})
```

> [!NOTE]
> This is a fairly weird example:
> * Neither of the userId variables are actually used.
> * The call backs don't appear to be very necessary

### Promises

Promises are a powerful and flexible way to work with asynchronous operations in JavaScript. They represent a value that may not be available yet, but will be in the future. You can use promises for tasks like fetching data from a server,
reading files, or performing other operations that may take time to complete.

Promises have three potential states:

<table>
<tr>
<td>

> __Pending :warning:__
>
> the initial state when you create the promise and the asynchronous operation is in progress


</td>
<td>

> __Fulfilled :heavy_check_mark:__
>
> when the asynchronous operation is completed and the result is available.

</td>
<td>

> __Rejected :x:__
>
> the state when the asynchronous operation encounters an error or is unsuccessful.

</td>
</tr>
</table>

You can create promises using the promise constructor, providing a method to handle the results once the asynchronous operation is complete.

Here's the basic syntax of a promise:

```javascript
/* == Promise Creation == */
const myPromise = new Promise((resolve, reject) => {
  // Asynchronous operation goes here
  // IF successful, call resolve with the result
  // IF an error occurs, call reject with an error
});

/* == Promise Consumption == */
myPromise.then(
  (result) => {
    // Handle the successful result
  },
  (error) => {
    // Handle the error
  }
);
```

### Creating A Callback Using Promises Example

```javascript
// Simulated API requests with Promises
function getUserInfo(userId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const userInfo = {
        name: 'John',
        email: 'john@example.com'
      };
      resolve(userInfo);
    }, 1000)
  });
}

function getUserPosts(userId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const posts = ['Post 1', 'Post 2', 'Post 3'];
      resolve(posts);
    })
  });
}

// Using Promises to simplify the code
getUserInfo(1)
  .then((userInfo) => {
    console.log('User Info:', userInfo);
    return getUserPosts(1);
  })
  .then((userPosts) => {
    console.log('User Posts', userPosts);
  })
  .catch((error) => {
    console.error('An error occurred,', error);
  });
```

### Advantages Of Using Promises

- Allow you to handle asynchronous operations linearly without needing deeply nested callbacks
- This code structure makes understanding asynchronous code easier
- Comprehensible code simplifies maintenance
- Partially important in real world scenarios involving API requests, data processing, and updating the user interface, UI.

> [!IMPORTANT]
> I have little doubt I could use a `Promise`, complete the lab and pass the quiz; but, I still don't feel like I really understand this topic. It might not really be important. Nevertheless, place it on the list of things to comeback to and read up on.

## Understanding The `Fetch()` API

The Fetch API is a modern built-in JavaScript interface for making network requests,
typically used for fetching resources from the web, such as data from a server or an API.
It provides a more flexible and powerful way to work with HTTP requests than older techniques,
like XML HTTP request.

The Fetch API:
- Is Promise based
- Is simple to implement
- Supports a range of HTTP request methods, including GET, POST, PUT, DELETE, and others.

### `Fetch()` API Syntax

```javascript
fetch(URL, options)
  .then(response => {
    // handle response
  })
  .catch(error => {
    // handle errors
  });
```

The parameter `options` is an optional object to customize the request. It can include various properties like method, headers, mode, credentials, and more.

### Control Flow And Conditional Statements

A Fetch API provides a way to make various HTTP requests, including GET, POST, PUT, DELETE, and more.

<table>
<tr>
<td>

> #### GET Method
> ```javascript
> fetch('https://api.example.com/data', {
>   method: "GET"
> })
> ```
> - Retrieves data from a specified source
> - Doesn't modify data

</td>
<td>

> ### DELETE Method
> ```javascript
> fetch('https://api.example.com/delete', {
>   method: "DELETE"
> })
> ```
> - Remove resources from teh server
> - Deletes record

</td>
</tr>

<tr>
<td>

> #### POST Method
>```javascript
> fetch('https://api.example.com/create', {
>   method: "POST",
>   body: JSON.stringify({
>     name: 'John',
>     email: 'john@example.com'
>   }),
>   headers: {
>     'Content-Type': 'application/json'
>   }
> })
>```
> - Submit data to a specified resource
> - Create new records

</td>
<td>

> #### PUT Method
> ```javascript
> fetch('https://api.example.com/update/1', {
>   method: "PUT",
>   body: JSON.stringify({
>     name: 'Updated Name',
>     email: 'updated@example.com'
>   }),
>   headers: {
>     'Content-Type': 'application/json'
>   }
> })
> ```
> - Update or replace data
> - Update existing records

</td>
</tr>

<tr>
<td>

> #### PATCH Method
> ```javascript
> fetch('https://api.example.com/update', {
>   method: "PATCH",
>   body: JSON.stringify({
>     email: 'updated@example.com'
>   }),
>   headers: {
>     'Content-Type': 'application/json'
>   }
> })
> ```
> - Apply partial modification

</td>
<td>

> #### OPTIONS Method
> ```javascript
> fetch('https://api.example.com/resource', {
>   method: "OPTIONS"
> })
> ```
> - Describe communication options
> - Check allowed methods and headers

</td>
</tr>
</table>

### Example: Making Get Requests

```javascript
const apiUrl = 'https://jsonplaceholder.typicode.com/posts/1';

fetch(apiUrl)
  .then(response => {
    return response.json(); // Parse the response as JSON
  })
  .then(data => {
    // Handle and use the JSON data
    console.log('Data from the API:', data);
  })
  .catch(error => {
    // Handle any errors that occurred during fetch
    console.error('An error occurred:', error);
  });
```

> [!NOTE]
> Based on the above code, and verified through additional research: fetch makes a GET request as default.
