# Arrays

## Common Array Methods

|Method | Description |
|:-|:-|
| `arr.push(item1, ... itemX)` | add a new item or items to the end of the array |
| `arr.pop()` | removes and returns the last element of the array |
| `arr.shift()` | removes and returns the first element of the array |
| `arr.unshift(item1, ... itemX)` | add a new item or items to the beginning of the array |
| `arr.splice(index, count, item1, ... itemX)` | adds and/or removes items starting at index optionally remove count and insert items |
| `arr1.concat(arr2)` | join two arrays |
| `arr.slice(start, end)` | returns elements from start to end (exclusive) without modifying original array |
| `arr.indexOf(item, start)` | returns the first index of the specified item or -1 if the value is not found; optionally start provides value other than 0 to begin search. |
| `arr.reverse()` | reverses the order of the array in place |
| `arr.sort()` | sorts the elements of the array in alphabetical ascending order |

## Array Methods with Function Parameters

|Method | Description |
|:-|:-|
| `arr.forEach((item) => {`</br>&nbsp;&nbsp;`function();`<br/>`});` | iterates through the array and applies the provided function to each element |
| `arr.map((item) => {`</br>&nbsp;&nbsp;`function();`<br/>`});` | returns a new array by applying the provided function to each element |
| `arr.filter((item) =>`</br>&nbsp;&nbsp;`boolean conditional);` | creates a new array that contains only elements that pass specific conditions |
| `arr.reduce((accumulator, item) =>`</br>&nbsp;&nbsp;`operation, initialValue);` | reduces array to a single value by applying a function to each element|
| `arr.find((item) =>`</br>&nbsp;&nbsp;`boolean conditional);` | returns the first element that satisfies a specified condition |
