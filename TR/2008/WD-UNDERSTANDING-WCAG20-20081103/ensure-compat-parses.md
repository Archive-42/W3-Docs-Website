[<img src="http://www.w3.org/Icons/w3c_home" alt="W3C" width="72" height="48" />](http://www.w3.org/)

[Understanding WCAG 2.0](http://www.w3.org/TR/2008/WD-UNDERSTANDING-WCAG20-20081103/)

[Skip to Content (Press Enter)](#maincontent)

<span id="top"></span>

-   **[Contents](http://www.w3.org/TR/2008/WD-UNDERSTANDING-WCAG20-20081103/#contents "Table of Contents")**
-   **[Intro](intro.html "Introduction to Understanding WCAG 2.0")**
-   [**Previous:** Guideline 4.1 \[Compatible\]](ensure-compat.html "Understanding Guideline  4.1 [Compatible]")
-   [**Next:** SC 4.1.2 \[Name, Role, Value\]](ensure-compat-rsv.html "Understanding SC  4.1.2 [Name, Role, Value]")

On this page:

-   [Intent](#ensure-compat-parses-intent-head)
-   [Examples](#ensure-compat-parses-examples-head)
-   [Related Resources](#ensure-compat-parses-resources-head)
-   [Techniques & Failures](#ensure-compat-parses-techniques-head)

<span id="maincontent">-</span>

<span id="ensure-compat-parses"></span> **Parsing**<span class="screenreader">:</span> Understanding SC 4.1.1
=============================================================================================================

> **[4.1.1](http://www.w3.org/TR/2008/PR-WCAG20-20081103/#ensure-compat-parses) Parsing:** In content implemented using markup languages, elements have complete start and end tags, elements are nested according to their specifications, elements do not contain duplicate attributes, and any IDs are unique, except where the specifications allow these features. (Level A)
>
> Note: Start and end tags that are missing a critical character in their formation, such as a closing angle bracket or a mismatched attribute value quotation mark are not complete.

Intent of this Success Criterion
--------------------------------

The intent of this Success Criterion is to ensure that user agents, including assistive technologies, can accurately interpret and parse content. If the content cannot be parsed into a data structure, then different user agents may present it differently or be completely unable to parse it. Some user agents use "repair techniques" to render poorly coded content.

Since repair techniques vary among user agents, authors cannot assume that content will be accurately parsed into a data structure or that it will be rendered correctly by specialized user agents, including assistive technologies, unless the content is created according to the rules defined in the formal grammar for that technology. In markup languages, errors in element and attribute syntax and failure to provide properly nested start/end tags lead to errors that prevent user agents from parsing the content reliably. Therefore, the Success Criterion requires that the content can be parsed using only the rules of the formal grammar

Note: The concept of "well formed" is close to what is required here. However, exact parsing requirements vary amongst markup languages, and most non XML-based languages do not explicitly define requirements for well formedness. Therefore, it was necessary to be more explicit in the success criterion in order to be generally applicable to markup languages. Because the term "well formed" is only defined in XML, and (because end tags are sometimes optional) valid HTML does not require well formed code, the term is not used in this success criterion.

### Specific Benefits of Success Criterion 4.1.1:

-   Ensuring that Web pages have complete start and end tags and are nested according to specification helps ensure that assistive technologies can parse the content accurately and without crashing.

Examples of Success Criterion 4.1.1
-----------------------------------

Related Resources
-----------------

Resources are for information purposes only, no endorsement implied.

(none currently documented)

Techniques and Failures for Success Criterion 4.1.1 - Parsing
-------------------------------------------------------------

Each numbered item in this section represents a technique or combination of techniques that the WCAG Working Group deems sufficient for meeting this Success Criterion. The techniques listed only satisfy the Success Criterion if all of the [WCAG 2.0 conformance requirements](http://www.w3.org/TR/2008/PR-WCAG20-20081103/#conformance-reqs) have been met.

### Sufficient Techniques

1.  [G134: Validating Web pages](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G134)

2.  [G192: Fully conforming to specifications](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G192)

3.  [H88: Using HTML according to spec](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/H88)

4.  Ensuring that Web pages can be parsed by using one of the following techniques:

    -   [H74: Ensuring that opening and closing tags are used according to specification](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/H74) (HTML)

    -   [H75: Ensuring that Web pages are well-formed](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/H75) (HTML)

### Additional Techniques (Advisory) for 4.1.1

Although not required for conformance, the following additional techniques should be considered in order to make content more accessible. Not all techniques can be used or would be effective in all situations.

(none currently documented)

### Common Failures for SC 4.1.1

The following are common mistakes that are considered failures of Success Criterion 4.1.1 by the WCAG Working Group.

-   [F70: Failure of Success Criterion 4.1.1 due to incorrect use of start and end tags or attribute markup](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/F70)

-   [F77: Failure of Success Criterion 4.1.1 due to duplicate values of type ID](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/F77)

-   [F17: Failure of Success Criterion 1.3.1 and 4.1.1 due to insufficient information in DOM to determine one-to-one relationships (e.g., between labels with same id) in HTML](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/F17)

-   [F62: Failure of Success Criterion 1.3.1 and 4.1.1 due to insufficient information in DOM to determine specific relationships in XML](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/F62)

-   **[Top](#top)**
-   **[Contents](http://www.w3.org/TR/2008/WD-UNDERSTANDING-WCAG20-20081103/#contents "Table of Contents")**
-   **[Intro](intro.html "Introduction to Understanding WCAG 2.0")**
-   [**Previous:** Guideline 4.1 \[Compatible\]](ensure-compat.html "Understanding Guideline  4.1 [Compatible]")
-   [**Next:** SC 4.1.2 \[Name, Role, Value\]](ensure-compat-rsv.html "Understanding SC  4.1.2 [Name, Role, Value]")

This Web page is part of [Understanding WCAG 2.0: A guide to understanding and implementing WCAG 2.0](http://www.w3.org/TR/2008/WD-UNDERSTANDING-WCAG20-20081103/). The entire document is also available as a [single HTML file](complete.html). See the [Overview of WCAG 2.0 Documents](http://www.w3.org/WAI/intro/wcag20) for an explanation of how this document fits in with other Web Content Accessibility Guidelines (WCAG) 2.0 documents.

[Copyright](http://www.w3.org/Consortium/Legal/ipr-notice#Copyright) © 2008 [W3C](http://www.w3.org/)<sup>®</sup> ([MIT](http://www.csail.mit.edu/), [ERCIM](http://www.ercim.org/), [Keio](http://www.keio.ac.jp/)), All Rights Reserved. W3C [liability](http://www.w3.org/Consortium/Legal/ipr-notice#Legal_Disclaimer), [trademark](http://www.w3.org/Consortium/Legal/ipr-notice#W3C_Trademarks) and [document use](http://www.w3.org/Consortium/Legal/copyright-documents) rules apply.
