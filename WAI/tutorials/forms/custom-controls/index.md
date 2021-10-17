[<img src="../../img/w3c-bde9a11f.svg" alt="W3C" width="90" />](http://w3.org/) <a href="http://w3.org/WAI/" class="wai"><img src="../../img/wai-590850fc.svg" alt="Web Accessibility Initiative" /></a>

[Web Accessibility Tutorials <span class="subheading">Guidance on how to create websites that meet WCAG</span>](../../)

<a href="#nav" class="btn btn-jump">Jump to the navigation</a>

<span class="home">[<span class="count"></span><span class="txt">Tutorials home</span>](../../)</span> <span class="icon icon-chevron-right"></span><span class="visuallyhidden">»</span> <span class="other"> [<span class="count"></span><span class="txt">Forms</span>](../) <span class="icon icon-chevron-right"></span><span class="visuallyhidden">»</span> <span class="current-a"><span class="count"></span><span class="txt"><span class="visuallyhidden">Current: </span>Custom Controls</span></span> </span>

Custom Controls
===============

Sometimes form designs require something beyond what is achievable with standard form controls. In such cases, it is possible to build additional functionality and styling to standard controls. To ensure robustness, try to reuse HTML elements that do a subset of the functionality that the final control is intended to cover, and build from there. The following examples provide some general guidance on what to consider to ensure the additions are made accessible.

For components where there is no adequate HTML element to build on, WAI-ARIA attributes can be useful to convey the functionality for people using assistive technologies.

A Share Button
--------------

The example below shows a social media "share button" that has two functions: it shows how many people have already activated the button ("shared"), and allows users to press the button to activate the share function.

The custom button relies on CSS to style a regular `<button>` element so that the basic functionality remains intact when it is rendered without CSS. For example, most screen readers will announce the button and its contents.

Also, the `action` attribute of the `<form>` element references a server-side script that carries out the same functionality for cases when JavaScript is not supported.

Example:

<span class="count">3</span> <span class="text">Shares</span>

Code snippet: HTML

    <form action="path/to/submit">
        <button type="submit" id="share-btn" class="btn-primary">
            <span class="count">3</span>
            <span class="text">Shares</span>
        </button>
    </form>

Code snippet: JavaScript

    document.getElementById('share-btn').addEventListener('click', function(event){
        event.preventDefault();
        event.stopImmediatePropagation();

        var count = this.querySelector('.count');
        var text = this.querySelector('.text');

        count.textContent = parseInt(count.textContent) + 1;
        text.textContent = "Shared ✓";

        this.setAttribute("disabled", "true");
    });

A Star Rating
-------------

A star rating usually consists of images of five stars that can be used to rate a particular item. A mouse user hovers over the stars and clicks one to select it. For example, if the user clicks on the third star from the left, the rating of the item is 3 of 5 stars.

To make this as accessible as possible, a form is used with its fields visually hidden. It contains six radio buttons, one for each star and another for 0 stars, which is checked by default. The labels for the radio buttons contain actual text (“1 Star”, “2 Stars”, …), and are also hidden visually. The form also contains a visually hidden submit button so that the form is not automatically submitted when keyboard users browse through the radio buttons.

The images of the stars are generated using SVG. The coloring animation of these stars is initiated through the CSS `:focus` and `:hover` pseudo-classes so that they can be activated using a mouse, keyboard, and other input methods. The `:checked` pseudo-class and the general sibling selector `~` are used to indicate the selected, active, and inactive stars.

Example:

<span class="visuallyhidden">0 Stars</span>

<span class="visuallyhidden">1 Star</span>

<span class="visuallyhidden">2 Stars</span>

<span class="visuallyhidden">3 Stars</span>

<span class="visuallyhidden">4 Stars</span>

<span class="visuallyhidden">5 Stars</span>

Submit rating

Code snippet: HTML

    <form action="#" id="star_rating">
     <input value="0" id="star0" checked
        type="radio" name="rating" class="visuallyhidden">
        <label for="star0">
            <span class="visuallyhidden">0 Stars</span>
            <svg viewBox="0 0 512 512">
                <g stroke-width="70" stroke-linecap="square">
                    <path d="M91.5,442.5 L409.366489,124.633512"></path>
                    <path d="M90.9861965,124.986197 L409.184248,443.184248"></path>
                </g>
            </svg>
        </label>

        <input value="1" id="star1"
            type="radio" name="rating" class="visuallyhidden">
        <label for="star1">
            <span class="visuallyhidden">1 Star</span>
            <svg viewBox="0 0 512 512"><path d="M512 198.525l-176.89-25.704-79.11-160.291-79.108 160.291-176.892 25.704 128 124.769-30.216 176.176 158.216-83.179 158.216 83.179-30.217-176.176 128.001-124.769z"></path></svg>
        </label>

        <input value="2" id="star2"
            type="radio" name="rating" class="visuallyhidden">
        <label for="star2">
            <span class="visuallyhidden">2 Stars</span>
            <svg viewBox="0 0 512 512">…</svg>
        </label>

        <input value="3" id="star3"
            type="radio" name="rating" class="visuallyhidden">
        <label for="star3">
            <span class="visuallyhidden">3 Stars</span>
            <svg viewBox="0 0 512 512">…</svg>
        </label>

        <input value="4" id="star4"
            type="radio" name="rating" class="visuallyhidden">
        <label for="star4">
            <span class="visuallyhidden">4 Stars</span>
            <svg viewBox="0 0 512 512">…</svg>
        </label>

        <input value="5" id="star5"
            type="radio" name="rating" class="visuallyhidden">
        <label for="star5">
            <span class="visuallyhidden">5 Stars</span>
            <svg viewBox="0 0 512 512">…</svg>
        </label>

        <button type="submit" class="btn-small visuallyhidden focusable">Submit rating</button>

        <output></output>
    </form>

Code snippet: CSS

    #star_rating svg {
        width: 1em;
        height: 1em;
        fill: currentColor;
        stroke: currentColor;
    }
    #star_rating label, #star_rating output {
        display: block;
        float: left;
        font-size: 2em;
        height: 1.2em;
        color: #036;
        cursor: pointer;
        /* Transparent border-bottom avoids jumping
           when a colored border is applied
             on :hover/:focus */
        border-bottom: 2px solid transparent;
    }
    #star_rating output {
        font-size: 1.5em;
        padding: 0 1em;
    }
    #star_rating input:checked ~ label {
        color: #999;
    }
    #star_rating input:checked + label {
        color: #036;
        border-bottom-color: #036;
    }
    #star_rating input:focus + label {
        border-bottom-style: dotted;
    }
    #star_rating:hover input + label {
        color: #036;
    }
    #star_rating input:hover ~ label,
    #star_rating input:focus ~ label,
    #star_rating input[id="star0"] + label {
        color: #999;
    }
    #star_rating input:hover + label,
    #star_rating input:focus + label {
        color: #036;
    }
    #star_rating input[id="star0"]:checked + label {
        color: #ff2d21;
    }
    #star_rating [type="submit"] {
        float: none;
    }

