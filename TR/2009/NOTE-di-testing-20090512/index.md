[<img src="http://www.w3.org/Icons/w3c_home" alt="W3C" width="72" height="48" />](http://www.w3.org/)

Guidelines for writing device independent tests
===============================================

W3C Working Group Note 12 May 2009
----------------------------------

This version:  
<http://www.w3.org/TR/2009/NOTE-di-testing-20090512/>

Latest version:  
<http://www.w3.org/TR/di-testing/>

Editors:  
Dominique Hazaël-Massieux, W3C

Carmelo Montanez, National Institute of Standards and Technology

[Copyright](http://www.w3.org/Consortium/Legal/ipr-notice#Copyright) © 2008-2009 [W3C](http://www.w3.org/)<sup>®</sup> ([MIT](http://www.csail.mit.edu/), [ERCIM](http://www.ercim.org/), [Keio](http://www.keio.ac.jp/)), All Rights Reserved. W3C [liability](http://www.w3.org/Consortium/Legal/ipr-notice#Legal_Disclaimer), [trademark](http://www.w3.org/Consortium/Legal/ipr-notice#W3C_Trademarks) and [document use](http://www.w3.org/Consortium/Legal/copyright-documents) rules apply.

------------------------------------------------------------------------

Abstract
--------

As support for Web technologies grows, it is important that tests writers develop test suites that will work as well as possible across devices. This document offers guidance in the form of simple guidelines to follow to create device-independent tests.

Status of this document
-----------------------

*This section describes the status of this document at the time of its publication. Other documents may supersede this document. A list of current W3C publications and the latest revision of this technical report can be found in the [W3C technical reports index](http://www.w3.org/TR/) at http://www.w3.org/TR/.*

This is the First Public Working Group Note of the Device Independent Testing Guidelines that represent the consensus of the participants of the by the [Mobile Web Initiative Test Suite Working Group](http://www.w3.org/2005/MWI/Tests/), part of the [Mobile Web Initiative](http://www.w3.org/Mobile/). The Working Group is seeking feedback on the level of details in which these guidelines should go, and what other guidelines should be included as part of the document.

Comments on, and discussions of this document can be sent on the ([archived](http://lists.w3.org/Archives/Public/public-mwts/)) public mailing list <public-mwts@w3.org> (see [instructions](http://www.w3.org/Mail/Request)).

Publication as a Working Group Note does not imply endorsement by the W3C Membership. This is a draft document and may be updated, replaced or obsoleted by other documents at any time. It is inappropriate to cite this document as other than work in progress.

This document was produced by a group operating under the [5 February 2004 W3C Patent Policy](http://www.w3.org/Consortium/Patent-Policy-20040205/). W3C maintains a [public list of any patent disclosures](http://www.w3.org/2004/01/pp-impl/40010/status) made in connection with the deliverables of the group; that page also includes instructions for disclosing a patent. An individual who has actual knowledge of a patent which the individual believes contains [Essential Claim(s)](http://www.w3.org/Consortium/Patent-Policy-20040205/#def-essential) must disclose the information in accordance with [section 6 of the W3C Patent Policy](http://www.w3.org/Consortium/Patent-Policy-20040205/#sec-Disclosure).

Table of Contents
-----------------

-   [1. Introduction](#overview)
    -   [1.1 Existing Work](#existing)
    -   [1.2 Device Limitations](#limitations)
    -   [1.3 Target Devices](#target)
-   [2. Guidelines](#guidelines)
    -   [2.1 Screen Limitations](#screen)
    -   [2.2 Memory Limitations](#memory)
    -   [2.3 Network Bandwidth, Latency and Cost](#network)
    -   [2.4 CPU Power](#cpu)
    -   [2.5 Extension Capabilities](#ext)
    -   [2.6 Keyboard or Pointing Device Access](#keyboard)
    -   [2.7 Prerequisites](#prereq)
-   [3. References](#ref)

1. Introduction
---------------

This document provide a set of guidelines for writing test cases that can be run effectively across devices, in particular on mobile devices.

### 1.1 Existing Work

The [Authoring Challenges for Device Independence](http://www.w3.org/TR/2003/NOTE-acdi-20030901/) \[[ACDI](#ACDI)\] explore these different limitations in the general context of writing device independent content, and the [Mobile Web Best Practices 1.0](http://www.w3.org/TR/mobile-bp/) \[[MWBP](#MWBP)\] give specific guidance on writing content targeted at mobile devices.

The [CSS2.1 Test Case Authoring Guidelines](http://www.w3.org/Style/CSS/Test/guidelines.html) \[[CSSTCAG](#CSSTCAG)\] provides guidance on how to write test cases, and sets device-independence as a goal. The [SVG Test Suite Manual](http://www.w3.org/Graphics/SVG/Test/svgTest-manual.htm#TestReviewGuidelines) \[[SVGTS](#SVGTS)\] also offers advices on writing test cases.

Inspired by this existing work, and based on the experience gathered by the Mobile Web Test Suites Working Group while reviewing test cases and their fitness to mobile devices \[[MWTSSURVEY](#MWTSSURVEY)\], this document explores the specific aspects to take into account when writing test cases to ensure greater device independence.

### 1.2 Devices Limitations

Consider recording the browser identifier with the widely implemented `window.navigator.userAgent`, as there might be several browsers on one device.

When designing device-independent test cases, it is important to acknowledge the limitations of most devices:

1.  Screen
2.  Memory available
3.  Network bandwidth, latency and cost
4.  CPU power
5.  Extensions capabilities

For tests that require interaction (either for running the test or for submitting results), consider:

1.  Keyboard or pointing device access and ease of use
2.  Human cost of correctly submitting the results
3.  Automatic start of the test automatically (e.g. through an onload event)

### 1.3 Target Devices

Trying to take into account all the possible constraints of all possible devices would make writing device-independent tests impossible.

The first step towards writing device-independent test cases is thus to determine the range of devices on which the test cases would need or are likely to be run. To make that assessment:

1.  if the technology is already deployed, consider on what devices it is running
2.  if the technology can only be deployed on devices with a certain level of hardware characteristics, adapt the constraints in the guidelines below to that level
3.  if it is not possible to create a single test that will work well across devices, consider creating several versions of the test, or using server-based content adaptation to adapt it based on the requesting devices.

In any case, it is always a good idea to document in the test suites what are the minimal expected requirements to run the tests, and possibly which test cases require a certain level of support.

2. Guidelines
-------------

### 2.1 Screen Limitations

Screen size matters when designing visual test cases - e.g. where the tester needs to assess whether the rendering of a test cases matches a reference rendering.

Across devices, the following screen parameters vary widely:

1.  screen resolution
2.  page zooming capability, scrolling
3.  physical dimensions
4.  number of colors
5.  contrast

In general, to avoid problems when running test across devices:

1.  Keep your tests as simple as possible. Do not include any visible meta data that might obfuscate or get in the way of the result. Stating prerequisites, pass conditions and test result is all that is needed.
2.  Avoid tests based on absolute dimensions, or provide several versions for different screen resolutions.
3.  Keep non-essential content off the top of the rendered content to avoid scrolling.
4.  Be as concise as possible to avoid scrolling.
5.  When using colors to express the result of the test, convey the result also with text.
6.  On color-based tests, use well-contrasted colors for parts that need to be distinguished.

Bad test:

![Image depcting how a test from the CSS1 test suite looks on a mobile browser. Due to the amount of visible meta data included, it is impossible to see the actual test result.](bad-test.png)

Good test:

![Image depicting a simple CSS test case consisting of a pass condition (“There should be a green block under this paragraph”) and a green block indicating that the test has passed.](good-test.png)

### 2.2 Memory Limitations

To avoid hitting memory limitations of the devices on which the technology under test run:

1.  Keep the number of style sheets, images, objects or scripts to a minimum.
2.  On markup based documents, keep the document object model (DOM) tree as small as possible.
3.  Keep the number of data structure created dynamically (e.g. by scripts) to a minimum.

### 2.3 Network Bandwidth, Latency and Cost

The characteristics of network access across devices vary greatly, in particular in terms of bandwidth available, the latency induced by network requests, and the cost of transferring content over the network.

To cater for test environments where network is slow or costly:

1.  Keep the number of external resources loaded along with the test case to a minimum; prefer including the content (e.g. using internal style sheets instead of external ones) rather than loading it, except if it can be cached and re-used across test cases.
2.  Keep the number of network requests originated from scripts to a minimum to speed up data transfer.
3.  Take care when triggering DOM operations that they will not require downloading DTDs.
4.  Be aware that mobile networks are can be aggressively cached or transformed, therefore you might need to adjust originator HTTP headers depending on the nature of your test.
5.  Eliminate any white space in your tests.

### 2.4 CPU Power

CPU-intensive operations on mobile devices can drain the battery, and are likely to be much slower than on larger hardware. As a result:

1.  Avoid unneeded images processing operations, such as scaling up or down raster images.

### 2.5 Extension Capabilities

Most mobile devices have limited capabilities when it comes to plugins, additional fonts, or software extensions in general. As a result:

1.  Avoid relying on effects based on specific fonts.
2.  Avoid tests that rely on a specific plugin to be installed.

### 2.6 Keyboard or Pointing Device Access

Many mobile devices don't provide a full keyboard, and thus require several key press to enter a given character.

1.  Minimise interactive tests
2.  Provide helpers to reach the test suites using short URLs, 2D-barcodes, etc.
3.  If possible, avoid making your tests dependent on any specific input device.
4.  Provide simple navigation among test cases

### 2.7 Prerequisites

A number of tests *do* require specific features to be available for the test to work. These requirements could be specific input devices or device APIs, XmlHttpRequest, SVG or similar.

1.  If your test depends on any specific feature to be available on the tested device, you should explicitly state so before the pass condition.

3. References
-------------

ACDI  
Authoring Challenges for Device Independence, Rhys Lewis, Editor, W3C Working Group Note, 1 September 2003 (See <http://www.w3.org/TR/2003/NOTE-acdi-20030901/>)

CSSTCAG  
CSS2.1 Test Case Authoring Guidelines, Tantek Çelik, Ian Hickson, Elika J. Etemad, Editors (See <http://www.w3.org/Style/CSS/Test/guidelines.html>)

MWTSSURVEY  
Conformance Test Suites for mobile web technologies (See <http://www.w3.org/2005/MWI/Tests/matrix>)

MWBP  
Mobile Web Best Practices 1.0, Basic Guidelines, Jo Rabin, Charles McCathieNeville, Editors, W3C Recommendation, 29 July 2008 (See <http://www.w3.org/TR/mobile-bp/>)

SVGTS  
SVG Test Suite Manual, Lofton Henderson, Editor, 1 September 2001 (See <http://www.w3.org/Graphics/SVG/Test/svgTest-manual.htm#TestReviewGuidelines>)

TESTFAQ  
Test Development FAQ, Patrick Curran, Editor (See <http://www.w3.org/QA/WG/2005/01/test-faq>)
