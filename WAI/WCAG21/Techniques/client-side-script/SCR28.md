-   [Contents](https://www.w3.org/WAI/WCAG21/Techniques/#techniques "Table of Contents")
-   [Intro](https://www.w3.org/WAI/WCAG21/Techniques/#introduction "Introduction to Techniques")
-   [Previous Technique: SCR27](SCR27)
-   [Next Technique: SCR29](SCR29)

On this page:

-   [Important Information about Techniques](#important-information)
-   [Applicability](#applicability)
-   [Description](#description)
-   [Examples](#examples)
-   [Related Resources](#resources)
-   [Related Techniques](#related)
-   [Tests](#tests)

Using an expandable and collapsible menu to bypass block of content
===================================================================

Important Information about Techniques
--------------------------------------

See [Understanding Techniques for WCAG Success Criteria](https://www.w3.org/WAI/WCAG21/Understanding/understanding-techniques) for important information about the usage of these informative techniques and how they relate to the normative WCAG 2.1 success criteria. The Applicability section explains the scope of the technique, and the presence of techniques for a specific technology does not imply that the technology can be used in all situations to create content that meets WCAG 2.1.

Applicability
-------------

Technologies that provide client side scripting.

This technique relates to [Success Criterion 2.4.1: Bypass Blocks](https://www.w3.org/WAI/WCAG21/Understanding/bypass-blocks) (Sufficient when used with an unwritten technique).

Description
-----------

This technique allows users to skip repeated material by placing that material in a menu that can be expanded or collapsed under user control. The user can skip the repeated material by collapsing the menu. The user invokes a user interface control to hide or remove the elements of the menu. The resources section lists several techniques for menus, toolbars and trees, any of which can be used to provide a mechanism for skipping navigation.

Note

Similiar approaches can be implemented using server-side scripting and reloading a modified version of the Web page.

Examples
--------

### Example 1

The navigation links at top of a Web page are all entries in a menu implemented using HTML, CSS, and Javascript. When the navigation bar is expanded, the navigation links are available to the user. When the navigation bar is collapsed, the links are not available.

    ...

      <script type="text/javascript">
      function toggle(id){
        var n = document.getElementById(id);
        n.style.display =  (n.style.display != 'none' ? 'none' : '' );
      }
      </script>

    ...

      <a href="#" onclick="toggle('navbar')">Toggle Navigation Bar</a>

      <ul id="navbar">
      <li><a href="http://target1.html">Link 1</a></li>
      <li><a href="http://target2.html">Link 2</a></li>
      <li><a href="http://target3.html">Link 3</a></li>
      <li><a href="http://target4.html">Link 4</a></li>
      </ul>

    ...

Working example of this code: [Toggle navigation bar with a link](../../working-examples/script-toggle-navbar-link/).

### Example 2

The table of contents for a set of Web pages is repeated near the beginning of each Web page. A button at the beginning of the table of contents lets the user remove or restore it on the page.

    ...

       <script type="text/javascript">
      function toggle(id){
        var n = document.getElementById(id);
        n.style.display =  (n.style.display != 'none' ? 'none' : '' );
      }
      </script>

      ...

      <button onclick="return toggle('toc');">Toggle Table of Contents</button>
      <div id="toc">
        ...
      </div>

    ...

Working example of this code: [Toggle table of contents with a button](../../working-examples/script-toggle-toc-button/).

Resources
---------

Resources are for information purposes only, no endorsement implied.

-   [Unobtrusive show/hide behavior reloaded](http://www.bobbyvandersluis.com/articles/unobtrusive-show-hide/)
-   [Seven ways to toggle an element with JavaScript](http://www.dustindiaz.com/seven-togglers/)

Related Techniques
------------------

-   [H69: Providing heading elements at the beginning of each section of content](https://www.w3.org/WAI/WCAG21/Techniques/html/H69)
-   [H50:](https://www.w3.org/WAI/WCAG21/Techniques//H50)
-   [H70: Using frame elements to group blocks of repeated material](https://www.w3.org/WAI/WCAG21/Techniques/html/H70)

Tests
-----

### Procedure

1.  Check that some user interface control allows the repeated content to be expanded or collapsed.
2.  Check that when the content is expanded, it is included in the programmatically determined content at a logical place in the reading order.
3.  Check that when the content is collapsed, it is not part of the programmatically determined content.

### Expected Results

-   All checks above are true.
