-   [Contents](. "Table of Contents")
-   [GL: Keyboard Accessible](keyboard-accessible)
-   [Previous SC: Content on Hover or Focus](content-on-hover-or-focus)
-   [Next SC: No Keyboard Trap](no-keyboard-trap)

On this page:

-   [Intent](#intent)
-   [Benefits](#benefits)
-   [Examples](#examples)
-   [Techniques](#techniques)
-   [Key Terms](#key-terms)

Understanding Success Criterion 2.1.1: Keyboard
===============================================

> Success Criterion [2.1.1 Keyboard](https://www.w3.org/TR/WCAG21/#keyboard) (Level A): All [functionality](#dfn-functionality) of the content is operable through a [keyboard interface](#dfn-keyboard-interface) without requiring specific timings for individual keystrokes, except where the underlying function requires input that depends on the path of the user's movement and not just the endpoints.
>
> This exception relates to the underlying function, not the input technique. For example, if using handwriting to enter text, the input technique (handwriting) requires path-dependent input but the underlying function (text input) does not.
>
> This does not forbid and should not discourage providing mouse input or other input methods in addition to keyboard operation.

Intent
------

The intent of this Success Criterion is to ensure that, wherever possible, content can be operated through a keyboard or keyboard interface (so an alternate keyboard can be used). When content can be operated through a keyboard or alternate keyboard, it is operable by people with no vision (who cannot use devices such as mice that require eye-hand coordination) as well as by people who must use alternate keyboards or input devices that act as keyboard emulators. Keyboard emulators include speech input software, sip-and-puff software, on-screen keyboards, scanning software and a variety of assistive technologies and alternate keyboards. Individuals with low vision also may have trouble tracking a pointer and find the use of software much easier (or only possible) if they can control it from the keyboard.

Examples of "specific timings for individual keystrokes" include situations where a user would be required to repeat or execute multiple keystrokes within a short period of time or where a key must be held down for an extended period before the keystroke is registered.

The phrase "except where the underlying function requires input that depends on the path of the user's movement and not just the endpoints" is included to separate those things that cannot reasonably be controlled from a keyboard.

Most actions carried out by a pointing device can also be done from the keyboard (for example, clicking, selecting, moving, sizing). However, there is a small class of input that is done with a pointing device that cannot be done from the keyboard in any known fashion without requiring an inordinate number of keystrokes. Free hand drawing, watercolor painting, and flying a helicopter through an obstacle course are all examples of functions that require path dependent input. Drawing straight lines, regular geometric shapes, re-sizing windows and dragging objects to a location (when the path to that location is not relevant) do not require path dependent input.

The use of MouseKeys would not satisfy this Success Criterion because it is not a keyboard equivalent to the application; it is a mouse equivalent (i.e., it looks like a mouse to the application).

It is assumed that the design of user input features takes into account that operating system keyboard accessibility features may be in use. For example, modifier key locking may be turned on. Content continues to function in such an environment, not sending events that would collide with the modifier key lock to produce unexpected results.

Benefits
--------

-   People who are blind (who cannot use devices such as mice that require eye-hand coordination)
-   People with low vision (who may have trouble finding or tracking a pointer indicator on screen)
-   Some people with hand tremors find using a mouse very difficult and therefore usually use a keyboard

Examples
--------

-   **Example 1: A drawing Program.**

    A drawing program allows users to create, size, position and rotate objects from the keyboard.

-   **Example 2: A drag and Drop Feature.**

    An application that uses drag and drop also supports "cut" and "paste" or form controls to move objects.

-   **Example 3: Moving between and connecting discrete points.**

    A connect-the-dots program allows the user to move between dots on a screen and use the spacebar to connect the current dot to the previous one.

-   **Example 4: Exception - Painting Program.**

    A watercolor painting program passes as an exception because the brush strokes vary depending on the speed and duration of the movements.

-   **Example 5: Exception - Model helicopter flight training simulator.**

    A model helicopter flight training simulator passes as an exception because the nature of the simulator is to teach real-time behavior of a model helicopter.

-   **Example 6: A PDA with an optional keyboard**

    A PDA device that is usually operated via a stylus has an optional keyboard that can be attached. The keyboard allows full Web browsing in standard fashion. The Web content is operable because it was designed to work with keyboard-only access.

Techniques
----------

Each numbered item in this section represents a technique or combination of techniques that the WCAG Working Group deems sufficient for meeting this Success Criterion. However, it is not necessary to use these particular techniques. For information on using other techniques, see [Understanding Techniques for WCAG Success Criteria](understanding-techniques), particularly the "Other Techniques" section.

### Sufficient Techniques

1.  <a href="https://www.w3.org/WAI/WCAG21/Techniques/general/G202" class="general">G202: Ensuring keyboard control for all functionality</a>
2.  Ensuring keyboard control by using one of the following techniques.

    -   <a href="https://www.w3.org/WAI/WCAG21/Techniques/html/H91" class="html">H91: Using HTML form controls and links</a>
    -   <a href="https://www.w3.org/WAI/WCAG21/Techniques/pdf/PDF3" class="pdf">PDF3: Ensuring correct tab and reading order in PDF documents</a>
    -   <a href="https://www.w3.org/WAI/WCAG21/Techniques/pdf/PDF11" class="pdf">PDF11: Providing links and link text using the Link annotation and the /Link structure element in PDF documents</a>
    -   <a href="https://www.w3.org/WAI/WCAG21/Techniques/pdf/PDF23" class="pdf">PDF23: Providing interactive form controls in PDF documents</a>
    -   <a href="https://www.w3.org/WAI/WCAG21/Techniques/silverlight/SL15" class="silverlight">SL15: Providing Keyboard Shortcuts that Work Across the Entire Silverlight Application</a>

3.  <a href="https://www.w3.org/WAI/WCAG21/Techniques/general/G90" class="general">G90: Providing keyboard-triggered event handlers</a> using one of the following techniques:

    -   <a href="https://www.w3.org/WAI/WCAG21/Techniques/client-side-script/SCR20" class="script">SCR20: Using both keyboard and other device-specific functions</a>
    -   <a href="https://www.w3.org/WAI/WCAG21/Techniques/client-side-script/SCR35" class="script">SCR35: Making actions keyboard accessible by using the onclick event of anchors and buttons</a>
    -   <a href="https://www.w3.org/WAI/WCAG21/Techniques/client-side-script/SCR2" class="script">SCR2: Using redundant keyboard and mouse event handlers</a>
    -   <a href="https://www.w3.org/WAI/WCAG21/Techniques/silverlight/SL9" class="silverlight">SL9: Handling Key Events to Enable Keyboard Functionality in Silverlight</a>
    -   <a href="https://www.w3.org/WAI/WCAG21/Techniques/silverlight/SL14" class="silverlight">SL14: Providing Custom Control Key Handling for Keyboard Functionality in Silverlight</a>

### Advisory Techniques

Although not required for conformance, the following additional techniques should be considered in order to make content more accessible. Not all techniques can be used or would be effective in all situations.

-   Using XHTML role, state, and value attributes if repurposing static elements as interactive user interface components (future link) AND <a href="https://www.w3.org/WAI/WCAG21/Techniques/client-side-script/SCR29" class="script">SCR29: Adding keyboard-accessible actions to static HTML elements</a>

### Failures

The following are common mistakes that are considered failures of this Success Criterion by the WCAG Working Group.

-   <a href="https://www.w3.org/WAI/WCAG21/Techniques/failures/F54" class="failure">F54: Failure of Success Criterion 2.1.1 due to using only pointing-device-specific event handlers (including gesture) for a function</a>
-   <a href="https://www.w3.org/WAI/WCAG21/Techniques/failures/F55" class="failure">F55: Failure of Success Criteria 2.1.1, 2.4.7, and 3.2.1 due to using script to remove focus when focus is received</a>
-   <a href="https://www.w3.org/WAI/WCAG21/Techniques/failures/F42" class="failure">F42: Failure of Success Criteria 1.3.1, 2.1.1, 2.1.3, or 4.1.2 when emulating links</a>

Key Terms
---------

functionality

[processes](#dfn-process) and outcomes achievable through user action

keyboard interface

interface used by software to obtain keystroke input

Note

A keyboard interface allows users to provide keystroke input to programs even if the native technology does not contain a keyboard.

A touchscreen PDA has a keyboard interface built into its operating system as well as a connector for external keyboards. Applications on the PDA can use the interface to obtain keyboard input either from an external keyboard or from other applications that provide simulated keyboard output, such as handwriting interpreters or speech-to-text applications with "keyboard emulation" functionality.

Note

Operation of the application (or parts of the application) through a keyboard-operated mouse emulator, such as MouseKeys, does not qualify as operation through a keyboard interface because operation of the program is through its pointing device interface, not through its keyboard interface.

process

series of user actions where each action is required in order to complete an activity

Successful use of a series of Web pages on a shopping site requires users to view alternative products, prices and offers, select products, submit an order, provide shipping information and provide payment information.

An account registration page requires successful completion of a Turing test before the registration form can be accessed.
