[<img src="../../img/w3c-bde9a11f.svg" alt="W3C" width="90" />](http://w3.org/) <a href="http://w3.org/WAI/" class="wai"><img src="../../img/wai-590850fc.svg" alt="Web Accessibility Initiative" /></a>

[Web Accessibility Tutorials <span class="subheading">Guidance on how to create websites that meet WCAG</span>](../../)

<a href="#nav" class="btn btn-jump">Jump to the navigation</a>

<span class="home">[<span class="count"></span><span class="txt">Tutorials home</span>](../../)</span> <span class="icon icon-chevron-right"></span><span class="visuallyhidden">»</span> <span class="other"> [<span class="count"></span><span class="txt">Page Structure</span>](../) <span class="icon icon-chevron-right"></span><span class="visuallyhidden">»</span> <span class="current-a"><span class="count"></span><span class="txt"><span class="visuallyhidden">Current: </span>Headings</span></span> </span>

Headings
========

Headings communicate the organization of the content on the page. Web browsers, plug-ins, and assistive technologies can use them to provide in-page navigation.

Heading ranks
-------------

Nest headings by their rank (or level). The most important heading has the rank 1 (`<h1>`), the least important heading rank 6 (`<h6>`). Headings with an equal or higher rank start a new section, headings with a lower rank start new subsections that are part of the higher ranked section.

Skipping heading ranks can be confusing and should be avoided where possible: Make sure that a `<h2>` is **not** followed directly by an `<h4>`, for example. It is ok to skip ranks when closing subsections, for instance, a `<h2>` beginning a new section, can follow an `<h4>` as it closes the previous section.

### Exception for fixed page sections

In fixed sections of the page, for example in sidebars, the heading ranks *should not* change depending on the ranks in the content area. In those cases, consistency across pages is more important.

Organize passages of text
-------------------------

In the following example, headings are used to only organize passages of text on a page, for example the main content:

![Example:](../../img/page-structure-headings-intro-b39b620a.png)

Headings that reflect the page organization
-------------------------------------------

Headings are useful for labeling page regions. Use `aria-labelledby` to associate headings with their page region, as described in the [label page regions](../labels/#using-aria-labelledby) section of this tutorial. If the headings are visible, the regions are easy to identify for all users.

### Main heading before navigation

In this first example, the heading with the rank 1 is the first heading in the document. All other headings for structuring the page (Navigation Menu, Sidebar, Footer) are one rank lower, and so is the heading for the main content.

![Example:](../../img/page-structure-headings-1b48a3e1.png)

View a [complete code example](../example/) to see headings used like this.

### Main heading after navigation

In this second example, the main heading is not the site name but the content heading, which is rank 1. The subheadings in the content are rank 2 as are all the other structural headings.

![Example:](../../img/page-structure-headings-2-3079de44.png)

Related WCAG resources
----------------------

These tutorials provide best-practice guidance on implementing accessibility in different situations. This page combined the following WCAG success criteria and techniques from different conformance levels:

**Success Criteria:**

-   [1.3.1 Info and Relationships:](https://www.w3.org/WAI/WCAG21/quickref/#info-and-relationships) Information, structure, and relationships conveyed through presentation can be programmatically determined or are available in text. (Level A)

-   [2.4.1 Bypass Blocks:](https://www.w3.org/WAI/WCAG21/quickref/#bypass-blocks) A mechanism is available to bypass blocks of content that are repeated on multiple Web pages. (Level A)

-   [2.4.6 Headings and Labels:](https://www.w3.org/WAI/WCAG21/quickref/#headings-and-labels) Headings and labels describe topic or purpose. (Level AA)

-   [2.4.10 Section Headings:](https://www.w3.org/WAI/WCAG21/quickref/#section-headings) Section headings are used to organize the content. (Level AAA)

**Techniques:**

-   [ARIA12: Using role=heading to identify headings](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA12)
-   [G130: Providing descriptive headings](https://www.w3.org/WAI/WCAG21/Techniques/general/G130)
-   [G141: Organizing a page using headings](https://www.w3.org/WAI/WCAG21/Techniques/general/G141)
-   [H42: Using h1-h6 to identify headings](https://www.w3.org/WAI/WCAG21/Techniques/html/H42)
-   [H69: Providing heading elements at the beginning of each section of content](https://www.w3.org/WAI/WCAG21/Techniques/html/H69)
-   [H80: Identifying the purpose of a link using link text combined with the preceding heading element](https://www.w3.org/WAI/WCAG21/Techniques/html/H80)
-   [PDF9: Providing headings by marking content with heading tags in PDF documents](https://www.w3.org/WAI/WCAG21/Techniques/pdf/PDF9)

-   [<span class="count"></span><span class="txt"><span class="dir">Previous:</span><span class="title">Labeling Regions</span></span>](../labels/)
-   [<span class="count"></span><span class="txt"><span class="dir">Next:</span><span class="title">Content Structure</span></span>](../content/)

We welcome your ideas
---------------------

Please send any ideas, suggestions, or comments to the [(publicly-archived) mailing list wai-eo-editors@w3.org](mailto:wai-eo-editors@w3.org?subject=%5BTutorial%20Feedback%5D). You can also contribute to the [code directly on Github](https://github.com/w3c/wai-tutorials).

<a href="https://github.com/w3c/wai-tutorials/blob/master/source/page-structure/headings.html.erb.md" class="btn">Fork &amp; edit this page on Github</a>

Page Structure Tutorial
-----------------------

-   [<span class="count"></span><span class="txt">Concepts</span>](../)
-   [<span class="count"></span><span class="txt">Page Regions</span>](../regions/)
-   [<span class="count"></span><span class="txt">Labeling Regions</span>](../labels/)
-   <span class="current-a"><span class="count"></span><span class="txt"><span class="visuallyhidden">Current: </span>Headings</span></span>
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
