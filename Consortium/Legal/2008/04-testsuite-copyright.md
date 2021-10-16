[<img src="/2008/site/images/logo-w3c-mobile-lg" alt="W3C" width="90" height="53" />](/) <span class="alt-logo">W3C</span>
==========================================================================================================================

-   [Standards](/standards/)
-   [Participate](/participate/)
-   [Membership](/Consortium/membership)
-   [About W3C](/Consortium/)
-   <img src="/2008/site/images/search-button" alt="Search" class="submit" width="21" height="17" />

<img src="/2008/site/images/logo-shadow" style="width:100.0%" height="32" />

Site Navigation
---------------

### <span class="ribbon">[Policies and Legal Information <img src="/2008/site/images/header-link" alt="Header link" class="header-link" width="13" height="13" />](/Consortium/Legal/ipr-notice.html "Up to Policies and Legal Information")</span>

-   <span class="current">Licenses for W3C Test Suites</span>
-   [Policies for Contribution of Test Cases to W3C](/2004/10/27-testcases.html)
-   [Intellectual Rights FAQ](/Consortium/Legal/IPR-FAQ)
-   [W3C Privacy Statements](/Consortium/Legal/privacy-statement)
-   [W3C Document License](/Consortium/Legal/copyright-documents)
-   [W3C Trademarks and Generic Terms](/Consortium/Legal/2002/trademarks-20021231.html)
-   [W3C® Trademark and Service Mark License](/Consortium/Legal/trademark-license)
-   [W3C Software Notice and License](/Consortium/Legal/copyright-software)
-   [W3C Invited Expert and Collaborators Agreement](/Consortium/Legal/collaborators-agreement)
-   [W3C URI Persistence Policy](/Consortium/Persistence.html)
-   [Mirroring the W3C Site](/1999/10/21-mirroring-policy.html)
-   [Translations of the Copyright Notice](/Consortium/Legal/2006/08-copyright-translations.html)

  

