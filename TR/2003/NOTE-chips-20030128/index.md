[<img src="http://www.w3.org/Icons/w3c_home" alt="W3C" width="72" height="48" />](http://www.w3.org/)

Common HTTP Implementation Problems
===================================

W3C Note 28 January 2003
------------------------

This version:  
<http://www.w3.org/TR/2003/NOTE-chips-20030128/>

Latest version:  
<http://www.w3.org/TR/chips>

Previous version:  
n/a

Translations of this document:  
<http://www.w3.org/QA/translations#chips>

Techniques for this document:  
<http://www.w3.org/QA/2002/12/chips-techniques>

Editor:  
[Olivier Théreaux](http://www.w3.org/People/olivier/), W3C

Authors and contributors:  
See [Acknowledgments](#acknowledgments).

[Copyright](http://www.w3.org/Consortium/Legal/ipr-notice#Copyright) © 2003 [W3C](http://www.w3.org/)<sup>®</sup> ([MIT](http://www.lcs.mit.edu/), [ERCIM](http://www.ercim.org/), [Keio](http://www.keio.ac.jp/)), All Rights Reserved. W3C [liability](http://www.w3.org/Consortium/Legal/ipr-notice#Legal_Disclaimer), [trademark](http://www.w3.org/Consortium/Legal/ipr-notice#W3C_Trademarks), [document use](http://www.w3.org/Consortium/Legal/copyright-documents) and [software licensing](http://www.w3.org/Consortium/Legal/copyright-software) rules apply.

------------------------------------------------------------------------

<span id="abstract">Abstract</span>
-----------------------------------

This document is a set of good practices to improve implementations of HTTP and related standards as well as their use. It explains a few basic concepts, points out common mistakes and misbehaviors, and suggests "best practices".

This document does **not** incriminate any specific product. W3C does not track bugs or errors in implementations. That information is generally tracked by the vendors themselves, or third parties.

<span id="sotd">Status of this document</span>
----------------------------------------------

### <span id="sotd-pub-status">Publication status</span>

This document is the first public version of a Note, published on January 28th, 2003, and made available for discussion only by the editor and authors as part of their work as W3C Team participants in the [Quality Assurance](http://www.w3.org/QA/) [Activity](http://www.w3.org/QA/Activity). Publication of this Note by W3C does not imply endorsement by W3C, including the W3C Team and Membership.

This document may be updated, replaced, or obsoleted by other documents at any time.

### <span id="sotd-comments">Comments</span>

No formal commitment is made by W3C to invest additional resources in topics addressed by this Note. However, comments are welcome and the W3C [Quality Assurance](http://www.w3.org/QA/) Team may publish an amended version should the amount and quality of the received comments prove it worthwhile or necessary.

Please send comments to the [publicly archived](http://lists.w3.org/Archives/Public/www-qa/) mailing-list of the [Quality Assurance Interest Group](http://www.w3.org/QA/IG/): <www-qa@w3.org>.

A list of [acknowledged errors and proposed corrections](http://www.w3.org/QA/2002/12/chips-errata) can be found at http://www.w3.org/QA/2002/12/chips-errata.

### <span id="sotd-translat">Translation</span>

Translation of this document is welcome. However, before starting a translation of this document, please be sure to read the [information on translations](http://www.w3.org/Consortium/Legal/IPR-FAQ.html#translate), in our [Copyright FAQ](http://www.w3.org/Consortium/Legal/IPR-FAQ.html), and check the [list of existing translations](http://www.w3.org/QA/translations#chips) of this document (available at http://www.w3.org/QA/translations\#chips). .

### <span id="sotd-othertr">Other W3C Technical Reports and publications</span>

A list of current [W3C technical reports and publications](http://www.w3.org/TR/), including Working Drafts and Notes, can be found at http://www.w3.org/TR/.

------------------------------------------------------------------------

<span id="contents">Table of Contents</span>
--------------------------------------------

-   [Introduction](#intro)
    -   [Scope of this document](#scope)
        -   [Organization of this document : Guidelines, checkpoints](#organization)
        -   [Targets associated with the checkpoints](#cp-target)
        -   [An example of guideline and checkpoint](#glcpex)
    -   [Conformance to this document](#conformance)
    -   [Techniques related to this note](#techniques)
-   [1. Understanding URIs](#uri)
    -   [Guideline 1: Choose URIs wisely](#gl1)
    -   [Guideline 2: Allow URI management](#gl2)
    -   [Guideline 3: Use independent URIs](#gl3)
    -   [Guideline 4: Use standard redirects for content that changes](#gl4)
    -   [Guideline 5: Provide indexing agents with useful information](#gl5)
    -   [Guideline 6: Provide appropriate caching information](#gl6)
-   [2. Serving content appropriately](#content)
    -   [Guideline 7: Server-driven content negotiation](#gl7)
    -   [Guideline 8: Provide useful metadata in addition to content negotiation](#gl8)
    -   [Guideline 9: Provide default and fall-back solutions](#gl9)
    -   [Guideline 10: Serve resources with correct content-type and character encoding information](#gl10)
    -   [Guideline 11: Use flexible technology instead of client sniffing/blocking](#gl11)
    -   [Guideline 12: Enrich and Enhance](#gl12)
-   [Tabular checklist of guidelines and checkpoints](#checklists)
-   [Acknowledgments](#acknowledgments)
-   [References](#references)

------------------------------------------------------------------------

<span id="intro">Introduction</span>
------------------------------------

HTTP and URIs are the basis of the World Wide Web, yet they are often misunderstood, and their implementations and uses are sometimes incomplete or incorrect.

This document tries to improve this situation by providing a set of good practices to improve implementations of HTTP and related standards (Web servers, server-side Web engines), as well as their use.

This document only deals with the server-side aspect of HTTP, people looking for HTTP implementation problems in Web user agents should have a look at the user-agent counterpart of this document : "[Common User-Agent Problems](/TR/cuap.html)" \[[CUAP](#ref-CUAP)\].

### <span id="scope">Scope of this document</span>

This document is a set of known problems and/or good practices for HTTP implementations and their use, aimed at:

-   developers implementing Web servers or proxies,
-   developers implementing server-side scripting languages and engines, web content management or generation systems, etc. (referred to, across this document, as "Server-side engine developers"),
-   and webmasters, Web site managers (referred to, across this document, as "Content Managers").

Unless specifically mentioned, what is referred throughout this document as "HTTP" is RFC2616, a.k.a. HTTP/1.1 \[[RFC2616](#ref-RFC2616)\].

#### Organization of this document : Guidelines, checkpoints

This document's organization is inspired from WAI guidelines, especially [UAAG](http://www.w3.org/TR/UAAG10/) .

This document is divided into 12 guidelines and associated checkpoints. Each guideline is a general good practice, whereas the associated checkpoints are practical applications of the guideline. Checkpoints are themselves divided in one or more provision(s).

A guideline can, and will in most cases, have several associated checkpoints.

#### Targets associated with the checkpoints

Checkpoints and their provisions are tagged according to their [primary target](#scope-targets).

-   <span id="target-expl-si">Checkpoints targeted at server (Web servers or proxies) implementors are tagged as <span class="cp-target">SI</span>,</span>
-   <span id="target-expl-ss">Checkpoints targeted at server-side engine (server-side scripting languages and engines, web content management or generation systems, etc.) developers are tagged as <span class="cp-target">SS</span>,</span>
-   <span id="target-expl-cm">Checkpoints targeted at content managers (webmasters, Web site managers) are tagged as <span class="cp-target">CM</span>.</span>

If a checkpoint is applicable to several or all of these targets, it will have several tags.The target of a checkpoint is the sum of the target of its provisions.

#### An example of guideline and checkpoint

Here is an example of a guideline, with an associated checkpoint. Note the way they are presented, the multiple tags for the multiple targets of the checkpoint, etc.:

### Guideline 0 (example): <span id="gl-example">Show, don't tell</span>

<span class="cp-number">0.1: </span> <span class="cp-title">Example</span> <span class="cp-target"> [SS](#target-expl-ss) </span> <span class="cp-target"> [CM](#target-expl-cm) </span>

An example can be worth thousands of explanations.

1.  <span class="cp-title">sample provision for this checkpoint</span> <span class="cp-target"> [CM](#target-expl-cm) </span>

    Here is a sample checkpoint text, within a sample guideline, with the actual markup used for guidelines and checkpoints.

2.  <span class="cp-title">another sample provision for this checkpoint</span> <span class="cp-target"> [SS](#target-expl-ss) </span> <span class="cp-target"> [CM](#target-expl-cm) </span>

    In our example, the checkpoint has two provisions.

    <span class="example-good">Example</span>:  
    Checkpoints may include example, too.

### <span id="conformance">Conformance to this document</span>

**This document is informative**.

This document has no conformance *per se*, but since it is about implementation and use of normative specifications (such as HTTP/1.1), one should consider following this set of guidelines as a good step toward conformance to these specifications.

When possible, normative references will be mentioned for each checkpoint.

This document uses RFC 2119 \[[RFC2119](#ref-RFC2119)\] keywords (capitalized MUST, MAY, SHOULD etc.) when referring to behaviors clearly defined by a normative specification. When not capitalized, these words should be interpreted as regular language and not as RFC2119 keywords.

### <span id="techniques">Techniques related to this note</span>

As specified in the [abstract](#abstract), This document does not incriminate any specific product. W3C does not generally track bugs or errors in implementations. However, we welcome implementors and advanced users of such technologies to contribute to this document by providing techniques related to this note's applicable guidelines and checkpoints for a specific implementation.

Contributions are welcome in the [**publicly archived**](http://lists.w3.org/Archives/Public/www-qa/) mailing-list of the [Quality Assurance Interest Group](http://www.w3.org/QA/IG/): [www-qa@w3.org](mailto:@w3.org). The [public archives for this list](http://lists.w3.org/Archives/Public/www-qa/) acts as a repository of contributions. A [list of acknowledged contributions](http://www.w3.org/QA/2002/12/chips-techniques) is available at http://www.w3.org/QA/2002/12/chips-techniques.

------------------------------------------------------------------------

1.<span id="uri">Understanding URIs</span>
------------------------------------------

We shall start by explaining in details URIs, and their underlying concepts.

URIs are defined in:

-   [RFC1630 : "Universal Resource Identifiers in WWW"](http://www.ietf.org/rfc/rfc1630.txt) \[[RFC1630](#ref-RFC1630)\], and
-   [RFC2396 :"Uniform Resource Identifiers (URI): Generic Syntax"](http://www.ietf.org/rfc/rfc2396.txt) \[[RFC2396](#ref-RFC2396)\].

A common mistake, responsible for many HTTP implementations problems, is to think this is equivalent to a filename within a computer system. This is wrong. URIs have, conceptually, nothing to do with a file system. One should remember that at all times when dealing with the World Wide Web.

To understand properly what a URI is, one has to think of the World Wide Web as a giant warehouse with an enormous amount of merchandise stored in boxes.

In this warehouse, a URI is not "row 12, 42nd box". A URI is not "that big black box over there", nor the content of the box. The URI is, exactly "The toothbrush can be found at row 12, 42nd box".

A URI is, actually, a *reference to a resource, with fixed and independent semantics*. An interpretation of this definition is that the URI is some sort of serial number for one of the many merchandises in the warehouse. "Fixed semantics" means that we know that in a box referenced by this serial number, there will be a specific product (we'll use a toothbrush for our metaphor). **Always**. We know neither the color nor the shape of the toothbrush, but we are certain that whenever and however we *dereference* the URI (which means, whatever way one (whoever) chooses to learn which box is referenced by the URI , the resource will **always** be a toothbrush.

Note that the URI is not **exactly** a serial number, since a serial number does not have any specific semantic, and it can be a reference to multiple instances.

Also, if you upgrade from toothbrush to a newer version of the toothbrush ("toothbrush v2"), the serial number may change. However, its definition "our toothbrush" will not change. One may thus think of the URI as being the identification of a specific semantic, and the HTTP [`ETag`](http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.19) (\[[RFC2616](#ref-RFC2616)\] section 14.19) being the real serial number.

The URI http://www.example.com/products/toothbrush is then a fixed reference to a specific semantic, rather than being a serial number.

Note also that the HTTP Etag can be shared by identical resources that have different URIs. For example, if `http://mirror1.example.org/foo` and `http://mirror2.example.org/foo` share the same ETags, you can then deduct that those are equivalent resources.

The warehouse metaphor pointed out three major points about URIs:

1.  a URI is a reference to a resource
2.  The reference has fixed semantics
3.  The reference has independent semantics

The fixed semantics of a URI is one of the most important, yet often overlooked, concepts about URIs.

[Tim Berners-Lee](http://www.w3.org/People/Berners-Lee/), creator of the World Wide Web, has written in 1998 an article named "[Cool URIs don't change](http://www.w3.org/Provider/Style/URI.html)" \[[COOLURIs](#ref-COOLURIs)\] stressing out this point and explaining how to use URIs properly.

Thanks to our warehouse metaphor, it is obvious that URIs should not change: people looking for a resource will have a lot of trouble finding it if the actual references for the resource changes, hence making the original reference pointing to... nothing.

This is all the more important on the Web (more than in our warehouse example) because the Web is built upon hyperlinks, which themselves use URIs. When URIs are broken, following hyperlinks ( or "bookmarks", which are a form of hyperlinks ) does not lead to the expected resource. In other words, from a server point of view, this means that the resource would miss some traffic... Traffic being the final aim of any content provider (as selling toothbrushes is the final goal of the warehouse owner), behaviors resulting in a loss of traffic should therefore be avoided.

As Tim Berners-Lee points out, “When you change a URI on your server, you can never completely tell who will have links to the old URI. They might have made links from regular Web pages. They might have bookmarked your page. They might have scrawled the URI in the margin of a letter to a friend.”. In other words, as Jacob Nielsen's writes, “Persistent URLs Attract Links, Link-rot equals lost business”.

We have seen why one should avoid breaking URIs. The following guidelines focus on techniques and strategies to avoid breaking URIs, or to fix them.

### Guideline 1: <span id="gl1">Choose URIs wisely</span>

This section summarizes, paraphrases and extends the section called "So what should I do? Designing URIs" in [Cool URIs don't change](http://www.w3.org/Provider/Style/URI.html) \[[COOLURIs](#ref-COOLURIs)\].

-   Do not put too much meaning in a URI. as Berners-Lee writes, “Designing mostly means leaving information out”. If you put too much meaning, too much semantics in your URI, chances are your resource will evolve outside of the semantic frame, resulting in an unnecessary division of the resource or change of URI.
-   Use simple URIs, easy to type, write down, spell, or at least easy to cut and paste. They are likely to be easy to be remember if you follow this rule.

<span class="cp-number">1.1: </span> <span class="cp-title">Short URIs </span> <span class="cp-target">[SS](#target-expl-ss)</span> <span class="cp-target"> [CM](#target-expl-cm) </span>

1.  <span class="cp-title">Use short URIs as much as possible</span> <span class="cp-target">[SS](#target-expl-ss)</span> <span class="cp-target"> [CM](#target-expl-cm) </span>

    In order to make URIs easy to type, write down, spell, or remember, they should be short enough.

    This checkpoint is not easy to quantify. However, we can take into account the fact that e-mail will be used to send URIs, and e-mail clients (sender or receiver) are supposed to wrap at 70-80 characters : even though they are not supposed to wrap long URIs, some do. As a result 80 characters is a reasonable total length for URIs (including URI scheme, e.g "http://", and host name).

    Please note, however, that this length limit is by no mean a technical limitation, but rather, a practical goal to pursue.

<span class="cp-number">1.2: </span> <span class="cp-title">URI case policy</span> <span class="cp-target">[SS](#target-expl-ss)</span> <span class="cp-target"> [CM](#target-expl-cm) </span>

1.  <span class="cp-title">Choose a case policy </span> <span class="cp-target"> [CM](#target-expl-cm) </span>

    URIs are partly case sensitive which means that, for example `http://www.example.com/foo` and `http://www.example.com/FOO ` are different URIs and may refer to different resources.

    Again, in order for the URIs to be easy to spell and remember, their case should not only be good (see following provisions of this checkpoint) but also consistent. It is thus recommended to choose a case policy, and enforce its use.

2.  <span class="cp-title"> Avoid URIs in Mixed case</span> <span class="cp-target"> [SS](#target-expl-ss) </span> <span class="cp-target"> [CM](#target-expl-cm) </span>

    A case policy should be chosen, and enforced. All policies are, however, not equally preferable. Mixed-case URIs should be avoided.

    <span class="example-bad">Example of a URI following a mixed-case policy</span>:  
    ` http://example.com/QAfOo/baRRoX`

3.  <span class="cp-title">As a case policy choose either "all lowercase" or "first letter uppercase".</span> <span class="cp-target"> [SS](#target-expl-ss) </span> <span class="cp-target"> [CM](#target-expl-cm) </span>

    We suggest that either "all lower-case" or "first-letter uppercase" policy be chosen. Among these two, "all lower-case" may be prefered for its simplicity.

    <span class="example-good">Example, "all lower-case"</span>:  
    `http://www.example.com/foo/bar-bar`

    <span class="example-good">Example, "first-letter uppercase"</span>:  
    `http://www.example.com/Foo/Bar-bar`

### Guideline 2: <span id="gl2">Allow URI management</span>

As we said in the beginning of this chapter, a URI is not a filename, and you do not need to tie your URI structure to the file system on the Web server. However, chances are the resources served by a Web server will be available on a specific file system, and thus there should be flexible ways to map one onto the other.

<span class="cp-number">2.1:</span> <span class="cp-title">URI mapping</span> <span class="cp-target"> [SI](#target-expl-si) </span>

1.  <span class="cp-title">Provide mechanisms for File System to URI mapping</span> <span class="cp-target"> [SI](#target-expl-si) </span>

    Content managers should be able to re-organize the file system without modifying the URI structure. Servers should therefore allow the content manager to map the documents to URIs.

    <span class="example-good">Examples:</span>:  
    Here are a few technologies that may be used for this purpose:
    -   Aliases
    -   Symbolic links
    -   Table or database of mappings
    -   etc.

<span class="cp-number">2.2: </span> <span class="cp-title">Standard redirects</span> <span class="cp-target"> [SI](#target-expl-si) </span> <span class="cp-target"> [CM](#target-expl-cm) </span>

1.  <span class="cp-title">Allow the use of standard redirects</span> <span class="cp-target"> [SI](#target-expl-si) </span>

    Content manager should be able to change easily the configuration of the server to use the various HTTP/1.1 redirection schemes (section 10.3 of the HTTP/1.1 specification \[[RFC2616](#ref-RFC2616)\]) :

    -   [301 Moved Permanently](http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html#sec10.3.2) (\[[RFC2616](#ref-RFC2616)\] section 10.3.2)
    -   [302 Found](http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html#sec10.3.3) (undefined redirect scheme, \[[RFC2616](#ref-RFC2616)\] Section 10.3.3)
    -   [307 Temporary Redirect](http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html#sec10.3.8) (\[[RFC2616](#ref-RFC2616)\] Section 10.3.8)

    The content manager should be allowed to use these, either by modifying directly the server configuration or by another indirect way of doing it (local configuration modification file, creation of local "redirect"resources, etc.)

    Note that even though the current practice is to use the [302 Found](http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html#sec10.3.3) status code for temporary redirects, it is best kept for "undefined" redirects, and the [307 Temporary Redirect](http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html#sec10.3.8) status code should be preferred for this purpose.

2.  <span class="cp-title"> When you change URIs, use standard redirects</span> <span class="cp-target"> [CM](#target-expl-cm) </span>

    If for any reason a content manager change the URI referencing to a given resource, standard redirects, as defined above, should be used to avoid link-rot.

    Usually, the [HTTP 301 Moved Permanently](http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html#sec10.3.2) status code (\[[RFC2616](#ref-RFC2616)\], section 10.3.2) will be used for this purpose.

### Guideline 3: <span id="gl3">Use independent URIs</span>

URIs should be both stable and independent. By independent we mean that a URI should always reference the same resource, regardless of the context (time, location, user, user-agent, etc.)

<span class="cp-number">3.1:</span> <span class="cp-title">Technology-independent URIs</span> <span class="cp-target"> [SS](#target-expl-ss) </span> <span class="cp-target"> [CM](#target-expl-cm) </span>

1.  <span class="cp-title">Serve dynamic content with technology-independent URIs</span> <span class="cp-target"> [SS](#target-expl-ss) </span> <span class="cp-target"> [CM](#target-expl-cm) </span>

    A URI should not show the underlying technology (server-side content generation engine, script written in such or such language) used to serve the resource.

    Using URIs showing the specific underlying technology means one is dependent on the technology used, which means that the technology cannot be changed without either breaking URIs or going through the hassle of "fixing" them (see Checkpoint [2.2: Standard redirects](#cp2.2)).

    Using a scripting language to create dynamic content does not mean your URI should end with the same extension as the script's filename.

    Advertizing one's development environment to the world also imply security issues. One's site may have been crawled and be a known target for a specific architecture once a security flaw is discovered on that architecture. Obscurity is, of course, no replacement for security, but a good design keeps threats away. Read the Web Security FAQ \[WSFAQ\] for more on web server-side security.

    For these reasons, technology-specific extensions should be hidden, using content-negotiation (see [Guideline 7: Server-driven content negotiation](#gl7).), proxying or URI mapping technologies.

2.  <span class="cp-title">Serve static content without file extension</span> <span class="cp-target"> [CM](#target-expl-cm) </span>

    The reason why one should serve static content without file extension is similar to the reason stated above : the content manager may, at some point, want to change the document format used to serve a resource, yet the resource would remain "equivalent". For example, switching from an image file format to an equivalent format, or switching from plain text to HTML...

    File extensions should therefore be hidden for static content, using content-negotiation (see [Guideline 7: Server-driven content negotiation](#gl7).), proxying or URI mapping technologies.

<span class="cp-number">3.2:</span> <span class="cp-title">Identification and Session mechanisms</span> <span class="cp-target"> [SS](#target-expl-ss) </span> <span class="cp-target"> [CM](#target-expl-cm) </span>

HTTP/1.1 provides a number of mechanisms for identification, authentication and session management. Using these mechanisms instead of user-based or session-based URIs guarantees than the URIs used to serve resources are **truly** universal (allowing, for example, people to share, send, or copy them).

1.  <span class="cp-title">Use standard identification instead of per-user URIs</span> <span class="cp-target"> [SS](#target-expl-ss)</span> <span class="cp-target"> [CM](#target-expl-cm)</span>

    For the reasons stated above, standard identification mechanisms should be prefered over user-dependent URIs.

    Standard identification mechanisms for the World Wide Web are described in [RFC 2617 : "HTTP Authentication: Basic and Digest Access Authentication"](http://www.ietf.org/rfc/rfc2617.txt) \[[RFC2617](#ref-RFC2617)\].

2.  <span class="cp-title">Use standard session mechanisms instead of session-based URIs.</span> <span class="cp-target"> [SS](#target-expl-ss)</span> <span class="cp-target"> [CM](#target-expl-cm)</span>

    For the reasons stated above, standard session mechanisms should be prefered over session-dependent URIs.

    The latter may only be used in very specific cases, when standard mechanisms do not provide the desired features.

    <span class="example-good">Example of an acceptable practice</span>:  
    A URI may have some modifiers, like "`?`" used to pass arguments for cgi, or "`;`" to pass other kind of arguments or context information. Used for information tracking, this is a proper use of session information in URIs.

    <span class="example-bad">Example of a bad practice</span>:  
    Bob tries to visit `http://www.example.com/resource`, but since it's a rainy Monday morning, he gets redirected to `http://www.example.com/rainymondaymorning/resource`. The day after, when Bob tries to access the resource he had bookmarked earlier, the server answers that Bob has made a bad request, and serves `http://www.example.com/error/thisisnotmondayanymore`. Had the server served back `http://www.example.com/resource` because the Monday session had expired, it would have been, if not acceptable, at least harmless.

    Standard session mechanisms include [RFC 2109 : "HTTP State Management Mechanism"](http://www.ietf.org/rfc/rfc2109.txt) \[[RFC2109](#ref-RFC2109)\], also known as "cookies".

### Guideline 4: <span id="gl4">"Cool URIs don't change", but cool content does</span>

One misconception about “Cool URIs don't change” is that it advocates "frozen" documents, which content cannot change because that would "break things".

This, again, comes from a misunderstanding of the concept of URIs. If we come back to our warehouse metaphor, used in the beginning of this document, things get clearer: we know that the URI is a fixed reference to a resource (a "toothbrush" in our example), and we know that the reference should not change, however it does not mean that the resource itself should not change... On the contrary, the World Wide Web has been designed with evolution in mind, and if the resource is modified over time, this has nothing to do with the fact that “Cool URIs don't change”.

<span class="cp-number">4.1:</span> <span class="cp-title">Standard redirects for changing content</span> <span class="cp-target"> [SS](#target-expl-ss) </span> <span class="cp-target"> [CM](#target-expl-cm) </span>

1.  <span class="cp-title">Use standard redirects for changing content</span> <span class="cp-target"> [SS](#target-expl-ss) </span> <span class="cp-target"> [CM](#target-expl-cm) </span>

    A good example of what is meant here by "changing/moving content" would be a daily article on a Web site. People want to be able to reference either the "latest daily article", or a specific article.

    This is made possible and smooth with the use of two different URIs (or, to be precise, one URI referencing the "latest" issue, and one URI per article), as explained in the following example.

    Let us consider an imaginary newsletter, issued every day. The (latest issue of the) newsletter is available at `http://www.example.org/newsletter` and this is the URI people use to access the newsletter every day.

    The content manager wants that every newsletter, and not only the latest issue, be available on his server, so he archives every issue, and each of them is accessible on the Web site at a dated URI, e.g: `http://www.example.org/2042/02/12-newsletter` for the Feb. 12, 2042 issue.

    Using a [standard redirect](#cp2.2) ( [HTTP 302 Found](http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html#sec10.3.3), or, even better [HTTP 307 Temporary Redirect](http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html#sec10.3.8) - \[[RFC2616](#ref-RFC2616)\] section 10.3.3 and 10.3.8), the content manager, when publishing the Feb. 12, 2042 issue, redirects `http://www.example.org/newsletter` to the dated `http://www.example.org/2042/02/12-newsletter`

    Readers are, therefore, able to refer to (and access) "the newsletter" for the latest issue, or to any specific issue.

    If the server properly sends the `Content-Location:` HTTP/1.1 Header, there is an alternate technique, described in [Checkpoint 5.2: `Content-Location`](#cp5.2).

<span class="cp-number">4.2:</span> <span class="cp-title">HTTP `410 Gone`</span> <span class="cp-target">[CM](#target-expl-cm) </span> <span class="cp-target"> [SI](#target-expl-si) </span>

1.  <span class="cp-title">When removing a resource, use `410 Gone`</span> <span class="cp-target">[CM](#target-expl-cm) </span>

    Most of guidelines 1 to 3 aim at avoiding "link rot", documents that have been moved or removed, resulting in a `404 Not Found` status code for agents trying to access a resource once refered to by a URI.

    This does not mean the web does not allow for documents to be removed or deprecated. Content managers should avoid, when possible, simply removing resources, and should consider instead the correct standard procedure, which is to use the [`410 gone` status code](http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html#sec10.4.11) (\[[RFC2616](#ref-RFC2616)\] section 10.4.11).

    Whereas the `404 Not found` status code only means that the server is unable to find the resource, the `410 gone` status code means that the resource is intentionally unavailable. For the sake of semantics and caching (a `410 gone` is cacheable unless indicated otherwise).

2.  <span class="cp-title">Allow the content-manager to use `410 Gone` for removed resources</span> <span class="cp-target"> [SI](#target-expl-si) </span>

    Content managers should be allowed to use the [`410 gone` status code](http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html#sec10.4.11) (\[[RFC2616](#ref-RFC2616)\] section 10.4.11) to remove or deprecate resources on a server. There should be an easy way to specify that a resource, or an area, has been removed, using the `410 gone` status code.

### Guideline 5: <span id="gl5">Provide indexing agents with useful information</span>

This section deals with providing meaningful and clear information to indexing and crawling user-agents (also often referred to as "robots", "spiders", "crawlers"). It has a strong influence on the traffic for a Web site (both the traffic created by the indexing agents, and the traffic attracted by search results) and should be a primary concern for content managers.

Discussing the use of metadata, and the proper structuring of HTML documents in order to help indexing agents in their task is out of scope for this document, we will, rather, focus on the inner mechanics of indexing. Readers interested in metadata may find interesting bits in these two related guidelines: [Guideline 8: Provide useful metadata in addition to content negotiation](#gl8) and [Guideline 12: Enrich and enhance](#gl12).

<span class="cp-number">5.1:</span> <span class="cp-title">Indexing policy</span> <span class="cp-target"> [CM](#target-expl-cm) </span>

1.  <span class="cp-title">Define site-wide indexing policy</span> <span class="cp-target"> [CM](#target-expl-cm) </span>

    A site-wide policy specifies what the default behavior of indexing or crawling agents should be, and can be refined on a per-document basis through local indexing directives. (see below for details)

    Content managers should define such a policy for their site. The most common way of informing indexing agents of this policy is the [Robots Exclusion Protocol](http://www.robotstxt.org/wc/exclusion.html#robotstxt) \[[ROBOTSPROTO](#ref-ROBOTSPROTO)\], but one could use other technologies, such as a metadata database giving indexing directives on a document basis.

2.  <span class="cp-title">Define local indexing policy</span> <span class="cp-target"> [CM](#target-expl-cm) </span>

    The site-wide indexing policy may be completed by a local (per document) indexing policy, marked up at the document level.

    For example, HTML \[[HTML 4.01](#ref-HTML401)\] defines a specific [META](http://www.w3.org/TR/1999/REC-html401-19991224/struct/global.html#edef-META) element [for this purpose](http://www.w3.org/TR/1999/REC-html401-19991224/appendix/notes.html#h-B.4.1) (\[[HTML 4.01](#ref-HTML401)\] Section B.4.1).

<span class="cp-number">5.2:</span> <span class="cp-title"> `Content-Location` </span> <span class="cp-target"> [SI](#target-expl-si) </span> <span class="cp-target"> [SS](#target-expl-ss) </span> <span class="cp-target"> [CM](#target-expl-cm) </span>

1.  <span class="cp-title">Send valid `Content-Location:` </span> <span class="cp-target"> [SI](#target-expl-si) </span> <span class="cp-target"> [SS](#target-expl-ss) </span>

    The [`Content-Location:` HTTP header](http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.14) \[[RFC2616](#ref-RFC2616)\] section 14.14) is crucial for indexing agents as well as user agents, as it gives agents information about the actual (current) location of the resource currently served (as opposed to the generic location used to access the resource).

    `Content-Location:` should not be mistaken for a redirection. While agents and caches may assume that a redirected URI may be used for later requests, they should not assume that a URI specified by the `Content-Location:` header may be used for later requests, if it differs from the requested URI. However, agents may request a URI once specified as `Content-Location:` if they specifically intend to request this instance of the resource.

2.  <span class="cp-title">Use `Content-Location:` for changing content</span> <span class="cp-target"> [CM](#target-expl-cm) </span>

    As seen previously, The [`Content-Location:` HTTP header](http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.14) (\[[RFC2616](#ref-RFC2616)\] section 14.14) is used to inform user-agents of the actual (current) location of the requested resource. This can be used as an alternative to the temporary redirect scheme as explained in [Checkpoint 4.1: Standard redirects for changing content](#cp4.1).

    <span class="example-good">Example of a good practice</span>:  
    You may remember the example used in [Checkpoint 4.1: Standard redirects for changing content](#cp4.1), where the content manager uses standards redirect techniques to serve a newsletter with both a "latest" and "dated" URI.

    One could achieve an almost similar result by using the `Content-Location:` HTTP header : serving `http://www.example.org/newsletter` (the "latest" URI) with a `Content-Location:` of `http://www.example.org/2042/02/12-newsletter` (the "dated" URI).

    User-agents, as explained in [Common User Agent Problems](http://www.w3.org/TR/cuap) \[[CUAP](#ref-CUAP)\] may then bookmark the "latest news" URI, or the URI of the actual dated content, and may later request the "dated" URI.

3.  <span class="cp-title">Allow the content-manager to set the `Content-Location:` header</span> <span class="cp-target"> [SI](#target-expl-si) </span>

    See above for the rationale. The Content-manager should be allowed to set the `Content-Location:` header served for a specific resource at a given time.

<span class="cp-number">5.3</span> <span class="cp-title">`Content-Md5` </span> <span class="cp-target"> [SI](#target-expl-si) </span> <span class="cp-target"> [SS](#target-expl-ss) </span>

1.  <span class="cp-title">Send `Content-Md5` for integrity check</span> <span class="cp-target"> [SI](#target-expl-si) </span> <span class="cp-target"> [SS](#target-expl-ss) </span>

    The [`Content-MD5` HTTP header](http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.15) (\[[RFC2616](#ref-RFC2616)\] section 14.15) is used to verify the integrity of the transported entity. and may help cache or indexing engines. Even though HTTP does not make it mandatory, it is recommended that servers (or content-generation engines) compute and send it.

    `Content-MD5` should not be mistaken with [`ETag`](http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.19) (\[[RFC2616](#ref-RFC2616)\] section 14.19). The former is a check sum of the resource served whereas the latter is a "serial number" identifying a specific instance of resource. However he md5 sum of the content is supposed to be unique, therefore it may be used as the `ETag` (but may be too resource-consuming for servers that do not cache the metadata). It is, nevertheless, better to send both headers.

### Guideline 6: <span id="gl6">Provide appropriate caching information</span>

This guideline relates to the [Caching mechanisms](http://www.w3.org/Protocols/rfc2616/rfc2616-sec13.html) defined by the HTTP/1.1 specification (\[[RFC2616](#ref-RFC2616)\] section 13).

We will try to point out facts often overlooked or misunderstood about HTTP caching, as well as giving advice on how to serve easily cachable content.

<span class="cp-number">6.1</span> <span class="cp-title">Cache-related HTTP headers</span> <span class="cp-target"> [SI](#target-expl-si) </span> <span class="cp-target"> [SS](#target-expl-ss) </span>

1.  <span class="cp-title">Send proper and accurate `Date` header</span> <span class="cp-target"> [SI](#target-expl-si) </span>

    HTTP/1.1 servers MUST send a [`Date:` header](http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.18) (\[[RFC2616](#ref-RFC2616)\] section 14.18). It is the base of all caching mechanisms and must be sent both properly and accurately.

2.  <span class="cp-title">Send `Last-Modified` whenever possible</span> <span class="cp-target"> [SI](#target-expl-si) </span> <span class="cp-target"> [SS](#target-expl-ss) </span>

    HTTP/1.1 (\[[RFC2616](#ref-RFC2616)\]) states that “servers SHOULD send the [`Last-Modified` header](http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.29) (\[[RFC2616](#ref-RFC2616)\] section 14.29) whenever feasible”. This header is very important because of its use as a cache validator: “a cache entry is considered to be valid if the entity has not been modified since the Last-Modified value”.

3.  <span class="cp-title">Send `Cache-Control` directives</span> <span class="cp-target"> [SI](#target-expl-si) </span>

    [The `Cache-Control` header](http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.9) (\[[RFC2616](#ref-RFC2616)\] section 14.9) defines the behavior of cache engines with regards to the resource sent.

    `Cache-Control` should be preferred over [`Expires:`](http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.21) (\[[RFC2616](#ref-RFC2616)\] section 14.21) because of its richness. Servers may send both, but be aware that agents are supposed to ignore `Expires:` if the max-age directive of `Cache-Control:` is properly sent.

<span class="cp-number">6.2</span> <span class="cp-title">Cache policy</span> <span class="cp-target"> [SI](#target-expl-si) </span> <span class="cp-target"> [CM](#target-expl-cm) </span>

1.  <span class="cp-title">Define a cache policy</span> <span class="cp-target">[CM](#target-expl-cm) </span>

    A cache / expiration policy is the rationale behind cache control for every resource served by HTTP/1.1 servers.. Content managers should decide, globally and/or locally, what can or can not be cached, how long caches should keep the document before trying to get a new version, etc. These decisions may be made depending on the frequency at which the documents may be updated.

2.  <span class="cp-title">Allow the Content Manager to set up cache control according to a Cache Policy</span> <span class="cp-target"> [SI](#target-expl-si) </span>

    The content manager should be able to set the `max-age` parameter for any resource served according to a cache policy.

<span class="cp-number">6.3:</span> <span class="cp-title">Caching generated content</span> <span class="cp-target"> [SS](#target-expl-ss) </span>

1.  <span class="cp-title">Provide actual caching information for content generated dynamically</span> <span class="cp-target"> [SS](#target-expl-ss) </span>

    Most dynamic content generation systems act as if the documents they generate and serve were "fresh" (i.e as if the resource was last modified at the date it is served), whether the information itself is, or not.

    This is a harmful lie for caching engines and should be avoided.

    Regardless of the technology used, it should be possible to provide age information by retrieving the actual information from whatever source is used to generate the dynamic content: file,database, etc.

<span class="cp-number">6.4:</span> <span class="cp-title">HTTP HEAD and HTTP GET</span> <span class="cp-target"> [SI](#target-expl-si) </span>

1.  <span class="cp-title">Send the same answer to HTTP HEAD and HTTP GET requests</span> <span class="cp-target"> [SI](#target-expl-si) </span>

    Servers MUST send back the same information (HTTP headers) when answering a GET and a HEAD request, as required by the [HTTP specification](http://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html#sec9.4) \[[RFC2616](#ref-RFC2616)\] section 9.4. This is critical for many mechanisms, including caching.

2.<span id="content">Serving content appropriately</span>
---------------------------------------------------------

### Guideline 7: <span id="gl7">Server-driven content negotiation</span>

This guideline deals with [negotiation in HTTP/1.1](http://www.w3.org/Protocols/rfc2616/rfc2616-sec12.html#sec12) (as defined in HTTP/1.1 \[[RFC2616](#ref-RFC2616)\] section 12).

Content negotiation stands for the server-driven negotiation based on user agent capabilities and user preferences, including those specified in the [Accept](http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.1) (\[[RFC2616](#ref-RFC2616)\] section 14.1) [Accept-Charset](http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.2) (\[[RFC2616](#ref-RFC2616)\] section 14.2), and [Accept-Language](http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.4) (\[[RFC2616](#ref-RFC2616)\] section 14.4) headers, and beyond.

<span class="cp-number">7.1:</span> <span class="cp-title">Format negotiation</span> <span class="cp-target"> [SI](#target-expl-si) </span> <span class="cp-target"> [CM](#target-expl-cm) </span>

"Format negotiation" here stands for the server-driven negotiation between equivalent instances of a resource in different "formats", either media-type (often called "content-negotiation" erroneously) or character encoding.

1.  <span class="cp-title">Allow the content manager to use and configure content-type negotiation</span> <span class="cp-target"> [SI](#target-expl-si) </span>

    Content-managers should be provided with an easy way to specify that several documents are different instances of the same resource using various "equivalent" media types.

    Server should then apply server-driven negotiation algorithms to serve the most appropriate variant based at least on the requested [Accept](http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.1) (\[[RFC2616](#ref-RFC2616)\] section 14.1) header.

2.  <span class="cp-title">Allow the content manager to use and configure character encoding negotiation</span> <span class="cp-target"> [SI](#target-expl-si) </span>

    Content-managers should be provided with an easy way to specify that several documents are different instances of the same resource with different character encoding.

    Server should then apply server-driven negotiation algorithms to serve the most appropriate variant based at least on the requested [Accept-Charset](http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.2) (\[[RFC2616](#ref-RFC2616)\] section 14.2) header.

3.  <span class="cp-title">During format negotiation, be cautious with agents accepting anything</span> <span class="cp-target"> [SI](#target-expl-si) </span> <span class="cp-target"> [CM](#target-expl-cm) </span>

    As explained for example in "[Common user agent problems](http://www.w3.org/TR/cuap#protocols)" (\[[CUAP](#ref-CUAP)\] section "protocols"), some agents are known to misbehave with regard to format negociation, sending an HTTP header of `Accept: */*` (thus they are supposed to support every and any content type, which they certainly do not).

    While servers are not required to cope with this problem in user agents, a wise practice toward agents sending broken `Accept:` headers or not expressing specific preference on the content type is to send them a version of the resource in a widely supported document format.

    This can be done at the server level using the quality factors used in the [negotiation process](http://www.w3.org/Protocols/rfc2616/rfc2616-sec12.html#sec12) (\[[RFC2616](#ref-RFC2616)\] section 12).

    See also the related guideline : [Guideline 11 : Use flexible technology instead of client sniffing/blocking](#gl11).

4.  <span class="cp-title">Allow the content manager to set the quality factors used during negociation</span> <span class="cp-target"> [SI](#target-expl-si) </span>

    Content-managers should be provided with an easy way to specify which version (either format or language) of the resource they would rather see served, in case the headers sent by the agent do not leave one clear choice.

    See related checkpoint 9.1: [When negotiation fails](#cp9.1).

<span class="cp-number">7.2:</span> <span class="cp-title">Language negotiation</span> <span class="cp-target"> [SI](#target-expl-si) </span>

1.  <span class="cp-title">Allow the content manager to use and configure language negotiation</span> <span class="cp-target"> [SI](#target-expl-si) </span>

    Content-managers should be provided with an easy way to specify that several documents are different instances of the same resource translated in different languages.

    Server should then apply server-driven negotiation algorithms to serve the most appropriate variant based at least on the requested [Accept-Language](http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.4) (\[[RFC2616](#ref-RFC2616)\] section 14.4) header.

2.  <span class="cp-title">Allow the content manager to set the quality factors used during negociation</span> <span class="cp-target"> [SI](#target-expl-si) </span>

    Content-managers should be provided with an easy way to specify which version (either format or language) of the resource they would rather see served, in case the headers sent by the agent do not leave one clear choice.

    See related checkpoint 9.1: [When negotiation fails](#cp9.1).

3.  <span class="cp-title">Use the `Content-Language:` HTTP header</span> <span class="cp-target"> [SI](#target-expl-si) </span>

    If the resource is served using language-negotiation (actually, even if it is not), servers MAY send a `Content-Language:` HTTP header specifying the language of the instance of the resource served. This is an interesting information that agents may use to evaluate the result of server-driven negotiation, exactly as they would with the `Content-Type` header in the case of format negotiation.

    <span class="example-good">Example of HTTP/1.1 transaction using `Content-Language:`</span>

        GET /foo/resource HTTP/1.1
        Host: www.example.org
        Accept-Language: fr, en-gb;q=0.8, de;q=0.1

        HTTP/1.1 200 OK
        [...]
        Content-Location: http://www.example.org/foo/resource.html.fr
        Content-Language: fr
        [...]

If server-driven negotiation fails, servers should either proceed to agent-driven negotiation or try fall-back solutions, as explained in [Guideline 9 : Provide default and fall-back solutions](#gl9).

### Guideline 8: <span id="gl8">Provide useful metadata in addition to content negotiation</span>

Server-driven negotiation is used to serve the best content available, based on the accept headers received. This mechanism does not, however, specify variants beyond the generic `Vary:` HTTP header.

This guideline gives hits at going a little further for the sake of ease of navigation through, and indexing of, multiple HTML documents (variants or collection).

<span class="cp-number">8.1:</span> <span class="cp-title">Variants of (X)HTML documents</span> <span class="cp-target"> [SS](#target-expl-ss) </span> <span class="cp-target"> [CM](#target-expl-cm) </span>

1.  <span class="cp-title">Specify variants of HTML documents</span> <span class="cp-target"> [SS](#target-expl-ss) </span> <span class="cp-target"> [CM](#target-expl-cm) </span>

    The HTML specification \[[HTML 4.01](#ref-HTML)\], provides [mechanisms to specify (language) variants for a given document](http://www.w3.org/TR/REC-html40/appendix/notes.html#h-B.4) (\[[HTML 4.01](#ref-HTML)\] appendix B.4) using the [`link` element](http://www.w3.org/TR/REC-html40/struct/links.html#h-12.3) (\[[HTML 4.01](#ref-HTML)\] section 12.3).

    When used with the `alternate` type, the `link` element can specify variants of a given resource, either language variants (translations) with the `lang` attribute or media variants with the `media` attribute.

    <span class="example-good">Example of HTML markup for language variants</span>:

        <LINK rel="alternate" 
                 type="text/html"
                 href="mydoc-fr.html" hreflang="fr"
                 lang="fr" title="La vie souterraine">
        <LINK rel="alternate" 
                 type="text/html"
                 href="mydoc-de.html" hreflang="de"
                 lang="de" title="Das Leben im Untergrund">

2.  <span class="cp-title">Specify variants of XHTML documents</span> <span class="cp-target"> [SS](#target-expl-ss) </span> <span class="cp-target"> [CM](#target-expl-cm) </span>

    Note that this technique is is also applicable for XHTML documents.

    <span class="example-good">Example of XHTML 1.0 markup for language variants</span> (same as above, but with lower-case, closed elements...):

        <link rel="alternate" 
                 type="text/html"
                 href="mydoc-fr.html" hreflang="fr"
                 lang="fr" title="La vie souterraine" />
        <link rel="alternate" 
                 type="text/html"
                 href="mydoc-de.html" hreflang="de"
                 lang="de" title="Das Leben im Untergrund" />

<span class="cp-number">8.2:</span> <span class="cp-title">Navigation among (X)HTML documents</span> <span class="cp-target"> [CM](#target-expl-cm) </span>

1.  <span class="cp-title">Facilitate navigation among collections of HTML documents</span> <span class="cp-target"> [CM](#target-expl-cm) </span>

    Again, using the [`link`](http://www.w3.org/TR/REC-html40/struct/links.html#h-12.3) element (\[[HTML 4.01](#ref-HTML)\] section 12.3) one can specify relations betweens documents in a collection.

    The link types which can be used for this purpose, as described in the [Data types section of the HTML 4.01 specification](http://www.w3.org/TR/REC-html40/types.html#type-links) \[[HTML 4.01](#ref-HTML)\] are:

    -   Start
    -   Next
    -   Prev
    -   Contents
    -   Index
    -   etc.

    <span class="example-good">examples of use</span>:

    -   in a photo gallery (using `Next`, `Prev`, `Index`, etc.)
    -   for a periodical newsletter (using `Next`, `Prev`, `Copyright`, etc)
    -   in a compound document (using `Contents`, `Chapter`, `Section`, `Subsection`, `Appendix`, `Glossary`, etc.)

### Guideline 9: <span id="gl9">Provide default and fall-back solutions</span>

HTTP \[[RFC2616](#ref-RFC2616)\] is about serving content in the most appropriate way, and, as we have seen in previous guidelines ( [Guideline 7 : Server-driven content negotiation](#gl7) and [Guideline 8: Provide useful metadata in addition to content negotiation](#gl8)), server-driven negotiation may be used to serve the best available content. It may happen that these mechanisms fail, and in this case, HTTP implementations should try, when possible, to give the requested content to the client. This may be achieved through default and fall-back mechanisms.

<span class="cp-number">9.1:</span> <span class="cp-title">When negotiation fails </span> <span class="cp-target"> [SI](#target-expl-si) </span> <span class="cp-target"> [SS](#target-expl-ss) </span>

1.  <span class="cp-title">provide multiple or default choice(s) when content/language negotiation fails to give only one result</span> <span class="cp-target"> [SI](#target-expl-si) </span> <span class="cp-target"> [SS](#target-expl-ss) </span>

    Using the verbiage of the HTTP specification, this checkpoint can be paraphrased into "use agent-driven negotiation when the server is unable to provide a varying response using server-driven negotiation".

    Section 12 of HTTP \[[RFC2616](#ref-RFC2616)\] provides mechanisms to leave the final decision to the user-agent (or its user) for cases when the content or language negotiation does not come up with a unique result but with multiple ones.

    In such a case, a server can use the [300 (Multiple Choices)](http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html#sec10.3.1) status code, or be configured to send, by default, one of the resources among the possible choices.

2.  <span class="cp-title">provide default or fall-back choice(s) when content/language negotiation fails</span> <span class="cp-target"> [SI](#target-expl-si) </span> <span class="cp-target"> [SS](#target-expl-ss) </span>

    Section 12 of HTTP/1.1 \[[RFC2616](#ref-RFC2616)\] suggests the use of the [406 (Not Acceptable)](http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html#sec10.4.7) status code when content or language negotiation fails to find any appropriate negotiated resource.

    However the HTTP/1.1 specification \[[RFC2616](#ref-RFC2616)\] also states that “the server should make the best efforts to give the requested content to the client”.

    One possible interpretation of this is that the server may provide fall-back choice(s): the message body for "HTTP 406 not acceptable" can give a list of available resources and let the user choose, or the server can be configured to serve, arbitrarily, a specific variant of the resource in case negotiation fails.

    Note that this is perfectly acceptable with regards to [Section 10.4.7 of HTTP/1.1](http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html#sec10.4.7) \[[RFC2616](#ref-RFC2616)\]: “HTTP/1.1 servers are allowed to return responses which are not acceptable according to the accept headers sent in the request. In some cases, this may even be preferable to sending a 406 response. User agents are encouraged to inspect the headers of an incoming response to determine if it is acceptable.”

3.  <span class="cp-title">allow the content manager to set up a fall-back behavior content/language for cases when negotiation fails</span> <span class="cp-target"> [SI](#target-expl-si) </span> <span class="cp-target"> [SS](#target-expl-ss) </span>

    This is the practical implementation of the provision above. The server should allow the content manager to decide whether, in case negotiation fails, the server should:

    -   send a 406 (Not Acceptable) status code with a list of available choices,
    -   or if it should arbitrarily serve a variant of the resource. (The content manager should, of course, be allowed to choose which variant would be chosen, or how it should be chosen.).

    <span class="example-good">Example</span>:  
    Through the [Accept-Language](http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.4) headers, a client specifies that it prefers Japanese or English versions of the resource, whereas the content is only available in French and Spanish. The content manager may be allowed to choose that the French version will be served as a default version, or let the server send a 406 status code, giving the user-agent a choice between the French and Spanish versions.

<span class="cp-number">9.2:</span> <span class="cp-title">HTTP error messages body</span> <span class="cp-target"> [SI](#target-expl-si) </span> <span class="cp-target"> [SS](#target-expl-ss) </span>

As a general rule, the content manager should be allowed to change and customize the body of HTTP error messages.

### Guideline 10: Serve resources with correct content-type and character encoding information

<span class="cp-number">10.1:</span> <span class="cp-title">`Content-type`</span> <span class="cp-target"> [SI](#target-expl-si) </span> <span class="cp-target"> [SS](#target-expl-ss) </span> <span class="cp-target"> [CM](#target-expl-cm) </span>

1.  <span class="cp-title">Send proper `Content-type` HTTP header</span> <span class="cp-target"> [SI](#target-expl-si) </span> <span class="cp-target"> [SS](#target-expl-ss) </span> <span class="cp-target"> [CM](#target-expl-cm) </span>

    Resources should be served with a proper [`Content-type` Header](http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.17) (\[[RFC2616](#ref-RFC2616)\] section 14.17). Documents not served with a proper media type may not be interpreted correctly by user agents.

    <span class="example-bad">Example of a wrong practice</span>:  
    CSS style sheets are sometimes served as plain text (`text/plain` media type), causing the user-agents to ignore the style sheet and rendering the document in an unexpected manner.

    <span class="example-good">Example of a proper practice</span>:  
    CSS style sheets should be served with the `text/css` media type.

2.  <span class="cp-title">allow the content manager to override content-type settings</span> <span class="cp-target"> [SI](#target-expl-si) </span>

    In addition to proper default mapping of media types to file extension, since there is no obligation to use "well-known" file extensions in URIs, servers should allow the content manager to set the appropriate media type sent in the `Content-type` header for resources without such file extension, and to override the default setting at will.

<span class="cp-number">10.2:</span> <span class="cp-title">Character Encoding</span> <span class="cp-target"> [SI](#target-expl-si) </span> <span class="cp-target"> [SS](#target-expl-ss) </span> <span class="cp-target"> [CM](#target-expl-cm) </span>

1.  <span class="cp-title">Send proper character encoding information</span> <span class="cp-target"> [SI](#target-expl-si) </span> <span class="cp-target"> [SS](#target-expl-ss) </span> <span class="cp-target"> [CM](#target-expl-cm) </span>

    For some document types, the media type sent by the [`Content-type` Header](http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.17) (\[[RFC2616](#ref-RFC2616)\] section 14.17) may be sent with some information about the character encoding of the document. In some cases, this is mandatory (see the provision below for HTML and XHTML).

2.  <span class="cp-title">Send proper character encoding information for XHTML documents</span> <span class="cp-target"> [SI](#target-expl-si) </span> <span class="cp-target"> [SS](#target-expl-ss) </span> <span class="cp-target"> [CM](#target-expl-cm) </span>

    The [HTML 4.01 Recommendation](http://www.w3.org/TR/1999/REC-html401-19991224/charset.html#h-5.2.2) (\[[HTML 4.01](#ref-HTML401)\] section 5.2.2) states that the server should provide this information (the character encoding of the HTML document served), e.g:

    Content-Type: text/html; charset=EUC-JP

    Conforming user agents MUST observe the following priorities when determining an HTML document's character encoding (from highest priority to lowest):

    1.  An HTTP "charset" parameter in a "Content-Type" field
    2.  A META declaration with "http-equiv" set to "Content-Type" and a value set for "charset"
    3.  The charset attribute set on an element that designates an external resource.

    Note that The HTTP/1.1 protocol (\[[RFC2616](#ref-RFC2616)\], section 3.7.1) mentions ISO-8859-1 as a default character encoding when the "charset" parameter is absent from the "Content-Type" header field, but it is now not recommended to follow this practice.

    The recommended practice is that the character encoding be **both** specified be specified in the META declaration, **and** the "Content-Type" header field.

    <span class="example-good">Example of an HTML 4.01 document written in French with a UTF-8 encoding</span>:

        <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
          "http://www.w3.org/TR/html4/strict.dtd">
        <html lang="fr">

        <head>
        <meta http-equiv="content-type" content="text/html; charset=UTF-8">
        <title>Exemple de document HTML 4.01</title>
        </head>

        <body>
        <h1>Portrait Intérieur</h1>
        <h2>Rainer-Maria Rilke</h2>

        <p>Ce ne sont pas des souvenirs<br>
        qui, en moi, t'entretiennent ;<br>
        tu n'es pas non plus mienne<br>
        par la force d'un beau désir.</p>
        </body>
        </html>

3.  <span class="cp-title">Send proper character encoding information for XHTML 1.0 documents</span> <span class="cp-target"> [SI](#target-expl-si) </span> <span class="cp-target"> [SS](#target-expl-ss) </span> <span class="cp-target"> [CM](#target-expl-cm) </span>

    The case of XHTML document is similar to the case of HTML, except that, since XHTML is also XML,XHTML document can provide the character encoding via the XML declaration. (but if the XHTML document uses one of the default encodings - UTF-8 or UTF-16 - no declaration is needed).

    The recommended practice for XHTML documents is to properly specify the character encoding in both the XML declaration and the the "Content-Type" header field.

    <span class="example-good">Example of an XHTML 1.0 document written in French with an ISO-8859-1 encoding</span>:

        <?xml version="1.0" encoding="ISO-8859-1"?>
        <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
          "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
        <html xmlns="http://www.w3.org/1999/xhtml" xml:lang="fr" lang="fr">

        <head>
        <title>Exemple de document XHTML 1.0</title>
        </head>

        <body>
        <h1>Portrait Intérieur</h1>
        <h2>Rainer-Maria Rilke</h2>
        <p>Ce ne sont pas des souvenirs<br />
        qui, en moi, t'entretiennent ;<br />
        tu n'es pas non plus mienne<br />
        par la force d'un beau désir.</p>
        </body>
        </html>

4.  <span class="cp-title">Allow the content manager to override character encoding settings</span> <span class="cp-target"> [SI](#target-expl-si) </span> <span class="cp-target"> [SS](#target-expl-ss) </span>

    The content manager should be allowed to set the character encoding information.

    If the server implementor does not want the content manager, or if the content manager does not want the users to change the charset information sent by the HTTP server, then the server should send none, and the character encoding may be specified at the document level.

### Guideline 11: <span id="gl11">Use flexible technology instead of client sniffing/blocking</span>

<span class="cp-number">11.1:</span> <span class="cp-title">Avoid agent sniffing</span> <span class="cp-target"> [SS](#target-expl-ss) </span> <span class="cp-target"> [CM](#target-expl-cm) </span>

1.  <span class="cp-title">Use content-negotiated resources instead of Agent sniffing</span> <span class="cp-target"> [SS](#target-expl-ss) </span> <span class="cp-target"> [CM](#target-expl-cm) </span>

    Server-driven negotiation, based on the agent's capabilities (given though the [`Accept:` header](http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.1) -\[[RFC2616](#ref-RFC2616) section 14.1 -) is a very efficient way of providing agents with content they can display or process, without doubt on their capabilities. It is also a cost-efficient technique, as the negotiation is handled by the server based on what agents declare they can handle, whereas agent sniffing implies knowledge of (potentially all) agents and their capabilities in order to serve (only) content the agents can handle.

    Providing (with negotiation) equivalent versions of a resource in flexible technologies should therefore be preferred to agent-sniffing.

2.  <span class="cp-title">Use flexible document technologies instead of Agent sniffing</span> <span class="cp-target"> [SS](#target-expl-ss) </span> <span class="cp-target"> [CM](#target-expl-cm) </span>

    Content manager often think they have to serve different content depending on the agent, either by generating different content on the fly using server-side technologies, filtering, negotiating, or [Blocking](#cp11.2).

    However well done (negotiating being the most appropriate way), this practice is very seldom suitable to any possible agent, and implies a lot of extra work.

    Content-managers should therefore consider the use of standard (i.e widely implemented), flexible (scalable, multi-platform, device independent, etc.) document technologies whenever possible, either as a primary choice, or, at least, as a negotiated alternative.

    <span class="example-good">Example of an acceptable practice</span>:  
    The content manager decides to serve a text resource using proprietary, not widely implemented technology, but adds a negotiated plain-text alternative for agents which can not handle the proprietary document format.

<span class="cp-number">11.2:</span> <span class="cp-title">Avoid agent blocking</span> <span class="cp-target"> [SS](#target-expl-ss) </span> <span class="cp-target"> [CM](#target-expl-cm) </span>

1.  <span class="cp-title">Avoid agent blocking</span> <span class="cp-target"> [SS](#target-expl-ss) </span> <span class="cp-target"> [CM](#target-expl-cm) </span>

    Even though some agents may be badly broken, refusing to serve content to users of such an agent means lost business (traffic), and [flexible technologies](#cp11.1), which ensure that the content may be handled by any agent, should be preferred to this practice.

    Even worse is to choose which agents are "suitable" and block all the other agents. This is a very bad move, at least because:

    -   Some of the agents one may block are actually idexing agents for search engines, and may bring back traffic
    -   Agents are rapidly evolving, and while a specific version of a specific agent may appear better at some point in time, there is no reason to believe another version of another agent may not be more appropriate later, hence making the blocking rules obsolete
    -   Blocking agents means refusing to serve, and ultimately means lost business (traffic).

    Agent blocking should therefore be avoided as much as possible, and instead flexible negotiation and document technologies, as described in [Checkpoint 11.1](#cp11.1), should be used.

### <span id="gl12">Guideline 12: Enrich and enhance</span>

The previous guidelines showed good practices for the implementation and use of Web server technologies. We will close this document by adding a few leads to practices which, even though they are not crucial, may be followed to enrich or enhance HTTP services...

<span class="cp-number">12.1:</span> <span class="cp-title">Transfer encoding</span> <span class="cp-target"> [SI](#target-expl-si) </span>

1.  <span class="cp-title">Use transfer encoding for bandwidth-constrained devices</span> <span class="cp-target"> [SI](#target-expl-si) </span>

    Serving content to bandwitdh-constrained devices (this includes among many others, mobile devices), can be improved via on the fly connection, using the [Transfer-Encoding HTTP header](http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.41) (\[[RFC2616](#ref-RFC2616)\] section 14.41).

<span class="cp-number">12.2:</span> <span class="cp-title">From (meta)data to server information</span> <span class="cp-target"> [SI](#target-expl-si) </span> <span class="cp-target"> [SS](#target-expl-ss) </span>

This checkpoint is on the verge of the server side, and is added here as a proof of concept that the content itself can be used to enhance configuration held by and information sent by the HTTP server.

1.  <span class="cp-title">Convert (meta)data into HTTP information</span> <span class="cp-target"> [SI](#target-expl-si) </span> <span class="cp-target"> [SS](#target-expl-ss) </span>

    Information in or about a resource (data or metadata) may be used by a web server, either as a way to adapt its configuration, as extra information that can be sent in the HTTP headers (standard, or custom), or as an alternate machine-readable (metadata) version of the resouce.

    <span class="example-good">A few examples</span>:

    -   Extracting
        -   meta information (e.g. language, author, the Dublin Core set of information) from HTML documents
        -   the content type from the HTML meta tag
        -   metadata embedded in images
    -   and
        -   Using it to serve the resource (e.g. the language or the content type can be sent in the standard HTTP headers [`Content-Type`](http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.17) and [`Content-Language`](http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.12) (\[[RFC2616](#ref-RFC2616)\] sections 14.17 and 14.12)
        -   Using it to build a metadata database used by the server (e.g. for the indexing policy, for negotiation)
        -   Generating, on the fly, an alternate machine-readable (metadata) version of the resouce (e.g. in RDF)

See also the related [Guideline 8: Provide useful metadata in addition to content negotiation](#gl8).

------------------------------------------------------------------------

<span id="checklists">Tabular checklist of guidelines and checkpoints</span>
----------------------------------------------------------------------------

You may use this table as a quick and convenient tool to assess your progress in following the guidelines given in this document.

Number

Title

[target](#cp-target)

yes

no

N/A

Guideline 1: [Choose URIs wisely](#gl1)

<span class="cp-number">[1.1](#cp1.1)</span>

<span class="cp-title">Short URIs </span>

<span class="cp-target">[SS](#target-expl-ss)</span> <span class="cp-target"> [CM](#target-expl-cm) </span>

<span class="cp-number">[1.2](#cp1.2)</span>

<span class="cp-title">URI case policy</span>

<span class="cp-target">[SS](#target-expl-ss)</span> <span class="cp-target"> [CM](#target-expl-cm) </span>

Guideline 2: [Allow URI management](#gl2)

<span class="cp-number">[2.1](#cp2.1)</span>

<span class="cp-title">URI mapping</span>

<span class="cp-target"> [SI](#target-expl-si) </span>

<span class="cp-number">[2.2](#cp2.2)</span>

<span class="cp-title">Standard redirects</span>

<span class="cp-target"> [SI](#target-expl-si) </span> <span class="cp-target"> [CM](#target-expl-cm) </span>

Guideline 3: [Use independent URIs](#gl3)

<span class="cp-number">[3.1](#cp3.1)</span>

<span class="cp-title">Technology-independent URIs</span>

<span class="cp-target"> [SS](#target-expl-ss) </span> <span class="cp-target"> [CM](#target-expl-cm) </span>

<span class="cp-number">[3.2](#cp3.2)</span>

<span class="cp-title">Identification and Session mechanisms</span>

<span class="cp-target"> [SS](#target-expl-ss) </span> <span class="cp-target"> [CM](#target-expl-cm) </span>

Guideline 4: [Use standard redirects for content that changes](#gl4)

<span class="cp-number">[4.1](#cp4.1)</span>

<span class="cp-title">Standard redirects for changing content</span>

<span class="cp-target"> [SS](#target-expl-ss) </span> <span class="cp-target"> [CM](#target-expl-cm) </span>

<span class="cp-number">[4.2](#cp4.2)</span>

<span class="cp-title">HTTP `410 Gone`</span>

<span class="cp-target">[CM](#target-expl-cm) </span> <span class="cp-target"> [SI](#target-expl-si) </span>

Guideline 5: [Provide indexing agents with useful information](#gl5)

<span class="cp-number">[5.1](#cp5.1)</span>

<span class="cp-title">Indexing policy</span>

<span class="cp-target"> [CM](#target-expl-cm) </span>

<span class="cp-number">[5.2](#cp5.2)</span>

<span class="cp-title"> `Content-Location` </span>

<span class="cp-target"> [SI](#target-expl-si) </span> <span class="cp-target"> [SS](#target-expl-ss) </span> <span class="cp-target"> [CM](#target-expl-cm) </span>

<span class="cp-number">[5.3](#cp5.3)</span>

<span class="cp-title">`Content-Md5` </span>

<span class="cp-target"> [SI](#target-expl-si) </span> <span class="cp-target"> [SS](#target-expl-ss) </span>

Guideline 6: [Provide appropriate caching information](#gl6)

<span class="cp-number">[6.1](#cp6.1)</span>

<span class="cp-title">Cache-related HTTP headers</span>

<span class="cp-target"> [SI](#target-expl-si) </span> <span class="cp-target"> [SS](#target-expl-ss) </span>

<span class="cp-number">[6.2](#cp6.2)</span>

<span class="cp-title">Cache policy</span>

<span class="cp-target"> [SI](#target-expl-si) </span> <span class="cp-target"> [CM](#target-expl-cm) </span>

<span class="cp-number">[6.3](#cp6.3)</span>

<span class="cp-title">Caching generated content</span>

<span class="cp-target"> [SS](#target-expl-ss) </span>

<span class="cp-number">[6.4](#cp6.4)</span>

<span class="cp-title">HTTP HEAD and HTTP GET</span>

<span class="cp-target"> [SI](#target-expl-si) </span>

Guideline 7: [Server-driven content negotiation](#gl7)

<span class="cp-number">[7.1](#cp7.1)</span>

<span class="cp-title">Format negotiation</span>

<span class="cp-target"> [SI](#target-expl-si) </span> <span class="cp-target"> [CM](#target-expl-cm) </span>

<span class="cp-number">[7.2](#cp7.2)</span>

<span class="cp-title">Language negotiation</span>

<span class="cp-target"> [SI](#target-expl-si) </span>

Guideline 8: [Provide useful metadata in addition to content negotiation](#gl8)

<span class="cp-number">[8.1](#cp8.1)</span>

<span class="cp-title">Variants of (X)HTML documents</span>

<span class="cp-target"> [SS](#target-expl-ss) </span> <span class="cp-target"> [CM](#target-expl-cm) </span>

<span class="cp-number">[8.2](#cp8.2)</span>

<span class="cp-title">Navigation among (X)HTML documents</span>

<span class="cp-target"> [CM](#target-expl-cm) </span>

Guideline 9: [Provide default and fall-back solutions](#gl9)

<span class="cp-number">[9.1](#cp9.1)</span>

<span class="cp-title">When negotiation fails </span>

<span class="cp-target"> [SI](#target-expl-si) </span> <span class="cp-target"> [SS](#target-expl-ss) </span>

<span class="cp-number">[9.2](#cp9.2)</span>

<span class="cp-title">HTTP error messages body</span>

<span class="cp-target"> [SI](#target-expl-si) </span> <span class="cp-target"> [SS](#target-expl-ss) </span>

Guideline 10: [Serve resources with correct content-type and character encoding information](#gl10)

<span class="cp-number">[10.1](#cp10.1)</span>

<span class="cp-title">`Content-type`</span>

<span class="cp-target"> [SI](#target-expl-si) </span> <span class="cp-target"> [SS](#target-expl-ss) </span> <span class="cp-target"> [CM](#target-expl-cm) </span>

<span class="cp-number">[10.2](#cp10.2)</span>

<span class="cp-title">Character Encoding</span>

<span class="cp-target"> [SI](#target-expl-si) </span> <span class="cp-target"> [SS](#target-expl-ss) </span> <span class="cp-target"> [CM](#target-expl-cm) </span>

Guideline 11: [Use flexible technology instead of client sniffing/blocking](#gl11)

<span class="cp-number">[11.1](#cp11.1)</span>

<span class="cp-title">Avoid agent sniffing</span>

<span class="cp-target"> [SS](#target-expl-ss) </span> <span class="cp-target"> [CM](#target-expl-cm) </span>

<span class="cp-number">[11.2](#cp11.2)</span>

<span class="cp-title">Avoid agent blocking</span>

<span class="cp-target"> [SS](#target-expl-ss) </span> <span class="cp-target"> [CM](#target-expl-cm) </span>

Guideline 12: [Enrich and Enhance](#gl12)

<span class="cp-number">[12.1](#cp12.1)</span>

<span class="cp-title">Transfer encoding</span>

<span class="cp-target"> [SI](#target-expl-si) </span>

<span class="cp-number">i[12.2](#cp12.2)</span>

<span class="cp-title">From (meta)data to Server information </span>

<span class="cp-target"> [SI](#target-expl-si) </span> <span class="cp-target"> [SS](#target-expl-ss) </span>

------------------------------------------------------------------------

<span id="acknowledgments">Acknowledgments</span>
-------------------------------------------------

The editor would like to thank the following W3C Team members for the initial input and their collaboration in writing this document.

-   [Carine Bournez](http://www.w3.org/People/carine/), W3C
-   [Karl Dubost](http://www.w3.org/People/karl/), W3C
-   Ted Guild, W3C
-   [Yves Lafon](http://www.w3.org/People/Lafon/), W3C

The editor would also like to thank the following people for their early review of the document:

-   Henri Fallon, W3C
-   [Dominique Hazael-Massieux](http://www.w3.org/People/Dom/), W3C
-   [Ian Jacobs](http://www.w3.org/People/Jacobs/), W3C

<span id="references">References</span>
---------------------------------------

RFC1630  
["Universal Resource Identifiers in WWW"](http://www.ietf.org/rfc/rfc1630.txt), T. Berners-Lee, June 1994. Available at http://www.ietf.org/rfc/rfc1630.txt.

RFC2396  
["Uniform Resource Identifiers (URI): Generic Syntax"](http://www.ietf.org/rfc/rfc2396.txt), T. Berners-Lee et al., August 1998. Available at http://www.ietf.org/rfc/rfc2396.txt.

RFC2616  
["Hypertext Transfer Protocol -- HTTP/1.1"](http://www.ietf.org/rfc/rfc2616.txt), R. Fielding et al., June 1999. Available at http://www.ietf.org/rfc/rfc2616.txt.

RFC2617  
["HTTP Authentication: Basic and Digest Access Authentication"](http://www.ietf.org/rfc/rfc2617.txt), J. Franks et al., June 1999. Available at http://www.ietf.org/rfc/rfc2617.txt.

RFC2119  
["Key words for use in RFCs to Indicate Requirement Levels"](http://www.ietf.org/rfc/rfc2119.txt), S. Bradner, March 1997. Available at http://www.ietf.org/rfc/rfc2119.txt

RFC2109  
["HTTP State Management Mechanism"](http://www.ietf.org/rfc/rfc2109.txt), D. Kristol, L. Montulli, February 1997. Available at http://www.ietf.org/rfc/rfc2109.txt.

<span id="ref-HTML">HTML 4.01</span>  
["HTML 4.01 Specification"](http://www.w3.org/TR/1999/REC-html401-19991224/), Dave Raggett, Arnaud Le Hors, Ian Jacobs, 24 December 1999. Available at http://www.w3.org/TR/1999/REC-html401-19991224/.

COOLURIs  
["Cool URIs don't change"](http://www.w3.org/Provider/Style/URI.html), Tim Berners-Lee, 1998. Available at http://www.w3.org/Provider/Style/URI.html.

CUAP  
["Common User Agent Problems"](http://www.w3.org/TR/cuap), Karl Dubost, 28 January 2003. Available at http://www.w3.org/TR/2003/NOTE-cuap-20030128. Latest version at http://www.w3.org/TR/cuap.

WSFAQ  
["The World Wide Web Security FAQ"](http://www.w3.org/Security/Faq/www-security-faq), Lincoln D. Stein & John N. Stewart. Available at http://www.w3.org/Security/Faq/www-security-faq.

ROBOTSPROTO  
[" A Standard for Robot Exclusion"](http://www.robotstxt.org/wc/norobots.html), Martijn Koster et. al., 30 June 1994. Available at http://www.robotstxt.org/wc/norobots.html.

------------------------------------------------------------------------

Created by [Olivier Thereaux](http://www.w3.org/People/olivier/), [&lt;ot@w3.org&gt;](mailto:ot@w3.org).
