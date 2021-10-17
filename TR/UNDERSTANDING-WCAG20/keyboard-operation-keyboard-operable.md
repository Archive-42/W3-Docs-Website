[<img src="https://www.w3.org/StyleSheets/TR/2016/logos/W3C" alt="W3C" width="72" height="48" />](http://www.w3.org/)

[Understanding WCAG 2.0](Overview.html)

[Skip to Content (Press Enter)](#maincontent)

<span id="top"></span>

-   **[Contents](Overview.html#contents "Table of Contents")**
-   **[Intro](intro.html "Introduction to Understanding WCAG 2.0")**
-   [**Previous:** Guideline 2.1 \[Keyboard Accessible\]](keyboard-operation.html "Understanding Guideline  2.1 [Keyboard Accessible]")
-   [**Next:** SC 2.1.2 \[No Keyboard Trap\]](keyboard-operation-trapping.html "Understanding SC  2.1.2 [No Keyboard Trap]")

On this page:

-   [Intent](#keyboard-operation-keyboard-operable-intent-head)
-   [Examples](#keyboard-operation-keyboard-operable-examples-head)
-   [Related Resources](#keyboard-operation-keyboard-operable-resources-head)
-   [Techniques & Failures](#keyboard-operation-keyboard-operable-techniques-head)
-   [Key terms](#key-terms)

<span id="maincontent">-</span>

<span id="keyboard-operation-keyboard-operable"></span> **Keyboard**<span class="screenreader">:</span> Understanding SC 2.1.1
==============================================================================================================================

> **[2.1.1](http://www.w3.org/TR/2008/REC-WCAG20-20081211/#keyboard-operation-keyboard-operable) Keyboard:** All <a href="#functiondef" class="termref">functionality</a> of the content is operable through a <a href="#keybrd-interfacedef" class="termref">keyboard interface</a> without requiring specific timings for individual keystrokes, except where the underlying function requires input that depends on the path of the user's movement and not just the endpoints. (Level A)
>
> *Note 1:* This exception relates to the underlying function, not the input technique. For example, if using handwriting to enter text, the input technique (handwriting) requires path-dependent input but the underlying function (text input) does not.
>
> *Note 2:* This does not forbid and should not discourage providing mouse input or other input methods in addition to keyboard operation.

Intent of this Success Criterion
--------------------------------

The intent of this Success Criterion is to ensure that, wherever possible, content can be operated through a keyboard or keyboard interface (so an alternate keyboard can be used). When content can be operated through a keyboard or alternate keyboard, it is operable by people with no vision (who cannot use devices such as mice that require eye-hand coordination) as well as by people who must use alternate keyboards or input devices that act as keyboard emulators. Keyboard emulators include speech input software, sip-and-puff software, on-screen keyboards, scanning software and a variety of assistive technologies and alternate keyboards. Individuals with low vision also may have trouble tracking a pointer and find the use of software much easier (or only possible) if they can control it from the keyboard.

Examples of "specific timings for individual keystrokes" include situations where a user would be required to repeat or execute multiple keystrokes within a short period of time or where a key must be held down for an extended period before the keystroke is registered.

The phrase "except where the underlying function requires input that depends on the path of the user's movement and not just the endpoints" is included to separate those things that cannot reasonably be controlled from a keyboard.

Most actions carried out by a pointing device can also be done from the keyboard (for example, clicking, selecting, moving, sizing). However, there is a small class of input that is done with a pointing device that cannot be done from the keyboard in any known fashion without requiring an inordinate number of keystrokes. Free hand drawing, watercolor painting, and flying a helicopter through an obstacle course are all examples of functions that require path dependent input. Drawing straight lines, regular geometric shapes, re-sizing windows and dragging objects to a location (when the path to that location is not relevant) do not require path dependent input.

The use of MouseKeys would not satisfy this Success Criterion because it is not a keyboard equivalent to the application; it is a mouse equivalent (i.e., it looks like a mouse to the application).

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

Related Resources
-----------------

Resources are for information purposes only, no endorsement implied.

(none currently documented)

Techniques and Failures for Success Criterion 2.1.1 - Keyboard
--------------------------------------------------------------

Each numbered item in this section represents a technique or combination of techniques that the WCAG Working Group deems sufficient for meeting this Success Criterion. However, it is not necessary to use these particular techniques. For information on using other techniques, see [Understanding Techniques for WCAG Success Criteria](http://www.w3.org/TR/2016/NOTE-UNDERSTANDING-WCAG20-20161007/understanding-techniques.html), particularly the "Other Techniques" section.

### Sufficient Techniques

1.  <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/G202" class="tech-ref">G202: Ensuring keyboard control for all functionality</a>

2.  Ensuring keyboard control by using one of the following techniques.

    -   <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/H91" class="tech-ref">H91: Using HTML form controls and links</a> (HTML)

    -   <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/PDF3" class="tech-ref">PDF3: Ensuring correct tab and reading order in PDF documents</a> (PDF)

    -   <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/PDF11" class="tech-ref">PDF11: Providing links and link text using the Link annotation and the /Link structure element in PDF documents</a> (PDF)

    -   <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/PDF23" class="tech-ref">PDF23: Providing interactive form controls in PDF documents</a> (PDF)

    -   <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/SL15" class="tech-ref">SL15: Providing Keyboard Shortcuts that Work Across the Entire Silverlight Application</a> (Silverlight)

3.  <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/G90" class="tech-ref">G90: Providing keyboard-triggered event handlers</a> using one of the following techniques:

    -   <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/SCR20" class="tech-ref">SCR20: Using both keyboard and other device-specific functions</a> (Scripting)

    -   <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/SCR35" class="tech-ref">SCR35: Making actions keyboard accessible by using the onclick event of anchors and buttons</a> (Scripting)

    -   <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/SCR2" class="tech-ref">SCR2: Using redundant keyboard and mouse event handlers</a> (Scripting)

    -   <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/SL9" class="tech-ref">SL9: Handling Key Events to Enable Keyboard Functionality in Silverlight</a> (Silverlight)

    -   <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/SL14" class="tech-ref">SL14: Providing Custom Control Key Handling for Keyboard Functionality in Silverlight</a> (Silverlight)

4.  <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/FLASH17" class="tech-ref">FLASH17: Providing keyboard access to a Flash object and avoiding a keyboard trap</a> (Flash) **AND** using the following techniques as applicable:

    -   <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/FLASH22" class="tech-ref">FLASH22: Adding keyboard-accessible actions to static elements</a> (Flash)

    -   <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/FLASH16" class="tech-ref">FLASH16: Making actions keyboard accessible by using the click event on standard components</a> (Flash)

    -   <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/FLASH14" class="tech-ref">FLASH14: Using redundant keyboard and mouse event handlers in Flash</a> (Flash)

### Additional Techniques (Advisory) for 2.1.1

Although not required for conformance, the following additional techniques should be considered in order to make content more accessible. Not all techniques can be used or would be effective in all situations.

-   Using XHTML role, state, and value attributes if repurposing static elements as interactive user interface components (future link) AND <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/SCR29" class="tech-ref">SCR29: Adding keyboard-accessible actions to static HTML elements</a> (Scripting)

-   Providing keyboard shortcuts to important links and form controls (future link)

-   Using unique letter combinations to begin each item of a list (future link)

-   Choosing the most abstract event handler (future link) (Scripting)

-   Using the onactivate event (future link) (Scripting)

-   Avoiding use of common user-agent keyboard commands for other purposes (future link)

### Common Failures for SC 2.1.1

The following are common mistakes that are considered failures of Success Criterion 2.1.1 by the WCAG Working Group.

-   <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/F54" class="tech-ref">F54: Failure of Success Criterion 2.1.1 due to using only pointing-device-specific event handlers (including gesture) for a function</a>

-   <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/F55" class="tech-ref">F55: Failure of Success Criteria 2.1.1, 2.4.7, and 3.2.1 due to using script to remove focus when focus is received</a>

-   <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/F42" class="tech-ref">F42: Failure of Success Criteria 1.3.1, 2.1.1, 2.1.3, or 4.1.2 when emulating links</a>

Key Terms
---------

 <span id="functiondef"></span> functionality  
<a href="http://www.w3.org/TR/2008/REC-WCAG20-20081211/#processdef" class="termref">processes</a> and outcomes achievable through user action

 <span id="keybrd-interfacedef"></span> keyboard interface  
interface used by software to obtain keystroke input

*Note 1:* A keyboard interface allows users to provide keystroke input to programs even if the native technology does not contain a keyboard.

*Example:* A touchscreen PDA has a keyboard interface built into its operating system as well as a connector for external keyboards. Applications on the PDA can use the interface to obtain keyboard input either from an external keyboard or from other applications that provide simulated keyboard output, such as handwriting interpreters or speech-to-text applications with "keyboard emulation" functionality.

*Note 2:* Operation of the application (or parts of the application) through a keyboard-operated mouse emulator, such as MouseKeys, does not qualify as operation through a keyboard interface because operation of the program is through its pointing device interface, not through its keyboard interface.

-   **[Top](#top)**
-   **[Contents](Overview.html#contents "Table of Contents")**
-   **[Intro](intro.html "Introduction to Understanding WCAG 2.0")**
-   [**Previous:** Guideline 2.1 \[Keyboard Accessible\]](keyboard-operation.html "Understanding Guideline  2.1 [Keyboard Accessible]")
-   [**Next:** SC 2.1.2 \[No Keyboard Trap\]](keyboard-operation-trapping.html "Understanding SC  2.1.2 [No Keyboard Trap]")

This Web page is part of [Understanding WCAG 2.0: A guide to understanding and implementing WCAG 2.0](Overview.html) (see the [latest version of this document](http://www.w3.org/TR/UNDERSTANDING-WCAG20/keyboard-operation-keyboard-operable.html)). The entire document is also available as a [single HTML file](complete.html). See the [The WCAG 2.0 Documents](http://www.w3.org/WAI/intro/wcag20) for an explanation of how this document fits in with other Web Content Accessibility Guidelines (WCAG) 2.0 documents. To send public comments, please follow the [Instructions for Commenting on WCAG 2.0 Documents](http://www.w3.org/WAI/WCAG20/comments/).

[Copyright](http://www.w3.org/Consortium/Legal/ipr-notice#Copyright) © 2016 [W3C](http://www.w3.org/)<sup>®</sup> ([MIT](http://www.csail.mit.edu/), [ERCIM](http://www.ercim.eu/), [Keio](http://www.keio.ac.jp/), [Beihang](http://ev.buaa.edu.cn/)). W3C [liability](http://www.w3.org/Consortium/Legal/ipr-notice#Legal_Disclaimer), [trademark](http://www.w3.org/Consortium/Legal/ipr-notice#W3C_Trademarks) and [document use](http://www.w3.org/Consortium/Legal/copyright-documents) rules apply.
