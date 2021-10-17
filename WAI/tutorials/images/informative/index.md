[<img src="../../img/w3c-bde9a11f.svg" alt="W3C" width="90" />](http://w3.org/) <a href="http://w3.org/WAI/" class="wai"><img src="../../img/wai-590850fc.svg" alt="Web Accessibility Initiative" /></a>

[Web Accessibility Tutorials <span class="subheading">Guidance on how to create websites that meet WCAG</span>](../../)

<a href="#nav" class="btn btn-jump">Jump to the navigation</a>

<span class="home">[<span class="count"></span><span class="txt">Tutorials home</span>](../../)</span> <span class="icon icon-chevron-right"></span><span class="visuallyhidden">»</span> <span class="other"> [<span class="count"></span><span class="txt">Images</span>](../) <span class="icon icon-chevron-right"></span><span class="visuallyhidden">»</span> <span class="current-a"><span class="count"></span><span class="txt"><span class="visuallyhidden">Current: </span>Informative Images</span></span> </span>

Informative Images
==================

Informative images convey a simple concept or information that can be expressed in a short phrase or sentence. The text alternative should convey the meaning or content that is displayed visually, which typically isn’t a literal description of the image.

In some situations a detailed literal description may be needed, but only when the content of the image is all or part of the conveyed information. Whether to treat an image as informative or [decorative](../decorative/) is a judgment that authors make, based on the reason for including the image on the page.

Images used to label other information
--------------------------------------

This example shows two image icons – one of a telephone, one of a fax machine. A phone number follows each image. Consistent with the visual presentation, the text alternatives “Telephone:” and “Fax:” are used to identify the device associated with each number.

![Example:](../../img/phone-3baeb911.png)

Code snippet:

    <p>
        <img src="phone.png" alt="Telephone:"> 0123 456 7890
    </p>
    <p>
        <img src="fax.png" alt="Fax:"> 0123 456 7891
    </p>

Images used to supplement other information
-------------------------------------------

The following image shows a dog wearing a bell. It supplements the adjacent text that explains the purpose of this bell. A short text alternative is sufficient to describe the information that is displayed visually but is not explained in the text; in this case, the text alternative is “Dog with a bell attached to its collar.”.

![Example:](../../img/dog-83cac519.jpg)

Code snippet:

    <p>
        <img src="dog.jpg" alt="Dog with a bell attached to its collar.">
        Off-duty guide dogs often wear ...
    </p>

**Note:** If the text included an explanation of how the dog wears a bell, the image might be considered redundant and therefore [decorative](../decorative/). As this isn’t mentioned in the text, the image is deemed to be informative.

Images conveying succinct information
-------------------------------------

This simple diagram illustrates a counter-clockwise direction for unscrewing a bottle top or cap. The information can be described in a short sentence, so the text alternative “Push the cap down and turn it counter-clockwise (from right to left)” is given in the `alt` attribute.

![Example:](../../img/counter-clockwise-541e1b2e.jpg)

Code snippet:

    <img src="cap.png" alt="Push the cap down and turn it counter-clockwise (from right to left)">

**Note 1:** An alternative technique would be to provide the instructions within the main content rather than as a text alternative to the image. This technique makes all information available in text for everyone while providing an illustration for people who prefer to view the information visually.

**Note 2:** If more information than that of the diagram is intended to be conveyed by the image, it may be better to follow one of the approaches described in [Complex images](../complex/). For example, if the fact that this diagram appears on a bottle or if the shape and size of the bottle were relevant pieces of information, use a more detailed alternative text.

Images conveying an impression or emotion
-----------------------------------------

This photograph shows a happy family group. It’s a stock image so the individuals should not be identified. It’s being used to give the impression that the website or the company it represents is family-friendly. The text alternative is “We’re family-friendly” as this best describes the intended impression.

![Example:](../../img/family-938c2790.jpg)

Code snippet:

    <img src="family.jpg" alt="We’re family-friendly.">

**Note:** If the purpose of this image were simply to improve the look of a page rather than convey an impression, it could be deemed to be decorative, as shown in [“Decorative Images: Image used for ambiance”](../decorative/#image-used-for-ambiance-eye-candy). The author determines the purpose for using the image.

Images conveying file format
----------------------------

In this example, a document is available to download in three different formats identified by format icons within text links. They have the text alternatives “HTML”, “Word document”, and “PDF” to distinguish the file type for each link:

![Example:](../../img/html5logo-2607529f.png)

Code snippet:

    <p>
        <a href="…">
            2012 Annual report and accounts
            <img src="html5logo.png" alt="HTML"> (43KB)
        </a>, also available in
        <a href="…">
            <img src="worddocument.png" alt="Word document"> (254KB)
        </a>
        or
        <a href="…">
            <img src="pdfdocument.png" alt="PDF"> (353KB)
        </a>
        format.
    </p>

**Note 1:** If the format identification were written as part of the link text, the image might be considered [decorative](../decorative/) and have a null (empty) `alt` attribute (`alt=""`). It could remain in the same link element (`<a>`) as the text, to include it in the clickable area. Further discussion is provided in [“Functional Images: Logo image within link text”](../functional/#logo-image-within-link-text).

**Note 2:** This particular example is similar to the [Functional Images: icon within linked text in](../functional/#icon-image-conveying-information-within-link-text) in that the image conveys information that isn’t given in the link text.

Related WCAG resources
----------------------

These tutorials provide best-practice guidance on implementing accessibility in different situations. This page combined the following WCAG success criteria and techniques from different conformance levels:

**Techniques:**

-   [G94: Providing short text alternative for non-text content that serves the same purpose and presents the same information as the non-text content](https://www.w3.org/WAI/WCAG21/Techniques/general/G94)
-   [H37: Using alt attributes on img elements](https://www.w3.org/WAI/WCAG21/Techniques/html/H37)

-   [<span class="count"></span><span class="txt"><span class="dir">Previous:</span><span class="title">Images Concepts</span></span>](../)
-   [<span class="count"></span><span class="txt"><span class="dir">Next:</span><span class="title">Decorative Images</span></span>](../decorative/)

We welcome your ideas
---------------------

Please send any ideas, suggestions, or comments to the [(publicly-archived) mailing list wai-eo-editors@w3.org](mailto:wai-eo-editors@w3.org?subject=%5BTutorial%20Feedback%5D). You can also contribute to the [code directly on Github](https://github.com/w3c/wai-tutorials).

<a href="https://github.com/w3c/wai-tutorials/blob/master/source/images/informative.html.erb.md" class="btn">Fork &amp; edit this page on Github</a>

Images Tutorial
---------------

-   [<span class="count"></span><span class="txt">Images Concepts</span>](../)
-   <span class="current-a"><span class="count"></span><span class="txt"><span class="visuallyhidden">Current: </span>Informative Images</span></span>
-   [<span class="count"></span><span class="txt">Decorative Images</span>](../decorative/)
-   [<span class="count"></span><span class="txt">Functional Images</span>](../functional/)
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
    -   Liam McGee
    -   the Web Content Accessibility Guidelines Working Group ([WCAG WG](https://www.w3.org/WAI/GL/))
    -   the Education and Outreach Working Group ([EOWG](https://www.w3.org/WAI/EO/))

-   Developed with support from the [WAI-ACT project](https://www.w3.org/WAI/ACT/), co-funded by the **European Commission IST Programme**.
-   \[[<span class="count"></span><span class="txt">Attributions</span>](../../attributions/)\] \[[<span class="count"></span><span class="txt">Changelog</span>](../../changelog/)\]

\[[WAI Site Map](https://www.w3.org/WAI/sitemap.html)\] \[[Help with WAI Website](https://www.w3.org/WAI/sitehelp.html)\] \[[Search](https://www.w3.org/WAI/search.php)\] \[[Contacting WAI](https://www.w3.org/WAI/contacts)\]

Copyright © 2019 W3C <sup>®</sup> ([MIT](http://www.csail.mit.edu/), [ERCIM](http://www.ercim.eu/), [Keio](http://www.keio.ac.jp/), [Beihang](http://ev.buaa.edu.cn/)) [Usage policies apply](/Consortium/Legal/ipr-notice).

![](//www.w3.org/analytics/piwik/piwik.php?idsite=328)
