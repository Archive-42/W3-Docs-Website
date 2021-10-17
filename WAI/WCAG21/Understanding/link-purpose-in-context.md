-   [Contents](. "Table of Contents")
-   [GL: Navigable](navigable)
-   [Previous SC: Focus Order](focus-order)
-   [Next SC: Multiple Ways](multiple-ways)

On this page:

-   [Intent](#intent)
-   [Benefits](#benefits)
-   [Examples](#examples)
-   [Related Resources](#resources)
-   [Techniques](#techniques)
-   [Test Rules](#test-rules)
-   [Key Terms](#key-terms)

Understanding Success Criterion 2.4.4: Link Purpose (In Context)
================================================================

> Success Criterion [2.4.4 Link Purpose (In Context)](https://www.w3.org/TR/WCAG21/#link-purpose-in-context) (Level A): The [purpose of each link](#dfn-link-purpose) can be determined from the link text alone or from the link text together with its [programmatically determined link context](#dfn-programmatically-determined-link-context), except where the purpose of the link would be [ambiguous to users in general](#dfn-ambiguous-to-users-in-general).

Intent
------

The intent of this Success Criterion is to help users understand the purpose of each link so they can decide whether they want to follow the link. Whenever possible, provide link text that identifies the purpose of the link without needing additional context. Assistive technology has the ability to provide users with a list of links that are on the Web page. Link text that is as meaningful as possible will aid users who want to choose from this list of links. Meaningful link text also helps those who wish to tab from link to link. Meaningful links help users choose which links to follow without requiring complicated strategies to understand the page.

The text of, or associated with, the link is intended to describe the purpose of the link. In cases where the link takes one to a document or a web application, the name of the document or web application would be sufficient to describe the purpose of the link (which is to take you to the document or web application). Note that it is not required to use the name of the document or web application; other things may also describe the purpose of the link.

<a href="page-titled" class="understanding">Success Criterion 2.4.2</a> deals with the titles of pages. Here also, the name of a document or web application being presented on the page would be sufficient to describe the purpose of the page. Having the link and the title agree, or be very similar, is good practice and provides continuity between the link 'clicked on' and the web page that the user lands on.

In some situations, authors may want to provide part of the description of the link in logically related text that provides the context for the link. In this case the user should be able to identify the purpose of the link without moving focus from the link. In other words, they can arrive on a link and find out more about it without losing their place. This can be achieved by putting the description of the link in the same sentence, paragraph, list item, or table cell as the link, or in the table header cell for a link in a data table, because these are directly associated with the link itself. Alternatively, authors may choose to use an ARIA technique to associate additional text on the page with the link.

This context will be most usable if it precedes the link. (For instance, if you must use ambiguous link text, it is better to put it at the end of the sentence that describes its destination, rather than putting the ambiguous phrase at the beginning of the sentence.) If the description follows the link, there can be confusion and difficulty for screen reader users who are reading through the page in order (top to bottom).

It is a best practice for links with the same destination to have consistent text (and this is a requirement per <a href="consistent-identification" class="guideline">Success Criterion 3.2.4</a> for pages in a set). It is also a best practice for links with different purposes and destinations to have different link text.

A best practice for links to [conforming alternate versions](#dfn-conforming-alternate-version) is to ensure that the link text to the conforming alternate version indicates in link text that the page it leads to represents the more accessible version. This information may also be provided in text - the goal is to ensure that the end user knows what the purpose of the link is.

The Success Criterion includes an exception for links for which the purpose of the link cannot be determined from the information on the Web page. In this situation, the person with the disability is not at a disadvantage; there is no additional context available to understand the link purpose. However, whatever amount of context is available on the Web page that can be used to interpret the purpose of the link must be made available in the link text or programmatically associated with the link to satisfy the Success Criterion.

Note

There may be situations where the purpose of the link is is supposed to be unknown or obscured. For instance, a game may have links identified only as door \#1, door \#2, and door \#3. This link text would be sufficient because the purpose of the links is to create suspense for all users.

See also [2.4.9: Link Purpose (Link Only)](link-purpose-link-only).

Benefits
--------

-   This Success Criterion helps people with motion impairment by letting them skip links that they are not interested in, avoiding the keystrokes needed to visit the referenced content and then returning to the current content.
-   People with cognitive limitations will not become disoriented by multiple means of navigation to and from content they are not interested in.
-   People with visual disabilities will be able to determine the purpose of a link by exploring the link's context.

Examples
--------

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

Techniques
----------

Each numbered item in this section represents a technique or combination of techniques that the WCAG Working Group deems sufficient for meeting this Success Criterion. However, it is not necessary to use these particular techniques. For information on using other techniques, see [Understanding Techniques for WCAG Success Criteria](understanding-techniques), particularly the "Other Techniques" section.

### Sufficient Techniques

1.  <a href="https://www.w3.org/WAI/WCAG21/Techniques/general/G91" class="general">G91: Providing link text that describes the purpose of a link</a>
2.  <a href="https://www.w3.org/WAI/WCAG21/Techniques/html/H30" class="html">H30: Providing link text that describes the purpose of a link for anchor elements</a>
3.  <a href="https://www.w3.org/WAI/WCAG21/Techniques/html/H24" class="html">H24: Providing text alternatives for the area elements of image maps</a>
4.  Allowing the user to choose short or long link text using one of the techniques below:

    -   <a href="https://www.w3.org/WAI/WCAG21/Techniques/general/G189" class="general">G189: Providing a control near the beginning of the Web page that changes the link text</a>
    -   <a href="https://www.w3.org/WAI/WCAG21/Techniques/client-side-script/SCR30" class="script">SCR30: Using scripts to change the link text</a>
    -   <a href="https://www.w3.org/WAI/WCAG21/Techniques//FLASH7" class="flash">FLASH7:</a>

5.  <a href="https://www.w3.org/WAI/WCAG21/Techniques/general/G53" class="general">G53: Identifying the purpose of a link using link text combined with the text of the enclosing sentence</a>
6.  Providing a supplemental description of the purpose of a link using one of the following techniques:

    -   <a href="https://www.w3.org/WAI/WCAG21/Techniques/html/H33" class="html">H33: Supplementing link text with the title attribute</a>
    -   <a href="https://www.w3.org/WAI/WCAG21/Techniques/css/C7" class="css">C7: Using CSS to hide a portion of the link text</a>

7.  Identifying the purpose of a link using link text combined with programmatically determined link context using one of the following techniques:

    -   <a href="https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA7" class="aria">ARIA7: Using aria-labelledby for link purpose</a>
    -   <a href="https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA8" class="aria">ARIA8: Using aria-label for link purpose</a>
    -   <a href="https://www.w3.org/WAI/WCAG21/Techniques/html/H77" class="html">H77: Identifying the purpose of a link using link text combined with its enclosing list item</a>
    -   <a href="https://www.w3.org/WAI/WCAG21/Techniques/html/H78" class="html">H78: Identifying the purpose of a link using link text combined with its enclosing paragraph</a>
    -   <a href="https://www.w3.org/WAI/WCAG21/Techniques/html/H79" class="html">H79: Identifying the purpose of a link in a data table using the link text combined with its enclosing table cell and associated table header cells</a>
    -   <a href="https://www.w3.org/WAI/WCAG21/Techniques/html/H81" class="html">H81: Identifying the purpose of a link in a nested list using link text combined with the parent list item under which the list is nested</a>

8.  <a href="https://www.w3.org/WAI/WCAG21/Techniques/general/G91" class="general">G91: Providing link text that describes the purpose of a link</a> **AND** Semantically indicating links using one of the following techniques:

    -   <a href="https://www.w3.org/WAI/WCAG21/Techniques/pdf/PDF11" class="pdf">PDF11: Providing links and link text using the Link annotation and the /Link structure element in PDF documents</a>
    -   <a href="https://www.w3.org/WAI/WCAG21/Techniques/pdf/PDF13" class="pdf">PDF13: Providing replacement text using the /Alt entry for links in PDF documents</a>
    -   <a href="https://www.w3.org/WAI/WCAG21/Techniques/silverlight/SL18" class="silverlight">SL18: Providing Text Equivalent for Nontext Silverlight Controls With AutomationProperties.Name</a>

### Advisory Techniques

Although not required for conformance, the following additional techniques should be considered in order to make content more accessible. Not all techniques can be used or would be effective in all situations.

-   <a href="https://www.w3.org/WAI/WCAG21/Techniques/html/H2" class="html">H2: Combining adjacent image and text links for the same resource</a>
-   <a href="https://www.w3.org/WAI/WCAG21/Techniques//FLASH5" class="flash">FLASH5:</a>
-   <a href="https://www.w3.org/WAI/WCAG21/Techniques/html/H80" class="html">H80: Identifying the purpose of a link using link text combined with the preceding heading element</a>

### Failures

The following are common mistakes that are considered failures of this Success Criterion by the WCAG Working Group.

-   <a href="https://www.w3.org/WAI/WCAG21/Techniques/failures/F63" class="failure">F63: Failure of Success Criterion 2.4.4 due to providing link context only in content that is not related to the link</a>
-   <a href="https://www.w3.org/WAI/WCAG21/Techniques/failures/F89" class="failure">F89: Failure of Success Criteria 2.4.4, 2.4.9 and 4.1.2 due to not providing an accessible name for an image which is the only content in a link</a>

Test Rules
----------

The following are Test Rules for certain aspects of this Success Criterion. It is not necessary to use these particular Test Rules to check for conformance with WCAG, but they are defined and approved test methods. For information on using Test Rules, see [Understanding Test Rules for WCAG Success Criteria](understanding-act-rules.html).

-   [Link has non-empty accessible name](/WAI/standards-guidelines/act/rules/link-non-empty-accessible-name-c487ae/)

Key Terms
---------

accessibility supported

supported by users' [assistive technologies](#dfn-assistive-technology) as well as the accessibility features in browsers and other [user agents](#dfn-user-agent)

To qualify as an accessibility-supported use of a Web content technology (or feature of a technology), both 1 and 2 must be satisfied for a Web content technology (or feature):

1.  **The way that the [Web content technology](#dfn-technology) is used must be supported by users' assistive technology (AT).** This means that the way that the technology is used has been tested for interoperability with users' assistive technology in the [human language(s)](#dfn-human-language) of the content,

    **AND**

2.  **The Web content technology must have accessibility-supported user agents that are available to users.** This means that at least one of the following four statements is true:

    1.  The technology is supported natively in widely-distributed user agents that are also accessibility supported (such as HTML and CSS);

        **OR**

    2.  The technology is supported in a widely-distributed plug-in that is also accessibility supported;

        **OR**

    3.  The content is available in a closed environment, such as a university or corporate network, where the user agent required by the technology and used by the organization is also accessibility supported;

        **OR**

    4.  The user agent(s) that support the technology are accessibility supported and are available for download or purchase in a way that:

        -   does not cost a person with a disability any more than a person without a disability **and**
        -   is as easy to find and obtain for a person with a disability as it is for a person without disabilities.

Note

The Accessibility Guidelines Working Group and the W3C do not specify which or how much support by assistive technologies there must be for a particular use of a Web technology in order for it to be classified as accessibility supported. (See [Level of Assistive Technology Support Needed for "Accessibility Support"](https://www.w3.org/WAI/WCAG21/Understanding/conformance#support-level).)

Note

Web technologies can be used in ways that are not accessibility supported as long as they are not [relied upon](#dfn-relied-upon) and the page as a whole meets the conformance requirements, including [Conformance Criterion 4](#cc4) and [Conformance Criterion 5](#cc5), are met.

Note

When a [Web Technology](#dfn-technology) is used in a way that is "accessibility supported," it does not imply that the entire technology or all uses of the technology are supported. Most technologies, including HTML, lack support for at least one feature or use. Pages conform to WCAG only if the uses of the technology that are accessibility supported can be relied upon to meet WCAG requirements.

Note

When citing Web content technologies that have multiple versions, the version(s) supported should be specified.

Note

One way for authors to locate uses of a technology that are accessibility supported would be to consult compilations of uses that are documented to be accessibility supported. (See [Understanding Accessibility-Supported Web Technology Uses](https://www.w3.org/WAI/WCAG21/Understanding/conformance#documented-lists).) Authors, companies, technology vendors, or others may document accessibility-supported ways of using Web content technologies. However, all ways of using technologies in the documentation would need to meet the definition of accessibility-supported Web content technologies above.

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

conforming alternate version

version that

1.  conforms at the designated level, and
2.  provides all of the same information and [functionality](#dfn-functionality) in the same [human language](#dfn-human-language), and
3.  is as up to date as the non-conforming content, and
4.  for which at least one of the following is true:

    1.  the conforming version can be reached from the non-conforming page via an [accessibility-supported](#dfn-accessibility-supported) [mechanism](#dfn-mechanism), or
    2.  the non-conforming version can only be reached from the conforming version, or
    3.  the non-conforming version can only be reached from a conforming page that also provides a mechanism to reach the conforming version

Note

In this definition, "can only be reached" means that there is some mechanism, such as a conditional redirect, that prevents a user from "reaching" (loading) the non-conforming page unless the user had just come from the conforming version.

Note

The alternate version does not need to be matched page for page with the original (e.g., the conforming alternate version may consist of multiple pages).

Note

If multiple language versions are available, then conforming alternate versions are required for each language offered.

Note

Alternate versions may be provided to accommodate different technology environments or user groups. Each version should be as conformant as possible. One version would need to be fully conformant in order to meet [conformance requirement 1](#cc1).

Note

The conforming alternative version does not need to reside within the scope of conformance, or even on the same Web site, as long as it is as freely available as the non-conforming version.

Note

Alternate versions should not be confused with [supplementary content](#dfn-supplemental-content), which support the original page and enhance comprehension.

Note

Setting user preferences within the content to produce a conforming version is an acceptable mechanism for reaching another version as long as the method used to set the preferences is accessibility supported.

See [Understanding Conforming Alternate Versions](https://www.w3.org/WAI/WCAG21/Understanding/conformance#conforming-alt-versions)

content

information and sensory experience to be communicated to the user by means of a [user agent](#dfn-user-agent), including code or markup that defines the content's [structure](#dfn-structure), [presentation](#dfn-presentation), and interactions

functionality

[processes](#dfn-process) and outcomes achievable through user action

human language

language that is spoken, written or signed (through visual or tactile means) to communicate with humans

Note

See also [sign language](#dfn-sign-language).

link purpose

nature of the result obtained by activating a hyperlink

mechanism

[process](#dfn-process) or technique for achieving a result

Note

The mechanism may be explicitly provided in the content, or may be [relied upon](#dfn-relied-upon) to be provided by either the platform or by [user agents](#dfn-user-agent), including [assistive technologies](#dfn-assistive-technology).

Note

The mechanism needs to meet all success criteria for the conformance level claimed.

presentation

rendering of the [content](#dfn-content) in a form to be perceived by users

process

series of user actions where each action is required in order to complete an activity

Successful use of a series of Web pages on a shopping site requires users to view alternative products, prices and offers, select products, submit an order, provide shipping information and provide payment information.

An account registration page requires successful completion of a Turing test before the registration form can be accessed.

programmatically determined

determined by software from author-supplied data provided in a way that different [user agents](#dfn-user-agent), including [assistive technologies](#dfn-assistive-technology), can extract and present this information to users in different modalities

Note

Determined in a markup language from elements and attributes that are accessed directly by commonly available assistive technology.

Note

Determined from technology-specific data structures in a non-markup language and exposed to assistive technology via an accessibility API that is supported by commonly available assistive technology.

programmatically determined link context

additional information that can be [programmatically determined](#dfn-programmatically-determined) from [relationships](#dfn-relationships) with a link, combined with the link text, and presented to users in different modalities

In HTML, information that is programmatically determinable from a link in English includes text that is in the same paragraph, list, or table cell as the link or in a table header cell that is associated with the table cell that contains the link.

Note

Since screen readers interpret punctuation, they can also provide the context from the current sentence, when the focus is on a link in that sentence.

relationships

meaningful associations between distinct pieces of content

relied upon

the content would not [conform](#dfn-conformance) if that [technology](#dfn-technology) is turned off or is not supported

sign language

a language using combinations of movements of the hands and arms, facial expressions, or body positions to convey meaning

structure

1.  The way the parts of a [Web page](#dfn-web-page) are organized in relation to each other; and
2.  The way a collection of [Web pages](#dfn-web-page) is organized

supplemental content

additional [content](#dfn-content) that illustrates or clarifies the primary content

An audio version of a [Web page](#dfn-web-page).

An illustration of a complex [process](#dfn-process).

A paragraph summarizing the major outcomes and recommendations made in a research study.

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

web page

a non-embedded resource obtained from a single URI using HTTP plus any other resources that are used in the rendering or intended to be rendered together with it by a [user agent](#dfn-user-agent)

Note

Although any "other resources" would be rendered together with the primary resource, they would not necessarily be rendered simultaneously with each other.

Note

For the purposes of conformance with these guidelines, a resource must be "non-embedded" within the scope of conformance to be considered a Web page.

A Web resource including all embedded images and media.

A Web mail program built using Asynchronous JavaScript and XML (AJAX). The program lives entirely at http://example.com/mail, but includes an inbox, a contacts area and a calendar. Links or buttons are provided that cause the inbox, contacts, or calendar to display, but do not change the URI of the page as a whole.

A customizable portal site, where users can choose content to display from a set of different content modules.

When you enter "http://shopping.example.com/" in your browser, you enter a movie-like interactive shopping environment where you visually move around in a store dragging products off of the shelves around you and into a visual shopping cart in front of you. Clicking on a product causes it to be demonstrated with a specification sheet floating alongside. This might be a single-page Web site or just one page within a Web site.
