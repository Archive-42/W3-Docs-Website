[<img src="../../img/w3c-bde9a11f.svg" alt="W3C" width="90" />](http://w3.org/) <a href="http://w3.org/WAI/" class="wai"><img src="../../img/wai-590850fc.svg" alt="Web Accessibility Initiative" /></a>

[Web Accessibility Tutorials <span class="subheading">Guidance on how to create websites that meet WCAG</span>](../../)

<a href="#nav" class="btn btn-jump">Jump to the navigation</a>

<span class="home">[<span class="count"></span><span class="txt">Tutorials home</span>](../../)</span> <span class="icon icon-chevron-right"></span><span class="visuallyhidden">»</span> <span class="other"> [<span class="count"></span><span class="txt">Images</span>](../) <span class="icon icon-chevron-right"></span><span class="visuallyhidden">»</span> <span class="current-a"><span class="count"></span><span class="txt"><span class="visuallyhidden">Current: </span>Image Maps</span></span> </span>

Image Maps
==========

A client-side image map is an image divided into selectable regions defined by `<area>` elements (“hotspots”) that allow user interaction. Usually, the selectable regions are links to other pages. For image maps, text alternatives are needed on both the `<img>` element itself (to convey the informative context) and on each of the `<area>` elements (to convey the link destination or the action that will be initiated if the link is followed).

An organizational chart with links to individual pages
------------------------------------------------------

The following organizational chart is used to provide links to each director's home page. The text alternative for the image is “Board of Directors and related staff:”. Each linked `<area>` has a text alternative to identify the individual – for example, “Davy Jones: Chairman”. The text alternative for individuals also states their relation in the graph.

![Example:](../../img/orgchart-b583d8ff.png)

Code snippet:

    <img src="orgchart.png"
         alt="Board of directors and related staff: "
         usemap="#Map">
    <map id="Map" name="Map">
        <area shape="rect"
              coords="176,14,323,58"
              href="[…]"
              alt="Davy Jones: Chairman">
        […]
        <area shape="rect"
              coords="6,138,155,182"
              href="[…]"
              alt="Harry H Brown: Marketing Director (reports to chairman)">
        […]
    </map>

[Full code for Image map example](../examples/imagemap/)

Browser implementation for image maps varies at the time of writing; see [this HTML bug](https://lists.w3.org/Archives/Public/public-html-bugzilla/2015Jan/0020.html). To accommodate for the different implementations, keep in mind to:

-   use every image map only once. That means if multiple images with the same map are to be used, the map should be duplicated and have a different `id`s;
-   place the `<map>` element as a direct sibling to the image.

**Note:** Image maps may not function correctly on some mobile devices if the coordinates for the areas are not scaled using the same proportions as the image. To compensate for this, provide redundant text links on the same page.

Related WCAG resources
----------------------

These tutorials provide best-practice guidance on implementing accessibility in different situations. This page combined the following WCAG success criteria and techniques from different conformance levels:

**Techniques:**

-   [H24: Providing text alternatives for the area elements of image maps](https://www.w3.org/WAI/WCAG21/Techniques/html/H24)
-   [H37: Using alt attributes on img elements](https://www.w3.org/WAI/WCAG21/Techniques/html/H37)

-   [<span class="count"></span><span class="txt"><span class="dir">Previous:</span><span class="title">Groups of Images</span></span>](../groups/)
-   [<span class="count"></span><span class="txt"><span class="dir">Next:</span><span class="title">An alt Decision Tree</span></span>](../decision-tree/)

We welcome your ideas
---------------------

Please send any ideas, suggestions, or comments to the [(publicly-archived) mailing list wai-eo-editors@w3.org](mailto:wai-eo-editors@w3.org?subject=%5BTutorial%20Feedback%5D). You can also contribute to the [code directly on Github](https://github.com/w3c/wai-tutorials).

<a href="https://github.com/w3c/wai-tutorials/blob/master/source/images/imagemap.html.erb.md" class="btn">Fork &amp; edit this page on Github</a>

Images Tutorial
---------------

-   [<span class="count"></span><span class="txt">Images Concepts</span>](../)
-   [<span class="count"></span><span class="txt">Informative Images</span>](../informative/)
-   [<span class="count"></span><span class="txt">Decorative Images</span>](../decorative/)
-   [<span class="count"></span><span class="txt">Functional Images</span>](../functional/)
-   [<span class="count"></span><span class="txt">Images of Text</span>](../textual/)
-   [<span class="count"></span><span class="txt">Complex Images</span>](../complex/)
-   [<span class="count"></span><span class="txt">Groups of Images</span>](../groups/)
-   <span class="current-a"><span class="count"></span><span class="txt"><span class="visuallyhidden">Current: </span>Image Maps</span></span>
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
