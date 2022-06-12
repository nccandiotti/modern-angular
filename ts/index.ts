// const myName: string = "nicole"
// const ten: number = 10
// const negative: number = -3000
// const yes: boolean = true
// const nothingHere: null = null
// const noDefinition: undefined = undefined
let myName = "stephen"

const add = (a: number, b: number): number => {
  return a + b
}

const joinString = (a: string, b: string): string => {
  return a + b
}

function subtract(a: number, b: number): number {
  return a - b
}

const anonymousfuncjoinString = function (a: string, b: string): string {
  return a + b
}

interface Post {
  title: string
  daysOld: number
  published: boolean
}
const post = {
  title: "Latest Typescript News",
  daysOld: 10,
  published: true,
}

const printPost = (postToPrint: Post) => {
  return `${postToPrint.title} ${postToPrint.daysOld} days old`
}
printPost(post)
