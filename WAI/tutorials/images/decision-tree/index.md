[<img src="../../img/w3c-bde9a11f.svg" alt="W3C" width="90" />](http://w3.org/) <a href="http://w3.org/WAI/" class="wai"><img src="../../img/wai-590850fc.svg" alt="Web Accessibility Initiative" /></a>

[Web Accessibility Tutorials <span class="subheading">Guidance on how to create websites that meet WCAG</span>](../../)

<a href="#nav" class="btn btn-jump">Jump to the navigation</a>

<span class="home">[<span class="count"></span><span class="txt">Tutorials home</span>](../../)</span> <span class="icon icon-chevron-right"></span><span class="visuallyhidden">»</span> <span class="other"> [<span class="count"></span><span class="txt">Images</span>](../) <span class="icon icon-chevron-right"></span><span class="visuallyhidden">»</span> <span class="current-a"><span class="count"></span><span class="txt"><span class="visuallyhidden">Current: </span>An alt Decision Tree</span></span> </span>

An alt Decision Tree
====================

This decision tree describes how to use the `alt` attribute of the `<img>` element in various situations. For some types of images, there are alternative approaches, such as using CSS background images for decorative images or web fonts instead of images of text.

-   **Does the image contain text?**
    -   **Yes:**
        -   **… and the text is also present as *real* text nearby.** *Use an empty `alt` attribute. See [Decorative Images](../decorative/).*
        -   **… and the text is only shown for visual effects.** *Use an empty `alt` attribute. See [Decorative Images](../decorative/).*
        -   **… and the text has a specific function, for example is an icon.** *Use the `alt` attribute to communicate the function of the image. See [Functional Images](../functional/).*
        -   **… and the text in the image is not present otherwise.** *Use the `alt` attribute to include the text of the image. See [Images of Text](../textual/#image-of-styled-text-with-decorative-effect).*
    -   **No:**
        -   Continue.
-   **Is the image used in a link or a button, and would it be hard or impossible to understand what the link or the button does, if the image wasn’t there?**
    -   **Yes:**
        -   *Use the `alt` attribute to communicate the destination of the link or action taken. See [Functional Images](../functional/).*
    -   **No:**
        -   Continue.
-   **Does the image contribute meaning to the current page or context?**
    -   **Yes:**
        -   **… and it’s a simple graphic or photograph.** *Use a brief description of the image in a way that conveys that meaning in the `alt` attribute. See [Informative Images](../informative/).*
        -   **… and it’s a graph or complex piece of information.** *Include the information contained in the image elsewhere on the page. See [Complex Images](../complex/).*
        -   **… and it shows content that is redundant to *real* text nearby.** *Use an empty `alt` attribute. See (redundant) [Functional Images](../functional/#logo-image-within-link-text).*
    -   **No:**
        -   Continue.
-   **Is the image purely decorative or not intended for the user?**
    -   **Yes:**
        -   *Use an empty `alt` attribute. See [Decorative Images](../decorative/).*
    -   **No:**
        -   Continue.
-   **Is the image’s use not listed above or it’s unclear what `alt` text to provide?**
    -   This decision tree **does not** cover all cases. For detailed information on the provision of text alternatives refer to the [Image Concepts Page](../).

<!-- -->

-   [<span class="count"></span><span class="txt"><span class="dir">Previous:</span><span class="title">Image Maps</span></span>](../imagemap/)
-   [<span class="count"></span><span class="txt"><span class="dir">Next:</span><span class="title">Tips and Tricks</span></span>](../tips/)

We welcome your ideas
---------------------

Please send any ideas, suggestions, or comments to the [(publicly-archived) mailing list wai-eo-editors@w3.org](mailto:wai-eo-editors@w3.org?subject=%5BTutorial%20Feedback%5D). You can also contribute to the [code directly on Github](https://github.com/w3c/wai-tutorials).

<a href="https://github.com/w3c/wai-tutorials/blob/master/source/images/decision-tree.html.erb.md" class="btn">Fork &amp; edit this page on Github</a>

Images Tutorial
---------------

-   [<span class="count"></span><span class="txt">Images Concepts</span>](../)
-   [<span class="count"></span><span class="txt">Informative Images</span>](../informative/)
-   [<span class="count"></span><span class="txt">Decorative Images</span>](../decorative/)
-   [<span class="count"></span><span class="txt">Functional Images</span>](../functional/)
-   [<span class="count"></span><span class="txt">Images of Text</span>](../textual/)
-   [<span class="count"></span><span class="txt">Complex Images</span>](../complex/)
-   [<span class="count"></span><span class="txt">Groups of Images</span>](../groups/)
-   [<span class="count"></span><span class="txt">Image Maps</span>](../imagemap/)
-   <span class="current-a"><span class="count"></span><span class="txt"><span class="visuallyhidden">Current: </span>An alt Decision Tree</span></span>
-   [<span class="count"></span><span class="txt">Tips and Tricks</span>](../tips/)

All Tutorials
-------------

-   [<span class="count"></span><span class="txt">Page Structure</span>](../../page-structure/)
-   [<span class="count"></span><span class="txt">Menus</span>](../../menus/)
-   <span class="current-a"><span class="count"></span><span class="txt"><span class="visuallyhidden">Current: </span>Images</span></span>
-   [<span class="count"></span><span class="txt">Tables</span>](../../tables/)
-   [<span class="count"></span><span class="txt">Forms</span>](../../forms/)
-   [<span class="count"></span><span class="txt">Carousels</span>](../../carousels/)

Document Information
--------------------

**Feedback: We welcome ideas for improvements, bug reports, and comments** via [GitHub](https://github.com/w3c/wai-tutorials) or e-mail to <wai-eo-editors@w3.org> (a publicly archived list) or <wai@w3.org> (a WAI staff-only list).

-   **Status:** Updated 27 July 2019 (first published September 2014)
-   Editors:
    -   [Eric Eggert](https://www.w3.org/People/yatil/)
    -   [Shadi Abou-Zahra](https://www.w3.org/People/shadi/)

    Contributors:
    -   Steve Faulkner
    -   Anna Belle Leiserson
    -   the Web Content Accessibility Guidelines Working Group ([WCAG WG](https://www.w3.org/WAI/GL/))
    -   the Education and Outreach Working Group ([EOWG](https://www.w3.org/WAI/EO/))

-   Developed with support from the [WAI-ACT project](https://www.w3.org/WAI/ACT/), co-funded by the **European Commission IST Programme**.
-   \[[<span class="count"></span><span class="txt">Attributions</span>](../../attributions/)\] \[[<span class="count"></span><span class="txt">Changelog</span>](../../changelog/)\]

\[[WAI Site Map](https://www.w3.org/WAI/sitemap.html)\] \[[Help with WAI Website](https://www.w3.org/WAI/sitehelp.html)\] \[[Search](https://www.w3.org/WAI/search.php)\] \[[Contacting WAI](https://www.w3.org/WAI/contacts)\]

Copyright © 2019 W3C <sup>®</sup> ([MIT](http://www.csail.mit.edu/), [ERCIM](http://www.ercim.eu/), [Keio](http://www.keio.ac.jp/), [Beihang](http://ev.buaa.edu.cn/)) [Usage policies apply](/Consortium/Legal/ipr-notice).

![](//www.w3.org/analytics/piwik/piwik.php?idsite=328)
