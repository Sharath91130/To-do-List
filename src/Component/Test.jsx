import React, { useState } from "react";

function Test() {
    // Step 1: Create state to store input value
    const [inputValue, setInputValue] = useState("");

    // Step 2: Handle input changes
    const handleChange = (event) => {
        setInputValue(event.target.value);
    };

    // Step 3: Handle form submission (optional)
    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent page reload
        alert(`You entered: ${inputValue}`);
    };

    return (
        <div>
            <h1>React Text Box Example</h1>
            <form onSubmit={handleSubmit}>
                {/* Step 4: Add the text box and link it to the state */}
                <input
                    type="text"
                    value={inputValue} // Controlled by state
                    onChange={handleChange} // Update state on input change
                    placeholder="Enter something..."
                />
                <button type="submit">Submit</button>
            </form>
            <p>You typed: {inputValue}</p> {/* Display the current value */}
        </div>
    );
}

export default Test;
