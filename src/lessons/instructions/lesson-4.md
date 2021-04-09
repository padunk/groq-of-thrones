# 4. Working with Filters {.lesson-header}

Now we know how to use multiple queries condition or filter, now lets dig some more. {.lesson-p}

GROQ has a rich set of operators we can use, more like conditional operator that we all know like:

- (`==`{.lesson-code}) equal, (`!=`{.lesson-code}) not equal. {.lesson-list-item}
- (`>`{.lesson-code}) greater than, (`>=`{.lesson-code}) greater than or equal. {.lesson-list-item}
- (`<`{.lesson-code}) less than, (`>=`{.lesson-code}) less than or equal. {.lesson-list-item}
- (`&&`{.lesson-code}) AND operator, (`||`{.lesson-code}) OR operator. {.lesson-list-item}
- `in`{.lesson-code} check for many cases at once eg. `culture in ["Braavosi", "Westeros", "Valyrian"]`{.lesson-code}. {.lesson-list-item}
- `defined`{.lesson-code} to check if the field exist eg. `defined("sibling")`{.lesson-code}. {.lesson-list-item}
  {.lesson-list}

## Exercises {.lesson-subheader}

1. Write a query that returns characters from `Valyrian`{.lesson-code} and `Free Folk`{.lesson-code} using `in`{.lesson-code} operator. {.lesson-list-item}
2. What is the difference between `[isFemale == true][culture == "Braavosi"]`{.lesson-code} and `[isFemale == true && culture == "Braavosi"]`{.lesson-code} ? {.lesson-list-item}
3. Can you find all the characters that were born in `"289 AC"`{.lesson-code} ? (_Hint_: use `match`{.lesson-code} operator) {.lesson-list-item}
   {.lesson-list}
