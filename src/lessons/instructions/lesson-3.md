# 3. Querying Game of Thrones Characters {.lesson-header}

GROQ is different compare with [GraphQL](https://graphql.org){.lesson-link}. You can learn more about the differences [here](https://www.sanity.io/docs/what-about-graphql){.lesson-link}. {.lesson-p}

Anyway let's start our lesson by getting more fun dataset like [Game of Thrones characters](https://anapioficeandfire.com/){.lesson-link}. The schema for the character look like this: {.lesson-p}

```ts {.lesson-pre}
{
    "characters": [
        {
            "_id": number;
            "name": string;
            "isFemale": boolean;
            "culture": string;
            "titles": string[];
            "aliases": string[];
            "born": string;
            "died": string;
            "father": number | null;
            "mother": number | null;
            "spouse": number | null;
            "children": number[];
            "allegiances": number[];
            "books": number[];
            "povBooks": [];
            "playedBy": string[];
            "tvSeries": number[]
        }
    ]
}
```

It is much interesting isn't it? {.lesson-p}

Ok, so in this lesson we already download the characters dataset for you. Now let's see how are we going to find all characters which is **female** and come from **Braavosi** culture and get only the name. {.lesson-p}

```js {.lesson-pre}
*.characters[isFemale == true && culture == "Braavosi"]{name}
```

The query is easy and almost the same with the last one, but we add three more thing here: {.lesson-p}

1. `.characters`{.lesson-code}, this mean that the data is stored inside `characters`{.lesson-code} property. Not like the last one when we start with `*`{.lesson-code} which mean the whole JSON document is contained in an array at the top-level of the dataset. {.lesson-list-item}
2. Conditional logic here with `&&`{.lesson-code} (AND) operator. {.lesson-list-item}
   {.lesson-list}

Since the return value will be an array, you could also be more specific with your query by adding it at the end like:

```js {.lesson-pre}
*.characters[isFemale == true && culture == "Braavosi"]{name}[0]
```

> _Note_: you could also return all the value by using `...`{.lesson-code} in the projection like `{...}`{.lesson-code}

## Exercises {.lesson-subheader}

1. Directly filter on the root object `*[isFemale == true && culture == "Braavosi"]{name}`{.lesson-code}. {.lesson-list-item}
2. What's the difference between: {.lesson-list-item}
   {.lesson-list}

```js {.lesson-pre}
*.characters[isFemale == true && culture == "Braavosi"]{name}[0]
// AND
*.characters[0][isFemale == true && culture == "Braavosi"]{name}
```
