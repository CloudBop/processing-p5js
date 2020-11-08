//
// - setup boilerplate DOM
//
const logIterationList = document.createElement('ol');
const logIterationTitle = document.createElement('h2');
logIterationTitle.innerHTML="Iterations - this box resizable @ bottom right hand corner";

const checkbox = document.createElement('input');
checkbox.type = "checkbox";
checkbox.name = "incrementDraw";
checkbox.value = "incrementDraw";
checkbox.id = "incrementDraw";

const label = document.createElement('label')
label.htmlFor = "id";
label.appendChild(document.createTextNode('Wait for spacebar to increment drawer'));

// const trigger = document.createElement('input');
// trigger.type = "button";
// trigger.name = "trigger";
// trigger.value = "trigger";
// trigger.id = "trigger";

const logIterationContainer = document.createElement('div')
logIterationContainer.className="iteration-list"
logIterationContainer.append(logIterationTitle);
logIterationContainer.append(checkbox);
logIterationContainer.append(label);
// logIterationContainer.append(trigger);

logIterationContainer.append(logIterationList);

//
document.querySelector('body').append(logIterationContainer)
//

const logger = {
  log: function(message) {
  
    const textNode = document.createTextNode(message);
    const listElement = document.createElement('li');
    
    listElement.append(textNode);
  
    logIterationList.append(listElement);  
  },
  checkbox,
  
  counter: 0
}

//
export default logger


