-   [Contents](https://www.w3.org/WAI/WCAG21/Techniques/#techniques "Table of Contents")
-   [Intro](https://www.w3.org/WAI/WCAG21/Techniques/#introduction "Introduction to Techniques")
-   [Previous Technique: SCR29](SCR29)
-   [Next Technique: SCR31](SCR31)

On this page:

-   [Important Information about Techniques](#important-information)
-   [Applicability](#applicability)
-   [Description](#description)
-   [Examples](#examples)
-   [Related Techniques](#related)
-   [Tests](#tests)

Using scripts to change the link text
=====================================

Important Information about Techniques
--------------------------------------

See [Understanding Techniques for WCAG Success Criteria](https://www.w3.org/WAI/WCAG21/Understanding/understanding-techniques) for important information about the usage of these informative techniques and how they relate to the normative WCAG 2.1 success criteria. The Applicability section explains the scope of the technique, and the presence of techniques for a specific technology does not imply that the technology can be used in all situations to create content that meets WCAG 2.1.

Applicability
-------------

Client-side scripting used with HTML and XHTML

This technique relates to:

-   [Success Criterion 2.4.4: Link Purpose (In Context)](https://www.w3.org/WAI/WCAG21/Understanding/link-purpose-in-context) (Sufficient when used with an unwritten technique)
-   [Success Criterion 2.4.9: Link Purpose (Link Only)](https://www.w3.org/WAI/WCAG21/Understanding/link-purpose-link-only) (Sufficient when used with an unwritten technique)

Description
-----------

The purpose of this technique is to allow users to choose to have additional information added to the text of links so that the links can be understood out of context.

Some users prefer to have links that are self-contained, where there is no need to explore the context of the link. Other users find including the context information in each link to be repetitive and to reduce their ability to use a site. Among users of assistive technology, the feedback to the working group on which is preferable has been divided. This technique allows users to pick the approach that works best for them.

A link is provided near the beginning of the page that will expand the link text of the links on the page so that no additional context is needed to understand the purpose of any link. It must always be possible to understand the purpose of the expansion link directly from its link text.

This technique expands the links only for the current page view. It is also possible, and in some cases would be advisable, to save this preference in a cookie or server-side user profile, so that users would only have to make the selection once per site.

Examples
--------

### Example 1

This example uses Javascript to add contextual information directly to the text of a link. The link class is used to determine which additional text to add. When the "Expand Links" link is activated, each link on the page is tested to see whether additional text should be added.

    ...
    <script type="text/javascript">
    var expanded = false;
    var linkContext = {
        "hist":" version of The History of the Web",
        "cook":" version of Cooking for Nerds"
    };

    function doExpand() {
        var links = document.links;
        
        for (var i=0; i<links.length; i++) {
            var link = links[i];
            var cn = link.className;
            if (linkContext[cn]) {
                span = link.appendChild(document.createElement("span"));
                span.setAttribute("class", "linkexpansion");
                span.appendChild(document.createTextNode(linkContext[cn]));
            }
        }
        objUpdate = document.getElementById('expand');
        if (objUpdate)
        {
            objUpdate.childNodes[0].nodeValue = "Collapse links";
        }
        expanded = true;
    }

    function doCollapse() {
        objUpdate = document.getElementById('expand');
        var spans = document.getElementsByTagName("span");
        var span;

        // go backwards through the set as removing from the front changes indices
        // and messes up the process
        for (i = spans.length - 1; i >= 0; i--) {
            span = spans[i];
            if (span.getAttribute("class") == "linkexpansion")
                span.parentNode.removeChild(span);
        }
        if (objUpdate)
        {
            objUpdate.childNodes[0].nodeValue = "Expand links";
        }
        expanded = false;
    }

    function toggle() {
        if (expanded) doCollapse();
        else doExpand();
    }
    </script>

    ...

    <h1>Books for download</h1>
    <p><button id="expand" onclick="toggle();">Expand Links</button></p>
    <ul>
        <li>The History of the Web: <a href="history.docx" class="hist">Word</a>, <a href="history.pdf" class="hist">PDF</a>, <a href="history.html" class="hist">HTML</a> </li>

        <li>Cooking for Nerds: <a href="history.docx" class="cook">Word</a>, <a href="history.pdf" class="cook">PDF</a>, <a href="history.html" class="cook">HTML</a> </li>
    </ul>

    ...

Working example of this code: [Providing link expansions on demand](../../working-examples/script-expand-links/).

Related Techniques
------------------

-   [G91: Providing link text that describes the purpose of a link](https://www.w3.org/WAI/WCAG21/Techniques/general/G91)
-   [H30: Providing link text that describes the purpose of a link for anchor elements](https://www.w3.org/WAI/WCAG21/Techniques/html/H30)
-   [H33: Supplementing link text with the title attribute](https://www.w3.org/WAI/WCAG21/Techniques/html/H33)
-   [C7: Using CSS to hide a portion of the link text](https://www.w3.org/WAI/WCAG21/Techniques/css/C7)

Tests
-----

### Procedure

1.  Check that there is a link near the beginning of the page to expand links
2.  Check that the link identified in step 1 can be identified from link text alone
3.  Find any links on the page that cannot be identified from link text alone
4.  Activate the control identified in step 1
5.  Check that the purpose of the links identified in step 3 can now be identified from link text alone

### Expected Results

-   Checks \#1, \#2, and \#5 are true
