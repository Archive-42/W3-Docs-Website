[<img src="../../img/w3c-bde9a11f.svg" alt="W3C" width="90" />](http://w3.org/) <a href="http://w3.org/WAI/" class="wai"><img src="../../img/wai-590850fc.svg" alt="Web Accessibility Initiative" /></a>

[Web Accessibility Tutorials <span class="subheading">Guidance on how to create websites that meet WCAG</span>](../../)

<a href="#nav" class="btn btn-jump">Jump to the navigation</a>

<span class="home">[<span class="count"></span><span class="txt">Tutorials home</span>](../../)</span> <span class="icon icon-chevron-right"></span><span class="visuallyhidden">»</span> <span class="other"> [<span class="count"></span><span class="txt">Images</span>](../) <span class="icon icon-chevron-right"></span><span class="visuallyhidden">»</span> <span class="current-a"><span class="count"></span><span class="txt"><span class="visuallyhidden">Current: </span>Images of Text</span></span> </span>

Images of Text
==============

Images of text display text that is intended to be read. With the current CSS capabilities in most web browsers, it is good design practice to use actual text that is styled with CSS rather than image-based text presentation. Genuine text is much more flexible than images: It can be resized without losing clarity, and background and text colors can be modified to suit the reading preferences of users. Images are more likely to distort and pixelate when resized. In those rare situations where images of text must be used, the text alternative must contain the same text presented in the image.

Styled text with decorative effect
----------------------------------

This following image is used to convey a slogan text with decorative effects.

![Example:](../../img/bad-top-text-d37f250b.png)

### Using an image

Previously it was not possible to create such text using CSS styling that would be rendered consistently across browsers, which is why images of text were used. The text alternative for this image is the same as the slogan presented in the image: “Your access to the city”. The decorative effects (stylized text and shadow) are not be described because they are not relevant.

Code snippet:

    <img src="access-city.png" alt="Your access to the city.">

### Using CSS3

The visual effects in the above image can be produced using CSS3 and an embedded font. Authors and developers that have to support older browsers may find the image example useful if a less styled fallback text isn’t an option.

#### Browser Support

Displaying these effects requires browsers that support the following web technologies:

-   [CSS Transforms](https://www.w3.org/TR/css3-transforms/)
-   [CSS Fonts](https://www.w3.org/TR/css3-webfonts/)

Example:

Your access to the city

Code snippet: HTML

    <div class="tagline"><span>Your access to the city</span></div>

Code snippet: CSS

    @font-face {
      font-family: 'Harabara Hand';
      src: url('harabarahand.eot#');
      src: url('harabarahand.woff') format('woff'),
           url('harabarahand.ttf') format('truetype');
    }

    .background {
        background-color: #FFF;
        padding: 2em;
    }
    .tagline {
        font-family: 'Harabara Hand', cursive;
        text-transform: lowercase;
        color: #226C8E;
        font-size: 1.5em;
        letter-spacing: -1px;
        padding-left: 1em;
        background-color: #DDD9D6;
        box-shadow: 0 2px  4px rgba(0,0,0,.5);
    }
    .tagline span {
        display: inline-block;
        transform: rotate(-10deg);
    }

**Note:** The code snippet doesn’t show any [vendor prefixes](https://www.w3.org/TR/css-2010/#experimental). These can be added to increase compatibility with older versions of web browsers using their experimental implementation of CSS3 features.

Image of text used as an unlinked logo
--------------------------------------

The following image is the logo for the Web Accessibility Initiative. It is not part of a link, so the text alternative is “Web Accessibility Initiative”. There’s no need to mention that it is a logo.

![Example:](../../img/wai-75196dbb.png)

Code snippet:

    <img src="wai.png" alt="Web Accessibility initiative">

**Note 1:** Images used as logos are exempt from some of the accessibility requirements that apply to other images of text. For example, there are no minimum color contrast and text size requirements.

**Note 2:** If this logo were linked then it would become a functional image. See [Functional Images: Image used alone as a linked logo](../functional/#image-used-alone-as-a-linked-logo).

Mathematical expressions
------------------------

Historically, math expressions have often been presented as images because of the difficulty of presenting equations and special math symbols with HTML. However, MathML is emerging as the preferred presentation of accessible math on the Web.

### Using images

The image below displays a recurring decimal number (decimal numbers that never end). The `alt` text for this recurring number is “0.3333 recurring. (In the image, the recurrence is indicated by a line over the ‘3’ in the fourth decimal place.)”

In this particular example, the way that the recurrence is shown is important, so it is also described in the text alternative. As with other images, the author is in the best position to determine what information is intended to be conveyed by the image and construct the text alternative accordingly.

![Example:](../../img/repeat1-90c4c517.png)

Code snippet:

    <img
        src="0dot3333recurring.png"
        alt="0.3333 recurring. (The recurrence is indicated by a line over the ‘3’ in the fourth decimal place)">

### Using MathML

Images of math expressions should only be used in *exceptional circumstances* – for example when the expression is an exception to the regular content of the page or website. The preferred method for displaying math expressions is MathML, which can present mathematical expressions semantically.

If math forms are a substantial part of the content (for example, for online maths courses), [MathML](https://www.w3.org/Math/) should be used instead. MathML represents both presentation and content semantically, making it potentially more accessible to a wider range of users.

#### <span class="subhead">Accessibility Support:</span> MathML, Web Browsers, and Assistive Technologies

Most web browsers need plugins to render MathML correctly – especially for the new MathML 3.0 features used in this example. To see the MathML example below, [this Firefox plugin](https://addons.mozilla.org/en-US/firefox/addon/mathml-mml3ff/) may be needed.

Some libraries that polyfill MathML for web browsers, like [MathJax](http://www.mathjax.org), provide support for accessibility features.

Accessibility support for MathML varies, but continues to improve as web browsers and assistive technology evolve. It is important to evaluate MathML support before deciding which techniques to use.

Find more information about the state of MathML [in Webkit-based](https://trac.webkit.org/wiki/MathML) and [in Mozilla-based browsers](https://developer.mozilla.org/en-US/docs/Mozilla/MathML_Project/Status).

The simple example of the recurring number illustrates the difficulty of describing both the content and presentation in mathematical expressions succinctly and clearly. Specifically, it is cumbersome to describe the position and location of the over-line representing recurrence, though it is important for some classroom settings. For more complex expressions or equations, text alternatives for images are unlikely to provide sufficient detail succinctly. MathML helps provide such semantics within the code rather than as text.

Example:

<span class="math"> 0.3333 </span>

Code snippet:

    <math>
        <mstack stackalign="right">
            <msline length="1"/>
            <mn> 0.3333 </mn>
        </mstack>
    </math>

**Note:** The above code includes semantic information that conveys both content and presentation to assistive technologies.

Related WCAG resources
----------------------

These tutorials provide best-practice guidance on implementing accessibility in different situations. This page combined the following WCAG success criteria and techniques from different conformance levels:

**Techniques:**

-   [C22: Using CSS to control visual presentation of text](https://www.w3.org/WAI/WCAG21/Techniques/css/C22)
-   [G94: Providing short text alternative for non-text content that serves the same purpose and presents the same information as the non-text content](https://www.w3.org/WAI/WCAG21/Techniques/general/G94)

-   [<span class="count"></span><span class="txt"><span class="dir">Previous:</span><span class="title">Functional Images</span></span>](../functional/)
-   [<span class="count"></span><span class="txt"><span class="dir">Next:</span><span class="title">Complex Images</span></span>](../complex/)

We welcome your ideas
---------------------

Please send any ideas, suggestions, or comments to the [(publicly-archived) mailing list wai-eo-editors@w3.org](mailto:wai-eo-editors@w3.org?subject=%5BTutorial%20Feedback%5D). You can also contribute to the [code directly on Github](https://github.com/w3c/wai-tutorials).

<a href="https://github.com/w3c/wai-tutorials/blob/master/source/images/textual.html.erb.md" class="btn">Fork &amp; edit this page on Github</a>

Images Tutorial
---------------

-   [<span class="count"></span><span class="txt">Images Concepts</span>](../)
-   [<span class="count"></span><span class="txt">Informative Images</span>](../informative/)
-   [<span class="count"></span><span class="txt">Decorative Images</span>](../decorative/)
-   [<span class="count"></span><span class="txt">Functional Images</span>](../functional/)
-   <span class="current-a"><span class="count"></span><span class="txt"><span class="visuallyhidden">Current: </span>Images of Text</span></span>
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
    -   David MacDonald
    -   the Web Content Accessibility Guidelines Working Group ([WCAG WG](https://www.w3.org/WAI/GL/))
    -   the Education and Outreach Working Group ([EOWG](https://www.w3.org/WAI/EO/))

-   Developed with support from the [WAI-ACT project](https://www.w3.org/WAI/ACT/), co-funded by the **European Commission IST Programme**.
-   \[[<span class="count"></span><span class="txt">Attributions</span>](../../attributions/)\] \[[<span class="count"></span><span class="txt">Changelog</span>](../../changelog/)\]

\[[WAI Site Map](https://www.w3.org/WAI/sitemap.html)\] \[[Help with WAI Website](https://www.w3.org/WAI/sitehelp.html)\] \[[Search](https://www.w3.org/WAI/search.php)\] \[[Contacting WAI](https://www.w3.org/WAI/contacts)\]

Copyright © 2019 W3C <sup>®</sup> ([MIT](http://www.csail.mit.edu/), [ERCIM](http://www.ercim.eu/), [Keio](http://www.keio.ac.jp/), [Beihang](http://ev.buaa.edu.cn/)) [Usage policies apply](/Consortium/Legal/ipr-notice).

![](//www.w3.org/analytics/piwik/piwik.php?idsite=328)
