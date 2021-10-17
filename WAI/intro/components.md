-   [Skip to Content](#main)
-   [Change Text Size or Colors](/WAI/meta/customize/)
-   **This page in:**
    -   **English**
    -   [한국어](/WAI/fundamentals/components/ko)
-   All Translations
-   Show Customization, Languages, Translations

<a href="/WAI/" class="home"><span class="wai"><span class="wa">Web Accessibility</span> <span class="i"><span class="initieative">Initiative</span> <span>WAI</span></span></span></a>

Strategies, standards, resources to make the Web accessible to people with disabilities



<!-- -->

-   [Home](/WAI/)
-   [Accessibility Fundamentals](/WAI/fundamentals/)
-   [Components of Web Accessibility](/WAI/fundamentals/components/)

-   <a href="/WAI/fundamentals/" class="page-link"><span>Accessibility Fundamentals</span></a>
-   <a href="/WAI/fundamentals/accessibility-intro/" class="page-link"><span>Introduction to Accessibility</span></a>
    -   <a href="/WAI/videos/standards-and-benefits/" class="page-link"><span>Video Introduction</span></a>
-   <a href="/WAI/fundamentals/foundations-course/" class="page-link"><span>Foundations Online Course</span></a>
-   <a href="/WAI/fundamentals/components/" class="page-link"><span>Components of Web Accessibility</span></a>
-   <a href="/WAI/fundamentals/accessibility-principles/" class="page-link"><span>Accessibility Principles</span></a>
-   <a href="/WAI/perspective-videos/" class="page-link"><span>Perspectives Videos</span></a>
    -   <a href="/WAI/perspective-videos/keyboard/" class="page-link"><span>Keyboard Compatibility</span></a>
    -   <a href="/WAI/perspective-videos/contrast/" class="page-link"><span>Colors with Good Contrast</span></a>
    -   <a href="/WAI/perspective-videos/layout/" class="page-link"><span>Clear Layout and Design</span></a>
    -   <a href="/WAI/perspective-videos/speech/" class="page-link"><span>Text to Speech</span></a>
    -   <a href="/WAI/perspective-videos/controls/" class="page-link"><span>Large Links, Buttons, and Controls</span></a>
    -   <a href="/WAI/perspective-videos/captions/" class="page-link"><span>Video Captions</span></a>
    -   <a href="/WAI/perspective-videos/customizable/" class="page-link"><span>Customizable Text</span></a>
    -   <a href="/WAI/perspective-videos/voice/" class="page-link"><span>Speech Recognition</span></a>
    -   <a href="/WAI/perspective-videos/understandable/" class="page-link"><span>Understandable Content</span></a>
    -   <a href="/WAI/perspective-videos/notifications/" class="page-link"><span>Notifications and Feedback</span></a>
-   <a href="/WAI/people-use-web/" class="page-link"><span>How People with Disabilities Use the Web</span></a>
    -   <a href="/WAI/people-use-web/user-stories/" class="page-link"><span>Stories of Web Users</span></a>
    -   <a href="/WAI/people-use-web/abilities-barriers/" class="page-link"><span>Diverse Abilities and Barriers</span></a>
    -   <a href="/WAI/people-use-web/tools-techniques/" class="page-link"><span>Tools and Techniques</span></a>
-   <a href="/WAI/older-users/" class="page-link"><span>Older Users and Accessibility</span></a>
    -   <a href="/WAI/older-users/developing/" class="page-link"><span>How WCAG 2 Applies</span></a>
    -   <a href="/WAI/older-users/literature/" class="page-link"><span>Literature Review</span></a>
-   <a href="/WAI/fundamentals/accessibility-usability-inclusion/" class="page-link"><span>Accessibility, Usability, Inclusion</span></a>

Languages/Translations

-   **English (original)**
-   [한국어](/WAI/fundamentals/components/ko)

[All Translations](/WAI/translations/)

[Translating WAI Resources](/WAI/about/translating/)

Essential Components of Web Accessibility
=========================================

Summary
-------

This page shows how web accessibility depends on several components working together, and how improvements in specific components could substantially improve web accessibility.

It provides the foundation for understanding the different accessibility standards developed by the W3C Web Accessibility Initiative (WAI).

Page Contents

-   <a href="#relate" id="markdown-toc-relate">How the Components Relate</a>
-   <a href="#depend" id="markdown-toc-depend">Interdependencies Between Components</a>
-   <a href="#guidelines" id="markdown-toc-guidelines">Guidelines and Other Standards</a>

Introduction
------------

It is essential that several different components of web development and interaction work together in order for the web to be accessible to people with disabilities. These components include:

-   **content** - the information in a web page or web application, including:
    -   natural information such as text, images, and sounds
    -   code or markup that defines structure, presentation, etc.
-   **web browsers, media players**, and other “user agents”
-   **assistive technology**, in some cases - screen readers, alternative keyboards, switches, scanning software, etc.
-   **users**’ knowledge, experiences, and in some cases, adaptive strategies using the web
-   **developers** - designers, coders, authors, etc., including developers with disabilities and users who contribute content
-   **authoring tools** - software that creates websites
-   **evaluation tools** - web accessibility evaluation tools, HTML validators, CSS validators, etc.

How the Components Relate
-------------------------

![illustration showing how components relate, detailed description at /WAI/fundamentals/components/examples/\#relate](/WAI/content-images/wai-components/relate.png)

Web **developers** usually use **authoring tools** and evaluation tools to create web **content**.

**People** (“**users**”) use web **browsers, media players, assistive technologies,** or other “**user agents**” to get and interact with the **content**.

Interdependencies Between Components
------------------------------------

There are significant interdependencies between the components; that is, the components must work together in order for the web to be accessible. For example, for alternative text on images:

-   **technical specifications** address alternative text (for example, HTML defines the alternative text attribute (`alt`) of the image element (`img`))
-   **WAI guidelines** ([WCAG, ATAG, UAAG described below](#guidelines)) - define how to implement alternative text for accessibility in the different components
-   **developers** provide the appropriate alternative text wording
-   **authoring tools** enable, facilitate, and promote providing alternative text in a web page
-   **evaluation tools** are used to help check that alternative text exists
-   **user agents** provide human and machine interface to the alternative text
-   **assistive technologies** provide human interface to the alternative text in various modalities
-   **users** know how to get the alternative text from their user agent and/or assistive technology as needed

### The Implementation Cycle

When accessibility features are effectively implemented in one component, the other components are more likely to implement them.

![illustration of implementation cycle, detailed description at /WAI/fundamentals/components/examples/\#cycle](/WAI/content-images/wai-components/cycle.png)

-   When **web browsers, media players, assistive technologies, and other user agents** support an accessibility feature, users are more likely to demand it and developers are more likely to implement it in their **content**.
-   When developers want to implement an accessibility feature in their **content**, they are more likely to demand that their **authoring tool** make it easy to implement.
-   When **authoring tools** make a feature easy to implement, developers are more likely to implement it in their **content**.
-   When an accessibility feature is implemented in **most content**, developers and users are more likely to demand that **user agents** support it.

### When One Component is Weak

If an accessibility feature is not implemented in one component, there is little motivation for the other components to implement it when it does not result in an accessible user experience. For example, developers are unlikely to implement an accessibility feature that authoring tools do not support and that most browsers or assistive technologies do not implement consistently.

![illustration of what happens when one component is weak, detailed description at /WAI/fundamentals/components/examples/\#weak](/WAI/content-images/wai-components/bridge.png)

If one component has poor accessibility support, sometimes other components can compensate through “work-arounds” that require much more effort and are not good for accessibility overall. For example,

-   developers can do more work to compensate for some lack of accessibility support in authoring tools; for example, coding markup directly instead of through a tool
-   users can do more work to compensate for some lack of accessibility support in browsers, media players, and assistive technology and lack of accessibility of content; for example, using different browsers or assistive technologies to overcome different accessibility issues

However, in most cases the works-arounds are not implemented and the result is still poor accessibility. Additionally, sometimes poor accessibility support in one component cannot be reasonably overcome by other components and the result is inaccessibility, making it impossible for some people with disabilities to use a particular website, page, or feature.

Guidelines and Other Standards
------------------------------

The World Wide Web Consortium ([W3C](https://www.w3.org/)) Web Accessibility Initiative ([WAI](https://www.w3.org/WAI/)) develops **web accessibility standards** for the different components:

-   [Authoring Tool Accessibility Guidelines (ATAG) Overview](/WAI/standards-guidelines/atag/) addresses authoring tools
-   [Web Content Accessibility Guidelines (WCAG) Overview](/WAI/standards-guidelines/wcag/) addresses web content, and is used by developers, authoring tools, and accessibility evaluation tools
-   [User Agent Accessibility Guidelines (UAAG)](/WAI/standards-guidelines/uaag/) addresses web browsers and media players, including some aspects of assistive technologies

These accessibility guidelines are based on the fundamental technical specifications of the web, and are developed in coordination with all [W3C technical specifications](https://www.w3.org/TR/) (HTML, CSS, SVG, SMIL, etc.). W3C also develops technical specifications that directly address accessibility, including:

-   [ARIA, the Accessible Rich Internet Applications](/WAI/standards-guidelines/aria/) Suite, which defines a way to make web applications more accessible to people with disabilities. It especially helps with dynamic content and advanced user interface controls developed with Ajax, HTML, JavaScript, and related technologies.

![illustration showing the guidelines for the different components, detailed description at /WAI/fundamentals/components/examples/\#guide](/WAI/content-images/wai-components/specs.png)

For more information, see [W3C Accessibility Standards Overview](/WAI/standards-guidelines/).

Help improve this page
----------------------

Please share your ideas, suggestions, or comments via e-mail to the publicly-archived list [wai@w3.org](mailto:wai@w3.org?subject=%5Ben%5D%20Essential%20Components%20of%20Web%20Accessibility) or via GitHub.

<a href="mailto:wai@w3.org?subject=%5Ben%5D%20Essential%20Components%20of%20Web%20Accessibility&amp;body=%5Bput%20comment%20here...%5D%5Cn%5CnI%20give%20permission%20to%20share%20this%20to%20a%20publicly-archived%20e-mail%20list.%22%7D" class="button"><span>E-mail</span></a> <a href="https://github.com/w3c/wai-components/edit/master/content/index.md" class="button"><span>Fork &amp; Edit on GitHub</span></a><a href="https://github.com/w3c/wai-components/issues/new" class="button"><span>New GitHub Issue</span></a>

Back to Top

**Permission to use:** You may use the images on this page for accessibility education and outreach if you:  
1. Include the URI **<span class="changed">w3.org/WAI/fundamentals/components/</span> *prominently*** near the image, and  
2. Include the artist credit, editor, and copyright reference in any published or posted material:  
Image by Michael Duffy, from: Essential Components of Web Accessibility. S.L. Henry, ed. Copyright W3C <sup>®</sup> (MIT, ERCIM, Keio, Beihang). w3.org/WAI/fundamentals/components/  
For more information, see [Using WAI Materials](https://www.w3.org/WAI/about/usingWAImaterial.html).

**Date:** Updated 27 February 2018.

**Editor:** [Shawn Lawton Henry](http://www.w3.org/People/Shawn). Graphic artist: Michael Duffy.

Developed with input from the Education and Outreach Working Group ([EOWG](http://www.w3.org/WAI/EO/)).

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
