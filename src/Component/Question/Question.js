import React from 'react';

const Question = () => {
    return (
        <div>
            <div>
            <h2>Ques:How React Works?</h2>
            <p>Ans: React is a JavaScript library (not a framework) that creates user interfaces (UIs) in a predictable and efficient way using declarative code. Users can create a representation of a DOM node by declaring the Element function in React.In most cases, React is written using JSX instead of standard JavaScript to simplify components and keep code clean. a React component returns an element, the Virtual DOM will update the real DOM to match.
            Fundamentals of React
            Components: A component is essentially a user interface element. React divides the user interface into distinct, reusable components that may be handled independently.
            State: The state object is a built-in React object that stores information or data about the component.
            Properties (Props): Properties are abbreviated as props. It allows you to send data from one component to another in the same way as arguments are passed in a function.</p>
            </div>
            <div>
                <h2>Ques: How Usestate Work?</h2>
                <p>Ans: useState is a Hook that allows you to have state variables in functional components. Thus the function components are not stateless anymore. useState is a function that accepts the initial state as an argument and returns a state value and a function to update this value. useState() accepts the initial value of the state item and returns an array containing the state variable. The useState() method returns a pair, the current value of the state variable and a function with the help of it we can update the value. We can call this function from anywhere in the component in order to update the value.useState() is asynchronous
                Multiple calls to set State</p>
            </div>

            <div>
                <h2>Ques: Difference Between Props Vs State?</h2>
                <p>
                PROPS
                The Data is passed from one component to another.
                It is Immutable (cannot be modified). Props can be used with state and functional components.Props are read-only.	props" (short for "properties") is a special keyword in React,Props are used to customize Components when it’s being created and give it different arguments.One of the most important features of props is that they can be passed by a parent component to its child components. This allows us to create a component that can be customized with a new set of props every time we use it.

                STATE
                The Data is passed within the component only.
                It is Mutable ( can be modified).State can be used only with the state components/class component (Before 16.0).State is both read and write.state" is data that changes over the lifetime of a specific instance of a React component.State allows React components to dynamically change output over time in response to certain events.State is used to create Container Components or Stateful Components that perform additional data manipulation & validation which is then passed to Dumb UI components or Stateless Components for display.
                </p>
            </div>
        </div>
    );
};

export default Question;