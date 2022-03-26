import React from 'react';
import './Question.css'

const Question = () => {
    return (
        <div className='ques-container'>
            <div className='first'>
            <h2 className='ques-first'>Question: How React Works?</h2>
            <p className='ans-text'><span className='answer'>Answer:</span> React is a JavaScript library (not a framework) that creates user interfaces (UIs) in a predictable and efficient way using declarative code. Users can create a representation of a DOM node by declaring the Element function in React.In most cases, React is written using JSX instead of standard JavaScript to simplify components and keep code clean. A React component returns an element, the Virtual DOM will update the real DOM to match. <br />
            Fundamentals of React: <br />
            Components: A component is essentially a user interface element. React divides the user interface into distinct, reusable components that may be handled independently. <br />
            State: The state object is a built-in React object that stores information or data about the component. <br />
            Properties (Props): Properties are abbreviated as props. It allows you to send data from one component to another in the same way as arguments are passed in a function.</p>
            </div>
            <div className='first'>
                <h2 className='ques-first'>Question: How Usestate Work?</h2>
                <p className='ans-text'><span className='answer'>Answer:</span> Usestate is a Hook that allows you to have state variables in functional components. Thus the function components are not stateless anymore. UseState is a function that accepts the initial state as an argument and returns a state value and a function to update this value. UseState accepts the initial value of the state item and returns an array containing the state variable. The useState method returns a pair, the current value of the state variable and a function with the help of it we can update the value. We can call this function from anywhere in the component in order to update the value.useState is asynchronous multiple calls to set state.</p>
            </div>

            <div className='first'>
                <h2 className='ques-first'>Question: What Is Difference Between Props Vs State?</h2>
                <p className='ans-text'> <span className='answer'>Answer: </span>
                Difference Between Props Vs State: <br /> <br />
                <span className='answer'>Props: </span>
                Props" (short for "properties") is a special keyword in React,Props are used to customize Components when it’s being created and give it different arguments. The Data is passed from one component to another. It is Immutable (cannot be modified). Props can be used with state and functional components. Props are read-only. One of the most important features of props is that they can be passed by a parent component to its child components.  This allows us to create a component that can be customized with a new set of props every time we use it. <br /> <br />

                <span className='answer'>State: </span>
                State" is data that changes over the lifetime of a specific instance of a React component.State allows React components to dynamically change output over time in response to certain events. State is used to create Container Components or Stateful Components that perform additional data manipulation & validation which is then passed to Dumb UI components or Stateless Components for display. The Data is passed within the component only. It is Mutable ( can be modified). State can be used only with the state components/class component. State is both read and write.
                </p>
            </div>
        </div>
    );
};

export default Question;