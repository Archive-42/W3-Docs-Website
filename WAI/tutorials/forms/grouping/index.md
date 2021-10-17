[<img src="../../img/w3c-bde9a11f.svg" alt="W3C" width="90" />](http://w3.org/) <a href="http://w3.org/WAI/" class="wai"><img src="../../img/wai-590850fc.svg" alt="Web Accessibility Initiative" /></a>

[Web Accessibility Tutorials <span class="subheading">Guidance on how to create websites that meet WCAG</span>](../../)

<a href="#nav" class="btn btn-jump">Jump to the navigation</a>

<span class="home">[<span class="count"></span><span class="txt">Tutorials home</span>](../../)</span> <span class="icon icon-chevron-right"></span><span class="visuallyhidden">»</span> <span class="other"> [<span class="count"></span><span class="txt">Forms</span>](../) <span class="icon icon-chevron-right"></span><span class="visuallyhidden">»</span> <span class="current-a"><span class="count"></span><span class="txt"><span class="visuallyhidden">Current: </span>Grouping Controls</span></span> </span>

Grouping Controls
=================

Grouping related form controls makes forms more understandable for all users, as related controls are easier to identify. It also makes it easier for people to focus on smaller and more manageable groups rather than try to grasp the entire form at once.

Grouping needs to be carried out visually and in the code, for example, by using the `<fieldset>` and `<legend>` elements to associate related form controls. Also, related entries of a `<select>` element can be grouped using `<optgroup>`.

Associating related controls with `fieldset`
--------------------------------------------

The `<fieldset>` element provides a container for related form controls, and the `<legend>` element acts as a heading to identify the group.

The legend for a group of controls can also highlight common attributes of all controls, for example, to advise that all fields in the group are required.

### Radio buttons

In the example below, there are three radio buttons that allow the user to choose an output format. Radio button groups should always be grouped using `<fieldset>`.

Example:

Output format

Text file

CSV file

HTML file

Code snippet:

    <fieldset>
    <legend>Output format</legend>
      <div>
        <input type="radio" name="format" id="txt" value="txt" checked>
        <label for="txt">Text file</label>
      </div>
      <div>
        <input type="radio" name="format" id="csv" value="csv">
        <label for="csv">CSV file</label>
      </div>
      […]
    </fieldset>

### Checkboxes

In the example below, three checkboxes are part of an opt-in function for receiving different types of information.

Example:

I want to receive

The weekly newsletter

Offers from the company

Offers from associated companies

Code snippet:

    <fieldset>
    <legend>I want to receive</legend>
        <div>
            <input type="checkbox" name="newsletter" id="check_1">
        <label for="check_1">The weekly newsletter</label>
        </div>
        […]
    </fieldset>

### Related fields

This example shows form fields to enter shipping and billing addresses. As the labels in both groups have the same text, the `fieldset` element also helps to distinguish the form fields by their groups. In case the `<legend>` is not read by screen readers (see note below), labels for the first form control in each group should include the group’s name. This name can be hidden visually.

Example:

Shipping Address:

<span class="visuallyhidden">Shipping </span>Name:  

Street:  

Number:  

City:  

ZIP code:  

Billing Address:

<span class="visuallyhidden">Billing </span>Name:  

Street:  

Number:  

City:  

ZIP code:  

Code snippet:

    <fieldset>
        <legend>Shipping Address:</legend>
        <div>
            <label for="shipping_name">
          <span class="visuallyhidden">Shipping </span>Name:
        </label><br>
            <input type="text" name="shipping_name" id="shipping_name">
        </div>
      <div>
        <label for="shipping_street">Street:</label><br>
        <input type="text" name="shipping_street" id="shipping_street">
      </div>
        […]
    </fieldset>
    <fieldset>
        <legend>Billing Address:</legend>
        <div>
            <label for="billing_name">
          <span class="visuallyhidden">Billing </span>Name:
        </label><br>
            <input type="text" name="billing_name" id="billing_name">
        </div>
      <div>
        <label for="billing_street">Street:</label><br>
        <input type="text" name="billing_street" id="billing_street">
      </div>
        […]
    </fieldset>

**Note:** Depending on the configuration, some screen readers read out the legend either *with every form element*, *once*, or, rarely, *not at all*. To accommodate this consider the following:

-   Make the legend as short as possible for situations in which it is read together with the label each time.
-   Make the individual labels sufficiently self-explanatory for situations in which legends are not read aloud, without repeating the legend in every label.

Associating related controls with WAI-ARIA
------------------------------------------

WAI-ARIA provides a grouping role that functions similarly to `fieldset` and `legend`. In this example, the `div` element has `role=group` to indicate that the contained elements are members of a group and the `aria-labelledby` attribute references the `id` for text that will serve as the label for the group.

This technique provides additional styling possibilities.

Example:

Shipping Address:

<span class="visuallyhidden">Shipping </span>Name:  

Street:  

Number:  

City:  

ZIP code:  

Billing Address:

<span class="visuallyhidden">Billing </span>Name:  

Street:  

Number:  

City:  

ZIP code:  

Because WAI-ARIA not fully supported in all web browser and screen reader combinations, a group identifier should be added to the first form control in the group.

Code snippet:

    <div role="group" aria-labelledby="shipping_head">
        <div id="shipping_head">Shipping Address:</div>
        <div>
            <label for="shipping_name">
          <span class="visuallyhidden">Shipping </span>Name:
        </label><br>
            <input type="text" name="shipping_name" id="shipping_name">
        </div>
        […]
    </div>
    <div role="group" aria-labelledby="billing_head">
        <div id="billing_head">Billing Address:</div>
        <div>
            <label for="billing_name">
          <span class="visuallyhidden">Billing </span>Name:
        </label><br>
            <input type="text" name="billing_name" id="billing_name">
        </div>
        […]
    </div>

Grouping items in `select` elements
-----------------------------------

For `select` elements with groups of options, the `optgroup` element can be used to indicate such groups. The `label` attribute of the `optgroup` element is used to provide a label for the group. This is especially useful for lists with many related options. In the example below, users can choose from lectures in one of three courses.

Example:

Which course would you like to watch today? Course: Lecture 01: Powers of Ten Lecture 02: 1D Kinematics Lecture 03: Vectors Lecture 01: What holds our world together? Lecture 02: Electric Field Lecture 03: Electric Flux Lecture 01: Periodic Phenomenon Lecture 02: Beats Lecture 03: Forced Oscillations with Damping

Code snippet:

    <select>
        <optgroup label="8.01 Physics I: Classical Mechanics">
            <option value="8.01.1">Lecture 01: Powers of Ten</option>
            <option value="8.01.2">Lecture 02: 1D Kinematics</option>
            <option value="8.01.3">Lecture 03: Vectors</option>
        </optgroup>
        <optgroup label="8.02 Physics II: Electricity and Magnestism">
            <option value="8.02.1">Lecture 01: What holds our world together?</option>
            […]
        </optgroup>
        […]
    </select>

Related WCAG resources
----------------------

These tutorials provide best-practice guidance on implementing accessibility in different situations. This page combined the following WCAG success criteria and techniques from different conformance levels:

**Success Criteria:**

-   [1.3.1 Info and Relationships:](https://www.w3.org/WAI/WCAG21/quickref/#info-and-relationships) Information, structure, and relationships conveyed through presentation can be programmatically determined or are available in text. (Level A)

-   [3.3.2 Labels or Instructions:](https://www.w3.org/WAI/WCAG21/quickref/#labels-or-instructions) Labels or instructions are provided when content requires user input. (Level A)

**Techniques:**

-   [ARIA17: Using grouping roles to identify related form controls](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA17)
-   [H71: Providing a description for groups of form controls using fieldset and legend elements](https://www.w3.org/WAI/WCAG21/Techniques/html/H71)
-   [H85: Using OPTGROUP to group OPTION elements inside a SELECT](https://www.w3.org/WAI/WCAG21/Techniques/html/H85)

-   [<span class="count"></span><span class="txt"><span class="dir">Previous:</span><span class="title">Labeling Controls</span></span>](../labels/)
-   [<span class="count"></span><span class="txt"><span class="dir">Next:</span><span class="title">Form Instructions</span></span>](../instructions/)

We welcome your ideas
---------------------

Please send any ideas, suggestions, or comments to the [(publicly-archived) mailing list wai-eo-editors@w3.org](mailto:wai-eo-editors@w3.org?subject=%5BTutorial%20Feedback%5D). You can also contribute to the [code directly on Github](https://github.com/w3c/wai-tutorials).

<a href="https://github.com/w3c/wai-tutorials/blob/master/source/forms/grouping.html.erb.md" class="btn">Fork &amp; edit this page on Github</a>

Forms Tutorial
--------------

-   [<span class="count"></span><span class="txt">Forms Concepts</span>](../)
-   [<span class="count"></span><span class="txt">Labeling Controls</span>](../labels/)
-   <span class="current-a"><span class="count"></span><span class="txt"><span class="visuallyhidden">Current: </span>Grouping Controls</span></span>
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
