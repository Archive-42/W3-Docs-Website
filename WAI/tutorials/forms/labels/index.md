[<img src="../../img/w3c-bde9a11f.svg" alt="W3C" width="90" />](http://w3.org/) <a href="http://w3.org/WAI/" class="wai"><img src="../../img/wai-590850fc.svg" alt="Web Accessibility Initiative" /></a>

[Web Accessibility Tutorials <span class="subheading">Guidance on how to create websites that meet WCAG</span>](../../)

<a href="#nav" class="btn btn-jump">Jump to the navigation</a>

<span class="home">[<span class="count"></span><span class="txt">Tutorials home</span>](../../)</span> <span class="icon icon-chevron-right"></span><span class="visuallyhidden">»</span> <span class="other"> [<span class="count"></span><span class="txt">Forms</span>](../) <span class="icon icon-chevron-right"></span><span class="visuallyhidden">»</span> <span class="current-a"><span class="count"></span><span class="txt"><span class="visuallyhidden">Current: </span>Labeling Controls</span></span> </span>

Labeling Controls
=================

Provide labels to identify all form controls, including text fields, checkboxes, radio buttons, and drop-down menus. In most cases, this is done by using the `<label>` element.

Labels need to describe the purpose of the form control. This section of the tutorial describes how to provide labels that are properly associated with form controls. Later sections explain how to provide [instructions](../instructions/), [validate user input](../validation/), and [provide feedback](../notifications/) to help users complete your form.

A label and a form control should be associated with each other either implicitly or explicitly. Web browsers provide the label as a larger clickable area, for example, to select or activate the control. It also ensures that assistive technology can refer to the correct label when presenting a form control.

Associating labels explicitly
-----------------------------

Whenever possible, use the `label` element to associate text with form elements explicitly. The `for` attribute of the label must exactly match the `id` of the form control.

Example:

First name:  
Subscribe to newsletter

Code snippet: HTML

    <label for="firstname">First name:</label>
    <input type="text" name="firstname" id="firstname"><br>

    <input type="checkbox" name="subscribe" id="subscribe">
    <label for="subscribe">Subscribe to newsletter</label>

### Hiding label text

A label for a form control helps everyone better understand its purpose. In some cases, the purpose may be clear enough from the context when the content is rendered visually. The label can be hidden visually, though it still needs to be provided within the code to support other forms of presentation and interaction, such as for screen reader and speech input users. The method used in this tutorial to hide an element visually but make it available for assistive technologies is explained in [Note on hiding element](#note-on-hiding-elements).

In the example below, the search field is positioned directly beside the search button. The purpose of the text input field is evident from the context in most situations.

Example:

Search:

Search

#### Hiding the label element

In this approach, the `<label>` element is provided to identify a form control within the code, but it is visually hidden to avoid redundancy for users who can derive the purpose from the visual cues.

Code snippet:

    <label for="search" class="visuallyhidden">Search: </label>
    <input type="text" name="search" id="search">
    <button type="submit">Search</button>

#### Using aria-label

The `aria-label` attribute can also be used to identify form controls. This approach is well supported by screen readers and other assistive technology, but, unlike the `title` attribute (see below), the information is not conveyed to visual users. The approach should therefore only be used when the label of the control is clear from the surrounding content, like the button in the example below.

Code snippet:

    <input type="text" name="search" aria-label="Search">
    <button type="submit">Search</button>

#### Using aria-labelledby

The `aria-labelledby` attribute can also be used to identify form controls. This approach is well supported by screen readers and other assistive technology, but, unlike the `title` attribute (see below), the information is not conveyed to visual users. The approach should therefore only be used when the label of the control is clear from the surrounding content, like the button in the example below.

The `id` of the element containing the label text is used as the value of the `aria-labelledby` attribute.

Code snippet:

    <input type="text" name="search" aria-labelledby="searchbutton">
    <button id="searchbutton" type="submit">Search</button>

#### Using the `title` attribute

The `title` attribute can also be used to identify form controls. This approach is generally less reliable and not recommended because some screen readers and assistive technologies do not interpret the `title` attribute as a replacement for the label element, possibly because the `title` attribute is often used to provide non-essential information. The information of the `title` attribute is shown to visual users as a tool tip when hovering over the form field with the mouse.

Example:

Search

Code snippet:

    <input title="Search" type="text" name="search">
    <button type="submit">Search</button>

#### Note on hiding elements

Screen readers and other assistive technology, just as web browsers, hide elements from their users when they are styled using `display: none;` and `visibility: hidden;`.

The common approach used to hide information visually but keep them available to screen reader and other assistive technology users is to use CSS that will keep the information technically visible but practically hidden. For example, presenting the label in a 1-by-1 pixel area with a 1-pixel margin, as demonstrated with the CSS class `visuallyhidden` (**do not confuse** with CSS `visibility: hidden`) below:

Code snippet:

    .visuallyhidden {
      border: 0;
      clip: rect(0 0 0 0);
      height: 1px;
      margin: -1px;
      overflow: hidden;
      padding: 0;
      position: absolute;
      width: 1px;
    }

Note that interactive elements are still active when using this code, so it is not suitable to hide other parts of forms but the labels.

Associating labels implicitly
-----------------------------

In some situations, form controls cannot be labeled explicitly. For example, a content author might not know the `id` of a form field generated by a script, or that script might not add an `id` at all. In this case, the `label` element is used as a container for both the form control and the label text, so that the two are associated implicitly. Generally, explicit labels are better supported by assistive technology.

Code snippet: HTML

    <label>
      First name:
      <input type="text" name="firstname">
    </label>
    <br>
    <label>
      <input type="checkbox" name="subscribe">
      Subscribe to newsletter
    </label>

Labeling buttons
----------------

The label of a `<button>` element is set inside the element and can include markup. This allows more advanced accessibility hints to be included, like marking up language change. When using the `<input>` element to create buttons, the label is set in the `value` attribute of the element.

Code snippet: HTML

    <button type="submit">Submit</button>
    <button type="button">Cancel</button>

    <input type="submit" value="Submit">
    <input type="button" value="Cancel">

**Note:** If the image button (`<input type="image">`) is used, the label is set in the `alt` attribute, for example: `<input type="image" src="searchbutton.png" alt="Search">`. See [Functional Images](../../images/functional/#image-used-in-a-button) for more information on how to describe images in buttons.

Visual position of label text
-----------------------------

In left-to-right languages, it is customary to visually position labels to the right of radio buttons and checkboxes, and to the left or directly above other form fields. Maintaining this practice increases predictability and understandability of your form for all users.

In general, placing labels above the form fields helps reduce horizontal scrolling for people with low vision and mobile device users. However, the usefulness of this approach depends on other design aspects, such as the proximity of other nearby form fields and content, and needs to be assessed individually. The aim should be to maintain a close and distinct visual relationship between the label and the form control.

Related WCAG resources
----------------------

These tutorials provide best-practice guidance on implementing accessibility in different situations. This page combined the following WCAG success criteria and techniques from different conformance levels:

**Success Criteria:**

-   [1.3.1 Info and Relationships:](https://www.w3.org/WAI/WCAG21/quickref/#info-and-relationships) Information, structure, and relationships conveyed through presentation can be programmatically determined or are available in text. (Level A)

-   [2.4.6 Headings and Labels:](https://www.w3.org/WAI/WCAG21/quickref/#headings-and-labels) Headings and labels describe topic or purpose. (Level AA)

-   [3.3.2 Labels or Instructions:](https://www.w3.org/WAI/WCAG21/quickref/#labels-or-instructions) Labels or instructions are provided when content requires user input. (Level A)

-   [4.1.2 Name, Role, Value:](https://www.w3.org/WAI/WCAG21/quickref/#name-role-value) For all user interface components (including but not limited to: form elements, links and components generated by scripts), the name and role can be programmatically determined; states, properties, and values that can be set by the user can be programmatically set; and notification of changes to these items is available to user agents, including assistive technologies. (Level A)

**Techniques:**

-   [G17: Ensuring that a contrast ratio of at least 7:1 exists between text (and images of text) and background behind the text](https://www.w3.org/WAI/WCAG21/Techniques/general/G17)
-   [G18: Ensuring that a contrast ratio of at least 4.5:1 exists between text (and images of text) and background behind the text](https://www.w3.org/WAI/WCAG21/Techniques/general/G18)
-   [G131: Providing descriptive labels](https://www.w3.org/WAI/WCAG21/Techniques/general/G131)
-   [G162: Positioning labels to maximize predictability of relationships](https://www.w3.org/WAI/WCAG21/Techniques/general/G162)
-   [G167: Using an adjacent button to label the purpose of a field](https://www.w3.org/WAI/WCAG21/Techniques/general/G167)
-   [H44: Using label elements to associate text labels with form controls](https://www.w3.org/WAI/WCAG21/Techniques/html/H44)
-   [H65: Using the title attribute to identify form controls when the label element cannot be used](https://www.w3.org/WAI/WCAG21/Techniques/html/H65)
-   [H93: Ensuring that id attributes are unique on a Web page](https://www.w3.org/WAI/WCAG21/Techniques/html/H93)

-   [<span class="count"></span><span class="txt"><span class="dir">Previous:</span><span class="title">Forms Concepts</span></span>](../)
-   [<span class="count"></span><span class="txt"><span class="dir">Next:</span><span class="title">Grouping Controls</span></span>](../grouping/)

We welcome your ideas
---------------------

Please send any ideas, suggestions, or comments to the [(publicly-archived) mailing list wai-eo-editors@w3.org](mailto:wai-eo-editors@w3.org?subject=%5BTutorial%20Feedback%5D). You can also contribute to the [code directly on Github](https://github.com/w3c/wai-tutorials).

<a href="https://github.com/w3c/wai-tutorials/blob/master/source/forms/labels.html.erb.md" class="btn">Fork &amp; edit this page on Github</a>

Forms Tutorial
--------------

-   [<span class="count"></span><span class="txt">Forms Concepts</span>](../)
-   <span class="current-a"><span class="count"></span><span class="txt"><span class="visuallyhidden">Current: </span>Labeling Controls</span></span>
-   [<span class="count"></span><span class="txt">Grouping Controls</span>](../grouping/)
-   [<span class="count"></span><span class="txt">Form Instructions</span>](../instructions/)
-   [<span class="count"></span><span class="txt">Validating Input</span>](../validation/)
-   [<span class="count"></span><span class="txt">User Notifications</span>](../notifications/)
-   [<span class="count"></span><span class="txt">Multi-page Forms</span>](../multi-page/)
-   [<span class="count"></span><span class="txt">Custom Controls</span>](../custom-controls/)

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
