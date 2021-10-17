[<img src="../img/w3c-bde9a11f.svg" alt="W3C" width="90" />](http://w3.org/) <a href="http://w3.org/WAI/" class="wai"><img src="../img/wai-590850fc.svg" alt="Web Accessibility Initiative" /></a>

[Web Accessibility Tutorials <span class="subheading">Guidance on how to create websites that meet WCAG</span>](../)

<a href="#nav" class="btn btn-jump">Jump to the navigation</a>

<span class="home">[<span class="count"></span><span class="txt">Tutorials home</span>](../)</span> <span class="icon icon-chevron-right"></span><span class="visuallyhidden">»</span> <span class="other"> <span class="current-a"><span class="count"></span><span class="txt"><span class="visuallyhidden">Current: </span>Forms</span></span> <span class="icon icon-chevron-right"></span><span class="visuallyhidden">»</span> <span class="current-a"><span class="count"></span><span class="txt"><span class="visuallyhidden">Current: </span>Forms Concepts</span></span> </span>

Forms Concepts
==============

Forms are commonly used to provide user interaction on websites and in web applications. For example, login, registering, commenting, and purchasing. This tutorial shows you how to create accessible forms. The same concepts apply to all forms, whether they are processed client or server-side.

Aside from technical considerations, users usually prefer simple and short forms. Only ask users to enter what is required to complete the transaction or process; if irrelevant or excessive data is requested, users are more likely to abandon the form.

-   **[Labeling Controls](labels/):** Use the `<label>` element, and, in specific cases, other mechanisms (e.g. WAI-ARIA, `title` attribute etc.), to identify each form control.

-   **[Grouping Controls](grouping/):** Use the `<fieldset>` and `<legend>` elements to group and associate related form controls.

-   **[Form Instructions](instructions/):** Provide instructions to help users understand how to complete the form and individual form controls.

-   **[Validating Input](validation/):** Validate input provided by the user and provide options to undo changes and confirm data entry.

-   **[User Notifications](notifications/):** Notify users about successful task completion, any errors, and provide instructions to help them correct mistakes.

-   **[Multi-Page Forms](multi-page/):** Divide long forms into multiple smaller forms that constitute a series of logical steps or stages and inform users about their progress.

-   **[Custom Controls](custom-controls/):** Use stylized form elements and other progressive enhancement techniques to provide custom controls.

A note on time limits
---------------------

If possible, forms should not be subject to a time limit to allow users to complete the form at their pace. If a time limit needs to be in place, for example, for security reasons, the user should have the option to turn it off or extend it. This restriction does not apply if the time limit is due to a live event, such as an auction or a game, or if the time to complete the form is essential for a valid submission.

Why is this important?
----------------------

Forms can be visually and cognitively complex and challenging to use. Accessible forms are easier to use for everyone, including people with disabilities.

-   **People with cognitive disabilities** can better understand the form and how to complete it, as making forms accessible improves the layout structure, instructions, and feedback.

-   **People using speech input** can use the labels via voice commands to activate controls and move the focus to the fields that they have to complete.

-   **People with limited dexterity** benefit from large clickable areas that include the labels, especially for smaller controls, such as radio buttons and checkboxes.

-   **People using screen readers** can identify and understand form controls more easily because they are associated with labels, field sets, and other structural elements.

Related WCAG resources
----------------------

These tutorials provide best-practice guidance on implementing accessibility in different situations. This page combined the following WCAG success criteria and techniques from different conformance levels:

**Success Criteria:**

-   [1.3.1 Info and Relationships:](https://www.w3.org/WAI/WCAG21/quickref/#info-and-relationships) Information, structure, and relationships conveyed through presentation can be programmatically determined or are available in text. (Level A)

-   [2.4.6 Headings and Labels:](https://www.w3.org/WAI/WCAG21/quickref/#headings-and-labels) Headings and labels describe topic or purpose. (Level AA)

-   [3.3.2 Labels or Instructions:](https://www.w3.org/WAI/WCAG21/quickref/#labels-or-instructions) Labels or instructions are provided when content requires user input. (Level A)

-   [4.1.2 Name, Role, Value:](https://www.w3.org/WAI/WCAG21/quickref/#name-role-value) For all user interface components (including but not limited to: form elements, links and components generated by scripts), the name and role can be programmatically determined; states, properties, and values that can be set by the user can be programmatically set; and notification of changes to these items is available to user agents, including assistive technologies. (Level A)

-   [<span class="count"></span><span class="txt"><span class="dir">Next:</span><span class="title">Labeling Controls</span></span>](labels/)

We welcome your ideas
---------------------

Please send any ideas, suggestions, or comments to the [(publicly-archived) mailing list wai-eo-editors@w3.org](mailto:wai-eo-editors@w3.org?subject=%5BTutorial%20Feedback%5D). You can also contribute to the [code directly on Github](https://github.com/w3c/wai-tutorials).

<a href="https://github.com/w3c/wai-tutorials/blob/master/source/forms/index.html.erb.md" class="btn">Fork &amp; edit this page on Github</a>

Forms Tutorial
--------------

-   <span class="current-a"><span class="count"></span><span class="txt"><span class="visuallyhidden">Current: </span>Forms Concepts</span></span>
-   [<span class="count"></span><span class="txt">Labeling Controls</span>](labels/)
-   [<span class="count"></span><span class="txt">Grouping Controls</span>](grouping/)
-   [<span class="count"></span><span class="txt">Form Instructions</span>](instructions/)
-   [<span class="count"></span><span class="txt">Validating Input</span>](validation/)
-   [<span class="count"></span><span class="txt">User Notifications</span>](notifications/)
-   [<span class="count"></span><span class="txt">Multi-page Forms</span>](multi-page/)
-   [<span class="count"></span><span class="txt">Custom Controls</span>](custom-controls/)

All Tutorials
-------------

-   [<span class="count"></span><span class="txt">Page Structure</span>](../page-structure/)
-   [<span class="count"></span><span class="txt">Menus</span>](../menus/)
-   [<span class="count"></span><span class="txt">Images</span>](../images/)
-   [<span class="count"></span><span class="txt">Tables</span>](../tables/)
-   <span class="current-a"><span class="count"></span><span class="txt"><span class="visuallyhidden">Current: </span>Forms</span></span>
-   [<span class="count"></span><span class="txt">Carousels</span>](../carousels/)

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
-   \[[<span class="count"></span><span class="txt">Attributions</span>](../attributions/)\] \[[<span class="count"></span><span class="txt">Changelog</span>](../changelog/)\]

\[[WAI Site Map](https://www.w3.org/WAI/sitemap.html)\] \[[Help with WAI Website](https://www.w3.org/WAI/sitehelp.html)\] \[[Search](https://www.w3.org/WAI/search.php)\] \[[Contacting WAI](https://www.w3.org/WAI/contacts)\]

Copyright © 2019 W3C <sup>®</sup> ([MIT](http://www.csail.mit.edu/), [ERCIM](http://www.ercim.eu/), [Keio](http://www.keio.ac.jp/), [Beihang](http://ev.buaa.edu.cn/)) [Usage policies apply](/Consortium/Legal/ipr-notice).

![](//www.w3.org/analytics/piwik/piwik.php?idsite=328)
