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
-   [Personalization](/WAI/personalization/)

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

Personalization Overview
========================

Summary
-------

This page introduces developing standards to support personalization.

Quick links to documents:

-   [Requirements for Personalization Semantics](https://www.w3.org/TR/personalization-semantics-requirements-1.0/)
-   [Personalization Semantics Explainer](https://www.w3.org/TR/personalization-semantics-1.0/)
-   [Personalization Semantics Content Module](https://www.w3.org/TR/personalization-semantics-content-1.0/)
-   [Personalization Help and Support](https://www.w3.org/TR/personalization-semantics-help-1.0/)
-   [Personalization Tools](https://www.w3.org/TR/personalization-semantics-tools-1.0/)

Page Contents

-   <a href="#introduction" id="markdown-toc-introduction">Introduction</a>
-   <a href="#who-the-personalization-documents-are-for" id="markdown-toc-who-the-personalization-documents-are-for">Who the Personalization Documents are for</a>
-   <a href="#the-personalization-documents" id="markdown-toc-the-personalization-documents">The Personalization Documents</a>
-   <a href="#who-develops-the-personalization-documents" id="markdown-toc-who-develops-the-personalization-documents">Who Develops the Personalization Documents</a>

Introduction
------------

Personalization involves tailoring the user experience to meet the needs and preferences of the individual user. As web technology broadens in scope and reach, and understanding of users’ needs increases through research and experience, the set of accessibility considerations for websites becomes larger. Rather than developing complex solutions for a wide range of users, designing sites in a way that they can be personalized to the needs of each user provides more optimal accessibility.

Personalization enables users to use adaptive widgets and user preferences to customize their user experience. It enables content authors to provide a default design and enable user personalization with minimal work.

### Examples of Personalization to Meet User Needs

-   Some people are easily **distracted or overwhelmed by lots of information** on a website. They have difficulty finding and focusing on key information. Personalization allows users to hide extraneous information so they only get what they need to understand and use the main content.
-   Some people have **difficulty understanding numbers** (“dyscalculia”). Personalization allows users to change numeric information. For example, a temperature of 32°F/0°C is replaced with a picture of a person wearing a hat, scarf, and mittens, and the text “very cold”.
-   Some people with severe language impairment **cannot read text**. They use symbols to represent words. Personalization allows users to change text to symbols.

Who the Personalization Documents are for
-----------------------------------------

-   **Content developers** can add syntax to support personalization.
-   **User agents** such as browser extensions and assistive technology can use the syntax to manipulate the content to meet the user’s need. User agents can also use user preferences for different interface options.

The Personalization Documents
-----------------------------

-   [Requirements for Personalization Semantics](https://www.w3.org/TR/personalization-semantics-requirements-1.0/) (Working Draft Note) includes user stories, specific use cases, and requirements for personalization.
-   [Personalization Semantics Explainer](https://www.w3.org/TR/personalization-semantics-1.0/) (Working Draft Note) is the core introductory document that explains general use cases, vocabulary, and anticipated uses.
-   [Personalization Semantics Content Module](https://www.w3.org/TR/personalization-semantics-content-1.0/) (Working Draft specification) is the technical specification that provides terms authors can use to enhance web content with information about controls, symbols, and user interface elements.
-   [Personalization Help and Support](https://www.w3.org/TR/personalization-semantics-help-1.0/) (Working Draft) lists examples of the personalized help and support properties.
-   [Personalization Tools](https://www.w3.org/TR/personalization-semantics-tools-1.0/) (Working Draft) lists examples of the personalized tools properties.

Who Develops the Personalization Documents
------------------------------------------

Personalization documents are developed by the [Personalization Task Force](https://www.w3.org/WAI/APA/task-forces/personalization/) of the Accessible Platform Working Group ([APA WG](https://www.w3.org/WAI/APA/)), which is part of the World Wide Web Consortium ([W3C](http://www.w3.org/)) Web Accessibility Initiative ([WAI](http://www.w3.org/WAI/)). For more information about the task force, see the [Personalization Task Force page](https://www.w3.org/WAI/APA/task-forces/personalization/).

Formal periods for public review are described in [How WAI Develops Accessibility Guidelines through the W3C Process: Milestones and Opportunities to Contribute](http://www.w3.org/WAI/intro/w3c-process). To submit comments on specific personalization documents, see the “Status of this Document” section of the resource. To get notices of opportunities for review and comment on WAI documents, see [Get WAI News](https://www.w3.org/WAI/news/subscribe/).

Opportunities for contributing to Personalization and other WAI work are introduced in [Participating in WAI](https://www.w3.org/WAI/about/participating/).

Help improve this page
----------------------

Please share your ideas, suggestions, or comments via e-mail to the publicly-archived list [wai@w3.org](mailto:wai@w3.org?subject=%5Ben%5D%20Personalization%20Overview) or via GitHub.

<a href="mailto:wai@w3.org?subject=%5Ben%5D%20Personalization%20Overview&amp;body=%5Bput%20comment%20here...%5D%5Cn%5CnI%20give%20permission%20to%20share%20this%20to%20a%20publicly-archived%20e-mail%20list.%22%7D" class="button"><span>E-mail</span></a> <a href="https://github.com/w3c/wai-personalization-standards/edit/master/index.md" class="button"><span>Fork &amp; Edit on GitHub</span></a><a href="https://github.com/w3c/wai-personalization-standards/issues/new" class="button"><span>New GitHub Issue</span></a>

Back to Top

**Date:** Updated 31 January 2020. First published March 2019.

**Editors:** [Ruoxi Ran](http://www.w3.org/People/roy/), [Michael Cooper](http://www.w3.org/People/cooper/), and [Shawn Lawton Henry](http://www.w3.org/People/Shawn/).

Developed with input from the [Personalization Task Force](https://www.w3.org/WAI/APA/task-forces/personalization/).

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
