[<img src="../../img/w3c-bde9a11f.svg" alt="W3C" width="90" />](http://w3.org/) <a href="http://w3.org/WAI/" class="wai"><img src="../../img/wai-590850fc.svg" alt="Web Accessibility Initiative" /></a>

[Web Accessibility Tutorials <span class="subheading">Guidance on how to create websites that meet WCAG</span>](../../)

<a href="#nav" class="btn btn-jump">Jump to the navigation</a>

<span class="home">[<span class="count"></span><span class="txt">Tutorials home</span>](../../)</span> <span class="icon icon-chevron-right"></span><span class="visuallyhidden">»</span> <span class="other"> [<span class="count"></span><span class="txt">Page Structure</span>](../) <span class="icon icon-chevron-right"></span><span class="visuallyhidden">»</span> <span class="current-a"><span class="count"></span><span class="txt"><span class="visuallyhidden">Current: </span>Labeling Regions</span></span> </span>

Labeling Regions
================

Provide labels to distinguish two page regions of the same type, such as “main navigation” and “sub-navigation” menus using a `<nav>` element on the same page. Labels are also used to change the default identification of page regions, for example, to identify a `<aside>` region as “advertisement”. Regions that are unique, such as `<main>`, do not need additional labels.

Using `aria-labelledby`
-----------------------

Use `aria-labelledby` to point to an existing element by its (unique) `id`. The label of the region is the content of the referenced element. Every element can be a label this way. Labels should be short and descriptive. If a heading is present in the region, consider using it as the label:

Code snippet:

    <nav aria-labelledby="regionheading">
      <h3 id="regionheading">On this Page</h3>
        …
    </nav>

Explore other WAI-ARIA resources:

-   [WAI-ARIA Overview](https://www.w3.org/WAI/intro/aria)
-   [Notes on Using ARIA in HTML](https://www.w3.org/TR/aria-in-html/)

Note: This approach using headings is also backward compatible for older web browsers and assistive technologies do not process HTML5 and WAI-ARIA.

Using `aria-label`
------------------

Use the WAI-ARIA `aria-label` attribute to label the region. Consider this approach if the label should not appear visually on the page.

Code snippet:

    <nav aria-label="Main Navigation">
      …
    </nav>

View a [complete code example](../example/) with regions and labels.

Related WCAG resources
----------------------

These tutorials provide best-practice guidance on implementing accessibility in different situations. This page combined the following WCAG success criteria and techniques from different conformance levels:

**Success Criteria:**

-   [2.4.1 Bypass Blocks:](https://www.w3.org/WAI/WCAG21/quickref/#bypass-blocks) A mechanism is available to bypass blocks of content that are repeated on multiple Web pages. (Level A)

-   [2.4.6 Headings and Labels:](https://www.w3.org/WAI/WCAG21/quickref/#headings-and-labels) Headings and labels describe topic or purpose. (Level AA)

**Techniques:**

-   [ARIA11: Using ARIA landmarks to identify regions of a page](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA11)
-   [H69: Providing heading elements at the beginning of each section of content](https://www.w3.org/WAI/WCAG21/Techniques/html/H69)

-   [<span class="count"></span><span class="txt"><span class="dir">Previous:</span><span class="title">Page Regions</span></span>](../regions/)
-   [<span class="count"></span><span class="txt"><span class="dir">Next:</span><span class="title">Headings</span></span>](../headings/)

We welcome your ideas
---------------------

Please send any ideas, suggestions, or comments to the [(publicly-archived) mailing list wai-eo-editors@w3.org](mailto:wai-eo-editors@w3.org?subject=%5BTutorial%20Feedback%5D). You can also contribute to the [code directly on Github](https://github.com/w3c/wai-tutorials).

<a href="https://github.com/w3c/wai-tutorials/blob/master/source/page-structure/labels.html.erb.md" class="btn">Fork &amp; edit this page on Github</a>

Page Structure Tutorial
-----------------------

-   [<span class="count"></span><span class="txt">Concepts</span>](../)
-   [<span class="count"></span><span class="txt">Page Regions</span>](../regions/)
-   <span class="current-a"><span class="count"></span><span class="txt"><span class="visuallyhidden">Current: </span>Labeling Regions</span></span>
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
