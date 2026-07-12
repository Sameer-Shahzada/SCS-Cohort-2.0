/* DOM performance optimization techniques: using DocumentFragment 
    to avoid unnecessary reflows and repaints.
*/
const ul  = document.querySelector("ul");
const space = document.createDocumentFragment();// an empty DocumentFragment, Think of it as 
                                                // a temporary container in memory.

for(let i = 0; i < 100000; i++) {
    const li = document.createElement("li");
    li.textContent = i;
    space.appendChild(li); // adds it to the DocumentFragment, not the webpage.
}

ul.appendChild(space);


/*

What is DocumentFragment?

A DocumentFragment is a lightweight, temporary container used to build DOM nodes off-screen before inserting them into the document.

Important properties:

It is not rendered.
It is not part of the DOM tree.
It can hold multiple elements.
When appended to the DOM, its children are moved into the document and the fragment is emptied.

Think of it like a tray that you load with items before carrying them to the table in one trip

------------------------------------------------------------------------------------------------

Why not append directly?
Suppose you wrote this:

for(let i = 0; i < 100000; i++) {
    const li = document.createElement("li");
    li.textContent = i;
    ul.appendChild(li);
}

Every iteration updates the real DOM.

appendChild()
↓

DOM changes
↓

Browser checks layout
↓

May repaint
↓

Next iteration...

This repeats 100,000 times.
That is expensive.

With DocumentFragment
Instead:

Create DocumentFragment

↓

Add 100000 elements to fragment

↓

Browser doesn't update UI

↓

Append fragment once

↓

Single DOM update

Only one DOM insertion occurs.
Much faster.

Visual Difference
Without DocumentFragment

Iteration 1
DOM updated

Iteration 2
DOM updated

Iteration 3
DOM updated

...

Iteration 100000
DOM updated

Possible thousands of layout calculations.

With DocumentFragment

Iteration 1
Memory only

Iteration 2
Memory only

Iteration 3
Memory only

...

Iteration 100000
Memory only

↓

One DOM update

Only one insertion into the live DOM.

What are Reflow and Repaint?
Reflow (Layout)

The browser recalculates the size and position of elements.

Example:

div.style.width = "500px";

The browser must determine where surrounding elements should be positioned.

Reflow is relatively expensive because it can affect many elements.

Repaint

The browser redraws pixels after a visual change that doesn't affect layout.

Example:

div.style.background = "red";

Only the appearance changes; the layout stays the same.

Repaint is generally cheaper than reflow.

Why does DocumentFragment help?

Because the browser does not recalculate layout while you're adding elements to the fragment.

Everything happens in memory.

Only when you execute

ul.appendChild(space);

does the browser update the live DOM.

This significantly reduces layout work.

Another Example

Without DocumentFragment:

const ul = document.querySelector("ul");

for(let i = 1; i <= 5; i++) {
    const li = document.createElement("li");
    li.textContent = i;
    ul.appendChild(li);
}

The DOM changes five separate times.

With DocumentFragment:

const fragment = document.createDocumentFragment();

for(let i = 1; i <= 5; i++) {
    const li = document.createElement("li");
    li.textContent = i;
    fragment.appendChild(li);
}

ul.appendChild(fragment);

The DOM changes only once.

Important Thing to Know

After:

ul.appendChild(fragment);

the fragment is emptied automatically.

For example:

console.log(fragment.childNodes.length);

Output: 0

because all its children have been moved into the <ul>.

Interview Answer (2-minute version)

What is DocumentFragment and why is it used?

DocumentFragment is a lightweight, temporary container that exists only in memory. It lets us create and 
organize multiple DOM elements without inserting them into the live document immediately. 
Since it isn't part of the rendered page, the browser doesn't perform layout or painting work while 
we build it. After all the elements are ready, we append the fragment to the DOM in a single operation. 
The browser moves all of the fragment's children into the target element and empties the fragment. 
This approach reduces repeated DOM updates, minimizes layout recalculations (reflows) and rendering 
work (repaints), and improves performance, especially when creating or inserting a large number of 
elements.

*/