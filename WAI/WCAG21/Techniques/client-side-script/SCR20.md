-   [Contents](https://www.w3.org/WAI/WCAG21/Techniques/#techniques "Table of Contents")
-   [Intro](https://www.w3.org/WAI/WCAG21/Techniques/#introduction "Introduction to Techniques")
-   [Previous Technique: SCR19](SCR19)
-   [Next Technique: SCR21](SCR21)

On this page:

-   [Important Information about Techniques](#important-information)
-   [Applicability](#applicability)
-   [Description](#description)
-   [Examples](#examples)
-   [Related Resources](#resources)
-   [Related Techniques](#related)
-   [Tests](#tests)

Using both keyboard and other device-specific functions
=======================================================

Important Information about Techniques
--------------------------------------

See [Understanding Techniques for WCAG Success Criteria](https://www.w3.org/WAI/WCAG21/Understanding/understanding-techniques) for important information about the usage of these informative techniques and how they relate to the normative WCAG 2.1 success criteria. The Applicability section explains the scope of the technique, and the presence of techniques for a specific technology does not imply that the technology can be used in all situations to create content that meets WCAG 2.1.

Applicability
-------------

Applies to all content that uses Script to implement functionality.

This technique relates to [Success Criterion 2.1.1: Keyboard](https://www.w3.org/WAI/WCAG21/Understanding/keyboard) (Sufficient when used with [G90: Providing keyboard-triggered event handlers](../general/G90)).

Description
-----------

The objective of this technique is to illustrate the use of both keyboard-specific and mouse-specific events with code that has a scripting function associated with an event. Using both keyboard-specific and mouse-specific events together ensures that content can be operated by a wide range of devices. For example, a script may perform the same action when a keypress is detected that is performed when a mouse button is clicked. This technique goes beyond the Success Criterion requirement for keyboard access by including not only keyboard access but access using other devices as well.

In JavaScript, commonly used event handlers include, onblur, onchange, onclick, ondblclick, onfocus, onkeydown, onkeypress, onkeyup, onload, onmousedown, onmousemove, onmouseout, onmouseover, onmouseup, onreset, onselect, onsubmit, onunload. Some mouse-specific functions have a logical corresponding keyboard-specific function (such as 'onmouseover' and 'onfocus'). A keyboard event handler should be provided that executes the same function as the mouse event handler.

The following table suggests keyboard event handlers to pair mouse event handlers.

<table><caption>Device Handler Correspondences</caption><thead><tr class="header"><th>Use...</th><th>...with</th></tr></thead><tbody><tr class="odd"><td>mousedown</td><td>keydown</td></tr><tr class="even"><td>mouseup</td><td>keyup</td></tr><tr class="odd"><td>click <sup>[1]</sup></td><td>keypress <sup>[2]</sup></td></tr><tr class="even"><td>mouseover</td><td>focus</td></tr><tr class="odd"><td>mouseout</td><td>blur</td></tr></tbody></table>

<sup>1</sup> Although click is in principle a mouse event handler, most HTML and XHTML user agents also process this event when a native HTML control (e.g. a button or a link) is activated, regardless of whether it was activated with the mouse or the keyboard. In practice, therefore, it is not necessary to duplicate this event when adding handlers to natively focusable HTML elements. However, it is necessary when adding handlers to other events, such as in Example 2 below.

<sup>2</sup> Since the keypress event handler reacts to any key, the event handler function should check first to ensure the Enter key was pressed before proceeding to handle the event. Otherwise, the event handler will run each time the user presses any key, even the tab key to leave the control, and this is usually not desirable.

Some mouse-specific functions (such as dblclick and mousemove) do not have a corresponding keyboard-specific function. This means that some functions may need to be implemented differently for each device (for example, including a series of buttons to execute, via keyboard, the equivalent mouse-specific functions implemented).

Examples
--------

### Example 1

In this example of an image link, the image is changed when the user positions the pointer over the image. To provide keyboard users with a similar experience, the image is also changed when the user tabs to it.

    <a href="menu.php" onmouseover="swapImageOn('menu')" onfocus="swapImageOn('menu')" 
    onmouseout="swapImageOff('menu')" onblur="swapImageOff('menu')"> 
    <img id="menu" src="menu_off.gif" alt="Menu" /> 
    </a>

### Example 2

This example shows a custom image control for which both the mouse and the keyboard can be used to activate the function. The mouse event onclick is duplicated by an appropriate keyboard event onkeypress. The tabindex attribute ensures that the keyboard will have a tab stop on the image. Note that in this example, the nextPage() function should check that the keyboard key pressed was Enter, otherwise it will respond to all keyboard actions while the image has focus, which is not the desired behavior.

    <img onclick="nextPage();" onkeypress="nextPage();" tabindex="0" src="arrow.gif" 
    alt="Go to next page"> 

Note

This example uses tabindex on an img element. Even though this is currently invalid, it is provided as a transitional technique to make this function work. Custom controls like this should also use WAI-ARIA to expose the role and state of the control.

Resources
---------

Resources are for information purposes only, no endorsement implied.

-   [Overview of Creating Accessible JavaScript](http://webaim.org/techniques/javascript/)

Related Techniques
------------------

-   [G90: Providing keyboard-triggered event handlers](https://www.w3.org/WAI/WCAG21/Techniques/general/G90)

Tests
-----

### Procedure

1.  Find all interactive functionality
2.  Check that all interactive functionality can be accessed using the keyboard alone

### Expected Results

-   \#2 is true
