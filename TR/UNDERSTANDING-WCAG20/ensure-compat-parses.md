[<img src="https://www.w3.org/StyleSheets/TR/2016/logos/W3C" alt="W3C" width="72" height="48" />](http://www.w3.org/)

[Understanding WCAG 2.0](Overview.html)

[Skip to Content (Press Enter)](#maincontent)

<span id="top"></span>

-   **[Contents](Overview.html#contents "Table of Contents")**
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

> **[4.1.1](http://www.w3.org/TR/2008/REC-WCAG20-20081211/#ensure-compat-parses) Parsing:** In content implemented using markup languages, elements have complete start and end tags, elements are nested according to their specifications, elements do not contain duplicate attributes, and any IDs are unique, except where the specifications allow these features. (Level A)
>
> *Note:* Start and end tags that are missing a critical character in their formation, such as a closing angle bracket or a mismatched attribute value quotation mark are not complete.

Intent of this Success Criterion
--------------------------------

The intent of this Success Criterion is to ensure that user agents, including assistive technologies, can accurately interpret and parse content. If the content cannot be parsed into a data structure, then different user agents may present it differently or be completely unable to parse it. Some user agents use "repair techniques" to render poorly coded content.

Since repair techniques vary among user agents, authors cannot assume that content will be accurately parsed into a data structure or that it will be rendered correctly by specialized user agents, including assistive technologies, unless the content is created according to the rules defined in the formal grammar for that technology. In markup languages, errors in element and attribute syntax and failure to provide properly nested start/end tags lead to errors that prevent user agents from parsing the content reliably. Therefore, the Success Criterion requires that the content can be parsed using only the rules of the formal grammar.

*Note 1:* The concept of "well formed" is close to what is required here. However, exact parsing requirements vary amongst markup languages, and most non XML-based languages do not explicitly define requirements for well formedness. Therefore, it was necessary to be more explicit in the success criterion in order to be generally applicable to markup languages. Because the term "well formed" is only defined in XML, and (because end tags are sometimes optional) valid HTML does not require well formed code, the term is not used in this success criterion.

*Note 2:* With the exception of one success criterion ( *[Understanding Success Criterion 1.4.4 Resize text](visual-audio-contrast-scale.html)*, which specifically mentions that the effect specified by the success criterion must be achieved without relying on an assistive technology) authors can meet the success criteria with content that assumes use of an assistive technology (or access features in use agents) by the user, where such assistive technologies (or access features in user agents) exist and are available to the user.

### Specific Benefits of Success Criterion 4.1.1:

-   Ensuring that Web pages have complete start and end tags and are nested according to specification helps ensure that assistive technologies can parse the content accurately and without crashing.

Examples of Success Criterion 4.1.1
-----------------------------------

(none currently documented)

Related Resources
-----------------

Resources are for information purposes only, no endorsement implied.

(none currently documented)

Techniques and Failures for Success Criterion 4.1.1 - Parsing
-------------------------------------------------------------

Each numbered item in this section represents a technique or combination of techniques that the WCAG Working Group deems sufficient for meeting this Success Criterion. However, it is not necessary to use these particular techniques. For information on using other techniques, see [Understanding Techniques for WCAG Success Criteria](http://www.w3.org/TR/2016/NOTE-UNDERSTANDING-WCAG20-20161007/understanding-techniques.html), particularly the "Other Techniques" section.

### Sufficient Techniques

1.  <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/G134" class="tech-ref">G134: Validating Web pages</a>

2.  <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/G192" class="tech-ref">G192: Fully conforming to specifications</a>

3.  <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/H88" class="tech-ref">H88: Using HTML according to spec</a> (HTML)

4.  Ensuring that Web pages can be parsed by using one of the following techniques:

    -   <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/H74" class="tech-ref">H74: Ensuring that opening and closing tags are used according to specification</a> (HTML) **AND** <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/H93" class="tech-ref">H93: Ensuring that id attributes are unique on a Web page</a> (HTML) **AND** <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/H94" class="tech-ref">H94: Ensuring that elements do not contain duplicate attributes</a> (HTML)

    -   <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/H75" class="tech-ref">H75: Ensuring that Web pages are well-formed</a> (HTML)

5.  <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/SL33" class="tech-ref">SL33: Using Well-Formed XAML to Define a Silverlight User Interface</a> (Silverlight)

### Additional Techniques (Advisory) for 4.1.1

Although not required for conformance, the following additional techniques should be considered in order to make content more accessible. Not all techniques can be used or would be effective in all situations.

(none currently documented)

### Common Failures for SC 4.1.1

The following are common mistakes that are considered failures of Success Criterion 4.1.1 by the WCAG Working Group.

-   <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/F70" class="tech-ref">F70: Failure of Success Criterion 4.1.1 due to incorrect use of start and end tags or attribute markup</a>

-   <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/F77" class="tech-ref">F77: Failure of Success Criterion 4.1.1 due to duplicate values of type ID</a>

-   **[Top](#top)**
-   **[Contents](Overview.html#contents "Table of Contents")**
-   **[Intro](intro.html "Introduction to Understanding WCAG 2.0")**
-   [**Previous:** Guideline 4.1 \[Compatible\]](ensure-compat.html "Understanding Guideline  4.1 [Compatible]")
-   [**Next:** SC 4.1.2 \[Name, Role, Value\]](ensure-compat-rsv.html "Understanding SC  4.1.2 [Name, Role, Value]")

This Web page is part of [Understanding WCAG 2.0: A guide to understanding and implementing WCAG 2.0](Overview.html) (see the [latest version of this document](http://www.w3.org/TR/UNDERSTANDING-WCAG20/ensure-compat-parses.html)). The entire document is also available as a [single HTML file](complete.html). See the [The WCAG 2.0 Documents](http://www.w3.org/WAI/intro/wcag20) for an explanation of how this document fits in with other Web Content Accessibility Guidelines (WCAG) 2.0 documents. To send public comments, please follow the [Instructions for Commenting on WCAG 2.0 Documents](http://www.w3.org/WAI/WCAG20/comments/).

[Copyright](http://www.w3.org/Consortium/Legal/ipr-notice#Copyright) © 2016 [W3C](http://www.w3.org/)<sup>®</sup> ([MIT](http://www.csail.mit.edu/), [ERCIM](http://www.ercim.eu/), [Keio](http://www.keio.ac.jp/), [Beihang](http://ev.buaa.edu.cn/)). W3C [liability](http://www.w3.org/Consortium/Legal/ipr-notice#Legal_Disclaimer), [trademark](http://www.w3.org/Consortium/Legal/ipr-notice#W3C_Trademarks) and [document use](http://www.w3.org/Consortium/Legal/copyright-documents) rules apply.
