# 8. Ordering Result {.lesson-header}

With GROQ, there is no default ordering. So if you want to order the result then you need to use order functions. {.lesson-p}

```js {.lesson-pre}
// order results
*[_type == "movie"] | order(_createdAt asc)

// order results by multiple attributes
*[_type == "movie"] | order(releaseDate desc) | order(_createdAt asc)
```

You can order the result descending with `desc`{.lesson-code} operator or ascending with `asc`{.lesson-code} operator. {.lesson-p}

## Exercises {.lesson-subheader}

Query five characters with the `children`{.lesson-code} more than 3 and return the `name`{.lesson-code} and `children`{.lesson-code} (order by `children`{.lesson-code} length in descending order). {.lesson-p}
