[<img src="https://www.w3.org/StyleSheets/TR/2016/logos/W3C" alt="W3C" width="72" height="48" />](http://www.w3.org/)

[Understanding WCAG 2.0](Overview.html)

[Skip to Content (Press Enter)](#maincontent)

<span id="top"></span>

-   **[Contents](Overview.html#contents "Table of Contents")**
-   **[Intro](intro.html "Introduction to Understanding WCAG 2.0")**
-   [**Previous:** SC 2.4.3 \[Focus Order\]](navigation-mechanisms-focus-order.html "Understanding SC  2.4.3 [Focus Order]")
-   [**Next:** SC 2.4.5 \[Multiple Ways\]](navigation-mechanisms-mult-loc.html "Understanding SC  2.4.5 [Multiple Ways]")

On this page:

-   [Intent](#navigation-mechanisms-refs-intent-head)
-   [Examples](#navigation-mechanisms-refs-examples-head)
-   [Related Resources](#navigation-mechanisms-refs-resources-head)
-   [Techniques & Failures](#navigation-mechanisms-refs-techniques-head)
-   [Key terms](#key-terms)

<span id="maincontent">-</span>

<span id="navigation-mechanisms-refs"></span> **Link Purpose (In Context)**<span class="screenreader">:</span> Understanding SC 2.4.4
=====================================================================================================================================

> **[2.4.4](http://www.w3.org/TR/2008/REC-WCAG20-20081211/#navigation-mechanisms-refs) Link Purpose (In Context):** The <a href="#linkpurposedef" class="termref">purpose of each link</a> can be determined from the link text alone or from the link text together with its <a href="#pdlinkcontextdef" class="termref">programmatically determined link context</a>, except where the purpose of the link would be <a href="#ambiguouslinkdef" class="termref">ambiguous to users in general</a>. (Level A)

Intent of this Success Criterion
--------------------------------

The intent of this Success Criterion is to help users understand the purpose of each link so they can decide whether they want to follow the link. Whenever possible, provide link text that identifies the purpose of the link without needing additional context. Assistive technology has the ability to provide users with a list of links that are on the Web page. Link text that is as meaningful as possible will aid users who want to choose from this list of links. Meaningful link text also helps those who wish to tab from link to link. Meaningful links help users choose which links to follow without requiring complicated strategies to understand the page.

The text of, or associated with, the link is intended to describe the purpose of the link. In cases where the link takes one to a document or a web application, the name of the document or web application would be sufficient to describe the purpose of the link (which is to take you to the document or web application). Note that it is not required to use the name of the document or web application; other things may also describe the purpose of the link.

<a href="navigation-mechanisms-title.html" class="understanding-ref">Success Criterion 2.4.2</a> deals with the titles of pages. Here also, the name of a document or web application being presented on the page would be sufficient to describe the purpose of the page. Having the link and the title agree, or be very similar, is good practice and provides continuity between the link 'clicked on' and the web page that the user lands on.

In some situations, authors may want to provide part of the description of the link in logically related text that provides the context for the link. In this case the user should be able to identify the purpose of the link without moving focus from the link. In other words, they can arrive on a link and find out more about it without losing their place. This can be achieved by putting the description of the link in the same sentence, paragraph, list item, or table cell as the link, or in the table header cell for a link in a data table, because these are directly associated with the link itself. Alternatively, authors may choose to use an ARIA technique to associate additional text on the page with the link.

This context will be most usable if it precedes the link. (For instance, if you must use ambiguous link text, it is better to put it at the end of the sentence that describes its destination, rather than putting the ambiguous phrase at the beginning of the sentence.) If the description follows the link, there can be confusion and difficulty for screen reader users who are reading through the page in order (top to bottom).

It is a best practice for links with the same destination to have consistent descriptions (and this is a requirement per <a href="http://www.w3.org/TR/2008/REC-WCAG20-20081211/#consistent-behavior-consistent-functionality" class="gl-ref">Success Criterion 3.2.4</a> for pages in a set). It is also a best practice for links with different purposes and destinations to have different descriptions.

The Success Criterion includes an exception for links for which the purpose of the link cannot be determined from the information on the Web page. In this situation, the person with the disability is not at a disadvantage; there is no additional context available to understand the link purpose. However, whatever amount of context is available on the Web page that can be used to interpret the purpose of the link must be made available in the link text or programmatically associated with the link to satisfy the Success Criterion.

*Note:* There may be situations where the purpose of the link is is supposed to be unknown or obscured. For instance, a game may have links identified only as door \#1, door \#2, and door \#3. This link text would be sufficient because the purpose of the links is to create suspense for all users.

See also *[Understanding Success Criterion 2.4.9 Link Purpose (Link Only)](navigation-mechanisms-link.html)*.

### Specific Benefits of Success Criterion 2.4.4:

-   This Success Criterion helps people with motion impairment by letting them skip links that they are not interested in, avoiding the keystrokes needed to visit the referenced content and then returning to the current content.

-   People with cognitive limitations will not become disoriented by multiple means of navigation to and from content they are not interested in.

-   People with visual disabilities will be able to determine the purpose of a link by exploring the link's context.

Examples of Success Criterion 2.4.4
-----------------------------------

-   **A link contains text that gives a description of the information at that URI**

    A page contains the sentence "There was much bloodshed during the Medieval period of history." Where "Medieval period of history" is a link.

-   **A link is preceded by a text description of the information at that URI**

    A page contains the sentence "Learn more about the Government of Ireland's Commission on Electronic Voting at Go Vote!" where "Go Vote!" is a link.

-   **Both an icon and text are included in the same link**

    An icon of a voting machine and the text "Government of Ireland's Commission of Electronic Voting" are combined to make a single link. The alt text for the icon is null, since the purpose of the link is already described by the text of the link next to the icon.

-   **A list of book titles**

    A list of books is available in three formats: HTML, PDF, and mp3 (a recording of a person reading the book). To avoid hearing the title of each book three times (once for each format), the first link for each book is the title of the book, the second link says "PDF" and the third says, "mp3."

-   **News article summaries**

    A Web page contains a collection of news articles. The main page lists the first few sentences of each article, followed by a "Read more" link. A screen reader command to read the current paragraph provides the context to interpret the purpose of the link.

Related Resources
-----------------

Resources are for information purposes only, no endorsement implied.

-   [Using Link Titles to Help Users Predict Where They Are Going](https://www.nngroup.com/articles/using-link-titles-to-help-users-predict-where-they-are-going/)

-   [WebAIM Techniques for Hypertext Links](http://webaim.org/techniques/hypertext/)

-   [Hidden barriers - out of sight](http://www.rnib.org.uk/blogs/expert-series?Name=Hidden%20barriers)

Techniques and Failures for Success Criterion 2.4.4 - Link Purpose (In Context)
-------------------------------------------------------------------------------

Each numbered item in this section represents a technique or combination of techniques that the WCAG Working Group deems sufficient for meeting this Success Criterion. However, it is not necessary to use these particular techniques. For information on using other techniques, see [Understanding Techniques for WCAG Success Criteria](http://www.w3.org/TR/2016/NOTE-UNDERSTANDING-WCAG20-20161007/understanding-techniques.html), particularly the "Other Techniques" section.

### Sufficient Techniques

1.  <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/G91" class="tech-ref">G91: Providing link text that describes the purpose of a link</a>

2.  <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/H30" class="tech-ref">H30: Providing link text that describes the purpose of a link for anchor elements</a> (HTML)

3.  <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/H24" class="tech-ref">H24: Providing text alternatives for the area elements of image maps</a> (HTML)

4.  <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/FLASH27" class="tech-ref">FLASH27: Providing button labels that describe the purpose of a button</a> (Flash)

5.  Allowing the user to choose short or long link text using one of the techniques below:

    -   <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/G189" class="tech-ref">G189: Providing a control near the beginning of the Web page that changes the link text</a>

    -   <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/SCR30" class="tech-ref">SCR30: Using scripts to change the link text</a> (Scripting)

    -   <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/FLASH7" class="tech-ref">FLASH7: Using scripting to change control labels</a> (Flash)

6.  <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/G53" class="tech-ref">G53: Identifying the purpose of a link using link text combined with the text of the enclosing sentence</a>

7.  Providing a supplemental description of the purpose of a link using one of the following techniques:

    -   <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/H33" class="tech-ref">H33: Supplementing link text with the title attribute</a> (HTML)

    -   <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/C7" class="tech-ref">C7: Using CSS to hide a portion of the link text</a> (CSS)

8.  Identifying the purpose of a link using link text combined with programmatically determined link context using one of the following techniques:

    -   <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/ARIA7" class="tech-ref">ARIA7: Using aria-labelledby for link purpose</a> (ARIA)

    -   <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/ARIA8" class="tech-ref">ARIA8: Using aria-label for link purpose</a> (ARIA)

    -   <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/H77" class="tech-ref">H77: Identifying the purpose of a link using link text combined with its enclosing list item</a> (HTML)

    -   <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/H78" class="tech-ref">H78: Identifying the purpose of a link using link text combined with its enclosing paragraph</a> (HTML)

    -   <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/H79" class="tech-ref">H79: Identifying the purpose of a link in a data table using the link text combined with its enclosing table cell and associated table header cells</a> (HTML)

    -   <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/H81" class="tech-ref">H81: Identifying the purpose of a link in a nested list using link text combined with the parent list item under which the list is nested</a> (HTML)

9.  <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/G91" class="tech-ref">G91: Providing link text that describes the purpose of a link</a> **AND** Semantically indicating links using one of the following techniques:

    -   <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/PDF11" class="tech-ref">PDF11: Providing links and link text using the Link annotation and the /Link structure element in PDF documents</a> (PDF)

    -   <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/PDF13" class="tech-ref">PDF13: Providing replacement text using the /Alt entry for links in PDF documents</a> (PDF)

    -   <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/SL18" class="tech-ref">SL18: Providing Text Equivalent for Nontext Silverlight Controls With AutomationProperties.Name</a> (Silverlight)

### Additional Techniques (Advisory) for 2.4.4

Although not required for conformance, the following additional techniques should be considered in order to make content more accessible. Not all techniques can be used or would be effective in all situations.

-   <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/H2" class="tech-ref">H2: Combining adjacent image and text links for the same resource</a> (HTML)

-   <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/FLASH5" class="tech-ref">FLASH5: Combining adjacent image and text buttons for the same resource</a> (Flash)

-   <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/H80" class="tech-ref">H80: Identifying the purpose of a link using link text combined with the preceding heading element</a> (HTML)

### Common Failures for SC 2.4.4

The following are common mistakes that are considered failures of Success Criterion 2.4.4 by the WCAG Working Group.

-   <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/F63" class="tech-ref">F63: Failure of Success Criterion 2.4.4 due to providing link context only in content that is not related to the link</a>

-   <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/F89" class="tech-ref">F89: Failure of Success Criteria 2.4.4, 2.4.9 and 4.1.2 due to not providing an accessible name for an image which is the only content in a link</a>

Key Terms
---------

 <span id="ambiguouslinkdef"></span> ambiguous to users in general  
the purpose cannot be determined from the link and all information of the Web page presented to the user simultaneously with the link (i.e., readers without disabilities would not know what a link would do until they activated it)

*Example:* The word guava in the following sentence "One of the notable exports is guava" is a link. The link could lead to a definition of guava, a chart listing the quantity of guava exported or a photograph of people harvesting guava. Until the link is activated, all readers are unsure and the person with a disability is not at any disadvantage.

 <span id="linkpurposedef"></span> link purpose  
nature of the result obtained by activating a hyperlink

 <span id="pdlinkcontextdef"></span> programmatically determined link context  
additional information that can be <a href="http://www.w3.org/TR/2008/REC-WCAG20-20081211/#programmaticallydetermineddef" class="termref">programmatically determined</a> from <a href="http://www.w3.org/TR/2008/REC-WCAG20-20081211/#relationshipsdef" class="termref">relationships</a> with a link, combined with the link text, and presented to users in different modalities

*Example:* In HTML, information that is programmatically determinable from a link in English includes text that is in the same paragraph, list, or table cell as the link or in a table header cell that is associated with the table cell that contains the link.

*Note:* Since screen readers interpret punctuation, they can also provide the context from the current sentence, when the focus is on a link in that sentence.

-   **[Top](#top)**
-   **[Contents](Overview.html#contents "Table of Contents")**
-   **[Intro](intro.html "Introduction to Understanding WCAG 2.0")**
-   [**Previous:** SC 2.4.3 \[Focus Order\]](navigation-mechanisms-focus-order.html "Understanding SC  2.4.3 [Focus Order]")
-   [**Next:** SC 2.4.5 \[Multiple Ways\]](navigation-mechanisms-mult-loc.html "Understanding SC  2.4.5 [Multiple Ways]")

This Web page is part of [Understanding WCAG 2.0: A guide to understanding and implementing WCAG 2.0](Overview.html) (see the [latest version of this document](http://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-refs.html)). The entire document is also available as a [single HTML file](complete.html). See the [The WCAG 2.0 Documents](http://www.w3.org/WAI/intro/wcag20) for an explanation of how this document fits in with other Web Content Accessibility Guidelines (WCAG) 2.0 documents. To send public comments, please follow the [Instructions for Commenting on WCAG 2.0 Documents](http://www.w3.org/WAI/WCAG20/comments/).

[Copyright](http://www.w3.org/Consortium/Legal/ipr-notice#Copyright) © 2016 [W3C](http://www.w3.org/)<sup>®</sup> ([MIT](http://www.csail.mit.edu/), [ERCIM](http://www.ercim.eu/), [Keio](http://www.keio.ac.jp/), [Beihang](http://ev.buaa.edu.cn/)). W3C [liability](http://www.w3.org/Consortium/Legal/ipr-notice#Legal_Disclaimer), [trademark](http://www.w3.org/Consortium/Legal/ipr-notice#W3C_Trademarks) and [document use](http://www.w3.org/Consortium/Legal/copyright-documents) rules apply.
