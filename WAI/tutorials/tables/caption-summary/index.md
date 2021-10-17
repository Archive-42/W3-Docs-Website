[<img src="../../img/w3c-bde9a11f.svg" alt="W3C" width="90" />](http://w3.org/) <a href="http://w3.org/WAI/" class="wai"><img src="../../img/wai-590850fc.svg" alt="Web Accessibility Initiative" /></a>

[Web Accessibility Tutorials <span class="subheading">Guidance on how to create websites that meet WCAG</span>](../../)

<a href="#nav" class="btn btn-jump">Jump to the navigation</a>

<span class="home">[<span class="count"></span><span class="txt">Tutorials home</span>](../../)</span> <span class="icon icon-chevron-right"></span><span class="visuallyhidden">»</span> <span class="other"> [<span class="count"></span><span class="txt">Tables</span>](../) <span class="icon icon-chevron-right"></span><span class="visuallyhidden">»</span> <span class="current-a"><span class="count"></span><span class="txt"><span class="visuallyhidden">Current: </span>Caption & Summary</span></span> </span>

Caption & Summary
=================

<img src="../../img/img-caption-234c7b48.png" class="symbol" /> Captions and summaries provide information that can help users find, navigate, and understand tables. While they are not required in every case to meet WCAG, captions and summaries are fairly straightforward ways to provide such information that is often needed.

-   A **caption** functions like a heading for a table. Most screen readers announce the content of captions. Captions help users to find a table and understand what it’s about and decide if they want to read it. If the user uses “Tables Mode”, captions are the primary mechanism to identify tables. The caption is provided by the `<caption>` element.

-   A **summary** conveys information about the organization of the data in a table and helps users navigate it. For example, if a table has an unusual structure (as in the examples below), information about what content can be found in which row or column can be provided to the user. A summary is usually only needed for complex tables.

If both caption and summary are provided for one table, the summary should not duplicate information present in the caption.

See WCAG technique [H39: Using caption elements to associate data table captions with data tables](https://www.w3.org/WAI/WCAG21/Techniques/html/H39) for more advice on captions.

Identifying a table using a caption
-----------------------------------

The caption should be a short heading for the table content. In this example “Concerts” tells users what information is in the table (as the table could, for example, also contain art exhibition information).

The `<caption>` element is placed directly as a child of the `<table>` element.

Example:

<table><caption>Concerts</caption><thead><tr class="header"><th>Date</th><th>Event</th><th>Venue</th></tr></thead><tbody><tr class="odd"><td>12 Feb</td><td>Waltz with Strauss</td><td>Main Hall</td></tr><tr class="even"><td>24 Mar</td><td>The Obelisks</td><td>West Wing</td></tr><tr class="odd"><td>14 Apr</td><td>The What</td><td>Main Hall</td></tr></tbody></table>

Code snippet:

    <table>
      <caption>Concerts</caption>
      <tr>
        <th>Date</th>
        <th>Event</th>
        <th>Venue</th>
      </tr>
      <tr>
        <td>12 Feb</td>
        <td>Waltz with Strauss</td>
        <td>Main Hall</td>
      </tr>
      […]
    </table>

Summaries for more complex tables
---------------------------------

In the examples below, different techniques are used to provide summaries to users.

### Nesting summary inside the `<caption>` element

This complex table shows availability of different types and sizes of accommodation in two separate locations. The `<caption>` element acts as a heading of the table and provides the summary that describes the composition of the table as well.

If implemented this way, the summary is available to visual users as well.

Example:

Availability of holiday accommodation  
<span style="font-size: .75em; display:block;"> Column one has the location and size of accommodation, other columns show the type and number of properties available </span>

Studio

Apt

Chalet

Villa

Paris

1 bedroom

11

20

25

23

2 bedroom

\-

43

52

32

3 bedroom

\-

13

15

40

Rome

1 bedroom

13

21

22

3

2 bedroom

\-

23

43

30

3 bedroom

\-

16

32

40

Code snippet:

    <caption>Availability of holiday accommodation <br>
      <span>Column one has the location and size of accommodation, other columns show the type and number of properties available</span>
    </caption>

**Note:** A `span` element was added to style the summary differently from the caption. This is not required.

### Using `aria-describedby` to provide a table summary

In this approach, an element with an `id` attribute is associated with a summary by using the `aria-describedby` attribute of the table. Any element with a unique `id` attribute can be used as a summary for a table in this way.

The element containing the summary doesn’t need to be in front of the table in the document, but it helps users to discover the summary more quickly if the summary is near the table, especially if they are not using a screen reader.

**Note:** This WAI-ARIA feature may not be as widely supported by assistive technology than other approaches for summaries on this page.

Example:

Column one has the location and size of accommodation, other columns show the type and number of properties available.

<table><caption> Paris: Availability of holiday accommodation<br />
</caption><thead><tr class="header"><th></th><th>Studio</th><th>Apt</th><th>Chalet</th><th>Villa</th></tr></thead><tbody><tr class="odd"><td>1 bedroom</td><td>11</td><td>20</td><td>25</td><td>23</td></tr><tr class="even"><td>2 bedroom</td><td>-</td><td>43</td><td>52</td><td>32</td></tr><tr class="odd"><td>3 bedroom</td><td>-</td><td>13</td><td>15</td><td>40</td></tr></tbody></table>

Code snippet:

    <p id="tblDesc">Column one has the location and size of accommodation, other columns show the type and number of properties available.</p>
    <table aria-describedby="tblDesc">
    […]

### Using the `<figure>` element to mark up a table summary

In this approach, the table is wrapped in a `<figure>` element. The `<figcaption>` element contains the caption and summary text.

Screen reader users navigating in “Tables Mode” are usually unable to identify a table by a caption applied like this. The caption part of the `<figcaption>` element can be explicitly associated to the table by using the `aria-labelledby` attribute and the summary part by using the `aria-describedby` attributes. Note that this could lead to the caption and summary being read out multiple times.

**Note:** This HTML5 feature may not be as widely supported by assistive technology than other approaches for summaries on this page.

Example:

**Paris: Availability of holiday accommodation**  
Column one has the location and size of accommodation, other columns show the type and number of properties available.

<table><thead><tr class="header"><th></th><th>Studio</th><th>Apt</th><th>Chalet</th><th>Villa</th></tr></thead><tbody><tr class="odd"><td>1 bedroom</td><td>11</td><td>20</td><td>25</td><td>23</td></tr><tr class="even"><td>2 bedroom</td><td>-</td><td>43</td><td>52</td><td>32</td></tr><tr class="odd"><td>3 bedroom</td><td>-</td><td>13</td><td>15</td><td>40</td></tr></tbody></table>

Code snippet: Not using WAI-ARIA

    <figure>
      <figcaption>
        <strong>Paris: Availability of holiday accommodation</strong><br>
        <span>Column one has the location and size of accommodation, other columns show the type and number of properties available.</span>
      </figcaption>
      <table>
    […]
      </table>
    </figure>

Code snippet: Using WAI-ARIA

    <figure>
      <figcaption>
        <strong id="paris-caption">Paris: Availability of holiday accommodation</strong><br>
        <span id="paris-summary">Column one has the location and size of accommodation, other columns show the type and number of properties available.</span>
      </figcaption>
      <table aria-labelledby="paris-caption" aria-describedby="paris-summary">
    […]
      </table>
    </figure>

### Using the `summary` attribute

**Note: The `summary` attribute is deprecated in HTML5.**

In this approach, the summary text is in the `summary` attribute of the table. Such summaries are not displayed visually. They are commonly only available to screen reader users.

See WCAG technique [H73: Using the summary attribute of the table element to give an overview of data tables](https://www.w3.org/WAI/WCAG21/Techniques/html/H73) for advice on the summary attribute.

Example:

<table><caption>Paris: Availability of holiday accommodation</caption><thead><tr class="header"><th></th><th>Studio</th><th>Apt</th><th>Chalet</th><th>Villa</th></tr></thead><tbody><tr class="odd"><td>1 bedroom</td><td>11</td><td>20</td><td>25</td><td>23</td></tr><tr class="even"><td>2 bedroom</td><td>-</td><td>43</td><td>52</td><td>32</td></tr><tr class="odd"><td>3 bedroom</td><td>-</td><td>13</td><td>15</td><td>40</td></tr></tbody></table>

Code snippet:

    <table
      summary="Column one has the location and size of accommodation, other columns show the type and number of properties available.">

Related WCAG resources
----------------------

These tutorials provide best-practice guidance on implementing accessibility in different situations. This page combined the following WCAG success criteria and techniques from different conformance levels:

**Techniques:**

-   [H39: Using caption elements to associate data table captions with data tables](https://www.w3.org/WAI/WCAG21/Techniques/html/H39)
-   [H73: Using the summary attribute of the table element](https://www.w3.org/WAI/WCAG21/Techniques/html/H73)

-   [<span class="count"></span><span class="txt"><span class="dir">Previous:</span><span class="title">Multi-level Headers</span></span>](../multi-level/)
-   [<span class="count"></span><span class="txt"><span class="dir">Next:</span><span class="title">Tips and Tricks</span></span>](../tips/)

We welcome your ideas
---------------------

Please send any ideas, suggestions, or comments to the [(publicly-archived) mailing list wai-eo-editors@w3.org](mailto:wai-eo-editors@w3.org?subject=%5BTutorial%20Feedback%5D). You can also contribute to the [code directly on Github](https://github.com/w3c/wai-tutorials).

<a href="https://github.com/w3c/wai-tutorials/blob/master/source/tables/caption-summary.html.erb.md" class="btn">Fork &amp; edit this page on Github</a>

Tables Tutorial
---------------

-   [<span class="count"></span><span class="txt">Tables Concepts</span>](../)
-   [<span class="count"></span><span class="txt">One Header</span>](../one-header/)
-   [<span class="count"></span><span class="txt">Two Headers</span>](../two-headers/)
-   [<span class="count"></span><span class="txt">Irregular Headers</span>](../irregular/)
-   [<span class="count"></span><span class="txt">Multi-level Headers</span>](../multi-level/)
-   <span class="current-a"><span class="count"></span><span class="txt"><span class="visuallyhidden">Current: </span>Caption & Summary</span></span>
-   [<span class="count"></span><span class="txt">Tips and Tricks</span>](../tips/)

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
    -   Sharron Rush
    -   the Web Content Accessibility Guidelines Working Group ([WCAG WG](https://www.w3.org/WAI/GL/))
    -   the Education and Outreach Working Group ([EOWG](https://www.w3.org/WAI/EO/))

-   Developed with support from the [WAI-ACT project](https://www.w3.org/WAI/ACT/), co-funded by the **European Commission IST Programme**.
-   \[[<span class="count"></span><span class="txt">Attributions</span>](../../attributions/)\] \[[<span class="count"></span><span class="txt">Changelog</span>](../../changelog/)\]

\[[WAI Site Map](https://www.w3.org/WAI/sitemap.html)\] \[[Help with WAI Website](https://www.w3.org/WAI/sitehelp.html)\] \[[Search](https://www.w3.org/WAI/search.php)\] \[[Contacting WAI](https://www.w3.org/WAI/contacts)\]

Copyright © 2019 W3C <sup>®</sup> ([MIT](http://www.csail.mit.edu/), [ERCIM](http://www.ercim.eu/), [Keio](http://www.keio.ac.jp/), [Beihang](http://ev.buaa.edu.cn/)) [Usage policies apply](/Consortium/Legal/ipr-notice).

![](//www.w3.org/analytics/piwik/piwik.php?idsite=328)
