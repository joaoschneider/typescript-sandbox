const greet = (name: string, date: Date) => {
    console.log(`Hello, ${name}! It's ${date.toDateString()}.`)
}

greet("Teste", new Date())