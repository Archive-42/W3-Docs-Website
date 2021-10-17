[<img src="../../img/w3c-bde9a11f.svg" alt="W3C" width="90" />](http://w3.org/) <a href="http://w3.org/WAI/" class="wai"><img src="../../img/wai-590850fc.svg" alt="Web Accessibility Initiative" /></a>

[Web Accessibility Tutorials <span class="subheading">Guidance on how to create websites that meet WCAG</span>](../../)

<a href="#nav" class="btn btn-jump">Jump to the navigation</a>

<span class="home">[<span class="count"></span><span class="txt">Tutorials home</span>](../../)</span> <span class="icon icon-chevron-right"></span><span class="visuallyhidden">»</span> <span class="other"> [<span class="count"></span><span class="txt">Page Structure</span>](../) <span class="icon icon-chevron-right"></span><span class="visuallyhidden">»</span> <span class="current-a"><span class="count"></span><span class="txt"><span class="visuallyhidden">Current: </span>Page Regions</span></span> </span>

Page Regions
============

Mark up different regions of web pages and applications, so that they can be identified by web browsers and assistive technologies.

Page header
-----------

<img src="../../img/page-structure-header-28e521ee.png" class="symbol" /> Most websites have a region at the top of every page that contains site-wide information, such as the website logo, search function, and navigation options. HTML5 provides the `<header>` element, which can be used to define such a region.

**Note:** If the `<header>` element is used inside `<article>` and `<section>` elements, it is not associated with the whole page, but only with that specific `<article>` or `<section>`.

Code snippet:

    <header>
      …
      <img src="/images/logo.png" alt="SpaceBear Inc.">
      …
    </header>

View a [complete code example](../example/) for all regions combined.

Page footer
-----------

<img src="../../img/page-structure-footer-fbaedb8f.png" class="symbol" /> Similar to the page header, most websites also have a region at the bottom of every page that contains site-wide information, such as copyright information, privacy statements, or disclaimers. HTML5 provides the `<footer>` element, which can be used to define such a region.

**Note:** If the `<footer>` element is used inside `<article>` and `<section>` elements, it is not identified as the footer for the whole page but only relates to that specific `<article>` or `<section>`.

Code snippet:

    <footer>
      …
      <p>&copy; 2014 SpaceBears Inc.</p>
      …
    </footer>

Navigation
----------

<img src="../../img/page-structure-navigation-529bca1f.png" class="symbol" /> The HTML5 `<nav>` element can be used to identify a navigation menu. A web page can have any number of navigation menus. Use [labels](../labels/) to identify each navigation menu.

Code snippet:

    <nav aria-label="Main Navigation">
      …
    </nav>
    …
    <nav aria-labelledby="quicknav-heading">
      <h5 id="quicknav-heading">Quick Navigation</h5>
      …
    </nav>

The [Menus tutorial](../../menus/) provides more details on creating menus.

Main content
------------

<img src="../../img/page-structure-main-7bc6392c.png" class="symbol" /> Use the HTML5 `<main>` element to identify the main content region of a web page or application.

Code snippet:

    <main>
      <h1>Stellar launch weekend for the SpaceBear 7!</h1>
      …
    </main>

Complementary content
---------------------

<img src="../../img/page-structure-aside-6c081801.png" class="symbol" /> Use the HTML5 `<aside>` element to identify regions that support the main content, yet are separate and meaningful sections on their own; For example, a side note explaining or annotating the main content.

Code snippet:

    <aside>
      <h3>Related Articles</h3>
      …
    </aside>

Page Regions in HTML5 Using WAI-ARIA
------------------------------------

Most current web browsers support the above HTML5 elements and convey the information to assistive technology through the accessibility APIs. However, to maximize compatibility with web browsers and assistive technologies that support WAI-ARIA but do not yet support HTML5, it is currently advisable to use both the HTML5 elements and the corresponding WAI-ARIA roles.

Code snippet: Examples in HTML5

    <header role="banner">…</header>
    <main role="main">…</main>
    <nav role="navigation">…</nav>
    <footer role="contentinfo">…</footer>

Explore other WAI-ARIA resources:

-   [WAI-ARIA Overview](https://www.w3.org/WAI/intro/aria)
-   [Notes on Using ARIA in HTML](https://www.w3.org/TR/aria-in-html/)

Page Regions in HTML4 Using WAI-ARIA
------------------------------------

If HTML5 cannot be used or if an HTML4 page is retrofitted to improve accessibility, add WAI-ARIA code to `div` elements that function as their HTML5 counterparts, for example:

Code snippet: Examples in HTML4

    <div class="header" role="banner">…</div>
    <div id="main" role="main">…</div>
    <div id="nav" role="navigation">…</div>
    <div id="footer" role="contentinfo">…</div>

Related WCAG resources
----------------------

These tutorials provide best-practice guidance on implementing accessibility in different situations. This page combined the following WCAG success criteria and techniques from different conformance levels:

**Success Criteria:**

-   [1.3.1 Info and Relationships:](https://www.w3.org/WAI/WCAG21/quickref/#info-and-relationships) Information, structure, and relationships conveyed through presentation can be programmatically determined or are available in text. (Level A)

-   [2.4.1 Bypass Blocks:](https://www.w3.org/WAI/WCAG21/quickref/#bypass-blocks) A mechanism is available to bypass blocks of content that are repeated on multiple Web pages. (Level A)

-   [2.4.6 Headings and Labels:](https://www.w3.org/WAI/WCAG21/quickref/#headings-and-labels) Headings and labels describe topic or purpose. (Level AA)

**Techniques:**

-   [ARIA11: Using ARIA landmarks to identify regions of a page](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA11)

-   [<span class="count"></span><span class="txt"><span class="dir">Previous:</span><span class="title">Page Structure Concepts</span></span>](../)
-   [<span class="count"></span><span class="txt"><span class="dir">Next:</span><span class="title">Labeling Regions</span></span>](../labels/)

We welcome your ideas
---------------------

Please send any ideas, suggestions, or comments to the [(publicly-archived) mailing list wai-eo-editors@w3.org](mailto:wai-eo-editors@w3.org?subject=%5BTutorial%20Feedback%5D). You can also contribute to the [code directly on Github](https://github.com/w3c/wai-tutorials).

<a href="https://github.com/w3c/wai-tutorials/blob/master/source/page-structure/regions.html.erb.md" class="btn">Fork &amp; edit this page on Github</a>

Page Structure Tutorial
-----------------------

-   [<span class="count"></span><span class="txt">Concepts</span>](../)
-   <span class="current-a"><span class="count"></span><span class="txt"><span class="visuallyhidden">Current: </span>Page Regions</span></span>
-   [<span class="count"></span><span class="txt">Labeling Regions</span>](../labels/)
-   [<span class="count"></span><span class="txt">Headings</span>](../headings/)
-   [<span class="count"></span><span class="txt">Content Structure</span>](../content/)
-   [<span class="count"></span><span class="txt">Example</span>](../example/)

All Tutorials
-------------

-   <span class="current-a"><span class="count"></span><span class="txt"><span class="visuallyhidden">Current: </span>Page Structure</span></span>
-   [<span class="count"></span><span class="txt">Menus</span>](../../menus/)
-   [<span class="count"></span><span class="txt">Images</span>](../../images/)
-   [<span class="count"></span><span class="txt">Tables</span>](../../tables/)
-   [<span class="count"></span><span class="txt">Forms</span>](../../forms/)
-   [<span class="count"></span><span class="txt">Carousels</span>](../../carousels/)

Document Information
--------------------

**Feedback: We welcome ideas for improvements, bug reports, and comments** via [GitHub](https://github.com/w3c/wai-tutorials) or e-mail to <wai-eo-editors@w3.org> (a publicly archived list) or <wai@w3.org> (a WAI staff-only list).

-   **Status:** Updated 27 July 2019 (first published April 2017)
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
