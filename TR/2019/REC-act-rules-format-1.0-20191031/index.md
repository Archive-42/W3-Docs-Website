[<img src="https://www.w3.org/StyleSheets/TR/2016/logos/W3C" alt="W3C" width="72" height="48" />](https://www.w3.org/)

Accessibility Conformance Testing (ACT) Rules Format 1.0
========================================================

<span class="content">W3C Recommendation, 31 October 2019</span>
----------------------------------------------------------------

This version:  
<a href="https://www.w3.org/TR/2019/REC-act-rules-format-1.0-20191031/" class="u-url">https://www.w3.org/TR/2019/REC-act-rules-format-1.0-20191031/</a>

Latest published version:  
<https://www.w3.org/TR/act-rules-format-1.0/>

Highest version of ACT Rules Format:  
<https://www.w3.org/TR/act-rules-format/>

Latest editor's draft:  
<https://w3c.github.io/wcag-act/act-rules-format.html>

Previous published version:  
<https://www.w3.org/TR/2019/PR-act-rules-format-1.0-20190730/>

Editors:  
<span class="p-name fn">Wilco Fiers</span> (<span class="p-org org">Deque Systems</span>)

<span class="p-name fn">Maureen Kraft</span> (<span class="p-org org">IBM Corp.</span>)

<span class="p-name fn">Mary Jo Mueller</span> (<span class="p-org org">IBM Corp.</span>)

<span class="p-name fn">Shadi Abou-Zahra</span> (<span class="p-org org">W3C</span>)

Please check the [**errata**](https://www.w3.org/WAI/GL/task-forces/conformance-testing/errata) for any errors or issues reported since publication.

[Copyright](https://www.w3.org/Consortium/Legal/ipr-notice#Copyright) © 2019 [W3C](https://www.w3.org/)<sup>®</sup> ([MIT](https://www.csail.mit.edu/), [ERCIM](https://www.ercim.eu/), [Keio](https://www.keio.ac.jp/), [Beihang](https://ev.buaa.edu.cn/)). W3C [liability](https://www.w3.org/Consortium/Legal/ipr-notice#Legal_Disclaimer), [trademark](https://www.w3.org/Consortium/Legal/ipr-notice#W3C_Trademarks) and [document use](https://www.w3.org/Consortium/Legal/copyright-documents) rules apply.

------------------------------------------------------------------------

<span class="content">Abstract</span>
-------------------------------------

The Accessibility Conformance Testing (ACT) Rules Format 1.0 defines a format for writing accessibility test rules. These test rules can be used for developing automated testing tools and manual testing methodologies. It provides a common format that allows any party involved in accessibility testing to document and share their testing procedures in a robust and understandable manner. This enables transparency and harmonization of testing methods, including methods implemented by accessibility test tools.

<span class="content">Status of this document</span>
----------------------------------------------------

*This section describes the status of this document at the time of its publication. Other documents may supersede this document. A list of current W3C publications and the latest revision of this technical report can be found in the [W3C technical reports index](https://www.w3.org/TR/) at https://www.w3.org/TR/.*

This document was published by the [Accessibility Guidelines Working Group](https://www.w3.org/WAI/GL/) as a [W3C Recommendation](https://www.w3.org/2019/Process-20190301/#rec-publication). No changes were made since previous publication.

The Working Group requests that public comments be filed as new issues, one issue per discrete comment. Comments received on the ACT Rules Format 1.0 Recommendation cannot result in changes to this version of the specification, but may be addressed in errata or future versions. To comment, please [file an issue in the W3C ACT TF GitHub repository](https://github.com/w3c/wcag-act/issues/new). It is free to create a GitHub account to file issues. If filing issues in GitHub is not feasible, send email to [public-wcag-act-comments@w3.org](mailto:public-wcag-act-comments@w3.org?subject=ACT%20Framework%201.0%20public%20comment) ([comment archive](https://lists.w3.org/Archives/Public/public-wcag-act-comments/)). In-progress updates to the document may be viewed in the [publicly visible editors' draft](https://github.com/w3c/wcag-act/).

This document has been reviewed by W3C Members, by software developers, and by other W3C groups and interested parties, and is endorsed by the Director as a W3C Recommendation. It is a stable document and may be used as reference material or cited from another document. W3C's role in making the Recommendation is to draw attention to the specification and to promote its widespread deployment. This enhances the functionality and interoperability of the Web.

This document was produced by a group operating under the <a href="https://www.w3.org/Consortium/Patent-Policy/" id="sotd_patent" class="css">W3C Patent Policy</a>. W3C maintains a [public list of any patent disclosures](https://www.w3.org/2004/01/pp-impl/35422/status) made in connection with the deliverables of the group; that page also includes instructions for disclosing a patent. An individual who has actual knowledge of a patent which the individual believes contains [Essential Claim(s)](https://www.w3.org/Consortium/Patent-Policy/#def-essential) must disclose the information in accordance with [section 6 of the W3C Patent Policy](https://www.w3.org/Consortium/Patent-Policy/#sec-Disclosure).

This document is governed by the <a href="https://www.w3.org/2019/Process-20190301/" id="w3c_process_revision">1 March 2019 W3C Process Document</a>.

Table of Contents
-----------------

1.  [<span class="secno">1</span> <span class="content">Introduction</span>](#intro)
2.  [<span class="secno">2</span> <span class="content">Scope</span>](#scope)
3.  [<span class="secno">3</span> <span class="content">ACT Rule Types</span>](#rule-types)
4.  [<span class="secno">4</span> <span class="content">ACT Rule Structure</span>](#act-rule-structure)
    1.  [<span class="secno">4.1</span> <span class="content">Rule Identifier</span>](#rule-identifier)
    2.  [<span class="secno">4.2</span> <span class="content">Rule Description</span>](#rule-description)
    3.  [<span class="secno">4.3</span> <span class="content">Rule Type</span>](#rule-type)
    4.  [<span class="secno">4.4</span> <span class="content">Accessibility Requirements Mapping</span>](#accessibility-requirements-mapping)
        1.  [<span class="secno">4.4.1</span> <span class="content">Outcome Mapping</span>](#outcome-mapping)
        2.  [<span class="secno">4.4.2</span> <span class="content">Mapping Outside WCAG</span>](#mapping-outside-wcag)
        3.  [<span class="secno">4.4.3</span> <span class="content">Rules Without Accessibility Requirements</span>](#rules-without-accessibility-requirements)
        4.  [<span class="secno">4.4.4</span> <span class="content">External Accessibility Requirements Mapping</span>](#external-accessibility-requirements-mapping)
    5.  [<span class="secno">4.5</span> <span class="content">Rule Input</span>](#input)
        1.  [<span class="secno">4.5.1</span> <span class="content">Input Aspects (Atomic rules only)</span>](#input-aspects)
        2.  [<span class="secno">4.5.2</span> <span class="content">Input Rules (Composite rules only)</span>](#input-rules)
    6.  [<span class="secno">4.6</span> <span class="content">Applicability</span>](#applicability)
        1.  [<span class="secno">4.6.1</span> <span class="content">Applicability for Atomic Rules</span>](#applicability-atomic)
        2.  [<span class="secno">4.6.2</span> <span class="content">Applicability for Composite Rules</span>](#applicability-composite)
    7.  [<span class="secno">4.7</span> <span class="content">Expectations</span>](#expectations)
        1.  [<span class="secno">4.7.1</span> <span class="content">Expectations for Atomic Rules</span>](#expectations-atomic)
        2.  [<span class="secno">4.7.2</span> <span class="content">Expectations for Composite Rules</span>](#expectations-composite)
    8.  [<span class="secno">4.8</span> <span class="content">Assumptions</span>](#assumptions)
    9.  [<span class="secno">4.9</span> <span class="content">Accessibility Support</span>](#accessibility-support)
    10. [<span class="secno">4.10</span> <span class="content">Test Cases</span>](#test-cases)
    11. [<span class="secno">4.11</span> <span class="content">Change Log</span>](#change-log)
    12. [<span class="secno">4.12</span> <span class="content">Glossary</span>](#glossary)
    13. [<span class="secno">4.13</span> <span class="content">Issues List (optional)</span>](#issues-list)
    14. [<span class="secno">4.14</span> <span class="content">Background (optional)</span>](#background)
    15. [<span class="secno">4.15</span> <span class="content">Acknowledgements (optional)</span>](#acknowledgements)
5.  [<span class="secno">5</span> <span class="content">Rule Accuracy</span>](#rule-accuracy)
6.  [<span class="secno">6</span> <span class="content">Harmonization</span>](#harmonization)
7.  [<span class="secno">7</span> <span class="content">Definitions</span>](#definitions)
8.  [<span class="secno"></span> <span class="content">Appendix 1: Expressing ACT Rule results with JSON-LD and EARL</span>](#appendix-data-example)
9.  [<span class="secno"></span> <span class="content">Appendix 2: Acknowledgments</span>](#Acknowledgments)
    1.  [<span class="secno"></span> <span class="content">Participants of the AG WG active in the development of this document</span>](#participants)
    2.  [<span class="secno"></span> <span class="content">Enabling funders</span>](#enabling-funders)
10. [<span class="secno"></span> <span class="content">Appendix 3: Change History</span>](#Change_History)
11. [<span class="secno"></span> <span class="content"> Conformance</span>](#conformance)
12. [<span class="secno"></span> <span class="content">References</span>](#references)
    1.  [<span class="secno"></span> <span class="content">Normative References</span>](#normative)
    2.  [<span class="secno"></span> <span class="content">Informative References</span>](#informative)

<span class="secno">1. </span><span class="content">Introduction</span><a href="#intro" class="self-link"></a>
--------------------------------------------------------------------------------------------------------------

There are currently many test procedures and tools available which aid their users in testing web content for conformance to accessibility standards such as the [Web Content Accessibility Guidelines](https://www.w3.org/WAI/standards-guidelines/wcag/) [\[WCAG\]](#biblio-wcag). As the Web develops in both size and complexity, these procedures and tools are essential for managing the accessibility of resources available on the Web.

This format is intended to enable a consistent interpretation of how to test conformance to WCAG and other <a href="#accessibility-requirements-document" id="ref-for-accessibility-requirements-document">accessibility requirements documents</a> and promote consistent results in accessibility testing. The rules format is designed to describe both manual accessibility tests, as well as automated tests as performed by accessibility testing tools.

Documenting how to test <a href="#accessibility-requirement" id="ref-for-accessibility-requirement">accessibility requirements</a> will result in accessibility tests that are transparent, with test results that are reproducible. The Accessibility Conformance Testing (ACT) Rules Format defines the requirements for these test descriptions, known as Accessibility Conformance Testing Rules (ACT Rules).

An ACT Rule is a plain language description of how to test a specific type of content for a specific aspect of an accessibility requirement. An ACT Rule describes what kind of content it applies to and which conditions are true about the applicable elements for them to meet all expectations of the rule. In the context of WCAG, ACT Rules test for failures in satisfying Success Criteria. Such failures are often described in [common failures](https://www.w3.org/TR/WCAG21/#wcag-2-layers-of-guidance) documented for WCAG. ACT Rules are written for the testing process and are usually more specific than common failures.

The ACT Rules Format defines the requirements and rule structure for the types of information each rule needs to include to be called an ACT Rule. The structure of the ACT rule is defined in the [ACT Rule Structure](#act-rule-structure) section. Each ACT Rule also contains a plain language description of the type of content under test, the test to perform, and the expected result. Where the test result affects conformance, the rule documents the particular requirement being tested. The resulting outcomes from the test can be used to help determine conformance or non-conformance to the requirement. Test cases are also written as part of the ACT rule to provide a way to verify that implementations of the rule can successfully determine the expected outcomes.

<span class="secno">2. </span><span class="content">Scope</span><a href="#scope" class="self-link"></a>
-------------------------------------------------------------------------------------------------------

The ACT Rules Format defined in this specification is designed for rules that can be used in testing content created using web technologies, such as [Hypertext Markup Language](https://www.w3.org/TR/html/) [\[HTML\]](#biblio-html), [Cascading Style Sheets](https://www.w3.org/TR/CSS/) [\[css-2018\]](#biblio-css-2018), [Accessible Rich Internet Applications](https://www.w3.org/WAI/standards-guidelines/aria/) [\[WAI-ARIA\]](#biblio-wai-aria), [Scalable Vector Graphics](https://www.w3.org/TR/SVG/) [\[SVG2\]](#biblio-svg2), [EPUB 3](http://www.idpf.org/epub3/latest/), and more. The ACT Rules Format is designed to be technology agnostic, meaning that it can conceivably be used to describe test rules for other technologies.

The ACT Rules Format can be used to describe ACT Rules dedicated to testing the <a href="#accessibility-requirement" id="ref-for-accessibility-requirement①">accessibility requirements</a> defined in the Web Content Accessibility Guidelines [\[WCAG\]](#biblio-wcag), which are specifically designed for web content. Other accessibility requirements applicable to web technologies can also be testable with ACT Rules. For example, ACT Rules could be developed to test the conformance of web-based user agents to the [User Agent Accessibility Guidelines](https://www.w3.org/WAI/standards-guidelines/uaag/) [\[UAAG20\]](#biblio-uaag20). The ACT Rules Format might not always be suitable to describe tests for other types of accessibility requirements.

<span class="secno">3. </span><span class="content">ACT Rule Types</span><a href="#rule-types" class="self-link"></a>
---------------------------------------------------------------------------------------------------------------------

In accessibility, there are often different technical solutions to make the same type of content accessible. For example, there are multiple methods for giving an `img` element in HTML an accessible name. Multiple solutions could be tested in a single rule; however, such a rule tends to be quite complex, making it difficult to understand and maintain. The ACT Rules Format solves this by providing two types of rules:

-   Atomic rules describe how to test a specific type of solution. It contains a precise definition of what elements, nodes or other "parts" of a <a href="#test-subject" id="ref-for-test-subject">test subject</a> are to be tested, and when those test targets are considered to pass or fail the rule. These rules are to be kept small and *atomic*. This means that atomic rules test a single "condition" and do so without using the <a href="#outcome" id="ref-for-outcome">outcomes</a> from other rules.

-   Composite rules describe how the <a href="#outcome" id="ref-for-outcome①">outcomes</a> of multiple <a href="#atomic-rules" id="ref-for-atomic-rules">atomic rules</a> can be combined into a single outcome for each <a href="#test-target" id="ref-for-test-target">test target</a>. A composite rule can have multiple "conditions", each of these tested in a separate atomic rule. The logic in the composite rule describes how any one of these satisfying conditions, or some combination of them, is used to determine a single outcome.

Composite rules cannot contain other composite rules. Any time a nested composite rule would be needed, all of the relevant atomic rules can be combined directly into the new composite rule.

<a href="#example-73f36a1c" class="self-link"></a>

Example of using multiple input rules in a composite rule:

> Each HTML `video` element meets all expectations from at least one of the following rules:
>
> -   Video elements have a transcript
> -   Video elements have an audio description
> -   Video elements have a description track

Not all atomic rules have to be part of a composite rule. Composite rules are used when the <a href="#outcome" id="ref-for-outcome②">outcomes</a> of multiple atomic rules need to be combined to determine if a <a href="#test-subject" id="ref-for-test-subject①">test subject</a> does not satisfy an <a href="#accessibility-requirement" id="ref-for-accessibility-requirement②">accessibility requirement</a>.

The separation between atomic rules and composite rules creates a division of responsibilities. Atomic rules test if web content is correctly implemented in a particular solution. Composite rules can test if a combination of <a href="#outcome" id="ref-for-outcome③">outcomes</a> from other atomic rules satisfy the accessibility requirement, in part or as a whole.

<span class="secno">4. </span><span class="content">ACT Rule Structure</span><a href="#act-rule-structure" class="self-link"></a>
---------------------------------------------------------------------------------------------------------------------------------

An ACT Rule *must* consist of at least the following items:

-   Descriptive Title

-   [Rule Identifier](#rule-identifier)

-   [Rule Description](#rule-description)

-   [Rule Type](#rule-type)

-   [Accessibility Requirements Mapping](#accessibility-requirements-mapping)

-   [Rule Input](#input), which is one of the following:

    -   [Input Aspects](#input-aspects) (for atomic rules) OR

    -   [Input Rules](#input-rules) (for composite rules)

-   [Applicability](#applicability)

-   [Expectations](#expectations)

-   [Assumptions](#assumptions)

-   [Accessibility Support](#accessibility-support)

-   [Test Cases](#test-cases)

-   [Change Log](#change-log)

-   [Glossary](#glossary)

An ACT Rule MAY also contain:

-   [Issues List](#issues-list) (optional)

-   [Background](#background) (optional)

-   [Acknowledgements](#acknowledgements) (optional)

The ACT Rules format does not prescribe what format ACT Rules can be written in (e.g. HTML, DOCX, PDF, etc.). However, ACT Rules *must* be written in a document that conforms to the Web Content Accessibility Guidelines [\[WCAG\]](#biblio-wcag) or a comparable accessibility standard. This ensures that ACT Rules are accessible to people with disabilities. ACT Rule [test cases](#test-cases) are allowed to contain inaccessible content. If any test case contains accessibility issues listed in [WCAG 2.1 Section 5.2.5 Non-Interference](https://www.w3.org/TR/WCAG21/#cc5), users *must* be warned of this in advance. In addition to supporting people with disabilities, using an accessible format also makes internationalization of ACT Rules easier.

### <span class="secno">4.1. </span><span class="content">Rule Identifier</span><a href="#rule-identifier" class="self-link"></a>

An ACT Rule *must* have an identifier. This identifier *must* be unique when the rule is part of a ruleset. The identifier can be any text, such as plain text, URL, or a database identifier.

<a href="#example-8adf6793" class="self-link"></a>

Example of identifiers that are also used as filenames; They include a technology directory, followed by a handle that includes an element name or attribute:

> -   html+svg/video-alternative
> -   html+svg/meta-no-refresh
> -   html+svg/unique-id

In addition to the identifier, each new release of an ACT Rule *must* be versioned with either a date or a number. A reference to the previous version of that rule *must* be available. The identifier *must not* be changed when the rule is updated. For substantial changes, a new rule *should* be created with a new identifier, and the old rule *should* be deprecated.

<a href="#example-c6a27e25" class="self-link"></a>

Example situation of updating a rule:

> When updating a rule that is about buttons, to now also be about links, menu items and tabs, the buttons rule is deprecated. As a replacement, a new rule is created that is applicable to all those elements.

### <span class="secno">4.2. </span><span class="content">Rule Description</span><a href="#rule-description" class="self-link"></a>

An ACT Rule *must* have a description that is in plain language which provides a brief explanation of what the rule does.

<a href="#example-5275cb2a" class="self-link"></a>

Example of a rule description:

> This rule checks that the HTML page has a title

### <span class="secno">4.3. </span><span class="content">Rule Type</span><a href="#rule-type" class="self-link"></a>

An ACT Rule *must* have a rule type which is one of the following:

-   Atomic rule
-   Composite rule

Refer to the [Rule Type](#rule-types) section for detailed definitions of the rule types.

### <span class="secno">4.4. </span><span class="content">Accessibility Requirements Mapping</span><a href="#accessibility-requirements-mapping" class="self-link"></a>

When an ACT Rule is designed to test conformance to one or more <a href="#accessibility-requirements-document" id="ref-for-accessibility-requirements-document①">Accessibility requirements documents</a>, the rule *must* list all <a href="#accessibility-requirement" id="ref-for-accessibility-requirement③">accessibility requirements</a> from those documents that are not satisfied when one or more of the <a href="#outcome" id="ref-for-outcome④">outcomes</a> of the rule is `failed`. For example, when designing a rule for WCAG that tests if image buttons have alternative text, the rule maps to success criteria 1.1.1 Non-text content, and 4.1.2 Name, Role, Value. That ACT Rule will list both success criteria in its accessibility requirements mapping.

Each <a href="#accessibility-requirement" id="ref-for-accessibility-requirement④">accessibility requirement</a> in the mapping *must* include the following:

1.  either the name, title, identifier or summary of the accessibility requirement, and

2.  the name of the <a href="#accessibility-requirements-document" id="ref-for-accessibility-requirements-document②">accessibility requirements document</a>, and

3.  a link or reference to the <a href="#accessibility-requirements-document" id="ref-for-accessibility-requirements-document③">accessibility requirements document</a> if one exists, and

4.  the conformance level associated with the accessibility requirement, if one exists.

#### <span class="secno">4.4.1. </span><span class="content">Outcome Mapping</span><a href="#outcome-mapping" class="self-link"></a>

For each accessibility requirement in the mapping, an ACT Rule *must* indicate what the <a href="#outcome" id="ref-for-outcome⑤">outcomes</a> of the rule mean for satisfying that accessibility requirement for that <a href="#test-subject" id="ref-for-test-subject②">test subject</a>. When one or more of the outcomes for a test target is `failed`, the accessibility requirements are not satisfied<a href="#not-satisfied" class="self-link"></a> for the test subject. When all of the outcomes are `passed` or `inapplicable`, the accessibility requirements could be satisfied<a href="#satisfied" class="self-link"></a>, or further testing is needed<a href="#further-testing-is-needed" class="self-link"></a>. Rules that can be used to determine if an accessibility requirement is *satisfied* are called satisfying tests<a href="#satisfying-tests" class="self-link"></a>.

**Note:** In the [Web Content Accessibility Guidelines](https://www.w3.org/WAI/standards-guidelines/wcag/) [\[WCAG\]](#biblio-wcag), success criteria do not evaluate to `passed`, `failed` or `inapplicable`. Rather they can be *satisfied* (or not). (See the [WCAG 2.1 definition: satisfies a success criterion](https://www.w3.org/TR/WCAG21/#dfn-satisfies).) If a success criterion is *not satisfied*, a web page can only conform if there is a conforming alternative version, as described in [WCAG 2.1 Conformance Requirement 1](https://www.w3.org/TR/WCAG21/#cc1).

<a href="#example-cd520eaa" class="self-link"></a>

Example accessibility requirements mapping for a rule that tests if an image button has an accessible name:

> -   [Success criterion 1.1.1: Non-text content](https://www.w3.org/TR/WCAG21/#non-text-content)
>     -   **Required for conformance** to WCAG 2.0 and WCAG 2.1 level A and higher
>     -   Outcome mapping:
>         -   Any `failed` outcomes: not satisfied
>         -   All `passed` outcomes: further testing is needed
>         -   An `inapplicable` outcome: further testing is needed
> -   [Success criterion 4.1.2: Name, Role, Value](https://www.w3.org/TR/WCAG21/#name-role-value)
>     -   **Required for conformance** to WCAG 2.0 and WCAG 2.1 level A and higher
>     -   Outcome mapping:
>         -   Any `failed` outcomes: not satisfied
>         -   All `passed` outcomes: further testing is needed
>         -   An `inapplicable` outcome: further testing is needed

#### <span class="secno">4.4.2. </span><span class="content">Mapping Outside WCAG</span><a href="#mapping-outside-wcag" class="self-link"></a>

ACT Rules can be used to test accessibility requirements that are not part of a W3C accessibility standard, such as accessibility requirements in [Hypertext Markup Language](https://www.w3.org/TR/html/) [\[HTML\]](#biblio-html), or tests in a methodology like [RGAA 3 2016](https://disic.github.io/rgaa_referentiel_en/criteria.html). An ACT Rule *must* indicate whether or not the <a href="#accessibility-requirement" id="ref-for-accessibility-requirement⑤">accessibility requirement</a> it maps to is required for conformance in its <a href="#accessibility-requirements-document" id="ref-for-accessibility-requirements-document④">accessibility requirements document</a>. Examples of accessibility requirements that are not required for conformance are WCAG sufficient techniques, or a company style guide that includes both requirements and optional "best practices". The distinction between what is required and what is optional has to be clear.

<a href="#example-fd451b99" class="self-link"></a>

Example accessibility requirements mapping for a rule that tests that each `img` element has an `alt` attribute:

> -   [Technique H37: Using alt attributes on img elements](https://www.w3.org/TR/WCAG20-TECHS/H37.html)
>     -   **Not required** for conformance to WCAG 2.0 and WCAG 2.1 at any level
>     -   Outcome mapping:
>         -   Any `failed` outcomes: not satisfied
>         -   All `passed` outcomes: satisfied
>         -   An `inapplicable` outcome: satisfied
> -   [RGAA 3, Test 1.1.1: Does each image have a text alternative](https://disic.github.io/rgaa_referentiel_en/criteria.html#test-1-1-1)
>     -   **Required for conformance** to RGAA 3 level A and higher
>     -   Outcome mapping:
>         -   Any `failed` outcomes: not satisfied
>         -   All `passed` outcomes: satisfied
>         -   An `inapplicable` outcome: satisfied

#### <span class="secno">4.4.3. </span><span class="content">Rules Without Accessibility Requirements</span><a href="#rules-without-accessibility-requirements" class="self-link"></a>

If the rule does not map to any <a href="#accessibility-requirement" id="ref-for-accessibility-requirement⑥">accessibility requirement</a>, the accessibility requirement mapping will only contain the explainer that it is not required for conformance to the <a href="#accessibility-requirements-document" id="ref-for-accessibility-requirements-document⑤">accessibility requirements document</a>. This is common with atomic rules used in composite rules.

<a href="#example-707e7231" class="self-link"></a>

Example of a rule that tests if `role=alert` is used to satisfy [WCAG 2.1 success criterion 4.1.3 Status Messages](https://www.w3.org/TR/WCAG21/#status-messages):

> This rule is **not required** for conformance to WCAG 2.1 at any level.

If the `failed` <a href="#outcome" id="ref-for-outcome⑥">outcome</a> cannot be mapped to an <a href="#accessibility-requirement" id="ref-for-accessibility-requirement⑦">accessibility requirement</a>, there *must not* be an accessibility requirement in the accessibility requirements mapping. The optional [Background section](#background) could be used to list <a href="#accessibility-requirements-document" id="ref-for-accessibility-requirements-document⑥">accessibility requirements documents</a> when they are thematically related, but for which the rule is not a failure test.

#### <span class="secno">4.4.4. </span><span class="content">External Accessibility Requirements Mapping</span><a href="#external-accessibility-requirements-mapping" class="self-link"></a>

This section is *non-normative*.

While rules are often designed for one, or possibly a small collection of <a href="#accessibility-requirements-document" id="ref-for-accessibility-requirements-document⑦">accessibility requirements documents</a>, it is likely that other accessibility requirements documents also map to those ACT Rules. For example, rules can be written for the [Web Content Accessibility Guidelines](https://www.w3.org/WAI/standards-guidelines/wcag/) [\[WCAG\]](#biblio-wcag), but many of those could also map to a company’s internal accessibility policy. In such a scenario, an external accessibility requirements mapping could be created. An external accessibility requirements mapping amends the accessibility requirements mapping of an ACT rule by adding mapping to a different accessibility requirements document. An external accessibility requirements mapping avoids duplication of a rule for the sole purpose of changing the mapping.

### <span class="secno">4.5. </span><span class="content">Rule Input</span><a href="#input" class="self-link"></a>

To evaluate content using an ACT Rule, the rule requires some information from the <a href="#test-subject" id="ref-for-test-subject③">test subject</a>. This is the input for the rule. What input is required is made explicit, to help testers understand what capabilities are required to use a rule. <a href="#atomic-rules" id="ref-for-atomic-rules①">Atomic rules</a> and <a href="#composite-rules" id="ref-for-composite-rules">composite rules</a> have different input.

-   Atomic rules have [Input Aspects](#input-aspects)

-   Composite rules have [Input Rules](#input-rules)

#### <span class="secno">4.5.1. </span><span class="content">Input Aspects (Atomic rules only)</span><a href="#input-aspects" class="self-link"></a>

An input aspect is a distinct part of the <a href="#test-subject" id="ref-for-test-subject④">test subject</a>. Rendering a particular piece of content to an end user commonly involves different technologies, some or all of which are required as input for an <a href="#atomic-rules" id="ref-for-atomic-rules②">atomic rule</a>. For example, some rules need to operate directly on the [Hypertext Transfer Protocol](https://tools.ietf.org/html/rfc7230) [\[http11\]](#biblio-http11) messages exchanged between a server and a client, while others need to operate on the [Document Object Model](https://dom.spec.whatwg.org) [\[DOM\]](#biblio-dom) tree exposed by a web browser.

<a href="#atomic-rules" id="ref-for-atomic-rules③">Atomic rules</a> *must* list the aspects used as input for the [applicability](#applicability-atomic) and [expectations](#expectations-atomic) of the atomic rule. Rules can operate on several aspects simultaneously, such as both the HTTP messages and the DOM tree.

Some input aspects are well defined in a formal specification, such as HTTP messages, the DOM tree, and CSS styling [\[css-2018\]](#biblio-css-2018). For these, a reference to the corresponding section in the [Common Input Aspects note](https://www.w3.org/TR/act-rules-aspects/) is sufficient as a description of the aspect. For input aspects that are not well defined, an ACT Rule *must* include either a detailed description of the aspect in question, or a reference to a well defined description.

<a href="#example-43214b40" class="self-link"></a>

Example input aspects for a rule that checks if a transcript is available for videos:

> -   DOM Tree
> -   CSS Styling
> -   Audio output
> -   Visual output

<a href="#example-22444586" class="self-link"></a>

Example input aspects for a rule that checks for use of (language specific) generic link texts like "click here" and "more":

> -   DOM Tree
> -   CSS Styling
> -   Language

The method through which an input aspect is served is not relevant. For example a DOM tree can be served through HTTP as HTML, it can be bundled as several pages in an [EPUB publication](http://www.idpf.org/epub3/latest/), or it can be inferred from a [JSX source file](https://facebook.github.io/jsx/). All rules that have only DOM tree as an input aspect can be applied to those technologies.

#### <span class="secno">4.5.2. </span><span class="content">Input Rules (Composite rules only)</span><a href="#input-rules" class="self-link"></a>

A <a href="#composite-rules" id="ref-for-composite-rules①">composite rule</a> uses <a href="#outcome" id="ref-for-outcome⑦">outcomes</a> from <a href="#atomic-rules" id="ref-for-atomic-rules④">atomic rules</a> and applies logic to them so that a single outcome can be determined for each <a href="#test-target" id="ref-for-test-target①">test target</a>. The [identifier](#rule-identifier) and <a href="#descriptive-title" id="ref-for-descriptive-title">descriptive title</a> of all the atomic rules used in the [expectations](#expectations-composite) *must* be listed in the composite rule. The input rules describe the input for composite rules, similar to how [input aspects](#input-aspects) describe the input for atomic rules.

### <span class="secno">4.6. </span><span class="content">Applicability</span><a href="#applicability" class="self-link"></a>

The applicability describes what parts of the <a href="#test-subject" id="ref-for-test-subject⑤">test subject</a> are tested.

#### <span class="secno">4.6.1. </span><span class="content">Applicability for Atomic Rules</span><a href="#applicability-atomic" class="self-link"></a>

The applicability section is a required part of an <a href="#atomic-rules" id="ref-for-atomic-rules⑤">atomic rule</a>. It *must* contain a precise description of the parts of the <a href="#test-subject" id="ref-for-test-subject⑥">test subject</a> to which the rule applies. For example, specific nodes in the DOM [\[DOM\]](#biblio-dom) tree, or tags that are incorrectly closed in an HTML [\[HTML\]](#biblio-html) document. These are known as the <a href="#test-target" id="ref-for-test-target②">test targets</a>. The applicability *must* only use information made available through the listed [input aspects](#input-aspects) in the rule. No other information can be used in the applicability. Applicability *must* be described objectively, unambiguously and in plain language.

An objective description is one that can be resolved without uncertainty, in a given technology. Examples of objective properties in HTML are tag names, their computed role, the distance between two elements, etc. Subjective properties on the other hand, are concepts like decorative, navigation mechanism and pre-recorded.

Even concepts like headings and images can be misunderstood. These terms could refer to the tag name, the semantic role, or the element’s purpose on the web page because they are ambiguous. The latter of which is almost impossible to define objectively. When used in applicability, potentially ambiguous concepts *must* be defined objectively. Definitions can be put in the rule [glossary](#glossary), or they can be defined in the section where they are used.

<a href="#example-7b01134a" class="self-link"></a>

Example applicability of an atomic rule testing [WCAG 2.1 success criterion 1.4.2 Audio Control](https://www.w3.org/WAI/WCAG21/quickref/#audio-control):

> Each `video` or `audio` element with the `autoplay` attribute, as well as each `object` element that is used for automatically playing video or audio when the web page loads.
>
> Note: A web page is considered "loaded" when the `document.readyState` is set to `complete`.

<a href="#example-5412edb8" class="self-link"></a>

Example applicability of a rule with the page as a test target

> The rule applies to any page where the document element is an `html` element, and the `html` element is rendered in a top-level context (i.e. the `html` element is not embedded in another page, such as through `iframe` or `object` elements).

<a href="#example-2aec263c" class="self-link"></a>

Example applicability of a rule with a DOM attribute as a test target

> The rule applies to any `role` attribute that is specified on an HTML or SVG element.

#### <span class="secno">4.6.2. </span><span class="content">Applicability for Composite Rules</span><a href="#applicability-composite" class="self-link"></a>

The applicability of a composite rule is defined as the union of all applicability definitions from the rules listed in the [input rules](#input-rules). Rule authors *may* omit a description of the applicability for composite rules. This can be useful if it is difficult to express the combined applicability in plain language. If the composite rule includes applicability, it *must* be the union of all the applicability in the [input rules](#input-rules).

Note that input rules in a composite rule *may* have different applicability. Because of this, not every test target applicable within the composite rule is tested by every input rule.

<a href="#example-5ca938b6" class="self-link"></a>

Example of the union of applicability of input rules in a composite rule:

> **Input applicability:**
>
> -   **Input Rule 1:** All `img` element *with* an `alt` attribute
> -   **Input Rule 2:** All `img` element *without* an `alt` attribute
>
> **Combined applicability:**
>
> All `img` elements.

### <span class="secno">4.7. </span><span class="content">Expectations</span><a href="#expectations" class="self-link"></a>

An ACT Rule *must* contain one or more expectations. The expectations describe what the requirements are for the <a href="#test-target" id="ref-for-test-target③">test targets</a> derived from the [applicability](#applicability). An expectation is an assertion about a <a href="#test-target" id="ref-for-test-target④">test target</a>. When a test target meets all expectations, the test target `passed` the rule. If the test target does not meet all expectations, the test target `failed` the rule. If there are no test targets, the <a href="#outcome" id="ref-for-outcome⑧">outcome</a> for the rule is `inapplicable`.

Each expectation *must* be distinct, unambiguous, and be written in plain language.

#### <span class="secno">4.7.1. </span><span class="content">Expectations for Atomic Rules</span><a href="#expectations-atomic" class="self-link"></a>

All expectations of an <a href="#atomic-rules" id="ref-for-atomic-rules⑥">atomic rule</a> *must* describe the logic that is used to determine a single `passed` or `failed` <a href="#outcome" id="ref-for-outcome⑨">outcome</a> for a <a href="#test-target" id="ref-for-test-target⑤">test target</a>. The expectation *must* only use information available in the [input aspects](#input-aspects), from the applicability, and other expectations of the same rule. No other information can be used in the expectation. So for instance, an expectation could be "Expectation 1 is true and ...", but it can’t be "Rule XYZ passed and ...". This ensures that atomic rules are encapsulated.

<a href="#example-6e5a951f" class="self-link"></a>

Example expectations of a rule to test for accessible names of HTML `input` elements:

> 1.  Each HTML `input` element has an accessible name (as described in [Accessible Name and Description: Computation and API Mappings 1.1](https://www.w3.org/TR/accname-aam-1.1/#mapping_additional_nd_te)). [\[accname-aam-1.1\]](#biblio-accname-aam-11)
> 2.  The accessible name describes the purpose of each HTML `input` element.

<a href="#example-3722e455" class="self-link"></a>

Example expectation of a rule to test if a `role` attribute is valid:

> 1.  Each `role` attribute has a value that corresponds to a non-abstract [WAI-ARIA 1.1](https://www.w3.org/TR/wai-aria/) role.

**Note:** Sometimes there is the need for rules with more complex aggregation, for example that X% of all images on a web page are expected to have text alternatives. In this case, the page itself needs to become the test target. The expectation would then be "The test target (the page) has a text alternative for X% of all img elements". The logic for calculating the expectations in such rules is left to the implementations, to avoid over-complexity of this rules format.

#### <span class="secno">4.7.2. </span><span class="content">Expectations for Composite Rules</span><a href="#expectations-composite" class="self-link"></a>

All expectations of a <a href="#composite-rules" id="ref-for-composite-rules②">composite rule</a> *must* describe the logic that is used to determine a single `passed` or `failed` <a href="#outcome" id="ref-for-outcome①⓪">outcome</a> for a <a href="#test-target" id="ref-for-test-target⑥">test target</a>, based on the outcomes of rules in its [input rules](#input-rules). A composite rule expectation *must not* use information from [input aspects](#input-aspects). The outcome for a composite rule is `inapplicable` when all input rules are inapplicable.

<a href="#example-b02f1892" class="self-link"></a>

Example expectations for the composite rule 'video elements have an audio description or media alternative' ([WCAG 2.1 success criterion 1.2.3 Audio Description or Media Alternative](https://www.w3.org/WAI/WCAG21/quickref/#audio-description-or-media-alternative-prerecorded)):

> Each HTML `video` element meets all expectations from at least one of the following rules:
>
> -   video elements have a transcript
> -   video elements have an audio description
> -   video elements have a description track

<a href="#example-b218f8a4" class="self-link"></a>

Example expectations for a composite rule that checks if a mechanism is available to escape a keyboard trap; Either through a standard mechanism, or one for which instructions are available:

> For each focusable element, the outcome of one of the following rules is `passed`:
>
> -   Keyboard trap with standard escape mechanism
> -   Keyboard trap with escape instructions

### <span class="secno">4.8. </span><span class="content">Assumptions</span><a href="#assumptions" class="self-link"></a>

An ACT Rule *must* list any known assumptions, limitations or any exceptions for the evaluation, the test environment, technologies being used or the subject being tested. For example, a rule that would partially test [WCAG 2.1 success criterion 1.4.3 Contrast (Minimum)](https://www.w3.org/WAI/WCAG21/quickref/#contrast-minimum) based on the inspection of CSS properties could state that it is only applicable to HTML text content styleable with CSS, and that the rule does not support images of text.

Sometimes there are multiple plausible ways that an accessibility requirement can be interpreted. For instance, it is not immediately obvious if emoji characters are "text" or "non-text content" in the [Web Content Accessibility Guidelines](https://www.w3.org/WAI/standards-guidelines/wcag/) [\[WCAG\]](#biblio-wcag). Whatever the interpretation is, this *must* be documented in the rule.

While the assumptions *must* be included in the ACT Rule, it *may* be empty when there are no known assumptions, limitations or exceptions.

### <span class="secno">4.9. </span><span class="content">Accessibility Support</span><a href="#accessibility-support" class="self-link"></a>

Content can be designed to rely on the support for particular accessibility features by different assistive technologies and user agents. For example, content using a particular [WAI-ARIA 1.1](https://www.w3.org/TR/wai-aria/) feature relies on that feature to be supported by assistive technologies and user agents. This content would not work for assistive technologies and user agents that do not support WAI-ARIA. See the WCAG definition for [accessibility supported](https://www.w3.org/TR/WCAG21/#dfn-accessibility-supported) use of a web technology.

An ACT Rule *must* include known limitations on accessibility support.

<a href="#example-9e5ab5bd" class="self-link"></a>

Example of a rule that checks if `aria-errormessage` is used to satisfy [WCAG 2.1 success criterion 4.1.3 Status messages](https://www.w3.org/TR/WCAG21/#status-messages):

> The `aria-errormessage` property is known to have limited support with several major screen readers. This method cannot be relied on for support. Alternatives, like using live regions, could serve as fallback. (January 2019)

While an accessibility support section *must* be included in the ACT Rule, it *may* be empty when there are no known accessibility support issues.

**Note:** The Website Accessibility Conformance Evaluation Methodology (WCAG-EM) provides guidance on defining an [accessibility support baseline](https://www.w3.org/TR/WCAG-EM/#step1c) for test scenarios, which can help users of ACT Rules to select the appropriate rules for their own circumstance.

### <span class="secno">4.10. </span><span class="content">Test Cases</span><a href="#test-cases" class="self-link"></a>

Test cases are (snippets of) content that can be used to validate the implementation of ACT Rules. Each rule *must* have one or more test cases for `passed`, `failed`, and `inapplicable` <a href="#outcome" id="ref-for-outcome①①">outcomes</a>. A test case consists of two pieces of data, a snippet of each [input aspect](#input-aspects) for a rule, and the expected outcome for that rule. Test cases serve two functions, firstly as example scenarios for readers to understand when the outcome of a rule is `passed`, `failed`, or `inapplicable`. It also serves developers and users of accessibility testing tools and methodologies to validate that a rule is correctly implemented.

<a href="#example-09b9695b" class="self-link"></a>

Example of HTML test cases for a rule that checks if `img` elements have a text alternative:

> Example of a `passed` outcome:
>
>     <img alt="W3C Logo" src="image/w3c.png">
>
> Example of a `failed` outcome:
>
>     <img src="image/w3c.png">
>
> Example of an `inapplicable` outcome:
>
>     <input type="image" alt="W3C Logo" src="image/w3c.png">

### <span class="secno">4.11. </span><span class="content">Change Log</span><a href="#change-log" class="self-link"></a>

It is important to keep track of changes to the ACT Rules so that users of the rules can understand if changes in test results are due to changes in the rules used when performing the tests, or from changes in the content itself. All changes to an ACT Rule that can change the <a href="#outcome" id="ref-for-outcome①②">outcomes</a> of an evaluation *must* be recorded in a change log. The change log can either be part of the rule document itself or be referenced from it.

### <span class="secno">4.12. </span><span class="content">Glossary</span><a href="#glossary" class="self-link"></a>

ACT Rules *must* have a glossary section. The glossary *must* contain the <a href="#outcome" id="ref-for-outcome①③">outcome</a> definition, as well as any definitions used in [applicability](#applicability) and [expectations](#expectations) sections in the rule. Since changes to the definition change the rule, those definitions cannot be maintained independently of the rule. If a shared glossary is used for rules, any definition changes *must* be included in the [change log](#change-log) of all rules that use that definition.

### <span class="secno">4.13. </span><span class="content">Issues List (optional)</span><a href="#issues-list" class="self-link"></a>

An ACT Rule *may* include a list or a reference to a list of any known issues. The issues list would be used to record cases where an <a href="#outcome" id="ref-for-outcome①④">outcome</a> of an ACT Rule was `failed` where it ought to have been `passed` or `inapplicable`, or vice versa. There are several reasons why this might occur. See [rule accuracy](#rule-accuracy) for more information.

The issues list serves two purposes. For users of ACT Rules, the issues list gives insight into why an inaccurate result occurred, as well as provide confidence in the result of that rule. For the designer of the rule, the issues list is also useful to plan future updates to the rule. In a new version of the rule, resolved issues would be moved to the change log.

### <span class="secno">4.14. </span><span class="content">Background (optional)</span><a href="#background" class="self-link"></a>

An ACT Rule *may* contain information about the background for the development of the rule, or references to relevant reading. The background information is optional, but whenever it is included in the rule, the relationship to the relevant reading can be specified. Examples of relevant background references for a rule for a [Web Content Accessibility Guidelines](https://www.w3.org/WAI/standards-guidelines/wcag/) [\[WCAG\]](#biblio-wcag) success criterion could be [WCAG 2.1 Understanding documents](https://www.w3.org/WAI/WCAG21/Understanding/), [WCAG 2.1 Techniques](https://www.w3.org/WAI/WCAG21/Techniques/), or [WAI-ARIA 1.1](https://www.w3.org/TR/wai-aria/), CSS [\[css-2018\]](#biblio-css-2018), or HTML [\[HTML\]](#biblio-html) specifications.

### <span class="secno">4.15. </span><span class="content">Acknowledgements (optional)</span><a href="#acknowledgements" class="self-link"></a>

An ACT Rule *may* contain acknowledgements. This can include, but is not limited to:

-   List of rule authors

-   List of rule reviewers/contributors

-   Funding or other support

<span class="secno">5. </span><span class="content">Rule Accuracy</span><a href="#rule-accuracy" class="self-link"></a>
-----------------------------------------------------------------------------------------------------------------------

This section is *non-normative*.

While [test cases](#test-cases) can be used to determine if an ACT Rule was correctly implemented, they do not guarantee that implementations will never produce incorrect results. When writing ACT Rules, it is almost inevitable that edge cases will be overlooked. Technologies are always evolving, and content authors are constantly coming up with new and unexpected ways to use them. Some examples of causes for inaccuracy are:

-   [Assumptions](#assumptions) were made about the test subject that turned out to be untrue

-   Technologies were used in an unusual and difficult to predict manner

-   Technologies have changes, or aspects of the technologies were overlooked

-   The accessibility requirement was not correctly interpreted

There are two types of inaccuracies that can produce incorrect results. Inaccuracies in the **implementation** can be addressed with test cases, but inaccuracies in the **ACT Rule itself** cannot. After all, rule inaccuracies come from the rule author being unaware of a particular edge case.

When a test result incorrectly indicates non-conformance to an accessibility requirement, this is known as a false positive. Opposite, when a rule incorrectly indicates conformance, this is a false negative. A percentage of false positives and false negatives can be calculated by comparing it to results from an accessibility audit:

-   **False positives:** This is the percentage of <a href="#test-target" id="ref-for-test-target⑦">test targets</a>, that were `failed` by the rule, but satisfy the <a href="#accessibility-requirement" id="ref-for-accessibility-requirement⑧">accessibility requirements</a>.

-   **False negatives:** This is the percentage of <a href="#test-target" id="ref-for-test-target⑧">test targets</a>, that were `passed` by the rule, but do not satisfy the <a href="#accessibility-requirement" id="ref-for-accessibility-requirement⑨">accessibility requirements</a>.

The ever present possibility of false positives and false negatives with ACT Rules means they will likely require ongoing maintenance. Designing a process for maintaining ACT Rules is outside the scope of the ACT Rules Format, which is limited to the rules themselves. Nevertheless, it is suggested that rule authors work out a process for maintaining their rules.

<span class="secno">6. </span><span class="content">Harmonization</span><a href="#harmonization" class="self-link"></a>
-----------------------------------------------------------------------------------------------------------------------

This section is *non-normative*.

While the ACT Rules Format is designed to stimulate harmonization, there are no direct requirement in the ACT Rules Format that prevent a rule author from writing rules inconsistent with already established ACT Rules. Neither are there requirements for ACT Rules to have a certain number of implementations, or to have a certain level of accuracy. This allows quality requirements to be different for different rulesets, and allows them to develop over time.

Harmonization occurs when a group of rule implementors collectively accept the validity of an ACT Rule. For example, a community group of accessibility testing tool vendors could declare they have harmonized on a particular set of ACT Rules. Such a group can set acceptance criteria for rules, and have quality requirements that go beyond the ACT Rules Format.

<a href="#example-65a5c06a" class="self-link"></a>

Example of acceptance criteria for a group working on EPUB rules:

> -   An ACT EPUB Rule is harmonized when it is approved by members of 3 organizations, AND
> -   An ACT EPUB Rule is harmonized when it has 2 independent implementations

An example of such a process is the [WCAG ACT Review Process](https://w3c.github.io/wcag-act-rules/review-process.html).

<span class="secno">7. </span><span class="content">Definitions</span><a href="#definitions" class="self-link"></a>
-------------------------------------------------------------------------------------------------------------------

Accessibility requirement  
  
  
A requirement is a condition that has to be satisfied in order to conform to a standard, or to comply with a contract, policy or regulation. An accessibility requirement is a requirement aimed at improving access for people with disabilities to an ICT product.

A common example of accessibility requirements are the WCAG success criteria. There are other standards, including W3C standards, that have recommendations for accessibility, such as WAI-ARIA and HTML. Accessibility requirements are also often found in company policies, regional standards or in legislation.

Accessibility requirements document  
  
  
A document, such as a standard, contract, policy or regulation, that includes <a href="#accessibility-requirement" id="ref-for-accessibility-requirement①⓪">accessibility requirements</a>. For example, WCAG 2.1, WAI-ARIA 1.1, HTML 5.2, EPUB Accessibility 1.0, BBC HTML Accessibility Standards v2.0

Outcome   
A conclusion that comes from evaluating an ACT Rule on a <a href="#test-subject" id="ref-for-test-subject⑦">test subject</a> or one of its constituent <a href="#test-target" id="ref-for-test-target⑨">test target</a>. An outcome can be one of the three following types:

-   **Inapplicable:** No part of the test subject matches the applicability
-   **Passed:** A <a href="#test-target" id="ref-for-test-target①⓪">test target</a> meets all expectations
-   **Failed:** A <a href="#test-target" id="ref-for-test-target①①">test target</a> does not meet all expectations

**Note:** A rule has one `passed` or `failed` outcome for every <a href="#test-target" id="ref-for-test-target①②">test target</a>. When there are no test targets the rule has one `inapplicable` outcome. This means that each <a href="#test-subject" id="ref-for-test-subject⑧">test subject</a> will have one or more outcomes.

**Note:** Implementers using the [\[EARL10-Schema\]](#biblio-earl10-schema) can express the outcome with the [outcome property](https://www.w3.org/TR/EARL10-Schema/#outcome). In addition to `passed`, `failed` and `inapplicable`, EARL 1.0 also defined an `incomplete` outcome. While this cannot be the outcome of an ACT Rule when applied in its entirety, it often happens that rules are only partially evaluated. For example, when applicability was automated, but the expectations have to be evaluated manually. Such "interim" results can be expressed with the `incomplete` outcome.

Test Subject   
A resource or collection of resources that can be evaluated by an ACT Rule.

<a href="#example-42b1dee1" class="self-link"></a>

Example of test subjects:

> -   An HTML page, including all embedded scripts, style and images
> -   An EPUB publication
> -   A web component file

**Note:** Implementers using the [\[EARL10-Schema\]](#biblio-earl10-schema) can express the test subject with the [subject property](https://www.w3.org/TR/EARL10-Schema/#subject)

Test Target   
A distinct part of the <a href="#test-subject" id="ref-for-test-subject⑨">test subject</a>, as defined by the [applicability](#applicability).

<a href="#example-cd7029f9" class="self-link"></a>

Example of test targets:

> -   Nodes within an HTML page
> -   A period of time within a video
> -   A range of characters within a text document

**Note:** Implementers using the [\[EARL10-Schema\]](#biblio-earl10-schema) can express the test target with the [pointer property](https://www.w3.org/TR/EARL10-Schema/#pointer)

<span class="content">Appendix 1: Expressing ACT Rule results with JSON-LD and EARL</span><a href="#appendix-data-example" class="self-link"></a>
-------------------------------------------------------------------------------------------------------------------------------------------------

This section is *non-normative*.

This section provides examples of expressing results from carrying out ACT Rules using EARL and JSON-LD (See [Evaluation and Report Language](https://www.w3.org/WAI/standards-guidelines/earl/) and [A JSON-based Serialization for Linked Data (JSON-LD)](https://www.w3.org/TR/json-ld/)). More examples and background is proivided on the [JSON-LD serialization of EARL](https://github.com/w3c/earl) GitHub repository.

Examples in this section include:

-   Example 1: Minimal outcome from one <span class="property">Assertion</span>

-   Example 2: Results from more than one <span class="property">Assertion</span>

-   Example 3: Aggregating based on <span class="property">Requirement</span>

-   Example 4: Aggregating based on 'Test Subject'

-   Example 5: Assumed <span class="property">Context</span> for this section

**Example 1:** Minimal outcome for one <span class="property">Assertion</span>

    {
        "@context": "context.json",
        "@type": "Assertion",
        "assertedBy": "https://example.org/MyTool",
        "subject": "https://example.org/page1.html",
        "test": "ACT-CG:rules/23a2a8",
        "result": {
            "outcome": "earl:failed",
            "pointer": "html > body > h1:first-child"
        }
    }

**Example 2:** Results for more than one <span class="property">Assertion</span>

    {
        "@context": "context.json",
        "@graph": [{
            "@type": "Assertion",
            "assertedBy": "https://example.org/MyTool",
            "subject": "https://example.org/page1.html",
            "test": "ACT-CG:rules/23a2a8",
            "result": {
                "outcome": "earl:failed",
                "pointer": "html > body > h1:first-child"
            }
        }, {
            "@type": "Assertion",
            "assertedBy": "https://example.org/AnotherTool",
            "subject": "https://example.org/page1.html",
            "test": "ACT-CG:rules/23a2a8",
            "result": {
                "outcome": "earl:passed",
                "pointer": "html > body > h1:nth-child(2)"
            }
        }]
    }

**Example 3:** Aggregating based on <span class="property">Requirement</span> (eg. WCAG Success Criteria)

    {
        "@context": "context.json",
        "@type": "Assertion",
        "assertedBy": "https://example.org/MyTool",
        "subject": "https://example.org/page1.html",
        "test": {
            "@type": "earl:TestRequirement",
            "@id": "WCAG21:non-text-content"
        },
        "result": {
            "outcome": "earl:failed",
            "source": [{
                "test": "ACT-CG:rules/23a2a8",
                "result": {
                    "outcome": "earl:failed",
                    "pointer": "html > body > h1:first-child"
                }
            }, {
                "test": "ACT-RULES-CG:rules/23a2a8",
                "result" : {
                    "outcome": "earl:passed",
                    "pointer": "html > body > h1:nth-child(2)"
                }
            }]
        }
    }

**Example 4:** Aggregating based on 'Test Subject' (eg. for a website)

    {
        "@context": "context.json",
        "@type": "Assertion",
        "assertedBy": {
            "@type": "Organization",
            "@id": "_:myOrg",
            "title": "My Organization",
            "description" : "Accessibility testing service",
            "homepage" : "http://example.org/myOrg/"
        },
        "subject": {
            "@type": ["WebSite", "TestSubject"],
            "@id": "https://example.org/"
        },
        "test": {
            "@type": "earl:TestRequirement",
            "@id": "http://www.w3.org/WAI/WCAG2A-Conformance"
        },
        "result": {
            "outcome": "earl:failed",
            "source": [{
                "test": {
                    "@type": "earl:TestRequirement",
                    "@id": "WCAG21:non-text-content"
                },
                "result": {
                    "outcome": "earl:failed",
                    "source": [ … ]
                }
            }, {
                "test": {
                    "@type": "earl:TestRequirement",
                    "@id": "WCAG21:audio-only-and-video-only-prerecorded"
                },
                "result": {
                    "outcome": "earl:passed",
                    "source": [ … ]
                }
            }, {
                "test": {
                    "@type": "earl:TestRequirement",
                    "@id": "WCAG21:captions-prerecorded"
                },
                "result" : {
                    "outcome": "earl:passed",
                    "source": [ … ]
                }
            }, … ]
        }
    }

**Example 5:** Assumed <span class="property">Context</span> for this section

    {
        "@vocab": "http://www.w3.org/ns/earl#",

        "cnt": "http://www.w3.org/2011/content#",
        "dct": "http://purl.org/dc/terms/",
        "earl": "http://www.w3.org/ns/earl#",
        "foaf": "http://xmlns.com/foaf/0.1/",
        "htp": "http://www.w3.org/2011/http#",
        "ptr": "https://www.w3.org/2009/pointers#",
        "schema": "http://schema.org/",
        "xsd": "https://www.w3.org/2001/XMLSchema#",

        "WCAG20": "https://www.w3.org/TR/WCAG20#",
        "WCAG21": "https://www.w3.org/TR/WCAG21#",
        "ACT-RULES-CG": "https://act-rules.github.io/",

        "WebSite": "schema:WebSite",
        "WebPage": "schema:WebPage",

        "title": "dct:title",
        "description": "dct:description",
        "date": "dct:date",
        "hasVersion": "dct:hasVesion", 
        "isPartOf": "dct:isPartOf", 
        "hasPart": "dct:hasPart",
        "source": "dct:source",

        "Agent": "foaf:Agent",
        "Person": "foaf:Person",
        "Organization": "foaf:Organization",
        "Group": "foaf:Group",
        "Document": "foaf:Document",
        "name": "foaf:name",
        "firstName": "foaf:firstName",
        "surname": "foaf:surname",
        "mbox": "foaf:mbox",
        "mbox_sha1sum": "foaf:mbox_sha1sum",
        "member": "foaf:member",
        "homepage": "foaf:homepage",

        "assertedBy": { "@type": "@id" },
        "subject": { "@type": "@id" },
        "test": { "@type": "@id" },
        "mode": { "@type": "@id" },
        "outcome": { "@type": "@id" },
        "pointer": {
            "@id": "earl:pointer",
            "@type": "ptr:CSSSelectorPointer"
        }
    }

<span class="content">Appendix 2: Acknowledgments</span><a href="#Acknowledgments" class="self-link"></a>
---------------------------------------------------------------------------------------------------------

This section is *non-normative*.

### <span class="content">Participants of the AG WG active in the development of this document</span><a href="#participants" class="self-link"></a>

Shadi Abou-Zahra, Trevor Bostic, Romain Deltour, Kathy Eng, Wilco Fiers, Alistair Garrison, Kasper Isager, Maureen Kraft, Mary Jo Mueller, Jey Nandakumar, Charu Pandhi, Stein Erik Skotkjerra, Anne Thyme Nørregaard, Kathleen Wahlbin

### <span class="content">Enabling funders</span><a href="#enabling-funders" class="self-link"></a>

This publication has been developed with support from the [WAI-Tools Project](https://www.w3.org/WAI/about/projects/wai-tools/), co-funded by the European Commission (EC) under the Horizon 2020 Program (Grant Agreement 780057). The content of this publication does not necessarily reflect the views or policies of the European Commission (EC) or any of the European Union (EU) Member States.

<span class="content">Appendix 3: Change History</span><a href="#Change_History" class="self-link"></a>
-------------------------------------------------------------------------------------------------------

This section is *non-normative*.

No changes have been made since the previous [Proposed Recommendation draft of 30 July 2019](https://www.w3.org/TR/2019/PR-act-rules-format-1.0-20190730/).

<span class="content"> Conformance</span><a href="#conformance" class="self-link"></a>
--------------------------------------------------------------------------------------

Conformance requirements are expressed with a combination of descriptive assertions and RFC 2119 terminology. The key words “MUST”, “MUST NOT”, “REQUIRED”, “SHALL”, “SHALL NOT”, “SHOULD”, “SHOULD NOT”, “RECOMMENDED”, “MAY”, and “OPTIONAL” in the normative parts of this document are to be interpreted as described in RFC 2119. However, for readability, these words do not appear in all uppercase letters in this specification.

All of the text of this specification is normative except sections explicitly marked as non-normative, examples, and notes. [\[RFC2119\]](#biblio-rfc2119)

Examples in this specification are introduced with the words “for example” or are set apart from the normative text with `class="example"`, like this:

<a href="#example-example" class="self-link"></a> This is an example of an informative example.

Informative notes begin with the word “Note” and are set apart from the normative text with `class="note"`, like this:

Note, this is an informative note.

<span class="content">References</span><a href="#references" class="self-link"></a>
-----------------------------------------------------------------------------------

### <span class="content">Normative References</span><a href="#normative" class="self-link"></a>

\[RFC2119\]   
S. Bradner. [Key words for use in RFCs to Indicate Requirement Levels](https://tools.ietf.org/html/rfc2119). March 1997. Best Current Practice. URL: <https://tools.ietf.org/html/rfc2119>

### <span class="content">Informative References</span><a href="#informative" class="self-link"></a>

\[ACCNAME-1.1\]   
Joanmarie Diggs; Bryan Garaventa; Michael Cooper. [Accessible Name and Description Computation 1.1](https://www.w3.org/TR/accname-1.1/). 18 December 2018. REC. URL: <https://www.w3.org/TR/accname-1.1/>

\[CSS-2018\]   
Tab Atkins Jr.; Elika Etemad; Florian Rivoal. [CSS Snapshot 2018](https://www.w3.org/TR/css-2018/). 22 January 2019. NOTE. URL: <https://www.w3.org/TR/css-2018/>

\[DOM\]   
Anne van Kesteren. [DOM Standard](https://dom.spec.whatwg.org/). Living Standard. URL: <https://dom.spec.whatwg.org/>

\[EARL10-Schema\]   
Shadi Abou-Zahra. [Evaluation and Report Language (EARL) 1.0 Schema](https://www.w3.org/TR/EARL10-Schema/). 2 February 2017. NOTE. URL: <https://www.w3.org/TR/EARL10-Schema/>

\[HTML\]   
Anne van Kesteren; et al. [HTML Standard](https://html.spec.whatwg.org/multipage/). Living Standard. URL: <https://html.spec.whatwg.org/multipage/>

\[HTTP11\]   
R. Fielding, Ed.; J. Reschke, Ed.. [Hypertext Transfer Protocol (HTTP/1.1): Message Syntax and Routing](https://tools.ietf.org/html/rfc7230). June 2014. Proposed Standard. URL: <https://tools.ietf.org/html/rfc7230>

\[SVG2\]   
Amelia Bellamy-Royds; et al. [Scalable Vector Graphics (SVG) 2](https://www.w3.org/TR/SVG2/). 4 October 2018. CR. URL: <https://www.w3.org/TR/SVG2/>

\[UAAG20\]   
James Allan; et al. [User Agent Accessibility Guidelines (UAAG) 2.0](https://www.w3.org/TR/UAAG20/). 15 December 2015. NOTE. URL: <https://www.w3.org/TR/UAAG20/>

\[WAI-ARIA\]   
Joanmarie Doggs; et al. [Accessible Rich Internet Applications (WAI-ARIA) 1.1](https://www.w3.org/TR/wai-aria/). 14 December 2018. REC. URL: <https://www.w3.org/TR/wai-aria/>

\[WCAG\]   
Andrew Kirckpatrick; et al. [Web Content Accessibility Guidelines 2.1](https://www.w3.org/TR/WCAG/). 5 June 2018. REC. URL: <https://www.w3.org/TR/WCAG/>

[↑](#toc)
