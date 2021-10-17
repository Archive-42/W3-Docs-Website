[<img src="../../img/w3c-bde9a11f.svg" alt="W3C" width="90" />](http://w3.org/) <a href="http://w3.org/WAI/" class="wai"><img src="../../img/wai-590850fc.svg" alt="Web Accessibility Initiative" /></a>

[Web Accessibility Tutorials <span class="subheading">Guidance on how to create websites that meet WCAG</span>](../../)

<a href="#nav" class="btn btn-jump">Jump to the navigation</a>

<span class="home">[<span class="count"></span><span class="txt">Tutorials home</span>](../../)</span> <span class="icon icon-chevron-right"></span><span class="visuallyhidden">»</span> <span class="other"> [<span class="count"></span><span class="txt">Forms</span>](../) <span class="icon icon-chevron-right"></span><span class="visuallyhidden">»</span> <span class="current-a"><span class="count"></span><span class="txt"><span class="visuallyhidden">Current: </span>Form Instructions</span></span> </span>

Form Instructions
=================

Provide instructions to help users understand how to complete the form and use individual form controls. Indicate any required and optional input, data formats, and other relevant information.

**Important:** Screen readers often switch to “Forms Mode” when they are processing content within a `<form>` element. In this mode they usually only read aloud form elements such as `<input>`, `<select>`, `<textarea>`, `<legend>`, and `<label>`. It is critical to include form instructions in ways that can be read aloud. This will be explained further below.

Overall instructions
--------------------

Where relevant, provide overall instructions that apply to the entire form. For example, indicate any required and optional input, allowed data formats, and timing limitations. Provide such instructions before the `<form>` element to ensure that it is read aloud by screen readers before they switch to “Forms Mode”.

In the example below, form instructions indicate how required fields are marked, the expected format for the main data fields, and where to find additional help for each input.

Example:

-   All fields marked “required” must be completed.
-   Dates should all be typed in the format dd/mm/yyyy, (as in 21/07/2013).
-   Passwords must contain at least 8 letters and/or numbers.
-   Extra help can be found immediately after each field.

In-line instructions
--------------------

In addition to overall instructions, it is also important to provide relevant instructions within the labels of the form controls. For example, to indicate required input fields and data formats in the text of the labels.

### Providing instructions within labels

For simple use cases, providing instructions within labels may be sufficient. This approach is reliable across different web browsers and assistive technologies, although it may require some additional thought to support some styling needs.

In the example below, the required format for the “Expiration Date” is indicated by “MM/YYYY” within the same label:

Example:

Expiration date (MM/YYYY):

Code snippet:

    <label for="expire">Expiration date (MM/YYYY): </label> <input type="text" name="expire" id="expire">

### Providing instructions outside labels

Providing instructions outside of labels allows more flexible positioning and design, but sometimes it can be missed. It is also not supported by some web browsers (typically older versions) and assistive technologies that don’t implement WAI-ARIA.

#### Using `aria-labelledby`

One approach is to use the WAI-ARIA `aria-labelledby` attribute to associate instructions with form controls. At the time of writing this tutorial, this approach is not fully supported by all web browsers and assistive technologies, for example, Braille displays. To ensure backward compatibility, the `for` and `id` attributes are also used in this example.

Example:

Expiration date: <span id="expDesc2" tabindex="-1">MM/YYYY</span>

Code snippet:

    <label id="expLabel" for="expire" tabindex="-1">Expiration date:</label>
    <span>
        <input type="text" name="expire" id="expire" aria-labelledby="expLabel expDesc">
        <span id="expDesc" tabindex="-1">MM/YYYY</span>
    </span>

**Note:** At the time of writing those tutorials, it is necessary to add `tabindex="-1"` to elements that are referenced by `aria-labelledby` or `aria-describedby` if those attributes point to *two or more* elements to make this technique work in Internet Explorer.

#### Using `aria-describedby`

Another apporach to associate additional instructions with a form field is to use `aria-describedby`. Information referenced by this attribute is made available to the users after the label and other information is announced.

Code snippet:

    <label id="expLabel" for="expire">Expiration date:</label>
    <span>
        <input type="text" name="expire" id="expire" aria-labelledby="expLabel" aria-describedby="expDesc">
        <span id="expDesc">MM/YYYY</span>
    </span>

### Placeholder text

Placeholder text provides instructions or an example of the required data format inside form fields that have not yet been edited by the user. Placeholder text is usually displayed with lower color contrast than text provided by users, and it disappears from form fields when users start entering text. If the placeholder text contains instructional information or examples that disappear, it makes it more difficult for users to check their responses before submitting the form.

While placeholder text provides valuable guidance for many users, **placeholder text is not a replacement for labels**. Assistive technologies, such as screen readers, do not treat placeholder text as labels. Moreover, at the time of writing this tutorial, placeholder text is not broadly supported across assistive technologies and not displayed in older web browsers.

Note: Section [Hidden labels](../labels/#hidden) of this tutorial describes how to hide information visually but keep it available to assistive technology. This same approach can be used to avoid visual redundancy of displaying both labels and placeholder text. Be aware that this makes it very hard for users to review the form. To avoid this problem, JavaScript can be used to make labels appear visually (in the associated label element) above or beside the input that has focus.

Example:

Search:

Email:

Code snippet:

    <div>
        <label for="search">Search:</label> <input type="text" name="search" id="search" placeholder="e.g. Apple Pie">
    </div>
    <div>
        <label for="email">Email: </label> <input type="text" name="email" id="email" placeholder="joe@example.com">
    </div>

#### Styling

At the time of writing this tutorial, web browsers usually display the placeholder text in a color that does not meet the [minimum contrast requirement of WCAG](https://www.w3.org/WAI/WCAG21/quickref/#contrast-minimum). This means they are hard to see for many people. Web browsers use a combination of color and opacity to achieve this effect. In most web browsers the color of the placeholder can be styled using proprietary CSS selectors. The following code snippet sets the color to a light gray, which has just enough contrast to meet the contrast requirement, assuming the background of the element is white.

Code snippet:

    ::-webkit-input-placeholder {
         color: #767676;
         opacity: 1;
    }

    :-moz-placeholder { /* Firefox 18- */
         color: #767676;
         opacity: 1;
    }

    ::-moz-placeholder {  /* Firefox 19+ */
         color: #767676;
         opacity: 1;
    }

    :-ms-input-placeholder {
         color: #767676;
         opacity: 1;
    }

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
-   [H44: Using label elements to associate text labels with form controls](https://www.w3.org/WAI/WCAG21/Techniques/html/H44)
-   [H93: Ensuring that id attributes are unique on a Web page](https://www.w3.org/WAI/WCAG21/Techniques/html/H93)

-   [<span class="count"></span><span class="txt"><span class="dir">Previous:</span><span class="title">Grouping Controls</span></span>](../grouping/)
-   [<span class="count"></span><span class="txt"><span class="dir">Next:</span><span class="title">Validating Input</span></span>](../validation/)

We welcome your ideas
---------------------

Please send any ideas, suggestions, or comments to the [(publicly-archived) mailing list wai-eo-editors@w3.org](mailto:wai-eo-editors@w3.org?subject=%5BTutorial%20Feedback%5D). You can also contribute to the [code directly on Github](https://github.com/w3c/wai-tutorials).

<a href="https://github.com/w3c/wai-tutorials/blob/master/source/forms/instructions.html.erb.md" class="btn">Fork &amp; edit this page on Github</a>

Forms Tutorial
--------------

-   [<span class="count"></span><span class="txt">Forms Concepts</span>](../)
-   [<span class="count"></span><span class="txt">Labeling Controls</span>](../labels/)
-   [<span class="count"></span><span class="txt">Grouping Controls</span>](../grouping/)
-   <span class="current-a"><span class="count"></span><span class="txt"><span class="visuallyhidden">Current: </span>Form Instructions</span></span>
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
