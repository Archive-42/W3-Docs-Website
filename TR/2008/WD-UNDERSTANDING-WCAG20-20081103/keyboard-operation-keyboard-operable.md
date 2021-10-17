[<img src="http://www.w3.org/Icons/w3c_home" alt="W3C" width="72" height="48" />](http://www.w3.org/)

[Understanding WCAG 2.0](http://www.w3.org/TR/2008/WD-UNDERSTANDING-WCAG20-20081103/)

[Skip to Content (Press Enter)](#maincontent)

<span id="top"></span>

-   **[Contents](http://www.w3.org/TR/2008/WD-UNDERSTANDING-WCAG20-20081103/#contents "Table of Contents")**
-   **[Intro](intro.html "Introduction to Understanding WCAG 2.0")**
-   [**Previous:** Guideline 2.1 \[Keyboard Accessible\]](keyboard-operation.html "Understanding Guideline  2.1 [Keyboard Accessible]")
-   [**Next:** SC 2.1.2 \[No Keyboard Trap\]](keyboard-operation-trapping.html "Understanding SC  2.1.2 [No Keyboard Trap]")

On this page:

-   [Intent](#keyboard-operation-keyboard-operable-intent-head)
-   [Examples](#keyboard-operation-keyboard-operable-examples-head)
-   [Techniques & Failures](#keyboard-operation-keyboard-operable-techniques-head)
-   [Key terms](#key-terms)

<span id="maincontent">-</span>

<span id="keyboard-operation-keyboard-operable"></span> **Keyboard**<span class="screenreader">:</span> Understanding SC 2.1.1
==============================================================================================================================

> **[2.1.1](http://www.w3.org/TR/2008/PR-WCAG20-20081103/#keyboard-operation-keyboard-operable) Keyboard:** All <a href="#functiondef" class="termref">functionality</a> of the content is operable through a <a href="#keybrd-interfacedef" class="termref">keyboard interface</a> without requiring specific timings for individual keystrokes, except where the underlying function requires input that depends on the path of the user's movement and not just the endpoints. (Level A)
>
> Note 1: This exception relates to the underlying function, not the input technique. For example, if using handwriting to enter text, the input technique (handwriting) requires path dependent input but the underlying function (text input) does not.
>
> Note 2: This does not forbid and should not discourage providing mouse input or other input methods in addition to keyboard operation.

Intent of this Success Criterion
--------------------------------

The intent of this Success Criterion is to ensure that, wherever possible, content can be operated through a keyboard or keyboard interface (so an alternate keyboard can be used). When content can be operated through a keyboard or alternate keyboard, it is operable by people with no vision (who cannot use devices such as mice that require eye-hand coordination) as well as by people who must use alternate keyboards or input devices that act as keyboard emulators. Keyboard emulators include speech input software, sip-and-puff software, on-screen keyboards, scanning software and a variety of assistive technologies and alternate keyboards. Individuals with low vision also may have trouble tracking a pointer and find the use of software much easier (or only possible) if they can control it from the keyboard.

Examples of "specific timings for individual keystrokes" include situations where a user would be required to repeat or execute multiple keystrokes within a short period of time or where a key must be held down for an extended period before the keystroke is registered.

The phrase "except where the underlying function requires input that depends on the path of the user's movement and not just the endpoints" is included to separate those things that cannot reasonably be controlled from a keyboard.

Most actions carried out by a pointing device can also be done from the keyboard (for example, clicking, selecting, moving, sizing). However, there is a small class of input that is done with a pointing device that cannot be done from the keyboard in any known fashion without requiring an inordinate number of keystrokes. Free hand drawing, watercolor painting, and flying a helicopter through an obstacle course are all examples of functions that require path dependent input. Drawing straight lines, regular geometric shapes, re-sizing windows and dragging objects to a location (when the path to that location is not relevant) do not require path dependent input.

The use of MouseKeys would not satisfy this Success Criterion because it is not a keyboard equivalent to the application; it is a mouse equivalent (i.e. it looks like a mouse to the application).

It is assumed that the design of user input features takes into account that operating system keyboard accessibility features may be in use. For example, modifier key locking may be turned on. Content continues to function in such an environment, not sending events that would collide with the modifier key lock to produce unexpected results.

### Specific Benefits of Success Criterion 2.1.1:

-   People who are blind (who cannot use devices such as mice that require eye-hand coordination)

-   People with low vision (who may have trouble finding or tracking a pointer indicator on screen)

-   Some people with hand tremors find using a mouse very difficult and therefore usually use a keyboard

Examples of Success Criterion 2.1.1
-----------------------------------

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

Techniques and Failures for Success Criterion 2.1.1 - Keyboard
--------------------------------------------------------------

Each numbered item in this section represents a technique or combination of techniques that the WCAG Working Group deems sufficient for meeting this Success Criterion. The techniques listed only satisfy the Success Criterion if all of the [WCAG 2.0 conformance requirements](http://www.w3.org/TR/2008/PR-WCAG20-20081103/#conformance-reqs) have been met.

### Sufficient Techniques

1.  Ensuring keyboard control by using one of the following techniques.

    -   [H91: Using HTML form controls and links](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/H91) (HTML)

2.  [G90: Providing keyboard-triggered event handlers](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G90) using one of the following techniques:

    -   [SCR20: Using both keyboard and other device-specific functions](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/SCR20) (Scripting)

    -   [SCR35: Making actions keyboard accessible by using the onclick event of anchors and buttons](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/SCR35) (Scripting)

    -   [SCR2: Using redundant keyboard and mouse event handlers](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/SCR2) (Scripting)

### Additional Techniques (Advisory) for 2.1.1

Although not required for conformance, the following additional techniques should be considered in order to make content more accessible. Not all techniques can be used or would be effective in all situations.

-   Using XHTML role, state, and value attributes if repurposing static elements as interactive user interface components (future link) AND [SCR29: Adding keyboard-accessible actions to static HTML elements](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/SCR29) (Scripting)

-   Providing keyboard shortcuts to important links and form controls (future link)

-   Using unique letter combinations to begin each item of a list (future link)

-   Choosing the most abstract event handler (future link) (Scripting)

-   Using the onactivate event (future link) (Scripting)

-   Avoiding use of common user-agent keyboard commands for other purposes (future link)

### Common Failures for SC 2.1.1

The following are common mistakes that are considered failures of Success Criterion 2.1.1 by the WCAG Working Group.

-   [F54: Failure of Success Criterion 2.1.1 due to using only pointing-device-specific event handlers (including gesture) for a function](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/F54)

-   [F55: Failure of Success Criteria 2.1.1, 2.4.7, and 3.2.1 due to using script to remove focus when focus is received](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/F55)

-   [F42: Failure of Success Criterion 1.3.1 and 2.1.1 due to using scripting events to emulate links in a way that is not programmatically determinable](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/F42)

Key Terms
---------

 <span id="functiondef"></span> functionality  
<a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#processdef" class="termref">processes</a> and outcomes achievable through user action

 <span id="keybrd-interfacedef"></span> keyboard interface  
interface used by software to obtain keystroke input

Note 1: A keyboard interface allows users to provide keystroke input to programs even if the native technology does not contain a keyboard.

Example: A touchscreen PDA has a keyboard interface built into its operating system as well as a connector for external keyboards. Applications on the PDA can use the interface to obtain keyboard input either from an external keyboard or from other applications that provide simulated keyboard output, such as handwriting interpreters or speech-to-text applications with "keyboard emulation" functionality.

Note 2: Operation of the application (or parts of the application) through a keyboard-operated mouse emulator, such as MouseKeys, does not qualify as operation through a keyboard interface because operation of the program is through its pointing device interface, not through its keyboard interface.

-   **[Top](#top)**
-   **[Contents](http://www.w3.org/TR/2008/WD-UNDERSTANDING-WCAG20-20081103/#contents "Table of Contents")**
-   **[Intro](intro.html "Introduction to Understanding WCAG 2.0")**
-   [**Previous:** Guideline 2.1 \[Keyboard Accessible\]](keyboard-operation.html "Understanding Guideline  2.1 [Keyboard Accessible]")
-   [**Next:** SC 2.1.2 \[No Keyboard Trap\]](keyboard-operation-trapping.html "Understanding SC  2.1.2 [No Keyboard Trap]")

This Web page is part of [Understanding WCAG 2.0: A guide to understanding and implementing WCAG 2.0](http://www.w3.org/TR/2008/WD-UNDERSTANDING-WCAG20-20081103/). The entire document is also available as a [single HTML file](complete.html). See the [Overview of WCAG 2.0 Documents](http://www.w3.org/WAI/intro/wcag20) for an explanation of how this document fits in with other Web Content Accessibility Guidelines (WCAG) 2.0 documents.

[Copyright](http://www.w3.org/Consortium/Legal/ipr-notice#Copyright) © 2008 [W3C](http://www.w3.org/)<sup>®</sup> ([MIT](http://www.csail.mit.edu/), [ERCIM](http://www.ercim.org/), [Keio](http://www.keio.ac.jp/)), All Rights Reserved. W3C [liability](http://www.w3.org/Consortium/Legal/ipr-notice#Legal_Disclaimer), [trademark](http://www.w3.org/Consortium/Legal/ipr-notice#W3C_Trademarks) and [document use](http://www.w3.org/Consortium/Legal/copyright-documents) rules apply.
