[<img src="../../img/w3c-bde9a11f.svg" alt="W3C" width="90" />](http://w3.org/) <a href="http://w3.org/WAI/" class="wai"><img src="../../img/wai-590850fc.svg" alt="Web Accessibility Initiative" /></a>

[Web Accessibility Tutorials <span class="subheading">Guidance on how to create websites that meet WCAG</span>](../../)

<a href="#nav" class="btn btn-jump">Jump to the navigation</a>

<span class="home">[<span class="count"></span><span class="txt">Tutorials home</span>](../../)</span> <span class="icon icon-chevron-right"></span><span class="visuallyhidden">»</span> <span class="other"> [<span class="count"></span><span class="txt">Carousels</span>](../) <span class="icon icon-chevron-right"></span><span class="visuallyhidden">»</span> <span class="current-a"><span class="count"></span><span class="txt"><span class="visuallyhidden">Current: </span>Animations</span></span> </span>

Animations
==========

Provide users with control over animations in the carousel. Pausing animation is essential for people who find movement distracting or who need more time to read.

Add Play/Stop button
--------------------

Provide a button to allow users to stop and resume animation. The example below illustrates how such a button can be marked-up. The button label and its function changes, depending on whether the animation is currently running or not.

Code snippet: While animation is running

    <button data-action="stop"><span class="visuallyhidden">Stop Animation </span>￭</button>

Code snippet: While animation is stopped

    <button data-action="start"><span class="visuallyhidden">Start Animation </span>▶</button>

A [working demo example](../working-example/) for this code is available.

**Note:** The JavaScript only replaces the value of the `<button>` element and its attributes. Replacing the entire button would result in loss of keyboard focus.

Pause on mouse hover and keyboard focus
---------------------------------------

Pause the carousel animation when the mouse pointer is hovering over the carousel or when it receives keyboard focus. Pausing on mouse hover is useful for people who need more time to read the content and makes it easier to click links in the carousel. Keyboard users do not lose their position when the carousel is paused.

Code snippet:

    carousel.addEventListener('mouseenter', suspendAnimation);
    carousel.addEventListener('mouseleave', startAnimation);

    carousel.addEventListener('focusin',
      function(event) {
        if (!hasClass(event.target, 'slide')) {
          suspendAnimation();
        }
      }
    );
    carousel.addEventListener('focusout',
      function(event) {
        if (!hasClass(event.target, 'slide')) {
          startAnimation();
        }
      }
    );

**Note:** The [`focusin`](https://www.w3.org/TR/DOM-Level-3-Events/#event-type-focusIn) and [`focusout`](https://www.w3.org/TR/DOM-Level-3-Events/#event-type-focusout) events are defined in the [W3C Document Object Model (DOM) Level 3 Events Specification](https://www.w3.org/TR/DOM-Level-3-Events/) (Working Draft) and implemented in many browsers. Firefox needs [a short polyfill](../full-code/) at the time of publication of this tutorial.

Hiding transitioning elements from assistive technologies
---------------------------------------------------------

During transitions, the current and next items are visible. This also means that those two items are available to assistive technologies, with the current item disappearing, which can be confusing to screen reader users.

In the following example, the item that is being activated gets an `in-transition` class that makes it visible. The `aria-hidden` is attribute set to `true` to hide the item from assistive technologies. When the transition completes, the `aria-hidden` attribute is removed.

Code snippet: JavaScript

    slides[new_next].className = 'next slide'
      + ((transition == 'next') ? ' in-transition' : '');
    slides[new_next].setAttribute('aria-hidden', 'true');

    slides[new_prev].className = 'prev slide'
      + ((transition == 'prev') ? ' in-transition' : '');
    slides[new_prev].setAttribute('aria-hidden', 'true');

    slides[new_current].className = 'current slide';
    slides[new_current].removeAttribute('aria-hidden');

Related WCAG resources
----------------------

These tutorials provide best-practice guidance on implementing accessibility in different situations. This page combined the following WCAG success criteria and techniques from different conformance levels:

**Success Criteria:**

-   [2.2.2 Pause, Stop, Hide:](https://www.w3.org/WAI/WCAG21/quickref/#pause-stop-hide) For moving, blinking, scrolling, or auto-updating information, all of the following are true:

    -   **Moving, blinking, scrolling:** For any moving, blinking or scrolling information that (1) starts automatically, (2) lasts more than five seconds, and (3) is presented in parallel with other content, there is a mechanism for the user to pause, stop, or hide it unless the movement, blinking, or scrolling is part of an activity where it is essential; and

    -   **Auto-updating:** For any auto-updating information that (1) starts automatically and (2) is presented in parallel with other content, there is a mechanism for the user to pause, stop, or hide it or to control the frequency of the update unless the auto-updating is part of an activity where it is essential.

    (Level A)

-   [<span class="count"></span><span class="txt"><span class="dir">Previous:</span><span class="title">Functionality</span></span>](../functionality/)
-   [<span class="count"></span><span class="txt"><span class="dir">Next:</span><span class="title">Styling</span></span>](../styling/)

We welcome your ideas
---------------------

Please send any ideas, suggestions, or comments to the [(publicly-archived) mailing list wai-eo-editors@w3.org](mailto:wai-eo-editors@w3.org?subject=%5BTutorial%20Feedback%5D). You can also contribute to the [code directly on Github](https://github.com/w3c/wai-tutorials).

<a href="https://github.com/w3c/wai-tutorials/blob/master/source/carousels/animations.html.erb.md" class="btn">Fork &amp; edit this page on Github</a>

Carousels Tutorial
------------------

-   [<span class="count"></span><span class="txt">Carousel Concepts</span>](../)
-   [<span class="count"></span><span class="txt">Structure</span>](../structure/)
-   [<span class="count"></span><span class="txt">Functionality</span>](../functionality/)
-   <span class="current-a"><span class="count"></span><span class="txt"><span class="visuallyhidden">Current: </span>Animations</span></span>
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
