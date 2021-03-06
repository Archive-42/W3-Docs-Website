[<img src="https://www.w3.org/Icons/w3c_home" alt="W3C" width="72" height="48" />](https://www.w3.org/)

# World Wide Web Consortium Process Document

## 1 February 2018

Superseded; see the [current W3C Process Document](/Consortium/Process/).

This version - permanent URI:  
<https://www.w3.org/2018/Process-20180201/>

Latest operative version:  
<https://www.w3.org/Consortium/Process/>

Previous operative version:  
[1 March 2017](https://www.w3.org/2017/Process-20170301/)

Editor:  
Charles McCathie Nevile, [<span style="color: red;">Y</span>andex](http://yandex.com) — [<span style="color: red;">Я</span>ндекс](http://yandex.ru)

Previous editor:  
Ian Jacobs, [W3C](https://www.w3.org/)

[Copyright](https://www.w3.org/Consortium/Legal/ipr-notice#Copyright) © 1996-2018 [W3C](/)<sup>®</sup> ([MIT](https://www.csail.mit.edu/), [ERCIM](https://www.ercim.eu/), [Keio](https://www.keio.ac.jp/), [Beihang](http://ev.buaa.edu.cn/)), All Rights Reserved. W3C [liability](/Consortium/Legal/ipr-notice#Legal_Disclaimer), [trademark](/Consortium/Legal/ipr-notice#W3C_Trademarks), [document use](/Consortium/Legal/copyright-documents) and [software licensing](/Consortium/Legal/copyright-software) rules apply. Your interactions with this site are in accordance with our [public](/Consortium/Legal/privacy-statement#Public) and [Member](/Consortium/Legal/privacy-statement#Members) privacy statements.

---

## <span id="abstract">Abstract</span>

The mission of the World Wide Web Consortium (W3C) is to lead the World Wide Web to its full potential by developing common protocols that promote its evolution and ensure its interoperability. The W3C Process Document describes the organizational structure of the W3C and processes, responsibilities and functions that enable W3C to accomplish its mission. This document does not describe the internal workings of the Team.

For more information about the W3C mission and the history of W3C, please refer to [About W3C](https://www.w3.org/Consortium/).

## Status of this Document

This is the 1 February 2018 W3C Process Document. This document was developed by the W3C Advisory Board's Process Task Force working within the [Revising W3C Process Community Group](https://www.w3.org/community/w3process/) (which anyone can join) and reviewed by the W3C Membership.

W3C, including all existing chartered groups, follows the [most recent operative Process Document](https://www.w3.org/Consortium/Process/) announced to the Membership.

A [history of substantial changes](#changes) since the 1 March 2017 Process Document is provided. A log of [all changes since March 2017 in diff format](https://www.w3.org/2018/Process-20180201/diff-20170301.html) is available, as is an earlier [log of changes in previous versions, from 2005-2014](https://dvcs.w3.org/hg/AB/).

Please file comments as issues in the [w3c/w3process GitHub Repository](https://github.com/w3c/w3process/issues). If you are unable to do this you may send them in email to <public-w3process@w3.org> ([publicly archived](https://lists.w3.org/Archives/Public/public-w3process/)) or to process-issues@w3.org ([Member-only archive](https://lists.w3.org/Archives/Member/process-issues)). The latest unadopted [editor’s draft](https://w3c.github.io/w3process/) is also available in GitHub.

## Relation of Process Document to Patent Policy

W3C Members' attention is called to the fact that provisions of the Process Document are binding on Members per the [Membership Agreement](https://www.w3.org/Consortium/Agreement/Member-Agreement). The Patent Policy [W3C Patent Policy](https://www.w3.org/Consortium/Patent-Policy) is incorporated by normative reference as a part of the Process Document, and is thus equally binding.

The Patent Policy places additional obligations on Members, Team, and other participants in W3C. The Process Document does not restate those requirements but includes references to them. The Process Document and Patent Policy have been designed to allow them to evolve independently.

In the Process Document, the term "participant" refers to an individual, not an organization.

## Conformance and specialized terms

The terms _must_, _must not_, _should_, _should not_, _required_, and _may_ are used in accordance with [RFC 2119](https://www.ietf.org/rfc/rfc2119.txt). The term _not required_ is equivalent to the term _may_ as defined in [RFC2119](#ref-RFC2119).

Some terms have been capitalized in this document (and in other W3C materials) to indicate that they are entities with special relevance to the W3C Process. These terms are defined within this document, and readers are reminded that the ordinary English definitions are insufficient for the purpose of understanding this document.

## Table of Contents

- <a href="#Intro" class="tocxref">1 Introduction</a>
- <a href="#Organization" class="tocxref">2 Members, Advisory Committee, Team, Advisory Board, Technical Architecture Group</a>
- <a href="#Policies" class="tocxref">3 General Policies for W3C Groups</a>
- <a href="#dissemination" class="tocxref">4 Dissemination Policies</a>
- <a href="#GAGeneral" class="tocxref">5 Working Groups and Interest Groups</a>
- <a href="#Reports" class="tocxref">6 W3C Technical Report Development Process</a>
- <a href="#ReviewAppeal" class="tocxref">7 Advisory Committee Reviews, Appeals, and Votes</a>
- <a href="#GAEvents" class="tocxref">8 Workshops and Symposia</a>
- <a href="#Liaisons" class="tocxref">9 Liaisons</a>
- <a href="#Submission" class="tocxref">10 Member Submission Process</a>
- <a href="#GAProcess" class="tocxref">11 Process Evolution</a>
- <a href="#references" class="tocxref">12 References</a>
- <a href="#acks" class="tocxref">13 Acknowledgments</a>
- <a href="#changes" class="tocxref">14 Changes</a>

### Expanded table of contents

- [1 Introduction](#Intro)
- [2 Members, Advisory Committee, Team, Advisory Board, Technical Architecture Group](#Organization)
  - [2.1 Members](#Members)
    - [2.1.1 Rights of Members](#MemberBenefits)
    - [2.1.2 Member Consortia, and Related Members](#RelatedAndConsortiumMembers)
      - [2.1.2.1 Membership Consortia](#MemberConsortia)
      - [2.1.2.2 Related Members](#MemberRelated)
    - [2.1.3 Advisory Committee (AC)](#AC)
      - [2.1.3.1 Advisory Committee Mailing Lists](#ACCommunication)
      - [2.1.3.2 Advisory Committee Meetings](#ACMeetings)
  - [2.2 The W3C Team](#Team)
    - [2.2.1 Team Submissions](#TeamSubmission)
  - [2.3 Advisory Board (AB)](#AB)
    - [2.3.1 Advisory Board Participation](#ABParticipation)
  - [2.4 Technical Architecture Group (TAG)](#TAG)
    - [2.4.1 Technical Architecture Group Participation](#tag-participation)
  - [2.5 Advisory Board and Technical Architecture Group Participation](#AB-TAG-participation)
    - [2.5.1 Advisory Board and Technical Architecture Group Participation Constraints](#AB-TAG-constraints)
    - [2.5.2 Advisory Board and Technical Architecture Group Elections](#AB-TAG-elections)
    - [2.5.3 Advisory Board and Technical Architecture Group Vacated Seats](#AB-TAG-vacated)
- [3 General Policies for W3C Groups](#Policies)
  - [3.1 Individual Participation Criteria](#ParticipationCriteria)
    - [3.1.1 Conflict of Interest Policy](#coi)
    - [3.1.2 Individuals Representing a Member Organization](#member-rep)
  - [3.2 Meetings](#GeneralMeetings)
  - [3.3 Consensus](#Consensus)
    - [3.3.1 Managing Dissent](#managing-dissent)
    - [3.3.2 Recording and Reporting Formal Objections](#WGArchiveMinorityViews)
    - [3.3.3 Formally Addressing an Issue](#formal-address)
    - [3.3.4 Reopening a Decision When Presented With New Information](#WGChairReopen)
  - [3.4 Votes](#Votes)
  - [3.5 Appeal of a Chair's Decision](#WGAppeals)
  - [3.6 Resignation from a Group](#resignation)
- [4 Dissemination Policies](#dissemination)
  - [4.1 Confidentiality Levels](#confidentiality-levels)
    - [4.1.1 Changing Confidentiality Level](#confidentiality-change)
- [5 Working Groups and Interest Groups](#GAGeneral)
  - [5.1 Requirements for All Working and Interest Groups](#ReqsAllGroups)
  - [5.2 Working Groups and Interest Groups](#GroupsWG)
    - [5.2.1 Working Group and Interest Group Participation Requirements](#group-participation)
      - [5.2.1.1 Member Representative in a Working Group](#member-rep-wg)
      - [5.2.1.2 Member Representative in an Interest Group](#member-rep-ig)
      - [5.2.1.3 Invited Expert in a Working Group](#invited-expert-wg)
      - [5.2.1.4 Invited Expert in an Interest Group](#invited-expert-ig)
      - [5.2.1.5 Team Representative in a Working Group](#team-rep-wg)
      - [5.2.1.6 Team Representative in an Interest Group](#team-rep-ig)
    - [5.2.2 Working Group and Interest Group Charter Development](#WGCharterDevelopment)
    - [5.2.3 Advisory Committee Review of a Working Group or Interest Group Charter](#CharterReview)
    - [5.2.4 Call for Participation in a Working Group or Interest Group](#cfp)
    - [5.2.5 Working Group and Interest Group Charter Extension](#charter-extension)
    - [5.2.6 Working Group and Interest Group Charters](#WGCharter)
    - [5.2.7 Working Group and Interest Group Closure](#GeneralTermination)
- [6 W3C Technical Report Development Process](#Reports)
  - [6.1 W3C Technical Reports](#rec-advance)
    - <a href="#recs-and-notes" id="return-to-wg">6.1.1 Recommendations and Notes</a>
    - [6.1.2 Maturity Levels](#maturity-levels)
  - [6.2 General requirements and definitions](#requirements-and-definitions)
    - [6.2.1 General requirements for Technical Reports](#general-requirements)
    - [6.2.2 Advancement on the Recommendation Track](#transition-reqs)
    - [6.2.3 Reviews and Review Responsibilities](#doc-reviews)
      - [6.2.3.1 Wide Review](#wide-review)
    - [6.2.4 Implementation Experience](#implementation-experience)
    - [6.2.5 Classes of Changes](#correction-classes)
  - [6.3 Working Draft](#working-draft)
    - [6.3.1 First Public Working Draft](#first-wd)
    - [6.3.2 Revising Working Drafts](#revised-wd)
    - [6.3.3 Stopping work on a specification](#tr-end)
  - <a href="#candidate-rec" id="cfi">6.4 Candidate Recommendation</a>
    - [6.4.1 Revising a Candidate Recommendation](#revised-cr)
  - <a href="#rec-pr" id="cfr">6.5 Proposed Recommendation</a>
  - [6.6 W3C Recommendation](#rec-publication)
  - [6.7 Modifying a W3C Recommendation](#rec-modify)
    - [6.7.1 Errata Management](#errata)
    - <a href="#revised-rec" id="cfr-edited">6.7.2 Revising a Recommendation</a>
  - [6.8 Publishing a Working Group or Interest Group Note](#Note)
  - [6.9 Declaring a W3C Recommendation Rescinded, Obsolete or Superseded](#rec-rescind)
  - [6.10 Further reading](#further-reading)
- [7 Advisory Committee Reviews, Appeals, and Votes](#ReviewAppeal)
  - [7.1 Advisory Committee Reviews](#ACReview)
    - [7.1.1 Start of a Review Period](#ACReviewStart)
    - [7.1.2 After the Review Period](#ACReviewAfter)
  - [7.2 Appeal by Advisory Committee Representatives](#ACAppeal)
  - [7.3 Advisory Committee Votes](#ACVotes)
- [8 Workshops and Symposia](#GAEvents)
- [9 Liaisons](#Liaisons)
- [10 Member Submission Process](#Submission)
  - [10.1 Submitter Rights and Obligations](#SubmissionRights)
    - [10.1.1 Scope of Member Submissions](#SubmissionScope)
    - [10.1.2 Information Required in a Submission Request](#SubmissionReqs)
  - [10.2 Team Rights and Obligations](#TeamSubmissionRights)
  - [10.3 Acknowledgment of a Submission Request](#SubmissionYes)
  - [10.4 Rejection of a Submission Request, and Submission Appeals](#SubmissionNo)
- [11 Process Evolution](#GAProcess)
- [12 References](#references)
  - [12.1 Public Resources](#public-refs)
  - [12.2 Member-only Resources](#member-refs)
  - [12.3 Other References](#other-refs)
- [13 Acknowledgments](#acks)
- [14 Changes](#changes)

## 1 Introduction

Most W3C work revolves around the standardization of Web technologies. To accomplish this work, W3C follows processes that promote the development of high-quality standards based on the [consensus](#Consensus) of the Membership, Team, and public. W3C processes promote fairness, responsiveness, and progress: all facets of the W3C mission. This document describes the processes W3C follows in pursuit of its mission.

Here is a general overview of how W3C standardizes a Web technology. In many cases, the goal of this work is a [W3C Recommendation](#RecsW3C) - a Web standard.

1.  People generate interest in a particular topic. For instance, Members express interest in the form of [Member Submissions](#Submission), and the [Team](#Team) monitors work inside and outside of W3C for signs of interest. Also, W3C is likely to organize a [Workshop](#GAEvents) to bring people together to discuss topics that interest the W3C community.
2.  When there is enough interest in a topic (e.g., after a successful Workshop and/or discussion on an [Advisory Committee mailing list](#ACCommunication)), the Director announces the development of a proposal for one or more new [Interest Group or Working Group charters](#WGCharterDevelopment), depending on the breadth of the topic of interest. W3C Members [review](#CharterReview) the proposed charters. When there is support within W3C for investing resources in the topic of interest, the Director approves the group(s) and they begin their work.
3.  There are three types of Working Group participants: [Member representatives](#member-rep), [Invited Experts](#invited-expert-wg), and [Team representatives](#Team). Team representatives both contribute to the technical work and help ensure the group's proper integration with the rest of W3C. The [Working Group charter](#WGCharter) sets expectations about each group's deliverables (e.g., [technical reports](#Reports), test suites, and tutorials).
4.  Working Groups generally create specifications and guidelines that undergo cycles of revision and review as they [advance to W3C Recommendation](#rec-advance) status. The W3C process for producing these technical reports includes significant review by the Members and public, and requirements that the Working Group be able to show implementation and interoperability experience. At the end of the process, the Advisory Committee reviews the mature technical report, and if there is support, W3C publishes it as a [Recommendation](#RecsW3C).

The Process Document promotes the goals of quality and fairness in technical decisions by encouraging [consensus](#Consensus), requiring reviews (by both Members and public) as part of the [technical report development process](#Reports), and through an [Advisory Committee Appeal process](#ACAppeal).

The other sections of the Process Document:

1.  set forth [policies](#Policies) for participation in W3C groups,
2.  establish two permanent groups within W3C: the [Technical Architecture Group (TAG)](#TAG), to help resolve Consortium-wide technical issues; and the [Advisory Board (AB)](#AB), to help resolve Consortium-wide non-technical issues, and to manage the [evolution of the W3C process](#GAProcess), and
3.  describe other interactions between the [Members](#Members) (as represented by the [W3C Advisory Committee](#AC)), the Team, and the general public.

## 2 Members, Advisory Committee, Team, Advisory Board, Technical Architecture Group

W3C's mission is to lead the Web to its full potential. W3C [Member](#Members) organizations provide resources to this end, and the W3C [Team](#Team) provides the technical leadership and organization to coordinate the effort.

### 2.1 Members

W3C Members are primarily represented in W3C processes as follows:

1.  The [Advisory Committee](#AC) is composed of one representative from each Member organization (refer to the [Member-only](#Member-only) list of [current Advisory Committee representatives](https://www.w3.org/Member/ACList). The Advisory Committee:

    - reviews plans for W3C at each [Advisory Committee meeting](#ACMeetings);
    - reviews formal proposals from the W3C Director: [Charter Proposals](#CharterReview), [Proposed Recommendations](#RecsPR), and [Proposed Process Documents](#GAProcess).
    - elects the [Advisory Board](#AB) participants other than the Advisory Board Chair.
    - elects a majority (6) of the participants on the [Technical Architecture Group](#TAG).

    Advisory Committee representatives _may_ initiate an [Advisory Committee Appeal](#ACAppeal) in some cases described in this document.

2.  Representatives of Member organizations participate in [Working Groups and Interest Groups](#GAGeneral) and author and review [technical reports](#Reports).

W3C membership is open to all entities, as described in "[How to Join W3C](https://www.w3.org/Consortium/join)"; (refer to the public list of [current W3C Members](https://www.w3.org/Consortium/Member/List)). Organizations subscribe according to the [Membership Agreement](https://www.w3.org/Consortium/Agreement/Member-Agreement). The [Team](#Team) _must_ ensure that Member participation agreements remain [Team-only](#Team-only) and that no Member receives preferential treatment within W3C.

While W3C does not have a class of membership tailored to individuals, individuals _may_ join W3C. Restrictions pertaining to [related Members](#MemberRelated) apply when the individual also [represents](#member-rep) another W3C Member.

#### 2.1.1 Rights of Members

Each Member organization enjoys the following rights and benefits:

- A seat on the [Advisory Committee](#AC);
- Access to [Member-only](#Member-only) information;
- The [Member Submission](#Submission) process;
- Use of the W3C Member logo on promotional material and to publicize the Member's participation in W3C. For more information, please refer to the Member logo usage policy described in the [New Member Orientation](https://www.w3.org/Member/Intro).

Furthermore, subject to further restrictions included in the Member Agreement, representatives of Member organizations participate in W3C as follows:

- In [Working Groups and Interest Groups](#GAGeneral).
- In [Workshops and Symposia](#GAEvents);
- On the Team, as [W3C Fellows](#fellows).

The rights and benefits of W3C membership are contingent upon conformance to the processes described in this document. The vast majority of W3C Members faithfully follow the spirit as well as the letter of these processes. When serious and/or repeated violations do occur, and repeated attempts to address these violations have not resolved the situation, the Director _may_ take disciplinary action. Arbitration in the case of further disagreement is governed by paragraph 19 of the Membership Agreement. Refer to the [Guidelines for Disciplinary Action](https://www.w3.org/2002/09/discipline).

#### 2.1.2 Membership Consortia and related Members

##### 2.1.2.1 Membership Consortia

A "Member Consortium" means a consortium, user society, or association of two or more individuals, companies, organizations or governments, or any combination of these entities which has the purpose of participating in a common activity or pooling resources to achieve a common goal other than participation in, or achieving certain goals in, W3C. A joint-stock corporation or similar entity is not a "Member Consortium" merely because it has shareholders or stockholders. If it is not clear whether a prospective Member qualifies as a Member Consortium, the Director may reasonably make the determination. For a Member Consortium, the rights and privileges of W3C Membership described in the W3C Process Document extend to the Member Consortium's paid staff and Advisory Committee representative.

Member Consortia _may_ also designate up to four (or more at the Team's discretion) individuals who, though not employed by the organization, _may_ exercise the rights of [Member representatives](#member-rep).

For Member Consortia that have individual people as members these individuals _must_ disclose their employment affiliation when participating in W3C work. Provisions for [related Members](#MemberRelated) apply. Furthermore, these individuals _must_ represent the broad interests of the W3C Member organization and not the particular interests of their employers.

For Member Consortia that have organizations as Members, all such designated representatives _must_ be an official representative of the Member organization (e.g. a Committee or Task Force Chairperson) and _must_ disclose their employment affiliation when participating in W3C work. Provisions for [related Members](#MemberRelated) apply. Furthermore, these individuals _must_ represent the broad interests of the W3C Member organization and not the particular interests of their employers.

For all representatives of a Member Consortium, IPR commitments are made on behalf of the Member Consortium, unless a further IPR commitment is made by the individuals' employers.

##### 2.1.2.2 Related Members

In the interest of ensuring the integrity of the consensus process, Member involvement in some of the processes in this document is affected by related Member status. As used herein, two Members are related if:

1.  Either Member is a subsidiary of the other, or
2.  Both Members are subsidiaries of a common entity, or
3.  The Members have an employment contract or consulting contract that affects W3C participation.

A _subsidiary_ is an organization of which effective control and/or majority ownership rests with another, single organization.

Related Members _must_ disclose these relationships according to the mechanisms described in the [New Member Orientation](https://www.w3.org/Member/Intro).

#### 2.1.3 Advisory Committee (AC)

When an organization joins W3C (see "[How to Join W3C](https://www.w3.org/Consortium/join)"), it _must_ name its Advisory Committee representative as part of the Membership Agreement. The [New Member Orientation](https://www.w3.org/Member/Intro) explains how to subscribe or unsubscribe to Advisory Committee mailing lists, provides information about Advisory Committee Meetings, explains how to name a new Advisory Committee representative, and more. Advisory Committee representatives _must_ follow the [conflict of interest policy](#coi) by disclosing information according to the mechanisms described in the New Member Orientation. See also the additional roles of Advisory Committee representatives described in the [W3C Patent Policy](https://www.w3.org/Consortium/Patent-Policy).

Additional information for Members is available at the [Member Web site](https://www.w3.org/Member/).

##### 2.1.3.1 Advisory Committee Mailing Lists

The Team _must_ provide two mailing lists for use by the Advisory Committee:

1.  One for official announcements (e.g., those required by this document) from the Team to the Advisory Committee. This list is read-only for Advisory Committee representatives.
2.  One for discussion among Advisory Committee representatives. Though this list is primarily for Advisory Committee representatives, the Team _must_ monitor discussion and _should_ participate in discussion when appropriate. Ongoing detailed discussions _should_ be moved to other appropriate lists (new or existing, such as a mailing list created for a [Workshop](#GAEvents)).

An Advisory Committee representative _may_ request that additional individuals from their organization be subscribed to these lists. Failure to contain distribution internally _may_ result in suspension of additional email addresses, at the discretion of the Team.

##### 2.1.3.2 Advisory Committee Meetings

The Team organizes a [face-to-face meeting](#ftf-meeting) for the Advisory Committee <span class="time-interval">twice a year</span>. The Team appoints the Chair of these meetings (generally the CEO). At each Advisory Committee meeting, the Team _should_ provide an update to the Advisory Committee about:

_Resources_

- The number of W3C Members at each level.
- An overview of the financial status of W3C.

_Allocations_

- The allocation of the annual budget, including size of the Team and their approximate deployment.
- A list of all activities (including but not limited to Working and Interest Groups) and brief status statement about each, in particular those started or terminated since the previous Advisory Committee meeting.
- The allocation of resources to pursuing [liaisons](#Liaisons) with other organizations.

Each Member organization _should_ send one [representative](#member-rep) to each Advisory Committee Meeting. In exceptional circumstances (e.g., during a period of transition between representatives from an organization), the meeting Chair _may_ allow a Member organization to send two representatives to a meeting.

The Team _must_ announce the date and location of each Advisory Committee meeting no later than at the end of the previous meeting; <span class="time-interval">one year's</span> notice is preferred. The Team _must_ announce the region of each Advisory Committee meeting at least <span class="time-interval">one year</span> in advance.

More information about [Advisory Committee meetings](https://www.w3.org/Member/Meeting/) is available at the Member Web site.

### 2.2 The W3C Team

The Team consists of the Director, CEO, W3C paid staff, unpaid interns, and W3C Fellows. W3C Fellows are Member employees working as part of the Team; see the [W3C Fellows Program](https://www.w3.org/Consortium/Recruitment/Fellows). The Team provides technical leadership about Web technologies, organizes and manages W3C activities to reach goals within practical constraints (such as resources available), and communicates with the Members and the public about the Web and W3C technologies.

The Director and CEO _may_ delegate responsibility (generally to other individuals in the Team) for any of their roles described in this document, except [participation in the TAG](#tag-participation).

The Director is the lead technical architect at W3C, whose responsibilities are identified throughout this document in relevant places. Some key ones include: assessing <a href="#def-Consensus" id="DirectorDecision">consensus</a> within W3C for architectural choices, publication of [technical reports](#Reports), and chartering new Groups; appointing group [Chairs](#GeneralChairs); adjudicating as "tie-breaker" for [Group decision appeals](#WGAppeals) and deciding on the outcome of formal objections; the Director is generally Chair of the [TAG](#TAG).

Team administrative information such as Team salaries, detailed budgeting, and other business decisions are [Team-only](#Team-only), subject to oversight by the Host institutions.

**Note:** W3C is not currently incorporated. For legal contracts, W3C is represented by four "Host" institutions: Beihang University, the European Research Consortium for Informatics and Mathematics (ERCIM), Keio University, and the Massachusetts Institute of Technology (MIT). Within W3C, the Host institutions are governed by hosting agreements; the Hosts themselves are not W3C Members.

#### 2.2.1 Team Submissions

Team members _may_ request that the Director publish information at the W3C Web site. At the Director's discretion, these documents are published as "Team Submissions". These documents are analogous to [Member Submissions](#Submission) (e.g., in [expected scope](#SubmissionScope)). However, there is no additional Team comment. The [document status section](#DocumentStatus) of a Team Submission _must_ indicate the level of Team consensus about the published material.

Team Submissions are **not** part of the [technical report development process](#Reports).

The list of [published Team Submissions](https://www.w3.org/TeamSubmission/) is available at the W3C Web site.

### 2.3 Advisory Board (AB)

Created in March 1998, the Advisory Board provides ongoing guidance to the Team on issues of strategy, management, legal matters, process, and conflict resolution. The Advisory Board also serves the Members by tracking issues raised between Advisory Committee meetings, soliciting Member comments on such issues, and proposing actions to resolve these issues. The Advisory Board manages the [evolution of the Process Document](#GAProcess). The Advisory Board hears a [Submission Appeal](#SubmissionNo) when a Member Submission is rejected for reasons unrelated to Web architecture; see also the [TAG](#TAG).

The Advisory Board is **not** a board of directors and has no decision-making authority within W3C; its role is strictly advisory.

The Team _must_ make available a mailing list, confidential to the Advisory Board and Team, for the Advisory Board to use for its communication.

The Advisory Board _should_ send a summary of each of its meetings to the Advisory Committee and other group Chairs. The Advisory Board _should_ also report on its activities at each [Advisory Committee meeting](#ACMeetings).

Details about the Advisory Board (e.g., the list of Advisory Board participants, mailing list information, and summaries of Advisory Board meetings) are available at the [Advisory Board home page](https://www.w3.org/2002/ab/).

#### 2.3.1 Advisory Board Participation

The Advisory Board consists of nine elected participants and a Chair. The Team appoints the Chair of the [Advisory Board](#AB), who is generally the CEO. The team also appoints a [Team Contact](https://www.w3.org/Guide/staff-contact) for the AB, as described in [Section 5.1](#ReqsAllGroups).

The remaining nine Advisory Board participants are elected by the W3C Advisory Committee following the [AB/TAG nomination and election process](#AB-TAG-elections).

With the exception of the Chair, the terms of all Advisory Board participants are for <span class="time-interval">two years</span>. Terms are staggered so that each year, either four or five terms expire. If an individual is elected to fill an incomplete term, that individual's term ends at the normal expiration date of that term. Regular Advisory Board terms begin on 1 July and end on 30 June.

### 2.4 Technical Architecture Group (TAG)

Created in February 2001, the mission of the TAG is stewardship of the Web architecture. There are three aspects to this mission:

1.  to document and build consensus around principles of Web architecture and to interpret and clarify these principles when necessary;
2.  to resolve issues involving general Web architecture brought to the TAG;
3.  to help coordinate cross-technology architecture developments inside and outside W3C.

The TAG hears a [Submission Appeal](#SubmissionNo) when a Member Submission is rejected for reasons related to Web architecture; see also the [Advisory Board](#AB).

The TAG's scope is limited to technical issues about Web architecture. The TAG _should not_ consider administrative, process, or organizational policy issues of W3C, which are generally addressed by the W3C Advisory Committee, Advisory Board, and Team. Please refer to the [TAG charter](https://www.w3.org/2004/10/27-tag-charter.html) for more information about the background and scope of the TAG, and the expected qualifications of TAG participants.

The Team _must_ make available two mailing lists for the TAG:

- a public discussion (not just input) list for issues of Web architecture. The TAG will conduct its public business on this list.
- a [Member-only](#Member-only) list for discussions within the TAG and for requests to the TAG that, for whatever reason, cannot be made on the public list.

The TAG _may_ also request the creation of additional topic-specific, public mailing lists. For some TAG discussions (e.g., a [Submission Appeal](#SubmissionNo)), the TAG _may_ use a list that will be [Member-only](#Member-only).

The TAG _should_ send a summary of each of its [meetings](#GeneralMeetings) to the Advisory Committee and other group Chairs. The TAG _should_ also report on its activities at each [Advisory Committee meeting](#ACMeetings).

When the TAG votes to resolve an issue, each TAG participant (whether appointed, elected, or the Chair) has one vote; see also the section on [voting in the TAG charter](https://www.w3.org/2004/10/27-tag-charter.html#Voting) and the general section on [votes](#Votes) in this Process Document.

Details about the TAG (e.g., the list of TAG participants, mailing list information, and summaries of TAG meetings) are available at the [TAG home page](https://www.w3.org/2001/tag/).

#### 2.4.1 Technical Architecture Group Participation

The TAG consists of:

- Tim Berners-Lee, who is a life member;
- The [Director](#def-Director), sitting _ex officio_;
- Three participants appointed by the Director;
- Six participants elected by the Advisory Committee following the [AB/TAG nomination and election process](#AB-TAG-elections).

The Team appoints the Chair of the TAG, who _must_ be one of the participants. The team also appoints a [Team Contact](https://www.w3.org/Guide/staff-contact) for the TAG, as described in [Section 5.1](#ReqsAllGroups).

The terms of elected and Director-appointed TAG participants are for <span class="time-interval">two years</span>. Terms are staggered so that each year three elected terms, and either one or two appointed terms expire. If an individual is appointed or elected to fill an incomplete term, that individual's term ends at the normal expiration date of that term. Regular TAG terms begin on 1 February and end on 31 January.

The Director _may_ announce the appointed participants after the results for the Advisory Committee election of participants have been announced.

### 2.5 Advisory Board and Technical Architecture Group Participation

Advisory Board and TAG participants have a special role within W3C: they are elected by the Membership and appointed by the Director with the expectation that they will use their best judgment to find the best solutions for the Web, not just for any particular network, technology, vendor, or user. Advisory Board and TAG participants are expected to participate regularly and fully. Advisory Board and TAG participants _should_ attend [Advisory Committee meetings](#ACMeetings).

An individual participates on the Advisory Board or TAG from the moment the individual's term begins until the seat is [vacated](#AB-TAG-vacated) (e.g. because the term ends). Although Advisory Board and TAG participants do not advocate for the commercial interests of their employers, their participation does carry the responsibilities associated with Member representation, Invited Expert status, or Team representation (as described in the section on the [AB/TAG nomination and election process](#AB-TAG-elections)). See also the licensing obligations on TAG participants in [section 3](https://www.w3.org/Consortium/Patent-Policy#sec-Obligations) of the [W3C Patent Policy](https://www.w3.org/Consortium/Patent-Policy), and the claim exclusion process of [section 4](https://www.w3.org/Consortium/Patent-Policy#sec-Exclusion).

Participation in the TAG or AB other than as Chair or Team Contact is in a personal capacity, and a participant's seat _must not_ be delegated to any other person.

#### 2.5.1 Advisory Board and Technical Architecture Group Participation Constraints

Given the few seats available on the Advisory Board and the TAG, and in order to ensure that the diversity of W3C Members is represented:

- A Member organization is permitted at most one participant on the TAG except when having more than one participant is caused by a change of affiliation of an existing participant. At the completion of the next regularly scheduled election for the TAG, the Member organization _must_ have returned to having at most one participant.
- A Member organization is permitted at most one participant on the AB.
- An individual _must not_ participate on both the TAG and the AB.

If, for whatever reason, these constraints are not satisfied (e.g., because an AB participant changes jobs), one participant _must_ cease AB participation until the situation has been resolved. If after <span class="time-interval">30 days</span> the situation has not been resolved, the Chair will declare one participant's seat to be vacant. When more than one individual is involved, the [verifiable random selection procedure](#random) described below will be used to choose one person for continued participation.

#### 2.5.2 Advisory Board and Technical Architecture Group Elections

The Advisory Board and a portion of the Technical Architecture Group are elected by the Advisory Committee, using a Single Transferable Vote system. An election begins when the Team sends a Call for Nominations to the Advisory Committee. Any Call for Nominations specifies the number of available seats, the deadline for nominations, details about the specific vote tabulation system selected by the Team for the election, and operational information such as how to nominate a candidate. The Team _may_ modify the tabulation system after the Call for Nominations but _must_ stabilize it no later than the Call for Votes. The Director _should_ announce appointments no later than the start of a nomination period as part of the Call for Nominations.

Each Member (or group of [related Members](#MemberRelated)) _may_ nominate one individual. A nomination _must_ be made with the consent of the nominee. In order for an individual to be nominated as a Member representative, the individual _must_ qualify for [Member representation](#member-rep) and the Member's Advisory Committee representative _must_ include in the nomination the (same) [information required for a Member representative in a Working Group](#member-rep-info). In order for an individual to be nominated as an Invited Expert, the individual _must_ provide the (same) [information required for an Invited Expert in a Working Group](#inv-expert-info) and the nominating Advisory Committee representative _must_ include that information in the nomination. In order for an individual to be nominated as a Team representative, the nominating Advisory Committee representative _must_ first secure approval from Team management. A nominee is _not required_ to be an employee of a Member organization, and _may_ be a [W3C Fellow](#fellows). Each nomination _should_ include a few informative paragraphs about the nominee.

If, after the deadline for nominations, the number of nominees is:

- Equal to the number of available seats, those nominees are thereby elected. This situation constitutes a tie for the purposes of assigning [short terms](#short-term).
- Less than the number of available seats, Calls for Nominations are issued until a sufficient number of people have been nominated. Those already nominated do not need to be renominated after a renewed call.
- Greater than the number of available seats, the Team issues a Call for Votes that includes the names of all candidates, the number of available seats, the deadline for votes, details about the vote tabulation system selected by the Team for the election, and operational information.

When there is a vote, each Member (or group of [related Members](#MemberRelated)) _may_ submit one ballot that ranks candidates in the Member's preferred order. Once the deadline for votes has passed, the Team announces the results to the Advisory Committee. In case of a tie the [verifiable random selection procedure](#random) described below will be used to fill the available seats.

The shortest term is assigned to the elected candidate ranked lowest by the tabulation of votes, the next shortest term to the next-lowest ranked elected candidate, and so on. In the case of a tie among those eligible for a short term, the [verifiable random selection procedure](#random) described below will be used to assign the short term.

Refer to [How to Organize an Advisory Board or TAG election](https://www.w3.org/2002/10/election-howto) for more details.

##### 2.5.2.1 Verifiable Random Selection Procedure

When it is necessary to use a verifiable random selection process (e.g., in an AB or TAG election, to "draw straws" in case of a tie or to fill a short term), W3C uses the random and verifiable procedure defined in [RFC 2777](https://www.ietf.org/rfc/rfc2777.txt). The procedure orders an input list of names (listed in alphabetical order by family name unless otherwise specified) into a "result order."

W3C applies this procedure as follows:

1.  When N people have tied for M (less than N) seats. In this case, only the names of the N individuals who tied are provided as input to the procedure. The M seats are assigned in result order.
2.  After all elected individuals have been identified, when N people are eligible for M (less than N) short terms. In this case, only the names of those N individuals are provided as input to the procedure. The short terms are assigned in result order.

#### 2.5.3 Advisory Board and Technical Architecture Group Vacated Seats

An Advisory Board or TAG participant's seat is vacated when:

- the participant [resigns](#resignation), or
- an Advisory Board or TAG participant changes affiliations such that the [Advisory Board and TAG participation constraints](#AB-TAG-constraints) are no longer met, or
- the Director dismisses the participant for failing to meet the [criteria for participation in section 3.1](#ParticipationCriteria), or
- their term ends.

If a participant changes affiliation, but the [participation constraints](#AB-TAG-constraints) are met, that participant's seat becomes vacant at the the next regularly scheduled election for that group.

Vacated seats are filled according to this schedule:

- When an appointed TAG seat is vacated, the Director _may_ re-appoint someone immediately, but no later than the next regularly scheduled election.
- When an elected seat on either the AB or TAG is vacated, the seat is filled at the next regularly scheduled election for the group unless the group Chair requests that W3C hold an election before then (for instance, due to the group's workload).
  - The group Chair _should not_ request such an election if the next regularly scheduled election is fewer than three months away.
  - The group Chair _may_ request an election, and the election may begin, as soon as a current member gives notice of a resignation, including a resignation effective as of a given date in the future.

## 3 General Policies for W3C Groups

This section describes general policies for W3C groups regarding participation, meeting requirements, and decision-making. These policies apply to <span id="participant">participants</span> in the following groups: [Advisory Committee](#AC), [Advisory Board](#ABParticipation), [TAG](#tag-participation), [Working Groups](#wgparticipant), and [Interest Groups](#igparticipant).

### 3.1 Individual Participation Criteria

There are three qualities an individual is expected to demonstrate in order to participate in W3C:

1.  Technical competence in one's role;
2.  The ability to act fairly;
3.  Social competence in one's role.

Advisory Committee representatives who nominate individuals from their organization for participation in W3C activities are responsible for assessing and attesting to the qualities of those nominees.

Participants in any W3C activity _must_ abide by the terms and spirit of the [W3C Code of Ethics and Professional Conduct](https://www.w3.org/Consortium/cepc/) and the participation requirements described in [section 6](https://www.w3.org/Consortium/Patent-Policy#sec-Disclosure) of the [W3C Patent Policy](https://www.w3.org/Consortium/Patent-Policy).

The Director _may_ suspend or remove for cause a participant in any group (including the AB and TAG), where cause includes failure to meet the requirements of this process, the membership agreement, or applicable laws.

#### 3.1.1 Conflict of Interest Policy

Individuals participating materially in W3C work _must_ disclose significant relationships when those relationships might reasonably be perceived as creating a conflict of interest with the individual's role at W3C. These disclosures _must_ be kept up-to-date as the individual's affiliations change and W3C membership evolves (since, for example, the individual might have a relationship with an organization that joins or leaves W3C). Each section in this document that describes a W3C group provides more detail about the disclosure mechanisms for that group.

The ability of an individual to fulfill a role within a group without risking a conflict of interest depends on the individual's affiliations. When these affiliations change, the individual's assignment to the role _must_ be evaluated. The role _may_ be reassigned according to the appropriate process. For instance, the Director _may_ appoint a new group Chair when the current Chair changes affiliations (e.g., if there is a risk of conflict of interest, or if there is risk that the Chair's new employer will be over-represented within a W3C activity).

The following are some scenarios where disclosure is appropriate:

- Paid consulting for an organization whose activity is relevant to W3C, or any consulting compensated with equity (shares of stock, stock options, or other forms of corporate equity).
- A decision-making role/responsibility (such as participating on the Board) in other organizations relevant to W3C.
- A position on a publicly visible advisory body, even if no decision making authority is involved.

Individuals seeking assistance on these matters _should_ contact the Team.

Team members are subject to the [W3C Team conflict of interest policy](https://www.w3.org/2000/09/06-conflictpolicy).

#### 3.1.2 Individuals Representing a Member Organization

Generally, individuals representing a Member in an official capacity within W3C are employees of the Member organization. However, an Advisory Committee representative _may_ designate a non-employee to represent the Member. Non-employee Member representatives _must_ disclose relevant affiliations to the Team and to any group in which the individual participates.

In exceptional circumstances (e.g., situations that might jeopardize the progress of a group or create a [conflict of interest](#coi)), the [Director](#def-Director) _may_ decline to allow an individual designated by an Advisory Committee representative to participate in a group.

A group charter _may_ limit the number of individuals representing a W3C Member (or group of [related Members](#MemberRelated)).

### 3.2 Meetings

W3C groups (including the [Advisory Committee](#ACMeetings), [Advisory Board](#AB), [TAG](#TAG), and [Working Groups](#GroupsWG)) _should_ observe the meeting requirements in this section.

W3C distinguishes two types of meetings:

1.  A face-to-face meeting is one where most of the attendees are expected to participate in the same physical location.
2.  A distributed meeting is one where most of the attendees are expected to participate from remote locations (e.g., by telephone, video conferencing, or IRC).

A Chair _may_ invite an individual with a particular expertise to attend a meeting on an exceptional basis. This person is a meeting guest, not a group [participant](#participant). Meeting guests do not have [voting rights](#Votes). It is the responsibility of the Chair to ensure that all meeting guests respect the chartered [level of confidentiality](#confidentiality-levels) and other group requirements.

Meeting announcements _should_ be sent to all appropriate group mailing lists, i.e., those most relevant to the anticipated meeting participants.

The following table lists requirements for organizing a meeting:

<table><thead><tr class="header"><th><br />
</th><th>Face-to-face meetings</th><th>Distributed meetings</th></tr></thead><tbody><tr class="odd"><td>Meeting announcement (before)</td><td><span class="time-interval">eight weeks<sup>*</sup></span></td><td><span class="time-interval">one week<sup>*</sup></span></td></tr><tr class="even"><td>Agenda available (before)</td><td><span class="time-interval">two weeks</span></td><td><span class="time-interval">24 hours</span> (or longer if a meeting is scheduled after a weekend or holiday)</td></tr><tr class="odd"><td>Participation confirmed (before)</td><td><span class="time-interval">three days</span></td><td><span class="time-interval">24 hours</span></td></tr><tr class="even"><td>Action items available (after)</td><td><span class="time-interval">three days</span></td><td><span class="time-interval">24 hours</span></td></tr><tr class="odd"><td>Minutes available (after)</td><td><span class="time-interval">two weeks</span></td><td><span class="time-interval">48 hours</span></td></tr></tbody></table>

<sup>\*</sup> To allow proper planning (e.g., travel arrangements), the Chair is responsible for giving sufficient advance notice about the date and location of a meeting. Shorter notice for a meeting is allowed provided that there are no objections from group participants.

### 3.3 Consensus

Consensus is a core value of W3C. To promote consensus, the W3C process requires Chairs to ensure that groups consider all legitimate views and objections, and endeavor to resolve them, whether these views and objections are expressed by the active participants of the group or by others (e.g., another W3C group, a group in another organization, or the general public). Decisions _may_ be made during meetings ([face-to-face](#ftf-meeting) or [distributed](#distributed-meeting)) as well as through email. **Note:** The Director, CEO, and COO have the role of assessing consensus within the Advisory Committee.

The following terms are used in this document to describe the level of support for a decision among a set of eligible individuals:

1.  Consensus: A substantial number of individuals in the set support the decision and nobody in the set registers a [Formal Objection](#FormalObjection). Individuals in the set _may_ abstain. Abstention is either an explicit expression of no opinion or silence by an individual in the set. Unanimity is the particular case of consensus where all individuals in the set support the decision (i.e., no individual in the set abstains).
2.  Dissent: At least one individual in the set registers a [Formal Objection](#FormalObjection).

By default, the set of individuals eligible to participate in a decision is the set of group participants. The Process Document does not require a quorum for decisions (i.e., the minimal number of eligible participants required to be present before the Chair can call a question). A charter _may_ include a quorum requirement for consensus decisions.

Where unanimity is not possible, a group _should_ strive to make consensus decisions where there is significant support and few abstentions. The Process Document does not require a particular percentage of eligible participants to agree to a motion in order for a decision to be made. To avoid decisions where there is widespread apathy, (i.e., little support and many abstentions), groups _should_ set minimum thresholds of active support before a decision can be recorded. The appropriate percentage _may_ vary depending on the size of the group and the nature of the decision. A charter _may_ include threshold requirements for consensus decisions. For instance, a charter might require a supermajority of eligible participants (i.e., some established percentage above 50%) to support certain types of consensus decisions.

#### 3.3.1 Managing Dissent

In some cases, even after careful consideration of all points of view, a group might find itself unable to reach consensus. The Chair _may_ record a decision where there is dissent (i.e., there is at least one [Formal Objection](#FormalObjection)) so that the group can make progress (for example, to produce a deliverable in a timely manner). Dissenters cannot stop a group's work simply by saying that they cannot live with a decision. When the Chair believes that the Group has duly considered the legitimate concerns of dissenters as far as is possible and reasonable, the group _should_ move on.

Groups _should_ favor proposals that create the weakest objections. This is preferred over proposals that are supported by a large majority but that cause strong objections from a few people. As part of making a decision where there is dissent, the Chair is expected to be aware of which participants work for the same (or [related](#MemberRelated)) Member organizations and weigh their input accordingly.

#### 3.3.2 Recording and Reporting Formal Objections

In the W3C process, an individual _may_ register a Formal Objection to a decision. A Formal Objection to a group decision is one that the reviewer requests that the Director consider as part of evaluating the related decision (e.g., in response to a [request to advance](#rec-advance) a technical report). **Note:** In this document, the term "Formal Objection" is used to emphasize this process implication: Formal Objections receive Director consideration. The word "objection" used alone has ordinary English connotations.

An individual who registers a Formal Objection _should_ cite technical arguments and propose changes that would remove the Formal Objection; these proposals _may_ be vague or incomplete. Formal Objections that do not provide substantive arguments or rationale are unlikely to receive serious consideration by the Director.

A record of each Formal Objection _must_ be [publicly available](#confidentiality-change). A Call for Review (of a document) to the Advisory Committee _must_ identify any Formal Objections.

#### 3.3.3 Formally Addressing an Issue

In the context of this document, a group has formally addressed an issue when it has sent a public, substantive response to the reviewer who raised the issue. A substantive response is expected to include rationale for decisions (e.g., a technical explanation, a pointer to charter scope, or a pointer to a requirements document). The adequacy of a response is measured against what a W3C reviewer would generally consider to be technically sound. If a group believes that a reviewer's comments result from a misunderstanding, the group _should_ seek clarification before reaching a decision.

As a courtesy, both Chairs and reviewers _should_ set expectations for the schedule of responses and acknowledgments. The group _should_ reply to a reviewer's initial comments in a timely manner. The group _should_ set a time limit for acknowledgment by a reviewer of the group's substantive response; a reviewer cannot block a group's progress. It is common for a reviewer to require a week or more to acknowledge and comment on a substantive response. The group's responsibility to respond to reviewers does not end once a reasonable amount of time has elapsed. However, reviewers _should_ realize that their comments will carry less weight if not sent to the group in a timely manner.

Substantive responses _should_ be recorded. The group _should_ maintain an accurate summary of all substantive issues and responses to them (e.g., in the form of an issues list with links to mailing list archives).

#### 3.3.4 Reopening a Decision When Presented With New Information

The Chair _may_ reopen a decision when presented with new information, including:

- additional technical information,
- comments by email from participants who were unable to attend a scheduled meeting,
- comments by email from meeting attendees who chose not to speak out during a meeting (e.g., so they could confer later with colleagues or for cultural reasons).

The Chair _should_ record that a decision has been reopened, and _must_ do so upon request from a group participant.

### 3.4 Votes

A group _should_ only conduct a vote to resolve a _substantive issue_ after the Chair has determined that all available means of [reaching consensus](#Consensus) through technical discussion and compromise have failed, and that a vote is necessary to break a deadlock. In this case the Chair _must_ record (e.g., in the minutes of the meeting or in an archived email message):

- an explanation of the issue being voted on;
- the decision to conduct a vote (e.g., a simple majority vote) to resolve the issue;
- the outcome of the vote;
- any Formal Objections.

In order to vote to resolve a substantive issue, an individual _must_ be a group [participant](#participant). Each organization represented in the group _must_ have at most one vote, even when the organization is represented by several participants in the group (including Invited Experts). For the purposes of voting:

- A Member or group of [related Members](#MemberRelated) is considered a single organization.
- The [Team](#Team) is considered an organization.

Unless the charter states otherwise, [Invited Experts](#invited-expert-wg) _may_ vote.

If a participant is unable to attend a vote, that individual _may_ authorize anyone at the meeting to act as a proxy. The absent participant _must_ inform the Chair in writing who is acting as proxy, with written instructions on the use of the proxy. For a Working Group or Interest Group, see the related requirements regarding an individual who attends a meeting as a [substitute](#mtg-substitute) for a participant.

A group _may_ vote for other purposes than to resolve a substantive issue. For instance, the Chair often conducts a "straw poll" vote as a means of determining whether there is consensus about a potential decision.

A group _may_ also vote to make a process decision. For example, it is appropriate to decide by simple majority whether to hold a meeting in San Francisco or San Jose (there's not much difference geographically). When simple majority votes are used to decide minor issues, the minority are _not required_ to state the reasons for their dissent, and the group is _not required_ to record individual votes.

A group charter _should_ include formal voting procedures (e.g., quorum or threshold requirements) for making decisions about substantive issues.

Procedures for [Advisory Committee votes](#ACVotes) are described separately.

### 3.5 Appeal of a Chair's Decision

Groups resolve issues through dialog. Individuals who disagree strongly with a decision _should_ register with the Chair any [Formal Objections](#FormalObjection) (e.g., to a decision made as the result of a [vote](#Votes)).

When group participants believe that their concerns are not being duly considered by the group, they _may_ ask the [Director](#def-Director) (for representatives of a Member organization, via their Advisory Committee representative) to confirm or deny the decision. This is a Group Decision Appeal. The participants _should_ also make their requests known to the [Team Contact](#TeamContact). The Team Contact _must_ inform the Director when a group participant has raised concerns about due process.

Any requests to the Director to confirm a decision _must_ include a summary of the issue (whether technical or procedural), decision, and rationale for the objection. All counter-arguments, rationales, and decisions _must_ be recorded.

Procedures for [Advisory Committee appeals](#ACAppeal) are described separately.

### 3.6 Resignation from a Group

A W3C Member or Invited Expert _may_ resign from a group. On written notification from an Advisory Committee representative or Invited Expert to the team, the Member and their representatives or the Invited Expert will be deemed to have resigned from the relevant group. See section 4.2. of the [W3C Patent Policy](https://www.w3.org/Consortium/Patent-Policy) for information about obligations remaining after resignation from certain groups.

## 4 Dissemination Policies

The Team is responsible for managing communication within W3C and with the general public (e.g., news services, press releases, managing the Web site and access privileges, and managing calendars). Members _should_ solicit review by the Team prior to issuing press releases about their work within W3C.

The Team makes every effort to ensure the persistence and availability of the following public information:

- [W3C technical reports](#Reports) whose publication has been approved by the Director. Per the Membership Agreement, W3C technical reports (and software) are available free of charge to the general public; (refer to the [W3C Document License](https://www.w3.org/Consortium/Legal/copyright-documents)).
- A [mission statement](https://www.w3.org/Consortium/mission) that explains the purpose and mission of W3C, the key benefits for Members, and the organizational structure of W3C.
- Legal documents, including the [Membership Agreement](https://www.w3.org/Consortium/Agreement/Member-Agreement) and documentation of any legal commitments W3C has with other entities.
- The Process Document.
- Public results of W3C activities and [Workshops](#GAEvents).

To keep the Members abreast of W3C meetings, Workshops, and review deadlines, the Team provides them with a regular (e.g., weekly) news service and maintains a [calendar](https://www.w3.org/participate/eventscal) of official W3C events. Members are encouraged to send schedule and event information to the Team for inclusion on this calendar.

### 4.1 Confidentiality Levels

There are three principal levels of access to W3C information (on the W3C Web site, in W3C meetings, etc.): public, Member-only, and Team-only.

While much information made available by W3C is public, "Member-only" information is available to authorized parties only, including representatives of Member organizations, [Invited Experts](#invited-expert-wg), the Advisory Board, the TAG, and the Team. For example, the [charter](#WGCharter) of some Working Groups _may_ specify a Member-only confidentiality level for group proceedings.

"Team-only" information is available to the Team and other authorized parties.

Those authorized to access Member-only and Team-only information:

- _must_ treat the information as confidential within W3C,
- _must_ use reasonable efforts to maintain the proper level of confidentiality, and
- _must not_ release this information to the general public or press.

The Team _must_ provide mechanisms to protect the confidentiality of Member-only information and ensure that authorized parties have proper access to this information. Documents _should_ clearly indicate whether they require Member-only confidentiality. Individuals uncertain of the confidentiality level of a piece of information _should_ contact the Team.

Advisory Committee representatives _may_ authorize Member-only access to [Member representatives](#member-rep) and other individuals employed by the Member who are considered appropriate recipients. For instance, it is the responsibility of the Advisory Committee representative and other employees and official representatives of the organization to ensure that Member-only news announcements are distributed for internal use only within their organization. Information about Member mailing lists is available in the [New Member Orientation](https://www.w3.org/Member/Intro).

#### 4.1.1 Changing Confidentiality Level

As a benefit of membership, W3C provides some Team-only and Member-only channels for certain types of communication. For example, Advisory Committee representatives can send [reviews](#ACReview) to a Team-only channel. However, for W3C processes with a significant public component, such as the technical report development process, it is also important for information that affects decision-making to be publicly available. The Team _may_ need to communicate Team-only information to a Working Group or the public. Similarly, a Working Group whose proceedings are Member-only _must_ make public information pertinent to the technical report development process.

This document clearly indicates which information _must_ be available to Members or the public, even though that information was initially communicated on Team-only or Member-only channels. Only the Team and parties authorized by the Team change the level of confidentiality of this information. When doing so:

1.  The Team _must_ use a version of the information that was expressly provided by the author for the new confidentiality level. In Calls for Review and other similar messages, the Team _should_ remind recipients to provide such alternatives.
2.  The Team _must not_ attribute the version for the new confidentiality level to the author without the author's consent.
3.  If the author has not conveyed to the Team a version that is suitable for another confidentiality level, the Team _may_ make available a version that reasonably communicates what is required, while respecting the original level of confidentiality, and without attribution to the original author.

## 5 Working Groups and Interest Groups

This document defines two types of groups:

1.  [Working Groups.](#GroupsWG) Working Groups typically produce deliverables (e.g., [Recommendation Track technical reports](#rec-advance), software, test suites, and reviews of the deliverables of other groups). There are additional participation requirements described in the [W3C Patent Policy](https://www.w3.org/Consortium/Patent-Policy).
2.  [Interest Groups.](#GroupsIG) The primary goal of an Interest Group is to bring together people who wish to evaluate potential Web technologies and policies. An Interest Group is a forum for the exchange of ideas.

Interest Groups do not publish [Recommendation Track technical reports](#RecsW3C); see information about [maturity levels for Interest Groups](#WGNote).

### 5.1 Requirements for All Working and Interest Groups

Each group _must_ have a charter. Requirements for the charter depend on the group type. All group charters _must_ be public (even if other proceedings of the group are [Member-only](#Member-only)).

Each group _must_ have a Chair (or co-Chairs) to coordinate the group's tasks. The Director appoints (and re-appoints) Chairs for all groups. The Chair is a [Member representative](#member-rep), a [Team representative](#Team), or an [Invited Expert](#invited-expert-wg) (invited by the Director). The requirements of this document that apply to those types of participants apply to Chairs as well. The [role of the Chair](/Guide/chair-roles) is described in the [Art of Consensus](https://www.w3.org/Guide/).

Each group _must_ have a Team Contact, who acts as the interface between the Chair, group participants, and the rest of the Team. The [role of the Team Contact](https://www.w3.org/Guide/staff-contact) is described in the Member guide. The Chair and the Team Contact of a group _should not_ be the same individual.

Each group _must_ have an archived mailing list for formal group communication (e.g., for meeting announcements and minutes, documentation of decisions, and [Formal Objections](#FormalObjection) to decisions). It is the responsibility of the Chair and Team Contact to ensure that new participants are subscribed to all relevant mailing lists. Refer to the list of [group mailing lists](https://www.w3.org/Member/Mail/).

A Chair _may_ form task forces (composed of group participants) to carry out assignments for the group. The scope of these assignments _must not_ exceed the scope of the group's charter. A group _should_ document the process it uses to create task forces (e.g., each task force might have an informal "charter"). Task forces do not publish [technical reports](#Reports); the Working Group _may_ choose to publish their results as part of a technical report.

### 5.2 Working Groups and Interest Groups

Although Working Groups and Interest Groups have different purposes, they share some characteristics, and so are defined together in the following sections.

#### 5.2.1 Working Group and Interest Group Participation Requirements

There are three types of individual participants in a Working Group: [Member representatives](#member-rep), [Invited Experts](#invited-expert-wg), and [Team representatives](#Team) (including the [Team Contact](#TeamContact)).

There are four types of individual participants in an Interest Group: the same three types as for Working Groups plus, for an Interest Group where the only [participation requirement is mailing list subscription](#ig-mail-only), public participants.

Except where noted in this document or in a group charter, all participants share the same rights and responsibilities in a group; see also the [individual participation criteria](#ParticipationCriteria).

A participant _must_ represent at most one organization in a Working Group or Interest Group.

An individual _may_ become a Working or Interest Group participant at any time during the group's existence. See also relevant requirements in [section 4.3](https://www.w3.org/Consortium/Patent-Policy#sec-join) of the [W3C Patent Policy](https://www.w3.org/Consortium/Patent-Policy).

On an exceptional basis, a Working or Interest Group participant _may_ designate a substitute to attend a [meeting](#GeneralMeetings) and _should_ inform the Chair. The substitute _may_ act on behalf of the participant, including for [votes](#Votes). For the substitute to vote, the participant _must_ inform the Chair in writing in advance. As a courtesy to the group, if the substitute is not well-versed in the group's discussions, the regular participant _should_ authorize another participant to act as [proxy](#proxy) for votes.

To allow rapid progress, Working Groups are intended to be small (typically fewer than 15 people) and composed of experts in the area defined by the charter. In principle, Interest Groups have no limit on the number of participants. When a Working Group grows too large to be effective, W3C _may_ split it into an Interest Group (a discussion forum) and a much smaller Working Group (a core group of highly dedicated participants).

See also the licensing obligations on Working Group participants in [section 3](https://www.w3.org/Consortium/Patent-Policy#sec-Obligations) of the [W3C Patent Policy](https://www.w3.org/Consortium/Patent-Policy), and the patent claim exclusion process of [section 4](https://www.w3.org/Consortium/Patent-Policy#sec-Exclusion).

##### 5.2.1.1 Member Representative in a Working Group

An individual is a Member representative in a Working Group if all of the following conditions are satisfied:

- the Advisory Committee representative of the Member in question has designated the individual as a Working Group participant, and
- the individual qualifies for [Member representation](#member-rep).

To designate an individual as a Member representative in a Working Group, an Advisory Committee representative _must_ provide the Chair and Team Contact with all of the following information, in addition to any other information required by the [Call for Participation](#cfp) and charter (including the participation requirements of the [W3C Patent Policy](https://www.w3.org/Consortium/Patent-Policy)):

1.  The name of the W3C Member the individual represents and whether the individual is an employee of that Member organization;
2.  A statement that the individual accepts the participation terms set forth in the charter (with an indication of charter date or version);
3.  A statement that the Member will provide the necessary financial support for participation (e.g., for travel, telephone calls, and conferences).

A Member participates in a Working Group from the moment the first Member representative joins the group until either of the following occurs:

- the group closes, or
- the Member [resigns](#resignation) from the Working Group; this is done through the Member's Advisory Committee representative.

##### 5.2.1.2 Member Representative in an Interest Group

When the participation requirements exceed [Interest Group mailing list subscription](#ig-mail-only), an individual is a Member representative in an Interest Group if all of the following conditions are satisfied:

- the Advisory Committee representative of the Member in question has designated the individual as an Interest Group participant, and
- the individual qualifies for [Member representation](#member-rep).

To designate an individual as a Member representative in an Interest Group, the Advisory Committee representative _must_ follow the instructions in the [Call for Participation](#cfp) and charter.

Member participation in an Interest Group ceases under the same conditions as for a Working Group.

##### 5.2.1.3 Invited Expert in a Working Group

The Chair _may_ invite an individual with a particular expertise to participate in a Working Group. This individual _may_ represent an organization in the group (e.g., if acting as a liaison with another organization).

An individual is an Invited Expert in a Working Group if all of the following conditions are satisfied:

- the Chair has designated the individual as a group participant,
- the Team Contact has agreed with the Chair's choice, and
- the individual has provided the [information required of an Invited Expert](#inv-expert-info) to the Chair and Team Contact.

To designate an individual as an Invited Expert in a Working Group, the Chair _must_ inform the Team Contact and provide rationale for the choice. When the Chair and the Team Contact disagree about a designation, the [Director](#def-Director) determines whether the individual will be invited to participate in the Working Group.

To participate in a Working Group as an Invited Expert, an individual _must_:

- identify the organization, if any, the individual represents as a participant in this group,
- agree to the terms of the [invited expert and collaborators agreement](https://www.w3.org/Consortium/Legal/collaborators-agreement),
- accept the participation terms set forth in the charter, including the participation requirements of [section 3](https://www.w3.org/Consortium/Patent-Policy#sec-Obligations) (see especially 3.4) and [section 6](https://www.w3.org/Consortium/Patent-Policy#sec-Disclosure) (see especially 6.10) of the [W3C Patent Policy](https://www.w3.org/Consortium/Patent-Policy), indicating a specific charter date or version,
- disclose whether the individual is an employee of a W3C Member; see the [conflict of interest policy](#coi),
- provide a statement of who will provide the necessary financial support for the individual's participation (e.g., for travel, telephone calls, and conferences), and
- if the individual's employer (including a self-employed individual) or the organization the individual represents is not a W3C Member, indicate whether that organization intends to join W3C. If the organization does not intend to join W3C, indicate reasons the individual is aware of for this choice.

The Chair _should not_ designate as an Invited Expert in a Working Group an individual who is an employee of a W3C Member. The Chair _must not_ use Invited Expert status to circumvent participation limits imposed by the [charter](#WGCharter).

An Invited Expert participates in a Working Group from the moment the individual joins the group until any of the following occurs:

- the group closes, or
- the Chair or Director withdraws the invitation to participate, or
- the individual [resigns](#resignation).

##### 5.2.1.4 Invited Expert in an Interest Group

When the participation requirements exceed [Interest Group mailing list subscription](#ig-mail-only), the participation requirements for an Invited Expert in an Interest Group are the same as those for an [Invited Expert in a Working Group](#invited-expert-wg).

##### 5.2.1.5 Team Representative in a Working Group

An individual is a Team representative in a Working Group when so designated by W3C management.

A Team representative participates in a Working Group from the moment the individual joins the group until any of the following occurs:

- the group closes, or
- W3C management changes Team representation by sending email to the Chair, copying the group mailing list.

The Team participates in a Working Group from the moment the Director announces the creation of the group until the group closes.

##### 5.2.1.6 Team Representative in an Interest Group

When the participation requirements exceed [Interest Group mailing list subscription](#ig-mail-only), an individual is a Team representative in an Interest Group when so designated by W3C management.

#### 5.2.2 Working Group and Interest Group Charter Development

W3C creates a charter based on interest from the Members and Team. The Team _must_ notify the Advisory Committee when a charter for a new Working Group or Interest Group is in development. This is intended to raise awareness, even if no formal proposal is yet available. Advisory Committee representatives _may_ provide feedback on the [Advisory Committee discussion list](#ACCommunication).

W3C _may_ begin work on a Working Group or Interest Group charter at any time.

#### 5.2.3 Advisory Committee Review of a Working Group or Interest Group Charter

The Director _must_ solicit [Advisory Committee review](#ACReview) of every new or substantively modified Working Group or Interest Group charter. The Director is _not required_ to solicit Advisory Committee review prior to a charter extension or for minor changes. The review period _must_ be at least 28 days.

The Director's Call for Review of a substantively modified charter _must_ highlight important changes (e.g., regarding deliverables or resource allocation) and include rationale for the changes.

As part of the Advisory Committee review of any new or substantively modified Working Group charter, any Advisory Committee representative _may_ request an extended review period.

Such a request must be submitted with a Member’s comments in response to the Call for Review. Upon receipt of any such request, the Director _must_ ensure that the Call for Participation for the Working Group occurs at least 60 days after the Call for Review of the charter.

#### 5.2.4 Call for Participation in a Working Group or Interest Group

After Advisory Committee review of a Working Group or Interest Group charter, the Director _may_ issue a Call for Participation to the Advisory Committee. Charters _may_ be amended based on review comments before the Director issues a Call for Participation.

For a new group, this announcement officially creates the group. The announcement _must_ include a reference to the [charter](#WGCharter), the name(s) of the group's [Chair(s)](#GeneralChairs), and the name(s) of the [Team Contact(s)](#TeamContact).

After a Call for Participation, any [Member representatives](#member-rep) and [Invited Experts](#invited-expert-wg) _must_ be designated (or re-designated).

Advisory Committee representatives _may_ initiate an [Advisory Committee Appeal](#ACAppeal) against a Director's decision to create or substantially modify a Working Group or Interest Group charter.

#### 5.2.5 Working Group and Interest Group Charter Extension

To extend a Working Group or Interest Group charter with no other substantive modifications, the Director announces the extension to the Advisory Committee. The announcement _must_ indicate the new duration. The announcement _must_ also include rationale for the extension, a reference to the [charter](#WGCharter), the name(s) of the group's [Chair(s)](#GeneralChairs), the name of the [Team Contact](#TeamContact), and instructions for joining the group.

After a charter extension, Advisory Committee representatives and the Chair are _not required_ to re-designate [Member representatives](#member-rep) and [Invited Experts](#invited-expert-wg).

Advisory Committee representatives _may_ initiate an [Advisory Committee Appeal](#ACAppeal) against a Director's decision regarding the extension of a Working Group or Interest Group charter.

#### 5.2.6 Working Group and Interest Group Charters

A Working Group or Interest Group charter _must_ include all of the following information.

- The group's mission (e.g., develop a technology or process, review the work of other groups);
- The scope of the group's work and criteria for success;
- The duration of the group (typically from six months to two years);
- The nature of any deliverables (technical reports, reviews of the deliverables of other groups, or software);
- Expected milestone dates where available. **Note**: A charter is _not required_ to include schedules for review of other group's deliverables;
- The process for the group to approve the release of deliverables (including intermediate results);
- Any dependencies by groups within or outside of W3C on the deliverables of this group. For any dependencies, the charter _must_ specify the mechanisms for communication about the deliverables;
- Any dependencies of this group on other groups within or outside of W3C. Such dependencies include interactions with [W3C Horizontal Groups](https://www.w3.org/Guide/Charter.html#horizontal-review);
- The [level of confidentiality](#confidentiality-levels) of the group's proceedings and deliverables;
- Meeting mechanisms and expected frequency;
- If known, the date of the first [face-to-face meeting](#ftf-meeting). The date of the first face-to-face meeting of a proposed group _must not_ be sooner than <span class="time-interval">eight weeks</span> after the date of the proposal.
- Communication mechanisms to be employed within the group, between the group and the rest of W3C, and with the general public;
- Any voting procedures or requirements other than those specified in [Section 3.4](#Votes);
- An estimate of the expected time commitment from participants;
- The expected time commitment and level of involvement by the Team (e.g., to track developments, write and edit technical reports, develop code, or organize pilot experiments).
- Intellectual property information. What are the intellectual property (including patents and copyright) considerations affecting the success of the Group? In particular, is there any reason to believe that it will be difficult to meet the Royalty-Free licensing goals of section 2 of the [W3C Patent Policy](https://www.w3.org/Consortium/Patent-Policy)?

See also the charter requirements of [section 2](https://www.w3.org/Consortium/Patent-Policy#sec-Licensing) and [section 3](https://www.w3.org/Consortium/Patent-Policy#sec-Obligations) of the [W3C Patent Policy](https://www.w3.org/Consortium/Patent-Policy).

For every Recommendation Track deliverable that continues work on a [Working Draft](#RecsWD) (WD) published under any other Charter (including a predecessor group of the same name), for which there is an existing [Reference Draft](#reference-draft) or [Candidate Recommendation](#last-call), the description of that deliverable in the proposed charter of the adopting Working Group _must_ provide the following information:

- The title, stable URL, and publication date of the Working Draft or other Recommendation-track document that will serve as the basis for work on the deliverable (labeled "Adopted Draft");
- The title, stable URL, and publication date of the most recent Reference Draft or [Candidate Recommendation](#last-call) that triggered an Exclusion Opportunity per the Patent Process (labeled "Exclusion Draft"); and
- The stable URL of the Working Group charter under which the Exclusion Draft was published (labeled the “Other Charter”).

All of the above data _must_ be identified in the adopting Working Group’s charter using the labels indicated.

The Reference Draft is the latest Working Draft published within 90 days of the [First Public Working Draft](#first-wd) or if no Working Draft has been published within 90 days of the First Public Working Draft it is that First Public Working Draft. It is the specific draft against which exclusions are made, as per [section 4.1](https://www.w3.org/Consortium/Patent-Policy/#sec-exclusion-with) of the [W3C Patent Policy](https://www.w3.org/Consortium/Patent-Policy).

The [Adopted Draft](#adopted-draft) and the [Exclusion Draft](#exclusion-draft) _must_ each be adopted in their entirety and without any modification. The proposed charter _must_ state that [Exclusion Draft](#exclusion-draft) is deemed to be the Reference Draft or Candidate Recommendation of the Adopted Draft, and the date when the Exclusion Opportunity that arose on publishing the First Public Working Draft or Candidate Recommendation began and ended. As per [section 4.3](https://www.w3.org/Consortium/Patent-Policy/#sec-join) of the [W3C Patent Policy](https://www.w3.org/Consortium/Patent-Policy), this potentially means that exclusions can only be made immediately on joining a Working Group.

An Interest Group charter _may_ include provisions regarding participation, including specifying that the only requirement for participation (by anyone) in the Interest Group is subscription to the Interest Group mailing list. This type of Interest Group _may_ have [public participants](#public-participant-ig).

A charter _may_ include provisions other than those required by this document. The charter _should_ highlight whether additional provisions impose constraints beyond those of the W3C Process Document (e.g., limits on the number of individuals in a Working Group who represent the same Member organization or group of [related Members](#MemberRelated)).

#### 5.2.7 Working Group and Interest Group Closure

A Working Group or Interest Group charter specifies a duration for the group. The Director _may_ decide to close a group prior to the date specified in the charter in any of the following circumstances:

- There are insufficient resources to produce chartered deliverables or to maintain the group, according to priorities established within W3C.
- The group produces chartered deliverables ahead of schedule.

The Director closes a Working Group or Interest Group by announcement to the Advisory Committee. Advisory Committee representatives _may_ initiate an [Advisory Committee Appeal](#ACAppeal).

Closing a Working Group has implications with respect to the [W3C Patent Policy](https://www.w3.org/Consortium/Patent-Policy).

## 6 W3C Technical Report Development Process

The W3C technical report development process is the set of steps and requirements followed by W3C [Working Groups](#GroupsWG) to standardize Web technology. The W3C technical report development process is designed to:

- support multiple specification development methodologies
- maximize [<span class="dfn-instance">consensus</span>](#def-Consensus "Definition of Consensus") about the content of stable technical reports
- ensure high technical and editorial quality
- promote consistency among specifications
- facilitate royalty-free, interoperable implementations of Web Standards, and
- earn endorsement by W3C and the broader community.

See also the licensing goals for W3C Recommendations in [section 2](https://www.w3.org/Consortium/Patent-Policy#sec-Licensing) of the [W3C Patent Policy](https://www.w3.org/Consortium/Patent-Policy).

### 6.1 W3C Technical Reports

Please note that publishing as used in this document refers to producing a version which is listed as a W3C Technical Report on its [Technical Reports page https://www.w3.org/TR](https://www.w3.org/TR/).

This chapter describes the formal requirements for publishing and maintaining a W3C Recommendation or Note.

Typically a series of Working Drafts are published, each of which refines a document under development to complete the scope of work envisioned by a Working Group's charter. For a technical specification, once review suggests the Working Group has met their requirements satisfactorily for a new standard, there is a [Candidate Recommendation](#last-call) phase. This allows the entire W3C membership to provide feedback on whether the specification is appropriate as a W3C Recommendation, while the Working Group formally collects implementation experience to demonstrate that the specification works in practice. The next phase is a Proposed Recommendation, to finalize the review of W3C Members. If the Director determines that W3C Member review supports a specification becoming a standard, W3C publishes it as a Recommendation.

Groups can also publish documents as W3C Notes, typically either to document information other than technical specifications, such as use cases motivating a specification and best practices for its use, or to clarify the status of work that is abandoned.

Some W3C Notes are developed through successive Working Drafts, with an expectation that they will become Notes, while others are simply published. There are few formal requirements to publish a document as a W3C Note, and they have no standing as a recommendation of W3C but are simply documents preserved for historical reference.

Individual Working Groups and Interest Groups _should_ adopt additional processes for developing publications, so long as they do not conflict with the requirements in this chapter.

#### 6.1.1 Recommendations and Notes

W3C follows these steps when advancing a technical report to Recommendation.

1.  Publication of the [First Public Working Draft](#first-wd),
2.  Publication of zero or more revised [Working Drafts](#revised-wd).
3.  Publication of a [Candidate Recommendation](#last-call).
4.  Publication of a [Proposed Recommendation](#rec-pr).
5.  Publication as a [W3C Recommendation](#rec-publication).
6.  Possibly, Publication as an [Edited or Amended Recommendation](#rec-edited)

Basic W3C Recommendation Track

[](#wd-1)

First Public Working Draft (FPWD) - Exclusion opportunity

First Public WD WG decision Director's approval [](#cr-1)

Working Draft (WD)

WD [](#wd-1)

Publish a new Working Draft

WG Decision: review needed, or No change for 6 months [](#cr-1)

Advance to Candidate Recommendation

Director's approval [](#pr-1)

Candidate Recommendation (CR) - Patent Policy exclusion opportunity

CR [](#cr-1)

Publish revised Candidate Recommendation

Working Group Decision, Directors approval [](#pr-1)

Advance to Proposed Recommendation

Director's approval [](#wd-1)

Return to Working Draft

WG or Director decision e.g. for further review [](#rec-1)

Proposed Recommendation (PR) - Advisory Committee review

PR [](#rec-1)

Advance to Recommendation

Advisory Committee Review Director's Decision [](#cr-1)

Return to Candidate Recommendation

AC Review, Director Decision e.g. for minor changes [](#wd-1)

Return to Working Draft

Advisory Committee review and Director's Decision, e.g. for further work and review

Recommendation (Rec)

REC

W3C _may_ [end work on a technical report](#tr-end) at any time.

The Director _may_ decline a request to advance in maturity level, requiring a Working Group to conduct further work, and _may_ require the specification to return to a lower [maturity level](#maturity-levels). The Director _must_ inform the [Advisory Committee](#AC) and Working Group Chairs when a Working Group's request for a specification to advance in maturity level is declined and the specification is returned to a Working Group for further work.

#### 6.1.2 Maturity Levels

Working Draft (WD)  
A Working Draft is a document that W3C has published for review by the community, including W3C Members, the public, and other technical organizations. Some, but not all, Working Drafts are meant to advance to Recommendation; see the [document status section](#DocumentStatus) of a Working Draft for the group's expectations. Any Working Draft not, or no longer, intended to advance to Recommendation _should_ be published as a Working Group Note. Working Drafts do not necessarily represent a consensus of the Working Group, and do not imply any endorsement by W3C or its members beyond agreement to work on a general area of technology.

Candidate Recommendation (CR)  
A Candidate Recommendation is a document that satisfies the technical requirements of the Working Group that produced it and their dependencies, or makes substantive corrections to a Recommendation that is not maintained by a Working Group, and has already received wide review. W3C publishes a Candidate Recommendation to

- signal to the wider community that it is time to do a final review
- gather [implementation experience](#implementation-experience)
- begin formal review by the Advisory Committee, who _may_ recommend that the document be published as a W3C Recommendation, returned to the Working Group for further work, or abandoned.
- Provide an exclusion opportunity per the [W3C Patent Policy](https://www.w3.org/Consortium/Patent-Policy). **Note**: A Candidate Recommendation under this process corresponds to the "Last Call Working Draft" discussed in the Patent Policy.

**Note**: Candidate Recommendations are expected to be acceptable as Recommendations. Announcement of a different next step _should_ include the reasons why the change in expectations comes at so late a stage.

Proposed Recommendation  
A Proposed Recommendation is a document that has been accepted by the W3C Director as of sufficient quality to become a W3C Recommendation. This phase establishes a deadline for the Advisory Committee review that begins with Candidate Recommendation. Substantive changes _must not_ be made to a Proposed Recommendation except by publishing a new Working Draft or Candidate Recommendation.

W3C Recommendation (REC)  
A W3C Recommendation is a specification or set of guidelines or requirements that, after extensive consensus-building, has received the endorsement of W3C Members and the Director. W3C recommends the wide deployment of its Recommendations as standards for the Web. The W3C Royalty-Free IPR licenses granted under the [W3C Patent Policy](https://www.w3.org/Consortium/Patent-Policy) apply to W3C Recommendations. As technology evolves, a W3C Recommendation may become:

An Edited Recommendation  
A Working Group may make [editorial](#editorial-change) or other minor changes to a Recommendation, and produce a new version which W3C publishes as a [revised edition](#revised-rec) of the Recommendation.

An Amended Recommendation  
An Amended Recommendation is a Recommendation that is amended to include [substantive changes that do not add new features](#correction-classes), and is produced by the W3C at a time when the Recommendation does not fit within the charter of any active Working Group. The W3C team guides it through the process.

Obsolete or Superseded Recommendation  
An Obsolete Recommendation is a specification that the W3C has determined lacks sufficient market relevance to continue recommending it for implementation, but which does not have fundamental problems that would require it to be Rescinded. If an Obsolete specification gains sufficient market relevance, the W3C may decide to restore it to Recommendation status.

A Superseded Recommendation is a specification that has been replaced by a newer version that the W3C recommends for new adoption. An Obsolete or Superseded specification has the same status as a W3C Recommendation with regards to W3C Royalty-Free IPR Licenses granted under the Patent Policy.

Rescinded Recommendation  
A Rescinded Recommendation is an entire Recommendation that W3C no longer endorses, and believes is unlikely to ever be restored to Recommendation Status. See also clause 10 of the licensing requirements for W3C Recommendations in [section 5](https://www.w3.org/Consortium/Patent-Policy#sec-Requirements) of the [W3C Patent Policy](https://www.w3.org/Consortium/Patent-Policy).

Working Group Note, Interest Group Note (NOTE)  
A Working Group Note or Interest Group Note is published by a chartered Working Group or Interest Group to provide a stable reference for a useful document that is not intended to be a formal standard, or to document work that was abandoned without producing a Recommendation.

Working Groups and Interest Groups _may_ make available "Editor's drafts". Editor's drafts have no official standing whatsoever, and do not necessarily imply consensus of a Working Group or Interest Group, nor are their contents endorsed in any way by W3C.

### 6.2 General requirements and definitions

#### 6.2.1 General requirements for Technical Reports

Every document published as part of the technical report development process _must_ be a public document. The [index of W3C technical reports](https://www.w3.org/TR/) is available at the W3C Web site. W3C strives to make archival documents indefinitely available at their original address in their original form.

Every document published as part of the technical report development process _must_ clearly indicate its [maturity level](#maturity-levels), and _must_ include information about the status of the document. This status information

- _must_ be unique each time a specification is published,
- _must_ state which Working Group developed the specification,
- _must_ state how to send comments or file bugs, and where these are recorded,
- _must_ include expectations about next steps,
- _should_ explain how the technology relates to existing international standards and related work inside or outside W3C, and
- _should_ explain or link to an explanation of significant changes from the previous version.

Every Technical Report published as part of the Technical Report development process is edited by one or more editors appointed by a Group Chair. It is the responsibility of these editors to ensure that the decisions of the Group are correctly reflected in subsequent drafts of the technical report. An editor _must_ be a participant, per [section 5.2.1](#group-participation) in the Group responsible for the document(s) they are editing.

The Team is _not required_ to publish a Technical Report that does not conform to the Team's [Publication Rules](https://www.w3.org/pubrules/)(e.g., for <span id="DocumentName">naming</span>, status information, style, and <span id="document-copyright">copyright requirements</span>). These rules are subject to change by the Team from time to time. The Team _must_ inform group Chairs and the Advisory Committee of any changes to these rules.

The primary language for W3C Technical Reports is English. W3C encourages the translation of its Technical Reports. [Information about translations of W3C technical reports](https://www.w3.org/Consortium/Translation/) is available at the W3C Web site.

#### 6.2.2 Advancement on the Recommendation Track

For _all_ Transition Requests, to advance a specification to a new maturity level other than Note, the Working Group:

- _must_ record the group's decision to request advancement.
- _must_ obtain Director approval.
- _must_ provide public documentation of all [substantive changes](#substantive-change) to the technical report since the previous publication.
- _must_ [formally address](#formal-address) all issues raised about the document since the previous maturity level.
- _must_ provide public documentation of any [Formal Objections](#FormalObjection).
- _should_ provide public documentation of changes that are not substantive.
- _should_ report which, if any, of the Working Group's requirements for this document have changed since the previous step.
- _should_ report any changes in dependencies with other groups.
- _should_ provide information about implementations known to the Working Group.

For a First Public Working Draft there is no "previous maturity level", so many requirements do not apply, and approval is normally fairly automatic. For later stages, especially transition to Candidate or Proposed Recommendation, there is usually a formal review meeting to ensure the requirements have been met before Director's approval is given.

Transition Requests to First Public Working Draft or [Candidate Recommendation](#last-call) will not normally be approved while a Working Group's charter is undergoing or awaiting a Director's decision on an Advisory Committee Review.

#### 6.2.3 Reviews and Review Responsibilities

A document is available for review from the moment it is first published. Working Groups _should_ [formally address](#formal-address) _any_ substantive review comment about a technical report in a timely manner.

Reviewers _should_ send substantive technical reviews as early as possible. Working Groups are often reluctant to make [substantive changes](#substantive-change) to a mature document, particularly if this would cause significant compatibility problems due to existing implementation. Working Groups _should_ record substantive or interesting proposals raised by reviews but not incorporated into a current specification.

##### 6.2.3.1 Wide Review

The requirements for wide review are not precisely defined by the W3C Process. The objective is to ensure that the entire set of stakeholders of the Web community, including the general public, have had adequate notice of the progress of the Working Group (for example through notices posted to <public-review-announce@w3.org>) and were able to actually perform reviews of and provide comments on the specification. A second objective is to encourage groups to request reviews early enough that comments and suggested changes can still be reasonably incorporated in response to the review. Before approving transitions, the Director will consider who has been explicitly offered a reasonable opportunity to review the document, who has provided comments, the record of requests to and responses from reviewers, especially [W3C Horizontal Groups](https://www.w3.org/Guide/Charter.html#horizontal-review) and groups identified as dependencies in the charter or identified as [liaisons](https://www.w3.org/2001/11/StdLiaison.html), and seek evidence of clear communication to the general public about appropriate times and which content to review and whether such reviews actually occurred.

For example, inviting review of new or significantly revised sections published in Working Drafts, and tracking those comments and the Working Group's responses, is generally a good practice which would often be considered positive evidence of wide review. Working Groups _should_ announce to other W3C Working Groups as well as the general public, especially those affected by this specification, a proposal to enter [Candidate Recommendation](#last-call) (for example in approximately 28 days). By contrast a generic statement in a document requesting review at any time is likely not to be considered as sufficient evidence that the group has solicited wide review.

A Working Group could present evidence that wide review has been received, irrespective of solicitation. But it is important to note that receiving many detailed reviews is not necessarily the same as wide review, since they might only represent comment from a small segment of the relevant stakeholder community.

#### 6.2.4 Implementation Experience

Implementation experience is required to show that a specification is sufficiently clear, complete, and relevant to market needs, to ensure that independent interoperable implementations of each feature of the specification will be realized. While no exhaustive list of requirements is provided here, when assessing that there is adequate implementation experience the Director will consider (though not be limited to):

- is each feature of the current specification implemented, and how is this demonstrated?
- are there independent interoperable implementations of the current specification?
- are there implementations created by people other than the authors of the specification?
- are implementations publicly deployed?
- is there implementation experience at all levels of the specification's ecosystem (authoring, consuming, publishing…)?
- are there reports of difficulties or problems with implementation?

Planning and accomplishing a demonstration of (interoperable) implementations can be very time consuming. Groups are often able to work more effectively if they plan how they will demonstrate interoperable implementations early in the development process; for example, developing tests in concert with implementation efforts.

#### 6.2.5 Classes of Changes

This document distinguishes the following 4 classes of changes to a specification. The first two classes of change are considered editorial changes, the latter two substantive changes.

1. No changes to text content  
   These changes include fixing broken links, style sheets or invalid markup.

2. Corrections that do not affect conformance  
   Changes that reasonable implementers would not interpret as changing architectural or interoperability requirements or their implementation. Changes which resolve ambiguities in the specification are considered to change (by clarification) the implementation requirements and do not fall into this class.

Examples of changes in this class include correcting non-normative code examples where the code clearly conflicts with normative requirements, clarifying informative use cases or other non-normative text, fixing typos or grammatical errors where the change does not change implementation requirements. If there is any doubt or dissent as to whether requirements are changed, such changes do not fall into this class.

3. Corrections that do not add new features  
   These changes _may_ affect conformance to the specification. A change that affects conformance is one that:

- makes conforming data, processors, or other conforming agents become non-conforming according to the new version, or
- makes non-conforming data, processors, or other agents become conforming, or
- clears up an ambiguity or under-specified part of the specification in such a way that data, a processor, or an agent whose conformance was once unclear becomes clearly either conforming or non-conforming.

4. New features  
   Changes that add a new functionality, element, etc.

### 6.3 Working Draft

A Working Draft is published on the [W3C's Technical Reports page](https://www.w3.org/TR/) for review, and for simple historical reference. For all Working Drafts a Working Group:

- _should_ document outstanding issues, and parts of the document on which the Working Group does not have consensus, and
- _may_ request publication of a Working Draft even if its content is considered unstable and does not meet all Working Group requirements.

#### 6.3.1 First Public Working Draft

To publish the First Public Working Draft of a document, a Working Group _must_ meet the applicable [general requirements for advancement](#transition-reqs).

The Director _must_ announce the publication of a First Public Working Draft publication to other W3C groups and to the public.

Publishing the First Public Working Draft triggers a Call for Exclusions, per [section 4](https://www.w3.org/Consortium/Patent-Policy/#sec-Exclusion) of the [W3C Patent Policy](https://www.w3.org/Consortium/Patent-Policy).

#### 6.3.2 Revising Working Drafts

A Working Group _should_ publish a Working Draft to the W3C Technical Reports page when there have been significant changes to the previous published document that would benefit from review beyond the Working Group.

If 6 months elapse without significant changes to a specification a Working Group _should_ publish a revised Working Draft, whose status section _should_ indicate reasons for the lack of change.

To publish a revision of a Working draft, a Working Group:

- _must_ record the group's decision to request publication. Consensus is not required, as this is a procedural step,
- _must_ provide public documentation of [substantive changes](#substantive-change) to the technical report since the previous Working Draft,
- _should_ provide public documentation of significant [editorial changes](#editorial-change) to the technical report since the previous step,
- _should_ report which, if any, of the Working Group's requirements for this document have changed since the previous step,
- _should_ report any changes in dependencies with other groups,

Possible next steps for any Working Draft:

- Revised [Working Draft](#revised-wd)
- [Candidate Recommendation](#last-call)
- [Working Group Note](#Note)

#### 6.3.3 Stopping Work on a specification

Work on a technical report _may_ cease at any time. Work _should_ cease if W3C or a Working Group determines that it cannot productively carry the work any further. If the Director [closes a Working Group](#GeneralTermination) W3C _must_ publish any unfinished specifications on the Recommendation track as [Working Group Notes](#Note). If a Working group decides, or the Director requires, the Working Group to discontinue work on a technical report before completion, the Working Group _should_ publish the document as a [Working Group Note](#Note).

### <span id="last-call">6.4 Candidate Recommendation</span>

To publish a Candidate Recommendation, in addition to meeting the [general requirements for advancement](#transition-reqs) a Working Group, or in the case of a candidate [Amended Recommendation](#rec-amended) (a document intended to become an [Amended Recommendation](#rec-amended)), the W3C:

- _must_ show that the specification has met all Working Group requirements, or explain why the requirements have changed or been deferred,
- _must_ document changes to dependencies during the development of the specification,
- _must_ document how adequate [implementation experience](#implementation-experience) will be demonstrated,
- _must_ specify the deadline for comments, which _must_ be **at least** 28 days after publication, and _should_ be longer for complex documents,
- _must_ show that the specification has received [wide review](#wide-review), and
- _may_ identify features in the document as "at risk". These features _may_ be removed before advancement to Proposed Recommendation without a requirement to publish a new Candidate Recommendation.

The Director _must_ announce the publication of a Candidate Recommendation to other W3C groups and to the public.

A Candidate Recommendation corresponds to a "Last Call Working Draft" as used in the [W3C Patent Policy](https://www.w3.org/Consortium/Patent-Policy). Publishing a Candidate Recommendation triggers a Call for Exclusions, per [section 4](https://www.w3.org/Consortium/Patent-Policy/#sec-Exclusion) of the [W3C Patent Policy](https://www.w3.org/Consortium/Patent-Policy), except if the document is a candidate [Amended Recommendation](#rec-amended) or contains only editorial changes.

Possible next steps:

- Return to [Working Draft](#revised-wd)
- A revised [Candidate Recommendation](#last-call)
- [Proposed Recommendation](#rec-pr) (The expected next step)
- [Working Group Note](#Note)

[Advisory Committee](#AC) representatives _may_ initiate an [Advisory Committee Appeal](#ACAppeal) of the decision to advance the technical report.

#### 6.4.1 Revising a Candidate Recommendation

If there are any [substantive changes](#substantive-change) made to a Candidate Recommendation other than to remove features explicitly identified as "at risk", the Working Group _must_ obtain the Director's approval to publish a revision of a Candidate Recommendation. [Substantive changes](#substantive-change) can require a new Exclusion Opportunity per [section 4](https://www.w3.org/Consortium/Patent-Policy/#sec-Exclusion) of the [W3C Patent Policy](https://www.w3.org/Consortium/Patent-Policy). Note that approval is _expected_ to be fairly simple compared to getting approval for a transition from Working Draft to Candidate Recommendation.

In addition the Working Group:

- _must_ show that the revised specification meets all Working Group requirements, or explain why the requirements have changed or been deferred,
- _must_ specify the deadline for further comments, which _must_ be **at least** 28 days after publication, and _should_ be longer for complex documents,
- _must_ document the changes since the previous Candidate Recommendation,
- _must_ show that the proposed changes have received [wide review](#wide-review), and
- _may_ identify features in the document as "at risk". These features _may_ be removed before advancement to Proposed Recommendation without a requirement to publish a new Candidate Recommendation.

The Director _must_ announce the publication of a revised Candidate Recommendation to other W3C groups and the Public.

### 6.5 Proposed Recommendation

In addition to meeting the [general requirements for advancement](#transition-reqs),

- The status information _must_ specify the deadline for Advisory Committee review, which _must_ be **at least** 28 days after the publication of the Proposed Recommendation and _should_ be at least 10 days after the end of the last Exclusion Opportunity per [section 4](https://www.w3.org/Consortium/Patent-Policy/#sec-Exclusion) of the [W3C Patent Policy](https://www.w3.org/Consortium/Patent-Policy).

A Working Group, or for a proposed [Amended Recommendation](#rec-amended), the W3C:

- _must_ show adequate [implementation experience](#implementation-experience) except where an exception is approved by the Director,
- _must_ show that the document has received [wide review,](#wide-review)
- _must_ show that all issues raised during the Candidate Recommendation review period other than by Advisory Committee representatives acting in their formal AC representative role have been [formally addressed](#formal-address),
- _must_ identify any substantive issues raised since the close of the Candidate Recommendation review period by parties other than Advisory Committee representatives acting in their formal AC representative role,
- _may_ have removed features identified in the Candidate Recommendation document as "at risk" without republishing the specification as a Candidate Recommendation.

The Director:

- _must_ announce the publication of a Proposed Recommendation to the [Advisory Committee](#AC), and _must_ begin an Advisory Committee Review on the question of whether the - specification is appropriate to publish as a W3C Recommendation.
- _may_ approve a Proposed Recommendation with minimal implementation experience where there is a compelling reason to do so. In such a case, the Director _should_ explain the reasons for that decision.

Since a W3C Recommendation _must not_ include any substantive changes from the Proposed Recommendation it is based on, to make any substantive change to a Proposed Recommendation the Working Group _must_ return the specification to [Candidate Recommendation](#last-call) or Working Draft.

Possible Next Steps:

- Return to [Working Draft](#revised-wd)
- Return to [Candidate Recommendation](#last-call)
- [Recommendation status](#rec-publication), including Edited or Amended Recommendation (The expected next step).
- [Working Group Note](#Note)

[Advisory Committee](#AC) representatives _may_ initiate an [Advisory Committee Appeal](#ACAppeal) of the decision to advance the technical report.

### 6.6 W3C Recommendation

The decision to advance a document to Recommendation is a [W3C Decision](#def-w3c-decision).

In addition to meeting the [general requirements for advancement](#transition-reqs),

- A Recommendation _must_ identify where errata are tracked, and
- A Recommendation _must not_ include any substantive changes from the Proposed Recommendation on which it is based.
- If there was any [<span class="dfn-instance">dissent</span>](#def-Dissent "Definition of Dissent") in Advisory Committee reviews, the Director _must_ publish the substantive content of the dissent to W3C and the general public, and _must_ [formally address](#formal-address) the comment at least 14 days before publication as a W3C Recommendation.
- [Advisory Committee](#AC) representatives _may_ initiate an [Advisory Committee Appeal](#ACAppeal) of the W3C decision
- The Director _must_ announce the publication of a W3C Recommendation to [Advisory Committee](#AC), other W3C groups and to the public.

Possible next steps:

A W3C Recommendation normally retains its status indefinitely. However it _may_ be:

- republished as an [Edited or Amended Recommendation](#rec-modify), or
- republished as a [Candidate Recommendation](#last-call) to be developed as an Edited or Amended Recommendation, or
- declared [superseded or obsolete](#rec-rescind), or
- [rescinded](#rec-rescind).

### 6.7 Modifying a W3C Recommendation

This section details the management of errors in, and the process for making changes to a Recommendation. Please see also the [Requirements for modification of W3C Technical Reports](https://www.w3.org/2003/01/republishing/).

Basic W3C Recommendation Track

[](#wd-2)

First Public Working Draft (FPWD) - Exclusion opportunity

First Public WD WG decision Director's approval [](#cr-2)

Working Draft (WD)

WD [](#wd-2)

Publish a new Working Draft

WG Decision: review needed, or No change for 6 months [](#cr-2)

Advance to Candidate Recommendation

Director's approval [](#pr-2)

Candidate Recommendation (CR) - Patent Policy exclusion opportunity

CR [](#cr-2)

Publish revised Candidate Recommendation

Working Group Decision, Directors approval [](#pr-2)

Advance to Proposed Recommendation

Director's approval [](#wd-2)

Return to Working Draft

WG or Director decision e.g. for further review [](#rec-2)

Proposed Recommendation (PR) - Advisory Committee review

PR [](#rec-2)

Advance to Recommendation

Advisory Committee Review Director's Decision [](#cr-2)

Return to Candidate Recommendation

AC Review, Director Decision e.g. for minor changes [](#wd-2)

Return to Working Draft

Advisory Committee review and Director's Decision, e.g. for further work and review

Recommendation (Rec)

REC

Are there substantive changes?

Substantive changes? [](#rec-2)

No substantive changes: edit the Recommendation

No Director's approval

Substantive changes: are there new features?

Yes New features? [](#cr-2)

No new features: return to CR

No Director's approval [](#fpwd-2)

New features: return to FPWD

Yes

#### 6.7.1 Errata Management

Tracking errors is an important part of a Working Group's ongoing care of a Recommendation; for this reason, the scope of a Working Group charter generally allows time for work after publication of a Recommendation. In this Process Document, the term "erratum" (plural "errata") refers to any error that can be resolved by one or more changes in classes 1-3 of section [6.2.5 Classes of Changes](#correction-classes).

Working Groups _must_ keep a record as errors are reported by readers and implementers. Such error reports _should_ be processed no less frequently than quarterly. Readers of the Recommendation _should_ be able easily to find and see the errata that apply to that specific Recommendation with their associated tests.

Working Groups decide how to document errata. The best practice is a document that identifies itself as based on the Recommendation text and clearly identifies the errata and any proposed corrections; other approaches include various forms of an errata page, possibly auto-generated from a database.

An erratum is resolved by an informative, "proposed" correction generated by the Working Group. A correction becomes part of the Recommendation by the process for Revising a Recommendation described in the next section.

#### 6.7.2 Revising a Recommendation

A Working group _may_ request republication of a Recommendation, or if there is no Working Group chartered to maintain a Recommendation W3C _may_ republish the Recommendation, to make corrections that do not result in any changes to the text of the specification.

[Editorial changes](#editorial-change) to a Recommendation require no technical review of the proposed changes. A Working Group, provided there are no votes against the resolution to publish _may_ request publication of a [Recommendation](#rec-publication) or W3C _may_ publish a [Recommendation](#rec-publication) to make this class of change without passing through earlier maturity levels. Such publications are called Edited Recommendations.

To make corrections to a Recommendation that produce [substantive changes](#substantive-change) but do not add new features, or where there were votes against publishing the corrections directly as a [Recommendation](#rec-pr), a Working Group _may_ request publication of a [Candidate Recommendation](#last-call), or if no Working Group is chartered to maintain a Recommendation W3C _may_ publish a [candidate Amended Recommendation](#last-call), without passing through earlier maturity levels.

If the publication was requested by a Working Group, the resulting Recommendation is called an Edited Recommendation. If the publication was requested by the W3C team in the absence of a Working Group, the resulting Recommendation is called an [Amended Recommendation](#rec-amended).

When requesting the publication of an Edited or Amended Recommendation as described in this section, in addition to meeting the requirements for the relevant maturity level, a Working Group or W3C

- _must_ show that the changes to the document have received [wide review](#wide-review), and
- _should_ address all recorded errata.

To make changes which introduce a new feature or features, W3C _must_ follow the full process of [advancing a technical report to Recommendation](#rec-advance) beginning with a new First Public Working Draft.

### 6.8 Publishing a Working Group or Interest Group Note

Working Groups and Interest Groups _may_ publish work as W3C Notes. Examples include:

- supporting documentation for a specification, such as explanations of design principles or use cases and requirements,
- non-normative guides to good practices,
- specifications where work has been stopped and there is no longer consensus for making them a new standard.

In order to publish a Note, a Working Group or Interest Group:

- _may_ publish a Note with or without its prior publication as a Working Draft.
- _must_ record the group's decision to request publication as a Note, and
- _should_ publish documentation of significant changes to the technical report since any previous publication.

Possible next steps:

- End state: A technical report _may_ remain a Working or Interest Group Note indefinitely
- A Working Group _may_ resume work on a technical report within the scope of its charter at any time, at the maturity level the specification had before publication as a Note

The [W3C Patent Policy](https://www.w3.org/Consortium/Patent-Policy) does not specify any licensing requirements or commitments for Working Group Notes.

### 6.9 Declaring a W3C Recommendation Rescinded, Obsolete or Superseded

It is possible that W3C decides that implementing a particular Recommendation is no longer recommended. There are three designations for such specifications, chosen depending on the advice W3C wishes to give about further use of the specification.

W3C _may_ obsolete a Recommendation, for example if the W3C Community decides that the Recommendation no longer represents best practices, or is not adopted and is not apparently likely to be adopted. An Obsolete Recommendation _may_ be restored to normal Recommendation, for example because despite marking it Obsolete the specification is later more broadly adopted.

W3C _may_ declare a Recommendation Superseded if a newer version exists which the W3C recommends for new adoption. The process for declaring a Recommendation Superseded is the same as for declaring it Obsolete, below; only the name and explanation change.

W3C _may_ rescind a Recommendation if W3C believes there is no reasonable prospect of it being restored for example due to burdensome patent claims that affect implementers and cannot be resolved; see the [W3C Patent Policy](https://www.w3.org/Consortium/Patent-Policy) and in particular [section 5](https://www.w3.org/Consortium/Patent-Policy#sec-Requirements) (bullet 10) and [section 7.5](https://www.w3.org/Consortium/Patent-Policy#sec-PAG-conclude).

W3C only rescinds, supersedes, or obsoletes entire Recommendations. To rescind, supersede, or obsolete some part of a Recommendation, W3C follows the process for [modifying a Recommendation](#rec-modify).

For the purposes of the [W3C Patent Policy](https://www.w3.org/Consortium/Patent-Policy) \[[PUB33](#ref-patentpolicy)\] an Obsolete or Superseded Recommendation has the status of an active Recommendation, although it is not recommended for future implementation; a Rescinded Recommendation ceases to be in effect and no new licenses are granted under the Patent Policy.

The Director _may_ recommend obsoleting, rescinding, or restoring a Recommendation. The Director _must_ begin an [Advisory Committee review](#ACReview) of a proposal to obsolete, rescind, or restore a Recommendation when requested to do so by any of the following:

- The Working Group who produced, or is chartered to maintain, the Recommendation.
- The TAG, if there is no such Working Group
- Any individual who made a request to the relevant Working Group as described above, or the TAG if such a group does not exist, to obsolete, rescind, or restore a Recommendation, where the request was not answered within 90 days
- 5% of the members of the Advisory Committee

For any [Advisory Committee review](#ACReview) of a proposal to obsolete, rescind, or restore a Recommendation the Director _must_:

- announce the proposal to all Working Group Chairs, and to the Public, as well as to the Advisory Committee
- indicate that this is a proposal to Rescind, Obsolete, or restore, a Recommendation as appropriate
- identify the Recommendation by URL
- publish a rationale for the proposal
- identify known dependencies and solicit review from all dependent Working Groups
- solicit public review
- specify the deadline for review comments, which _must_ be at least 28 days after the Director's announcement

and _should_

- identify known implementations.

If there was any [<span class="dfn-instance">dissent</span>](#def-Dissent) in the Advisory Committee review, the Director _must_ publish the substantive content of the dissent to W3C **and the public**, and _must_ [formally address](#formal-address) the dissent at least 14 days before publication as an Obsolete or Rescinded Recommendation.

The [Advisory Committee](#AC) _may_ initiate an [Advisory Committee Appeal](#ACAppeal) of the Director's decision.

W3C _must_ publish an Obsolete or Rescinded Recommendation with up to date status. The updated version _may_ remove the main body of the document. The Status of this Document section _should_ link to the explanation of [Obsoleting and Rescinding W3C Specifications](https://www.w3.org/2016/11/obsoleting-rescinding/) as appropriate.

Once W3C has published a Rescinded Recommendation, future W3C technical reports _must not_ include normative references to that technical report.

<span style="font-weight: bold;">Note:</span> W3C strives to ensure that all Technical Reports will continue to be available at their version-specific URL.

### 6.10 Further reading

Refer to ["How to Organize a Recommendation Track Transition"](https://www.w3.org/Guide/transitions) in the [Member guide](https://www.w3.org/Guide/) for practical information about preparing for the reviews and announcements of the various steps, and [tips on getting to Recommendation faster](https://www.w3.org/2002/05/rec-tips).

## 7 Advisory Committee Reviews, Appeals, and Votes

This section describes how the Advisory Committee reviews proposals from the Director and how Advisory Committee representatives initiate an Advisory Committee Appeal of a W3C decision or Director's decision. A W3C decision is one where the Director (or the Director's delegate) has exercised the role of assessing consensus after an [Advisory Committee review](#ACReview).

### 7.1 Advisory Committee Reviews

The Advisory Committee reviews:

- [new and modified Working and Interest Groups](#CharterReview),
- [Proposed Recommendations](#cfr), [Proposals to Obsolete, Rescind, Supersede, or Restore Recommendations](#proposed-rescinded-rec), and
- [Proposed changes to the W3C process](#GAProcess).

#### 7.1.1 Start of a Review Period

Each Advisory Committee review period begins with a Call for Review from the Team to the Advisory Committee. The Call for Review describes the proposal, raises attention to deadlines, estimates when the decision will be available, and includes other practical information. Each Member organization _may_ send one review, which _must_ be returned by its Advisory Committee representative.

The Team _must_ provide two channels for Advisory Committee review comments:

1.  an archived [Team-only](#Team-only) channel;
2.  an archived [Member-only](#Member-only) channel.

The Call for Review _must_ specify which channel is the default for review comments on that Call.

Reviewers _may_ send information to either or both channels. They _may_ also share their reviews with other Members on the [Advisory Committee discussion list](#ACCommunication).

A Member organization _may_ modify its review during a review period (e.g., in light of comments from other Members).

#### 7.1.2 After the Review Period

After the review period, the Director _must_ announce to the Advisory Committee the level of support for the proposal ([consensus](#def-Consensus) or [dissent](#def-Dissent)). The Director _must_ also indicate whether there were any Formal Objections, with attention to [changing confidentiality level](#confidentiality-change). This [W3C decision](#def-w3c-decision) is generally one of the following:

1.  The proposal is approved, possibly with minor changes integrated.
2.  The proposal is approved, possibly with [substantive changes](#substantive-change) integrated. In this case the Director's announcement _must_ include rationale for the decision to advance the document despite the proposal for a substantive change.
3.  The proposal is returned for additional work, with a request to the initiator to [formally address](#formal-address) certain issues.
4.  The proposal is rejected.

This document does not specify time intervals between the end of an Advisory Committee review period and the [W3C decision](#def-w3c-decision). This is to ensure that the Members and Team have sufficient time to consider comments gathered during the review. The Advisory Committee _should not_ expect an announcement sooner than <span class="time-interval">two weeks</span> after the end of a Proposed Recommendation review period. If, after <span class="time-interval">three weeks</span>, the Director has not announced the outcome, the Director _should_ provide the Advisory Committee with an update.

### 7.2 Appeal by Advisory Committee Representatives

Advisory Committee representatives _may_ appeal certain decisions, though appeals are only expected to occur in extraordinary circumstances.

When a W3C decision is made following an [Advisory Committee review](#ACReview), Advisory Committee representatives _may_ initiate an [Advisory Committee Appeal](#def-w3c-decision). These W3C decisions include those related to group creation and modification, and transitions to new maturity levels for Recommendation Track documents and the Process document.

Advisory Committee representatives _may_ also initiate an appeal for certain Director's decisions that do not involve an Advisory Committee review. These cases are identified in the sections which describe the requirements for the Director's decision and include additional (non-reviewed) maturity levels of Recommendation Track documents, group charter extensions and closures, and Memoranda of Understanding.

In all cases, an appeal _must_ be initiated within <span class="time-interval">three weeks</span> of the decision.

An Advisory Committee representative initiates an appeal by sending a request to the Team. The request should say "I appeal this Director's Decision" and identify the decision. Within one week the Team _must_ announce the appeal process to the Advisory Committee and provide a mechanism for Advisory Committee representatives to respond with a statement of positive support for this appeal. The archive of these statements _must_ be Member-visible. If, within <span class="time-interval">one week</span> of the Team's announcement, 5% or more of the Advisory Committee support the appeal request, the Team _must_ organize an appeal vote asking the Advisory Committee "Do you approve of the Director's Decision?" together with links to the Director's decision and the appeal support. The ballot _must_ allows for three possible responses: "Approve", "Reject", and "Abstain", together with Comments.

If the number of votes to reject exceeds the number of votes to approve, the decision is overturned. In that case, there are the following possible next steps:

1.  The proposal is rejected.
2.  The proposal is returned for additional work, after which the applicable decision process is re-initiated.

### 7.3 Advisory Committee Votes

The Advisory Committee votes in [elections for seats on the TAG or Advisory Board](#AB-TAG-elections), and in the event of an [Advisory Committee Appeal](#def-w3c-decision) achieving the required support to trigger an appeal vote.. Whenever the Advisory Committee votes, each Member or group of [related Members](#MemberRelated) has one vote. In the case of [Advisory Board and TAG elections](#AB-TAG-elections), "one vote" means "one vote per available seat".

## 8 Workshops and Symposia

The Team organizes Workshops and Symposia to promote early involvement in the development of W3C activities from Members and the public.

The goal of a Workshop is usually either to convene experts and other interested parties for an exchange of ideas about a technology or policy, or to address the pressing concerns of W3C Members. Organizers of the first type of Workshop _may_ solicit position papers for the Workshop program and _may_ use those papers to choose attendees and/or presenters.

The goal of a Symposium is usually to educate interested parties about a particular subject.

The Call for Participation in a Workshop or Symposium _may_ indicate participation requirements or limits, and expected deliverables (e.g., reports and minutes). Organization of an event does not guarantee further investment by W3C in a particular topic, but _may_ lead to proposals for new activities or groups.

Workshops and Symposia generally last one to three days. If a Workshop is being organized to address the pressing concerns of Members, the Team _must_ issue the Call for Participation no later than <span class="time-interval">six weeks</span> prior to the Workshop's scheduled start date. For other Workshops and Symposia, the Team _must_ issue a Call for Participation no later than <span class="time-interval">eight weeks</span> prior to the meeting's scheduled start date. This helps ensure that speakers and authors have adequate time to prepare position papers and talks.

## 9 Liaisons

W3C uses the term "liaison" to refer to coordination of activities with a variety of organizations, through a number of mechanisms ranging from very informal (e.g., an individual from another organization participates in a W3C Working Group, or just follows its work) to mutual membership, to even more formal agreements. Liaisons are not meant to substitute for W3C membership.

All liaisons _must_ be coordinated by the Team due to requirements for public communication; patent, copyright, and other IPR policies; confidentiality agreements; and mutual membership agreements.

The W3C Director _may_ negotiate a Memorandum of Understanding with another organization. For the purposes of the W3C Process a Memorandum of Understanding (MoU) is a formal agreement or similar contractual framework between W3C and another party or parties, other than agreements between the Hosts or between Hosts and W3C members for the purposes of membership and agreements related to the ordinary provision of services for the purposes of running W3C, that specifies rights and obligations of each party toward the others. These rights and obligations _may_ include joint deliverables, an agreed share of technical responsibilities with due coordination, and/or considerations for confidentiality and specific IPR. The agreement may be called something other than a "Memorandum of Understanding", and something called a "Memorandum of Understanding" may not be an MoU for the purposes of the Process.

Before signing the MoU, the Team _must_ inform the Advisory Committee of the intent to sign and make the MoU available for Advisory Committee review; Advisory Committee representatives _may_ initiate an [Advisory Committee Appeal](#ACAppeal) of the decision to sign the MoU. Unless an appeal rejects the proposal to sign an MoU, the Director may sign the MoU on behalf of W3C. A signed Memorandum of Understanding _should_ be made public.

Information about [W3C liaisons with other organizations](https://www.w3.org/2001/11/StdLiaison) and the guidelines W3C follows when creating a liaison is available on the Web.

## 10 Member Submission Process

The Member Submission process allows Members to propose technology or other ideas for consideration by the Team. After review, the Team _may_ publish the material at the W3C Web site. The formal process affords Members a record of their contribution and gives them a mechanism for disclosing the details of the transaction with the Team (including IPR claims). The Team also publishes review comments on the Submitted materials for W3C Members, the public, and the media.

A Member Submission consists of:

- One or more documents developed outside of the W3C process, and
- Information about the documents, provided by the Submitter.

One or more Members (called the "Submitter(s)") _may_ participate in a Member Submission. Only W3C Members _may_ be listed as Submitter(s).

The Submission process consists of the following steps:

1.  One of the Submitter(s) sends a request to the Team to acknowledge the Submission request. The Team and Submitter(s) communicate to ensure that the Member Submission is complete.
2.  After Team review, the Director _must_ either acknowledge or reject the Submission request.
    - If [acknowledged](#SubmissionYes), the Team _must_ publish the Member Submission at the public W3C Web site, in addition to Team comments about the Member Submission.
    - If [rejected](#SubmissionNo), the Submitter(s) _may_ initiate a Submission Appeal to either the [TAG](#TAG) or the [Advisory Board](#AB).

**Note:** To avoid confusion about the Member Submission process, please note that:

- Documents in a Member Submission are developed outside of W3C. These documents are **not** part of the [technical report development process](#Reports) (and therefore are not included in the [index of W3C technical reports](https://www.w3.org/TR/)). Members wishing to have documents developed outside of W3C published by W3C _must_ follow the Member Submission process.
- The Submission process is **not** a means by which Members ask for "ratification" of these documents as [W3C Recommendations](#RecsW3C).
- There is no requirement or guarantee that technology which is part of an acknowledged Submission request will receive further consideration by W3C (e.g., by a W3C Working Group).

Publication of a Member Submission by W3C does not imply endorsement by W3C, including the W3C Team or Members. The acknowledgment of a Submission request does not imply that any action will be taken by W3C. It merely records publicly that the Submission request has been made by the Submitter. A Member Submission published by W3C _must not_ be referred to as "work in progress" of the W3C.

The list of [acknowledged Member Submissions](https://www.w3.org/Submission/) is available at the W3C Web site.

### 10.1 Submitter Rights and Obligations

When more than one Member jointly participates in a Submission request, only one Member formally sends in the request. That Member _must_ copy each of the Advisory Committee representatives of the other participating Members, and each of those Advisory Committee representatives _must_ confirm (by email to the Team) their participation in the Submission request.

At any time prior to acknowledgment, any Submitter _may_ withdraw support for a Submission request (described in "[How to send a Submission request](https://www.w3.org/2000/09/submission)"). A Submission request is "withdrawn" when no Submitter(s) support it. The Team _must not_ make statements about withdrawn Submission requests.

Prior to acknowledgment, the Submitter(s) _must not_, **under any circumstances**, refer to a document as "submitted to the World Wide Web Consortium" or "under consideration by W3C" or any similar phrase either in public or Member communication. The Submitter(s) _must not_ imply in public or Member communication that W3C is working (with the Submitter(s)) on the material in the Member Submission. The Submitter(s) _may_ publish the documents in the Member Submission prior to acknowledgment (without reference to the Submission request).

After acknowledgment, the Submitter(s) _must not_, **under any circumstances**, imply W3C investment in the Member Submission until, and unless, the material has been adopted as a deliverable of a W3C Working Group.

#### 10.1.1 Scope of Member Submissions

When a technology overlaps in scope with the work of a chartered Working Group, Members _should_ [participate in the Working Group](#group-participation) and contribute the technology to the group's process rather than seek publication through the Member Submission process. The Working Group _may_ incorporate the contributed technology into its deliverables. If the Working Group does not incorporate the technology, it _should not_ publish the contributed documents as Working Group Notes since Working Group Notes represent group output, not input to the group.

On the other hand, while W3C is in the early stages of developing a charter, Members _should_ use the Submission process to build consensus around concrete proposals for new work.

Members _should not_ submit materials covering topics well outside the scope of [W3C's mission](https://www.w3.org/Consortium/mission).

#### 10.1.2 Information Required in a Submission Request

The Submitter(s) and any other authors of the submitted material _must_ agree that, if the request is acknowledged, the documents in the Member Submission will be subject to the [W3C Document License](https://www.w3.org/Consortium/Legal/copyright-documents) and will include a reference to it. The Submitter(s) _may_ hold the copyright for the documents in a Member Submission.

The request _must_ satisfy the Member Submission licensing commitments of [section 3.3](https://www.w3.org/Consortium/Patent-Policy#sec-submissions) of the [W3C Patent Policy](https://www.w3.org/Consortium/Patent-Policy).

The Submitter(s) _must_ include the following information:

- The list of all submitting Members.
- Position statements from all submitting Members (gathered by the Submitter). All position statements _must_ appear in a separate document.
- Complete electronic copies of any documents submitted for consideration (e.g., a technical specification, a position paper, etc.) If the Submission request is acknowledged, these documents will be published by W3C and therefore _must_ satisfy the Communication Team's [Publication Rules](https://www.w3.org/pubrules/). Submitters _may_ hold the copyright for the material contained in these documents, but when published by W3C, these documents _must_ be subject to the provisions of the [W3C Document License](https://www.w3.org/Consortium/Legal/copyright-documents).

The request _must_ also answer the following questions.

- What proprietary technology is required to implement the areas addressed by the request, and what terms are associated with its use? Again, many answers are possible, but the specific answer will affect the Team's decision.
- What resources, if any, does the Submitter intend to make available if the W3C acknowledges the Submission request and takes action on it?
- What action would the Submitter like W3C to take if the Submission request is acknowledged?
- What mechanisms are there to make changes to the specification being submitted? This includes, but is not limited to, stating where change control will reside if the request is acknowledged.

For other administrative requirements related to Submission requests, see "[How to send a Submission request](https://www.w3.org/2000/09/submission)".

### 10.2 Team Rights and Obligations

Although they are not technical reports, the documents in a Member Submission _must_ fulfil the requirements established by the Team, including the Team's [Publication Rules](https://www.w3.org/pubrules/).

The Team sends a <span id="validation-notice">validation notice</span> to the Submitter(s) once the Team has reviewed a Submission request and judged it complete and correct.

Prior to a decision to [acknowledge](#SubmissionYes) or [reject](#SubmissionNo) the request, the request is [Team-only](#Team-only), and the Team _must_ hold it in the strictest confidentiality. In particular, the Team _must not_ comment to the media about the Submission request.

### 10.3 Acknowledgment of a Submission Request

The Director [acknowledges](#SubmissionYes) a Submission request by sending an announcement to the Advisory Committee. Though the announcement _may_ be made at any time, the Submitter(s) can expect an announcement between <span class="time-interval">four to six weeks</span> after the [validation notice](#validation-notice). The Team _must_ keep the Submitter(s) informed of when an announcement is likely to be made.

Once a Submission request has been acknowledged, the Team _must_:

- Publish the Member Submission.
- Publish Team comments about the Submission request.

If the Submitter(s) wishes to modify a document published as the result of acknowledgment, the Submitter(s) _must_ start the Submission process from the beginning, even just to correct editorial changes.

### 10.4 Rejection of a Submission Request, and Submission Appeals

The Director _may_ reject a Submission request for a variety of reasons, including any of the following:

- The ideas expressed in the request overlap in scope with the work of a chartered Working Group, and acknowledgment might jeopardize the progress of the group.
- The IPR statement made by the Submitter(s) is inconsistent with the W3C's [Patent Policy](https://www.w3.org/Consortium/Patent-Policy), [Document License](https://www.w3.org/Consortium/Legal/copyright-documents), or other IPR policies.
- The ideas expressed in the request are poor, might harm the Web, or run counter to [W3C's mission](https://www.w3.org/Consortium/mission).
- The ideas expressed in the request lie well outside the scope of W3C's mission.

In case of a rejection, the Team _must_ inform the Advisory Committee representative(s) of the Submitter(s). If requested by the Submitter(s), the Team _must_ provide rationale to the Submitter(s) about the rejection. Other than to the Submitter(s), the Team _must not_ make statements about why a Submission request was rejected.

The Advisory Committee representative(s) of the Submitters(s) _may_ initiate a [Submission Appeal](#SubmissionNo) of the Team's Decision to the [TAG](#TAG) if the reasons are related to Web architecture, or to the [Advisory Board](#AB) if the request is rejected for other reasons. In this case the Team _should_ make available its rationale for the rejection to the appropriate body. The Team will establish a process for such appeals that ensures the appropriate [level of confidentiality](#confidentiality-levels).

## 11 Process Evolution

The <span id="ProcessDoc">W3C Process Document</span> undergoes similar consensus-building processes as technical reports, with the [Advisory Board](#AB) acting as the sponsoring Working Group.

The Advisory Board initiates review of a Process Document as follows:

1.  The Team sends a Call for Review to the Advisory Committee and other W3C groups.
2.  After comments have been [formally addressed](#formal-address) and the document possibly modified, the Team seeks endorsement from the Members by initiating an [Advisory Committee review](#ACReview) of a Proposed Process Document. The review period _must_ last at least <span class="time-interval">28 days</span>.
3.  [After the Advisory Committee review](#ACReviewAfter), if there is consensus, the Team enacts the new process officially by announcing the [W3C decision](#def-w3c-decision) to the Advisory Committee. Advisory Committee representatives _may_ initiate an [Advisory Committee Appeal](#ACAppeal) to the W3C.

W3C _may_ also modify a Process Document by following the processes for [modifying a Recommendation](#rec-modify).

Reviews of the Process Document are not public reviews.

## 12 References

### 12.1 Public Resources

The following public information is available at the [W3C Web site](https://www.w3.org/).

\[PUB5\]  
[How to Join W3C](https://www.w3.org/Consortium/join)

\[PUB6\]  
[Membership Agreement](https://www.w3.org/Consortium/Agreement/Member-Agreement)

\[PUB8\]  
[The list of current W3C Members](https://www.w3.org/Consortium/Member/List)

\[PUB9\]  
[The list of W3C Activities](https://www.w3.org/Consortium/activities)

\[PUB10\]  
[The list of acknowledged Member Submissions](https://www.w3.org/Submission/)

\[PUB11\]  
[The W3C technical reports index](https://www.w3.org/TR/)

\[PUB13\]  
[Submission request overview](https://www.w3.org/Submission/1996/Template/)

\[PUB14\]  
[The W3C Team](https://www.w3.org/People/)

\[PUB15\]  
[About the World Wide Web Consortium](https://www.w3.org/Consortium/)

\[PUB16\]  
[The list of published Team Submissions](https://www.w3.org/TeamSubmission/)

\[PUB17\]  
[Invited expert and collaborators agreement](https://www.w3.org/Consortium/Legal/collaborators-agreement)

\[PUB18\]  
[W3C Document License](https://www.w3.org/Consortium/Legal/copyright-documents)

\[PUB19\]  
[W3C Software Notice and License](https://www.w3.org/Consortium/Legal/copyright-software)

\[PUB20\]  
[Translations of W3C technical reports](https://www.w3.org/Consortium/Translation/)

\[PUB21\]  
[Public W3C mailing lists](https://www.w3.org/Mail/)

\[PUB23\]  
[Conflict of Interest Policy for W3C Team Members Engaged in Outside Professional Activities](https://www.w3.org/2000/09/06-conflictpolicy)

\[PUB25\]  
[Technical Architecture Group (TAG) Charter](https://www.w3.org/2004/10/27-tag-charter.html)

\[PUB26\]  
[The TAG home page](https://www.w3.org/2001/tag/)

\[PUB27\]  
[Tips for Getting to Recommendation Faster](https://www.w3.org/2002/05/rec-tips)

\[PUB28\]  
[W3C liaisons with other organizations](https://www.w3.org/2001/11/StdLiaison)

\[PUB30\]  
[The Advisory Board home page](https://www.w3.org/2002/ab/)

\[PUB31\]  
[Publication Rules](https://www.w3.org/pubrules/)

\[PUB32\]  
[W3C Fellows Program](https://www.w3.org/Consortium/Recruitment/Fellows)

\[PUB33\]  
[1 August 2017 version of the W3C Patent Policy](https://www.w3.org/Consortium/Patent-Policy-20170801/). The [latest version of the W3C Patent Policy](https://www.w3.org/Consortium/Patent-Policy/) is available at https://www.w3.org/Consortium/Patent-Policy/.

\[PUB35\]  
[In-place modification of W3C Technical Reports](https://www.w3.org/2003/01/republishing/)

\[PUB36\]  
The [calendar of all scheduled official W3C events](https://www.w3.org/participate/eventscal) replaced the [former member-confidential version](https://www.w3.org/Member/Eventscal) \[[MEM3](#oldref-mem-calendar)\].

\[PUB37\]  
[The Art of Consensus](https://www.w3.org/Guide/), a guidebook for W3C Working Group Chairs and other collaborators

\[PUB38\]  
[W3C Code of Ethics and Professional Conduct](https://www.w3.org/Consortium/cepc/)

\[PUB39\]  
[Obsoleting and Rescinding W3C Specifications](https://www.w3.org/2016/11/obsoleting-rescinding/)

### 12.2 <span id="member-refs">Member-only Resources</span>

The following [Member-only](#Member-only) information is available at the [W3C Web site](https://www.w3.org/).

\[MEM1\]  
[Current Advisory Committee representatives](https://www.w3.org/Member/ACList)

\[MEM2\]  
[Group mailing lists](https://www.w3.org/Member/Groups)

\[MEM3\]  
The Member-only [calendar of all scheduled official W3C events](https://www.w3.org/Member/Eventscal) is no longer maintained. The information is now maintained in the [public calendar](#ref-calendar)

\[MEM4\]  
There is a [Member intro and FAQ](https://www.w3.org/Member/faq.html) as well as the [Process, Patent Policy, Finances Guide](https://www.w3.org/Member/Intro) previously known as the "New Member Orientation", which includes an introduction to W3C processes from a practical standpoint, including relevant email addresses.

\[MEM5\]  
[Advisory Committee meetings](https://www.w3.org/Member/Meeting/)

\[MEM6\]  
[Member Web site](https://www.w3.org/Member/)

\[MEM8\]  
[How to send a Submission request](https://www.w3.org/2000/09/submission)

\[MEM9\]  
[The Art of Consensus](https://www.w3.org/Guide/), a guidebook for W3C Working Group Chairs and other collaborators, is now a Public resource

\[MEM14\]  
[Guidelines for Disciplinary Action](https://www.w3.org/2002/09/discipline)

\[MEM15\]  
[How to Organize an Advisory Board or TAG election](https://www.w3.org/2002/10/election-howto)

### 12.3 Other References

\[RFC2119\]  
["Key words for use in RFCs to Indicate Requirement Levels"](https://www.ietf.org/rfc/rfc2119.txt), S. Bradner, March 1997.

\[RFC2777\]  
["Publicly Verifiable Nomcom Random Selection"](https://www.ietf.org/rfc/rfc2777.txt), D. Eastlake 3rd, February 2000.

## 13 Acknowledgments

The editor is grateful to the following people, who as interested individuals and/or with the affiliation(s) listed, have contributed to this proposal for a revised Process:

Dan Appelquist (Samsung), David Baron (Mozilla), Art Barstow, Hadley Beeman, Tim Berners-Lee (W3C), Andrew Betts (Fastly), Carine Bournez (W3C), Wayne Carr (Intel), Michael Champion (Microsoft), Paul Cotton (Microsoft), Tantek Çelik (Mozilla), Daniel Dardailler (W3C), Terence Eden (Her Majesty's Government), Virginia Fournier (Apple), Daniel Glazman (Disruptive Innovations), Ivan Herman (W3C), Sandro Hawke (W3C), Dominique Hazaël-Massieux (W3C), Renato Ianella, Jeff Jaffe (W3C), Gregg Kellogg, Jay Kishigami 岸上順一 (NTT), Yves Lafon (W3C), Philippe Le Hégaret (W3C), Travis Leithead (Microsoft), Peter Linss, Coralie Mercier (W3C), Nigel Megitt (BBC), Sangwhan Moon (Odd Concepts), Mark Nottingham, Steven Pemberton (CWI), Liam Quin (W3C), Delfí Ramírez, Florian Rivoal (VivlioStyle), Natasha Rooney (GSMA), Alex Russell (Google), Rob Sanderson (J Paul Getty Trust), Wendy Seltzer (W3C), David Singer (Apple), Mitch Stoltz (EFF), Ralph Swick (W3C), Andreas Tai (Institut fuer Rundfunktechnik), Léonie Watson (The Paciello Group), Chris Wilson (Google), Fuqiao Xue (W3C), Judy Zhu 朱红儒 (Alibaba), and Steve Zilles.

The editor is sorry for forgetting any names, and grateful to those who have listened patiently to conversations about this document without feeling a need to add more.

The following individuals contributed to the development of earlier versions of the Process: Jean-François Abramatic (IBM, and previously ILOG and W3C), Dan Appelquist (Telefonica, unaffiliated), David Baron (Mozilla), Art Barstow (Nokia, unaffiliated), Ann Bassetti (The Boeing Company), Jim Bell (HP), Robin Berjon (W3C), Tim Berners-Lee (W3C), J Alan Bird (W3C), Klaus Birkenbihl (Fraunhofer Gesellschaft), Carine Bournez (W3C), Judy Brewer (W3C), Don Brutzman (Web3D), Carl Cargill (Netscape, Sun Microsystems), Wayne Carr (Intel), Marcos Cáceres (Mozilla), Michael Champion (Microsoft), Dan Connolly (W3C), Paul Cotton (Microsoft), Maria Courtemanche (IBM), Mark Crawford (SAP), Geoffrey Creighton (Microsoft), Tantek Çelik (Mozilla), Don Deutsch (Oracle), Karl Dubost (Mozilla), David Fallside (IBM), Fantasai (Mozilla), Kevin Fleming (Bloomberg), Wendy Fong (Hewlett-Packard), Virginie Galindo (Gemalto), Michael Geldblum (Oracle), Daniel Glazman (Disruptive Innovations), Paul Grosso (Arbortext), Eduardo Gutentag (Sun Microsystems), Joe Hall (CDT), Ivan Herman (W3C), Ian Hickson (Google), Brad Hill (Facebook), Steve Holbrook (IBM), Renato Iannella (IPR Systems), Ian Jacobs (W3C), Jeff Jaffe (W3C), Cullen Jennings (Cisco), Brian Kardell (JQuery), Sally Khudairi (W3C), Jay Kishigami 岸上順一 (NTT), John Klensin (MCI), Tim Krauskopf (Spyglass), Kari Laihonen (Ericsson), Ken Laskey (MITRE), Ora Lassila (Nokia), Philippe Le Hégaret (W3C), Håkon Wium Lie (Opera Software), Chris Lilley (W3C), Peter Linss (HP), Bede McCall (MITRE), Giri Mandyam (Qualcomm), Larry Masinter (Adobe Systems), Nigel Megitt (BBC), Coralie Mercier (W3C), Jim Miller (W3C), Olle Olsson (SICS), Mark Nottingham, Qiuling Pan (Huawei), Peter Patel-Schneider, Scott Peterson (Google), TV Raman (Google), Delfí Ramírez, Thomas Reardon (Microsoft), Claus von Riegen (SAP AG), Natasha Rooney (GSMA), Sam Ruby (IBM), David Singer (Apple), David Singer (IBM), Henri Sivonen (Mozilla), Geoffrey Snedden, Josh Soref (BlackBerry, unaffiliated), Ralph Swick (W3C), Anne van Kesteren, Jean-Charles Verdié (MStar), Léonie Watson (The Paciello Group), Rigo Wenning (W3C), Mike West (Google), Ben Wilson, Chris Wilson (Google), Lauren Wood (unaffiliated), Helene Workman (Apple), Judy Zhu 朱红儒 (Alibaba), and Steve Zilles (Adobe Systems).

## 14 Changes

This document is based on the [1 March 2017 Process](https://www.w3.org/2017/Process-20170301/). [Detailed logs of all changes](https://github.com/w3c/w3process/commits/gh-pages) are available.

Changes made since the [1 March 2017 Process](https://www.w3.org/2017/Process-20170301/):

[Section 2.3.1](#ABParticipation)  
The AB has a team contact

[Section 2.4.1](#tag-participation)  
Tim Berners-Lee is a Life Member of the TAG.

The TAG chair _must_ be one of the participants

The TAG has 6 AC-elected members instead of 5

The TAG has a team contact

[Section 2.5](#AB-TAG-participation)  
Seats on the AB or TAG cannot be delegated to a proxy

[Section 2.5.3](#AB-TAG-vacated)  
AB and TAG seats are vacated if the Director removes a participant, instead of if the chair asks them to resign

Clarify that a special election can begin if a candidate resigns as of some future date, rather than waiting for that resignation to take effect.

[Section 3.1](#ParticipationCriteria)  
Participants in W3C activity are explicitly required to abide by the terms and spirit of the [CEPC](https://www.w3.org/Consortium/cepc/ "Code of Ethics and Professional Conduct")

The Director can suspend or remove a participant from any Group or activity for failure to meet participation criteria.

[Section 5.2.3](#CharterReview)  
An AC member may request at least 60 days to review any new or substantively modified working group charter, with such review period occurring between the Call for Review and the Call for Participation.

[Section 5.2.6](#WGCharter)  
Charters _must_ include documentation of any voting procedures additional to those defined in [Section 3.4 Voting](#Votes).

[Section 6.7.2](#revised-rec)  
W3C can produce an [Amended Recommendation](#rec-amended) to update a Recommendation, without adding new features, similar to the way a Working Group produces an Edited Recommendation.

[Section 6.9](#rec-rescind)  
A Recommendation can be declared Superseded.

[Section 7.2](#ACAppeal)  
Clarify that in the event of an Advisory Committee appeal, a Director's decision can be overtuned by more votes for than against

[Section 9](#Liaisons)  
Definition of MoU and conditions for approval.
