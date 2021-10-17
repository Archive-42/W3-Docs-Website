[<img src="../../img/w3c-bde9a11f.svg" alt="W3C" width="90" />](http://w3.org/) <a href="http://w3.org/WAI/" class="wai"><img src="../../img/wai-590850fc.svg" alt="Web Accessibility Initiative" /></a>

[Web Accessibility Tutorials <span class="subheading">Guidance on how to create websites that meet WCAG</span>](../../)

<a href="#nav" class="btn btn-jump">Jump to the navigation</a>

<span class="home">[<span class="count"></span><span class="txt">Tutorials home</span>](../../)</span> <span class="icon icon-chevron-right"></span><span class="visuallyhidden">»</span> <span class="other"> [<span class="count"></span><span class="txt">Tables</span>](../) <span class="icon icon-chevron-right"></span><span class="visuallyhidden">»</span> <span class="current-a"><span class="count"></span><span class="txt"><span class="visuallyhidden">Current: </span>Tips and Tricks</span></span> </span>

Tips and Tricks
===============

-   **Keep it simple:** Complex tables are more work for content creators as well as being harder to interpret for users. It’s usually better to [break up complex tables into simple individual tables](../multi-level/#split-up-multi-level-tables), each containing the data for one sub-topic.

-   **Table separation:** If several tables follow one another, don’t use a single table and put in an additional row of `<th>` cells. Screen readers may read aloud all `<th>` cells in a column, resulting in confusion. [Start a new `<table>` when the topic changes.](../multi-level/#split-up-multi-level-tables)

-   **Data separation:**

    -   Make sure that each separate piece of data has its cell. Don’t use headers in one column and all data in a second column, as this will make it almost impossible for screen readers to work out the relationships between data across columns.

        ![On the left, a table with two columns is shown. The header for the first column reads “Shirt” and the header for the second column reads “Sizes and amount in stock”. The second row reads “Blue” in the first column and “S: 6; M: 13, XL: 10”. In the second row, Sizes for a “Red” shirt are “M: 2; L: 9; XL: 10; XXL: 1”. On the right, the table is split up in “Shirt”, “Size” and “Stock” columns.](../../img/headers-in-one-column-all-data-in-second-0e202713.png)

    -   Don't use line breaks (`<br>` elements) to create table rows as the data in the pseudo-rows may no longer align correctly when text is resized.

        ![On the top there is a table where the content and header cells are not marked up correctly. Line breaks are used to make items look like they align correctly. When resizing the text (bottom) the items don’t line up anymore](../../img/table-text-resize-c747bfbd.png)

-   **Alignment:** Align text to the left and numeric data to the right (in left-to-right languages), so that people using larger text sizes or smaller screens will be able to find it. This is especially useful if a cell spans more than one column. It’s helpful to give column headers the same alignment as the data in the cells below.

-   **Styling header cells:** `<th>` elements are used for header cells, using `<td>` elements with different styling will make tables less accessible if not inaccessible. It is also helpful to differentiate `<th>` and `<td>` cells visually. For example, on these tutorial pages, header cells have a dark gray background.

-   **Zebra tables:** Styling even and odd rows in a different way can be helpful to people who have reading difficulties or who enlarge text. It acts as a visual guide. Highlighting the cell (and row/column) on mouseover and keyboard focus to support people to see where they are. Make sure that the contrast ratio between the text and background is good for both headers and data cells. [Here is how to check the contrast ratio.](https://www.w3.org/WAI/eval/preliminary#contrast)

-   **Flexibility:** Due to the layout model of tables, they sometimes don’t fit on small screens small or are too wide if the user is zooming in. In such circumstances, it’s important that the table isn’t cut off (for example by using `overflow: hidden` in CSS). In these tutorials `overflow: scroll` is applied to an element wrapping the table so users can scroll through the table horizontally but there are much more options to display table in such circumstances.

-   **Tables for Layout:** Tables should not be used for layout purposes. Use Cascading Style Sheets (CSS) for layout. If there are already layout tables present, don’t use structural elements (like `<th>` or `<caption>`) and attributes discussed in this tutorial, and do add `role="presentation"` to the `<table>` element.

Other W3C Resources
-------------------

-   [Content can be presented in different ways](https://www.w3.org/WAI/intro/people-use-web/principles#adaptable) section of Accessibility Principles in How People with Disabilities Use the Web.

<!-- -->

-   [<span class="count"></span><span class="txt"><span class="dir">Previous:</span><span class="title">Caption & Summary</span></span>](../caption-summary/)

We welcome your ideas
---------------------

Please send any ideas, suggestions, or comments to the [(publicly-archived) mailing list wai-eo-editors@w3.org](mailto:wai-eo-editors@w3.org?subject=%5BTutorial%20Feedback%5D). You can also contribute to the [code directly on Github](https://github.com/w3c/wai-tutorials).

<a href="https://github.com/w3c/wai-tutorials/blob/master/source/tables/tips.html.erb.md" class="btn">Fork &amp; edit this page on Github</a>

Tables Tutorial
---------------

-   [<span class="count"></span><span class="txt">Tables Concepts</span>](../)
-   [<span class="count"></span><span class="txt">One Header</span>](../one-header/)
-   [<span class="count"></span><span class="txt">Two Headers</span>](../two-headers/)
-   [<span class="count"></span><span class="txt">Irregular Headers</span>](../irregular/)
-   [<span class="count"></span><span class="txt">Multi-level Headers</span>](../multi-level/)
-   [<span class="count"></span><span class="txt">Caption & Summary</span>](../caption-summary/)
-   <span class="current-a"><span class="count"></span><span class="txt"><span class="visuallyhidden">Current: </span>Tips and Tricks</span></span>

All Tutorials
-------------

-   [<span class="count"></span><span class="txt">Page Structure</span>](../../page-structure/)
-   [<span class="count"></span><span class="txt">Menus</span>](../../menus/)
-   [<span class="count"></span><span class="txt">Images</span>](../../images/)
-   <span class="current-a"><span class="count"></span><span class="txt"><span class="visuallyhidden">Current: </span>Tables</span></span>
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
