[<img src="../../img/w3c-bde9a11f.svg" alt="W3C" width="90" />](http://w3.org/) <a href="http://w3.org/WAI/" class="wai"><img src="../../img/wai-590850fc.svg" alt="Web Accessibility Initiative" /></a>

[Web Accessibility Tutorials <span class="subheading">Guidance on how to create websites that meet WCAG</span>](../../)

<a href="#nav" class="btn btn-jump">Jump to the navigation</a>

<span class="home">[<span class="count"></span><span class="txt">Tutorials home</span>](../../)</span> <span class="icon icon-chevron-right"></span><span class="visuallyhidden">»</span> <span class="other"> [<span class="count"></span><span class="txt">Page Structure</span>](../) <span class="icon icon-chevron-right"></span><span class="visuallyhidden">»</span> <span class="current-a"><span class="count"></span><span class="txt"><span class="visuallyhidden">Current: </span>Page Structure Code Example</span></span> </span>

Page Structure Code Example
===========================

Code snippet:

    …
    <body>
      <header>
        <h1>Space Teddy Inc.</h1>
      </header>
      <nav aria-labelledby="mainnavheader">
        <h2 id="mainnavheader">Navigation Menu</h2>
        …
      </nav>
      <main>
        <article>
          <h2>An inside look at the new Space Teddy 6</h2>
          <nav aria-labelledby="tocheader">
            <h3 id="tocheader">Table of Contents</h3>
            …
          </nav>
          <p>…</p>
          <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <p>…</p>
          <ul>
            <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
            <li>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
            <li>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</li>
          </ul>
          <h3>Cotton Fur</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <p>…</p>
          <aside aria-labelledby="relatedheader">
            <h3 id="relatedheader">Related Articles</h3>
            <ul>
              <li><a href="#">Related Article Title 1</a></li>
              <li><a href="#">Related Article Title 2</a></li>
              <li><a href="#">Related Article Title 3</a></li>
            </ul>
          </aside>
        </article>
        <aside aria-labelledby="latestheader">
          <h3 id="latestheader">Latest Articles</h3>
          <ul>
            <li><a href="#">Latest Article Title 1</a></li>
            <li><a href="#">Latest Article Title 2</a></li>
            <li><a href="#">Latest Article Title 3</a></li>
          </ul>
        </aside>
      </main>
      <footer>
        <p>© SpaceTeddy Inc.</p>
      </footer>
    </body>
    …

-   [<span class="count"></span><span class="txt"><span class="dir">Previous:</span><span class="title">Content Structure</span></span>](../content/)

We welcome your ideas
---------------------

Please send any ideas, suggestions, or comments to the [(publicly-archived) mailing list wai-eo-editors@w3.org](mailto:wai-eo-editors@w3.org?subject=%5BTutorial%20Feedback%5D). You can also contribute to the [code directly on Github](https://github.com/w3c/wai-tutorials).

<a href="https://github.com/w3c/wai-tutorials/blob/master/source/page-structure/example.html.erb.md" class="btn">Fork &amp; edit this page on Github</a>

Page Structure Tutorial
-----------------------

-   [<span class="count"></span><span class="txt">Concepts</span>](../)
-   [<span class="count"></span><span class="txt">Page Regions</span>](../regions/)
-   [<span class="count"></span><span class="txt">Labeling Regions</span>](../labels/)
-   [<span class="count"></span><span class="txt">Headings</span>](../headings/)
-   [<span class="count"></span><span class="txt">Content Structure</span>](../content/)
-   <span class="current-a"><span class="count"></span><span class="txt"><span class="visuallyhidden">Current: </span>Example</span></span>

All Tutorials
-------------

-   <span class="current-a"><span class="count"></span><span class="txt"><span class="visuallyhidden">Current: </span>Page Structure</span></span>
-   [<span class="count"></span><span class="txt">Menus</span>](../../menus/)
-   [<span class="count"></span><span class="txt">Images</span>](../../images/)
-   [<span class="count"></span><span class="txt">Tables</span>](../../tables/)
-   [<span class="count"></span><span class="txt">Forms</span>](../../forms/)
-   [<span class="count"></span><span class="txt">Carousels</span>](../../carousels/)

Document Information
--------------------

**Feedback: We welcome ideas for improvements, bug reports, and comments** via [GitHub](https://github.com/w3c/wai-tutorials) or e-mail to <wai-eo-editors@w3.org> (a publicly archived list) or <wai@w3.org> (a WAI staff-only list).

-   **Status:** Updated 27 July 2019 (first published April 2017)
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
