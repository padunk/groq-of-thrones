# 10. Do GROQ have Conditionals? {.lesson-header}

Yes, but GROQ don't use `if`{.lesson-code}, instead it use `select`{.lesson-code} functions. {.lesson-p}

```js {.lesson-pre}
// select() returns the first => pair whose left-hand side evaluates to true
*[_type=='movie']{..., "popularity": select(
  popularity > 20 => "high",
  popularity > 10 => "medium",
  popularity <= 10 => "low"
)}

// The first select() parameter without => is returned if no previous matches are found
*[_type=='movie']{..., "popularity": select(
  popularity > 20 => "high",
  popularity > 10 => "medium",
  "low"
)}
```

## Exercise {.lesson-subheader}

Let's do one last query. Query _ten_ female characters and return `name, aliases, "popularity"`{.lesson-code}. **Popularity** will have value like this: two or less _aliases_: **"low"**, three and less than five _aliases_: **"medium"**, five or more _aliases_: **"high"**. {.lesson-p}

Lastly, order it by aliases length in _descending_ order. {.lesson-p}

> _Hint_: put the slice at the end of the order function.
