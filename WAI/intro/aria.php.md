-   [Skip to Content](#main)
-   [Change Text Size or Colors](/WAI/meta/customize/)
-   All Translations

<a href="/WAI/" class="home"><span class="wai"><span class="wa">Web Accessibility</span> <span class="i"><span class="initieative">Initiative</span> <span>WAI</span></span></span></a>

Strategies, standards, resources to make the Web accessible to people with disabilities



<!-- -->

-   [Home](/WAI/)
-   [Standards/Guidelines](/WAI/standards-guidelines/)
-   [WAI-ARIA](/WAI/standards-guidelines/aria/)

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

WAI-ARIA Overview
=================

Summary
-------

This page introduces the WAI-ARIA, the Accessible Rich Internet Applications suite of web standards.

Quick links to resources:

-   [WAI-ARIA](/TR/wai-aria/)
-   [WAI-ARIA Authoring Practices](/TR/wai-aria-practices/)
-   [User Agent Implementation Guide](/TR/wai-aria-implementation/)
-   [FAQ](/WAI/aria/faq) - including [What is the current status of WAI-ARIA development?](/WAI/aria/faq#update)

Page Contents

-   <a href="#introduction" id="markdown-toc-introduction">Introduction</a>
-   <a href="#versions" id="markdown-toc-versions">Versions</a>
-   <a href="#who-develops-wai-aria" id="markdown-toc-who-develops-wai-aria">Who develops WAI-ARIA</a>

Introduction
------------

**WAI-ARIA, the Accessible Rich Internet Applications Suite, defines a way to make Web content and Web applications more accessible to people with disabilities. It especially helps with dynamic content and advanced user interface controls developed with HTML, JavaScript, and related technologies.** Without WAI-ARIA certain functionality used in Web sites is not available to some users with disabilities, especially people who rely on screen readers and people who cannot use a mouse. WAI-ARIA addresses these accessibility challenges, for example, by defining ways for functionality to be provided to assistive technology. With WAI-ARIA, developers can make advanced Web applications accessible and usable to people with disabilities.

This page describes the problems that WAI-ARIA addresses, and introduces the WAI-ARIA suite of technical documents. Many of the terms used in this page—including *Web content*, *user agent*s, and *assistive technology*—are described in [Introduction to Web Accessibility](/WAI/fundamentals/accessibility-intro/) and [Essential Components of Web Accessibility](/WAI/fundamentals/components/).

### Technical Solutions

WAI-ARIA provides a framework for adding attributes to identify features for user interaction, how they relate to each other, and their current state. WAI-ARIA describes navigation techniques to mark regions and common Web structures as menus, primary content, secondary content, banner information, and other types of Web structures. For example, with WAI-ARIA, developers can identify regions of pages and enable keyboard users to easily move among regions, rather than having to press Tab many times.

WAI-ARIA also includes technologies to map controls, live regions, and events to accessibility application programming interfaces (APIs), including custom controls used for rich Internet applications. WAI-ARIA techniques apply to widgets such as buttons, drop-down lists, calendar functions, tree controls (for example, expandable menus), and others.

WAI-ARIA provides Web authors with the following:

-   Roles to describe the type of widget presented, such as “menu”, “treeitem”, “slider”, and “progressbar”
-   Roles to describe the structure of the Web page, such as headings, regions, and tables (grids)
-   Properties to describe the state widgets are in, such as “checked” for a check box, or “haspopup” for a menu.
-   Properties to define live regions of a page that are likely to get updates (such as stock quotes), as well as an interruption policy for those updates—for example, critical updates may be presented in an alert dialog box, and incidental updates occur within the page
-   A way to provide keyboard navigation for the Web objects and events, such as those mentioned above

Versions
--------

-   [WAI-ARIA 1.0](/TR/wai-aria/) was published as a completed W3C Recommendation on 20 March 2014.

-   [WAI-ARIA 1.1](/TR/wai-aria-1.1/) was published as a completed W3C Recommendation on 14 December 2017.

-   [WAI-ARIA 1.2](/TR/wai-aria-1.2/) is under development.

The latest status is updated in the [FAQ: What is the current status of WAI-ARIA development?](/WAI/aria/faq#update)

### WAI-ARIA 1.2

The 1.2 version will extend WAI-ARIA 1.1 to provide a small number of features to complete the HTML + ARIA accessibility model. For 1.2, user agent implementation guidance is provided as a suite of accessibility API mapping specifications that describe how to expose semantics of WAI-ARIA and other web content languages to accessibility APIs.

Published WAI-ARIA 1.2 Working Drafts are as follows:

-   **[WAI-ARIA 1.2](/TR/wai-aria-1.2/) technical specification**, provides features to define accessible user interface elements and in order to improve the accessibility and interoperability of web content and applications. It is primarily for developers of Web browsers, assistive technologies, and other user agents; developers of Web technologies (technical specifications); and developers of accessibility evaluation tools.
-   **[Core Accessibility API Mappings 1.2](/TR/core-aam-1.2/)**, describes how user agents should expose semantics of web content languages to accessibility APIs. The core module defines support that applies across multiple content technologies, including general keyboard navigation support and mapping of general-purpose WAI-ARIA features; other specifications will extend this for specific technologies.
-   **[Accessible Name and Description: Computation and API Mappings 1.2](/TR/accname-1.2/)**, describes how user agents determine names and descriptions of accessible objects from web content languages and expose them in accessibility APIs. This allows assistive technologies to associate and relay the name or description of objects to users.
-   **[HTML Accessibility API Mappings 1.0](/TR/html-aam-1.0/)**, extends Core Accessibility API Mappings 1.2 and Accessible Name and Description: Computation and API Mappings 1.2 to define how user agents map HTML markup to platform accessibility application programming interfaces (APIs). Provides HTML-specific guidance for how the HTML user agent must respond to keyboard focus, native HTML features, and role, state and property attributes provided via WAI-ARIA.
-   **[SVG Accessibility API Mappings 1.0](/TR/svg-aam-1.0/)**, extends Core Accessibility API Mappings 1.2 to define how user agents map SVG markup to platform accessibility application programming interfaces (APIs). When supported by user agents, its features allow SVG authors to create accessible rich internet applications, including charts, graphs, and other drawings. Provides SVG-specific guidance for how the SVG user agent must respond to keyboard focus, native SVG features, and role, state and property attributes provided via WAI-ARIA.
-   **[WAI-ARIA Authoring Practices 1.2](/TR/wai-aria-practices-1.2/)**, recommends approaches to help web application developers make widgets, navigation, and behaviors accessible using WAI-ARIA roles, states, and properties. It describes considerations that might not be evident to most authors from the WAI-ARIA specification which is oriented primarily at user agent implementers.

Additional documents are expected in this suite, including other accessibility API mappings and updated authoring guidance. Editors’ drafts under development can be accessed in the [WAI-ARIA GitHub Repository](https://github.com/w3c/aria/).

*W3C Recommendations* and *Working Group Notes* are briefly explained in [How WAI Develops Accessibility Guidelines through the W3C Process](/WAI/intro/w3c-process), which also describes milestones in the W3C Process.

### Technical document format

The WAI-ARIA documents follow the W3C format for technical specifications which includes several sections at the beginning: links to different versions, editors, copyright, abstract, and status with the link to errata and the email address for comments.

Who develops WAI-ARIA
---------------------

The WAI-ARIA technical documents are developed by the Accessible Rich Internet Applications Working Group ([ARIA WG](/WAI/ARIA/)), which is part of the World Wide Web Consortium ([W3C](/)) Web Accessibility Initiative ([WAI](/WAI/)). For more information about the working group, see the [ARIA WG public page](/WAI/ARIA/).

[How WAI Develops Accessibility Guidelines through the W3C Process: Milestones and Opportunities to Contribute](/WAI/intro/w3c-process) describes formal periods for public review. Opportunities for review and comment of WAI documents are announced on the [WAI home page](/WAI/) and [WAI Interest Group](/WAI/IG/) mailing list. An email address for sending comments is included in the “Status of this Document” section.

Opportunities for contributing to WAI-ARIA and other WAI work are introduced in [Participating in WAI](/WAI/participation).

Help improve this page
----------------------

Please share your ideas, suggestions, or comments via e-mail to the publicly-archived list [wai@w3.org](mailto:wai@w3.org?subject=WAI-ARIA%20Overview) or via GitHub.

<a href="mailto:wai@w3.org?subject=WAI-ARIA%20Overview&amp;body=%5Bput%20comment%20here...%5D%5Cn%5CnI%20give%20permission%20to%20share%20this%20to%20a%20publicly-archived%20e-mail%20list.%22%7D" class="button"><span>E-mail</span></a> <a href="https://github.com/w3c/wai-intro-aria/edit/master/index.md" class="button"><span>Fork &amp; Edit on GitHub</span></a><a href="https://github.com/w3c/wai-intro-aria/issues/new?title=%5B%5D%20" class="button"><span>New GitHub Issue</span></a>

Back to Top

**Date:** Updated 09 September 2020. First published December 2006.

**Editor:** [Michael Cooper](https://www.w3.org/People/cooper/).

Developed with input from the Accessible Rich Internet Applications Working Group ([ARIA WG](https://www.w3.org/WAI/ARIA/)) and the Education and Outreach Working Group ([EOWG](https://www.w3.org/WAI/EO/)).

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
