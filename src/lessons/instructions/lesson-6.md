# 6. More Projections {.lesson-header}

Take a look at this query: {.lesson-p}

```js {.lesson-pre}
{
    "allFemale": count(*.characters[isFemale == true]),
    "Dornish": *.characters[culture == 'Dornish']{name},
}
```

Catch that? A GROQ query doesn’t have to start with `*`{.lesson-code}. In this query, we’re creating a JSON object where the values are results from separate queries. This provides a lot of flexibility in what we can produce with GROQ. Maybe you want the total number of incomplete todos together with a list of the five last ones. Or maybe you want to split the todos into two separate lists: one for completed and one for incomplete. Or maybe you need to wrap everything inside an object because that is what another tool/library/framework expects. Whatever the case, GROQ has you covered. {.lesson-p}

## Exercise {.lesson-subheader}

In this exercise we provide you with the custom `"totalAliases"`{.lesson-code} property. The value is the total length of all `aliases`{.lesson-code} of all characters combined. The last `[]`{.lesson-code} is flattening the entire array. {.lesson-p}

So your task is to add `name`{.lesson-code} and `"percentage"`{.lesson-code} where its value is the percentage of aliases of the current character compare to the total aliases of all characters and rounded it to **three** decimal point. {.lesson-p}

> _Note_: for simplicity we reduce the dataset to only seven characters with most aliases. Use `round`{.lesson-code} functions to round to certain precision.
