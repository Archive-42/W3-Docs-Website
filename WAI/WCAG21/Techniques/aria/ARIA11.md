-   [Contents](https://www.w3.org/WAI/WCAG21/Techniques/#techniques "Table of Contents")
-   [Intro](https://www.w3.org/WAI/WCAG21/Techniques/#introduction "Introduction to Techniques")
-   [Previous Technique: ARIA10](ARIA10)
-   [Next Technique: ARIA12](ARIA12)

On this page:

-   [Important Information about Techniques](#important-information)
-   [Applicability](#applicability)
-   [Description](#description)
-   [Examples](#examples)
-   [Related Resources](#resources)
-   [Related Techniques](#related)
-   [Tests](#tests)

Using ARIA landmarks to identify regions of a page
==================================================

Important Information about Techniques
--------------------------------------

See [Understanding Techniques for WCAG Success Criteria](https://www.w3.org/WAI/WCAG21/Understanding/understanding-techniques) for important information about the usage of these informative techniques and how they relate to the normative WCAG 2.1 success criteria. The Applicability section explains the scope of the technique, and the presence of techniques for a specific technology does not imply that the technology can be used in all situations to create content that meets WCAG 2.1.

Applicability
-------------

Technologies that support [Accessible Rich Internet Applications (WAI-ARIA)](https://www.w3.org/TR/wai-aria/).

This technique relates to:

-   [Success Criterion 1.3.1: Info and Relationships](https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships) (Sufficient)
-   [Success Criterion 1.3.6: Identify Purpose](https://www.w3.org/WAI/WCAG21/Understanding/identify-purpose) (Sufficient)
-   [Success Criterion 2.4.1: Bypass Blocks](https://www.w3.org/WAI/WCAG21/Understanding/bypass-blocks) (Sufficient when used with an unwritten technique)

Description
-----------

The purpose of this technique is to provide programmatic access to sections of a web page. Landmark roles (or "landmarks") programmatically identify sections of a page. Landmarks help assistive technology (AT) users orient themselves to a page and help them navigate easily to various sections of a page.

They also provide an easy way for users of assistive technology to skip over blocks of content that are repeated on multiple pages and notify them of programmatic structure of a page. For instance, if there is a common navigation menu found on every page, landmark roles (or "landmarks") can be used to skip over it and navigate from section to section. This will save assistive technology users and keyboard users the trouble and time of tabbing through a large amount of content to find what they are really after, much like a traditional "skip links" mechanism. (Refer to User Agent Notes above for specifics of AT support). A blind user who may be familiar with a news site's menu, and is only interested in getting to the top story could easily navigate to the "main" landmark, and bypass dozens of menu links. In another circumstance, a user who is blind may want to quickly find a navigation menu, and can do so by jumping to the navigation landmark.

Landmarks also can help sighted keyboard-only users navigate to sections of a page using a [browser plugin](https://www.paciellogroup.com/blog/2013/07/enabling-landmark-based-keyboard-navigation-in-firefox/).

Landmarks are inserted into the page using the role attribute on an element that marks the section. The value of the attribute is the name of the landmark. These role values are listed below:

-   banner: A region that contains the prime heading or internal title of a page.
-   complementary: Any section of the document that supports the main content, yet is separate and meaningful on its own.
-   contentinfo: A region that contains information about the parent document such as copyrights and links to privacy statements.
-   form: A region of the document that represents a collection of form-associated elements, some of which can represent editable values that can be submitted to a server for processing.
-   main: Main content in a document. In almost all cases a page will have only one role="main".
-   navigation: A collection of links suitable for use when navigating the document or related documents.
-   search: The search tool of a Web document.

There are cases when a particular landmark role could be used more than once on a page, such as on primary and secondary navigation menus. In these cases, identical roles should be disambiguated from each other using a valid technique for labelling regions (see examples below).

Landmarks should supplement native semantic markup such as HTML headings, lists and other structural markup. Landmarks are interpretable by WAI-ARIA-aware assistive technologies and are not exposed by browsers directly to users.

It is a best practice to include ALL content on the page in landmarks, so that screen reader users who rely on them to navigate from section to section do not lose track of content.

Examples
--------

### Example 1: Simple landmarks

The following example shows how landmarks might be added to an HTML4 or XHTML 1.0 document:

    <div id="header" role="banner">A banner image and introductory title</div>
    <div id="sitelookup" role="search">....</div>
    <div id="nav" role="navigation">...a list of links here ... </div>
    <div id="content" role="main"> ... Ottawa is the capital of Canada ...</div>
    <div id="rightsideadvert" role="complementary">....an advertisement here...</div>
    <div id="footer" role="contentinfo">(c)The Freedom Company, 123 Freedom Way, Helpville, USA</div>

### Example 2: Multiple landmarks of the same type and aria-labelledby

The following example shows a best practice of how landmarks might be added to an HTML4 or XHTML 1.0 document in situations where there are more than two of the same type of landmark on the same page. For instance, if a navigation role is used multiple times on a Web page, each instance may have a unique label specified using `aria-labelledby`:

    <div id="leftnav" role="navigaton" aria-labelledby="leftnavheading">
    <h2 id="leftnavheading">Institutional Links</h2>
    <ul><li>...a list of links here ...</li> </ul></div>
    <div id="rightnav" role="navigation" aria-labelledby="rightnavheading">
    <h2 id="rightnavheading">Related topics</h2>
    <ul><li>...a list of links here ...</li></ul></div>

### Example 3: Multiple landmarks of the same type and aria-label

The following example shows a best practice of how landmarks might be added to an HTML4 or XHTML 1.0 document in situations where there are more than two of the same type of landmark on the same page, and there is no existing text on the page that can be referenced as the label.

    <div id="leftnav" role="navigaton" aria-label="Primary">
    <ul><li>...a list of links here ...</li></ul> </div>
    <div id="rightnav" role="navigation" aria-label="Secondary">
    <ul><li>...a list of links here ...</li> </ul></div>

### Example 4: Search form

The following example shows a search form with a "search" landmark. The search role typically goes on the form field or a div surrounding the search form.

    <form role="search">
    <label for="s6">search</label><input id="s6" type="text" size="20">
    ...
    </form> 

Resources
---------

Resources are for information purposes only, no endorsement implied.

-   [WAI-ARIA Authoring Practices 1.1](https://www.w3.org/TR/wai-aria-practices/)
-   [Accessible Rich Internet Applications (WAI-ARIA) 1.0, Using WAI-ARIA Roles](https://www.w3.org/TR/wai-aria/#usage_intro)
-   [Accessible Rich Internet Applications (WAI-ARIA) 1.0, Supported States and Properties](https://www.w3.org/TR/wai-aria/#states_and_properties)
-   [Enabling landmark-based keyboard navigation in Firefox](https://www.paciellogroup.com/blog/2013/07/enabling-landmark-based-keyboard-navigation-in-firefox/)
-   [Landmarks browser extension](http://matatk.agrip.org.uk/landmarks/)

Related Techniques
------------------

-   [G1: Adding a link at the top of each page that goes directly to the main content area](https://www.w3.org/WAI/WCAG21/Techniques/general/G1)
-   [G124: Adding links at the top of the page to each area of the content](https://www.w3.org/WAI/WCAG21/Techniques/general/G124)
-   [H69: Providing heading elements at the beginning of each section of content](https://www.w3.org/WAI/WCAG21/Techniques/html/H69)
-   [SCR28: Using an expandable and collapsible menu to bypass block of content](https://www.w3.org/WAI/WCAG21/Techniques/client-side-script/SCR28)

Tests
-----

### Procedure

1.  Examine each element with a [landmark role](https://www.w3.org/TR/wai-aria/#landmark_roles).
2.  Examine whether the landmark role attribute is applied to the section of the page that corresponds with that role. (i.e., the "navigation" role is applied to a navigation section, the "main" role is applied to where the main content begins.)

### Expected Results

-   \#1 and \#2 are true.
