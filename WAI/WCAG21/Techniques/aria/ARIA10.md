-   [Contents](https://www.w3.org/WAI/WCAG21/Techniques/#techniques "Table of Contents")
-   [Intro](https://www.w3.org/WAI/WCAG21/Techniques/#introduction "Introduction to Techniques")
-   [Previous Technique: ARIA9](ARIA9)
-   [Next Technique: ARIA11](ARIA11)

On this page:

-   [Important Information about Techniques](#important-information)
-   [Applicability](#applicability)
-   [Description](#description)
-   [Examples](#examples)
-   [Related Resources](#resources)
-   [Related Techniques](#related)
-   [Tests](#tests)

Using aria-labelledby to provide a text alternative for non-text content
========================================================================

Important Information about Techniques
--------------------------------------

See [Understanding Techniques for WCAG Success Criteria](https://www.w3.org/WAI/WCAG21/Understanding/understanding-techniques) for important information about the usage of these informative techniques and how they relate to the normative WCAG 2.1 success criteria. The Applicability section explains the scope of the technique, and the presence of techniques for a specific technology does not imply that the technology can be used in all situations to create content that meets WCAG 2.1.

Applicability
-------------

This technique applies to HTML with [Accessible Rich Internet Applications (WAI-ARIA)](https://www.w3.org/TR/wai-aria/).

This technique relates to [Success Criterion 1.1.1: Non-text Content](https://www.w3.org/WAI/WCAG21/Understanding/non-text-content) (Sufficient).

Description
-----------

The purpose of this technique is to provide a short description for an element that can be read by assistive technologies (AT) by using the `aria-labelledby` attribute. The `aria-labelledby` attribute associates an element with text that is visible elsewhere on the page by using an ID reference value that matches the ID attribute of the labeling element. Assistive technology such as screen readers use the text of the element identified by the value of the `aria-labelledby` attribute as the text alternative for the element with the attribute.

Examples
--------

### Example 1: Providing a short description for a complex graphic

This example shows how to use the `aria-labelledby` attribute to provide a short text description for a read-only complex graphic of an star rating pattern; the graphic is composed of several image elements. The text alternative for the graphic is the label, visible on the page beneath the star pattern.

    <div role="img" aria-labelledby="star_id">
    <img src="fullstar.png" alt=""/>
    <img src="fullstar.png" alt=""/>
    <img src="fullstar.png" alt=""/>
    <img src="fullstar.png" alt=""/>
    <img src="emptystar.png" alt=""/>
    </div>

    <div id="star_id">4 of 5</div>

Working example: [Providing a short description for a complex graphic](../../working-examples/aria-labelledby-description-complex-graphic/).

Resources
---------

Resources are for information purposes only, no endorsement implied.

-   [WAI-ARIA Authoring Practices 1.1](https://www.w3.org/TR/wai-aria-practices/)
-   [HTML to Platform Accessibility APIs Implementation Guide: Accessible Name and Description Calculation](https://www.w3.org/TR/html-aapi/#accessible-name-and-description-calculation)
-   [Accessible Name and Description Computation](https://www.w3.org/TR/accname/)

Related Techniques
------------------

-   [H37: Using alt attributes on img elements](https://www.w3.org/WAI/WCAG21/Techniques/html/H37)
-   [F65: Failure of Success Criterion 1.1.1 due to omitting the alt attribute or text alternative on img elements, area elements, and input elements of type "image"](https://www.w3.org/WAI/WCAG21/Techniques/failures/F65)

Tests
-----

### Procedure

1.  Examine each element where the `aria-labelledby` attribute is present and the element does not support the `alt` attribute.
2.  Check whether the value of the `aria-labelledby` attribute is the id of an element on the web page.
3.  Determine that the text of the element identified by the `aria-labelledby` attribute accurately labels the element, provides a description of its purpose, or provides equivalent information.

### Expected Results

-   \#2 and \#3 are true.
