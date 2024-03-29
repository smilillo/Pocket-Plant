// ChatBot Tutorial Used - https://danielkhv.com/blog/createyourownchatbot
//Get reference to our submit button and chatbot field
const submit = document.getElementById("submit");
const responseField = document.getElementById("response");
const userInput = document.getElementById("user-input");
const chatHistory = document.getElementById("chat-history");
const loading = document.getElementById("spinner");

let promptResponses = [];

//Our call to the API
console.log("I'm here");
const generateResponse = async () => {
    const input = userInput.value.trim();
    const response = await fetch('/chat', {
        method: 'POST',
        body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [{"role": "user", "content": input}],
            temp: 0.6
        }), 
        headers: {
            'Content-Type': 'application/json'
        }
    });

    const responseData = await response.json();
    console.log(responseData);
    const message = responseData.result[0].message.content;

    //Store our previous messages
    promptResponses.push({question: input, response: message});
    //Clear both fields
    userInput.value = "";

    const historyElement = document.createElement('div');
    historyElement.innerHTML = `<li class="list-group-item">Prompt: ${input}</li>
    <li class="list-group-item"> Response: ${message}</li>`;
    chatHistory.append(historyElement);
}

//Assign onclick method
submit.onclick = generateResponse;