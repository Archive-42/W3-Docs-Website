[<img src="https://www.w3.org/StyleSheets/TR/2016/logos/W3C" alt="W3C" width="72" height="48" />](http://www.w3.org/)

[Understanding WCAG 2.0](Overview.html)

[Skip to Content (Press Enter)](#maincontent)

<span id="top"></span>

-   **[Contents](Overview.html#contents "Table of Contents")**
-   **[Intro](intro.html "Introduction to Understanding WCAG 2.0")**
-   [**Previous:** SC 3.2.4 \[Consistent Identification\]](consistent-behavior-consistent-functionality.html "Understanding SC  3.2.4 [Consistent Identification]")
-   [**Next:** Guideline 3.3 \[Input Assistance\]](minimize-error.html "Understanding Guideline  3.3 [Input Assistance]")

On this page:

-   [Intent](#consistent-behavior-no-extreme-changes-context-intent-head)
-   [Examples](#consistent-behavior-no-extreme-changes-context-examples-head)
-   [Related Resources](#consistent-behavior-no-extreme-changes-context-resources-head)
-   [Techniques & Failures](#consistent-behavior-no-extreme-changes-context-techniques-head)
-   [Key terms](#key-terms)

<span id="maincontent">-</span>

<span id="consistent-behavior-no-extreme-changes-context"></span> **Change on Request**<span class="screenreader">:</span> Understanding SC 3.2.5
=================================================================================================================================================

> **[3.2.5](http://www.w3.org/TR/2008/REC-WCAG20-20081211/#consistent-behavior-no-extreme-changes-context) Change on Request:** <a href="#context-changedef" class="termref">Changes of context</a> are initiated only by user request or a <a href="#mechanismdef" class="termref">mechanism</a> is available to turn off such changes. (Level AAA)

Intent of this Success Criterion
--------------------------------

The intent of this Success Criterion is to encourage design of Web content that gives users full control of changes of context. This Success Criterion aims to eliminate potential confusion that may be caused by unexpected changes of context such as automatic launching of new windows, automatic submission of forms after selecting an item from a list, etcetera. Such unexpected changes of context may cause difficulties for people with motor impairments, people with low vision, people who are blind, and people with certain cognitive limitations.

Some types of change of context are not disruptive to some users, or actively benefit some users. For example, single-switch users rely on context changes that are animated by the system, and the preferences of low-vision users may vary depending on how much of the content they can see at once and how much of the session structure they can retain in working memory. Some types of content, such as slide shows, require the ability to change context in order to provide the intended user experience. Content that initiates changes of context automatically only when user preferences allow can conform to this Success Criterion.

*Note:* It is possible for more than one change of context to occur simultaneously. For example, clicking on a link which automatically opens a new window is an example of two separate changes of context related to the change in content and to the change in the viewport (window). The change in the content in this case is initiated by user request when they click on the link, but unless the user can be aware that the link will open in a new window then that change of context cannot be regarded as user-initiated.

### Specific Benefits of Success Criterion 3.2.5:

-   Individuals who are unable to detect changes of context or may not realize that the context has changed are less likely to become disoriented while navigating a site. For example:

    -   individuals who are blind or have low vision may have difficulty knowing when a visual context change has occurred, such as a new window popping up. In this case, warning users of context changes in advance minimizes confusion when the user discovers that the back button no longer behaves as expected.

-   Some individuals with low vision, with reading and intellectual disabilities, and who have difficulty interpreting visual cues may benefit from additional cues in order to detect changes of context.

-   People with certain **cognitive limitations** do not get confused if automatic redirects are performed by the Web server instead of the browser.

Examples of Success Criterion 3.2.5
-----------------------------------

-   **an "update now" button**

    Instead of automatically updating the content, the author provides an "Update now" button that requests a refresh of the content.

-   **An automatic redirection**

    A user is automatically redirected from an old page to a new page in such a way that he or she never realizes the redirect has occurred.

Related Resources
-----------------

Resources are for information purposes only, no endorsement implied.

-   [Use standard redirects: don't break the back button!](http://www.w3.org/QA/Tips/reback) (W3C QA Tip).

-   [HTTP/1.1 Status Code Definitions: Redirection 3xx](http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html#sec10.3).

Techniques and Failures for Success Criterion 3.2.5 - Change on Request
-----------------------------------------------------------------------

Each numbered item in this section represents a technique or combination of techniques that the WCAG Working Group deems sufficient for meeting this Success Criterion. However, it is not necessary to use these particular techniques. For information on using other techniques, see [Understanding Techniques for WCAG Success Criteria](http://www.w3.org/TR/2016/NOTE-UNDERSTANDING-WCAG20-20161007/understanding-techniques.html), particularly the "Other Techniques" section.

### Sufficient Techniques

**Instructions:** Select the situation below that matches your content. Each situation includes techniques or combinations of techniques that are known and documented to be sufficient for that situation.

#### <span id="consistent-behavior-no-extreme-changes-context-situation-44-head"></span> Situation A: If the Web page allows automatic updates:

1.  <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/G76" class="tech-ref">G76: Providing a mechanism to request an update of the content instead of updating automatically</a>

#### <span id="consistent-behavior-no-extreme-changes-context-situation-45-head"></span> Situation B: If automatic redirects are possible:

1.  <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/SVR1" class="tech-ref">SVR1: Implementing automatic redirects on the server side instead of on the client side</a> (SERVER)

2.  <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/G110" class="tech-ref">G110: Using an instant client-side redirect</a> using one of the following techniques:

    -   <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/H76" class="tech-ref">H76: Using meta refresh to create an instant client-side redirect</a> (HTML)

#### <span id="consistent-behavior-no-extreme-changes-context-situation-46-head"></span> Situation C: If the Web page uses pop-up windows:

1.  Including pop-up windows using one of the following techniques:

    -   <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/H83" class="tech-ref">H83: Using the target attribute to open a new window on user request and indicating this in link text</a> (HTML)

    -   <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/SCR24" class="tech-ref">SCR24: Using progressive enhancement to open new windows on user request</a> (Scripting)

#### <span id="consistent-behavior-no-extreme-changes-context-situation-47-head"></span> Situation D: If using an onchange event on a select element:

1.  <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/SCR19" class="tech-ref">SCR19: Using an onchange event on a select element without causing a change of context</a> (Scripting)

### Additional Techniques (Advisory) for 3.2.5

Although not required for conformance, the following additional techniques should be considered in order to make content more accessible. Not all techniques can be used or would be effective in all situations.

-   Opening new windows by providing normal hyperlinks without the target attribute (future link), because many user agents allow users to open links in another window or tab.

-   <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/G200" class="tech-ref">G200: Opening new windows and tabs from a link only when necessary</a>

### Common Failures for SC 3.2.5

The following are common mistakes that are considered failures of Success Criterion 3.2.5 by the WCAG Working Group.

-   <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/F60" class="tech-ref">F60: Failure of Success Criterion 3.2.5 due to launching a new window when a user enters text into an input field</a>

-   <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/F61" class="tech-ref">F61: Failure of Success Criterion 3.2.5 due to complete change of main content through an automatic update that the user cannot disable from within the content</a>

-   <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/F9" class="tech-ref">F9: Failure of Success Criterion 3.2.5 due to changing the context when the user removes focus from a form element</a>

-   <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/F22" class="tech-ref">F22: Failure of Success Criterion 3.2.5 due to opening windows that are not requested by the user</a>

-   <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/F52" class="tech-ref">F52: Failure of Success Criterion 3.2.1 and 3.2.5 due to opening a new window as soon as a new page is loaded</a>

-   <a href="http://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/F41" class="tech-ref">F41: Failure of Success Criterion 2.2.1, 2.2.4, and 3.2.5 due to using meta refresh to reload the page</a>

Key Terms
---------

 <span id="context-changedef"></span> changes of context  
major changes in the content of the <a href="http://www.w3.org/TR/2008/REC-WCAG20-20081211/#webpagedef" class="termref">Web page</a> that, if made without user awareness, can disorient users who are not able to view the entire page simultaneously

Changes in context include changes of:

1.  <a href="http://www.w3.org/TR/2008/REC-WCAG20-20081211/#useragentdef" class="termref">user agent</a>;

2.  <a href="http://www.w3.org/TR/2008/REC-WCAG20-20081211/#viewportdef" class="termref">viewport</a>;

3.  focus;

4.  <a href="http://www.w3.org/TR/2008/REC-WCAG20-20081211/#contentdef" class="termref">content</a> that changes the meaning of the <a href="http://www.w3.org/TR/2008/REC-WCAG20-20081211/#webpagedef" class="termref">Web page</a>.

*Note:* A change of content is not always a change of context. Changes in content, such as an expanding outline, dynamic menu, or a tab control do not necessarily change the context, unless they also change one of the above (e.g., focus).

*Example:* Opening a new window, moving focus to a different component, going to a new page (including anything that would look to a user as if they had moved to a new page) or significantly re-arranging the content of a page are examples of changes of context.

 <span id="mechanismdef"></span> mechanism  
<a href="http://www.w3.org/TR/2008/REC-WCAG20-20081211/#processdef" class="termref">process</a> or technique for achieving a result

*Note 1:* The mechanism may be explicitly provided in the content, or may be <a href="http://www.w3.org/TR/2008/REC-WCAG20-20081211/#reliedupondef" class="termref">relied upon</a> to be provided by either the platform or by <a href="http://www.w3.org/TR/2008/REC-WCAG20-20081211/#useragentdef" class="termref">user agents</a>, including <a href="http://www.w3.org/TR/2008/REC-WCAG20-20081211/#atdef" class="termref">assistive technologies</a>.

*Note 2:* The mechanism needs to meet all success criteria for the conformance level claimed.

-   **[Top](#top)**
-   **[Contents](Overview.html#contents "Table of Contents")**
-   **[Intro](intro.html "Introduction to Understanding WCAG 2.0")**
-   [**Previous:** SC 3.2.4 \[Consistent Identification\]](consistent-behavior-consistent-functionality.html "Understanding SC  3.2.4 [Consistent Identification]")
-   [**Next:** Guideline 3.3 \[Input Assistance\]](minimize-error.html "Understanding Guideline  3.3 [Input Assistance]")

This Web page is part of [Understanding WCAG 2.0: A guide to understanding and implementing WCAG 2.0](Overview.html) (see the [latest version of this document](http://www.w3.org/TR/UNDERSTANDING-WCAG20/consistent-behavior-no-extreme-changes-context.html)). The entire document is also available as a [single HTML file](complete.html). See the [The WCAG 2.0 Documents](http://www.w3.org/WAI/intro/wcag20) for an explanation of how this document fits in with other Web Content Accessibility Guidelines (WCAG) 2.0 documents. To send public comments, please follow the [Instructions for Commenting on WCAG 2.0 Documents](http://www.w3.org/WAI/WCAG20/comments/).

[Copyright](http://www.w3.org/Consortium/Legal/ipr-notice#Copyright) © 2016 [W3C](http://www.w3.org/)<sup>®</sup> ([MIT](http://www.csail.mit.edu/), [ERCIM](http://www.ercim.eu/), [Keio](http://www.keio.ac.jp/), [Beihang](http://ev.buaa.edu.cn/)). W3C [liability](http://www.w3.org/Consortium/Legal/ipr-notice#Legal_Disclaimer), [trademark](http://www.w3.org/Consortium/Legal/ipr-notice#W3C_Trademarks) and [document use](http://www.w3.org/Consortium/Legal/copyright-documents) rules apply.
