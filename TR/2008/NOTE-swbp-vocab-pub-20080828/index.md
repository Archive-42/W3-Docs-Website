[<img src="http://www.w3.org/Icons/w3c_home" alt="W3C" width="72" height="48" />](http://www.w3.org/)

Best Practice Recipes for Publishing RDF Vocabularies
=====================================================

W3C Working Group Note 28 August 2008
-------------------------------------

This version:  
<http://www.w3.org/TR/2008/NOTE-swbp-vocab-pub-20080828/>

Latest version:  
<http://www.w3.org/TR/swbp-vocab-pub/>

Previous version:  
<http://www.w3.org/TR/2008/WD-swbp-vocab-pub-20080123/>

Editors:  
Diego Berrueta, Fundación CTIC

Jon Phipps, Cornell University Library

Previous Editors:  
[Alistair Miles](http://purl.org/net/aliman), STFC Rutherford Appleton Laboratory

Thomas Baker, Goettingen State and University Library

Ralph Swick, W3C

[Copyright](http://www.w3.org/Consortium/Legal/ipr-notice#Copyright) © 2008 [W3C](http://www.w3.org/)<sup>®</sup> ([MIT](http://www.csail.mit.edu/), [ERCIM](http://www.ercim.org/), [Keio](http://www.keio.ac.jp/)), All Rights Reserved. W3C [liability](http://www.w3.org/Consortium/Legal/ipr-notice#Legal_Disclaimer), [trademark](http://www.w3.org/Consortium/Legal/ipr-notice#W3C_Trademarks) and [document use](http://www.w3.org/Consortium/Legal/copyright-documents) rules apply.

------------------------------------------------------------------------

<span id="abstract">Abstract</span>
-----------------------------------

This document describes best practice recipes for publishing vocabularies or ontologies on the Web (in RDF Schema or OWL). The features of each recipe are described in detail, so that vocabulary designers may choose the recipe best suited to their needs. Each recipe introduces general principles and an example configuration for use with an Apache HTTP server (which may be adapted to other environments). The recipes are all designed to be consistent with the architecture of the Web as currently specified, although the associated example configurations have been kept intentionally simple.

Status of this Document
-----------------------

*This section describes the status of this document at the time of its publication. Other documents may supersede this document. A list of current W3C publications and the latest revision of this technical report can be found in the [W3C technical reports index](http://www.w3.org/TR/) at http://www.w3.org/TR/.*

This document was prepared by the [Semantic Web Deployment Working Group](http://www.w3.org/2006/07/SWD/) (SWD), based on previous work by the [Semantic Web Best Practices and Deployment Working Group](http://www.w3.org/2001/sw/BestPractices/) (SWBPD). This work is part of the [W3C Semantic Web Activity](http://www.w3.org/2001/sw/Activity.html).

This document is a Note documenting some best practices. At the time of publication the Semantic Web Deployment Working Group has no plans for further work on this document. This version addresses several comments made on the previous version. It does not, however, attempt to address the [known issue](http://www.w3.org/2006/07/SWD/track/issues/58) related to ['q' values in content negotiation](#q_values) nor does it provide recipes for publishing vocabularies using RDFa \[RDFA\] and GRDDL \[GRDDL\], both of which are recognized as useful techniques for some vocabularies.

Comments are welcome and may be sent to <public-swd-wg@w3.org>; please include the text "comment" in the subject line. All messages received at this address are viewable in a [public archive](http://lists.w3.org/Archives/Public/public-swd-wg/). The Working Group may respond to comments as time is available. We encourage the community to discuss aspects of this Note in the Semantic Web Interest Group mailing list [](mailto:semantic-web@w3.org) ([public archive](http://lists.w3.org/Archives/Public/semantic-web/)).

This document was produced by a group operating under the [5 February 2004 W3C Patent Policy](http://www.w3.org/Consortium/Patent-Policy-20040205/). W3C maintains a [public list of any patent disclosures](http://www.w3.org/2004/01/pp-impl/39408/status) made in connection with the deliverables of the group; that page also includes instructions for disclosing a patent. An individual who has actual knowledge of a patent which the individual believes contains [Essential Claim(s)](http://www.w3.org/Consortium/Patent-Policy-20040205/#def-essential) must disclose the information in accordance with [section 6 of the W3C Patent Policy](http://www.w3.org/Consortium/Patent-Policy-20040205/#sec-Disclosure).

Publication as a Working Group Note does not imply endorsement by the W3C Membership. This is a draft document and may be updated, replaced or obsoleted by other documents at any time. It is inappropriate to cite this document as other than work in progress.

Table of Contents
-----------------

-   [Introduction](#secintro)
-   [Choosing a recipe](#choosing)
-   [Content negotiation](#negotiation)
-   [Recipe 1. Minimal configuration for a 'hash namespace'](#recipe1)
-   [Recipe 2. Minimal configuration for a 'slash namespace'](#recipe2)
-   [Recipe 3. Extended configuration for a 'hash namespace'](#recipe3)
-   [Recipe 4. Extended configuration for a 'slash namespace', using a single HTML document](#recipe4)
-   [Recipe 5. Extended configuration for a 'slash namespace', using multiple HTML documents](#recipe5)
-   [Recipe 6. Extended configuration for a 'slash namespace', using multiple HTML documents and a query service](#recipe6)
-   [Requirements](#requirements)

<!-- -->

-   [Acknowledgements](#ack)
-   [References](#references)
-   [Appendix A. Vocabularies that use PURLs for naming](#purls)
    -   PURL adapted recipes: [Recipe 1a.](#recipe1a) | [Recipe 2a.](#recipe2a) | [Recipe 3a.](#recipe3a) | [Recipe 4a.](#recipe4a) | [Recipe 5a.](#recipe5a)
-   [Appendix B: URI namespaces](#naming)
-   [Appendix C. Vocabulary URIs based on a 303-redirect service](#redirect)
-   [Appendix D: Apache configuration](#apache)

------------------------------------------------------------------------

Introduction
------------

This document is intended for the creators and maintainers of vocabularies in RDFS and OWL (vocabulary and ontology are used interchangeably in the context of this specification). It provides step-by-step instructions for publishing vocabularies on the Web, giving example configurations designed to cover the most common cases. For more information about RDFS and OWL see \[[RDFS](#ref-RDFS), [RDFPrimer](#ref-RDFPrimer), [OWLGuide](#ref-OWLGuide), [OWLFeatures](#ref-OWLFeatures)\].

This “cookbook” gives “recipes” describing the steps needed to publish a vocabulary on a Web server, and to configure the Web server to support Semantic Web applications. The section “[Choosing a recipe](#choosing)” provides guidance for choosing the most appropriate recipe depending on the situation and requirements. Once the recipe has been chosen, the reader can follow the steps, adapting the examples for a particular vocabulary.

All of the recipes give example configurations for the Apache HTTP server \[[APACHE20](#ref-APACHE20)\]. For those not already familiar with Apache configuration, the appendix on [Apache configuration](#apache) provides a short introduction to the Apache configuration mechanisms used in the examples and basic information on troubleshooting.

While the provided configuration examples are specific to an Apache HTTP server, the general principles apply to non-Apache environments as well. The Working Group invites contributions of additional bindings for non-Apache servers. The W3C has provided a wiki page to collect these [non-Apache bindings and recommendations](http://esw.w3.org/topic/VocabPublishingRecipes).

This document is primarily intended for creators and maintainers of existing vocabularies who are looking for guidance on how their vocabularies should best be published on the Web. It is **not** intended to provide detailed and exhaustive guidance on choosing an appropriate URI namespace for naming a new vocabulary and its constituent terms. However, some basic technical information about URI namespaces, including some considerations relevant to choosing a URI namespace for a vocabulary, is given in the section on [URI namespaces](#naming).

The recipes have all been designed to be consistent with the architectural principles of the World Wide Web as currently specified in the document "Architecture of the World Wide Web" \[[AWWW04](#ref-AWWW04)\]. In order to verify that they are in fact so, a set of [minimum requirements](#minimumrequirements) is described at the end of this document. These minimum requirements are intended to articulate the fundamental requirements of Semantic Web applications. All of the recipes when correctly implemented should satisfy the minimum requirements. A set of [extended requirements](#extendedrequirements) is also given. The extended requirements are intended to articulate further practical needs of Semantic Web application developers, such as providing documentation about a vocabulary on Web pages in HTML. Recipes 3, 4, 5 and 6, when correctly implemented, should satisfy the extended requirements.

In order to satisfy the extended requirements, the recipes 3, 4, 5, and 6 configure a server to perform [content negotiation](#negotiation). A brief explanation of this process is given in the section on [content negotiation](#negotiation), along with a description of some options for coping with variability in deployed client behavior.

[Appendix A](#purls) describes how to adapt the six recipes given in the main body of the document for the special case of vocabularies identified using "persistent URLs", or PURLs, which are resolved using PURL services such as <span class="inlineCode">http://purl.org/</span> \[[PURL](#ref-PURL)\].

For brevity, the rationale behind each of the recipes is not described in this document. Readers wishing to go deeper should consult [URI/Resource Relationships](http://www.w3.org/TR/2004/REC-webarch-20041215/#id-resources) in "Architecture of the World Wide Web" \[[AWWW04](#ref-AWWW04)\], [fragment identifiers](http://gbiv.com/protocols/uri/rfc/rfc3986.html#fragment) in HTTP URIs \[[RFC3986](#ref-RFC3986)\] \[[RFC2616](#ref-RFC2616)\], the W3C Interest Group Note: "Cool URIs for the Semantic Web" \[[COOLURI](#ref-COOLURI)\], and the W3C Technical Architecture Group's resolution on the range of HTTP dereferencing (aka "httpRange-14"). [\[HTTPRANGE14\]](#ref-HTTPRANGE14)

Finally, it should be noted that the Recipes described in this Cookbook are not the only way to publish a vocabulary or ontology for use by Semantic Web applications. [RDFa](http://www.w3.org/TR/xhtml-rdfa-primer/) and its cousin [GRDDL](http://www.w3.org/TR/grddl-primer/) may in the near future provide an effective method for publishing documents for use by both people and machines. But a useful discussion of RDFa and GRDDL is well beyond the scope of this document.

------------------------------------------------------------------------

Choosing a recipe
-----------------

The choice of recipe depends primarily on what types of content you wish to provide from your vocabulary URI and the URIs of the classes and properties defined by your vocabulary. URI namespaces are described in more detail in [Appendix B](#naming); throughout this document, the expression "vocabulary URI" can be interpreted as "vocabulary namespace URI".

### Quick Selection Table

<table><tbody><tr class="odd"><td><strong>Configuration</strong></td><td><strong>hash namespace</strong></td><td><strong>slash namespace</strong></td></tr><tr class="even"><td>Machine processable RDF</td><td><a href="#recipe1">Recipe 1</a></td><td><a href="#recipe2">Recipe 2</a></td></tr><tr class="odd"><td>Machine processable RDF (using PURLs)</td><td><a href="#recipe1a">Recipe 1a</a></td><td><a href="#recipe2a">Recipe 2a</a></td></tr><tr class="even"><td>RDF and Single HTML document</td><td><a href="#recipe3">Recipe 3</a></td><td><a href="#recipe4">Recipe 4</a></td></tr><tr class="odd"><td>RDF and Single HTML document (using PURLs)</td><td><a href="#recipe3a">Recipe 3a</a></td><td><a href="#recipe4a">Recipe 4a</a></td></tr><tr class="even"><td>RDF and Multiple HTML documents</td><td> </td><td><a href="#recipe5">Recipe 5</a> or <a href="#recipe6">Recipe 6</a></td></tr><tr class="odd"><td>RDF and Multiple HTML documents(using PURLs)</td><td> </td><td><a href="#recipe5a">Recipe 5a</a></td></tr></tbody></table>

 

### Simple configuration

The simplest recipes configure your server to provide only machine-processable (RDF) content from the vocabulary URI.

If you are using a [hash namespace](#hash) see [Recipe 1](#recipe1) or, if using PURLs, [Recipe 1a](#recipe1a).

If you are using a [slash namespace](#slash) see [Recipe 2](#recipe2) or, if using PURLs, [Recipe 2a](#recipe2a).

### Extended configuration

The extended recipes configure your server to provide both machine-processable (RDF) and human-readable (HTML) content (see also the section [content negotiation](#negotiation) below). These recipes are easily extended to serve additional content types.

If you are using a [hash namespace](#hash) and want to provide both RDF and HTML content, see [Recipe 3](#recipe3) or, if using PURLs, [Recipe 3a](#recipe3a).

If you are using a [slash namespace](#slash) and want to provide both RDF and HTML content, where the HTML content is contained in a single document, see [Recipe 4](#recipe4) or, if using PURLs, [Recipe 4a](#recipe4a).

If you are using a [slash namespace](#slash) and want to provide both RDF and HTML content, where the HTML content is served as individual hyperlinked documents for each class or property, with an overview (e.g. a table of contents or an index) at the vocabulary URI, see [Recipe 5](#recipe5) or, if using PURLs, [Recipe 5a](#recipe5a).

If you are using a [slash namespace](#slash) and want to provide both RDF and HTML content, where the HTML content is served as individual hyperlinked documents for each class or property, and where the RDF is served as bounded descriptions of each class or property, see [Recipe 6](#recipe6).

------------------------------------------------------------------------

Content negotiation
-------------------

When an HTTP client attempts to dereference a URI, it can specify which type (or types) of content it would prefer to receive in response. It does this by including an 'Accept:' field in the header of the request message, the value of which gives MIME types corresponding to preferred content types. For example, an HTTP client that prefers RDF/XML content might include the following field in the header of each request:

    Accept: application/rdf+xml

Similarly, an HTTP client that prefers HTML content, such as a Web browser, might include something like the following field in the header of each request:

    Accept: application/xhtml+xml,text/html

It is accepted as a principle of good practice that HTTP clients SHOULD include an 'Accept:' field in a request header, explicitly specifying those content types that may be handled.

When the server receives a request, it can use the value(s) of the 'Accept:' field to select the most appropriate response from those available, attempting to meet the preference of the client as closely as possible. This process is an example of [content negotiation](http://www.w3.org/TR/webarch/#def-coneg) \[[AWWW04](#ref-AWWW04)\].

Recipes [1](#recipe1) and [2](#recipe2) below **do not** configure the server to perform any content negotiation. RDF/XML is the only representation type available, and is provided irrespective of the value of the 'Accept:' header sent by the client.

Recipes [3](#recipe3), [4](#recipe4), [5](#recipe5) and [6](#recipe6) below **do** configure the server to perform content negotiation based on the value of the 'Accept:' header field sent by the client. However, the proposed configuration examples do not handle the full HTTP specification with respect to content negotiation. Actually, although the examples accommodate some client ordering preferences in content negotiation, they do not handle the 'q' metrics. Therefore, HTTP clients which use q-values in the 'Accept' header may obtain unexpected results.

**Editor's note**: The Working Group is considering alternatives to be fully compliant with the HTTP specification, while keeping the recipes as simple as possible. This is recorded as [ISSUE-58](http://www.w3.org/2006/07/SWD/track/issues/58) in the Working Group's issue process. Comments on this issue are invited, and should be sent in an [email to the SWD Working Group](mailto:public-swd-wg@w3.org?subject=Comment:%20ISSUE-58), starting the subject line with "Comment: ISSUE-58".

### Default behavior

When the server is configured to perform content negotiation, a 'default behavior' must be specified -- the server must be able to determine which response should be sent in the cases where:

1.  the client does not include an 'Accept:' field in the request message header (i.e. the client doesn't specify a preference)
2.  the values of the 'Accept:' field do not match any of the available content types (i.e. the client asks for something other than RDF/XML or HTML).

In recipes 3, 4, 5, and 6 below, RDF/XML is configured as the default response. This is chosen to minimize the impact on deployed Semantic Web applications that do not currently send appropriate 'Accept:' header field values for RDF content. Bear in mind that if HTML is configured as the default response, some existing Semantic Web applications expecting to receive RDF content will receive HTML content instead, and will break.

### Providing an 'Accept:' header

Developers and maintainers of Semantic Web applications that expect to process RDF content, and that do not *currently* provide an 'Accept:' header field in HTTP requests, should plan to provide such a header in the future.

A suitable value of the 'Accept:' field is as follows:

    Accept: application/rdf+xml,application/xml;q=0.5

The 'q=0.5' value in the above example indicates a relative quality value as specified by [Section 14](http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html) the HTTP 1.1 protocol \[[RFC2616](#ref-RFC2616)\]. The default 'q' value if none is specified is 1.0. This example can be read as "I prefer 'application/rdf+xml, giving it the default relative quality value of 1.0, but will still accept application/xml, although I consider it to be only 50% of the value of application/rdf+xml".

### Special Default Behavior for Internet Explorer

Unlike most other browsers, Internet Explorer sends 'Accept:' headers containing a catch-all <span class="inlineCode">\*/\*</span> without a mediating 'q' value. In contrast, both Firefox and Safari accept <span class="inlineCode">\*/\*;q=0.5</span>, and Opera accepts <span class="inlineCode">\*/\*;q=0.1</span>. Establishing a default behavior that takes this into account requires the insertion of a rewrite condition based on the value of the 'User-agent:' header field:

    RewriteCond %{HTTP_USER_AGENT} ^Mozilla/.*

Additionally, if you also want to retain 'clickable' URIs in IE, you must set HTML as the default response (see comments in examples for instructions on how to do this).

### Server configuration testing

Effectively testing the results of content negotiation can become fairly complex for some of the Recipes. In order to facilitate the testing of the results of content negotiation on a single URI a [content negotiation testing service](http://idi.fundacionctic.org/vapour) has been established.

This service will request a provided URI from a server, run a test suite specifically designed to test the response of the server against the Recipe specifications, and display a pass/fail report on each set of tests as well as a detailed explanation of its findings.

The [source code for the testing service](http://sourceforge.net/projects/vapour/) is also available.

------------------------------------------------------------------------

Recipe 1. Minimal configuration for a 'hash namespace'
------------------------------------------------------

Jump straight to: [Example configuration](#recipe1example) | [Testing the configuration](#recipe1testing)

This recipe gives an example of the **simplest possible configuration** for a vocabulary that uses a [hash namespace](#hash). The recipe configures the server to provide machine-processable (RDF) content from the vocabulary URI, thereby satisfying the [minimum requirements](#minimumrequirements). This is illustrated by the following diagram:

#### Dereference the vocabulary URI

![client-server interaction](img/deref-ont-uri-min.png)

(Serve the RDF description of the vocabulary, encoded as RDF/XML.)

### Example Configuration

For a vocabulary …

    http://www.w3.org/2006/07/SWD/recipes/examples-20080421/example1

defining classes …

    http://www.w3.org/2006/07/SWD/recipes/examples-20080421/example1#ClassA
    http://www.w3.org/2006/07/SWD/recipes/examples-20080421/example1#ClassB

and properties …

    http://www.w3.org/2006/07/SWD/recipes/examples-20080421/example1#propA
    http://www.w3.org/2006/07/SWD/recipes/examples-20080421/example1#propB

#### Step 1

Create a file called <span class="inlineCode">example1.rdf</span> that contains a ***complete*** RDF/XML serialization of the vocabulary. I.e. ***all*** resources defined by the vocabulary are described in this file.

#### Step 2

Copy the <span class="inlineCode">example1.rdf</span> file to the <span class="inlineCode">/apachedocumentroot/examples/</span> directory on the server.

#### Step 3

Add the following directives to the <span class="inlineCode">.htaccess</span> file in the <span class="inlineCode"> /apachedocumentroot/examples/</span> directory on the server:

    # Directive to ensure *.rdf files served as appropriate content type,
    # if not present in main apache config
    AddType application/rdf+xml .rdf

    # Rewrite engine setup
    RewriteEngine On
    RewriteBase /examples

    # Rewrite rule to serve RDF/XML content from the vocabulary URI
    RewriteRule ^example1$ example1.rdf

(N.B. If a <span class="inlineCode">.htaccess</span> file does not exist, create one.)

### Testing the Configuration

If this configuration is working, it should support the following interactions:

#### Dereference the vocabulary URI

Test message (substitute correct path and host for your vocabulary URI):

    GET /examples/example1 HTTP/1.1
    Host: example.com

Response header should contain the following fields:

    HTTP/1.x 200 OK
    Content-Type: application/rdf+xml

------------------------------------------------------------------------

Recipe 2. Minimal configuration for a 'slash namespace'
-------------------------------------------------------

Jump straight to: [Example configuration](#recipe2example) | [Testing the configuration](#recipe2testing)

This recipe gives an example of the **simplest possible configuration** for a vocabulary that uses a [slash namespace](#slash). The recipe configures the server to provide machine-processable (RDF) content from the vocabulary URI, and to redirect the client to the vocabulary URI from class and property URIs, thereby satisfying the [minimum requirements](#minimumrequirements). This is illustrated by the following diagrams:

#### Dereference the vocabulary URI

![Example 2 client-server interaction.](img/deref-ont-uri-min.png)

(Serve the RDF description of the vocabulary, encoded as RDF/XML.)

#### Dereference the URI of a class or property

![Example 2 client-server interaction.](img/deref-cp-uri-min.png)

(Redirect the client to the vocabulary URI.)

### Example Configuration

For vocabulary …

    http://www.w3.org/2006/07/SWD/recipes/examples-20080421/example2/

defining classes …

    http://www.w3.org/2006/07/SWD/recipes/examples-20080421/example2/ClassA
    http://www.w3.org/2006/07/SWD/recipes/examples-20080421/example2/ClassB

and properties …

    http://www.w3.org/2006/07/SWD/recipes/examples-20080421/example2/propA
    http://www.w3.org/2006/07/SWD/recipes/examples-20080421/example2/propB

#### Step 1

Create a file called <span class="inlineCode">example2.rdf</span> that contains a ***complete*** RDF/XML serialization of the vocabulary. I.e. ***all*** resources defined by the vocabulary are described in this file.

#### Step 2

Copy the <span class="inlineCode">example2.rdf</span> file to the <span class="inlineCode">/apachedocumentroot/examples/</span> directory on the server.

#### Step 3

Add the following directives to the <span class="inlineCode">.htaccess</span> file in the <span class="inlineCode"> /apachedocumentroot/examples/</span> directory on the server:

    # Turn off MultiViews
    Options -MultiViews

    # Directive to ensure *.rdf files served as appropriate content type,
    # if not present in main apache config
    AddType application/rdf+xml .rdf

    # Rewrite engine setup
    RewriteEngine On
    RewriteBase /examples

    # Rewrite rule to redirect 303 from any class or prop URI
    RewriteRule ^example2/.+ example2/ [R=303]

    # Rewrite rule to serve RDF/XML content from the vocabulary URI
    RewriteRule ^example2/$ example2.rdf

(N.B. If a <span class="inlineCode">.htaccess</span> file does not exist, create one.)

The directory option 'MultiViews' must be disabled for this configuration to work, and a directory called <span class="inlineCode">/apachedocumentroot/examples/example2/</span> must ***not*** actually exist on the server's file system.

### Testing the Configuration

If this configuration is working, it should support the following interactions:

#### Dereference the vocabulary URI

Test message (substitute correct path and host for your vocabulary URI):

    GET /examples/example2/ HTTP/1.1
    Host: example.com

Response header should contain the following fields:

    HTTP/1.x 200 OK
    Content-Type: application/rdf+xml

#### Dereference the URI of a class or property

Test message (substitute correct path and host for your class or property URI):

    GET /examples/example2/ClassA HTTP/1.1
    Host: example.com

Response header should contain the following fields, with your vocabulary URI as the value of the 'Location' field:

    HTTP/1.x 303 See Other
    Location: http://example.com/examples/example2/

------------------------------------------------------------------------

Recipe 3. Extended configuration for a 'hash namespace'
-------------------------------------------------------

Jump straight to: [Example configuration](#recipe3example) | [Testing the configuration](#recipe3testing) | [Notes](#recipe3notes)

This recipe gives an example of an **extended configuration** for a vocabulary with a [hash namespace](#hash). The recipe configures the server to provide either human-readable (HTML) or machine-processable (RDF) content from the vocabulary URI, depending on what is requested, thereby satisfying the [extended requirements](#extendedrequirements). This is illustrated by the following diagrams:

#### Dereference the vocabulary URI, requesting HTML content

![client-server interaction](img/deref-ont-uri-html.png)

(Redirect the client to current HTML documentation for the vocabulary.)

#### Dereference the vocabulary URI, requesting RDF content

![client-server interaction](img/deref-ont-uri-rdf.png)

(Redirect the client to the current RDF description of the vocabulary.)

### Example Configuration

For vocabulary …

    http://www.w3.org/2006/07/SWD/recipes/examples-20080421/example3

defining classes …

    http://www.w3.org/2006/07/SWD/recipes/examples-20080421/example3#ClassA
    http://www.w3.org/2006/07/SWD/recipes/examples-20080421/example3#ClassB

and properties …

    http://www.w3.org/2006/07/SWD/recipes/examples-20080421/example3#propA
    http://www.w3.org/2006/07/SWD/recipes/examples-20080421/example3#propB

#### Step 1

Create a file called <span class="inlineCode">2005-10-31.rdf</span> that contains a ***complete*** RDF/XML serialization of the vocabulary, as at 2005-10-31 (or whatever the current date is). I.e. ***all*** resources defined by the vocabulary are described in this file, and this file represents a 'snapshot' or 'version' of the vocabulary.

#### Step 2

Create a file called <span class="inlineCode">2005-10-31.html</span> that contains HTML content documentation about all classes and properties defined by the vocabulary as at 2005-10-31 (or whatever the current date is). This document may include sections for each of the classes/properties documented, each section being headed by an HTML anchor whose name is identical to the fragment identifier of the documented class or property.

#### Step 3

Copy <span class="inlineCode">2005-10-31.rdf</span> and <span class="inlineCode">2005-10-31.html</span> to the directory <span class="inlineCode">/apachedocumentroot/examples/example3-content/</span> on the server.

#### Step 4

Add the following directives to the <span class="inlineCode">.htaccess</span> file in the <span class="inlineCode"> /apachedocumentroot/examples/</span> directory:

    # Turn off MultiViews
    Options -MultiViews

    # Directive to ensure *.rdf files served as appropriate content type,
    # if not present in main apache config
    AddType application/rdf+xml .rdf

    # Rewrite engine setup
    RewriteEngine On
    RewriteBase /examples

    # Rewrite rule to serve HTML content from the vocabulary URI if requested
    RewriteCond %{HTTP_ACCEPT} !application/rdf\+xml.*(text/html|application/xhtml\+xml)
    RewriteCond %{HTTP_ACCEPT} text/html [OR]
    RewriteCond %{HTTP_ACCEPT} application/xhtml\+xml [OR]
    RewriteCond %{HTTP_USER_AGENT} ^Mozilla/.*
    RewriteRule ^example3$ example3-content/2005-10-31.html [R=303]

    # Rewrite rule to serve RDF/XML content from the vocabulary URI if requested
    RewriteCond %{HTTP_ACCEPT} application/rdf\+xml
    RewriteRule ^example3$ example3-content/2005-10-31.rdf [R=303]

    # Choose the default response
    # ---------------------------

    # Rewrite rule to serve the RDF/XML content from the vocabulary URI by default
    RewriteRule ^example3$ example3-content/2005-10-31.rdf [R=303]

    # Rewrite rule to serve HTML content from the vocabulary URI by default (disabled)
    # (To enable this option, uncomment the rewrite rule below, and comment
    # out the rewrite rule directly above)
    # RewriteRule ^example3$ example3-content/2005-10-31.html [R=303]

(N.B. If a <span class="inlineCode">.htaccess</span> file does not exist, create one.)

### Testing the Configuration

If this configuration is working, it should support the following interactions:

#### Dereference the vocabulary URI, requesting HTML content

Test message (substitute correct path and host for your vocabulary URI):

    GET /examples/example3 HTTP/1.1
    Host: example.com
    Accept: text/html

Response header should contain the following fields, with your HTML content location as the value of the 'Location' field:

    HTTP/1.x 303 See Other
    Location: http://example.com/examples/example3-content/2005-10-31.html

#### Dereference the vocabulary URI, requesting RDF content

Test message (substitute correct path and host for your vocabulary URI):

    GET /examples/example3 HTTP/1.1
    Host: example.com
    Accept: application/rdf+xml

Response header should contain the following fields, with your current RDF content location as the value of the 'Location' field:

    HTTP/1.x 303 See Other
    Location: http://example.com/examples/example3-content/2005-10-31.rdf

#### Dereference the vocabulary URI, default case

Test message (substitute correct path and host for your vocabulary URI):

    GET /examples/example3 HTTP/1.1
    Host: example.com

Response header should contain the following fields, with your current RDF content location as the value of the 'Location' field:

    HTTP/1.x 303 See Other
    Location: http://example.com/examples/example3-content/2005-10-31.rdf

### Notes

This example uses the modification date of the vocabulary version to create file names. It would also be possible to use version numbers (e.g. '1.01') instead of dates for this purpose, or indeed any convention that makes it possible to differentiate between vocabulary versions, and helps to keep track of version history.

See also the section on [content negotiation](#negotiation).

------------------------------------------------------------------------

Recipe 4. Extended configuration for a 'slash namespace', using a single HTML document
--------------------------------------------------------------------------------------

Jump straight to: [Example configuration](#recipe4example) | [Testing the configuration](#recipe4testing) | [Notes](#recipe4notes)

This recipe gives an example of an **extended configuration** for a vocabulary with a [slash namespace](#slash). The recipe configures the server to provide either human-readable (HTML) or machine-processable (RDF) content from the vocabulary URI, depending on what is requested, and to redirect the client from class and property URIs to the appropriate content locations, again depending on what is requested, thereby satisfying the [extended requirements](#extendedrequirements). The HTML documentation is served as a single file. This behavior is illustrated by the following diagrams:

#### Dereference the vocabulary URI, requesting HTML content

![client-server interaction](img/deref-ont-uri-html.png)

(As per [Recipe 3](#recipe3), redirect the client to current HTML documentation for the vocabulary.)

#### Dereference the vocabulary URI, requesting RDF content

![client-server interaction](img/deref-ont-uri-rdf.png)

(As per [Recipe 3](#recipe3), redirect the client to the current RDF description of the vocabulary.)

#### Dereference the URI of a class or property, requesting HTML content

![client-server interaction](img/deref-cp-uri-html.png)

(Redirect the client to the fragment of current HTML documentation for the vocabulary relevant to the class or property.)

#### Dereference the URI of a class or property, requesting RDF content

![client-server interaction](img/deref-cp-uri-rdf.png)

(Redirect the client to the current RDF description of the vocabulary.)

### Example Configuration

For vocabulary …

    http://www.w3.org/2006/07/SWD/recipes/examples-20080421/example4/

defining classes …

    http://www.w3.org/2006/07/SWD/recipes/examples-20080421/example4/ClassA
    http://www.w3.org/2006/07/SWD/recipes/examples-20080421/example4/ClassB

and properties …

    http://www.w3.org/2006/07/SWD/recipes/examples-20080421/example4/propA
    http://www.w3.org/2006/07/SWD/recipes/examples-20080421/example4/propB

#### Step 1

Create a file called <span class="inlineCode">2005-10-31.rdf</span> that contains a ***complete*** RDF/XML serialization of the vocabulary, as at 2005-10-31 (or whatever the current date is). I.e. ***all*** resources defined by the vocabulary are described in this file, and this file represents a 'snapshot' or 'version' of the vocabulary.

#### Step 2

Create a file called <span class="inlineCode">2005-10-31.html</span> that contains HTML content documentation about all classes and properties defined by the vocabulary as at 2005-10-31 (or whatever the current date is). This document may include sections for each of the classes/properties documented, each section being headed by an HTML anchor whose name is identical to the fragment identifier of the documented class or property.

#### Step 3

Copy <span class="inlineCode">2005-10-31.rdf</span> and <span class="inlineCode">2005-10-31.html</span> to the directory <span class="inlineCode">/apachedocumentroot/examples/example4-content/</span> on the server.

#### Step 4

Add the following directives to the <span class="inlineCode">.htaccess</span> file in the <span class="inlineCode"> /apachedocumentroot/examples/</span> directory:

    # Turn off MultiViews
    Options -MultiViews

    # Directive to ensure *.rdf files served as appropriate content type,
    # if not present in main apache config
    AddType application/rdf+xml .rdf

    # Rewrite engine setup
    RewriteEngine On
    RewriteBase /examples

    # Rewrite rule to serve HTML content from the vocabulary URI if requested
    RewriteCond %{HTTP_ACCEPT} !application/rdf\+xml.*(text/html|application/xhtml\+xml)
    RewriteCond %{HTTP_ACCEPT} text/html [OR]
    RewriteCond %{HTTP_ACCEPT} application/xhtml\+xml [OR]
    RewriteCond %{HTTP_USER_AGENT} ^Mozilla/.*
    RewriteRule ^example4/$ example4-content/2005-10-31.html [R=303]

    # Rewrite rule to serve directed HTML content from class/prop URIs
    RewriteCond %{HTTP_ACCEPT} !application/rdf\+xml.*(text/html|application/xhtml\+xml)
    RewriteCond %{HTTP_ACCEPT} text/html [OR]
    RewriteCond %{HTTP_ACCEPT} application/xhtml\+xml [OR]
    RewriteCond %{HTTP_USER_AGENT} ^Mozilla/.*
    RewriteRule ^example4/(.+) example4-content/2005-10-31.html#$1 [R=303,NE]

    # Rewrite rule to serve RDF/XML content if requested
    RewriteCond %{HTTP_ACCEPT} application/rdf\+xml
    RewriteRule ^example4/ example4-content/2005-10-31.rdf [R=303]

    # Choose the default response
    # ---------------------------

    # Rewrite rule to serve RDF/XML content by default
    RewriteRule ^example4/ example4-content/2005-10-31.rdf [R=303]

    # Rewrite rules to serve HTML content by default (disabled)
    # (To enable this option, uncomment the two rewrite rules below,
    # and comment out the rewrite rule directly above)
    # RewriteRule ^example4/$ example4-content/2005-10-31.html [R=303]
    # RewriteRule ^example4/(.+) example4-content/2005-10-31.html#$1 [R=303,NE]
     

(N.B. If a <span class="inlineCode">.htaccess</span> file does not exist, create one.)

For this configuration to work, the directory option 'MultiViews' must be disabled, and a directory called <span class="inlineCode">/apachedocumentroot/examples/example4/</span> must ***not*** actually exist on the server's file system.

### Testing the Configuration

If this configuration is working, it should support the following interactions:

#### Dereference the vocabulary URI, requesting HTML content

Test message (substitute correct path and host for your vocabulary URI):

    GET /examples/example4/ HTTP/1.1
    Host: example.com
    Accept: text/html

Response header should contain the following fields, with your HTML content location as the value of the 'Location' field:

    HTTP/1.x 303 See Other
    Location: http://example.com/examples/example4-content/2005-10-31.html

#### Dereference the vocabulary URI, requesting RDF content

Test message (substitute correct path and host for your vocabulary URI):

    GET /examples/example4/ HTTP/1.1
    Host: example.com
    Accept: application/rdf+xml

Response header should contain the following fields, with your RDF content location as the value of the 'Location' field:

    HTTP/1.x 303 See Other
    Location: http://example.com/examples/example4-content/2005-10-31.rdf

#### Dereference the vocabulary URI, default case

Test message (substitute correct path and host for your vocabulary URI):

    GET /examples/example4/ HTTP/1.1
    Host: example.com

Response header should contain the following fields, with your RDF content location as the value of the 'Location' field:

    HTTP/1.x 303 See Other
    Location: http://example.com/examples/example4-content/2005-10-31.rdf

#### Dereference the URI of a class or property, requesting HTML content

Test message (substitute correct path and host for your class or property URI):

    GET /examples/example4/ClassA HTTP/1.1
    Host: example.com
    Accept: text/html

Response header should contain the following fields, with your HTML content location (plus appropriate fragment identifier) as the value of the 'Location' field:

    HTTP/1.x 303 See Other
    Location: http://example.com/examples/example4-content/2005-10-31.html#ClassA

#### Dereference the URI of a class or property, requesting RDF content

Test message (substitute correct path and host for your class or property URI):

    GET /examples/example4/ClassA HTTP/1.1
    Host: example.com
    Accept: application/rdf+xml

Response header should contain the following fields, with your RDF content location as the value of the 'Location' field:

    HTTP/1.x 303 See Other
    Location: http://example.com/examples/example4-content/2005-10-31.rdf

#### Dereference the URI of a class or property, default case

Test message (substitute correct path and host for your class or property URI):

    GET /examples/example4/ClassA HTTP/1.1
    Host: example.com

Response header should contain the following fields, with your RDF content location as the value of the 'Location' field:

    HTTP/1.x 303 See Other
    Location: http://example.com/examples/example4-content/2005-10-31.rdf

### Notes

As with [Recipe 3](#recipe3), this example uses the modification date of the vocabulary version to create file names. It would also be possible to use version numbers (e.g. '1.01') instead of dates for this purpose, or indeed any convention that makes it possible to differentiate between vocabulary versions, and helps to keep track of version history.

See also the section on [content negotiation](#negotiation).

------------------------------------------------------------------------

Recipe 5. Extended configuration for a 'slash namespace', using multiple HTML documents
---------------------------------------------------------------------------------------

Jump straight to: [Example configuration](#recipe5example) | [Testing the configuration](#recipe5testing) | [Notes](#recipe5notes)

This recipe gives an example of an **extended configuration** for a vocabulary with a [slash namespace](#slash). The recipe configures the server to provide both machine-processable (RDF) and human-readable (HTML) content, depending on what is requested, with the HTML documentation being given as multiple hyperlinked HTML documents plus an overview document. This behavior is illustrated by the following diagrams:

#### Dereference the vocabulary URI, requesting HTML content

![client-server interaction](img/deref-ont-uri-html-multi.png)

(Redirect the client to current HTML overview documentation for the vocabulary.)

#### Dereference the vocabulary URI, requesting RDF content

![client-server interaction](img/deref-ont-uri-rdf.png)

(As per [Recipe 3](#recipe3) and [Recipe 4](#recipe4), redirect the client to the current RDF description of the vocabulary.)

#### Dereference the URI of a class or property, requesting HTML content

![client-server interaction](img/deref-cp-uri-html-multi.png)

(Redirect the client to current HTML documentation for the class or property.)

#### Dereference the URI of a class or property, requesting RDF content

![client-server interaction](img/deref-cp-uri-rdf.png)

(As per [Recipe 4](#recipe4), redirect the client to the current RDF description of the vocabulary.)

### Example Configuration

For vocabulary …

    http://www.w3.org/2006/07/SWD/recipes/examples-20080421/example5/

defining classes …

    http://www.w3.org/2006/07/SWD/recipes/examples-20080421/example5/ClassA
    http://www.w3.org/2006/07/SWD/recipes/examples-20080421/example5/ClassB

and properties …

    http://www.w3.org/2006/07/SWD/recipes/examples-20080421/example5/propA
    http://www.w3.org/2006/07/SWD/recipes/examples-20080421/example5/propB

#### Step 1

Create a file called <span class="inlineCode">2005-10-31.rdf</span> that contains a ***complete*** RDF/XML serialization of the vocabulary, as at 2005-10-31 (or whatever the current date is). I.e. ***all*** resources defined by the vocabulary are described in this file, and this file represents a 'snapshot' or 'version' of the vocabulary.

#### Step 2

Copy <span class="inlineCode">2005-10-31.rdf</span> to the directory <span class="inlineCode">/apachedocumentroot/examples/example5-content/</span> on the server.

#### Step 3

Create files <span class="inlineCode">ClassA.html</span> <span class="inlineCode">ClassB.html</span> <span class="inlineCode">propA.html</span> <span class="inlineCode">propB.html</span> each of which contains HTML content documentation relevant to the class or property with the corresponding local name, as at 2005-10-31 (or whatever the current date is). Create a file <span class="inlineCode">index.html</span> that contains HTML content documentation about the vocabulary itself, with hyperlinks to all class or property documentation.

#### Step 4

Copy <span class="inlineCode">ClassA.html</span> <span class="inlineCode">ClassB.html</span> <span class="inlineCode">propA.html</span> <span class="inlineCode">propB.html</span> and <span class="inlineCode">index.html</span> to the directory <span class="inlineCode">/apachedocumentroot/examples/example5-content/2005-10-31-docs/</span> on the server.

#### Step 5

Add the following directives to the <span class="inlineCode">.htaccess</span> file in the <span class="inlineCode"> /apachedocumentroot/examples/</span> directory:

    # Turn off MultiViews
    Options -MultiViews

    # Directive to ensure *.rdf files served as appropriate content type,
    # if not present in main apache config
    AddType application/rdf+xml .rdf

    # Rewrite engine setup
    RewriteEngine On
    RewriteBase /examples

    # Rewrite rule 1: to serve HTML content from the namespace URI if requested
    RewriteCond %{HTTP_ACCEPT} !application/rdf\+xml.*(text/html|application/xhtml\+xml)
    RewriteCond %{HTTP_ACCEPT} text/html [OR]
    RewriteCond %{HTTP_ACCEPT} application/xhtml\+xml [OR]
    RewriteCond %{HTTP_USER_AGENT} ^Mozilla/.*
    RewriteRule ^example5/$ example5-content/2005-10-31-docs/index.html [R=303]

    # Rewrite rule 2: to serve HTML content from class or prop URIs if requested
    RewriteCond %{HTTP_ACCEPT} !application/rdf\+xml.*(text/html|application/xhtml\+xml)
    RewriteCond %{HTTP_ACCEPT} text/html [OR]
    RewriteCond %{HTTP_ACCEPT} application/xhtml\+xml [OR]
    RewriteCond %{HTTP_USER_AGENT} ^Mozilla/.*
    RewriteRule ^example5/(.+) example5-content/2005-10-31-docs/$1.html [R=303]

    # Rewrite rule 3: to serve RDF content is requested
    RewriteCond %{HTTP_ACCEPT} application/rdf\+xml
    RewriteRule ^example5/ example5-content/2005-10-31.rdf [R=303]

    # Choose the default response
    # ---------------------------

    # Rewrite rule 4: to serve RDF/XML content by default
    RewriteRule ^example5/ example5-content/2005-10-31.rdf [R=303]

    # Rewrite rules to serve HTML content by default (disabled)
    # (To enable this option, uncomment the two rewrite rules below,
    # and comment out the rewrite rule directly above)
    # RewriteRule ^example5/$ example5-content/2005-10-31-docs/index.html [R=303]
    # RewriteRule ^example5/(.+) example5-content/2005-10-31-docs/$1.html [R=303]

(N.B. If a <span class="inlineCode">.htaccess</span> file does not exist, create one.)

### Testing the Configuration

If this configuration is working, it should support the following interactions:

#### Dereference the vocabulary URI, requesting HTML content

Test message (substitute correct path and host for your vocabulary URI):

    GET /examples/example5/ HTTP/1.1
    Host: example.com
    Accept: text/html

Response header should contain the following fields, with your HTML overview content location as the value of the 'Location' field:

    HTTP/1.x 303 See Other
    Location: http://example.com/examples/example5-content/2005-10-31-docs/index.html

#### Dereference the vocabulary URI, requesting RDF content

Same as [Recipe 4](#recipe4).

#### Dereference the vocabulary URI, default case

Same as [Recipe 4](#recipe4).

#### Dereference the URI of a class or property, requesting HTML content

Test message (substitute correct path and host for your class or property URI):

    GET /examples/example5/ClassA HTTP/1.1
    Host: example.com
    Accept: text/html

Response header should contain the following fields, with the HTML content location for the given class or property as the value of the 'Location' field:

    HTTP/1.x 303 See Other
    Location: http://example.com/examples/example5-content/2005-10-31-docs/ClassA.html

#### Dereference the URI of a class or property, requesting RDF content

Same as [Recipe 4](#recipe4).

#### Dereference the URI of a class or property, default case

Same as [Recipe 4](#recipe4).

### Notes

See also the section on [content negotiation](#negotiation).

As with [Recipe 3](#recipe3), this example uses the modification date of the vocabulary version to create file names. It would also be possible to use version numbers (e.g. '1.01') instead of dates for this purpose, or indeed any convention that makes it possible to differentiate between vocabulary versions, and helps to keep track of version history.

If you have the directory options Indexes and MultiViews enabled for the directory <span class="inlineCode">/apachedocumentroot/examples/example5-content/2005-10-31-docs/</span> then you can replace the rewrite rules 1 and 2 with one single rewrite rule:

    RewriteCond %{HTTP_ACCEPT} text/html [OR]
    RewriteCond %{HTTP_ACCEPT} application/xhtml\+xml [OR]
    RewriteCond %{HTTP_USER_AGENT} ^Mozilla/.*
    RewriteRule ^example5/(.*) example5-content/2005-10-31-docs/$1 [R=303]

This configuration is particularly suited to the use of documentation generated by the OWLDoc plugin for Protege.

------------------------------------------------------------------------

Recipe 6. Extended configuration for a 'slash namespace', using multiple HTML documents and a query service
-----------------------------------------------------------------------------------------------------------

This recipe gives an example of an **extended configuration** for a vocabulary with a [slash namespace](#slash). The recipe configures the server to provide both machine-processable (RDF) and human-readable (HTML) content, depending on what is requested, with the HTML documentation being given as multiple hyperlinked HTML documents plus an overview document, and the RDF content being made available via a query service such that clients can obtain a partial RDF description of the vocabulary as appropriate.

Despite the fact that this recipe shares nearly all of the features of [Recipe 5](#recipe5), the use of a query service or script to retrieve RDF content makes it arguably the most complex of the extended configurations and presents the greatest challenge to providing a directly usable recipe. So we have decided to present this recipe as a set of suggested implementation patterns rather than a 'just follow the numbers' recipe. Moreover, we do not describe a particular implementation pattern in the same level of detail employed in the other recipes. Consequently, some web programming knowledge is required to implement this recipe.

### Pattern 1: Using application logic

This pattern relies on some application logic deployed in the web server. This logic can be a thin layer that simply redirects the requests (or acts as a proxy) to a third-party web server (see the DBPedia example below), or a thick layer that loads an RDF datasource and translates the HTTP requests into API calls to execute the queries.

There are two alternatives to introducing server-side logic:

1.  Script on the server-side.  
    Common server-side script languages (PHP, Python, Perl, Ruby) have RDF APIs and bindings with RDF stores, and can be used to write a simple script that queries an RDF file or RDF triple store and returns the relevant portion.
    -   Pros: ease of deployment (many web hosting servers have support for one of these languages)
    -   Cons: webmasters are expected to write a (probably ad-hoc) script
2.  Java Servlet (or equivalent).
    -   Pros: Java provides fairly good support for RDF, SPARQL and RDF triple stores
    -   Cons: heavyweight solution, difficult to deploy (requires a servlet container)

**Sample implementation** (valid for both alternatives 1 and 2).

The DBPedia server is used in the following example as the content provider:

    RewriteCond %{HTTP_ACCEPT} text/html [OR]
    RewriteCond %{HTTP_ACCEPT} application/xhtml\+xml
    RewriteRule ^example6/(.+) http://dbpedia.org/page/$1 [R=303]

    RewriteCond %{HTTP_ACCEPT} application/rdf\+xml
    RewriteRule ^example6/(.+) http://dbpedia.org/data/$1 [R=303]

    RewriteRule ^example6/(.+) http://dbpedia.org/data/$1 [R=303]

This is an example of a 'thin' implementation layer and the rewrite rules are straightforward:

1.  Requests for HTML data are forwarded to the URL of the HTML version exported by the DBPedia servlet;
2.  Requests for RDF data (or without an 'Acccept:' header since returning RDF is the default behavior) are forwarded to the URL of the RDF data.

The trickiest part of implementing Recipe 6 using application logic is to correctly implement HTTP content-negotiation from scratch. While most web scripting languages (PHP, Python, etc.) and frameworks provide access to the value of the HTTP headers and thus, to the 'Accept:' header, choosing the appropriate return type is far from trivial. The 'Accept:' header may contain wildcards and q-values, so regular expressions or simple string comparison functions are not enough. There is a wiki page with pointers to [content negotiation libraries for different programming languages](http://esw.w3.org/topic/ContentNegotiation). The Working Group invites contributions of additional libraries and frameworks that support content negotiation.

### Pattern 2: Redirecting to a SPARQL endpoint using Apache

This pattern does not involve writing any application logic. Instead, requests are HTTP-redirected using Apache mod\_rewrite. This technique is particularly well-suited to wrap an existing SPARQL endpoint. We exploit the fact that many SPARQL endpoints export HTTP bindings.

-   Pros: lightweight, requires no programming
-   Cons: a SPARQL endpoint for the vocabulary must be available somewhere

**Sample implementation**:

    RewriteCond %{HTTP_ACCEPT} text/html [OR]
    RewriteCond %{HTTP_ACCEPT} application/xhtml\+xml
    RewriteRule ^example6/(.+) http://dbpedia.org/$1 [R=303]

    RewriteCond %{HTTP_ACCEPT} application/rdf\+xml
    RewriteRule ^example6/(.+) http://dbpedia.org/sparql?query=DESCRIBE+<http://dbpedia.org/$1> [R=303]

    RewriteRule ^example6/(.+) http://dbpedia.org/sparql?query=DESCRIBE+<http://dbpedia.org/$1> [R=303]

In this example, when the client asks for HTML content, the request is forwarded to an external web server. However, RDF requests are handled differently. A request for a URI such as [http://example.org/example6/property/birthplace](http://dbpedia.org/page/property/birthplace) is redirected to the result of executing a <span class="inlineCode">DESCRIBE </span><span class="inlineCode">&lt;http://dbpedia.org/property/birthplace&gt;</span> sentence against the DBPedia SPARQL endpoint. The result is an RDF graph which describes the resource (in this particular case, the property that links people to the place where they were born).

### Case studies

-   Joshua Tauberer [announced](http://simile.mit.edu/mail/ReadMsg?listName=Linking%20Open%20Data&msgId=19957) that he has exposed a large RDF dataset from the US Census. There is a SPARQL endpoint available, and the URIs are dereferencable by means of URL rewriting (see, for instance, <http://www.rdfabout.com/rdf/usgov/geo/us>).
-   D2R Server wraps a relational database and provides SPARQL and linked data interfaces to it. The latter is an example of 303 redirects and content negotiation to serve both HTML and RDF descriptions of the resources. On the other hand, Pubby provides a linked data interface to an existing SPARQL endpoint. More information in [section 5](http://www.w3.org/TR/cooluris/#examples) of 'Cool URIs for the Semantic Web' \[[COOLURI](#ref-COOLURI)\].

------------------------------------------------------------------------

Requirements
------------

This section attempts to articulate the requirements and expectations of Semantic Web applications and application developers with respect to the HTTP behavior of vocabularies, classes, and properties denoted by HTTP URIs (i.e., URIs from the <span class="inlineCode">http:</span> URI space). It is intended as a benchmark against which the example configurations given in the recipes above may be verified.

### Minimum Requirements

#### M1. The 'authoritative' RDF description of a vocabulary, class, or property denoted by an HTTP URI can be obtained by dereferencing the URI of that vocabulary, class, or property.

An HTTP client can obtain the 'authoritative' RDF description of a vocabulary, class, or property by performing an HTTP GET request against the URI of that vocabulary, class or property. The RDF description is returned as an HTTP response whose content type is a registered MIME type for RDF content (currently only 'application/rdf+xml').

This is the default behavior in the case that some form of content negotiation has been implemented for these URIs. I.e. an HTTP GET request *without* an 'Accept:' header field will result in a response with content type 'application/rdf+xml', which is a serialization of a set of RDF statements, including those statements that constitute the 'authoritative' RDF description of the denoted resource.

N.B. it is reasonable for an attempt to dereference the URI of an RDF property or class to result in an RDF description of more than just that property or class.

#### M2. The behavior of an HTTP URI denoting an RDFS/OWL vocabulary, class or property, does not lead to inconsistency in the interpretation of the nature of the denoted resource.

Currently the architecture of the Web allows applications to draw inferences about the nature of a resource denoted by an HTTP URI, based on the following:

(i) The HTTP response code obtained when dereferencing the URI (see the resolution of TAG issue 'httpRange-14' [\[HTTPRANGE14\]](#ref-HTTPRANGE14) ),

and …

(ii) Where the URI contains a fragment identifier, the content type(s) of the available representations \[[AWWW04](#ref-AWWW04)\].

Given these constraints, for each HTTP URI denoting an RDFS/OWL vocabulary, class or property, the range of possible responses to HTTP requests against that URI will not lead applications to draw any inconsistent conclusions.

### Extended Requirements

These requirements are an extension of the [minimum requirements](#minimumrequirements).

#### E1. 'Human-readable' documentation about an RDF vocabulary, class or property, denoted by an HTTP URI, can be obtained by dereferencing the URI of that vocabulary, class or property.

An HTTP client such as a Web browser can obtain 'human-readable' documentation relating to an RDFS/OWL vocabulary, class or property, by performing an HTTP GET request against the URI of that vocabulary, class or property, specifying 'Accept:' headers appropriate to the desired content type in the request.

#### E2. Applications are able to differentiate between 'versions' of a vocabulary.

Vocabularies change over time as properties or classes are added or their descriptions are editorially changed. Applications need a way to differentiate between successive 'snapshots' of the vocabularies over time. To be precise, what is "versioned" is the *description* of a property -- i.e., a set of RDF statements about the property -- rather than the property itself, the URI of which does not change.

Conventions in common use for distinguishing successive descriptions include the use of version-number strings or date strings in filenames (e.g., <span class="inlineCode">1.01.rdf</span> or <span class="inlineCode">2005-10-31.rdf</span>) or in pathnames (e.g., <span class="inlineCode">http://dublincore.org/2008/01/14/dcelements.rdf\#title</span>). It should be noted that, at present, there are no generally accepted conventions for using date or version-number strings in this way.

------------------------------------------------------------------------

Acknowledgments
---------------

The examples attempt to distill elements of good practice from currently deployed Semantic Web vocabularies, especially the Dublin Core Metadata Terms, the Friend of a Friend Ontology, and the SKOS Core Vocabulary. All those who contributed to the development of these practices are gratefully acknowledged.

------------------------------------------------------------------------

References
----------

This bibliography as: [BibTex](references.bib) | [BibTeXML](references.xml) | [RDF](references.rdf)

 <span id="ref-APACHE20">APACHE20</span>   
*[Apache HTTP Server Version 2.0 Documentation](http://httpd.apache.org/docs/2.0/)* , The Apache Software Foundation.  
Available at <http://httpd.apache.org/docs/2.0/>

 <span id="ref-AWWW04">AWWW04</span>   
*[Architecture of the World Wide Web, Volume One](http://www.w3.org/TR/2004/REC-webarch-20041215/)* , Ian Jacobs and Norman Walsh, World Wide Web Consortium, W3C Recommendation, December 2004.  
Available at <http://www.w3.org/TR/2004/REC-webarch-20041215/>

 <span id="ref-COOLURI">COOLURI</span>   
*[Cool URIs for the Semantic Web](http://www.w3.org/TR/cooluris/)* , Leo Sauermann, DFKI GmbH; Richard Cyganiak, Freie Universität Berlin. W3C Interest Group Note March 2008  
Available at <http://www.w3.org/TR/cooluris/>

 <span id="ref-FOAF">FOAF</span>   
*[FOAF Vocabulary Specification](http://xmlns.com/foaf/0.1/)* , Dan Brickley and Libby Miller.  
Available at <http://xmlns.com/foaf/0.1/>

 <span id="GRDDL">GRDDL</span>   
*[Gleaning Resource Descriptions from Dialects of Languages (GRDDL)](http://www.w3.org/TR/grddl/)* , Dan Connolly, World Wide Web Consortium, W3C Recommendation September 2007  
Available at <http://www.w3.org/TR/grddl/>

 <span id="ref-HTTPRANGE14">HTTPRANGE14</span>   
*[Dereferencing HTTP URIs](http://www.w3.org/2001/tag/doc/httpRange-14/2007-10-04/HttpRange-14.html)* , Rhys Lewis, Volantis Systems Ltd.  
Available at <http://www.w3.org/2001/tag/doc/httpRange-14/2007-10-04/HttpRange-14.html>

[W3C Technical Architecture Group's resolution](http://lists.w3.org/Archives/Public/www-tag/2005Jun/0039.html) on the range of HTTP dereferencing (aka "[httpRange-14](http://www.w3.org/2001/tag/issues.html#httpRange-14)").  
Available at <http://lists.w3.org/Archives/Public/www-tag/2005Jun/0039.html>

 <span id="ref-OWLFeatures">OWLFeatures</span>   
*[OWL Web Ontology Language Overview](http://www.w3.org/TR/2004/REC-owl-features-20040210/)* , Deborah L. McGuinness and Frank van Harmelen, World Wide Web Consortium, W3C Recommendation, February 2004.  
Available at <http://www.w3.org/TR/2004/REC-owl-features-20040210/>

 <span id="ref-OWLGuide">OWLGuide</span>   
*[OWL Web Ontology Language Guide](http://www.w3.org/TR/2004/REC-owl-guide-20040210/)* , Michael K. Smith, Chris Welty and Deborah L. McGuinness, World Wide Web Consortium, W3C Recommendation, February 2004.  
Available at <http://www.w3.org/TR/2004/REC-owl-guide-20040210/>

 <span id="ref-PURL">PURL</span>   
*[Introduction to Persistent Uniform Resource Locators](http://purl.oclc.org/docs/inet96.html)* , Keith Shafer, Stuart Weibel, Erik Jul and Jon Fausey, 6565 Frantz Road, Dublin, Ohio 43017-3395: OCLC Online Computer Library Center, Inc., 1996.  
Available at <http://purl.oclc.org/docs/inet96.html>

 <span id="ref-RDFa">RDFa</span>   
*[RDFa in XHTML: Syntax and Processing](http://www.w3.org/TR/2008/CR-rdfa-syntax-20080620/)* , B. Adida, M. Birbeck, S. McCarron, S. Pemberton, World Wide Web Consortium, W3C Candidate Recommendation June 2008  
Available at <http://www.w3.org/TR/2008/CR-rdfa-syntax-20080620/>

 <span id="ref-RDFPrimer">RDFPrimer</span>   
*[RDF Primer](http://www.w3.org/TR/2004/REC-rdf-primer-20040210/)* , Frank Manola and Eric Miller, World Wide Web Consortium, W3C Recommendation, February 2004.  
Available at <http://www.w3.org/TR/2004/REC-rdf-primer-20040210/>

 <span id="ref-RDFS">RDFS</span>   
*[RDF Vocabulary Description Language 1.0: RDF Schema](http://www.w3.org/TR/2004/REC-rdf-schema-20040210/)* , Dan Brickley and R. V. Guha, World Wide Web Consortium, W3C Recommendation, February 2004.  
Available at <http://www.w3.org/TR/2004/REC-rdf-schema-20040210/>

 <span id="ref-RFC2616">RFC2616</span>   
*[Hypertext Transfer Protocol - HTTP/1.1](http://www.ietf.org/rfc/rfc2616.txt)* , R. Fielding, J. Gettys, J. Mogul, H. Frystyk, L. Masinter, P. Leach and T. Berners-Lee, Internet Engineering Task Force, RFC (2616), June 1999.  
Available at <http://www.ietf.org/rfc/rfc2616.txt>

 <span id="ref-RFC3986">RFC3986</span>   
*[Uniform Resource Identifier (URI): Generic Syntax](http://www.ietf.org/rfc/rfc3986.txt)* , T. Berners-Lee, R. Fielding and L. Masinter, Internet Engineering Task Force, RFC (3986), January 2005.  
Available at <http://www.ietf.org/rfc/rfc3986.txt>

 <span id="ref-SKOS">SKOS</span>   
*[SKOS Core Vocabulary Specification](http://www.w3.org/TR/2005/WD-swbp-skos-core-spec-20051102/)* , Alistair Miles and Dan Brickley, World Wide Web Consortium, W3C Working Draft, November 2005.  
Available at <http://www.w3.org/TR/2005/WD-swbp-skos-core-spec-20051102/>

 <span id="ref-XMLNames">XMLNames</span>   
*[Namespaces in XML](http://www.w3.org/TR/1999/REC-xml-names-19990114/)* , Tim Bray, Dave Hollander and Andrew Layman, World Wide Web Consortium, W3C Recommendation, January 1999.  
Available at <http://www.w3.org/TR/1999/REC-xml-names-19990114/>

------------------------------------------------------------------------

Appendix A. Vocabularies that use PURLs for naming
--------------------------------------------------

PURLs ('Persistent URLs') are URIs from the <span class="inlineCode"> <http://purl.org/> </span> URI space. PURLs are supported by a PURL resolution service, which allows the registered owners of a PURL domain to redirect HTTP requests against a PURL to an arbitrary resource URL. Registered owners of PURLs may not configure the central PURL server other than to specify the redirect URL for each PURL.

When the central PURL server was originally developed in the 1990s, the standard response of an HTTP server to a request against a PURL was to return a response code of 302 ("temporarily moved"). Web architecture has evolved since then, and the Technical Architecture Group (TAG) of W3C has resolved that, for the purpose of such redirects for RDF *Class and Property names*, the response code 303 ("see other") should be returned (see the TAG resolution on httpRange-14 [\[HTTPRANGE14\]](#ref-HTTPRANGE14)).

As PURL servers use a 302 response code and there is currently no way to configure them to use 303 response codes, existing vocabularies with <span class="inlineCode">http://purl.org</span> slash namespaces servers do not strictly conform to the current TAG recommendations. These cases are treated in the following recipes.

Note: At the time this Working Draft is being written (January 2008), an update to the PURL service is in progress. We anticipate this update will address the TAG finding on httpRange-14 and 303 redirects. (see <http://www.oclc.org/news/releases/200669.htm> ).

[Recipe 1a.](#recipe1a) | [Recipe 2a.](#recipe2a) | [Recipe 3a.](#recipe3a) | [Recipe 4a.](#recipe4a) | [Recipe 5a.](#recipe5a)

------------------------------------------------------------------------

Recipe 1a. Minimal configuration for a PURL 'hash namespace'
------------------------------------------------------------

This recipe gives an example configuration that satisfies the [minimum requirements](#minimumrequirements) for a vocabulary with a [hash namespace](#hash) within the <span class="inlineCode"> <http://purl.org/> </span> URI space. Only machine-processable (RDF) content is served at the namespace URI.

For vocabulary …

    http://purl.oclc.org/NET/SWD/recipes/examples-A/example1a

defining classes …

    http://purl.oclc.org/NET/SWD/recipes/examples-A/example1a#ClassA
    http://purl.oclc.org/NET/SWD/recipes/examples-A/example1a#ClassB

and properties …

    http://purl.oclc.org/NET/SWD/recipes/examples-A/example1a#propA
    http://purl.oclc.org/NET/SWD/recipes/examples-A/example1a#propB

### Step 1

Create a file called <span class="inlineCode">example1a.rdf</span> that contains a ***complete*** RDF/XML serialization of the vocabulary. I.e. ***all*** resources defined by the vocabulary are described in this file.

### Step 2

Copy <span class="inlineCode">example1a.rdf</span> to the directory <span class="inlineCode">/apachedocumentroot/examples/</span> on the server from which you wish to serve the content (in this example the server is <span class="inlineCode">www.w3.org</span>).

### Step 3

Set up the following PURL:

    PURL: http://purl.org/NET/SWD/recipes/examples-A/example1a
    URL:  http://www.w3.org/2006/07/SWD/recipes/examples/example1a.rdf 

### Notes

If the server is already configured to serve files with the <span class="inlineCode">.rdf</span> extension as content type <span class="inlineCode">application/rdf+xml</span> then you don't have to do anything further. If this is not the case, you will need to add the following directive:

    AddType application/rdf+xml .rdf

either to the main apache configuration files, or if you don't have access to these, to the per-directory configuration file (<span class="inlineCode">.htaccess</span>) for the directory <span class="inlineCode"> /apachedocumentroot/examples/</span> on the server.

------------------------------------------------------------------------

Recipe 2a. Minimal configuration for a PURL 'slash namespace'
-------------------------------------------------------------

This recipe gives an example configuration that satisfies the [minimum requirements](#minimumrequirements) for a vocabulary with a [slash namespace](#slash) within the <span class="inlineCode"> <http://purl.org/></span> URI space. Only machine-processable (RDF) content is served at the namespace URI.

N.B. As of the date of this Working Draft, this example does not strictly conform with the TAG resolution on httpRange-14 [\[HTTPRANGE14\]](#ref-HTTPRANGE14) because the purl.org servers use a 302 redirect code, and not a 303.

For vocabulary …

    http://purl.oclc.org/NET/SWD/recipes/examples-A/example2a/

defining classes …

    http://purl.oclc.org/NET/SWD/recipes/examples-A/example2a/ClassA
    http://purl.oclc.org/NET/SWD/recipes/examples-A/example2a/ClassB

and properties …

    http://purl.oclc.org/NET/SWD/recipes/examples-A/example2a/propA
    http://purl.oclc.org/NET/SWD/recipes/examples-A/example2a/propB

### Step 1

Create a file called <span class="inlineCode">example2a.rdf</span> that contains a ***complete*** RDF/XML serialization of the vocabulary. I.e. ***all*** resources defined by the vocabulary are described in this file.

### Step 2

Copy <span class="inlineCode">example2a.rdf</span> to the directory <span class="inlineCode">/apachedocumentroot/examples/</span> on the server from which you wish to serve the content (in this example the server is <span class="inlineCode">www.w3.org</span>).

### Step 3

Set up the following Partial Redirect PURL:

    PR PURL: http://purl.oclc.org/NET/SWD/recipes/examples-A/example2a/
    Root URL:  http://www.w3.org/2006/07/SWD/recipes/examples/example2a/ 

### Step 4

Add the following directives to the <span class="inlineCode">.htaccess</span> file in the <span class="inlineCode"> /apachedocumentroot/examples/</span> directory on the server:

    # Turn off MultiViews
    Options -MultiViews

    # Directive to ensure *.rdf files served as appropriate content type,
    # if not present in main apache config
    AddType application/rdf+xml .rdf

    # Rewrite engine setup
    RewriteEngine On
    RewriteBase /examples

    # Rewrite rule to serve RDF/XML content from all partially redirected URIs
    RewriteRule ^example2a/ example2a.rdf

(N.B. If a <span class="inlineCode">.htaccess</span> file does not exist, create one.)

### Notes

In the above recipe the single rewrite rule is an *internal* redirect. This minimizes the number of *external* (i.e. HTTP) redirects involved in the dereference action. However, you could also implement this rewrite rule as an external redirect, by replacing the above rule with the following:

    # Rewrite rule to serve RDF/XML content from all partially redirected URIs
    RewriteRule ^example2a/ example2a.rdf [R=303]

This creates an additional HTTP redirect in the dereference action, but possibly makes it clearer to the client that attempts to dereference Vocabulary, Class or Property URIs all end up at the same place and it *does* make the current PURL implementation conformant with the TAG httpRange-14 resolution \[[HTTPRANGE14](#ref-HTTPRANGE14)\].

It is also possible to avoid any server configuration by creating individual PURLs for each class and property of the vocabulary, all referencing the same URL (rather than a Partial Redirect PURL). However, if the content were subsequently to be moved, each PURL would need to be updated -- a cumbersome and impractical task for medium- to large-size ontologies.

------------------------------------------------------------------------

Recipe 3a. Extended configuration for a PURL 'hash namespace'
-------------------------------------------------------------

This recipe gives an example configuration that satisfies the *[extended requirements](#extendedrequirements)* for a vocabulary with a *[hash namespace](#hash)* within the <span class="inlineCode"> <http://purl.org/> </span> URI space. Both machine-processable (RDF) and human-readable (HTML) content is served at the namespace URI.

For vocabulary …

    http://purl.oclc.org/NET/SWD/recipes/examples-A/example3a

defining classes …

    http://purl.oclc.org/NET/SWD/recipes/examples-A/example3a#ClassA
    http://purl.oclc.org/NET/SWD/recipes/examples-A/example3a#ClassB

and properties …

    http://purl.oclc.org/NET/SWD/recipes/examples-A/example3a#propA
    http://purl.oclc.org/NET/SWD/recipes/examples-A/example3a#propB

### Step 1

Create a file called <span class="inlineCode">2005-10-31.rdf</span> that contains a ***complete*** RDF/XML serialization of the vocabulary, as at 2005-10-31 (or whatever the current date is). I.e. ***all*** resources defined by the vocabulary are described in this file, and this file represents a 'snapshot' or 'version' of the vocabulary.

### Step 2

Create a file called <span class="inlineCode">2005-10-31.html</span> that contains HTML content documentation about all classes and properties defined by the vocabulary as at 2005-10-31 (or whatever the current date is). This document may include sections for each of the classes/properties documented, each section being headed by an HTML anchor whose name is identical to the fragment identifier of the documented class or property.

### Step 3

Copy <span class="inlineCode">2005-10-31.rdf</span> and <span class="inlineCode">2005-10-31.html</span> to the directory <span class="inlineCode">/apachedocumentroot/examples/example3a-content/</span> on the server from which you wish to serve the content (in this example the server is <span class="inlineCode">www.w3.org</span>).

### Step 4

Add the following directives to the <span class="inlineCode">.htaccess</span> file in the <span class="inlineCode"> /apachedocumentroot/examples/</span> directory:

    # Turn off MultiViews
    Options -MultiViews

    # Directive to ensure *.rdf files served as appropriate content type,
    # if not present in main apache config
    AddType application/rdf+xml .rdf

    # Rewrite engine setup
    RewriteEngine On
    RewriteBase /examples

    # Rewrite rule to make sure we serve HTML content from the namespace URI if requested
    RewriteCond %{HTTP_ACCEPT} !application/rdf\+xml.*(text/html|application/xhtml\+xml)
    RewriteCond %{HTTP_ACCEPT} text/html [OR]
    RewriteCond %{HTTP_ACCEPT} application/xhtml\+xml [OR]
    RewriteCond %{HTTP_USER_AGENT} ^Mozilla/.*
    RewriteRule ^example3a$ example3a-content/2005-10-31.html [R=303]

    # Rewrite rule to make sure we serve the RDF/XML content from the namespace URI by default
    RewriteRule ^example3a$ example3a-content/2005-10-31.rdf [R=303]

### Step 5

Setup the following PURL:

    PURL: http://purl.oclc.org/NET/SWD/recipes/examples-A/example3a
    URL:  http://www.w3.org/2006/07/SWD/recipes/examples/example3a

### Notes

Because we can't configure the PURL server for content negotiation, this example configures the content server to perform negotiation *after* the 302 redirect from the PURL server.

------------------------------------------------------------------------

Recipe 4a. Extended configuration for a PURL 'slash namespace', single HTML document
------------------------------------------------------------------------------------

This recipe gives an example configuration that satisfies the [extended requirements](#extendedrequirements) for a vocabulary with a [slash namespace](#slash) within the <span class="inlineCode"> <http://purl.org/> </span> URI space. Both machine-processable (RDF) and human-readable (HTML) content is served at the namespace URI. The HTML documentation is served as a single file.

N.B. this example does not strictly conform with the TAG resolution on httpRange-14 [\[HTTPRANGE14\]](#ref-HTTPRANGE14) because the purl.org servers use a 302 redirect code, and not a 303.

For vocabulary …

    http://purl.oclc.org/NET/SWD/recipes/examples-A/example4a/

defining classes …

    http://purl.oclc.org/NET/SWD/recipes/examples-A/example4a/ClassA
    http://purl.oclc.org/NET/SWD/recipes/examples-A/example4a/ClassB

and properties …

    http://purl.oclc.org/NET/SWD/recipes/examples-A/example4a/propA
    http://purl.oclc.org/NET/SWD/recipes/examples-A/example4a/propB

### Step 1

Create a file called <span class="inlineCode">2005-10-31.rdf</span> that contains a ***complete*** RDF/XML serialization of the vocabulary, as at 2005-10-31 (or whatever the current date is). I.e. ***all*** resources defined by the vocabulary are described in this file, and this file represents a 'snapshot' or 'version' of the vocabulary.

### Step 2

Create a file called <span class="inlineCode">2005-10-31.html</span> that contains HTML content documentation about all classes and properties defined by the vocabulary as at 2005-10-31 (or whatever the current date is). This document may include sections for each of the classes/properties documented, each section being headed by an HTML anchor whose name is identical to the fragment identifier of the documented class or property.

### Step 3

Copy <span class="inlineCode">2005-10-31.rdf</span> and <span class="inlineCode">2005-10-31.html</span> to the directory <span class="inlineCode">/apachedocumentroot/examples/example4a-content/</span> on the server from which you wish to serve the content (in this example the server is <span class="inlineCode">www.w3.org</span>)..

### Step 4

Add the following directives to the <span class="inlineCode">.htaccess</span> file in the <span class="inlineCode"> /apachedocumentroot/examples/</span> directory:

    # Turn off MultiViews
    Options -MultiViews

    # Directive to ensure *.rdf files served as appropriate content type,
    # if not present in main apache config
    AddType application/rdf+xml .rdf

    # Rewrite engine setup
    RewriteEngine On
    RewriteBase /examples

    # Rewrite rule to serve HTML content from the namespace URI if requested
    RewriteCond %{HTTP_ACCEPT} !application/rdf\+xml.*(text/html|application/xhtml\+xml)
    RewriteCond %{HTTP_ACCEPT} text/html [OR]
    RewriteCond %{HTTP_ACCEPT} application/xhtml\+xml [OR]
    RewriteCond %{HTTP_USER_AGENT} ^Mozilla/.*
    RewriteRule ^example4a/$ example4a-content/2005-10-31.html [R=303]

    # Rewrite rule to serve directed HTML content from class/prop URIs
    RewriteCond %{HTTP_ACCEPT} !application/rdf\+xml.*(text/html|application/xhtml\+xml)
    RewriteCond %{HTTP_ACCEPT} text/html [OR]
    RewriteCond %{HTTP_ACCEPT} application/xhtml\+xml [OR]
    RewriteCond %{HTTP_USER_AGENT} ^Mozilla/.*
    RewriteRule ^example4a/(.+) example4a-content/2005-10-31.html#$1 [R=303,NE]

    # Rewrite rule to serve RDF/XML content from the namespace URI by default
    RewriteRule ^example4a/ example4a-content/2005-10-31.rdf [R=303]

(N.B. If a <span class="inlineCode">.htaccess</span> file does not exist, create one.)

### Step 5

Set up the following Partial Redirect PURL:

    PR PURL: http://purl.oclc.org/NET/SWD/recipes/examples-A/example4a/
    URL Root:  http://www.w3.org/2006/07/SWD/recipes/examples/example4a/

### Notes

This configuration would be the most appropriate for Dublin Core Metadata Terms.

------------------------------------------------------------------------

Recipe 5a. Extended configuration for a PURL 'slash namespace', using multiple HTML documents
---------------------------------------------------------------------------------------------

This recipe gives an example configuration that satisfies the [extended requirements](#extendedrequirements) for a vocabulary with a [slash namespace](#slash) within the <span class="inlineCode"> <http://purl.org/> </span> URI space. Both machine-processable (RDF) and human-readable (HTML) content is served at the namespace URI with the HTML documentation being given as multiple hyperlinked HTML documents plus an overview document.

N.B. this example does not strictly conform with the TAG resolution on httpRange-14 [\[HTTPRANGE14\]](#ref-HTTPRANGE14) because the purl.org servers use a 302 redirect code, and not a 303.

For vocabulary …

    http://purl.oclc.org/NET/SWD/recipes/examples-A/example5a/

defining classes …

    http://purl.oclc.org/NET/SWD/recipes/examples-A/example5a/ClassA
    http://purl.oclc.org/NET/SWD/recipes/examples-A/example5a/ClassB

and properties …

    http://purl.oclc.org/NET/SWD/recipes/examples-A/example5a/propA
    http://purl.oclc.org/NET/SWD/recipes/examples-A/example5a/propB

### Step 1

Create a file called <span class="inlineCode">2005-10-31.rdf</span> that contains a ***complete*** RDF/XML serialization of the vocabulary, as at 2005-10-31 (or whatever the current date is). I.e. ***all*** resources defined by the vocabulary are described in this file, and this file represents a 'snapshot' or 'version' of the vocabulary.

### Step 2

Copy <span class="inlineCode">2005-10-31.rdf</span> to the directory <span class="inlineCode">/apachedocumentroot/examples/example5a-content/</span> on the server from which you wish to serve the content (in this example the server is <span class="inlineCode">www.w3.org</span>).

### Step 3

Create files <span class="inlineCode">ClassA.html</span> <span class="inlineCode">ClassB.html</span> <span class="inlineCode">propA.html</span> <span class="inlineCode">propB.html</span> each of which contains HTML content documentation relevant to the class or property with the corresponding local name, as at 2005-10-31 (or whatever the current date is). Create a file <span class="inlineCode">index.html</span> that contains HTML content documentation about the vocabulary itself, with hyperlinks to all class or property documentation.

### Step 4

Copy <span class="inlineCode">ClassA.html</span> <span class="inlineCode">ClassB.html</span> <span class="inlineCode">propA.html</span> <span class="inlineCode">propB.html</span> and <span class="inlineCode">index.html</span> to the directory <span class="inlineCode">/apachedocumentroot/examples/example5a-content/2005-10-31-docs/</span> on the server from which you wish to serve the content (in this example the server is <span class="inlineCode">www.w3.org</span>).

### Step 5

Add the following directives to the <span class="inlineCode">.htaccess</span> file in the <span class="inlineCode"> /apachedocumentroot/examples/</span> directory:

    # Turn off MultiViews
    Options -MultiViews

    # Directive to ensure *.rdf files served as appropriate content type,
    # if not present in main apache config
    AddType application/rdf+xml .rdf

    # Rewrite engine setup
    RewriteEngine On
    RewriteBase /examples

    # Rewrite rule to serve HTML content from the namespace URI if requested
    RewriteCond %{HTTP_ACCEPT} !application/rdf\+xml.*(text/html|application/xhtml\+xml)
    RewriteCond %{HTTP_ACCEPT} text/html [OR]
    RewriteCond %{HTTP_ACCEPT} application/xhtml\+xml [OR]
    RewriteCond %{HTTP_USER_AGENT} ^Mozilla/.*
    RewriteRule ^example5a/$ example5a-content/2005-10-31-docs/index.html [R=303]

    # Rewrite rule to serve HTML content from class or prop URIs if requested
    RewriteCond %{HTTP_ACCEPT} !application/rdf\+xml.*(text/html|application/xhtml\+xml)
    RewriteCond %{HTTP_ACCEPT} text/html [OR]
    RewriteCond %{HTTP_ACCEPT} application/xhtml\+xml [OR]
    RewriteCond %{HTTP_USER_AGENT} ^Mozilla/.*
    RewriteRule ^example5a/(.+) example5a-content/2005-10-31-docs/$1.html [R=303]

    # Rewrite rule to serve RDF/XML content from the namespace URI by default
    RewriteRule ^example5a/ example5a-content/2005-10-31.rdf [R=303]

(N.B. If a <span class="inlineCode">.htaccess</span> file does not exist, create one.)

### Step 6

Set up the following Partial Redirect PURLs:

    PR PURL: http://purl.oclc.org/NET/SWD/recipes/examples-A/example5a/
    Root URL:  http://www.w3.org/2006/07/SWD/recipes/examples/example5a/

------------------------------------------------------------------------

Appendix B: URI namespaces
--------------------------

The URI that identifies your vocabulary is referred to here as the *vocabulary namespace URI* or just *vocabulary URI* (or *ontology URI* as *vocabulary* and *ontology* are used here interchangeably). For example, the following URI identifies the SKOS Core Vocabulary:

    http://www.w3.org/2004/02/skos/core

… and the following URI identifies the FOAF ontology:

    http://xmlns.com/foaf/0.1/

### Vocabularies that use a 'hash namespace'

SKOS Core \[[SKOS](#ref-SKOS)\] is an example of a vocabulary that uses a *hash namespace*. This is an informal expression which refers to how the URIs for the classes and properties in the vocabulary are constructed. In this case, the URIs for the classes and properties are constructed by appending first a hash character ('\#') and then a 'local name' to the vocabulary URI. The 'local name' is a string of characters that uniquely identifies that class or property within the scope of the vocabulary, also known as a 'fragment identifier' \[[AWWW04](#ref-AWWW04)\] (the local name must be a legal \[[XML-NS]()\] token [NCName](http://www.w3.org/TR/REC-xml-names/#NT-NCName)).

For example, the following URIs identify a class and a property from the SKOS Core vocabulary:

    http://www.w3.org/2004/02/skos/core#Concept
    http://www.w3.org/2004/02/skos/core#prefLabel

### Vocabularies that use a 'slash namespace'

FOAF \[[FOAF](#ref-FOAF)\] is an example of a vocabulary that uses a *slash namespace*. Again, this is an informal expression which refers to the way in which the URIs for the classes and properties defined by the vocabulary are constructed. In this case, the vocabulary URI ends with a forward slash character ('/'), and the URIs of classes and properties are constructed by appending the 'local name' of the class or property directly to the vocabulary URI. Again, the 'local name' is a string of characters that uniquely identifies that class or property within the scope of the vocabulary, and must be a legal \[[XML-NS]()\] token [NCName](http://www.w3.org/TR/REC-xml-names/#NT-NCName).

For example, the following URIs identify a class and a property from the FOAF vocabulary:

    http://xmlns.com/foaf/0.1/Person
    http://xmlns.com/foaf/0.1/maker

Note that a vocabulary whose URI ends with a forward slash character *doesn't necessarily use a slash namespace*. It could use a hash namespace, for example the vocabulary <span class="inlineCode">http://example.org/myvocabulary/</span> could define classes <span class="inlineCode">http://example.org/myvocabulary/\#Foo</span> and <span class="inlineCode">http://example.org/myvocabulary/\#Bar</span>.

Both [hash namespaces](#hash) and [slash namespaces](#slash) are supported within the architecture of the Web. However, certain behaviors are required of the Web server that differ between these two choices. Because both the requests received by the server and the responses returned by the server are different in each case, the mechanics of setting up an HTTP server to satisfy some or all of the [requirements](#requirements) given below also differ, and hence these two cases are treated separately.

### Vocabularies that use other types of namespace

Readers should be aware of a third type of vocabulary URI under discussion at the time of writing: URIs based on a 303-redirect service such as <http://thing-described-by.org>. Though simpler to implement than approaches described in this document, the 303-redirect approach has not yet been implemented for stable, published RDF vocabularies and is not used in any of the following recipes. [Appendix C](#redirect) describes this approach in more detail.

### Some considerations when choosing a URI namespace

This document is intended for creators and maintainers of *existing* vocabularies. Proper guidance on choosing the best [URI namespace](#naming) for any given situation is beyond the scope of this document. However, the recipes given here make assumptions and involve trade-offs with respect to functionality, so *some* considerations relevant to choosing a URI namespace are described in this section. If you have already chosen a URI namespace, skip to the section [choosing a recipe](#choosing).

The URI namespace you choose for your vocabulary should be a Web address (a URI) to which you have write access. Others who use your vocabulary will expect to be able to dereference both the vocabulary URI itself as well as the URIs of properties and classes defined by your vocabulary. The choice of URI namespace is a fundamental decision you make early in the design of your vocabulary.

While RDF permits a namespace name to start with any valid URI scheme, best practice for the Semantic Web is to use a URI scheme that can be resolved by any client without requiring the use of additional plug-ins or client setup configuration. The <span style="font-style: italic">http</span> URI scheme is the best known of these and is recognized by all Web clients. This document focuses exclusively on vocabularies whose namespace name begins with <span class="inlineCode">http:</span>.

Best practice dictates that all RDF vocabularies use either a [hash namespace](#hash) or a [slash namespace](#slash) (see above). Which you choose depends in part on how big you expect your vocabulary to become, how often you expect to add new terms (i.e., properties or classes), and how you expect users to access information about individual terms in your vocabulary.

For small vocabularies, it may be most convenient to serve the entire vocabulary in a single Web access. Such a vocabulary would typically use a [hash namespace](#hash), and a Web access (i.e., an HTTP GET request) for any term in the vocabulary would return a single [information resource](http://www.w3.org/TR/2004/REC-webarch-20041215/#def-information-resource) describing all of the terms in the vocabulary.

A vocabulary that is large, to which additions are anticipated frequently, or that defines more data than a typical user application will want to access at one time, should be arranged so that progressively greater detail about the terms in the vocabulary may be retrieved through multiple Web accesses. The full description of all of the terms may be divided among many information resources, or may be managed via a query service (e.g. \[SPARQL\] -- see [Recipe 6](#recipe6)). Such a vocabulary would typically use a [slash namespace](#slash), which allows for the possibility that a Web access for any term in the vocabulary may return information principally about just that one term. (Such a configuration is not possible for a vocabulary that uses a [hash namespace](#hash), because of the mechanics of the HTTP protocol.)

A more detailed discussion of issues related to URI design for the Semantic Web can be found in these documents:

-   "Cool URIs for the Semantic Web" \[[COOLURI](#ref-COOLURI)\]
-   TAG finding: "[Associating Resources with Namespaces](http://www.w3.org/2001/tag/doc/nsDocuments/)"

------------------------------------------------------------------------

Appendix C. Vocabulary URIs based on a 303-redirect service
-----------------------------------------------------------

URIs of this type are formed by appending the URI of a descriptive resource as a query string to the base URI of a 303-redirect service such as <http://thing-described-by.org>. The domain thing-described-by.org delegates authority for defining the meaning of such a query URI to the domain cited in the query string (i.e., the part following a question mark).

In principle, then, one might coin the URI <http://thing-described-by.org?http://example.org/foo> as an identifier for the Foo vocabulary. An HTTP GET request against the URI for the Foo vocabulary, or against a property or class in the Foo vocabulary, would result in a response code of 303, thus conforming to the second of the two [minimum requirements](#minimumrequirements) articulated in this document for the publication of RDF vocabularies. If, in addition, the URI http://example.org/foo were to identify an authoritative RDF description for the vocabulary, and the server providing that description were to return a MIME type properly identifying it as such, then the use of <http://thing-described-by.org?http://example.org/foo> could be said to conform to first of the minimum requirements as well.

------------------------------------------------------------------------

Appendix D: Apache configuration
--------------------------------

An Apache HTTP server \[[APACHE20](#ref-APACHE20)\] is configured by *directives* written either inside the main Apache configuration files (usually 'httpd.conf' etc.) or inside per-directory configuration files (usually '.htaccess'). The recipes given here assume that you *do not* have access to the main Apache configuration files and that you therefore have to use a per-directory configuration using .htaccess files to supply the configuration directives. You may find more specific information about the use of .htaccess files in the [Apache Tutorial: .htaccess files](http://httpd.apache.org/docs/2.0/howto/htaccess.html).

If you *do* have write access to the main Apache configuration files, you might consider writing the configuration directives directly there, as using per-directory configuration can negatively affect server performance and requires more careful configuration of directory-level security, see the [Apache Tutorial: When (not) to use .htaccess files](http://httpd.apache.org/docs/2.0/howto/htaccess.html#when). It should be noted that <span class="inlineCode">AllowOverride</span> is a directory-level directive and its performance and security side-effects don't usually extend beyond the directory trees in which it's enabled.

Note: The configurations given here have been tested on an Apache HTTP server version 2.0.46 only.

### Server configuration

In order to support this use of per-directory configuration files, the server must be configured to allow certain *overrides* for the directories you are using. The required overrides are:

    AllowOverride FileInfo Options

In addition, make sure that your version of Apache has been compiled with the mod\_rewrite module, or that the mod\_rewrite Dynamic Shared Object (DSO) has been installed and the following lines are in the Apache configuration file:

    AddModule mod_rewrite.c
    LoadModule rewrite_module modules/mod_rewrite.so

If you are having problems getting the recipes to work, it may be because the required override directives are not specified in the main Apache configuration files or mod\_rewrite is not available.

### Testing .htaccess parsing

To test whether your server will correctly parse a .htaccess file in a given directory, load a URL that accesses a file in the directory you wish to test into a web browser and verify that the file is served correctly. Next create (or edit) a .htaccess file in that directory that contains the line:

    InvalidDirective Here

Reload the URL in your web browser. If the server is parsing the .htaccess files in that directory, the server should return an "Internal Server Error" page generated by the unparsable <span class="inlineCode">InvalidDirective</span>. If the page redisplays normally, then you need to ask your sysadmin to enable .htaccess files in the directories that you'll be using with the Recipes. When you have confirmed that the server is parsing your .htaccess files, don't forget to remove the <span class="inlineCode">InvalidDirective</span> line from the .htaccess file in that directory.

### Testing mod\_rewrite installed

To test whether mod\_rewrite is installed, replace the <span class="inlineCode">InvalidDirective</span> line from the first test with this:

    RewriteEngine On

Reload the URL in your web browser. If mod\_rewrite is not installed, *or* you don't have sufficient override permissions to enable it in .htaccess in that directory, then the server should return an "Internal Server Error" page. The <span class="inlineCode">AllowOverride</span> directive must be set to <span class="inlineCode">FileInfo</span> (or <span class="inlineCode">All</span>) to allow you to enable mod\_rewrite in a .htaccess file.

### Setting the RDF/XML content type

The appropriate content type for serving RDF/XML content is 'application/rdf+xml', as defined in [RFC3870](http://www.ietf.org/rfc/rfc3870.txt). An Apache server can be configured to recognize files with the '.rdf' extension and serve them with the appropriate content type, by adding the following directive to the .htaccess file:

    AddType application/rdf+xml .rdf

This directive may also be applied globally at the server level in the server configuration file. In which case it can be safely removed from the recipes.

### Alternatives to rewrite rules

The example configurations described in this document implement content negotiation by means of rewrite rules (mod\_rewrite) to redirect the requests to the most suitable representation. This mechanism is simple and allows great flexibility with respect to the location of the HTML and RDF/XML documents, which may even reside in different servers.

There are some cases in which the provided example configuration does not properly handle content negotiation. In particular, requests with an 'Accept:' header that contains q-values cannot be parsed with rewrite rules, and the server may respond with a representation different from the preferred one. While it is certainly possible to configure an Apache server to handle such requests, this configuration can't be performed within the limitations of .htaccess files. It is beyond the scope of this document to provide a complete server configuration example to handle these requests. Interested readers may wish to refer to [content negotiation with type-maps in Apache](http://httpd.apache.org/docs/2.0/content-negotiation.html).

------------------------------------------------------------------------

[<img src="http://www.w3.org/Icons/valid-xhtml10" alt="Valid XHTML 1.0 Strict" width="88" height="31" />](http://validator.w3.org/check?uri=referer) [![Valid CSS!](http://jigsaw.w3.org/css-validator/images/vcss)](http://jigsaw.w3.org/css-validator/)
