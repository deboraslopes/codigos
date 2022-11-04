function Subject(){
    this.observers = [] //array de função de observadores
}

Subject.prototype = {
    subscribe: function(fn){
        this.observers.push(fn)
    },
    unsubscribe: function(fnToRemove){
        this.observers = this.observers.filter(fn => {
            if (fn != fnToRemove)
                return fn
        })
    },
    fire: function(){
        this.observers.forEach(fn =>{
            fn.call()
        })
    }
}

const subject = new Subject()

function Observer1(){
    console.log('Observer 1 funcionando')
}

function Observer2(){
    console.log('Observer 2 funfa!')
}

subject.subscribe(Observer1)
subject.subscribe(Observer2)
subject.unsubscribe(Observer1)

subject.fire()