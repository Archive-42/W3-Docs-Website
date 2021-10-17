-   [Contents](https://www.w3.org/WAI/WCAG21/Techniques/#techniques "Table of Contents")
-   [Intro](https://www.w3.org/WAI/WCAG21/Techniques/#introduction "Introduction to Techniques")
-   [Previous Technique: ARIA5](ARIA5)
-   [Next Technique: ARIA7](ARIA7)

On this page:

-   [Important Information about Techniques](#important-information)
-   [Applicability](#applicability)
-   [Description](#description)
-   [Examples](#examples)
-   [Related Resources](#resources)
-   [Related Techniques](#related)
-   [Tests](#tests)

Using aria-label to provide labels for objects
==============================================

Important Information about Techniques
--------------------------------------

See [Understanding Techniques for WCAG Success Criteria](https://www.w3.org/WAI/WCAG21/Understanding/understanding-techniques) for important information about the usage of these informative techniques and how they relate to the normative WCAG 2.1 success criteria. The Applicability section explains the scope of the technique, and the presence of techniques for a specific technology does not imply that the technology can be used in all situations to create content that meets WCAG 2.1.

Applicability
-------------

Technologies that support [Accessible Rich Internet Applications (WAI-ARIA)](https://www.w3.org/TR/wai-aria/).

This technique relates to [Success Criterion 1.1.1: Non-text Content](https://www.w3.org/WAI/WCAG21/Understanding/non-text-content) (Sufficient).

Description
-----------

The purpose of this technique is to provide a label for objects that can be read by assistive technology. The `aria-label` attribute provides the text label for an object, such as a button. When a screen reader encounters the object, the `aria-label` text is read so that the user will know what it is.

Authors should be aware that `aria-label` may be disregarded by assistive technologies in situations where `aria-labelledby` is used for the same object. For more information on the naming hierarchy please consult the [ARIA specification](https://www.w3.org/TR/wai-aria/#textalternativecomputation) and the [accessible name and description calculation](https://www.w3.org/TR/html-aapi/#accessible-name-and-description-calculation) in the HTML to Platform Accessibility APIs Implementation Guide. Authors should be aware that use of `aria-label` will override any native naming such as `alt` on images or `label` associated with a form field using the `for` attribute.

Examples
--------

### Example 1: Distinguishing navigation landmarks

The following example shows how `aria-label` could be used to distinguish two navigation landmarks in a HTML4 and XHTML 1.0 document, where there are more than two of the same type of landmark on the same page, and there is no existing text on the page that can be referenced as the label.

    <div role="navigation" aria-label="Primary">
    <ul><li>...a list of links here ...</li></ul> </div>
    <div role="navigation" aria-label="Secondary">
    <ul><li>...a list of links here ...</li> </ul></div>

### Example 2: Identifying region landmarks

The following example shows how a generic "region" landmark might be added to a weather portlet. There is no existing text on the page that can be referenced as the label, so it is labelled with `aria-label`.

    <div role="region" aria-label="weather portlet"> 
    ...
    </div>

### Example 3: Providing a label for Math

Below is an example of a MathML function, using the math role, appropriate label, and MathML rendering:

    <div role="math" aria-label="6 divided by 4 equals 1.5">
      <math xmlns="https://www.w3.org/1998/Math/MathML">
        <mfrac>
          <mn>6</mn>
          <mn>4</mn>
        </mfrac>
        <mo>=</mo>
        <mn>1.5</mn>
      </math>
    </div>

Resources
---------

Resources are for information purposes only, no endorsement implied.

-   [HTML to Platform Accessibility APIs Implementation Guide: HTML Element to Accessibility API Role Mapping Matrix](https://www.w3.org/TR/html-aapi/#html-element-to-accessibility-api-role-mapping-matrix)
-   [WAI-ARIA Authoring Practices 1.1](https://www.w3.org/TR/wai-aria-practices/)

Related Techniques
------------------

-   [ARIA16: Using aria-labelledby to provide a name for user interface controls](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA16)
-   [H44: Using label elements to associate text labels with form controls](https://www.w3.org/WAI/WCAG21/Techniques/html/H44)

Tests
-----

### Procedure

For each element where a `aria-label` attribute is present.

1.  Examine whether the text description accurately labels the object or provides a description of its purpose or provides equivalent information.

### Expected Results

-   \#1 is true.
