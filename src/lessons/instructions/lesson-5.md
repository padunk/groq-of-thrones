# 5. Working with projections {.lesson-header}

So far we had return only the **default** property of our characters like `name`{.lesson-code}. {.lesson-p}

What if we want something different? Like their `title`{.lesson-code} and `name`{.lesson-code} combined together? {.lesson-p}

Off course we can do that too. Here is the query of how to combined it: {.lesson-p}

```js {.lesson-pre}
*.characters[_id == 339]{
    "Name": name + ", " + titles[0] + ", " + titles[1],
    "titlesCount": count(titles)
}
```

So what is happening on the code above? {.lesson-p}

- The `"Name"`{.lesson-code} is a custom property projection that we created. The value is whatever we want it to be. In the code above its value is `name`{.lesson-code} combined with first two index of `titles`{.lesson-code}. {.lesson-list-item}
- `"titlesCount"` is also a custom props and its value is the length of `titles` property using `count`{.lesson-code} function. {.lesson-list-item}
  {.lesson-list}

## Exercises {.lesson-subheader}

1. Find characters with two or more `titles`{.lesson-code}. {.lesson-list-item}
2. Find how many **women** with two or more `titles`{.lesson-code}. {.lesson-list-item}
   {.lesson-list}
