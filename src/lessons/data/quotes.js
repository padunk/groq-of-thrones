import quotes from "./quotes.json"
const successQuotes = quotes.filter((q) =>
  q.rating ? q.rating >= 3 : q.numberOfVotes > 5
)
const errorQuotes = quotes.filter((q) =>
  q.rating ? q.rating < 3 : q.numberOfVotes <= 5
)

function randomize(arr) {
  let idx = Math.floor(Math.random() * arr.length)
  return `${arr[idx].en}\n🎉 〰️ ${arr[idx].author} 💛`
}

export function getQuotes(condition) {
  let quote
  if (condition === "success") {
    quote = randomize(successQuotes)
  } else {
    quote = randomize(errorQuotes)
  }
  return quote
}
