interface Observable{
  insertLine(...observers: Observer[]): void
  removeLine(observer: Observer): void
  notify(): void
}

interface Observer{
  open(...args: unknown[]): void
}

//Observable
class TextEditor implements Observable{
  private observers : Observer[] = []

  constructor (public element: HTMLInputElement) {}

  insertLine(...observers: Observer[]): void {
    observers.forEach(observer => {
      if (!this.observers.includes(observer)){
        this.observers.push(observer)
      }
    })
  }

  removeLine(observer: Observer): void {
    const observerIndex = this.observers.indexOf(observer)

    if (observerIndex !== -1){
      this.observers.splice(observerIndex, 1)
    }
  }

  notify(): void {
    this.observers.forEach(observer => observer.open())
  }
}

//Observer
class ParagraphObserver implements Observer{
  constructor (public element: HTMLParagraphElement){}

  open(observable: Observable) : void{
    if (observable instanceof TextEditor){
      this.element.innerText = observable.element.value
    }
  }
}

//Observer
class DivObserver implements Observer{
  constructor (public element: HTMLDivElement){}

  open(observable: Observable) : void{
    if (observable instanceof TextEditor){
      this.element.innerText = observable.element.value
    }
  }
}

//Client code
function makeInput(): HTMLInputElement{
  const input = document.createElement('input')
  document.body.appendChild(input)
  return input
}

function makeParagraph(): HTMLParagraphElement{
  const p = document.createElement('p')
  document.body.appendChild(p)
  p.innerText = 'Texto inicial Paragrafo'
  return p
}

function makeDiv(): HTMLParagraphElement{
  const div = document.createElement('div')
  document.body.appendChild(div)
  div.innerText = 'Texto inicial Div'
  return div
}


const input = new TextEditor(makeInput())
const p1 = new ParagraphObserver(makeParagraph())
const p2 = new ParagraphObserver(makeParagraph())
const div1 = new DivObserver(makeDiv())

input.insertLine(p1, p2, div1)

input.element.addEventListener('keyup', function(){
  input.notify()
})

input.removeLine(p2)