-   [Contents](. "Table of Contents")
-   [GL: Input Modalities](input-modalities)
-   [Previous SC: Target Size](target-size)
-   [Next SC: Language of Page](language-of-page)

On this page:

-   [Intent](#intent)
-   [Benefits](#benefits)
-   [Examples](#examples)
-   [Related Resources](#resources)
-   [Techniques](#techniques)
-   [Key Terms](#key-terms)

Understanding Success Criterion 2.5.6: Concurrent Input Mechanisms
==================================================================

> Success Criterion [2.5.6 Concurrent Input Mechanisms](https://www.w3.org/TR/WCAG21/#concurrent-input-mechanisms) (Level AAA): Web content does not restrict use of input modalities available on a platform except where the restriction is [essential](#dfn-essential), required to ensure the security of the content, or required to respect user settings.

Intent
------

The intent of this Success Criterion is to ensure that people can use and switch between different modes of input when interacting with web content. Users may employ a variety of input mechanisms when interacting with web content. These may be a combination of mechanisms such as a keyboard or keyboard-like interfaces and pointer devices like a mouse, stylus or touchscreen.

Even though a device may have a primary input mechanism, the user may choose to employ alternative input mechanisms when interacting with the device. For example, the primary mechanism for mobile phones and tablets is the touchscreen. The user of these devices may choose to use a paired mouse or external keyboard as an alternative to using the touchscreen.

Users should be able to switch input mechanisms at any point should the user determine that certain tasks and interactions are more easily accomplished by using an alternative input mechanism. Content must not limit the user's interaction to any particular input mechanism unless the restriction is essential, or is required to ensure the security of the content or to respect user settings.

Note: A touch-typing web application, which teaches users how to touch-type on a keyboard and/or measures their proficiency and speed, would be an example of an essential limitation to a particular input mechanism.

Benefits
--------

-   Users can interact with web content with whichever input mechanism is preferred and available to them.
-   Users may switch between input mechanisms when they desire or the circumstances require it.
-   Users are allowed to add and remove input mechanisms at any point, where supported by the operating system.

Examples
--------

-   A user with mobility impairment pairs a mouse and keyboard to her mobile phone with a touchscreen. The phone can thereafter be operated by those input devices and the content does not accept the touchscreen as the only input mechanism.
-   On a touch-enabled laptop with coarse precision, people who have difficulty activating a small target because of hand tremors, limited dexterity or other reasons are still able to interact with content using their keyboard and trackpad.
-   A user starts interacting with a page using a desktop keyboard, and then attaches a secondary touch-enabled monitor. Content can be operated using this newly added input mechanism and does not assume that the keyboard, the first input mechanism it detected, is the only one in use.
-   A speech input user navigates content using voice commands which translate to simulate mouse (and keyboard) commands. When talking with a colleague, however, the user turns speech recognition off and uses the mouse instead.
-   A user opens a menu with a mouse, and then navigates between the menu items with arrow keys.

Related Resources
-----------------

Resources are for information purposes only, no endorsement implied.

-   [W3C Pointer Events - Level 2](https://w3c.github.io/pointerevents/)
-   [Patrick H. Lauke - Detecting touch: it's the 'why', not the 'how'](https://hacks.mozilla.org/2013/04/detecting-touch-its-the-why-not-the-how/)
-   [Chris Wilson / Paul Kinlan: Touch And Mouse - Together Again For The First Time](https://www.html5rocks.com/en/mobile/touchandmouse/)
-   [W3C Touch Events - Level 2: Interaction with Mouse Events and click](https://w3c.github.io/touch-events/#mouse-events)
-   [W3C CSS Media Queries Level 4: Interaction Media Features](https://www.w3.org/TR/mediaqueries-4/#mf-interaction)

Techniques
----------

Each numbered item in this section represents a technique or combination of techniques that the WCAG Working Group deems sufficient for meeting this Success Criterion. However, it is not necessary to use these particular techniques. For information on using other techniques, see [Understanding Techniques for WCAG Success Criteria](understanding-techniques), particularly the "Other Techniques" section.

### Sufficient Techniques

-   @@ Only using high-level, input-agnostic event handlers (`focus`, `blur`, `click`) in Javascript (operating systems/UAs fire these events for all input mechanisms).
-   @@ Registering event handlers for keyboard/keyboard-like and pointer inputs simultaneously in Javascript (see [Example 1 in Pointer Events Level 2](https://w3c.github.io/pointerevents/#examples))

### Failures

The following are common mistakes that are considered failures of this Success Criterion by the WCAG Working Group.

-   [F98: Failure due to interactions being limited to touch-only on touchscreen devices](https://www.w3.org/WAI/WCAG21/Techniques/failures/F98)

Key Terms
---------

essential

if removed, would fundamentally change the information or functionality of the content, **and** information and functionality cannot be achieved in another way that would conform
