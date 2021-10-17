[<img src="../../img/w3c-bde9a11f.svg" alt="W3C" width="90" />](http://w3.org/) <a href="http://w3.org/WAI/" class="wai"><img src="../../img/wai-590850fc.svg" alt="Web Accessibility Initiative" /></a>

[Web Accessibility Tutorials <span class="subheading">Guidance on how to create websites that meet WCAG</span>](../../)

<a href="#nav" class="btn btn-jump">Jump to the navigation</a>

<span class="home">[<span class="count"></span><span class="txt">Tutorials home</span>](../../)</span> <span class="icon icon-chevron-right"></span><span class="visuallyhidden">»</span> <span class="other"> [<span class="count"></span><span class="txt">Images</span>](../) <span class="icon icon-chevron-right"></span><span class="visuallyhidden">»</span> <span class="current-a"><span class="count"></span><span class="txt"><span class="visuallyhidden">Current: </span>Groups of Images</span></span> </span>

Groups of Images
================

Sometimes groups of images are used together to represent one piece of information. For example, a collection of star icons that together represent a rating. In this case, only one of the images needs a text alternative to describe the entire collection, while the other images have a null (empty) `alt` attribute so that they are ignored by assistive technology.

In other cases, a group of images may represent a collection of related images. For example, showing a collection of art impressions that are thematically related. In this case, each image needs its text alternative that describes it individually, as well as its relationship within the group.

Multiple images conveying a single piece of information
-------------------------------------------------------

This group of five images combined shows a product rating. There are five images (three filled stars, one half-filled star and one empty star) indicating the overall rating. The text alternative for the first image is “Rating: 3.5 out of 5 stars”. All other images have a null (empty) `alt` attribute (`alt=""`).

![Example:](../../img/star-full-de03b252.png)

Code snippet:

    Rating:
    <img src="star-full.jpg"  alt="3.5 out of 5 stars">
    <img src="star-full.jpg"  alt="">
    <img src="star-full.jpg"  alt="">
    <img src="star-half.jpg"  alt="">
    <img src="star-empty.jpg" alt="">

A collection of images
----------------------

In the example below, the HTML5 `<figure>` and `<figcaption>` elements are used to provide a caption for each image in a collection. The `<figure>` element can be nested, which is used in the example to provide a caption for the entire collection of images. The WAI-ARIA attribute `role` with the value of `group` is used to indicate this grouping to assistive technologies, `aria-labelledby` makes sure that the `figcaption` elements are used as labels for the individual groups.

Note: The web browser and assistive technology support vary for this particular WAI-ARIA attribute and value.

![Example:](../../img/castle-etching-6ac1e0cb.jpg)

![Oil-based paint on canvas. Eloisa Faulkner, 1756.](../../img/castle-painting-8631e2ea.jpg)

![Film photograph. <span lang="fr">Séraphin Médéric Mieusement</span>, 1936.](../../img/castle-fluro-2a089e21.jpg)

Code snippet:

    <figure role="group" aria-labelledby="fig1">
        <figcaption id="fig1">
            The castle through the ages: 1423, 1756, and 1966 respectively.
        </figcaption>


        <figure role="group" aria-labelledby="fig11">
            <img src="castle-etching.jpg"
                alt="The castle has one tower, and a tall wall around it.">
            <figcaption id="fig11">Charcoal on  wood. Anonymous, circa 1423.</figcaption>
        </figure>

        <figure role="group" aria-labelledby="fig12">
            <img src="castle-painting.jpg"
                alt="The castle now has two towers and two walls.">
            <figcaption id="fig12">Oil-based paint on canvas. Eloisa Faulkner, 1756.</figcaption>
        </figure>

        <figure role="group" aria-labelledby="fig13">
            <img src="castle-fluro.jpg"
                alt="The castle lies in ruins, the original tower all that remains in one piece.">
            <figcaption id="fig13">Film photograph. <span lang="fr">Séraphin Médéric Mieusement</span>, 1936.</figcaption>
        </figure>

    </figure>

Related WCAG resources
----------------------

These tutorials provide best-practice guidance on implementing accessibility in different situations. This page combined the following WCAG success criteria and techniques from different conformance levels:

**Techniques:**

-   [ARIA13: Using aria-labelledby to name regions and landmarks](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA13)
-   [G196: Using a text alternative on one item within a group of images that describes all items in the group](https://www.w3.org/WAI/WCAG21/Techniques/general/G196)
-   [H67: Using null alt text and no title attribute on img elements for images that AT should ignore](https://www.w3.org/WAI/WCAG21/Techniques/html/H67)

-   [<span class="count"></span><span class="txt"><span class="dir">Previous:</span><span class="title">Complex Images</span></span>](../complex/)
-   [<span class="count"></span><span class="txt"><span class="dir">Next:</span><span class="title">Image Maps</span></span>](../imagemap/)

We welcome your ideas
---------------------

Please send any ideas, suggestions, or comments to the [(publicly-archived) mailing list wai-eo-editors@w3.org](mailto:wai-eo-editors@w3.org?subject=%5BTutorial%20Feedback%5D). You can also contribute to the [code directly on Github](https://github.com/w3c/wai-tutorials).

<a href="https://github.com/w3c/wai-tutorials/blob/master/source/images/groups.html.erb.md" class="btn">Fork &amp; edit this page on Github</a>

Images Tutorial
---------------

-   [<span class="count"></span><span class="txt">Images Concepts</span>](../)
-   [<span class="count"></span><span class="txt">Informative Images</span>](../informative/)
-   [<span class="count"></span><span class="txt">Decorative Images</span>](../decorative/)
-   [<span class="count"></span><span class="txt">Functional Images</span>](../functional/)
-   [<span class="count"></span><span class="txt">Images of Text</span>](../textual/)
-   [<span class="count"></span><span class="txt">Complex Images</span>](../complex/)
-   <span class="current-a"><span class="count"></span><span class="txt"><span class="visuallyhidden">Current: </span>Groups of Images</span></span>
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
