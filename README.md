# Intimeago

## In time / Time ago - with update events

Intimeago is a library to turn date elements such as `<span data-datetime="2020-11-18T12:03:57+00:00"></span>` into 'in 10 minutes', '25 seconds ago', 'just now'... type of text nodes and have them update in realtime.


Examples:

```plain
// Past //
just now
25 seconds ago
1 minute ago
2 hours ago
3 days ago
5 weeks ago
2 years ago

// Future //
in 15 seconds
in 2 minutes
in 18 days
in 4 months
```
## Usage

 - install

```bash
npm install intimeago
```

 - import

```ts
import { setup, remove, format } from 'intimeago'
```

or import with `script` tag in html file and access it via global variable `intimeago`.

```html
<script src="dist/intimeago.min.js"></script>
```

 - example

```ts
// Setup dom elements with realtime changes
setup(document.querySelectorAll('[data-datetime]')) 

// OR

// Format the datetime and return as static string
format('2020-11-18T12:03:57+00:00')
```

## CDN 

Alternatively you can also use a CDN which will reflect the latest version.

```html
<script src="//unpkg.com/intimeago"></script>
```

## API

 

 - **setup**
   
> `setup(node[, locale = 'en_US', options])`  

> Add realtime updates to a dom element with `data-datetime` attribute.

HTML code:

```html
<div class="intimeago" data-datetime="2016-06-30 09:20:00"></div>
```

JS code:

```ts
import { setup } from 'intimeago'

const nodes = document.querySelectorAll('.intimeago')

// use setup method to add realtime updates to nodes
setup(nodes)

// OR

// set locale and relative date to calculate the difference from
setup(nodes, 'en_US', { relativeDate: '2020-10-04' })

// subscribe to an event that happens on update (change of text of the element)
node.addEventListener('intimeago-update', (e) => {
 // e.detail.diff // difference between the specified date and now/relativeDate (in seconds)
})
```


 - **remove**
   
> `remove(node)`

> Remove the realtime updates from a dom element.

JS code:

```ts
import { remove } from 'intimeago'

const node = document.querySelector('.intimeago')

// remove realtime updates from node
remove(node)
```

- **format**

> `format(date[, locale = 'en_US', opts])`, format a Date instance / timestamp / date string to static string.

```ts
import { format } from 'intimeago'

// format timestamp
format(1605702147658)

// format date instance
format(new Date(1605702147658))

// format ISO date string
format('2020-11-18T12:23:28.410Z')

// format with locale
format(1605702147658, 'en_US')

// format with locale and relative date
format(1605702147658, 'en_US', { relativeDate: '2020-10-04' })
``` 

The default locale is `en_US`.

[list of all locales here](src/lib/lang).

## NOTE
This repo has been heavily inspired by hustcc/timeago.js. All the credits go to all involved.

## LICENSE

MIT@[DavidHavl](https://github.com/DavidHavl)
