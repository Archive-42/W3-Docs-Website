[<img src="https://www.w3.org/StyleSheets/TR/2016/logos/W3C" alt="W3C" width="72" height="48" />](http://www.w3.org/)

[Understanding WCAG 2.0](Overview.html)

[Skip to Content (Press Enter)](#maincontent)

<span id="top"></span>

-   **[Contents](Overview.html#contents "Table of Contents")**
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

> **[2.4.9](http://www.w3.org/TR/2008/REC-WCAG20-20081211/#navigation-mechanisms-link) Link Purpose (Link Only):** A <a href="#mechanismdef" class="termref">mechanism</a> is available to allow the purpose of each link to be identified from link text alone, except where the purpose of the link would be <a href="#ambiguouslinkdef" class="termref">ambiguous to users in general</a>. (Level AAA)

Intent of this Success Criterion
--------------------------------

The intent of this Success Criterion is to help users understand the purpose of each link in the content, so they can decide whether they want to follow it. Best practice is that links with the same destination would have the same descriptions, but links with different purposes and destinations would have different descriptions (see also <a href="http://www.w3.org/TR/2008/REC-WCAG20-20081211/#consistent-behavior-consistent-functionality" class="gl-ref">Success Criterion 3.2.4</a> which calls for consistency in identifying components that have the same functionality). Because the purpose of a link can be identified from its link text, links can be understood when they are out of context, such as when the user agent provides a list of all the links on a page.

The text in the link is intended to describe the purpose of the link. In cases where the link takes one to a document or a web application, the name of the document or web application would be sufficient to describe the purpose of the link (which is to take you to the document or web application). Note that it is not required to use the name of the document or web application; other things may also describe the purpose of the link.

<a href="navigation-mechanisms-title.html" class="understanding-ref">Success Criterion 2.4.2</a> deals with the titles of pages. Here also, the name of a document or web application being presented on the page would be sufficient to describe the purpose of the page. Having the link and the title agree, or be very similar, is good practice and provides continuity between the link 'clicked on' and the web page that the user lands on.

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

-   [Using Link Titles to Help Users Predict Where They Are Going](https://www.nngroup.com/articles/using-link-titles-to-help-users-predict-where-they-are-going/)

-   [WebAIM Techniques for Hypertext Links](http://webaim.org/techniques/hypertext/)

-   [Hidden barriers - out of sight](http://www.rnib.org.uk/blogs/expert-series?Name=Hidden%20barriers)

Techniques and Failures for Success Criterion 2.4.9 - Link Purpose (Link Only)
------------------------------------------------------------------------------

Each numbered item in this section represents a technique or combination of techniques that the WCAG Working Group deems sufficient for meeting this Success Criterion. However, it is not necessary to use these particular techniques. For information on using other techniques, see [Understanding Techniques for WCAG Success Criteria](http://www.w3.org/TR/2016/NOTE-UNDERSTANDING-WCAG20-20161007/understanding-techniques.html), particularly the "Other Techniques" section.

### Sufficient Techniques

1.  <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/ARIA8" class="tech-ref">ARIA8: Using aria-label for link purpose</a> (ARIA)

2.  <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/G91" class="tech-ref">G91: Providing link text that describes the purpose of a link</a>

3.  <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/H30" class="tech-ref">H30: Providing link text that describes the purpose of a link for anchor elements</a> (HTML)

4.  <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/H24" class="tech-ref">H24: Providing text alternatives for the area elements of image maps</a> (HTML)

5.  <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/FLASH27" class="tech-ref">FLASH27: Providing button labels that describe the purpose of a button</a> (Flash)

6.  Allowing the user to choose short or long link text using one of the techniques below:

    -   <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/G189" class="tech-ref">G189: Providing a control near the beginning of the Web page that changes the link text</a>

    -   <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/SCR30" class="tech-ref">SCR30: Using scripts to change the link text</a> (Scripting)

    -   <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/FLASH7" class="tech-ref">FLASH7: Using scripting to change control labels</a> (Flash)

7.  Providing a supplemental description of the purpose of a link using one of the following techniques:

    -   <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/C7" class="tech-ref">C7: Using CSS to hide a portion of the link text</a> (CSS)

8.  Semantically indicating links using one of the following techniques:

    -   <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/PDF11" class="tech-ref">PDF11: Providing links and link text using the Link annotation and the /Link structure element in PDF documents</a> (PDF)

    -   <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/PDF13" class="tech-ref">PDF13: Providing replacement text using the /Alt entry for links in PDF documents</a> (PDF)

    -   <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/SL18" class="tech-ref">SL18: Providing Text Equivalent for Nontext Silverlight Controls With AutomationProperties.Name</a> (Silverlight)

### Additional Techniques (Advisory) for 2.4.9

Although not required for conformance, the following additional techniques should be considered in order to make content more accessible. Not all techniques can be used or would be effective in all situations.

-   <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/H2" class="tech-ref">H2: Combining adjacent image and text links for the same resource</a> (HTML)

-   <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/FLASH5" class="tech-ref">FLASH5: Combining adjacent image and text buttons for the same resource</a> (Flash)

-   <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/H33" class="tech-ref">H33: Supplementing link text with the title attribute</a> (HTML)

### Common Failures for SC 2.4.9

The following are common mistakes that are considered failures of Success Criterion 2.4.9 by the WCAG Working Group.

-   <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/F84" class="tech-ref">F84: Failure of Success Criterion 2.4.9 due to using a non-specific link such as "click here" or "more" without a mechanism to change the link text to specific text.</a>

-   <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/F89" class="tech-ref">F89: Failure of Success Criteria 2.4.4, 2.4.9 and 4.1.2 due to not providing an accessible name for an image which is the only content in a link</a>

Key Terms
---------

 <span id="ambiguouslinkdef"></span> ambiguous to users in general  
the purpose cannot be determined from the link and all information of the Web page presented to the user simultaneously with the link (i.e., readers without disabilities would not know what a link would do until they activated it)

*Example:* The word guava in the following sentence "One of the notable exports is guava" is a link. The link could lead to a definition of guava, a chart listing the quantity of guava exported or a photograph of people harvesting guava. Until the link is activated, all readers are unsure and the person with a disability is not at any disadvantage.

 <span id="mechanismdef"></span> mechanism  
<a href="http://www.w3.org/TR/2008/REC-WCAG20-20081211/#processdef" class="termref">process</a> or technique for achieving a result

*Note 1:* The mechanism may be explicitly provided in the content, or may be <a href="http://www.w3.org/TR/2008/REC-WCAG20-20081211/#reliedupondef" class="termref">relied upon</a> to be provided by either the platform or by <a href="http://www.w3.org/TR/2008/REC-WCAG20-20081211/#useragentdef" class="termref">user agents</a>, including <a href="http://www.w3.org/TR/2008/REC-WCAG20-20081211/#atdef" class="termref">assistive technologies</a>.

*Note 2:* The mechanism needs to meet all success criteria for the conformance level claimed.

-   **[Top](#top)**
-   **[Contents](Overview.html#contents "Table of Contents")**
-   **[Intro](intro.html "Introduction to Understanding WCAG 2.0")**
-   [**Previous:** SC 2.4.8 \[Location\]](navigation-mechanisms-location.html "Understanding SC  2.4.8 [Location]")
-   [**Next:** SC 2.4.10 \[Section Headings\]](navigation-mechanisms-headings.html "Understanding SC  2.4.10 [Section Headings]")

This Web page is part of [Understanding WCAG 2.0: A guide to understanding and implementing WCAG 2.0](Overview.html) (see the [latest version of this document](http://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-link.html)). The entire document is also available as a [single HTML file](complete.html). See the [The WCAG 2.0 Documents](http://www.w3.org/WAI/intro/wcag20) for an explanation of how this document fits in with other Web Content Accessibility Guidelines (WCAG) 2.0 documents. To send public comments, please follow the [Instructions for Commenting on WCAG 2.0 Documents](http://www.w3.org/WAI/WCAG20/comments/).

[Copyright](http://www.w3.org/Consortium/Legal/ipr-notice#Copyright) © 2016 [W3C](http://www.w3.org/)<sup>®</sup> ([MIT](http://www.csail.mit.edu/), [ERCIM](http://www.ercim.eu/), [Keio](http://www.keio.ac.jp/), [Beihang](http://ev.buaa.edu.cn/)). W3C [liability](http://www.w3.org/Consortium/Legal/ipr-notice#Legal_Disclaimer), [trademark](http://www.w3.org/Consortium/Legal/ipr-notice#W3C_Trademarks) and [document use](http://www.w3.org/Consortium/Legal/copyright-documents) rules apply.
