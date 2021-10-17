[<img src="../img/w3c-bde9a11f.svg" alt="W3C" width="90" />](http://w3.org/) <a href="http://w3.org/WAI/" class="wai"><img src="../img/wai-590850fc.svg" alt="Web Accessibility Initiative" /></a>

[Web Accessibility Tutorials <span class="subheading">Guidance on how to create websites that meet WCAG</span>](../)

<a href="#nav" class="btn btn-jump">Jump to the navigation</a>

<span class="home">[<span class="count"></span><span class="txt">Tutorials home</span>](../)</span> <span class="icon icon-chevron-right"></span><span class="visuallyhidden">»</span> <span class="other"> <span class="current-a"><span class="count"></span><span class="txt"><span class="visuallyhidden">Current: </span>Images</span></span> <span class="icon icon-chevron-right"></span><span class="visuallyhidden">»</span> <span class="current-a"><span class="count"></span><span class="txt"><span class="visuallyhidden">Current: </span>Images Concepts</span></span> </span>

Images Concepts
===============

**Technologies covered in this Tutorial:**

<span class="tech">CSS Fonts</span> <span class="tech">CSS Transforms</span> <span class="tech">HTML5</span> <span class="tech">MathML</span> <span class="tech">WAI-ARIA</span>

Images must have text alternatives that describe the information or function represented by them. This ensures that images can be used by [people with various disabilities](#why-is-this-important). This tutorial demonstrates how to provide appropriate text alternatives based on the purpose of the image:

-   **[Informative images](informative/)**: Images that graphically represent concepts and information, typically pictures, photos, and illustrations. The text alternative should be at least a short description conveying the essential information presented by the image.

-   **[Decorative images](decorative/)**: Provide a null text alternative (`alt=""`) when the only purpose of an image is to add visual decoration to the page, rather than to convey information that is important to understanding the page.

-   **[Functional images](functional/)**: The text alternative of an image used as a link or as a button should describe the functionality of the link or button rather than the visual image. Examples of such images are a printer icon to represent the print function or a button to submit a form.

-   **[Images of text](textual/)**: Readable text is sometimes presented within an image. If the image is not a logo, avoid text in images. However, if images of text are used, the text alternative should contain the same words as in the image.

-   **[Complex images](complex/)** such as graphs and diagrams: To convey data or detailed information, provide a full-text equivalent of the data or information provided in the image as the text alternative.

-   **[Groups of images](groups/)**: If multiple images convey a single piece of information, the text alternative for one image should convey the information for the entire group.

-   **[Image maps](imagemap/)**: The text alternative for an image that contains multiple clickable areas should provide an overall context for the set of links. Also, each individually clickable area should have alternative text that describes the purpose or destination of the link.

For a quick overview on deciding which category a particular image fits into, see the [alt Decision Tree](decision-tree/). The text alternative needs to be determined by the author, depending on the usage, context, and content of an image. For example, the exact type and look of a bird in an image might be less relevant and described only briefly on a website about parks, but may be appropriate on a website specifically about birds.

Why is this important?
----------------------

Images and graphics make content more pleasant and easier to understand for many people, and in particular for those with cognitive and learning disabilities. They serve as cues that are used by people with visual impairments, including people with low vision, to orient themselves in the content.

However, images are used extensively on websites and can create major barriers when they are not accessible. Accessible images are beneficial in many situations, such as:

-   **People using screen readers:** The text alternative can be read aloud or rendered as Braille
-   **People using speech input software:** Users can put the focus onto a button or linked image with a single voice command
-   **People browsing speech-enabled websites:** The text alternative can be read aloud
-   **Mobile web users:** Images can be turned off, especially for data-roaming
-   **Search engine optimization:** Images become indexable by search engines

**Note:** Removing images from websites (so-called “text-only versions”) make them less accessible and functional for these users and situations.

Related WCAG resources
----------------------

These tutorials provide best-practice guidance on implementing accessibility in different situations. This page combined the following WCAG success criteria and techniques from different conformance levels:

**Success Criteria:**

-   [1.1.1 Non-text Content:](https://www.w3.org/WAI/WCAG21/quickref/#non-text-content) All non-text content that is presented to the user has a text alternative that serves the equivalent purpose, except for the situations listed\[…\]. (Level A)

-   [1.4.5 Images of Text:](https://www.w3.org/WAI/WCAG21/quickref/#images-of-text) If the technologies being used can achieve the visual presentation, text is used to convey information rather than images of text except \[for customizable and essential images\] (Level AA)

-   [1.4.9 Images of Text (No Exception):](https://www.w3.org/WAI/WCAG21/quickref/#images-of-text-no-exception) Images of text are only used for pure decoration or where a particular presentation of text is essential to the information being conveyed (Level AAA)

-   [<span class="count"></span><span class="txt"><span class="dir">Next:</span><span class="title">Informative Images</span></span>](informative/)

We welcome your ideas
---------------------

Please send any ideas, suggestions, or comments to the [(publicly-archived) mailing list wai-eo-editors@w3.org](mailto:wai-eo-editors@w3.org?subject=%5BTutorial%20Feedback%5D). You can also contribute to the [code directly on Github](https://github.com/w3c/wai-tutorials).

<a href="https://github.com/w3c/wai-tutorials/blob/master/source/images/index.html.erb.md" class="btn">Fork &amp; edit this page on Github</a>

Images Tutorial
---------------

-   <span class="current-a"><span class="count"></span><span class="txt"><span class="visuallyhidden">Current: </span>Images Concepts</span></span>
-   [<span class="count"></span><span class="txt">Informative Images</span>](informative/)
-   [<span class="count"></span><span class="txt">Decorative Images</span>](decorative/)
-   [<span class="count"></span><span class="txt">Functional Images</span>](functional/)
-   [<span class="count"></span><span class="txt">Images of Text</span>](textual/)
-   [<span class="count"></span><span class="txt">Complex Images</span>](complex/)
-   [<span class="count"></span><span class="txt">Groups of Images</span>](groups/)
-   [<span class="count"></span><span class="txt">Image Maps</span>](imagemap/)
-   [<span class="count"></span><span class="txt">An alt Decision Tree</span>](decision-tree/)
-   [<span class="count"></span><span class="txt">Tips and Tricks</span>](tips/)

All Tutorials
-------------

-   [<span class="count"></span><span class="txt">Page Structure</span>](../page-structure/)
-   [<span class="count"></span><span class="txt">Menus</span>](../menus/)
-   <span class="current-a"><span class="count"></span><span class="txt"><span class="visuallyhidden">Current: </span>Images</span></span>
-   [<span class="count"></span><span class="txt">Tables</span>](../tables/)
-   [<span class="count"></span><span class="txt">Forms</span>](../forms/)
-   [<span class="count"></span><span class="txt">Carousels</span>](../carousels/)

Document Information
--------------------

**Feedback: We welcome ideas for improvements, bug reports, and comments** via [GitHub](https://github.com/w3c/wai-tutorials) or e-mail to <wai-eo-editors@w3.org> (a publicly archived list) or <wai@w3.org> (a WAI staff-only list).

-   **Status:** Updated 27 July 2019 (first published September 2014)
-   Editors:
    -   [Eric Eggert](https://www.w3.org/People/yatil/)
    -   [Shadi Abou-Zahra](https://www.w3.org/People/shadi/)

    Contributors:
    -   [Shawn Lawton Henry](https://www.w3.org/People/Shawn/)
    -   Howard Kramer
    -   Sharron Rush
    -   Bim Egan
    -   the Web Content Accessibility Guidelines Working Group ([WCAG WG](https://www.w3.org/WAI/GL/))
    -   the Education and Outreach Working Group ([EOWG](https://www.w3.org/WAI/EO/))

-   Developed with support from the [WAI-ACT project](https://www.w3.org/WAI/ACT/), co-funded by the **European Commission IST Programme**.
-   \[[<span class="count"></span><span class="txt">Attributions</span>](../attributions/)\] \[[<span class="count"></span><span class="txt">Changelog</span>](../changelog/)\]

\[[WAI Site Map](https://www.w3.org/WAI/sitemap.html)\] \[[Help with WAI Website](https://www.w3.org/WAI/sitehelp.html)\] \[[Search](https://www.w3.org/WAI/search.php)\] \[[Contacting WAI](https://www.w3.org/WAI/contacts)\]

Copyright © 2019 W3C <sup>®</sup> ([MIT](http://www.csail.mit.edu/), [ERCIM](http://www.ercim.eu/), [Keio](http://www.keio.ac.jp/), [Beihang](http://ev.buaa.edu.cn/)) [Usage policies apply](/Consortium/Legal/ipr-notice).

![](//www.w3.org/analytics/piwik/piwik.php?idsite=328)
