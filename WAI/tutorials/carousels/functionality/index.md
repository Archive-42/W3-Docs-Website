[<img src="../../img/w3c-bde9a11f.svg" alt="W3C" width="90" />](http://w3.org/) <a href="http://w3.org/WAI/" class="wai"><img src="../../img/wai-590850fc.svg" alt="Web Accessibility Initiative" /></a>

[Web Accessibility Tutorials <span class="subheading">Guidance on how to create websites that meet WCAG</span>](../../)

<a href="#nav" class="btn btn-jump">Jump to the navigation</a>

<span class="home">[<span class="count"></span><span class="txt">Tutorials home</span>](../../)</span> <span class="icon icon-chevron-right"></span><span class="visuallyhidden">»</span> <span class="other"> [<span class="count"></span><span class="txt">Carousels</span>](../) <span class="icon icon-chevron-right"></span><span class="visuallyhidden">»</span> <span class="current-a"><span class="count"></span><span class="txt"><span class="visuallyhidden">Current: </span>Functionality</span></span> </span>

Functionality
=============

Provide functionality to select carousel items and to inform users about the change of carousel items.

Add previous and next buttons
-----------------------------

Provide buttons to allow users to switch back and forth between items. Use `<button>` elements to provide semantic meaning, support for assistive technologies, and consistent keyboard behavior. Create and add the buttons using JavaScript, as they only work when JavaScript is available anyway.

Code snippet: JavaScript

    var ctrls = document.createElement('ul');

    ctrls.className = 'controls';
    ctrls.innerHTML = '<li>' +
        '<button type="button" class="btn-prev">' +
          '<img src="img/chevron-left.png" alt="Previous Item">' +
        '</button>' +
      '</li>' +
      '<li>' +
        '<button type="button" class="btn-next">' +
          '<img src="img/chevron-right.png" alt="Next Item">' +
        '</button>' +
      '</li>';

    ctrls.querySelector('.btn-prev').addEventListener('click', function(){
      prevSlide(true);
    });

    ctrls.querySelector('.btn-next').addEventListener('click', function(){
      nextSlide(true);
    });

    carousel.appendChild(ctrls);

A [working demo example](../working-example/) for this code is available.

### Announce the current item

Use a [WAI-ARIA live region](https://www.w3.org/TR/wai-aria-1.1/#live_region_roles) to inform screen reader users what item is currently shown. In this example, a visually hidden, “polite” live region is used and added to the carousel when the carousel is loaded. Then, when clicking the previous or next buttons, the text “Item x of y” (with x for current item number and y for the number of items) is set to this live region. Capable screen readers will announce this text.

Allow the user to maintain control of the keyboard focus. When the carousel advances automatically, users should not be drawn away from their current place in the page. Also, do not move keyboard focus when the previous or next buttons are used; moving the focus makes it harder for users to browse back and forth between the slides.

Find more information about WAI-ARIA in the [WAI-ARIA Overview](https://www.w3.org/WAI/intro/aria), the [WAI-ARIA Authoring Practices](https://www.w3.org/TR/wai-aria-practices-1.1/) and the [Specification](https://www.w3.org/TR/wai-aria-1.1/).

Code snippet: Add a live region to the carousel

    var liveregion = document.createElement('div');
    liveregion.setAttribute('aria-live', 'polite');
    liveregion.setAttribute('aria-atomic', 'true');
    liveregion.setAttribute('class', 'liveregion visuallyhidden');
    carousel.appendChild(liveregion);

Code snippet: Change text in the liveregion to have that text announced

    if (announceItem) {
      carousel.querySelector('.liveregion').textContent = 'Item ' + (new_current + 1) + ' of ' + slides.length;
    }

Add navigation buttons
----------------------

Display buttons for each item in the carousel and highlight the current item. This allows users to get an overview of the carousel content, where they are in the sequence and will enable them to navigate directly to any item.

The list with buttons in the example below is added using JavaScript, with a number on the button that corresponds to the carousel item. The buttons are numbered matching the corresponding carousel items. The button for the active carousel item is highlighted both visually, and by using text that is visually hidden (for screen readers).

See the [carousel styling](../styling/) page for more information on how to highlight the active carousel item in an accessible way.

Code snippet:

    <ul class="slidenav">
      <li>
        <button class="current" data-slide="0">
          <span class="visuallyhidden">News</span> 1
          <span class="visuallyhidden">(Current Slide)</span>
        </button>
      </li>
      <li>
        <button data-slide="1">
          <span class="visuallyhidden">News</span> 2
        </button>
      </li>
      <li>
        <button data-slide="2">
          <span class="visuallyhidden">News</span> 3
        </button>
      </li>
    </ul>

Example:

-   <span class="visuallyhidden">News</span> 1 <span class="visuallyhidden">(Current Slide)</span>
-   <span class="visuallyhidden">News</span> 2
-   <span class="visuallyhidden">News</span> 3

### Focus the selected carousel item

When users select an item with those navigation buttons, the focus should be set on the selected item. In this case, the focus needs to be set to the `<li>` element that has the class `current` set, after the change or transition. This makes interaction easier for keyboard and assistive technology users.

By default, `<li>` elements cannot receive focus. By setting its `tabindex` attribute to `-1`, the element is enabled to receive focus through JavaScript.

Related WCAG resources
----------------------

These tutorials provide best-practice guidance on implementing accessibility in different situations. This page combined the following WCAG success criteria and techniques from different conformance levels:

**Success Criteria:**

-   [1.3.1 Info and Relationships:](https://www.w3.org/WAI/WCAG21/quickref/#info-and-relationships) Information, structure, and relationships conveyed through presentation can be programmatically determined or are available in text. (Level A)

-   [2.1.1 Keyboard:](https://www.w3.org/WAI/WCAG21/quickref/#keyboard) All functionality of the content is operable through a keyboard interface without requiring specific timings for individual keystrokes, except where the underlying function requires input that depends on the path of the user’s movement and not just the endpoints. (Level A)

-   [4.1.2 Name, Role, Value:](https://www.w3.org/WAI/WCAG21/quickref/#name-role-value) For all user interface components (including but not limited to: form elements, links and components generated by scripts), the name and role can be programmatically determined; states, properties, and values that can be set by the user can be programmatically set; and notification of changes to these items is available to user agents, including assistive technologies. (Level A)

-   [<span class="count"></span><span class="txt"><span class="dir">Previous:</span><span class="title">Structure</span></span>](../structure/)
-   [<span class="count"></span><span class="txt"><span class="dir">Next:</span><span class="title">Animations</span></span>](../animations/)

We welcome your ideas
---------------------

Please send any ideas, suggestions, or comments to the [(publicly-archived) mailing list wai-eo-editors@w3.org](mailto:wai-eo-editors@w3.org?subject=%5BTutorial%20Feedback%5D). You can also contribute to the [code directly on Github](https://github.com/w3c/wai-tutorials).

<a href="https://github.com/w3c/wai-tutorials/blob/master/source/carousels/functionality.html.erb.md" class="btn">Fork &amp; edit this page on Github</a>

Carousels Tutorial
------------------

-   [<span class="count"></span><span class="txt">Carousel Concepts</span>](../)
-   [<span class="count"></span><span class="txt">Structure</span>](../structure/)
-   <span class="current-a"><span class="count"></span><span class="txt"><span class="visuallyhidden">Current: </span>Functionality</span></span>
-   [<span class="count"></span><span class="txt">Animations</span>](../animations/)
-   [<span class="count"></span><span class="txt">Styling</span>](../styling/)
-   [<span class="count"></span><span class="txt">Working Example</span>](../working-example/)
-   [<span class="count"></span><span class="txt">Complete Code</span>](../full-code/)

All Tutorials
-------------

-   [<span class="count"></span><span class="txt">Page Structure</span>](../../page-structure/)
-   [<span class="count"></span><span class="txt">Menus</span>](../../menus/)
-   [<span class="count"></span><span class="txt">Images</span>](../../images/)
-   [<span class="count"></span><span class="txt">Tables</span>](../../tables/)
-   [<span class="count"></span><span class="txt">Forms</span>](../../forms/)
-   <span class="current-a"><span class="count"></span><span class="txt"><span class="visuallyhidden">Current: </span>Carousels</span></span>

Document Information
--------------------

**Feedback: We welcome ideas for improvements, bug reports, and comments** via [GitHub](https://github.com/w3c/wai-tutorials) or e-mail to <wai-eo-editors@w3.org> (a publicly archived list) or <wai@w3.org> (a WAI staff-only list).

-   **Status:** Updated 27 July 2019 (first published May 2015)
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
