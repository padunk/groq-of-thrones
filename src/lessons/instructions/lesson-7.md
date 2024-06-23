# 7. Understanding Slice {.lesson-header}

In [lesson 5](/lesson/5){.lesson-link} we already use array slicing `titles[0]`{.lesson-code}.

GROQ slicing is bit different than what we might already know. For example: {.lesson-p}

```js {.lesson-pre}
*[_type == "movie"][0] // a single movie (an object is returned, not an array)
*[_type == "movie"][0..5] // first 6 movies (inclusive)
*[_type == "movie"][0...5] // first 5 movies (non-inclusive)
*[_type == "movie"]{title}[0...10] // first 10 movie titles
*[_type == "movie"][0...10]{title} // first 10 movie titles
*[_type == "movie"][10...20]{title} // first 10 movie titles, offset by 10
*[_type == "movie"] // no slice specified --> all movies are returned
```

## Exercise {.lesson-subheader}

Let's try query the first five `Northmen`{.lesson-code} Female and return only the `name`{.lesson-code}. {.lesson-p}
