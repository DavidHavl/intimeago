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

 - Install

```bash
npm install intimeago
```

 - Import

```ts
import { setup, remove, format } from 'intimeago'
```

or import with `script` tag in html file and access it via global variable `intimeago`.

```html
<script src="dist/index.min.js"></script>
```

 - Example
```html
<div class="intimeago" data-intimeago-datetime="2016-06-30 09:20:00"></div>
```
```ts
// Setup dom elements with realtime changes
setup(document.querySelectorAll('[data-intimeago-datetime]')) 

// OR

// Format the datetime and return as static string
format('2020-11-18T12:03:57+00:00')
```
- Advanced example

```html
<div class="intimeago" 
     data-intimeago-datetime="2016-06-30 09:20:00"
     data-intimeago-relative-datetime="2010-01-05 13:10:00"
     data-intimeago-prepend-text="Starts "
     data-intimeago-remove-on-zero="true"></div>
```
## CDN 

Alternatively you can also use a CDN which will reflect the latest version.

```html
<script src="//unpkg.com/intimeago"></script>
```

## API

 

 - **setup**
   
`setup(node[, locale = 'en_US', options])`  

Add realtime updates to a dom element with `data-intimeago-datetime` attribute.

HTML code:

```html
<div class="intimeago" data-intimeago-datetime="2016-06-30 09:20:00"></div>
```

JS code:

```ts
import { setup } from 'intimeago'

const nodes = document.querySelectorAll('.intimeago')

// use setup method to add realtime updates to nodes
setup(nodes)

// OR

// set locale and relative date to calculate the difference from
setup(nodes, 'en_US', { relativeDateTime: '2016-10-04 13:30:00' })

// subscribe to an event that happens on update (change of text of the element)
node.addEventListener('intimeago-update', (e) => {
 // e.detail.diff // difference between the specified date and now/relativeDateTime (in seconds)
})
```

Options: - `relativeDateTime` allows you to set the date and time to calculate the difference from. Default is NOW. 

 - **remove**
   
`remove(node)`

Remove the realtime updates from a dom element.

JS code:

```ts
import { remove } from 'intimeago'

const node = document.querySelector('.intimeago')

// remove realtime updates from node
remove(node)
```

- **format**

`format(date[, locale = 'en_US', opts])`

Format a Date instance / timestamp / date string to static string.

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
format(1605702147658, 'en_US', { relativeDateTime: '2010-10-04 10:45:00' })
``` 

The default locale is `en_US`.

[list of all locales here](src/lib/lang).

- **importLocale**
> Add new locale function to be used

```ts
import { importLocale } from 'intimeago'

// create the translation function
const myCoolLocaleFunction = function (number, index) {
    return [
     // [past tense , future tense] 
     ['just now', 'in %s seconds'], // 0-10 seconds
     ['%s seconds ago', 'in %s seconds'], // 10 - 60 seconds
     ['1 minute ago', 'in 1 minute'], // 1-2 minutes
     ['%s minutes ago', 'in %s minutes'], // 2 minutes - 1 hour
     ['1 hour ago', 'in 1 hour'], // 
     ['%s hours ago', 'in %s hours'],
     ['1 day ago', 'in 1 day'],
     ['%s days ago', 'in %s days'],
     ['1 week ago', 'in 1 week'],
     ['%s weeks ago', 'in %s weeks'],
     ['1 month ago', 'in 1 month'],
     ['%s months ago', 'in %s months'],
     ['1 year ago', 'in 1 year'],
     ['%s years ago', 'in %s years'],
    ][index]
}

// import it
importLocale('mycool_locale', myCoolLocaleFunction )

// use it
format(new Date(1605702147658), 'mycool_locale')

``` 
- **Tag Attributes**
> The following attributes will automatically be used if present on intimeagoified html element:

**data-intimeago-datetime** - datetime sting to calculate the difference from

**data-intimeago-relative-datetime** - datetime sting to calculate the difference relative to. Default is NOW.

**data-intimeago-prepend-text** - text to prepend before the difference text ('Starts in 2 minutes')

**data-intimeago-remove-on-zero** - remove the element from dom when difference is 0

```html
<div class="intimeago"
     data-intimeago-datetime="2016-06-30 09:20:00"
     data-intimeago-relative-datetime="2010-01-05 13:10:00"
     data-intimeago-prepend-text="Starts "
     data-intimeago-remove-on-zero="true"></div>
```

## NOTE
This repo has been heavily inspired by hustcc/timeago.js. All the credits go to all involved.

## LICENSE

MIT@[DavidHavl](https://github.com/DavidHavl)
