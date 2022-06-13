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

class Car {
  color: string = ""
  year: number = 0

  constructor(color: string, year: number) {
    this.color = color
    this.year = year
  }
  drive() {
    console.log("Vroom")
    this.putInGear()
    this.pressPedal()
    this.turnWheel()
  }
  private putInGear() {}
  private pressPedal() {}
  private turnWheel() {}
}
const myCar = new Car("bronze", 2015)
console.log(myCar)

class Cow {
  sound: string = ""
  constructor(sound: string) {
    this.sound = sound
  }
}
const myCow = new Cow("moo")
console.log(myCow)
const myOtherCow = new Cow("Moo-Moo-Moo")
console.log(myOtherCow)
