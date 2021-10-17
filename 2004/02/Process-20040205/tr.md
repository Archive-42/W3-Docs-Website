\[[next chapter](acreview.html)\]   \[[previous chapter](groups.html)\]   \[[contents](cover.html#toc)\]

---

On 1 August 2014, W3C began a [transition](https://www.w3.org/wiki/ProcessTransition2014) away from this document; see the [current W3C Process Document](/Consortium/Process/).

# W3C Process Document

## 7 <span id="Reports">W3C Recommendation Track Process</span><span id="Recs"></span>

- <a href="#maturity-levels" class="tocxref">7.1 Recommendation Track Process Maturity Levels</a>
  - <a href="#q73" class="tocxref">7.1.1 Maturity Levels When Advancing a Technical Report Towards Recommendation</a>
  - <a href="#q74" class="tocxref">7.1.2 Maturity Level When Ending Work on a Technical Report</a>
  - <a href="#q75" class="tocxref">7.1.3 Maturity Level When Editing a Recommendation</a>
  - <a href="#q76" class="tocxref">7.1.4 Maturity Levels When Rescinding a Recommendation</a>
- <a href="#transition-reqs" class="tocxref">7.2 General Requirements for Advancement</a>
- <a href="#doc-reviews" class="tocxref">7.3 Reviews and Review Responsibilities</a>
- <a href="#rec-advance" class="tocxref">7.4 Advancing a Technical Report to Recommendation</a>
  - <a href="#first-wd" class="tocxref">7.4.1 First Public Working Draft</a>
  - <a href="#last-call" class="tocxref">7.4.2 Last Call Announcement</a>
  - <a href="#cfi" class="tocxref">7.4.3 Call for Implementations</a>
  - <a href="#cfr" class="tocxref">7.4.4 Call for Review of a Proposed Recommendation</a>
  - <a href="#rec-publication" class="tocxref">7.4.5 Publication of a W3C Recommendation</a>
  - <a href="#return-to-wg" class="tocxref">7.4.6 Returning a Document to a Working Group for Further Work</a>
- <a href="#tr-end" class="tocxref">7.5 Ending Work on a Technical Report</a>
- <a href="#rec-modify" class="tocxref">7.6 Modifying a W3C Recommendation</a>
  - <a href="#errata" class="tocxref">7.6.1 Errata Management</a>
  - <a href="#correction-classes" class="tocxref">7.6.2 Classes of Changes to a Recommendation</a>
  - <a href="#cfr-edited" class="tocxref">7.6.3 Call for Review of an Edited Recommendation</a>
  - <a href="#cfr-corrections" class="tocxref">7.6.4 Call for Review of Proposed Corrections</a>
- <a href="#rec-rescind" class="tocxref">7.7 Rescinding a W3C Recommendation</a>
  - <a href="#proposed-rescinded-rec" class="tocxref">7.7.1 Proposal to Rescind a Recommendation</a>
  - <a href="#publication-rescinded-rec" class="tocxref">7.7.2 Publication of a Rescinded Recommendation</a>
- <a href="#DocumentsGeneral" class="tocxref">7.8 General Information about Technical Reports</a>
  - <a href="#DocumentStatus" class="tocxref">7.8.1 Document Status Section</a>

The Recommendation Track process is the set of steps and requirements followed by W3C [Working Groups](groups.html#GroupsWG) to standardize Web technology. The processes followed by a Working Group to manage specifications and guidelines -- called technical reports in this section -- include:

- [Advancing a technical report](#rec-advance) from early draft to mature deliverable ("Recommendation"). **Note:** People use the phrase "on the Recommendation Track" to refer to the process of advancing a technical report to Recommendation. In this document, the phrase "Recommendation Track process" refers to the larger set of requirements and maturity levels described in the following bullets;
- [Ending work on a technical report](#tr-end) before it reaches Recommendation, or when not intended to become a Recommendation;
- [Modifying a W3C Recommendation](#rec-modify);
- [Rescinding a Recommendation](#rec-rescind) no longer endorsed by W3C.

The W3C Recommendation Track process is designed to maximize [consensus](policies.html#def-Consensus) about the content of a technical report, to ensure high technical and editorial quality, and to earn endorsement by W3C and the broader community. See also the licensing goals for W3C Recommendations in [section 2](http://www.w3.org/Consortium/Patent-Policy#sec-Licensing) of the [W3C Patent Policy](http://www.w3.org/Consortium/Patent-Policy) \[[PUB33](refs.html#ref-patentpolicy)\].

The following sections describe:

- the steps of the Recommendation Track process (e.g., "Announcement of Last Call" or "Call for Implementations"),
- the requirements for each step, and
- the [maturity level](#maturity-levels) of a technical report at each step (e.g., "Working Draft" or "Candidate Recommendation"). Please note that there is not a one-to-one correspondence between steps of the Recommendation Track process and maturity levels.

Maturity levels are described first, followed by the steps on the Recommendation Track and the requirements for each step.

### 7.1 <span id="maturity-levels">Recommendation Track Process Maturity Levels</span>

The maturity level of a published technical report indicates its place in the Recommendation Track process. The maturity levels "Working Draft" and "Working Group Note" represent the possible <span id="tr-init-state">initial states</span> of a technical report in the Recommendation Track process. The maturity levels "Recommendation", "Working Group Note", and "Rescinded Recommendation" represent the possible <span id="tr-end-state">end states</span>.

#### <span id="q73">7.1.1 Maturity Levels When Advancing a Technical Report Towards Recommendation</span>

<span id="RecsWD">Working Draft (WD)</span>  
A Working Draft is a document that W3C has published for review by the community, including W3C Members, the public, and other technical organizations.

<span id="RecsCR">Candidate Recommendation (CR)</span>  
A Candidate Recommendation is a document that W3C believes has been widely reviewed and satisfies the Working Group's technical requirements. W3C publishes a Candidate Recommendation to gather implementation experience.

<span id="RecsPR">Proposed Recommendation (PR)</span>  
A Proposed Recommendation is a mature technical report that, after wide review for technical soundness and implementability, W3C has sent to the W3C Advisory Committee for final endorsement.

<span id="RecsW3C">W3C Recommendation (REC)</span>  
A W3C Recommendation is a specification or set of guidelines that, after extensive consensus-building, has received the endorsement of W3C Members and the Director. W3C recommends the wide deployment of its Recommendations. **Note:** W3C Recommendations are similar to the standards published by other organizations.

#### <span id="q74">7.1.2 Maturity Level When Ending Work on a Technical Report</span>

<span id="WGNote">Working Group Note</span>  
A Working Group Note is published by a chartered Working Group to indicate that work has ended on a particular topic. A Working Group <span class="rfc2119">MAY</span> publish a Working Group Note with or without its prior publication as a Working Draft. W3C <span class="rfc2119">MAY</span> also publish "Interest Group Notes" and "Coordination Group Notes" for similar publications by those types of [groups](groups.html#GAGroups). Interest Groups and Coordination Groups do not create technical reports that [advance toward Recommendation](#rec-advance).

**Note:** To avoid confusion in the developer community and the media about which documents represent the output of chartered groups and which documents are input to W3C Activities ([Member Submissions](submission.html#Submission) and [Team Submissions](organization.html#TeamSubmission)), W3C plans to stop using the unqualified maturity level "Note."

#### <span id="q75">7.1.3 Maturity Level When Editing a Recommendation</span>

<span id="ProposedEditedRec">Proposed Edited Recommendation</span>  
A Proposed Edited Recommendation is a Recommendation published for community review of [changes](#correction-classes), some of which may affect conformance. When there is consensus about the changes, the document is published as a Recommendation.

#### <span id="q76">7.1.4 Maturity Levels When Rescinding a Recommendation</span>

<span id="RescindedRec">Rescinded Recommendation</span>  
A Rescinded Recommendation is an entire Recommendation that W3C no longer endorses.

### 7.2 <span id="transition-reqs">General Requirements for Advancement</span>

For a Call for Implementations up to and including publication as a Recommendation, the Working Group <span class="rfc2119">MUST</span>:

1.  Record the group's decision to request advancement.
2.  Indicate whether the document has been modified substantively since the previous step. A <span id="substantive-change">substantive change</span> (whether deletion, inclusion, or other modification) is one where someone could reasonably expect that making the change would invalidate an individual's review or implementation experience. Other changes (e.g., clarifications, bug fixes, editorial repairs, and minor error corrections) are <span id="minor-change">minor changes</span>. A Working Group <span class="rfc2119">MUST</span> document changes (both substantive and minor) between steps.
3.  Report which, if any, of the Working Group's requirements for this document have changed since the previous step.
4.  Report any changes in dependencies with other groups.
5.  Show evidence of wide review.
6.  [Formally address](policies.html#formal-address) all issues raised about the document since the previous step. In practice, once a Working Group wishes to advance to Candidate Recommendation or beyond, the Director expects positive documentation that issues have been formally addressed (e.g., in an issues list that shows their disposition). For earlier stages on the Recommendation Track, less formal documentation generally suffices (e.g., evidence in an archived mailing list).
7.  Report any [formal objections](policies.html#WGArchiveMinorityViews).

The following information is important to the decision to advance a technical report and therefore <span class="rfc2119">MUST</span> be [publicly available](comm.html#confidentiality-change):

- Details of changes if the technical report has been modified substantively since the previous step (e.g., by providing "diffs" and summaries of [substantive changes](#substantive-change));
- A statement that requirements have been fulfilled or a listing of unfulfilled requirements and the rationale for advancing the document though some requirements have not been met.
- Evidence of wide review and that dependencies with other groups have been resolved;
- Responses that [formally address issues](policies.html#formal-address) raised by reviewers;
- Any [formal objections](policies.html#WGArchiveMinorityViews).

### 7.3 <span id="doc-reviews">Reviews and Review Responsibilities</span>

Experience shows that the following help build consensus around technical reports:

1.  Frequent publication (see the [Working Group "Heartbeat" requirement](groups.html#three-month-rule)).
2.  Early review, to find errors quickly and decrease the chances of diverging technologies.
3.  Wide review, including from other groups in and outside of W3C.

A document receives review from the moment it is first published. Starting with the First Public Working Draft until the start of a Proposed Recommendation review, a Working Group <span class="rfc2119">MUST</span> [formally address](policies.html#formal-address) _any_ substantive review comment about a technical report and <span class="rfc2119">SHOULD</span> do so in a timely manner. The Director <span class="rfc2119">MUST</span> formally address any substantive issue raised by Advisory Committee representatives during Proposed Recommendation, Proposed Edited Recommendation, and Proposed Rescinded Recommendation review periods. The Working Group <span class="rfc2119">MUST</span> communicate to the Director (usually through the Team Contact) any substantive issues raised during Proposed Recommendation, Proposed Edited Recommendation, and Proposed Rescinded Recommendation review periods by parties other than Advisory Committee representatives.

Reviewers <span class="rfc2119">SHOULD NOT</span> send substantive technical reviews late on the Recommendation track. Reviewers <span class="rfc2119">SHOULD NOT</span> expect that a Working Group will readily make [substantive changes](#substantive-change) to a mature document. The more evidence a Working Group can show of wide review, the less weight substantive comments will carry when provided late on the Recommendation Track. Worthy ideas <span class="rfc2119">SHOULD BE</span> recorded even when not incorporated into a mature document.

The Working Group <span class="rfc2119">MUST</span> be able to show evidence of having attempted to respond to and satisfy reviewers. Reviewers <span class="rfc2119">MAY</span> register a [formal objection](policies.html#WGArchiveMinorityViews) any time they are dissatisfied with how a Working Group has handled an issue.

A Working Group <span class="rfc2119">SHOULD</span> negotiate review schedules with other groups expected to review a document, including relevant [liaisons](liaisons.html#Liaisons).

There are two formal review periods with fixed durations when advancing to Recommendation: after a Last Call announcement and after a Call for Review of a Proposed Recommendation. Out of consideration for the Working Group, reviewers <span class="rfc2119">SHOULD</span> send their comments early in a review period. A Working Group <span class="rfc2119">SHOULD NOT</span> start a new review before the scheduled end of an ongoing review (e.g., do not start a new Last Call review before the scheduled end of an ongoing Last Call review).

Ordinarily, reviewers <span class="rfc2119">SHOULD NOT</span> raise substantive technical issues about a technical report after the end of a Last Call review period. However, this does occur, and as stated above, a Working Group's requirement to formally address those issues extends until the end of a Proposed Recommendation review period. However, to allow the Working Group to make progress on a technical report, the Working Group <span class="rfc2119">MAY</span> decline to make substantive changes to address issues raised between the end of a Last Call review period and publication of a Recommendation. A reviewer <span class="rfc2119">MAY</span> register a [formal objection](policies.html#WGArchiveMinorityViews).

Advisory Committee representatives <span class="rfc2119">SHOULD NOT</span> (but <span class="rfc2119">MAY</span>) raise new substantive technical issues during a Proposed Recommendation review period. The Director <span class="rfc2119">MAY</span> respond to the reviewer after the close of the Proposed Recommendation review period. **Note:** It may be necessary to [change confidentiality level](comm.html#confidentiality-change) when conveying issues raised by Advisory Committee representatives to the Working Group.

During review by the Members, the Working Group <span class="rfc2119">SHOULD</span> also [formally address](policies.html#formal-address) informed and relevant issues raised outside the Advisory Committee (e.g., by the public or another W3C Working Group), and report them to the Director in a timely fashion.

When a Working Group receives a substantive issue after the end of Proposed Recommendation review period, the Working Group <span class="rfc2119">MUST</span> respond to the reviewer but <span class="rfc2119">MAY</span> decline to [formally address](policies.html#formal-address) the issue. In this case, the Working Group <span class="rfc2119">MAY</span> consider the issue as part of tracking [errata](#errata).

### 7.4 <span id="rec-advance">Advancing a Technical Report to Recommendation</span>

W3C follows these steps when advancing a technical report to Recommendation.

1.  [Publication of the First Public Working Draft](#first-wd).
2.  [Last Call announcement](#last-call)
3.  [Call for Implementations](#cfi). **Note:** The Director <span class="rfc2119">MAY</span> permit the Working Group to skip this step if the entrance criteria for the next step have already been satisfied.
4.  [Call for Review of a Proposed Recommendation](#cfr).
5.  [Publication as a Recommendation](#rec-publication).

In general, Working Groups embark on this journey with the intent of publishing one or more Recommendations. However, W3C <span class="rfc2119">MAY</span> [end work on a technical report](#tr-end) at any time, or <span class="rfc2119">MAY</span> require a Working Group to conduct [further work](#return-to-wg), possibly repeating one or more steps.

Between publication of the First Public Working Draft and Last Call announcement, a Working Group publishes revisions that generally include substantive changes. Between any two steps after a Last Call announcement, the Working Group <span class="rfc2119">MAY</span> publish a new draft of the technical report at the same maturity level provided there are no [substantive changes](#substantive-change) since the earlier step.

The Team <span class="rfc2119">MUST</span> notify the [Advisory Committee](organization.html#AC) and other W3C groups of a revision to a Candidate Recommendation or Proposed Recommendation.

These steps of the Recommendation Track process can take considerable time, so participants are encouraged to read the [tips on getting to Recommendation faster](http://www.w3.org/2002/05/rec-tips) \[[PUB27](refs.html#ref-rec-tips)\].

Refer to ["How to Organize a Recommendation Track Transition"](/2003/05/Transitions) in the [Member guide](http://www.w3.org/Guide/) for practical information about preparing for the reviews and announcements of the various steps.

#### 7.4.1 <span id="first-wd">First Public Working Draft</span>

Document maturity level: [Working Draft](#RecsWD).

Announcement: The Director <span class="rfc2119">MUST</span> announce the first Working Draft publication to other W3C groups and to the public.

Purpose: The publication of the First Public Working Draft is a signal to the community to begin reviewing the document. See [section 4.1 of the W3C Patent Policy](http://www.w3.org/Consortium/Patent-Policy/#sec-exclusion-with) \[[PUB33](refs.html#ref-patentpolicy)\] for information about the policy implications of the First Public Working Draft.

Entrance criteria: The Chair <span class="rfc2119">MUST</span> record the group's decision to request advancement. Since this is the first time that a document with this short name appears in the Technical Reports index, Director approval is <span class="rfc2119">REQUIRED</span> for the transition.

Ongoing work: After publication of the First Public Working Draft, the Working Group generally revises the technical report (see the [Working Group "Heartbeat" Requirement](groups.html#three-month-rule)) in accordance with its charter.

In order to make Working Drafts available to a wide audience early in their development, the requirements for publication of a Working Draft are limited to an agreement by a chartered Working Group to publish the technical report and satisfaction of the Team's [Publication Rules](http://www.w3.org/Guide/pubrules) \[[PUB31](refs.html#ref-pubrules)\]. Consensus is not a prerequisite for approval to publish; the Working Group <span class="rfc2119">MAY</span> request publication of a Working Draft even if it is unstable and does not meet all Working Group requirements.

Working Groups <span class="rfc2119">SHOULD</span> encourage early and wide review of the technical report, within and outside of W3C, especially from other Working Groups with dependencies on the technical report. Advisory Committee representatives <span class="rfc2119">SHOULD</span> encourage review within their organizations as early as First Public Working Draft, i.e., before a [Last Call announcement](#last-call) and _well before_ a [Call for Review of a Proposed Recommendation](#cfr).

The Working Group <span class="rfc2119">SHOULD</span> be responsive to and facilitate ongoing review by addressing issues in a timely manner and clearly indicating changes between drafts (e.g., by providing "diffs" and summaries of [substantive changes](#substantive-change)).

Possible next steps:

- Forward: [Last Call announcement](#last-call), generally done after a series of Working Drafts.
- Otherwise: [end work](#tr-end)

#### 7.4.2 <span id="last-call">Last Call Announcement</span>

Document maturity level: [Working Draft](#RecsWD).

Announcement: The Working Group <span class="rfc2119">MUST</span> announce the Last Call to other W3C groups and to the public. A Last Call announcement <span class="rfc2119">MUST</span>:

1.  specify the deadline for review comments;
2.  identify known dependencies and solicit review from all dependent Working Groups;
3.  solicit public review.

Purpose: A Working Group's Last Call announcement is a signal that:

- the Working Group believes that it has satisfied its relevant technical requirements (e.g., of the charter or requirements document) in the Working Draft;
- the Working Group believes that it has satisfied significant dependencies with other groups;
- other groups <span class="rfc2119">SHOULD</span> review the document to confirm that these dependencies have been satisfied.

In general, a Last Call announcement is also a signal that the Working Group is planning to advance the technical report to later maturity levels.

A Working Group <span class="rfc2119">SHOULD</span> work with other groups prior to a Last Call announcement to reduce the risk of surprise at Last Call.

Ideally, after a Last Call announcement, a Working Group receives only indications of support for the document, with no proposals for substantive change. In practice, Last Call announcements generate comments that sometimes result in substantive changes to a document. A Working Group <span class="rfc2119">SHOULD NOT</span> assume that it has finished its work by virtue of issuing a Last Call announcement.

Entrance criteria: Before announcing a Last Call, the Working Group <span class="rfc2119">MUST</span> do all of the following:

1.  Record the group's decision to request advancement.
2.  Fulfill the relevant requirements of the Working Group charter and those of any accompanying requirements documents, or report which relevant requirements have not been fulfilled.
3.  Indicate which dependencies with other groups the Working Group believes it has satisfied, and report which dependencies have not been satisfied.

Duration of the review: The announcement begins a review period that <span class="rfc2119">SHOULD</span> last at least <span class="time-interval">three weeks</span> but <span class="rfc2119">MAY</span> last longer if the technical report is complex or has significant external dependencies.

Ongoing work: During the review period, the Working Group solicits and responds to comments from the Team, the Members, other W3C groups, and the public.

It is important to ensure the proper integration of a technical report in the international community. Starting at this step in the Recommendation process, the technical report <span class="rfc2119">SHOULD</span> include a statement about how the technology relates to existing international standards and to related work outside of W3C.

Possible next steps:

- Forward: [Call for Implementations](#cfi) or [Call for Review of a Proposed Recommendation](#cfr)
- Otherwise: [return to Working Group](#return-to-wg) or [end work](#tr-end)

#### 7.4.3 <span id="cfi">Call for Implementations</span>

Document maturity level: [Candidate Recommendation](#RecsCR).

Announcement: The Director <span class="rfc2119">MUST</span> announce the Call for Implementations to the [Advisory Committee](organization.html#AC).

Purpose: At this step, W3C believes the technical report is stable and appropriate for implementation. The technical report <span class="rfc2119">MAY</span> still change based on implementation experience.

Entrance criteria: The Director calls for implementation when satisfied that the Working Group has fulfilled the [general requirements for advancement](#transition-reqs).

The Working Group is <span class="rfc2119">NOT REQUIRED</span> to show that a technical report has two independent and interoperable implementations as part of a request to the Director to announce a Call for Implementations. However, the Working Group <span class="rfc2119">SHOULD</span> include a report of present and expected implementations as part of the request.

In the Call for Implementations, the Working Group <span class="rfc2119">MAY</span> identify specific features of the technical report as being "<span id="at-risk-feature">features at risk</span>." General statements such as "We plan to remove any unimplemented feature" are not acceptable; the Working Group <span class="rfc2119">MUST</span> precisely identify any features at risk. Thus, in response to a Call for Implementations, reviewers can indicate whether they would [formally object](policies.html#WGArchiveMinorityViews) to the removal of the identified features.

After gathering implementation experience, the Working Group <span class="rfc2119">MAY</span> remove features from the technical report that were identified as being "at risk" and request that the Director [Call for Review of a Proposed Recommendation](#cfr). If the Working Group makes other [substantive changes](#substantive-change) to the technical report, the Director <span class="rfc2119">MUST</span> return it to the Working Group for [further work](#return-to-wg).

The request to the Director to advance a technical report to Candidate Recommendation <span class="rfc2119">MUST</span> indicate whether the Working Group expects to satisfy any Proposed Recommendation entrance criteria beyond the default requirements (described below).

Advisory Committee representatives <span class="rfc2119">MAY</span> [appeal](acreview.html#ACAppeal) the decision to advance the technical report.

Duration of the implementation period: The announcement <span class="rfc2119">MUST</span> indicate a minimal duration, before which the Working Group <span class="rfc2119">MUST NOT</span> request a [Call for Review of a Proposed Recommendation](#cfr); this minimal duration is designed to allow time for comment. The announcement <span class="rfc2119">SHOULD</span> also include the Working Group's estimate of the time expected to gather sufficient implementation data.

Possible next steps:

- Forward: [Call for Review of a Proposed Recommendation](#cfr)
- Otherwise: [return to Working Group](#return-to-wg) or [end work](#tr-end)

#### 7.4.4 <span id="cfr">Call for Review of a Proposed Recommendation</span>

Document maturity level: [Proposed Recommendation](#RecsPR).

Announcement: The Director <span class="rfc2119">MUST</span> announce the Call for Review to the [Advisory Committee](organization.html#AC).

Purpose: At this step, W3C seeks endorsement of the stable technical report. The outcome of this review is taken as an indication of the organization's support for the technical report.

Entrance criteria: The Director calls for review when satisfied that the Working Group has:

1.  Fulfilled the [general requirements for advancement](#transition-reqs);
2.  Shown that each feature of the technical report has been implemented. Preferably, the Working Group <span class="rfc2119">SHOULD</span> be able to demonstrate two interoperable implementations of each feature. If the Director believes that immediate Advisory Committee review is critical to the success of a technical report, the Director <span class="rfc2119">MAY</span> accept to Call for Review of a Proposed Recommendation even without adequate implementation experience;
3.  Satisfied any other announced entrance criteria (e.g., any included in the request to advance to Candidate Recommendation, or announced at Last Call if the Working Group does not intend to issue a Call for Implementations).

Advisory Committee representatives <span class="rfc2119">MAY</span> [appeal](acreview.html#ACAppeal) the decision to advance the technical report.

Duration of the review: The announcement begins a review period that <span class="rfc2119">MUST</span> last at least <span class="time-interval">four weeks</span>.

Ongoing work: During the review period, the Working Group requests endorsement and support from Members (e.g., testimonials as part of a press release).

Possible next steps:

- Forward: Publication as a [W3C Recommendation](#rec-publication)
- Otherwise: [Call for Implementations](#cfi) if there are questions related to implementation, [return to Working Group](#return-to-wg) or [end work](#tr-end)

#### 7.4.5 <span id="rec-publication">Publication of a W3C Recommendation</span>

Document maturity level: [Recommendation](#RecsW3C).

Announcement: The Director <span class="rfc2119">MUST</span> announce the publication of a W3C Recommendation to the [Advisory Committee](organization.html#AC).

Purpose: W3C publishes Recommendations when it believes that the ideas in the technical report are appropriate for widespread deployment and that they promote [W3C's mission](http://www.w3.org/Consortium/).

Entrance criteria: The Director publishes a W3C Recommendation when satisfied that there is significant support for the technical report from the Advisory Committee, the Team, W3C Working Groups, and the public. The decision to advance a document to Recommendation is a [W3C decision](acreview.html#def-w3c-decision).

If there was any [dissent](policies.html#def-Dissent) during the Member review, Advisory Committee representatives <span class="rfc2119">MAY</span> [appeal](acreview.html#ACAppeal) the decision to publish the Recommendation.

Possible next steps:

- End state: A technical report <span class="rfc2119">MAY</span> remain a Recommendation indefinitely
- Otherwise: [Modification of a Recommendation](#rec-modify) or [Rescinding a Recommendation](#rec-rescind)

The Director <span class="rfc2119">MAY</span> submit a W3C Recommendation to another standards body for adoption and formal approval by that body.

#### 7.4.6 <span id="return-to-wg">Returning a Document to a Working Group for Further Work</span>

A technical report is returned to a Working Group for further work in either of the following situations:

1.  The Working Group makes [substantive changes](#substantive-change) to the technical report at any time after a [Last Call announcement](#last-call) and prior to [Publication as a Recommendation](#rec-publication), **except** when the changes involve the removal of [features at risk](#at-risk-feature) identified in a [Call for Implementations](#cfi). In the case of substantive changes, the Working Group <span class="rfc2119">MUST</span> republish the technical report as a Working Draft.
2.  The Director requires the Working Group to address important issues raised during a review or as the result of implementation experience. In this case, Director <span class="rfc2119">MAY</span> request that the Working Group republish the technical report as a Working Draft, even if the Working Group has not made [substantive changes](#substantive-change).

The Director <span class="rfc2119">MUST</span> inform the [Advisory Committee](organization.html#AC) and group Chairs when a technical report has been returned to a Working Group for further work.

After republication as a Working Draft, the next forward step available to the Working Group is a [Last Call announcement](#last-call). The Last Call announcement <span class="rfc2119">MAY</span> occur at the same time as the publication of the Working Draft.

The Director <span class="rfc2119">MAY</span> ask the Working Group to republish a technical report as a Candidate Recommendation. At the same time as publication, the Director issues a [Call for Implementations](#cfi).

### 7.5 <span id="tr-end">Ending Work on a Technical Report</span>

Work on a technical report <span class="rfc2119">MAY</span> cease at any time. When a Working Group completes its work on a technical report, it publishes it either as a Recommendation or a Working Group Note. For example, a Working Group might publish several Working Drafts of a requirements document, and then indicate that it no longer plans to work on the requirements document by publishing a Working Group Note.

Work <span class="rfc2119">MAY</span> also cease because W3C determines that it cannot productively carry the work any further. For instance, the Director might [close a Working Group](groups.html#GeneralTermination), the participants might lose interest in a technical report, or the ideas might be subsumed by another technical report. If W3C decides to discontinue work on a technical report before completion, the technical report <span class="rfc2119">SHOULD</span> be published as a Working Group Note.

Possible next steps:

- End state: A technical report <span class="rfc2119">MAY</span> remain a Working Group Note indefinitely
- Otherwise: A Working Group <span class="rfc2119">MAY</span> resume work on the technical report as a Working Draft

### 7.6 <span id="rec-modify">Modifying a W3C Recommendation</span>

W3C makes every effort to maintain its Recommendations (e.g., by tracking errata, providing test-bed applications, and helping to create test suites) and to encourage widespread implementation. The following sections discuss the management of errors and the process for making normative changes to a Recommendation.

#### 7.6.1 <span id="errata">Errata Management</span>

Tracking errors is an important part of a Working Group's ongoing care of a Recommendation; for this reason, the scope of a Working Group charter generally allows time for work after publication of a Recommendation. In this Process Document, the term "erratum" (plural "errata") refers to any class of mistake, from mere editorial to a serious error that may affect the conformance with the Recommendation by software or content (e.g., content validity). **Note:** Before a document becomes a Recommendation, the W3C Process focuses on [substantive changes](#substantive-change) (those related to prior reviews). After a document has been published as Recommendation, the W3C Process focuses on those changes to a technical report that might affect the conformance of content or deployed software.

Working Groups <span class="rfc2119">MUST</span> track errata on an "errata page." An errata page is a list of enumerated errors, possibly accompanied by corrections. Each Recommendation links to an errata page; see the Team's [Publication Rules](http://www.w3.org/Guide/pubrules).

A correction is first "proposed" by the Working Group. A correction becomes normative -- of equal status as the text in the published Recommendation -- through one of the processes described below. An errata page <span class="rfc2119">MAY</span> include both proposed and normative corrections. The Working Group <span class="rfc2119">MUST</span> clearly identify which corrections are proposed and which are normative.

A Working Group <span class="rfc2119">SHOULD</span> keep their errata pages up-to-date, as errors are reported by readers and implementers. A Working Group <span class="rfc2119">MUST</span> report errata page changes to interested parties, notably when corrections are proposed or become normative, according to the Team's requirements. For instance, the Team might set up a mailing list per Recommendation where a Working Group reports changes to an errata page.

#### 7.6.2 <span id="correction-classes">Classes of Changes to a Recommendation</span>

This document distinguishes the following classes of changes to a Recommendation.

1. No changes to text content  
   These changes include fixing broken links or invalid markup.

2. Corrections that do not affect conformance  
   Editorial changes or clarifications that do not change the technical content of the specification.

3. Corrections that <span class="rfc2119">MAY</span> affect conformance, but add no new features  
   These changes <span class="rfc2119">MAY</span> affect conformance to the Recommendation. A change that affects conformance is one that:

4. turns conforming data, processors, or other conforming agents into non-conforming agents, or
5. turns non-conforming agents into conforming ones, or
6. clears up an ambiguity or under-specified part of the specification in such a way that an agent whose conformance was once unclear becomes clearly conforming or non-conforming.

7. New features  
   For new features, W3C follows the full process of [advancing a technical report to Recommendation](#rec-advance).

The first two classes of change require no technical review of the proposed changes, although a Working Group <span class="rfc2119">MAY</span> issue a Call for Review. The modified Recommendation is published according to the Team's requirements, including [Publication Rules](http://www.w3.org/Guide/pubrules) \[[PUB31](refs.html#ref-pubrules)\].

For the third class of change, W3C requires:

1.  Review by the community to ensure the technical soundness of proposed corrections.
2.  Timely publication of the edited Recommendation, with corrections incorporated.

For the third class of change, the Working Group <span class="rfc2119">MUST</span> either:

1.  Request that the Director issue a [Call for Review of an Edited Recommendation](#cfr-edited), or
2.  Issue a [Call for Review of Proposed Corrections](#cfr-corrections) that have not been incorporated into an edited draft (e.g., those listed on an errata page). After this review, the Director <span class="rfc2119">MAY</span> announce that the proposed corrections are normative.

While the second approach is designed so that a Working Group can establish normative corrections quickly, it does not obviate the need to incorporate changes into an edited version of the Recommendation. In particular, when corrections are numerous or complex, integrating them into a single document is important for interoperability; readers might otherwise interpret the corrections differently.

#### 7.6.3 <span id="cfr-edited">Call for Review of an Edited Recommendation</span>

Document maturity level: [Proposed Edited Recommendation](#ProposedEditedRec).

Announcement: The Director <span class="rfc2119">MUST</span> announce the Call for Review to other W3C groups, the public, and the [Advisory Committee](organization.html#AC). The announcement <span class="rfc2119">MUST</span> clearly indicate that this is a proposal to edit a Recommendation and <span class="rfc2119">MUST</span>:

1.  specify the deadline for review comments;
2.  identify known dependencies and solicit review from all dependent Working Groups;
3.  solicit public review.

Purpose: At this step, W3C seeks confirmation of proposed corrections to a Recommendation.

Entrance criteria: The Director calls for review when satisfied that, with respect to changes to the document, the Working Group has fulfilled the same entrance criteria as for a [Call for Review of a Proposed Recommendation](#cfr) (e.g., the Working Group can show implementation experience that supports the changes). In the request to advance to this status, the Working Group <span class="rfc2119">MUST</span> report any substantive issues about the technical report that have not been resolved.

Advisory Committee representatives <span class="rfc2119">MAY</span> [appeal](acreview.html#ACAppeal) the decision to advance the technical report.

Duration of the review: The announcement begins a formal Advisory Committee review period that <span class="rfc2119">MUST</span> last at least <span class="time-interval">four weeks</span>.

Ongoing work: During the review period, the Working Group solicits and responds to comments from the Team, the Members, other W3C groups, and the public.

Possible next steps:

- Forward: [Publication of a W3C Recommendation](#rec-publication)
- Otherwise, the Recommendation remains unchanged and two steps are possible: [return to Working Group](#return-to-wg) or [end work](#tr-end)

#### 7.6.4 <span id="cfr-corrections">Call for Review of Proposed Corrections</span>

Document maturity level: A Recommendation, plus a list of proposed corrections. The Working Group <span class="rfc2119">SHOULD</span> also include a detailed description of how the Working Group plans to change the text of the Recommendation for each proposed correction.

Announcement: The Working Group <span class="rfc2119">MUST</span> announce the Call for Review to other W3C groups, the public, and the [Advisory Committee](organization.html#AC). This is not a formal [Advisory Committee review](acreview.html#ACReview). However, the announcement <span class="rfc2119">MUST</span> clearly indicate that this is a proposal to make normative corrections to the Recommendation and <span class="rfc2119">MUST</span>:

1.  specify the deadline for review comments;
2.  identify known dependencies and solicit review from all dependent Working Groups;
3.  solicit public review.

Purpose: At this step, W3C seeks confirmation of proposed corrections to a Recommendation.

Entrance criteria: The Working Group calls for review when, with respect to changes to the document, the group has fulfilled the same entrance criteria as for a [Call for Review of a Proposed Recommendation](#cfr).

Duration of the review: The announcement begins a review period that <span class="rfc2119">MUST</span> last at least <span class="time-interval">four weeks</span>.

Ongoing work: Same as for a [Proposed Edited Recommendation](#cfr-edited).

If there are no [formal objections](policies.html#WGArchiveMinorityViews) to the proposed corrections, W3C considers them normative. The Working Group <span class="rfc2119">MUST</span> report formal objections to the Director, who assesses whether there is sufficient consensus to declare the proposed corrections to be normative.

Possible next steps:

- Forward: [Publication of a W3C Recommendation](#rec-publication). In order for the corrections to remain normative, the Working Group <span class="rfc2119">MUST</span> incorporate them into an edited Recommendation. The Working Group <span class="rfc2119">MUST</span> publish the revised Recommendation within <span class="time-interval">six months</span> after the end of the review or secure an extension from the Director. Prior to publication, if the Working Group makes further changes to the technical report that affect conformance, the Working Group <span class="rfc2119">MUST</span> request a [Call for Review of an Edited Recommendation](#cfr-edited).
- Otherwise: The Recommendation remains unchanged and two steps are possible: [return to Working Group](#return-to-wg) or [end work](#tr-end)

### 7.7 <span id="rec-rescind">Rescinding a W3C Recommendation</span>

At times, W3C <span class="rfc2119">MAY</span> rescind an entire Recommendation, for instance when W3C learns of significant errors in the Recommendation, when the Recommendation becomes outdated, or if W3C discovers burdensome patent claims that affect implementers; see the [W3C Patent Policy](http://www.w3.org/Consortium/Patent-Policy) \[[PUB33](refs.html#ref-patentpolicy)\] and in particular [section 5](http://www.w3.org/Consortium/Patent-Policy#sec-Requirements) (bullet 10) and [section 7.5](http://www.w3.org/Consortium/Patent-Policy#sec-PAG-conclude).

To deprecate _part_ of a Recommendation, W3C follows the process for [modifying a Recommendation](#rec-modify).

Once W3C has published a Rescinded Recommendation, future W3C technical reports <span class="rfc2119">MUST NOT</span> include normative references to that technical report.

#### 7.7.1 <span id="proposed-rescinded-rec">Proposal to Rescind a Recommendation</span>

Document maturity level: Recommendation, plus separate rationale for the proposal to rescind.

Announcement: The Director <span class="rfc2119">MUST</span> announce the Proposal to Rescind a Recommendation to other W3C groups, the public, and the [Advisory Committee](organization.html#AC). The announcement <span class="rfc2119">MUST</span> clearly indicate that this is a Proposal to Rescind a Recommendation and <span class="rfc2119">MUST</span>:

1.  specify the deadline for review comments;
2.  identify known dependencies and solicit review from all dependent Working Groups;
3.  solicit public review.

Purpose: At this step, W3C seeks confirmation of a Proposal to Rescind a Recommendation.

Entrance criteria: The Director proposes that W3C rescind a Recommendation when satisfied that there is sufficient reason.

Advisory Committee representatives <span class="rfc2119">MAY</span> [appeal](acreview.html#ACAppeal) the Proposal to Rescind the Recommendation.

Duration of the review: The announcement begins a review period that <span class="rfc2119">MUST</span> last at least <span class="time-interval">four weeks</span>.

Ongoing work: During the review period, the Working Group solicits and responds to comments from the Team, the Members, other W3C groups, and the public.

Possible next steps:

- Forward: [Publication of a Rescinded Recommendation](#publication-rescinded-rec)
- Otherwise: The Recommendation remains unchanged and two steps are possible: [return to Working Group](#return-to-wg) or [end work](#tr-end)

#### 7.7.2 <span id="publication-rescinded-rec">Publication of a Rescinded Recommendation</span>

Document maturity level: [Rescinded Recommendation](#RescindedRec).

Announcement: The Director <span class="rfc2119">MUST</span> announce the Publication of a Rescinded Recommendation to the [Advisory Committee](organization.html#AC).

Purpose: At this step, W3C indicates that it no longer endorses a previously published Recommendation.

Entrance criteria: The Director publishes a Rescinded Recommendation when satisfied that there is significant support from the Advisory Committee, the Team, W3C Working Groups, and the public. The decision to advance a document to Rescinded Recommendation is a [W3C decision](acreview.html#def-w3c-decision).

The Team <span class="rfc2119">MAY</span> publish one or more documents in order to best communicate what has been rescinded and its relation to previous Recommendations (e.g., the publication can be as simple as a cover sheet that refers to a previously published Recommendation).

If there was any [dissent](policies.html#def-Dissent) in the Proposed Rescinded Recommendation reviews, Advisory Committee representatives <span class="rfc2119">MAY</span> [appeal](acreview.html#ACAppeal) the decision to rescind the Recommendation.

Possible next step:

- End state: A technical report <span class="rfc2119">MAY</span> remain a Rescinded Recommendation indefinitely

### 7.8 <span id="DocumentsGeneral">General Information about Technical Reports</span>

Every document published as part of the Recommendation Track process <span class="rfc2119">MUST</span> be a public document. The [index of W3C technical reports](http://www.w3.org/TR/) \[[PUB11](refs.html#ref-doc-list)\] is available at the W3C Web site. W3C will make every effort to make archival documents indefinitely available at their original address in their original form.

Every document published as part of the Recommendation Track process <span class="rfc2119">MUST</span> clearly indicate its [maturity level](#maturity-levels).

Every technical report published as part of the Recommendation Track process is edited by one or more editors appointed by a Working Group Chair. It is the responsibility of these editors to ensure that the decisions of the group are correctly reflected in subsequent drafts of the technical report. An Editor for the TAG or Advisory Board who is not an elected or appointed participant in that group <span class="rfc2119">MUST</span> fulfill the same participation requirements for that group, as a Member representative, Team representative, or Invited Expert. All other W3C Editors <span class="rfc2119">MUST</span> be participants in the group responsible for the document(s) they are editing. Note that an Editor is <span class="rfc2119">NOT REQUIRED</span> to be a Team representative.

The Team is <span class="rfc2119">NOT REQUIRED</span> to publish a technical report that does not conform to the Team's [Publication Rules](http://www.w3.org/Guide/pubrules) (e.g., for <span id="DocumentName">naming</span>, style, and <span id="document-copyright">copyright requirements</span>). These rules are subject to change. The Team <span class="rfc2119">MUST</span> inform group Chairs and the Advisory Board of any changes.

The Team reserves the right to reformat technical reports at any time so as to conform to changes in W3C practice (e.g., changes to technical report styles or the [document status section](#DocumentStatus)).

The primary language for W3C technical reports is English. W3C encourages the translation of its technical reports. [Information about translations of W3C technical reports](http://www.w3.org/Consortium/Translation/) \[[PUB18](refs.html#ref-translations)\] is available at the W3C Web site.

#### 7.8.1 <span id="DocumentStatus">Document Status Section</span>

Each technical report <span class="rfc2119">MUST</span> include a section about the status of the document. The status section <span class="rfc2119">SHOULD</span> explain why W3C has published the technical report, expectations about next steps, who developed it, where to send comments about it, whether implementation experience is being sought, any significant changes from the previous version, why work on the technical report has ceased or been subsumed, and any other relevant information or rationale.

The Team's [Publication Rules](http://www.w3.org/Guide/pubrules) include status section requirements for each maturity level.

---

\[[next chapter](acreview.html)\]   \[[previous chapter](groups.html)\]   \[[contents](cover.html#toc)\]
