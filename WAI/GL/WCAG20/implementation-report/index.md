-   [![](/Icons/downinpage.png) Skip to content](#main)
-   [| Change text size or colors](/WAI/changedesign.html)

[<img src="/Icons/w3c_home" alt="W3C logo" width="72" height="48" />](http://www.w3.org/ "W3C Home")[<img src="/WAI/images/wai-temp" alt="Web Accessibility Initiative (WAI) logo" height="48" />](http://www.w3.org/WAI/ "WAI Home")

WAI: Strategies, guidelines, resources to make the Web accessible to people with disabilities

**Site Navigation: [W3C Home](http://www.w3.org/) &gt; [WAI Home](http://www.w3.org/WAI/) &gt; [WCAG Overview](/WAI/intro/wcag)**

Note: This resource was created to support the transition of WCAG 2.0 to Proposed Recommendation. WCAG 2.0 is now a W3C Recommendation. The materials here remain for archival purposes, but the information may not be applicable to the current version of WCAG 2.0. In particular, accessibility support information was documented in November 2008 and is expected to be superceded soon thereafter. For updated information on WCAG, see the [Web Content Accessibility Guidelines (WCAG) Overview](/WAI/intro/wcag).

WCAG 2.0 Implementation Report
==============================

On this page
------------

-   [Candidate Recommendation Exit Criteria](#exitcriteria)
-   [Documentation that the Exit Criteria have been met](#documentation)
-   [General Conclusions](#conclusions)
-   [Changes made to WCAG 2.0 based on implementation experience](#changes)
-   [Process used to satisfy the exit criteria](#process)
-   [Contributors](#contributors)

[WCAG 2.0 was published as a Candidate Recommendation](http://www.w3.org/TR/2008/CR-WCAG20-20080430/) on 30 April 2008. To exit the [Candidate Recommendation](http://www.w3.org/2004/02/Process-20040205/tr.html#RecsCR) stage, the WCAG Working Group must demonstrate the implementability of WCAG 2.0 by collecting at least two interoperable implementations. This page and associated resources document how this requirement has been satisfied.

Because WCAG 2.0 is a set of guidelines, rather than a technology specification, it is necessary to define how it relates to the Candidate Recommendation process. Although many types of authoring and evaluation tools might help authors implement the success criteria, and user agents play a role in ensuring benefit to the end user, WCAG 2.0 is ultimately a set of authoring guidelines. Therefore an implementation is defined as a unit of authored content - a Web page or site that conforms to WCAG 2.0.

The primary unit of normative requirements in WCAG 2.0 is the success criterion. Success criteria are satisfied by being actively met via one or more sufficient techniques, or by being not applicable to the content. WCAG 2.0 has provided sufficient techniques to meet each success criteria. Authors may also use other techniques as long as they meet the success criteria.

Conformance to WCAG 2.0 is defined in the [Conformance](http://www.w3.org/TR/2008/CR-WCAG20-20080430/#conformance) section of the document. This defines three conformance levels, each of which requires that the success criteria for that level as well as for the lower levels be met. Conformance claims are only valid when accessibility support exists, meaning satisfying the success criteria is likely to result in real benefit to end users. For sites in which the author does not control all the content that appears in the site, such as portals and blogs, it is possible to include a Statement of Partial Conformance. To make a statement of partial conformance, authors must ensure that all the content they *do* control meets all the requirements.

Candidate Recommendation Exit Criteria
--------------------------------------

In order to be clear about how these aspects of conformance relate to this authoring-oriented specification, the implementation requirements to exit Candidate Recommendation were included as part of the Candidate Recommendation itself. In addition to the requirements set out in [Requirements for WCAG 2.0](http://www.w3.org/TR/wcag2-req/), the requirements to advance to Proposed Recommendation were described in the [Exit Criteria](http://www.w3.org/TR/2008/CR-WCAG20-20080430/#status_exit) section of the document. These requirements were:

1.  At least 10 conforming Web sites <sup>[1](http://www.w3.org/TR/2008/CR-WCAG20-20080430/#statusnote1)</sup> are available, of which
    -   At least four conform at level A,
    -   At least four conform at level AA,
    -   At least two conform at level AAA;
2.  At least one Web site is available which makes a Statement of Partial Conformance;
3.  At least two implementations <sup>[2](http://www.w3.org/TR/2008/CR-WCAG20-20080430/#statusnote2)</sup> exist for each success criterion;
4.  Accessibility support documentation <sup>[3](http://www.w3.org/TR/2008/CR-WCAG20-20080430/#statusnote3)</sup> is available for at least two technologies with at least four platforms (operating system/user agent/assistive technology combinations);
5.  All sufficient techniques listed in [Understanding WCAG 2.0](http://www.w3.org/WAI/GL/WCAG20/WD-UNDERSTANDING-WCAG20/) at the end of the Candidate Recommendation period contain test procedures;
6.  The Working Group has responded formally to all issues raised against this document related to any implementation efforts during the Candidate Recommendation period.

\[1\] The conforming Web sites should be distinct and independently developed, represent diverse types of content including Content Management System (CMS)-generated content, utilize diverse Web technologies including W3C and non-W3C technologies, and have a varied representation of primary languages and scripts. Web applications can be a single Web page; otherwise conformance claims for Web sites should contain a minimum of 5 Web pages. Some success criteria may be satisfied in the conforming Web sites by the absence of applicable content on the Web pages, but Web sites should exhibit positive implementations of a significant number of success criteria at the corresponding level of conformance.

\[2\] The implementations of success criteria need not be within the conforming Web sites. Note that these implementations must contain content of the type addressed by the individual success criterion, that is, they cannot satisfy the success criteria purely by the absence of applicable content on the Web pages.

\[3\] In the absence of documentation of accessibility-supported technologies, conforming sites may show evidence by testing with assistive technologies.

Documentation that the Exit Criteria have been met
--------------------------------------------------

The WCAG Working Group offers the following as evidence that the above requirements have been met. Details about how this information was collected is described in separate sections of this report.

-   Documentation of implementations of the success criteria, conformance levels, partial conformance, and partial conformance due to language is available in the [implementation results](results). Details of the implementations that contribute to satisfying each exit requirement are linked from the results page.
-   Accessibility support documentation is available from the [Reports on Accessibility Support for Ways of Using Various Web Technologies](accessibility_support) page.
-   All sufficient techniques have been documented along with test procedures. These techniques are available from the [Public Working Draft of Understanding WCAG 2.0](http://www.w3.org/TR/WD-UNDERSTANDING-WCAG20-20081103/).
-   A record of issues received by the Working Group during the Candidate Recommendation and the Working Group's responses is available from the [Issue Disposition Report](issue-disposition-report). In addition to issues received as public comments, issues raised by implementers and evaluators are also included.

The information above constitutes the substance of the WCAG Working Group's claim that the requirements to advance to Proposed Recommendation have been met. The information below describes how the information was collected and what actions have been taken on WCAG 2.0 during the implementation process. This provides informative support for the claim that the procedure used was valid to substantiate the claim.

General conclusions
-------------------

The implementation phase of WCAG 2.0 demonstrated that the guidelines are effective for a wide range of implementations. Our implementations cover a variety of human languages, site sizes, application areas, web technologies used, and visual designs.

Although nearly all implementations had a least some errors that needed fixing to reach complete conformance at their targeted level, the errors tended to be oversights rather than misunderstandings of the guidelines. Where there were misunderstandings, the working group clarified the language of the guidelines or added supplemental information to Understanding WCAG 2.0 or to our documented techniques.

The implementation experience makes it clear that tool-supported evaluations are very important to the process of achieving conformance.

WCAG 2.0 will benefit from ongoing techniques development work, to expand the techniques documented for the current technology set, to ensure that techniques are available for other common web technologies, and to document accessibility solutions in new technologies as they develop. Additional accessibility-support documentation is also needed, and will be needed on an on-going basis, although not all of it by the WCAG WG.

Changes made to WCAG 2.0 based on implementation experience
-----------------------------------------------------------

A number of [Items at Risk](/TR/2008/CR-WCAG20-20080430/#status_risk) were identified at the start of Candidate Recommendation. Implementations of all the success criteria are available, and none of the At Risk actions were taken.

Based on implementation experience during Candidate Recommendation, some changes have been made to WCAG 2.0 and its supporting documents. A detailed list of the [changes to WCAG 2.0 since CR](change-detail) is available.

Process used to satisfy the exit criteria
-----------------------------------------

### Implementation experience

The [WCAG 2.0 Candidate Recommendation](http://www.w3.org/TR/2008/CR-WCAG20-20080430/) was published 30 April 2008. Implementations were requested via the following channels:

-   a [press release](http://www.w3.org/2008/04/wcag20cr-pressrelease) announcing the publication of the document;
-   a [message](http://lists.w3.org/Archives/Public/w3c-wai-ig/2008AprJun/0042.html) to the WAI Interest Group, a W3C-operated mailing list with nearly 700 subscribers;
-   copies of the WAI Interest Group message sent directly to about 200 interested individuals and organizations;
-   copies of the WAI Interest Group message translated and sent to French and German accessibility lists;
-   a [blog post](http://www.w3.org/QA/2008/04/wcag20_cr_april2008.html) on the W3C Q&A blog;
-   information on the [W3C](/) and [WAI](/WAI/) main pages and RSS feeds.

#### Implementations

Individuals and organizations interested in submitting implementations of WCAG 2.0 were directed to [WCAG 2.0 Candidate Recommendation Implementation Information](http://www.w3.org/WAI/WCAG20/CR/), which explained the process and provided the opportunity to submit candidate implementations through an online form. Approximately 45 implementations were submitted for consideration.

The Working Group selected a subset of the implementations to proceed in collecting implementation experience. The selection was based on the desire to demonstrate the greatest diversity of sites possible with respect to size, type of site (corporate, government, education, etc.), technologies relied upon, coverage of the success criteria, etc. Also prioritized were "blackbox" sites, where the site developer had had very little interaction with the WCAG Working Group, as a goal was to test the understandability of the support materials without the need for expert intervention. In order to ensure coverage of the success criteria, however, the Working Group accepted 5 "greybox" sites, with some interaction, and 5 "whitebox" sites developed by people closely associated with or members of the Working Group.

Although the sites submitted for consideration provided significant coverage of the success criteria, some success criteria were not applicable to any of these sites. To provide implementation documentation for these success criteria, the Working Group selected 23 "in the wild" implementations - public Web sites that demonstrated good application of particular success criteria but were not submitted by the author for consideration. These sites were used only to demonstrate specific success criteria and were not evaluated for overall WCAG 2.0 conformance.

Available is a summary of [implementation characteristics](characteristics), as well as a [list of all implementations](implementation_list) that were used in this process.

#### Evaluation

In order to validate that the implementations satisfied the WCAG 2.0 requirements, the Working Group evaluated each implementation. This involved evaluation of specific success criteria of interest and, in the case of implementations that were to be used as examples of particular conformance level, all success criteria relevant to the conformance level.

The evaluation process is time consuming and required a large team of evaluators to cover this number of sites. 29 people from within the Working Group and from outside the Working Group with known subject matter expertise participated in the evaluation process. This was supported by an evaluation database that was developed for this purpose. The database collected and tabulated results to document how the Candidate Recommendation exit requirements were met. Evaluators also could use a dedicated [implementations mailing list (Team-only archive)](http://lists.w3.org/Archives/Team/team-wcag2-implementations/) to discuss issues.

Note that though data on implementations that are used for this report is available, the raw data, interface to the database, and archives of the mailing list are visible only to evaluators and W3C Team due to implementation and evaluator confidentiality considerations. In short, evaluators were presented with a list of sufficient techniques from the WCAG 2.0 "How to Meet" document that are applicable to each success criterion. A text field was also provided in which evaluators could enter other techniques used by the implementers to meet the success criterion. After determining which techniques were used, and finding any failures, the evaluator used that data to judge whether the success criterion was satisfied.

The WCAG 2.0 success criteria are designed to be testable. Nevertheless, a degree of expertise and human judgment is often required in the evaluation process. To help ensure validity of results, the success criteria of interest for each implementation were evaluated by at least two evaluators. In cases where evaluators did not arrive at the same conclusion, they were asked to discuss their interpretations with each other and harmonize their results. The Working Group then used the data provided by the evaluators to arrive at a final evaluation for each success criterion.

At the end of this process, nearly 2000 records of data were collected about success criteria, and nearly 2700 records about techniques. This data has been analyzed and comprises the evidence that the exit requirements have been met.

### Documenting accessibility support

In conjunction with the implementation activities, the concept of accessibility support gained clarity. Originally, accessibility support was discussed in terms of technologies and features of technologies. In creating accessibility support documentation and gathering implementation feedback, we found it clearer to describe it as the "uses" of technologies and features of technologies. This was then shortened to just "the uses of a technology" that are accessibility supported.

This refinement in the description also clarified the relationship of "accessibility support" and the WCAG 2.0 techniques since "uses of technology to meet the success criteria" is exactly what the techniques are. In other words, when using technologies to meet WCAG 2.0 success criteria, technologies must be used in ways that are accessibility supported (i.e. technologies must be used in ways that will work with assistive technologies and accessibility features in user agents.).

To demonstrate that accessibility support for technologies can be determined and documented, data on the accessibility support of four Web technologies was gathered. All were evaluated with multiple platforms (operating system/user agent/assistive technology combinations). The Web technologies tested and documented included both W3C and non-W3C technologies (HTML, CSS, PDF and Silverlight).

For the W3C technologies, evaluators tested each use with the different platforms and the results were recorded in a database. Reports were then generated from the database. For the PDF and Silverlight technologies, reports generated by the technology vendors themselves are provided documenting the results of testing across different OS/user agent/assistive technology platforms.

All of the reports can be found at [Reports on Accessibility Support for Ways of Using Various Web Technologies](accessibility_support). Authors could use databases or reports to look up techniques or "uses" of a technology that they would like to employ to see if the use will work with (are supported by) assistive technologies and accessibility features in user agents. Both the database and reports are preliminary and incomplete. Additional work is required to test against more platforms, and to expand the set of uses covered by the reports. They do demonstrate, however, that Accessibility Support information can be gathered and presented in a form that authors and others can use.

### Documenting techniques

For each success criterion in WCAG 2.0, the working group has listed both sufficient techniques (techniques that the working group agrees would meet the success criterion) and advisory techniques (techniques that may or may not be testable, that go beyond the success criterion, and that can provide additional accessibility benefits to some users or in some situations). All of the sufficient techniques are documented and include a test procedure. Some (but not most) of the advisory techniques are also fully documented. Some of these have a test procedure while others are general advice and a test procedure is not provided since there is no set criterion or level of implementation for the technique.

The [Understanding WCAG 2.0](http://www.w3.org/TR/UNDERSTANDING-WCAG20/) and the [How to Meet WCAG 2.0 - Quick Reference](http://www.w3.org/WAI/WCAG20/quickref/) documents both provide a direct linking from the individual success criteria in WCAG 2.0 and the sufficient and advisory techniques documentation. A link to the proper place in the Understanding and How to Meet documents can be found at the end of each success criterion in WCAG 2.0.

Documentation of the techniques includes a description of the technique, when it is applicable, any user agent limitations, examples (sometimes including code), resources, related techniques and, for all sufficient and some advisory techniques, a test procedure. 

### Responding to issues

As it has done in the past, the WCAG Working Group received comments on a dedicated [comments list](http://lists.w3.org/Archives/Public/public-comments-wcag20/). Comments were tracked via an issue-tracking tool, proposals for how to address each issue were presented to the Working Group via Web-Based Surveys, and Working Group decisions executed. The record of these comments and their resolution is available from the [Issue Disposition Report](issue-disposition-report).

Some comments and questions arrived from individuals involved in implementations that were targeted to be used in this implementation report. The Working Group tried to find a balance between supporting the implementers while not compromising the "blackbox" nature of the site by hand-feeding an interpretation of WCAG 2.0. Some issues were substantive enough to require formal review by the Working Group, even though the response made the implementation more "greybox".

Some issues were also raised during the evaluation process. Evaluators had questions of interpretation, some of which were not easily resolved during discussion on the evaluation mailing list. Complex issues of this type were handled in the same way as public comments and therefore appear in the issue disposition report.

Contributors
------------

### Implementers

The following people contributed implementations that were used in this report:

-   Patrice Bourlon
-   Raven Calais (Australian Government Information Management Office)
-   Mike Cherim (Green-Beast.com)
-   James Coltham
-   Lainey Feingold (Law Office of Lainey Feingold)
-   Greg Gay (Adaptive Technology Resource Centre)
-   Brian Hardy (Vision Australia)
-   Kazuhito Kidachi (Mitsue-Links Co.,Ltd.)
-   Andrew Kirkpatrick (Adobe Systems)
-   Alessandro Miele
-   Matthew Ross (State Services Commission, New Zealand Government)
-   Michael Stenitzer (WIENFLUSS information.design.solutions)
-   Christophe Strobbe (K.U.Leuven)
-   Terry Thompson (DO-IT, University of Washington)

### Evaluators

The following people have contributed implementation evaluations. None evaluated sites with which they had a direct involvement.

-   Bruce Bailey, U.S. Access Board (WG Member)
-   Tim Boland, NIST (WG Member)
-   Ben Caldwell, Trace (WG Member)
-   Tomas Caspers
-   Sofia Celic (WG Member)
-   Sambhavi Chandrashekar, ATRC
-   Michael Cooper, W3C (WG Member)
-   Steve Faulkner, The Paciello Group
-   Kentarou Fukuda, IBM
-   P.J. Gardner, Gardner Information Design, Inc. and Boston-IA
-   Loretta Guarino Reid, Google (WG Chair)
-   Katie Haritos-Shea (WG Member)
-   Hans Hillen (The Paciello Group)
-   Andrew Kirkpatrick, Adobe (WG Member)
-   Preety Kumar, Deque
-   Drew LaHart, IBM (WG Member)
-   Gez Lemon, The Paciello Group
-   Chuck Letourneau, Starling Access Services
-   David MacDonald, eRamp (WG Member)
-   Niqui Merret, niquimerret.com
-   Sailesh Panchang, Deque
-   Sharron Rush, Knowability
-   Jared Smith, WebAIM
-   Andi Snow-Weaver, IBM (WG Member)
-   Jeanne Spellman, W3C
-   Christophe Strobbe, K.U.Leuven (WG Member)
-   Jim Thatcher, JimThatcher.com
-   Makoto Ueki, Infoaxia (WG Member)
-   Gregg Vanderheiden, Trace (WG Chair)

Document Information
--------------------

**Content last updated:** 29 October 2008

\[[Contacting WAI](/WAI/contacts)\]

[Copyright](/Consortium/Legal/ipr-notice#Copyright) © 1994-2008 [W3C](/)<sup>®</sup> ([MIT](http://www.csail.mit.edu/), [ERCIM](http://www.ercim.org/), [Keio](http://www.keio.ac.jp/)), All Rights Reserved. W3C [liability](/Consortium/Legal/ipr-notice#Legal_Disclaimer), [trademark](/Consortium/Legal/ipr-notice#W3C_Trademarks), [document use](/Consortium/Legal/copyright-documents) and [software licensing](/Consortium/Legal/copyright-software) rules apply. Your interactions with this site are in accordance with our [public](/Consortium/Legal/privacy-statement#Public) and [Member](/Consortium/Legal/privacy-statement#Members) privacy statements.
