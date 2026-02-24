Answers to Questions
1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
getElementById: In html 'Id' uniquely identify just one element so getElementById gives one single element.
getElementsByClassName: It gives collection of element like array.
querySelector/querySelectorAll: querySelector gives the first one it finds on the other hand querySelectorAll gives everything that matches
=================================================================================================================================================================================
2. How do you create and insert a new element into the DOM?
first i have to create it, then you insert it somewhere :
create: const newDiv = document.createElement('div');
insert: document.body.appendChild(newDiv);
=================================================================================================================================================================================
3. What is Event Bubbling? And how does it work?
the event starts at the target like a button and "bubbles" up to its parents like an air bubble in water, when we click a button, we are not just clicking the button we are also clicking the div it's inside, the body, and the whole html document.
=================================================================================================================================================================================
4. What is Event Delegation in JavaScript? Why is it useful?
since events bubble up instead of putting a click listener on various different list items like <li>, we put one listener on the parent <ul>
If I add a new <li> later, the parent's listener will still catch clicks on it.
=================================================================================================================================================================================
5. What is the difference between preventDefault() and stopPropagation() methods?
preventDefault(): tells the browser to stop doing its default work.
stopPropagation(): tells the event to stop bubbling up. it prevents the parents from knowing the click happened.