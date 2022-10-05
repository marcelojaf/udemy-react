# React notes

- It's all about components.
- **Props**. We can pass data from a component to another via props. For example:

I have the component **Expenses** inside my js file and I have an array of data. I can pass it like:

<Expenses items={array_of_data}></Expenses>

Inside my `Expenses.js` which is my component file, I will use the data using props, like this:

```
function Expenses(props) {
return (
  <div>
    <h1>{props.items[0].title}</h1>
    <h2>{props.items[0].description}</h2>
  </div>
)}
```

## useState()

Change a variable at runtime.

`const [title, setTitle] = useState("Some Title");`

With this line, we can initiate a variable _title_ with the value "Some Title". Now, to update this value at runtime, we call the second parameter:

`setTitle("New title");`

### Multiple useState() and single useState()

When you have more than one field that needs to update a variable, we have two options to do it:

1. Multiple useState()

```
const [enteredTitle, setEnteredTitle] = useState("");
const [enteredAmount, setEnteredAmount] = useState("");
const [enteredDate, setEnteredDate] = useState("");

function titleChangeHandler(event) {
    setEnteredTitle(event.target.value);
}

function amountChangeHandler(event) {
    setEnteredAmount(event.target.value);
}

function dateChangeHandler(event) {
    setEnteredDate(event.target.value);
}
```

2. Single useState()

```
const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
});

function titleChangeHandler(event) {
    setUserInput((prevState) => {
      return { ...prevState, enteredTitle: event.target.value };
    });
}

function amountChangeHandler(event) {
    setUserInput((prevState) => {
      return { ...prevState, enteredAmount: event.target.value };
    });
}

function dateChangeHandler(event) {
    setUserInput((prevState) => {
      return { ...prevState, enteredDate: event.target.value };
    });
}

```
