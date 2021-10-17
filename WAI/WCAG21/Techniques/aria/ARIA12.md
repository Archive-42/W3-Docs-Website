-   [Contents](https://www.w3.org/WAI/WCAG21/Techniques/#techniques "Table of Contents")
-   [Intro](https://www.w3.org/WAI/WCAG21/Techniques/#introduction "Introduction to Techniques")
-   [Previous Technique: ARIA11](ARIA11)
-   [Next Technique: ARIA13](ARIA13)

On this page:

-   [Important Information about Techniques](#important-information)
-   [Applicability](#applicability)
-   [Description](#description)
-   [Examples](#examples)
-   [Related Resources](#resources)
-   [Related Techniques](#related)
-   [Tests](#tests)

Using role=heading to identify headings
=======================================

Important Information about Techniques
--------------------------------------

See [Understanding Techniques for WCAG Success Criteria](https://www.w3.org/WAI/WCAG21/Understanding/understanding-techniques) for important information about the usage of these informative techniques and how they relate to the normative WCAG 2.1 success criteria. The Applicability section explains the scope of the technique, and the presence of techniques for a specific technology does not imply that the technology can be used in all situations to create content that meets WCAG 2.1.

Applicability
-------------

Technologies that support [Accessible Rich Internet Applications (WAI-ARIA)](https://www.w3.org/TR/wai-aria/).

This technique relates to [Success Criterion 1.3.1: Info and Relationships](https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships) (Sufficient).

Description
-----------

The purpose of this technique is to provide a way for Assistive Technologies (AT) to identify a piece of content as a heading. Applying role="heading" to an element causes an AT (like a screen reader) to treat it as though it were a heading.

If there is more than one heading on the page and the heading hierarchy is defined through the visual presentation, the `aria-level` attribute should be used to indicate the hierarchical level of the heading.

When possible, use native heading mark-up directly. For example, it is preferable to use `h1` rather than using &lt;div role="heading" aria-level="1"&gt;. However, the use of the heading role, instead of heading mark-up, may be necessary. For example, when retrofitting a legacy site where scripts depend on the existing element hierarchy.

The use of the `heading` role and nesting levels is discussed in [WAI-ARIA Authoring Practices 1.1](https://www.w3.org/TR/wai-aria-practices/).

Examples
--------

### Example 1: Simple headings

This example demonstrates how to implement simple headings using role="heading" when retrofitting a legacy site where scripts depend on the existing element hierarchy or the level is unknown. For example, web content which is syndicated from various sources may be constructed without knowledge of what the final presentation will be.

    <div role="heading">Global News items</div>
    ... a list of global news with editorial comment....

    <div role="heading">Local News items</div>
    ... a list of local news, with editorial comment ...

### Example 2: Additional heading levels

This example demonstrates how to implement a level 7 heading using role="heading" and the `aria-level` attribute. Since HTML only supports headings through level 6, there is no native element to provide these semantics.

    ...
    <h5>Fruit Trees</h5>
    ...
    <h6>Apples</h6>
    <p>Apples grow on trees in areas known as orchards...</p>
    ...
    <div role="heading" aria-level="7">Jonagold/div>
    <p>Jonagold is a cross between the Golden Delicious and Jonathan varieties...</p>

Resources
---------

Resources are for information purposes only, no endorsement implied.

-   [Accessible Rich Internet Applications (WAI-ARIA), Heading in the Roles Model](https://www.w3.org/TR/wai-aria/#heading)
-   [WAI-ARIA Authoring Practices](https://www.w3.org/TR/wai-aria-practices/)

Related Techniques
------------------

-   [H42: Using h1-h6 to identify headings](https://www.w3.org/WAI/WCAG21/Techniques/html/H42)
-   [H69: Providing heading elements at the beginning of each section of content](https://www.w3.org/WAI/WCAG21/Techniques/html/H69)
-   [G141: Organizing a page using headings](https://www.w3.org/WAI/WCAG21/Techniques/general/G141)
-   [F2: Failure of Success Criterion 1.3.1 due to using changes in text presentation to convey information without using the appropriate markup or text](https://www.w3.org/WAI/WCAG21/Techniques/failures/F2)

Tests
-----

### Procedure

1.  Examine each element with the attribute role="heading".
2.  Determine whether the content of the element is appropriate as a heading.
3.  If the element has an `aria-level` attribute, determine whether the value is the appropriate hierarchical level.

### Expected Results

-   \#2 and \#3 are true.
