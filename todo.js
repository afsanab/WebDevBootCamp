let input = prompt("what would you like to do?")
const todos = ["collect eggs", "clean litter box"]
while (input != "quit" && input != "q") {
    if (input === "list") {
        console.log("**************")
        for (let i = 0; i < todos.length; i++) {
            console.log(`${i}: ${todos[i]}`);
        }
        console.log("**************")
    } else if (input === 'new') {
        const newTodo = prompt("Ok, what is the new todo?")
        todos.push(newTodo);
        console.log(`${newTodo} added to list`);
    }
    input = prompt("what would you like to do?")
}
console.log("Ok, You quit the app!")
// coding is fun you just hate thinking now
// because your so addicted to your phone
// the only way to fix this is to keep pushing your limit and endurance
// rewire your brain to be able to study for longer and longer