[<img src="../../img/w3c-bde9a11f.svg" alt="W3C" width="90" />](http://w3.org/) <a href="http://w3.org/WAI/" class="wai"><img src="../../img/wai-590850fc.svg" alt="Web Accessibility Initiative" /></a>

[Web Accessibility Tutorials <span class="subheading">Guidance on how to create websites that meet WCAG</span>](../../)

<a href="#nav" class="btn btn-jump">Jump to the navigation</a>

<span class="home">[<span class="count"></span><span class="txt">Tutorials home</span>](../../)</span> <span class="icon icon-chevron-right"></span><span class="visuallyhidden">»</span> <span class="other"> [<span class="count"></span><span class="txt">Menus</span>](../) <span class="icon icon-chevron-right"></span><span class="visuallyhidden">»</span> <span class="current-a"><span class="count"></span><span class="txt"><span class="visuallyhidden">Current: </span>Menu Styling</span></span> </span>

Menu Styling
============

Clear and consistent styling allows users to find and recognize menus more quickly. Such styling includes consistency in the behavior, appearance, and relative location on pages across a website.

General considerations
----------------------

Menus often use images, such as icons, that can be decorative or communicate functionality. These images require text alternatives, as described in the [Images Tutorial](../../images/). Contrast requirements are also applicable to menus and their items.

### Location

Display the menu where the target audience of the website expects it. For example, on websites, the main navigation menu is commonly located either vertically on the left of the pages (in left-to-right languages), or horizontally across the top. Application menus are usually expected horizontally across the top.

### Identification

Ensure that menus and their items are identifiable as such. In addition to the structural markup discussed in the previous section, the color scheme is necessary to communicate the presence of menus and items visually.

Consider making the label of menus visible to everyone. For example, in these tutorials, the "Menus Tutorial", "All Tutorials", "On this page" are menu labels provided as visible headings that are available for all users.

### Readability

Ensure appropriate sizing of menus and menu items to fit all text. The menu size should also adapt to varying text sizes, to accommodate languages with longer words and people who need larger text. Where possible avoid all uppercase text, line breaks, and hyphenation, as these are often distracting and hard to read.

### Size

Provide sufficient white space, like padding, to support people with reduced dexterity and small touch screens on mobile devices. At the same time, make sure that menus do not overlap themselves and other content of the page when users increase the text size or zoom the page.

Menu items
----------

Convey menu items and their states by using color and other styling options. Don’t rely on color alone as some users will be unable to perceive such changes. For example, alter the shape of a menu item, or add an icon, in addition to changing its color when it is selected.

### Default state

Use distinct styling to visually indicate menu items as regions of the page that can be activated. However, avoid exaggerated text decoration, such as words in upper case or small caps, as these make text harder to read.

### Hover and Focus states

Change hovered or focused menu items, which gives users visual guidance when navigating the menu. In this example, hover and focus states use an inverted color scheme (blue on white instead of white on blue) and underline.

Code snippet: CSS

    nav a:hover,
    nav a:focus {
        color: #036;
        background-color: #fff;
        text-decoration: underline;
    }

See this code in action in the [live example](#example).

### Active state

Indicate the menu item that was activated through clicking, tapping, or keyboard selection. Users can identify unintended activation, for instance when they have clicked on the wrong menu item. In this example, the active item has a darker blue background and an underline.

Code snippet: CSS

    nav a:active {
        color: #fff;
        background-color: #024;
        text-decoration: underline;
    }

See this code in action in the [live example](#example).

### Current state

Also visually indicate the current menu item in addition to the structural markup discussed in the previous section.

In this example, a different color combination (black on gray) and a bottom border were added to give the current menu item a distinct color and shape.

Code snippet: CSS

    nav [aria-current=page] {
        background-color: #bbb;
        color: #000;
        border-bottom: .25em solid #444;
    }

See this code in action in the [live example](#example).

### Visited state

For some types of menus, such as instructional steps, it may be useful to indicate menu items that a user had already visited. However, most menus are not expected to change based on the visited state.

Example
-------

Example:

-   [Home](#currentnav)
-   [Shop](#currentnav)
-   [Space Bears](#currentnav)
-   [Mars Cars](#currentnav)
-   [Contact](#currentnav)

Related WCAG resources
----------------------

These tutorials provide best-practice guidance on implementing accessibility in different situations. This page combined the following WCAG success criteria and techniques from different conformance levels:

**Success Criteria:**

-   [1.4.1 Use of Color:](https://www.w3.org/WAI/WCAG21/quickref/#use-of-color) Color is not used as the only visual means of conveying information, indicating an action, prompting a response, or distinguishing a visual element. (Level A)

**Techniques:**

-   [G14: Ensuring that information conveyed by color differences is also available in text](https://www.w3.org/WAI/WCAG21/Techniques/general/G14)
-   [G128: Indicating current location within navigation bars](https://www.w3.org/WAI/WCAG21/Techniques/general/G128)
-   [G182: Ensuring that additional visual cues are available when text color differences are used to convey information](https://www.w3.org/WAI/WCAG21/Techniques/general/G182)
-   [G183: Using a contrast ratio of 3:1 with surrounding text and providing additional visual cues on focus for links or controls where color alone is used to identify them](https://www.w3.org/WAI/WCAG21/Techniques/general/G183)

-   [<span class="count"></span><span class="txt"><span class="dir">Previous:</span><span class="title">Structure</span></span>](../structure/)
-   [<span class="count"></span><span class="txt"><span class="dir">Next:</span><span class="title">Fly-out Menus</span></span>](../flyout/)

We welcome your ideas
---------------------

Please send any ideas, suggestions, or comments to the [(publicly-archived) mailing list wai-eo-editors@w3.org](mailto:wai-eo-editors@w3.org?subject=%5BTutorial%20Feedback%5D). You can also contribute to the [code directly on Github](https://github.com/w3c/wai-tutorials).

<a href="https://github.com/w3c/wai-tutorials/blob/master/source/menus/styling.html.erb.md" class="btn">Fork &amp; edit this page on Github</a>

Menus Tutorial
--------------

-   [<span class="count"></span><span class="txt">Concepts</span>](../)
-   [<span class="count"></span><span class="txt">Structure</span>](../structure/)
-   <span class="current-a"><span class="count"></span><span class="txt"><span class="visuallyhidden">Current: </span>Styling</span></span>
-   [<span class="count"></span><span class="txt">Fly-out Menus</span>](../flyout/)
-   [<span class="count"></span><span class="txt">Application Menus</span>](../application-menus/)
-   [<span class="count"></span><span class="txt">Application Menu Example & Code</span>](../application-menus-code/)

All Tutorials
-------------

-   [<span class="count"></span><span class="txt">Page Structure</span>](../../page-structure/)
-   <span class="current-a"><span class="count"></span><span class="txt"><span class="visuallyhidden">Current: </span>Menus</span></span>
-   [<span class="count"></span><span class="txt">Images</span>](../../images/)
-   [<span class="count"></span><span class="txt">Tables</span>](../../tables/)
-   [<span class="count"></span><span class="txt">Forms</span>](../../forms/)
-   [<span class="count"></span><span class="txt">Carousels</span>](../../carousels/)

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
