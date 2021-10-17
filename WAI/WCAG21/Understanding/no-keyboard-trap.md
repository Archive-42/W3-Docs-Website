-   [Contents](. "Table of Contents")
-   [GL: Keyboard Accessible](keyboard-accessible)
-   [Previous SC: Keyboard](keyboard)
-   [Next SC: Keyboard (No Exception)](keyboard-no-exception)

On this page:

-   [Intent](#intent)
-   [Benefits](#benefits)
-   [Examples](#examples)
-   [Techniques](#techniques)
-   [Key Terms](#key-terms)

Understanding Success Criterion 2.1.2: No Keyboard Trap
=======================================================

> Success Criterion [2.1.2 No Keyboard Trap](https://www.w3.org/TR/WCAG21/#no-keyboard-trap) (Level A): If keyboard focus can be moved to a component of the page using a [keyboard interface](#dfn-keyboard-interface), then focus can be moved away from that component using only a keyboard interface, and, if it requires more than unmodified arrow or tab keys or other standard exit methods, the user is advised of the method for moving focus away.
>
> Since any content that does not meet this success criterion can interfere with a user's ability to use the whole page, all content on the Web page (whether it is used to meet other success criteria or not) must meet this success criterion. See [Conformance Requirement 5: Non-Interference](https://www.w3.org/TR/WCAG21/#cc5).

Intent
------

The intent of this Success Criterion is to ensure that that content does not "trap" keyboard focus within subsections of content on a Web page. This is a common problem when multiple formats are combined within a page and rendered using plug-ins or embedded applications.

There may be times when the functionality of the Web page restricts the focus to a subsection of the content, as long as the user knows how to leave that state and "untrap" the focus.

Benefits
--------

-   People who rely on a keyboard or keyboard interface to use the Web including people who are blind and people with physical disabilities.

Examples
--------

-   **A calendar widget**

    A calendar widget allows users to add, remove or update items in their calendar using the keyboard. The controls in the widget are part of the tab order within the Web page, allowing users to tab through the controls in the widget as well as to any links or controls that follow.

-   **A puzzle applet**

    Once a user tabs into an applet, further tabs and other keystrokes are handled by the applet. Instructions describing the keystroke used to exit the applet are provided prior to the applet as well as within the applet itself.

-   **A modal dialog box**

    A Web application brings up a dialog box. At the bottom of the dialog are two buttons, Cancel and OK. When the dialog has been opened, focus is trapped within the dialog; tabbing from the last control in the dialog takes focus to the first control in the dialog. The dialog is dismissed by activating the Cancel button or the OK button.

Techniques
----------

Each numbered item in this section represents a technique or combination of techniques that the WCAG Working Group deems sufficient for meeting this Success Criterion. However, it is not necessary to use these particular techniques. For information on using other techniques, see [Understanding Techniques for WCAG Success Criteria](understanding-techniques), particularly the "Other Techniques" section.

### Sufficient Techniques

1.  <a href="https://www.w3.org/WAI/WCAG21/Techniques/general/G21" class="general">G21: Ensuring that users are not trapped in content</a>

### Failures

The following are common mistakes that are considered failures of this Success Criterion by the WCAG Working Group.

-   <a href="https://www.w3.org/WAI/WCAG21/Techniques/failures/F10" class="failure">F10: Failure of Success Criterion 2.1.2 and Conformance Requirement 5 due to combining multiple content formats in a way that traps users inside one format type</a>

Key Terms
---------

keyboard interface

interface used by software to obtain keystroke input

Note

A keyboard interface allows users to provide keystroke input to programs even if the native technology does not contain a keyboard.

A touchscreen PDA has a keyboard interface built into its operating system as well as a connector for external keyboards. Applications on the PDA can use the interface to obtain keyboard input either from an external keyboard or from other applications that provide simulated keyboard output, such as handwriting interpreters or speech-to-text applications with "keyboard emulation" functionality.

Note

Operation of the application (or parts of the application) through a keyboard-operated mouse emulator, such as MouseKeys, does not qualify as operation through a keyboard interface because operation of the program is through its pointing device interface, not through its keyboard interface.
