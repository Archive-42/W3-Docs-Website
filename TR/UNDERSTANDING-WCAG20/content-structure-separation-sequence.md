[<img src="https://www.w3.org/StyleSheets/TR/2016/logos/W3C" alt="W3C" width="72" height="48" />](http://www.w3.org/)

[Understanding WCAG 2.0](Overview.html)

[Skip to Content (Press Enter)](#maincontent)

<span id="top"></span>

-   **[Contents](Overview.html#contents "Table of Contents")**
-   **[Intro](intro.html "Introduction to Understanding WCAG 2.0")**
-   [**Previous:** SC 1.3.1 \[Info and Relationships\]](content-structure-separation-programmatic.html "Understanding SC  1.3.1 [Info and Relationships]")
-   [**Next:** SC 1.3.3 \[Sensory Characteristics\]](content-structure-separation-understanding.html "Understanding SC  1.3.3 [Sensory Characteristics]")

On this page:

-   [Intent](#content-structure-separation-sequence-intent-head)
-   [Examples](#content-structure-separation-sequence-examples-head)
-   [Related Resources](#content-structure-separation-sequence-resources-head)
-   [Techniques & Failures](#content-structure-separation-sequence-techniques-head)
-   [Key terms](#key-terms)

<span id="maincontent">-</span>

<span id="content-structure-separation-sequence"></span> **Meaningful Sequence**<span class="screenreader">:</span> Understanding SC 1.3.2
==========================================================================================================================================

> **[1.3.2](http://www.w3.org/TR/2008/REC-WCAG20-20081211/#content-structure-separation-sequence) Meaningful Sequence:** When the sequence in which content is presented affects its meaning, a <a href="#correct-reading-sequencedef" class="termref">correct reading sequence</a> can be <a href="#programmaticallydetermineddef" class="termref">programmatically determined</a>. (Level A)

Intent of this Success Criterion
--------------------------------

The intent of this Success Criterion is to enable a user agent to provide an alternative presentation of content while preserving the reading order needed to understand the meaning. It is important that it be possible to programmatically determine at least one sequence of the content that makes sense. Content that does not meet this Success Criterion may confuse or disorient users when assistive technology reads the content in the wrong order, or when alternate style sheets or other formatting changes are applied.

A sequence is *meaningful* if the order of content in the sequence cannot be changed without affecting its meaning. For example, if a page contains two independent articles, the relative order of the articles may not affect their meaning, as long as they are not interleaved. In such a situation, the articles themselves may have meaningful sequence, but the container that contains the articles may not have a meaningful sequence.

The semantics of some elements define whether or not their content is a meaningful sequence. For instance, in HTML, text is always a meaningful sequence. Tables and ordered lists are meaningful sequences, but unordered lists are not.

The order of content in a sequence is not always meaningful. For example, the relative order of the main section of a Web page and a navigation section does not affect their meaning. They could occur in either order in the programmatically determined reading sequence. As another example, a magazine article contains several callout sidebars. The order of the article and the sidebars does not affect their meaning. In these cases there are a number of different reading orders for a Web page that can satisfy the Success Criterion.

For clarity:

1.  Providing a particular linear order is only required where it affects meaning.

2.  There may be more than one order that is "correct" (according to the WCAG 2.0 definition).

3.  Only one correct order needs to be provided.

### Specific Benefits of Success Criterion 1.3.2:

-   This Success Criterion may help people who rely on assistive technologies that read content aloud. The meaning evident in the sequencing of the information in the default presentation will be the same when the content is presented in spoken form.

Examples of Success Criterion 1.3.2
-----------------------------------

-   **Example 1:** In a multi-column document, the linear presentation of the content flows from the top of a column to the bottom of the column, then to the top of the next column.

-   **Example 2:** CSS is used to position a navigation bar, the main story on a page, and a side story. The visual presentation of the sections does not match the programmatically determined order, but the meaning of the page does not depend on the order of the sections.

Related Resources
-----------------

Resources are for information purposes only, no endorsement implied.

(none currently documented)

Techniques and Failures for Success Criterion 1.3.2 - Meaningful Sequence
-------------------------------------------------------------------------

Each numbered item in this section represents a technique or combination of techniques that the WCAG Working Group deems sufficient for meeting this Success Criterion. However, it is not necessary to use these particular techniques. For information on using other techniques, see [Understanding Techniques for WCAG Success Criteria](http://www.w3.org/TR/2016/NOTE-UNDERSTANDING-WCAG20-20161007/understanding-techniques.html), particularly the "Other Techniques" section.

### Sufficient Techniques

1.  <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/G57" class="tech-ref">G57: Ordering the content in a meaningful sequence</a> for all the content in the Web page

2.  Marking sequences in the content as meaningful using one of the following techniques **AND** <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/G57" class="tech-ref">G57: Ordering the content in a meaningful sequence</a> for those sequences

    -   <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/H34" class="tech-ref">H34: Using a Unicode right-to-left mark (RLM) or left-to-right mark (LRM) to mix text direction inline</a> (HTML)

    -   <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/H56" class="tech-ref">H56: Using the dir attribute on an inline element to resolve problems with nested directional runs</a> (HTML)

    -   <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/C6" class="tech-ref">C6: Positioning content based on structural markup</a> (CSS)

    -   <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/C8" class="tech-ref">C8: Using CSS letter-spacing to control spacing within a word</a> (CSS)

3.  <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/C27" class="tech-ref">C27: Making the DOM order match the visual order</a> (CSS)

4.  <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/FLASH15" class="tech-ref">FLASH15: Using the tabIndex property to specify a logical reading order and a logical tab order in Flash</a> (Flash)

5.  <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/PDF3" class="tech-ref">PDF3: Ensuring correct tab and reading order in PDF documents</a> (PDF)

6.  <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/SL34" class="tech-ref">SL34: Using the Silverlight Default Tab Sequence and Altering Tab Sequences With Properties</a> (Silverlight)

### Additional Techniques (Advisory) for 1.3.2

Although not required for conformance, the following additional techniques should be considered in order to make content more accessible. Not all techniques can be used or would be effective in all situations.

-   Using left-justified text for languages that are written left to right and right-justified text for languages that are written right-to-left (future link)

-   Providing a link to linearized rendering (future link)

-   Providing a style switcher between style sheets that affect presentation order (future link)

### Common Failures for SC 1.3.2

The following are common mistakes that are considered failures of Success Criterion 1.3.2 by the WCAG Working Group.

-   <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/F34" class="tech-ref">F34: Failure of Success Criterion 1.3.1 and 1.3.2 due to using white space characters to format tables in plain text content</a>

-   <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/F33" class="tech-ref">F33: Failure of Success Criterion 1.3.1 and 1.3.2 due to using white space characters to create multiple columns in plain text content</a>

-   <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/F32" class="tech-ref">F32: Failure of Success Criterion 1.3.2 due to using white space characters to control spacing within a word</a>

-   <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/F49" class="tech-ref">F49: Failure of Success Criterion 1.3.2 due to using an HTML layout table that does not make sense when linearized</a>

-   <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/F1" class="tech-ref">F1: Failure of Success Criterion 1.3.2 due to changing the meaning of content by positioning information with CSS</a>

Key Terms
---------

 <span id="correct-reading-sequencedef"></span> correct reading sequence  
any sequence where words and paragraphs are presented in an order that does not change the meaning of the content

 <span id="programmaticallydetermineddef"></span> programmatically determined (programmatically determinable)  
determined by software from author-supplied data provided in a way that different <a href="http://www.w3.org/TR/2008/REC-WCAG20-20081211/#useragentdef" class="termref">user agents</a>, including <a href="http://www.w3.org/TR/2008/REC-WCAG20-20081211/#atdef" class="termref">assistive technologies</a>, can extract and present this information to users in different modalities

*Example 1:* Determined in a markup language from elements and attributes that are accessed directly by commonly available assistive technology.

*Example 2:* Determined from technology-specific data structures in a non-markup language and exposed to assistive technology via an accessibility API that is supported by commonly available assistive technology.

-   **[Top](#top)**
-   **[Contents](Overview.html#contents "Table of Contents")**
-   **[Intro](intro.html "Introduction to Understanding WCAG 2.0")**
-   [**Previous:** SC 1.3.1 \[Info and Relationships\]](content-structure-separation-programmatic.html "Understanding SC  1.3.1 [Info and Relationships]")
-   [**Next:** SC 1.3.3 \[Sensory Characteristics\]](content-structure-separation-understanding.html "Understanding SC  1.3.3 [Sensory Characteristics]")

This Web page is part of [Understanding WCAG 2.0: A guide to understanding and implementing WCAG 2.0](Overview.html) (see the [latest version of this document](http://www.w3.org/TR/UNDERSTANDING-WCAG20/content-structure-separation-sequence.html)). The entire document is also available as a [single HTML file](complete.html). See the [The WCAG 2.0 Documents](http://www.w3.org/WAI/intro/wcag20) for an explanation of how this document fits in with other Web Content Accessibility Guidelines (WCAG) 2.0 documents. To send public comments, please follow the [Instructions for Commenting on WCAG 2.0 Documents](http://www.w3.org/WAI/WCAG20/comments/).

[Copyright](http://www.w3.org/Consortium/Legal/ipr-notice#Copyright) © 2016 [W3C](http://www.w3.org/)<sup>®</sup> ([MIT](http://www.csail.mit.edu/), [ERCIM](http://www.ercim.eu/), [Keio](http://www.keio.ac.jp/), [Beihang](http://ev.buaa.edu.cn/)). W3C [liability](http://www.w3.org/Consortium/Legal/ipr-notice#Legal_Disclaimer), [trademark](http://www.w3.org/Consortium/Legal/ipr-notice#W3C_Trademarks) and [document use](http://www.w3.org/Consortium/Legal/copyright-documents) rules apply.
