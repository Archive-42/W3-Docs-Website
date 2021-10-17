-   [Contents](https://www.w3.org/WAI/WCAG21/Techniques/#techniques "Table of Contents")
-   [Intro](https://www.w3.org/WAI/WCAG21/Techniques/#introduction "Introduction to Techniques")
-   [Previous Technique: ARIA14](ARIA14)
-   [Next Technique: ARIA16](ARIA16)

On this page:

-   [Important Information about Techniques](#important-information)
-   [Applicability](#applicability)
-   [Description](#description)
-   [Examples](#examples)
-   [Related Resources](#resources)
-   [Related Techniques](#related)
-   [Tests](#tests)

Using aria-describedby to provide descriptions of images
========================================================

Important Information about Techniques
--------------------------------------

See [Understanding Techniques for WCAG Success Criteria](https://www.w3.org/WAI/WCAG21/Understanding/understanding-techniques) for important information about the usage of these informative techniques and how they relate to the normative WCAG 2.1 success criteria. The Applicability section explains the scope of the technique, and the presence of techniques for a specific technology does not imply that the technology can be used in all situations to create content that meets WCAG 2.1.

Applicability
-------------

Technologies that support [Accessible Rich Internet Applications (WAI-ARIA)](https://www.w3.org/TR/wai-aria/).

This technique relates to [Success Criterion 1.1.1: Non-text Content](https://www.w3.org/WAI/WCAG21/Understanding/non-text-content) (Sufficient).

Description
-----------

The objective of this technique is to provide descriptions of images when a short text alternative does not adequately convey the function or information provided in the object.

A feature of WAI-ARIA is the ability to associate descriptive text with a section, drawing, form element, picture, and so on using the `aria-describedby` property. This is similar to the `longdesc` attribute in that both are useful for providing additional information to help users understand complex images. Like `longdesc`, descriptive text provided using `aria-describedby` is separate from the short name provided using the `alt` attribute in HTML. Unlike `longdesc`, `aria-describedby` cannot reference descriptions outside of the page containing the image. An advantage of providing long descriptions using content from the same page as the image is that the alternative is available to all, including sighted people who do not have assistive technology. It is worth noting that as of the time of writing (October 2013) some assistive technologies read `aria-describedby` content immediately after an image's alt attribute information without user activation - whereas most implementations of `longdesc` require the user to take explicit action to read the additional description.

Like `aria-labelledby`, `aria-describedby` can accept multiple ids to point to other regions of the page using a space separated list. It is also limited to ids for defining these sets.

Examples
--------

### Example 1: Describing an image

The following example shows how `aria-describedby` can be applied to an image to provide a long description, where that text description is on the same page as the image.

    <img src="ladymacbeth.jpg" alt="Lady MacBeth" aria-describedby="p1">
    <p id="p1">This painting dates back to 1730 and is oil on canvas. It was created by 
    Jean-Guy Millome, and represents ...</p>

Resources
---------

Resources are for information purposes only, no endorsement implied.

-   [WAI-ARIA Authoring Practices 1.1](https://www.w3.org/TR/wai-aria-practices/)
-   [HTML to Platform Accessibility APIs Implementation Guide: Accessible Name and Description Calculation](https://www.w3.org/TR/html-aapi/#accessible-name-and-description-calculation)

Related Techniques
------------------

-   [ARIA6: Using aria-label to provide labels for objects](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA6)
-   [ARIA16: Using aria-labelledby to provide a name for user interface controls](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA16)
-   [G92: Providing long description for non-text content that serves the same purpose and presents the same information](https://www.w3.org/WAI/WCAG21/Techniques/general/G92)
-   [H45: Using longdesc](https://www.w3.org/WAI/WCAG21/Techniques/html/H45)

Tests
-----

### Procedure

1.  Examine each image element where a `aria-describedby` attribute is present.
2.  Examine whether the `aria-describedby` attribute programatically associates an element with its text description, via the `id` attribute on the element where the text to be used as the description is found.
3.  Examine whether the combined text equivalent and associated text description accurately describe or provide the equivalent purpose to the object.

### Expected Results

-   \#1, \#2, and \#3 are true.
