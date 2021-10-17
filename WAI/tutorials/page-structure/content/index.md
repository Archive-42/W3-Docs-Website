[<img src="../../img/w3c-bde9a11f.svg" alt="W3C" width="90" />](http://w3.org/) <a href="http://w3.org/WAI/" class="wai"><img src="../../img/wai-590850fc.svg" alt="Web Accessibility Initiative" /></a>

[Web Accessibility Tutorials <span class="subheading">Guidance on how to create websites that meet WCAG</span>](../../)

<a href="#nav" class="btn btn-jump">Jump to the navigation</a>

<span class="home">[<span class="count"></span><span class="txt">Tutorials home</span>](../../)</span> <span class="icon icon-chevron-right"></span><span class="visuallyhidden">»</span> <span class="other"> [<span class="count"></span><span class="txt">Page Structure</span>](../) <span class="icon icon-chevron-right"></span><span class="visuallyhidden">»</span> <span class="current-a"><span class="count"></span><span class="txt"><span class="visuallyhidden">Current: </span>Content Structure</span></span> </span>

Content Structure
=================

Mark up website content semantically, so that the website is extensible. Valid semantics create content that is reusable and more meaningful to assistive technologies.

Articles
--------

The HTML5 `<article>` element represents a complete or self-contained composition in a web page. Examples of articles include an item at a shopping site or a news article on a news site.

Code snippet:

    <article>
      <h2>Space Bear Classic</h2>
      …
    </article>
    <article>
      <h2>Space Bear Extreme</h2>
      …
    </article>

Sections
--------

The HTML5 `<section>` element marks a general region of a web page or an article. It is used for thematic grouping of content.

Code snippet:

    <section>
      <h2>Chapter 2</h2>
      …
    </section>

Paragraphs
----------

Use the paragraph element (`<p>`) to mark up paragraphs of text, such as this one. The consistent styling of paragraphs improves text readability. It also gives users more control when customizing their view.

Lists
-----

Use different types of lists to group information according to its nature to provide orientation for users.

-   Unordered lists are used when the order of the items is not relevant. List items in unordered lists are marked with a bullet.
-   Ordered lists are used for sequential information and are automatically enumerated by the browser.
-   Description lists are groups of related terms and descriptions which are connected programmatically.

Individual list items can contain a variety of HTML elements, including paragraphs, headings, form elements, and other (nested) lists.

### Unordered list

The unordered list consists of one `<ul>` element and multiple list item (`<li>`) elements:

Example:

-   Corn
-   Tomatoes
-   Beans
-   Onions
-   Garlic

Code snippet:

    <ul>
        <li>Corn</li>
        <li>Tomatoes</li>
        <li>Beans</li>
        <li>Onions</li>
        <li>Garlic</li>
        …
    </ul>

### Ordered list

The ordered list consists of one `<ol>` element and multiple list item (`<li>`) elements:

Example:

1.  Cook beans for 45 minutes.
2.  Cut vegetables in small cubes.
3.  Sauté onions and garlic.
4.  Deglaze using the tomatoes.
5.  Add corn and beans.

Code snippet:

    <ol>
        <li>Cook beans for 45 minutes.</li>
        <li>Cut vegetables in small cubes.</li>
        <li>Sauté onions and garlic.</li>
        <li>Deglaze using the tomatoes.</li>
        <li>Add corn and beans.</li>
        …
    </ol>

### Nested lists

Every list can be nested into another list. In the following example, the order of preparation is not critical, but the preparation itself should be done before using the ingredients. The information is still easy to digest, assistive technology can easily inform users about the number of steps.

Example:

1.  Prepare ingredients
    -   Cook beans for 45 minutes.
    -   Cut vegetables in small cubes.
2.  Sauté onions and garlic.
3.  Deglaze using the tomatoes.
4.  Add corn and beans.

Code snippet:

    <ol>
        <li>
            Prepare ingredients
            <ul>
                <li>Cook beans for 45 minutes.</li>
                <li>Cut vegetables in small cubes.</li>
            </ul>
        </li>
        <li>Sauté onions and garlic.</li>
        <li>Deglaze using the tomatoes.</li>
        <li>Add corn and beans.</li>
        …
    </ol>

### Description lists

A description list consists of one or more term and description groupings. Each grouping associates one or more terms (the contents of `<dt>` elements) with one or more descriptions (the contents of `<dd>` elements).

A grouping begins either on the first item of the list or whenever a `<dt>` element follows an `<dd>` element.

#### One term, multiple descriptions

In the following example, John and Luke are described as authors, and Frank is described as editor.

Example:

Authors  
John

Luke

Editor  
Frank

Code snippet:

    <dl>
      <dt>Authors</dt>
      <dd>John</dd>
      <dd>Luke</dd>
      <dt>Editor</dt>
      <dd>Frank</dd>
    </dl>

#### Multiple terms, one description

In the next example, two different spellings of a word are defined using description lists. In such cases, use the `dfn` element to mark up the defined term.

Example:

color  
colour  
A sensation which (in humans) derives from the ability of the fine structure of the eye to distinguish three differently filtered analyses of a view.

Code snippet:

    <dl>
       <dt lang="en-US"><dfn>color</dfn></dt>
       <dt lang="en-GB"><dfn>colour</dfn></dt>
       <dd>A sensation which (in humans) derives from the ability of the fine structure of the eye to distinguish three differently filtered analyses of a view.</dd>
    </dl>

#### Multiple terms, multiple descriptions

In this example, John and Luke are authors and also editors:

Example:

Authors  
Editors  
John

Luke

Code snippet:

    <dl>
      <dt>Authors</dt>
      <dt>Editors</dt>
      <dd>John</dd>
      <dd>Luke</dd>
    </dl>

Quotes
------

Identifying a quotation helps clarify that the content is attributed to another author. Quotes can be marked up as inline or as blocks of text. Assistive technologies can convey to users where a quote starts and ends, which can avoid misunderstandings.

### Blockquote

Use the `<blockquote>` element for longer and more complex quotes. It can contain paragraphs, headings, and other text structure elements. Those should reflect the structure of the cited document. The `<cite>` element is used to refer to the source of the quote.

Example:

The following is an excerpt from the The Story of my Life by Helen Keller

> Even in the days before my teacher came, I used to feel along the square stiff boxwood hedges, and, guided by the sense of smell, would find the first violets and lilies. There, too, after a fit of temper, I went to find comfort and to hide my hot face in the cool leaves and grass.

Code snippet:

    <p>The following is an excerpt from the <cite>The Story of my Life</cite> by Helen Keller</p>
    <blockquote>
        <p>Even in the days before my teacher came, I used to feel along the square stiff boxwood hedges, and, guided by the sense of smell, would find the first violets and lilies. There, too, after a fit of temper, I went to find comfort and to hide my hot face in the cool leaves and grass.</p>
    </blockquote>

### Inline quote

For shorter quotes, that are usually embedded in another sentence, use the `<q>` element.

Example:

Helen Keller said, “Self-pity is our worst enemy and if we yield to it, we can never do anything good in the world.”

Code snippet:

    <p>Helen Keller said, <q>Self-pity is our worst enemy and if we yield to it, we can never do anything good in the world.</q></p>

Figures
-------

Figures are blocks with additional information set off from the main content of the page – sometimes referenced from the main text. They typically contain lists, images, tables, but can also include other content. For example, an annual report could reference to a diagram containing the sales volumes of a product.

Each figure is wrapped in a `<figure>` element and labeled using a nested `<figcaption>` element.

Code snippet:

    <p>The sales volume of our SpaceBear product was steadily the first three quarters but had a huge success in quarter four with the introduction of SuperBear in time for the holiday season. See graphic G3 for details.</p>

    <figure role="group" aria-labelledby="fig-t3-capt">
        <figcaption id="fig-t3-capt">G3: SpaceBear sales volume</figcaption>
        <img src="…"
             alt="SpaceBear sales diagram, showing the huge success in Q4"
             longdesc="…">
        <a href="…">Long Description</a>
    </figure>

-   **Note:** At the time of writing, WAI-ARIA attributes `role="group"` and `aria-labelledby` are used to provide the information to assistive technologies in a consistent way.

-   **Note:** For more information on how to mark up diagrams, see [complex images](../../images/complex/).

Images and illustrations
------------------------

Images and illustrations are useful to create visual engagement for many users. They may also clarify text for people with reading disabilities. Where images or illustrations are used, proper alternative text needs to be added. See the [Images Tutorial](../../images/) for guidance on alternative text.

Tables
------

Data tables provide a useful way to display the data so that the structure of the table can be communicated to everyone. Proper table layout allows people to understand meaningful data relationships without seeing the grid. For more details, see the [Tables Tutorial](../../tables/).

Related WCAG resources
----------------------

These tutorials provide best-practice guidance on implementing accessibility in different situations. This page combined the following WCAG success criteria and techniques from different conformance levels:

**Success Criteria:**

-   [1.3.1 Info and Relationships:](https://www.w3.org/WAI/WCAG21/quickref/#info-and-relationships) Information, structure, and relationships conveyed through presentation can be programmatically determined or are available in text. (Level A)

**Techniques:**

-   [G62: Providing a glossary](https://www.w3.org/WAI/WCAG21/Techniques/general/G62)
-   [H40: Using definition lists](https://www.w3.org/WAI/WCAG21/Techniques/html/H40)
-   [H48: Using ol, ul and dl for lists or groups of links](https://www.w3.org/WAI/WCAG21/Techniques/html/H48)
-   [H49: Using semantic markup to mark emphasized or special text](https://www.w3.org/WAI/WCAG21/Techniques/html/H49)

-   [<span class="count"></span><span class="txt"><span class="dir">Previous:</span><span class="title">Headings</span></span>](../headings/)
-   [<span class="count"></span><span class="txt"><span class="dir">Next:</span><span class="title">Example</span></span>](../example/)

We welcome your ideas
---------------------

Please send any ideas, suggestions, or comments to the [(publicly-archived) mailing list wai-eo-editors@w3.org](mailto:wai-eo-editors@w3.org?subject=%5BTutorial%20Feedback%5D). You can also contribute to the [code directly on Github](https://github.com/w3c/wai-tutorials).

<a href="https://github.com/w3c/wai-tutorials/blob/master/source/page-structure/content.html.erb.md" class="btn">Fork &amp; edit this page on Github</a>

Page Structure Tutorial
-----------------------

-   [<span class="count"></span><span class="txt">Concepts</span>](../)
-   [<span class="count"></span><span class="txt">Page Regions</span>](../regions/)
-   [<span class="count"></span><span class="txt">Labeling Regions</span>](../labels/)
-   [<span class="count"></span><span class="txt">Headings</span>](../headings/)
-   <span class="current-a"><span class="count"></span><span class="txt"><span class="visuallyhidden">Current: </span>Content Structure</span></span>
-   [<span class="count"></span><span class="txt">Example</span>](../example/)

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
