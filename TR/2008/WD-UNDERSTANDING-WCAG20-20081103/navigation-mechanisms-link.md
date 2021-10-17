[<img src="http://www.w3.org/Icons/w3c_home" alt="W3C" width="72" height="48" />](http://www.w3.org/)

[Understanding WCAG 2.0](http://www.w3.org/TR/2008/WD-UNDERSTANDING-WCAG20-20081103/)

[Skip to Content (Press Enter)](#maincontent)

<span id="top"></span>

-   **[Contents](http://www.w3.org/TR/2008/WD-UNDERSTANDING-WCAG20-20081103/#contents "Table of Contents")**
-   **[Intro](intro.html "Introduction to Understanding WCAG 2.0")**
-   [**Previous:** SC 2.4.8 \[Location\]](navigation-mechanisms-location.html "Understanding SC  2.4.8 [Location]")
-   [**Next:** SC 2.4.10 \[Section Headings\]](navigation-mechanisms-headings.html "Understanding SC  2.4.10 [Section Headings]")

On this page:

-   [Intent](#navigation-mechanisms-link-intent-head)
-   [Examples](#navigation-mechanisms-link-examples-head)
-   [Related Resources](#navigation-mechanisms-link-resources-head)
-   [Techniques & Failures](#navigation-mechanisms-link-techniques-head)
-   [Key terms](#key-terms)

<span id="maincontent">-</span>

<span id="navigation-mechanisms-link"></span> **Link Purpose (Link Only)**<span class="screenreader">:</span> Understanding SC 2.4.9
====================================================================================================================================

> **[2.4.9](http://www.w3.org/TR/2008/PR-WCAG20-20081103/#navigation-mechanisms-link) Link Purpose (Link Only):** A <a href="#mechanismdef" class="termref">mechanism</a> is available to allow the purpose of each link to be identified from link text alone, except where the purpose of the link would be <a href="#ambiguouslinkdef" class="termref">ambiguous to users in general</a>. (Level AAA)

Intent of this Success Criterion
--------------------------------

The intent of this Success Criterion is to help users understand the purpose of each link in the content, so they can decide whether they want to follow it. Links with the same destination should have the same descriptions (per [Success Criterion 3.2.4](http://www.w3.org/TR/2008/PR-WCAG20-20081103/#consistent-behavior-consistent-functionality) ), but links with different purposes and destinations should have different descriptions. Because the purpose of a link can be identified from its link text, links can be understood when they are out of context, such as when the user agent provides a list of all the links on a page.

The Success Criterion includes an exception for links for which the purpose of the link cannot be determined from the information on the Web page. In this situation, the person with the disability is not at a disadvantage; there is no additional context available to understand the link purpose. However, whatever amount of context is available on the Web page that can be used to interpret the purpose of the link must be made available in the link text to satisfy the Success Criterion.

The word "mechanism" is used to allow authors to either make all links fully understandable out of context by default or to provide a way to make them this way. This is done because for some pages, making the links all unambiguous by themselves makes the pages easier for some users and harder for others. Providing the ability to make the links unambiguous (by them selves) or not provides both users with disabilities with the ability to use the page in the format that best meets their needs.

For example: A page listing 100 book titles along with links to download the books in HTML, PDF, DOC, TXT, MP3, or AAC might ordinarily be viewed as the title of the book as a link with the words "in HTML" after it. then the sentence "Also available in: " followed by a series of short links with text of "HTML", "PDF", "DOC", "TXT", "MP3", and "AAC". At Level 3, some users could opt to view the page this way - because they would find the page harder to understand or slower to use if the full title of the book were included in each of the links. Others could opt to view the page with the full title as part of each of the links so that each link was understandable in itself. Both the former and the latter groups could include people with visual or cognitive disabilities that used different techniques to browse or that had different types or severities of disability.

### Specific Benefits of Success Criterion 2.4.9:

-   This Success Criterion helps people with motion impairment by letting them skip Web pages that they are not interested in, avoiding the keystrokes needed to visit the referenced content and then return to the current content.

-   People with cognitive limitations will not become disoriented by extra navigation to and from content they are not interested in.

-   People with visual disabilities will benefit from not losing their place in the content when they return to the original page. The screen reader's list of links is more useful for finding information because the target of the links are described.

Examples of Success Criterion 2.4.9
-----------------------------------

-   **Both an icon and text are included in the same link**

    An icon of a voting machine and the text "Government of Ireland's Commission of Electronic Voting" are combined to make a single link.

-   **A list of book titles**

    A list of books is available in three formats: HTML, PDF, and mp3 (a recording of a person reading the book). The title of the book is followed by links to the different formats. The rendered text for each link is just the format type, but the text associated with each link includes the title as well as the format; for instance, "Gulliver's Travels, MP3."

Related Resources
-----------------

Resources are for information purposes only, no endorsement implied.

-   [Using Link Titles to Help Users Predict Where They Are Going](http://www.useit.com/alertbox/980111.html)

-   [WebAIM Techniques for Hypertext Links](http://www.webaim.org/techniques/hypertext/)

-   [Hidden barriers - out of sight](http://www.rnib.org.uk/wacblog/css/hidden-barriers-out-of-sight/)

Techniques and Failures for Success Criterion 2.4.9 - Link Purpose (Link Only)
------------------------------------------------------------------------------

Each numbered item in this section represents a technique or combination of techniques that the WCAG Working Group deems sufficient for meeting this Success Criterion. The techniques listed only satisfy the Success Criterion if all of the [WCAG 2.0 conformance requirements](http://www.w3.org/TR/2008/PR-WCAG20-20081103/#conformance-reqs) have been met.

### Sufficient Techniques

1.  [G91: Providing link text that describes the purpose of a link](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G91) using one of the following techniques:

    -   [H30: Providing link text that describes the purpose of a link for anchor elements](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/H30) (HTML)

    -   [H24: Providing text alternatives for the area elements of image maps](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/H24) (HTML)

2.  Allowing the user to choose short or long link text using one of the technology specific techniques below:

    -   [G189: Providing a control near the beginning of the Web page that changes the link text](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/G189)

    -   [SCR30: Using scripts to change the link text](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/SCR30) (Scripting)

3.  Providing a supplemental description of the purpose of a link using one of the following techniques:

    -   [C7: Using CSS to hide a portion of the link text](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/C7) (CSS)

### Additional Techniques (Advisory) for 2.4.9

Although not required for conformance, the following additional techniques should be considered in order to make content more accessible. Not all techniques can be used or would be effective in all situations.

-   [H2: Combining adjacent image and text links for the same resource](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/H2) (HTML)

-   [H33: Supplementing link text with the title attribute](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/H33) (HTML)

### Common Failures for SC 2.4.9

The following are common mistakes that are considered failures of Success Criterion 2.4.9 by the WCAG Working Group.

-   [F84: Failure of Success Criterion 2.4.9 due to using a non-specific link such as "click here" or "more" without a mechanism to change the link text to specific text.](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/F84)

-   [F89: Failure of 2.4.4, 2.4.9 and 4.1.2 due to using null alt on an image where the image is the only content in a link](http://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/F89)

Key Terms
---------

 <span id="ambiguouslinkdef"></span> ambiguous to users in general  
the purpose cannot be determined from the link and all information of the Web page presented to the user simultaneously with the link (i.e. readers without disabilities would not know what a link would do until they activated it)

Example: The word guava in the following sentence "One of the notable exports is guava" is a link. The link could lead to a definition of guava, a chart listing the quantity of guava exported or a photograph of people harvesting guava. Until the link is activated, all readers are unsure and the person with a disability is not at any disadvantage.

 <span id="mechanismdef"></span> mechanism  
<a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#processdef" class="termref">process</a> or technique for achieving a result

Note 1: The mechanism may be explicitly provided in the content, or may be <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#reliedupondef" class="termref">relied upon</a> to be provided by either the platform or by <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#useragentdef" class="termref">user agents</a>, including <a href="http://www.w3.org/TR/2008/PR-WCAG20-20081103/#atdef" class="termref">assistive technologies</a>.

Note 2: The mechanism needs to meet all success criteria for the conformance level claimed.

-   **[Top](#top)**
-   **[Contents](http://www.w3.org/TR/2008/WD-UNDERSTANDING-WCAG20-20081103/#contents "Table of Contents")**
-   **[Intro](intro.html "Introduction to Understanding WCAG 2.0")**
-   [**Previous:** SC 2.4.8 \[Location\]](navigation-mechanisms-location.html "Understanding SC  2.4.8 [Location]")
-   [**Next:** SC 2.4.10 \[Section Headings\]](navigation-mechanisms-headings.html "Understanding SC  2.4.10 [Section Headings]")

This Web page is part of [Understanding WCAG 2.0: A guide to understanding and implementing WCAG 2.0](http://www.w3.org/TR/2008/WD-UNDERSTANDING-WCAG20-20081103/). The entire document is also available as a [single HTML file](complete.html). See the [Overview of WCAG 2.0 Documents](http://www.w3.org/WAI/intro/wcag20) for an explanation of how this document fits in with other Web Content Accessibility Guidelines (WCAG) 2.0 documents.

[Copyright](http://www.w3.org/Consortium/Legal/ipr-notice#Copyright) © 2008 [W3C](http://www.w3.org/)<sup>®</sup> ([MIT](http://www.csail.mit.edu/), [ERCIM](http://www.ercim.org/), [Keio](http://www.keio.ac.jp/)), All Rights Reserved. W3C [liability](http://www.w3.org/Consortium/Legal/ipr-notice#Legal_Disclaimer), [trademark](http://www.w3.org/Consortium/Legal/ipr-notice#W3C_Trademarks) and [document use](http://www.w3.org/Consortium/Legal/copyright-documents) rules apply.
