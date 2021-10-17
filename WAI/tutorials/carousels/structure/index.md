[<img src="../../img/w3c-bde9a11f.svg" alt="W3C" width="90" />](http://w3.org/) <a href="http://w3.org/WAI/" class="wai"><img src="../../img/wai-590850fc.svg" alt="Web Accessibility Initiative" /></a>

[Web Accessibility Tutorials <span class="subheading">Guidance on how to create websites that meet WCAG</span>](../../)

<a href="#nav" class="btn btn-jump">Jump to the navigation</a>

<span class="home">[<span class="count"></span><span class="txt">Tutorials home</span>](../../)</span> <span class="icon icon-chevron-right"></span><span class="visuallyhidden">»</span> <span class="other"> [<span class="count"></span><span class="txt">Carousels</span>](../) <span class="icon icon-chevron-right"></span><span class="visuallyhidden">»</span> <span class="current-a"><span class="count"></span><span class="txt"><span class="visuallyhidden">Current: </span>Carousel Structure</span></span> </span>

Carousel Structure
==================

Structural markup ensures that the content of a carousel can be used in a variety of situations. For example, a carousel with proper markup could be presented as a list of articles on a mobile device.

General Structure
-----------------

As a collection of content items, carousels are typically best represented as unordered lists, using `<ul>` and `<li>`. Depending on the context, other elements can also be used.

Every carousel should be enclosed in a labeled region, to allow users to find the carousel easily. In the following example, a `<section>` element is used to define the region and `aria-labelledby` defines the heading that contains the label.

See the Page Structure Tutorial for more information on [regions](../../page-structure/regions/) and [labels](../../page-structure/labels/).

Code snippet:

    <section class="carousel" aria-labelledby="carouselheading">
      <h3 id="carouselheading" class="visuallyhidden">Recent news</h3>
      <ul>
        <li class="slide">…</li>
        <li class="slide">…</li>
        <li class="slide">…</li>
        …
      </ul>
    </section>

A [working demo example](../working-example/) for this code is available.

Carousel items
--------------

Carousels are often used as a gallery to display a series of images. However, more complex content, such as teasers, articles, or entire sections of web pages can also be shown inside carousels. In all cases, use appropriate markup to ensure that the structure and meaning of the content are conveyed clearly. Such markup may include headings, sections, lists, articles, and other elements as needed.

This first example shows a carousel item with images as content:

Code snippet: Example 1

    …
    <li class="slide">
      <img src="teddy1.jpg" alt="Space Teddy">
    </li>
    …

This example of an article that includes a heading and a paragraph shows how more complex content can be used.

Code snippet: Example 2

    …
    <li class="slide" style="background-image: url('teddy1.jpg');">
      <article>
        <h4>Space Teddy production reaches all-time high</h4>
        <p>Teddies in Space Inc. has released outstanding numbers for the last solar year. The production of Space Teddies increased by 17%. The new version, scheduled to be released in a few months, will likely be the biggest Space Teddy release ever.</p>
        …
      </article>
    </li>
    …

Related WCAG resources
----------------------

These tutorials provide best-practice guidance on implementing accessibility in different situations. This page combined the following WCAG success criteria and techniques from different conformance levels:

**Success Criteria:**

-   [1.3.1 Info and Relationships:](https://www.w3.org/WAI/WCAG21/quickref/#info-and-relationships) Information, structure, and relationships conveyed through presentation can be programmatically determined or are available in text. (Level A)

-   [2.4.6 Headings and Labels:](https://www.w3.org/WAI/WCAG21/quickref/#headings-and-labels) Headings and labels describe topic or purpose. (Level AA)

**Techniques:**

-   [G130: Providing descriptive headings](https://www.w3.org/WAI/WCAG21/Techniques/general/G130)
-   [H42: Using h1-h6 to identify headings](https://www.w3.org/WAI/WCAG21/Techniques/html/H42)
-   [H48: Using ol, ul and dl for lists or groups of links](https://www.w3.org/WAI/WCAG21/Techniques/html/H48)

-   [<span class="count"></span><span class="txt"><span class="dir">Previous:</span><span class="title">Carousel Concepts</span></span>](../)
-   [<span class="count"></span><span class="txt"><span class="dir">Next:</span><span class="title">Functionality</span></span>](../functionality/)

We welcome your ideas
---------------------

Please send any ideas, suggestions, or comments to the [(publicly-archived) mailing list wai-eo-editors@w3.org](mailto:wai-eo-editors@w3.org?subject=%5BTutorial%20Feedback%5D). You can also contribute to the [code directly on Github](https://github.com/w3c/wai-tutorials).

<a href="https://github.com/w3c/wai-tutorials/blob/master/source/carousels/structure.html.erb.md" class="btn">Fork &amp; edit this page on Github</a>

Carousels Tutorial
------------------

-   [<span class="count"></span><span class="txt">Carousel Concepts</span>](../)
-   <span class="current-a"><span class="count"></span><span class="txt"><span class="visuallyhidden">Current: </span>Structure</span></span>
-   [<span class="count"></span><span class="txt">Functionality</span>](../functionality/)
-   [<span class="count"></span><span class="txt">Animations</span>](../animations/)
-   [<span class="count"></span><span class="txt">Styling</span>](../styling/)
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
