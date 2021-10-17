[<img src="../../img/w3c-bde9a11f.svg" alt="W3C" width="90" />](http://w3.org/) <a href="http://w3.org/WAI/" class="wai"><img src="../../img/wai-590850fc.svg" alt="Web Accessibility Initiative" /></a>

[Web Accessibility Tutorials <span class="subheading">Guidance on how to create websites that meet WCAG</span>](../../)

<a href="#nav" class="btn btn-jump">Jump to the navigation</a>

<span class="home">[<span class="count"></span><span class="txt">Tutorials home</span>](../../)</span> <span class="icon icon-chevron-right"></span><span class="visuallyhidden">»</span> <span class="other"> [<span class="count"></span><span class="txt">Images</span>](../) <span class="icon icon-chevron-right"></span><span class="visuallyhidden">»</span> <span class="current-a"><span class="count"></span><span class="txt"><span class="visuallyhidden">Current: </span>Decorative Images</span></span> </span>

Decorative Images
=================

Decorative images don’t add information to the content of a page. For example, the information provided by the image might already be given using adjacent text, or the image might be included to make the website more visually attractive.

In these cases, a null (empty) `alt` text should be provided (`alt=""`) so that they can be ignored by assistive technologies, such as screen readers. Text values for these types of images would add audible clutter to screen reader output or could distract users if the topic is different from that in adjacent text. Leaving out the `alt` attribute is also not an option because when it is not provided, some screen readers will announce the file name of the image instead.

Whether to treat an image as decorative or [informative](../informative/) is a judgment that only the author can make, based on the reason for including the image on the page. Images may be decorative when they are:

-   Visual styling such as borders, spacers, and corners;
-   Supplementary to link text to improve its appearance or increase the clickable area;
-   Illustrative of adjacent text but not contributing information (“eye-candy”);
-   Identified and described by surrounding text.

The examples below show how to use the `alt` attribute when decorative images are provided using the `<img>` element. Where possible, decorative images should be provided using CSS background images instead.

Image used as part of page design
---------------------------------

This image is used as a border in the page design and has a purely decorative purpose.

![Example:](../../img/topinfo_bg-42052e6c.png)

Code snippet:

    <img src="topinfo_bg.png" alt="">

Screen readers also allow the use of WAI-ARIA to hide elements by using `role="presentation"`. However, currently, this feature is not as widely supported as using a null `alt` attribute.

Code snippet:

    <img src="topinfo_bg.png" role="presentation">

**Note:** If the image was used to indicate a thematic break, e.g. a scene change in a story, or a transition to another topic, using the `<hr>` element would be appropriate to notify assistive technology.

Decorative image as part of a text link
---------------------------------------

This illustration of a crocus bulb is used to make the link easier to identify and to increase the clickable area but doesn’t add to the information already provided in the adjacent link text (of the same anchor). In this case, use a null (empty) `alt` value for the image.

![Example:](../../img/crocus-43300466.jpg)

Code snippet:

    <a href="crocuspage.html">
        <img src="crocus.jpg" alt="">
        <strong> Crocus bulbs</strong>
    </a>

Image with adjacent text alternative
------------------------------------

This picture of a sleeping dog is already sufficiently described by the adjacent text. There is no need to repeat this information, and a null (empty) `alt` value can be used for this image.

![Example:](../../img/sleeping-a095dfe5.jpg)

Code snippet:

    <p>
        <img src="sleepingdog.jpg" alt="">
        <strong>The sleeping dog:</strong> ...
    </p>

Image used for ambiance (eye-candy)
-----------------------------------

This image is used only to add ambiance or visual interest to the page.

![Example:](../../img/kew-34e02a39.jpg)

Code snippet:

    <img src="tropical.jpg" alt="">

**Note:** If the purpose of this image was to identify a plant or convey other information, rather than just to improve the look of the page, it should probably be treated as [informative](../informative/). The author determines the purpose for the use of the image.

Related WCAG resources
----------------------

These tutorials provide best-practice guidance on implementing accessibility in different situations. This page combined the following WCAG success criteria and techniques from different conformance levels:

**Techniques:**

-   [H2: Combining adjacent image and text links for the same resource](https://www.w3.org/WAI/WCAG21/Techniques/html/H2)
-   [H67: Using null alt text and no title attribute on img elements for images that AT should ignore](https://www.w3.org/WAI/WCAG21/Techniques/html/H67)

-   [<span class="count"></span><span class="txt"><span class="dir">Previous:</span><span class="title">Informative Images</span></span>](../informative/)
-   [<span class="count"></span><span class="txt"><span class="dir">Next:</span><span class="title">Functional Images</span></span>](../functional/)

We welcome your ideas
---------------------

Please send any ideas, suggestions, or comments to the [(publicly-archived) mailing list wai-eo-editors@w3.org](mailto:wai-eo-editors@w3.org?subject=%5BTutorial%20Feedback%5D). You can also contribute to the [code directly on Github](https://github.com/w3c/wai-tutorials).

<a href="https://github.com/w3c/wai-tutorials/blob/master/source/images/decorative.html.erb.md" class="btn">Fork &amp; edit this page on Github</a>

Images Tutorial
---------------

-   [<span class="count"></span><span class="txt">Images Concepts</span>](../)
-   [<span class="count"></span><span class="txt">Informative Images</span>](../informative/)
-   <span class="current-a"><span class="count"></span><span class="txt"><span class="visuallyhidden">Current: </span>Decorative Images</span></span>
-   [<span class="count"></span><span class="txt">Functional Images</span>](../functional/)
-   [<span class="count"></span><span class="txt">Images of Text</span>](../textual/)
-   [<span class="count"></span><span class="txt">Complex Images</span>](../complex/)
-   [<span class="count"></span><span class="txt">Groups of Images</span>](../groups/)
-   [<span class="count"></span><span class="txt">Image Maps</span>](../imagemap/)
-   [<span class="count"></span><span class="txt">An alt Decision Tree</span>](../decision-tree/)
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
    -   Anna Belle Leiserson
    -   the Web Content Accessibility Guidelines Working Group ([WCAG WG](https://www.w3.org/WAI/GL/))
    -   the Education and Outreach Working Group ([EOWG](https://www.w3.org/WAI/EO/))

-   Developed with support from the [WAI-ACT project](https://www.w3.org/WAI/ACT/), co-funded by the **European Commission IST Programme**.
-   \[[<span class="count"></span><span class="txt">Attributions</span>](../../attributions/)\] \[[<span class="count"></span><span class="txt">Changelog</span>](../../changelog/)\]

\[[WAI Site Map](https://www.w3.org/WAI/sitemap.html)\] \[[Help with WAI Website](https://www.w3.org/WAI/sitehelp.html)\] \[[Search](https://www.w3.org/WAI/search.php)\] \[[Contacting WAI](https://www.w3.org/WAI/contacts)\]

Copyright © 2019 W3C <sup>®</sup> ([MIT](http://www.csail.mit.edu/), [ERCIM](http://www.ercim.eu/), [Keio](http://www.keio.ac.jp/), [Beihang](http://ev.buaa.edu.cn/)) [Usage policies apply](/Consortium/Legal/ipr-notice).

![](//www.w3.org/analytics/piwik/piwik.php?idsite=328)
