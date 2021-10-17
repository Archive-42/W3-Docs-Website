[<img src="../../img/w3c-bde9a11f.svg" alt="W3C" width="90" />](http://w3.org/) <a href="http://w3.org/WAI/" class="wai"><img src="../../img/wai-590850fc.svg" alt="Web Accessibility Initiative" /></a>

[Web Accessibility Tutorials <span class="subheading">Guidance on how to create websites that meet WCAG</span>](../../)

<a href="#nav" class="btn btn-jump">Jump to the navigation</a>

<span class="home">[<span class="count"></span><span class="txt">Tutorials home</span>](../../)</span> <span class="icon icon-chevron-right"></span><span class="visuallyhidden">»</span> <span class="other"> [<span class="count"></span><span class="txt">Menus</span>](../) <span class="icon icon-chevron-right"></span><span class="visuallyhidden">»</span> <span class="current-a"><span class="count"></span><span class="txt"><span class="visuallyhidden">Current: </span>Application Menus</span></span> </span>

Application Menus
=================

Web application menus use the same basic structure as navigation menus. They often consist of a horizontal menu bar and use fly-out functionality. However, additional markup and keyboard behavior must be added.

Additional markup
-----------------

In addition to the `aria-expanded` and `aria-haspopup` attributes, the following WAI-ARIA roles are used to provide the necessary semantics of an application menu:

-   **`menubar`:** Represents a (usually horizontal) menu bar.
-   **`menu`:** Represents a set of links or commands in a menu bar, it is used for the fly-out menus.
-   **`menuitem`:** Represents an individual menu item.
-   **`separator`:** Represents a separator between two groups of menu items in a menu.

Code snippet:

    <ul role="menubar" id="appmenu">
        …
        <li role="menuitem" aria-haspopup="true">
            Edit
            <ul role="menu">
                <li role="menuitem">Undo</li>
                <li role="menuitem">Redo</li>
                <li role="separator"></li>
                <li role="menuitem">Cut</li>
                <li role="menuitem">Copy</li>
                <li role="menuitem">Paste</li>
                </ul>
            </li>
        …
    </ul>

Application menus typically do not have links and rely on scripting to provide the functionality.

Functionality
-------------

Adding the WAI-ARIA roles does **not** automatically enable the menu’s functionality or keyboard behavior. These must be added using scripting. A detailed explanation on the WAI-ARIA attributes and keyboard behavior can be found in the [WAI-ARIA Authoring Practices document (draft)](https://www.w3.org/TR/wai-aria-practices/#menu).

Keyboard behavior
-----------------

Web application menus are expected to work like desktop application menus. For example, the left and right keys are used to iterate through the top-level items, and the up and down arrows are used to navigate submenus. Pressing the tab key focuses the next item after the menu instead of the next menu item.

To allow focus to be set to menu items by keyboard, the items are given a `tabindex` attribute with the value `-1`. The first main menu item (“File” in this example) is assigned a `tabindex` value of `0` which adds it to the tab order and lets the user access the menu using the keyboard.

Code snippet:

    Array.prototype.forEach.call(appsMenuItems, function(el, i){
            if (0 == i) {
                el.setAttribute('tabindex', '0');
                el.addEventListener("focus", function() {
                    currentIndex = 0;
                });
            } else {
                el.setAttribute('tabindex', '-1');
            }
    });

    Array.prototype.forEach.call(subMenuItems, function(el, i){
        el.setAttribute('tabindex', '-1');
    });

### Top-Level Menu Items

The following table summarizes the typical behavior of top-level menu items:

Key mapping for top-level menu items

Key

Action

tab ⇥

Select the next focusable element outside of the menu.

shift ⇧ + tab ⇥

Select the previous focusable element outside of the menu.

right →

Select the next top-level menu item.

left ←

Select the previous top-level menu item.

return/enter ↵

Open the submenu, select first submenu item.

space

down ↓

up ↑

Open the submenu, select last submenu item.

esc

Leave the menu.

### submenu Items

The following table summarizes the typical behavior of submenu items:

Key mapping for submenu items

Key

Action

tab ⇥

Close the submenu, select the next focusable element outside of the menu.

shift ⇧ + tab ⇥

Close the submenu, select the previous focusable element outside of the menu.

right →

Close the submenu, select the first item of the next top-level menu item.

left ←

Close the submenu, select the first item of the previous top-level menu item.

return/enter ↵

Carry out function of this item. (In this example: bring up a dialog box with the text of the chosen menu item.)

space

down ↓

Select next submenu item.

up ↑

Select previous submenu item.

esc

Close the submenu, select the current top-level menu item.

-   [<span class="count"></span><span class="txt"><span class="dir">Previous:</span><span class="title">Fly-out Menus</span></span>](../flyout/)
-   [<span class="count"></span><span class="txt"><span class="dir">Next:</span><span class="title">Application Menu Example & Code</span></span>](../application-menus-code/)

We welcome your ideas
---------------------

Please send any ideas, suggestions, or comments to the [(publicly-archived) mailing list wai-eo-editors@w3.org](mailto:wai-eo-editors@w3.org?subject=%5BTutorial%20Feedback%5D). You can also contribute to the [code directly on Github](https://github.com/w3c/wai-tutorials).

<a href="https://github.com/w3c/wai-tutorials/blob/master/source/menus/application-menus.html.erb.md" class="btn">Fork &amp; edit this page on Github</a>

Menus Tutorial
--------------

-   [<span class="count"></span><span class="txt">Concepts</span>](../)
-   [<span class="count"></span><span class="txt">Structure</span>](../structure/)
-   [<span class="count"></span><span class="txt">Styling</span>](../styling/)
-   [<span class="count"></span><span class="txt">Fly-out Menus</span>](../flyout/)
-   <span class="current-a"><span class="count"></span><span class="txt"><span class="visuallyhidden">Current: </span>Application Menus</span></span>
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
