-   [Contents](https://www.w3.org/WAI/WCAG21/Techniques/#techniques "Table of Contents")
-   [Intro](https://www.w3.org/WAI/WCAG21/Techniques/#introduction "Introduction to Techniques")
-   [Previous Technique: ARIA13](ARIA13)
-   [Next Technique: ARIA15](ARIA15)

On this page:

-   [Important Information about Techniques](#important-information)
-   [Applicability](#applicability)
-   [Description](#description)
-   [Examples](#examples)
-   [Related Resources](#resources)
-   [Related Techniques](#related)
-   [Tests](#tests)

Using aria-label to provide an invisible label where a visible label cannot be used
===================================================================================

Important Information about Techniques
--------------------------------------

See [Understanding Techniques for WCAG Success Criteria](https://www.w3.org/WAI/WCAG21/Understanding/understanding-techniques) for important information about the usage of these informative techniques and how they relate to the normative WCAG 2.1 success criteria. The Applicability section explains the scope of the technique, and the presence of techniques for a specific technology does not imply that the technology can be used in all situations to create content that meets WCAG 2.1.

Applicability
-------------

Technologies that support [Accessible Rich Internet Applications (WAI-ARIA)](https://www.w3.org/TR/wai-aria/).

This technique relates to [Success Criterion 4.1.2: Name, Role, Value](https://www.w3.org/WAI/WCAG21/Understanding/name-role-value) (Sufficient).

Description
-----------

For sighted users, the context and visual appearance of an element can provide sufficient cues to determine the purpose. An example is the 'X' often used in the top right corner of pop-up divs (light boxes) to indicate the control for closing the div.

In some situations, elements can be given the attribute `aria-label` to provide an accessible name for situations when there is no visible label due to a chosen design approach or layout but the context and visual appearance of the control make its purpose clear.

In other situations, elements can be given the attribute `aria-label` to provide an accessible name when the native HTML labeling element is not supported by the control - for example, when a `div` set to `contentEditable` is used instead of native form elements such as input type="text" or `textarea` in order to provide a richer text editing experience.

Examples
--------

### Example 1: A close button (X) in a pop-up box

On a page, a link displays a pop-up box (a div) with additional information. The 'close' element is implemented as a button containing merely the letter 'x'. The property aria-label="close" is used to provide an accessible name to the button.

    <div id="box">
       This is a pop-up box.
       <button aria-label="Close" onclick="document.getElementById('box').style.display='none';" class="close-button">X</button>                
    </div>

Working example: [Close button example](../../working-examples/aria-label-invisible-label-box/).

### Example 2: A phone number with multiple fields

    <div role="group" aria-labelledby="groupLabel">
      <span id="groupLabel>Work Phone</span>
      +<input type="number" aria-label="country code">
      <input type="number" aria-label="area code">
      <input type="number" aria-label="subscriber number">
    </div>

Resources
---------

Resources are for information purposes only, no endorsement implied.

-   [WAI-ARIA Authoring Practices 1.1](https://www.w3.org/TR/wai-aria-practices/)
-   [HTML to Platform Accessibility APIs Implementation Guide: Accessible Name and Description Calculation](https://www.w3.org/TR/html-aapi/#accessible-name-and-description-calculation)

Related Techniques
------------------

-   [ARIA6: Using aria-label to provide labels for objects](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA6)
-   [ARIA16: Using aria-labelledby to provide a name for user interface controls](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA16)

Tests
-----

### Procedure

For elements that use `aria-label`:

1.  Check that the value of the `aria-label` attribute properly describes the purpose of an element where user input is required

### Expected Results

-   \#1 is true.