-   [Skip](#w3c_content_body "Skip to content (e.g., when browsing via audio)")
-   [W3C](/) <span class="cr">»</span> 
-   [About W3C](/Consortium/) <span class="cr">»</span> 
-   [Facts About W3C](/Consortium/facts.html) <span class="cr">»</span> 
-   [Policies and Legal Information](/Consortium/Legal/ipr-notice.html) <span class="cr">»</span> 
-   Licenses for W3C Test Suites

-   On this page →
-   [BSD License Summary](#lic1)<span class="bullet"> • </span>
-   [W3C License Summary](#lic2)<span class="bullet"> • </span>
-   [how to use](#howtouse)<span class="bullet"> • </span>
-   [disclaimer](#disclaimer)

Licenses for distribution of W3C Test Suites should satisfy two goals:

1.  Enable developers to use test cases easily, and promote software development and bugtracking.
2.  Enable a W3C Working Group to create a branded, "Authoritative W3C Test Suite" to reflect the group consensus process, and to promote interoperability and stability of performance claims.

To achieve these goals, W3C makes available Test Suites under two distinct licenses for two mutually exclusive uses:

1.  a [3-clause BSD License](03-bsd-license.html) for software development, bugtracking, and other applications that do not require assertions of performance to the public or implied claims of conformance to a W3C Specification. See [summary of 3-clause BSD License](#lic1).
2.  a [W3C Test Suite License](04-testsuite-license.html) for an Authoritative W3C Test Suite or when claims of performance with respect to a specification are required. See [summary of W3C Test Suite License](#lic2).

The choice of license is up to the licensee for every single use of tests from a W3C Test Suite. It will typically depend on usage requirements: the first one allows changes, the second does not. See below for [how to use the licenses](#howtouse).

W3C encourages community development of Test Suites and welcomes contributions (see [policies for contribution of test cases to W3C](/2004/10/27-testcases.html)), which will then be distributed under these two licenses. If you wish to contribute (e.g. altered) test cases, please contact the relevant Working Group and review the contribution policies.

Summary of Use of the BSD Test Suite license for Software Development
---------------------------------------------------------------------

Under the [3-clause BSD License](03-bsd-license.html), tests can be copied, altered, and integrated into software development tools, bugtracking tools, etc. This license allows developers, commercial vendors, and open source projects to copy tests and alter them as they wish to test and improve their software. However, if changes are made, the derivative work must not be distributed with W3C logos, unless W3C gives explicit permission.

**Note:** It is explicitly understood that clause 3 of the BSD license prohibits the assertion of performance claims with respect to W3C Specifications by claiming successful passing of modified tests.

Summary of Use of the W3C Test Suite License
--------------------------------------------

Under the [W3C Test Suite license](04-testsuite-license.html), a vendor neutral Test Suite is provided to the public, implementers and page authors so they may test performance of software or content with respect to a W3C Specification. Tests published under this license can be copied and used for any purpose, but no modifications are permitted. Consequently, performance claims can only be made against **unaltered tests.** Under this license, tests of a W3C Test Suite are protected by [copyright](https://www.w3.org/Consortium/Legal/ipr-notice#Copyright) and by the [W3C trademark](https://www.w3.org/Consortium/Legal/ipr-notice#W3C_Trademarks). Copies of tests from a W3C Test Suite created for the purpose of allowing assertion of performance claims with respect to W3C Specifications are implicitly made under this license.

The creation of a subset of a Test Suite is considered a derivative work, thus a violation of the rights of the collection. Consequently it either does not allow claims of performance and the use of the name “W3C” or it requires a special license from W3C.

Test Suites may distinguish the test harness (or, framework for navigation) and the actual tests. For these Test Suites, the prohibition of change only applies to the tests. The [W3C Test Suite license](04-testsuite-license.html) is based on the [W3C Document license](https://www.w3.org/Consortium/Legal/copyright-documents) but gives further rights concerning navigation/harness and the use of the W3C trademark in performance claims.

How to Use The Licenses
-----------------------

For either license, include the following statement in a Test Suite (HTML markup shown):

> Distributed under both the &lt;a href="https://www.w3.org/Consortium/Legal/2008/04-testsuite-license"&gt;W3C Test Suite License&lt;/a&gt; and the &lt;a href="https://www.w3.org/Consortium/Legal/2008/03-bsd-license"&gt;W3C 3-clause BSD License&lt;/a&gt;. To contribute to a W3C Test Suite, see the &lt;a href="https://www.w3.org/2004/10/27-testcases"&gt;policies and contribution forms&lt;/a&gt;.

### How does this affect test suites published prior to this policy?

It does not affect existing test suites until they are modified to include the new license. We encourage parties who manage W3C test suites to update the test suite to include the [license statement](#howtouse) shown above. Depending on the organization of the test suite, it may be necessary to update both "cover pages" and individual test cases.

Disclaimer
----------

UNDER BOTH MUTUALLY EXCLUSIVE LICENSES, THIS DOCUMENT AND ALL DOCUMENTS, TESTS AND SOFTWARE THAT LINK THIS STATEMENT ARE PROVIDED "AS IS," AND COPYRIGHT HOLDERS MAKE NO REPRESENTATIONS OR WARRANTIES, EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT, OR TITLE; THAT THE CONTENTS OF THE DOCUMENT ARE SUITABLE FOR ANY PURPOSE; NOR THAT THE IMPLEMENTATION OF SUCH CONTENTS WILL NOT INFRINGE ANY THIRD PARTY PATENTS, COPYRIGHTS, TRADEMARKS OR OTHER RIGHTS.

COPYRIGHT HOLDERS WILL NOT BE LIABLE FOR ANY DIRECT, INDIRECT, SPECIAL OR CONSEQUENTIAL DAMAGES ARISING OUT OF ANY USE OF THE DOCUMENT OR THE PERFORMANCE OR IMPLEMENTATION OF THE CONTENTS THEREOF.

Test Suite Licenses
-------------------

-   [3-Clause BSD](/Consortium/Legal/2008/03-bsd-license.html)
-   [W3C](/Consortium/Legal/2008/04-testsuite-license.html)

Footer Navigation
-----------------

### Navigation

-   [Home](/)
-   [Standards](/standards/)
-   [Participate](/participate/)
-   [Membership](/Consortium/membership)
-   [About W3C](/Consortium/)

### Contact W3C

-   [Contact](/Consortium/contact)
-   [Help and FAQ](/Help/)
-   [Sponsor / Donate](/Consortium/sponsor/)
-   [Site Map](/Consortium/siteindex)
-   [Feedback](http://lists.w3.org/Archives/Public/site-comments/)

### W3C Updates

-   [<img src="/2008/site/images/Twitter_bird_logo_2012.svg" alt="Twitter" class="social-icon" height="40" />](http://twitter.com/W3C "Follow W3C on Twitter")

Questions to site-policy@w3.org

Copyright © 2016 W3C <sup>®</sup> ([MIT](http://www.csail.mit.edu/), [ERCIM](http://www.ercim.org/), [Keio](http://www.keio.ac.jp/), [Beihang](http://ev.buaa.edu.cn/)) [Usage policies apply](/Consortium/Legal/ipr-notice).
