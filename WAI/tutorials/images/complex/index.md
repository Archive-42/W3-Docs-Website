[<img src="../../img/w3c-bde9a11f.svg" alt="W3C" width="90" />](http://w3.org/) <a href="http://w3.org/WAI/" class="wai"><img src="../../img/wai-590850fc.svg" alt="Web Accessibility Initiative" /></a>

[Web Accessibility Tutorials <span class="subheading">Guidance on how to create websites that meet WCAG</span>](../../)

<a href="#nav" class="btn btn-jump">Jump to the navigation</a>

<span class="home">[<span class="count"></span><span class="txt">Tutorials home</span>](../../)</span> <span class="icon icon-chevron-right"></span><span class="visuallyhidden">»</span> <span class="other"> [<span class="count"></span><span class="txt">Images</span>](../) <span class="icon icon-chevron-right"></span><span class="visuallyhidden">»</span> <span class="current-a"><span class="count"></span><span class="txt"><span class="visuallyhidden">Current: </span>Complex Images</span></span> </span>

Complex Images
==============

Complex images contain substantial information – more than can be conveyed in a short phrase or sentence. These are typically:

-   graphs and charts, including flow charts and organizational charts;
-   diagrams and illustrations where the page text relies on the user being able to understand the image;
-   maps showing locations or other information such as weather systems.

In these cases, a two-part text alternative is required. The first part is the short description to identify the image and, where appropriate, indicate the location of the long description. The second part is the long description – a textual representation of the essential information conveyed by the image. The following examples show different approaches that can be used to provide such short and long descriptions.

Long descriptions
-----------------

There are situations where the composition of an image is important and needs to be provided in the long description. For example, the sequence of colors used and the relative heights of the columns in a bar chart may be relevant information about the structure of the chart, in addition to the actual values and trends that it depicts.

Remember that complex images can be difficult to understand by many people – in particular people with learning disabilities and people with low vision. Long descriptions benefit many people, and it is good practice to make them available to everyone, for example, as part of the main content. It may also be possible to reduce unnecessary complexity in your images and make them easier to understand for everyone.

It is also good practice to refer to and summarize more complex images from the accompanying text. For example, a reference such as “The following graph shows that visitors were lost in the first quarter, but the numbers recovered in the second quarter” helps to point out the relevant information that the image is intended to present.

Description containing structured information
---------------------------------------------

In this example, a bar chart of website visitor statistics has the short description “Bar chart showing monthly and total visitors for the first quarter 2014 for sites 1 to 3”, provided through the `alt` attribute of the image. The long description provides detailed information, including scales, values, relationships and trends that are represented visually. For example, the long description can point out the declining values for site 1, consistent values for site 2, and increasing values for site 3 that are encoded in the bar chart. The [longdesc approach](#providing-a-link-to-the-long-description-via-longdesc) used in the following example is described later in the section.

![Example:](../../img/chart-ebcaadfb.png)

**Note:** See [example long description](../examples/2014-first-qtr/) associated with this image.

Among the approaches below, the first and fourth one make the information available to other programs, such as web browsers and search engines.

### A text link to the long description adjacent to the image

This approach provides a text link next to the image that refers to a separate web page or a section of the same web page that contains the long description. The link text needs to clarify the destination, and associate it with the image.

Code snippet:

    <p>
        <img
            src="chart.png"
            alt="Bar chart showing monthly and total visitors for the first quarter 2014 for sites 1 to 3">
        <br>
        <a href="2014-first-qtr.html">Example.com Site visitors Jan to March 2014 text description of the bar chart</a>
    </p>

This approach is supported by all web browsers and assistive technologies and makes the long descriptions available to everyone. However, the link is not associated with the image in a semantic way.

The HTML5 `<figure>` and `<figcaption>` elements can be used to group image and link semantically. Adding `role="group"` to the figure maintains backward compatibility with web browsers that don’t support the native semantics of the `<figure>` element.

Code snippet:

    <figure role="group">
        <img
            src="chart.png"
            alt="Bar chart showing monthly and total visitors for the first quarter 2014 for sites 1 to 3">
        <figcaption>
            <a href="2014-first-qtr.html">Example.com Site visitors Jan to March 2014 text description of the bar chart</a>
        </figcaption>
    </figure>

### Describing the location of the long description in the `alt` attribute

When a long description is provided on the same web page as an image, its location can be described using the `alt` attribute of the image. The location information needs to be clear and accurate to help users locate the content.

Code snippet:

    <p>
        <img
            src="chart.png"
            alt="Bar chart showing monthly and total visitors for the first quarter 2014 for sites 1 to 3. Described under the heading Site visitors full text.">
    </p>
    […]
    <h4>Site visitors full text</h4>
    […]

### Structurally associating the image and its adjacent long description (HTML5)

The HTML5 `<figure>` element can be used to enclose both the image and its long description. The long description (presented as headings, text, and a table) is wrapped in the `<figcaption>` element. It is explicitly associated with the image using `role="group"` on the containing `<figure>` element in web browsers that don’t convey the semantics of the `<figure>` element.

Code snippet:

    <figure role="group">
        <img src="chart.png"
            alt="Bar chart showing monthly and total visitors for the first quarter 2014 for sites 1 to 3, described in detail below.">
        <figcaption>
            <h2>Overview</h2>
            <p>The chart shows the website hits for the first quarter of 2014 …</p>
            <h2>Values</h2>
            <table>
                <caption>Example.com Site visitors Jan to March 2014</caption>
                <tr>…</tr>
            </table>
        </figcaption>
    </figure>

### Providing a link to the long description via `longdesc`

#### <span class="subhead">Accessibility Support:</span> `Longdesc`, Web Browsers, and Assistive Technologies

In Firefox, long descriptions linked by `longdesc` are available through “View description” in the image’s context menu. There is an [official Chrome Extension](https://chrome.google.com/webstore/detail/long-descriptions-in-cont/ohbmencljkleiedahijfkagnmmhbilgp) that adds long description access in a similar way. Safari has no support for `longdesc`. In other web browsers, `longdesc` is currently available only to screen reader users. Mobile platforms currently do not support `longdesc`.

No browser indicates the presence of the `longdesc` attribute visually, other than through the image context menus as noted above.

The `longdesc` attribute can contain the URI of a separate web page that provides the long description for an image or a fragment identifier that refers to an element on the same page that provides the long description.

When the `longdesc` attribute contains a URI to refer to another web page with the long description, it is recommended to also apply [Approach 3 (a text link to the long description adjacent to the image)](#a-text-link-to-the-long-description-adjacent-to-the-image). This method is a workaround for web browsers and assistive technologies that don’t fully support the `longdesc` attribute.

Code snippet:

    <img
        src="chart.png"
        alt="Bar chart showing monthly and total visitors for the first quarter 2014 for sites 1 to 3"
        longdesc="2014-first-qtr.html">
    <a href="2014-first-qtr.html">Long Description</a>

When the `longdesc` attribute contains a fragment identifier (`#` followed by the `id` of an element on the same web page - a “hash link”), it refers to an element on the same web page that provides the long description. It addresses a similar use case as [Example 2, Approach 1](#structurally-associating-image-and-long-description-with-aria-describedby), though the support by web browsers and assistive technologies may vary. An additional link (by applying [Approach 2](#a-text-link-to-the-long-description-adjacent-to-the-image)) is not needed when the long description is in close proximity to the image.

Code snippet:

    <img
        src="chart.png"
        alt="Bar chart showing monthly and total visitors for the first quarter 2014 for sites 1 to 3"
        longdesc="#chart-longdesc">
    […]
    <div id="chart-longdesc">
        […]
    </div>

Description containing textual information
------------------------------------------

The WAI-ARIA `aria-describedby` attribute can be used to link to a description of the image that is provided anywhere on the same web page, in a similar way to the [longdesc approach](#providing-a-link-to-the-long-description-via-longdesc). The value of the attribute is the `id` of the element that provides the long description.

Important: The element referenced by `aria-describedby` is treated as one continuous paragraph of text. Screen readers and other assistive technology do not have access to structural information, such as any headings and tables. They will read out or provide the text of any contained elements without indicating their structural relationships, and without the corresponding navigation mechanisms. As a result, this approach only works for long descriptions that are text-only, without needing structural information as was needed in the previous example.

In this example, the head of the peacock is described using a paragraph of text that is on the web page.

![Example:](../../img/peafowl-998cf337.jpg)

Code snippet:

    <img src="peacock.jpg"
         alt="Male peacock head"
         aria-describedby="description">
    […]
    <p id="description">
      The male is metallic blue on the crown, the feathers of the head being short and curled. The fan-shaped crest on the head is made of feathers with bare black shafts and tipped with blush-green webbing. A white stripe above the eye and a crescent shaped white patch below the eye are formed by bare white skin. The sides of the head have iridescent greenish blue feathers. The back has scaly bronze-green feathers with black and copper markings.
    </p>

Related WCAG resources
----------------------

These tutorials provide best-practice guidance on implementing accessibility in different situations. This page combined the following WCAG success criteria and techniques from different conformance levels:

**Techniques:**

-   [G73: Providing a long description in another location with a link to it that is immediately adjacent to the non-text content](https://www.w3.org/WAI/WCAG21/Techniques/general/G73)
-   [G74: Providing a long description in text near the non-text content, with a reference to the location of the long description in the short description](https://www.w3.org/WAI/WCAG21/Techniques/general/G74)
-   [G92: Providing long description for non-text content that serves the same purpose and presents the same information](https://www.w3.org/WAI/WCAG21/Techniques/general/G92)
-   [G95: Providing short text alternatives that provide a brief description of the non-text content](https://www.w3.org/WAI/WCAG21/Techniques/general/G95)
-   [H45: Using longdesc](https://www.w3.org/WAI/WCAG21/Techniques/html/H45)

-   [<span class="count"></span><span class="txt"><span class="dir">Previous:</span><span class="title">Images of Text</span></span>](../textual/)
-   [<span class="count"></span><span class="txt"><span class="dir">Next:</span><span class="title">Groups of Images</span></span>](../groups/)

We welcome your ideas
---------------------

Please send any ideas, suggestions, or comments to the [(publicly-archived) mailing list wai-eo-editors@w3.org](mailto:wai-eo-editors@w3.org?subject=%5BTutorial%20Feedback%5D). You can also contribute to the [code directly on Github](https://github.com/w3c/wai-tutorials).

<a href="https://github.com/w3c/wai-tutorials/blob/master/source/images/complex.html.erb.md" class="btn">Fork &amp; edit this page on Github</a>

Images Tutorial
---------------

-   [<span class="count"></span><span class="txt">Images Concepts</span>](../)
-   [<span class="count"></span><span class="txt">Informative Images</span>](../informative/)
-   [<span class="count"></span><span class="txt">Decorative Images</span>](../decorative/)
-   [<span class="count"></span><span class="txt">Functional Images</span>](../functional/)
-   [<span class="count"></span><span class="txt">Images of Text</span>](../textual/)
-   <span class="current-a"><span class="count"></span><span class="txt"><span class="visuallyhidden">Current: </span>Complex Images</span></span>
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
    -   Wayne Dick
    -   the Web Content Accessibility Guidelines Working Group ([WCAG WG](https://www.w3.org/WAI/GL/))
    -   the Education and Outreach Working Group ([EOWG](https://www.w3.org/WAI/EO/))

-   Developed with support from the [WAI-ACT project](https://www.w3.org/WAI/ACT/), co-funded by the **European Commission IST Programme**.
-   \[[<span class="count"></span><span class="txt">Attributions</span>](../../attributions/)\] \[[<span class="count"></span><span class="txt">Changelog</span>](../../changelog/)\]

\[[WAI Site Map](https://www.w3.org/WAI/sitemap.html)\] \[[Help with WAI Website](https://www.w3.org/WAI/sitehelp.html)\] \[[Search](https://www.w3.org/WAI/search.php)\] \[[Contacting WAI](https://www.w3.org/WAI/contacts)\]

Copyright © 2019 W3C <sup>®</sup> ([MIT](http://www.csail.mit.edu/), [ERCIM](http://www.ercim.eu/), [Keio](http://www.keio.ac.jp/), [Beihang](http://ev.buaa.edu.cn/)) [Usage policies apply](/Consortium/Legal/ipr-notice).

![](//www.w3.org/analytics/piwik/piwik.php?idsite=328)
