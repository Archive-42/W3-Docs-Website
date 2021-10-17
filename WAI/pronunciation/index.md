-   [Skip to Content](#main)
-   [Change Text Size or Colors](/WAI/meta/customize/)
-   All Translations

<a href="/WAI/" class="home"><span class="wai"><span class="wa">Web Accessibility</span> <span class="i"><span class="initieative">Initiative</span> <span>WAI</span></span></span></a>

Strategies, standards, resources to make the Web accessible to people with disabilities

Menu

-   [Get Involved](/WAI/about/participating/)
-   [About W3C WAI](/WAI/about/)
-   <span class="visuallyhidden">Search:</span>

-   [Accessibility Fundamentals](/WAI/fundamentals/)
-   [Planning & Policies](/WAI/planning/)
-   [Design & Develop](/WAI/design-develop/)
-   [Test & Evaluate](/WAI/test-evaluate/)
-   [Teach & Advocate](/WAI/teach-advocate/)
-   [Standards/Guidelines](/WAI/standards-guidelines/)

<!-- -->

-   [Home](/WAI/)
-   [Standards/Guidelines](/WAI/standards-guidelines/)
-   [Pronunciation](/WAI/pronunciation/)

-   <a href="/WAI/standards-guidelines/" class="page-link"><span>Standards/Guidelines</span></a>
-   <a href="/WAI/standards-guidelines/wcag/" class="page-link"><span>Web Content – WCAG</span></a>
    -   <a href="https://www.w3.org/WAI/WCAG21/quickref/" class="page-link"><span>How to Meet WCAG 2 (Quick Reference)</span></a>
    -   <a href="/WAI/standards-guidelines/wcag/glance/" class="page-link"><span>At a Glance</span></a>
    -   <a href="/WAI/standards-guidelines/wcag/docs/" class="page-link"><span>The Documents</span></a>
    -   <a href="/WAI/standards-guidelines/wcag/non-web-ict/" class="page-link"><span>Applying to Non-Web ICT</span></a>
    -   <a href="/WAI/standards-guidelines/wcag/new-in-22/" class="page-link"><span>New in 2.2 Draft</span></a>
    -   <a href="/WAI/standards-guidelines/wcag/new-in-21/" class="page-link"><span>New in 2.1</span></a>
    -   <a href="/WAI/standards-guidelines/wcag/translations/" class="page-link"><span>Translations</span></a>
    -   <a href="/WAI/standards-guidelines/wcag/commenting/" class="page-link"><span>Commenting</span></a>
    -   <a href="/WAI/standards-guidelines/wcag/conformance-logos/" class="page-link"><span>Conformance Logos</span></a>
    -   <a href="/WAI/standards-guidelines/wcag/faq/" class="page-link"><span>FAQ</span></a>
-   <a href="/WAI/standards-guidelines/atag/" class="page-link"><span>Authoring Tools – ATAG</span></a>
    -   <a href="/WAI/standards-guidelines/atag/glance/" class="page-link"><span>At a Glance</span></a>
-   <a href="/WAI/standards-guidelines/uaag/" class="page-link"><span>User Agents – UAAG</span></a>
-   <a href="/WAI/standards-guidelines/wcag/wcag3-intro/" class="page-link"><span>WCAG 3 Draft</span></a>
-   <a href="/WAI/standards-guidelines/aria/" class="page-link"><span>WAI-ARIA</span></a>
-   <a href="/WAI/standards-guidelines/evaluation/" class="page-link"><span>Evaluation – ACT &amp; EARL</span></a>
    -   <a href="/WAI/standards-guidelines/act/" class="page-link"><span>Accessibility Conformance Testing – ACT</span></a>
    -   <a href="/WAI/standards-guidelines/earl/" class="page-link"><span>Evaluation and Report Language – EARL</span></a>
-   <a href="/WAI/personalization/" class="page-link"><span>Personalization</span></a>
-   <a href="/WAI/pronunciation/" class="page-link"><span>Pronunciation</span></a>
-   <a href="/WAI/standards-guidelines/harmonization/" class="page-link"><span>Standards Harmonization is Essential</span></a>
-   <a href="/WAI/standards-guidelines/w3c-process/" class="page-link"><span>W3C Process for Developing Standards</span></a>
-   <a href="/WAI/standards-guidelines/linking/" class="page-link"><span>Referencing and Linking to Standards</span></a>
-   <a href="/WAI/cognitive/" class="page-link"><span>Cognitive Accessibility at W3C</span></a>
-   <a href="/WAI/standards-guidelines/mobile/" class="page-link"><span>Mobile Accessibility at W3C</span></a>

Pronunciation Overview
======================

Summary

This page introduces work to enable screen readers and voice assistants to pronounce words correctly.

The goal is to provide standards and best practices for text-to-speech (TTS) synthesis of HTML content.

Quick link to latest publication:

-   [Specification for Spoken Presentation in HTML *(Working Draft Note)*](https://www.w3.org/TR/spoken-html/)

Page Contents

-   <a href="#introduction" id="markdown-toc-introduction">Introduction</a>
-   <a href="#explainer-and-user-scenarios" id="markdown-toc-explainer-and-user-scenarios">Explainer and User Scenarios</a>
-   <a href="#exploring-technical-solutions" id="markdown-toc-exploring-technical-solutions">Exploring Technical Solutions</a>
-   <a href="#who-develops-the-pronunciation-documents" id="markdown-toc-who-develops-the-pronunciation-documents">Who Develops the Pronunciation Documents</a>
-   <a href="#contributing-to-the-work" id="markdown-toc-contributing-to-the-work">Contributing to the Work</a>

Introduction
------------

Most people who are blind rely on text-to-speech (TTS) software called screen readers. Some people with cognitive disabilities who have difficulty processing written text also use screen readers. Text-to-speech is essential for people with disabilities and useful for all.

TTS is now widely used in popular applications such as voice assistants. Many computers and mobile devices today have built in text-to-speech functionality that is used by people without disabilities in different situations, such as when they lose their glasses or their eyes are tired.

Accurate pronunciation is essential in many situations, such as education and assessment (testing students).

Currently text-to-speech pronunciation is often inaccurate and inconsistent because of technology limitations. For example, incorrect pronunciation may be based on context, regional variation, or emphasis.

Examples:

The address:  
“123 Maple Dr., St. Paul, Minn” is often spoken by TTS as:  
“123 maple doctor, street paul, min” instead of:  
“123 Maple Drive, Saint Paul, Minnesota”.

“Reading” is pronounced differently if it is the city in England or in the phrase “reading a book”.

W3C is developing normative specifications (standards) and guidance on best practices so that text-to-speech (TTS) synthesis pronounce HTML content (for example, web pages) correctly. This will allow content creators specify how words should be pronounced.

Explainer and User Scenarios
----------------------------

[Explainer: Improving Spoken Presentation on the Web](https://www.w3.org/TR/pronunciation-explainer/) provides an overview of the work. It:

-   Briefly introduces the context for W3C work on pronunciation
-   Describes the advantages and disadvantages of two approaches
-   Poses questions for additional input

[Pronunciation User Scenarios](https://www.w3.org/TR/pronunciation-user-scenarios/) provides examples of:

-   End-users, including screen reader users
-   Content providers, including educators
-   Software developers, including content management systems

Exploring Technical Solutions
-----------------------------

The Pronunciation Task Force has been exploring technical options for content authors to provide pronunciation information. A challenge is developing a solution that will be used by screen readers. One aspect of that work is analyzing how required features for accurate pronunciation are covered in existing technical specifications, including HTML5.

[Pronunciation Gap Analysis and Use Cases](https://www.w3.org/TR/pronunciation-gap-analysis-and-use-cases/) provides details on the analysis. It:

-   Provides more detailed context
-   Describes required features for pronunciation and spoken presentation
-   Describes specific implementation approaches for introducing presentation authoring markup into HTML5 (called “use cases”)
-   Provides a gap analysis
-   Describes how the required features may be met by existing approaches

**[Specification for Spoken Presentation in HTML](https://www.w3.org/TR/spoken-html/)** provides details on two markup approaches. Both satisfy the requirements and provide consistent results. We seek feedback from authors and implementors on which approach would be most implementable across all spoken presentation applications.

Who Develops the Pronunciation Documents
----------------------------------------

Pronunciation documents are developed by the [Pronunciation Task Force](https://www.w3.org/WAI/APA/task-forces/pronunciation/) of the [Accessible Platform Working Group (APA WG)](https://www.w3.org/WAI/APA/), which is part of the World Wide Web Consortium ([W3C](http://www.w3.org)) Web Accessibility Initiative ([WAI](http://www.w3.org/WAI/)). For more information about the Task Force, see the [Pronunciation Task Force page](https://www.w3.org/WAI/APA/task-forces/pronunciation/).

Contributing to the Work
------------------------

Opportunities for contributing to Pronunciation and other WAI work are introduced in [Participating in WAI](https://www.w3.org/WAI/about/participating/).

To get notifications of drafts for review, see [Get WAI News](https://www.w3.org/WAI/news/subscribe/) for links to WAI tweets, RSS feed, and WAI Interest Group (WAI IG) emails. An email address for sending comments on the pronunciation documents is included in the “Status of this Document” sections.

If you are interested in becoming a participant of the Pronunciation Task Force or have questions regarding its work, e-mail [Task Force Facilitators Irfan Ali and Paul Grenier, and W3C Staff Contact Roy Ran](mailto:iali@ets.org?pgrenier@gmail.com?CC=ran@w3.org&Subject=Personalization%20Task%20Force).

Help improve this page
----------------------

Please share your ideas, suggestions, or comments via e-mail to the publicly-archived list [wai@w3.org](mailto:wai@w3.org?subject=%5Ben%5D%20Pronunciation%20Overview) or via GitHub.

<a href="mailto:wai@w3.org?subject=%5Ben%5D%20Pronunciation%20Overview&amp;body=%5Bput%20comment%20here...%5D%5Cn%5CnI%20give%20permission%20to%20share%20this%20to%20a%20publicly-archived%20e-mail%20list.%22%7D" class="button"><span>E-mail</span></a> <a href="https://github.com/w3c/wai-pronunciation/edit/master/content/index.md" class="button"><span>Fork &amp; Edit on GitHub</span></a><a href="https://github.com/w3c/wai-pronunciation/issues/new" class="button"><span>New GitHub Issue</span></a>

Back to Top

**Date:** Updated 19 May 2021.

**Editors:** [Shawn Lawton Henry](http://www.w3.org/People/Shawn/) and [Ruoxi Ran](http://www.w3.org/People/roy/).

Developed with input from the [Pronunciation Task Force](https://www.w3.org/WAI/APA/task-forces/pronunciation/).

<a href="https://www.w3.org/WAI/" class="largelink">W3C Web Accessibility Initiative (WAI)</a>

Strategies, standards, and supporting resources to make the Web accessible to people with disabilities.

-   Twitter
-   Feed
-   YouTube
-   <a href="https://www.w3.org/WAI/news/subscribe/" class="button">Get News in Email</a>

Copyright © 2021 W3C <sup>®</sup> ([MIT](https://www.csail.mit.edu/), [ERCIM](https://www.ercim.eu/), [Keio](https://www.keio.ac.jp/), [Beihang](https://ev.buaa.edu.cn)) [Permission to Use WAI Material](/WAI/about/using-wai-material/).

-   [Contact WAI](/WAI/about/contacting/)
-   [Site Map](/WAI/sitemap/)
-   [News](/WAI/news/)
-   [Archive](/WAI/sitemap/#archive)
-   [Accessibility Statement](/WAI/about/accessibility-statement/)
-   [Translations](/WAI/translations/)
-   [Resources for Roles](/WAI/roles/)

![](//www.w3.org/analytics/piwik/piwik.php?idsite=328&rec=1)
