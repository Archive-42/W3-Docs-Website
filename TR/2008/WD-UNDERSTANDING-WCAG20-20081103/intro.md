[<img src="http://www.w3.org/Icons/w3c_home" alt="W3C" width="72" height="48" />](http://www.w3.org/)

[Understanding WCAG 2.0](http://www.w3.org/TR/2008/WD-UNDERSTANDING-WCAG20-20081103/)

[Skip to Content (Press Enter)](#maincontent)

<span id="top"></span>

-   **[Contents](http://www.w3.org/TR/2008/WD-UNDERSTANDING-WCAG20-20081103/#contents "Table of Contents")**
-   **[Intro](intro.html "Introduction to Understanding WCAG 2.0")**
-   [**Next:** Guideline 1.1 \[Text Alternatives\]](text-equiv.html "Understanding Guideline  1.1 [Text Alternatives]")

On this page:

-   [Understanding the Four Principles of Accessibility](#introduction-fourprincs-head)
-   [Layers of Guidance](#introduction-layers-head)

<span id="maincontent">-</span>

<span id="intro"></span> Introduction to Understanding WCAG 2.0
===============================================================

Understanding WCAG 2.0 is an essential guide to understanding and using "Web Content Accessibility Guidelines 2.0" [\[WCAG20\]](appendixD.html#WCAG20) Although the normative definition and requirements for WCAG 2.0 can all be found in the WCAG 2.0 document itself, the concepts and provisions may be new to some people. Understanding WCAG 2.0 provides a non-normative extended commentary on each guideline and each Success Criterion to help readers better understand the intent and how the guidelines and Success Criteria work together. It also provides examples of techniques or combinations of techniques that the Working Group has identified as being sufficient to meet each Success Criterion. Links are then provided to write-ups for each of the techniques.

This is not an introductory document. It is a detailed technical description of the guidelines and their Success Criteria. For an introduction to WCAG 2.0 and the complete set of documents associated with the guidelines, see [Overview of Web Content Accessibility Guidelines (WCAG) 2.0 Documents](/WAI/intro/wcag20).

Understanding WCAG 2.0 is organized by guideline. There is an *Understanding Guideline X.X* section for each guideline. The intent and any advisory techniques that are related to the guideline but not specifically related to any of its Success Criteria are listed there as well.

The *Understanding Guidelines X.X* section is then followed by a *Understanding Success Criterion X.X.X* section for each Success Criterion of that guideline. These How to Meet sections each contain:

-   The Success Criterion as it appears in WCAG 2.0

-   Intent of the Success Criterion

-   Benefits (how the Success Criterion helps people with disabilities)

-   Examples

-   Related Resources

-   Techniques or combinations of techniques that are sufficient to meet the guidelines

-   Common failures of this Success Criterion

-   Additional advisory techniques that go beyond what is required to meet the Success Criterion but can be used to make some or all types of content more accessible. Use of advisory techniques does not impact the level of conformance claimed.

-   Key terms for this Success Criterion (taken from the WCAG 2.0 Glossary)

Links are provided from each Guideline in WCAG 2.0 directly to each *Understanding Guideline X.X* in this document. Similarly, there is a link from each Success Criterion in WCAG 2.0 to the *Understanding Success Criterion X.X.X* section in this document.

For information about individual techniques, follow the links throughout this document to the techniques of interest in the [Techniques for WCAG 2.0](/TR/WCAG20-TECHS/) document.

For links to information on different disabilities and assistive technologies see [Disabilities on Wikipedia](http://en.wikipedia.org/wiki/Disabilities).

Understanding the Four Principles of Accessibility
--------------------------------------------------

The guidelines and Success Criteria are organized around the following four principles, which lay the foundation necessary for anyone to access and use Web content. Anyone who wants to use the Web must have content that is:

1.  Perceivable - Information and user interface components must be presentable to users in ways they can perceive

    -   This means that users must be able to perceive the information being presented (it can't be invisible to all of their senses)

2.  Operable - User interface components and navigation must be operable

    -   This means that users must be able to operate the interface (the interface cannot require interaction that a user cannot perform)

3.  Understandable - Information and the operation of user interface must be understandable

    -   This means that users must be able to understand the information as well as the operation of the user interface (the content or operation cannot be beyond their understanding)

4.  Robust - Content must be robust enough that it can be interpreted reliably by a wide variety of user agents, including assistive technologies

    -   This means that users must be able to access the content as technologies advance (as technologies and user agents evolve, the content should remain accessible)

If any of these are not true, users with disabilities will not be able to use the Web.

Under each of the principles are guidelines and Success Criteria that help to address these principles for people with disabilities. There are many general usability guidelines that make content more usable by all people, including those with disabilities. However, in WCAG 2.0, we only include those guidelines that address problems particular to people with disabilities. This includes issues that block access or interfere with access to the Web more severely for people with disabilities.

Layers of Guidance
------------------

### The Guidelines

Under each principle there is a list of guidelines that address the principle. There are a total of 12 guidelines. A convenient list of just the guidelines can be found in the [WCAG 2.0 table of contents](http://www.w3.org/TR/2008/PR-WCAG20-20081103/#contents). One of the key objectives of the guidelines is to ensure that content is directly accessible to as many people as possible, and capable of being re-presented in different forms to match different peoples' sensory, physical and cognitive abilities.

### Success Criteria

Under each guideline, there are Success Criteria that describe specifically what must be achieved in order to [conform](http://www.w3.org/TR/2008/PR-WCAG20-20081103/#conformancedef) to this standard. They are similar to the "checkpoints" in WCAG 1.0. Each Success Criterion is written as a statement that will be either true or false when specific Web content is tested against it. The Success Criteria are written to be technology neutral.

All WCAG 2.0 Success Criteria are written as testable criteria for objectively determining if content satisfies the Success Criteria. While some of the testing can be automated using software evaluation programs, others require human testers for part or all of the test.

Although content may satisfy the Success Criteria, the content may not always be usable by people with a wide variety of disabilities. Professional reviews utilizing recognized qualitative heuristics are important in achieving accessibility for some audiences. In addition , usability testing is recommended. Usability testing aims to determine how well people can use the content for its intended purpose.

The content should be tested by those who understand how people with different types of disabilities use the Web. It is recommended that users with disabilities be included in test groups when performing human testing.

Each Success Criterion for a guideline has a link to the section of the How to Meet document that provides:

-   sufficient techniques for meeting the Success Criterion,

-   optional advisory techniques, and

-   links to descriptions of the intent of the Success Criteria, including benefits, and examples

### Sufficient and Advisory Techniques

Rather than having technology specific techniques in WCAG 2.0, the guidelines and Success Criteria themselves have been written in a technology neutral fashion. In order to provide guidance and examples for meeting the guidelines using specific technologies (for example HTML) the working group has identified ***sufficient techniques*** for each Success Criterion that are sufficient to meet that Success Criterion. The list of sufficient techniques is maintained in the "Understanding WCAG 2.0" (and mirrored in How to Meet WCAG 2.0). In this way it is possible to update the list as new techniques are discovered, and as Web Technologies and Assistive Technologies progress.

Note that all techniques are [informative](http://www.w3.org/TR/2008/PR-WCAG20-20081103/#informativedef). The "sufficient techniques" are considered sufficient by the WCAG Working Group to meet the success criteria. However, it is not necessary to use these particular techniques. If techniques are used other than those listed by the Working Group, then some other method for establishing the technique's ability to meet the Success Criteria would be needed

Most Success Criteria have multiple sufficient techniques listed. Any of the listed sufficient techniques can be used to meet the Success Criterion. There may be other techniques which are not documented by the working group that could also meet the Success Criterion. As new sufficient techniques are identified they will be added to the listing.

In addition to the sufficient techniques, there are a number of ***advisory techniques*** that can enhance accessibility, but did not qualify as sufficient techniques because are not sufficient to meet the full requirements of the Success Criteria, they are not testable, and/or are good and effective techniques in some circumstances but not effective or helpful in others. These are listed as advisory techniques and are right below the sufficient techniques. Authors are encouraged to use these techniques wherever appropriate to increase accessibility of their Web pages.

**Editorial Note**: Where the committee has not yet been able to write up the description of a technique, the techniques are listed with "(future link)" following their title.

------------------------------------------------------------------------

-   **[Top](#top)**
-   **[Contents](http://www.w3.org/TR/2008/WD-UNDERSTANDING-WCAG20-20081103/#contents "Table of Contents")**
-   **[Intro](intro.html "Introduction to Understanding WCAG 2.0")**
-   [**Next:** Guideline 1.1 \[Text Alternatives\]](text-equiv.html "Understanding Guideline  1.1 [Text Alternatives]")

This Web page is part of [Understanding WCAG 2.0: A guide to understanding and implementing WCAG 2.0](http://www.w3.org/TR/2008/WD-UNDERSTANDING-WCAG20-20081103/). The entire document is also available as a [single HTML file](complete.html). See the [Overview of WCAG 2.0 Documents](http://www.w3.org/WAI/intro/wcag20) for an explanation of how this document fits in with other Web Content Accessibility Guidelines (WCAG) 2.0 documents.

[Copyright](http://www.w3.org/Consortium/Legal/ipr-notice#Copyright) © 2008 [W3C](http://www.w3.org/)<sup>®</sup> ([MIT](http://www.csail.mit.edu/), [ERCIM](http://www.ercim.org/), [Keio](http://www.keio.ac.jp/)), All Rights Reserved. W3C [liability](http://www.w3.org/Consortium/Legal/ipr-notice#Legal_Disclaimer), [trademark](http://www.w3.org/Consortium/Legal/ipr-notice#W3C_Trademarks) and [document use](http://www.w3.org/Consortium/Legal/copyright-documents) rules apply.
