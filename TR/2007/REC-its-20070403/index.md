\[ [contents](#contents) \]

[<img src="http://www.w3.org/Icons/w3c_home" alt="W3C" width="72" height="48" />](http://www.w3.org/)

<span id="title"></span>Internationalization Tag Set (ITS) Version 1.0
======================================================================

<span id="w3c-doctype"></span>W3C Recommendation 03 April 2007
--------------------------------------------------------------

This version:  
<http://www.w3.org/TR/2007/REC-its-20070403/>

Latest version:  
<http://www.w3.org/TR/its/>

Previous version:  
<http://www.w3.org/TR/2007/PR-its-20070226/>

Editors:  
Christian Lieske, SAP AG

Felix Sasaki, W3C

Please refer to the [**errata**](http://www.w3.org/International/its/itstagset/its-errata.html) for this document, which may include some normative corrections.

See also [**translations**](http://www.w3.org/2003/03/Translations/byTechnology?technology=its).

This document is also available in these non-normative formats: [ODD/XML document](itstagset.xml), [self-contained zipped archive](itstagset.zip), and [XHTML Diff markup to publication from 26 February 2007](itstagset-diff-20070226.html).

[Copyright](http://www.w3.org/Consortium/Legal/ipr-notice#Copyright) © 2007 [W3C](http://www.w3.org/)<sup>®</sup> ([MIT](http://www.csail.mit.edu/), [ERCIM](http://www.ercim.org/), [Keio](http://www.keio.ac.jp/)), All Rights Reserved. W3C [liability](http://www.w3.org/Consortium/Legal/ipr-notice#Legal_Disclaimer), [trademark](http://www.w3.org/Consortium/Legal/ipr-notice#W3C_Trademarks) and [document use](http://www.w3.org/Consortium/Legal/copyright-documents) rules apply.

------------------------------------------------------------------------

<span id="abstract"></span>Abstract
-----------------------------------

This document defines data categories and their implementation as a set of elements and attributes called the *Internationalization Tag Set (ITS)*. ITS is designed to be used with schemas to support the internationalization and localization of schemas and documents. An implementation is provided for three schema languages: XML DTD, XML Schema and RELAX NG.

<span id="status"></span>Status of this Document
------------------------------------------------

*This section describes the status of this document at the time of its publication. Other documents may supersede this document. A list of current W3C publications and the latest revision of this technical report can be found in the [W3C technical reports index](http://www.w3.org/TR/) at http://www.w3.org/TR/.*

This document defines data categories and their implementation as a set of elements and attributes called the Internationalization Tag Set (ITS). ITS is designed to be used with schemas to support the internationalization and localization of schemas and documents. An implementation is provided for three schema languages: XML DTD, XML Schema and RELAX NG.

This is a [Recommendation](http://www.w3.org/2004/02/Process-20040205/tr.html#RecsW3C) of the W3C. It has been developed by the W3C [Internationalization Tag Set (ITS) Working Group](http://www.w3.org/International/its/), which is part of the [Internationalization Activity](http://www.w3.org/International/).

This document has been reviewed by W3C Members, by software developers, and by other W3C groups and interested parties, and is endorsed by the Director as a W3C Recommendation. It is a stable document and may be used as reference material or cited from another document. W3C's role in making the Recommendation is to draw attention to the specification and to promote its widespread deployment. This enhances the functionality and interoperability of the Web.

Please make comments about this document using W3C's [public Bugzilla system](http://www.w3.org/Bugs/Public/). We recommend using Bugzilla for making comments (instructions can be found at [How to use the Issues Tracking System for the ITS Tagset Working Draft](http://www.w3.org/International/its/its-bugzilla)). If this is not feasible, comments may also be sent to [www-i18n-comments@w3.org](mailto:www-i18n-comments@w3.org?subject=%5BComment%20on%20ITS%20WD%5D). Use "\[Comment on ITS WD\]" in the subject line of your email. A list of [ITS tagset related comments and issues in Bugzilla](http://www.w3.org/Bugs/Public/buglist.cgi?query_format=advanced&short_desc_type=allwordssubstr&short_desc=&product=ITS&component=ITS+tagset&long_desc_type=allwordssubstr&long_desc=&bug_file_loc_type=allwordssubstr&bug_file_loc=&status_whiteboard_type=allwordssubstr&status_whiteboard=&keywords_type=allwords&keywords=&bug_status=UNCONFIRMED&bug_status=NEW&bug_status=ASSIGNED&bug_status=REOPENED&bug_status=RESOLVED&bug_status=VERIFIED&bug_status=CLOSED&emailtype1=substring&email1=&emailtype2=substring&email2=&bugidtype=include&bug_id=&votes=&chfieldfrom=&chfieldto=Now&chfieldvalue=&cmdtype=doit&order=Reuse+same+sort+as+last+time&field0-0-0=noop&type0-0-0=noop&value0-0-0=) and the [www- i18n-comments archives](http://lists.w3.org/Archives/Public/www-i18n-comments/) are publicly available.

This document incorporates minor changes made against the Proposed Recommendation of 21 November 2006; please see the [Revision Log](#changelog-since-20070226) for details. The [implementation report](http://www.w3.org/International/its/itstagset/ImpReport.html) and [test suite](http://www.w3.org/International/its/tests/) provide further implementation information.

This document was produced by a group operating under the [5 February 2004 W3C Patent Policy](http://www.w3.org/Consortium/Patent-Policy-20040205/). W3C maintains a [public list of any patent disclosures](http://www.w3.org/2004/01/pp-impl/37139/status) made in connection with the deliverables of the group; that page also includes instructions for disclosing a patent. An individual who has actual knowledge of a patent which the individual believes contains [Essential Claim(s)](http://www.w3.org/Consortium/Patent-Policy-20040205/#def-essential) must disclose the information in accordance with [section 6 of the W3C Patent Policy](http://www.w3.org/Consortium/Patent-Policy-20040205/#sec-Disclosure).

<span id="contents"></span>Table of Contents
--------------------------------------------

1 [Introduction](#introduction)

1.1 [Motivation for ITS](#motivation-its)

1.1.1 [Typical Problems](#motivation-its-issues)

1.2 [Users and Usages of ITS](#users-usage)

1.2.1 [Potential Users of ITS](#potential-users)

1.2.2 [Ways to Use ITS](#ways-to-use-its)

1.3 [Out of Scope](#out-of-scope)

1.4 [Important Design Principles](#design-decisions)

1.5 [Development of this Specification](#spec-development)

2 [Basic Concepts](#basic-concepts)

2.1 [Selection](#basic-concepts-selection)

2.1.1 [Local Approach](#basic-concepts-selection-local)

2.1.2 [Global Approach](#basic-concepts-selection-global)

2.2 [Overriding and Inheritance](#basic-concepts-overinher)

2.3 [Adding Information or Pointing to Existing Information](#basic-concepts-addingpointing)

3 [Notation and Terminology](#notation-terminology)

3.1 [Notation](#notation)

3.2 [Schema Language](#def-schemalanguage)

3.3 [Data category](#def-datacat)

3.4 [Selection](#def-selection)

3.5 [Usage of Internationalized Resource Identifiers in ITS](#iri-usage)

4 [Conformance](#conformance)

4.1 [Conformance Type 1: ITS Markup Declarations](#conformance-product-schema)

4.2 [Conformance Type 2: The Processing Expectations for ITS Markup](#conformance-product-processing-expectations)

5 [Processing of ITS information](#its-processing)

5.1 [Indicating the Version of ITS](#its-version-attribute)

5.2 [Locations of Data Categories](#datacategory-locations)

5.2.1 [Global, Rule-based Selection](#selection-global)

5.2.2 [Local Selection in an XML Document](#selection-local)

5.3 [Link to External Rules](#link-external-rules)

5.4 [Precedence between Selections](#selection-precedence)

5.5 [Associating ITS Data Categories with Existing Markup](#associating-its-with-existing-markup)

6 [Description of Data Categories](#datacategory-description)

6.1 [Position, Defaults, Inheritance and Overriding of Data Categories](#datacategories-defaults-etc)

6.2 [Translate](#trans-datacat)

6.2.1 [Definition](#translatability-definition)

6.2.2 [Implementation](#translatability-implementation)

6.2.3 [Markup Declarations for Translate](#translatability-markup)

6.3 [Localization Note](#locNote-datacat)

6.3.1 [Definition](#locNote-definition)

6.3.2 [Implementation](#locNote-implementation)

6.3.3 [Markup Declarations for Localization Note](#locNote-markup)

6.4 [Terminology](#terminology)

6.4.1 [Definition](#terminology-definition)

6.4.2 [Implementation](#terminology-implementation)

6.4.3 [Markup Declarations for Terminology](#terminology-markup)

6.5 [Directionality](#directionality)

6.5.1 [Definition](#directionality-definition)

6.5.2 [Implementation](#directionality-implementation)

6.5.3 [Markup Declarations for Directionality](#directionality-markup)

6.6 [Ruby](#ruby-annotation)

6.6.1 [Definition](#ruby-definition)

6.6.2 [Implementation](#ruby-implementation)

6.6.3 [Markup Declarations for Ruby](#ruby-markup)

6.7 [Language Information](#language-information)

6.7.1 [Definition](#langinfo-definition)

6.7.2 [Implementation](#langinfo-implementation)

6.7.3 [Markup Declarations for Language Information](#langinfo-markup)

6.8 [Elements Within Text](#elements-within-text)

6.8.1 [Definition](#within-text-definition)

6.8.2 [Implementation](#within-text-implementation)

6.8.3 [Markup Declarations for Elements Within Text](#within-text-markup)

### <span id="appendices"></span>Appendices

A [References](#normative-references)

B [References](#informative-references) (Non-Normative)

C [Summary of ITS Markup](#its-markup-summary) (Non-Normative)

D [Schemas for ITS](#its-schemas) (Non-Normative)

E [Checking ITS Markup Constraints With Schematron](#its-schematron-constraints) (Non-Normative)

F [Checking ITS Markup with NVDL](#its-nvdl-schema) (Non-Normative)

G [Revision Log](#revisionlog) (Non-Normative)

H [Acknowledgements](#acknowledgements) (Non-Normative)

------------------------------------------------------------------------

[<img src="images/topOfPage.gif" title="Go to the table of contents." alt="Go to the table of contents." width="26" height="26" />](#contents)<span id="introduction"></span>1 Introduction
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

*This section is informative.*

ITS is a technology to easily create XML which is internationalized and can be localized effectively. On the one hand, the ITS specification identifies concepts (such as "directionality") which are important for internationalization and localization. On the other hand, the ITS specification defines implementations of these concepts (termed "ITS data categories") as a set of elements and attributes called the Internationalization Tag Set (ITS). The document provides implementations for three schema languages: XML DTD [\[XML 1.0\]](#xml10spec "Extensible Markup Language (XML) 1.0 (Fourth Edition)"), XML Schema [\[XML Schema\]](#xmlschema1 "XML Schema Part 1:
                Structures Second Edition") and RELAX NG [\[RELAX NG\]](#relaxng "Regular-grammar-based validation -- RELAX NG").

This document aims to realize many of the ideas formulated in [\[Localizable DTDs\]](#reqlocdtd "Requirements for Localizable DTD Design").

Requirements for this document are formulated in [\[ITS REQ\]](#itsreq "Internationalization and
                Localization Markup Requirements"). Not all requirements listed there are addressed in this document. Those which are not addressed here are either covered in [\[XML i18n BP\]](#xml-i18n-bp "Best Practices for XML Internationalization") or may be addressed in a future version of this specification.

This document covers the following requirements:

-   [R002 - span-like element](http://www.w3.org/TR/2006/WD-itsreq-20060518/#span), see [span](#span)

-   [R006 - identifying language/locale](http://www.w3.org/TR/2006/WD-itsreq-20060518/#langlocale), see <a href="#language-information" class="section-ref">Section 6.7: Language Information</a>

-   [R007 - identifying Terms](http://www.w3.org/TR/2006/WD-itsreq-20060518/#termid), see <a href="#terminology" class="section-ref">Section 6.4: Terminology</a>

-   [R008 - purpose specification/mapping](http://www.w3.org/TR/2006/WD-itsreq-20060518/#mapping%20), see <a href="#associating-its-with-existing-markup" class="section-ref">Section 5.5: Associating ITS Data Categories with Existing Markup</a>

-   [R011 - bidirectional text support](http://www.w3.org/TR/2006/WD-itsreq-20060518/#bidi%20), see <a href="#directionality" class="section-ref">Section 6.5: Directionality</a>

-   [R012 - indicator of translatability](http://www.w3.org/TR/2006/WD-itsreq-20060518/#transinfo%20), see <a href="#trans-datacat" class="section-ref">Section 6.2: Translate</a>

-   [R014 - limited impact](http://www.w3.org/TR/2006/WD-itsreq-20060518/#impact%20), see <a href="#associating-its-with-existing-markup" class="section-ref">Section 5.5: Associating ITS Data Categories with Existing Markup</a>

-   [R017 - localization notes](http://www.w3.org/TR/2006/WD-itsreq-20060518/#locnotes%20), see <a href="#locNote-datacat" class="section-ref">Section 6.3: Localization Note</a>

-   [R020 - annotation markup](http://www.w3.org/TR/2006/WD-itsreq-20060518/#annomark%20), see <a href="#ruby-annotation" class="section-ref">Section 6.6: Ruby</a>

-   [R025 - elements and segmentation](http://www.w3.org/TR/2006/WD-itsreq-20060518/#elemseg%20), see <a href="#elements-within-text" class="section-ref">Section 6.8: Elements Within Text</a>

The following requirements will be addressed in [\[XML i18n BP\]](#xml-i18n-bp "Best Practices for XML Internationalization"):

-   [R003 - CDATA Section](http://www.w3.org/TR/2006/WD-itsreq-20060518/#cdata)

-   [R004 - Unique Identifier](http://www.w3.org/TR/2006/WD-itsreq-20060518/#uid)

-   [R005 - Handling of Entities](http://www.w3.org/TR/2006/WD-itsreq-20060518/#entities)

-   [R015 - Attributes and Translatable Text](http://www.w3.org/TR/2006/WD-itsreq-20060518/#transattr)

-   [R016 - Naming Scheme](http://www.w3.org/TR/2006/WD-itsreq-20060518/#naming)

-   [R019 - Multilingual Documents](http://www.w3.org/TR/2006/WD-itsreq-20060518/#multilang)

-   [R022 - Nested Elements](http://www.w3.org/TR/2006/WD-itsreq-20060518/#nestedelems)

The Working Group decided not to cover the following requirements at this time to be able to focus on the most important ones.

-   [R001 - Indicator of Constraints](http://www.w3.org/TR/2006/WD-itsreq-20060518/#constraints)

-   [R009 - Content Style](http://www.w3.org/TR/2006/WD-itsreq-20060518/#contstyle)

-   [R010 - Link to Internal/External Text](http://www.w3.org/TR/2006/WD-itsreq-20060518/#linkedtext)

-   [R013 - Metrics Count](http://www.w3.org/TR/2006/WD-itsreq-20060518/#metrics)

-   [R018 - Handling of White-Spaces](http://www.w3.org/TR/2006/WD-itsreq-20060518/#whitespaces)

-   [R021 - Identifying Date and Time](http://www.w3.org/TR/2006/WD-itsreq-20060518/#datetime)

-   [R023 - Linguistic Markup](http://www.w3.org/TR/2006/WD-itsreq-20060518/#lingml)

-   [R024 - Variables](http://www.w3.org/TR/2006/WD-itsreq-20060518/#variables)

-   [R026 - Associated Objects](http://www.w3.org/TR/2006/WD-itsreq-20060518/#objects)

### [<img src="images/topOfPage.gif" title="Go to the table of contents." alt="Go to the table of contents." width="26" height="26" />](#contents)<span id="motivation-its"></span>1.1 Motivation for ITS

Content or software that is authored in one language (so-called source language) is often made available in additional languages or adapted with regard to other cultural aspects. This is done through a process called localization, where the original material is translated and adapted to the target audience.

In addition, document formats expressed by schemas may be used by people in different parts of the world, and these people may need special markup to support the local language or script. For example, people authoring in languages such as Arabic, Hebrew, Persian or Urdu need special markup to specify directionality in mixed direction text.

From the viewpoints of feasibility, cost, and efficiency, it is important that the original material should be suitable for localization. This is achieved by appropriate design and development, and the corresponding process is referred to as internationalization. For a detailed explanation of the terms "localization" and "internationalization", see [\[l10n i18n\]](#geo-i18n-l10n).

The increasing usage of XML as a medium for documentation-related content (e.g. DocBook and DITA as formats for writing structured documentation, well suited to computer hardware and software manuals) and software-related content (e.g. the eXtensible User Interface Language [\[XUL\]](#xul "exTensible User Interface Language")) creates challenges and opportunities in the domain of XML internationalization and localization.

#### [<img src="images/topOfPage.gif" title="Go to the table of contents." alt="Go to the table of contents." width="26" height="26" />](#contents)<span id="motivation-its-issues"></span>1.1.1 Typical Problems

The following examples sketch one of the issues that currently hinder efficient XML-related localization: the lack of a standard, declarative mechanism which identifies which parts of an XML document need to be translated. Tools often cannot automatically do this identification.

<span id="d3e317">Example 1: Document with partially translatable content</span>

In this document it is difficult to make distinction between the `string` elements that are translatable and the ones that are not. Only the addition of flags could resolve the issue.

    <resources>
     <section id="Homepage">
      <arguments>
       <string>page</string>
       <string>childlist</string>
      </arguments>
      <variables>
       <string>POLICY</string>
       <string>Corporate Policy</string>
      </variables>
      <keyvalue_pairs>
       <string>Page</string>
       <string>ABC Corporation - Policy Repository</string>
       <string>Footer_Last</string>
       <string>Pages</string>
       <string>bgColor</string>
       <string>NavajoWhite</string>
       <string>title</string>
       <string>List of Available Policies</string>
      </keyvalue_pairs>
     </section>
    </resources>

\[Source file: [EX-motivation-its-1.xml](EX-motivation-its-1.xml)\]

<span id="d3e332">Example 2: Document with partially translatable content</span>

Even when metadata are available to identify non-translatable text, the conditions may be quite complex and not directly indicated with a simple flag. Here, for instance, only the text in the nodes matching the expression `//component[@type!='image']/data[@type='text']` is translatable.

    <dialogue xml:lang="en-gb">
     <rsrc id="123">
      <component id="456" type="image">
       <data type="text">images/cancel.gif</data>
       <data type="coordinates">12,20,50,14</data>
      </component>
      <component id="789" type="caption">
       <data type="text">Cancel</data>
       <data type="coordinates">12,34,50,14</data>
      </component>
      <component id="792" type="string">
       <data type="text">Number of files: </data>
      </component>
     </rsrc>
    </dialogue>

\[Source file: [EX-motivation-its-2.xml](EX-motivation-its-2.xml)\]

### [<img src="images/topOfPage.gif" title="Go to the table of contents." alt="Go to the table of contents." width="26" height="26" />](#contents)<span id="users-usage"></span>1.2 Users and Usages of ITS

#### [<img src="images/topOfPage.gif" title="Go to the table of contents." alt="Go to the table of contents." width="26" height="26" />](#contents)<span id="potential-users"></span>1.2.1 Potential Users of ITS

The ITS specification aims to provide different types of users with information about what markup should be supported to enable worldwide use and effective internationalization and localization of content. The following paragraphs sketch these different types of users, and their usage of ITS.

-   Schema developers who start a schema from ground up

    This type of user will find proposals for attribute and element names to be included in their new schema (also called "host vocabulary"). Using the attribute and element names proposed in the ITS specification may be helpful because it leads to easier recognition of the concepts represented by both schema users and processors. It is perfectly possible, however, for a schema developer to develop his own set of attribute and element names. The specification sets out, first and foremost, to ensure that the required markup is available, and that the behavior of that markup meets established needs.

-   Schema developers who work with an existing schema

    This type of user will be working with schemas such as DocBook, DITA, or perhaps a proprietary schema. The ITS Working Group has sought input from experts developing widely used formats such as the ones mentioned.

    **Note:**

    The question "How to use ITS with existing popular markup schemes?" is covered in more details (including examples) in a separate document: [\[XML i18n BP\]](#xml-i18n-bp "Best Practices for XML Internationalization").

    Developers working on existing schemas should check whether their schemas support the markup proposed in this specification, and, where appropriate, add the markup proposed here to their schema.

    In some cases, an existing schema may already contain markup equivalent to that recommended in ITS. In this case it is not necessary to add duplicate markup since ITS provides mechanisms for associating ITS markup with markup in the host vocabulary which serves a similar purpose (see <a href="#associating-its-with-existing-markup" class="section-ref">Section 5.5: Associating ITS Data Categories with Existing Markup</a>). The developer should, however, check that the behavior associated with the markup in their own schema is fully compatible with the expectations described in this specification.

-   Vendors of content-related tools

    This type of user includes companies which provide tools for authoring, translation or other flavors of content-related software solutions. It is important to ensure that such tools enable worldwide use and effective localization of content. For example, translation tools should prevent content marked up as not for translation from being changed or translated. It is hoped that the ITS specification will make the job of vendors easier by standardizing the format and processing expectations of certain relevant markup items, and allowing them to more effectively identify how content should be handled.

-   Content producers

    This type of user comprises authors, translators and other types of content author. The markup proposed in this specification may be used by them to mark up specific bits of content. Aside: The burden of inserting markup can be removed from content producers by relating the ITS information to relevant bits of content in a global manner (see [global, rule-based approach](#selection-global)). This global work, however, may fall to information architects, rather than the content producers themselves.

In order to support all of these users, the information about what markup should be supported to enable worldwide use and effective localization of content is provided in this specification in two ways:

-   abstractly in the data category descriptions: <a href="#datacategory-description" class="section-ref">Section 6: Description of Data Categories</a>

-   concretely in the ITS schemas: <a href="#its-schemas" class="section-ref">Appendix D: Schemas for ITS</a>

#### [<img src="images/topOfPage.gif" title="Go to the table of contents." alt="Go to the table of contents." width="26" height="26" />](#contents)<span id="ways-to-use-its"></span>1.2.2 Ways to Use ITS

The ITS specification proposes several mechanisms for supporting worldwide use and effective internationalization and localization of content. We will sketch them below by looking at them from the perspectives of certain user types. For the purpose of illustration, we will demonstrate how ITS can indicate that certain parts of content should or should not be translated.

-   A content author uses an attribute on a particular element to say that the text in the element should not be translated.

<span id="EX-ways-to-use-its-1">Example 3: Use of ITS by content author</span>

The `its:translate="no"` attributes indicate that the `path` and the `cmd` elements should not be translated.

    <help
      xmlns:its="http://www.w3.org/2005/11/its" 
      its:version="1.0">
     <head>
      <title>Building the Zebulon Toolkit</title>
     </head>
     <body>
      <p>To re-compile all the modules of the Zebulon toolkit you need to go in the
        <path
         its:translate="no">\Zebulon\Current Source\binary</path> directory.
        Then from there, run batch file <cmd
         its:translate="no">Build.bat</cmd>.</p>
     </body>
    </help>

\[Source file: [EX-ways-to-use-its-1.xml](EX-ways-to-use-its-1.xml)\]

-   A content author or information architect uses markup at the top of the document to identify a particular type of element or context in which the content should not be translated.

<span id="d3e435">Example 4: Use of ITS by information architect</span>

The <a href="#translateRule" class="itsmarkup">translateRule</a> element is used in the header of the document to indicate that none of the `path` or `cmd` elements should be translated.

    <help
      xmlns:its="http://www.w3.org/2005/11/its" 
      its:version="1.0">
     <head>
      <title>Building the Zebulon Toolkit</title>
      <its:rules version="1.0">
       <its:translateRule selector="//path | //cmd" translate="no"/>
      </its:rules>
     </head>
     <body>
      <p>To re-compile all the modules of the Zebulon toolkit you need to go in the
        <path>\Zebulon\Current Source\binary</path> directory.
        Then from there, run batch file <cmd>Build.bat</cmd>.</p>
     </body>
    </help>

\[Source file: [EX-ways-to-use-its-2.xml](EX-ways-to-use-its-2.xml)\]

-   A processor may insert markup at the top of the document which links to ITS information outside of the document.

<span id="d3e460">Example 5: Use of ITS by processor</span>

A <a href="#rules" class="itsmarkup">rules</a> element is inserted in the header of the document. It has a XLink <a href="#rules.attributes" class="itsmarkup">href</a> attribute used to link to an [ITS external rule](#link-external-rules) document.

    <help
      xmlns:its="http://www.w3.org/2005/11/its" 
      xmlns:xlink="http://www.w3.org/1999/xlink" 
      its:version="1.0">
     <head>
      <title>Building the Zebulon Toolkit</title>
      <its:rules version="1.0" xlink:href="EX-ways-to-use-its-4.xml" xlink:type="simple"/>
     </head>
     <body>
      <p>To re-compile all the modules of the Zebulon toolkit you need to go in the
        <path>\Zebulon\Current Source\binary</path> directory.
        Then from there, run batch file <cmd>Build.bat</cmd>.</p>
     </body>
    </help>

\[Source file: [EX-ways-to-use-its-3.xml](EX-ways-to-use-its-3.xml)\]

<span id="d3e481">Example 6: ITS rule file shared by different documents</span>

The <a href="#rules" class="itsmarkup">rules</a> element contains several ITS rules that are common to different documents. One of them is a <a href="#translateRule" class="itsmarkup">translateRule</a> element that indicates that no `path` or `cmd` element should be translated.

    <its:rules
      xmlns:its="http://www.w3.org/2005/11/its"  version="1.0">
     <its:translateRule selector="//path | //cmd" translate="no"/>
    </its:rules>

\[Source file: [EX-ways-to-use-its-4.xml](EX-ways-to-use-its-4.xml)\]

-   A schema developer integrates ITS markup declarations in his schema to allow users to indicate that specific parts of the content should not be translated.

<span id="d3e509">Example 7: An XSD schema with ITS declaration</span>

The declarations for the <a href="#att.local.no-ns.attribute.translate" class="itsmarkup">translate</a> attribute is added to a group of common attributes `commonAtts`. This allows to use the <a href="#att.local.no-ns.attribute.translate" class="itsmarkup">translate</a> attribute within the documents like in [Example 3](#EX-ways-to-use-its-1).

    <xs:schema
      xmlns:its="http://www.w3.org/2005/11/its" 
      xmlns:xs="http://www.w3.org/2001/XMLSchema"  elementFormDefault="qualified">
     <xs:import namespace="http://www.w3.org/2005/11/its" schemaLocation="its.xsd"/>
     <xs:attributeGroup name="commonAtts">
      <xs:attributeGroup ref="its:att.local.with-ns.attribute.translate"/>
      <xs:attribute name="id" type="xs:ID" use="optional"/>
     </xs:attributeGroup>
     <xs:element name="help">
      <xs:complexType>
       <xs:sequence>
        <xs:element name="head">
         <xs:complexType>
          <xs:sequence>
           <xs:element name="title" type="xs:string"/>
          </xs:sequence>
          <xs:attributeGroup ref="commonAtts"/>
         </xs:complexType>
        </xs:element>
        <xs:element name="body">
         <xs:complexType>
          <xs:choice minOccurs="1" maxOccurs="unbounded">
           <xs:element name="p">
            <xs:complexType mixed="true">
             <xs:choice minOccurs="0" maxOccurs="unbounded">
              <xs:element ref="path"/>
              <xs:element ref="cmd"/>
             </xs:choice>
             <xs:attributeGroup ref="commonAtts"/>
            </xs:complexType>
           </xs:element>
          </xs:choice>
         </xs:complexType>
        </xs:element>
       </xs:sequence>
       <xs:attributeGroup ref="its:att.version.attribute.version"/>
      </xs:complexType>
     </xs:element>
     <xs:element name="path">
      <xs:complexType mixed="true">
       <xs:attributeGroup ref="commonAtts"/>
      </xs:complexType>
     </xs:element>
     <xs:element name="cmd">
      <xs:complexType mixed="true">
       <xs:attributeGroup ref="commonAtts"/>
      </xs:complexType>
     </xs:element>
    </xs:schema>

\[Source file: [EX-ways-to-use-its-5.xsd](EX-ways-to-use-its-5.xsd)\]

The first two approaches above can be likened to the use of CSS in [\[XHTML 1.0\]](#xhtml10 "XHTML™ 1.0 The Extensible
                HyperText Markup Language (Second Edition)"). Using a `style` attribute, an XHTML content author may assign a color to a particular paragraph. That author could also have used the `style` element at the top of the page to say that all paragraphs of a particular class or in a particular context would be colored red.

### [<img src="images/topOfPage.gif" title="Go to the table of contents." alt="Go to the table of contents." width="26" height="26" />](#contents)<span id="out-of-scope"></span>1.3 Out of Scope

This standard does not cover all mechanisms and data formats (sometimes called <span class="new-term">Localization Properties</span>), which might be needed for configuring localization workflows or tools to process a specific format. However, these mechanisms and data formats may be implemented using the framework described in this standard.

**Note:**

"XML localization properties" is a generic term to name the mechanisms and data formats that allow localization tools to be configured in order to process a specific XML format. Examples of "XML localization properties" are the Trados "DTD Settings" file, and the SDLX "Analysis" file.

### [<img src="images/topOfPage.gif" title="Go to the table of contents." alt="Go to the table of contents." width="26" height="26" />](#contents)<span id="design-decisions"></span>1.4 Important Design Principles

Abstraction via *data categories*: ITS defines data categories as an abstract notion for information for internationalization and localization of XML schemas and documents. This abstraction is helpful in realizing independence from a particular implementation using for example an element or attribute. See <a href="#def-datacat" class="section-ref">Section 3.3: Data category</a> for a definition of the term data categories, <a href="#datacategory-description" class="section-ref">Section 6: Description of Data Categories</a> for the definition of the various ITS data categories, and subsections in <a href="#datacategory-description" class="section-ref">Section 6: Description of Data Categories</a> for the data category implementations.

Powerful *selection mechanism:* For ITS markup which appears in an XML instance, it has to be clearly defined to which XML nodes the ITS-related information pertains. Thus, ITS defines [selection](#termdef-selection) mechanisms to specify to what parts of an XML document an ITS data category and its values should be applied. Selection relies on the information which is given in the XML Information Set [\[XML Infoset\]](#xmlinfoset "XML Information Set
                (Second Edition)"). ITS applications may implement inclusion mechanisms such as XInclude or DITA's [\[DITA 1.0\]](#dita10 "OASIS Darwin Information Typing
Architecture (DITA) Language Specification v1.0") conref.

Content authors need, for example, a simple way to work with the [Translate](#trans-datacat) data category in order to express whether the content of an element or attribute should be translated or not. Localization coordinators, on the other hand, need an efficient way of managing translations of large document sets based on the same schema. This could by realized by a specification of defaults for the [Translate](#trans-datacat) data category and exceptions from the defaults (e.g. all `p` elements should be translated, but not `p` elements inside of an `index` element).

To meet these requirements this specification introduces mechanisms that add ITS information to XML documents, see <a href="#its-processing" class="section-ref">Section 5: Processing of ITS information</a>. These mechanisms also provide a means for specifying ITS information for attributes (a task for which no standard means yet exists).

The ITS selection mechanisms allows you to provide information about content [locally](#selection-local) (specified at the XML node to which it pertains) or [globally](#selection-global) (specified in another part of the document). Global selection mechanisms can be in the same document, or in a separate file.

*No dedicated extensibility*: It may be useful or necessary to extend the set of information available for internationalization or localization purposes beyond what is provided by ITS. This specification does not define a dedicated extension mechanism, since ordinary XML mechanisms (e.g. XML Namespaces [\[XML Names\]](#xmlns "Namespaces in
              XML (Second Edition)")) may be used.

*Ease of integration*:

-   ITS follows the example from [section 4](http://www.w3.org/TR/2001/REC-xlink-20010627/#att-method) of [\[XLink 1.0\]](#xlink1 "XML Linking Language
                  1.0"), by providing mostly global attributes for the implementation of ITS data categories. Avoiding elements for ITS purposes as much as possible ensures ease of integration into existing markup schemes, see [section 3.14](http://www.w3.org/TR/itsreq/#impact) in [\[ITS REQ\]](#itsreq "Internationalization and
                    Localization Markup Requirements"). Only for some requirements do additional child elements have to be used, see for example <a href="#ruby-annotation" class="section-ref">Section 6.6: Ruby</a>.

-   ITS has no dependency on technologies which are still under development

-   ITS fits with existing work in the W3C architecture (e.g. use of [\[XPath 1.0\]](#xpath "XML Path Language (XPath) Version 1.0") for the selection mechanism)

### [<img src="images/topOfPage.gif" title="Go to the table of contents." alt="Go to the table of contents." width="26" height="26" />](#contents)<span id="spec-development"></span>1.5 Development of this Specification

This specification has been developed using the ODD (*One Document Does it all*) language of the Text Encoding Initiative ([\[TEI\]](#tei "Text Encoding Initiative Guidelines development
                version (P5)")). This is a literate programming language for writing XML schemas, with three characteristics:

1.  The element and attribute set is specified using an XML vocabulary which includes support for macros (like DTD entities, or schema patterns), a hierarchical class system for attributes and elements, and creation of modules.

2.  The content models for elements and attributes are written using embedded RELAX NG XML notation.

3.  Documentation for elements, attributes, value lists etc. is written inline, along with examples and other supporting material.

XSLT transformations are provided by the TEI to create documentation into HTML, XSL FO or LaTeX forms, and to generate RELAX NG documents and DTD. From the RELAX NG documents, James Clark's [trang](http://www.thaiopensource.com/relaxng/trang.html) can be used to create XML Schema documents.

[<img src="images/topOfPage.gif" title="Go to the table of contents." alt="Go to the table of contents." width="26" height="26" />](#contents)<span id="basic-concepts"></span>2 Basic Concepts
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

*This section is informative.*

### [<img src="images/topOfPage.gif" title="Go to the table of contents." alt="Go to the table of contents." width="26" height="26" />](#contents)<span id="basic-concepts-selection"></span>2.1 Selection

Information (e.g. "translate this") captured by ITS markup (e.g. `its:translate='yes'`) always pertains to one or more XML nodes (mainly element and attribute nodes). In a sense, ITS markup "selects" the XML node(s). Selection may be explicit or implicit. ITS distinguishes two approaches to selection: local, and with global rules.

The mechanisms defined for ITS selection resemble those defined in [\[CSS 2.1\]](#css2-1 "Cascading Style Sheets,
                level 2 revision 1
CSS 2.1 Specification"). The local approach can be compared to the `style` attribute in HTML/XHTML, and the approach with global rules is similar to the `style` element in HTML/XHTML. In contrast to CSS, ITS uses XPath for identifying nodes. Thus,

-   the local approach puts ITS markup in the relevant element of the host vocabulary (e.g. the `author` element in DocBook)

-   the [rule-based, global approach](#selection-global) puts the ITS markup in elements defined by ITS itself (namely the <a href="#rules" class="itsmarkup">rules</a> element)

ITS markup can be used with XML documents (e.g. a DocBook article), or schemas (e.g. an XML Schema document for a proprietary document format). Since each usage defines some specific requirements, ITS markup may take different shapes.

The following two examples sketch the distinction between the local and global approaches.

#### [<img src="images/topOfPage.gif" title="Go to the table of contents." alt="Go to the table of contents." width="26" height="26" />](#contents)<span id="basic-concepts-selection-local"></span>2.1.1 Local Approach

The document in [Example 8](#EX-basic-concepts-1) shows how a content author may use the ITS <a href="#att.local.no-ns.attribute.translate" class="itsmarkup">translate</a> attribute to indicate that all content inside the `author` element should be protected from translation. Translation tools that are aware of the meaning of this attribute can then screen the relevant content from the translation process.

<span id="EX-basic-concepts-1">Example 8: ITS markup on elements in an XML document (local approach)</span>

    <dbk:article
      xmlns:its="http://www.w3.org/2005/11/its" 
      xmlns:dbk="http://docbook.org/ns/docbook" 
      its:version="1.0" version="5.0" xml:lang="en">
     <dbk:info>
      <dbk:title>An example article</dbk:title>
      <dbk:author
        its:translate="no">
       <dbk:personname>
        <dbk:firstname>John</dbk:firstname>
        <dbk:surname>Doe</dbk:surname>
       </dbk:personname>
       <dbk:affiliation>
        <dbk:address>
         <dbk:email>foo@example.com</dbk:email>
        </dbk:address>
       </dbk:affiliation>
      </dbk:author>
     </dbk:info>
     <dbk:para>This is a short article.</dbk:para>
    </dbk:article>

\[Source file: [EX-basic-concepts-1.xml](EX-basic-concepts-1.xml)\]

For this to work, the schema developer will need to add the <a href="#att.local.no-ns.attribute.translate" class="itsmarkup">translate</a> attribute to the schema as a common attribute or on all the relevant element definitions. Note how there is an expectation in this case that inheritance plays a part in identifying which content does have to be translated and which does not. Tools that process this content for translation will need to implement the expected inheritance.

#### [<img src="images/topOfPage.gif" title="Go to the table of contents." alt="Go to the table of contents." width="26" height="26" />](#contents)<span id="basic-concepts-selection-global"></span>2.1.2 Global Approach

The document in [Example 9](#EX-basic-concepts-2) shows a different approach to identifying non-translatable content, similar to that used with a `style` element in [\[XHTML 1.0\]](#xhtml10 "XHTML™ 1.0 The Extensible
                HyperText Markup Language (Second Edition)"), but using an ITS-defined element called <a href="#rules" class="itsmarkup">rules</a>. It works as follows: A document can contain a <a href="#rules" class="itsmarkup">rules</a> element (placed where it does not impact the structure of the document, like in a "head" section). It contains one or more ITS rule elements (for example <a href="#translateRule" class="itsmarkup">translateRule</a>). Each of these specific elements contains a <a href="#att.selector.attribute.selector" class="itsmarkup">selector</a> attribute. As its name suggests, this attribute selects the XML node or nodes to which a corresponding ITS information pertains. The values of ITS selector attributes are XPath absolute location paths. Information for the handling of namespaces in these path expressions is taken from namespace declarations [\[XML Names\]](#xmlns "Namespaces in
              XML (Second Edition)") at the current rules element.

**Note:**

Caveat Related to XSLT-based Processing of ITS Selector Attributes

The values of ITS <a href="#att.selector.attribute.selector" class="itsmarkup">selector</a> attributes are XPath absolute location paths. Accordingly, the following is a legitimate value:

myElement/descendant-or-self::\*/@\*

Unfortunately, values like this cause trouble when they are used in XSLT-based processing of ITS where the values of the ITS <a href="#att.selector.attribute.selector" class="itsmarkup">selector</a> attributes are used as values of `match` attributes of XSLT templates. The reason for this is the following: `match` attributes may only contain a restriction/subset of XPath expressions, so-called [patterns](http://www.w3.org/TR/xslt#patterns).

Basically the following restrictions hold for patterns:

-   only axes "child" or "attribute" allowed

-   "//" or "/" possible

-   id() or key() function possible

-   predicates possible

Using only XSLT patterns in ITS <a href="#att.selector.attribute.selector" class="itsmarkup">selector</a> attributes helps to avoid this issue. In many cases, this is possible by using patterns with predicates. The value above may for example be rewritten as follows:

\*\[self::myElement\]/@\* | myElement//\*/@\*

<span id="EX-basic-concepts-2">Example 9: ITS global markup in an XML document (rule-based approach)</span>

    <myTopic
      xmlns:its="http://www.w3.org/2005/11/its" 
      xmlns="myNamescapeURI" id="topic01" xml:lang="en-us">
     <prolog>
      <title>Using ITS</title>
      <its:rules version="1.0">
       <its:translateRule selector="//n:term" translate="no"/>
      </its:rules>
     </prolog>
     <body>
      <p>ITS defines <term>data category</term> as an abstract
      concept for a particular type of information for 
      internationalization and localization of XML schemas and 
      documents.</p>
     </body>
    </myTopic>

\[Source file: [EX-basic-concepts-2.xml](EX-basic-concepts-2.xml)\]

For this approach to work, the schema developer needs to add the <a href="#rules" class="itsmarkup">rules</a> element and associated markup to the schema.

In some cases this may allow the schema developer to avoid adding other ITS markup (such as an <a href="#att.local.no-ns.attribute.translate" class="itsmarkup">translate</a> attribute) to the elements in the schema. However, it is likely that authors will want to use attributes on markup from time to time to override the general rule.

For specification of the [Translate](#trans-datacat) data category information, the contents of the <a href="#rules" class="itsmarkup">rules</a> element would normally be designed by an information architect familiar with the document format and familiar with, or working with someone familiar with, the needs of the localization group.

The global, rule-based approach has the following benefits:

-   Content authors do not have to concern themselves with creating additional markup or verifying that the markup was applied correctly. ITS data categories are associated with sets of XML nodes (for example all `p` elements in an XML instance)

-   Changes can be done in a single location, rather than by searching and modifying the markup throughout a document (or documents, if the <a href="#rules" class="itsmarkup">rules</a> element is stored as an external entity)

-   ITS data categories can designate attribute values as well as elements.

-   It is possible to associate ITS markup with existing markup (for example the `term` element in DITA)

The commonality in both examples above is the markup `translate='no'`. This piece of ITS markup can be interpreted as follows:

-   it pertains to the [Translate](#trans-datacat) data category

-   the attribute <a href="#att.local.no-ns.attribute.translate" class="itsmarkup">translate</a> holds a value of "no"

The ITS <a href="#att.selector.attribute.selector" class="itsmarkup">selector</a> attribute allows:

-   ITS data category attributes to appear in global rules (even outside of an XML document or schema)

-   ITS data categories attributes to pertain to sets of XML nodes (for example all `p` elements in an XML document)

-   ITS markup to pertain to attributes

-   ITS markup to [associate with existing markup](#associating-its-with-existing-markup) (for example the `term` element in DITA)

### [<img src="images/topOfPage.gif" title="Go to the table of contents." alt="Go to the table of contents." width="26" height="26" />](#contents)<span id="basic-concepts-overinher"></span>2.2 Overriding and Inheritance

The power of the ITS selection mechanisms comes at a price: rules related to [overriding/precedence](#selection-precedence), and [inheritance](#datacategories-defaults-etc), have to be established.

The document in [Example 10](#EX-basic-concepts-3) shows how inheritance and overriding work for the [Translate](#trans-datacat) data category. By default elements are translatable. Here, the <a href="#translateRule" class="itsmarkup">translateRule</a> element declared in the header overrides the default for the `head` element inside `text` and for all its children. Because the `title` element is actually translatable, the global rule needs to be overridden by a local `its:translate="yes"`. Note that the global rule is processed first, regardless of its position inside the document. In the main body of the document, the default applies, and here it is `its:translate="no"` that is used to set "faux pas" as non-translatable.

<span id="EX-basic-concepts-3">Example 10: Overriding and Inheritance</span>

    <text
      xmlns:its="http://www.w3.org/2005/11/its" >
     <head>
      <revision>Sep-10-2006 v5</revision>
      <author>Ealasaidh McIan</author>
      <contact>ealasaidh@hogw.ac.uk</contact>
      <title
        its:translate="yes">The Origins of Modern Novel</title>
      <its:rules version="1.0">
       <its:translateRule translate="no" selector="/text/head"/>
      </its:rules>
     </head>
     <body>
      <div xml:id="intro">
       <head>Introduction</head>
       <p>It would certainly be quite a <span
          its:translate="no">faux pas</span> 
           to start a dissertation on the origin of modern novel without 
           mentioning the <tl>Epic of Gilgamesh</tl>...</p>
      </div>
     </body>
    </text>

\[Source file: [EX-basic-concepts-3.xml](EX-basic-concepts-3.xml)\]

### [<img src="images/topOfPage.gif" title="Go to the table of contents." alt="Go to the table of contents." width="26" height="26" />](#contents)<span id="basic-concepts-addingpointing"></span>2.3 Adding Information or Pointing to Existing Information

For some data categories, special attributes add or point to information about the selected nodes. For example, the [Localization Note](#locNote-datacat) data category can add information to selected nodes (using a <a href="#locNote" class="itsmarkup">locNote</a> element), or point at existing information elsewhere in the document (using a <a href="#locNoteRule.attributes" class="itsmarkup">locNotePointer</a> attribute).

The functionality of adding information to the selected nodes is available for each data category except [Language Information](#language-information). Pointing to existing information is not possible for data categories that express *a closed set of values*; that is: [Translate](#trans-datacat), [Directionality](#directionality) and [Elements Within Text](#elements-within-text).

The functionalities of adding information and pointing to existing information are *mutually exclusive*. That is to say, attributes for pointing and adding must not appear at the same rule element.

[<img src="images/topOfPage.gif" title="Go to the table of contents." alt="Go to the table of contents." width="26" height="26" />](#contents)<span id="notation-terminology"></span>3 Notation and Terminology
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

*This section is normative.*

### [<img src="images/topOfPage.gif" title="Go to the table of contents." alt="Go to the table of contents." width="26" height="26" />](#contents)<span id="notation"></span>3.1 Notation

The keywords "MUST", "MUST NOT", "REQUIRED", "SHALL", "SHALL NOT", "SHOULD", "SHOULD NOT", "RECOMMENDED", "MAY", and "OPTIONAL" in this document are to be interpreted as described in [\[RFC 2119\]](#rfc2119).

The namespace URI that [MUST](#rfc-keywords) be used by implementations of this specification is:

    http://www.w3.org/2005/11/its

The namespace prefix used in this specification for this URI is "its". It is recommended that implementations of this specification use this prefix.

In addition, the following namespaces are used in this document:

-   `http://www.w3.org/2001/XMLSchema` for the XML Schema namespace, here used with the prefix "xs"

-   `http://relaxng.org/ns/structure/1.0` for the RELAX NG namespace, here used with the prefix "rng"

-   `http://www.w3.org/1999/xlink` for the XLink namespace, here used with the prefix "xlink"

### [<img src="images/topOfPage.gif" title="Go to the table of contents." alt="Go to the table of contents." width="26" height="26" />](#contents)<span id="def-schemalanguage"></span>3.2 Schema Language

\[<span id="t001">Definition</span>: <span class="new-term">Schema language</span> refers in this specification to an XML-related modeling or validation language such as XML DTD, XML Schema or RELAX NG.\]

**Note:**

This specification provides schemas in the format of XML DTD, XML Schema or RELAX NG. However, these schemas are only non-normative; [conformance for ITS markup declarations](#conformance-product-schema) defines only mandatory positions of ITS declarations in schemas. This makes it possible to use ITS with any schema language that allows for using these positions.

### [<img src="images/topOfPage.gif" title="Go to the table of contents." alt="Go to the table of contents." width="26" height="26" />](#contents)<span id="def-datacat"></span>3.3 Data category

\[<span id="t002">Definition</span>: ITS defines <span class="new-term">data category</span> as an abstract concept for a particular type of information for internationalization and localization of XML schemas and documents.\] The concept of a data category is independent of its implementation in an XML environment (e.g. using an element or attribute).

For each data category, ITS distinguishes between the following:

-   the prose description, see <a href="#datacategory-description" class="section-ref">Section 6: Description of Data Categories</a>

-   schema language independent formalization, see the "markup declarations" subsections in <a href="#datacategory-description" class="section-ref">Section 6: Description of Data Categories</a>

-   schema language specific implementations, see <a href="#its-schemas" class="section-ref">Appendix D: Schemas for ITS</a>

<span id="d3e1090">Example 11: A data category and its implementation</span>

The [Translate](#trans-datacat) data category conveys information as to whether a piece of content should be translated or not.

The simplest formalization of this prose description on a schema language independent level is a <a href="#att.local.no-ns.attribute.translate" class="itsmarkup">translate</a> attribute with two possible values: "yes" and "no". An implementation on a schema language specific level would be the declaration of the <a href="#att.local.no-ns.attribute.translate" class="itsmarkup">translate</a> attribute in, for example, an XML DTD, an XML Schema document or an RELAX NG document. A different implementation would be a <a href="#translateRule" class="itsmarkup">translateRule</a> element that allows for specifying [global rules](#selection-global) about the [Translate](#trans-datacat) data category.

### [<img src="images/topOfPage.gif" title="Go to the table of contents." alt="Go to the table of contents." width="26" height="26" />](#contents)<span id="def-selection"></span>3.4 Selection

\[<span id="termdef-selection">Definition</span>: <span class="new-term">selection</span> encompasses mechanisms to specify to what parts of an XML document an ITS data category and its values should be applied to.\] Selection is discussed in detail in <a href="#its-processing" class="section-ref">Section 5: Processing of ITS information</a>. Selection can be applied globally, see <a href="#selection-global" class="section-ref">Section 5.2.1: Global, Rule-based Selection</a>, and locally, see <a href="#selection-local" class="section-ref">Section 5.2.2: Local Selection in an XML Document</a>. As for global selection, ITS information can be [added](#def-adding-pointing) to the selected nodes, or it can [point to existing information](#def-adding-pointing) which is related to selected nodes.

Selection relies on the information that is given in the XML Information Set [\[XML Infoset\]](#xmlinfoset "XML Information Set
                (Second Edition)"). ITS applications [MAY](#rfc-keywords) implement inclusion mechanisms such as XInclude or DITA's [\[DITA 1.0\]](#dita10 "OASIS Darwin Information Typing
Architecture (DITA) Language Specification v1.0") conref.

**Note:**

The selection of the ITS data categories applies to textual values contained within element or attribute nodes. In some cases these nodes form pointers to other resources; a well-known example is the `src` attribute on the `img` element in HTML. The ITS [Translate](#trans-datacat) data category applies to the text of the pointer itself, not the object to which it points. Thus in the following example, the translation information specified via the <a href="#translateRule" class="itsmarkup">translateRule</a> element applies to the filename "instructions.jpg", and is not an instruction to open the graphic and change the words therein.

<span id="d3e1173">Example 12: Selecting the text of a pointer to an external object</span>

    <text
      xmlns:its="http://www.w3.org/2005/11/its" >
     <its:rules version="1.0">
      <its:translateRule translate="yes" selector="//p/img/@src"/>
     </its:rules> ...
     <p>As you can see in
      <img src="instructions.jpg"/>,
      the truth is not always out there.</p>
    </text>

\[Source file: [EX-notation-terminology-1.xml](EX-notation-terminology-1.xml)\]

### [<img src="images/topOfPage.gif" title="Go to the table of contents." alt="Go to the table of contents." width="26" height="26" />](#contents)<span id="iri-usage"></span>3.5 Usage of Internationalized Resource Identifiers in ITS

The attributes <a href="#rules.attributes" class="itsmarkup">href</a>, <a href="#locNoteRule.attributes" class="itsmarkup">locNoteRef</a> and <a href="#termRule.attributes" class="itsmarkup">termInfoRef</a> which contain resource identifiers [MUST](#rfc-keywords) allow the usage of Internationalized Resource Identifiers (IRIs, [\[RFC 3987\]](#rfc3987 "Internationalized Resource Identifiers (IRIs)") or its successor) to ease the adoption of ITS in international application scenarios.

**Note:**

The ITS schemas in <a href="#its-schemas" class="section-ref">Appendix D: Schemas for ITS</a> are not normative. Hence this specification defines no validation requirements for IRI values in ITS markup. For processing of these values, relying on IRIs imposes no specific requirements. The reason is that the processing happens on the info set level [\[XML Infoset\]](#xmlinfoset "XML Information Set
                (Second Edition)"), where no difference between IRIs and URIs exists.

[<img src="images/topOfPage.gif" title="Go to the table of contents." alt="Go to the table of contents." width="26" height="26" />](#contents)<span id="conformance"></span>4 Conformance
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

*This section is normative.*

The usage of the term *conformance clause* in this section is in compliance with [\[QAFRAMEWORK\]](#qa-framework "QA Framework:
                Specification Guidelines").

This specification defines two types of conformance: conformance of [1) ITS markup declarations](#conformance-product-schema) , and conformance of [2) processing expectations for ITS Markup](#conformance-product-processing-expectations). These conformance types complement each other. An implementation of this specification [MAY](#rfc2119) use them separately or together.

### [<img src="images/topOfPage.gif" title="Go to the table of contents." alt="Go to the table of contents." width="26" height="26" />](#contents)<span id="conformance-product-schema"></span>4.1 Conformance Type 1: ITS Markup Declarations

*Description:* ITS markup declarations encompass all declarations that are part of the Internationalization Tag Set. They do not concern the *usage* of the markup in XML documents. Such markup is subject to the conformance clauses in <a href="#conformance-product-processing-expectations" class="section-ref">Section 4.2: Conformance Type 2: The Processing Expectations for ITS Markup</a>.

*Definitions related to this conformance type:* ITS markup declarations are defined in various subsections in <a href="#its-processing" class="section-ref">Section 5: Processing of ITS information</a> and <a href="#datacategory-description" class="section-ref">Section 6: Description of Data Categories</a> (e.g. <a href="#locNote-markup" class="section-ref">Section 6.3.3: Markup Declarations for Localization Note</a>) in a schema language independent manner, relying on the ODD language. Their occurrence in other sections of this document is typographically marked via bold face and color.

*Who uses this conformance type:* Schema designers integrating ITS markup declarations into a schema. All conformance clauses for this conformance type concern the position of ITS markup declarations in that schema, and their status as mandatory or optional.

*Conformance clauses:*

-   *1-1:* At least one of the following [MUST](#rfc-keywords) be in the schema:

    -   <a href="#rules" class="itsmarkup">rules</a> element

    -   one of the [local ITS attributes](#span.attributes)

    -   <a href="#span" class="itsmarkup">span</a> element

    -   <a href="#ruby" class="itsmarkup">ruby</a> element

-   *1-2:* If the <a href="#rules" class="itsmarkup">rules</a> element is used, it [MUST](#rfc-keywords) be part of the content model of at least one element declared in the schema. It [SHOULD](#rfc-keywords) be in a content model for meta information, if this is available in that schema (e.g. the `head` element in [\[XHTML 1.0\]](#xhtml10 "XHTML™ 1.0 The Extensible
                    HyperText Markup Language (Second Edition)")).

-   *1-3:* If the <a href="#ruby" class="itsmarkup">ruby</a> element is used, it [SHOULD](#rfc-keywords) be declared as an inline element.

-   *1-4:* If the <a href="#span" class="itsmarkup">span</a> element is used, it [SHOULD](#rfc-keywords) be declared as an inline element.

Full implementations of this conformance type will implement all markup declarations for ITS. Statements related to this conformance type [MUST](#rfc-keywords) list all markup declarations they implement.

*Examples:* Examples of the usage of ITS markup declarations in various existing schemas are given in a separate document [\[XML i18n BP\]](#xml-i18n-bp "Best Practices for XML Internationalization").

**Note:**

Since the ITS markup declarations are schema language independent, each schema language can use its own, possibly multiple, mechanisms to implement the conformance clauses for ITS markup declarations. For example, an XML DTD can use parameter entities to encapsulate the [ITS local attributes](#span.attributes), or declare them directly for each element. The appropriate steps to integrate ITS into a schema depend on the design of this schema (e.g. whether it already has a customization layer that uses parameter entities). The ITS schemas in the format of XML DTD, XML Schema and RELAX NG in <a href="#its-schemas" class="section-ref">Appendix D: Schemas for ITS</a> are only informative examples.

### [<img src="images/topOfPage.gif" title="Go to the table of contents." alt="Go to the table of contents." width="26" height="26" />](#contents)<span id="conformance-product-processing-expectations"></span>4.2 Conformance Type 2: The Processing Expectations for ITS Markup

*Description:* Processors need to compute the ITS information that pertains to a node in an XML document. The ITS processing expectations define how the computation has to be carried out. Correct computation involves support for [selection mechanism](#def-selection), [defaults / inheritance / overriding characteristics](#datacategories-defaults-etc), and [precedence](#selection-precedence). The markup [MAY](#rfc-keywords) be valid against a schema which conforms to the clauses in <a href="#conformance-product-schema" class="section-ref">Section 4.1: Conformance Type 1: ITS Markup Declarations</a>.

*Definitions related to this conformance type:* The processing expectations for ITS markup make use of selection mechanisms defined in <a href="#its-processing" class="section-ref">Section 5: Processing of ITS information</a>. The individual data categories defined in <a href="#datacategory-description" class="section-ref">Section 6: Description of Data Categories</a> have [defaults / inheritance / overriding characteristics](#datacategories-defaults-etc), and allow for using ITS markup in various positions ([global](#selection-global) and [local](#selection-local)).

*Who uses this conformance type:* Applications that need to process for internationalization or localization the nodes captured by a data category. Examples of this type of application are: ITS markup-aware editors, or translation tools that make use of ITS markup to filter translatable text as an input to the localization process.

**Note:**

Application-specific processing (that is processing that goes beyond the computation of ITS information for a node) such as automated filtering of translatable content based on the [Translate](#trans-datacat) data category is not covered by the conformance clauses below.

**Note:**

The ITS Working group provides a [test suite](http://www.w3.org/International/its/tests/) to help implementers to write applications that support the ITS specifications. The test suite provides pairs of input and output files.

*Conformance clauses:*

-   *2-1:* A processor [MUST](#rfc-keywords) implement at least one [data category](#def-datacat). For each implemented [data category](#def-datacat), the following [MUST](#rfc-keywords) be taken into account:

    -   *2-1-1:* processing of at least one selection mechanism ([global](#selection-global) or [local](#selection-local)).

    -   *2-1-2:* the [default selections for the data category](#datacategories-defaults-etc).

    -   *2-1-3:* the precedence definitions for selections defined in <a href="#selection-precedence" class="section-ref">Section 5.4: Precedence between Selections</a>, for the type of selections it processes.

-   *2-2:* If an application claims to process ITS markup for the global selection mechanism, it [MUST](#rfc-keywords) process an XLink <a href="#rules.attributes" class="itsmarkup">href</a> attribute found on a <a href="#rules" class="itsmarkup">rules</a> elements.

Statements related to this conformance type [MUST](#rfc-keywords) list all [data categories](#def-datacat) they implement, and for each [data category](#def-datacat) which type of selection they support.

[<img src="images/topOfPage.gif" title="Go to the table of contents." alt="Go to the table of contents." width="26" height="26" />](#contents)<span id="its-processing"></span>5 Processing of ITS information
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

*This section is normative.*

### [<img src="images/topOfPage.gif" title="Go to the table of contents." alt="Go to the table of contents." width="26" height="26" />](#contents)<span id="its-version-attribute"></span>5.1 Indicating the Version of ITS

The version of the ITS schema defined in this specification is "1.0". The version is indicated by the ITS <a href="#att.version.attribute.version" class="itsmarkup">version</a> attribute. This attribute is mandatory for the <a href="#rules" class="itsmarkup">rules</a> element, where it [MUST](#rfc-keywords) be in no namespace. If there is no <a href="#rules" class="itsmarkup">rules</a> element in an XML document, a prefixed ITS <a href="#att.version.attribute.version" class="itsmarkup">version</a> attribute (e.g. `its:version`) [MUST](#rfc-keywords) be provided at the root element of the document. If there is both a <a href="#att.version.attribute.version" class="itsmarkup">version</a> attribute at the root element and a <a href="#rules" class="itsmarkup">rules</a> element in a document, they [MUST NOT](#rfc-keywords) specify different versions.

Each XML document can have a different version. That is: if external rules are linked via an XLink <a href="#rules.attributes" class="itsmarkup">href</a> attribute on the <a href="#rules" class="itsmarkup">rules</a> element, they can specify a different version than the <a href="#rules" class="itsmarkup">rules</a> element.

### [<img src="images/topOfPage.gif" title="Go to the table of contents." alt="Go to the table of contents." width="26" height="26" />](#contents)<span id="datacategory-locations"></span>5.2 Locations of Data Categories

ITS data categories can appear in two places:

-   [Global rules](#selection-global): the selection is realized within a <a href="#rules" class="itsmarkup">rules</a> element. It contains [rule elements](#rules.content) for each data category. Each rule element has a <a href="#att.selector.attribute.selector" class="itsmarkup">selector</a> attribute and possibly other attributes. The <a href="#att.selector.attribute.selector" class="itsmarkup">selector</a> attribute contains an [AbsoluteLocationPath](http://www.w3.org/TR/xpath#NT-AbsoluteLocationPath) as described in [XPath 1.0](#xpath) or its successor.

-   [Locally in a document](#selection-local): the selection is realized using [ITS local attributes](#span.attributes), which are attached to an element node, or the <a href="#span" class="itsmarkup">span</a> or <a href="#ruby" class="itsmarkup">ruby</a> element. There is no additional <a href="#att.selector.attribute.selector" class="itsmarkup">selector</a> attribute. The default selection for each data category defines whether the selection covers attributes and child elements. See <a href="#datacategories-defaults-etc" class="section-ref">Section 6.1: Position, Defaults, Inheritance and Overriding of Data Categories</a>.

The two locations are described in detail below.

#### [<img src="images/topOfPage.gif" title="Go to the table of contents." alt="Go to the table of contents." width="26" height="26" />](#contents)<span id="selection-global"></span>5.2.1 Global, Rule-based Selection

Global, rule-based selection is implemented using the <a href="#rules" class="itsmarkup">rules</a> element. It contains zero or more [rule elements](#rules.content). Each [rule element](#rules.content) has a mandatory <a href="#att.selector.attribute.selector" class="itsmarkup">selector</a> attribute. This attribute and all other possible attributes on [rule elements](#rules.content) are in the empty namespace and used without a prefix.

If there is more than one <a href="#rules" class="itsmarkup">rules</a> element in an XML document, the rules from each section are to be processed at the same precedence level. The <a href="#rules" class="itsmarkup">rules</a> sections are to be read in document order, and the ITS rules with them processed sequentially. The versions of these <a href="#rules" class="itsmarkup">rules</a> elements [MUST NOT](#rfc-keywords) be different.

Depending on the data category and its usage, there are additional attributes for adding information to the selected nodes, or for pointing to existing information in the document. For example, the [Localization Note](#locNote-datacat) data category can be used for adding notes to selected nodes, or for pointing to existing notes in the document. For the former purpose, a <a href="#locNote" class="itsmarkup">locNote</a> element can be used. For the latter purpose, a <a href="#locNoteRule.attributes" class="itsmarkup">locNotePointer</a> attribute can be used.

Each data category allows you to add information to the selected nodes except for [language information](#language-information). Pointing to existing information is not possible for data categories that express *a closed set of values*, that is: [Translate](#trans-datacat), [Directionality](#directionality) and [Elements Within Text](#elements-within-text).

The functionalities of adding information and pointing to existing information are *mutually exclusive*. That is: markup for pointing and adding [MUST NOT](#rfc-keywords) appear in the same rule element.

Another difference between adding and pointing is the usage of XPath:

-   The value of the <a href="#att.selector.attribute.selector" class="itsmarkup">selector</a> attribute [MUST](#rfc-keywords) be an XPath expression which starts with "`/`". That is, it must be an [AbsoluteLocationPath](http://www.w3.org/TR/xpath#NT-AbsoluteLocationPath) as described in [XPath 1.0](#xpath) or its successor. This ensures that the selection is not relative to a specific location. The resulting nodes [MUST](#rfc-keywords) be either element or attribute nodes.

-   Attributes that point to existing information in the document, i.e. attributes whose name ends in `...Pointer`, [MUST](#rfc-keywords) use a RelativeLocationPath as described in [XPath 1.0](#xpath) or its successor. The XPath expression is evaluated relative to the nodes selected by the selector attribute. The following attributes point to existing information: <a href="#locNoteRule.attributes" class="itsmarkup">locNotePointer</a>, <a href="#locNoteRule.attributes" class="itsmarkup">locNoteRefPointer</a>, <a href="#termRule.attributes" class="itsmarkup">termInfoPointer</a>, <a href="#termRule.attributes" class="itsmarkup">termInfoRefPointer</a>, <a href="#rubyRule.attributes" class="itsmarkup">rubyPointer</a>, <a href="#rubyRule.attributes" class="itsmarkup">rtPointer</a>, <a href="#rubyRule.attributes" class="itsmarkup">rpPointer</a>, <a href="#rubyRule.attributes" class="itsmarkup">rbcPointer</a>, <a href="#rubyRule.attributes" class="itsmarkup">rtcPointer</a>, <a href="#rubyRule.attributes" class="itsmarkup">rbspanPointer</a>, <a href="#langRule.attributes" class="itsmarkup">langPointer</a>.

If namespaces [\[XML Names\]](#xmlns "Namespaces in
              XML (Second Edition)") are used in XPath expressions in the <a href="#att.selector.attribute.selector" class="itsmarkup">selector</a> attribute or the pointing attributes, the following rules [MUST](#rfc-keywords) be applied while processing XPath:

1.  For each prefix, there [MUST](#rfc-keywords) be an <a href="#rules.attributes" class="itsmarkup">xmlns</a> attribute at the same rule element which allows to resolve the namespace URI of the prefix.

2.  Element and attribute names without a prefix are interpreted as having no namespace.

3.  To avoid a conflict with rule 2., default namespaces [MUST NOT](#rfc-keywords) be used in the XPath expressions.

<span id="d3e1784">Example 13: XPath expressions with namespaces</span>

The `term` element from the TEI is in a namespace `http://www.tei-c.org/ns/1.0`.

    <its:rules
      xmlns:its="http://www.w3.org/2005/11/its" 
      xmlns:tei="http://www.tei-c.org/ns/1.0" version="1.0">
     <its:termRule selector="//tei:term" term="yes"/>
    </its:rules>

\[Source file: [EX-selection-global-1.xml](EX-selection-global-1.xml)\]

<span id="d3e1803">Example 14: XPath expressions without namespaces</span>

The `qterm` element from DocBook is in no namespace.

    <its:rules
      xmlns:its="http://www.w3.org/2005/11/its"  version="1.0">
     <its:termRule selector="//qterm" term="yes"/>
    </its:rules>

\[Source file: [EX-selection-global-2.xml](EX-selection-global-2.xml)\]

Global rules can appear in the XML document they will be applied to, or in a separate XML document. The precedence of their processing depends on these variations. See also <a href="#selection-precedence" class="section-ref">Section 5.4: Precedence between Selections</a>.

Markup for global, rule-based selection is defined as follows.

rules  
<table><tbody><tr class="odd"><td><span id="rules"></span>[1]</td><td><code>rules</code></td><td>::=</td><td><code> element its:rules { rules.content, rules.attributes }</code></td></tr><tr class="even"><td><span id="rules.content"></span>[2]</td><td><code>rules.content</code></td><td>::=</td><td><code>                                        (                                        translateRule                                        | locNoteRule                                        | termRule                                        | dirRule                                        | rubyRule                                        | langRule                                        | withinTextRule                                        )*</code></td></tr><tr class="odd"><td><span id="rules.attributes"></span>[3]</td><td><code>rules.attributes</code></td><td>::=</td><td><code>                                        attribute version { xsd:float },                                        attribute xlink:href { xsd:anyURI }?,                                        attribute xlink:type { "simple" }?</code></td></tr></tbody></table>

<span id="att.selector"></span>att.selector   
<table><tbody><tr class="odd"><td><span id="att.selector.attributes"></span>[4]</td><td><code>att.selector.attributes</code></td><td>::=</td><td><code>                                         att.selector.attribute.selector                                        </code></td></tr><tr class="even"><td><span id="att.selector.attribute.selector"></span>[5]</td><td><code>att.selector.attribute.selector</code></td><td>::=</td><td><code> attribute selector { string }</code></td></tr></tbody></table>

<span id="att.version"></span>att.version   
<table><tbody><tr class="odd"><td><span id="att.version.attributes"></span>[6]</td><td><code>att.version.attributes</code></td><td>::=</td><td><code>                                         att.version.attribute.version                                        </code></td></tr><tr class="even"><td><span id="att.version.attribute.version"></span>[7]</td><td><code>att.version.attribute.version</code></td><td>::=</td><td><code> attribute its:version { xsd:float }</code></td></tr></tbody></table>

#### [<img src="images/topOfPage.gif" title="Go to the table of contents." alt="Go to the table of contents." width="26" height="26" />](#contents)<span id="selection-local"></span>5.2.2 Local Selection in an XML Document

Local selection in XML documents is realized with [local ITS attributes](#att.local.with-ns.attributes), the <a href="#ruby" class="itsmarkup">ruby</a> element, or the <a href="#span" class="itsmarkup">span</a> element. <a href="#span" class="itsmarkup">span</a> serves just as a carrier for the local ITS attributes and a container for <a href="#ruby" class="itsmarkup">ruby</a>.

The content model of <a href="#span" class="itsmarkup">span</a> permits arbitrary nesting of ruby markup, since the <a href="#rb" class="itsmarkup">rb</a> and <a href="#rt" class="itsmarkup">rt</a> elements themselves can contain <a href="#span" class="itsmarkup">span</a>. An application of ruby [MUST](#rfc-keywords) not use such arbitrary nesting.

The data category determines what is being selected. The necessary data category specific defaults are described in <a href="#datacategories-defaults-etc" class="section-ref">Section 6.1: Position, Defaults, Inheritance and Overriding of Data Categories</a>.

<span id="EX-selection-local-1">Example 15: Defaults for various data categories</span>

By default the content of all elements in a document is translatable. The attribute `its:translate="no"` in the `head` element means that the content of this element, including child elements, should not be translated. The attribute `its:translate="yes"` in the `title` element means that the content of this element, should be translated (overriding the `its:translate="no"` in `head`). Attribute values of the selected elements or their children are not affected by local <a href="#att.local.no-ns.attribute.translate" class="itsmarkup">translate</a> attributes. By default they are not translatable.

The default directionality of a document is left-to-right. The `its:dir="rtl"` in the `quote` element means that the directionality of the content of this element, including child elements and attributes, is right-to-left. Note that `xml:lang` indicates only the language, not the directionality.

    <text
      xmlns:its="http://www.w3.org/2005/11/its" 
      its:version="1.0" xml:lang="en">
     <head
       its:translate="no">
      <author>Sven Corneliusson</author>
      <date>2006-09-26T17:34:04Z</date>
      <title
        its:translate="yes" role="header">Bidirectional Text</title>
     </head>
     <body>
      <par>In Arabic, the title <quote xml:lang="ar"
         its:dir="rtl">نشاط التدويل، W3C</quote>
         means <quote>Internationalization Activity, W3C</quote>.</par>
     </body>
    </text>

\[Source file: [EX-selection-local-1.xml](EX-selection-local-1.xml)\]

Markup for local selection is defined as follows. The attribute group [att.local.no-ns.attributes](#att.local.no-ns.attributes) contains ITS attributes in no namespace and is used with the ITS elements <a href="#span" class="itsmarkup">span</a>, <a href="#locNote" class="itsmarkup">locNote</a>, <a href="#ruby" class="itsmarkup">ruby</a>, <a href="#rb" class="itsmarkup">rb</a>, <a href="#rt" class="itsmarkup">rt</a>, <a href="#rbc" class="itsmarkup">rbc</a>, <a href="#rtc" class="itsmarkup">rtc</a> and <a href="#rp" class="itsmarkup">rp</a>. The attribute group [att.local.with-ns.attributes](#att.local.with-ns.attributes) contains namespace qualified ITS attributes and is used with elements from different namespaces.

<span id="att.local.no-ns"></span>att.local.no-ns   
<table><tbody><tr class="odd"><td><span id="att.local.no-ns.attributes"></span>[8]</td><td><code>att.local.no-ns.attributes</code></td><td>::=</td><td><code>                                                                                att.local.no-ns.attribute.translate,                                        att.local.no-ns.attribute.locNote,                                        att.local.no-ns.attribute.locNoteType,                                        att.local.no-ns.attribute.locNoteRef,                                        att.local.no-ns.attribute.termInfoRef,                                        att.local.no-ns.attribute.term,                                        att.local.no-ns.attribute.dir                                        </code></td></tr><tr class="even"><td><span id="att.local.no-ns.attribute.translate"></span>[9]</td><td><code>att.local.no-ns.attribute.translate</code></td><td>::=</td><td><code> attribute translate { "yes" | "no" }?</code></td></tr><tr class="odd"><td><span id="att.local.no-ns.attribute.locNote"></span>[10]</td><td><code>att.local.no-ns.attribute.locNote</code></td><td>::=</td><td><code> attribute locNote { string }?</code></td></tr><tr class="even"><td><span id="att.local.no-ns.attribute.locNoteType"></span>[11]</td><td><code>att.local.no-ns.attribute.locNoteType</code></td><td>::=</td><td><code>                                        attribute locNoteType { "alert" | "description" }?</code></td></tr><tr class="odd"><td><span id="att.local.no-ns.attribute.locNoteRef"></span>[12]</td><td><code>att.local.no-ns.attribute.locNoteRef</code></td><td>::=</td><td><code> attribute locNoteRef { xsd:anyURI }?</code></td></tr><tr class="even"><td><span id="att.local.no-ns.attribute.termInfoRef"></span>[13]</td><td><code>att.local.no-ns.attribute.termInfoRef</code></td><td>::=</td><td><code> attribute termInfoRef { xsd:anyURI }?</code></td></tr><tr class="odd"><td><span id="att.local.no-ns.attribute.term"></span>[14]</td><td><code>att.local.no-ns.attribute.term</code></td><td>::=</td><td><code> attribute term { "yes" | "no" }?</code></td></tr><tr class="even"><td><span id="att.local.no-ns.attribute.dir"></span>[15]</td><td><code>att.local.no-ns.attribute.dir</code></td><td>::=</td><td><code> attribute dir { "ltr" | "rtl" | "lro" | "rlo" }?</code></td></tr></tbody></table>

<span id="att.local.with-ns"></span>att.local.with-ns   
<table><tbody><tr class="odd"><td><span id="att.local.with-ns.attributes"></span>[16]</td><td><code>att.local.with-ns.attributes</code></td><td>::=</td><td><code>                                                                                att.local.with-ns.attribute.translate,                                        att.local.with-ns.attribute.locNote,                                        att.local.with-ns.attribute.locNoteType,                                        att.local.with-ns.attribute.locNoteRef,                                        att.local.with-ns.attribute.termInfoRef,                                        att.local.with-ns.attribute.term,                                        att.local.with-ns.attribute.dir                                        </code></td></tr><tr class="even"><td><span id="att.local.with-ns.attribute.translate"></span>[17]</td><td><code>att.local.with-ns.attribute.translate</code></td><td>::=</td><td><code> attribute its:translate { "yes" | "no" }?</code></td></tr><tr class="odd"><td><span id="att.local.with-ns.attribute.locNote"></span>[18]</td><td><code>att.local.with-ns.attribute.locNote</code></td><td>::=</td><td><code> attribute its:locNote { string }?</code></td></tr><tr class="even"><td><span id="att.local.with-ns.attribute.locNoteType"></span>[19]</td><td><code>att.local.with-ns.attribute.locNoteType</code></td><td>::=</td><td><code>                                        attribute its:locNoteType { "alert" | "description" }?</code></td></tr><tr class="odd"><td><span id="att.local.with-ns.attribute.locNoteRef"></span>[20]</td><td><code>att.local.with-ns.attribute.locNoteRef</code></td><td>::=</td><td><code> attribute its:locNoteRef { xsd:anyURI }?</code></td></tr><tr class="even"><td><span id="att.local.with-ns.attribute.termInfoRef"></span>[21]</td><td><code>att.local.with-ns.attribute.termInfoRef</code></td><td>::=</td><td><code>                                        attribute its:termInfoRef { xsd:anyURI }?</code></td></tr><tr class="odd"><td><span id="att.local.with-ns.attribute.term"></span>[22]</td><td><code>att.local.with-ns.attribute.term</code></td><td>::=</td><td><code> attribute its:term { "yes" | "no" }?</code></td></tr><tr class="even"><td><span id="att.local.with-ns.attribute.dir"></span>[23]</td><td><code>att.local.with-ns.attribute.dir</code></td><td>::=</td><td><code>                                        attribute its:dir { "ltr" | "rtl" | "lro" | "rlo" }?</code></td></tr></tbody></table>

span  
<table><tbody><tr class="odd"><td><span id="span"></span>[24]</td><td><code>span</code></td><td>::=</td><td><code> element its:span { span.content, span.attributes }</code></td></tr><tr class="even"><td><span id="span.content"></span>[25]</td><td><code>span.content</code></td><td>::=</td><td><code> ( text | ruby | span )*</code></td></tr><tr class="odd"><td><span id="span.attributes"></span>[26]</td><td><code>span.attributes</code></td><td>::=</td><td><code>                                         att.local.no-ns.attributes                                        </code></td></tr></tbody></table>

### [<img src="images/topOfPage.gif" title="Go to the table of contents." alt="Go to the table of contents." width="26" height="26" />](#contents)<span id="link-external-rules"></span>5.3 Link to External Rules

One way to associate a document with a set of external ITS rules is to use the optional XLink [\[XLink 1.0\]](#xlink1 "XML Linking Language
              1.0") <a href="#rules.attributes" class="itsmarkup">href</a> attribute in the <a href="#rules" class="itsmarkup">rules</a> element, accompanied by the XLink <a href="#rules.attributes" class="itsmarkup">type</a> attribute with the value "simple". The referenced document must be a valid XML document containing at most one <a href="#rules" class="itsmarkup">rules</a> element. That <a href="#rules" class="itsmarkup">rules</a> element can be the root element or anywhere within the document tree (for example, the document could be an XML Schema).

The rules contained in the referenced document [MUST](#rfc-keywords) be processed as if they were at the top of the <a href="#rules" class="itsmarkup">rules</a> element with the XLink <a href="#rules.attributes" class="itsmarkup">href</a> attribute.

<span id="EX-link-external-rules-1">Example 16: External file EX-link-external-rules-1.xml with global rules:</span>

The example demonstrates how metadata can be added to ITS rules.

    <myFormatInfo
      xmlns:its="http://www.w3.org/2005/11/its" >
     <desc>ITS rules used by the Open University</desc>
     <hostVoc>http://www.tei-c.org/ns/1.0</hostVoc>
     <rulesId>98ECED99DF63D511B1250008C784EFB1</rulesId>
     <rulesVersion>v 1.81 2006/03/28 07:43:21</rulesVersion> ...
     <its:rules version="1.0">
      <its:translateRule selector="//header" translate="no"/>
      <its:translateRule selector="//term" translate="no"/>
      <its:termRule selector="//term" term="yes"/>
      <its:withinTextRule withinText="yes" selector="//term | //b"/>
     </its:rules>
    </myFormatInfo>

\[Source file: [EX-link-external-rules-1.xml](EX-link-external-rules-1.xml)\]

<span id="d3e2256">Example 17: Document with a link to EX-link-external-rules-1.xml</span>

    <myDoc
      xmlns:its="http://www.w3.org/2005/11/its" 
      xmlns:xlink="http://www.w3.org/1999/xlink" >
     <header>
      <its:rules version="1.0" xlink:href="EX-link-external-rules-1.xml" xlink:type="simple">
       <its:translateRule selector="//term" translate="yes"/>
      </its:rules>
      <author>Theo Brumble</author>
      <lastUpdate>Apr-01-2006</lastUpdate>
     </header>
     <body>
      <p>A <term>Palouse horse</term> has a spotted coat.</p>
     </body>
    </myDoc>

\[Source file: [EX-link-external-rules-2.xml](EX-link-external-rules-2.xml)\]

The result of processing the two documents above is the same as processing the following document.

<span id="d3e2268">Example 18: Document with identical rules as in the case of included rules</span>

    <myDoc
      xmlns:its="http://www.w3.org/2005/11/its" >
     <header>
      <its:rules version="1.0">
       <its:translateRule selector="//header" translate="no"/>
       <its:translateRule selector="//term" translate="no"/>
       <its:termRule selector="//term" term="yes"/>
       <its:withinTextRule withinText="yes" selector="//term | //b"/>
       <its:translateRule selector="//term" translate="yes"/>
      </its:rules>
      <author>Theo Brumble</author>
      <lastUpdate>Apr-01-2006</lastUpdate>
     </header>
     <body>
      <p>A <term>Palouse horse</term> has a spotted coat.</p>
     </body>
    </myDoc>

\[Source file: [EX-link-external-rules-3.xml](EX-link-external-rules-3.xml)\]

Applications processing global ITS markup [MUST](#rfc-keywords) recognize the XLink <a href="#rules.attributes" class="itsmarkup">href</a> attribute in the <a href="#rules" class="itsmarkup">rules</a> element; they [MUST](#rfc-keywords) load the corresponding referenced document and process its rules element before processing the content of the <a href="#rules" class="itsmarkup">rules</a> element where the original XLink <a href="#rules.attributes" class="itsmarkup">href</a> attribute is.

External rules may also have links to other external rules. The linking mechanism is recursive, the deepest rules being overridden by the top-most rules, if any.

### [<img src="images/topOfPage.gif" title="Go to the table of contents." alt="Go to the table of contents." width="26" height="26" />](#contents)<span id="selection-precedence"></span>5.4 Precedence between Selections

The following precedence order is defined for selections of ITS information in various positions (the first item in the list has the highest precedence):

1.  Implicit local selection in documents ([ITS local attributes](#span.attributes) on a specific element)

2.  Global selections in documents (using a <a href="#rules" class="itsmarkup">rules</a> element)

    Inside each <a href="#rules" class="itsmarkup">rules</a> element the precedence order is:

    1.  Any rules inside the rules element

    2.  Any rules linked via the XLink <a href="#rules.attributes" class="itsmarkup">href</a> attribute

    **Note:**

    If identical selections are defined in different rules elements within one document, the selection defined by the last takes precedence.

    **Note:**

    ITS doesn't define precedence related to rules defined or linked based on non-ITS mechanisms (such as processing instructions for linking rules).

3.  Selections via defaults for data categories, see <a href="#datacategories-defaults-etc" class="section-ref">Section 6.1: Position, Defaults, Inheritance and Overriding of Data Categories</a>

In case of conflicts between global selections via multiple [rule](#selection-global) elements, the last selector has higher precedence.

**Note:**

The precedence order fulfills the same purpose as the built-in template rules of [\[XSLT 1.0\]](#xslt10 "XSL Transformations (XSLT)
                Version 1.0").

<span id="d3e2355">Example 19: Conflicts between selections of ITS information which are resolved using the precedence order</span>

The two elements `title` and `author` of this document should be treated as separate content when inside a `prolog` element, but as part of the content of their parent element otherwise. In order to make this distinction two <a href="#withinTextRule" class="itsmarkup">withinTextRule</a> elements are used:

The first rule specifies that `title` and `author` in general should be treated as an element within text. This overrides the default.

The second rule indicates that when `title` or `author` are found in a `prolog` element their content should be treated separately. This is normally the default, but the rule is needed to override the first rule.

    <text
      xmlns:its="http://www.w3.org/2005/11/its" >
     <prolog>
      <its:rules version="1.0">
       <its:withinTextRule withinText="yes" selector="//title|//author"/>
       <its:withinTextRule withinText="no" selector="//prolog/title|//prolog/author"/>
      </its:rules>
      <title>Designing User Interfaces</title>
      <author>Janice Prakash</author>
      <keywords>user interface, ui, software interface</keywords>
     </prolog>
     <body>
      <p>The book <title>Of Mice and Screens</title> by <author>Aldus 
         Brandywine</author> is one of the best introductions to the vast 
        topic of designing user interfaces.</p>
     </body>
    </text>

\[Source file: [EX-selection-precedence-1.xml](EX-selection-precedence-1.xml)\]

### [<img src="images/topOfPage.gif" title="Go to the table of contents." alt="Go to the table of contents." width="26" height="26" />](#contents)<span id="associating-its-with-existing-markup"></span>5.5 Associating ITS Data Categories with Existing Markup

Some markup schemes provide markup which can be used to express ITS data categories. ITS data categories can be associated with such existing markup, using the global selection mechanism described in <a href="#selection-global" class="section-ref">Section 5.2.1: Global, Rule-based Selection</a>.

Associating existing markup with ITS data categories can be done only if the processing expectations of the host markup are the same as, or greater than, those of ITS.

<span id="EX-associating-its-with-existing-markup-1">Example 20: Association of the ITS data categories Translate and Terminology with DITA 1.0 markup</span>

    <topic
      xmlns:its="http://www.w3.org/2005/11/its"  id="myTopic">
     <title>The ITS Topic</title>
     <prolog>
      <its:rules version="1.0">
       <its:translateRule selector="//*[@translate='no']" translate="no"/>
       <its:translateRule selector="//*[@translate='yes']" translate="yes"/>
       <its:termRule selector="//term | //dt" term="yes"/>
      </its:rules>
     </prolog>
     <body>
      <dl>
       <dlentry id="tDataCat">
        <dt>Data category</dt>
        <dd>ITS defines <term>data category</term> as an abstract concept for
        a particular type of information related to internationalization and 
        localization of XML schemas and documents.</dd>
       </dlentry>
      </dl>
      <p>For the implementation of ITS, apply the rules in the order:</p>
      <ul>
       <li>Defaults</li>
       <li>Rules in external files</li>
       <li>Rules in the document</li>
       <li>Local attributes</li>
      </ul>
      <p>
       <ph translate="no" xml:lang="fr">Et voilà !</ph>.</p>
     </body>
    </topic>

\[Source file: [EX-associating-its-with-existing-markup-1.xml](EX-associating-its-with-existing-markup-1.xml)\]

Global rules can be associated with a given XML document using different means:

-   By using an <a href="#rules" class="itsmarkup">rules</a> element in the document itself:

    -   with the rules directly inside the document, as shown in [Example 20](#EX-associating-its-with-existing-markup-1)

    -   with a link to an external rules file using the XLink <a href="#rules.attributes" class="itsmarkup">href</a> attribute, as shown in [Example 16](#EX-link-external-rules-1)

-   By associating the rules and the document through a tool-specific mechanism. For example, for a command-line tool: providing the paths of both the XML document to process and its corresponding external rules file.

[<img src="images/topOfPage.gif" title="Go to the table of contents." alt="Go to the table of contents." width="26" height="26" />](#contents)<span id="datacategory-description"></span>6 Description of Data Categories
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

*This section is normative.*

### [<img src="images/topOfPage.gif" title="Go to the table of contents." alt="Go to the table of contents." width="26" height="26" />](#contents)<span id="datacategories-defaults-etc"></span>6.1 Position, Defaults, Inheritance and Overriding of Data Categories

The following table summarizes for each data category which selection, default value, and inheritance and overriding behavior applies.

-   *Default values* apply if both local or global selection are absent. The default value for the [Translate](#trans-datacat) data category for example mandates that elements are translatable, and attributes are not translatable if there is no <a href="#translateRule" class="itsmarkup">translateRule</a> element and no <a href="#att.local.no-ns.attribute.translate" class="itsmarkup">translate</a> attribute available.

-   *Inheritance* describes whether ITS information is applicable to child elements of nodes and attributes related to these nodes or their child notes. The inheritance for the [Translate](#trans-datacat) data category for example mandates that all child elements of nodes are translatable whereas all attributes related to these the nodes or their child notes are not translatable.

-   *Overriding* describes whether ITS information can be overridden or not. Overriding is only applicable for data categories with inheritance. Overriding thus is not applicable for the [Terminology](#terminology) and the [Ruby](#ruby-annotation) data category.

<table><thead><tr class="header"><th>Data category</th><th>Local Usage</th><th>Global, rule-based selection</th><th>Global adding of information</th><th>Global pointing to existing information</th><th>Default Values</th><th>Inheritance</th><th>Overriding</th></tr></thead><tbody><tr class="odd"><td><a href="#trans-datacat">Translate</a></td><td>Yes</td><td>Yes</td><td>Yes</td><td>No</td><td><code>translate="yes"</code> for elements, and <code>translate="no"</code> for attributes</td><td>Textual content of element, <em>including</em> content of child elements, but <em>excluding</em> attributes</td><td>Yes</td></tr><tr class="even"><td><a href="#locNote-datacat">Localization Note</a></td><td>Yes</td><td>Yes</td><td>Yes</td><td>Yes</td><td>None</td><td>Textual content of element, <em>including</em> content of child elements, but <em>excluding</em> attributes</td><td>Yes</td></tr><tr class="odd"><td><a href="#terminology">Terminology</a></td><td>Yes</td><td>Yes</td><td>Yes</td><td>Yes</td><td><code>term="no"</code></td><td>None</td><td>Not applicable</td></tr><tr class="even"><td><a href="#directionality">Directionality</a></td><td>Yes</td><td>Yes</td><td>Yes</td><td>No</td><td><code>dir="ltr"</code></td><td>Textual content of element, <em>including</em> attributes and child elements</td><td>Yes</td></tr><tr class="odd"><td><a href="#ruby-annotation">Ruby</a></td><td>Yes</td><td>Yes</td><td>Yes</td><td>Yes</td><td>None</td><td>None</td><td>Not applicable</td></tr><tr class="even"><td><a href="#language-information">Language Information</a></td><td>No</td><td>Yes</td><td>No</td><td>Yes</td><td>None</td><td>Textual content of element, <em>including</em> attributes and child elements</td><td>Yes</td></tr><tr class="odd"><td><a href="#elements-within-text">Elements Within Text</a></td><td>No</td><td>Yes</td><td>Yes</td><td>No</td><td><code>withinText="no"</code></td><td>None</td><td>Not applicable</td></tr></tbody></table>

<span id="d3e2689">Example 21: Defaults, inheritance and overriding behavior of data categories</span>

In this example, the content of all the `data` elements is translatable because the default for the [Translate](#trans-datacat) data category in elements is "yes". The content of `revision` and <a href="#locNote" class="itsmarkup">locNote</a> is not translatable because the default is overridden by the local `its:translate="no"` attribute in the `prolog` element, and that value is inherited by all the children of `prolog`.

The localization note for the two first `data` elements is the text defined globally with the <a href="#locNoteRule" class="itsmarkup">locNoteRule</a> element. And this note is overridden for the last `data` element by the local `its:locNote` attribute.

    <Res
      xmlns:its="http://www.w3.org/2005/11/its" 
      its:version="1.0">
     <prolog
       its:translate="no">
      <revision>Sep-07-2006</revision>
      <its:rules version="1.0">
       <its:translateRule selector="//msg/notes" translate="no"/>
       <its:locNoteRule locNoteType="description" selector="//msg/data">
        <its:locNote>The variable {0} is the name of the host.</its:locNote>
       </its:locNoteRule>
      </its:rules>
     </prolog>
     <body>
      <msg id="HostNotFound">
       <data>Host {0} cannot be found.</data>
      </msg>
      <msg id="HostDisconnected">
       <data>The connection with {0} has been lost.</data>
      </msg>
      <msg id="FileNotFound">
       <data
         its:locNote="{0} is a filename">{0} not found.</data>
      </msg>
     </body>
    </Res>

\[Source file: [EX-datacat-behavior-1.xml](EX-datacat-behavior-1.xml)\]

**Note:**

The data categories differ with respect to defaults. This is due to existing standards and practices. It is common practice for example that information about translation refers only to textual content of an element. Thus, the default selection for the [Translate](#trans-datacat) data category is the textual content.

### [<img src="images/topOfPage.gif" title="Go to the table of contents." alt="Go to the table of contents." width="26" height="26" />](#contents)<span id="trans-datacat"></span>6.2 Translate

#### [<img src="images/topOfPage.gif" title="Go to the table of contents." alt="Go to the table of contents." width="26" height="26" />](#contents)<span id="translatability-definition"></span>6.2.1 Definition

The [Translate](#trans-datacat) data category expresses information about whether the content of an element or attribute should be translated or not. The values of this data category are "yes" (translatable) or "no" (not translatable).

#### [<img src="images/topOfPage.gif" title="Go to the table of contents." alt="Go to the table of contents." width="26" height="26" />](#contents)<span id="translatability-implementation"></span>6.2.2 Implementation

The [Translate](#trans-datacat) data category can be expressed with global rules, or locally on an individual element. The information applies to the textual content of the element, *including* child elements, but *excluding* attributes. The default is that elements are translatable and attributes are not.

GLOBAL: The <a href="#translateRule" class="itsmarkup">translateRule</a> element contains the following:

-   A required <a href="#att.selector.attribute.selector" class="itsmarkup">selector</a> attribute. It contains an XPath expression which selects the nodes to which this rule applies.

-   A required <a href="#translateRule.attributes" class="itsmarkup">translate</a> attribute with the value "yes" or "no".

<span id="EX-translate-selector-1">Example 22: The Translate data category expressed globally</span>

The <a href="#translateRule" class="itsmarkup">translateRule</a> element specifies that the elements `code` must not be translated.

    <its:rules
      xmlns:its="http://www.w3.org/2005/11/its"  version="1.0">
     <its:translateRule translate="no" selector="//code"/>
    </its:rules>

\[Source file: [EX-translate-selector-1.xml](EX-translate-selector-1.xml)\]

LOCAL: The following local markup is available for the [Translate](#trans-datacat) data category:

-   A <a href="#att.local.no-ns.attribute.translate" class="itsmarkup">translate</a> attribute with the value "yes" or "no".

**Note:**

It is not possible to override the [Translate](#trans-datacat) data category settings of attributes using local markup. This limitation is consistent with the advised practice of not using translatable attributes.

<span id="EX-translate-selector-2">Example 23: The Translate data category expressed locally</span>

The local `its:translate="no"` specifies that the content of `panelmsg` must not be translated.

    <messages
      xmlns:its="http://www.w3.org/2005/11/its" 
      its:version="1.0">
     <msg num="123">Click Resume Button on Status Display or  
        <panelmsg
        its:translate="no">CONTINUE</panelmsg> Button
        on printer panel</msg>
    </messages>

\[Source file: [EX-translate-selector-2.xml](EX-translate-selector-2.xml)\]

#### [<img src="images/topOfPage.gif" title="Go to the table of contents." alt="Go to the table of contents." width="26" height="26" />](#contents)<span id="translatability-markup"></span>6.2.3 Markup Declarations for Translate

translateRule  
<table><tbody><tr class="odd"><td><span id="translateRule"></span>[27]</td><td><code>translateRule</code></td><td>::=</td><td><code>                                        element its:translateRule                                        {                                        translateRule.content,                                        translateRule.attributes                                        }</code></td></tr><tr class="even"><td><span id="translateRule.content"></span>[28]</td><td><code>translateRule.content</code></td><td>::=</td><td><code> empty</code></td></tr><tr class="odd"><td><span id="translateRule.attributes"></span>[29]</td><td><code>translateRule.attributes</code></td><td>::=</td><td><code>                                                                                att.selector.attributes,                                        attribute translate { "yes" | "no" }</code></td></tr></tbody></table>

<span id="att.translate"></span>att.translate   
<table><tbody><tr class="odd"><td><span id="att.translate.attributes"></span>[30]</td><td><code>att.translate.attributes</code></td><td>::=</td><td><code>                                         att.translate.attribute.translate                                        </code></td></tr><tr class="even"><td><span id="att.translate.attribute.translate"></span>[31]</td><td><code>att.translate.attribute.translate</code></td><td>::=</td><td><code> attribute its:translate { "yes" | "no" }?</code></td></tr></tbody></table>

### [<img src="images/topOfPage.gif" title="Go to the table of contents." alt="Go to the table of contents." width="26" height="26" />](#contents)<span id="locNote-datacat"></span>6.3 Localization Note

#### [<img src="images/topOfPage.gif" title="Go to the table of contents." alt="Go to the table of contents." width="26" height="26" />](#contents)<span id="locNote-definition"></span>6.3.1 Definition

The [Localization Note](#locNote-datacat) data category is used to communicate notes to localizers about a particular item of content.

This data category can be used for several purposes, including, but not limited to:

-   Tell the translator how to translate parts of the content

-   Expand on the meaning or contextual usage of a specific element, such as what a variable refers to or how a string will be used on the user interface

-   Clarify ambiguity and show relationships between items sufficiently to allow correct translation (e.g. in many languages it is impossible to translate the word "<span class="quote">enabled</span>" in isolation without knowing the gender, number and case of the thing it refers to.)

-   Indicate why a piece of text is emphasized (important, sarcastic, etc.)

Two types of informative notes are needed:

-   An alert contains information that the translator must read before translating a piece of text. Example: an instruction to the translator to leave parts of the text in the source language.

-   A description provides useful background information that the translator will refer to only if they wish. Example: a clarification of ambiguity in the source text.

Editing tools may offer an easy way to create this type of information. Translation tools can be made to recognize the difference between these two types of localization notes, and present the information to translators in different ways.

#### [<img src="images/topOfPage.gif" title="Go to the table of contents." alt="Go to the table of contents." width="26" height="26" />](#contents)<span id="locNote-implementation"></span>6.3.2 Implementation

The [Localization Note](#locNote-datacat) data category can be expressed with global rules, or locally on an individual element. The information applies to the textual content of the element, *including* child elements, but *excluding* attributes.

GLOBAL: The <a href="#locNoteRule" class="itsmarkup">locNoteRule</a> element contains the following:

-   A required <a href="#att.selector.attribute.selector" class="itsmarkup">selector</a> attribute. It contains an XPath expression which selects the nodes to which this rule applies.

-   A required <a href="#locNoteRule.attributes" class="itsmarkup">locNoteType</a> attribute with the value "description" or "alert".

-   Exactly one of the following:

    -   A <a href="#locNote" class="itsmarkup">locNote</a> element that contains the note itself and allows for [local ITS markup](#selection-local).

    -   A <a href="#locNoteRule.attributes" class="itsmarkup">locNotePointer</a> attribute that contains a relative XPath expression pointing to a node that holds the localization note.

    -   A <a href="#att.local.no-ns.attribute.locNoteRef" class="itsmarkup">locNoteRef</a> attribute that contains a URI referring to the location of the localization note.

    -   A <a href="#locNoteRule.attributes" class="itsmarkup">locNoteRefPointer</a> attribute that contains a relative XPath expression pointing to a node that holds the URI referring to the location of the localization note.

<span id="EX-locNote-element-1">Example 24: The locNote element</span>

The <a href="#locNoteRule" class="itsmarkup">locNoteRule</a> element associates the content of the <a href="#locNote" class="itsmarkup">locNote</a> element with the message with the identifier 'DisableInfo' and flags it as important. This would also work if the rule was in an external file, allowing to provide notes without modifying the source document.

    <myRes
      xmlns:its="http://www.w3.org/2005/11/its" >
     <head>
      <its:rules version="1.0"
        its:translate="no">
       <its:locNoteRule locNoteType="alert" selector="//msg[@id='DisableInfo']">
        <its:locNote>The variable {0} has three possible values: 'printer', 
            'stacker' and 'stapler options'.</its:locNote>
       </its:locNoteRule>
      </its:rules>
     </head>
     <body>
      <msg id="DisableInfo">The {0} has been disabled.</msg>
     </body>
    </myRes>

\[Source file: [EX-locNote-element-1.xml](EX-locNote-element-1.xml)\]

<span id="EX-locNotePointer-attribute-1">Example 25: The locNotePointer attribute</span>

The <a href="#locNoteRule.attributes" class="itsmarkup">locNotePointer</a> attribute is a relative XPath expression pointing to a node that holds the note.

    <Res
      xmlns:its="http://www.w3.org/2005/11/its" >
     <prolog>
      <its:rules version="1.0">
       <its:translateRule selector="//msg/notes" translate="no"/>
       <its:locNoteRule locNoteType="description" selector="//msg/data" locNotePointer="../notes"/>
      </its:rules>
     </prolog>
     <body>
      <msg id="FileNotFound">
       <notes>Indicates that the resource file {0} could not be loaded.</notes>
       <data>Cannot find the file {0}.</data>
      </msg>
      <msg id="DivByZero">
       <notes>A division by 0 was going to be computed.</notes>
       <data>Invalid parameter.</data>
      </msg>
     </body>
    </Res>

\[Source file: [EX-locNotePointer-attribute-1.xml](EX-locNotePointer-attribute-1.xml)\]

<span id="EX-locNoteRef-attribute-1">Example 26: The locNoteRef attribute</span>

The <a href="#locNoteRule" class="itsmarkup">locNoteRule</a> element specifies that the message with the identifier 'NotFound' has a corresponding explanation note in an external file. The URI for the exact location of the note is stored in the <a href="#locNoteRule.attributes" class="itsmarkup">locNoteRef</a> attribute.

    <myRes
      xmlns:its="http://www.w3.org/2005/11/its" >
     <head>
      <its:rules version="1.0">
       <its:locNoteRule locNoteType="description" selector="//msg[@id='NotFound']" locNoteRef="ErrorsInfo.html#NotFound"/>
      </its:rules>
     </head>
     <body>
      <msg id="NotFound">Cannot find {0} on {1}.</msg>
     </body>
    </myRes>

\[Source file: [EX-locNoteRef-attribute-1.xml](EX-locNoteRef-attribute-1.xml)\]

<span id="d3e3088">Example 27: The locNoteRefPointer attribute</span>

The <a href="#locNoteRule.attributes" class="itsmarkup">locNoteRefPointer</a> attribute contains a relative XPath expression pointing to a node that holds the URI referring to the location of the note.

    <dataFile
      xmlns:its="http://www.w3.org/2005/11/its" >
     <prolog>
      <its:rules version="1.0">
       <its:locNoteRule locNoteType="description" selector="//data" locNoteRefPointer="../@noteFile"/>
      </its:rules>
     </prolog>
     <body>
      <string id="FileNotFound" noteFile="Comments.html#FileNotFound">
       <data>Cannot find the file {0}.</data>
      </string>
      <string id="DivByZero" noteFile="Comments.html#DivByZero">
       <data>Invalid parameter.</data>
      </string>
     </body>
    </dataFile>

\[Source file: [EX-locNoteRefPointer-attribute-1.xml](EX-locNoteRefPointer-attribute-1.xml)\]

LOCAL: The following local markup is available for the [Localization Note](#locNote-datacat) data category:

-   One of the following:

    -   A <a href="#att.local.no-ns.attribute.locNote" class="itsmarkup">locNote</a> attribute that contains the note itself.

    -   A <a href="#att.local.no-ns.attribute.locNoteRef" class="itsmarkup">locNoteRef</a> attribute that contains a URI referring to the location of the localization note.

-   An optional <a href="#att.local.no-ns.attribute.locNoteType" class="itsmarkup">locNoteType</a> attribute with the value "description" or "alert". If the <a href="#att.local.no-ns.attribute.locNoteType" class="itsmarkup">locNoteType</a> attribute is not present, the type of localization note will be assumed to be "description".

<span id="d3e3146">Example 28: The Localization Note data category expressed locally</span>

    <msgList
      xmlns:its="http://www.w3.org/2005/11/its"  xml:space="preserve"
      its:version="1.0">
     <data name="LISTFILTERS_VARIANT"
       its:locNote="Keep the leading space!"
       its:locNoteType="alert">
      <value> Variant {0} = {1} ({2})</value>
     </data>
     <data
       its:locNote="%1\$s is the original text's date in the format YYYY-MM-DD HH:MM always in GMT">
      <value>Translated from English content dated <span id="version-info">%1\$s</span> GMT.</value>
     </data>
    </msgList>

\[Source file: [EX-locNote-selector-2.xml](EX-locNote-selector-2.xml)\]

**Note:**

It is generally recommended to avoid using attributes to store text, however, in this specific case, the need to provide the notes without interfering with the structure of the host document is outweighing the drawbacks of using an attribute.

#### [<img src="images/topOfPage.gif" title="Go to the table of contents." alt="Go to the table of contents." width="26" height="26" />](#contents)<span id="locNote-markup"></span>6.3.3 Markup Declarations for Localization Note

locNoteRule  
<table><tbody><tr class="odd"><td><span id="locNoteRule"></span>[32]</td><td><code>locNoteRule</code></td><td>::=</td><td><code>                                        element its:locNoteRule { locNoteRule.content, locNoteRule.attributes }</code></td></tr><tr class="even"><td><span id="locNoteRule.content"></span>[33]</td><td><code>locNoteRule.content</code></td><td>::=</td><td><code>                                         locNote?</code></td></tr><tr class="odd"><td><span id="locNoteRule.attributes"></span>[34]</td><td><code>locNoteRule.attributes</code></td><td>::=</td><td><code>                                                                                att.selector.attributes,                                        attribute locNotePointer { string }?,                                        attribute locNoteType { "alert" | "description" },                                        attribute locNoteRef { xsd:anyURI }?,                                        attribute locNoteRefPointer { string }?</code></td></tr></tbody></table>

locNote  
<table><tbody><tr class="odd"><td><span id="locNote"></span>[35]</td><td><code>locNote</code></td><td>::=</td><td><code> element its:locNote { locNote.content, locNote.attributes }</code></td></tr><tr class="even"><td><span id="locNote.content"></span>[36]</td><td><code>locNote.content</code></td><td>::=</td><td><code> ( text | ruby | span )*</code></td></tr><tr class="odd"><td><span id="locNote.attributes"></span>[37]</td><td><code>locNote.attributes</code></td><td>::=</td><td><code>                                         att.local.no-ns.attributes                                        </code></td></tr></tbody></table>

<span id="att.locNote"></span>att.locNote   
<table><tbody><tr class="odd"><td><span id="att.locNote.attributes"></span>[38]</td><td><code>att.locNote.attributes</code></td><td>::=</td><td><code>                                                                                att.locNote.attribute.locNote,                                        att.locNote.attribute.locNoteType,                                        att.locNote.attribute.locNoteRef                                        </code></td></tr><tr class="even"><td><span id="att.locNote.attribute.locNote"></span>[39]</td><td><code>att.locNote.attribute.locNote</code></td><td>::=</td><td><code> attribute its:locNote { string }?</code></td></tr><tr class="odd"><td><span id="att.locNote.attribute.locNoteType"></span>[40]</td><td><code>att.locNote.attribute.locNoteType</code></td><td>::=</td><td><code>                                        attribute its:locNoteType { "alert" | "description" }?</code></td></tr><tr class="even"><td><span id="att.locNote.attribute.locNoteRef"></span>[41]</td><td><code>att.locNote.attribute.locNoteRef</code></td><td>::=</td><td><code> attribute its:locNoteRef { xsd:anyURI }?</code></td></tr></tbody></table>

### [<img src="images/topOfPage.gif" title="Go to the table of contents." alt="Go to the table of contents." width="26" height="26" />](#contents)<span id="terminology"></span>6.4 Terminology

#### [<img src="images/topOfPage.gif" title="Go to the table of contents." alt="Go to the table of contents." width="26" height="26" />](#contents)<span id="terminology-definition"></span>6.4.1 Definition

The [Terminology](#terminology) data category is used to mark terms and optionally associate them with information, such as definitions. This helps to increase consistency across different parts of the documentation. It is also helpful for translation.

**Note:**

Existing terminology standards such as [\[ISO 12200\]](#iso12200 "Machine-readable terminology interchange format (MARTIF) -- Negotiated interchange") and its derived formats are about coding terminology data, while the ITS [Terminology](#terminology) data category simply allows to identify terms in XML documents and optionally to point to corresponding information.

#### [<img src="images/topOfPage.gif" title="Go to the table of contents." alt="Go to the table of contents." width="26" height="26" />](#contents)<span id="terminology-implementation"></span>6.4.2 Implementation

The [Terminology](#terminology) data category can be expressed with global rules, or locally on an individual element. There is no inheritance. The default is that neither elements nor attributes are terms.

GLOBAL: The <a href="#termRule" class="itsmarkup">termRule</a> element contains the following:

-   A required <a href="#att.selector.attribute.selector" class="itsmarkup">selector</a> attribute. It contains an XPath expression which selects the nodes to which this rule applies.

-   A required <a href="#termRule.attributes" class="itsmarkup">term</a> attribute with the value "yes" or "no".

-   Exactly one of the following:

    -   A <a href="#termRule.attributes" class="itsmarkup">termInfoPointer</a> attribute that contains a relative XPath expression pointing to a node that holds the terminology information.

    -   A <a href="#att.local.no-ns.attribute.termInfoRef" class="itsmarkup">termInfoRef</a> attribute that contains a URI referring to the resource providing information about the term.

    -   A <a href="#termRule.attributes" class="itsmarkup">termInfoRefPointer</a> attribute that contains a relative XPath expression pointing to a node that holds the URI referring to the location of the terminology information.

<span id="d3e3341">Example 29: Usage of the termInfoPointer attribute</span>

    <text
      xmlns:its="http://www.w3.org/2005/11/its" >
     <its:rules version="1.0">
      <its:termRule selector="//term" term="yes" termInfoPointer="id(@def)"/>
     </its:rules>
     <p>We may define <term def="TDPV">discoursal point of view</term>
     as <gloss xml:id="TDPV">the relationship, expressed through discourse
      structure, between the implied author or some other addresser,
      and the fiction.</gloss>
     </p>
    </text>

\[Source file: [EX-terms-selector-1.xml](EX-terms-selector-1.xml)\]

<span id="d3e3354">Example 30: Usage of the termInfoRef attribute</span>

    <text
      xmlns:its="http://www.w3.org/2005/11/its" >
     <its:rules version="1.0">
      <its:termRule selector="//term[1]" term="yes" termInfoRef="#TDPV"/>
     </its:rules>
     <p>We may define <term>discoursal point of view</term>
     as <gloss xml:id="TDPV">the relationship, expressed through discourse
      structure, between the implied author or some other addresser,
      and the fiction.</gloss>
     </p>
    </text>

\[Source file: [EX-terms-selector-2.xml](EX-terms-selector-2.xml)\]

<span id="d3e3367">Example 31: Usage of the termInfoRefPointer attribute</span>

    <text
      xmlns:its="http://www.w3.org/2005/11/its" >
     <its:rules version="1.0">
      <its:termRule selector="//term" term="yes" termInfoRefPointer="@target"/>
     </its:rules>
     <p>We may define <term target="#TDPV">discoursal point of view</term>
     as <gloss xml:id="TDPV">the relationship, expressed through discourse
      structure, between the implied author or some other addresser,
      and the fiction.</gloss>
     </p>
    </text>

\[Source file: [EX-terms-selector-3.xml](EX-terms-selector-3.xml)\]

LOCAL: The following local markup is available for the [Terminology](#terminology) data category:

-   A <a href="#att.local.no-ns.attribute.term" class="itsmarkup">term</a> attribute with the value "yes" or "no".

-   An optional <a href="#att.local.no-ns.attribute.termInfoRef" class="itsmarkup">termInfoRef</a> attribute that contains a URI referring to the resource providing information about the term.

<span id="d3e3404">Example 32: The Terminology data category expressed locally</span>

    <book
      xmlns:its="http://www.w3.org/2005/11/its" 
      its:version="1.0">
     <head>...</head>
     <body> ...  <p>And he said: you need a
       new <quote
         its:term="yes">motherboard</quote>
      </p> ...
      </body>
    </book>

\[Source file: [EX-terms-selector-4.xml](EX-terms-selector-4.xml)\]

#### [<img src="images/topOfPage.gif" title="Go to the table of contents." alt="Go to the table of contents." width="26" height="26" />](#contents)<span id="terminology-markup"></span>6.4.3 Markup Declarations for Terminology

termRule  
<table><tbody><tr class="odd"><td><span id="termRule"></span>[42]</td><td><code>termRule</code></td><td>::=</td><td><code> element its:termRule { termRule.content, termRule.attributes }</code></td></tr><tr class="even"><td><span id="termRule.content"></span>[43]</td><td><code>termRule.content</code></td><td>::=</td><td><code> empty</code></td></tr><tr class="odd"><td><span id="termRule.attributes"></span>[44]</td><td><code>termRule.attributes</code></td><td>::=</td><td><code>                                                                                att.selector.attributes,                                        attribute term { "yes" | "no" },                                        attribute termInfoRef { xsd:anyURI }?,                                        attribute termInfoRefPointer { string }?,                                        attribute termInfoPointer { string }?</code></td></tr></tbody></table>

<span id="att.term"></span>att.term   
<table><tbody><tr class="odd"><td><span id="att.term.attributes"></span>[45]</td><td><code>att.term.attributes</code></td><td>::=</td><td><code>                                         att.term.attribute.termInfoRef, att.term.attribute.term                                        </code></td></tr><tr class="even"><td><span id="att.term.attribute.termInfoRef"></span>[46]</td><td><code>att.term.attribute.termInfoRef</code></td><td>::=</td><td><code> attribute its:termInfoRef { xsd:anyURI }?</code></td></tr><tr class="odd"><td><span id="att.term.attribute.term"></span>[47]</td><td><code>att.term.attribute.term</code></td><td>::=</td><td><code> attribute its:term { "yes" | "no" }?</code></td></tr></tbody></table>

### [<img src="images/topOfPage.gif" title="Go to the table of contents." alt="Go to the table of contents." width="26" height="26" />](#contents)<span id="directionality"></span>6.5 Directionality

#### [<img src="images/topOfPage.gif" title="Go to the table of contents." alt="Go to the table of contents." width="26" height="26" />](#contents)<span id="directionality-definition"></span>6.5.1 Definition

The [Directionality](#directionality) data category allows the user to specify the base writing direction of blocks, embeddings and overrides for the Unicode bidirectional algorithm. It has four values: "ltr", "rtl", "lro" and "rlo".

**Note:**

ITS defines only the values of the [Directionality](#directionality) data category and their inheritance. The behavior of text labeled in this way may vary, according to the implementation. Implementers are encouraged, however, to model the behavior on that described in the CSS 2.1 specification or its successor. In such a case, the effect of the data category's values would correspond to the following CSS rules:

-   Data category value: "ltr" (left-to-right text)

    CSS rule: `*[dir="ltr"] { unicode-bidi: embed; direction: ltr}`

-   Data category value: "rtl" (right-to-left text)

    CSS rule: `*[dir="rtl"] { unicode-bidi: embed; direction: rtl}`

-   Data category value: "rlo" (left-to-right override)

    CSS rule: `*[dir="lro"] { unicode-bidi: bidi-override; direction: ltr}`

-   Data category value: "rlo" (right-to-left text)

    CSS rule: `*[dir="rlo"] { unicode-bidi: bidi-override; direction: rtl}`

More information about how to use this data category is provided by [\[Bidi Article\]](#bidiarticle "What you need to know about the bidi algorithm and inline markup").

#### [<img src="images/topOfPage.gif" title="Go to the table of contents." alt="Go to the table of contents." width="26" height="26" />](#contents)<span id="directionality-implementation"></span>6.5.2 Implementation

The [Directionality](#directionality) data category can be expressed with global rules, or locally on an individual element. The information applies to the textual content of the element, *including* child elements and attributes. The default is that both elements and attributes have the directionality of left-to-right.

GLOBAL: The <a href="#dirRule" class="itsmarkup">dirRule</a> element contains the following:

-   A required <a href="#att.selector.attribute.selector" class="itsmarkup">selector</a> attribute. It contains an XPath expression which selects the nodes to which this rule applies.

-   A required <a href="#dirRule.attributes" class="itsmarkup">dir</a> attribute with the value "ltr", "rtl", "lro" or "rlo".

<span id="EX-dir-selector-1.xml">Example 33: Document which needs global rules for directionality</span>

In this document the right-to-left directionality is marked using a `direction` attribute with a value "rtlText".

    <text xml:lang="en">
     <body>
      <par>In Hebrew, the title <quote xml:lang="he" direction="rtlText">פעילות הבינאום, W3C</quote>
         means <quote>Internationalization Activity, W3C</quote>.</par>
     </body>
    </text>

\[Source file: [EX-dir-selector-1.xml](EX-dir-selector-1.xml)\]

<span id="EX-dir-selector-2.xml">Example 34: The Directionality data category expressed with global rules</span>

The <a href="#dirRule" class="itsmarkup">dirRule</a> element indicates that all elements with an attribute `direction="rtlText"` have right-to-left content.

    <its:rules
      xmlns:its="http://www.w3.org/2005/11/its"  version="1.0">
     <its:dirRule dir="rtl" selector="//*[@direction='rtlText']"/>
    </its:rules>

\[Source file: [EX-dir-selector-2.xml](EX-dir-selector-2.xml)\]

LOCAL: The following local markup is available for the [Directionality](#directionality) data category:

-   A <a href="#att.local.no-ns.attribute.dir" class="itsmarkup">dir</a> attribute with the value "ltr", "rtl", "lro" or "rlo".

<span id="d3e3662">Example 35: The Directionality data category expressed locally</span>

On the first `quote` element, the `its:dir="rtl"` attribute indicates a right-to-left content.

    <text
      xmlns:its="http://www.w3.org/2005/11/its"  xml:lang="en"
      its:version="1.0">
     <body>
      <par>In Arabic, the title <quote xml:lang="ar"
         its:dir="rtl">نشاط التدويل، W3C</quote>
         means <quote>Internationalization Activity, W3C</quote>.</par>
     </body>
    </text>

\[Source file: [EX-dir-selector-3.xml](EX-dir-selector-3.xml)\]

#### [<img src="images/topOfPage.gif" title="Go to the table of contents." alt="Go to the table of contents." width="26" height="26" />](#contents)<span id="directionality-markup"></span>6.5.3 Markup Declarations for Directionality

dirRule  
<table><tbody><tr class="odd"><td><span id="dirRule"></span>[48]</td><td><code>dirRule</code></td><td>::=</td><td><code> element its:dirRule { dirRule.content, dirRule.attributes }</code></td></tr><tr class="even"><td><span id="dirRule.content"></span>[49]</td><td><code>dirRule.content</code></td><td>::=</td><td><code> empty</code></td></tr><tr class="odd"><td><span id="dirRule.attributes"></span>[50]</td><td><code>dirRule.attributes</code></td><td>::=</td><td><code>                                                                                att.selector.attributes,                                        attribute dir { "ltr" | "rtl" | "lro" | "rlo" }</code></td></tr></tbody></table>

<span id="att.dir"></span>att.dir   
<table><tbody><tr class="odd"><td><span id="att.dir.attributes"></span>[51]</td><td><code>att.dir.attributes</code></td><td>::=</td><td><code>                                         att.dir.attribute.dir                                        </code></td></tr><tr class="even"><td><span id="att.dir.attribute.dir"></span>[52]</td><td><code>att.dir.attribute.dir</code></td><td>::=</td><td><code> attribute its:dir { "ltr" | "rtl" | "lro" | "rlo" }?</code></td></tr></tbody></table>

### [<img src="images/topOfPage.gif" title="Go to the table of contents." alt="Go to the table of contents." width="26" height="26" />](#contents)<span id="ruby-annotation"></span>6.6 Ruby

#### [<img src="images/topOfPage.gif" title="Go to the table of contents." alt="Go to the table of contents." width="26" height="26" />](#contents)<span id="ruby-definition"></span>6.6.1 Definition

The [Ruby](#ruby-annotation) data category is used for a run of text that is associated with another run of text, referred to as the base text. Ruby text is used to provide a short annotation of the associated base text. It is most often used to provide a reading (pronunciation) guide.

#### [<img src="images/topOfPage.gif" title="Go to the table of contents." alt="Go to the table of contents." width="26" height="26" />](#contents)<span id="ruby-implementation"></span>6.6.2 Implementation

The [Ruby](#ruby-annotation) data category can be expressed with global rules, or locally. There is no inheritance.

GLOBAL: The <a href="#rubyRule" class="itsmarkup">rubyRule</a> element contains the following:

-   A required <a href="#att.selector.attribute.selector" class="itsmarkup">selector</a> attribute. It contains an XPath expression which selects the nodes to which this rule applies. This is the ruby base text.

-   An optional <a href="#rubyRule.attributes" class="itsmarkup">rubyPointer</a> attribute that contains a relative XPath expression pointing to a node that corresponds to the ruby element.

-   An optional <a href="#rubyRule.attributes" class="itsmarkup">rpPointer</a> attribute that contains a relative XPath expression pointing to a node that corresponds to the ruby parenthesis.

-   An optional <a href="#rubyRule.attributes" class="itsmarkup">rbcPointer</a> attribute that contains a relative XPath expression pointing to a node that corresponds to the ruby base container.

-   An optional <a href="#rubyRule.attributes" class="itsmarkup">rtcPointer</a> attribute that contains a relative XPath expression pointing to a node that corresponds to the ruby text container.

-   An optional <a href="#rubyRule.attributes" class="itsmarkup">rbspanPointer</a> attribute that contains a relative XPath expression pointing to a node that corresponds to the <a href="#rubyText.attributes" class="itsmarkup">rbspan</a> attribute.

-   An optional <a href="#rubyText" class="itsmarkup">rubyText</a> element that contains the ruby text.

-   An optional <a href="#rubyRule.attributes" class="itsmarkup">rtPointer</a> attribute that contains a relative XPath expression pointing to a node that corresponds to the ruby text.

**Note:**

Where legacy formats do not contain ruby markup, it is still possible to associate ruby text with a specified range of document content using the <a href="#rubyRule" class="itsmarkup">rubyRule</a> element.

<span id="EX-ruby-legacy-1">Example 36: Adding ruby text with a rubyRule element</span>

    <text
      xmlns:its="http://www.w3.org/2005/11/its" >
     <head> ... 
       <its:rules version="1.0">
       <its:rubyRule selector="/text/body/img[1]/@alt">
        <its:rubyText>World Wide Web Consortium</its:rubyText>
       </its:rubyRule>
      </its:rules>
     </head>
     <body>
      <img src="w3c_home.png" alt="W3C"/> ...
      </body>
    </text>

\[Source file: [EX-ruby-legacy-1.xml](EX-ruby-legacy-1.xml)\]

LOCAL: In a document, the [Ruby](#ruby-annotation) data category is realized with a <a href="#ruby" class="itsmarkup">ruby</a> element. It contains the following:

-   An <a href="#rb" class="itsmarkup">rb</a> element that contains the ruby base text and allows for [local ITS markup](#selection-local).

-   An <a href="#rp" class="itsmarkup">rp</a> element that contains the ruby parenthesis. It is used in case of simple markup to specify characters that can denote the beginning and end of ruby text when user agents do not have other ways to present ruby text distinctively from the base text.

-   An <a href="#rt" class="itsmarkup">rt</a> element that contains the ruby text and allows for [local ITS markup](#selection-local). It has an optional <a href="#rubyText.attributes" class="itsmarkup">rbspan</a> attribute. The <a href="#rubyText.attributes" class="itsmarkup">rbspan</a> attribute allows an <a href="#rt" class="itsmarkup">rt</a> element to span multiple <a href="#rb" class="itsmarkup">rb</a> elements.

-   An <a href="#rbc" class="itsmarkup">rbc</a> element that contains the ruby base container.

-   An <a href="#rtc" class="itsmarkup">rtc</a> element that contains the ruby text container.

All these elements share the attributes of the <a href="#span" class="itsmarkup">span</a> element.

<span id="EX-ruby-implementation-1">Example 37: The Ruby data category expressed locally</span>

    <text
      xmlns:its="http://www.w3.org/2005/11/its" 
      its:version="1.0">
     <head> ... </head>
     <body>
      <p>この本は <its:ruby>
        <its:rb>慶応義塾大学</its:rb>
        <its:rp>(</its:rp>
        <its:rt>けいおうぎじゅくだいがく</its:rt>
        <its:rp>)</its:rp>
       </its:ruby>の歴史を説明するものです。</p>
     </body>
    </text>

\[Source file: [EX-ruby-implementation-1.xml](EX-ruby-implementation-1.xml)\]

**Note:**

The structure of the content model for the <a href="#ruby" class="itsmarkup">ruby</a> element is identical with the structure of ruby markup as defined in [\[Ruby-TR\]](#ruby-tr "Ruby Annotation"). An implementation of the [Ruby](#ruby-annotation) data category is encouraged, but not mandated follow the [conformance criteria for ruby](http://www.w3.org/TR/ruby/#conformance) defined in that specification.

The structure of ruby defined in section 5.4 of [\[OpenDocument\]](#opendocument "OASIS
                Open Document Format for Office Applications (OpenDocument).") is also compliant with ruby defined in this specification.

#### [<img src="images/topOfPage.gif" title="Go to the table of contents." alt="Go to the table of contents." width="26" height="26" />](#contents)<span id="ruby-markup"></span>6.6.3 Markup Declarations for Ruby

rubyRule  
<table><tbody><tr class="odd"><td><span id="rubyRule"></span>[53]</td><td><code>rubyRule</code></td><td>::=</td><td><code> element its:rubyRule { rubyRule.content, rubyRule.attributes }</code></td></tr><tr class="even"><td><span id="rubyRule.content"></span>[54]</td><td><code>rubyRule.content</code></td><td>::=</td><td><code>                                         rubyText?</code></td></tr><tr class="odd"><td><span id="rubyRule.attributes"></span>[55]</td><td><code>rubyRule.attributes</code></td><td>::=</td><td><code>                                                                                att.selector.attributes,                                        attribute rubyPointer { string }?,                                        attribute rtPointer { string }?,                                        attribute rpPointer { string }?,                                        attribute rbcPointer { string }?,                                        attribute rtcPointer { string }?,                                        attribute rbspanPointer { string }?</code></td></tr></tbody></table>

rubyText  
<table><tbody><tr class="odd"><td><span id="rubyText"></span>[56]</td><td><code>rubyText</code></td><td>::=</td><td><code> element its:rubyText { rubyText.content, rubyText.attributes }</code></td></tr><tr class="even"><td><span id="rubyText.content"></span>[57]</td><td><code>rubyText.content</code></td><td>::=</td><td><code> text</code></td></tr><tr class="odd"><td><span id="rubyText.attributes"></span>[58]</td><td><code>rubyText.attributes</code></td><td>::=</td><td><code>                                         att.local.no-ns.attributes, attribute rbspan { string }?</code></td></tr></tbody></table>

ruby  
<table><tbody><tr class="odd"><td><span id="ruby"></span>[59]</td><td><code>ruby</code></td><td>::=</td><td><code> element its:ruby { ruby.content, ruby.attributes }</code></td></tr><tr class="even"><td><span id="ruby.content"></span>[60]</td><td><code>ruby.content</code></td><td>::=</td><td><code> ( rb, ( rt | ( rp, rt, rp ) ) ) | ( rbc, rtc, rtc? )</code></td></tr><tr class="odd"><td><span id="ruby.attributes"></span>[61]</td><td><code>ruby.attributes</code></td><td>::=</td><td><code>                                         att.local.no-ns.attributes                                        </code></td></tr></tbody></table>

rb  
<table><tbody><tr class="odd"><td><span id="rb"></span>[62]</td><td><code>rb</code></td><td>::=</td><td><code> element its:rb { rb.content, rb.attributes }</code></td></tr><tr class="even"><td><span id="rb.content"></span>[63]</td><td><code>rb.content</code></td><td>::=</td><td><code> ( text | span )*</code></td></tr><tr class="odd"><td><span id="rb.attributes"></span>[64]</td><td><code>rb.attributes</code></td><td>::=</td><td><code>                                         att.local.no-ns.attributes                                        </code></td></tr></tbody></table>

rt  
<table><tbody><tr class="odd"><td><span id="rt"></span>[65]</td><td><code>rt</code></td><td>::=</td><td><code> element its:rt { rt.content, rt.attributes }</code></td></tr><tr class="even"><td><span id="rt.content"></span>[66]</td><td><code>rt.content</code></td><td>::=</td><td><code> ( text | span )*</code></td></tr><tr class="odd"><td><span id="rt.attributes"></span>[67]</td><td><code>rt.attributes</code></td><td>::=</td><td><code>                                         att.local.no-ns.attributes, attribute rbspan { string }?</code></td></tr></tbody></table>

rbc  
<table><tbody><tr class="odd"><td><span id="rbc"></span>[68]</td><td><code>rbc</code></td><td>::=</td><td><code> element its:rbc { rbc.content, rbc.attributes }</code></td></tr><tr class="even"><td><span id="rbc.content"></span>[69]</td><td><code>rbc.content</code></td><td>::=</td><td><code>                                         rb+</code></td></tr><tr class="odd"><td><span id="rbc.attributes"></span>[70]</td><td><code>rbc.attributes</code></td><td>::=</td><td><code>                                         att.local.no-ns.attributes                                        </code></td></tr></tbody></table>

rtc  
<table><tbody><tr class="odd"><td><span id="rtc"></span>[71]</td><td><code>rtc</code></td><td>::=</td><td><code> element its:rtc { rtc.content, rtc.attributes }</code></td></tr><tr class="even"><td><span id="rtc.content"></span>[72]</td><td><code>rtc.content</code></td><td>::=</td><td><code>                                         rt+</code></td></tr><tr class="odd"><td><span id="rtc.attributes"></span>[73]</td><td><code>rtc.attributes</code></td><td>::=</td><td><code>                                         att.local.no-ns.attributes                                        </code></td></tr></tbody></table>

rp  
<table><tbody><tr class="odd"><td><span id="rp"></span>[74]</td><td><code>rp</code></td><td>::=</td><td><code> element its:rp { rp.content, rp.attributes }</code></td></tr><tr class="even"><td><span id="rp.content"></span>[75]</td><td><code>rp.content</code></td><td>::=</td><td><code> text</code></td></tr><tr class="odd"><td><span id="rp.attributes"></span>[76]</td><td><code>rp.attributes</code></td><td>::=</td><td><code>                                         att.local.no-ns.attributes                                        </code></td></tr></tbody></table>

### [<img src="images/topOfPage.gif" title="Go to the table of contents." alt="Go to the table of contents." width="26" height="26" />](#contents)<span id="language-information"></span>6.7 Language Information

#### [<img src="images/topOfPage.gif" title="Go to the table of contents." alt="Go to the table of contents." width="26" height="26" />](#contents)<span id="langinfo-definition"></span>6.7.1 Definition

The element <a href="#langRule" class="itsmarkup">langRule</a> is used to express the language of a given piece of content. The <a href="#langRule.attributes" class="itsmarkup">langPointer</a> attribute points to the markup which expresses the language of the text selected by the selector attribute. This markup [MUST](#rfc-keywords) use values that conform to [\[BCP47\]](#bcp47 "Tags for Identifying Languages"). The recommended way to specify language identification is to use `xml:lang`. The <a href="#langRule" class="itsmarkup">langRule</a> element is intended only as a fall-back mechanism for documents where language is identified with another construct.

<span id="EX-lang-definition-1">Example 38: Pointing to language information via langRule</span>

The following <a href="#langRule" class="itsmarkup">langRule</a> element expresses that the content of all `p` elements (including attribute values and textual content of child elements) are in the language indicated by `mylangattribute`, which is attached to the `p` elements, and expresses language using values conformant to [\[BCP47\]](#bcp47 "Tags for Identifying Languages").

    <its:rules
      xmlns:its="http://www.w3.org/2005/11/its"  version="1.0">
     <its:langRule selector="//p" langPointer="@mylangattribute"/>
    </its:rules>

\[Source file: [EX-lang-definition-1.xml](EX-lang-definition-1.xml)\]

**Note:**

The [Language Information](#language-information) data category only provides for rules to be expressed at a global level. Locally users are able to use `xml:lang` (which is defined by XML) or an attribute specific to the format in question (as in [Example 38](#EX-lang-definition-1)).

`xml:lang` is the preferable means of language identification. To ease the usage of `xml:lang`, a declaration for this attribute is part of the non-normative XML DTD and XML Schema document for ITS markup declarations. There is no declaration of `xml:lang` in the non-normative RELAX NG document for ITS, since in RELAX NG it is not necessary to declare attributes from the XML namespace.

Applying the [Language Information](#language-information) data category to `xml:lang` attributes using global rules is not necessary, since `xml:lang` is the standard way to specify language information in XML. `xml:lang` is defined in terms of [RFC 3066 or its successor](http://www.w3.org/TR/2006/REC-xml-20060816/#sec-lang-tag) ([\[BCP47\]](#bcp47 "Tags for Identifying Languages") is the "Best Common Practice" for language identification and encompasses [\[RFC 3066\]](#rfc3066 "Tags for the Identification of Languages") and its successors.)

#### [<img src="images/topOfPage.gif" title="Go to the table of contents." alt="Go to the table of contents." width="26" height="26" />](#contents)<span id="langinfo-implementation"></span>6.7.2 Implementation

The [Language Information](#language-information) data category can be expressed only with global rules. The information applies to the textual content of the element, *including* child elements and attributes. There is no default.

GLOBAL: The <a href="#langRule" class="itsmarkup">langRule</a> element contains the following:

-   A required <a href="#att.selector.attribute.selector" class="itsmarkup">selector</a> attribute. It contains an XPath expression which selects the nodes to which this rule applies.

-   A required <a href="#langRule.attributes" class="itsmarkup">langPointer</a> attribute that contains a relative XPath expression pointing to a node that contains language information.

#### [<img src="images/topOfPage.gif" title="Go to the table of contents." alt="Go to the table of contents." width="26" height="26" />](#contents)<span id="langinfo-markup"></span>6.7.3 Markup Declarations for Language Information

langRule  
<table><tbody><tr class="odd"><td><span id="langRule"></span>[77]</td><td><code>langRule</code></td><td>::=</td><td><code> element its:langRule { langRule.content, langRule.attributes }</code></td></tr><tr class="even"><td><span id="langRule.content"></span>[78]</td><td><code>langRule.content</code></td><td>::=</td><td><code> empty</code></td></tr><tr class="odd"><td><span id="langRule.attributes"></span>[79]</td><td><code>langRule.attributes</code></td><td>::=</td><td><code>                                         att.selector.attributes, attribute langPointer { string }</code></td></tr></tbody></table>

### [<img src="images/topOfPage.gif" title="Go to the table of contents." alt="Go to the table of contents." width="26" height="26" />](#contents)<span id="elements-within-text"></span>6.8 Elements Within Text

#### [<img src="images/topOfPage.gif" title="Go to the table of contents." alt="Go to the table of contents." width="26" height="26" />](#contents)<span id="within-text-definition"></span>6.8.1 Definition

The [Elements Within Text](#elements-within-text) data category reveals if and how an element affects the way text content behaves from a linguistic viewpoint. This information is for example relevant to provide basic text segmentation hints for tools such as translation memory systems. The values associated with this data category are:

-   "yes" : The element and its content are part of the flow of its parent element. For example the element `strong` in [\[XHTML 1.0\]](#xhtml10 "XHTML™ 1.0 The Extensible
                    HyperText Markup Language (Second Edition)"):

    `<strong>Appaloosa horses</strong> have spotted coats.`

-   "nested" : The element is part of the flow of its parent element, its content is an independent flow. For example the element `fn` in [\[DITA 1.0\]](#dita10 "OASIS Darwin Information Typing
    Architecture (DITA) Language Specification v1.0"):

    `Palouse horses<fn>A Palouse horse is the same as an Appaloosa.</fn> have                               spotted coats.`

-   "no" : The element splits the text flow of its parent element and its content is an independent text flow. For example the element `p` when inside the element `li` in DITA or XHTML:

    `<li>Palouse horses:                               <p>They have spotted coats.</p>                               <p>They have been bred by the Nez Perce.</p>                               </li>`

#### [<img src="images/topOfPage.gif" title="Go to the table of contents." alt="Go to the table of contents." width="26" height="26" />](#contents)<span id="within-text-implementation"></span>6.8.2 Implementation

The [Elements Within Text](#elements-within-text) data category can be expressed only with global rules. There is no inheritance. The default is that elements are not within text.

GLOBAL: The <a href="#withinTextRule" class="itsmarkup">withinTextRule</a> element contains the following:

-   A required <a href="#att.selector.attribute.selector" class="itsmarkup">selector</a> attribute. It contains an XPath expression which selects the nodes to which this rule applies.

-   A required <a href="#withinTextRule.attributes" class="itsmarkup">withinText</a> attribute with the value "yes", "no" or "nested".

<span id="d3e4452">Example 39: Specifying elements within text with a withinTextRule element</span>

    <its:rules
      xmlns:its="http://www.w3.org/2005/11/its"  version="1.0">
     <its:withinTextRule withinText="yes" selector="//b | //em | //i"/>
    </its:rules>

\[Source file: [EX-within-text-implementation-1.xml](EX-within-text-implementation-1.xml)\]

#### [<img src="images/topOfPage.gif" title="Go to the table of contents." alt="Go to the table of contents." width="26" height="26" />](#contents)<span id="within-text-markup"></span>6.8.3 Markup Declarations for Elements Within Text

withinTextRule  
<table><tbody><tr class="odd"><td><span id="withinTextRule"></span>[80]</td><td><code>withinTextRule</code></td><td>::=</td><td><code>                                        element its:withinTextRule                                        {                                        withinTextRule.content,                                        withinTextRule.attributes                                        }</code></td></tr><tr class="even"><td><span id="withinTextRule.content"></span>[81]</td><td><code>withinTextRule.content</code></td><td>::=</td><td><code> empty</code></td></tr><tr class="odd"><td><span id="withinTextRule.attributes"></span>[82]</td><td><code>withinTextRule.attributes</code></td><td>::=</td><td><code>                                                                                att.selector.attributes,                                        attribute withinText { "yes" | "no" | "nested" }</code></td></tr></tbody></table>

[<img src="images/topOfPage.gif" title="Go to the table of contents." alt="Go to the table of contents." width="26" height="26" />](#contents)<span id="normative-references"></span>A References
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

<span id="bcp47"></span>BCP47   
Addison Phillips, Mark Davis. [Tags for Identifying Languages](http://www.rfc-editor.org/rfc/bcp/bcp47.txt), September 2006. Available at <http://www.rfc-editor.org/rfc/bcp/bcp47.txt>.

<span id="qa-framework"></span>QAFRAMEWORK   
Karl Dubost, Lynne Rosental, Dominique Hazaël-Massieux, Lofton Henderson. [QA Framework: Specification Guidelines](http://www.w3.org/TR/2005/REC-qaframe-spec-20050817/). W3C Recommendation 17 August 2005. Available at <http://www.w3.org/TR/2005/REC-qaframe-spec-20050817/>. The latest version of [QAFRAMEWORK](http://www.w3.org/TR/qaframe-spec/) is available at http://www.w3.org/TR/qaframe-spec/.

<span id="relaxng"></span>RELAX NG   
Information technology -- Document Schema Definition Language (DSDL) -- Part 2: Regular-grammar-based validation -- RELAX NG. International Organization for Standardization (ISO) ISO/IEC 19757-2:2003.

<span id="rfc2119"></span>RFC 2119   
S. Bradner. [Key Words for use in RFCs to Indicate Requirement Levels](http://www.ietf.org/rfc/rfc2119.txt). IETF RFC 2119, March 1997. Available at <http://www.ietf.org/rfc/rfc2119.txt>.

<span id="rfc3987"></span>RFC 3987   
Martin Dürst, Michel Suignard. [Internationalized Resource Identifiers (IRIs)](http://www.ietf.org/rfc/rfc3987.txt). RFC 3987, January 2005. See <http://www.ietf.org/rfc/rfc3987.txt>.

<span id="xlink1"></span>XLink 1.0   
Steve DeRose, Eve Maler, David Orchard. [XML Linking Language 1.0](http://www.w3.org/TR/2001/REC-xlink-20010627/). W3C Recommendation 27 June 2001. Available at <http://www.w3.org/TR/2001/REC-xlink-20010627/>. The latest version of [XLink 1.0](http://www.w3.org/TR/xlink/) is available at http://www.w3.org/TR/xlink/.

<span id="xml10spec"></span>XML 1.0   
Tim Bray, Jean Paoli, C.M. Sperberg-McQueen, et al., editors. [Extensible Markup Language (XML) 1.0 (Fourth Edition)](http://www.w3.org/TR/2006/REC-xml-20060816/), W3C Recommendation 16 August 2006. Available at <http://www.w3.org/TR/2006/REC-xml-20060816/>. The latest version of [XML 1.0](http://www.w3.org/TR/REC-xml/) is available at http://www.w3.org/TR/REC-xml/.

<span id="xmlinfoset"></span>XML Infoset   
John Cowan, Richard Tobin. [XML Information Set (Second Edition)](http://www.w3.org/TR/2004/REC-xml-infoset-20040204/). W3C Recommendation 4 February 2004. Available at <http://www.w3.org/TR/2004/REC-xml-infoset-20040204/>. The latest version of [XML Infoset](http://www.w3.org/TR/xml-infoset/) is available at http://www.w3.org/TR/xml-infoset/.

<span id="xmlns"></span>XML Names   
Tim Bray, Dave Hollander, Andrew Layman, Richard Tobin. [Namespaces in XML (Second Edition)](http://www.w3.org/TR/2006/REC-xml-names-20060816/). W3C Recommendation 16 August 2006. Available at <http://www.w3.org/TR/2006/REC-xml-names-20060816/>. The latest version of [XML Names](http://www.w3.org/TR/REC-xml-names/) is available at http://www.w3.org/TR/REC-xml-names/.

<span id="xmlschema1"></span>XML Schema   
Henry S. Thompson, David Beech, Murray Maloney, Noah Mendelsohn. [XML Schema Part 1: Structures Second Edition](http://www.w3.org/TR/2004/REC-xmlschema-1-20041028/). W3C Recommendation 28 October 2004. Available at <http://www.w3.org/TR/2004/REC-xmlschema-1-20041028/>. The latest version of [XML Schema](http://www.w3.org/TR/xmlschema-1/) is available at http://www.w3.org/TR/xmlschema-1/.

<span id="xpath"></span>XPath 1.0   
James Clark. [XML Path Language (XPath) Version 1.0](http://www.w3.org/TR/1999/REC-xpath-19991116). W3C Recommendation 16 November 1999. Available at <http://www.w3.org/TR/1999/REC-xpath-19991116>. The latest version of [XPath 1.0](http://www.w3.org/TR/xpath) is available at http://www.w3.org/TR/xpath.

[<img src="images/topOfPage.gif" title="Go to the table of contents." alt="Go to the table of contents." width="26" height="26" />](#contents)<span id="informative-references"></span>B References (Non-Normative)
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

<span id="bidiarticle"></span>Bidi Article   
Richard Ishida. [What you need to know about the bidi algorithm and inline markup](http://www.w3.org/International/articles/inline-bidi-markup/). Article of the [W3C Internationalization Activity](http://www.w3.org/International/), June 2005.

<span id="css2-1"></span>CSS 2.1   
Bert Bos, Tantek Çelik, Ian Hickson Håkon Wium Lie. [Cascading Style Sheets, level 2 revision 1 CSS 2.1 Specification](http://www.w3.org/TR/2006/WD-CSS21-20060411/). W3C Working Draft 11 April 2006. Available at <http://www.w3.org/TR/2006/WD-CSS21-20060411/>. The latest version of [CSS2](http://www.w3.org/TR/CSS21/) is available at http://www.w3.org/TR/CSS21/.

<span id="dita10"></span>DITA 1.0   
Michael Priestley, JoAnn Hackos, et. al., editors. [OASIS Darwin Information Typing Architecture (DITA) Language Specification v1.0](http://www.oasis-open.org/committees/download.php/15316/dita10.zip). OASIS Standard 9 May 2005. Available at <http://www.oasis-open.org/committees/download.php/15316/dita10.zip>.

<span id="docbook"></span>DocBook   
Norman Walsh and Leonard Muellner. [DocBook: The Definitive Guide](http://www.docbook.org/). Available at <http://www.docbook.org/>.

<span id="geo-i18n-l10n"></span>l10n i18n   
Richard Ishida, Susan Miller. [Localization vs. Internationalization](http://www.w3.org/International/questions/qa-i18n). Article of the [W3C Internationalization Activity](http://www.w3.org/International/), January 2006.

<span id="iso12200"></span>ISO 12200   
(International Organization for Standardization). Machine-readable terminology interchange format (MARTIF) -- Negotiated interchange. \[Geneva\]: International Organization for Standardization, 1999.

<span id="itsreq"></span>ITS REQ   
Yves Savourel. [Internationalization and Localization Markup Requirements](http://www.w3.org/TR/2006/WD-itsreq-20060518/). W3C Working Draft 18 May 2006. Available at <http://www.w3.org/TR/2006/WD-itsreq-20060518/>. The latest version of [ITS REQ](http://www.w3.org/TR/itsreq/) is available at http://www.w3.org/TR/itsreq/.

<span id="reqlocdtd"></span>Localizable DTDs   
Richard Ishida, Yves Savourel [Requirements for Localizable DTD Design](http://people.w3.org/rishida/localizable-dtds/). Working Draft 7 July 2003. Available at <http://people.w3.org/rishida/localizable-dtds/>.

<span id="nvdl"></span>NVDL   
Information technology -- Document Schema Definition Languages (DSDL) -- Part 4: Namespace-based Validation Dispatching Language (NVDL). International Organization for Standardization (ISO) ISO/IEC 19757-4:2003.

<span id="opendocument"></span>OpenDocument   
Michael Brauer et al. [OASIS Open Document Format for Office Applications (OpenDocument).](http://www.oasis-open.org/committees/tc_home.php?wg_abbrev=office). Oasis Standard 1 May 2005. Available at <http://www.oasis-open.org/committees/tc_home.php?wg_abbrev=office>. The latest version of [OpenDocument](http://www.oasis-open.org/committees/tc_home.php?wg_abbrev=office) is available at http://www.oasis-open.org/committees/tc\_home.php?wg\_abbrev=office.

<span id="rfc3066"></span>RFC 3066   
Harald Alvestrand. [Tags for the Identification of Languages](http://www.ietf.org/rfc/rfc3066.txt). RFC 3066, January 2001. Available at <http://www.ietf.org/rfc/rfc3066.txt>.

<span id="ruby-tr"></span>Ruby-TR   
Marcin Sawicki (until 10 October, 1999), Michel Suignard, Masayasu Ishikawa (石川 雅康), Martin Dürst, Tex Texin, [Ruby Annotation](http://www.w3.org/TR/ruby/). W3C Recommendation 31 May 2001. Available at <http://www.w3.org/TR/2001/REC-ruby-20010531/> . The latest version of [Ruby Annotation](http://www.w3.org/TR/ruby/) is available at http://www.w3.org/TR/ruby/.

<span id="schematron"></span>Schematron   
Information technology -- Document Schema Definition Languages (DSDL) -- Part 3: Rule-based validation -- Schematron. International Organization for Standardization (ISO) ISO/IEC 19757-3:2003.

<span id="tei"></span>TEI   
Lou Burnard and Syd Bauman (eds). [Text Encoding Initiative Guidelines development version (P5)](http://www.tei-c.org/P5/). TEI Consortium, Charlottesville, Virginia, USA, Text Encoding Initiative.

<span id="xhtml10"></span>XHTML 1.0   
Steven Pemberton et al. [XHTML™ 1.0 The Extensible HyperText Markup Language (Second Edition)](http://www.w3.org/TR/2002/REC-xhtml1-20020801/). W3C Recommendation 26 January 2000, revised 1 August 2002. Available at <http://www.w3.org/TR/2002/REC-xhtml1-20020801/>. The latest version of [XHTML 1.0](http://www.w3.org/TR/xhtml1/) is available at http://www.w3.org/TR/xhtml1/.

<span id="xml-i18n-bp"></span>XML i18n BP   
Yves Savourel, Diane Stoick. [Best Practices for XML Internationalization](http://www.w3.org/TR/2006/WD-xml-i18n-bp-20060518/). Available at <http://www.w3.org/TR/2006/WD-xml-i18n-bp-20060518/>. The latest version of [xml-i18n-bp](http://www.w3.org/TR/xml-i18n-bp/) is available at http://www.w3.org/TR/xml-i18n-bp/.

<span id="xmlspecbib"></span>XMLSPEC   
[The XML Spec Schema and Stylesheets](http://www.w3.org/2002/xmlspec/). Available at <http://www.w3.org/2002/xmlspec/>.

<span id="xslt10"></span>XSLT 1.0   
James Clark. [XSL Transformations (XSLT) Version 1.0](http://www.w3.org/TR/1999/REC-xslt-19991116). W3C Recommendation 16 November 1999. Available at <http://www.w3.org/TR/1999/REC-xslt-19991116>. The latest version of [XSLT 1.0](http://www.w3.org/TR/xslt) is available at http://www.w3.org/TR/xslt.

<span id="xul"></span>XUL   
[exTensible User Interface Language](http://www.xulplanet.com/). Available at <http://www.xulplanet.com/>.

[<img src="images/topOfPage.gif" title="Go to the table of contents." alt="Go to the table of contents." width="26" height="26" />](#contents)<span id="its-markup-summary"></span>C Summary of ITS Markup (Non-Normative)
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

*This section is informative.*

The following list summarizes elements relating to global rules and their attributes:

-   <span class="new-term">&lt;rules&gt;</span> Container for global rules.

    -   <span class="new-term">href</span>

        Pointer to external rules files.

    -   <span class="new-term">type</span>

        Type of pointer to external rules files.

        Legal values are:

        -   *simple*

    <!-- -->

    -   <span class="new-term">version</span>

        Version of the ITS schema.

-   <span class="new-term">&lt;dirRule&gt; </span>Rule about the Directionality data category.

    -   <span class="new-term">dir</span>

        The text direction for the selection.

        Legal values are:

        -   *ltr*

        -   *rtl*

        -   *lro*

        -   *rlo*

    <!-- -->

    -   <span class="new-term">selector</span>

        XPath expression identifying the nodes to be selected.

-   <span class="new-term">&lt;langRule&gt; </span>Rule about the Language Information data category.

    -   <span class="new-term">langPointer</span>

        Relative XPath expression pointing to a node that contains language information.

    <!-- -->

    -   <span class="new-term">selector</span>

        XPath expression identifying the nodes to be selected.

-   <span class="new-term">&lt;locNote&gt; </span>Contains a localization note.

    -   <span class="new-term">translate</span>

        The Translate data category information to be attached to the current node.

    <!-- -->

    -   <span class="new-term">locNote</span>

        Localization note.

    -   <span class="new-term">locNoteType</span>

        The type of localization note.

    -   <span class="new-term">locNoteRef</span>

        URI referring to the location of the localization note.

    <!-- -->

    -   <span class="new-term">termInfoRef</span>

        Pointer to a resource containing information about the term.

    -   <span class="new-term">term</span>

        Indicates a term locally.

    <!-- -->

    -   <span class="new-term">dir</span>

        The text direction for the context.

-   <span class="new-term">&lt;locNoteRule&gt; </span>Rule about the Localization Note data category.

    -   <span class="new-term">locNotePointer</span>&gt;

        Relative XPath expression pointing to a node that holds the localization note.

    -   <span class="new-term">locNoteType</span>

        The type of localization note.

        Legal values are:

        -   *alert*

        -   *description*

    -   <span class="new-term">locNoteRef</span>

        URI referring to the location of the localization note.

    -   <span class="new-term">locNoteRefPointer</span>

        Relative XPath expression pointing to a node that holds the URI referring to the location of the localization note.

    <!-- -->

    -   <span class="new-term">selector</span>

        XPath expression identifying the nodes to be selected.

-   <span class="new-term">&lt;termRule&gt; </span>Rule about the Terminology data category.

    -   <span class="new-term">term</span>

        Indicates whether the selection is a term or not.

        Legal values are:

        -   *yes*

        -   *no*

    -   <span class="new-term">termInfoRef</span>

        URI referring to the resource providing information about the term.

    -   <span class="new-term">termInfoRefPointer</span>

        Relative XPath expression pointing to a node containing a URI referring to the resource providing information about the term.

    -   <span class="new-term">termInfoPointer</span>

        Relative XPath expression pointing to a node containing information about the term.

    <!-- -->

    -   <span class="new-term">selector</span>

        XPath expression identifying the nodes to be selected.

-   <span class="new-term">&lt;translateRule&gt; </span>Rule about the Translate data category.

    -   <span class="new-term">translate</span>

        The Translate data category information to be applied to selected nodes.

        Legal values are:

        -   *yes*

        -   *no*

    <!-- -->

    -   <span class="new-term">selector</span>

        XPath expression identifying the nodes to be selected.

-   <span class="new-term">&lt;withinTextRule&gt; </span>Rule about the Elements Within Text data category.

    -   <span class="new-term">withinText</span>

        States whether current context is regarded as "within text".

        Legal values are:

        -   *yes*

            *no*

            *nested*

    <!-- -->

    -   <span class="new-term">selector</span>

        XPath expression identifying the nodes to be selected.

-   <span class="new-term">&lt;rubyRule&gt; </span>Rule about the Ruby data category.

    -   <span class="new-term">rubyPointer</span>

        Relative XPath expression pointing to a node that corresponds to a `ruby` element

    -   <span class="new-term">rtPointer</span>

        Relative XPath expression pointing to a node that corresponds to a `rt` element

    -   <span class="new-term">rpPointer</span>

        Relative XPath expression pointing to a node that corresponds to a `rp` element

    -   <span class="new-term">rbcPointer</span>

        Relative XPath expression pointing to a node that corresponds to a `rbc` element

    -   <span class="new-term">rtcPointer</span>

        Relative XPath expression pointing to a node that corresponds to a `rtc` element

    -   <span class="new-term">rbspanPointer</span>

        Relative XPath expression pointing to a node that corresponds to a rbspan attribute.

    <!-- -->

    -   <span class="new-term">selector</span>

        XPath expression identifying the nodes to be selected.

The following list summarizes elements that are available for local use:

-   <span class="new-term">&lt;span&gt; </span>Inline element to contain ITS information.

-   <span class="new-term">&lt;rb&gt; </span>Ruby base text.

-   <span class="new-term">&lt;rbc&gt; </span>Container for rb elements in the case of complex ruby markup.

-   <span class="new-term">&lt;rp&gt; </span>Used in the case of simple ruby markup to specify characters that can denote the beginning and end of ruby text when user agents do not have other ways to present ruby text distinctively from the base text.

-   <span class="new-term">&lt;rt&gt; </span>Ruby text.

-   <span class="new-term">&lt;rtc&gt; </span>Container for rt elements in the case of complex ruby markup.

-   <span class="new-term">&lt;ruby&gt; </span>Ruby markup.

The following list summarizes attributes that are available for local use, with the local elements mentioned above, or with other elements in a host schema:

-   <span class="new-term">translate</span>

    The Translate data category information to be attached to the current node.

<!-- -->

-   <span class="new-term">locNote</span>

    Localization note.

-   <span class="new-term">locNoteType</span>

    The type of localization note.

-   <span class="new-term">locNoteRef</span>

    URI referring to the location of the localization note.

<!-- -->

-   <span class="new-term">termInfoRef</span>

    Pointer to a resource containing information about the term.

-   <span class="new-term">term</span>

    Indicates a term locally.

<!-- -->

-   <span class="new-term">dir</span>

    The text direction for the context.

[<img src="images/topOfPage.gif" title="Go to the table of contents." alt="Go to the table of contents." width="26" height="26" />](#contents)<span id="its-schemas"></span>D Schemas for ITS (Non-Normative)
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

*This section is informative.*

The following schemas define ITS elements and attributes and could be used as building blocks when you want to integrate ITS markup into your own XML vocabulary. You can see examples of such integration in [Best Practices for XML Internationalization](http://www.w3.org/TR/2006/WD-xml-i18n-bp-20060518/). The schemas are not intended to be used alone for validation of documents with ITS markup.

The following schemas are provided:

-   [DTD for ITS](its.dtd)

-   [XML Schema document for ITS](its.xsd)

-   [RELAX NG compact syntax document for ITS](its.rnc)

-   [RELAX NG XML syntax document for ITS](its.rng)

[<img src="images/topOfPage.gif" title="Go to the table of contents." alt="Go to the table of contents." width="26" height="26" />](#contents)<span id="its-schematron-constraints"></span>E Checking ITS Markup Constraints With Schematron (Non-Normative)
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

*This section is informative.*

Several constraints of ITS markup cannot be validated with ITS schemas. The following [\[Schematron\]](#schematron "Rule-based validation -- Schematron") document allows for validating some of these constraints.

<span id="d3e5437">Example 40: Testing constraints in ITS markup</span>

    <sch:schema
      xmlns:sch="http://www.ascc.net/xml/schematron" >
    <!-- Schematron document to test constraints for global and local ITS markup.
     For ITS markup definitions, see http://www.w3.org/TR/its/ . -->

     <sch:ns prefix="its" uri="http://www.w3.org/2005/11/its"/>
     <sch:pattern
       name="Check ITS Global Rules and Local Constraints, and Version Constraints">
      <sch:rule context="*">
    <!-- Tests for locNoteRule -->

       <sch:report
         test="self::its:locNoteRule and child::its:locNote and @its:locNotePointer">
       locNoteRule error: A locNoteRule element must not have both a locNote child element
        and a locNotePointer attribute.</sch:report>
       <sch:report
         test="self::its:locNoteRule and @its:locNoteRef and @its:locNoteRefPointer">
       locNoteRule error: A locNoteRule element must not have both a locNoteRef attribute
        and a locNoteRefPointer attribute.</sch:report>
       <sch:report
         test="self::its:locNoteRule and child::its:locNote and @its:locNoteRef">
       locNoteRule error: A locNoteRule element must not have both a locNote child element
       and a locNoteRef attribute.</sch:report>
    <!-- Test for termRule -->

       <sch:report
         test="self::its:termRule and @its:termInfoRef and @its:termInfoRefPointer">
       termRule error: A termRule element must not have both a termInfoRef attribute and a
       termInfoRefPointer attribute.</sch:report>
       <sch:report
         test="self::its:termRule and @its:termInfo and @its:termInfoPointer">
       termRule error: A termRule element must not have both a termInfo attribute and a
       termInfoPointer attribute.</sch:report>
       <sch:report
         test="self::its:termRule and @its:termInfoRef and @its:termInfoPointer">
       termRule error: A termRule element must not have both a termInfoRef attribute and a
       termInfoPointer attribute.</sch:report>
    <!-- Test for rubyRule -->

       <sch:report
         test="self::its:rubyRule and child::its:rubyText and @its:rtPointer">
       rubyRule error: A rubyRule element must not have both a rubyText child element and 
       a rtPointer attribute.</sch:report>
    <!-- Test for locNote (local) -->

       <sch:report test="@its:locNote and @its:locNoteRef">
       Local ITS usage error: The locNote attribute and the locNoteRef attribute
       must not be used together.</sch:report>
    <!-- Test for term (local) -->

       <sch:report
         test="@its:termInfoRef and not(its:term) and not(self::its:termRule)">
       Local ITS usage error: A termInfoRef attribute must not appear locally without
       a term attribute.</sch:report>
    <!-- Version attribute test -->

       <sch:report test="/*/@its:version != @its:version">
       The version attribute at the root element and at the rules element
       must not specify different versions of ITS.</sch:report>
      </sch:rule>
     </sch:pattern>
    </sch:schema>

\[Source file: [its-constraints-check-schematron.xml](its-constraints-check-schematron.xml)\]

[<img src="images/topOfPage.gif" title="Go to the table of contents." alt="Go to the table of contents." width="26" height="26" />](#contents)<span id="its-nvdl-schema"></span>F Checking ITS Markup with NVDL (Non-Normative)
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

*This section is informative.*

The following [\[NVDL\]](#nvdl "Namespace-based Validation Dispatching Language (NVDL)") document allows validation of ITS markup which has been added to a host vocabulary. Only ITS elements and attributes are checked. Elements and attributes of host language are ignored during validation against this NVDL document/schema.

<span id="d3e5459">Example 41: NVDL schema for ITS</span>

    <rules xmlns="http://purl.oclc.org/dsdl/nvdl/ns/structure/1.0">
     <namespace ns="http://www.w3.org/2005/11/its">
      <validate schema="its-elements.rng"/>
     </namespace>
     <namespace ns="http://www.w3.org/2005/11/its" match="attributes">
      <validate schema="its-attributes.rng"/>
     </namespace>
     <anyNamespace>
      <allow/>
     </anyNamespace>
    </rules>

\[Source file: [its.nvdl](its.nvdl)\]

The NVDL schema depends on the following two schemas:

-   [RELAX NG schema for ITS elements](its-elements.rng)

-   [RELAX NG schema for ITS attributes](its-attributes.rng)

[<img src="images/topOfPage.gif" title="Go to the table of contents." alt="Go to the table of contents." width="26" height="26" />](#contents)<span id="revisionlog"></span>G Revision Log (Non-Normative)
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

The following log records major changes that have been made to this document between the [publication in November 2005](http://www.w3.org/TR/2005/WD-its-20051122/) and the [publication in February 2006](http://www.w3.org/TR/2006/WD-its-20060222/).

1.  A section about [basic concepts](#basic-concepts) of ITS has been created.

2.  Terminology has been modified: the terms for position of ITS information [in situ versus dislocated](http://www.w3.org/TR/2005/WD-its-20051122/#design-decisions) have been replaced by [selection in an instance document](#selection-local) versus [global, rule-based selection](#selection-global).

3.  The definition of the [Directionality](#directionality) data category has been changed, to be compliant to various other specifications. See the [comment on bidirectionality](http://www.w3.org/Bugs/Public/show_bug.cgi?id=2551) for further information.

4.  Terminology within the text of this document and within the markup declarations has been modified: [scope of ITS information](http://www.w3.org/TR/2005/WD-its-20051122/#scope) has been replaced with [selection of ITS information](#its-processing).

5.  The [schemaRules](http://www.w3.org/TR/2005/WD-its-20051122/#schemaRules) element has been removed. For ITS information as schema annotation, where is now only a`schemaRule` element.

6.  All ITS attributes are now defined as qualified attributes. This leads to changes in the [generated ITS schemas](#its-schemas), for example the generation of parameter entities for prefixes in the XML DTD. This allows for easy changing of prefixes in element or attribute names.

7.  The possibility of selector attributes in instance documents (in the previous draft this was called [scope in an instance document](http://www.w3.org/TR/2005/WD-its-20051122/#scope-instance)) has been removed. [Local selection in an instance document](#selection-local) now relies only on [default selections of data categories](#datacategories-defaults-etc). Due to this change, the definition of [precedence between selections](#selection-precedence) and [conformance criteria](#conformance) have been simplified, and the [issue on namespace requirements and selector values](http://www.w3.org/Bugs/Public/show_bug.cgi?id=2719) could be resolved.

8.  Definitions of [default selections of data categories](#datacategories-defaults-etc) have been modified.

9.  An `ns` element has been added to the <a href="#rules" class="itsmarkup">rules</a> element to allow for specifying namespace bindings.

10. The implementation of the [Ruby](#ruby-annotation) data category has been modified, to reflect the removal of selector attributes in instance documents.

11. A section on [mapping of ITS data categories to existing markup](#associating-its-with-existing-markup) has been created.

12. Examples of integrating ITS markup into a TEI schema and into XML Spec have been created.

13. A <a href="#span" class="itsmarkup">span</a> element has been created.

14. The examples have been modified to reflect changes mentioned above.

15. For clarity, various sections have been reworded and re-structured, and the visualization of ITS markup within the text of this document has been modified.

16. Tracking of issues is now handled via Bugzilla.

17. A revision log has been added.

The following log records major changes that have been made to this document between the [publication in February 2006](http://www.w3.org/TR/2006/WD-its-20060222/) and the [publication in April 2006](http://www.w3.org/TR/2006/WD-its-20060414/).

1.  The `schemaRule` element, and the notion of schema annotation which was connected to it, have been abandoned.

2.  The section on conformance has been rewritten and placed at the beginning of the document.

3.  In global rules, the `documentRule` element has been replaced with elements which have data category specific names. This eases the creation and validation of global rules.

4.  In global rules, instead of rule specific attributes for selection, there is now just one <a href="#att.selector.attribute.selector" class="itsmarkup">selector</a> attribute.

5.  In global rules, the `documentRules` element has been renamed to <a href="#rules" class="itsmarkup">rules</a>.

6.  In global rules, in addition to the existing functionality of [adding](#def-adding-pointing) ITS information to selected nodes, a new functionality of [pointing](#def-adding-pointing) to information in an XML document has been created.

7.  An XLink <a href="#rules.attributes" class="itsmarkup">href</a> attribute has been added to the <a href="#rules" class="itsmarkup">rules</a> element to allow for [links to external rules](#link-external-rules). The [precedence between selections](#selection-precedence) has been modified to reflect this change.

8.  Two new data categories [Language Information](#language-information) and [Elements Within Text](#elements-within-text) have been defined.

9.  The data category [Ruby](#ruby-annotation) has been redefined, to be conforming to [\[Ruby-TR\]](#ruby-tr "Ruby Annotation").

10. The declarations for ITS markup have been rewritten, to adopt the changes mentioned above.

11. The declarations for ITS markup (formally all assembled in a single section) have been separated and placed in the sections there they are described.

12. A modularization of ITS and XHTML 1.0 has been created.

13. The informative <a href="#introduction" class="section-ref">Section 1: Introduction</a> and <a href="#basic-concepts" class="section-ref">Section 2: Basic Concepts</a> have been rewritten.

14. Examples and the modularizations of ITS with existing markup schemes have been changed to reflect the modifications mentioned above.

The following log records major changes that have been made to this document between the [publication in April 2006](http://www.w3.org/TR/2006/WD-its-20060414/) and the [publication in May 2006](http://www.w3.org/TR/2006/WD-its-20060518/).

1.  The [conformance section](#conformance) has been rewritten.

2.  The terminology of mapping ITS data categories with existing markup has been changed to [associating ITS Data Categories with existing markup](#associating-its-with-existing-markup).

3.  The global rule elements have been rewritten to have attributes in the empty namespace.

4.  The examples have been validated, partially modified and extended.

5.  Documentation strings have been added to elements and attributes.

6.  The [Elements Within Text](#elements-within-text) data category has been redefined.

7.  Clarifications about [ITS and inclusion mechanisms](#selection-and-inclusion-mechanisms) and [selections of pointers to external (possibly non-textual) objects](#note-object-selection) have been made.

8.  The [local attributes](#span.attributes) have been reorganized into various data category specific groups.

9.  A [versioning mechanism](#its-version-attribute) has been introduced

10. A [summary of ITS markup](#its-markup-summary) has been created.

11. The automatically generated [ITS schemas](#its-schemas) have been augmented with element and attribute documentations.

12. A description of [ITS markup constraints](#its-schematron-constraints) not covered by the ITS schemas has been created.

13. The attributes [termRef](http://www.w3.org/TR/2006/WD-its-20060414/#att.termRef.attribute.termRef) and [termRefPointer](http://www.w3.org/TR/2006/WD-its-20060414/#att.termRefPointer.attribute.termRefPointer) have been renamed to <a href="#att.local.no-ns.attribute.termInfoRef" class="itsmarkup">termInfoRef</a> and <a href="#termRule.attributes" class="itsmarkup">termInfoRefPointer</a>.

14. A list of requirements which are formulated in [\[ITS REQ\]](#itsreq "Internationalization and
                    Localization Markup Requirements"), but not covered in this document, has been created. See <a href="#introduction" class="section-ref">Section 1: Introduction</a>.

The following log records major changes that have been made to this document between the [publication in May 2006](http://www.w3.org/TR/2006/WD-its-20060518/) and the [publication in November 2006](http://www.w3.org/TR/2006/CR-its-20061102/).

1.  In response to issue 3290 ([Introduction too "positive" and not enough informative](http://www.w3.org/Bugs/Public/show_bug.cgi?id=3290)) <a href="#introduction" class="section-ref">Section 1: Introduction</a> has been modified.

2.  In response to issue 3293 ([Conformance/Compliance](http://www.w3.org/Bugs/Public/show_bug.cgi?id=3293)) <a href="#conformance" class="section-ref">Section 4: Conformance</a> has been changed.

3.  In response to issue 3318 ([Clarify "within text" data category](http://www.w3.org/Bugs/Public/show_bug.cgi?id=3318)) the [definition of the Elements Within Text](#within-text-definition) data category has been clarified and illustrated with examples.

4.  In response to issue 3321 ([Relation of terminology data category to existing standards for terminology](http://www.w3.org/Bugs/Public/show_bug.cgi?id=3321)) the relation has been described in <a href="#terminology-definition" class="section-ref">Section 6.4.1: Definition</a>.

5.  In response to issue 3323 ([Version of XPath: Write "XPath 1.0 or its successor"](http://www.w3.org/Bugs/Public/show_bug.cgi?id=3323)) the reference to [\[XPath 1.0\]](#xpath "XML Path Language (XPath) Version 1.0") has been replaced by a reference to "[\[XPath 1.0\]](#xpath "XML Path Language (XPath) Version 1.0") or its successor".

6.  In response to issue 3330 ([lro and rlo explanation](http://www.w3.org/Bugs/Public/show_bug.cgi?id=3330)) explanations have been modified in <a href="#directionality-definition" class="section-ref">Section 6.5.1: Definition</a>.

7.  In response to issue 3456 ([Attribute used for locInfo](http://www.w3.org/Bugs/Public/show_bug.cgi?id=3456)) a note has been added at the end of <a href="#locNote-implementation" class="section-ref">Section 6.3.2: Implementation</a>.

8.  In response to issue 3457 ([RFC 3066bis](http://www.w3.org/Bugs/Public/show_bug.cgi?id=3457)) the references to "RFC 3066bis" been replaced by a reference to "RFC4646 or its successor".

9.  In response to issue 3458 ([Default translate value](http://www.w3.org/Bugs/Public/show_bug.cgi?id=3458)) default values have been made explicit in <a href="#translatability-implementation" class="section-ref">Section 6.2.2: Implementation</a>.

10. In response to issue 3459 ([Use of elements](http://www.w3.org/Bugs/Public/show_bug.cgi?id=3459)) ITS markup is now explicitly allowed inside other ITS markup.

11. In response to issue 3460 ([Loc Info or Loc Note](http://www.w3.org/Bugs/Public/show_bug.cgi?id=3460)) all attributes and elements starting with `locInfo...` have been renamed `locNote...`.

12. In response to issue 3461 ([Role of termInfo](http://www.w3.org/Bugs/Public/show_bug.cgi?id=3461)) <a href="#terminology-definition" class="section-ref">Section 6.4.1: Definition</a> has been clarified.

13. In response to issue 3462 ([Pointing to terms](http://www.w3.org/Bugs/Public/show_bug.cgi?id=3462)) <a href="#terminology-implementation" class="section-ref">Section 6.4.2: Implementation</a> has been clarified.

14. In response to issue 3463 ([termInfoRef should allow for id strings](http://www.w3.org/Bugs/Public/show_bug.cgi?id=3463)) the <a href="#termRule.attributes" class="itsmarkup">termInfoPointer</a> attribute has been added.

15. In response to issue 3464 ([Allowing for XPath expressions to point to term definitions](http://www.w3.org/Bugs/Public/show_bug.cgi?id=3464)) the <a href="#termRule.attributes" class="itsmarkup">termInfoPointer</a> attribute has been added.

16. In response to issue 3465 ([Default is ltr](http://www.w3.org/Bugs/Public/show_bug.cgi?id=3465)) <a href="#directionality-implementation" class="section-ref">Section 6.5.2: Implementation</a> has been clarified.

17. In response to issue 3466 ([Existing ruby markup](http://www.w3.org/Bugs/Public/show_bug.cgi?id=3466)) <a href="#iri-usage" class="section-ref">Section 3.5: Usage of Internationalized Resource Identifiers in ITS</a> has been added, the [conformance clause 2-2](http://www.w3.org/TR/2006/WD-its-20060518/#its-conformance-2-2) has been removed, the reference to [\[Ruby-TR\]](#ruby-tr "Ruby Annotation") has been clarified and moved to <a href="#ruby-implementation" class="section-ref">Section 6.6.2: Implementation</a>, and the definition of the [Directionality](#directionality) data category has been clarified in <a href="#directionality-definition" class="section-ref">Section 6.5.1: Definition</a>.

18. In response to issue 3467 ([rubyText is an attribute](http://www.w3.org/Bugs/Public/show_bug.cgi?id=3467)) the `rubyText` attribute has been changed to the <a href="#rubyText" class="itsmarkup">rubyText</a> element.

19. In response to issue 3468 ([xml:lang missing](http://www.w3.org/Bugs/Public/show_bug.cgi?id=3468)) a note at the end of <a href="#langinfo-definition" class="section-ref">Section 6.7.1: Definition</a> has been added.

20. In response to issue 3469 ([Example 19 xml:lang](http://www.w3.org/Bugs/Public/show_bug.cgi?id=3469)) the role of `xml:lang` for the [language information](#language-information) data category has been clarified in <a href="#langinfo-definition" class="section-ref">Section 6.7.1: Definition</a>.

21. In response to issue 3473 ([Language information data category overview](http://www.w3.org/Bugs/Public/show_bug.cgi?id=3473)) the role of the <a href="#langRule" class="itsmarkup">langRule</a> element has been clarified in <a href="#langinfo-definition" class="section-ref">Section 6.7.1: Definition</a>.

22. In response to issue 3479 ([Example 33](http://www.w3.org/Bugs/Public/show_bug.cgi?id=3479)) [Example 38](#EX-lang-definition-1) (which was Example 33) has been modified.

23. In response to issue 3480 ([Language information data category overview](http://www.w3.org/Bugs/Public/show_bug.cgi?id=3480)) the role of `xml:lang` for the [language information](#language-information) data category has been clarified in <a href="#langinfo-definition" class="section-ref">Section 6.7.1: Definition</a>.

24. In response to issue 3481 ([Translatability](http://www.w3.org/Bugs/Public/show_bug.cgi?id=3481)) the data category "Translatability" has been renamed to [Translate](#trans-datacat).

25. In response to issue 3482 ([Inheritance of translation information](http://www.w3.org/Bugs/Public/show_bug.cgi?id=3482)) the role of inheritance of translation information within global rules has been made more explicit in <a href="#translatability-implementation" class="section-ref">Section 6.2.2: Implementation</a>.

26. In response to issue 3487 ([Invert translate examples](http://www.w3.org/Bugs/Public/show_bug.cgi?id=3487)) [Example 23](#EX-translate-selector-2) has been modified.

27. In response to issue 3488 ([6.3 ed 1](http://www.w3.org/Bugs/Public/show_bug.cgi?id=3488)) <a href="#locNote-definition" class="section-ref">Section 6.3.1: Definition</a> has been modified.

28. In response to issue 3489 ([Mention translation tools](http://www.w3.org/Bugs/Public/show_bug.cgi?id=3489)) a reference to translation tools has been added in <a href="#locNote-definition" class="section-ref">Section 6.3.1: Definition</a>.

29. In response to issue 3490 ([Examples 22 and 23](http://www.w3.org/Bugs/Public/show_bug.cgi?id=3490)) [Example 24](#EX-locNote-element-1) (which was Example 22) and [Example 25](#EX-locNotePointer-attribute-1) (which was example 23) have been modified.

30. In response to issue 3491 ([Explanations for examples](http://www.w3.org/Bugs/Public/show_bug.cgi?id=3491)) the examples in <a href="#locNote-implementation" class="section-ref">Section 6.3.2: Implementation</a> have been clarified.

31. In response to issue 3492 ([Examples 24](http://www.w3.org/Bugs/Public/show_bug.cgi?id=3492)) [Example 26](#EX-locNoteRef-attribute-1) (which was Example 24) has been modified.

32. In response to issue 3493 ([Marks terms and meanings](http://www.w3.org/Bugs/Public/show_bug.cgi?id=3493)) the purpose of the [terminology](#terminology) data category has been clarified in <a href="#terminology-definition" class="section-ref">Section 6.4.1: Definition</a>.

33. In response to issue 3494 ([termInfoRefPointer referent's data](http://www.w3.org/Bugs/Public/show_bug.cgi?id=3494)) the explanation of the termInfoRefPointer attribute has been clarified in <a href="#terminology-implementation" class="section-ref">Section 6.4.2: Implementation</a>.

34. In response to issue 3495 ([Hard to know what this is about](http://www.w3.org/Bugs/Public/show_bug.cgi?id=3495)) <a href="#elements-within-text" class="section-ref">Section 6.8: Elements Within Text</a> has been clarified.

35. In response to issue 3496 ([Standardized wording](http://www.w3.org/Bugs/Public/show_bug.cgi?id=3496)) all subsections in <a href="#datacategory-description" class="section-ref">Section 6: Description of Data Categories</a> have been reworded to be consistent.

36. In response to issue 3497 ([No implementation section](http://www.w3.org/Bugs/Public/show_bug.cgi?id=3497)) an implementation section (<a href="#langinfo-implementation" class="section-ref">Section 6.7.2: Implementation</a>) has been added for the [language information](#language-information) data category.

37. In response to issue 3498 ([Repetition](http://www.w3.org/Bugs/Public/show_bug.cgi?id=3498)) <a href="#directionality-definition" class="section-ref">Section 6.5.1: Definition</a> has been modified.

38. In response to issue 3499 ([Is dir mandatory?](http://www.w3.org/Bugs/Public/show_bug.cgi?id=3499)) it has been made explicit that the <a href="#att.local.no-ns.attribute.dir" class="itsmarkup">dir</a> attribute is mandatory at the <a href="#dirRule" class="itsmarkup">dirRule</a> element (see <a href="#directionality-implementation" class="section-ref">Section 6.5.2: Implementation</a>).

39. In response to issue 3500 ([Avoid xml:lang='he'](http://www.w3.org/Bugs/Public/show_bug.cgi?id=3500)) <a href="#selection-local" class="section-ref">Section 5.2.2: Local Selection in an XML Document</a> (especially [Example 15](#EX-selection-local-1)) has been modified.

40. In response to issue 3501 ([Some Hebrew quotation](http://www.w3.org/Bugs/Public/show_bug.cgi?id=3501)) <a href="#directionality-implementation" class="section-ref">Section 6.5.2: Implementation</a> has been modified.

41. In response to issue 3502 ([Example 30](http://www.w3.org/Bugs/Public/show_bug.cgi?id=3502)) [Example 33](#EX-dir-selector-1.xml) (which was Example 30) has been modified.

42. In response to issue 3503 ([Refer to bidi article](http://www.w3.org/Bugs/Public/show_bug.cgi?id=3503)) a reference to [\[Bidi Article\]](#bidiarticle "What you need to know about the bidi algorithm and inline markup") in <a href="#directionality-definition" class="section-ref">Section 6.5.1: Definition</a> has been added.

43. In response to issue 3504 ([Example 31 lacks rp](http://www.w3.org/Bugs/Public/show_bug.cgi?id=3504)) [Example 37](#EX-ruby-implementation-1) (which was Example 31) has been modified.

44. In response to issue 3505 ([Use Japanese in Example 31](http://www.w3.org/Bugs/Public/show_bug.cgi?id=3505)) [Example 37](#EX-ruby-implementation-1) (which was Example 31) has been modified.

45. In response to issue 3506 ([Make the application of legacy ruby clearer](http://www.w3.org/Bugs/Public/show_bug.cgi?id=3506)) <a href="#ruby-implementation" class="section-ref">Section 6.6.2: Implementation</a> has been modified.

46. In response to issue 3507 ([In the case of no selection](http://www.w3.org/Bugs/Public/show_bug.cgi?id=3507)) <a href="#ruby-implementation" class="section-ref">Section 6.6.2: Implementation</a> has been modified.

47. In response to issue 3508 ([Example 32 head](http://www.w3.org/Bugs/Public/show_bug.cgi?id=3508)) [Example 36](#EX-ruby-legacy-1) (which was Example 32) has been modified.

48. In response to issue 3509 ([Too many places to look](http://www.w3.org/Bugs/Public/show_bug.cgi?id=3509)) the section [5.1 Summary of ITS Markup](http://www.w3.org/TR/2006/WD-its-20060518/#its-markup-summary) has been changed to <a href="#its-markup-summary" class="section-ref">Appendix C: Summary of ITS Markup</a>, and <a href="#datacategory-description" class="section-ref">Section 6: Description of Data Categories</a> has been reworded.

49. In response to issue 3510 ([Spell out the attributes](http://www.w3.org/Bugs/Public/show_bug.cgi?id=3510)) <a href="#selection-global" class="section-ref">Section 5.2.1: Global, Rule-based Selection</a> has been modified to list relevant attributes.

50. In response to issue 3511 ([Example 14 translate](http://www.w3.org/Bugs/Public/show_bug.cgi?id=3511)) [Example 15](#EX-selection-local-1) (which was Example 14) has been modified.

51. In response to issue 3512 ([Example 14 dir](http://www.w3.org/Bugs/Public/show_bug.cgi?id=3512)) [Example 15](#EX-selection-local-1) (which was Example 14) has been modified.

52. In response to issue 3513 ([ITS markup must be integrated](http://www.w3.org/Bugs/Public/show_bug.cgi?id=3513)) the optionality of ITS markup in the targeted XML file(s) has been made explicit in <a href="#associating-its-with-existing-markup" class="section-ref">Section 5.5: Associating ITS Data Categories with Existing Markup</a>.

53. In response to issue 3514 ([Attributes missing?](http://www.w3.org/Bugs/Public/show_bug.cgi?id=3514)) the attributes that are available for local use have been spelled out in <a href="#its-markup-summary" class="section-ref">Appendix C: Summary of ITS Markup</a>.

54. In response to issue 3515 ([xml:lang = language info, please](http://www.w3.org/Bugs/Public/show_bug.cgi?id=3515)) the role of `xml:lang` has been clarified in <a href="#langinfo-definition" class="section-ref">Section 6.7.1: Definition</a>.

55. In response to issue 3516 ([Editorial comments on ITS](http://www.w3.org/Bugs/Public/show_bug.cgi?id=3516)) <a href="#introduction" class="section-ref">Section 1: Introduction</a>, <a href="#basic-concepts" class="section-ref">Section 2: Basic Concepts</a>, <a href="#notation-terminology" class="section-ref">Section 3: Notation and Terminology</a>, and <a href="#datacategory-description" class="section-ref">Section 6: Description of Data Categories</a> have been modified.

56. In response to issue 3612 ([Missing term="yes|no" in termRule element](http://www.w3.org/Bugs/Public/show_bug.cgi?id=3612)) the value "no" has been reinstated for the <a href="#att.local.no-ns.attribute.term" class="itsmarkup">term</a> attribute.

57. In response to issue 3640 ([Need to handle inheritance for terminology](http://www.w3.org/Bugs/Public/show_bug.cgi?id=3640)) the description of the inheritance / default / overriding behavior of the data categories has been clarified in <a href="#datacategories-defaults-etc" class="section-ref">Section 6.1: Position, Defaults, Inheritance and Overriding of Data Categories</a>.

58. In response to issue 3803 ([Both selector and the rbPointer attributes are base text in rubyRule](http://www.w3.org/Bugs/Public/show_bug.cgi?id=3803)) the `rbPointer` has been removed.

The following log records major changes that have been made to this document between the [publication in November 2006](http://www.w3.org/TR/2006/CR-its-20061102/) and January 2007.

1.  In response to issue 3319 ([Namespace binding mechanism](http://www.w3.org/Bugs/Public/show_bug.cgi?id=3319) ) removed the [ns](http://www.w3.org/TR/2006/CR-its-20061102/#ns) element.

2.  In response to issue 4096 ([Inheritance and overriding needs to be made clearer](http://www.w3.org/Bugs/Public/show_bug.cgi?id=4096)) changed wording.

3.  In response to issue 4098 ([Need to make more explicit: what is possible with XSLT patterns realizing ITS selectors?](http://www.w3.org/Bugs/Public/show_bug.cgi?id=4098)) added a note about the subset of XPath in XSLT to <a href="#basic-concepts-selection-global" class="section-ref">Section 2.1.2: Global Approach</a>.

4.  In response to issue 4099 ([Format for implementation output needs to be clear](http://www.w3.org/Bugs/Public/show_bug.cgi?id=4099)) added note on the [Internationalization Tag Set (ITS) Version 1.0 testsuite](http://www.w3.org/International/its/tests/) processing to <a href="#conformance-product-processing-expectations" class="section-ref">Section 4.2: Conformance Type 2: The Processing Expectations for ITS Markup</a>.

5.  In response to issue 4152 ([Need to make explicit that ITS attributes at its:span are not namespace qualified](http://www.w3.org/Bugs/Public/show_bug.cgi?id=4152)) created two groups of ITS attributes, [namespace qualified](#att.local.with-ns.attributes) and [not namespace qualified](#att.local.no-ns.attributes), the latter used at ITS <a href="#span" class="itsmarkup">span</a>, the former for use at elements not from the ITS namespace.

6.  In response to issue 4289 ([Various mainly editorial changes](http://www.w3.org/Bugs/Public/show_bug.cgi?id=4289)) made the editorial changes described in the issue.

7.  In response to issue 4290 ([Create appendix about NVDL](http://www.w3.org/Bugs/Public/show_bug.cgi?id=4290)) introduced <a href="#its-nvdl-schema" class="section-ref">Appendix F: Checking ITS Markup with NVDL</a>.

8.  In response to issue 4291 ([Have version attribute at its:rules element in no namespace](http://www.w3.org/Bugs/Public/show_bug.cgi?id=4291)) put the ITS [version](#its-version-attribute) attribute at the <a href="#rules" class="itsmarkup">rules</a> element in no namespace.

9.  In response to issue 4293 ([Editorial fix in sec. 6.6.2](http://www.w3.org/Bugs/Public/show_bug.cgi?id=4293)) removed bullet point.

10. In response to issue 4294 ([Add xlink:type to its:rules element](http://www.w3.org/Bugs/Public/show_bug.cgi?id=4294)) added the XLink <a href="#rules.attributes" class="itsmarkup">type</a> attribute to the <a href="#rules" class="itsmarkup">rules</a> element.

11. In response to issue 4295 ([Change of XPath expressions in Schematron example](http://www.w3.org/Bugs/Public/show_bug.cgi?id=4295)) updated <a href="#its-schematron-constraints" class="section-ref">Appendix E: Checking ITS Markup Constraints With Schematron</a>.

12. In response to issue 4322 ([Editors to go to the draft and check that there are no "CSS style elements" or the like](http://www.w3.org/Bugs/Public/show_bug.cgi?id=4322)) removed wording related to CSS style elements.

The following log records major changes that have been made to this document between the [publication in February 2007](http://www.w3.org/TR/2007/PR-its-20070226/) and March 2007.

1.  In response to [comments received during the AC review](http://lists.w3.org/Archives/Member/member-i18n-its/2007JanMar/0138.html) made the following changes: replaced the examples 3 ([EX-ways-to-use-its-1.xml](EX-ways-to-use-its-1.xml)), 4 ([EX-ways-to-use-its-2.xml](EX-ways-to-use-its-2.xml)), 5 ([EX-ways-to-use-its-3.xml](EX-ways-to-use-its-3.xml)), 6 ([EX-ways-to-use-its-4.xml](EX-ways-to-use-its-4.xml)) and 7 ([EX-ways-to-use-its-5.xsd](EX-ways-to-use-its-5.xsd)) with other examples; updated the bibliography.

2.  Fixed various (spelling etc.) errors in examples.

3.  General spell check.

4.  Updated reference for language identification in <a href="#language-information" class="section-ref">Section 6.7: Language Information</a>.

[<img src="images/topOfPage.gif" title="Go to the table of contents." alt="Go to the table of contents." width="26" height="26" />](#contents)<span id="acknowledgements"></span>H Acknowledgements (Non-Normative)
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

This document has been developed with contributions by the ITS Working Group: Damien Donlon (Sun Microsystems, Inc.), Martin Dürst (W3C Invited Expert), Poonam Gupta (Centre for Development of Advanced Computing (CDAC)), Richard Ishida (W3C/ERCIM), Jirka Kosek (W3C Invited Expert), Christian Lieske (SAP AG), Sebastian Rahtz (W3C Invited Expert), Francois Richard (HP), Goutam Saha (Centre for Development of Advanced Computing (CDAC)), Felix Sasaki (W3C/Keio), Yves Savourel (ENLASO Corporation), Diane Stoick (The Boeing Company), Najib Tounsi (Ecole Mohammadia d'Ingenieurs Rabat (EMI)), Andrzej Zydron (W3C Invited Expert).

A special thanks goes to Sebastian Rahtz who introduced us to the ODD language, which was used to create this document, and who provided the stylesheets to generate schemas and the XHTML version out of an ODD document. The generation of XHTML from ODD takes an intermediate step through the xmlspec-i18n.dtd.
