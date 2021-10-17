-   [Contents](. "Table of Contents")
-   [GL: Input Modalities](input-modalities)
-   [Previous SC: Motion Actuation](motion-actuation)
-   [Next SC: Concurrent Input Mechanisms](concurrent-input-mechanisms)

On this page:

-   [Intent](#intent)
-   [Benefits](#benefits)
-   [Examples](#examples)
-   [Related Resources](#resources)
-   [Techniques](#techniques)
-   [Key Terms](#key-terms)

Understanding Success Criterion 2.5.5: Target Size
==================================================

> Success Criterion [2.5.5 Target Size](https://www.w3.org/TR/WCAG21/#target-size) (Level AAA): The size of the [target](#dfn-target) for [pointer inputs](#dfn-pointer-input) is at least 44 by 44 [CSS pixels](#dfn-css-pixel) except when:
>
> Equivalent  
> The target is available through an equivalent link or control on the same page that is at least 44 by 44 CSS pixels;
>
> Inline  
> The target is in a sentence or block of text;
>
> User Agent Control  
> The size of the target is determined by the user agent and is not modified by the author;
>
> Essential  
> A particular presentation of the target is [essential](#dfn-essential) to the information being conveyed.

Intent
------

The intent of this success criteria is to ensure that target sizes are large enough for users to easily activate them, even if the user is accessing content on a small handheld touch screen device, has limited dexterity, or has trouble activating small targets for other reasons. For instance, mice and similar pointing devices can be hard to use for these users, and a larger target will help them activate the target.

Touch is particularly problematic as it is an input mechanism with coarse precision. Users lack the same level of fine control when using inputs such as a mouse or stylus. A finger is larger than a mouse pointer, and generally obstructs the user's view of the precise location on the screen that is being touched/activated.

The issue can even be further complicated with responsive layouts on small screens like mobile, which need to accommodate different types of fine and coarse inputs. Both input types must be supported for a site that can be accessed both on a traditional desktop/laptop with a mouse, as well as on a tablet or mobile phone with a touch screen.

While this criterion defines a minimum target size, as a best practice it is recommended that larger sizes are used to reduce the possibility of unintentional activations. This is particularly relevant if any of the following are true:

-   A control is used frequently;
-   Results of the interaction cannot be easily undone;
-   The control is positioned where it will be difficult to reach, e.g. is near the edge of the screen;
-   The control is part of a sequential task.

The targets on a screen can have different purposes and uses, and this Success Criterion specifies how each is to be handled.

**Equivalent targets:** If there is more than one target on a screen that performs the same action, only one of the targets need to meet the target size of 44 by 44 CSS pixels.

**Inline:** Content displayed can often be reflowed based on the screen width available. This is known as responsive design and makes it easier to read since you do not need to scroll both horizontally and vertically. In reflowed content, the targets can appear anywhere on a line and can change position based on the width of the available screen. Since targets can appear anywhere on the line, the size cannot be larger than the available text and spacing between the sentences or paragraphs, otherwise the targets could overlap. It is for this reason targets which are contained within one or more sentences are excluded from the target size requirements.

Note

If the target is the full sentence and the sentence is not in a block of text, then the target needs to be at least 44 by 44 CSS pixels.

Note

A footnote or an icon within or at the end of a sentence is considered to be part of a sentence and therefore are excluded from the minimum target size.

**User Agent Control:** If the size of the target is not modified by the author through CSS or other size properties, then the target does not need to meet the target size of 44 by 44 CSS pixels.

**Essential:** If the target is required to be a particular target size and cannot be provided in another way, while changing it would essentially change the information or functionality of the content, then the target does not need to meet the target size of 44 by 44 CSS pixels.

Benefits
--------

-   Users who use a mobile device where touch screen is the primary mode of interaction;
-   Users with mobility impairments such as hand tremors;
-   Users who use a mobile device in environments where they are exposed to shaking such as public transportation;
-   Users who have difficulty with fine motor movements;
-   Users who access a device using one hand;
-   Users with large fingers, or who are operating the device with only a part of their finger or knuckle;
-   Users who have low vision may better see the target.

Examples
--------

-   **Example 1: Buttons**  
    Three buttons are on-screen and the touch target area of each button is 44 by 44 CSS pixels.
-   **Example 2: Equivalent target**  
    Multiple targets are provided on the page that perform the same function. One of the targets is 44 by 44 CSS pixels. The other targets do not have a minimum touch target of 44 by 44 CSS pixels.
-   **Example 3: Anchor Link**  
    The target is an in-page link and the target is less than 44 by 44 CSS pixels. Users can scroll the screen using browser functions so target size does not need to be met.
-   **Example 4: Text Link in a paragraph**  
    Links within a paragraph of text have varying touch target dimensions. Links within paragraphs of text do no need to meet the 44 by 44 CSS pixels requirements.
-   **Example 5: Text Link in a sentence**  
    A text link that is in a sentence is excluded and does not need to meet the 44 by 44 CSS pixel requirement. If the text link is the full sentence, then the text link target touch area does need to meet the 44 by 44 CSS pixels.
-   **Example 6: Footnote**  
    A footnote link at the end of a sentence does not need to meet the 44 by 44 CSS pixels requirements. The footnote at the end of the sentence is considered to be part of the sentence.
-   **Example 7: Help icon**  
    A help icon within or at the end of a sentence does not need to meet the 44 by 44 CSS pixels requirements. The icon at the end of the sentence is considered to be part of the sentence.

Related Resources
-----------------

Resources are for information purposes only, no endorsement implied.

-   [Apple touch target size recommendations](https://developer.apple.com/ios/human-interface-guidelines/visual-design/layout/)
-   [Windows UWP Guidelines for touch targets](https://docs.microsoft.com/en-us/windows/uwp/design/input/guidelines-for-targeting)
-   [Google Material Design Touch targets](https://material.io/design/layout/spacing-methods.html#touch-targets)
-   [web.dev Accessible tap targets](https://web.dev/accessible-tap-targets/)
-   [Human Fingertips to Investigate the Mechanics of Tactile Sense (PDF)](http://touchlab.mit.edu/publications/2003_009.pdf)
-   [One-Handed Thumb Use on Small Touchscreen Devices](http://www.cs.umd.edu/hcil/trs/2006-11/2006-11.htm)
-   [Microsoft Guidelines for Building Touch Friendly Sites](https://docs.microsoft.com/en-us/archive/blogs/ie/guidelines-for-building-touch-friendly-sites)

Techniques
----------

Each numbered item in this section represents a technique or combination of techniques that the WCAG Working Group deems sufficient for meeting this Success Criterion. However, it is not necessary to use these particular techniques. For information on using other techniques, see [Understanding Techniques for WCAG Success Criteria](understanding-techniques), particularly the "Other Techniques" section.

### Sufficient Techniques

-   Ensuring that touch targets are at least 44 by 44 CSS pixels.
-   Providing a mechanism to change the size of the target independent of magnification.

### Advisory Techniques

Although not required for conformance, the following additional techniques should be considered in order to make content more accessible. Not all techniques can be used or would be effective in all situations.

-   Ensuring inline links provide sufficiently large activation target.

### Failures

The following are common mistakes that are considered failures of this Success Criterion by the WCAG Working Group.

-   Failure of success criterion 2.5.3 due to target size being less than 44 by 44 CSS pixels.
-   Failure of success criterion 2.5.3 due to target size of a paragraph that is also a link being less than 44 by 44 CSS pixels.

Key Terms
---------

css pixel

visual angle of about 0.0213 degrees

A CSS pixel is the canonical unit of measure for all lengths and measurements in CSS. This unit is density-independent, and distinct from actual hardware pixels present in a display. User agents and operating systems should ensure that a CSS pixel is set as closely as possible to the [CSS Values and Units Module Level 3 reference pixel](https://www.w3.org/TR/css3-values/#reference-pixel) \[\[!css3-values\]\], which takes into account the physical dimensions of the display and the assumed viewing distance (factors that cannot be determined by content authors).

essential

if removed, would fundamentally change the information or functionality of the content, **and** information and functionality cannot be achieved in another way that would conform

pointer input

input device that can target a specific coordinate (or set of coordinates) on a screen, such as a mouse, pen, or touch contact

See also [Pointer Events pointer definition](https://www.w3.org/TR/pointerevents/#dfn-pointer) \[\[!pointerevents\]\].

target

region of the display that will accept a pointer action, such as the interactive area of a user interface component

Note

If two or more touch targets are overlapping, the overlapping area should not be included in the measurement of the target size, except when the overlapping targets perform the same action or open the same page.
