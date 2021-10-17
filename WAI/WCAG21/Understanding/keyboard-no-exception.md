-   [Contents](. "Table of Contents")
-   [GL: Keyboard Accessible](keyboard-accessible)
-   [Previous SC: No Keyboard Trap](no-keyboard-trap)
-   [Next SC: Character Key Shortcuts](character-key-shortcuts)

On this page:

-   [Intent](#intent)
-   [Benefits](#benefits)
-   [Techniques](#techniques)
-   [Key Terms](#key-terms)

Understanding Success Criterion 2.1.3: Keyboard (No Exception)
==============================================================

> Success Criterion [2.1.3 Keyboard (No Exception)](https://www.w3.org/TR/WCAG21/#keyboard-no-exception) (Level AAA): All [functionality](#dfn-functionality) of the content is operable through a [keyboard interface](#dfn-keyboard-interface) without requiring specific timings for individual keystrokes.

Intent
------

The intent of this Success Criterion is to ensure that **all** content is operable from the keyboard. This is the same as Success Criterion 2.1.1, except that no exceptions are allowed. This does not mean that content where the underlying function requires input that depends on the path of the user's movement and not just the endpoints (excluded from the requirements of 2.1.1) must be made keyboard accessible. Rather, it means that content that uses path-dependent input cannot conform to this Success Criterion and therefore cannot meet Guideline 2.1 at Level AAA.

Techniques
----------

Each numbered item in this section represents a technique or combination of techniques that the WCAG Working Group deems sufficient for meeting this Success Criterion. However, it is not necessary to use these particular techniques. For information on using other techniques, see [Understanding Techniques for WCAG Success Criteria](understanding-techniques), particularly the "Other Techniques" section.

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
