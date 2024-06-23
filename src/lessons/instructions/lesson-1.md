# 1. How to query JSON with GROQ? {.lesson-header}

Let's have your Todo List sample to begin with: {.lesson-p}

```json {.lesson-pre}
[
  {
    "userID": 1,
    "id": 1,
    "title": "Travel to the edge of the world",
    "completed": false
  }
]
```

This is a simple sample with value of number for id, string for title, and boolean for completed. {.lesson-p}

**Now let's run the basic query with GROQ. Let's type:** {.lesson-p}

`*[completed == false]{id, title}` {.lesson-code}

That query consists of three parts: {.lesson-p}

- `*`{.lesson-code} refers to the dataset (i.e. the data in the JSON file). {.lesson-list-item}
- `[completed == false]`{.lesson-code} is a _filter_ that removes items that are marked as complete. {.lesson-list-item}
- `{id, title}`{.lesson-code} is a _projection_ that causes the query to only return the `id` and `title` properties. {.lesson-list-item}
  {.lesson-list}
