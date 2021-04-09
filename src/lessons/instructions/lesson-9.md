# 9. Joining Data {.lesson-header}

In our last lesson the `children`{.lesson-code} result return only reference number. The number refer to the id of each other characters in the database. Can we get the name or more data instead of just number? {.lesson-p}

Yes, GROQ supported [joins](https://www.sanity.io/docs/groq-joins){.lesson-link} via the [dereference operator](https://sanity-io.github.io/GROQ/draft/#sec-Dereference-operator){.lesson-link} also known as reference access operator, `^`{.lesson-code} [parent scope operator](https://sanity-io.github.io/GROQ/draft/#sec-Parent-expression){.lesson-link}, and [reference function](https://www.sanity.io/docs/groq-functions#5759ed6ff047){.lesson-link}. {.lesson-p}

We change our dataset and add some property required for this to work. {.lesson-p}

```js {.lesson-pre}
{
  "_id": "12",
  "_type": "character",
  "father": "836",
  "children": [
    {"_ref": "913"},
    {"_ref": "150"},
    {"_ref": "1022"}
  ],
  // other property
}
```

And we query the children data like this: {.lesson-p}

```js {.lesson-pre}
*[_type == "character" && _id == "12"][]{
  name,
  "kids": children[]->{name, born}
}
```

Because `children`{.lesson-code} property is an array, we need to add `[]`{.lesson-code} symbol and it will automatically refer each element reference to the actual character. The `->`{.lesson-code} is a reference access operator that will search for `_id`{.lesson-code} that matches the `_ref`{.lesson-code} string and return the projection (in above code is name and born value). {.lesson-p}

## Exercise {.lesson-subheader}

Let's do the other way around. Returning only `name`{.lesson-code} and `"oldMan"`{.lesson-code} custom property that refer to the father name. {.lesson-p}

> _Note_: We modify the dataset because we need `_type`{.lesson-code} property, and the `_id`{.lesson-code}, `_father`{.lesson-code}, and `_ref`{.lesson-code} value to be string. The dataset is much smaller and consist only four characters.
