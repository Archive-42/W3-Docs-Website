-   [Contents](. "Table of Contents")
-   [GL: Navigable](navigable)
-   [Previous SC: Location](location)
-   [Next SC: Section Headings](section-headings)

On this page:

-   [Intent](#intent)
-   [Benefits](#benefits)
-   [Examples](#examples)
-   [Related Resources](#resources)
-   [Techniques](#techniques)
-   [Test Rules](#test-rules)
-   [Key Terms](#key-terms)

Understanding Success Criterion 2.4.9: Link Purpose (Link Only)
===============================================================

> Success Criterion [2.4.9 Link Purpose (Link Only)](https://www.w3.org/TR/WCAG21/#link-purpose-link-only) (Level AAA): A [mechanism](#dfn-mechanism) is available to allow the purpose of each link to be identified from link text alone, except where the purpose of the link would be [ambiguous to users in general](#dfn-ambiguous-to-users-in-general).

Intent
------

The intent of this Success Criterion is to help users understand the purpose of each link in the content, so they can decide whether they want to follow it. Best practice is that links with the same destination would have the same descriptions, but links with different purposes and destinations would have different descriptions (see also <a href="consistent-identification" class="guideline">Success Criterion 3.2.4</a> which calls for consistency in identifying components that have the same functionality). Because the purpose of a link can be identified from its link text, links can be understood when they are out of context, such as when the user agent provides a list of all the links on a page.

The text in the link is intended to describe the purpose of the link. In cases where the link takes one to a document or a web application, the name of the document or web application would be sufficient to describe the purpose of the link (which is to take you to the document or web application). Note that it is not required to use the name of the document or web application; other things may also describe the purpose of the link.

<a href="page-titled" class="understanding">Success Criterion 2.4.2</a> deals with the titles of pages. Here also, the name of a document or web application being presented on the page would be sufficient to describe the purpose of the page. Having the link and the title agree, or be very similar, is good practice and provides continuity between the link 'clicked on' and the web page that the user lands on.

The Success Criterion includes an exception for links for which the purpose of the link cannot be determined from the information on the Web page. In this situation, the person with the disability is not at a disadvantage; there is no additional context available to understand the link purpose. However, whatever amount of context is available on the Web page that can be used to interpret the purpose of the link must be made available in the link text to satisfy the Success Criterion.

The word "mechanism" is used to allow authors to either make all links fully understandable out of context by default or to provide a way to make them this way. This is done because for some pages, making the links all unambiguous by themselves makes the pages easier for some users and harder for others. Providing the ability to make the links unambiguous (by them selves) or not provides both users with disabilities with the ability to use the page in the format that best meets their needs.

For example: A page listing 100 book titles along with links to download the books in HTML, PDF, DOC, TXT, MP3, or AAC might ordinarily be viewed as the title of the book as a link with the words "in HTML" after it. then the sentence "Also available in: " followed by a series of short links with text of "HTML", "PDF", "DOC", "TXT", "MP3", and "AAC". At Level 3, some users could opt to view the page this way - because they would find the page harder to understand or slower to use if the full title of the book were included in each of the links. Others could opt to view the page with the full title as part of each of the links so that each link was understandable in itself. Both the former and the latter groups could include people with visual or cognitive disabilities that used different techniques to browse or that had different types or severities of disability.

Benefits
--------

-   This Success Criterion helps people with motion impairment by letting them skip Web pages that they are not interested in, avoiding the keystrokes needed to visit the referenced content and then return to the current content.
-   People with cognitive limitations will not become disoriented by extra navigation to and from content they are not interested in.
-   People with visual disabilities will benefit from not losing their place in the content when they return to the original page. The screen reader's list of links is more useful for finding information because the target of the links are described.

Examples
--------

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

Techniques
----------

Each numbered item in this section represents a technique or combination of techniques that the WCAG Working Group deems sufficient for meeting this Success Criterion. However, it is not necessary to use these particular techniques. For information on using other techniques, see [Understanding Techniques for WCAG Success Criteria](understanding-techniques), particularly the "Other Techniques" section.

### Sufficient Techniques

1.  <a href="https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA8" class="aria">ARIA8: Using aria-label for link purpose</a>
2.  <a href="https://www.w3.org/WAI/WCAG21/Techniques/general/G91" class="general">G91: Providing link text that describes the purpose of a link</a>
3.  <a href="https://www.w3.org/WAI/WCAG21/Techniques/html/H30" class="html">H30: Providing link text that describes the purpose of a link for anchor elements</a>
4.  <a href="https://www.w3.org/WAI/WCAG21/Techniques/html/H24" class="html">H24: Providing text alternatives for the area elements of image maps</a>
5.  Allowing the user to choose short or long link text using one of the techniques below:

    -   <a href="https://www.w3.org/WAI/WCAG21/Techniques/general/G189" class="general">G189: Providing a control near the beginning of the Web page that changes the link text</a>
    -   <a href="https://www.w3.org/WAI/WCAG21/Techniques/client-side-script/SCR30" class="script">SCR30: Using scripts to change the link text</a>
    -   <a href="https://www.w3.org/WAI/WCAG21/Techniques//FLASH7" class="flash">FLASH7:</a>

6.  Providing a supplemental description of the purpose of a link using one of the following techniques:

    -   <a href="https://www.w3.org/WAI/WCAG21/Techniques/css/C7" class="css">C7: Using CSS to hide a portion of the link text</a>

7.  Semantically indicating links using one of the following techniques:

    -   <a href="https://www.w3.org/WAI/WCAG21/Techniques/pdf/PDF11" class="pdf">PDF11: Providing links and link text using the Link annotation and the /Link structure element in PDF documents</a>
    -   <a href="https://www.w3.org/WAI/WCAG21/Techniques/pdf/PDF13" class="pdf">PDF13: Providing replacement text using the /Alt entry for links in PDF documents</a>
    -   <a href="https://www.w3.org/WAI/WCAG21/Techniques/silverlight/SL18" class="silverlight">SL18: Providing Text Equivalent for Nontext Silverlight Controls With AutomationProperties.Name</a>

### Advisory Techniques

Although not required for conformance, the following additional techniques should be considered in order to make content more accessible. Not all techniques can be used or would be effective in all situations.

-   <a href="https://www.w3.org/WAI/WCAG21/Techniques/html/H2" class="html">H2: Combining adjacent image and text links for the same resource</a>
-   <a href="https://www.w3.org/WAI/WCAG21/Techniques//FLASH5" class="flash">FLASH5:</a>
-   <a href="https://www.w3.org/WAI/WCAG21/Techniques/html/H33" class="html">H33: Supplementing link text with the title attribute</a>

### Failures

The following are common mistakes that are considered failures of this Success Criterion by the WCAG Working Group.

-   <a href="https://www.w3.org/WAI/WCAG21/Techniques/failures/F84" class="failure">F84: Failure of Success Criterion 2.4.9 due to using a non-specific link such as "click here" or "more" without a mechanism to change the link text to specific text.</a>
-   <a href="https://www.w3.org/WAI/WCAG21/Techniques/failures/F89" class="failure">F89: Failure of Success Criteria 2.4.4, 2.4.9 and 4.1.2 due to not providing an accessible name for an image which is the only content in a link</a>

Test Rules
----------

The following are Test Rules for certain aspects of this Success Criterion. It is not necessary to use these particular Test Rules to check for conformance with WCAG, but they are defined and approved test methods. For information on using Test Rules, see [Understanding Test Rules for WCAG Success Criteria](understanding-act-rules.html).

-   [Link has non-empty accessible name](/WAI/standards-guidelines/act/rules/link-non-empty-accessible-name-c487ae/)

Key Terms
---------

ambiguous to users in general

the purpose cannot be determined from the link and all information of the Web page presented to the user simultaneously with the link (i.e., readers without disabilities would not know what a link would do until they activated it)

The word guava in the following sentence "One of the notable exports is guava" is a link. The link could lead to a definition of guava, a chart listing the quantity of guava exported or a photograph of people harvesting guava. Until the link is activated, all readers are unsure and the person with a disability is not at any disadvantage.

assistive technology

hardware and/or software that acts as a [user agent](#dfn-user-agent), or along with a mainstream user agent, to provide functionality to meet the requirements of users with disabilities that go beyond those offered by mainstream user agents

Note

functionality provided by assistive technology includes alternative presentations (e.g., as synthesized speech or magnified content), alternative input methods (e.g., voice), additional navigation or orientation mechanisms, and content transformations (e.g., to make tables more accessible).

Note

Assistive technologies often communicate data and messages with mainstream user agents by using and monitoring APIs.

Note

The distinction between mainstream user agents and assistive technologies is not absolute. Many mainstream user agents provide some features to assist individuals with disabilities. The basic difference is that mainstream user agents target broad and diverse audiences that usually include people with and without disabilities. Assistive technologies target narrowly defined populations of users with specific disabilities. The assistance provided by an assistive technology is more specific and appropriate to the needs of its target users. The mainstream user agent may provide important functionality to assistive technologies like retrieving Web content from program objects or parsing markup into identifiable bundles.

Assistive technologies that are important in the context of this document include the following:

-   screen magnifiers, and other visual reading assistants, which are used by people with visual, perceptual and physical print disabilities to change text font, size, spacing, color, synchronization with speech, etc. in order to improve the visual readability of rendered text and images;
-   screen readers, which are used by people who are blind to read textual information through synthesized speech or braille;
-   text-to-speech software, which is used by some people with cognitive, language, and learning disabilities to convert text into synthetic speech;
-   speech recognition software, which may be used by people who have some physical disabilities;
-   alternative keyboards, which are used by people with certain physical disabilities to simulate the keyboard (including alternate keyboards that use head pointers, single switches, sip/puff and other special input devices.);
-   alternative pointing devices, which are used by people with certain physical disabilities to simulate mouse pointing and button activations.

conformance

satisfying all the requirements of a given standard, guideline or specification

mechanism

[process](#dfn-process) or technique for achieving a result

Note

The mechanism may be explicitly provided in the content, or may be [relied upon](#dfn-relied-upon) to be provided by either the platform or by [user agents](#dfn-user-agent), including [assistive technologies](#dfn-assistive-technology).

Note

The mechanism needs to meet all success criteria for the conformance level claimed.

process

series of user actions where each action is required in order to complete an activity

Successful use of a series of Web pages on a shopping site requires users to view alternative products, prices and offers, select products, submit an order, provide shipping information and provide payment information.

An account registration page requires successful completion of a Turing test before the registration form can be accessed.

relied upon

the content would not [conform](#dfn-conformance) if that [technology](#dfn-technology) is turned off or is not supported

technology

[mechanism](#dfn-mechanism) for encoding instructions to be rendered, played or executed by [user agents](#dfn-user-agent)

Note

As used in these guidelines "Web Technology" and the word "technology" (when used alone) both refer to Web Content Technologies.

Note

Web content technologies may include markup languages, data formats, or programming languages that authors may use alone or in combination to create end-user experiences that range from static Web pages to synchronized media presentations to dynamic Web applications.

Some common examples of Web content technologies include HTML, CSS, SVG, PNG, PDF, Flash, and JavaScript.

user agent

any software that retrieves and presents Web content for users

Web browsers, media players, plug-ins, and other programs — including [assistive technologies](#dfn-assistive-technology) — that help in retrieving, rendering, and interacting with Web content.
