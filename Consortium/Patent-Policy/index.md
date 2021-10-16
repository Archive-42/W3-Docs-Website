<a href="https://www.w3.org/" class="logo"><img src="https://www.w3.org/StyleSheets/TR/2016/logos/W3C" alt="W3C" width="72" height="48" /></a>

W3C Patent Policy
=================

<span class="content">15 September 2020 </span>
-----------------------------------------------

This version:   
<a href="https://www.w3.org/Consortium/Patent-Policy-20200915/" class="u-url">https://www.w3.org/Consortium/Patent-Policy-20200915/</a>

Latest published version:   
<https://www.w3.org/Consortium/Patent-Policy/>

Previous Versions:   
<https://www.w3.org/Consortium/Patent-Policy-20170801/>

Editor:   
<a href="mailto:wseltzer@w3.org" class="p-name fn u-email email">Wendy Seltzer</a> (<span class="p-org org">W3C/MIT</span>)

Former Editor:   
<a href="mailto:djweitzner@w3.org" class="p-name fn u-email email">Daniel J. Weitzner</a> (<span class="p-org org">W3C/MIT</span>)

[Copyright](https://www.w3.org/Consortium/Legal/ipr-notice#Copyright) © 2000-2020 [W3C](https://www.w3.org/)<sup>®</sup> ([MIT](https://www.csail.mit.edu/), [ERCIM](https://www.ercim.eu/), [Keio](https://www.keio.ac.jp/), [Beihang](http://ev.buaa.edu.cn/)). W3C [liability](https://www.w3.org/Consortium/Legal/ipr-notice#Legal_Disclaimer), [trademark](https://www.w3.org/Consortium/Legal/ipr-notice#W3C_Trademarks) and [document use](https://www.w3.org/Consortium/Legal/copyright-documents) rules apply.

------------------------------------------------------------------------

<span class="content">Abstract</span>
-------------------------------------

The W3C Patent Policy governs the handling of patents in the process of producing Web standards. The goal of this policy is to assure that Specifications produced under this policy can be implemented on a Royalty-Free (RF) basis.

<span class="content"> Status of This Document</span>
-----------------------------------------------------

This is the 15 September 2020 version of the W3C Patent Policy.

This document has been reviewed by W3C Members and other interested parties and has been endorsed by the W3C Director as the W3C Patent Policy. It is a stable document and may be used as reference material or cited as a normative reference from another document. W3C's role in making this policy is to provide a stable policy for handling patent claims in the context of W3C Recommendations and to enhance the functionality and interoperability of the Web. This policy was produced by the W3C [Patents and Standards Interest Group](https://www.w3.org/2004/pp/psig/).

Please report errors in this document to the <www-patentpolicy-comment@w3.org> mailing list ([public archive](https://lists.w3.org/Archives/Public/www-patentpolicy-comment/)). The [list of known errors](errata.html) is public.

The English version of this policy is the only normative version.

Table of Contents
-----------------

1.  [<span class="secno"></span> <span class="content">Abstract</span>](#abstract)
2.  [<span class="secno"></span> <span class="content"> Status of This Document</span>](#status)
3.  [<span class="secno">1</span> <span class="content"> Overview</span>](#sec-Overview)
4.  [<span class="secno">2</span> <span class="content"> Licensing Goals for W3C Specifications</span>](#sec-Licensing)
5.  [<span class="secno">3</span> <span class="content"> Licensing Obligations of Working Group Participants</span>](#sec-Obligations)
    1.  [<span class="secno">3.1</span> <span class="content"> W3C RF Licensing Requirements for All Working Group Participants</span>](#sec-W3C-RF-license)
    2.  [<span class="secno">3.2</span> <span class="content"> Limitation on Licensing Requirement for Non-Participating Members</span>](#sec-non-participants)
    3.  [<span class="secno">3.3</span> <span class="content"> Licensing Commitments in W3C Submissions</span>](#sec-submissions)
    4.  [<span class="secno">3.4</span> <span class="content"> Note on Licensing Commitments for Invited Experts</span>](#sec-invited)
    5.  [<span class="secno">3.5</span> <span class="content"> Specification Licensing Commitments</span>](##spec-licensing-commitments)
    6.  [<span class="secno">3.6</span> <span class="content"> Licensing Commitment Persistence</span>](#commitment-persistence)
6.  [<span class="secno">4</span> <span class="content"> Exclusion From W3C RF Licensing Requirements</span>](#sec-Exclusion)
    1.  [<span class="secno">4.1</span> <span class="content"> Exclusion With Continued Participation</span>](#sec-exclusion-with)
    2.  [<span class="secno">4.2</span> <span class="content"> Exclusion and Resignation From the Working Group</span>](#sec-exclusion-resign)
    3.  [<span class="secno">4.3</span> <span class="content"> Joining an Already Established Working Group</span>](#sec-join)
    4.  [<span class="secno">4.4</span> <span class="content"> Exclusion Procedures for Pending, Unpublished Patent Applications</span>](#sec-exclude-app)
    5.  [<span class="secno">4.5</span> <span class="content"> Exclusion Mechanics</span>](#sec-exclude-mech)
7.  [<span class="secno">5</span> <span class="content"> W3C Royalty-Free (RF) Licensing Requirements</span>](#sec-Requirements)
8.  [<span class="secno">6</span> <span class="content"> Disclosure</span>](#sec-Disclosure)
    1.  [<span class="secno">6.1</span> <span class="content"> Disclosure Requirements</span>](#sec-disclosure-requirements)
    2.  [<span class="secno">6.2</span> <span class="content"> Disclosure Exemption</span>](#sec-disclosure-exemption)
    3.  [<span class="secno">6.3</span> <span class="content"> Disclosure Requests</span>](#sec-disclosure-requests)
    4.  [<span class="secno">6.4</span> <span class="content"> Disclosure Contents</span>](#sec-disclosure-contents)
    5.  [<span class="secno">6.5</span> <span class="content"> Disclosure of Laid-Open or Published Applications</span>](#sec-published)
    6.  [<span class="secno">6.6</span> <span class="content"> Disclosure of Pending, Unpublished Applications</span>](#sec-pending)
    7.  [<span class="secno">6.7</span> <span class="content"> Good Faith Disclosure Standards</span>](#sec-good-faith)
    8.  [<span class="secno">6.8</span> <span class="content"> Timing of Disclosure Obligations</span>](#sec-disclosure-timing)
    9.  [<span class="secno">6.9</span> <span class="content"> Termination of Disclosure Obligations</span>](#sec-disclosure-termination)
    10. [<span class="secno">6.10</span> <span class="content"> Disclosure Obligations of Invited Experts</span>](#sec-disclosure-invite)
    11. [<span class="secno">6.11</span> <span class="content"> Disclosures to Be Publicly Available on Recommendation Track</span>](#sec-disclosure-public)
9.  [<span class="secno">7</span> <span class="content"> Exception Handling</span>](#sec-Exception)
    1.  [<span class="secno">7.1</span> <span class="content"> PAG Formation</span>](#sec-PAG-formation)
    2.  [<span class="secno">7.2</span> <span class="content"> PAG Formation After a Recommendation Is Issued</span>](#sec-PAG-post-Recommendation)
    3.  [<span class="secno">7.3</span> <span class="content"> PAG Composition</span>](#sec-PAG-composition)
    4.  [<span class="secno">7.4</span> <span class="content"> PAG Procedures</span>](#sec-PAG-procedures)
        1.  [<span class="secno">7.4.1</span> <span class="content"> PAG Formation Timing</span>](#sec-PAG-procedures-timing)
        2.  [<span class="secno">7.4.2</span> <span class="content"> PAG Charter Requirements</span>](#sec-PAG-procedures-charter)
    5.  [<span class="secno">7.5</span> <span class="content"> PAG Conclusion</span>](#sec-PAG-conclude)
        1.  [<span class="secno">7.5.1</span> <span class="content"> Possible PAG Conclusions</span>](#sec-PAG-conclude-possible)
        2.  [<span class="secno">7.5.2</span> <span class="content"> PAG Outcome</span>](#sec-PAG-conclude-outcome)
        3.  [<span class="secno">7.5.3</span> <span class="content"> Procedure for Considering Alternate Licensing Terms</span>](#sec-PAG-conclude-alternate)
10. [<span class="secno">8</span> <span class="content"> Definition of Essential Claims</span>](#def-essential)
    1.  [<span class="secno">8.1</span> <span class="content"> Essential Claims</span>](#def-essential-definition)
    2.  [<span class="secno">8.2</span> <span class="content"> Limitations on the Scope of Definition of Essential Claims</span>](#def-essential-exclusions)
    3.  [<span class="secno">8.3</span> <span class="content"> Definition of Normative, Optional and Informative</span>](#def-essential-requirements)
11. [<span class="secno"></span> <span class="content">References</span>](#references)
    1.  [<span class="secno"></span> <span class="content">Normative References</span>](#normative)
12. [<span class="secno"></span> <span class="content"> Acknowledgments</span>](#sec-acknowledgments)
13. [<span class="secno"></span> <span class="content">Index</span>](#index)
    1.  [<span class="secno"></span> <span class="content">Terms defined by this specification</span>](#index-defined-here)
    2.  [<span class="secno"></span> <span class="content">Terms defined by reference</span>](#index-defined-elsewhere)

<span class="secno">1. </span><span class="content"> Overview</span><a href="#sec-Overview" class="self-link"></a>
------------------------------------------------------------------------------------------------------------------

This patent policy describes:

1.  licensing goals for W3C <a href="#specification" id="ref-for-specification">Specifications</a>
2.  licensing obligations that <a href="https://www.w3.org/Consortium/Process/#GroupsWG" id="ref-for-GroupsWG">Working Group</a> <a href="#participant" id="ref-for-participant">participants</a> will undertake as a condition of <span id="ref-for-GroupsWG①">Working Group</span> participation, along with means of excluding specific patents from those obligations
3.  the definition of a <a href="#def-RF" id="ref-for-def-RF">W3C Royalty-Free license</a>
4.  <a href="#disclosure" id="ref-for-disclosure">disclosure</a> rules for W3C Members
5.  an [exception handling process](#sec-Exception) for situations in which the Royalty-Free status of a <a href="#specification" id="ref-for-specification①">Specification</a> comes under question
6.  definition of <a href="#essential-claims" id="ref-for-essential-claims">Essential Claims</a>

All numbered sections of this document (1-8), as well as hyperlinks to material within and outside of this document, are normative.

<span class="secno">2. </span><span class="content"> Licensing Goals for W3C Specifications</span><a href="#sec-Licensing" class="self-link"></a>
-------------------------------------------------------------------------------------------------------------------------------------------------

In order to promote the widest adoption of Web standards, W3C seeks to develop <a href="#specification" id="ref-for-specification②">Specifications</a> that can be implemented on a <a href="#def-RF" id="ref-for-def-RF①②">Royalty-Free</a> (RF) basis. Subject to the conditions of this policy, W3C will not approve a <a href="https://www.w3.org/Consortium/Process/#RecsW3C" id="ref-for-RecsW3C">Recommendation</a> if it is aware that <a href="#essential-claims" id="ref-for-essential-claims①">Essential Claims</a> exist which are not available on Royalty-Free terms.

To this end, <a href="https://www.w3.org/Consortium/Process/#WGCharter" id="ref-for-WGCharter">Working Group charters</a> will include a reference to this policy and a requirement that <a href="#specification" id="ref-for-specification③">Specifications</a> produced by the <a href="https://www.w3.org/Consortium/Process/#GroupsWG" id="ref-for-GroupsWG②">Working Group</a> will be implementable on an RF basis, to the best ability of the <span id="ref-for-GroupsWG③">Working Group</span> and the Consortium.

For the purpose of this policy, “Specification” refers to a <a href="https://w3c.github.io/w3process/#technical-report" id="ref-for-technical-report">W3C technical report</a> published on the <a href="https://w3c.github.io/w3process/#rec-track" id="ref-for-rec-track">Recommendation Track</a>, see [\[PROCESS\]](#biblio-process). “Patent Review Draft refers to a version of a W3C <a href="#specification" id="ref-for-specification④">Specification</a> defined <a href="https://w3c.github.io/w3process/#patent-review-drafts" id="ref-for-patent-review-drafts">as such</a> by the W3C Process \[PROCESS\], that is published for patent review and exclusion.

<span class="secno">3. </span><span class="content"> Licensing Obligations of Working Group Participants</span><a href="#sec-Obligations" class="self-link"></a>
----------------------------------------------------------------------------------------------------------------------------------------------------------------

The following obligations shall apply to all <a href="#participant" id="ref-for-participant①">participants</a> in <a href="https://www.w3.org/Consortium/Process/#GroupsWG" id="ref-for-GroupsWG④">W3C Working Groups</a>. These obligations will be referenced from each <a href="https://www.w3.org/Consortium/Process/#WGCharter" id="ref-for-WGCharter①">Working Group charter</a> and <a href="https://www.w3.org/Consortium/Process/#cfp" id="ref-for-cfp">Calls for Participation</a>.

### <span class="secno">3.1. </span><span class="content"> W3C RF Licensing Requirements for All Working Group Participants</span><a href="#sec-W3C-RF-license" class="self-link"></a>

As a condition of participating in a <a href="https://www.w3.org/Consortium/Process/#GroupsWG" id="ref-for-GroupsWG⑤">Working Group</a>, each participant (W3C Members, W3C Team members, invited experts, and members of the public) shall agree to make Specification <a href="#licensing-commitment" id="ref-for-licensing-commitment">Licensing Commitments</a> under <a href="#def-RF" id="ref-for-def-RF①">W3C RF licensing requirements</a> for any <a href="#essential-claims" id="ref-for-essential-claims②">Essential Claims</a> related to the work of that particular <span id="ref-for-GroupsWG⑥">Working Group</span> that are not excluded pursuant to [section 4](#sec-Exclusion). This requirement includes <span id="ref-for-essential-claims③">Essential Claims</span> that the <a href="#participant" id="ref-for-participant②">participant</a> owns and any that the <span id="ref-for-participant③">participant</span> has the right to license without obligation of payment or other consideration to an unrelated third party. With the exception of the provisions of [section 4](#sec-Exclusion) below, W3C RF licensing obligations made concerning the work of the particular <span id="ref-for-GroupsWG⑦">Working Group</span> and described in this policy are binding on <span id="ref-for-participant④">participants</span> for the life of the patents in question and encumber the patents containing <span id="ref-for-essential-claims④">Essential Claims</span>, regardless of changes in participation status or W3C Membership.

### <span class="secno">3.2. </span><span class="content"> Limitation on Licensing Requirement for Non-Participating Members</span><a href="#sec-non-participants" class="self-link"></a>

Only the affirmative act of joining a <a href="https://www.w3.org/Consortium/Process/#GroupsWG" id="ref-for-GroupsWG⑧">Working Group</a>, or otherwise agreeing to the licensing terms described here, will obligate a Member to the W3C RF licensing commitments. Mere Membership in W3C alone, without other factors, does not give rise to the RF licensing obligation under this policy.

### <span class="secno">3.3. </span><span class="content"> Licensing Commitments in W3C Submissions</span><a href="#sec-submissions" class="self-link"></a>

At the time a <a href="https://www.w3.org/Consortium/Process/#MemberSubmission" id="ref-for-MemberSubmission">W3C Member Submission</a> [\[PROCESS, section 10](https://www.w3.org/Consortium/Process/#Submission)\] is made, all Submitters and any others who provide patent licenses associated with the submitted document must indicate whether or not each entity (Submitters and other licensors) will offer a license according to the <a href="#def-RF" id="ref-for-def-RF②">W3C RF licensing requirements</a> for any portion of the <span id="ref-for-MemberSubmission①">Member Submission</span> that is subsequently incorporated in a <a href="#patent-review-draft" id="ref-for-patent-review-draft">Patent Review Draft</a> or <a href="https://www.w3.org/Consortium/Process/#RecsW3C" id="ref-for-RecsW3C①">Recommendation</a>. The W3C Team may acknowledge the <span id="ref-for-MemberSubmission②">Member Submission</span> if the answer to the licensing commitment is either affirmative or negative, and shall not acknowledge the <span id="ref-for-MemberSubmission③">Member Submission</span> if no response is provided.

### <span class="secno">3.4. </span><span class="content"> Note on Licensing Commitments for Invited Experts</span><a href="#sec-invited" class="self-link"></a>

<a href="https://www.w3.org/Consortium/Process/#invited-expert-wg" id="ref-for-invited-expert-wg">Invited experts</a> participate in <a href="https://www.w3.org/Consortium/Process/#GroupsWG" id="ref-for-GroupsWG⑨">Working Groups</a> in their individual capacity. An <span id="ref-for-invited-expert-wg①">invited expert</span> is only obliged to license those claims over which s/he exercises control.

### <span class="secno">3.5. </span><span class="content"> Specification Licensing Commitments</span><a href="#%23spec-licensing-commitments" class="self-link"></a>

<a href="https://www.w3.org/Consortium/Process/#GroupsWG" id="ref-for-GroupsWG①⓪">Working Group</a> <a href="#participant" id="ref-for-participant⑤">participants</a> who forego the right to exclude <a href="#essential-claims" id="ref-for-essential-claims⑤">Essential Claims</a> against a <a href="#specification" id="ref-for-specification⑤">Specification</a> when provided the opportunity to do so see [section 4](#sec-Exclusion), commit to license those <span id="ref-for-essential-claims⑥">Essential Claims</span> under the <a href="#def-RF" id="ref-for-def-RF③">W3C Royalty-Free Licensing Requirements</a>. This <span id="ref-for-specification⑥">Specification</span> Licensing Commitment is effective at the later of:

1.  The first publication of the <a href="#specification" id="ref-for-specification⑦">Specification</a> (after <a href="#participant" id="ref-for-participant⑥">participant</a> joins the <a href="https://www.w3.org/Consortium/Process/#GroupsWG" id="ref-for-GroupsWG①①">Working Group</a>) as either a <a href="#patent-review-draft" id="ref-for-patent-review-draft①">Patent Review Draft</a> or <a href="https://www.w3.org/Consortium/Process/#RecsW3C" id="ref-for-RecsW3C②">Recommendation</a> in which the claim is <a href="#essential-claims" id="ref-for-essential-claims⑦">essential</a>;
2.  The end of the <a href="#participant" id="ref-for-participant⑦">participant</a>’s first <a href="#exclusion-opportunity" id="ref-for-exclusion-opportunity">Exclusion Opportunity</a> pertaining to that claim.

### <span class="secno">3.6. </span><span class="content"> Licensing Commitment Persistence</span><a href="#commitment-persistence" class="self-link"></a>

If a <a href="https://www.w3.org/Consortium/Process/#GroupsWG" id="ref-for-GroupsWG①②">Working Group</a> <a href="#participant" id="ref-for-participant⑧">participant</a> makes <a href="#licensing-commitment" id="ref-for-licensing-commitment①">Licensing Commitments</a> on a <a href="#specification" id="ref-for-specification⑧">Specification</a> for an <a href="#essential-claims" id="ref-for-essential-claims⑧">Essential Claim</a>, the <span id="ref-for-licensing-commitment②">Licensing Commitment</span> carries forward to a subsequent <a href="#patent-review-draft" id="ref-for-patent-review-draft②">Patent Review Draft</a> or <a href="https://www.w3.org/Consortium/Process/#RecsW3C" id="ref-for-RecsW3C③">Recommendation</a> of the <span id="ref-for-specification⑨">Specification</span> if:

1.  the subsequent <a href="#patent-review-draft" id="ref-for-patent-review-draft③">Patent Review Draft</a> or <a href="https://www.w3.org/Consortium/Process/#RecsW3C" id="ref-for-RecsW3C④">Recommendation</a> uses the <a href="#essential-claims" id="ref-for-essential-claims⑨">Essential Claim</a> in a substantially similar manner and to a substantially similar extent with a substantially similar result as the <span id="ref-for-essential-claims①⓪">Essential Claim</span> was used in the <a href="#specification" id="ref-for-specification①⓪">Specification</a> on which the <a href="https://www.w3.org/Consortium/Process/#GroupsWG" id="ref-for-GroupsWG①③">Working Group</a> <a href="#participant" id="ref-for-participant⑨">participant</a> made the <a href="#licensing-commitment" id="ref-for-licensing-commitment③">Licensing Commitment</a>; and
2.  the subsequent <a href="#patent-review-draft" id="ref-for-patent-review-draft④">Patent Review Draft</a> or <a href="https://www.w3.org/Consortium/Process/#RecsW3C" id="ref-for-RecsW3C⑤">Recommendation</a> is within, or only a minor expansion of, the scope of the <a href="https://www.w3.org/Consortium/Process/#WGCharter" id="ref-for-WGCharter②">Working Group’s charter</a> as it existed at the time of the <a href="#participant" id="ref-for-participant①⓪">participant</a>’s <a href="#licensing-commitment" id="ref-for-licensing-commitment④">Licensing Commitment</a> to the <a href="#specification" id="ref-for-specification①①">Specification</a>.

In addition, even if the above requirements are not met, if an implementation of a subsequent <a href="#patent-review-draft" id="ref-for-patent-review-draft⑤">Patent Review Draft</a> is also an implementation of a prior <span id="ref-for-patent-review-draft⑥">Patent Review Draft</span>, then implementation of the subsequent <span id="ref-for-patent-review-draft⑦">Patent Review Draft</span> or <a href="https://www.w3.org/Consortium/Process/#RecsW3C" id="ref-for-RecsW3C⑥">Recommendation</a> will also benefit from the license commitments made by <a href="#participant" id="ref-for-participant①①">participants</a> in the <a href="https://www.w3.org/Consortium/Process/#GroupsWG" id="ref-for-GroupsWG①④">Working Group</a> that developed the prior <span id="ref-for-patent-review-draft⑧">Patent Review Draft</span> or <span id="ref-for-RecsW3C⑦">Recommendation</span>.

<span class="secno">4. </span><span class="content"> Exclusion From W3C RF Licensing Requirements</span><a href="#sec-Exclusion" class="self-link"></a>
-------------------------------------------------------------------------------------------------------------------------------------------------------

Under the following conditions, <a href="https://www.w3.org/Consortium/Process/#GroupsWG" id="ref-for-GroupsWG①⑤">Working Group</a> <a href="#participant" id="ref-for-participant①②">participants</a> may exclude specifically identified and disclosed <a href="#essential-claims" id="ref-for-essential-claims①①">Essential Claims</a> from the overall <a href="#def-RF" id="ref-for-def-RF④">W3C RF licensing requirements</a>:

### <span class="secno">4.1. </span><span class="content"> Exclusion With Continued Participation</span><a href="#sec-exclusion-with" class="self-link"></a>

Specific <a href="#essential-claims" id="ref-for-essential-claims①②">Essential Claims</a> may be excluded from the [W3C RF licensing requirements](#sec-W3C-RF-license) by a <a href="#participant" id="ref-for-participant①③">participant</a> who seeks to remain in the Working Group but only if that <span id="ref-for-participant①④">participant</span> indicates its refusal to license specific <span id="ref-for-essential-claims①③">Essential Claims</span> by specifically disclosing them as required in [§ 4.5 Exclusion Mechanics](#sec-exclude-mech) during an Exclusion Opportunity. The <a href="#exclusion-opportunity" id="ref-for-exclusion-opportunity①">Exclusion Opportunity</a> and its duration, as described herein, are announced with a <a href="#call-for-exclusion" id="ref-for-call-for-exclusion">Call for Exclusions</a>.

A <a href="#participant" id="ref-for-participant①⑤">participant</a> may exclude from the <a href="#def-RF" id="ref-for-def-RF⑤">W3C RF licensing requirements</a> any of their <a href="#essential-claims" id="ref-for-essential-claims①④">Essential Claims</a> in a <a href="https://www.w3.org/Consortium/Process/#fpwd" id="ref-for-fpwd">First Public Working Draft</a> [\[PROCESS\]](#biblio-process), or if there is any update to the <a href="#specification" id="ref-for-specification①②">Specification</a> published within 90 days thereafter, in that latest <span id="ref-for-specification①③">Specification</span>, within a 150-day <a href="#exclusion-opportunity" id="ref-for-exclusion-opportunity②">Exclusion Opportunity</a> that begins upon publication of the <span id="ref-for-fpwd①">First Public Working Draft</span>.

Additionally, if any claims are made <a href="#essential-claims" id="ref-for-essential-claims①⑤">essential</a> by a <a href="#patent-review-draft" id="ref-for-patent-review-draft⑨">Patent Review Draft</a> as a result of subject matter not present or apparent at a previous <a href="#exclusion-opportunity" id="ref-for-exclusion-opportunity③">Exclusion Opportunity</a>, the <a href="#participant" id="ref-for-participant①⑥">participant</a> may exclude these new <span id="ref-for-essential-claims①⑥">Essential Claims</span>, and only these claims, by excluding them within a 60-day <span id="ref-for-exclusion-opportunity④">Exclusion Opportunity</span> that begins upon the publication of the <span id="ref-for-patent-review-draft①⓪">Patent Review Draft</span>

A participant who excludes <a href="#essential-claims" id="ref-for-essential-claims①⑦">Essential Claims</a> may continue to participate in the <a href="https://www.w3.org/Consortium/Process/#GroupsWG" id="ref-for-GroupsWG①⑥">Working Group</a>.

### <span class="secno">4.2. </span><span class="content"> Exclusion and Resignation From the Working Group</span><a href="#sec-exclusion-resign" class="self-link"></a>

A <a href="#participant" id="ref-for-participant①⑦">participant</a> may resign from the <a href="https://www.w3.org/Consortium/Process/#GroupsWG" id="ref-for-GroupsWG①⑦">Working Group</a> within 90 days after the publication of the <a href="https://www.w3.org/Consortium/Process/#fpwd" id="ref-for-fpwd②">First Public Working Draft</a> of a <a href="#specification" id="ref-for-specification①④">Specification</a> and be excused from all Specification <a href="#licensing-commitment" id="ref-for-licensing-commitment⑤">Licensing Commitments</a> arising out of <span id="ref-for-GroupsWG①⑧">Working Group</span> participation with respect to that <span id="ref-for-specification①⑤">Specification</span>.

If a <a href="#participant" id="ref-for-participant①⑧">participant</a> leaves the <a href="https://www.w3.org/Consortium/Process/#GroupsWG" id="ref-for-GroupsWG①⑨">Working Group</a> later than 90 days after the publication of a <a href="https://www.w3.org/Consortium/Process/#fpwd" id="ref-for-fpwd③">First Public Working Draft</a>, that <span id="ref-for-participant①⑨">participant</span> is bound to license <a href="#essential-claims" id="ref-for-essential-claims①⑧">Essential Claims</a> pertaining to that <a href="#specification" id="ref-for-specification①⑥">Specification</a> based on subject matter contained in the latest <a href="https://www.w3.org/Consortium/Process/#RecsWD" id="ref-for-RecsWD">Working Draft</a> or <a href="#patent-review-draft" id="ref-for-patent-review-draft①①">Patent Review Draft</a> published before the <span id="ref-for-participant②⓪">participant</span> resigned from the <span id="ref-for-GroupsWG②⓪">Working Group</span>, and in all previous <span id="ref-for-patent-review-draft①②">Patent Review Drafts</span> and <span id="ref-for-RecsWD①">Working Drafts</span> to which the <span id="ref-for-participant②①">participant</span> was committed, subject to any exclusion made by the <span id="ref-for-participant②②">participant</span>.

In addition, departing <a href="#participant" id="ref-for-participant②③">participants</a> have a 60-day <a href="#exclusion-opportunity" id="ref-for-exclusion-opportunity⑤">Exclusion Opportunity</a> after their actual resignation to exclude <a href="#essential-claims" id="ref-for-essential-claims①⑨">Essential Claims</a> if:

1.  such claims are <a href="#essential-claims" id="ref-for-essential-claims②⓪">essential</a> to subject matter that is contained in the latest <a href="https://www.w3.org/Consortium/Process/#RecsWD" id="ref-for-RecsWD②">Working Draft</a> published before the <a href="#participant" id="ref-for-participant②④">participant</a> resigns, and
2.  such subject matter is not present or apparent in a publication of that <a href="#specification" id="ref-for-specification①⑦">Specification</a> on which the departing <a href="#participant" id="ref-for-participant②⑤">participant</a> had an <a href="#exclusion-opportunity" id="ref-for-exclusion-opportunity⑥">Exclusion Opportunity</a>.

The <a href="#participant" id="ref-for-participant②⑥">participant</a> follows the same procedures specified in this [section 4](#sec-Exclusion) for excluding claims in issued patents, published applications, and unpublished applications. <span id="ref-for-participant②⑦">Participants</span> resigning from a <a href="https://www.w3.org/Consortium/Process/#GroupsWG" id="ref-for-GroupsWG②①">Working Group</a> are still subject to all <a href="#disclosure" id="ref-for-disclosure①">disclosure</a> obligations described in [section 6](#sec-Disclosure).

### <span class="secno">4.3. </span><span class="content"> Joining an Already Established Working Group</span><a href="#sec-join" class="self-link"></a>

<a href="#participant" id="ref-for-participant②⑧">Participants</a> who join a <a href="https://www.w3.org/Consortium/Process/#GroupsWG" id="ref-for-GroupsWG②②">Working Group</a> more than 90 days after the publication of a <a href="https://www.w3.org/Consortium/Process/#fpwd" id="ref-for-fpwd④">First Public Working Draft</a> of a <a href="#specification" id="ref-for-specification①⑧">Specification</a> that has not yet been published as a <a href="#patent-review-draft" id="ref-for-patent-review-draft①③">Patent Review Draft</a> or <a href="https://www.w3.org/Consortium/Process/#RecsW3C" id="ref-for-RecsW3C⑧">Recommendation</a> must exclude <a href="#essential-claims" id="ref-for-essential-claims②①">Essential Claims</a> covered in the latest <a href="https://www.w3.org/Consortium/Process/#RecsWD" id="ref-for-RecsWD③">Working Draft</a> published within 90 days after the <span id="ref-for-fpwd⑤">First Public Working Draft</span> at the later of 150 days after the publication of the <span id="ref-for-fpwd⑥">First Public Working Draft</span> or upon joining the <span id="ref-for-GroupsWG②③">Working Group</span>.

<a href="#participant" id="ref-for-participant②⑨">Participants</a> who join a <a href="https://www.w3.org/Consortium/Process/#GroupsWG" id="ref-for-GroupsWG②④">Working Group</a> after publication of a <a href="#patent-review-draft" id="ref-for-patent-review-draft①④">Patent Review Draft</a> must exclude <a href="#essential-claims" id="ref-for-essential-claims②②">Essential Claims</a> covered in the latest <span id="ref-for-patent-review-draft①⑤">Patent Review Draft</span> at the later of 60 days after the publication of that <span id="ref-for-patent-review-draft①⑥">Patent Review Draft</span> or upon joining the <span id="ref-for-GroupsWG②⑤">Working Group</span>. Their <a href="#licensing-commitment" id="ref-for-licensing-commitment⑥">Licensing Commitment</a> becomes effective at publication of the first <span id="ref-for-patent-review-draft①⑦">Patent Review Draft</span> or <a href="https://www.w3.org/Consortium/Process/#RecsW3C" id="ref-for-RecsW3C⑨">Recommendation</a> after <span id="ref-for-participant③⓪">participant</span> joins the <span id="ref-for-GroupsWG②⑥">Working Group</span>.

### <span class="secno">4.4. </span><span class="content"> Exclusion Procedures for Pending, Unpublished Patent Applications</span><a href="#sec-exclude-app" class="self-link"></a>

Exclusion of <a href="#essential-claims" id="ref-for-essential-claims②③">Essential Claims</a> in pending, unpublished applications follows the procedures for exclusion of issued claims and claims in published applications in [section 4.1](#sec-exclusion-with) through [4.3](#sec-join), except that the final deadline for exclusion of unpublished claims is at <a href="#patent-review-draft" id="ref-for-patent-review-draft①⑧">Patent Review Draft</a> plus 60 days for any material, regardless of whether or not it was contained in the documents referenced in the <a href="#call-for-exclusion" id="ref-for-call-for-exclusion①">Call for Exclusion</a> document. Nevertheless, <a href="#participant" id="ref-for-participant③①">participants</a> have a good faith obligation to make such exclusions as soon as is practical after the publication of the first <a href="https://www.w3.org/Consortium/Process/#RecsWD" id="ref-for-RecsWD④">Working Draft</a> that includes the relevant technology.

Any exclusion of an <a href="#essential-claims" id="ref-for-essential-claims②④">Essential Claim</a> in an unpublished application must provide either:

1.  the text of the filed application; or
2.  identification of the subsection(s) of the <a href="#specification" id="ref-for-specification①⑨">Specification</a> whose implementation makes the excluded claim <a href="#essential-claims" id="ref-for-essential-claims②⑤">essential</a>.

If option 2 is chosen, the effect of the exclusion will be limited to the identified part(s) of the specification.

### <span class="secno">4.5. </span><span class="content"> Exclusion Mechanics</span><a href="#sec-exclude-mech" class="self-link"></a>

A Call for Exclusion will be issued by the W3C indicating the relevant documents against which <a href="#participant" id="ref-for-participant③②">participants</a> must make exclusion statements as well as precise dates and deadlines for making any exclusions. In case there is any dispute about the dates for exclusion, the dates indicated in the <a href="#call-for-exclusion" id="ref-for-call-for-exclusion②">Call for Exclusion</a> are controlling. The <span id="ref-for-call-for-exclusion③">Call for Exclusion</span> will be sent to the <a href="https://www.w3.org/Consortium/Process/#GroupsWG" id="ref-for-GroupsWG②⑦">Working Group</a> mailing list and the <a href="https://www.w3.org/Consortium/Process/#AC" id="ref-for-AC">Advisory Committee</a> Representatives of all organizations participating in the <span id="ref-for-GroupsWG②⑧">Working Group</span>. In the event that a <span id="ref-for-GroupsWG②⑨">Working Group</span> issues more than one <a href="#specification" id="ref-for-specification②⓪">Specification</a> the exclusion procedure will be employed for each series of documents individually.

Any exclusion of an <a href="#essential-claims" id="ref-for-essential-claims②⑥">Essential Claim</a> must disclose:

1.  the patent number or the publication number assigned to the patent application for a published application; and
2.  identification of the subsection(s) of the <a href="#specification" id="ref-for-specification②①">Specification</a> whose implementation makes the excluded claim <a href="#essential-claims" id="ref-for-essential-claims②⑦">essential</a>.

<span class="secno">5. </span><span class="content"> W3C Royalty-Free (RF) Licensing Requirements</span><a href="#sec-Requirements" class="self-link"></a>
----------------------------------------------------------------------------------------------------------------------------------------------------------

With respect to a <a href="#patent-review-draft" id="ref-for-patent-review-draft①⑨">Patent Review Draft</a> or <a href="https://www.w3.org/Consortium/Process/#RecsW3C" id="ref-for-RecsW3C①⓪">Recommendation</a> developed under this policy, a W3C Royalty-Free license shall mean a non-assignable, non-sublicensable license to make, have made, use, sell, have sold, offer to sell, import, and distribute and dispose of implementations of the <span id="ref-for-patent-review-draft②⓪">Patent Review Draft</span> or <span id="ref-for-RecsW3C①①">Recommendation</span> that:

> 1. shall be available to all, worldwide, whether or not they are W3C Members;
>
> 2. shall extend to all <a href="#essential-claims" id="ref-for-essential-claims②⑧">Essential Claims</a> owned or controlled by the licensor;
>
> 3. may be limited to implementations of the <a href="#patent-review-draft" id="ref-for-patent-review-draft②①">Patent Review Draft</a> or <a href="https://www.w3.org/Consortium/Process/#RecsW3C" id="ref-for-RecsW3C①②">Recommendation</a>, and to what is required by the <span id="ref-for-patent-review-draft②②">Patent Review Draft</span> or <span id="ref-for-RecsW3C①③">Recommendation</span>;
>
> 4. may be conditioned on a grant of a reciprocal <a href="#def-RF" id="ref-for-def-RF⑥">RF license</a> (as defined in this policy) to all <a href="#essential-claims" id="ref-for-essential-claims②⑨">Essential Claims</a> owned or controlled by the licensee. A reciprocal license may be required to be available to all, and a reciprocal license may itself be conditioned on a further reciprocal license from all.
>
> 5. may not be conditioned on payment of royalties, fees or other consideration;
>
> 6. may be suspended with respect to any licensee when licensor is sued by licensee for infringement of claims <a href="#essential-claims" id="ref-for-essential-claims③⓪">essential</a> to implement any <a href="#patent-review-draft" id="ref-for-patent-review-draft②③">Patent Review Draft</a> or <a href="https://www.w3.org/Consortium/Process/#RecsW3C" id="ref-for-RecsW3C①④">W3C Recommendation</a>;
>
> 7. may not impose any further conditions or restrictions on the use of any technology, intellectual property rights, or other restrictions on behavior of the licensee, but may include reasonable, customary terms relating to operation or maintenance of the license relationship such as the following: choice of law and dispute resolution;
>
> 8. shall not be considered accepted by an implementer who manifests an intent **not** to accept the terms of the W3C Royalty-Free license as offered by the licensor.
>
> License term:
>
> 9. The <a href="#def-RF" id="ref-for-def-RF⑦">RF license</a> conforming to the requirements in this policy shall be made available by the licensor subject to the limitations of 5(10). The term of such license shall be for the life of the patents in question,
>
> 10. If the <a href="#patent-review-draft" id="ref-for-patent-review-draft②④">Patent Review Draft</a> or <a href="https://www.w3.org/Consortium/Process/#RecsW3C" id="ref-for-RecsW3C①⑤">Recommendation</a> is <a href="https://www.w3.org/Consortium/Process/#rec-rescind" id="ref-for-rec-rescind">rescinded</a> [\[PROCESS, section 6.9](https://www.w3.org/Consortium/Process/#rec-rescind)\] by W3C, then no new licenses need be granted but any licenses granted before the <span id="ref-for-patent-review-draft②⑤">Patent Review Draft</span> or <span id="ref-for-RecsW3C①⑥">Recommendation</span> was <span id="ref-for-rec-rescind①">rescinded</span> shall remain in effect.

All <a href="https://www.w3.org/Consortium/Process/#GroupsWG" id="ref-for-GroupsWG③⓪">Working Group</a> <a href="#participant" id="ref-for-participant③③">participants</a> are encouraged to provide a contact from which licensing information can be obtained and other relevant licensing information. Any such information will be made publicly available along with the patent <a href="#disclosure" id="ref-for-disclosure②">disclosures</a> for the <span id="ref-for-GroupsWG③①">Working Group</span> in question.

<span class="secno">6. </span><span class="content"> Disclosure</span><a href="#sec-Disclosure" class="self-link"></a>
----------------------------------------------------------------------------------------------------------------------

### <span class="secno">6.1. </span><span class="content"> Disclosure Requirements</span><a href="#sec-disclosure-requirements" class="self-link"></a>

Disclosure is required when both of the following are true:

1.  an individual in a Member organization receives a <a href="#disclosure-requests" id="ref-for-disclosure-requests">disclosure request</a> as described in [section 6.3](#sec-disclosure-requests); and
2.  that individual has actual knowledge of a patent which the individual believes contains <a href="#essential-claims" id="ref-for-essential-claims③①">Essential Claim</a>(s) with respect to the <a href="#specification" id="ref-for-specification②②">Specification</a> for which disclosure is <a href="#disclosure-requests" id="ref-for-disclosure-requests①">requested</a>.

Anyone in a Member organization who receives a <a href="#disclosure-requests" id="ref-for-disclosure-requests②">disclosure request</a> and who has such knowledge must inform that <a href="https://w3c.github.io/w3process/#advisory-committee-representative" id="ref-for-advisory-committee-representative">AC Rep</a>. Where <a href="#disclosure" id="ref-for-disclosure③">disclosure</a> is required, the <span id="ref-for-advisory-committee-representative①">AC Rep</span> will do so.

### <span class="secno">6.2. </span><span class="content"> Disclosure Exemption</span><a href="#sec-disclosure-exemption" class="self-link"></a>

The <a href="#disclosure" id="ref-for-disclosure④">disclosure</a> obligation as to a particular claim is satisfied if the holder of the claim has made a commitment to license that claim under <a href="#def-RF" id="ref-for-def-RF⑧">W3C RF licensing requirements</a> and the claim is no longer subject to exclusion under [section 4](#sec-Exclusion). An <a href="#essential-claims" id="ref-for-essential-claims③②">Essential Claim</a> is no longer subject to exclusion if a patent holder has affirmatively agreed to license the <span id="ref-for-essential-claims③③">Essential Claim</span> (effectively waiving its right to exclude such patent under [section 4](#sec-Exclusion)) or if the relevant exclusion period under [section 4](#sec-Exclusion) has lapsed.

### <span class="secno">6.3. </span><span class="content"> Disclosure Requests</span><a href="#sec-disclosure-requests" class="self-link"></a>

Disclosure requests will be included in each <a href="#specification" id="ref-for-specification②③">Specification</a>. Separate requests may be issued by the W3C to any party suspected of having knowledge of <a href="#essential-claims" id="ref-for-essential-claims③④">Essential Claims</a>. Such <a href="#disclosure-requests" id="ref-for-disclosure-requests③">disclosure requests</a> will instruct the recipient to respond through their <a href="https://w3c.github.io/w3process/#advisory-committee-representative" id="ref-for-advisory-committee-representative②">AC Rep</a> (in the case of Members) or a W3C contact (in the case of non-Members). <span id="ref-for-disclosure-requests④">Disclosure requests</span> other than those that appear in the <span id="ref-for-specification②④">Specification</span> itself should be directed to the AC Rep.

<a href="#disclosure-requests" id="ref-for-disclosure-requests⑤">Disclosure requests</a> will provide administrative details for making disclosures.

### <span class="secno">6.4. </span><span class="content"> Disclosure Contents</span><a href="#sec-disclosure-contents" class="self-link"></a>

<a href="#disclosure" id="ref-for-disclosure⑤">Disclosure</a> statements must include:

1.  the patent number, but need not mention specific claims
2.  the <a href="https://www.w3.org/Consortium/Process/#GroupsWG" id="ref-for-GroupsWG③②">Working Group</a> and/or <a href="#specification" id="ref-for-specification②⑤">Specification</a> to which it applies

### <span class="secno">6.5. </span><span class="content"> Disclosure of Laid-Open or Published Applications</span><a href="#sec-published" class="self-link"></a>

In the case of laid-open or published applications, the Member’s good faith <a href="#disclosure" id="ref-for-disclosure⑥">disclosure</a> obligation extends to unpublished amended and/or added claims that have been allowed by relevant legal authorities and that the Member believes to be <a href="#essential-claims" id="ref-for-essential-claims③⑤">Essential Claims</a>. To satisfy the <span id="ref-for-disclosure⑦">disclosure</span> obligation for such claims, the Member shall either:

1.  disclose such claims, or
2.  identify those portions of the <a href="#specification" id="ref-for-specification②⑥">Specification</a> likely to be covered by such claims.

### <span class="secno">6.6. </span><span class="content"> Disclosure of Pending, Unpublished Applications</span><a href="#sec-pending" class="self-link"></a>

If a W3C Member includes claims in a patent application and such claims were developed based on information from a W3C <a href="https://www.w3.org/Consortium/Process/#GroupsWG" id="ref-for-GroupsWG③③">Working Group</a> or W3C document, the Member must disclose the existence of such pending unpublished applications.

### <span class="secno">6.7. </span><span class="content"> Good Faith Disclosure Standards</span><a href="#sec-good-faith" class="self-link"></a>

Satisfaction of the <a href="#disclosure-requirement" id="ref-for-disclosure-requirement">disclosure requirement</a> does not require that the discloser perform a patent search or any analysis of the relationship between the patents that the Member organization holds and the <a href="#specification" id="ref-for-specification②⑦">Specification</a> in question.

<a href="#disclosure" id="ref-for-disclosure⑧">Disclosure</a> of third party patents is only required where the <a href="https://w3c.github.io/w3process/#advisory-committee-representative" id="ref-for-advisory-committee-representative③">Advisory Committee Representative</a> or <a href="https://www.w3.org/Consortium/Process/#GroupsWG" id="ref-for-GroupsWG③④">Working Group</a> <a href="#participant" id="ref-for-participant③④">participant</a> has been made aware that the third party patent holder or applicant has asserted that its patent contains <a href="#essential-claims" id="ref-for-essential-claims③⑥">Essential Claims</a>, unless such <span id="ref-for-disclosure⑨">disclosure</span> would breach a pre-existing non-disclosure obligation.

### <span class="secno">6.8. </span><span class="content"> Timing of Disclosure Obligations</span><a href="#sec-disclosure-timing" class="self-link"></a>

The <a href="#disclosure" id="ref-for-disclosure①⓪">disclosure</a> obligation is an ongoing obligation that begins with the <a href="https://www.w3.org/Consortium/Process/#cfp" id="ref-for-cfp①">Call for Participation</a>. Full satisfaction of the <span id="ref-for-disclosure①①">disclosure</span> obligation may not be possible until later in the process when the design is more complete. In any case, <span id="ref-for-disclosure①②">disclosure</span> as soon as practically possible is required.

### <span class="secno">6.9. </span><span class="content"> Termination of Disclosure Obligations</span><a href="#sec-disclosure-termination" class="self-link"></a>

The <a href="#disclosure" id="ref-for-disclosure①③">disclosure</a> obligation terminates when the <a href="https://www.w3.org/Consortium/Process/#RecsW3C" id="ref-for-RecsW3C①⑦">Recommendation</a> is published or when the <a href="https://www.w3.org/Consortium/Process/#GroupsWG" id="ref-for-GroupsWG③⑤">Working Group</a> terminates.

### <span class="secno">6.10. </span><span class="content"> Disclosure Obligations of Invited Experts</span><a href="#sec-disclosure-invite" class="self-link"></a>

<a href="https://www.w3.org/Consortium/Process/#invited-expert-wg" id="ref-for-invited-expert-wg②">Invited experts</a> or members of the public participating in a <a href="https://www.w3.org/Consortium/Process/#GroupsWG" id="ref-for-GroupsWG③⑥">Working Group</a> must comply with <a href="#disclosure" id="ref-for-disclosure①④">disclosure</a> obligations to the extent of their own personal knowledge.

### <span class="secno">6.11. </span><span class="content"> Disclosures to Be Publicly Available on Recommendation Track</span><a href="#sec-disclosure-public" class="self-link"></a>

Patent <a href="#disclosure" id="ref-for-disclosure①⑤">disclosure</a> information for each <a href="#specification" id="ref-for-specification②⑧">Specification</a> will be made public along with each public <a href="https://www.w3.org/Consortium/Process/#RecsWD" id="ref-for-RecsWD⑤">Working Draft</a> issued by the <a href="https://www.w3.org/Consortium/Process/#GroupsWG" id="ref-for-GroupsWG③⑦">Working Group</a>.

<span class="secno">7. </span><span class="content"> Exception Handling</span><a href="#sec-Exception" class="self-link"></a>
-----------------------------------------------------------------------------------------------------------------------------

### <span class="secno">7.1. </span><span class="content"> PAG Formation</span><a href="#sec-PAG-formation" class="self-link"></a>

In the event a patent has been disclosed that may be essential, but is not available under <a href="#def-RF" id="ref-for-def-RF⑨">W3C RF licensing requirements</a>, a Patent Advisory Group (PAG) will be launched to resolve the conflict. The <a href="#patent-advisory-group" id="ref-for-patent-advisory-group">PAG</a> is an ad-hoc group constituted specifically in relation to the <a href="https://www.w3.org/Consortium/Process/#GroupsWG" id="ref-for-GroupsWG③⑧">Working Group</a> with the conflict. A <span id="ref-for-patent-advisory-group①">PAG</span> may also be formed without such a disclosure if a <span id="ref-for-patent-advisory-group②">PAG</span> could help avoid anticipated patent problems. During the time that the <span id="ref-for-patent-advisory-group③">PAG</span> is operating, the <span id="ref-for-GroupsWG③⑨">Working Group</span> may continue its technical work within the bounds of its <a href="https://www.w3.org/Consortium/Process/#WGCharter" id="ref-for-WGCharter③">charter</a>.

### <span class="secno">7.2. </span><span class="content"> PAG Formation After a Recommendation Is Issued</span><a href="#sec-PAG-post-Recommendation" class="self-link"></a>

A <a href="#patent-advisory-group" id="ref-for-patent-advisory-group④">PAG</a> may also be convened in the event <a href="#essential-claims" id="ref-for-essential-claims③⑦">Essential Claims</a> are discovered after a <a href="https://www.w3.org/Consortium/Process/#RecsW3C" id="ref-for-RecsW3C①⑧">Recommendation</a> is issued. In this case the <span id="ref-for-patent-advisory-group⑤">PAG</span> will be open to any interested Member, though the <span id="ref-for-patent-advisory-group⑥">PAG</span> may choose to meet without the holder of the <span id="ref-for-essential-claims③⑧">Essential Claims</span> in question.

### <span class="secno">7.3. </span><span class="content"> PAG Composition</span><a href="#sec-PAG-composition" class="self-link"></a>

The <a href="#patent-advisory-group" id="ref-for-patent-advisory-group⑦">PAG</a> is composed of:

-   <a href="https://w3c.github.io/w3process/#advisory-committee-representative" id="ref-for-advisory-committee-representative④">Advisory Committee Representatives</a> of each W3C Member organization participating in the <a href="https://www.w3.org/Consortium/Process/#GroupsWG" id="ref-for-GroupsWG④⓪">Working Group</a> (or alternate designated by the <span id="ref-for-advisory-committee-representative⑤">AC Rep</span>)
-   <a href="https://www.w3.org/Consortium/Process/#GroupsWG" id="ref-for-GroupsWG④①">Working Group</a> Team Contact
-   W3C counsel
-   <a href="https://www.w3.org/Consortium/Process/#GroupsWG" id="ref-for-GroupsWG④②">Working Group</a> Chair, *ex officio*
-   W3C Manager responsible for the <a href="https://www.w3.org/Consortium/Process/#GroupsWG" id="ref-for-GroupsWG④③">Working Group</a>
-   Others suggested by the <a href="https://www.w3.org/Consortium/Process/#GroupsWG" id="ref-for-GroupsWG④④">Working Group</a> Chair and/or the Team with the approval of the Director

W3C Member participants in the <a href="#patent-advisory-group" id="ref-for-patent-advisory-group⑧">PAG</a> should be authorized to represent their organization’s views on patent licensing issues. Any participant in the <span id="ref-for-patent-advisory-group⑨">PAG</span> may also be represented by legal counsel, though this is not required. <a href="https://www.w3.org/Consortium/Process/#invited-expert-wg" id="ref-for-invited-expert-wg③">Invited experts</a> are not entitled to participate in the <span id="ref-for-patent-advisory-group①⓪">PAG</span>, though the <span id="ref-for-patent-advisory-group①①">PAG</span> may chose to invite any qualified experts who would be able to assist the <span id="ref-for-patent-advisory-group①②">PAG</span> in its determinations.

W3C expects to provide qualified legal staffing to all <a href="#patent-advisory-group" id="ref-for-patent-advisory-group①③">PAGs</a> in the form of a Team member who develops experience with the <span id="ref-for-patent-advisory-group①④">PAG</span> process and patent issues at W3C. Legal staff to the <span id="ref-for-patent-advisory-group①⑤">PAG</span> will represent the interests of the Consortium as a whole.

### <span class="secno">7.4. </span><span class="content"> PAG Procedures</span><a href="#sec-PAG-procedures" class="self-link"></a>

#### <span class="secno">7.4.1. </span><span class="content"> PAG Formation Timing</span><a href="#sec-PAG-procedures-timing" class="self-link"></a>

The <a href="#patent-advisory-group" id="ref-for-patent-advisory-group①⑥">PAG</a> will be convened by the <a href="https://www.w3.org/Consortium/Process/#GroupsWG" id="ref-for-GroupsWG④⑤">Working Group</a> Team Contact, based on a charter developed initially by the Team. The timing for convening the <span id="ref-for-patent-advisory-group①⑦">PAG</span> is at the discretion of the Director, based on consultation with the Chair of the <span id="ref-for-GroupsWG④⑥">Working Group</span>. In some cases, convening a <span id="ref-for-patent-advisory-group①⑧">PAG</span> before a specific patent <a href="#disclosure" id="ref-for-disclosure①⑥">disclosure</a> is made may be useful. In other cases, it may be that the <span id="ref-for-patent-advisory-group①⑨">PAG</span> can better resolve the licensing problems when the <a href="#specification" id="ref-for-specification②⑨">Specification</a> is at the <a href="https://www.w3.org/Consortium/Process/#RecsCR" id="ref-for-RecsCR">Candidate Recommendation</a> <a href="https://www.w3.org/Consortium/Process/#maturity-levels" id="ref-for-maturity-levels">maturity level</a>.

#### <span class="secno">7.4.2. </span><span class="content"> PAG Charter Requirements</span><a href="#sec-PAG-procedures-charter" class="self-link"></a>

The charter should include:

-   clear goals for the <a href="#patent-advisory-group" id="ref-for-patent-advisory-group②⓪">PAG</a>, especially a statement of the question(s) the <span id="ref-for-patent-advisory-group②①">PAG</span> is to answer.
-   duration.
-   confidentiality status, which must follow the underlying <a href="https://www.w3.org/Consortium/Process/#GroupsWG" id="ref-for-GroupsWG④⑦">Working Group</a> (<a href="https://www.w3.org/Consortium/Process/#Member-only" id="ref-for-Member-only">Member only</a>, public, etc.).

The <a href="#patent-advisory-group" id="ref-for-patent-advisory-group②②">PAG</a> charter must specify deadlines for completion of individual work items it takes on. The <span id="ref-for-patent-advisory-group②③">PAG</span>, once convened, may propose changes to its charter as appropriate, to be accepted based on consensus of the <span id="ref-for-patent-advisory-group②④">PAG</span> participants. The Team will choose a member of the <span id="ref-for-patent-advisory-group②⑤">PAG</span> to serve as Chair. A single <span id="ref-for-patent-advisory-group②⑥">PAG</span> may exist for the duration of the <a href="https://www.w3.org/Consortium/Process/#GroupsWG" id="ref-for-GroupsWG④⑧">Working Group</a> with which it is associated if needed.

In order to obtain input from the interested public at large, as soon as the <a href="#patent-advisory-group" id="ref-for-patent-advisory-group②⑦">PAG</a> is convened, the <span id="ref-for-patent-advisory-group②⑧">PAG</span> charter will be made public, along with all of the patent <a href="#disclosure" id="ref-for-disclosure①⑦">disclosure</a> and licensing statements applicable to the <a href="https://www.w3.org/Consortium/Process/#GroupsWG" id="ref-for-GroupsWG④⑨">Working Group</a> in question.

### <span class="secno">7.5. </span><span class="content"> PAG Conclusion</span><a href="#sec-PAG-conclude" class="self-link"></a>

#### <span class="secno">7.5.1. </span><span class="content"> Possible PAG Conclusions</span><a href="#sec-PAG-conclude-possible" class="self-link"></a>

After appropriate consultation, the <a href="#patent-advisory-group" id="ref-for-patent-advisory-group②⑨">PAG</a> may conclude:

1.  The initial concern has been resolved, enabling the <a href="https://www.w3.org/Consortium/Process/#GroupsWG" id="ref-for-GroupsWG⑤⓪">Working Group</a> to continue.
2.  The <a href="https://www.w3.org/Consortium/Process/#GroupsWG" id="ref-for-GroupsWG⑤①">Working Group</a> should be instructed to consider designing around the identified claims.
3.  The Team should seek further information and evaluation, including and not limited to evaluation of the patents in question or the terms under which <a href="#def-RF" id="ref-for-def-RF①⓪">W3C RF licensing requirements</a> may be met.
4.  The <a href="https://www.w3.org/Consortium/Process/#GroupsWG" id="ref-for-GroupsWG⑤②">Working Group</a>, or its work on the <a href="#specification" id="ref-for-specification③⓪">Specification</a>(s) at issue, should be terminated.
5.  The <a href="#specification" id="ref-for-specification③①">Specification</a> (if it has already been issued) should be <a href="https://www.w3.org/Consortium/Process/#rec-rescind" id="ref-for-rec-rescind②">rescinded</a>.
6.  Alternative licensing terms should be considered. The procedure in [section 7.5.3](#sec-PAG-conclude-alternate) must be followed.

#### <span class="secno">7.5.2. </span><span class="content"> PAG Outcome</span><a href="#sec-PAG-conclude-outcome" class="self-link"></a>

Outcomes 4, 5 or 6 require an <a href="https://www.w3.org/Consortium/Process/#ACReview" id="ref-for-ACReview">Advisory Committee review</a> and Director’s decision. In any case, the <a href="#patent-advisory-group" id="ref-for-patent-advisory-group③⓪">PAG</a> must state its proposal and reasons in a public W3C document.

#### <span class="secno">7.5.3. </span><span class="content"> Procedure for Considering Alternate Licensing Terms</span><a href="#sec-PAG-conclude-alternate" class="self-link"></a>

After having made every effort to resolve the conflict through options 1, 2, and 3 under [7.5.1](#sec-PAG-conclude-possible), the PAG, by <a href="https://www.w3.org/Consortium/Process/#def-Consensus" id="ref-for-def-Consensus">consensus</a> [PROCESS, section 3.3](https://www.w3.org/Consortium/Process/#Consensus)\], may propose that specifically identified patented technology be included in the <a href="#specification" id="ref-for-specification③②">Specification</a> even though such claims are not available according to the <a href="#def-RF" id="ref-for-def-RF①①">W3C RF licensing requirements</a> of this policy ("PAG Proposal"). The <a href="#pag-proposal" id="ref-for-pag-proposal">PAG Proposal</a> must explain:

-   why the chartered goals of the <a href="https://www.w3.org/Consortium/Process/#GroupsWG" id="ref-for-GroupsWG⑤③">Working Group</a> cannot be met without inclusion of the identified technology;
-   how the proposed licensing terms will be consistent with widespread adoption.

The <a href="#pag-proposal" id="ref-for-pag-proposal①">PAG Proposal</a> must include:

-   a complete list of claims and licensing terms of the proposed alternative arrangements; and,
-   a proposed charter for the <a href="https://www.w3.org/Consortium/Process/#GroupsWG" id="ref-for-GroupsWG⑤④">Working Group</a>, unless the <a href="https://www.w3.org/Consortium/Process/#RecsW3C" id="ref-for-RecsW3C①⑨">Recommendation</a> has been issued and no new work is required.

If the Director determines that the <a href="#pag-proposal" id="ref-for-pag-proposal②">PAG Proposal</a> is the best alternative consistent with the W3C mission, the interests of the Web community, and is clearly justified despite the expressed preference of the W3C Membership for RF licensing, then the <span id="ref-for-pag-proposal③">PAG Proposal</span> shall be circulated for public comment and <a href="https://www.w3.org/Consortium/Process/#ACReview" id="ref-for-ACReview①">Advisory Committee review</a>. The Director may also circulate the <span id="ref-for-pag-proposal④">PAG Proposal</span> for <span id="ref-for-ACReview②">Advisory Committee review</span> without such endorsement. Should the <span id="ref-for-pag-proposal⑤">PAG Proposal</span> be rejected, then either sub-paragraph 4 or 5 of [section 7.5.3](#sec-PAG-conclude-alternate) will apply as appropriate, without further action of the <a href="https://www.w3.org/Consortium/Process/#AC" id="ref-for-AC①">Advisory Committee</a>. Members of the <a href="https://www.w3.org/Consortium/Process/#GroupsWG" id="ref-for-GroupsWG⑤⑤">Working Group</a> who are bound to RF terms are not released from their obligations by virtue of the <span id="ref-for-pag-proposal⑥">PAG Proposal</span> alone. As with any newly chartered <span id="ref-for-GroupsWG⑤⑥">Working Group</span>, new commitments must be made, along with possible exclusions. In order to expedite the process, the <span id="ref-for-pag-proposal⑦">PAG Proposal</span> should consider whether additional claims would be excluded under the new charter and include such information in the <span id="ref-for-pag-proposal⑧">PAG Proposal</span>.

<span class="secno">8. </span><span class="content"> Definition of Essential Claims</span><a href="#def-essential" class="self-link"></a>
-----------------------------------------------------------------------------------------------------------------------------------------

### <span class="secno">8.1. </span><span class="content"> Essential Claims</span><a href="#def-essential-definition" class="self-link"></a>

<a href="#essential-claims" id="ref-for-essential-claims③⑨">Essential Claims</a> shall mean all claims in any patent or patent application in any jurisdiction in the world that would necessarily be infringed by implementation of a <a href="#patent-review-draft" id="ref-for-patent-review-draft②⑥">Patent Review Draft</a> or <a href="https://www.w3.org/Consortium/Process/#RecsW3C" id="ref-for-RecsW3C②⓪">Recommendation</a>. A claim is necessarily infringed hereunder only when it is not possible to avoid infringing it because there is no non-infringing alternative for implementing the <a href="#dfn-norm" id="ref-for-dfn-norm">normative</a> portions of the <a href="#specification" id="ref-for-specification③③">Specification</a>. Existence of a non-infringing alternative shall be judged based on the state of the art at the time the first <span id="ref-for-patent-review-draft②⑦">Patent Review Draft</span> containing the relevant normative text was published.

Where this text refers to <a href="#essential-claims" id="ref-for-essential-claims④⓪">Essential Claims</a> with respect to a <a href="#specification" id="ref-for-specification③④">Specification</a> that is neither a <a href="#patent-review-draft" id="ref-for-patent-review-draft②⑧">Patent Review Draft</a> nor a <a href="https://www.w3.org/Consortium/Process/#RecsW3C" id="ref-for-RecsW3C②①">Recommendation</a>, it refers to claims that would be <span id="ref-for-essential-claims④①">Essential Claims</span> if that <span id="ref-for-specification③⑤">Specification</span> were a <span id="ref-for-patent-review-draft②⑨">Patent Review Draft</span> or <span id="ref-for-RecsW3C②②">Recommendation</span>.

### <span class="secno">8.2. </span><span class="content"> Limitations on the Scope of Definition of Essential Claims</span><a href="#def-essential-exclusions" class="self-link"></a>

The following are expressly excluded from and shall not be deemed to constitute <a href="#essential-claims" id="ref-for-essential-claims④②">Essential Claims</a>:

1.  any claims other than as set forth above even if contained in the same patent as <a href="#essential-claims" id="ref-for-essential-claims④③">Essential Claims</a>;
2.  claims which would be infringed only by:
    -   portions of an implementation that are not specified in the <a href="#dfn-norm" id="ref-for-dfn-norm①">normative</a> portions of the <a href="#patent-review-draft" id="ref-for-patent-review-draft③⓪">Patent Review Draft</a> or <a href="https://www.w3.org/Consortium/Process/#RecsW3C" id="ref-for-RecsW3C②③">Recommendation</a>, or
    -   enabling technologies that may be necessary to make or use any product or portion thereof that complies with the <a href="#patent-review-draft" id="ref-for-patent-review-draft②⑥">Patent Review Draft</a> or <a href="https://www.w3.org/Consortium/Process/#RecsW3C" id="ref-for-RecsW3C②④">Recommendation</a> and are not themselves expressly set forth in the <a href="#patent-review-draft" id="ref-for-patent-review-draft②⑥">Patent Review Draft</a> or <span id="ref-for-RecsW3C②⑤">Recommendation</span> (e.g., semiconductor manufacturing technology, compiler technology, object-oriented technology, basic operating system technology, and the like), or
    -   the implementation of technology developed elsewhere and merely incorporated by reference in the body of the <a href="#patent-review-draft" id="ref-for-patent-review-draft②⑥">Patent Review Draft</a> or <a href="https://www.w3.org/Consortium/Process/#RecsW3C" id="ref-for-RecsW3C②⑥">Recommendation</a>;
3.  design patents and design registrations.

### <span class="secno">8.3. </span><span class="content"> Definition of Normative, Optional and Informative</span><a href="#def-essential-requirements" class="self-link"></a>

For purposes of this definition, the normative portions of the <a href="#specification" id="ref-for-specification③⑥">Specification</a> shall be deemed to include only architectural and interoperability requirements. Optional features in the RFC 2119 [\[RFC2119\]](#biblio-rfc2119) sense are considered <a href="#dfn-norm" id="ref-for-dfn-norm②">normative</a> unless they are specifically identified as informative. Implementation examples or any other material that merely illustrate the requirements of the <span id="ref-for-specification③⑦">Specification</span> are informative, rather than <span id="ref-for-dfn-norm③">normative</span>.

<span class="content">References</span><a href="#references" class="self-link"></a>
-----------------------------------------------------------------------------------

### <span class="content">Normative References</span><a href="#normative" class="self-link"></a>

\[PROCESS\]   
[World Wide Web Consortium Process Document](https://www.w3.org/Consortium/Process/). URL: <https://www.w3.org/Consortium/Process/>

\[RFC2119\]   
S. Bradner. [Key words for use in RFCs to Indicate Requirement Levels](https://tools.ietf.org/html/rfc2119). March 1997. Best Current Practice. URL: <https://tools.ietf.org/html/rfc2119>

<span class="content"> Acknowledgments</span><a href="#sec-acknowledgments" class="self-link"></a>
--------------------------------------------------------------------------------------------------

W3C thanks those who have contributed to the 2020 update of the Patent Policy, including L. David Baron, Marc Sandy Block, Valentina Boyet, Michael Champion, Donald Deutsch, Sarah Dukmen, Elika J. Etemad, Michael Gelblum, Jeff Jaffe, Philippe Le Hégaret, Travis Leithead, Daniel Nazer, Ishna Neamatullah, Charles Nevile, Florian Rivoal, David Rudin, Wendy Seltzer, Michael Sirtori, Anna Weinberg, Rigo Wenning, Rob Yost, Jennifer Zanocco. We also thank those who gave input via the Patents and Standards Interest Group, Advisory Board, and Advisory Committee, and the [contributors to the previous version](https://www.w3.org/Consortium/Patent-Policy-20170801/#sec-acknowledgments).

<span class="content">Index</span><a href="#index" class="self-link"></a>
-------------------------------------------------------------------------

### <span class="content">Terms defined by this specification</span><a href="#index-defined-here" class="self-link"></a>

-   [Call for Exclusion](#call-for-exclusion), in §4.5
-   [Disclosure](#disclosure), in §6.1
-   [Disclosure requests](#disclosure-requests), in §6.3
-   [disclosure requirement](#disclosure-requirement), in §6.1
-   [Essential Claims](#essential-claims), in §8
-   [Exclusion Opportunity](#exclusion-opportunity), in §4.1
-   [Licensing Commitment](#licensing-commitment), in §3.5
-   [normative](#dfn-norm), in §8.3
-   [PAG](#patent-advisory-group), in §7.1
-   [PAG Proposal](#pag-proposal), in §7.5.3
-   [participant](#participant), in §3.1
-   [Patent Advisory Group](#patent-advisory-group), in §7.1
-   [Patent Review Draft](#patent-review-draft), in §2
-   [RF License](#def-RF), in §5
-   [Specification](#specification), in §2
-   [W3C RF Licensing Requirements](#def-RF), in §5
-   [W3C Royalty-Free license](#def-RF), in §5
-   [W3C Royalty-Free Licensing Requirements](#def-RF), in §5

### <span class="content">Terms defined by reference</span><a href="#index-defined-elsewhere" class="self-link"></a>

-   \[PROCESS\] defines the following terms:
    -   <span id="term-for-advisory-committee-representative" class="dfn-paneled" style="color:initial">ac rep</span>
    -   <span id="term-for-AC" class="dfn-paneled" style="color:initial">advisory committee</span>
    -   <span id="term-for-advisory-committee-representative①" class="dfn-paneled" style="color:initial">advisory committee representative</span>
    -   <span id="term-for-ACReview" class="dfn-paneled" style="color:initial">advisory committee review</span>
    -   <span id="term-for-cfp" class="dfn-paneled" style="color:initial">call for participation</span>
    -   <span id="term-for-RecsCR" class="dfn-paneled" style="color:initial">candidate recommendation</span>
    -   <span id="term-for-def-Consensus" class="dfn-paneled" style="color:initial">consensus</span>
    -   <span id="term-for-fpwd" class="dfn-paneled" style="color:initial">first public working draft</span>
    -   <span id="term-for-invited-expert-wg" class="dfn-paneled" style="color:initial">invited expert</span>
    -   <span id="term-for-maturity-levels" class="dfn-paneled" style="color:initial">maturity level</span>
    -   <span id="term-for-MemberSubmission" class="dfn-paneled" style="color:initial">member submission</span>
    -   <span id="term-for-Member-only" class="dfn-paneled" style="color:initial">member-only</span>
    -   <span id="term-for-patent-review-drafts" class="dfn-paneled" style="color:initial">patent review draft</span>
    -   <span id="term-for-RecsW3C" class="dfn-paneled" style="color:initial">recommendation</span>
    -   <span id="term-for-rec-track" class="dfn-paneled" style="color:initial">recommendation track</span>
    -   <span id="term-for-rec-rescind" class="dfn-paneled" style="color:initial">rescinded</span>
    -   <span id="term-for-MemberSubmission①" class="dfn-paneled" style="color:initial">w3c member submission</span>
    -   <span id="term-for-RecsW3C①" class="dfn-paneled" style="color:initial">w3c recommendation</span>
    -   <span id="term-for-technical-report" class="dfn-paneled" style="color:initial">w3c technical report</span>
    -   <span id="term-for-GroupsWG" class="dfn-paneled" style="color:initial">w3c working group</span>
    -   <span id="term-for-RecsWD" class="dfn-paneled" style="color:initial">working draft</span>
    -   <span id="term-for-GroupsWG①" class="dfn-paneled" style="color:initial">working group</span>
    -   <span id="term-for-WGCharter" class="dfn-paneled" style="color:initial">working group charter</span>

<https://w3c.github.io/w3process/#advisory-committee-representative>**Referenced in:**

-   [6.1. Disclosure Requirements](#ref-for-advisory-committee-representative) [(2)](#ref-for-advisory-committee-representative①)
-   [6.3. Disclosure Requests](#ref-for-advisory-committee-representative②)
-   [6.7. Good Faith Disclosure Standards](#ref-for-advisory-committee-representative③)
-   [7.3. PAG Composition](#ref-for-advisory-committee-representative④) [(2)](#ref-for-advisory-committee-representative⑤)

<https://www.w3.org/Consortium/Process/#AC>**Referenced in:**

-   [4.5. Exclusion Mechanics](#ref-for-AC)
-   [7.5.3. Procedure for Considering Alternate Licensing Terms](#ref-for-AC①)

<https://w3c.github.io/w3process/#advisory-committee-representative>**Referenced in:**

-   [6.1. Disclosure Requirements](#ref-for-advisory-committee-representative) [(2)](#ref-for-advisory-committee-representative①)
-   [6.3. Disclosure Requests](#ref-for-advisory-committee-representative②)
-   [6.7. Good Faith Disclosure Standards](#ref-for-advisory-committee-representative③)
-   [7.3. PAG Composition](#ref-for-advisory-committee-representative④) [(2)](#ref-for-advisory-committee-representative⑤)

<https://www.w3.org/Consortium/Process/#ACReview>**Referenced in:**

-   [7.5.2. PAG Outcome](#ref-for-ACReview)
-   [7.5.3. Procedure for Considering Alternate Licensing Terms](#ref-for-ACReview①) [(2)](#ref-for-ACReview②)

<https://www.w3.org/Consortium/Process/#cfp>**Referenced in:**

-   [3. Licensing Obligations of Working Group Participants](#ref-for-cfp)
-   [6.8. Timing of Disclosure Obligations](#ref-for-cfp①)

<https://www.w3.org/Consortium/Process/#RecsCR>**Referenced in:**

-   [7.4.1. PAG Formation Timing](#ref-for-RecsCR)

<https://www.w3.org/Consortium/Process/#def-Consensus>**Referenced in:**

-   [7.5.3. Procedure for Considering Alternate Licensing Terms](#ref-for-def-Consensus)

<https://www.w3.org/Consortium/Process/#fpwd>**Referenced in:**

-   [4.1. Exclusion With Continued Participation](#ref-for-fpwd) [(2)](#ref-for-fpwd①)
-   [4.2. Exclusion and Resignation From the Working Group](#ref-for-fpwd②) [(2)](#ref-for-fpwd③)
-   [4.3. Joining an Already Established Working Group](#ref-for-fpwd④) [(2)](#ref-for-fpwd⑤) [(3)](#ref-for-fpwd⑥)

<https://www.w3.org/Consortium/Process/#invited-expert-wg>**Referenced in:**

-   [3.4. Note on Licensing Commitments for Invited Experts](#ref-for-invited-expert-wg) [(2)](#ref-for-invited-expert-wg①)
-   [6.10. Disclosure Obligations of Invited Experts](#ref-for-invited-expert-wg②)
-   [7.3. PAG Composition](#ref-for-invited-expert-wg③)

<https://www.w3.org/Consortium/Process/#maturity-levels>**Referenced in:**

-   [7.4.1. PAG Formation Timing](#ref-for-maturity-levels)

<https://www.w3.org/Consortium/Process/#MemberSubmission>**Referenced in:**

-   [3.3. Licensing Commitments in W3C Submissions](#ref-for-MemberSubmission) [(2)](#ref-for-MemberSubmission①) [(3)](#ref-for-MemberSubmission②) [(4)](#ref-for-MemberSubmission③)

<https://www.w3.org/Consortium/Process/#Member-only>**Referenced in:**

-   [7.4.2. PAG Charter Requirements](#ref-for-Member-only)

<https://w3c.github.io/w3process/#patent-review-drafts>**Referenced in:**

-   [2. Licensing Goals for W3C Specifications](#ref-for-patent-review-drafts)

<https://www.w3.org/Consortium/Process/#RecsW3C>**Referenced in:**

-   [2. Licensing Goals for W3C Specifications](#ref-for-RecsW3C)
-   [3.3. Licensing Commitments in W3C Submissions](#ref-for-RecsW3C①)
-   [3.5. Specification Licensing Commitments](#ref-for-RecsW3C②)
-   [3.6. Licensing Commitment Persistence](#ref-for-RecsW3C③) [(2)](#ref-for-RecsW3C④) [(3)](#ref-for-RecsW3C⑤) [(4)](#ref-for-RecsW3C⑥) [(5)](#ref-for-RecsW3C⑦)
-   [4.3. Joining an Already Established Working Group](#ref-for-RecsW3C⑧) [(2)](#ref-for-RecsW3C⑨)
-   [5. W3C Royalty-Free (RF) Licensing Requirements](#ref-for-RecsW3C①⓪) [(2)](#ref-for-RecsW3C①①) [(3)](#ref-for-RecsW3C①②) [(4)](#ref-for-RecsW3C①③) [(5)](#ref-for-RecsW3C①④) [(6)](#ref-for-RecsW3C①⑤) [(7)](#ref-for-RecsW3C①⑥)
-   [6.9. Termination of Disclosure Obligations](#ref-for-RecsW3C①⑦)
-   [7.2. PAG Formation After a Recommendation Is Issued](#ref-for-RecsW3C①⑧)
-   [7.5.3. Procedure for Considering Alternate Licensing Terms](#ref-for-RecsW3C①⑨)
-   [8.1. Essential Claims](#ref-for-RecsW3C②⓪) [(2)](#ref-for-RecsW3C②①) [(3)](#ref-for-RecsW3C②②)
-   [8.2. Limitations on the Scope of Definition of Essential Claims](#ref-for-RecsW3C②③) [(2)](#ref-for-RecsW3C②④) [(3)](#ref-for-RecsW3C②⑤) [(4)](#ref-for-RecsW3C②⑥)

<https://w3c.github.io/w3process/#rec-track>**Referenced in:**

-   [2. Licensing Goals for W3C Specifications](#ref-for-rec-track)

<https://www.w3.org/Consortium/Process/#rec-rescind>**Referenced in:**

-   [5. W3C Royalty-Free (RF) Licensing Requirements](#ref-for-rec-rescind) [(2)](#ref-for-rec-rescind①)
-   [7.5.1. Possible PAG Conclusions](#ref-for-rec-rescind②)

<https://www.w3.org/Consortium/Process/#MemberSubmission>**Referenced in:**

-   [3.3. Licensing Commitments in W3C Submissions](#ref-for-MemberSubmission) [(2)](#ref-for-MemberSubmission①) [(3)](#ref-for-MemberSubmission②) [(4)](#ref-for-MemberSubmission③)

<https://www.w3.org/Consortium/Process/#RecsW3C>**Referenced in:**

-   [2. Licensing Goals for W3C Specifications](#ref-for-RecsW3C)
-   [3.3. Licensing Commitments in W3C Submissions](#ref-for-RecsW3C①)
-   [3.5. Specification Licensing Commitments](#ref-for-RecsW3C②)
-   [3.6. Licensing Commitment Persistence](#ref-for-RecsW3C③) [(2)](#ref-for-RecsW3C④) [(3)](#ref-for-RecsW3C⑤) [(4)](#ref-for-RecsW3C⑥) [(5)](#ref-for-RecsW3C⑦)
-   [4.3. Joining an Already Established Working Group](#ref-for-RecsW3C⑧) [(2)](#ref-for-RecsW3C⑨)
-   [5. W3C Royalty-Free (RF) Licensing Requirements](#ref-for-RecsW3C①⓪) [(2)](#ref-for-RecsW3C①①) [(3)](#ref-for-RecsW3C①②) [(4)](#ref-for-RecsW3C①③) [(5)](#ref-for-RecsW3C①④) [(6)](#ref-for-RecsW3C①⑤) [(7)](#ref-for-RecsW3C①⑥)
-   [6.9. Termination of Disclosure Obligations](#ref-for-RecsW3C①⑦)
-   [7.2. PAG Formation After a Recommendation Is Issued](#ref-for-RecsW3C①⑧)
-   [7.5.3. Procedure for Considering Alternate Licensing Terms](#ref-for-RecsW3C①⑨)
-   [8.1. Essential Claims](#ref-for-RecsW3C②⓪) [(2)](#ref-for-RecsW3C②①) [(3)](#ref-for-RecsW3C②②)
-   [8.2. Limitations on the Scope of Definition of Essential Claims](#ref-for-RecsW3C②③) [(2)](#ref-for-RecsW3C②④) [(3)](#ref-for-RecsW3C②⑤) [(4)](#ref-for-RecsW3C②⑥)

<https://w3c.github.io/w3process/#technical-report>**Referenced in:**

-   [2. Licensing Goals for W3C Specifications](#ref-for-technical-report)

<https://www.w3.org/Consortium/Process/#GroupsWG>**Referenced in:**

-   [1. Overview](#ref-for-GroupsWG) [(2)](#ref-for-GroupsWG①)
-   [2. Licensing Goals for W3C Specifications](#ref-for-GroupsWG②) [(2)](#ref-for-GroupsWG③)
-   [3. Licensing Obligations of Working Group Participants](#ref-for-GroupsWG④)
-   [3.1. W3C RF Licensing Requirements for All Working Group Participants](#ref-for-GroupsWG⑤) [(2)](#ref-for-GroupsWG⑥) [(3)](#ref-for-GroupsWG⑦)
-   [3.2. Limitation on Licensing Requirement for Non-Participating Members](#ref-for-GroupsWG⑧)
-   [3.4. Note on Licensing Commitments for Invited Experts](#ref-for-GroupsWG⑨)
-   [3.5. Specification Licensing Commitments](#ref-for-GroupsWG①⓪) [(2)](#ref-for-GroupsWG①①)
-   [3.6. Licensing Commitment Persistence](#ref-for-GroupsWG①②) [(2)](#ref-for-GroupsWG①③) [(3)](#ref-for-GroupsWG①④)
-   [4. Exclusion From W3C RF Licensing Requirements](#ref-for-GroupsWG①⑤)
-   [4.1. Exclusion With Continued Participation](#ref-for-GroupsWG①⑥)
-   [4.2. Exclusion and Resignation From the Working Group](#ref-for-GroupsWG①⑦) [(2)](#ref-for-GroupsWG①⑧) [(3)](#ref-for-GroupsWG①⑨) [(4)](#ref-for-GroupsWG②⓪) [(5)](#ref-for-GroupsWG②①)
-   [4.3. Joining an Already Established Working Group](#ref-for-GroupsWG②②) [(2)](#ref-for-GroupsWG②③) [(3)](#ref-for-GroupsWG②④) [(4)](#ref-for-GroupsWG②⑤) [(5)](#ref-for-GroupsWG②⑥)
-   [4.5. Exclusion Mechanics](#ref-for-GroupsWG②⑦) [(2)](#ref-for-GroupsWG②⑧) [(3)](#ref-for-GroupsWG②⑨)
-   [5. W3C Royalty-Free (RF) Licensing Requirements](#ref-for-GroupsWG③⓪) [(2)](#ref-for-GroupsWG③①)
-   [6.4. Disclosure Contents](#ref-for-GroupsWG③②)
-   [6.6. Disclosure of Pending, Unpublished Applications](#ref-for-GroupsWG③③)
-   [6.7. Good Faith Disclosure Standards](#ref-for-GroupsWG③④)
-   [6.9. Termination of Disclosure Obligations](#ref-for-GroupsWG③⑤)
-   [6.10. Disclosure Obligations of Invited Experts](#ref-for-GroupsWG③⑥)
-   [6.11. Disclosures to Be Publicly Available on Recommendation Track](#ref-for-GroupsWG③⑦)
-   [7.1. PAG Formation](#ref-for-GroupsWG③⑧) [(2)](#ref-for-GroupsWG③⑨)
-   [7.3. PAG Composition](#ref-for-GroupsWG④⓪) [(2)](#ref-for-GroupsWG④①) [(3)](#ref-for-GroupsWG④②) [(4)](#ref-for-GroupsWG④③) [(5)](#ref-for-GroupsWG④④)
-   [7.4.1. PAG Formation Timing](#ref-for-GroupsWG④⑤) [(2)](#ref-for-GroupsWG④⑥)
-   [7.4.2. PAG Charter Requirements](#ref-for-GroupsWG④⑦) [(2)](#ref-for-GroupsWG④⑧) [(3)](#ref-for-GroupsWG④⑨)
-   [7.5.1. Possible PAG Conclusions](#ref-for-GroupsWG⑤⓪) [(2)](#ref-for-GroupsWG⑤①) [(3)](#ref-for-GroupsWG⑤②)
-   [7.5.3. Procedure for Considering Alternate Licensing Terms](#ref-for-GroupsWG⑤③) [(2)](#ref-for-GroupsWG⑤④) [(3)](#ref-for-GroupsWG⑤⑤) [(4)](#ref-for-GroupsWG⑤⑥)

<https://www.w3.org/Consortium/Process/#RecsWD>**Referenced in:**

-   [4.2. Exclusion and Resignation From the Working Group](#ref-for-RecsWD) [(2)](#ref-for-RecsWD①) [(3)](#ref-for-RecsWD②)
-   [4.3. Joining an Already Established Working Group](#ref-for-RecsWD③)
-   [4.4. Exclusion Procedures for Pending, Unpublished Patent Applications](#ref-for-RecsWD④)
-   [6.11. Disclosures to Be Publicly Available on Recommendation Track](#ref-for-RecsWD⑤)

<https://www.w3.org/Consortium/Process/#GroupsWG>**Referenced in:**

-   [1. Overview](#ref-for-GroupsWG) [(2)](#ref-for-GroupsWG①)
-   [2. Licensing Goals for W3C Specifications](#ref-for-GroupsWG②) [(2)](#ref-for-GroupsWG③)
-   [3. Licensing Obligations of Working Group Participants](#ref-for-GroupsWG④)
-   [3.1. W3C RF Licensing Requirements for All Working Group Participants](#ref-for-GroupsWG⑤) [(2)](#ref-for-GroupsWG⑥) [(3)](#ref-for-GroupsWG⑦)
-   [3.2. Limitation on Licensing Requirement for Non-Participating Members](#ref-for-GroupsWG⑧)
-   [3.4. Note on Licensing Commitments for Invited Experts](#ref-for-GroupsWG⑨)
-   [3.5. Specification Licensing Commitments](#ref-for-GroupsWG①⓪) [(2)](#ref-for-GroupsWG①①)
-   [3.6. Licensing Commitment Persistence](#ref-for-GroupsWG①②) [(2)](#ref-for-GroupsWG①③) [(3)](#ref-for-GroupsWG①④)
-   [4. Exclusion From W3C RF Licensing Requirements](#ref-for-GroupsWG①⑤)
-   [4.1. Exclusion With Continued Participation](#ref-for-GroupsWG①⑥)
-   [4.2. Exclusion and Resignation From the Working Group](#ref-for-GroupsWG①⑦) [(2)](#ref-for-GroupsWG①⑧) [(3)](#ref-for-GroupsWG①⑨) [(4)](#ref-for-GroupsWG②⓪) [(5)](#ref-for-GroupsWG②①)
-   [4.3. Joining an Already Established Working Group](#ref-for-GroupsWG②②) [(2)](#ref-for-GroupsWG②③) [(3)](#ref-for-GroupsWG②④) [(4)](#ref-for-GroupsWG②⑤) [(5)](#ref-for-GroupsWG②⑥)
-   [4.5. Exclusion Mechanics](#ref-for-GroupsWG②⑦) [(2)](#ref-for-GroupsWG②⑧) [(3)](#ref-for-GroupsWG②⑨)
-   [5. W3C Royalty-Free (RF) Licensing Requirements](#ref-for-GroupsWG③⓪) [(2)](#ref-for-GroupsWG③①)
-   [6.4. Disclosure Contents](#ref-for-GroupsWG③②)
-   [6.6. Disclosure of Pending, Unpublished Applications](#ref-for-GroupsWG③③)
-   [6.7. Good Faith Disclosure Standards](#ref-for-GroupsWG③④)
-   [6.9. Termination of Disclosure Obligations](#ref-for-GroupsWG③⑤)
-   [6.10. Disclosure Obligations of Invited Experts](#ref-for-GroupsWG③⑥)
-   [6.11. Disclosures to Be Publicly Available on Recommendation Track](#ref-for-GroupsWG③⑦)
-   [7.1. PAG Formation](#ref-for-GroupsWG③⑧) [(2)](#ref-for-GroupsWG③⑨)
-   [7.3. PAG Composition](#ref-for-GroupsWG④⓪) [(2)](#ref-for-GroupsWG④①) [(3)](#ref-for-GroupsWG④②) [(4)](#ref-for-GroupsWG④③) [(5)](#ref-for-GroupsWG④④)
-   [7.4.1. PAG Formation Timing](#ref-for-GroupsWG④⑤) [(2)](#ref-for-GroupsWG④⑥)
-   [7.4.2. PAG Charter Requirements](#ref-for-GroupsWG④⑦) [(2)](#ref-for-GroupsWG④⑧) [(3)](#ref-for-GroupsWG④⑨)
-   [7.5.1. Possible PAG Conclusions](#ref-for-GroupsWG⑤⓪) [(2)](#ref-for-GroupsWG⑤①) [(3)](#ref-for-GroupsWG⑤②)
-   [7.5.3. Procedure for Considering Alternate Licensing Terms](#ref-for-GroupsWG⑤③) [(2)](#ref-for-GroupsWG⑤④) [(3)](#ref-for-GroupsWG⑤⑤) [(4)](#ref-for-GroupsWG⑤⑥)

<https://www.w3.org/Consortium/Process/#WGCharter>**Referenced in:**

-   [2. Licensing Goals for W3C Specifications](#ref-for-WGCharter)
-   [3. Licensing Obligations of Working Group Participants](#ref-for-WGCharter①)
-   [3.6. Licensing Commitment Persistence](#ref-for-WGCharter②)
-   [7.1. PAG Formation](#ref-for-WGCharter③)

**[\#specification](#specification)Referenced in:**

-   [1. Overview](#ref-for-specification) [(2)](#ref-for-specification①)
-   [2. Licensing Goals for W3C Specifications](#ref-for-specification②) [(2)](#ref-for-specification③) [(3)](#ref-for-specification④)
-   [3.5. Specification Licensing Commitments](#ref-for-specification⑤) [(2)](#ref-for-specification⑥) [(3)](#ref-for-specification⑦)
-   [3.6. Licensing Commitment Persistence](#ref-for-specification⑧) [(2)](#ref-for-specification⑨) [(3)](#ref-for-specification①⓪) [(4)](#ref-for-specification①①)
-   [4.1. Exclusion With Continued Participation](#ref-for-specification①②) [(2)](#ref-for-specification①③)
-   [4.2. Exclusion and Resignation From the Working Group](#ref-for-specification①④) [(2)](#ref-for-specification①⑤) [(3)](#ref-for-specification①⑥) [(4)](#ref-for-specification①⑦)
-   [4.3. Joining an Already Established Working Group](#ref-for-specification①⑧)
-   [4.4. Exclusion Procedures for Pending, Unpublished Patent Applications](#ref-for-specification①⑨)
-   [4.5. Exclusion Mechanics](#ref-for-specification②⓪) [(2)](#ref-for-specification②①)
-   [6.1. Disclosure Requirements](#ref-for-specification②②)
-   [6.3. Disclosure Requests](#ref-for-specification②③) [(2)](#ref-for-specification②④)
-   [6.4. Disclosure Contents](#ref-for-specification②⑤)
-   [6.5. Disclosure of Laid-Open or Published Applications](#ref-for-specification②⑥)
-   [6.7. Good Faith Disclosure Standards](#ref-for-specification②⑦)
-   [6.11. Disclosures to Be Publicly Available on Recommendation Track](#ref-for-specification②⑧)
-   [7.4.1. PAG Formation Timing](#ref-for-specification②⑨)
-   [7.5.1. Possible PAG Conclusions](#ref-for-specification③⓪) [(2)](#ref-for-specification③①)
-   [7.5.3. Procedure for Considering Alternate Licensing Terms](#ref-for-specification③②)
-   [8.1. Essential Claims](#ref-for-specification③③) [(2)](#ref-for-specification③④) [(3)](#ref-for-specification③⑤)
-   [8.3. Definition of Normative, Optional and Informative](#ref-for-specification③⑥) [(2)](#ref-for-specification③⑦)

**[\#patent-review-draft](#patent-review-draft)Referenced in:**

-   [3.3. Licensing Commitments in W3C Submissions](#ref-for-patent-review-draft)
-   [3.5. Specification Licensing Commitments](#ref-for-patent-review-draft①)
-   [3.6. Licensing Commitment Persistence](#ref-for-patent-review-draft②) [(2)](#ref-for-patent-review-draft③) [(3)](#ref-for-patent-review-draft④) [(4)](#ref-for-patent-review-draft⑤) [(5)](#ref-for-patent-review-draft⑥) [(6)](#ref-for-patent-review-draft⑦) [(7)](#ref-for-patent-review-draft⑧)
-   [4.1. Exclusion With Continued Participation](#ref-for-patent-review-draft⑨) [(2)](#ref-for-patent-review-draft①⓪)
-   [4.2. Exclusion and Resignation From the Working Group](#ref-for-patent-review-draft①①) [(2)](#ref-for-patent-review-draft①②)
-   [4.3. Joining an Already Established Working Group](#ref-for-patent-review-draft①③) [(2)](#ref-for-patent-review-draft①④) [(3)](#ref-for-patent-review-draft①⑤) [(4)](#ref-for-patent-review-draft①⑥) [(5)](#ref-for-patent-review-draft①⑦)
-   [4.4. Exclusion Procedures for Pending, Unpublished Patent Applications](#ref-for-patent-review-draft①⑧)
-   [5. W3C Royalty-Free (RF) Licensing Requirements](#ref-for-patent-review-draft①⑨) [(2)](#ref-for-patent-review-draft②⓪) [(3)](#ref-for-patent-review-draft②①) [(4)](#ref-for-patent-review-draft②②) [(5)](#ref-for-patent-review-draft②③) [(6)](#ref-for-patent-review-draft②④) [(7)](#ref-for-patent-review-draft②⑤)
-   [8.1. Essential Claims](#ref-for-patent-review-draft②⑥) [(2)](#ref-for-patent-review-draft②⑦) [(3)](#ref-for-patent-review-draft②⑧) [(4)](#ref-for-patent-review-draft②⑨)
-   [8.2. Limitations on the Scope of Definition of Essential Claims](#ref-for-patent-review-draft③⓪)

**[\#participant](#participant)Referenced in:**

-   [1. Overview](#ref-for-participant)
-   [3. Licensing Obligations of Working Group Participants](#ref-for-participant①)
-   [3.1. W3C RF Licensing Requirements for All Working Group Participants](#ref-for-participant②) [(2)](#ref-for-participant③) [(3)](#ref-for-participant④)
-   [3.5. Specification Licensing Commitments](#ref-for-participant⑤) [(2)](#ref-for-participant⑥) [(3)](#ref-for-participant⑦)
-   [3.6. Licensing Commitment Persistence](#ref-for-participant⑧) [(2)](#ref-for-participant⑨) [(3)](#ref-for-participant①⓪) [(4)](#ref-for-participant①①)
-   [4. Exclusion From W3C RF Licensing Requirements](#ref-for-participant①②)
-   [4.1. Exclusion With Continued Participation](#ref-for-participant①③) [(2)](#ref-for-participant①④) [(3)](#ref-for-participant①⑤) [(4)](#ref-for-participant①⑥)
-   [4.2. Exclusion and Resignation From the Working Group](#ref-for-participant①⑦) [(2)](#ref-for-participant①⑧) [(3)](#ref-for-participant①⑨) [(4)](#ref-for-participant②⓪) [(5)](#ref-for-participant②①) [(6)](#ref-for-participant②②) [(7)](#ref-for-participant②③) [(8)](#ref-for-participant②④) [(9)](#ref-for-participant②⑤) [(10)](#ref-for-participant②⑥) [(11)](#ref-for-participant②⑦)
-   [4.3. Joining an Already Established Working Group](#ref-for-participant②⑧) [(2)](#ref-for-participant②⑨) [(3)](#ref-for-participant③⓪)
-   [4.4. Exclusion Procedures for Pending, Unpublished Patent Applications](#ref-for-participant③①)
-   [4.5. Exclusion Mechanics](#ref-for-participant③②)
-   [5. W3C Royalty-Free (RF) Licensing Requirements](#ref-for-participant③③)
-   [6.7. Good Faith Disclosure Standards](#ref-for-participant③④)

**[\#licensing-commitment](#licensing-commitment)Referenced in:**

-   [3.1. W3C RF Licensing Requirements for All Working Group Participants](#ref-for-licensing-commitment)
-   [3.6. Licensing Commitment Persistence](#ref-for-licensing-commitment①) [(2)](#ref-for-licensing-commitment②) [(3)](#ref-for-licensing-commitment③) [(4)](#ref-for-licensing-commitment④)
-   [4.2. Exclusion and Resignation From the Working Group](#ref-for-licensing-commitment⑤)
-   [4.3. Joining an Already Established Working Group](#ref-for-licensing-commitment⑥)

**[\#exclusion-opportunity](#exclusion-opportunity)Referenced in:**

-   [3.5. Specification Licensing Commitments](#ref-for-exclusion-opportunity)
-   [4.1. Exclusion With Continued Participation](#ref-for-exclusion-opportunity①) [(2)](#ref-for-exclusion-opportunity②) [(3)](#ref-for-exclusion-opportunity③) [(4)](#ref-for-exclusion-opportunity④)
-   [4.2. Exclusion and Resignation From the Working Group](#ref-for-exclusion-opportunity⑤) [(2)](#ref-for-exclusion-opportunity⑥)

**[\#call-for-exclusion](#call-for-exclusion)Referenced in:**

-   [4.1. Exclusion With Continued Participation](#ref-for-call-for-exclusion)
-   [4.4. Exclusion Procedures for Pending, Unpublished Patent Applications](#ref-for-call-for-exclusion①)
-   [4.5. Exclusion Mechanics](#ref-for-call-for-exclusion②) [(2)](#ref-for-call-for-exclusion③)

**[\#def-RF](#def-RF)Referenced in:**

-   [1. Overview](#ref-for-def-RF)
-   [2. Licensing Goals for W3C Specifications](#ref-for-def-RF)
-   [3.1. W3C RF Licensing Requirements for All Working Group Participants](#ref-for-def-RF①)
-   [3.3. Licensing Commitments in W3C Submissions](#ref-for-def-RF②)
-   [3.5. Specification Licensing Commitments](#ref-for-def-RF③)
-   [4. Exclusion From W3C RF Licensing Requirements](#ref-for-def-RF④)
-   [4.1. Exclusion With Continued Participation](#ref-for-def-RF⑤)
-   [5. W3C Royalty-Free (RF) Licensing Requirements](#ref-for-def-RF⑥) [(2)](#ref-for-def-RF⑦)
-   [6.2. Disclosure Exemption](#ref-for-def-RF⑧)
-   [7.1. PAG Formation](#ref-for-def-RF⑨)
-   [7.5.1. Possible PAG Conclusions](#ref-for-def-RF①⓪)
-   [7.5.3. Procedure for Considering Alternate Licensing Terms](#ref-for-def-RF①①)

**[\#disclosure](#disclosure)Referenced in:**

-   [1. Overview](#ref-for-disclosure)
-   [4.2. Exclusion and Resignation From the Working Group](#ref-for-disclosure①)
-   [5. W3C Royalty-Free (RF) Licensing Requirements](#ref-for-disclosure②)
-   [6.1. Disclosure Requirements](#ref-for-disclosure③)
-   [6.2. Disclosure Exemption](#ref-for-disclosure④)
-   [6.4. Disclosure Contents](#ref-for-disclosure⑤)
-   [6.5. Disclosure of Laid-Open or Published Applications](#ref-for-disclosure⑥) [(2)](#ref-for-disclosure⑦)
-   [6.7. Good Faith Disclosure Standards](#ref-for-disclosure⑧) [(2)](#ref-for-disclosure⑨)
-   [6.8. Timing of Disclosure Obligations](#ref-for-disclosure①⓪) [(2)](#ref-for-disclosure①①) [(3)](#ref-for-disclosure①②)
-   [6.9. Termination of Disclosure Obligations](#ref-for-disclosure①③)
-   [6.10. Disclosure Obligations of Invited Experts](#ref-for-disclosure①④)
-   [6.11. Disclosures to Be Publicly Available on Recommendation Track](#ref-for-disclosure①⑤)
-   [7.4.1. PAG Formation Timing](#ref-for-disclosure①⑥)
-   [7.4.2. PAG Charter Requirements](#ref-for-disclosure①⑦)

**[\#disclosure-requirement](#disclosure-requirement)Referenced in:**

-   [6.7. Good Faith Disclosure Standards](#ref-for-disclosure-requirement)

**[\#disclosure-requests](#disclosure-requests)Referenced in:**

-   [6.1. Disclosure Requirements](#ref-for-disclosure-requests) [(2)](#ref-for-disclosure-requests①) [(3)](#ref-for-disclosure-requests②)
-   [6.3. Disclosure Requests](#ref-for-disclosure-requests③) [(2)](#ref-for-disclosure-requests④) [(3)](#ref-for-disclosure-requests⑤)

**[\#patent-advisory-group](#patent-advisory-group)Referenced in:**

-   [7.1. PAG Formation](#ref-for-patent-advisory-group) [(2)](#ref-for-patent-advisory-group①) [(3)](#ref-for-patent-advisory-group②) [(4)](#ref-for-patent-advisory-group③)
-   [7.2. PAG Formation After a Recommendation Is Issued](#ref-for-patent-advisory-group④) [(2)](#ref-for-patent-advisory-group⑤) [(3)](#ref-for-patent-advisory-group⑥)
-   [7.3. PAG Composition](#ref-for-patent-advisory-group⑦) [(2)](#ref-for-patent-advisory-group⑧) [(3)](#ref-for-patent-advisory-group⑨) [(4)](#ref-for-patent-advisory-group①⓪) [(5)](#ref-for-patent-advisory-group①①) [(6)](#ref-for-patent-advisory-group①②) [(7)](#ref-for-patent-advisory-group①③) [(8)](#ref-for-patent-advisory-group①④) [(9)](#ref-for-patent-advisory-group①⑤)
-   [7.4.1. PAG Formation Timing](#ref-for-patent-advisory-group①⑥) [(2)](#ref-for-patent-advisory-group①⑦) [(3)](#ref-for-patent-advisory-group①⑧) [(4)](#ref-for-patent-advisory-group①⑨)
-   [7.4.2. PAG Charter Requirements](#ref-for-patent-advisory-group②⓪) [(2)](#ref-for-patent-advisory-group②①) [(3)](#ref-for-patent-advisory-group②②) [(4)](#ref-for-patent-advisory-group②③) [(5)](#ref-for-patent-advisory-group②④) [(6)](#ref-for-patent-advisory-group②⑤) [(7)](#ref-for-patent-advisory-group②⑥) [(8)](#ref-for-patent-advisory-group②⑦) [(9)](#ref-for-patent-advisory-group②⑧)
-   [7.5.1. Possible PAG Conclusions](#ref-for-patent-advisory-group②⑨)
-   [7.5.2. PAG Outcome](#ref-for-patent-advisory-group③⓪)

**[\#pag-proposal](#pag-proposal)Referenced in:**

-   [7.5.3. Procedure for Considering Alternate Licensing Terms](#ref-for-pag-proposal) [(2)](#ref-for-pag-proposal①) [(3)](#ref-for-pag-proposal②) [(4)](#ref-for-pag-proposal③) [(5)](#ref-for-pag-proposal④) [(6)](#ref-for-pag-proposal⑤) [(7)](#ref-for-pag-proposal⑥) [(8)](#ref-for-pag-proposal⑦) [(9)](#ref-for-pag-proposal⑧)

**[\#essential-claims](#essential-claims)Referenced in:**

-   [1. Overview](#ref-for-essential-claims)
-   [2. Licensing Goals for W3C Specifications](#ref-for-essential-claims①)
-   [3.1. W3C RF Licensing Requirements for All Working Group Participants](#ref-for-essential-claims②) [(2)](#ref-for-essential-claims③) [(3)](#ref-for-essential-claims④)
-   [3.5. Specification Licensing Commitments](#ref-for-essential-claims⑤) [(2)](#ref-for-essential-claims⑥) [(3)](#ref-for-essential-claims⑦)
-   [3.6. Licensing Commitment Persistence](#ref-for-essential-claims⑧) [(2)](#ref-for-essential-claims⑨) [(3)](#ref-for-essential-claims①⓪)
-   [4. Exclusion From W3C RF Licensing Requirements](#ref-for-essential-claims①①)
-   [4.1. Exclusion With Continued Participation](#ref-for-essential-claims①②) [(2)](#ref-for-essential-claims①③) [(3)](#ref-for-essential-claims①④) [(4)](#ref-for-essential-claims①⑤) [(5)](#ref-for-essential-claims①⑥) [(6)](#ref-for-essential-claims①⑦)
-   [4.2. Exclusion and Resignation From the Working Group](#ref-for-essential-claims①⑧) [(2)](#ref-for-essential-claims①⑨) [(3)](#ref-for-essential-claims②⓪)
-   [4.3. Joining an Already Established Working Group](#ref-for-essential-claims②①) [(2)](#ref-for-essential-claims②②)
-   [4.4. Exclusion Procedures for Pending, Unpublished Patent Applications](#ref-for-essential-claims②③) [(2)](#ref-for-essential-claims②④) [(3)](#ref-for-essential-claims②⑤)
-   [4.5. Exclusion Mechanics](#ref-for-essential-claims②⑥) [(2)](#ref-for-essential-claims②⑦)
-   [5. W3C Royalty-Free (RF) Licensing Requirements](#ref-for-essential-claims②⑧) [(2)](#ref-for-essential-claims②⑨) [(3)](#ref-for-essential-claims③⓪)
-   [6.1. Disclosure Requirements](#ref-for-essential-claims③①)
-   [6.2. Disclosure Exemption](#ref-for-essential-claims③②) [(2)](#ref-for-essential-claims③③)
-   [6.3. Disclosure Requests](#ref-for-essential-claims③④)
-   [6.5. Disclosure of Laid-Open or Published Applications](#ref-for-essential-claims③⑤)
-   [6.7. Good Faith Disclosure Standards](#ref-for-essential-claims③⑥)
-   [7.2. PAG Formation After a Recommendation Is Issued](#ref-for-essential-claims③⑦) [(2)](#ref-for-essential-claims③⑧)
-   [8.1. Essential Claims](#ref-for-essential-claims③⑨) [(2)](#ref-for-essential-claims④⓪) [(3)](#ref-for-essential-claims④①)
-   [8.2. Limitations on the Scope of Definition of Essential Claims](#ref-for-essential-claims④②) [(2)](#ref-for-essential-claims④③)

**[\#dfn-norm](#dfn-norm)Referenced in:**

-   [8.1. Essential Claims](#ref-for-dfn-norm)
-   [8.2. Limitations on the Scope of Definition of Essential Claims](#ref-for-dfn-norm①)
-   [8.3. Definition of Normative, Optional and Informative](#ref-for-dfn-norm②) [(2)](#ref-for-dfn-norm③)
