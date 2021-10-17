<a href="https://www.w3.org/" class="logo"><img src="https://www.w3.org/StyleSheets/TR/2016/logos/W3C" alt="W3C" width="72" height="48" /></a>

Accessible Name and Description Computation 1.1
===============================================

W3C Recommendation 18 December 2018
-----------------------------------

This version:  
<a href="https://www.w3.org/TR/2018/REC-accname-1.1-20181218/" class="u-url">https://www.w3.org/TR/2018/REC-accname-1.1-20181218/</a>

Latest published version:  
<https://www.w3.org/TR/accname-1.1/>

Latest editor's draft:  
<https://w3c.github.io/accname/>

Implementation report:  
<https://w3c.github.io/test-results/accname/>

Previous version:  
<https://www.w3.org/TR/2018/PR-accname-1.1-20181018/>

Previous Recommendation:  
<https://www.w3.org/TR/wai-aria-implementation-1.0/>

Editors:  
<span class="p-name fn">Joanmarie Diggs</span> (<a href="https://www.igalia.com/" class="p-org org h-org h-card">Igalia, S.L.</a>)

<span class="p-name fn">Bryan Garaventa</span> (<a href="https://www.levelaccess.com/" class="p-org org h-org h-card">Level Access</a>)

<span class="p-name fn">Michael Cooper</span> (<a href="https://www.w3.org/" class="p-org org h-org h-card">W3C</a>)

 Former editors:   
<span class="p-name fn">Richard Schwerdtfeger</span> (<a href="https://knowbility.org/" class="p-org org h-org h-card">Knowbility</a>) (Editor until October 2017)

<span class="p-name fn">Joseph Scheuhammer</span> (<a href="https://idrc.ocadu.ca/" class="p-org org h-org h-card">Inclusive Design Research Centre, OCAD University</a>) (Editor until May 2017)

<span class="p-name fn">James Craig</span> (<a href="https://www.apple.com/accessibility/" class="p-org org h-org h-card">Apple Inc.</a>) (Editor until May 2016)

<span class="p-name fn">Andi Snow-Weaver</span> (<a href="https://www.ibm.com/" class="p-org org h-org h-card">IBM</a>) (Editor until December 2012)

<span class="p-name fn">Aaron Leventhal</span> (<a href="https://www.ibm.com/" class="p-org org h-org h-card">IBM</a>) (Editor until January 2009)

