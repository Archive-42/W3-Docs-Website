[<img src="../../img/w3c-bde9a11f.svg" alt="W3C" width="90" />](http://w3.org/) <a href="http://w3.org/WAI/" class="wai"><img src="../../img/wai-590850fc.svg" alt="Web Accessibility Initiative" /></a>

[Web Accessibility Tutorials <span class="subheading">Guidance on how to create websites that meet WCAG</span>](../../)

<a href="#nav" class="btn btn-jump">Jump to the navigation</a>

<span class="home">[<span class="count"></span><span class="txt">Tutorials home</span>](../../)</span> <span class="icon icon-chevron-right"></span><span class="visuallyhidden">»</span> <span class="other"> [<span class="count"></span><span class="txt">Images</span>](../) <span class="icon icon-chevron-right"></span><span class="visuallyhidden">»</span> <span class="current-a"><span class="count"></span><span class="txt"><span class="visuallyhidden">Current: </span>Functional Images</span></span> </span>

Functional Images
=================

Functional images are used to initiate actions rather than to convey information. They are used in buttons, links, and other interactive elements. The text alternative for the image should convey the action that will be initiated (the purpose of the image), rather than a description of the image. For instance, as shown in examples below, the text alternative should be “print this page” rather than “(image of a) printer”, “search” rather than “magnifying lens” or “Example.com homepage” rather than “Example.com logo”.

Missing or empty `alt` values create significant problems for screen reader users because functional images are essential to the functionality of the content. Screen readers will typically announce the image file name, the image URL, or the URL for the link destination, which is unlikely to help users understand the action that will be initiated by the image.

Image used alone as a linked logo
---------------------------------

The following image is the only content of a link that leads to the W3C home page. It has the text alternative “W3C home” to indicate where the link will take the user. The next example, [“Logo image within link text” example](#logo-image-within-link-text), discusses what to do when there is more text in the link to identify the destination:

![Example:](../../img/w3c-796023c4.png)

Code snippet:

    <a href="https://www.w3.org/">
      <img src="w3c.png" alt="W3C home">
    </a>

**Note 1:** In this situation, the logo is also an image of the text “W3C”, but in this case, its primary function is to link to the homepage, so the word “home” was added to the text alternative.

**Note 2:** Images used as logos are exempt from some of the accessibility requirements that apply to other images of text, for instance, there are no minimum color contrast and text size requirements.

Logo image within link text
---------------------------

In this example, the W3C logo is used to supplement text within a link that leads to the W3C home page. The image does not represent different functionality or convey other information than that already provided in the link text, so a null (empty) value is applied, (`alt=""`), to avoid redundancy and repetition. In effect the image is a decorative adjunct or visual cue to the link text:

![Example:](../../img/w3c-796023c4.png)

Code snippet:

    <a href="https://www.w3.org/">
      <img src="w3c.png" alt=""> W3C Home
    </a>

Icon image conveying information within link text
-------------------------------------------------

In this example, the image follows text within a link to inform users that the link will open in a new window. It has the text alternative “new window” to convey the meaning of the icon:

![Example:](../../img/new-window-7c52b4e6.png)

Code snippet:

    <a href="https://www.w3.org/" target="_blank">
      W3C Homepage <img src="new-window.png" alt="new window">
    </a>

**Note:** This technique is often used with icons to indicate different file formats such as AVI, ODF, MP3, PDF, Word, and many more. In this case, the text alternative should equally convey the format represented by each icon, see [Informative Images](../informative/#images-conveying-file-format).

Stand-alone icon image that has a function
------------------------------------------

The following image is an icon representing a printer to denote print functionality. It has the text alternative “Print this page” because its purpose is to activate the print dialog when it is selected:

![Example:](../../img/print-f32e9bb4.png)

Code snippet:

    <a href="javascript:print()">
      <img src="print.png" alt="Print this page">
    </a>

Image used in a button
----------------------

The following image is used to give the button a distinct style. In this case, it is the button to initiate a search request and is an icon representing a magnifying lens. The text alternative for the image is “search” to convey the purpose of the button:

Example:

Search:

Code snippet:

    <input type="image" src="searchbutton.png" alt="Search">

Related WCAG resources
----------------------

These tutorials provide best-practice guidance on implementing accessibility in different situations. This page combined the following WCAG success criteria and techniques from different conformance levels:

**Techniques:**

-   [H36: Using alt attributes on images used as submit buttons](https://www.w3.org/WAI/WCAG21/Techniques/html/H36)
-   [H37: Using alt attributes on img elements](https://www.w3.org/WAI/WCAG21/Techniques/html/H37)

-   [<span class="count"></span><span class="txt"><span class="dir">Previous:</span><span class="title">Decorative Images</span></span>](../decorative/)
-   [<span class="count"></span><span class="txt"><span class="dir">Next:</span><span class="title">Images of Text</span></span>](../textual/)

We welcome your ideas
---------------------

Please send any ideas, suggestions, or comments to the [(publicly-archived) mailing list wai-eo-editors@w3.org](mailto:wai-eo-editors@w3.org?subject=%5BTutorial%20Feedback%5D). You can also contribute to the [code directly on Github](https://github.com/w3c/wai-tutorials).

<a href="https://github.com/w3c/wai-tutorials/blob/master/source/images/functional.html.erb.md" class="btn">Fork &amp; edit this page on Github</a>

Images Tutorial
---------------

-   [<span class="count"></span><span class="txt">Images Concepts</span>](../)
-   [<span class="count"></span><span class="txt">Informative Images</span>](../informative/)
-   [<span class="count"></span><span class="txt">Decorative Images</span>](../decorative/)
-   <span class="current-a"><span class="count"></span><span class="txt"><span class="visuallyhidden">Current: </span>Functional Images</span></span>
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
