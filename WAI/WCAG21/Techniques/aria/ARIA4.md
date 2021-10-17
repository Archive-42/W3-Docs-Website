-   [Contents](https://www.w3.org/WAI/WCAG21/Techniques/#techniques "Table of Contents")
-   [Intro](https://www.w3.org/WAI/WCAG21/Techniques/#introduction "Introduction to Techniques")
-   [Previous Technique: ARIA2](ARIA2)
-   [Next Technique: ARIA5](ARIA5)

On this page:

-   [Important Information about Techniques](#important-information)
-   [Applicability](#applicability)
-   [Description](#description)
-   [Examples](#examples)
-   [Related Resources](#resources)
-   [Tests](#tests)

Using a WAI-ARIA role to expose the role of a user interface component
======================================================================

Important Information about Techniques
--------------------------------------

See [Understanding Techniques for WCAG Success Criteria](https://www.w3.org/WAI/WCAG21/Understanding/understanding-techniques) for important information about the usage of these informative techniques and how they relate to the normative WCAG 2.1 success criteria. The Applicability section explains the scope of the technique, and the presence of techniques for a specific technology does not imply that the technology can be used in all situations to create content that meets WCAG 2.1.

Applicability
-------------

Technologies that support [Accessible Rich Internet Applications (WAI-ARIA)](https://www.w3.org/TR/wai-aria/).

This technique relates to [Success Criterion 4.1.2: Name, Role, Value](https://www.w3.org/WAI/WCAG21/Understanding/name-role-value) (Sufficient when used with [G10: Creating components using a technology that supports the accessibility notification of changes](../general/G10)).

Description
-----------

The objective of this technique is to define the role of an element using the `role` attribute with one of the non-abstract values defined in the [WAI-ARIA Definition of Roles](https://www.w3.org/TR/wai-aria/#role_definitions). The WAI-ARIA specification provides an informative description of each role, how it relates to other roles, and the states and properties for each role. When rich internet applications define new user interface widgets, exposing the roles enables users to understand the widget and how to interact with it.

Examples
--------

### Example 1: A simple toolbar

The WAI-ARIA Authoring Practices document [demonstrates a toolbar containing three buttons](https://www.w3.org/TR/wai-aria-practices-1.1/#accessiblewidget). The `div` element has a role of "toolbar", and the `img` elements have "button" roles:

        <div role="toolbar"
          tabindex="0" 
          id="customToolbar" 
          onkeydown="return optionKeyEvent(event);"
          onkeypress="return optionKeyEvent(event);"
          onclick="return optionClickEvent(event);"
          onblur="hideFocus()"
          onfocus="showFocus()"
          > 
          <img src="img/btn1.gif" 
               role="button" 
               tabindex="-1" 
               alt="Home" 
               id="b1" 
               title="Home">
          <img src="img/btn2.gif" 
               role="button" 
               tabindex="-1" 
               alt="Refresh" 
               id="b2" 
               title="Refresh">
         <img src="img/btn3.gif" 
               role="button" 
               tabindex="-1" 
               alt="Help" 
               id="b3" 
               title="Help"> 
     </div>  
                            

The Authoring Practices Toolbar Pattern [provides a working example of a toolbar.](https://www.w3.org/TR/wai-aria-practices-1.1/#toolbar).

### Example 2: A Tree Widget

The WAI-ARIA Authoring Practices [demonstrates a tree widget](https://www.w3.org/TR/wai-aria-practices-1.1/#exampletree). Note the use of the roles "tree", "treeitem", and "group" to identify the tree and its structure. Here is a simplified excerpt from the code:

    <ul role="tree" tabindex="0">
      <li role="treeitem">Birds</li>
      <li role="treeitem">Cats
        <ul role="group">
          <li role="treeitem">Siamese</li>
          <li role="treeitem">Tabby</li>
        </ul>
      </li>
      <li role="treeitem">Dogs
        <ul role="group">
          <li role="treeitem">Small Breeds
            <ul role="group">
              <li role="treeitem">Chihuahua</li>
              <li role="treeitem">Italian Greyhound</li>
              <li role="treeitem">Japanese Chin</li>
            </ul>
          </li>
          <li role="treeitem">Medium Breeds
            <ul role="group">
              <li role="treeitem">Beagle</li>
              <li role="treeitem">Cocker Spaniel</li>
              <li role="treeitem">Pit Bull</li>
            </ul>
          </li>
          <li role="treeitem">Large Breeds
            <ul role="group">
              <li role="treeitem">Afghan</li>
              <li role="treeitem">Great Dane</li>
              <li role="treeitem">Mastiff</li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>

The Authoring Practices Tree View Pattern [provides a working example of a tree](https://www.w3.org/TR/wai-aria-practices-1.1/#TreeView).

Resources
---------

Resources are for information purposes only, no endorsement implied.

-   [Accessible Rich Internet Applications (WAI-ARIA), Roles](https://www.w3.org/TR/wai-aria/#usage_intro)
-   [Accessible Rich Internet Applications (WAI-ARIA), The Roles Model](https://www.w3.org/TR/wai-aria/#roles)
-   [HTML Accessibility API Mappings 1.0](https://www.w3.org/TR/html-aam-1.0/)
-   [WAI-ARIA 1.1 Authoring Practices](https://www.w3.org/TR/wai-aria-practices-1.1/)
-   [Notes on using ARIA in HTML](https://www.w3.org/TR/aria-in-html/)

Tests
-----

### Procedure

For a user interface component using the `role` attribute:

1.  Check that the value of the role attribute is one of the non-abstract roles from the values defined in the WAI-ARIA specification.
2.  Check that the characteristics of the user interface component are described by the role.

### Expected Results

-   \#1 and \#2 are true.
