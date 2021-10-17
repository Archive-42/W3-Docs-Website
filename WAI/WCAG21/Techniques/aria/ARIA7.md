-   [Contents](https://www.w3.org/WAI/WCAG21/Techniques/#techniques "Table of Contents")
-   [Intro](https://www.w3.org/WAI/WCAG21/Techniques/#introduction "Introduction to Techniques")
-   [Previous Technique: ARIA6](ARIA6)
-   [Next Technique: ARIA8](ARIA8)

On this page:

-   [Important Information about Techniques](#important-information)
-   [Applicability](#applicability)
-   [Description](#description)
-   [Examples](#examples)
-   [Related Resources](#resources)
-   [Tests](#tests)

Using aria-labelledby for link purpose
======================================

Important Information about Techniques
--------------------------------------

See [Understanding Techniques for WCAG Success Criteria](https://www.w3.org/WAI/WCAG21/Understanding/understanding-techniques) for important information about the usage of these informative techniques and how they relate to the normative WCAG 2.1 success criteria. The Applicability section explains the scope of the technique, and the presence of techniques for a specific technology does not imply that the technology can be used in all situations to create content that meets WCAG 2.1.

Applicability
-------------

Technologies that support [Accessible Rich Internet Applications (WAI-ARIA)](https://www.w3.org/TR/wai-aria/).

This technique relates to [Success Criterion 2.4.4: Link Purpose (In Context)](https://www.w3.org/WAI/WCAG21/Understanding/link-purpose-in-context) (Sufficient when used with an unwritten technique).

Description
-----------

With the `aria-labelledby` attribute, authors can use a visible text element on the page as a label for a focusable element (a form control or a link). For example, a "read more..." link could be associated with the text of the heading of the preceding section to make the purpose of the link unambiguous (see example 1).

When associating text to a focusable element with the help of `aria-labelledby`, the target text element is given an ID which is referenced in the value of the `aria-labelledby` attribute of the focusable element.

It is also possible to use several text elements on the page as a label for a focusable element. Each of the text elements used must be given a unique ID which is referenced as a string of IDs (IDREF) in the value of the `aria-labelledby` attribute. The label text should then be concatenated following the order of IDs in the value of the `aria-labelledby` attribute.

When applied on links, `aria-labelledby` can be used to identify the purpose of a link that may be readily apparent for sighted users, but less obvious for screen reader users.

The specified behavior of `aria-labelledby` is that the associated label text is announced instead of the link text (not in addition to the link text). When the link text itself should be included in the label text, the ID of the link should be referenced as well in the string of IDs forming the value of the `aria-labelledby` attribute.

For more information on the naming hierarchy please consult the [Accessible Name and Description Computation](https://www.w3.org/TR/accname/) and the [accessible name and description calculation for links](https://www.w3.org/TR/html-aapi/#a-element) in the HTML to Platform Accessibility APIs Implementation Guide.

Examples
--------

### Example 1: Providing additional information for links

This example will mean that the link text as shown on screen is then used as the start of the accessible name for the link. Popular screen readers like JAWS and NVDA will announce this as: "Read more ...Storms hit east coast" and will display that same text in the links list which is very useful for screen reader users who may browse by links.

    <h2 id="headline">Storms hit east coast</h2>

    <p>Torrential rain and gale force winds have struck the east coast, causing flooding in many coastal towns.
    <a id="p123" href="news.html" aria-labelledby="p123 headline">Read more...</a></p>

### Example 2: Concatenating link text from multiple sources

There may be cases where an author will placed a tag around a section of code that will be referenced.

Note: The use of tabindex="-1" on the `span` element is not meant to support focusing by scripts - here, it merely serves to ensure that some browsers (IE9, IE10) will include the `span` element in the accessibility tree, thus making it available for reference by `aria-labelledby`. For more details see [Accessible HTML Elements](https://msdn.microsoft.com/en-us/library/ie/gg701963%28v=vs.85%29.aspx#Accessible_HTML_Elements).

    <p>Download <span id="report-title" tabindex="-1">2012 Sales Report</span>:
    <a aria-labelledby="report-title pdf" href="#" id="pdf">PDF</a> |
    <a aria-labelledby="report-title doc" href="#" id="doc">Word</a> |
    <a aria-labelledby="report-title ppt" href="#" id="ppt">Powerpoint</a></p>

Resources
---------

Resources are for information purposes only, no endorsement implied.

-   [Accessible Name and Description Computation](https://www.w3.org/TR/accname/)

Tests
-----

### Procedure

For each link that has an `aria-labelledby` attribute:

1.  Check that each ID in the value of the `aria-labelledby` attribute matches an ID of a text element used as part of the link purpose.
2.  Check that the combined value of the text referenced by the one or more ID's in the `aria-labelledby` attribute properly describes the purpose of the link element.

### Expected Results

-   Checks \#1 and \#2 are true.