Code snippet: JavaScript

    var radios = document.querySelectorAll('#star_rating input[type=radio]');
    var output = document.querySelector('#star_rating output');

    var do_something = function(stars) {
        // An AJAX request could send the data to the server
        output.textContent = stars;
    };

    // Iterate through all radio buttons and add a click
    // event listener to the labels
    Array.prototype.forEach.call(radios, function(el, i){
        var label = el.nextSibling.nextSibling;
        label.addEventListener("click", function(event){
            do_something(label.querySelector('span').textContent);
        });
    });

    // If the form gets submitted, do_something
    document.querySelector('#star_rating').addEventListener('submit', function(event){
        do_something(document.querySelector('#star_rating :checked ~ label span').textContent);
        event.preventDefault();
        event.stopImmediatePropagation();
    });

-   [<span class="count"></span><span class="txt"><span class="dir">Previous:</span><span class="title">Multi-page Forms</span></span>](../multi-page/)

We welcome your ideas
---------------------

Please send any ideas, suggestions, or comments to the [(publicly-archived) mailing list wai-eo-editors@w3.org](mailto:wai-eo-editors@w3.org?subject=%5BTutorial%20Feedback%5D). You can also contribute to the [code directly on Github](https://github.com/w3c/wai-tutorials).

<a href="https://github.com/w3c/wai-tutorials/blob/master/source/forms/custom-controls.html.erb.md" class="btn">Fork &amp; edit this page on Github</a>

Forms Tutorial
--------------

-   [<span class="count"></span><span class="txt">Forms Concepts</span>](../)
-   [<span class="count"></span><span class="txt">Labeling Controls</span>](../labels/)
-   [<span class="count"></span><span class="txt">Grouping Controls</span>](../grouping/)
-   [<span class="count"></span><span class="txt">Form Instructions</span>](../instructions/)
-   [<span class="count"></span><span class="txt">Validating Input</span>](../validation/)
-   [<span class="count"></span><span class="txt">User Notifications</span>](../notifications/)
-   [<span class="count"></span><span class="txt">Multi-page Forms</span>](../multi-page/)
-   <span class="current-a"><span class="count"></span><span class="txt"><span class="visuallyhidden">Current: </span>Custom Controls</span></span>

All Tutorials
-------------

-   [<span class="count"></span><span class="txt">Page Structure</span>](../../page-structure/)
-   [<span class="count"></span><span class="txt">Menus</span>](../../menus/)
-   [<span class="count"></span><span class="txt">Images</span>](../../images/)
-   [<span class="count"></span><span class="txt">Tables</span>](../../tables/)
-   <span class="current-a"><span class="count"></span><span class="txt"><span class="visuallyhidden">Current: </span>Forms</span></span>
-   [<span class="count"></span><span class="txt">Carousels</span>](../../carousels/)

Document Information
--------------------

**Feedback: We welcome ideas for improvements, bug reports, and comments** via [GitHub](https://github.com/w3c/wai-tutorials) or e-mail to <wai-eo-editors@w3.org> (a publicly archived list) or <wai@w3.org> (a WAI staff-only list).

-   **Status:** Updated 27 July 2019 (first published September 2014)
-   Editors:
    -   [Eric Eggert](https://www.w3.org/People/yatil/)
    -   [Shadi Abou-Zahra](https://www.w3.org/People/shadi/)

    Contributors:
    -   The Web Content Accessibility Guidelines Working Group ([WCAG WG](https://www.w3.org/WAI/GL/))
    -   the Education and Outreach Working Group ([EOWG](https://www.w3.org/WAI/EO/))

-   Developed with support from the [WAI-ACT project](https://www.w3.org/WAI/ACT/), co-funded by the **European Commission IST Programme**.
-   \[[<span class="count"></span><span class="txt">Attributions</span>](../../attributions/)\] \[[<span class="count"></span><span class="txt">Changelog</span>](../../changelog/)\]

\[[WAI Site Map](https://www.w3.org/WAI/sitemap.html)\] \[[Help with WAI Website](https://www.w3.org/WAI/sitehelp.html)\] \[[Search](https://www.w3.org/WAI/search.php)\] \[[Contacting WAI](https://www.w3.org/WAI/contacts)\]

Copyright © 2019 W3C <sup>®</sup> ([MIT](http://www.csail.mit.edu/), [ERCIM](http://www.ercim.eu/), [Keio](http://www.keio.ac.jp/), [Beihang](http://ev.buaa.edu.cn/)) [Usage policies apply](/Consortium/Legal/ipr-notice).

![](//www.w3.org/analytics/piwik/piwik.php?idsite=328)
