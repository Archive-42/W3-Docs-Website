[<img src="../../img/w3c-bde9a11f.svg" alt="W3C" width="90" />](http://w3.org/) <a href="http://w3.org/WAI/" class="wai"><img src="../../img/wai-590850fc.svg" alt="Web Accessibility Initiative" /></a>

[Web Accessibility Tutorials <span class="subheading">Guidance on how to create websites that meet WCAG</span>](../../)

<a href="#nav" class="btn btn-jump">Jump to the navigation</a>

<span class="home">[<span class="count"></span><span class="txt">Tutorials home</span>](../../)</span> <span class="icon icon-chevron-right"></span><span class="visuallyhidden">»</span> <span class="other"> [<span class="count"></span><span class="txt">Menus</span>](../) <span class="icon icon-chevron-right"></span><span class="visuallyhidden">»</span> <span class="current-a"><span class="count"></span><span class="txt"><span class="visuallyhidden">Current: </span>Application Menu Example & Code</span></span> </span>

Application Menu Example & Code
===============================

Example:

-   File
    -   New
    -   Open
    -   Print
-   Edit
    -   Undo
    -   Redo
    -   Cut
    -   Copy
    -   Paste
-   Format
    -   Font
    -   Text
-   View
    -   100%
    -   Zoom In
    -   Zoom Out
-   Help

Element after the menu to focus on

Code snippet: HTML

    <ul role="menubar" aria-label="functions" id="appmenu">
        <li role="menuitem" aria-haspopup="true">
            File
            <ul role="menu">
                <li role="menuitem">New</li>
                <li role="menuitem">Open</li>
                <li role="menuitem">Print</li>
            </ul>
        </li>
        <li role="menuitem" aria-haspopup="true">
            Edit
            <ul role="menu">
                <li role="menuitem">Undo</li>
                <li role="menuitem">Redo</li>
                <li role="menuitem">Cut</li>
                <li role="menuitem">Copy</li>
                <li role="menuitem">Paste</li>
            </ul>
        </li>
        <li role="menuitem" aria-haspopup="true">
            Format
            <ul role="menu">
                <li role="menuitem">Font</li>
                <li role="menuitem">Text</li>
            </ul>
        </li>
        <li role="menuitem" aria-haspopup="true">
            View
            <ul role="menu">
                <li role="menuitem">100%</li>
                <li role="menuitem">Zoom In</li>
                <li role="menuitem">Zoom Out</li>
            </ul>
        </li>
        <li role="menuitem">Help</li>
    </ul>

Code snippet: CSS

    #appmenu {
        width:80%;
        float: left;
        margin: 0;
        padding: 0;
        color: #fff;
        background-color: #369;
        padding: .25em;
    }
    #appmenu li {
        white-space: nowrap;
        display:block;
        padding: .25em .75em;
        border: 1px solid #fff;
    }
    #appmenu > li {
        float: left;
        background-color: #036;
        text-align: center;
        position:relative;
        cursor: pointer;
    }
    #appmenu :hover,
    #appmenu :focus {
        background-color: #fff;
        color: #036;
        border: 1px solid #036;
        text-decoration: underline;
    }

    #appmenu :hover li,
    #appmenu :focus li {
        color: #fff;
        background-color: #036;
    }

    #appmenu > li > ul {
        display: none;
        position:absolute;
        left:0;
        right:0;
        top:100%;
        padding:0;
        margin:0;
        background-color: #036;
        width: 200%;
        text-align: left;
    }

    #appmenu > li[aria-expanded="true"] > ul {
        display:block;
    }

