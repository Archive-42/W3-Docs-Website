[<img src="https://www.w3.org/StyleSheets/TR/2016/logos/W3C" alt="W3C" width="72" height="48" />](http://www.w3.org/)

[Understanding WCAG 2.0](Overview.html)

[Skip to Content (Press Enter)](#maincontent)

<span id="top"></span>

-   **[Contents](Overview.html#contents "Table of Contents")**
-   **[Intro](intro.html "Introduction to Understanding WCAG 2.0")**
-   [**Previous:** SC 2.4.5 \[Multiple Ways\]](navigation-mechanisms-mult-loc.html "Understanding SC  2.4.5 [Multiple Ways]")
-   [**Next:** SC 2.4.7 \[Focus Visible\]](navigation-mechanisms-focus-visible.html "Understanding SC  2.4.7 [Focus Visible]")

On this page:

-   [Intent](#navigation-mechanisms-descriptive-intent-head)
-   [Examples](#navigation-mechanisms-descriptive-examples-head)
-   [Related Resources](#navigation-mechanisms-descriptive-resources-head)
-   [Techniques & Failures](#navigation-mechanisms-descriptive-techniques-head)
-   [Key terms](#key-terms)

<span id="maincontent">-</span>

<span id="navigation-mechanisms-descriptive"></span> **Headings and Labels**<span class="screenreader">:</span> Understanding SC 2.4.6
======================================================================================================================================

> **[2.4.6](http://www.w3.org/TR/2008/REC-WCAG20-20081211/#navigation-mechanisms-descriptive) Headings and Labels:** Headings and <a href="#labeldef" class="termref">labels</a> describe topic or purpose. (Level AA)

Intent of this Success Criterion
--------------------------------

The intent of this Success Criterion is to help users understand what information is contained in Web pages and how that information is organized. When headings are clear and descriptive, users can find the information they seek more easily, and they can understand the relationships between different parts of the content more easily. Descriptive labels help users identify specific components within the content.

Labels and headings do not need to be lengthy. A word, or even a single character, may suffice if it provides an appropriate cue to finding and navigating content.

*Note:* This success criterion does not require headings or labels. This success criterion requires that if headings or labels are provided, they be descriptive. Also note that, if headings or labels are provided, they must meet *[Understanding Success Criterion 1.3.1 Info and Relationships](content-structure-separation-programmatic.html)*.

### Specific Benefits of Success Criterion 2.4.6:

-   Descriptive headings are especially helpful for users who have disabilities that make reading slow and for people with limited short-term memory. These people benefit when section titles make it possible to predict what each section contains.

-   People who have difficulty using their hands or who experience pain when doing so will benefit from techniques that reduce the number of keystrokes required to reach the content they need.

-   This Success Criterion helps people who use screen readers by ensuring that labels and headings are meaningful when read out of context, for example, in a Table of Contents, or when jumping from heading to heading within a page.

    This Success Criterion may also help users with low vision who can see only a few words at a time.

Examples of Success Criterion 2.4.6
-----------------------------------

-   **A news site.**

    The home page of a news site lists the headlines for the top stories of the hour. Under each heading are the first 35 words of the story and a link to the full article. Each headline gives a clear idea of the article's subject.

-   **A guide on how to write well**

    A guide on writing contains the following section titles: How To Write Well, Cut Out Useless Words, Identify Unnecessary Words, etc. The section headings are clear and concise and the structure of the information is reflected in the structure of the headings.

-   **Consistent headings in different articles**

    A Web site contains papers from a conference. Submissions to the conference are required to have the following organization: Summary, Introduction, \[other sections unique to this article\], Conclusion, Author Biography, Glossary, and Bibliography. The title of each Web page clearly identifies the article it contains, creating a useful balance between the uniqueness of the articles and the consistency of the section headings.

-   **A form asking the name of the user**

    A form asks the name of the user. It consists of two input fields to ask for the first and last name. The first field is labeled "First name", the second is labeled "Last name"."

Related Resources
-----------------

Resources are for information purposes only, no endorsement implied.

-   [How Users Read on the Web](https://www.nngroup.com/articles/how-users-read-on-the-web/) A study showing that most users scan Web pages rather than reading them word by word.

-   [Applying Writing Guidelines to Web Pages](https://www.nngroup.com/articles/applying-writing-guidelines-web-pages/) A report on the effects of making Web sites concise, easy to scan, and objective.

Techniques and Failures for Success Criterion 2.4.6 - Headings and Labels
-------------------------------------------------------------------------

Each numbered item in this section represents a technique or combination of techniques that the WCAG Working Group deems sufficient for meeting this Success Criterion. However, it is not necessary to use these particular techniques. For information on using other techniques, see [Understanding Techniques for WCAG Success Criteria](http://www.w3.org/TR/2016/NOTE-UNDERSTANDING-WCAG20-20161007/understanding-techniques.html), particularly the "Other Techniques" section.

### Sufficient Techniques

1.  <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/G130" class="tech-ref">G130: Providing descriptive headings</a>

2.  <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/G131" class="tech-ref">G131: Providing descriptive labels</a>

*Note:* Headings and labels must be programmatically determined, per <a href="http://www.w3.org/TR/2008/REC-WCAG20-20081211/#content-structure-separation-programmatic" class="gl-ref">Success Criterion 1.3.1</a> .

### Additional Techniques (Advisory) for 2.4.6

Although not required for conformance, the following additional techniques should be considered in order to make content more accessible. Not all techniques can be used or would be effective in all situations.

-   Using unique section headings in a Web Page (future link)

-   Starting section headings with unique information (future link)

### Common Failures for SC 2.4.6

The following are common mistakes that are considered failures of Success Criterion 2.4.6 by the WCAG Working Group.

(No failures currently documented)

Key Terms
---------

 <span id="labeldef"></span> label  
<a href="http://www.w3.org/TR/2008/REC-WCAG20-20081211/#textdef" class="termref">text</a> or other component with a <a href="http://www.w3.org/TR/2008/REC-WCAG20-20081211/#text-altdef" class="termref">text alternative</a> that is presented to a user to identify a component within Web <a href="http://www.w3.org/TR/2008/REC-WCAG20-20081211/#contentdef" class="termref">content</a>

*Note 1:* A label is presented to all users whereas the <a href="http://www.w3.org/TR/2008/REC-WCAG20-20081211/#namedef" class="termref">name</a> may be hidden and only exposed by assistive technology. In many (but not all) cases the name and the label are the same.

*Note 2:* The term label is not limited to the label element in HTML.

-   **[Top](#top)**
-   **[Contents](Overview.html#contents "Table of Contents")**
-   **[Intro](intro.html "Introduction to Understanding WCAG 2.0")**
-   [**Previous:** SC 2.4.5 \[Multiple Ways\]](navigation-mechanisms-mult-loc.html "Understanding SC  2.4.5 [Multiple Ways]")
-   [**Next:** SC 2.4.7 \[Focus Visible\]](navigation-mechanisms-focus-visible.html "Understanding SC  2.4.7 [Focus Visible]")

This Web page is part of [Understanding WCAG 2.0: A guide to understanding and implementing WCAG 2.0](Overview.html) (see the [latest version of this document](http://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-descriptive.html)). The entire document is also available as a [single HTML file](complete.html). See the [The WCAG 2.0 Documents](http://www.w3.org/WAI/intro/wcag20) for an explanation of how this document fits in with other Web Content Accessibility Guidelines (WCAG) 2.0 documents. To send public comments, please follow the [Instructions for Commenting on WCAG 2.0 Documents](http://www.w3.org/WAI/WCAG20/comments/).

[Copyright](http://www.w3.org/Consortium/Legal/ipr-notice#Copyright) © 2016 [W3C](http://www.w3.org/)<sup>®</sup> ([MIT](http://www.csail.mit.edu/), [ERCIM](http://www.ercim.eu/), [Keio](http://www.keio.ac.jp/), [Beihang](http://ev.buaa.edu.cn/)). W3C [liability](http://www.w3.org/Consortium/Legal/ipr-notice#Legal_Disclaimer), [trademark](http://www.w3.org/Consortium/Legal/ipr-notice#W3C_Trademarks) and [document use](http://www.w3.org/Consortium/Legal/copyright-documents) rules apply.