Please check the [**errata**](https://www.w3.org/WAI/ARIA/1.1/errata/accname) for any errors or issues reported since publication.

See also [**translations**](http://www.w3.org/2003/03/Translations/byTechnology?technology=accname-1.1).

[Copyright](https://www.w3.org/Consortium/Legal/ipr-notice#Copyright) © 2014-2018 [W3C](https://www.w3.org/)<sup>®</sup> ([MIT](https://www.csail.mit.edu/), [ERCIM](https://www.ercim.eu/), [Keio](https://www.keio.ac.jp/), [Beihang](http://ev.buaa.edu.cn/)). W3C [liability](https://www.w3.org/Consortium/Legal/ipr-notice#Legal_Disclaimer), [trademark](https://www.w3.org/Consortium/Legal/ipr-notice#W3C_Trademarks) and [document use](https://www.w3.org/Consortium/Legal/copyright-documents) rules apply.

------------------------------------------------------------------------

Abstract
--------

This document describes how <a href="#dfn-user-agent" class="termref internalDFN">user agents</a> determine the <a href="#dfn-accessible-name" class="termref internalDFN">names</a> and <a href="#dfn-accessible-description" class="termref internalDFN">descriptions</a> of <a href="#dfn-accessible-object" class="termref internalDFN">accessible objects</a> from web content languages. This information is in turn exposed through <a href="#dfn-accessibility-api" class="termref internalDFN">accessibility APIs</a> so that <a href="#dfn-assistive-technology" class="termref internalDFN">assistive technologies</a> can identify these objects and present their names or descriptions to users. Documenting the algorithm through which names and descriptions are to be determined promotes interoperable exposure of these properties among different accessibility APIs and helps to ensure that this information appears in a manner consistent with author intent.

The accessible name and description computation specification defines support that applies across multiple content technologies. This includes accessible name and description provided by general-purpose [WAI-ARIA](https://www.w3.org/TR/wai-aria-1.1/) \[<a href="#bib-wai-aria" class="bibref">WAI-ARIA</a>\] <a href="#dfn-role" class="termref internalDFN">roles</a>, <a href="#dfn-state" class="termref internalDFN">states</a>, and <a href="#dfn-property" class="termref internalDFN">properties</a> as well as features specific to individual content languages.

This document supersedes the accessible name and description guidance in the [WAI-ARIA 1.0 User Agent Implementation Guide](https://www.w3.org/TR/wai-aria-implementation/) \[<a href="#bib-wai-aria-implementation" class="bibref">WAI-ARIA-IMPLEMENTATION</a>\] W3C Recommendation. It is part of the WAI-ARIA suite described in the [WAI-ARIA Overview](https://www.w3.org/WAI/intro/aria.php).

Status of This Document
-----------------------

*This section describes the status of this document at the time of its publication. Other documents may supersede this document. A list of current W3C publications and the latest revision of this technical report can be found in the [W3C technical reports index](https://www.w3.org/TR/) at https://www.w3.org/TR/.*

This is the Accessible Name and Description Computation (Accname) 1.1 [W3C Recommendation](https://www.w3.org/2018/Process-20180201/#RecsW3C) by the [Accessible Rich Internet Applications Working Group](https://www.w3.org/WAI/ARIA/). The Working Group created a [Accname 1.1 Implementation Report](https://w3c.github.io/test-results/accname/) to demonstrate that the specification is implementable. A [history of changes to Accname 1.1](#changelog) is available in the appendix.

To comment on this document, [file an issue in the W3C accname GitHub repository](https://github.com/w3c/accname/issues/new). If this is not feasible, send email to [public-aria@w3.org](mailto:public-aria@w3.org?subject=Comment%20on%20Accname%201.1) ([comment archive](http://lists.w3.org/Archives/Public/public-aria/)). Comments received on the Accname 1.1 Recommendation cannot result in changes to this version of the specification, but may be addressed in errata or future versions of Accname. The Working Group may not make formal responses to comments but future work undertaken by the Working Group may address comments received on this document. In-progress updates to the technology may be viewed in the [publicly visible editors' draft](https://w3c.github.io/accname/).

This document was published by the [Accessible Rich Internet Applications Working Group](https://www.w3.org/WAI/ARIA/) as a Recommendation.

Please see the Working Group's [implementation report](https://w3c.github.io/test-results/accname/).

This document has been reviewed by W3C Members, by software developers, and by other W3C groups and interested parties, and is endorsed by the Director as a W3C Recommendation. It is a stable document and may be used as reference material or cited from another document. W3C's role in making the Recommendation is to draw attention to the specification and to promote its widespread deployment. This enhances the functionality and interoperability of the Web.

This document was produced by a group operating under the [W3C Patent Policy](https://www.w3.org/Consortium/Patent-Policy/). W3C maintains a [public list of any patent disclosures](https://www.w3.org/2004/01/pp-impl/83726/status) made in connection with the deliverables of the group; that page also includes instructions for disclosing a patent. An individual who has actual knowledge of a patent which the individual believes contains [Essential Claim(s)](https://www.w3.org/Consortium/Patent-Policy/#def-essential) must disclose the information in accordance with [section 6 of the W3C Patent Policy](https://www.w3.org/Consortium/Patent-Policy/#sec-Disclosure).

This document is governed by the <a href="https://www.w3.org/2018/Process-20180201/" id="w3c_process_revision">1 February 2018 W3C Process Document</a>.

Table of Contents
-----------------

1.  <a href="#abstract" class="tocxref">Abstract</a>
2.  <a href="#sotd" class="tocxref">Status of This Document</a>
3.  <a href="#intro" class="tocxref"><span class="secno">1. </span>Introduction</a>
4.  <a href="#conformance" class="tocxref"><span class="secno">2. </span>Conformance</a>
    1.  <a href="#rfc-2119-keywords" class="tocxref"><span class="secno">2.1 </span>RFC-2119 Keywords</a>
    2.  <a href="#normative-and-informative-sections" class="tocxref"><span class="secno">2.2 </span>Normative and Informative Sections</a>
5.  <a href="#glossary" class="tocxref"><span class="secno">3. </span>Important Terms</a>
6.  <a href="#mapping_additional_nd" class="tocxref"><span class="secno">4. </span>Name and Description</a>
    1.  <a href="#mapping_additional_nd_name" class="tocxref"><span class="secno">4.1 </span>Name Computation</a>
    2.  <a href="#mapping_additional_nd_description" class="tocxref"><span class="secno">4.2 </span>Description Computation</a>
    3.  <a href="#mapping_additional_nd_te" class="tocxref"><span class="secno">4.3 </span>Accessible Name and Description Computation</a>
        1.  <a href="#terminology" class="tocxref"><span class="secno">4.3.1 </span>Terminology</a>
7.  <a href="#accessible-name-and-description-mapping" class="tocxref"><span class="secno">5. </span>Accessible Name and Description Mapping</a>
8.  <a href="#appendices" class="tocxref"><span class="secno">6. </span>Appendices</a>
    1.  <a href="#changelog" class="tocxref"><span class="secno">6.1 </span>Change Log</a>
        1.  <a href="#substantive-changes-since-the-last-public-working-draft" class="tocxref"><span class="secno">6.1.1 </span>Substantive changes since the <span class="formerLink">last public working draft</span></a>
        2.  <a href="#other-substantive-changes-since-the-wai-aria-1-0-user-agent-implementation-guide-recommendation" class="tocxref"><span class="secno">6.1.2 </span>Other substantive changes since the <span class="formerLink">WAI-ARIA 1.0 User Agent Implementation Guide Recommendation</span></a>
    2.  <a href="#acknowledgements" class="tocxref"><span class="secno">6.2 </span>Acknowledgments</a>
        1.  <a href="#ack_group" class="tocxref"><span class="secno">6.2.1 </span>Participants active in the ARIA WG at the time of publication</a>
        2.  <a href="#ack_others" class="tocxref"><span class="secno">6.2.2 </span>Other ARIA contributors, commenters, and previously active participants</a>
        3.  <a href="#ack_funders" class="tocxref"><span class="secno">6.2.3 </span>Enabling funders</a>
9.  <a href="#references" class="tocxref"><span class="secno">A. </span>References</a>
    1.  <a href="#normative-references" class="tocxref"><span class="secno">A.1 </span>Normative references</a>
    2.  <a href="#informative-references" class="tocxref"><span class="secno">A.2 </span>Informative references</a>

<span class="secno">1. </span>Introduction<a href="#intro" class="self-link"></a>
---------------------------------------------------------------------------------

*This section is non-normative.*

<a href="#dfn-user-agent" class="termref internalDFN">User agents</a> acquire information from the DOM \[<a href="#bib-dom" class="bibref">DOM</a>\] and create a parallel structure called the <a href="#dfn-accessibility-tree" class="termref internalDFN">accessibility tree</a>, made up of <a href="#dfn-accessible-object" class="termref internalDFN">accessible objects</a>. An accessible object provides information about its <a href="#dfn-role" class="termref internalDFN">role</a>, <a href="#dfn-state" class="termref internalDFN">states</a>, and <a href="#dfn-property" class="termref internalDFN">properties</a>. An example is an accessible object whose role is `menuitem`, is currently in an `enabled` state, with a `haspopup` property, indicating that it leads to a sub-menu.

The two properties of accessible objects described in this document are its <a href="#dfn-accessible-name" class="termref internalDFN">accessible name</a> and <a href="#dfn-accessible-description" class="termref internalDFN">accessible description</a>. The name is a short label that provides information about the purpose of the object. An example of an accessible name for a menu item is `New`, signifying that the menu item provides for the creation of new documents, windows, and so on.

The description is a short explanation that further clarifies the nature of the accessible object. It is not always necessary to provide a description if the name is sufficient, but it can help a user better understand the use of the object.

<a href="#dfn-accessibility-api" class="termref internalDFN">Accessibility APIs</a> currently support flat, unstructured strings for accessible names and descriptions. The result of the name/description computation is thus a flat string.

The terms "accessible name" and "accessible description" are used to emphasize that they are properties of <a href="#dfn-accessible-object" class="termref internalDFN">accessible objects</a> as exposed by <a href="#dfn-accessibility-api" class="termref internalDFN">Accessibility APIs</a>. However, they are frequently referred to hereafter as simply "name" and "description".

<span class="secno">2. </span>Conformance<a href="#conformance" class="self-link"></a>
--------------------------------------------------------------------------------------

As well as sections marked as non-normative, all authoring guidelines, diagrams, examples, and notes in this specification are non-normative. Everything else in this specification is normative.

The key word *MUST* is to be interpreted as described in \[<a href="#bib-rfc2119" class="bibref">RFC2119</a>\].

### <span class="secno">2.1 </span>RFC-2119 Keywords<a href="#rfc-2119-keywords" class="self-link"></a>

RFC-2119 keywords are formatted in uppercase and contained in a `strong` element with `class="rfc2119"`. When the keywords shown above are used, but do not share this format, they do not convey formal information in the RFC 2119 sense, and are merely explanatory, i.e., informative. As much as possible, such usages are avoided in this specification.

### <span class="secno">2.2 </span>Normative and Informative Sections<a href="#normative-and-informative-sections" class="self-link"></a>

The indication whether a section is <a href="#dfn-normative" class="termref internalDFN">normative</a> or <a href="#dfn-informative" class="termref internalDFN">non-normative</a> (informative) applies to the entire section including sub-sections.

Informative sections provide information useful to understanding the specification. Such sections may contain examples of recommended practice, but it is not required to follow such recommendations in order to conform to this specification.

<span class="secno">3. </span>Important Terms<a href="#glossary" class="self-link"></a>
---------------------------------------------------------------------------------------

While some terms are defined in place, the following definitions are used throughout this document.

Accessibility API  
Operating systems and other platforms provide a set of interfaces that expose information about <a href="#dfn-object" class="termref internalDFN">objects</a> and <a href="#dfn-event" class="termref internalDFN">events</a> to <a href="#dfn-assistive-technology" class="internalDFN">assistive technologies</a>. Assistive technologies use these interfaces to get information about and interact with those <a href="#dfn-widget" class="termref internalDFN">widgets</a>. Examples of accessibility APIs are [Microsoft Active Accessibility](https://msdn.microsoft.com/en-us/library/ms697270(VS.85).aspx) \[<a href="#bib-msaa" class="bibref">MSAA</a>\], [Microsoft User Interface Automation](https://msdn.microsoft.com/en-us/library/ee684013%28VS.85%29.aspx) \[<a href="#bib-ui-automation" class="bibref">UI-AUTOMATION</a>\], MSAA with [UIA Express](https://msdn.microsoft.com/en-us/library/windows/desktop/dd561898(v=vs.85).aspx) \[<a href="#bib-uia-express" class="bibref">UIA-EXPRESS</a>\], the [Mac OS X Accessibility Protocol](https://developer.apple.com/documentation/appkit/accessibility/nsaccessibility) \[<a href="#bib-axapi" class="bibref">AXAPI</a>\], the [Linux/Unix Accessibility Toolkit](https://developer.gnome.org/atk/unstable/) \[<a href="#bib-atk" class="bibref">ATK</a>\] and [Assistive Technology Service Provider Interface](https://developer.gnome.org/libatspi/stable/) \[<a href="#bib-at-spi" class="bibref">AT-SPI</a>\], and [IAccessible2](https://wiki.linuxfoundation.org/accessibility/iaccessible2/start) \[<a href="#bib-iaccessible2" class="bibref">IAccessible2</a>\].

Accessibility Tree  
Tree of <a href="#dfn-accessible-object" class="termref internalDFN">accessible objects</a> that represents the structure of the user interface (UI). Each node in the accessibility tree represents an element in the UI as exposed through the <a href="#dfn-accessibility-api" class="internalDFN">accessibility API</a>; for example, a push button, a check box, or container.

Accessible Description  
An accessible description provides additional information, related to an interface element, that complements the <a href="#dfn-accessible-name" class="internalDFN">accessible name</a>. The accessible description might or might not be visually perceivable.

Accessible Name  
The accessible name is the name of a user interface element. Each platform <a href="#dfn-accessibility-api" class="internalDFN">accessibility API</a> provides the accessible name property. The value of the accessible name may be derived from a visible (e.g., the visible text on a button) or invisible (e.g., the text alternative that describes an icon) property of the user interface element. See related <a href="#dfn-accessible-description" class="internalDFN">accessible description</a>.

A simple use for the accessible name property may be illustrated by an "OK" button. The text "OK" is the accessible name. When the button receives focus, assistive technologies may concatenate the platform's role description with the accessible name. For example, a screen reader may speak "push-button OK" or "OK button". The order of concatenation and specifics of the role description (e.g., "button", "push-button", "clickable button") are determined by platform <a href="#dfn-accessibility-api" class="termref internalDFN">accessibility API</a>s or <a href="#dfn-assistive-technology" class="internalDFN">assistive technologies</a>.

Accessible object  
A <a href="#dfn-node" class="internalDFN">node</a> in the <a href="#dfn-accessibility-tree" class="internalDFN">accessibility tree</a> of a platform <a href="#dfn-accessibility-api" class="internalDFN">accessibility API</a>. Accessible objects expose various <a href="#dfn-state" class="termref internalDFN">states</a>, <a href="#dfn-property" class="termref internalDFN">properties</a>, and <a href="#dfn-event" class="termref internalDFN">events</a> for use by <a href="#dfn-assistive-technology" class="internalDFN">assistive technologies</a>. In the context of markup languages (e.g., HTML and SVG) in general, and of WAI-ARIA in particular, markup <a href="#dfn-element" class="termref internalDFN">elements</a> and their <a href="#dfn-attribute" class="termref internalDFN">attributes</a> are represented as accessible objects.

Assistive Technologies  
Hardware and/or software that:

-   relies on services provided by a <a href="#dfn-user-agent" class="internalDFN">user agent</a> to retrieve and render Web content
-   works with a user agent or web content itself through the use of APIs, and
-   provides services beyond those offered by the user agent to facilitate user interaction with web content by people with disabilities

This definition may differ from that used in other documents.

Examples of assistive technologies that are important in the context of this document include the following:

-   screen magnifiers, which are used to enlarge and improve the visual readability of rendered text and images;
-   screen readers, which are most-often used to convey information through synthesized speech or a refreshable Braille display;
-   text-to-speech software, which is used to convert text into synthetic speech;
-   speech recognition software, which is used to allow spoken control and dictation;
-   alternate input technologies (including head pointers, on-screen keyboards, single switches, and sip/puff devices), which are used to simulate the keyboard;
-   alternate pointing devices, which are used to simulate mouse pointing and clicking.

Attribute  
In this specification, attribute is used as it is in markup languages. Attributes are structural features added to <a href="#dfn-element" class="termref">elements</a> to provide information about the <a href="#dfn-state" class="termref">states</a> and <a href="#dfn-property" class="termref">properties</a> of the <a href="#dfn-object" class="termref">object</a> represented by the element.

Class  
A set of instance <a href="#dfn-object" class="termref">objects</a> that share similar characteristics.

Element  
In this specification, element is used as it is in markup languages. Elements are the structural elements in markup language that contains the data profile for <a href="#dfn-object" class="termref internalDFN">objects</a>.

Event  
A programmatic message used to communicate discrete changes in the <a href="#dfn-state" class="internalDFN">state</a> of an <a href="#dfn-object" class="internalDFN">object</a> to other objects in a computational system. User input to a web page is commonly mediated through abstract events that describe the interaction and can provide notice of changes to the state of a document object. In some programming languages, events are more commonly known as notifications.

Hidden  
Indicates that the <a href="#dfn-element" class="internalDFN">element</a> is not visible, <a href="#dfn-perceivable" class="internalDFN">perceivable</a>, or interactive to *any* user. An element is considered *hidden* if it or any one of its ancestor elements is not rendered or is explicitly hidden.

Informative  
Content provided for information purposes and not required for conformance. Content required for conformance is referred to as <a href="#dfn-normative" class="internalDFN">normative</a>.

Node  
Basic type of <a href="#dfn-object" class="termref internalDFN">object</a> in the DOM tree or <a href="#dfn-accessibility-tree" class="termref internalDFN">accessibility tree</a>. DOM nodes are further specified as <a href="#dfn-element" class="termref internalDFN">Element</a> or <a href="#dfn-text-node" class="termref internalDFN">Text nodes</a>, among other types. The nodes of an <a href="#dfn-accessibility-tree" class="termref internalDFN">accessibility tree</a> are <a href="#dfn-accessible-object" class="termref internalDFN">accessible objects</a>.

Normative  
Required for conformance. By contrast, content identified as <a href="#dfn-informative" class="internalDFN">informative</a> or "non-normative" is not required for conformance.

Object  
In the context of user interfaces, an item in the perceptual user experience, represented in markup languages by one or more <a href="#dfn-element" class="termref internalDFN">elements</a>, and rendered by <a href="#dfn-user-agent" class="termref internalDFN">user agents</a>.

In the context of programming, the instantiation of one or more <a href="#dfn-class" class="termref internalDFN">classes</a> and interfaces which define the general characteristics of similar objects. An object in an <a href="#dfn-accessibility-api" class="internalDFN">accessibility API</a> may represent one or more DOM objects. <a href="#dfn-accessibility-api" class="termref internalDFN">Accessibility APIs</a> have defined interfaces that are distinct from DOM interfaces.

Perceivable  
Presentable to users in ways they can sense. References in this document relate to [WCAG 2.1 Principle 1: Content must be perceivable](https://www.w3.org/TR/WCAG21/#perceivable) \[<a href="#bib-wcag21" class="bibref">WCAG21</a>\].

Property  
<a href="#dfn-attribute" class="termref internalDFN">Attributes</a> that are essential to the nature of a given <a href="#dfn-object" class="internalDFN">object</a>, or that represent a data value associated with the object. A change of a property may significantly impact the meaning or presentation of an object. Certain properties (for example, <a href="https://www.w3.org/TR/wai-aria-1.1/#aria-multiline" class="property-reference"><code>aria-multiline</code></a>) are less likely to change than <a href="#dfn-state" class="termref">states</a>, but note that the frequency of change difference is not a rule. A few properties, such as <a href="https://www.w3.org/TR/wai-aria-1.1/#aria-activedescendant" class="property-reference"><code>aria-activedescendant</code></a>, <a href="https://www.w3.org/TR/wai-aria-1.1/#aria-valuenow" class="property-reference"><code>aria-valuenow</code></a>, and <a href="https://www.w3.org/TR/wai-aria-1.1/#aria-valuetext" class="property-reference"><code>aria-valuetext</code></a> are expected to change often. See [clarification of states versus properties](https://www.w3.org/TR/wai-aria-1.1/#statevsprop).

Role  
Main indicator of type. This <a href="#dfn-semantics" class="termref internalDFN">semantic</a> association allows tools to present and support interaction with the object in a manner that is consistent with user expectations about other objects of that type.

Semantics  
The meaning of something as understood by a human, defined in a way that computers can process a representation of an <a href="#dfn-object" class="internalDFN">object</a>, such as <a href="#dfn-element" class="termref internalDFN">elements</a> and <a href="#dfn-attribute" class="termref internalDFN">attributes</a>, and reliably represent the object in a way that various humans will achieve a mutually consistent understanding of the object.

State  
A state is a dynamic <a href="#dfn-property" class="termref">property</a> expressing characteristics of an <a href="#dfn-object" class="internalDFN">object</a> that may change in response to user action or automated processes. States do not affect the essential nature of the object, but represent data associated with the object or user interaction possibilities. See [clarification of states versus properties](https://www.w3.org/TR/wai-aria-1.1/#statevsprop).

Text node  
Type of DOM <a href="#dfn-node" class="termref internalDFN">node</a> that represents the textual content of an <a href="#dfn-attribute" class="termref internalDFN">attribute</a> or an <a href="#dfn-element" class="termref internalDFN">element</a>. A Text node has no child nodes.

Tooltip attribute  
Any host language attribute that would result in a user agent generating a tooltip such as in response to a mouse hover in desktop user agents.

User Agent  
Any software that retrieves, renders and facilitates end user interaction with Web content. This definition may differ from that used in other documents.

Widget  
Discrete user interface <a href="#dfn-object" class="termref">object</a> with which the user can interact. Widgets range from simple objects that have one value or operation (e.g., check boxes and menu items), to complex objects that contain many managed sub-objects (e.g., trees and grids).

<span class="secno">4. </span>Name and Description<a href="#mapping_additional_nd" class="self-link"></a>
---------------------------------------------------------------------------------------------------------

The starting point of the name and description computation is a DOM <a href="#dfn-element" class="termref internalDFN">element</a>. The output is a flat, unstructured string that can be as simple as a single word, or a string of space-separated tokens. Examples include `Save` and `Reload from disk`.

An important factor is the <a href="#dfn-element" class="termref internalDFN">element</a>'s <a href="#dfn-role" class="termref internalDFN">role</a>, that determines which content contributes to the name string. Roles have a `nameFrom` RDF property, with two possible values:

author  
name is generated from values provided by the author in explicit markup features such as the `aria-label` and `aria-labelledby` <a href="#dfn-attribute" class="termref internalDFN">attribute</a>, or a host language labeling mechanism, such as the `alt` or `title` <a href="#dfn-attribute" class="termref internalDFN">attribute</a> in HTML, or the `desc` <a href="#dfn-element" class="termref internalDFN">element</a> in SVG.

contents  
name is generated from the <a href="#dfn-text-node" class="termref internalDFN">Text nodes</a> associated with the <a href="#dfn-element" class="termref internalDFN">element</a>. Although this may be allowed in addition to "author" in some <a href="#dfn-role" class="termref internalDFN">roles</a>, "content" is used only if higher priority "author" features are not provided. Priority is defined by the [accessible name and description computation](#mapping_additional_nd_te) algorithm.

The <a href="https://www.w3.org/TR/wai-aria/#" class="specref">Accessible Rich Internet Applications (WAI-ARIA) 1.1</a> \[<a href="#bib-wai-aria" class="bibref">WAI-ARIA</a>\] specification provides lists of roles that support <a href="https://www.w3.org/TR/wai-aria/#namefromauthor" class="specref">name from author</a> and <a href="https://www.w3.org/TR/wai-aria/#namefromcontent" class="specref">name from content</a>.

### <span class="secno">4.1 </span>Name Computation<a href="#mapping_additional_nd_name" class="self-link"></a>

<a href="#dfn-user-agent" class="termref internalDFN">User agents</a> *MUST* compute an <a href="#dfn-accessible-name" class="termref internalDFN">accessible name</a> using the rules outlined below in the section titled [Accessible Name and Description Computation](#mapping_additional_nd_te).

### <span class="secno">4.2 </span>Description Computation<a href="#mapping_additional_nd_description" class="self-link"></a>

If <a href="https://www.w3.org/TR/wai-aria/#aria-describedby" class="property-reference"><code>aria-describedby</code></a> is present, <a href="#dfn-user-agent" class="termref internalDFN">user agents</a> *MUST* compute the accessible description by concatenating the text alternatives for elements referenced by an `aria-describedby` attribute on the current element. The text alternatives for the referenced elements are computed using a number of methods, outlined below in the section titled [Accessible Name and Description Computation](#mapping_additional_nd_te).

### <span class="secno">4.3 </span>Accessible Name and Description Computation<a href="#mapping_additional_nd_te" class="self-link"></a>

The accessible name and description computation is used to generate both the <a href="#dfn-accessible-name" class="termref internalDFN">accessible name</a> and <a href="#dfn-accessible-description" class="termref internalDFN">accessible description</a>. There are different rules provided for several different types of <a href="#dfn-element" class="termref internalDFN">elements</a>, <a href="#dfn-node" class="termref internalDFN">nodes</a>, and combinations of markup. Text alternatives are built up, when appropriate, from all the relevant content contained within an <a href="#dfn-element" class="termref internalDFN">element</a>. This is accomplished via steps 2B and 2F, which are recursive, using the full set of rules to retrieve text from its own children or nodes it references.

The purpose of the computation is to create a <a href="#dfn-perceivable" class="termref internalDFN">perceivable</a> label or description for alternative presentations, in the form of a flat string of space separated textual tokens.

#### <span class="secno">4.3.1 </span>Terminology<a href="#terminology" class="self-link"></a>

Root node  
The DOM <a href="#dfn-node" class="termref internalDFN">node</a> or <a href="#dfn-element" class="termref internalDFN">element</a> for which the text alternative is sought.

Current node  
The DOM <a href="#dfn-node" class="termref internalDFN">node</a> currently traversed to compute the `root node`'s text equivalent. Initially, the `current node` is the `root node`, but at later stages is either some descendant of the `root node`, or another referenced node.

Flat string  
A string of characters where all carriage returns, newlines, tabs, and form-feeds are replaced with a single space, and multiple spaces are reduced to a single space. The string contains only character data; it does not contain any markup.

Total accumulated text  
The text equivalent computed up to, but not including the `current node`.

Accumulated text  
Text accumulated at a step or sequence of steps described below. It is temporary storage for those steps.

Result  
The text equivalent computed at one of the steps described below.

Append the result, without a space, to X  
-   If X is empty, copy the `result` to X.
-   If X is non-empty, copy the `result` to the end of X.

Append the result, with a space, to X  
-   If X is empty, copy the `result` to X.
-   If X is non-empty, add a space to the end of X and then copy the `result` to X after the space.

Prepend result, without a space, to X  
-   If X is empty, copy the `result` to X.
-   If X is non-empty, copy the `result` to the start of X.

Prepend the result, with a space, to X  
-   If X is empty, copy the `result` to X.
-   If X is non-empty, copy the `result` to the start of X, and add a space after the copy.

The text alternative for a given element is computed as follows:

1.  <span id="step1">Initialize: Set the `root node` to the given element, the `current node` to the `root node`, and the `total accumulated text` to the empty string ("").</span>
2.  <span id="step2">Compute the text alternative for the `current node`:</span>

    1.  <span id="step2A">If the `current node` is <a href="#dfn-hidden" class="termref internalDFN">hidden</a> **and is not** directly referenced by `aria-labelledby` or `aria-describedby`, nor directly referenced by a native host language text alternative <a href="#dfn-element" class="termref internalDFN">element</a> (e.g. `label` in HTML) or <a href="#dfn-attribute" class="termref internalDFN">attribute</a>, return the empty string.</span>
        Comment:
        By default, <a href="#dfn-assistive-technology" class="termref internalDFN">assistive technologies</a> do not relay hidden information, but an author can explicitly override that and include hidden text as part of the <a href="#dfn-accessible-name" class="termref internalDFN">accessible name</a> or <a href="#dfn-accessible-description" class="termref internalDFN">accessible description</a> by using `aria-labelledby` or `aria-describedby`.

    2.  <span id="step2B">Otherwise:</span>
        -   if computing a <a href="#dfn-accessible-name" class="termref internalDFN">name</a>, and the `current node` has an `aria-labelledby` <a href="#dfn-attribute" class="termref internalDFN">attribute</a> that contains at least one valid IDREF, and the `current node` is not already part of an `aria-labelledby` traversal, process its IDREFs in the order they occur:
        -   or, if computing a <a href="#dfn-accessible-description" class="termref internalDFN">description</a>, and the `current node` has an `aria-describedby` <a href="#dfn-attribute" class="termref internalDFN">attribute</a> that contains at least one valid IDREF, and the `current node` is not already part of an `aria-describedby` traversal, process its IDREFs in the order they occur:
            1.  <span id="step2B.i">Set the `accumulated text` to the empty string.</span>
            2.  <span id="step2B.ii">For each IDREF:</span>
                1.  <span id="step2B.ii.a">Set the `current node` to the node referenced by the IDREF.</span>
                2.  <span id="step2B.ii.b">Compute the text alternative of the `current node` beginning with step 2. Set the `result` to that text alternative.</span>
                3.  <span id="step2B.ii.c">Append the `result`, with a space, to the `accumulated text`.</span>
            3.  <span id="step2B.iii">Return the `accumulated text`.</span>

        Example:
        The following example shows the meaning of the clause "… and the `current node` is not already part of an `aria-labelledby` traversal …" .

        -   `element1`'s <a href="#dfn-accessible-name" class="termref internalDFN">accessible name</a> is "hello" because this is a first traversal of its `aria-labelledby`, leading to `element3`.
        -   `element2` has no <a href="#dfn-accessible-name" class="termref internalDFN">accessible name</a>. The computation involves a first traversal of its `aria-labelledby` leading to `element1`, but `element1`'s `aria-labelledby` is not subsequently followed.

        <a href="#ex-1-example-1-element1-id-el1-aria-labelledby-el3-element2-id-el2-aria-labelledby-el1-element3-id-el3-hello-element3" class="self-link">Example 1</a>

            <element1 id="el1" aria-labelledby="el3" />
            <element2 id="el2" aria-labelledby="el1" />
            <element3 id="el3"> hello </element3>

    3.  <span id="step2C">Otherwise, if computing a <a href="#dfn-accessible-name" class="termref internalDFN">name</a>, and if the `current node` has an `aria-label` <a href="#dfn-attribute" class="termref internalDFN">attribute</a> whose value is not the empty string, nor, when trimmed of white space, is not the empty string:</span>
        -   If traversal of the `current node` is due to recursion **and** the `current node` is an embedded control as defined in step 2E, ignore `aria-label` and skip to rule 2E.
        -   Otherwise, return the value of `aria-label`.

        Example:
        The following example shows the interaction of `aria-labelledby` and `aria-label` when a <a href="#dfn-node" class="termref internalDFN">node</a> has an `aria-labelledby` that refers to itself. The `<span role="button">` elements have the <a href="#dfn-accessible-name" class="termref internalDFN">accessible names</a> "Delete Documentation.pdf" and "Delete HolidayLetter.pdf", respectively.

        <a href="#ex-2-example-2-h1-files-h1-ul-li-a-id-file_row1-href-files-documentation-pdf-documentation-pdf-a-span-role-button-tabindex-0-id-del_row1-aria-label-delete-aria-labelledby-del_row1-file_row1-span-li-li-a-id-file_row2-href-files-holidayletter-pdf-holidayletter-pdf-a-span-role-button-tabindex-0-id-del_row2-aria-label-delete-aria-labelledby-del_row2-file_row2-span-li-ul" class="self-link">Example 2</a>

            <h1>Files</h1>
            <ul>
              <li>
                <a id="file_row1" href="./files/Documentation.pdf">Documentation.pdf</a>
                <span role="button" tabindex="0" id="del_row1" aria-label="Delete" aria-labelledby="del_row1 file_row1"></span>
              </li>
              <li>
                <a id="file_row2" href="./files/HolidayLetter.pdf">HolidayLetter.pdf</a>
                <span role="button" tabindex="0" id="del_row2" aria-label="Delete" aria-labelledby="del_row2 file_row2"></span>
              </li>
            </ul>

    4.  <span id="step2D">Otherwise, if the `current node`'s native markup provides an <a href="#dfn-attribute" class="termref internalDFN">attribute</a> (e.g. `title`) or <a href="#dfn-element" class="termref internalDFN">element</a> (e.g. HTML `label`) that defines a text alternative, return that alternative in the form of a `flat string` as defined by the host language, unless the element is marked as presentational (`role="presentation"` or `role="none"`).</span>
        Comment:
        For example, in HTML, the `img` element's `alt` attribute defines a text alternative string, and the `label` element provides text for the referenced form element. In SVG2, the `desc` and `title` elements provide a description of their parent element.

    5.  <span id="step2E">Otherwise, if the `current node` is a control embedded within the label (e.g. the `label` element in HTML or any element directly referenced by `aria-labelledby`) for another <a href="#dfn-widget" class="termref internalDFN">widget</a>, where the user can adjust the embedded control's value, then include the embedded control as part of the text alternative in the following manner:</span>
        -   If the embedded control has role <a href="https://www.w3.org/TR/wai-aria/#textbox" class="role-reference">textbox</a>, return its value.
        -   If the embedded control has role menu <a href="https://www.w3.org/TR/wai-aria/#button" class="role-reference">button</a>, return the text alternative of the button.
        -   If the embedded control has role <a href="https://www.w3.org/TR/wai-aria/#combobox" class="role-reference">combobox</a> or <a href="https://www.w3.org/TR/wai-aria/#listbox" class="role-reference">listbox</a>, return the text alternative of the chosen <a href="https://www.w3.org/TR/wai-aria/#option" class="role-reference">option</a>.
        -   If the embedded control has role <a href="https://www.w3.org/TR/wai-aria/#range" class="role-reference">range</a> (e.g., a <a href="https://www.w3.org/TR/wai-aria/#spinbutton" class="role-reference">spinbutton</a> or <a href="https://www.w3.org/TR/wai-aria/#slider" class="role-reference">slider</a>):
            -   If the `aria-valuetext` property is present, return its value,
            -   Otherwise, if the `aria-valuenow` property is present, return its value,
            -   Otherwise, use the value as specified by a host language attribute.

        Example:
        Consider a <a href="https://www.w3.org/TR/wai-aria/#checkbox" class="role-reference">check box</a> label that contains a text input field: "Flash the screen \[input\] times". If the user has entered "5" for the embedded <a href="https://www.w3.org/TR/wai-aria/#textbox" class="role-reference">textbox</a>, the complete label is "Flash the screen 5 times", e.g.:

        <a href="#ex-3-example-3-div-role-checkbox-aria-checked-false-flash-the-screen-span-role-textbox-aria-multiline-false-5-span-times-div" class="self-link">Example 3</a>

            <div role="checkbox" aria-checked="false">Flash the screen <span role="textbox" aria-multiline="false"> 5 </span> times</div>

    6.  <span id="step2F">Otherwise, if the `current node's` <a href="#dfn-role" class="termref internalDFN">role</a> allows <a href="https://www.w3.org/TR/wai-aria/#namefromcontent" class="specref">name from content</a>, or if the `current node` is referenced by `aria-labelledby`, `aria-describedby`, or is a native host language text alternative <a href="#dfn-element" class="termref internalDFN">element</a> (e.g. `label` in HTML), or is a descendant of a native host language text alternative <a href="#dfn-element" class="termref internalDFN">element</a>:</span>

        1.  <span id="step2F.i">Set the `accumulated text` to the empty string.</span>
        2.  <span id="step2F.ii">Check for CSS generated textual content associated with the `current node` and include it in the `accumulated text`. The CSS [`:before` and `:after`](https://www.w3.org/TR/CSS2/generate.html#before-after-content) pseudo elements \[<a href="#bib-css2" class="bibref">CSS2</a>\] can provide textual content for <a href="#dfn-element" class="termref internalDFN">elements</a> that have a content model.</span>
            -   For `:before` pseudo elements, <a href="#dfn-user-agent" class="termref internalDFN">User agents</a> *MUST* prepend CSS textual content, without a space, to the textual content of the `current node`.
            -   For `:after` pseudo elements, <a href="#dfn-user-agent" class="termref internalDFN">User agents</a> *MUST* append CSS textual content, without a space, to the textual content of the `current node`.
        3.  <span id="step2F.iii">For each child node of the `current node`:</span>
            1.  <span id="step2F.iii.a">Set the `current node` to the child node.</span>
            2.  <span id="step2F.iii.b">Compute the text alternative of the `current node` beginning with step 2. Set the `result` to that text alternative.</span>
            3.  <span id="step2F.iii.c">Append the `result` to the `accumulated text`.</span>
        4.  <span id="step2F.iv">Return the `accumulated text`.</span>

        **Important**: Each <a href="#dfn-node" class="termref internalDFN">node</a> in the subtree is consulted only once. If text has been collected from a descendant, but is referenced by another IDREF in some descendant node, then that second, or subsequent, reference is not followed. This is done to avoid infinite loops.

        Comment:
        This step can apply to the child nodes themselves, which means the computation is recursive and results in text collected from all the elements in the `current node`'s subtree, no matter how deep it is. However, any given descendant <a href="#dfn-node" class="termref internalDFN">node</a>'s text alternative can result from higher precedent markup described in steps B through D above, where "Namefrom: author" attributes provide the text alternative for the entire subtree.

    7.  <span id="step2G">Otherwise, if the `current node` is a <a href="#dfn-text-node" class="termref internalDFN">Text node</a>, return its textual contents.</span>
    8.  <span id="step2H">Otherwise, if the `current node` is a descendant of an element whose <a href="#dfn-accessible-name" class="termref internalDFN">Accessible Name</a> or <a href="#dfn-accessible-description" class="termref internalDFN">Accessible Description</a> is being computed, and contains descendants, proceed to 2F.i.</span>
    9.  <span id="step2I">Otherwise, if the `current node` has a <a href="#dfn-tooltip-attribute" class="termref internalDFN">Tooltip attribute</a>, return its value.</span>
        Comment:
        Tooltip attributes are used only if nothing else, including subtree content, has provided results.

    Append the `result` of each step above, with a space, to the `total accumulated text`.

After all steps are completed, the `total accumulated text` is used as the <a href="#dfn-accessible-name" class="termref internalDFN">accessible name</a> or <a href="#dfn-accessible-description" class="termref internalDFN">accessible description</a> of the <a href="#dfn-element" class="termref internalDFN">element</a> that initiated the computation.

<span class="secno">5. </span>Accessible Name and Description Mapping<a href="#accessible-name-and-description-mapping" class="self-link"></a>
----------------------------------------------------------------------------------------------------------------------------------------------

Information concerning name and description accessibility API mappings, including relationships, such as labelled-by/label-for and described-by/description-for, is documented in the <a href="https://www.w3.org/TR/core-aam-1.1/" class="core-mapping">Core Accessibility API Mappings</a> specification \[<a href="#bib-core-aam-1.1" class="bibref">CORE-AAM-1.1</a>\]. See the mapping table entries for <a href="https://www.w3.org/TR/core-aam-1.1/#ariaLabel" class="core-mapping"><code>aria-label</code></a>, <a href="https://www.w3.org/TR/core-aam-1.1/#ariaLabelledBy" class="core-mapping"><code>aria-labelledby</code></a>, and <a href="https://www.w3.org/TR/core-aam-1.1/#ariaDescribedBy" class="core-mapping"><code>aria-describedby</code></a>.

<span class="secno">6. </span>Appendices<a href="#appendices" class="self-link"></a>
------------------------------------------------------------------------------------

### <span class="secno">6.1 </span>Change Log<a href="#changelog" class="self-link"></a>

#### <span class="secno">6.1.1 </span>Substantive changes since the [last public working draft](https://www.w3.org/TR/2014/WD-accname-aam-1.1-20141211/)<a href="#substantive-changes-since-the-last-public-working-draft" class="self-link"></a>

-   10-April-2018: Treat listbox in the same fashion as combobox in step 2E, i.e. returning the text alternative of the chosen option.
-   5-March-2018: Remove mapping table content as it is redundant to what is in Core AAM.
-   9-August-2017: Added interim step to be able to process recursions of elements who are descendants of an element whose name/description is being computed
-   27-July-2017: Modify step 2F to handle elements that are descendants of text alternative elements in host languages.
-   08-June-2017: Remove list style information from the accessible name computation.

#### <span class="secno">6.1.2 </span>Other substantive changes since the [WAI-ARIA 1.0 User Agent Implementation Guide Recommendation](https://www.w3.org/TR/2014/REC-wai-aria-implementation-20140320/)<a href="#other-substantive-changes-since-the-wai-aria-1-0-user-agent-implementation-guide-recommendation" class="self-link"></a>

-   04-Apr-2016: Added new UIA FullDescription property for accessible description mapping.
-   05-Nov-2015: Removed all MSAA+UIA Express mappings.
-   10-Jun-2015: Moved special case of unlabeled `<img>` to HTML-AAM.
-   05-Jan-2015: Glossary entry for "value" removed; removed links to that entry.

### <span class="secno">6.2 </span>Acknowledgments<a href="#acknowledgements" class="self-link"></a>

*This section is non-normative.*

The following people contributed to the development of this document.

#### <span class="secno">6.2.1 </span>Participants active in the ARIA WG at the time of publication<a href="#ack_group" class="self-link"></a>

-   Ann Abbott (Invited Expert)
-   Irfan Ali (Educational Testing Service)
-   Amelia Bellamy-Royds (Invited Expert)
-   Michiel Bijl (Invited Expert)
-   David Bolter (Mozilla Foundation)
-   Bogdan Brinza (Microsoft Corporation)
-   Shari Butler (Pearson plc)
-   Thaddeus Cambron (Invited Expert)
-   Michael Cooper (W3C Staff)
-   James Craig (Apple Inc.)
-   Joanmarie Diggs (Igalia)
-   John Foliot (Deque Systems, Inc.)
-   Bryan Garaventa (SSB BART Group)
-   Matt Garrish (DAISY Consortium)
-   Becky Gibson (Invited Expert)
-   Glen Gordon (The Paciello Group, LLC)
-   Jon Gunderson (University of Illinois at Urbana-Champaign)
-   Matthew King (Facebook)
-   JaEun Jemma Ku (University of Illinois at Urbana-Champaign)
-   Charles LaPierre (Benetech)
-   Aaron Leventhal (Google, Inc.)
-   Dominic Mazzoni (Google, Inc.)
-   Shane McCarron (Invited Expert, Aptest)
-   Jan McSorley (Pearson plc)
-   James Nurthen (Oracle Corporation)
-   Ian Pouncey (The Paciello Group, LLC)
-   Ruoxi Ran (W3C Staff)
-   Janina Sajka (Invited Expert, The Linux Foundation)
-   Stefan Schnabel (SAP SE)
-   Lisa Seeman-Kestenbaum (Invited Expert)
-   Tzviya Siegman (Wiley)
-   Alexander Surkov (Mozilla Foundation)
-   Job van Achterberg (Invited Expert)
-   Evan Yamanishi (W. W. Norton)
-   Jason White (Educational Testing Service)

#### <span class="secno">6.2.2 </span>Other ARIA contributors, commenters, and previously active participants<a href="#ack_others" class="self-link"></a>

-   Shadi Abou-Zahra (W3C)
-   Jim Allan (TSB)
-   Jonny Axelsson (Opera Software)
-   David Baron (Mozilla Foundation)
-   Art Barstow (Nokia Corporation)
-   Simon Bates
-   Christy Blew (University of Illinois at Urbana-Champaign)
-   Chris Blouch (AOL)
-   Judy Brewer (W3C/MIT)
-   Mark Birbeck (Sidewinder Labs)
-   Sally Cain (Royal National Institute of Blind People (RNIB))
-   Gerardo Capiel (Benetech)
-   Ben Caldwell (Trace)
-   Sofia Celic-Li
-   Jaesik Chang (Samsung Electronics Co., Ltd.)
-   Alex Qiang Chen (University of Manchester)
-   Charles Chen (Google, Inc.)
-   Christian Cohrs
-   Deborah Dahl
-   Erik Dahlström (Opera Software)
-   Dimitar Denev (Frauenhofer Gesellschaft)
-   Micah Dubinko (Invited Expert)
-   Mandana Eibegger
-   Beth Epperson (Websense)
-   Fred Esch (IBM Corporation)
-   Donald Evans (AOL)
-   Steve Faulkner (The Paciello Group, LLC)
-   Chris Fleizach (Apple Inc.)
-   Kelly Ford (Microsoft Corporation)
-   Geoff Freed (Invited Expert, NCAM)
-   Christopher Gallelo (Microsoft Corporation)
-   Billy Gregory (The Paciello Group, LLC)
-   Karl Groves (The Paciello Group, LLC)
-   Birkir Gunnarsson (Deque Systems, Inc.)
-   Kentarou Fukuda (IBM Corporation)
-   Bryan Garaventa
-   Guido Geloso
-   Ali Ghassemi
-   Alfred S. Gilman
-   Andres Gonzalez (Adobe Systems Inc.)
-   Scott González (JQuery Foundation)
-   James Graham
-   Georgios Grigoriadis (SAP AG)
-   Jeff Grimes (Oracle)
-   Loretta Guarino Reid (Google, Inc.)
-   Markus Gylling (DAISY Consortium)
-   Markku Hakkinen (Educational Testing Service)
-   Katie Haritos-Shea (Knowbility)
-   Barbara Hartel
-   James Hawkins (Google, Inc.)
-   Benjamin Hawkes-Lewis
-   Sean Hayes (Microsoft Corporation)
-   Mona Heath (University of Illinois at Urbana-Champaign)
-   Jan Heck
-   Shawn Henry
-   Tina Homboe
-   Nicholas Hoyt
-   John Hrvatin (Microsoft Corporation)
-   Takahiro Inada
-   Masayasu Ishikawa (W3C)
-   Jim Jewitt
-   Kenny Johar (Microsoft Corporation)
-   Shilpi Kapoor (BarrierBreak Technologies)
-   Masahiko Kaneko (Microsoft Corporation)
-   Marjolein Katsma
-   Susann Keohane (IBM Corporation)
-   George Kerscher (International Digital Publishing Forum)
-   Jason Kiss (Department of Internal Affairs, New Zealand Government)
-   Todd Kloots
-   Jamie Knight (British Broadcasting Corporation)
-   Johannes Koch
-   Gerard K. Cohen
-   Sam Kuper
-   Earl Johnson (Sun)
-   Jael Kurz
-   Rajesh Lal (Nokia Corporation)
-   Diego La Monica (International Webmasters Association / HTML Writers Guild (IWA-HWG))
-   Gez Lemon (International Webmasters Association / HTML Writers Guild (IWA-HWG))
-   Alex Li (SAP)
-   Chris Lilley
-   Thomas Logan (HiSoftware Inc.)
-   Brian Loh
-   William Loughborough (Invited Expert)
-   Linda Mao (Microsoft)
-   David MacDonald (Invited Expert, CanAdapt Solutions Inc.)
-   Carolyn MacLeod
-   Anders Markussen (Opera Software)
-   Krzysztof Maczyński
-   Matthew May (Adobe Systems Inc.)
-   Mark McCarthy
-   Charles McCathie Nevile (Yandex)
-   Heather Migliorisi (Invited Expert)
-   Mary Jo Mueller (IBM Corporation)
-   Alexandre Morgaut (4D)
-   Ann Navarro (Invited Expert)
-   Joshue O Connor (Invited Expert, CFIT)
-   Artur Ortega (Microsoft Corporation)
-   Sailesh Panchang (Deque)
-   Lisa Pappas (Society for Technical Communication (STC))
-   Marta Pawlowlska (Samsung Electronics Co., Ltd.)
-   Dave Pawson (RNIB)
-   Steven Pemberton (CWI Amsterdam)
-   Simon Pieters (Opera Software)
-   Jean-Bernard Piot (4D)
-   David Poehlman, Simon Pieters (Opera Software)
-   Sarah Pulis (Media Access Australia)
-   T.V. Raman (Google, Inc.)
-   Jan Richards
-   Gregory Rosmaita (Invited Expert)
-   Tony Ross (Microsoft Corporation)
-   Alex Russell (Dojo Foundation) (
-   Mark Sadecki (Invited Expert)
-   Mario Sánchez Prada (Samsung Electronics Co., Ltd. and Gnome Foundation)
-   Martin Schaus (SAP AG)
-   Doug Schepers (W3C)
-   Cynthia Shelly (Microsoft Corporation)
-   Joseph Scheuhammer (Invited Expert, Inclusive Design Research Centre, OCAD University)
-   Matthias Schmitt
-   Richard Schwerdtfeger (IBM, Knowbility)
-   Marc Silbey (Microsoft Corporation)
-   Leif Halvard Sili
-   Henri Sivonen (Mozilla)
-   Michael Smith (W3C)
-   Andi Snow-Weaver (IBM Corporation)
-   Ville Skyttä
-   Henny Swan (BBC)
-   Neil Soiffer (Design Science)
-   Vitaly Sourikov
-   Mike Squillace (IBM)
-   Maciej Stachowiak (Apple Inc.)
-   Christophe Strobbe
-   Suzanne Taylor (Pearson plc)
-   Terrill Thompson
-   David Todd
-   Gregg Vanderheiden (Invited Expert, Trace)
-   Anne van Kesteren
-   Léonie Watson (The Paciello Group, LLC)
-   Wen He (Tencent)
-   Wu Wei (W3C / RITT)
-   Ryan Williams (Oracle)
-   Tom Wlodkowski
-   Sam White (Apple Inc.)
-   Marco Zehe (Mozilla Foundation)
-   Gottfried Zimmermann (Invited Expert, Access Technologies Group)

#### <span class="secno">6.2.3 </span>Enabling funders<a href="#ack_funders" class="self-link"></a>

This publication has been funded in part with U.S. Federal funds from the Department of Education, National Institute on Disability, Independent Living, and Rehabilitation Research (NIDILRR), initially under contract number ED-OSE-10-C-0067 and currently under contract number HHSP23301500054C. The content of this publication does not necessarily reflect the views or policies of the U.S. Department of Education, nor does mention of trade names, commercial products, or organizations imply endorsement by the U.S. Government.

<span class="secno">A. </span>References<a href="#references" class="self-link"></a>
------------------------------------------------------------------------------------

### <span class="secno">A.1 </span>Normative references<a href="#normative-references" class="self-link"></a>

\[AT-SPI\]  
[Assistive Technology Service Provider Interface](https://developer.gnome.org/libatspi/stable/). The GNOME Project. URL: <https://developer.gnome.org/libatspi/stable/>

\[ATK\]  
[ATK - Accessibility Toolkit](https://developer.gnome.org/atk/stable/). The GNOME Project. URL: <https://developer.gnome.org/atk/stable/>

\[AXAPI\]  
[The NSAccessibility Protocol for macOS](https://developer.apple.com/documentation/appkit/nsaccessibility). Apple, Inc. URL: <https://developer.apple.com/documentation/appkit/nsaccessibility>

\[CORE-AAM-1.1\]  
[Core Accessibility API Mappings 1.1](https://www.w3.org/TR/core-aam-1.1/). Joanmarie Diggs; Joseph Scheuhammer; Richard Schwerdtfeger; Michael Cooper; Andi Snow-Weaver; Aaron Leventhal. W3C. 14 December 2017. W3C Recommendation. URL: <https://www.w3.org/TR/core-aam-1.1/>

\[CSS2\]  
[Cascading Style Sheets Level 2 Revision 1 (CSS 2.1) Specification](https://www.w3.org/TR/CSS2/). Bert Bos; Tantek Çelik; Ian Hickson; Håkon Wium Lie et al. W3C. 7 June 2011. W3C Recommendation. URL: <https://www.w3.org/TR/CSS2/>

\[IAccessible2\]  
[IAccessible2](https://www.linuxfoundation.org/collaborate/workgroups/accessibility/iaccessible2). Linux Foundation. URL: <https://www.linuxfoundation.org/collaborate/workgroups/accessibility/iaccessible2>

\[MSAA\]  
[Microsoft Active Accessibility (MSAA) 2.0](https://msdn.microsoft.com/en-us/library/ms697707.aspx). Microsoft Corporation. URL: <https://msdn.microsoft.com/en-us/library/ms697707.aspx>

\[RFC2119\]  
[Key words for use in RFCs to Indicate Requirement Levels](https://tools.ietf.org/html/rfc2119). S. Bradner. IETF. March 1997. Best Current Practice. URL: <https://tools.ietf.org/html/rfc2119>

\[UI-AUTOMATION\]  
[UI Automation](https://msdn.microsoft.com/en-us/library/ee684009%28v=vs.85%29.aspx). Microsoft Corporation. URL: <https://msdn.microsoft.com/en-us/library/ee684009%28v=vs.85%29.aspx>

\[UIA-EXPRESS\]  
[The IAccessibleEx Interface](https://msdn.microsoft.com/en-us/library/windows/desktop/dd561898%28v=vs.85%29.aspx). Microsoft Corporation. URL: <https://msdn.microsoft.com/en-us/library/windows/desktop/dd561898%28v=vs.85%29.aspx>

\[WAI-ARIA\]  
[Accessible Rich Internet Applications (WAI-ARIA) 1.1](https://www.w3.org/TR/wai-aria-1.1/). Joanmarie Diggs; Shane McCarron; Michael Cooper; Richard Schwerdtfeger; James Craig. W3C. 14 December 2017. W3C Recommendation. URL: <https://www.w3.org/TR/wai-aria-1.1/>

\[WAI-ARIA-IMPLEMENTATION\]  
[WAI-ARIA 1.0 User Agent Implementation Guide](https://www.w3.org/TR/wai-aria-implementation/). Joseph Scheuhammer; Michael Cooper. W3C. 20 March 2014. W3C Recommendation. URL: <https://www.w3.org/TR/wai-aria-implementation/>

\[WCAG21\]  
[Web Content Accessibility Guidelines (WCAG) 2.1](https://www.w3.org/TR/WCAG21/). Andrew Kirkpatrick; Joshue O Connor; Alastair Campbell; Michael Cooper. W3C. 5 June 2018. W3C Recommendation. URL: <https://www.w3.org/TR/WCAG21/>

### <span class="secno">A.2 </span>Informative references<a href="#informative-references" class="self-link"></a>

\[DOM\]  
[DOM Standard](https://dom.spec.whatwg.org/). Anne van Kesteren. WHATWG. Living Standard. URL: <https://dom.spec.whatwg.org/>

[↑](#title)