Code snippet: JavaScript

    var appsMenuItems = document.querySelectorAll('#appmenu > li');
    var subMenuItems = document.querySelectorAll('#appmenu > li li');
    var keys = {
        tab:    9,
        enter:  13,
        esc:    27,
        space:  32,
        left:   37,
        up:     38,
        right:  39,
        down:   40
    };
    var currentIndex, subIndex;

    var gotoIndex = function(idx) {
        if (idx == appsMenuItems.length) {
            idx = 0;
        } else if (idx < 0) {
            idx = appsMenuItems.length - 1;
        }
        appsMenuItems[idx].focus();
        currentIndex = idx;
    };

    var gotoSubIndex = function (menu, idx) {
        var items = menu.querySelectorAll('li');
        if (idx == items.length) {
            idx = 0;
        } else if (idx < 0) {
            idx = items.length - 1;
        }
        items[idx].focus();
        subIndex = idx;
    }

    Array.prototype.forEach.call(appsMenuItems, function(el, i){
            if (0 == i) {
                el.setAttribute('tabindex', '0');
                el.addEventListener("focus", function() {
                    currentIndex = 0;
                });
            } else {
                el.setAttribute('tabindex', '-1');
            }
            el.addEventListener("focus", function() {
                subIndex = 0;
                Array.prototype.forEach.call(appsMenuItems, function(el, i){
                    el.setAttribute('aria-expanded', "false");
                });
            });
            el.addEventListener("click",  function(event){
                if (this.getAttribute('aria-expanded') == 'false' || this.getAttribute('aria-expanded') ==  null) {
                    this.setAttribute('aria-expanded', "true");
                } else {
                    this.setAttribute('aria-expanded', "false");
                }
                event.preventDefault();
                return false;
            });
            el.addEventListener("keydown", function(event) {
                var prevdef = false;
                switch (event.keyCode) {
                    case keys.right:
                        gotoIndex(currentIndex + 1);
                        prevdef = true;
                        break;
                    case keys.left:
                        gotoIndex(currentIndex - 1);
                        prevdef = true;
                        break;
                    case keys.tab:
                        if (event.shiftKey) {
                            gotoIndex(currentIndex - 1);
                        } else {
                            gotoIndex(currentIndex + 1);
                        }
                        prevdef = true;
                        break;
                    case keys.enter:
                    case keys.down:
                        this.click();
                        subindex = 0;
                        gotoSubIndex(this.querySelector('ul'), 0);
                        prevdef = true;
                        break;
                    case keys.up:
                        this.click();
                        var submenu = this.querySelector('ul');
                        subindex = submenu.querySelectorAll('li').length - 1;
                        gotoSubIndex(submenu, subindex);
                        prevdef = true;
                        break;
                    case keys.esc:
                        document.querySelector('#escape').setAttribute('tabindex', '-1');
                        document.querySelector('#escape').focus();
                        prevdef = true;
                }
                if (prevdef) {
                    event.preventDefault();
                }
            });
    });

    Array.prototype.forEach.call(subMenuItems, function(el, i){
        el.setAttribute('tabindex', '-1');
        el.addEventListener("keydown", function(event) {
                switch (event.keyCode) {
                    case keys.tab:
                        if (event.shiftKey) {
                            gotoIndex(currentIndex - 1);
                        } else {
                            gotoIndex(currentIndex + 1);
                        }
                        prevdef = true;
                        break;
                    case keys.right:
                        gotoIndex(currentIndex + 1);
                        prevdef = true;
                        break;
                    case keys.left:
                        gotoIndex(currentIndex - 1);
                        prevdef = true;
                        break;
                    case keys.esc:
                        gotoIndex(currentIndex);
                        prevdef = true;
                        break;
                    case keys.down:
                        gotoSubIndex(this.parentNode, subIndex + 1);
                        prevdef = true;
                        break;
                    case keys.up:
                        gotoSubIndex(this.parentNode, subIndex - 1);
                        prevdef = true;
                        break;
                    case keys.enter:
                    case keys.space:
                        alert(this.innerText);
                        prevdef = true;
                        break;
                }
                if (prevdef) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                return false;
            });
        el.addEventListener("click", function(event) {
                alert(this.innerHTML);
                event.preventDefault();
                event.stopPropagation();
                return false;
            });
    });

-   [<span class="count"></span><span class="txt"><span class="dir">Previous:</span><span class="title">Application Menus</span></span>](../application-menus/)

We welcome your ideas
---------------------

Please send any ideas, suggestions, or comments to the [(publicly-archived) mailing list wai-eo-editors@w3.org](mailto:wai-eo-editors@w3.org?subject=%5BTutorial%20Feedback%5D). You can also contribute to the [code directly on Github](https://github.com/w3c/wai-tutorials).

<a href="https://github.com/w3c/wai-tutorials/blob/master/source/menus/application-menus-code.html.erb.md" class="btn">Fork &amp; edit this page on Github</a>

Menus Tutorial
--------------

-   [<span class="count"></span><span class="txt">Concepts</span>](../)
-   [<span class="count"></span><span class="txt">Structure</span>](../structure/)
-   [<span class="count"></span><span class="txt">Styling</span>](../styling/)
-   [<span class="count"></span><span class="txt">Fly-out Menus</span>](../flyout/)
-   [<span class="count"></span><span class="txt">Application Menus</span>](../application-menus/)
-   <span class="current-a"><span class="count"></span><span class="txt"><span class="visuallyhidden">Current: </span>Application Menu Example & Code</span></span>

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
