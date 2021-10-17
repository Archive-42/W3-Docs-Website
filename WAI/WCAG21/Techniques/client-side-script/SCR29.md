-   [Contents](https://www.w3.org/WAI/WCAG21/Techniques/#techniques "Table of Contents")
-   [Intro](https://www.w3.org/WAI/WCAG21/Techniques/#introduction "Introduction to Techniques")
-   [Previous Technique: SCR28](SCR28)
-   [Next Technique: SCR30](SCR30)

On this page:

-   [Important Information about Techniques](#important-information)
-   [Applicability](#applicability)
-   [Description](#description)
-   [Examples](#examples)
-   [Related Resources](#resources)
-   [Related Techniques](#related)
-   [Tests](#tests)

Adding keyboard-accessible actions to static HTML elements
==========================================================

Important Information about Techniques
--------------------------------------

See [Understanding Techniques for WCAG Success Criteria](https://www.w3.org/WAI/WCAG21/Understanding/understanding-techniques) for important information about the usage of these informative techniques and how they relate to the normative WCAG 2.1 success criteria. The Applicability section explains the scope of the technique, and the presence of techniques for a specific technology does not imply that the technology can be used in all situations to create content that meets WCAG 2.1.

Applicability
-------------

HTML and XHTML, Script

This technique relates to [Success Criterion 2.1.1: Keyboard](https://www.w3.org/WAI/WCAG21/Understanding/keyboard) (Advisory).

Description
-----------

The objective of this technique is to demonstrate how to provide keyboard access to a user interface control that is implemented by actions to static HTML elements such as div or span. This technique ensures that the element is focusable by setting the tabindex attribute, and it ensures that the action can be triggered from the keyboard by providing an onkeyup or onkeypress handler in addition to an onclick handler.

When the tabindex attribute has the value 0, the element can be focused via the keyboard and is included in the tab order of the document. When the tabindex attribute has the value -1, the element cannot be tabbed to, but focus can be set programmatically, using element.focus().

Because static HTML elements do not have actions associated with them, it is not possible to provide a backup implementation or explanation in environments in which scripting is not available. This technique should only be used in environments in which client-side scripting can be relied upon.

Note

Such user interface controls must still satisfy Success Criterion 4.1.2. Applying this technique without also providing role, name, and state information about the user interface control will results in Failure F59, Failure of Success Criterion 4.1.2 due to using script to make div or span a user interface control in HTML.

Examples
--------

### Example 1: Adding a JavaScript action to a div element

The div element on the page is given a unique id attribute and a tabindex attribute with value 0. A script uses the Document Object Model (DOM) to find the div element by its id and add the onclick handler and the onkeyup handler. The onkeyup handler will invoke the action when the Enter key is pressed. Note that the div element must be loaded into the DOM before it can be found and modified. This is usually accomplished by calling the script from the onload event of the body element. The script to add the event handlers will only execute if the user agent supports and has JavaScript enabled.

    ...
    <script type="text/javascript">
     // this is the function to perform the action. This simple example toggles a message.
     function doSomething(event) {
       var msg=document.getElementById("message");
       msg.style.display = msg.style.display=="none" ? "" : "none";
       //return false from the function to make certain that the href of the link does not get invoked
       return false;
     }
     // this is the function to perform the action when the Enter key has been pressed.  
     function doSomethingOnEnter(event) {
       var key = 0;
       // Determine the key pressed, depending on whether window.event or the event object is in use
       if (window.event) {
         key = window.event.keyCode;
       } else if (event) {
         key = event.keyCode;
       }
       // Was the Enter or Space key pressed?
       if (key == 13 || key == 32) {
         return doSomething(event);
       } 
       // The event has not been handled, so return true
       return true;
     }
     // This setUpActions() function must be called to set the onclick and onkeyup event handlers onto the existing 
     // div element. This function must be called after the div element with id="active" has been loaded into the DOM.
     // In this example the setUpActions() function is called from the onload event for the body element.
     function setUpActions() {
       // get the div object
       var active=document.getElementById("active");
       // assign the onclick handler to the object.
       active.onclick=doSomething;
       // assign the onkeyup handler to the object.
       active.onkeyup=doSomethingOnEnter;
     }
     </script>

     <body onload="setUpActions();">
     <p>Here is the link to modify with a javascript action:</p>
     <div>
      <span id="active" tabindex="0" role="button" >Do Something</span>
     </div>
     <div aria-live="polite">
     <div id="message">Hello, world!</div>
     </div>
    ...

Working example of this code: [Creating Divs with Actions using JavaScript](../../working-examples/script-action-on-div/).

Resources
---------

Resources are for information purposes only, no endorsement implied.

-   HTML 4.01 [Scripts](https://www.w3.org/TR/REC-html40/interact/scripts.html)
-   HTML 4.01 [Giving focus to an element](https://www.w3.org/TR/REC-html40/interact/forms.html#h-17.11)
-   Accessible Rich Internet Applications (WAI-ARIA) [Global States and Properties](https://www.w3.org/TR/wai-aria/#global_states)
-   WAI-ARIA Primer, [Provision of the keyboard or input focus](https://www.w3.org/TR/wai-aria-primer/#focus)
-   [Document Object Model (DOM) Technical Reports](https://www.w3.org/DOM/DOMTR)
-   [Internet Explorer, HTML and DHTML Reference, tabIndex Property](https://msdn.microsoft.com/en-us/library/ms534654(VS.85).aspx)

Related Techniques
------------------

-   [SCR20: Using both keyboard and other device-specific functions](https://www.w3.org/WAI/WCAG21/Techniques/client-side-script/SCR20)
-   [SCR24: Using progressive enhancement to open new windows on user request](https://www.w3.org/WAI/WCAG21/Techniques/client-side-script/SCR24)
-   [SCR35: Making actions keyboard accessible by using the onclick event of anchors and buttons](https://www.w3.org/WAI/WCAG21/Techniques/client-side-script/SCR35)
-   [F59: Failure of Success Criterion 4.1.2 due to using script to make div or span a user interface control in HTML without providing a role for the control](https://www.w3.org/WAI/WCAG21/Techniques/failures/F59)

Tests
-----

### Procedure

In a user agent that supports Scripting:

1.  Click on the control with the mouse
2.  Check that the scripting action executes properly
3.  Check that it is possible to navigate to and give focus to the control via the keyboard
4.  Set keyboard focus to the control
5.  Check that pressing ENTER or SPACE invokes the scripting action.

### Expected Results

-   All of the checks are true
