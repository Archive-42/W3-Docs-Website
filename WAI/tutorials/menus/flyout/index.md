[<img src="../../img/w3c-bde9a11f.svg" alt="W3C" width="90" />](http://w3.org/) <a href="http://w3.org/WAI/" class="wai"><img src="../../img/wai-590850fc.svg" alt="Web Accessibility Initiative" /></a>

[Web Accessibility Tutorials <span class="subheading">Guidance on how to create websites that meet WCAG</span>](../../)

<a href="#nav" class="btn btn-jump">Jump to the navigation</a>

<span class="home">[<span class="count"></span><span class="txt">Tutorials home</span>](../../)</span> <span class="icon icon-chevron-right"></span><span class="visuallyhidden">»</span> <span class="other"> [<span class="count"></span><span class="txt">Menus</span>](../) <span class="icon icon-chevron-right"></span><span class="visuallyhidden">»</span> <span class="current-a"><span class="count"></span><span class="txt"><span class="visuallyhidden">Current: </span>Fly-out Menus</span></span> </span>

Fly-out Menus
=============

Use fly-out (or drop-down) menus to provide an overview of a web site’s page hierarchy. It removes the need for multiple page loads provided that users know where to find the information. Application menus are usually implemented this way, too.

People with reduced dexterity, such as tremors, often have trouble operating fly-out menus. For some, it might be impossible. Make sure to provide other ways to the submenu items, for example by repeating them on the page of the parent menu item.

Indicate submenus
-----------------

Indicate menu items with submenus visually and using markup. In the following example, the submenu is indicated visually by an icon and this WAI-ARIA markup:

-   `aria-haspopup="true"` declares that a menu item has a submenu.
-   `aria-expanded="false"` declares that the submenu is hidden.

Code snippet: HTML

    <nav aria-label="Main Navigation">
            <ul>
                    <li><a href="…">Home</a></li>
                    <li><a href="…">Shop</a></li>
                    <li class="has-submenu">
                            <a href="…" aria-haspopup="true" aria-expanded="false">
                                Space Bears
                            </a>
                            <ul>
                                    <li><a href="…">Space Bear 6</a></li>
                                    <li><a href="…">Space Bear 6 Plus</a></li>
                            </ul>
                    </li>
                    <li><a href="…">Mars Cars</a></li>
                    <li><a href="…">Contact</a></li>
            </ul>
    </nav>

Fly-out functionality
---------------------

The fly-out functionality is created using CSS and scripting with slightly separate considerations for mouse and keyboard users.

### Mouse users

The following example uses this CSS code to show and hide the submenus when the parent menu items are hovered:

Code snippet: CSS

    nav > ul li       ul { display: none; }
    nav > ul li:hover ul { display: block;}

In addition, scripting is used to slightly delay the immediate closing of submenu items when the mouse leaves the area. This delay makes it easier to use the menu when navigation by a mouse is not very precise.

In the following example, a delay of one second is added using a timer:

Example:

-   [Home](#flyoutnavmousefixed)
-   [Shop](#flyoutnavmousefixed)
-   [Space Bears](#flyoutnavmousefixed)
    -   [Space Bear 6](#flyoutnavmousefixed)
    -   [Space Bear 6 Plus](#flyoutnavmousefixed)
-   [Mars Cars](#flyoutnavmousefixed)
-   [Contact](#flyoutnavmousefixed)

Code snippet: JavaScript

    var menuItems = document.querySelectorAll('li.has-submenu');
    Array.prototype.forEach.call(menuItems, function(el, i){
        el.addEventListener("mouseover", function(event){
            this.className = "has-submenu open";
            clearTimeout(timer);
        });
        el.addEventListener("mouseout", function(event){
            timer = setTimeout(function(event){
                document.querySelector(".has-submenu.open").className = "has-submenu";
            }, 1000);
        });
    });

### Keyboard Users

Submenus should not open when using the tab key to navigate through the menu, as keyboard users would then have to step through all submenu items to get to the next top-level item. Instead, consider one of the following approaches.

#### Use parent as toggle

Use this approach in situations where the parent menu item only summarizes the submenu and doesn’t have to carry out a function, such as linking to a web page. In this case, the submenu is opened by a script when the user activates the top-level item and closed when the focus leaves the submenu.

**Note:** The value of the `href` attribute is ignored but you might still want to link to an existing document in case JavaScript is not loaded.

Example:

-   [Home](#flyoutnavkbfixed)
-   [Shop](#flyoutnavkbfixed)
-   [Space Bears](#flyoutnavkbfixed)
    -   [Space Bear 6](#flyoutnavkbfixed)
    -   [Space Bear 6 Plus](#flyoutnavkbfixed)
-   [Mars Cars](#flyoutnavkbfixed)
-   [Contact](#flyoutnavkbfixed)

The following code iterates through all top-level items with the class `has-submenu` and adds a click event, which opens or closes the submenu depending on its state. Also, the `aria-expanded` attribute is set to `true` while the submenu is open, and to `false` otherwise.

**Note:** Despite the name, click events are activated regardless of the input method as soon as the link gets activated.

Code snippet: JavaScript

    var menuItems = document.querySelectorAll('li.has-submenu');
    Array.prototype.forEach.call(menuItems, function(el, i){
        el.querySelector('a').addEventListener("click",  function(event){
            if (this.parentNode.className == "has-submenu") {
                this.parentNode.className = "has-submenu open";
                this.setAttribute('aria-expanded', "true");
            } else {
                this.parentNode.className = "has-submenu";
                this.setAttribute('aria-expanded', "false");
            }
            event.preventDefault();
            return false;
        });
    });

#### Use button as toggle

For situations when the parent menu item needs to carry out a function, such as linking to a web page, a separate button can be added to the parent item, to open and close the submenu. This button can also act as a visual indicator for the presence of a submenu.

Example:

-   [Home](#flyoutnavkbbtn)
-   [Shop](#flyoutnavkbbtn)
-   [Space Bears](#flyoutnavkbbtn)
    -   [Space Bear 6](#flyoutnavkbbtn)
    -   [Space Bear 6 Plus](#flyoutnavkbbtn)
-   [Mars Cars](#flyoutnavkbbtn)
-   [Contact](#flyoutnavkbbtn)

The following code adds a button to every top-level menu item with a submenu. When the button is activated, it shows or hides the submenu. The invisible label of the button is set to “show submenu” or “hide submenu”, reflecting the state of the submenu.

**Note:** If possible, include the name of the parent menu item in the button label; for example: “show Space Bears submenu”.

Code snippet: JavaScript

    var menuItems = document.querySelectorAll('li.has-submenu');
    Array.prototype.forEach.call(menuItems, function(el, i){
        var activatingA = el.querySelector('a');
        var btn = '<button><span><span class="visuallyhidden">show submenu for “' + activatingA.text + '”</span></span></button>';
        activatingA.insertAdjacentHTML('afterend', btn);

        el.querySelector('button').addEventListener("click",  function(event){
            if (this.parentNode.className == "has-submenu") {
                this.parentNode.className = "has-submenu open";
                this.parentNode.querySelector('a').setAttribute('aria-expanded', "true");
                this.parentNode.querySelector('button').setAttribute('aria-expanded', "true");
            } else {
                this.parentNode.className = "has-submenu";
                this.parentNode.querySelector('a').setAttribute('aria-expanded', "false");
                this.parentNode.querySelector('button').setAttribute('aria-expanded', "false");
            }
            event.preventDefault();
        });
    });

Related WCAG resources
----------------------

These tutorials provide best-practice guidance on implementing accessibility in different situations. This page combined the following WCAG success criteria and techniques from different conformance levels:

**Techniques:**

-   [H4: Creating a logical tab order through links, form controls, and objects](https://www.w3.org/WAI/WCAG21/Techniques/html/H4)
-   [SCR26: Inserting dynamic content into the Document Object Model immediately following its trigger element](https://www.w3.org/WAI/WCAG21/Techniques/client-side-script/SCR26)

-   [<span class="count"></span><span class="txt"><span class="dir">Previous:</span><span class="title">Styling</span></span>](../styling/)
-   [<span class="count"></span><span class="txt"><span class="dir">Next:</span><span class="title">Application Menus</span></span>](../application-menus/)

We welcome your ideas
---------------------

Please send any ideas, suggestions, or comments to the [(publicly-archived) mailing list wai-eo-editors@w3.org](mailto:wai-eo-editors@w3.org?subject=%5BTutorial%20Feedback%5D). You can also contribute to the [code directly on Github](https://github.com/w3c/wai-tutorials).

<a href="https://github.com/w3c/wai-tutorials/blob/master/source/menus/flyout.html.erb.md" class="btn">Fork &amp; edit this page on Github</a>

Menus Tutorial
--------------

-   [<span class="count"></span><span class="txt">Concepts</span>](../)
-   [<span class="count"></span><span class="txt">Structure</span>](../structure/)
-   [<span class="count"></span><span class="txt">Styling</span>](../styling/)
-   <span class="current-a"><span class="count"></span><span class="txt"><span class="visuallyhidden">Current: </span>Fly-out Menus</span></span>
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
