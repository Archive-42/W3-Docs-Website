[<img src="../../img/w3c-bde9a11f.svg" alt="W3C" width="90" />](http://w3.org/) <a href="http://w3.org/WAI/" class="wai"><img src="../../img/wai-590850fc.svg" alt="Web Accessibility Initiative" /></a>

[Web Accessibility Tutorials <span class="subheading">Guidance on how to create websites that meet WCAG</span>](../../)

<a href="#nav" class="btn btn-jump">Jump to the navigation</a>

<span class="home">[<span class="count"></span><span class="txt">Tutorials home</span>](../../)</span> <span class="icon icon-chevron-right"></span><span class="visuallyhidden">»</span> <span class="other"> [<span class="count"></span><span class="txt">Carousels</span>](../) <span class="icon icon-chevron-right"></span><span class="visuallyhidden">»</span> <span class="current-a"><span class="count"></span><span class="txt"><span class="visuallyhidden">Current: </span>Styling</span></span> </span>

Styling
=======

Button Size
-----------

Use appropriately sized buttons and links, and provide whitespace around them, to allow people with reduced dexterity to use the carousel more easily. This also benefits people using touch screens, such as on mobile devices. Buttons and links that are not inline in a block of text should be at least 44 × 44 CSS pixels.

Contrast
--------

<img src="../../img/carousels-styling-contrast-0b7d8b4e.png" alt="Example using semi-transparent background colors to ensure sufficient contrast." class="sideimage left" /> Ensure sufficient contrast between the foreground and the background of text, links, and buttons. This can be a challenge when text or buttons are positioned on top of images. In that case, a (semi-) opaque background color can help to maintain the contrast regardless of the image used.

For more information on contrast requirements, see [Provide sufficient contrast between foreground and background](https://www.w3.org/WAI/gettingstarted/tips/designing.html#provide-sufficient-contrast-between-foreground-and-background).

Indicate Button Status
----------------------

Since the navigation buttons added to the carousel are typically small, it is important to indicate their status both in color and shape (in addition to proper naming and labeling). This makes it easier for people to differentiate the buttons and their current status.

In the following example, a filled square is used for buttons associated with items currently not shown. The button for the item shown has rounded corners and inverted colors. When users hover over these buttons using a mouse or focus them using a keyboard, their border is dotted.

Example:

-   <span class="visuallyhidden">News</span> 1 <span class="visuallyhidden">(Current Slide)</span>
-   <span class="visuallyhidden">News</span> 2
-   <span class="visuallyhidden">News</span> 3

A [working demo example](../working-example/) for this code is available.

Related WCAG resources
----------------------

These tutorials provide best-practice guidance on implementing accessibility in different situations. This page combined the following WCAG success criteria and techniques from different conformance levels:

**Success Criteria:**

-   [1.4.1 Use of Color:](https://www.w3.org/WAI/WCAG21/quickref/#use-of-color) Color is not used as the only visual means of conveying information, indicating an action, prompting a response, or distinguishing a visual element. (Level A)

-   [1.4.3 Contrast (Minimum):](https://www.w3.org/WAI/WCAG21/quickref/#contrast-minimum) The visual presentation of text and images of text has a contrast ratio of at least 4.5:1, except for the following:

    -   **Large Text:** Large-scale text and images of large-scale text have a contrast ratio of at least 3:1;
    -   **Incidental:** Text or images of text that are part of an inactive user interface component, that are pure decoration, that are not visible to anyone, or that are part of a picture that contains significant other visual content, have no contrast requirement.
    -   **Logotypes:** Text that is part of a logo or brand name has no minimum contrast requirement.

    (Level AA)

-   [2.4.7 Focus Visible:](https://www.w3.org/WAI/WCAG21/quickref/#focus-visible) Any keyboard operable user interface has a mode of operation where the keyboard focus indicator is visible. (Level AA)

-   [2.5.5 Target Size:](https://www.w3.org/WAI/WCAG21/quickref/#target-size) The size of the target for pointer inputs is at least 44 by 44 CSS pixels except when:

    -   **Equivalent:** The target is available through an equivalent link or control on the same page that is at least 44 by 44 CSS pixels;

    -   **Inline:** The target is in a sentence or block of text;

    -   **User Agent Control:** The size of the target is determined by the user agent and is not modified by the author;

    -   **Essential:** A particular presentation of the target is essential to the information being conveyed.

    (Level AAA)

-   [<span class="count"></span><span class="txt"><span class="dir">Previous:</span><span class="title">Animations</span></span>](../animations/)
-   [<span class="count"></span><span class="txt"><span class="dir">Next:</span><span class="title">Working Example</span></span>](../working-example/)

We welcome your ideas
---------------------

Please send any ideas, suggestions, or comments to the [(publicly-archived) mailing list wai-eo-editors@w3.org](mailto:wai-eo-editors@w3.org?subject=%5BTutorial%20Feedback%5D). You can also contribute to the [code directly on Github](https://github.com/w3c/wai-tutorials).

<a href="https://github.com/w3c/wai-tutorials/blob/master/source/carousels/styling.html.erb.md" class="btn">Fork &amp; edit this page on Github</a>

Carousels Tutorial
------------------

-   [<span class="count"></span><span class="txt">Carousel Concepts</span>](../)
-   [<span class="count"></span><span class="txt">Structure</span>](../structure/)
-   [<span class="count"></span><span class="txt">Functionality</span>](../functionality/)
-   [<span class="count"></span><span class="txt">Animations</span>](../animations/)
-   <span class="current-a"><span class="count"></span><span class="txt"><span class="visuallyhidden">Current: </span>Styling</span></span>
-   [<span class="count"></span><span class="txt">Working Example</span>](../working-example/)
-   [<span class="count"></span><span class="txt">Complete Code</span>](../full-code/)

All Tutorials
-------------

-   [<span class="count"></span><span class="txt">Page Structure</span>](../../page-structure/)
-   [<span class="count"></span><span class="txt">Menus</span>](../../menus/)
-   [<span class="count"></span><span class="txt">Images</span>](../../images/)
-   [<span class="count"></span><span class="txt">Tables</span>](../../tables/)
-   [<span class="count"></span><span class="txt">Forms</span>](../../forms/)
-   <span class="current-a"><span class="count"></span><span class="txt"><span class="visuallyhidden">Current: </span>Carousels</span></span>

Document Information
--------------------

**Feedback: We welcome ideas for improvements, bug reports, and comments** via [GitHub](https://github.com/w3c/wai-tutorials) or e-mail to <wai-eo-editors@w3.org> (a publicly archived list) or <wai@w3.org> (a WAI staff-only list).

-   **Status:** Updated 27 July 2019 (first published May 2015)
-   Editors:
    -   [Eric Eggert](https://www.w3.org/People/yatil/)
    -   [Shadi Abou-Zahra](https://www.w3.org/People/shadi/)

    Contributors:
    -   The Education and Outreach Working Group ([EOWG](https://www.w3.org/WAI/EO/))

-   Developed with support from the [WAI-ACT project](https://www.w3.org/WAI/ACT/), co-funded by the **European Commission IST Programme**.
-   \[[<span class="count"></span><span class="txt">Attributions</span>](../../attributions/)\] \[[<span class="count"></span><span class="txt">Changelog</span>](../../changelog/)\]

\[[WAI Site Map](https://www.w3.org/WAI/sitemap.html)\] \[[Help with WAI Website](https://www.w3.org/WAI/sitehelp.html)\] \[[Search](https://www.w3.org/WAI/search.php)\] \[[Contacting WAI](https://www.w3.org/WAI/contacts)\]

Copyright © 2019 W3C <sup>®</sup> ([MIT](http://www.csail.mit.edu/), [ERCIM](http://www.ercim.eu/), [Keio](http://www.keio.ac.jp/), [Beihang](http://ev.buaa.edu.cn/)) [Usage policies apply](/Consortium/Legal/ipr-notice).

![](//www.w3.org/analytics/piwik/piwik.php?idsite=328)
