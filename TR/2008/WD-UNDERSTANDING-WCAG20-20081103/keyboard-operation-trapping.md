[<img src="http://www.w3.org/Icons/w3c_home" alt="W3C" width="72" height="48" />](http://www.w3.org/)

[Understanding WCAG 2.0](http://www.w3.org/TR/2008/WD-UNDERSTANDING-WCAG20-20081103/)

[Skip to Content (Press Enter)](#maincontent)

<span id="top"></span>

-   **[Contents](http://www.w3.org/TR/2008/WD-UNDERSTANDING-WCAG20-20081103/#contents "Table of Contents")**
-   **[Intro](intro.html "Introduction to Understanding WCAG 2.0")**
-   [**Previous:** SC 2.1.1 \[Keyboard\]](keyboard-operation-keyboard-operable.html "Understanding SC  2.1.1 [Keyboard]")
-   [**Next:** SC 2.1.3 \[Keyboard (No Exception)\]](keyboard-operation-all-funcs.html "Understanding SC  2.1.3 [Keyboard (No Exception)]")

On this page:

-   [Intent](#keyboard-operation-trapping-intent-head)
-   [Examples](#keyboard-operation-trapping-examples-head)
-   [Techniques & Failures](#keyboard-operation-trapping-techniques-head)
-   [Key terms](#key-terms)

<span id="maincontent">-</span>

<span id="keyboard-operation-trapping"></span> **No Keyboard Trap**<span class="screenreader">:</span> Understanding SC 2.1.2
=============================================================================================================================

> **[2.1.2](http://www.w3.org/TR/2008/PR-WCAG20-20081103/#keyboard-operation-trapping) No Keyboard Trap:** If keyboard focus can be moved to a component of the page using a <a href="#keybrd-interfacedef" class="termref">keyboard interface</a>, then focus can be moved away from that component using only a keyboard interface, and, if it requires more than unmodified arrow or tab keys or other standard exit methods, the user is advised of the method for moving focus away. (Level A)
>
> Note: Since any content that does not meet this success criterion can interfere with a user's ability to use the whole page, all content on the Web page (whether it is used to meet other success criteria or not) must meet this success criterion. See *[Conformance Requirement 5: Non-Interference](http://www.w3.org/TR/2008/PR-WCAG20-20081103/#cc5)*.

Intent of this Success Criterion
--------------------------------

The intent of this Success Criterion is to ensure that that content does not "trap" keyboard focus within subsections of content on a Web page. This is a common problem when multiple formats are combined within a page and rendered using plug-ins or embedded applications.

There may be times when the functionality of the Web page restricts the focus to a subsection of the content, as long as the user knows how to leave that state and "untrap" the focus.

### Specific Benefits of Success Criterion 2.1.2:

-   People who rely on a keyboard or keyboard interface to use the Web including people who are blind and people with physical disabilities.

Examples of Success Criterion 2.1.2
-----------------------------------

-   **A calendar widget**

    A calendar widget allows users to add, remove or update items in their calendar using the keyboard. The controls in the widget are part of the tab order within the Web page, allowing users to tab through the controls in the widget as well as to any links or controls that follow.

-   **A puzzle applet**

    Once a user tabs into an applet, further tabs and other keystrokes are handled by the applet. Instructions describing the keystroke used to exit the applet are provided prior to the applet as well as within the applet itself.

-   **A modal dialog box**

    A Web application brings up a dialog box. At the bottom of the dialog are two buttons, Cancel and OK. When the dialog has been opened, focus is trapped within the dialog; tabbing from the last control in the dialog takes focus to the first control in the dialog. The dialog is dismissed by activating the Cancel button or the OK button.

Techniques and Failures for Success Criterion 2.1.2 - No Keyboard Trap
----------------------------------------------------------------------

Each numbered item in this section represents a technique or combination of techniques that the WCAG Working Group deems sufficient for meeting this Success Criterion. The techniques listed only satisfy the Success Criterion if all of the [WCAG 2.0 conformance requirements](http://www.w3.org/TR/2008/PR-WCAG20-20081103/#conformance-reqs) have been met.

### Sufficient Techniques

1.  [G21: Ensuring that users are not trapped in content](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G21)

### Additional Techniques (Advisory) for 2.1.2

Although not required for conformance, the following additional techniques should be considered in order to make content more accessible. Not all techniques can be used or would be effective in all situations.

(none currently documented)

### Common Failures for SC 2.1.2

The following are common mistakes that are considered failures of Success Criterion 2.1.2 by the WCAG Working Group.

-   [F10: Failure of Success Criterion 2.1.2 and Conformance Requirement 5 due to combining multiple content formats in a way that traps users inside one format type](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/F10)

Key Terms
---------

 <span id="keybrd-interfacedef"></span> keyboard interface  
interface used by software to obtain keystroke input

Note 1: A keyboard interface allows users to provide keystroke input to programs even if the native technology does not contain a keyboard.

Example: A touchscreen PDA has a keyboard interface built into its operating system as well as a connector for external keyboards. Applications on the PDA can use the interface to obtain keyboard input either from an external keyboard or from other applications that provide simulated keyboard output, such as handwriting interpreters or speech-to-text applications with "keyboard emulation" functionality.

Note 2: Operation of the application (or parts of the application) through a keyboard-operated mouse emulator, such as MouseKeys, does not qualify as operation through a keyboard interface because operation of the program is through its pointing device interface, not through its keyboard interface.

-   **[Top](#top)**
-   **[Contents](http://www.w3.org/TR/2008/WD-UNDERSTANDING-WCAG20-20081103/#contents "Table of Contents")**
-   **[Intro](intro.html "Introduction to Understanding WCAG 2.0")**
-   [**Previous:** SC 2.1.1 \[Keyboard\]](keyboard-operation-keyboard-operable.html "Understanding SC  2.1.1 [Keyboard]")
-   [**Next:** SC 2.1.3 \[Keyboard (No Exception)\]](keyboard-operation-all-funcs.html "Understanding SC  2.1.3 [Keyboard (No Exception)]")

This Web page is part of [Understanding WCAG 2.0: A guide to understanding and implementing WCAG 2.0](http://www.w3.org/TR/2008/WD-UNDERSTANDING-WCAG20-20081103/). The entire document is also available as a [single HTML file](complete.html). See the [Overview of WCAG 2.0 Documents](http://www.w3.org/WAI/intro/wcag20) for an explanation of how this document fits in with other Web Content Accessibility Guidelines (WCAG) 2.0 documents.

[Copyright](http://www.w3.org/Consortium/Legal/ipr-notice#Copyright) © 2008 [W3C](http://www.w3.org/)<sup>®</sup> ([MIT](http://www.csail.mit.edu/), [ERCIM](http://www.ercim.org/), [Keio](http://www.keio.ac.jp/)), All Rights Reserved. W3C [liability](http://www.w3.org/Consortium/Legal/ipr-notice#Legal_Disclaimer), [trademark](http://www.w3.org/Consortium/Legal/ipr-notice#W3C_Trademarks) and [document use](http://www.w3.org/Consortium/Legal/copyright-documents) rules apply.
