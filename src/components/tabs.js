const Tabs = (topics) => {
  
  // TASK 3
  // ---------------------
  // Implement this function which takes an array of strings ("topics") as its only argument.
  // As an example, if the topics passed are ['javascript', 'bootstrap', 'technology']
  // then the function returns the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">technology</div>
  // </div>
  //

  const divTopics = document.createElement('div');
  divTopics.classList.add('topics')

  const tabElements = topics.map((topic) => {
    const divTab = document.createElement('div');
    divTab.className = 'tab';
    divTab.textContent = topic;
    return divTab;
  });

  tabElements.forEach((tabElement) => {
    divTopics.appendChild(tabElement);
  });
 
return divTopics

  
}

Tabs(['javscript', 'bootstrap', 'technology'])

const tabsAppender = (selector) => {
  // TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `http://localhost:5001/api/topics` (test it with a console.log!).
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.
  //

  // axios.get(http://localhost:5001/api/topics)


}

export { Tabs, tabsAppender }
