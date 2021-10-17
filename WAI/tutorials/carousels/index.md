[<img src="../img/w3c-bde9a11f.svg" alt="W3C" width="90" />](http://w3.org/) <a href="http://w3.org/WAI/" class="wai"><img src="../img/wai-590850fc.svg" alt="Web Accessibility Initiative" /></a>

[Web Accessibility Tutorials <span class="subheading">Guidance on how to create websites that meet WCAG</span>](../)

<a href="#nav" class="btn btn-jump">Jump to the navigation</a>

<span class="home">[<span class="count"></span><span class="txt">Tutorials home</span>](../)</span> <span class="icon icon-chevron-right"></span><span class="visuallyhidden">»</span> <span class="other"> <span class="current-a"><span class="count"></span><span class="txt"><span class="visuallyhidden">Current: </span>Carousels</span></span> <span class="icon icon-chevron-right"></span><span class="visuallyhidden">»</span> <span class="current-a"><span class="count"></span><span class="txt"><span class="visuallyhidden">Current: </span>Carousel Concepts</span></span> </span>

Carousel Concepts
=================

Implement an accessible carousel widget by providing a robust structure and user control:

-   **[Structure](structure/):** Use semantic structure for the carousel to support proper function of assistive technology.
-   **[Functionality](functionality/):** Add functionality to display and announce carousel items.
-   **[Animations](animations/):** Add a transition animation between items and ensure users can stop and resume it.
-   **[Styling](styling/):** Style the carousel to make sure it’s usable and readable by everyone.

See also the [complete working example](working-example/) and [full code](full-code/) of the example carousel.

What are carousels?
-------------------

Carousels show a collection of items one at a time. They are also known as “slideshows” and “sliders”. Typical uses of carousels include scrolling news headlines, featured articles on home pages, and image galleries.

What makes a carousel accessible?
---------------------------------

-   Users must be able to pause carousel movement because it can be too fast or distracting, making text hard to read.
-   All functionality, including navigating between carousel items, must be operable by keyboard.
-   Changes to carousel items must be communicated to all users, including screen reader users.
-   The keyboard position (“focus”) is managed in a reasonable and comprehensible fashion.

**Note:** Carousels are disputed from a usability perspective because their content can be hard to discover. Ensuring accessibility can also improve usability.

Why is this important?
----------------------

Typically, carousels are prominently located and are used to provide navigation or show page content. Accessible carousels are essential for many website users including:

-   **People using keyboard navigation and voice input software** can navigate between individual items.
-   **People using screen readers** will understand which item is currently shown and how to navigate between items.
-   **People who are distracted by movement** can pause animations.
-   **People who need more time to read** can pause animations, providing them with sufficient time to read and understand carousel content.

Related WCAG resources
----------------------

These tutorials provide best-practice guidance on implementing accessibility in different situations. This page combined the following WCAG success criteria and techniques from different conformance levels:

**Success Criteria:**

-   [1.3.1 Info and Relationships:](https://www.w3.org/WAI/WCAG21/quickref/#info-and-relationships) Information, structure, and relationships conveyed through presentation can be programmatically determined or are available in text. (Level A)

-   [2.1.1 Keyboard:](https://www.w3.org/WAI/WCAG21/quickref/#keyboard) All functionality of the content is operable through a keyboard interface without requiring specific timings for individual keystrokes, except where the underlying function requires input that depends on the path of the user’s movement and not just the endpoints. (Level A)

-   [2.2.2 Pause, Stop, Hide:](https://www.w3.org/WAI/WCAG21/quickref/#pause-stop-hide) For moving, blinking, scrolling, or auto-updating information, all of the following are true:

    -   **Moving, blinking, scrolling:** For any moving, blinking or scrolling information that (1) starts automatically, (2) lasts more than five seconds, and (3) is presented in parallel with other content, there is a mechanism for the user to pause, stop, or hide it unless the movement, blinking, or scrolling is part of an activity where it is essential; and

    -   **Auto-updating:** For any auto-updating information that (1) starts automatically and (2) is presented in parallel with other content, there is a mechanism for the user to pause, stop, or hide it or to control the frequency of the update unless the auto-updating is part of an activity where it is essential.

    (Level A)

-   [4.1.2 Name, Role, Value:](https://www.w3.org/WAI/WCAG21/quickref/#name-role-value) For all user interface components (including but not limited to: form elements, links and components generated by scripts), the name and role can be programmatically determined; states, properties, and values that can be set by the user can be programmatically set; and notification of changes to these items is available to user agents, including assistive technologies. (Level A)

-   [<span class="count"></span><span class="txt"><span class="dir">Next:</span><span class="title">Structure</span></span>](structure/)

We welcome your ideas
---------------------

Please send any ideas, suggestions, or comments to the [(publicly-archived) mailing list wai-eo-editors@w3.org](mailto:wai-eo-editors@w3.org?subject=%5BTutorial%20Feedback%5D). You can also contribute to the [code directly on Github](https://github.com/w3c/wai-tutorials).

<a href="https://github.com/w3c/wai-tutorials/blob/master/source/carousels/index.html.erb.md" class="btn">Fork &amp; edit this page on Github</a>

Carousels Tutorial
------------------

-   <span class="current-a"><span class="count"></span><span class="txt"><span class="visuallyhidden">Current: </span>Carousel Concepts</span></span>
-   [<span class="count"></span><span class="txt">Structure</span>](structure/)
-   [<span class="count"></span><span class="txt">Functionality</span>](functionality/)
-   [<span class="count"></span><span class="txt">Animations</span>](animations/)
-   [<span class="count"></span><span class="txt">Styling</span>](styling/)
-   [<span class="count"></span><span class="txt">Working Example</span>](working-example/)
-   [<span class="count"></span><span class="txt">Complete Code</span>](full-code/)

All Tutorials
-------------

-   [<span class="count"></span><span class="txt">Page Structure</span>](../page-structure/)
-   [<span class="count"></span><span class="txt">Menus</span>](../menus/)
-   [<span class="count"></span><span class="txt">Images</span>](../images/)
-   [<span class="count"></span><span class="txt">Tables</span>](../tables/)
-   [<span class="count"></span><span class="txt">Forms</span>](../forms/)
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
-   \[[<span class="count"></span><span class="txt">Attributions</span>](../attributions/)\] \[[<span class="count"></span><span class="txt">Changelog</span>](../changelog/)\]

\[[WAI Site Map](https://www.w3.org/WAI/sitemap.html)\] \[[Help with WAI Website](https://www.w3.org/WAI/sitehelp.html)\] \[[Search](https://www.w3.org/WAI/search.php)\] \[[Contacting WAI](https://www.w3.org/WAI/contacts)\]

Copyright © 2019 W3C <sup>®</sup> ([MIT](http://www.csail.mit.edu/), [ERCIM](http://www.ercim.eu/), [Keio](http://www.keio.ac.jp/), [Beihang](http://ev.buaa.edu.cn/)) [Usage policies apply](/Consortium/Legal/ipr-notice).

![](//www.w3.org/analytics/piwik/piwik.php?idsite=328)
