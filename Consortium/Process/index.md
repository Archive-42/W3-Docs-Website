<a href="https://www.w3.org/" class="logo"><img src="https://www.w3.org/StyleSheets/TR/2016/logos/W3C" alt="W3C" width="72" height="48" /></a>

# W3C Process Document

## <span class="content">15 September 2020 </span>

This version:  
<https://www.w3.org/2020/Process-20200915/>

Latest published version:  
<https://www.w3.org/Consortium/Process/>

Editor's Draft:  
<https://www.w3.org/Consortium/Process/Drafts/>

Previous Versions:  
<https://www.w3.org/2019/Process-20190301/>

<https://www.w3.org/2018/Process-20180201/>

<https://www.w3.org/2017/Process-20170301/>

Issue Tracking:  
[GitHub](https://github.com/w3c/w3process/issues/)

Editors:  
<a href="http://fantasai.inkedblade.net/contact" class="p-name fn u-url url">Elika J. Etemad / fantasai</a> (<span class="p-org org">Invited Expert</span>)

<a href="https://florian.rivoal.net/" class="p-name fn u-url url">Florian Rivoal</a> (<span class="p-org org">Invited Expert</span>)

Former Editors:  
<span class="p-name fn">Natasha Rooney</span> (<span class="p-org org">Invited Expert</span>)

<a href="http://yandex.com" class="p-name fn u-url url">Charles McCathie Nevile</a> (<span class="p-org org">Yandex</span>)

<a href="https://www.w3.org/" class="p-name fn u-url url">Ian Jacobs</a> (<span class="p-org org">W3C</span>)

[Copyright](https://www.w3.org/Consortium/Legal/ipr-notice#Copyright) © 1996-2020 [W3C](/)<sup>®</sup> ([MIT](https://www.csail.mit.edu/), [ERCIM](https://www.ercim.eu/), [Keio](https://www.keio.ac.jp/), [Beihang](http://ev.buaa.edu.cn/)), All Rights Reserved. W3C [liability](/Consortium/Legal/ipr-notice#Legal_Disclaimer), [trademark](/Consortium/Legal/ipr-notice#W3C_Trademarks), [document use](/Consortium/Legal/copyright-documents) and [software licensing](/Consortium/Legal/copyright-software) rules apply. Your interactions with this site are in accordance with our [public](/Consortium/Legal/privacy-statement#Public) and [Member](/Consortium/Legal/privacy-statement#Members) privacy statements.

---

## <span class="content">Abstract</span>

The mission of the World Wide Web Consortium (W3C) is to lead the World Wide Web to its full potential by developing common protocols that promote its evolution and ensure its interoperability. The W3C Process Document describes the organizational structure of the W3C and processes, responsibilities and functions that enable W3C to accomplish its mission. This document does not describe the internal workings of the Team.

For more information about the W3C mission and the history of W3C, please refer to [About W3C](https://www.w3.org/Consortium/).

## <span class="content"> Status of this Document</span>

This document is the [15 September 2020 Process](https://www.w3.org/2020/Process-20200915/).

W3C, including all existing chartered groups, follows the [most recent operative Process Document](https://www.w3.org/Consortium/Process/) announced to the Membership. This document is developed by the Advisory Board’s Process Task Force working within the [Revising W3C Process Community Group](https://www.w3.org/community/w3process/) (which anyone can join).

A [history of substantial changes](#changes) from previous versions of the Process Document is provided. The document was modified in place in February 2021 to update the link to the editor's draft of the Process.

Comment is invited on the Process. Please file comments as issues in the [w3c/w3process GitHub Repository](https://github.com/w3c/w3process/issues). If you are unable to do this you may send them in email to <public-w3process@w3.org> ([publicly archived](https://lists.w3.org/Archives/Public/public-w3process/)) or to <process-issues@w3.org> ([Member-only archive](https://lists.w3.org/Archives/Member/process-issues)).

## <span class="content"> Relation of Process Document to Patent Policy</span>

W3C Members' attention is called to the fact that provisions of the Process Document are binding on Members per the [Membership Agreement](https://www.w3.org/Consortium/Agreement/Member-Agreement) [\[MEMBER-AGREEMENT\]](#biblio-member-agreement). The W3C Patent Policy [\[PATENT-POLICY\]](#biblio-patent-policy) is incorporated by normative reference as a part of the Process Document, and is thus equally binding.

The Patent Policy places additional obligations on Members, Team, and other participants in W3C. The Process Document does not restate those requirements but includes references to them. The Process Document and Patent Policy have been designed to allow them to evolve independently.

In the Process Document, the term “participant” refers to an individual, not an organization.

## <span class="content"> Conformance and specialized terms</span>

The terms _must_, _must not_, _should_, _should not_, _required_, and _may_ are used in accordance with [RFC 2119](https://www.ietf.org/rfc/rfc2119.txt). The term _not required_<a href="#not-required" class="self-link"></a> is equivalent to the term _may_ as defined in RFC2119 [\[RFC2119\]](#biblio-rfc2119).

Some terms have been capitalized in this document (and in other W3C materials) to indicate that they are entities with special relevance to the W3C Process. These terms are defined within this document, and readers are reminded that the ordinary English definitions are insufficient for the purpose of understanding this document.

## Table of Contents

1.  [<span class="secno">1</span> <span class="content"> Introduction</span>](#Intro)
2.  [<span class="secno">2</span> <span class="content"> Members, Advisory Committee, Team, Advisory Board, Technical Architecture Group</span>](#Organization)
    1.  [<span class="secno">2.1</span> <span class="content"> Members</span>](#Members)
        1.  [<span class="secno">2.1.1</span> <span class="content"> Rights of Members</span>](#MemberBenefits)
        2.  [<span class="secno">2.1.2</span> <span class="content"> Member Consortia and Related Members</span>](#RelatedAndConsortiumMembers)
            1.  [<span class="secno">2.1.2.1</span> <span class="content"> Membership Consortia</span>](#MemberConsortia)
            2.  [<span class="secno">2.1.2.2</span> <span class="content"> Related Members</span>](#MemberRelated)
        3.  [<span class="secno">2.1.3</span> <span class="content"> Advisory Committee (AC)</span>](#AC)
            1.  [<span class="secno">2.1.3.1</span> <span class="content"> Advisory Committee Mailing Lists</span>](#ACCommunication)
            2.  [<span class="secno">2.1.3.2</span> <span class="content"> Advisory Committee Meetings</span>](#ACMeetings)
    2.  [<span class="secno">2.2</span> <span class="content"> The W3C Team</span>](#Team)
    3.  [<span class="secno">2.3</span> <span class="content"> Advisory Board (AB)</span>](#AB)
        1.  [<span class="secno">2.3.1</span> <span class="content"> Advisory Board Participation</span>](#ABParticipation)
    4.  [<span class="secno">2.4</span> <span class="content"> Technical Architecture Group (TAG)</span>](#TAG)
        1.  [<span class="secno">2.4.1</span> <span class="content"> Technical Architecture Group Participation</span>](#tag-participation)
    5.  [<span class="secno">2.5</span> <span class="content"> Advisory Board and Technical Architecture Group Participation</span>](#AB-TAG-participation)
        1.  [<span class="secno">2.5.1</span> <span class="content"> Advisory Board and Technical Architecture Group Participation Constraints</span>](#AB-TAG-constraints)
        2.  [<span class="secno">2.5.2</span> <span class="content"> Advisory Board and Technical Architecture Group Elections</span>](#AB-TAG-elections)
            1.  [<span class="secno">2.5.2.1</span> <span class="content"> Verifiable Random Selection Procedure</span>](#random)
        3.  [<span class="secno">2.5.3</span> <span class="content"> Advisory Board and Technical Architecture Group Vacated Seats</span>](#AB-TAG-vacated)
3.  [<span class="secno">3</span> <span class="content"> General Policies for W3C Groups</span>](#Policies)
    1.  [<span class="secno">3.1</span> <span class="content"> Individual Participation Criteria</span>](#ParticipationCriteria)
        1.  [<span class="secno">3.1.1</span> <span class="content"> Conflict of Interest Policy</span>](#coi)
        2.  [<span class="secno">3.1.2</span> <span class="content"> Individuals Representing a Member Organization</span>](#member-rep)
    2.  [<span class="secno">3.2</span> <span class="content"> Meetings</span>](#GeneralMeetings)
    3.  [<span class="secno">3.3</span> <span class="content"> Consensus</span>](#Consensus)
        1.  [<span class="secno">3.3.1</span> <span class="content"> Managing Dissent</span>](#managing-dissent)
        2.  [<span class="secno">3.3.2</span> <span class="content"> Recording and Reporting Formal Objections</span>](#WGArchiveMinorityViews)
        3.  [<span class="secno">3.3.3</span> <span class="content"> Formally Addressing an Issue</span>](#formal-address)
        4.  [<span class="secno">3.3.4</span> <span class="content"> Reopening a Decision When Presented With New Information</span>](#WGChairReopen)
    4.  [<span class="secno">3.4</span> <span class="content"> Votes</span>](#Votes)
    5.  [<span class="secno">3.5</span> <span class="content"> Appeal of Chair Decisions and Group Decisions</span>](#WGAppeals)
    6.  [<span class="secno">3.6</span> <span class="content"> Resignation from a Group</span>](#resignation)
4.  [<span class="secno">4</span> <span class="content"> Dissemination Policies</span>](#dissemination)
    1.  [<span class="secno">4.1</span> <span class="content"> Confidentiality Levels</span>](#confidentiality-levels)
        1.  [<span class="secno">4.1.1</span> <span class="content"> Changing Confidentiality Level</span>](#confidentiality-change)
5.  [<span class="secno">5</span> <span class="content"> Working Groups and Interest Groups</span>](#GAGeneral)
    1.  [<span class="secno">5.1</span> <span class="content"> Requirements for All Working and Interest Groups</span>](#ReqsAllGroups)
    2.  [<span class="secno">5.2</span> <span class="content"> Working Groups and Interest Groups</span>](#WG-and-IG)
        1.  [<span class="secno">5.2.1</span> <span class="content"> Working Group and Interest Group Participation Requirements</span>](#group-participation)
            1.  [<span class="secno">5.2.1.1</span> <span class="content"> Member Representative in a Working Group</span>](#member-rep-wg)
            2.  [<span class="secno">5.2.1.2</span> <span class="content"> Member Representative in an Interest Group</span>](#member-rep-ig)
            3.  [<span class="secno">5.2.1.3</span> <span class="content"> Invited Expert in a Working Group</span>](#invited-expert-wg)
            4.  [<span class="secno">5.2.1.4</span> <span class="content"> Invited Expert in an Interest Group</span>](#invited-expert-ig)
            5.  [<span class="secno">5.2.1.5</span> <span class="content"> Team Representative in a Working Group</span>](#team-rep-wg)
            6.  [<span class="secno">5.2.1.6</span> <span class="content"> Team Representative in an Interest Group</span>](#team-rep-ig)
        2.  [<span class="secno">5.2.2</span> <span class="content"> Working Group and Interest Group Charter Development</span>](#WGCharterDevelopment)
        3.  [<span class="secno">5.2.3</span> <span class="content"> Advisory Committee Review of a Working Group or Interest Group Charter</span>](#CharterReview)
        4.  [<span class="secno">5.2.4</span> <span class="content"> Call for Participation in a Working Group or Interest Group</span>](#cfp)
        5.  [<span class="secno">5.2.5</span> <span class="content"> Working Group and Interest Group Charter Extension</span>](#charter-extension)
        6.  [<span class="secno">5.2.6</span> <span class="content"> Working Group and Interest Group Charters</span>](#WGCharter)
        7.  [<span class="secno">5.2.7</span> <span class="content"> Working Group and Interest Group Closure</span>](#GeneralTermination)
6.  [<span class="secno">6</span> <span class="content"> W3C Technical Report Development Process</span>](#Reports)
    1.  [<span class="secno">6.1</span> <span class="content"> W3C Technical Reports</span>](#rec-advance)
        1.  [<span class="secno">6.1.1</span> <span class="content"> General requirements for Technical Reports</span>](#general-requirements)
        2.  [<span class="secno">6.1.2</span> <span class="content"> Reviews and Review Responsibilities</span>](#doc-reviews)
            1.  [<span class="secno">6.1.2.1</span> <span class="content"> Wide Review</span>](#wide-review)
        3.  [<span class="secno">6.1.3</span> <span class="content"> Classes of Changes</span>](#correction-classes)
        4.  [<span class="secno">6.1.4</span> <span class="content"> Errata Management</span>](#errata)
        5.  [<span class="secno">6.1.5</span> <span class="content"> Candidate Changes</span>](#candidate-changes)
        6.  [<span class="secno">6.1.6</span> <span class="content"> License Grants from Non-Participants</span>](#contributor-license)
    2.  [<span class="secno">6.2</span> <span class="content"> The W3C Recommendation Track</span>](#rec-track)
        1.  [<span class="secno">6.2.1</span> <span class="content"> Maturity Levels on the Recommendation Track</span>](#maturity-levels)
        2.  [<span class="secno">6.2.2</span> <span class="content"> Implementation Experience</span>](#implementation-experience)
        3.  [<span class="secno">6.2.3</span> <span class="content"> Advancement on the Recommendation Track</span>](#transition-reqs)
        4.  [<span class="secno">6.2.4</span> <span class="content"> Updating Mature Publications on the Recommendation Track</span>](#update-reqs)
            1.  [<span class="secno">6.2.4.1</span> <span class="content"> Streamlined Publication Approval</span>](#streamlined-update)
        5.  [<span class="secno">6.2.5</span> <span class="content"> Publishing a First Public Working Draft</span>](#first-wd)
        6.  [<span class="secno">6.2.6</span> <span class="content"> Revising a Working Draft</span>](#revising-wd)
        7.  [<span class="secno">6.2.7</span> <span class="content"> Transitioning to Candidate Recommendation</span>](#transition-cr)
        8.  [<span class="secno">6.2.8</span> <span class="content"> Revising a Candidate Recommendation</span>](#revising-cr)
            1.  [<span class="secno">6.2.8.1</span> <span class="content"> Publishing a Candidate Recommendation Snapshot</span>](#publishing-crrs)
            2.  [<span class="secno">6.2.8.2</span> <span class="content"> Publishing a Candidate Recommendation Draft</span>](#publishing-crud)
        9.  [<span class="secno">6.2.9</span> <span class="content"> Transitioning to Proposed Recommendation</span>](#transition-pr)
        10. [<span class="secno">6.2.10</span> <span class="content"> Transitioning to W3C Recommendation</span>](#transition-rec)
        11. [<span class="secno">6.2.11</span> <span class="content"> Revising a W3C Recommendation</span>](#revising-rec)
            1.  [<span class="secno">6.2.11.1</span> <span class="content"> Revising a Recommendation: Markup Changes</span>](#revised-rec-markup)
            2.  [<span class="secno">6.2.11.2</span> <span class="content"> Revising a Recommendation: Editorial Changes</span>](#revised-rec-editorial)
            3.  [<span class="secno">6.2.11.3</span> <span class="content"> Revising a Recommendation: Substantive Changes</span>](#revised-rec-substantive)
            4.  [<span class="secno">6.2.11.4</span> <span class="content"> Revising a Recommendation: New Features</span>](#revised-rec-features)
            5.  [<span class="secno">6.2.11.5</span> <span class="content"> Incorporating Candidate Changes</span>](#change-review)
        12. [<span class="secno">6.2.12</span> <span class="content"> Retiring Recommendation Track Documents</span>](#tr-end)
            1.  [<span class="secno">6.2.12.1</span> <span class="content"> Abandoning an Unfinished Technical Report</span>](#abandon-draft)
            2.  [<span class="secno">6.2.12.2</span> <span class="content"> Rescinding a Candidate Recommendation</span>](#rescind-cr)
            3.  [<span class="secno">6.2.12.3</span> <span class="content"> Abandoning a W3C Recommendation</span>](#rec-rescind)
            4.  [<span class="secno">6.2.12.4</span> <span class="content"> Process for Rescinding, Obsoleting, Superseding, Restoring a Recommendation</span>](#deactivation)
    3.  [<span class="secno">6.3</span> <span class="content"> Working Group and Interest Group Notes</span>](#Note)
    4.  [<span class="secno">6.4</span> <span class="content"> Further reading</span>](#further-reading)
7.  [<span class="secno">7</span> <span class="content"> Advisory Committee Reviews, Appeals, and Votes</span>](#ReviewAppeal)
    1.  [<span class="secno">7.1</span> <span class="content"> Advisory Committee Reviews</span>](#ACReview)
        1.  [<span class="secno">7.1.1</span> <span class="content"> Start of a Review Period</span>](#ACReviewStart)
        2.  [<span class="secno">7.1.2</span> <span class="content"> After the Review Period</span>](#ACReviewAfter)
    2.  [<span class="secno">7.2</span> <span class="content"> Appeal by Advisory Committee Representatives</span>](#ACAppeal)
    3.  [<span class="secno">7.3</span> <span class="content"> Advisory Committee Votes</span>](#ACVotes)
8.  [<span class="secno">8</span> <span class="content"> Workshops and Symposia</span>](#GAEvents)
9.  [<span class="secno">9</span> <span class="content"> Liaisons</span>](#Liaisons)
10. [<span class="secno">10</span> <span class="content"> Member Submission Process</span>](#Submission)
    1.  [<span class="secno">10.1</span> <span class="content"> Submitter Rights and Obligations</span>](#SubmissionRights)
        1.  [<span class="secno">10.1.1</span> <span class="content"> Scope of Member Submissions</span>](#SubmissionScope)
        2.  [<span class="secno">10.1.2</span> <span class="content"> Information Required in a Submission Request</span>](#SubmissionReqs)
    2.  [<span class="secno">10.2</span> <span class="content"> Team Rights and Obligations</span>](#TeamSubmissionRights)
    3.  [<span class="secno">10.3</span> <span class="content"> Acknowledgment of a Submission Request</span>](#SubmissionYes)
    4.  [<span class="secno">10.4</span> <span class="content"> Rejection of a Submission Request, and Submission Appeals</span>](#SubmissionNo)
11. [<span class="secno">11</span> <span class="content"> Process Evolution</span>](#GAProcess)
12. [<span class="secno">12</span> <span class="content"> Acknowledgments</span>](#acks)
13. [<span class="secno">13</span> <span class="content"> Changes</span>](#changes)
    1.  [<span class="secno"></span> <span class="content"> Changes since the 1 March 2019 Process</span>](#changes-2019)
    2.  [<span class="secno"></span> <span class="content"> Changes since earlier versions</span>](#changes-previous)
14. [<span class="secno"></span> <span class="content">References</span>](#references)
    1.  [<span class="secno"></span> <span class="content">Normative References</span>](#normative)
    2.  [<span class="secno"></span> <span class="content">Informative References</span>](#informative)
15. [<span class="secno"></span> <span class="content">Index</span>](#index)
    1.  [<span class="secno"></span> <span class="content">Terms defined by this specification</span>](#index-defined-here)

## <span class="secno">1. </span><span class="content"> Introduction</span><a href="#Intro" class="self-link"></a>

Most W3C work revolves around the standardization of Web technologies. To accomplish this work, W3C follows processes that promote the development of high-quality standards based on the [consensus](#Consensus) of the Membership, Team, and public. W3C processes promote fairness, responsiveness, and progress: all facets of the W3C mission. This document describes the processes W3C follows in pursuit of its mission.

Here is a general overview of how W3C standardizes a Web technology. In many cases, the goal of this work is a <a href="#RecsW3C" id="ref-for-RecsW3C">W3C Recommendation</a>—a Web standard.

1.  People generate interest in a particular topic. For instance, Members express interest in the form of [Member Submissions](#Submission), and the [Team](#Team) monitors work inside and outside of W3C for signs of interest. Also, W3C is likely to organize a [Workshop](#GAEvents) to bring people together to discuss topics that interest the W3C community.
2.  When there is enough interest in a topic (e.g., after a successful Workshop and/or discussion on an [Advisory Committee mailing list](#ACCommunication)), the Director announces the development of a proposal for one or more new [Interest Group or Working Group charters](#WGCharterDevelopment), depending on the breadth of the topic of interest. W3C Members [review](#CharterReview) the proposed charters. When there is support within W3C for investing resources in the topic of interest, the Director approves the group(s) and they begin their work.
3.  There are three types of Working Group participants: [Member representatives](#member-rep), [Invited Experts](#invited-expert-wg), and [Team representatives](#Team). Team representatives both contribute to the technical work and help ensure the group’s proper integration with the rest of W3C. The [Working Group charter](#WGCharter) sets expectations about each group’s deliverables (e.g., [technical reports](#Reports), test suites, and tutorials).
4.  Working Groups generally create specifications and guidelines that undergo cycles of revision and review as they [advance to W3C Recommendation](#rec-advance) status. The W3C process for producing these technical reports includes significant review by the Members and public, and requirements that the Working Group be able to show implementation and interoperability experience. At the end of the process, the Advisory Committee reviews the mature technical report, and if there is support, W3C publishes it as a <a href="#RecsW3C" id="ref-for-RecsW3C⑦③">Recommendation</a>.

The Process Document promotes the goals of quality and fairness in technical decisions by encouraging [consensus](#Consensus), requiring reviews (by both Members and public) as part of the [technical report development process](#Reports), and through an [Advisory Committee Appeal process](#ACAppeal).

The other sections of the Process Document:

1.  set forth [policies](#Policies) for participation in W3C groups,
2.  establish two permanent groups within W3C: the [Technical Architecture Group (TAG)](#TAG), to help resolve Consortium-wide technical issues; and the [Advisory Board (AB)](#AB), to help resolve Consortium-wide non-technical issues, and to manage the [evolution of the W3C process](#GAProcess), and
3.  describe other interactions between the [Members](#Members) (as represented by the [W3C Advisory Committee](#AC)), the Team, and the general public.

The W3C also operates Community and Business Groups, which are separately described in [their own process document](https://www.w3.org/community/about/agreements/) [\[BG-CG\]](#biblio-bg-cg).

## <span class="secno">2. </span><span class="content"> Members, Advisory Committee, Team, Advisory Board, Technical Architecture Group</span><a href="#Organization" class="self-link"></a>

W3C’s mission is to lead the Web to its full potential. W3C [Member](#Members) organizations provide resources to this end, and the W3C [Team](#Team) provides the technical leadership and organization to coordinate the effort.

### <span class="secno">2.1. </span><span class="content"> Members</span><a href="#Members" class="self-link"></a>

W3C Members are primarily represented in W3C processes as follows:

1.  The Advisory Committee is composed of one representative from each Member organization (refer to the <a href="#Member-only" id="ref-for-Member-only">Member-only</a> list of [current Advisory Committee representatives](https://www.w3.org/Member/ACList). [\[CURRENT-AC\]](#biblio-current-ac)) The Advisory Committee:

    - reviews plans for W3C at each [Advisory Committee meeting](#ACMeetings);
    - reviews formal proposals from the W3C Director: [Charter Proposals](#CharterReview), <a href="#RecsPR" id="ref-for-RecsPR">Proposed Recommendations</a>, and [Proposed Process Documents](#GAProcess).
    - elects the [Advisory Board](#AB) participants other than the Advisory Board Chair.
    - elects a majority (6) of the participants on the [Technical Architecture Group](#TAG).

    <a href="#advisory-committee-representative" id="ref-for-advisory-committee-representative">Advisory Committee representatives</a> _may_ initiate an [Advisory Committee Appeal](#ACAppeal) in some cases described in this document.

2.  Representatives of Member organizations participate in [Working Groups and Interest Groups](#GAGeneral) and author and review [technical reports](#Reports).

W3C membership is open to all entities, as described in “[How to Join W3C](https://www.w3.org/Consortium/join)” [\[JOIN\]](#biblio-join); (refer to the public list of [current W3C Members](https://www.w3.org/Consortium/Member/List) [\[MEMBER-LIST\]](#biblio-member-list)). Organizations subscribe according to the [Membership Agreement](https://www.w3.org/Consortium/Agreement/Member-Agreement) [\[MEMBER-AGREEMENT\]](#biblio-member-agreement). The [Team](#Team) _must_ ensure that Member participation agreements remain <a href="#Team-only" id="ref-for-Team-only">Team-only</a> and that no Member receives preferential treatment within W3C.

While W3C does not have a class of membership tailored to individuals, individuals _may_ join W3C. Restrictions pertaining to [related Members](#MemberRelated) apply when the individual also [represents](#member-rep) another W3C Member.

#### <span class="secno">2.1.1. </span><span class="content"> Rights of Members</span><a href="#MemberBenefits" class="self-link"></a>

Each Member organization enjoys the following rights and benefits:

- A seat on the [Advisory Committee](#AC);
- Access to <a href="#Member-only" id="ref-for-Member-only①①">Member-only</a> information;
- The [Member Submission](#Submission) process;
- Use of the W3C Member logo on promotional material and to publicize the Member’s participation in W3C. For more information, please refer to the Member logo usage policy described in the [New Member Orientation](https://www.w3.org/Member/Intro) [\[INTRO\]](#biblio-intro).

Furthermore, subject to further restrictions included in the Member Agreement, representatives of Member organizations participate in W3C as follows:

- In [Working Groups and Interest Groups](#GAGeneral).
- In [Workshops and Symposia](#GAEvents);
- On the Team, as <a href="#fellows" id="ref-for-fellows">W3C Fellows</a>.

The rights and benefits of W3C membership are contingent upon conformance to the processes described in this document. The vast majority of W3C Members faithfully follow the spirit as well as the letter of these processes. When serious and/or repeated violations do occur, and repeated attempts to address these violations have not resolved the situation, the <a href="#def-Director" id="ref-for-def-Director">Director</a> _may_ take disciplinary action. Arbitration in the case of further disagreement is governed by paragraph 19 of the Membership Agreement [\[MEMBER-AGREEMENT\]](#biblio-member-agreement). Refer to the [Guidelines for Disciplinary Action](https://www.w3.org/2002/09/discipline) [\[DISCIPLINARY-GL\]](#biblio-disciplinary-gl).

#### <span class="secno">2.1.2. </span><span class="content"> Member Consortia and Related Members</span><a href="#RelatedAndConsortiumMembers" class="self-link"></a>

##### <span class="secno">2.1.2.1. </span><span class="content"> Membership Consortia</span><a href="#MemberConsortia" class="self-link"></a>

A “Member Consortium” means a consortium, user society, or association of two or more individuals, companies, organizations or governments, or any combination of these entities which has the purpose of participating in a common activity or pooling resources to achieve a common goal other than participation in, or achieving certain goals in, W3C. A joint-stock corporation or similar entity is not a <a href="#fdn-member-consortium" id="ref-for-fdn-member-consortium">Member Consortium</a> merely because it has shareholders or stockholders. If it is not clear whether a prospective Member qualifies as a <a href="#fdn-member-consortium" id="ref-for-fdn-member-consortium①">Member Consortium</a>, the Director may reasonably make the determination. For a <a href="#fdn-member-consortium" id="ref-for-fdn-member-consortium②">Member Consortium</a>, the rights and privileges of W3C Membership described in the W3C Process Document extend to the <a href="#fdn-member-consortium" id="ref-for-fdn-member-consortium③">Member Consortium</a>'s paid staff and Advisory Committee representative.

<a href="#fdn-member-consortium" id="ref-for-fdn-member-consortium④">Member Consortia</a> _may_ also designate up to four (or more at the Team’s discretion) individuals who, though not employed by the organization, _may_ exercise the rights of [Member representatives](#member-rep).

For <a href="#fdn-member-consortium" id="ref-for-fdn-member-consortium⑤">Member Consortia</a> that have individual people as members, these individuals _must_ disclose their employment affiliation when participating in W3C work. Provisions for [related Members](#MemberRelated) apply. Furthermore, these individuals _must_ represent the broad interests of the W3C Member organization and not the particular interests of their employers.

For Member Consortia that have organizations as Members, all such designated representatives _must_ be an official representative of the Member organization (e.g. a Committee or Task Force Chairperson) and _must_ disclose their employment affiliation when participating in W3C work. Provisions for [related Members](#MemberRelated) apply. Furthermore, these individuals _must_ represent the broad interests of the W3C Member organization and not the particular interests of their employers.

For all representatives of a Member Consortium, IPR commitments are made on behalf of the Member Consortium, unless a further IPR commitment is made by the individuals' employers.

##### <span class="secno">2.1.2.2. </span><span class="content"> Related Members</span><a href="#MemberRelated" class="self-link"></a>

In the interest of ensuring the integrity of the consensus process, Member involvement in some of the processes in this document is affected by related Member status. As used herein, two Members are related if:

1.  Either Member is a <a href="#subsidiary" id="ref-for-subsidiary">subsidiary</a> of the other, or
2.  Both Members are <a href="#subsidiary" id="ref-for-subsidiary①">subsidiaries</a> of a common entity, or
3.  The Members have an employment contract or consulting contract that affects W3C participation.

A subsidiary is an organization of which effective control and/or majority ownership rests with another, single organization.

<a href="#related-member" id="ref-for-related-member">Related Members</a> _must_ disclose these relationships according to the mechanisms described in the [New Member Orientation](https://www.w3.org/Member/Intro) [\[INTRO\]](#biblio-intro).

#### <span class="secno">2.1.3. </span><span class="content"> Advisory Committee (AC)</span><a href="#AC" class="self-link"></a>

When an organization joins W3C (see “[How to Join W3C](https://www.w3.org/Consortium/join)” [\[JOIN\]](#biblio-join)), it _must_ name its Advisory Committee representative as part of the Membership Agreement. The [New Member Orientation](https://www.w3.org/Member/Intro) [\[INTRO\]](#biblio-intro) explains how to subscribe or unsubscribe to Advisory Committee mailing lists, provides information about [Advisory Committee Meetings](#ACMeetings), explains how to name a new <a href="#advisory-committee-representative" id="ref-for-advisory-committee-representative①">Advisory Committee representative</a>, and more. <a href="#advisory-committee-representative" id="ref-for-advisory-committee-representative②">Advisory Committee representatives</a> _must_ follow the [conflict of interest policy](#coi) by disclosing information according to the mechanisms described in the New Member Orientation. See also the additional roles of <a href="#advisory-committee-representative" id="ref-for-advisory-committee-representative③">Advisory Committee representatives</a> described in the W3C Patent Policy [\[PATENT-POLICY\]](#biblio-patent-policy).

Additional information for Members is available at the [Member Web site](https://www.w3.org/Member/) [\[MEMBER-HP\]](#biblio-member-hp).

##### <span class="secno">2.1.3.1. </span><span class="content"> Advisory Committee Mailing Lists</span><a href="#ACCommunication" class="self-link"></a>

The <a href="#team" id="ref-for-team">Team</a> _must_ provide two mailing lists for use by the <a href="#advisory-committee" id="ref-for-advisory-committee">Advisory Committee</a>:

1.  One for official announcements (e.g., those required by this document) from the <a href="#team" id="ref-for-team①">Team</a> to the <a href="#advisory-committee" id="ref-for-advisory-committee①">Advisory Committee</a>. This list is read-only for Advisory Committee representatives.
2.  One for discussion among <a href="#advisory-committee-representative" id="ref-for-advisory-committee-representative④">Advisory Committee representatives</a>. Though this list is primarily for Advisory Committee representatives, the <a href="#team" id="ref-for-team②">Team</a> _must_ monitor discussion and _should_ participate in discussion when appropriate. Ongoing detailed discussions _should_ be moved to other appropriate lists (new or existing, such as a mailing list created for a [Workshop](#GAEvents)).

An <a href="#advisory-committee-representative" id="ref-for-advisory-committee-representative⑤">Advisory Committee representative</a> _may_ request that additional individuals from their organization be subscribed to these lists. Failure to contain distribution internally _may_ result in suspension of additional email addresses, at the discretion of the Team.

##### <span class="secno">2.1.3.2. </span><span class="content"> Advisory Committee Meetings</span><a href="#ACMeetings" class="self-link"></a>

The <a href="#team" id="ref-for-team③">Team</a> organizes a <a href="#ftf-meeting" id="ref-for-ftf-meeting">face-to-face meeting</a> for the <a href="#advisory-committee" id="ref-for-advisory-committee②">Advisory Committee</a> <span class="time-interval">twice a year</span>. The <a href="#team" id="ref-for-team④">Team</a> appoints the Chair of these meetings (generally the CEO). At each Advisory Committee meeting, the Team _should_ provide an update to the Advisory Committee about:

_Resources_

- The number of W3C Members at each level.
- An overview of the financial status of W3C.

_Allocations_

- The allocation of the annual budget, including size of the Team and their approximate deployment.
- A list of all activities (including but not limited to Working and Interest Groups) and brief status statement about each, in particular those started or terminated since the previous Advisory Committee meeting.
- The allocation of resources to pursuing [liaisons](#Liaisons) with other organizations.

Each Member organization _should_ send one [representative](#member-rep) to each Advisory Committee Meeting. In exceptional circumstances (e.g., during a period of transition between representatives from an organization), the meeting Chair _may_ allow a Member organization to send two representatives to a meeting.

The <a href="#team" id="ref-for-team⑤">Team</a> _must_ announce the date and location of each Advisory Committee meeting no later than at the end of the previous meeting; <span class="time-interval">one year’s</span> notice is preferred. The Team _must_ announce the region of each Advisory Committee meeting at least <span class="time-interval">one year</span> in advance.

More information about [Advisory Committee meetings](https://www.w3.org/Member/Meeting/) [\[AC-MEETING\]](#biblio-ac-meeting) is available at the Member Web site.

### <span class="secno">2.2. </span><span class="content"> The W3C Team</span><a href="#Team" class="self-link"></a>

The Team consists of the Director, CEO, W3C paid staff, unpaid interns, and W3C Fellows. W3C Fellows are Member employees working as part of the Team; see the [W3C Fellows Program](https://www.w3.org/Consortium/Recruitment/Fellows) [\[FELLOWS\]](#biblio-fellows). The Team provides technical leadership about Web technologies, organizes and manages W3C activities to reach goals within practical constraints (such as resources available), and communicates with the Members and the public about the Web and W3C technologies.

The <a href="#def-Director" id="ref-for-def-Director①">Director</a> and CEO _may_ delegate responsibility (generally to other individuals in the Team) for any of their roles described in this document, except [participation in the TAG](#tag-participation).

The Director is the lead technical architect at W3C, whose responsibilities are identified throughout this document in relevant places. Some key ones include: assessing <a href="#def-Consensus" id="DirectorDecision">consensus</a> within W3C for architectural choices, publication of [technical reports](#Reports), and chartering new Groups; appointing group <a href="#GeneralChairs" id="ref-for-GeneralChairs">Chairs</a>, adjudicating as "tie-breaker" for <a href="#wg-decision-appeal" id="ref-for-wg-decision-appeal">Group decision appeals</a>, and deciding on the outcome of formal objections; the Director is generally Chair of the [TAG](#TAG).

Team administrative information such as Team salaries, detailed budgeting, and other business decisions are <a href="#Team-only" id="ref-for-Team-only⑦">Team-only</a>, subject to oversight by the <a href="#hosts" id="ref-for-hosts">Host institutions</a>.

Note: W3C is not currently incorporated. For legal contracts, W3C is represented by four “Host” institutions: Beihang University, the European Research Consortium for Informatics and Mathematics (ERCIM), Keio University, and the Massachusetts Institute of Technology (MIT). Within W3C, the Host institutions are governed by hosting agreements; the <a href="#hosts" id="ref-for-hosts①">Hosts</a> themselves are not W3C Members.

### <span class="secno">2.3. </span><span class="content"> Advisory Board (AB)</span><a href="#AB" class="self-link"></a>

Created in March 1998, the Advisory Board provides ongoing guidance to the Team on issues of strategy, management, legal matters, process, and conflict resolution. The Advisory Board also serves the Members by tracking issues raised between Advisory Committee meetings, soliciting Member comments on such issues, and proposing actions to resolve these issues. The Advisory Board manages the [evolution of the Process Document](#GAProcess). The Advisory Board hears a [Submission Appeal](#SubmissionNo) when a Member Submission is rejected for reasons unrelated to Web architecture; see also the [TAG](#TAG).

The <a href="#advisory-board" id="ref-for-advisory-board">Advisory Board</a> is **not** a board of directors and has no decision-making authority within W3C; its role is strictly advisory.

The <a href="#team" id="ref-for-team⑥">Team</a> _must_ make available a mailing list, confidential to the Advisory Board and Team, for the Advisory Board to use for its communication.

The <a href="#advisory-board" id="ref-for-advisory-board①">Advisory Board</a> _should_ send a summary of each of its meetings to the Advisory Committee and other group Chairs. The Advisory Board _should_ also report on its activities at each [Advisory Committee meeting](#ACMeetings).

Details about the Advisory Board (e.g., the list of Advisory Board participants, mailing list information, and summaries of Advisory Board meetings) are available at the [Advisory Board home page](https://www.w3.org/2002/ab/) [\[AB-HP\]](#biblio-ab-hp).

#### <span class="secno">2.3.1. </span><span class="content"> Advisory Board Participation</span><a href="#ABParticipation" class="self-link"></a>

The <a href="#advisory-board" id="ref-for-advisory-board②">Advisory Board</a> consists of nine to eleven elected participants and a Chair. The <a href="#team" id="ref-for-team⑦">Team</a> appoints the Chair of the [Advisory Board](#AB), who is generally the CEO. The team also appoints a [Team Contact](https://www.w3.org/Guide/staff-contact) for the <a href="#advisory-board" id="ref-for-advisory-board③">AB</a>, as described in [§ 5.1 Requirements for All Working and Interest Groups](#ReqsAllGroups).

The remaining nine to eleven <a href="#advisory-board" id="ref-for-advisory-board④">Advisory Board</a> participants are elected by the W3C <a href="#advisory-committee" id="ref-for-advisory-committee③">Advisory Committee</a> following the [AB/TAG nomination and election process](#AB-TAG-elections).

With the exception of the Chair, the terms of all Advisory Board participants are for <span class="time-interval">two years</span>. Terms are staggered so that each year, either five or six terms expire. If an individual is elected to fill an incomplete term, that individual’s term ends at the normal expiration date of that term. Regular Advisory Board terms begin on 1 July and end on 30 June.

### <span class="secno">2.4. </span><span class="content"> Technical Architecture Group (TAG)</span><a href="#TAG" class="self-link"></a>

Created in February 2001, the mission of the TAG is stewardship of the Web architecture. There are three aspects to this mission:

1.  to document and build consensus around principles of Web architecture and to interpret and clarify these principles when necessary;
2.  to resolve issues involving general Web architecture brought to the TAG;
3.  to help coordinate cross-technology architecture developments inside and outside W3C.

The <a href="#technical-architecture-group" id="ref-for-technical-architecture-group">TAG</a> hears a [Submission Appeal](#SubmissionNo) when a Member Submission is rejected for reasons related to Web architecture; see also the [Advisory Board](#AB).

The <a href="#technical-architecture-group" id="ref-for-technical-architecture-group①">TAG</a>'s scope is limited to technical issues about Web architecture. The TAG _should not_ consider administrative, process, or organizational policy issues of W3C, which are generally addressed by the W3C Advisory Committee, Advisory Board, and Team. Please refer to the [TAG charter](https://www.w3.org/2004/10/27-tag-charter.html) [\[TAG-CHARTER\]](#biblio-tag-charter) for more information about the background and scope of the TAG, and the expected qualifications of TAG participants.

The <a href="#team" id="ref-for-team⑧">Team</a> _must_ make available two mailing lists for the TAG:

- a public discussion (not just input) list for issues of Web architecture. The <a href="#technical-architecture-group" id="ref-for-technical-architecture-group②">TAG</a> will conduct its public business on this list.
- a <a href="#Member-only" id="ref-for-Member-only①②">Member-only</a> list for discussions within the TAG and for requests to the TAG that, for whatever reason, cannot be made on the public list.

The <a href="#technical-architecture-group" id="ref-for-technical-architecture-group③">TAG</a> _may_ also request the creation of additional topic-specific, public mailing lists. For some TAG discussions (e.g., a [Submission Appeal](#SubmissionNo)), the TAG _may_ use a list that will be <a href="#Member-only" id="ref-for-Member-only①③">Member-only</a>.

The <a href="#technical-architecture-group" id="ref-for-technical-architecture-group④">TAG</a> _should_ send a summary of each of its [meetings](#GeneralMeetings) to the Advisory Committee and other group Chairs. The <a href="#technical-architecture-group" id="ref-for-technical-architecture-group⑤">TAG</a> _should_ also report on its activities at each [Advisory Committee meeting](#ACMeetings).

When the <a href="#technical-architecture-group" id="ref-for-technical-architecture-group⑥">TAG</a> votes to resolve an issue, each TAG participant (whether appointed, elected, or the Chair) has one vote; see also the section on [voting in the TAG charter](https://www.w3.org/2004/10/27-tag-charter.html#Voting) [\[TAG-CHARTER\]](#biblio-tag-charter) and the general section on [votes](#Votes) in this Process Document.

Details about the <a href="#technical-architecture-group" id="ref-for-technical-architecture-group⑦">TAG</a> (e.g., the list of TAG participants, mailing list information, and summaries of TAG meetings) are available at the [TAG home page](https://www.w3.org/2001/tag/) [\[TAG-HP\]](#biblio-tag-hp).

#### <span class="secno">2.4.1. </span><span class="content"> Technical Architecture Group Participation</span><a href="#tag-participation" class="self-link"></a>

The <a href="#technical-architecture-group" id="ref-for-technical-architecture-group⑧">TAG</a> consists of:

- Tim Berners-Lee, who is a life member;
- The <a href="#def-Director" id="ref-for-def-Director②">Director</a>, sitting _ex officio_;
- Three participants appointed by the <a href="#def-Director" id="ref-for-def-Director③">Director</a>;
- Six participants elected by the <a href="#advisory-committee" id="ref-for-advisory-committee④">Advisory Committee</a> following the [AB/TAG nomination and election process](#AB-TAG-elections).

The <a href="#team" id="ref-for-team⑨">Team</a> appoints the Chair of the TAG, who _must_ be one of the participants. The team also appoints a [Team Contact](https://www.w3.org/Guide/teamcontact/role.html) [\[TEAM-CONTACT\]](#biblio-team-contact) for the TAG, as described in [§ 5.1 Requirements for All Working and Interest Groups](#ReqsAllGroups).

The terms of elected and Director-appointed TAG participants are for <span class="time-interval">two years</span>. Terms are staggered so that each year three elected terms, and either one or two appointed terms expire. If an individual is appointed or elected to fill an incomplete term, that individual’s term ends at the normal expiration date of that term. Regular TAG terms begin on 1 February and end on 31 January.

The <a href="#def-Director" id="ref-for-def-Director④">Director</a> _may_ announce the appointed participants after the results for the Advisory Committee election of participants have been announced.

### <span class="secno">2.5. </span><span class="content"> Advisory Board and Technical Architecture Group Participation</span><a href="#AB-TAG-participation" class="self-link"></a>

<a href="#advisory-board" id="ref-for-advisory-board⑤">Advisory Board</a> and <a href="#technical-architecture-group" id="ref-for-technical-architecture-group⑨">TAG</a> participants have a special role within W3C: they are elected by the Membership and appointed by the Director with the expectation that they will use their best judgment to find the best solutions for the Web, not just for any particular network, technology, vendor, or user. Advisory Board and TAG participants are expected to participate regularly and fully. Advisory Board and TAG participants _should_ attend [Advisory Committee meetings](#ACMeetings).

Individuals elected or appointed to the Advisory Board or TAG act in their personal capacity, to serve the needs of the W3C membership as a whole, and the Web community. Whether they are Member representatives or Invited Experts, their activities in those roles are separate and distinct from their activities on the Advisory Board or TAG.

An individual participates on the Advisory Board or TAG from the moment the individual’s term begins until the seat is [vacated](#AB-TAG-vacated) (e.g. because the term ends). Although Advisory Board and TAG participants do not advocate for the commercial interests of their employers, their participation does carry the responsibilities associated with Member representation, Invited Expert status, or Team representation (as described in the section on the [AB/TAG nomination and election process](#AB-TAG-elections)).

Participation in the TAG or AB is afforded to the specific individuals elected or appointed to those positions, and a participant’s seat _must not_ be delegated to any other person.

#### <span class="secno">2.5.1. </span><span class="content"> Advisory Board and Technical Architecture Group Participation Constraints</span><a href="#AB-TAG-constraints" class="self-link"></a>

Given the few seats available on the <a href="#advisory-board" id="ref-for-advisory-board⑥">Advisory Board</a> and the <a href="#technical-architecture-group" id="ref-for-technical-architecture-group①⓪">TAG</a>, and in order to ensure that the diversity of W3C Members is represented:

- Two participants with the same <a href="#primary-affiliation" id="ref-for-primary-affiliation">primary affiliation</a> per [§ 2.5.2 Advisory Board and Technical Architecture Group Elections](#AB-TAG-elections) must not both occupy elected seats on the TAG except when this is caused by a change of affiliation of an existing participant. At the completion of the next regularly scheduled election for the TAG, the organization _must_ have returned to having at most one seat.
- Two participants with the same <a href="#primary-affiliation" id="ref-for-primary-affiliation①">primary affiliation</a> per [§ 2.5.2 Advisory Board and Technical Architecture Group Elections](#AB-TAG-elections) must not both occupy elected seats on the AB. If, for whatever reason, these constraints are not satisfied (e.g., because an <a href="#advisory-board" id="ref-for-advisory-board⑦">AB</a> participant changes jobs), one participant _must_ cease <a href="#advisory-board" id="ref-for-advisory-board⑧">AB</a> participation until the situation has been resolved. If after <span class="time-interval">30 days</span> the situation has not been resolved, the Chair will apply the [verifiable random selection procedure](#random) described below to choose one person for continued participation and declare the other seat(s) vacant.
- An individual _must not_ participate on both the TAG and the AB.

#### <span class="secno">2.5.2. </span><span class="content"> Advisory Board and Technical Architecture Group Elections</span><a href="#AB-TAG-elections" class="self-link"></a>

The <a href="#advisory-board" id="ref-for-advisory-board⑨">Advisory Board</a> and a portion of the <a href="#technical-architecture-group" id="ref-for-technical-architecture-group①①">Technical Architecture Group</a> are elected by the <a href="#advisory-committee" id="ref-for-advisory-committee⑤">Advisory Committee</a>, using a Single Transferable Vote system. An election begins when the Team sends a Call for Nominations to the Advisory Committee. Any Call for Nominations specifies the minimum and maximum number of available seats, the deadline for nominations, details about the specific vote tabulation system selected by the Team for the election, and operational information such as how to nominate a candidate. The <a href="#team" id="ref-for-team①⓪">Team</a> _may_ modify the tabulation system after the Call for Nominations but _must_ stabilize it no later than the Call for Votes. The <a href="#def-Director" id="ref-for-def-Director⑤">Director</a> _should_ announce appointments no later than the start of a nomination period as part of the Call for Nominations.

In the case of regularly scheduled elections of the <a href="#technical-architecture-group" id="ref-for-technical-architecture-group①②">TAG</a>, the minimum and maximum number of available seats are the same: the 3 seats of the terms expiring that year, plus the number of other seats that are vacant or will be vacant by the time the newly elected members take their seats.

In the case of regularly scheduled elections of the <a href="#advisory-board" id="ref-for-advisory-board①⓪">AB</a>, the minimum and maximum number of available seats differ: The maximum number is the 5 or 6 seats of the terms expiring that year, plus the number of other seats that are vacant or will be vacant by the time the newly elected members take their seats; the minimum number is such that when added to the occupied seats from the prior year, the minimum size of the AB (9) is reached.

Each Member (or group of <a href="#related-member" id="ref-for-related-member①">related Members</a>) _may_ nominate one individual. A nomination _must_ be made with the consent of the nominee. In order for an individual to be nominated as a Member representative, the individual _must_ qualify for [Member representation](#member-rep) and the Member’s <a href="#advisory-committee-representative" id="ref-for-advisory-committee-representative⑥">Advisory Committee representative</a> _must_ include in the nomination the (same) [information required for a Member representative in a Working Group](#member-rep-info). In order for an individual to be nominated as an Invited Expert, the individual _must_ provide the (same) <a href="#inv-expert-info" id="ref-for-inv-expert-info">information required for an Invited Expert in a Working Group</a> and the nominating <a href="#advisory-committee-representative" id="ref-for-advisory-committee-representative⑦">Advisory Committee representative</a> _must_ include that information in the nomination. In order for an individual to be nominated as a <a href="#team" id="ref-for-team①①">Team</a> representative, the nominating <a href="#advisory-committee-representative" id="ref-for-advisory-committee-representative⑧">Advisory Committee representative</a> _must_ first secure approval from <a href="#team" id="ref-for-team①②">Team</a> management. A nominee is _not required_ to be an employee of a Member organization, and _may_ be a <a href="#fellows" id="ref-for-fellows①">W3C Fellow</a>. The nomination form _must_ ask for the nominee’s <a href="#primary-affiliation" id="ref-for-primary-affiliation②">primary affiliation</a>, and this will be reported on the ballot. For most nominees, the primary affiliation is their employer and will match their affiliation in the W3C database. For contractors and invited experts, this will normally be their contracting company or their invited expert status; in some cases (e.g. where a consultant is consulting for only one organization) this _may_ be the organization for whom the nominee is consulting. A [change of affiliation](#AB-TAG-constraints) is defined such that this field would carry a different answer if the nominee were to be re-nominated (therefore, terminating employment, or accepting new employment, are changes of affiliation). (Other formal relationships such as other contracts should be disclosed as potential conflicts of interest.) Each nomination _should_ include a few informative paragraphs about the nominee.

If, after the deadline for nominations, the number of nominees is:

- Greater than or equal to the minimum number of available seats and less than or equal to the maximum number of available seats, those nominees are thereby elected. This situation constitutes a tie for the purpose of assigning [short terms](#short-term). Furthermore, if the number is less than the maximum number of available seats, the longest terms are filled first.
- Less than the minimum number of available seats, Calls for Nominations are issued until a sufficient number of people have been nominated. Those already nominated do not need to be renominated after a renewed call.
- Greater than the maximum number of available seats, the <a href="#team" id="ref-for-team①③">Team</a> issues a Call for Votes that includes the names of all candidates, the (maximum) number of available seats, the deadline for votes, details about the vote tabulation system selected by the Team for the election, and operational information.

When there is a vote, each Member (or group of <a href="#related-member" id="ref-for-related-member②">related Members</a>) _may_ submit one ballot that ranks candidates in the Member’s preferred order. Once the deadline for votes has passed, the <a href="#team" id="ref-for-team①④">Team</a> announces the results to the <a href="#advisory-committee" id="ref-for-advisory-committee⑥">Advisory Committee</a>. In case of a tie the [verifiable random selection procedure](#random) described below will be used to fill the available seats.

The shortest term is assigned to the elected candidate ranked lowest by the tabulation of votes, the next shortest term to the next-lowest ranked elected candidate, and so on. In the case of a tie among those eligible for a short term, the [verifiable random selection procedure](#random) described below will be used to assign the short term.

Refer to [How to Organize an Advisory Board or TAG election](https://www.w3.org/2002/10/election-howto) [\[ELECTION-HOWTO\]](#biblio-election-howto) for more details.

##### <span class="secno">2.5.2.1. </span><span class="content"> Verifiable Random Selection Procedure</span><a href="#random" class="self-link"></a>

When it is necessary to use a verifiable random selection process (e.g., in an <a href="#advisory-board" id="ref-for-advisory-board①①">AB</a> or <a href="#technical-architecture-group" id="ref-for-technical-architecture-group①③">TAG</a> election, to “draw straws” in case of a tie or to fill a short term), W3C uses the random and verifiable procedure defined in [RFC 3797](https://www.ietf.org/rfc/rfc3797.txt) [\[RFC3797\]](#biblio-rfc3797). The procedure orders an input list of names (listed in alphabetical order by family name unless otherwise specified) into a “result order”.

W3C applies this procedure as follows:

1.  When N people have tied for M (less than N) seats. In this case, only the names of the N individuals who tied are provided as input to the procedure. The M seats are assigned in result order.
2.  After all elected individuals have been identified, when N people are eligible for M (less than N) short terms. In this case, only the names of those N individuals are provided as input to the procedure. The short terms are assigned in result order.

#### <span class="secno">2.5.3. </span><span class="content"> Advisory Board and Technical Architecture Group Vacated Seats</span><a href="#AB-TAG-vacated" class="self-link"></a>

An <a href="#advisory-board" id="ref-for-advisory-board①②">Advisory Board</a> or <a href="#technical-architecture-group" id="ref-for-technical-architecture-group①④">TAG</a> participant’s seat is vacated when:

- the participant resigns, or
- an Advisory Board or TAG participant changes affiliations such that the [Advisory Board and TAG participation constraints](#AB-TAG-constraints) are no longer met, or
- the Director dismisses the participant for failing to meet the criteria in section [§ 3.1 Individual Participation Criteria](#ParticipationCriteria), or
- their term ends.

If a participant changes affiliation, but the [participation constraints](#AB-TAG-constraints) are met, that participant’s seat becomes vacant at the next regularly scheduled election for that group.

Vacated seats are filled according to this schedule:

- When an appointed <a href="#technical-architecture-group" id="ref-for-technical-architecture-group①⑤">TAG</a> seat is vacated, the Director _may_ re-appoint someone immediately, but no later than the next regularly scheduled election.
- When an elected seat on either the <a href="#advisory-board" id="ref-for-advisory-board①③">AB</a> or <a href="#technical-architecture-group" id="ref-for-technical-architecture-group①⑥">TAG</a> is vacated, the seat is filled at the next regularly scheduled election for the group unless the group Chair requests that W3C hold an election before then (for instance, due to the group’s workload).

  - The group Chair _should not_ request such an election if the next regularly scheduled election is fewer than three months away.
  - The group Chair _may_ request an election, and the election may begin, as soon as a current member gives notice of a resignation, including a resignation effective as of a given date in the future.

  When such an election is held, the minimum number of available seats is such that when added to the number of continuing participants, the minimum total number of elected seats is met (6 for the <a href="#technical-architecture-group" id="ref-for-technical-architecture-group①⑦">TAG</a>, 9 for the <a href="#advisory-board" id="ref-for-advisory-board①④">AB</a>); and the maximum number corresponds to all unoccupied seats. Except for the number of available seats and the length of the terms, the [usual rules for Advisory Board and Technical Architecture Group Elections](#AB-TAG-elections) apply.

## <span class="secno">3. </span><span class="content"> General Policies for W3C Groups</span><a href="#Policies" class="self-link"></a>

This section describes general policies for W3C groups regarding participation, meeting requirements, and decision-making. These policies apply to <span id="participant">participants</span> in the following groups: [Advisory Committee](#AC), [Advisory Board](#ABParticipation), [TAG](#tag-participation), <a href="#wgparticipant" id="ref-for-wgparticipant">Working Groups</a>, and <a href="#igparticipant" id="ref-for-igparticipant">Interest Groups</a>.

### <span class="secno">3.1. </span><span class="content"> Individual Participation Criteria</span><a href="#ParticipationCriteria" class="self-link"></a>

There are three qualities an individual is expected to demonstrate in order to participate in W3C:

1.  Technical competence in one’s role;
2.  The ability to act fairly;
3.  Social competence in one’s role.

<a href="#advisory-committee-representative" id="ref-for-advisory-committee-representative⑨">Advisory Committee representatives</a> who nominate individuals from their organization for participation in W3C activities are responsible for assessing and attesting to the qualities of those nominees.

Participants in any W3C activity _must_ abide by the terms and spirit of the [W3C Code of Ethics and Professional Conduct](https://www.w3.org/Consortium/cepc/) [\[CEPC\]](#biblio-cepc) and the participation requirements described in “Disclosure” in the W3C Patent Policy [\[PATENT-POLICY\]](#biblio-patent-policy).

The <a href="#def-Director" id="ref-for-def-Director⑥">Director</a> _may_ suspend or remove for cause a participant in any group (including the <a href="#advisory-board" id="ref-for-advisory-board①⑤">AB</a> and <a href="#technical-architecture-group" id="ref-for-technical-architecture-group①⑧">TAG</a>), where cause includes failure to meet the requirements of this process, the membership agreement, or applicable laws.

#### <span class="secno">3.1.1. </span><span class="content"> Conflict of Interest Policy</span><a href="#coi" class="self-link"></a>

Individuals participating materially in W3C work _must_ disclose significant relationships when those relationships might reasonably be perceived as creating a conflict of interest with the individual’s role at W3C. These disclosures _must_ be kept up-to-date as the individual’s affiliations change and W3C membership evolves (since, for example, the individual might have a relationship with an organization that joins or leaves W3C). Each section in this document that describes a W3C group provides more detail about the disclosure mechanisms for that group.

The ability of an individual to fulfill a role within a group without risking a conflict of interest depends on the individual’s affiliations. When these affiliations change, the individual’s assignment to the role _must_ be evaluated. The role _may_ be reassigned according to the appropriate process. For instance, the <a href="#def-Director" id="ref-for-def-Director⑦">Director</a> _may_ appoint a new group <a href="#GeneralChairs" id="ref-for-GeneralChairs③⓪">Chair</a> when the current Chair changes affiliations (e.g., if there is a risk of conflict of interest, or if there is risk that the Chair’s new employer will be over-represented within a W3C activity).

The following are some scenarios where disclosure is appropriate:

- Paid consulting for an organization whose activity is relevant to W3C, or any consulting compensated with equity (shares of stock, stock options, or other forms of corporate equity).
- A decision-making role/responsibility (such as participating on the Board) in other organizations relevant to W3C.
- A position on a publicly visible advisory body, even if no decision-making authority is involved.

Individuals seeking assistance on these matters _should_ contact the <a href="#team" id="ref-for-team①⑤">Team</a>.

<a href="#team" id="ref-for-team①⑥">Team</a> members are subject to the [W3C Team conflict of interest policy](https://www.w3.org/2000/09/06-conflictpolicy) [\[CONFLICT-POLICY\]](#biblio-conflict-policy).

#### <span class="secno">3.1.2. </span><span class="content"> Individuals Representing a Member Organization</span><a href="#member-rep" class="self-link"></a>

Generally, individuals representing a Member in an official capacity within W3C are employees of the Member organization. However, an <a href="#advisory-committee-representative" id="ref-for-advisory-committee-representative①⓪">Advisory Committee representative</a> _may_ designate a non-employee to represent the Member. Non-employee Member representatives _must_ disclose relevant affiliations to the Team and to any group in which the individual participates.

In exceptional circumstances (e.g., situations that might jeopardize the progress of a group or create a [conflict of interest](#coi)), the <a href="#def-Director" id="ref-for-def-Director④⑧">Director</a> _may_ decline to allow an individual designated by an Advisory Committee representative to participate in a group.

A group charter _may_ limit the number of individuals representing a W3C Member (or group of [related Members](#MemberRelated)).

### <span class="secno">3.2. </span><span class="content"> Meetings</span><a href="#GeneralMeetings" class="self-link"></a>

W3C groups (including the [Advisory Committee](#ACMeetings), [Advisory Board](#AB), [TAG](#TAG), and <a href="#GroupsWG" id="ref-for-GroupsWG">Working Groups</a>) _should_ observe the meeting requirements in this section.

W3C distinguishes two types of meetings:

1.  A face-to-face meeting is one where most of the attendees are expected to participate in the same physical location.
2.  A distributed meeting is one where most of the attendees are expected to participate from remote locations (e.g., by telephone, video conferencing, or IRC).

A <a href="#GeneralChairs" id="ref-for-GeneralChairs①">Chair</a> _may_ invite an individual with a particular expertise to attend a meeting on an exceptional basis. This person is a meeting guest, not a group [participant](#participant). Meeting guests do not have [voting rights](#Votes). It is the responsibility of the Chair to ensure that all meeting guests respect the chartered [level of confidentiality](#confidentiality-levels) and other group requirements.

Meeting announcements _should_ be sent to all appropriate group mailing lists, i.e. those most relevant to the anticipated meeting participants.

The following table lists requirements for organizing a meeting:

<table><tbody><tr class="odd"><td></td><td>Face-to-face meetings</td><td>Distributed meetings</td></tr><tr class="even"><td>Meeting announcement (before)</td><td><span class="time-interval">eight weeks<sup>*</sup></span></td><td><span class="time-interval">one week<sup>*</sup></span></td></tr><tr class="odd"><td>Agenda available (before)</td><td><span class="time-interval">two weeks</span></td><td><span class="time-interval">24 hours</span> (or longer if a meeting is scheduled after a weekend or holiday)</td></tr><tr class="even"><td>Participation confirmed (before)</td><td><span class="time-interval">three days</span></td><td><span class="time-interval">24 hours</span></td></tr><tr class="odd"><td>Action items available (after)</td><td><span class="time-interval">three days</span></td><td><span class="time-interval">24 hours</span></td></tr><tr class="even"><td>Minutes available (after)</td><td><span class="time-interval">two weeks</span></td><td><span class="time-interval">48 hours</span></td></tr></tbody></table>

<sup>\*</sup> To allow proper planning (e.g., travel arrangements), the Chair is responsible for giving sufficient advance notice about the date and location of a meeting. Shorter notice for a meeting is allowed provided that there are no objections from group participants.

### <span class="secno">3.3. </span><span class="content"> Consensus</span><a href="#Consensus" class="self-link"></a>

Consensus is a core value of W3C. To promote consensus, the W3C process requires Chairs to ensure that groups consider all legitimate views and objections, and endeavor to resolve them, whether these views and objections are expressed by the active participants of the group or by others (e.g., another W3C group, a group in another organization, or the general public). Decisions _may_ be made during meetings (<a href="#ftf-meeting" id="ref-for-ftf-meeting①">face-to-face</a> or <a href="#distributed-meeting" id="ref-for-distributed-meeting">distributed</a>) as well as through email.

Note: The Director, CEO, and COO have the role of assessing consensus within the Advisory Committee.

The following terms are used in this document to describe the level of support for a decision among a set of eligible individuals:

Consensus:  
A substantial number of individuals in the set support the decision and nobody in the set registers a <a href="#FormalObjection" id="ref-for-FormalObjection">Formal Objection</a>. Individuals in the set _may_ abstain. Abstention is either an explicit expression of no opinion or silence by an individual in the set.

Unanimity:  
The particular case of <a href="#def-Consensus" id="ref-for-def-Consensus">consensus</a> where all individuals in the set support the decision (i.e., no individual in the set abstains).

Dissent:  
At least one individual in the set registers a <a href="#FormalObjection" id="ref-for-FormalObjection①①">Formal Objection</a>.

By default, the set of individuals eligible to participate in a decision is the set of group participants. The Process Document does not require a quorum for decisions (i.e., the minimal number of eligible participants required to be present before the Chair can call a question). A charter _may_ include a quorum requirement for consensus decisions.

Where <a href="#def-Unanimity" id="ref-for-def-Unanimity">unanimity</a> is not possible, a group _should_ strive to make <a href="#def-Consensus" id="ref-for-def-Consensus①">consensus</a> decisions where there is significant support and few abstentions. The Process Document does not require a particular percentage of eligible participants to agree to a motion in order for a decision to be made. To avoid decisions where there is widespread apathy, (i.e., little support and many abstentions), groups _should_ set minimum thresholds of active support before a decision can be recorded. The appropriate percentage _may_ vary depending on the size of the group and the nature of the decision. A charter _may_ include threshold requirements for consensus decisions. For instance, a charter might require a supermajority of eligible participants (i.e., some established percentage above 50%) to support certain types of consensus decisions.

Note: Chairs have substantial flexibility in how they obtain and assess consensus among their groups. Unless otherwise constrained by charter, they may use modes including but not limited to explicit calls for consensus, polls of participants, “lazy consensus” in which lack of objection after sufficient notice is taken as assent; or they may also delegate and empower a document editor to assess consensus on their behalf, whether in general or for specific pre-determined circumstances (e.g. in non-controversial situations, for specific types of issues, etc.).

If questions or disagreements arise, the final determination of consensus remains with the chair.

#### <span class="secno">3.3.1. </span><span class="content"> Managing Dissent</span><a href="#managing-dissent" class="self-link"></a>

In some cases, even after careful consideration of all points of view, a group might find itself unable to reach consensus. The <a href="#GeneralChairs" id="ref-for-GeneralChairs②">Chair</a> _may_ record a decision where there is <a href="#def-Dissent" id="ref-for-def-Dissent">dissent</a> (i.e., there is at least one <a href="#FormalObjection" id="ref-for-FormalObjection①②">Formal Objection</a>) so that the group can make progress (for example, to produce a deliverable in a timely manner). Dissenters cannot stop a group’s work simply by saying that they cannot live with a decision. When the Chair believes that the Group has duly considered the legitimate concerns of dissenters as far as is possible and reasonable, the group _should_ move on.

Groups _should_ favor proposals that create the weakest objections. This is preferred over proposals that are supported by a large majority but that cause strong objections from a few people. As part of making a decision where there is <a href="#def-Dissent" id="ref-for-def-Dissent①">dissent</a>, the <a href="#GeneralChairs" id="ref-for-GeneralChairs③">Chair</a> is expected to be aware of which participants work for the same (or [related](#MemberRelated)) Member organizations and weigh their input accordingly.

#### <span class="secno">3.3.2. </span><span class="content"> Recording and Reporting Formal Objections</span><a href="#WGArchiveMinorityViews" class="self-link"></a>

In the W3C process, an individual _may_ register a Formal Objection to a decision. A Formal Objection to a group decision is one that the reviewer requests that the Director consider as part of evaluating the related decision (e.g., in response to a [request to advance](#rec-advance) a technical report).

Note: In this document, the term “Formal Objection” is used to emphasize this process implication: Formal Objections receive Director consideration. The word “objection” used alone has ordinary English connotations.

An individual who registers a <a href="#FormalObjection" id="ref-for-FormalObjection①③">Formal Objection</a> _should_ cite technical arguments and propose changes that would remove the <a href="#FormalObjection" id="ref-for-FormalObjection①">Formal Objection</a>; these proposals _may_ be vague or incomplete. <a href="#FormalObjection" id="ref-for-FormalObjection②">Formal Objections</a> that do not provide substantive arguments or rationale are unlikely to receive serious consideration by the Director.

A record of each <a href="#FormalObjection" id="ref-for-FormalObjection③">Formal Objection</a> _must_ be [publicly available](#confidentiality-change). A Call for Review (of a document) to the Advisory Committee _must_ identify any <a href="#FormalObjection" id="ref-for-FormalObjection④">Formal Objections</a>.

#### <span class="secno">3.3.3. </span><span class="content"> Formally Addressing an Issue</span><a href="#formal-address" class="self-link"></a>

In the context of this document, a group has formally addressed an issue when it has sent a public, substantive response to the reviewer who raised the issue. A substantive response is expected to include rationale for decisions (e.g., a technical explanation, a pointer to charter scope, or a pointer to a requirements document). The adequacy of a response is measured against what a W3C reviewer would generally consider to be technically sound. If a group believes that a reviewer’s comments result from a misunderstanding, the group _should_ seek clarification before reaching a decision.

As a courtesy, both Chairs and reviewers _should_ set expectations for the schedule of responses and acknowledgments. The group _should_ reply to a reviewer’s initial comments in a timely manner. The group _should_ set a time limit for acknowledgment by a reviewer of the group’s substantive response; a reviewer cannot block a group’s progress. It is common for a reviewer to require a week or more to acknowledge and comment on a substantive response. The group’s responsibility to respond to reviewers does not end once a reasonable amount of time has elapsed. However, reviewers _should_ realize that their comments will carry less weight if not sent to the group in a timely manner.

Substantive responses _should_ be recorded. The group _should_ maintain an accurate summary of all substantive issues and responses to them (e.g., in the form of an issues list with links to mailing list archives).

#### <span class="secno">3.3.4. </span><span class="content"> Reopening a Decision When Presented With New Information</span><a href="#WGChairReopen" class="self-link"></a>

The <a href="#GeneralChairs" id="ref-for-GeneralChairs④">Chair</a> _may_ reopen a decision when presented with new information, including:

- additional technical information,
- comments by email from participants who were unable to attend a scheduled meeting,
- comments by email from meeting attendees who chose not to speak out during a meeting (e.g., so they could confer later with colleagues or for cultural reasons).

The <a href="#GeneralChairs" id="ref-for-GeneralChairs⑤">Chair</a> _should_ record that a decision has been reopened, and _must_ do so upon request from a group participant.

### <span class="secno">3.4. </span><span class="content"> Votes</span><a href="#Votes" class="self-link"></a>

A group _should_ only conduct a vote to resolve a _substantive issue_ after the <a href="#GeneralChairs" id="ref-for-GeneralChairs⑥">Chair</a> has determined that all available means of [reaching consensus](#Consensus) through technical discussion and compromise have failed, and that a vote is necessary to break a deadlock. In this case the <a href="#GeneralChairs" id="ref-for-GeneralChairs⑦">Chair</a> _must_ record (e.g., in the minutes of the meeting or in an archived email message):

- an explanation of the issue being voted on;
- the decision to conduct a vote (e.g., a simple majority vote) to resolve the issue;
- the outcome of the vote;
- any Formal Objections.

In order to vote to resolve a substantive issue, an individual _must_ be a group [participant](#participant). Each organization represented in the group _must_ have at most one vote, even when the organization is represented by several participants in the group (including Invited Experts). For the purposes of voting:

- A Member or group of [related Members](#MemberRelated) is considered a single organization.
- The [Team](#Team) is considered an organization.

Unless the charter states otherwise, [Invited Experts](#invited-expert-wg) _may_ vote.

If a participant is unable to attend a vote, that individual _may_ authorize anyone at the meeting to act as a proxy. The absent participant _must_ inform the Chair in writing who is acting as proxy, with written instructions on the use of the proxy. For a Working Group or Interest Group, see the related requirements regarding an individual who attends a meeting as a <a href="#mtg-substitute" id="ref-for-mtg-substitute">substitute</a> for a participant.

A group _may_ vote for other purposes than to resolve a substantive issue. For instance, the Chair often conducts a “straw poll” vote as a means of determining whether there is consensus about a potential decision.

A group _may_ also vote to make a process decision. For example, it is appropriate to decide by simple majority whether to hold a meeting in San Francisco or San Jose (there’s not much difference geographically). When simple majority votes are used to decide minor issues, voters are _not required_ to state the reasons for votes, and the group is _not required_ to record individual votes.

A group charter _may_ include formal voting procedures (e.g., quorum or threshold requirements) for making decisions about substantive issues.

Procedures for [Advisory Committee votes](#ACVotes) are described separately.

### <span class="secno">3.5. </span><span class="content"> Appeal of <a href="#chair-decisions" id="ref-for-chair-decisions">Chair Decisions</a> and <a href="#group-decisions" id="ref-for-group-decisions">Group Decisions</a></span><a href="#WGAppeals" class="self-link"></a>

Groups resolve issues through dialog. Individuals who disagree strongly with a decision _should_ register with the Chair any <a href="#FormalObjection" id="ref-for-FormalObjection⑤">Formal Objections</a> (e.g., to a decision made as the result of a [vote](#Votes)).

As detailed in other parts of this document, the <a href="#GeneralChairs" id="ref-for-GeneralChairs⑧">Chair</a> of a <a href="#GroupsWG" id="ref-for-GroupsWG⑧⑥">Working Group</a> or <a href="#GroupsIG" id="ref-for-GroupsIG">Interest Group</a> has the prerogative to make certain decisions based on their own judgment. Such decisions are called Chair Decisions. In contrast, decisions taken by the <a href="#GeneralChairs" id="ref-for-GeneralChairs⑨">Chair</a> of a <a href="#GroupsWG" id="ref-for-GroupsWG①">Working Group</a> or <a href="#GroupsIG" id="ref-for-GroupsIG①">Interest Group</a> on the basis of having assessed the <a href="#def-Consensus" id="ref-for-def-Consensus②">consensus</a> of the group or following a vote (see [§ 3.4 Votes](#Votes)) are called Group Decisions.

When group participants believe that their concerns are not being duly considered by the group or the <a href="#GeneralChairs" id="ref-for-GeneralChairs①⓪">Chair</a>, they _may_ ask the <a href="#def-Director" id="ref-for-def-Director④⑨">Director</a> (for representatives of a Member organization, via their Advisory Committee representative) to confirm or deny the decision. This is a Group Decision Appeal or a Chair Decision Appeal<a href="#chair-decision-appeal" class="self-link"></a>. The participants _should_ also make their requests known to the <a href="#TeamContact" id="ref-for-TeamContact">Team Contact</a>. The Team Contact _must_ inform the Director when a group participant has raised concerns about due process.

Any requests to the Director to confirm a decision _must_ include a summary of the issue (whether technical or procedural), decision, and rationale for the objection. All counter-arguments, rationales, and decisions _must_ be recorded.

Procedures for [Advisory Committee appeals](#ACAppeal) are described separately.

### <span class="secno">3.6. </span><span class="content"> Resignation from a Group</span><a href="#resignation" class="self-link"></a>

A W3C Member or Invited Expert _may_ resign from a group. On written notification from an Advisory Committee representative or Invited Expert to the team, the Member and their representatives or the Invited Expert will be deemed to have resigned from the relevant group. The team _must_ record the notification. See “Exclusion and Resignation from the Working Group” in the W3C Patent Policy [\[PATENT-POLICY\]](#biblio-patent-policy) for information about obligations remaining after resignation from certain groups.

## <span class="secno">4. </span><span class="content"> <span id="chapterDissemination"></span> Dissemination Policies</span><a href="#dissemination" class="self-link"></a>

The <a href="#team" id="ref-for-team①⑦">Team</a> is responsible for managing communication within W3C and with the general public (e.g., news services, press releases, managing the Web site and access privileges, and managing calendars). Members _should_ solicit review by the Team prior to issuing press releases about their work within W3C.

The <a href="#team" id="ref-for-team①⑧">Team</a> makes every effort to ensure the persistence and availability of the following public information:

- [W3C technical reports](#Reports) whose publication has been approved by the Director. Per the Membership Agreement, W3C technical reports (and software) are available free of charge to the general public; (refer to the [W3C Document License](https://www.w3.org/Consortium/Legal/copyright-documents) [\[DOC-LICENSE\]](#biblio-doc-license)).
- A [mission statement](https://www.w3.org/Consortium/mission) [\[MISSION\]](#biblio-mission) that explains the purpose and mission of W3C, the key benefits for Members, and the organizational structure of W3C.
- Legal documents, including the [Membership Agreement](https://www.w3.org/Consortium/Agreement/Member-Agreement) [\[MEMBER-AGREEMENT\]](#biblio-member-agreement) and documentation of any legal commitments W3C has with other entities.
- The Process Document.
- Public results of W3C activities and [Workshops](#GAEvents).

To keep the Members abreast of W3C meetings, <a href="#EventsW" id="ref-for-EventsW">Workshops</a>, and review deadlines, the Team provides them with a regular (e.g., weekly) news service and maintains a [calendar](https://www.w3.org/participate/eventscal) [\[CALENDAR\]](#biblio-calendar) of official W3C events. Members are encouraged to send schedule and event information to the Team for inclusion on this calendar.

### <span class="secno">4.1. </span><span class="content"> Confidentiality Levels</span><a href="#confidentiality-levels" class="self-link"></a>

There are three principal levels of access to W3C information (on the W3C Web site, in W3C meetings, etc.): public, Member-only, and Team-only.

While much information made available by W3C is public, “Member-only” information is available to authorized parties only, including representatives of Member organizations, [Invited Experts](#invited-expert-wg), the Advisory Board, the TAG, and the Team. For example, the [charter](#WGCharter) of some Working Groups _may_ specify a <a href="#Member-only" id="ref-for-Member-only①">Member-only</a> confidentiality level for group proceedings.

“Team-only” information is available to the Team and other authorized parties.

Those authorized to access <a href="#Member-only" id="ref-for-Member-only②">Member-only</a> and <a href="#Team-only" id="ref-for-Team-only⑧">Team-only</a> information:

- _must_ treat the information as confidential within W3C,
- _must_ use reasonable efforts to maintain the proper level of confidentiality, and
- _must not_ release this information to the general public or press.

The <a href="#team" id="ref-for-team①⑨">Team</a> _must_ provide mechanisms to protect the confidentiality of <a href="#Member-only" id="ref-for-Member-only③">Member-only</a> information and ensure that authorized parties have proper access to this information. Documents _should_ clearly indicate whether they require <a href="#Member-only" id="ref-for-Member-only④">Member-only</a> confidentiality. Individuals uncertain of the confidentiality level of a piece of information _should_ contact the Team.

<a href="#advisory-committee-representative" id="ref-for-advisory-committee-representative①①">Advisory Committee representatives</a> _may_ authorize <a href="#Member-only" id="ref-for-Member-only⑤">Member-only</a> access to [Member representatives](#member-rep) and other individuals employed by the Member who are considered appropriate recipients. For instance, it is the responsibility of the <a href="#advisory-committee-representative" id="ref-for-advisory-committee-representative①②">Advisory Committee representative</a> and other employees and official representatives of the organization to ensure that Member-only news announcements are distributed for internal use only within their organization. Information about Member mailing lists is available in the [New Member Orientation](https://www.w3.org/Member/Intro) [\[INTRO\]](#biblio-intro).

#### <span class="secno">4.1.1. </span><span class="content"> Changing Confidentiality Level</span><a href="#confidentiality-change" class="self-link"></a>

As a benefit of membership, W3C provides some <a href="#Team-only" id="ref-for-Team-only①">Team-only</a> and <a href="#Member-only" id="ref-for-Member-only⑥">Member-only</a> channels for certain types of communication. For example, <a href="#advisory-committee-representative" id="ref-for-advisory-committee-representative①③">Advisory Committee representatives</a> can send [reviews](#ACReview) to a <a href="#Team-only" id="ref-for-Team-only②">Team-only</a> channel. However, for W3C processes with a significant public component, such as the technical report development process, it is also important for information that affects decision-making to be publicly available. The Team _may_ need to communicate <a href="#Team-only" id="ref-for-Team-only③">Team-only</a> information to a Working Group or the public. Similarly, a Working Group whose proceedings are <a href="#Member-only" id="ref-for-Member-only⑦">Member-only</a> _must_ make public information pertinent to the technical report development process.

This document clearly indicates which information _must_ be available to Members or the public, even though that information was initially communicated on <a href="#Team-only" id="ref-for-Team-only④">Team-only</a> or <a href="#Member-only" id="ref-for-Member-only⑧">Member-only</a> channels. Only the <a href="#team" id="ref-for-team②⓪">Team</a> and parties authorized by the Team may change the level of confidentiality of this information. When doing so:

1.  The <a href="#team" id="ref-for-team②①">Team</a> _must_ use a version of the information that was expressly provided by the author for the new confidentiality level. In Calls for Review and other similar messages, the Team _should_ remind recipients to provide such alternatives.
2.  The <a href="#team" id="ref-for-team②②">Team</a> _must not_ attribute the version for the new confidentiality level to the author without the author’s consent.
3.  If the author has not conveyed to the <a href="#team" id="ref-for-team②③">Team</a> a version that is suitable for another confidentiality level, the Team _may_ make available a version that reasonably communicates what is required, while respecting the original level of confidentiality, and without attribution to the original author.

## <span class="secno">5. </span><span class="content"> <span id="ChapterGroups"></span> Working Groups and Interest Groups</span><a href="#GAGeneral" class="self-link"></a>

This document defines two types of groups:

<a href="#GroupsWG" id="ref-for-GroupsWG⑧⑦">Working Groups</a>.  
<a href="#GroupsWG" id="ref-for-GroupsWG②">Working Groups</a> typically produce deliverables (e.g., [Recommendation Track technical reports](#rec-advance), software, test suites, and reviews of the deliverables of other groups). There are additional participation requirements described in the W3C Patent Policy [\[PATENT-POLICY\]](#biblio-patent-policy).

<a href="#GroupsIG" id="ref-for-GroupsIG①④">Interest Groups</a>.  
The primary goal of an <a href="#GroupsIG" id="ref-for-GroupsIG②">Interest Group</a> is to bring together people who wish to evaluate potential Web technologies and policies. An Interest Group is a forum for the exchange of ideas.

<a href="#GroupsIG" id="ref-for-GroupsIG③">Interest Groups</a> do not publish <a href="#RecsW3C" id="ref-for-RecsW3C⑦④">Recommendation Track technical reports</a>; see information about <a href="#WGNote" id="ref-for-WGNote">maturity levels for Interest Groups</a>.

### <span class="secno">5.1. </span><span class="content"> Requirements for All Working and Interest Groups</span><a href="#ReqsAllGroups" class="self-link"></a>

Each group _must_ have a charter. Requirements for the charter depend on the group type. All group charters _must_ be public (even if other proceedings of the group are <a href="#Member-only" id="ref-for-Member-only①④">Member-only</a>).

Each group _must_ have a Chair (or co-Chairs) to coordinate the group’s tasks. The Director appoints (and re-appoints) Chairs for all groups. The Chair is a [Member representative](#member-rep), a [Team representative](#Team), or an [Invited Expert](#invited-expert-wg) (invited by the Director). The requirements of this document that apply to those types of participants apply to Chairs as well. The [role of the Chair](https://www.w3.org/Guide/chair/role.html) [\[CHAIR\]](#biblio-chair) is described in the [Art of Consensus](https://www.w3.org/Guide/) [\[GUIDE\]](#biblio-guide).

Each group _must_ have a Team Contact, who acts as the interface between the <a href="#GeneralChairs" id="ref-for-GeneralChairs①①">Chair</a>, group participants, and the rest of the Team. The [role of the Team Contact](https://www.w3.org/Guide/teamcontact/role.html) [\[TEAM-CONTACT\]](#biblio-team-contact) is described in the [Art of Consensus](https://www.w3.org/Guide/) [\[GUIDE\]](#biblio-guide). The <a href="#GeneralChairs" id="ref-for-GeneralChairs①②">Chair</a> and the <a href="#TeamContact" id="ref-for-TeamContact⑦">Team Contact</a> of a group _should not_ be the same individual.

Each group _must_ have an archived mailing list for formal group communication (e.g., for meeting announcements and minutes, documentation of decisions, and <a href="#FormalObjection" id="ref-for-FormalObjection⑥">Formal Objections</a> to decisions). It is the responsibility of the <a href="#GeneralChairs" id="ref-for-GeneralChairs①③">Chair</a> and <a href="#TeamContact" id="ref-for-TeamContact①">Team Contact</a> to ensure that new participants are subscribed to all relevant mailing lists. Refer to the list of [group mailing lists](https://www.w3.org/Member/Groups) [\[GROUP-MAIL\]](#biblio-group-mail).

A <a href="#GeneralChairs" id="ref-for-GeneralChairs①④">Chair</a> _may_ form task forces (composed of group participants) to carry out assignments for the group. The scope of these assignments _must not_ exceed the scope of the group’s charter. A group _should_ document the process it uses to create task forces (e.g., each task force might have an informal "charter"). Task forces do not publish [technical reports](#Reports); the Working Group _may_ choose to publish their results as part of a technical report.

### <span class="secno">5.2. </span><span class="content"> Working Groups and Interest Groups</span><a href="#WG-and-IG" class="self-link"></a>

Although Working Groups and Interest Groups have different purposes, they share some characteristics, and so are defined together in the following sections.

#### <span class="secno">5.2.1. </span><span class="content"> Working Group and Interest Group Participation Requirements</span><a href="#group-participation" class="self-link"></a>

There are three types of individual participants in a Working Group: [Member representatives](#member-rep), [Invited Experts](#invited-expert-wg), and [Team representatives](#Team) (including the <a href="#TeamContact" id="ref-for-TeamContact⑧">Team Contact</a>).

There are four types of individual participants in an Interest Group: the same three types as for Working Groups plus, for an Interest Group where the only [participation requirement is mailing list subscription](#ig-mail-only), public participants.

Except where noted in this document or in a group charter, all participants share the same rights and responsibilities in a group; see also the [individual participation criteria](#ParticipationCriteria).

A participant _may_ represent more than one organization in a <a href="#GroupsWG" id="ref-for-GroupsWG③">Working Group</a> or <a href="#GroupsIG" id="ref-for-GroupsIG④">Interest Group</a>. Those organizations _must_ all be members of the group.

An individual _may_ become a Working or Interest Group participant at any time during the group’s existence. See also relevant requirements in “Joining an Already Established Working Group” in the W3C Patent Policy [\[PATENT-POLICY\]](#biblio-patent-policy).

On an exceptional basis, a Working or Interest Group participant _may_ designate a substitute to attend a [meeting](#GeneralMeetings) and _should_ inform the <a href="#GeneralChairs" id="ref-for-GeneralChairs①⑤">Chair</a>. The substitute _may_ act on behalf of the participant, including for [votes](#Votes). For the substitute to vote, the participant _must_ inform the <a href="#GeneralChairs" id="ref-for-GeneralChairs①⑥">Chair</a> in writing in advance. As a courtesy to the group, if the substitute is not well-versed in the group’s discussions, the regular participant _should_ authorize another participant to act as <a href="#proxy" id="ref-for-proxy">proxy</a> for votes.

To allow rapid progress, Working Groups are intended to be small (typically fewer than 15 people) and composed of experts in the area defined by the charter. In principle, Interest Groups have no limit on the number of participants. When a Working Group grows too large to be effective, W3C _may_ split it into an Interest Group (a discussion forum) and a much smaller Working Group (a core group of highly dedicated participants).

See also the licensing obligations on Working Group participants in “Licensing Obligations” in the W3C Patent Policy [\[PATENT-POLICY\]](#biblio-patent-policy), and the patent claim exclusion process in “Exclusion From W3C RF Licensing Requirements” in the Patent Policy.

##### <span class="secno">5.2.1.1. </span><span class="content"> Member Representative in a Working Group</span><a href="#member-rep-wg" class="self-link"></a>

An individual is a Member representative in a Working Group<a href="#member-representative-in-a-working-group" class="self-link"></a> if all of the following conditions are satisfied:

- the Advisory Committee representative of the Member in question has designated the individual as a Working Group participant, and
- the individual qualifies for [Member representation](#member-rep).

To designate an individual as a Member representative in a <a href="#GroupsWG" id="ref-for-GroupsWG④">Working Group</a>, an <a href="#advisory-committee-representative" id="ref-for-advisory-committee-representative①④">Advisory Committee representative</a> _must_ provide the <a href="#GeneralChairs" id="ref-for-GeneralChairs①⑦">Chair</a> and <a href="#TeamContact" id="ref-for-TeamContact②">Team Contact</a> with all of the following <span id="member-rep-info">information</span>, in addition to any other information required by the [Call for Participation](#cfp) and charter (including the participation requirements of the W3C Patent Policy [\[PATENT-POLICY\]](#biblio-patent-policy)):

1.  The name of the W3C Member the individual represents and whether the individual is an employee of that Member organization;
2.  A statement that the individual accepts the participation terms set forth in the charter (with an indication of charter date or version);
3.  A statement that the Member will provide the necessary financial support for participation (e.g., for travel, telephone calls, and conferences).

A Member participates in a <a href="#GroupsWG" id="ref-for-GroupsWG⑤">Working Group</a> from the moment the first Member representative joins the group until either of the following occurs:

- the group closes, or
- the Member [resigns](#resignation) from the Working Group; this is done through the Member’s Advisory Committee representative.

##### <span class="secno">5.2.1.2. </span><span class="content"> Member Representative in an Interest Group</span><a href="#member-rep-ig" class="self-link"></a>

When the participation requirements exceed [Interest Group mailing list subscription](#ig-mail-only), an individual is a Member representative in an Interest Group if all of the following conditions are satisfied:

- the <a href="#advisory-committee-representative" id="ref-for-advisory-committee-representative①⑤">Advisory Committee representative</a> of the Member in question has designated the individual as an Interest Group participant, and
- the individual qualifies for [Member representation](#member-rep).

To designate an individual as a <a href="#member-representative-in-an-interest-group" id="ref-for-member-representative-in-an-interest-group">Member representative in an Interest Group</a>, the Advisory Committee representative _must_ follow the instructions in the [Call for Participation](#cfp) and charter.

Member participation in an Interest Group ceases under the same conditions as for a Working Group.

##### <span class="secno">5.2.1.3. </span><span class="content"> Invited Expert in a Working Group</span><a href="#invited-expert-wg" class="self-link"></a>

The <a href="#GeneralChairs" id="ref-for-GeneralChairs①⑧">Chair</a> _may_ invite an individual with a particular expertise to participate in a Working Group. This individual _may_ represent an organization in the group (e.g., if acting as a liaison with another organization).

An individual is an Invited Expert in a Working Group if all of the following conditions are satisfied:

- the Chair has designated the individual as a group participant,
- the Team Contact has agreed with the Chair’s choice, and
- the individual has provided the <a href="#inv-expert-info" id="ref-for-inv-expert-info①">information required of an Invited Expert</a> to the Chair and Team Contact.

To designate an individual as an Invited Expert in a Working Group, the <a href="#GeneralChairs" id="ref-for-GeneralChairs①⑨">Chair</a> _must_ inform the Team Contact and provide rationale for the choice. When the <a href="#GeneralChairs" id="ref-for-GeneralChairs②⓪">Chair</a> and the <a href="#TeamContact" id="ref-for-TeamContact③">Team Contact</a> disagree about a designation, the <a href="#def-Director" id="ref-for-def-Director⑤⓪">Director</a> determines whether the individual will be invited to participate in the Working Group.

To participate in a <a href="#GroupsWG" id="ref-for-GroupsWG⑥">Working Group</a> as an Invited Expert, an individual _must_:

- identify the organization, if any, the individual represents as a participant in this group,
- agree to the terms of the [invited expert and collaborators agreement](https://www.w3.org/Consortium/Legal/collaborators-agreement) [\[COLLABORATORS-AGREEMENT\]](#biblio-collaborators-agreement),
- accept the participation terms set forth in the charter, including the participation requirements of the W3C Patent Policy [\[PATENT-POLICY\]](#biblio-patent-policy), especially in “Note on Licensing Commitments for Invited Experts” and in “Disclosure”, indicating a specific charter date or version,
- disclose whether the individual is an employee of a W3C Member; see the [conflict of interest policy](#coi),
- provide a statement of who will provide the necessary financial support for the individual’s participation (e.g., for travel, telephone calls, and conferences), and
- if the individual’s employer (including a self-employed individual) or the organization the individual represents is not a W3C Member, indicate whether that organization intends to join W3C. If the organization does not intend to join W3C, indicate reasons the individual is aware of for this choice.

The <a href="#GeneralChairs" id="ref-for-GeneralChairs②①">Chair</a> _should not_ designate as an <a href="#invited-expert-in-a-working-group" id="ref-for-invited-expert-in-a-working-group">Invited Expert in a Working Group</a> an individual who is an employee of a W3C Member. The Chair _must not_ use Invited Expert status to circumvent participation limits imposed by the [charter](#WGCharter).

An Invited Expert participates in a Working Group from the moment the individual joins the group until any of the following occurs:

- the group closes, or
- the Chair or Director withdraws the invitation to participate, or
- the individual [resigns](#resignation).

##### <span class="secno">5.2.1.4. </span><span class="content"> Invited Expert in an Interest Group</span><a href="#invited-expert-ig" class="self-link"></a>

When the participation requirements exceed [Interest Group mailing list subscription](#ig-mail-only), the participation requirements for an Invited Expert in an Interest Group<a href="#invited-expert-in-an-interest-group" class="self-link"></a> are the same as those for an <a href="#invited-expert-in-a-working-group" id="ref-for-invited-expert-in-a-working-group①">Invited Expert in a Working Group</a>.

##### <span class="secno">5.2.1.5. </span><span class="content"> Team Representative in a Working Group</span><a href="#team-rep-wg" class="self-link"></a>

An individual is a Team representative in a Working Group<a href="#team-representative-in-a-working-group" class="self-link"></a> when so designated by W3C management.

A Team representative participates in a Working Group from the moment the individual joins the group until any of the following occurs:

- the group closes, or
- W3C management changes Team representation by sending email to the Chair, copying the group mailing list.

The Team participates in a Working Group from the moment the Director announces the creation of the group until the group closes.

##### <span class="secno">5.2.1.6. </span><span class="content"> Team Representative in an Interest Group</span><a href="#team-rep-ig" class="self-link"></a>

When the participation requirements exceed [Interest Group mailing list subscription](#ig-mail-only), an individual is a Team representative in an Interest Group<a href="#team-representative-in-an-interest-group" class="self-link"></a> when so designated by W3C management.

#### <span class="secno">5.2.2. </span><span class="content"> Working Group and Interest Group Charter Development</span><a href="#WGCharterDevelopment" class="self-link"></a>

W3C creates a charter based on interest from the Members and Team. The Team _must_ notify the Advisory Committee when a charter for a new Working Group or Interest Group is in development. This is intended to raise awareness, even if no formal proposal is yet available. Advisory Committee representatives _may_ provide feedback on the [Advisory Committee discussion list](#ACCommunication).

W3C _may_ begin work on a Working Group or Interest Group charter at any time.

#### <span class="secno">5.2.3. </span><span class="content"> Advisory Committee Review of a Working Group or Interest Group Charter</span><a href="#CharterReview" class="self-link"></a>

The Director _must_ solicit [Advisory Committee review](#ACReview) of every new or substantively modified Working Group or Interest Group charter, except for either:

- a charter extension

- substantive changes to a charter that do not affect the way the group functions in any significant way.

The review period _must_ be at least 28 days. The following are examples of substantive changes that would not require an <a href="#advisory-committee-review" id="ref-for-advisory-committee-review">Advisory Committee Review</a>: the addition of an in-scope deliverable, a change of <a href="#TeamContact" id="ref-for-TeamContact④">Team Contact</a>, or a change of <a href="#GeneralChairs" id="ref-for-GeneralChairs②②">Chair</a>. Such changes must nonetheless be announced to the <a href="#advisory-committee" id="ref-for-advisory-committee⑦">Advisory Committee</a> and to <a href="#wgparticipant" id="ref-for-wgparticipant①">participants in the Working</a> or <a href="#igparticipant" id="ref-for-igparticipant①">in the Interest Group</a>, and a rationale must be provided.

The Director’s Call for Review of a substantively modified charter _must_ highlight important changes (e.g., regarding deliverables or resource allocation) and include rationale for the changes.

As part of the Advisory Committee review of any new or substantively modified Working Group charter, any Advisory Committee representative _may_ request an extended review period.

Such a request must be submitted with a Member’s comments in response to the Call for Review. Upon receipt of any such request, the Director _must_ ensure that the Call for Participation for the Working Group occurs at least 60 days after the Call for Review of the charter.

#### <span class="secno">5.2.4. </span><span class="content"> Call for Participation in a Working Group or Interest Group</span><a href="#cfp" class="self-link"></a>

After <a href="#advisory-committee-review" id="ref-for-advisory-committee-review①">Advisory Committee review</a> of a <a href="#GroupsWG" id="ref-for-GroupsWG⑦">Working Group</a> or <a href="#GroupsIG" id="ref-for-GroupsIG⑤">Interest Group</a> <a href="#charter" id="ref-for-charter">charter</a>, the Director _may_ issue a Call for Participation to the Advisory Committee. Charters _may_ be amended based on review comments before the Director issues a Call for Participation.

For a new group, this announcement officially creates the group. The announcement _must_ include a reference to the [charter](#WGCharter), the name(s) of the group’s <a href="#GeneralChairs" id="ref-for-GeneralChairs②③">Chair</a>(s), and the name(s) of the <a href="#TeamContact" id="ref-for-TeamContact⑤">Team Contact</a>(s).

After a Call for Participation, any [Member representatives](#member-rep) and [Invited Experts](#invited-expert-wg) _must_ be designated (or re-designated).

Advisory Committee representatives _may_ initiate an [Advisory Committee Appeal](#ACAppeal) against a Director’s decision to create or substantially modify a Working Group or Interest Group charter.

#### <span class="secno">5.2.5. </span><span class="content"> Working Group and Interest Group Charter Extension</span><a href="#charter-extension" class="self-link"></a>

To extend a Working Group or Interest Group charter with no other substantive modifications, the Director announces the extension to the Advisory Committee. The announcement _must_ indicate the new duration. The announcement _must_ also include rationale for the extension, a reference to the [charter](#WGCharter), the name(s) of the group’s <a href="#GeneralChairs" id="ref-for-GeneralChairs②④">Chair</a>(s), the name of the <a href="#TeamContact" id="ref-for-TeamContact⑥">Team Contact</a>, and instructions for joining the group.

After a charter extension, Advisory Committee representatives and the <a href="#GeneralChairs" id="ref-for-GeneralChairs②⑤">Chair</a> are _not required_ to re-designate [Member representatives](#member-rep) and [Invited Experts](#invited-expert-wg).

Advisory Committee representatives _may_ initiate an [Advisory Committee Appeal](#ACAppeal) against a Director’s decision regarding the extension of a Working Group or Interest Group charter.

#### <span class="secno">5.2.6. </span><span class="content"> Working Group and Interest Group Charters</span><a href="#WGCharter" class="self-link"></a>

A Working Group or Interest Group charter _must_ include all of the following information.

- The group’s mission (e.g., develop a technology or process, review the work of other groups);
- The scope of the group’s work and criteria for success;
- The duration of the group (typically from six months to two years);
- The nature of any deliverables (technical reports, reviews of the deliverables of other groups, or software);
- Expected milestone dates where available.

  Note: A charter is _not required_ to include schedules for review of other group’s deliverables;

- The process for the group to approve the release of deliverables (including intermediate results);
- Any dependencies by groups within or outside of W3C on the deliverables of this group. For any dependencies, the charter _must_ specify the mechanisms for communication about the deliverables;
- Any dependencies of this group on other groups within or outside of W3C. Such dependencies include interactions with [W3C Horizontal Groups](https://www.w3.org/Guide/process/charter.html#horizontal-review) [\[CHARTER\]](#biblio-charter);
- The [level of confidentiality](#confidentiality-levels) of the group’s proceedings and deliverables;
- Meeting mechanisms and expected frequency;
- If known, the date of the first <a href="#ftf-meeting" id="ref-for-ftf-meeting②">face-to-face meeting</a>. The date of the first face-to-face meeting of a proposed group _must not_ be sooner than <span class="time-interval">eight weeks</span> after the date of the proposal.
- Communication mechanisms to be employed within the group, between the group and the rest of W3C, and with the general public;
- Any voting procedures or requirements other than those specified in [§ 3.4 Votes](#Votes);
- An estimate of the expected time commitment from participants;
- The expected time commitment and level of involvement by the Team (e.g., to track developments, write and edit technical reports, develop code, or organize pilot experiments).
- Intellectual property information. What are the intellectual property (including patents and copyright) considerations affecting the success of the Group? In particular, is there any reason to believe that it will be difficult to meet the Royalty-Free licensing goals in “Licensing Goals for W3C Specifications” in the W3C Patent Policy [\[PATENT-POLICY\]](#biblio-patent-policy)?

See also the charter requirements in “Licensing Goals for W3C Specifications” in the W3C Patent Policy [\[PATENT-POLICY\]](#biblio-patent-policy).

For every Recommendation Track deliverable that continues work on <a href="#technical-report" id="ref-for-technical-report">technical report</a> published under any other Charter (including a predecessor group of the same name), for which there is at least an existing <a href="#fpwd" id="ref-for-fpwd">First Public Working Draft</a> the description of that deliverable in the proposed charter of the adopting Working Group _must_ provide the following information:

- The title, stable URL, and publication date of the <a href="#RecsWD" id="ref-for-RecsWD">Working Draft</a> or other Recommendation-track document that will serve as the basis for work on the deliverable (labeled “Adopted Draft”);
- The title, stable URL, and publication date of the document that was used as the basis for its most recent Exclusion Opportunity as per the W3C Patent Policy [\[PATENT-POLICY\]](#biblio-patent-policy). (labeled “Exclusion Draft”); and
- The stable URL of the Working Group charter under which the Exclusion Draft was published (labeled the “Other Charter<a href="#other-charter" class="self-link"></a>”).

All of the above data _must_ be identified in the adopting Working Group’s charter using the labels indicated.

The <a href="#adopted-draft" id="ref-for-adopted-draft">Adopted Draft</a> and the <a href="#exclusion-draft" id="ref-for-exclusion-draft">Exclusion Draft</a> _must_ each be adopted in their entirety and without any modification. The proposed charter _must_ state the dates on which the Exclusion Opportunity that arose on publishing the <a href="#exclusion-draft" id="ref-for-exclusion-draft①">Exclusion Draft</a> began and ended. As per “Joining an Already Established Working Group” in the W3C Patent Policy [\[PATENT-POLICY\]](#biblio-patent-policy), this potentially means that exclusions can only be made immediately on joining a Working Group.

An Interest Group charter _may_ include provisions regarding participation, including specifying that the <span id="ig-mail-only">only requirement for participation (by anyone) in the Interest Group is subscription to the Interest Group mailing list</span>. This type of Interest Group _may_ have <a href="#public-participant-ig" id="ref-for-public-participant-ig">public participants</a>.

A charter _may_ include provisions other than those required by this document. The charter _should_ highlight whether additional provisions impose constraints beyond those of the W3C Process Document (e.g., limits on the number of individuals in a Working Group who represent the same Member organization or group of [related Members](#MemberRelated)).

#### <span class="secno">5.2.7. </span><span class="content"> Working Group and Interest Group Closure</span><a href="#GeneralTermination" class="self-link"></a>

A <a href="#GroupsWG" id="ref-for-GroupsWG⑧">Working Group</a> or <a href="#GroupsIG" id="ref-for-GroupsIG⑥">Interest Group</a> charter specifies a duration for the group. The <a href="#def-Director" id="ref-for-def-Director⑧">Director</a> _may_ decide to close a group prior to the date specified in the charter in any of the following circumstances:

- There are insufficient resources to produce chartered deliverables or to maintain the group, according to priorities established within W3C.
- The group produces chartered deliverables ahead of schedule.

The <a href="#def-Director" id="ref-for-def-Director⑨">Director</a> closes a <a href="#GroupsWG" id="ref-for-GroupsWG⑨">Working Group</a> or <a href="#GroupsIG" id="ref-for-GroupsIG⑦">Interest Group</a> by announcement to the <a href="#advisory-committee" id="ref-for-advisory-committee⑧">Advisory Committee</a>. <a href="#advisory-committee-representative" id="ref-for-advisory-committee-representative①⑥">Advisory Committee representatives</a> _may_ initiate an [Advisory Committee Appeal](#ACAppeal).

Closing a Working Group has implications with respect to the W3C Patent Policy [\[PATENT-POLICY\]](#biblio-patent-policy).

## <span class="secno">6. </span><span class="content"> W3C Technical Report Development Process</span><a href="#Reports" class="self-link"></a>

The W3C technical report development process is the set of steps and requirements followed by W3C <a href="#GroupsWG" id="ref-for-GroupsWG①⓪">Working Groups</a> to standardize Web technology. The W3C technical report development process is designed to:

- support multiple specification development methodologies
- maximize <a href="#def-Consensus" id="ref-for-def-Consensus③">consensus</a> about the content of stable technical reports
- ensure high technical and editorial quality
- promote consistency among specifications
- facilitate royalty-free, interoperable implementations of Web Standards, and
- earn endorsement by W3C and the broader community.

See also “licensing goals for W3C Specifications” in the W3C Patent Policy [\[PATENT-POLICY\]](#biblio-patent-policy).

### <span class="secno">6.1. </span><span class="content"> W3C Technical Reports</span><a href="#rec-advance" class="self-link"></a>

Publishing as used in this document refers to producing a version which is listed as a W3C Technical Report on its [Technical Reports page https://www.w3.org/TR](https://www.w3.org/TR/) [\[TR\]](#biblio-tr).

This chapter describes the formal requirements for <a href="#publishing" id="ref-for-publishing">publishing</a> and maintaining a <a href="#RecsW3C" id="ref-for-RecsW3C①">W3C Recommendation</a> or <a href="#WGNote" id="ref-for-WGNote①⑥">Note</a>.

Recommendations  
<a href="#GroupsWG" id="ref-for-GroupsWG①①">Working Groups</a> develop technical reports on the <a href="#w3c-recommendation-track" id="ref-for-w3c-recommendation-track">W3C Recommendation Track</a> in order to produce normative specifications or guidelines as standards for the Web. The <a href="#w3c-recommendation-track" id="ref-for-w3c-recommendation-track①">Recommendation Track</a> process incorporates requirements for <a href="#dfn-wide-review" id="ref-for-dfn-wide-review">wide review</a>, <a href="#adequate-implementation" id="ref-for-adequate-implementation">adequate implementation experience</a>, and <a href="#def-Consensus" id="ref-for-def-Consensus④">consensus</a>-building, and is subject to the W3C Patent Policy [\[PATENT-POLICY\]](#biblio-patent-policy) which grants Royalty-Free IPR licenses to implementations. See [§ 6.2 The W3C Recommendation Track](#rec-track) for details.

Notes  
Groups can also publish documents as <a href="#WGNote" id="ref-for-WGNote①">W3C Notes</a>, typically either to document information other than technical specifications, such as use cases motivating a specification and best practices for its use, or to clarify the status of work that is abandoned. See [§ 6.3 Working Group and Interest Group Notes](#Note) for details.

Individual <a href="#GroupsWG" id="ref-for-GroupsWG①②">Working Groups</a> and <a href="#GroupsIG" id="ref-for-GroupsIG⑧">Interest Groups</a> _should_ adopt additional processes for developing publications, so long as they do not conflict with the requirements in this chapter.

#### <span class="secno">6.1.1. </span><span class="content"> General requirements for Technical Reports</span><a href="#general-requirements" class="self-link"></a>

Every document published as part of the technical report development process _must_ be a public document. The [index of W3C technical reports](https://www.w3.org/TR/) [\[TR\]](#biblio-tr) is available at the W3C Web site. W3C strives to make archival documents indefinitely available at their original address in their original form.

Every document published as part of the technical report development process _must_ clearly indicate its [maturity level](#maturity-levels), and _must_ include information about the status of the document. This status information:

- _must_ be unique each time a specification is <a href="#publishing" id="ref-for-publishing①">published</a>,
- _must_ state which <a href="#GroupsWG" id="ref-for-GroupsWG①③">Working Group</a> developed the specification,
- _must_ state how to send comments or file bugs, and where these are recorded,
- _must_ include expectations about next steps,
- _should_ explain how the technology relates to existing international standards and related work inside or outside W3C, and
- _should_ explain or link to an explanation of significant changes from the previous version.

Every Technical Report published as part of the Technical Report development process is edited by one or more editors appointed by a Group <a href="#GeneralChairs" id="ref-for-GeneralChairs②⑥">Chair</a>. It is the responsibility of these editors to ensure that the decisions of the Group are correctly reflected in subsequent drafts of the technical report. An editor _must_ be a participant, per [§ 5.2.1 Working Group and Interest Group Participation Requirements](#group-participation) in the Group responsible for the document(s) they are editing.

The Team is _not required_ to publish a <a href="#technical-report" id="ref-for-technical-report①">Technical Report</a> that does not conform to the Team’s [Publication Rules](https://www.w3.org/pubrules/) [\[PUBRULES\]](#biblio-pubrules) (e.g., for <span id="DocumentName">naming</span>, status information, style, and <span id="document-copyright">copyright requirements</span>). These rules are subject to change by the Team from time to time. The Team _must_ inform group <a href="#GeneralChairs" id="ref-for-GeneralChairs②⑦">Chairs</a> and the <a href="#advisory-committee" id="ref-for-advisory-committee⑨">Advisory Committee</a> of any changes to these rules.

The primary language for W3C <a href="#technical-report" id="ref-for-technical-report②">Technical Reports</a> is English. W3C encourages the translation of its <a href="#technical-report" id="ref-for-technical-report③">Technical Reports</a>. [Information about translations of W3C technical reports](https://www.w3.org/Consortium/Translation/) [\[TRANSLATION\]](#biblio-translation) is available at the W3C Web site.

#### <span class="secno">6.1.2. </span><span class="content"> Reviews and Review Responsibilities</span><a href="#doc-reviews" class="self-link"></a>

A document is available for review from the moment it is first <a href="#publishing" id="ref-for-publishing②">published</a>. Working Groups _should_ <a href="#formally-addressed" id="ref-for-formally-addressed">formally address</a> _any_ substantive review comment about a technical report in a timely manner.

Reviewers _should_ send substantive technical reviews as early as possible. <a href="#GroupsWG" id="ref-for-GroupsWG①④">Working Groups</a> are often reluctant to make <a href="#substantive-change" id="ref-for-substantive-change">substantive changes</a> to a mature document, particularly if this would cause significant compatibility problems due to existing implementation. <a href="#GroupsWG" id="ref-for-GroupsWG①⑤">Working Groups</a> _should_ record substantive or interesting proposals raised by reviews but not incorporated into a current specification.

##### <span class="secno">6.1.2.1. </span><span class="content"> Wide Review</span><a href="#wide-review" class="self-link"></a>

The requirements for wide review are not precisely defined by the W3C Process. The objective is to ensure that the entire set of stakeholders of the Web community, including the general public, have had adequate notice of the progress of the <a href="#GroupsWG" id="ref-for-GroupsWG①⑥">Working Group</a> (for example through notices posted to [public-review-announce@w3.org](https://lists.w3.org/Archives/Public/public-review-announce/)) and were able to actually perform reviews of and provide comments on the specification. A second objective is to encourage groups to request reviews early enough that comments and suggested changes can still be reasonably incorporated in response to the review. Before approving transitions, the <a href="#def-Director" id="ref-for-def-Director①⓪">Director</a> will consider who has been explicitly offered a reasonable opportunity to review the document, who has provided comments, the record of requests to and responses from reviewers, especially [W3C Horizontal Groups](https://www.w3.org/Guide/process/charter.html#horizontal-review) [\[CHARTER\]](#biblio-charter) and groups identified as dependencies in the charter or identified as [liaisons](https://www.w3.org/2001/11/StdLiaison.html) [\[LIAISON\]](#biblio-liaison), and seek evidence of clear communication to the general public about appropriate times and which content to review and whether such reviews actually occurred.

For example, inviting review of new or significantly revised sections published in Working Drafts, and tracking those comments and the <a href="#GroupsWG" id="ref-for-GroupsWG①⑦">Working Group</a>'s responses, is generally a good practice which would often be considered positive evidence of wide review. <a href="#GroupsWG" id="ref-for-GroupsWG①⑧">Working Groups</a> _should_ announce to other W3C Working Groups as well as the general public, especially those affected by this specification, a proposal to enter <a href="#RecsCR" id="ref-for-RecsCR">Candidate Recommendation</a> (for example in approximately 28 days). By contrast a generic statement in a document requesting review at any time is likely not to be considered as sufficient evidence that the group has solicited wide review.

A <a href="#GroupsWG" id="ref-for-GroupsWG①⑨">Working Group</a> could present evidence that wide review has been received, irrespective of solicitation. But it is important to note that receiving many detailed reviews is not necessarily the same as wide review, since they might only represent comment from a small segment of the relevant stakeholder community.

#### <span class="secno">6.1.3. </span><span class="content"> Classes of Changes</span><a href="#correction-classes" class="self-link"></a>

This document distinguishes the following 4 classes of changes to a specification. The first two classes of change are considered editorial changes, the latter two substantive changes.

1.  No changes to text content

These changes include fixing broken links, style sheets or invalid markup.

1.  Corrections that do not affect conformance

Changes that reasonable implementers would not interpret as changing architectural or interoperability requirements or their implementation. Changes which resolve ambiguities in the specification are considered to change (by clarification) the implementation requirements and do not fall into this class.

Examples of changes in this class include correcting non-normative code examples where the code clearly conflicts with normative requirements, clarifying informative use cases or other non-normative text, fixing typos or grammatical errors where the change does not change implementation requirements. If there is any doubt or disagreement as to whether requirements are changed, such changes do not fall into this class.

1.  Corrections that do not add new features

These changes _may_ affect conformance to the specification. A change that affects conformance is one that:

- makes conforming data, processors, or other conforming agents become non-conforming according to the new version, or
- makes non-conforming data, processors, or other agents become conforming, or
- clears up an ambiguity or under-specified part of the specification in such a way that data, a processor, or an agent whose conformance was once unclear becomes clearly either conforming or non-conforming.

1.  New features

Changes that add a new functionality, element, etc.

#### <span class="secno">6.1.4. </span><span class="content"> Errata Management</span><a href="#errata" class="self-link"></a>

Tracking errors is an important part of a <a href="#GroupsWG" id="ref-for-GroupsWG②⓪">Working Group</a>'s ongoing care of a <a href="#technical-report" id="ref-for-technical-report④">technical report</a>; for this reason, the scope of a <a href="#GroupsWG" id="ref-for-GroupsWG②①">Working Group</a> charter generally allows time for work after publication of a <a href="#RecsW3C" id="ref-for-RecsW3C②">Recommendation</a>. In this Process Document, the term “erratum” (plural “errata”) refers to any error that can be resolved by one or more changes in classes 1-3 of section [§ 6.1.3 Classes of Changes](#correction-classes).

<a href="#GroupsWG" id="ref-for-GroupsWG②②">Working Groups</a> _must_ keep a public record of errors that are reported by readers and implementers for <a href="#RecsW3C" id="ref-for-RecsW3C③">Recommendations</a>. Such error reports _should_ be compiled no less frequently than quarterly.

<a href="#GroupsWG" id="ref-for-GroupsWG②③">Working Groups</a> decide how to document errata. Such documentation _must_ identify the affected <a href="#technical-report" id="ref-for-technical-report⑤">technical report</a> text and describe the error; it _may_ also describe some possible solution(s). Readers of the <a href="#technical-report" id="ref-for-technical-report⑥">technical report</a> _should_ be able easily to find and see the errata that apply to that specific <a href="#technical-report" id="ref-for-technical-report⑦">technical report</a> with their associated tests. Errata _may_ be documented in a separate errata page or tracking system. They _may_, in addition or alternatively, be annotated inline alongside the affected <a href="#technical-report" id="ref-for-technical-report⑧">technical report</a> text or at the start or end of the most relevant section(s).

#### <span class="secno">6.1.5. </span><span class="content"> Candidate Changes</span><a href="#candidate-changes" class="self-link"></a>

An <a href="#erratum" id="ref-for-erratum">erratum</a> _may_ be accompanied by an informative, candidate correction approved by the consensus of the <a href="#GroupsWG" id="ref-for-GroupsWG②④">Working Group</a>. When annotated inline, errata—including their <a href="#candidate-correction" id="ref-for-candidate-correction">candidate corrections</a>—must be marked as such, are treated as [class 2 changes](#correction-classes), and are published accordingly.

Note: Annotating changes in this way allows more mature documents such as <a href="#RecsW3C" id="ref-for-RecsW3C④">Recommendations</a> and <a href="#RecsCR" id="ref-for-RecsCR①">Candidate Recommendations</a> to be updated quickly with the Working Group’s most current thinking, even when the <a href="#candidate-change" id="ref-for-candidate-change">candidate changes</a> have not yet received sufficient review or implementation experience to be normatively incorporated into the specification proper.

A candidate addition is similar to a <a href="#candidate-correction" id="ref-for-candidate-correction①">candidate correction</a>, except that it proposes a new feature rather than an error correction.

<a href="#candidate-correction" id="ref-for-candidate-correction②">Candidate corrections</a> and <a href="#candidate-addition" id="ref-for-candidate-addition">candidate additions</a> are collectively known as candidate changes.

In addition to their actual [maturity level](#maturity-levels), <a href="#publishing" id="ref-for-publishing③">published</a> <a href="#w3c-recommendation-track" id="ref-for-w3c-recommendation-track②">REC Track</a> documents with <a href="#candidate-change" id="ref-for-candidate-change①">candidate changes</a> are also considered, for the purpose of the W3C Patent Policy [\[PATENT-POLICY\]](#biblio-patent-policy), to be <a href="#RecsWD" id="ref-for-RecsWD①">Working Drafts</a> with those <a href="#candidate-change" id="ref-for-candidate-change②">candidate changes</a> treated as normative.

#### <span class="secno">6.1.6. </span><span class="content"> License Grants from Non-Participants</span><a href="#contributor-license" class="self-link"></a>

When a party who is not already obligated under the Patent Policy offers a change in class 3 or 4 (as described in [§ 6.1.3 Classes of Changes](#correction-classes)) to a technical report under this process the <a href="#team" id="ref-for-team②④">Team</a> _must_ request a recorded royalty-free patent commitment; for a change in class 4, the Team _must_ secure such commitment. Such commitment _should_ cover, at a minimum, all the party’s Essential Claims both in the contribution, and that become Essential Claims as a result of incorporating the contribution into the draft that existed at the time of the contribution, on the terms specified in the “W3C Royalty-Free (RF) Licensing Requirements” section of the W3C Patent Policy [\[PATENT-POLICY\]](#biblio-patent-policy).

### <span class="secno">6.2. </span><span class="content"> The W3C Recommendation Track</span><span id="recs-and-notes"></span><a href="#rec-track" class="self-link"></a>

When advancing a technical report to Recommendation, typically a series of <a href="#RecsWD" id="ref-for-RecsWD②">Working Drafts</a> are <a href="#publishing" id="ref-for-publishing④">published</a>, each of which refines a document under development to complete the scope of work envisioned by a <a href="#GroupsWG" id="ref-for-GroupsWG②⑤">Working Group</a>'s <a href="#charter" id="ref-for-charter①">charter</a>. For a technical specification, once review suggests the Working Group has met their requirements satisfactorily for a new standard, there is a <a href="#RecsCR" id="ref-for-RecsCR②">Candidate Recommendation</a> phase. This allows the entire W3C membership to provide feedback on the specification, while the <a href="#GroupsWG" id="ref-for-GroupsWG②⑥">Working Group</a> formally collects [implementation experience](implementation-experience) to demonstrate that the specification works in practice. The next phase is a <a href="#RecsPR" id="ref-for-RecsPR①④">Proposed Recommendation</a>, to finalize the review of W3C Members. If the Director determines that W3C Member review supports a specification becoming a standard, W3C publishes it as a <a href="#RecsW3C" id="ref-for-RecsW3C⑤">Recommendation</a>.

In summary, the W3C Recommendation Track consists of:

1.  Publication of the <a href="#fpwd" id="ref-for-fpwd①">First Public Working Draft</a>.
2.  Publication of zero or more revised <a href="#RecsWD" id="ref-for-RecsWD③">Working Drafts</a>.
3.  Publication of one or more <a href="#RecsCR" id="ref-for-RecsCR③">Candidate Recommendations</a>.
4.  Publication of a <a href="#RecsPR" id="ref-for-RecsPR①">Proposed Recommendation</a>.
5.  Publication as a <a href="#RecsW3C" id="ref-for-RecsW3C⑥">W3C Recommendation</a>.
6.  Possibly, publication as an <a href="#rec-amended" id="ref-for-rec-amended">Amended Recommendation</a>.

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

CR [](#crd-1)

Candidate Recommendation Draft (CRD)

CRD [](#crd-1)

Publish revised Candidate Recommendation Draft

WG Decision [](#crd-1)

Publish revised Candidate Recommendation Draft

WG Decision [](#cr-1)

Publish revised Candidate Recommendation

WG Decision + Director’s approval [](#cr-1)

Publish revised Candidate Recommendation

WG Decision Director’s approval [](#pr-1)

Advance to Proposed Recommendation

Director's approval [](#wd-1)

Return to Working Draft

WG or Director decision e.g. for further review [](#rec-1)

Proposed Recommendation (PR) - Advisory Committee review

PR [](#rec-1)

Advance to Recommendation

Advisory Committee Review Director's Decision [](#cr-1)

Return to Candidate Recommendation

AC Review, Director Decision e.g. for editorial changes [](#wd-1)

Return to Working Draft

Advisory Committee review and Director's Decision, e.g. for further work and review

Recommendation (Rec)

REC

This Process defines certain <a href="#w3c-recommendation-track" id="ref-for-w3c-recommendation-track③">Recommendation Track</a> publications as Patent Review Drafts. Under the 2004 (updated in 2017) Patent Policy, these correspond to “Last Call Working Draft” in the Patent Policy [\[PATENT-POLICY-2017\]](#biblio-patent-policy-2017); Under the 2020 Patent Policy, these correspond to “Patent Review Draft” in the Patent Policy [\[PATENT-POLICY\]](#biblio-patent-policy).

W3C _may_ [end work on a technical report](#tr-end) at any time.

The Director _may_ decline a request to advance in maturity level, requiring a <a href="#GroupsWG" id="ref-for-GroupsWG②⑦">Working Group</a> to conduct further work, and _may_ require the specification to return to a lower [maturity level](#maturity-levels). The Director _must_ inform the [Advisory Committee](#AC) and <a href="#GroupsWG" id="ref-for-GroupsWG②⑧">Working Group</a> <a href="#GeneralChairs" id="ref-for-GeneralChairs②⑧">Chairs</a> when a <a href="#GroupsWG" id="ref-for-GroupsWG②⑨">Working Group</a>'s request for a specification to advance in maturity level is declined and the specification is returned to a <a href="#GroupsWG" id="ref-for-GroupsWG③⓪">Working Group</a> for further work.

#### <span class="secno">6.2.1. </span><span class="content"> Maturity Levels on the Recommendation Track</span><a href="#maturity-levels" class="self-link"></a>

Working Draft (WD)  
A Working Draft is a document that W3C has <a href="#publishing" id="ref-for-publishing⑤">published</a> on the [W3C’s Technical Reports page](https://www.w3.org/TR/) [\[TR\]](#biblio-tr) for review by the community (including W3C Members), the public, and other technical organizations, and for simple historical reference. Some, but not all, Working Drafts are meant to advance to <a href="#RecsW3C" id="ref-for-RecsW3C⑦">Recommendation</a>; see the [document status section](#DocumentStatus) of a Working Draft for the group’s expectations. <a href="#RecsWD" id="ref-for-RecsWD④">Working Drafts</a> do not necessarily represent a <a href="#def-Consensus" id="ref-for-def-Consensus⑤">consensus</a> of the <a href="#GroupsWG" id="ref-for-GroupsWG③①">Working Group</a> with respect to their content, and do not imply any endorsement by W3C or its members beyond agreement to work on a general area of technology. Nevertheless the <a href="#GroupsWG" id="ref-for-GroupsWG③②">Working Group</a> decided to adopt the <a href="#RecsWD" id="ref-for-RecsWD⑤">Working Draft</a> as the basis for their work at the time of adoption. A <a href="#RecsWD" id="ref-for-RecsWD⑥">Working Draft</a> is suitable for gathering <a href="#dfn-wide-review" id="ref-for-dfn-wide-review①">wide review</a> prior to advancing to the next stage of maturity.

For all Working Drafts a Working Group:

- _should_ document outstanding issues, and parts of the document on which the Working Group does not have consensus, and
- _may_ request publication of a Working Draft even if its content is considered unstable and does not meet all Working Group requirements.

The first Working Draft of a technical report is called the First Public Working Draft (FPWD), and has patent implications as defined in the W3C Patent Policy [\[PATENT-POLICY\]](#biblio-patent-policy).

Candidate Recommendation (CR)  
A Candidate Recommendation is a document that satisfies the technical requirements of the Working Group that produced it and their dependencies, or makes substantive corrections to a <a href="#RecsW3C" id="ref-for-RecsW3C⑧">Recommendation</a> that is not maintained by a <a href="#GroupsWG" id="ref-for-GroupsWG③③">Working Group</a>, and has already received wide review. W3C publishes a Candidate Recommendation to

- signal to the wider community that it is time to do a final review
- gather [implementation experience](#implementation-experience)

Note: Advancing to <a href="#RecsCR" id="ref-for-RecsCR④">Candidate Recommendation</a> indicates that the document is considered complete and fit for purpose, and that no further refinement to the text is expected without additional implementation experience and testing; additional features in a later revision may however be expected. A <a href="#RecsCR" id="ref-for-RecsCR⑤">Candidate Recommendation</a> is expected to be as well-written, detailed, self-consistent, and technically complete as a <a href="#RecsW3C" id="ref-for-RecsW3C⑨">Recommendation</a>, and acceptable as such if and when the requirements for further advancement are met.

Candidate Recommendation publications take one of two forms:

Candidate Recommendation Snapshot  
A Candidate Recommendation Snapshot corresponds to a <a href="#patent-review-drafts" id="ref-for-patent-review-drafts">Patent Review Draft</a> as used in the W3C Patent Policy [\[PATENT-POLICY\]](#biblio-patent-policy). Publishing a <a href="#patent-review-drafts" id="ref-for-patent-review-drafts①">Patent Review Draft</a> triggers a Call for Exclusions, per “Exclusion From W3C RF Licensing Requirements” in the W3C Patent Policy.

Publication as a <a href="#candidate-recommendation-snapshot" id="ref-for-candidate-recommendation-snapshot">Candidate Recommendation Snapshot</a> requires approval of either a <a href="#trans-req" id="ref-for-trans-req">Transition Request</a> (for the first <a href="#RecsCR" id="ref-for-RecsCR⑥">Candidate Recommendation</a> publication from another maturity level) or an <a href="#update-requests" id="ref-for-update-requests">Update Request</a> (for subsequent <a href="#candidate-recommendation-snapshot" id="ref-for-candidate-recommendation-snapshot①">Candidate Recommendation Snapshots</a>).

Candidate Recommendation Draft  
A Candidate Recommendation Draft is published on the [W3C’s Technical Reports page](https://www.w3.org/TR/) [\[TR\]](#biblio-tr) to integrate changes from the previous <a href="#candidate-recommendation-snapshot" id="ref-for-candidate-recommendation-snapshot②">Candidate Recommendation Snapshot</a> that the Working Group intends to include in a subsequent <a href="#candidate-recommendation-snapshot" id="ref-for-candidate-recommendation-snapshot③">Candidate Recommendation Snapshot</a>. This allows for wider review of the changes and for ease of reference to the integrated specification.

Any changes published directly into a <a href="#candidate-recommendation-draft" id="ref-for-candidate-recommendation-draft">Candidate Recommendation Draft</a> should be at the same level of quality as a <a href="#candidate-recommendation-snapshot" id="ref-for-candidate-recommendation-snapshot④">Candidate Recommendation Snapshot</a>. However, the process requirements are minimized so that the Working Group can easily keep the specification up to date.

A <a href="#candidate-recommendation-draft" id="ref-for-candidate-recommendation-draft①">Candidate Recommendation Draft</a> _does not_ provide an exclusion opportunity instead, it is considered a <a href="#RecsWD" id="ref-for-RecsWD⑦">Working Draft</a> for the purpose of the [W3C Patent Policy](https://www.w3.org/Consortium/Patent-Policy) [\[PATENT-POLICY\]](#biblio-patent-policy).

A Rescinded Candidate Recommendation is a <a href="#RecsCR" id="ref-for-RecsCR⑦">Candidate Recommendation</a> in which significant problems have been discovered such that W3C cannot endorse it or continue work on it, for example due to burdensome patent claims that affect implementers and cannot be resolved (see the W3C Patent Policy [\[PATENT-POLICY\]](#biblio-patent-policy) and in particular “PAG Conclusion”). There is no path to restoration for a <a href="#rescinded-candidate-recommendation" id="ref-for-rescinded-candidate-recommendation">Rescinded Candidate Recommendation</a>. See “W3C Royalty-Free (RF) Licensing Requirements” in the W3C Patent Policy [\[PATENT-POLICY\]](#biblio-patent-policy) for implication on patent licensing obligations.

Proposed Recommendation (PR)  
A Proposed Recommendation is a document that has been accepted by the W3C as of sufficient quality to become a <a href="#RecsW3C" id="ref-for-RecsW3C①⓪">W3C Recommendation</a>. This phase triggers formal review by the <a href="#advisory-committee" id="ref-for-advisory-committee①⓪">Advisory Committee</a>, who _may_ recommend that the document be <a href="#publishing" id="ref-for-publishing⑥">published</a> as a <a href="#RecsW3C" id="ref-for-RecsW3C①①">W3C Recommendation</a>, returned to the <a href="#GroupsWG" id="ref-for-GroupsWG③④">Working Group</a> for further work, or abandoned. <a href="#substantive-change" id="ref-for-substantive-change①">Substantive changes</a> _must not_ be made to a <a href="#RecsPR" id="ref-for-RecsPR②">Proposed Recommendation</a> except by <a href="#publishing" id="ref-for-publishing⑦">publishing</a> a new <a href="#RecsWD" id="ref-for-RecsWD⑧">Working Draft</a> or <a href="#RecsCR" id="ref-for-RecsCR⑧">Candidate Recommendation</a>.

W3C Recommendation (REC)  
A W3C Recommendation is a specification or set of guidelines or requirements that, after extensive <a href="#def-Consensus" id="ref-for-def-Consensus⑥">consensus</a>-building, has received the endorsement of the W3C and its Members. W3C recommends the wide deployment of its Recommendations as standards for the Web. The W3C Royalty-Free IPR licenses granted under the W3C Patent Policy [\[PATENT-POLICY\]](#biblio-patent-policy) apply to <a href="#RecsW3C" id="ref-for-RecsW3C①②">W3C Recommendations</a>. As technology evolves, a <a href="#RecsW3C" id="ref-for-RecsW3C①③">W3C Recommendation</a> may become:

An Amended Recommendation  
An Amended Recommendation is a <a href="#RecsW3C" id="ref-for-RecsW3C①④">Recommendation</a> that is amended to include [substantive changes that do not add new features](#correction-classes), and is produced by the W3C at a time when the <a href="#RecsW3C" id="ref-for-RecsW3C①⑤">Recommendation</a> does not fit within the charter of any active Working Group. Since the <a href="#team" id="ref-for-team②⑤">W3C team</a> rather than a <a href="#GroupsWG" id="ref-for-GroupsWG③⑤">Working Group</a> moves it through the Process, there are implications regarding the scope of Royalty-Free IPR licenses granted under the W3C Patent Policy [\[PATENT-POLICY\]](#biblio-patent-policy).

A Superseded Recommendation  
A Superseded Recommendation is a specification that has been replaced by a newer version that the W3C recommends for new adoption. An <a href="#RecsObs" id="ref-for-RecsObs">Obsolete</a> or Superseded specification has the same status as a <a href="#RecsW3C" id="ref-for-RecsW3C①⑥">W3C Recommendation</a> with regards to W3C Royalty-Free IPR Licenses granted under the Patent Policy.

Note: When a Technical Report which had previously been published as a <a href="#RecsW3C" id="ref-for-RecsW3C①⑦">Recommendation</a> is again published as a <a href="#RecsW3C" id="ref-for-RecsW3C①⑧">Recommendation</a> after following the necessary steps to [revise](#revising-rec) it, the latest version replaces the previous one, without the need to invoke the steps of [§ 6.2.12.3 Abandoning a W3C Recommendation](#rec-rescind): it is the same document, updated. Explicitly declaring a documented superseded, using the process documented in [§ 6.2.12.3 Abandoning a W3C Recommendation](#rec-rescind), is intended for cases where a <a href="#RecsW3C" id="ref-for-RecsW3C①⑨">Recommendation</a> is superseded by a separate <a href="#technical-report" id="ref-for-technical-report⑨">Technical Report</a> (or by a document managed outside of W3C).

An Obsolete Recommendation  
An Obsolete Recommendation is a specification that the W3C has determined lacks sufficient market relevance to continue recommending it for implementation, but which does not have fundamental problems that would require it to be <a href="#RescindedRec" id="ref-for-RescindedRec">Rescinded</a>. If an Obsolete specification gains sufficient market relevance, the W3C may decide to restore it to <a href="#RecsW3C" id="ref-for-RecsW3C②⓪">Recommendation</a> status.

Rescinded Recommendation  
A Rescinded Recommendation is an entire Recommendation that W3C no longer endorses, and believes is unlikely to ever be restored to <a href="#RecsW3C" id="ref-for-RecsW3C②①">Recommendation</a> status. See also “W3C Royalty-Free (RF) Licensing Requirements” in the W3C Patent Policy [\[PATENT-POLICY\]](#biblio-patent-policy).

Only sufficiently technically mature work should be advanced.

Note: Should faster advancement to meet scheduling considerations be desired, this can be achieved by reducing the scope of the technical report to a subset that is adequately mature and deferring less stable features to other technical reports.

When publishing an updated version of an existing <a href="#RecsCR" id="ref-for-RecsCR⑨">Candidate Recommendation</a> or <a href="#RecsW3C" id="ref-for-RecsW3C②②">Recommendation</a>, technical reports are expected to meet the same maturity criteria as when they are first published under that status. However, in the interest of replacing stale documents with improved ones in a timely manner, if flaws have been discovered in the technical report after its initial publication as a <a href="#RecsCR" id="ref-for-RecsCR①⓪">CR</a> or <a href="#RecsW3C" id="ref-for-RecsW3C②③">REC</a> that would have been severe enough to reject that publication had they be known in time, it is also permissible to publish an updated <a href="#RecsCR" id="ref-for-RecsCR①①">CR</a> or <a href="#RecsW3C" id="ref-for-RecsW3C②④">REC</a> following the usual process, even if only some of these flaws have been satisfactorily addressed.

<a href="#GroupsWG" id="ref-for-GroupsWG③⑥">Working Groups</a> and <a href="#GroupsIG" id="ref-for-GroupsIG⑨">Interest Groups</a> _may_ make available <a href="#editors-draft" id="ref-for-editors-draft">Editor’s drafts</a>. Editor’s drafts (ED) have no official standing whatsoever, and do not necessarily imply consensus of a <a href="#GroupsWG" id="ref-for-GroupsWG③⑦">Working Group</a> or <a href="#GroupsIG" id="ref-for-GroupsIG①⓪">Interest Group</a>, nor are their contents endorsed in any way by W3C.

#### <span class="secno">6.2.2. </span><span class="content"> Implementation Experience</span><a href="#implementation-experience" class="self-link"></a>

Implementation experience is required to show that a specification is sufficiently clear, complete, and relevant to market needs, to ensure that independent interoperable implementations of each feature of the specification will be realized. While no exhaustive list of requirements is provided here, when assessing that there is adequate implementation experience the <a href="#def-Director" id="ref-for-def-Director①①">Director</a> will consider (though not be limited to):

- is each feature of the current specification implemented, and how is this demonstrated?
- are there independent interoperable implementations of the current specification?
- are there implementations created by people other than the authors of the specification?
- are implementations publicly deployed?
- is there implementation experience at all levels of the specification’s ecosystem (authoring, consuming, publishing…)?
- are there reports of difficulties or problems with implementation?

Planning and accomplishing a demonstration of (interoperable) implementations can be very time consuming. Groups are often able to work more effectively if they plan how they will demonstrate interoperable implementations early in the development process; for example, developing tests in concert with implementation efforts.

#### <span class="secno">6.2.3. </span><span class="content"> Advancement on the Recommendation Track</span><a href="#transition-reqs" class="self-link"></a>

For _all_ requests to advance a specification to a new maturity level other than <a href="#WGNote" id="ref-for-WGNote②">Note</a> (called Transition Requests), the Working Group:

- _must_ record the group’s decision to request advancement.
- _must_ obtain <a href="#def-Director" id="ref-for-def-Director①②">Director</a> approval.
- _must_ publicly document all new features ([class 4 changes](#correction-classes)) to the technical report since the previous publication.
- _must_ publicly document if other substantive changes ([class 3 changes](#correction-classes)) have been made, and _should_ document the details of such changes.
- _should_ publicly document if <a href="#editorial-change" id="ref-for-editorial-change">editorial changes</a> have been made, and _may_ document the details of such changes.
- _must_ <a href="#formally-addressed" id="ref-for-formally-addressed①">formally address</a> all issues raised about the document since the previous [maturity level](#maturity-levels).
- _must_ provide public documentation of any <a href="#FormalObjection" id="ref-for-FormalObjection⑦">Formal Objections</a>.
- _should_ report which, if any, of the <a href="#GroupsWG" id="ref-for-GroupsWG③⑧">Working Group</a>'s requirements for this document have changed since the previous step.
- _should_ report any changes in dependencies with other groups.
- _should_ provide information about implementations known to the <a href="#GroupsWG" id="ref-for-GroupsWG③⑨">Working Group</a>.

For a <a href="#fpwd" id="ref-for-fpwd②">First Public Working Draft</a> there is no “previous maturity level”, so many requirements do not apply, and approval is normally fairly automatic. For later stages, especially transition to <a href="#RecsCR" id="ref-for-RecsCR①②">Candidate</a> or <a href="#RecsPR" id="ref-for-RecsPR③">Proposed Recommendation</a>, there is usually a formal review meeting to ensure the requirements have been met before <a href="#def-Director" id="ref-for-def-Director①③">Director</a>'s approval is given.

<a href="#trans-req" id="ref-for-trans-req①">Transition Requests</a> to <a href="#fpwd" id="ref-for-fpwd③">First Public Working Draft</a> or <a href="#RecsCR" id="ref-for-RecsCR①③">Candidate Recommendation</a> will not normally be approved while a <a href="#GroupsWG" id="ref-for-GroupsWG④⓪">Working Group</a>'s <a href="#charter" id="ref-for-charter②">charter</a> is undergoing or awaiting a <a href="#def-Director" id="ref-for-def-Director①④">Director</a>'s decision on an <a href="#advisory-committee-review" id="ref-for-advisory-committee-review②">Advisory Committee Review</a>.

#### <span class="secno">6.2.4. </span><span class="content"> Updating Mature Publications on the Recommendation Track</span><a href="#update-reqs" class="self-link"></a>

Certain requests to re-publish a specification within its current maturity level (called Update Requests) require <a href="#def-Director" id="ref-for-def-Director①⑤">Director</a> approval. For such <a href="#update-requests" id="ref-for-update-requests①">update requests</a>, the Working Group:

- _must_ record the group’s decision to request the update.
- _must_ show that the changes have received <a href="#dfn-wide-review" id="ref-for-dfn-wide-review②">wide review</a>.
- _must_ obtain <a href="#def-Director" id="ref-for-def-Director①⑥">Director</a> approval, or fulfill the criteria for [§ 6.2.4.1 Streamlined Publication Approval](#streamlined-update).
- _must_ provide public documentation of any <a href="#FormalObjection" id="ref-for-FormalObjection⑧">Formal Objections</a>.
- _must_ publicly document of all new features ([class 4 changes](#correction-classes)) to the technical report since the previous publication.
- _must_ publicly document if other substantive changes ([class 3 changes](#correction-classes)) have been made, and _should_ document the details of such changes.
- _should_ publicly document if <a href="#editorial-change" id="ref-for-editorial-change①">editorial changes</a> changes have been made, and _may_ document the details of such changes.
- _must_ show that the revised specification meets all <a href="#GroupsWG" id="ref-for-GroupsWG④①">Working Group</a> requirements, or explain why the requirements have changed or been deferred,
- _should_ report which, if any, of the <a href="#GroupsWG" id="ref-for-GroupsWG④②">Working Group</a>'s requirements for this document have changed since the previous step.
- _should_ report any changes in dependencies with other groups.
- _should_ provide information about implementations known to the <a href="#GroupsWG" id="ref-for-GroupsWG④③">Working Group</a>.

There is usually a formal review meeting to ensure the requirements have been met before <a href="#def-Director" id="ref-for-def-Director①⑦">Director</a>'s approval is given.

Note: <a href="#update-requests" id="ref-for-update-requests②">Update request</a> approval is expected to be fairly simple compared to getting approval for a <a href="#trans-req" id="ref-for-trans-req②">transition request</a>.

The <a href="#def-Director" id="ref-for-def-Director①⑧">Director</a> _must_ announce the publication of the revised specification to other W3C groups and the Public.

##### <span class="secno">6.2.4.1. </span><span class="content"> Streamlined Publication Approval</span><a href="#streamlined-update" class="self-link"></a>

Note: These criteria are intentionally stricter than the general requirements for an <a href="#update-requests" id="ref-for-update-requests③">update request</a>. This is in order to minimize ambiguities and the need for expert judgment, and to make self-evaluation practical.

In order to streamline the publication process in non-controversial cases, approval to an <a href="#update-requests" id="ref-for-update-requests④">update request</a> is automatically granted without formal review when the following _additional_ criteria are fulfilled:

- There _must_ have been no changes to <a href="#GroupsWG" id="ref-for-GroupsWG④④">Working Group</a> requirements about this document.
- For each of the [W3C Horizontal Groups](https://www.w3.org/Guide/process/charter.html#horizontal-review) [\[CHARTER\]](#biblio-charter), if the Horizontal Review Group has made available a set criteria under which their review is not necessary, the <a href="#GroupsWG" id="ref-for-GroupsWG④⑤">Working Group</a> _must_ document that these criteria have been fulfilled. Otherwise, the <a href="#GroupsWG" id="ref-for-GroupsWG④⑥">Working Group</a> _must_ show that review from that group has been solicited and received.
- No <a href="#FormalObjection" id="ref-for-FormalObjection⑨">Formal Objection</a> has been registered against the document.
- The <a href="#GroupsWG" id="ref-for-GroupsWG④⑦">Working Group</a> _must_ have <a href="#formally-addressed" id="ref-for-formally-addressed②">formally addressed</a>:

  - all issues raised against the document that resulted in changes since the previous publication

  - all issues raised against changes since the previous publication

  - all issues raised against the document that were closed since the previous publication with no change to the document

  The response to each of these issues _must_ be to the satisfaction of the person who raised it: their proposal has been accepted, or a compromise has been found, or they accepted the Working Group’s rationale for rejecting it.

  Note: This is stricter than the general Transition Request criteria.

Additionally, for updates to <a href="#RecsW3C" id="ref-for-RecsW3C②⑤">Recommendations</a> with [substantive changes](#revised-rec-substantive) or [with new features](#revised-rec-features):

- Changes to the document are limited to <a href="#proposed-corrections" id="ref-for-proposed-corrections">proposed corrections</a> that were included in a <a href="#last-call-for-review-of-proposed-corrections" id="ref-for-last-call-for-review-of-proposed-corrections">Last Call for Review of Proposed Corrections</a> possibly combined with [class 1 or 2 changes](#correction-classes), and/or (in the case of a <a href="#RecsW3C" id="ref-for-RecsW3C②⑥">Recommendation</a> that <a href="#allow-new-features" id="ref-for-allow-new-features">allows new features</a>) <a href="#proposed-addition" id="ref-for-proposed-addition">proposed additions</a> that were included in a <a href="#last-call-for-review-of-proposed-additions" id="ref-for-last-call-for-review-of-proposed-additions">Last Call for Review of Proposed Additions</a>.
- The <a href="#GroupsWG" id="ref-for-GroupsWG④⑧">Working Group</a> _must_ show that all changes have been implemented in at least 2 distinct products by 2 different implementers, as evidenced by passing tests of a test suite providing extensive coverage of the changes, or an alternative streamlined approval implementation requirement described in the <a href="#GroupsWG" id="ref-for-GroupsWG④⑨">working Group</a> charter has been met.

  Note: This is stricter than the general criteria for <a href="#adequate-implementation" id="ref-for-adequate-implementation①">adequate implementation experience</a>.

The <a href="#GroupsWG" id="ref-for-GroupsWG⑤⓪">Working Group</a> must provide written evidence for these claims, and the <a href="#team" id="ref-for-team②⑥">Team</a> must make these answers publicly and permanently available.

After publication, if an AC Representative or Team member doubts that the evidence presented supports the claims, they _may_ request that a formal review meeting be convened post facto. If that review finds that the requirements were not fulfilled, the Team _may_ revert the changes by updating in place the status section to indicate that it has been reverted, and by republishing the previously approved version of the technical report.

#### <span class="secno">6.2.5. </span><span class="content"> Publishing a First Public Working Draft</span><a href="#first-wd" class="self-link"></a>

To publish the <a href="#fpwd" id="ref-for-fpwd④">First Public Working Draft</a> of a document, a <a href="#GroupsWG" id="ref-for-GroupsWG⑤①">Working Group</a> _must_ meet the applicable [requirements for advancement](#transition-reqs).

The <a href="#def-Director" id="ref-for-def-Director①⑨">Director</a> _must_ announce the publication of a <a href="#fpwd" id="ref-for-fpwd⑤">First Public Working Draft</a> to other W3C groups and to the public.

#### <span class="secno">6.2.6. </span><span class="content"> Revising a Working Draft</span><span id="revised-wd"></span><a href="#revising-wd" class="self-link"></a>

A <a href="#GroupsWG" id="ref-for-GroupsWG⑤②">Working Group</a> _should_ <a href="#publishing" id="ref-for-publishing⑧">publish</a> a <a href="#RecsWD" id="ref-for-RecsWD⑨">Working Draft</a> to the W3C Technical Reports page when there have been significant changes to the previous published document that would benefit from review beyond the Working Group.

If 6 months elapse without significant changes to a specification, a Working Group _should_ publish a revised <a href="#RecsWD" id="ref-for-RecsWD①⓪">Working Draft</a>, whose status section _should_ indicate reasons for the lack of change.

To publish a revision of a Working draft, a Working Group:

- _must_ record the group’s decision to request publication. <a href="#def-Consensus" id="ref-for-def-Consensus⑦">Consensus</a> is not required, as this is a procedural step,
- _must_ provide public documentation of <a href="#substantive-change" id="ref-for-substantive-change②">substantive changes</a> to the technical report since the previous <a href="#RecsWD" id="ref-for-RecsWD①①">Working Draft</a>,
- _should_ provide public documentation of significant <a href="#editorial-change" id="ref-for-editorial-change②">editorial changes</a> to the technical report since the previous step,
- _should_ report which, if any, of the Working Group’s requirements for this document have changed since the previous step,
- _should_ report any changes in dependencies with other groups,

Possible next steps for any Working Draft:

- Revised [Working Draft](#revising-wd)
- [Candidate Recommendation](#transition-cr)
- [Working Group Note](#Note)

#### <span class="secno">6.2.7. </span><span class="content"> Transitioning to Candidate Recommendation</span><span id="candidate-rec"></span><span id="last-call"></span><a href="#transition-cr" class="self-link"></a>

To publish a <a href="#RecsCR" id="ref-for-RecsCR①④">Candidate Recommendation</a>, in addition to meeting the [requirements for advancement](#transition-reqs) a <a href="#GroupsWG" id="ref-for-GroupsWG⑤③">Working Group</a>, or in the case of a candidate <a href="#rec-amended" id="ref-for-rec-amended①">Amended Recommendation</a> (a document intended to become an <a href="#rec-amended" id="ref-for-rec-amended②">Amended Recommendation</a>), the W3C:

- _must_ show that the specification has met all <a href="#GroupsWG" id="ref-for-GroupsWG⑤④">Working Group</a> requirements, or explain why the requirements have changed or been deferred,
- _must_ document changes to dependencies during the development of the specification,
- _must_ document how <a href="#adequate-implementation" id="ref-for-adequate-implementation②">adequate implementation experience</a> will be demonstrated,
- _must_ specify the deadline for comments, which _must_ be **at least** 28 days after publication, and _should_ be longer for complex documents,
- _must_ show that the specification has received <a href="#dfn-wide-review" id="ref-for-dfn-wide-review③">wide review</a>, and
- _may_ identify features in the document as at risk. These features _may_ be removed before advancement to <a href="#RecsPR" id="ref-for-RecsPR④">Proposed Recommendation</a> without a requirement to publish a new <a href="#RecsCR" id="ref-for-RecsCR①⑤">Candidate Recommendation</a>.

The first Candidate Recommendation publication after approval of a <a href="#trans-req" id="ref-for-trans-req③">Transition Request</a> is always a <a href="#candidate-recommendation-snapshot" id="ref-for-candidate-recommendation-snapshot⑤">Candidate Recommendation Snapshot</a>. The <a href="#def-Director" id="ref-for-def-Director②⓪">Director</a> _must_ announce the publication of the <a href="#candidate-recommendation-snapshot" id="ref-for-candidate-recommendation-snapshot⑥">Candidate Recommendation Snapshot</a> to other W3C groups and to the public.

Possible next steps after a <a href="#candidate-recommendation-snapshot" id="ref-for-candidate-recommendation-snapshot⑦">Candidate Recommendation Snapshot</a>:

- Return to [Working Draft](#revising-wd)
- A revised [Candidate Recommendation Snapshot](#publishing-crrs)
- A revised [Candidate Recommendation Draft](#publishing-crud)
- [Proposed Recommendation](#transition-pr)
- [Working Group Note](#Note)

<a href="#advisory-committee" id="ref-for-advisory-committee①①">Advisory Committee</a> representatives _may_ initiate an [Advisory Committee Appeal](#ACAppeal) of the decision to advance the technical report.

#### <span class="secno">6.2.8. </span><span class="content"> Revising a Candidate Recommendation</span><span id="revised-cr"></span><a href="#revising-cr" class="self-link"></a>

##### <span class="secno">6.2.8.1. </span><span class="content"> Publishing a <a href="#candidate-recommendation-snapshot" id="ref-for-candidate-recommendation-snapshot⑧">Candidate Recommendation Snapshot</a></span><a href="#publishing-crrs" class="self-link"></a>

If there are any <a href="#substantive-change" id="ref-for-substantive-change③">substantive changes</a> made to a <a href="#RecsCR" id="ref-for-RecsCR①⑥">Candidate Recommendation</a> since the previous <a href="#candidate-recommendation-snapshot" id="ref-for-candidate-recommendation-snapshot⑨">Candidate Recommendation Snapshot</a> other than to remove features explicitly identified as <a href="#at-risk" id="ref-for-at-risk">at risk</a>, the <a href="#GroupsWG" id="ref-for-GroupsWG⑤⑤">Working Group</a> _must_ meet the requirements of an <a href="#update-requests" id="ref-for-update-requests⑤">update request</a> in order to republish.

In addition the Working Group:

- _must_ specify the deadline for further comments, which _must_ be **at least** 28 days after publication, and _should_ be longer for complex documents,
- _may_ identify features in the document as <a href="#at-risk" id="ref-for-at-risk①">at risk</a>. These features _may_ be removed before advancement to <a href="#RecsPR" id="ref-for-RecsPR⑤">Proposed Recommendation</a> without a requirement to publish a new <a href="#RecsCR" id="ref-for-RecsCR①⑦">Candidate Recommendation</a>.

The <a href="#def-Director" id="ref-for-def-Director②①">Director</a> _must_ announce the publication of a revised <a href="#candidate-recommendation-snapshot" id="ref-for-candidate-recommendation-snapshot①⓪">Candidate Recommendation Snapshot</a> to other W3C groups and to the public.

To provide timely updates and patent protection, a <a href="#candidate-recommendation-snapshot" id="ref-for-candidate-recommendation-snapshot①①">Candidate Recommendation Snapshot</a> _should_ be published within 24 months of the Working Group accepting any proposal for a substantive change (and preferably sooner). To make scheduling reviews easier, a <a href="#candidate-recommendation-snapshot" id="ref-for-candidate-recommendation-snapshot①②">Candidate Recommendation Snapshot</a> _should not_ be published more often than approximately once every 6 months.

Note: <a href="#substantive-change" id="ref-for-substantive-change④">Substantive changes</a> trigger a new Exclusion Opportunity per “Exclusion From W3C RF Licensing Requirements” in the W3C Patent Policy [\[PATENT-POLICY\]](#biblio-patent-policy).

##### <span class="secno">6.2.8.2. </span><span class="content"> Publishing a <a href="#candidate-recommendation-draft" id="ref-for-candidate-recommendation-draft②">Candidate Recommendation Draft</a></span><a href="#publishing-crud" class="self-link"></a>

A <a href="#GroupsWG" id="ref-for-GroupsWG⑤⑥">Working Group</a> _should_ <a href="#publishing" id="ref-for-publishing⑨">publish</a> an <a href="#candidate-recommendation-draft" id="ref-for-candidate-recommendation-draft③">Update Draft</a> to the W3C Technical Reports page when there have been significant changes to the previous published document that would benefit from review beyond the Working Group.

To publish a revision of a <a href="#candidate-recommendation-draft" id="ref-for-candidate-recommendation-draft④">Candidate Recommendation Draft</a>, a Working Group:

- _must_ record the group’s decision to request publication,
- _must_ provide public documentation of <a href="#substantive-change" id="ref-for-substantive-change⑤">substantive changes</a> to the technical report since the previous <a href="#candidate-recommendation-snapshot" id="ref-for-candidate-recommendation-snapshot①③">Candidate Recommendation Snapshot</a>,
- _should_ provide public documentation of significant <a href="#editorial-change" id="ref-for-editorial-change③">editorial changes</a> to the technical report since the previous <a href="#candidate-recommendation-snapshot" id="ref-for-candidate-recommendation-snapshot①④">Candidate Recommendation Snapshot</a>,
- _should_ document outstanding issues, and parts of the document on which the Working Group does not have consensus,
- _should_ report which, if any, of the Working Group’s requirements for this document have changed since the previous step,
- _should_ report any changes in dependencies with other groups.

Note: A Working Group _does not_ need to meet the requirements of a <a href="#candidate-recommendation-snapshot" id="ref-for-candidate-recommendation-snapshot①⑤">Candidate Recommendation Snapshot</a> <a href="#update-requests" id="ref-for-update-requests⑥">update request</a> in order to publish a <a href="#candidate-recommendation-draft" id="ref-for-candidate-recommendation-draft⑤">Candidate Recommendation Draft</a>.

Possible next steps after a <a href="#candidate-recommendation-draft" id="ref-for-candidate-recommendation-draft⑥">Candidate Recommendation Draft</a>:

- Return to [Working Draft](#revising-wd)
- A revised [Candidate Recommendation Snapshot](#publishing-crrs)
- A revised [Candidate Recommendation Draft](#publishing-crud)
- [Proposed Recommendation](#transition-pr), if there are no <a href="#substantive-change" id="ref-for-substantive-change⑥">substantive change</a> other than dropping <a href="#at-risk" id="ref-for-at-risk②">at risk</a> features
- [Working Group Note](#Note)

#### <span class="secno">6.2.9. </span><span class="content"> Transitioning to Proposed Recommendation</span><span id="rec-pr"></span><a href="#transition-pr" class="self-link"></a>

In addition to meeting the [requirements for advancement](#transition-reqs),

- The status information _must_ specify the deadline for <a href="#advisory-committee-review" id="ref-for-advisory-committee-review③">Advisory Committee review</a>, which _must_ be **at least** 28 days after the publication of the <a href="#RecsPR" id="ref-for-RecsPR⑥">Proposed Recommendation</a> and _should_ be at least 10 days after the end of the last Exclusion Opportunity per ”Exclusion From W3C RF Licensing Requirements” in the W3C Patent Policy [\[PATENT-POLICY\]](#biblio-patent-policy).

A Working Group, or for a proposed <a href="#rec-amended" id="ref-for-rec-amended③">Amended Recommendation</a>, the W3C:

- _must_ show <a href="#adequate-implementation" id="ref-for-adequate-implementation③">adequate implementation experience</a> except where an exception is approved by the <a href="#def-Director" id="ref-for-def-Director②②">Director</a>,
- _must_ show that the document has received <a href="#dfn-wide-review" id="ref-for-dfn-wide-review④">wide review</a>,
- _must_ show that all issues raised during the <a href="#RecsCR" id="ref-for-RecsCR①⑧">Candidate Recommendation</a> review period other than by <a href="#advisory-committee-representative" id="ref-for-advisory-committee-representative①⑦">Advisory Committee representatives</a> acting in their formal <a href="#advisory-committee-representative" id="ref-for-advisory-committee-representative①⑧">AC representative</a> role have been <a href="#formally-addressed" id="ref-for-formally-addressed③">formally addressed</a>,
- _must_ identify any substantive issues raised since the close of the <a href="#RecsCR" id="ref-for-RecsCR①⑨">Candidate Recommendation</a> review period,
- _must not_ have made any <a href="#substantive-change" id="ref-for-substantive-change⑦">substantive changes</a> to the document since the most recent <a href="#candidate-recommendation-snapshot" id="ref-for-candidate-recommendation-snapshot①⑥">Candidate Recommendation Snapshot</a>, other than dropping features identified <a href="#at-risk" id="ref-for-at-risk③">at risk</a>.
- _may_ have removed features identified in the <a href="#candidate-recommendation-snapshot" id="ref-for-candidate-recommendation-snapshot①⑦">Candidate Recommendation Snapshot</a> document as <a href="#at-risk" id="ref-for-at-risk④">at risk</a> without republishing the specification as a <a href="#candidate-recommendation-snapshot" id="ref-for-candidate-recommendation-snapshot①⑧">Candidate Recommendation Snapshot</a>.

The Director:

- _must_ announce the publication of a <a href="#RecsPR" id="ref-for-RecsPR⑦">Proposed Recommendation</a> to the [Advisory Committee](#AC), and _must_ begin an <a href="#advisory-committee-review" id="ref-for-advisory-committee-review④">Advisory Committee Review</a> on the question of whether the specification is appropriate to <a href="#publishing" id="ref-for-publishing①⓪">publish</a> as a <a href="#RecsW3C" id="ref-for-RecsW3C②⑦">W3C Recommendation</a>.
- _may_ approve a <a href="#RecsPR" id="ref-for-RecsPR⑧">Proposed Recommendation</a> with minimal [implementation experience](#implementation-experience) where there is a compelling reason to do so. In such a case, the <a href="#def-Director" id="ref-for-def-Director②③">Director</a> _should_ explain the reasons for that decision.

Since a <a href="#RecsW3C" id="ref-for-RecsW3C②⑧">W3C Recommendation</a> _must not_ include any <a href="#substantive-change" id="ref-for-substantive-change⑧">substantive changes</a> from the <a href="#RecsPR" id="ref-for-RecsPR⑨">Proposed Recommendation</a> it is based on, to make any <a href="#substantive-change" id="ref-for-substantive-change⑨">substantive change</a> to a <a href="#RecsPR" id="ref-for-RecsPR①⓪">Proposed Recommendation</a> the <a href="#GroupsWG" id="ref-for-GroupsWG⑤⑦">Working Group</a> _must_ return the specification to <a href="#RecsCR" id="ref-for-RecsCR②⓪">Candidate Recommendation</a> or <a href="#RecsWD" id="ref-for-RecsWD①②">Working Draft</a>.

A <a href="#RecsPR" id="ref-for-RecsPR①①">Proposed Recommendation</a> may identify itself as intending to allow new features ([class 4 changes](#correction-classes)) after its initial publication as a <a href="#RecsW3C" id="ref-for-RecsW3C②⑨">Recommendation</a>, as described in [§ 6.2.11.4 Revising a Recommendation: New Features](#revised-rec-features). Such an allowance cannot be added to a <a href="#technical-report" id="ref-for-technical-report①⓪">technical report</a> previously published as a <a href="#RecsW3C" id="ref-for-RecsW3C③⓪">Recommendation</a> that did not allow such changes.

Possible Next Steps:

- Return to [Working Draft](#revising-wd)
- Return to [Candidate Recommendation](#transition-cr)
- [Recommendation status](#transition-rec), including <a href="#rec-amended" id="ref-for-rec-amended④">Amended Recommendation</a> (the expected next step).
- [Working Group Note](#Note)

<a href="#advisory-committee-representative" id="ref-for-advisory-committee-representative①⑨">Advisory Committee representatives</a> _may_ initiate an <a href="#advisory-committee-appeal" id="ref-for-advisory-committee-appeal">Advisory Committee Appeal</a> of the decision to advance the technical report.

#### <span class="secno">6.2.10. </span><span class="content"> Transitioning to W3C Recommendation</span><span id="rec-publication"></span><a href="#transition-rec" class="self-link"></a>

The decision to advance a document to <a href="#RecsW3C" id="ref-for-RecsW3C③①">Recommendation</a> is a <a href="#def-w3c-decision" id="ref-for-def-w3c-decision">W3C Decision</a>.

In addition to meeting the [requirements for advancement](#transition-reqs),

- A <a href="#RecsW3C" id="ref-for-RecsW3C③②">Recommendation</a> _must_ identify where errata are tracked, and
- A <a href="#RecsW3C" id="ref-for-RecsW3C③③">Recommendation</a> _must not_ include any <a href="#substantive-change" id="ref-for-substantive-change①⓪">substantive changes</a> from the <a href="#RecsPR" id="ref-for-RecsPR①②">Proposed Recommendation</a> on which it is based.
- If there was any <a href="#def-Dissent" id="ref-for-def-Dissent②">dissent</a> in Advisory Committee reviews, the <a href="#def-Director" id="ref-for-def-Director②④">Director</a> _must_ publish the substantive content of the dissent to W3C and the general public, and _must_ <a href="#formally-addressed" id="ref-for-formally-addressed④">formally address</a> the comment at least 14 days before publication as a <a href="#RecsW3C" id="ref-for-RecsW3C③④">W3C Recommendation</a>.
- <a href="#advisory-committee-representative" id="ref-for-advisory-committee-representative②⓪">Advisory Committee representatives</a> _may_ initiate an <a href="#advisory-committee-appeal" id="ref-for-advisory-committee-appeal①">Advisory Committee Appeal</a> of the <a href="#def-w3c-decision" id="ref-for-def-w3c-decision①">W3C decision</a>
- The <a href="#def-Director" id="ref-for-def-Director②⑤">Director</a> _must_ announce the publication of a <a href="#RecsW3C" id="ref-for-RecsW3C③⑤">W3C Recommendation</a> to [Advisory Committee](#AC), other W3C groups and to the public.

Possible next steps: A <a href="#RecsW3C" id="ref-for-RecsW3C③⑥">W3C Recommendation</a> normally retains its status indefinitely. However it _may_ be:

- republished as a [revised Recommendation or Amended Recommendation](#revising-rec), or
- republished as a [Candidate Recommendation](#transition-cr) to be developed towards a revised <a href="#RecsW3C" id="ref-for-RecsW3C③⑦">Recommendation</a> or <a href="#rec-amended" id="ref-for-rec-amended⑤">Amended Recommendation</a>, or
- declared [superseded or obsolete](#rec-rescind), or
- [rescinded](#rec-rescind).

#### <span class="secno">6.2.11. </span><span class="content"> Revising a W3C Recommendation</span><span id="rec-modify"></span><span id="revised-rec"></span><a href="#revising-rec" class="self-link"></a>

This section details the process for making changes to a <a href="#RecsW3C" id="ref-for-RecsW3C③⑧">Recommendation</a>.

##### <span class="secno">6.2.11.1. </span><span class="content"> Revising a Recommendation: Markup Changes</span><a href="#revised-rec-markup" class="self-link"></a>

A <a href="#GroupsWG" id="ref-for-GroupsWG⑤⑧">Working group</a> _may_ request republication of a <a href="#RecsW3C" id="ref-for-RecsW3C③⑨">Recommendation</a>, or if there is no <a href="#GroupsWG" id="ref-for-GroupsWG⑤⑨">Working Group</a> chartered to maintain a <a href="#RecsW3C" id="ref-for-RecsW3C④⓪">Recommendation</a> W3C _may_ republish the <a href="#RecsW3C" id="ref-for-RecsW3C④①">Recommendation</a>, to make corrections that do not result in any changes to the text of the specification. (See [class 1 changes](#correction-classes).)

##### <span class="secno">6.2.11.2. </span><span class="content"> Revising a Recommendation: Editorial Changes</span><a href="#revised-rec-editorial" class="self-link"></a>

<a href="#editorial-change" id="ref-for-editorial-change④">Editorial changes</a> to a <a href="#RecsW3C" id="ref-for-RecsW3C④②">Recommendation</a> require no technical review of the intended changes. A <a href="#GroupsWG" id="ref-for-GroupsWG⑥⓪">Working Group</a>, provided there are no votes against the resolution to publish, _may_ request publication of a <a href="#RecsW3C" id="ref-for-RecsW3C④③">Recommendation</a> or W3C _may_ publish a <a href="#RecsW3C" id="ref-for-RecsW3C④④">Recommendation</a> to make this class of change without passing through earlier maturity levels. (See [class 2 changes](#correction-classes).)

##### <span class="secno">6.2.11.3. </span><span class="content"> Revising a Recommendation: Substantive Changes</span><a href="#revised-rec-substantive" class="self-link"></a>

A <a href="#candidate-correction" id="ref-for-candidate-correction③">candidate correction</a> can be made normative and be folded into the main text of the <a href="#RecsW3C" id="ref-for-RecsW3C④⑤">Recommendation</a>, once it has satisfied all the same criteria as the rest of the <a href="#RecsW3C" id="ref-for-RecsW3C④⑥">Recommendation</a>, including review by the community to ensure the technical and editorial soundness of the <a href="#candidate-change" id="ref-for-candidate-change③">candidate change</a>. To validate this, the <a href="#GroupsWG" id="ref-for-GroupsWG⑥①">Working Group</a> must request a <a href="#last-call-review" id="ref-for-last-call-review">Last Call for Review of Proposed Changes</a>, followed by an <a href="#update-requests" id="ref-for-update-requests⑦">update request</a>. See [§ 6.2.11.5 Incorporating Candidate Changes](#change-review).

Alternatively, a <a href="#GroupsWG" id="ref-for-GroupsWG⑥②">Working Group</a> _may_ incorporate the changes and [publish as a Candidate Recommendation](#transition-cr), or if no <a href="#GroupsWG" id="ref-for-GroupsWG⑥③">Working Group</a> is chartered to maintain a <a href="#RecsW3C" id="ref-for-RecsW3C④⑦">Recommendation</a> W3C _may_ publish a [candidate Amended Recommendation](#transition-cr), and advance the specification from that state. If the publication was requested by the <a href="#team" id="ref-for-team②⑦">W3C team</a> in the absence of a <a href="#GroupsWG" id="ref-for-GroupsWG⑥④">Working Group</a>, the resulting <a href="#RecsW3C" id="ref-for-RecsW3C④⑧">Recommendation</a> will be called an <a href="#rec-amended" id="ref-for-rec-amended⑥">Amended Recommendation</a>. (See [class 3 changes](#correction-classes).)

##### <span class="secno">6.2.11.4. </span><span class="content"> Revising a Recommendation: New Features</span><a href="#revised-rec-features" class="self-link"></a>

New features (see [class 4 changes](#correction-classes)) may be incorporated into a <a href="#RecsW3C" id="ref-for-RecsW3C④⑨">Recommendation</a> explicitly identified as <a href="#allow-new-features" id="ref-for-allow-new-features①">allowing new features</a> using <a href="#candidate-addition" id="ref-for-candidate-addition①">candidate additions</a>. A <a href="#candidate-addition" id="ref-for-candidate-addition②">candidate addition</a> can be made normative and be folded into the main text of the <a href="#RecsW3C" id="ref-for-RecsW3C⑤⓪">Recommendation</a>, once it has satisfied all the same criteria as the rest of the <a href="#RecsW3C" id="ref-for-RecsW3C⑤①">Recommendation</a>, including review by the community to ensure the technical and editorial soundness of the <a href="#candidate-change" id="ref-for-candidate-change④">candidate change</a>. To validate this, the <a href="#GroupsWG" id="ref-for-GroupsWG⑥⑤">Working Group</a> must request a <a href="#last-call-review" id="ref-for-last-call-review①">Last Call for Review of Proposed Changes</a>, followed by an <a href="#update-requests" id="ref-for-update-requests⑧">update request</a>. See [§ 6.2.11.5 Incorporating Candidate Changes](#change-review).

Note: This prohibition against new features unless explicitly allowed enables third parties to depend on Recommendations having a stable feature-set, as they have prior to the 2020 revision of this Process.

To make changes which introduce a new feature to a <a href="#RecsW3C" id="ref-for-RecsW3C⑤②">Recommendation</a> that was not approved for accepting new features, W3C _must_ create a new <a href="#technical-report" id="ref-for-technical-report①①">technical report</a>, following the full process of [advancing a technical report to Recommendation](#rec-advance) beginning with a new <a href="#fpwd" id="ref-for-fpwd⑥">First Public Working Draft</a>.

##### <span class="secno">6.2.11.5. </span><span class="content"> Incorporating Candidate Changes</span><a href="#change-review" class="self-link"></a>

A Last Call for Review of Proposed Changes verifies acceptance by the W3C community of <a href="#candidate-change" id="ref-for-candidate-change⑤">candidate changes</a> by combining an <a href="#advisory-committee-review" id="ref-for-advisory-committee-review⑤">AC Review</a> with a patent exclusion opportunity.

The <a href="#last-call-review" id="ref-for-last-call-review②">Last Call for Review of Proposed Changes</a> must be announced to other W3C groups, the public, and the <a href="#advisory-committee" id="ref-for-advisory-committee①②">Advisory Committee</a>. The announcement _must_:

- Identify whether this is a Last Call for Review of Proposed Corrections, Last Call for Review of Proposed Additions, or Last Call for Review of Proposed Corrections and Additions.
- Identify the specific <a href="#candidate-change" id="ref-for-candidate-change⑥">candidate changes</a> under review as proposed changes (proposed corrections/proposed addition).
- Specify the deadline for review comments, which must not be any sooner than 60 days from the Call for Review.
- Solicit review and, if it does not already have it, implementation experience.

The combination of the existing <a href="#RecsW3C" id="ref-for-RecsW3C⑤③">Recommendation</a> with the <a href="#proposed-changes" id="ref-for-proposed-changes">proposed changes</a> included in the <a href="#last-call-review" id="ref-for-last-call-review③">Last Call for Review of Proposed Changes</a> is considered a <a href="#patent-review-drafts" id="ref-for-patent-review-drafts②">Patent Review Draft</a> for the purposes of the Patent Policy [\[PATENT-POLICY\]](#biblio-patent-policy). Also, the review initiated by the <a href="#last-call-for-review-of-proposed-additions" id="ref-for-last-call-for-review-of-proposed-additions①">Last Call for Review of Proposed Additions</a> is an <a href="#advisory-committee-review" id="ref-for-advisory-committee-review⑥">Advisory Committee Review</a>.

Note: <a href="#last-call-for-review-of-proposed-additions" id="ref-for-last-call-for-review-of-proposed-additions②">Last Call for Review of Proposed Additions</a> and <a href="#last-call-for-review-of-proposed-corrections-and-additions" id="ref-for-last-call-for-review-of-proposed-corrections-and-additions">Last Call for Review of Proposed Corrections and Additions</a> can only be issued for <a href="#RecsW3C" id="ref-for-RecsW3C⑤④">Recommendations</a> that <a href="#allow-new-features" id="ref-for-allow-new-features②">allow new features</a>.

A <a href="#GroupsWG" id="ref-for-GroupsWG⑥⑥">Working Group</a> _may_ batch multiple <a href="#proposed-changes" id="ref-for-proposed-changes①">proposed changes</a> into a single <a href="#last-call-review" id="ref-for-last-call-review④">Last Call for Review of Proposed Changes</a>. To facilitate review, a <a href="#last-call-review" id="ref-for-last-call-review⑤">Last Call for Review of Proposed Changes</a> on a given specification _should not_ be issued more frequently than approximately once every 6 months.

At the end of the <a href="#last-call-review" id="ref-for-last-call-review⑥">Last Call for Review of Proposed Changes</a>, the <a href="#def-w3c-decision" id="ref-for-def-w3c-decision②">W3C Decision</a> may either be to reject the <a href="#proposed-changes" id="ref-for-proposed-changes②">proposed change</a>, or to clear the <a href="#proposed-changes" id="ref-for-proposed-changes③">proposed change</a> for advancement as is, or to return the proposal to the <a href="#GroupsWG" id="ref-for-GroupsWG⑥⑦">Working Group</a> with a request to <a href="#formally-addressed" id="ref-for-formally-addressed⑤">formally address</a> comments made on the changes under review. If the <a href="#GroupsWG" id="ref-for-GroupsWG⑥⑧">Working Group</a> needs to amend a <a href="#proposed-changes" id="ref-for-proposed-changes④">proposed change</a> in response to review feedback it must issue another <a href="#last-call-review" id="ref-for-last-call-review⑦">Last Call for Review of Proposed Change</a> on the revised change before it can be incorporated into the main text.

Once all comments on a <a href="#proposed-changes" id="ref-for-proposed-changes⑤">proposed change</a> have been <a href="#formally-addressed" id="ref-for-formally-addressed⑥">formally addressed</a>, and after the <a href="#GroupsWG" id="ref-for-GroupsWG⑥⑨">Working Group</a> can show <a href="#adequate-implementation" id="ref-for-adequate-implementation④">adequate implementation experience</a> and the fulfillment of all other requirements of Recommendation text, it may incorporate the <a href="#proposed-changes" id="ref-for-proposed-changes⑥">proposed change</a> into the normative <a href="#RecsW3C" id="ref-for-RecsW3C⑤⑤">Recommendation</a> by issuing an <a href="#update-requests" id="ref-for-update-requests⑨">update request</a> for publication of the updated <a href="#RecsW3C" id="ref-for-RecsW3C⑤⑥">Recommendation</a>.

To ensure adequate review of <a href="#proposed-changes" id="ref-for-proposed-changes⑦">proposed change</a> combinations, only <a href="#proposed-changes" id="ref-for-proposed-changes⑧">proposed changes</a> included in the most recent <a href="#last-call-review" id="ref-for-last-call-review⑧">Last Call for Review of Proposed Changes</a> can be incorporated into the normative <a href="#RecsW3C" id="ref-for-RecsW3C⑤⑦">Recommendation</a> text. (Thus if incorporation of a <a href="#proposed-changes" id="ref-for-proposed-changes⑨">proposed change</a> is postponed, it may need to be included in multiple Last Calls for Review of Proposed Changes.)

#### <span class="secno">6.2.12. </span><span class="content"> Retiring Recommendation Track Documents</span><a href="#tr-end" class="self-link"></a>

Work on a technical report _may_ cease at any time. Work _should_ cease if W3C or a <a href="#GroupsWG" id="ref-for-GroupsWG⑦⓪">Working Group</a> determines that it cannot productively carry the work any further.

##### <span class="secno">6.2.12.1. </span><span class="content"> Abandoning an Unfinished Technical Report</span><a href="#abandon-draft" class="self-link"></a>

Any <a href="#technical-report" id="ref-for-technical-report①②">technical report</a> no longer intended to advance or to be maintained, and that is not being rescinded, _should_ be <a href="#publishing" id="ref-for-publishing①①">published</a> as a <a href="#WGNote" id="ref-for-WGNote③">Working Group Note</a>. This can happen if the <a href="#GroupsWG" id="ref-for-GroupsWG⑦①">Working Group</a> decided to abandon work on the report, or the <a href="#def-Director" id="ref-for-def-Director②⑥">Director</a> required the <a href="#GroupsWG" id="ref-for-GroupsWG⑦②">Working Group</a> to discontinue work on the technical report before completion. If the <a href="#def-Director" id="ref-for-def-Director②⑦">Director</a> [closes a Working Group](#GeneralTermination) W3C _must_ <a href="#publishing" id="ref-for-publishing①②">publish</a> any unfinished <a href="#technical-report" id="ref-for-technical-report①③">technical report</a> on the Recommendation track as <a href="#WGNote" id="ref-for-WGNote④">Working Group Notes</a>.

##### <span class="secno">6.2.12.2. </span><span class="content"> Rescinding a Candidate Recommendation</span><a href="#rescind-cr" class="self-link"></a>

The process for rescinding a <a href="#RecsCR" id="ref-for-RecsCR②①">Candidate Recommendation</a> is the same as for rescinding a <a href="#RecsW3C" id="ref-for-RecsW3C⑤⑧">Recommendation</a>.

##### <span class="secno">6.2.12.3. </span><span class="content"> Abandoning a W3C Recommendation</span><a href="#rec-rescind" class="self-link"></a>

It is possible that W3C decides that implementing a particular <a href="#RecsW3C" id="ref-for-RecsW3C⑤⑨">Recommendation</a> is no longer recommended. There are three designations for such specifications, chosen depending on the advice W3C wishes to give about further use of the specification.

W3C _may_ obsolete a <a href="#RecsW3C" id="ref-for-RecsW3C⑥⓪">Recommendation</a>, for example if the W3C Community decides that the <a href="#RecsW3C" id="ref-for-RecsW3C⑥①">Recommendation</a> no longer represents best practices, or is not adopted and is not apparently likely to be adopted. An <a href="#RecsObs" id="ref-for-RecsObs①">Obsolete Recommendation</a> _may_ be restored to normal <a href="#RecsW3C" id="ref-for-RecsW3C⑥②">Recommendation</a>, for example because despite marking it Obsolete the specification is later more broadly adopted.

W3C _may_ declare a Recommendation Superseded if a newer version exists which the W3C recommends for new adoption. The process for declaring a Recommendation Superseded is the same as for declaring it Obsolete, below; only the name and explanation change.

W3C _may_ rescind a Recommendation if W3C believes there is no reasonable prospect of it being restored for example due to burdensome patent claims that affect implementers and cannot be resolved; see the W3C Patent Policy [\[PATENT-POLICY\]](#biblio-patent-policy) and in particular “W3C Royalty-Free (RF) Licensing Requirements” and “PAG Conclusion”.

W3C only rescinds, supersedes, or obsoletes entire Recommendations. A <a href="#RecsW3C" id="ref-for-RecsW3C⑥③">Recommendation</a> can be both superseded and obsolete. To rescind, supersede, or obsolete some part of a Recommendation, W3C follows the process for [modifying a Recommendation](#revising-rec).

Note: For the purposes of the W3C Patent Policy [\[PATENT-POLICY\]](#biblio-patent-policy) an <a href="#RecsObs" id="ref-for-RecsObs②">Obsolete</a> or <a href="#RecsSup" id="ref-for-RecsSup">Superseded Recommendation</a> has the status of an active <a href="#RecsW3C" id="ref-for-RecsW3C⑥④">Recommendation</a>, although it is not recommended for future implementation; a <a href="#RescindedRec" id="ref-for-RescindedRec①">Rescinded Recommendation</a> ceases to be in effect and no new licenses are granted under the Patent Policy.

Supersede, Obsolete or Rescind a W3C Recommendation

Recommendation (Rec)

REC

A major problem and an AC review can lead to a Recommendation being Rescinded. There are no new IPR licences issued under the W3C Patent Policy, and reinstating the Recommendation requires going through the full Rec-track process again.

Major problem, AC review

Rescinded Recommendation - no new IPR licenses

Rescinded No new IPR licenses No reinstatement path

With little uptake, following AC review a specification may become an Obsolete Recommendation

Minimal usage, AC review

Obsolete Recommendation

Obsolete

If there is new uptake, with AC review an Obsolete Recommendation may return to normal Recommendation status

New uptake, AC review Replaced by a new version, AC review

Superseded Recommendation

Superseded

A Superseded Recommendation can become a normal Recommendation with AC review

Oops! The Web still needs this, AC review

##### <span class="secno">6.2.12.4. </span><span class="content"> Process for Rescinding, Obsoleting, Superseding, Restoring a Recommendation</span><a href="#deactivation" class="self-link"></a>

The process of rescinding, obsoleting, superseding, or restoring a <a href="#RecsW3C" id="ref-for-RecsW3C⑥⑤">Recommendation</a> can be initiated either by a request from the <a href="#def-Director" id="ref-for-def-Director②⑧">Director</a> or via a request from any of the following:

- The <a href="#GroupsWG" id="ref-for-GroupsWG⑦③">Working Group</a> who produced, or is chartered to maintain, the <a href="#RecsW3C" id="ref-for-RecsW3C⑥⑥">Recommendation</a>
- The <a href="#technical-architecture-group" id="ref-for-technical-architecture-group①⑨">TAG</a>, if there is no such <a href="#GroupsWG" id="ref-for-GroupsWG⑦④">Working Group</a>
- Any individual who made a request to the relevant <a href="#GroupsWG" id="ref-for-GroupsWG⑦⑤">Working Group</a> as described above, or the <a href="#technical-architecture-group" id="ref-for-technical-architecture-group②⓪">TAG</a> if such a group does not exist, to obsolete, rescind, supersede, or restore a <a href="#RecsW3C" id="ref-for-RecsW3C⑥⑦">Recommendation</a>, where the request was not answered within 90 days
- 5% of the members of the Advisory Committee

The <a href="#def-Director" id="ref-for-def-Director②⑨">Director</a> _must_ then submit the request to the [Advisory Committee](#AC) for review. For any <a href="#advisory-committee-review" id="ref-for-advisory-committee-review⑦">Advisory Committee review</a> of a proposal to rescind, obsolete, supersede, or restore a <a href="#RecsW3C" id="ref-for-RecsW3C⑥⑧">Recommendation</a> the <a href="#def-Director" id="ref-for-def-Director③⓪">Director</a> _must_:

- announce the proposal to all <a href="#GroupsWG" id="ref-for-GroupsWG⑦⑥">Working Group</a> <a href="#GeneralChairs" id="ref-for-GeneralChairs②⑨">Chairs</a>, and to the Public, as well as to the <a href="#advisory-committee" id="ref-for-advisory-committee①③">Advisory Committee</a>
- indicate that this is a proposal to Rescind, Obsolete, Supersede, or restore, a <a href="#RecsW3C" id="ref-for-RecsW3C⑥⑨">Recommendation</a> as appropriate
- identify the <a href="#RecsW3C" id="ref-for-RecsW3C⑦⓪">Recommendation</a> by URL
- publish a rationale for the proposal
- identify known dependencies and solicit review from all dependent <a href="#GroupsWG" id="ref-for-GroupsWG⑦⑦">Working Groups</a>
- solicit public review
- specify the deadline for review comments, which _must_ be at least 28 days after the <a href="#def-Director" id="ref-for-def-Director③①">Director</a>'s announcement

and _should_

- identify known implementations.

If there was any <a href="#def-Dissent" id="ref-for-def-Dissent③">dissent</a> in the <a href="#advisory-committee-review" id="ref-for-advisory-committee-review⑧">Advisory Committee review</a>, the <a href="#def-Director" id="ref-for-def-Director③②">Director</a> _must_ publish the substantive content of the dissent to W3C **and the public**, and _must_ <a href="#formally-addressed" id="ref-for-formally-addressed⑦">formally address</a> the dissent at least 14 days before publication as an <a href="#RecsObs" id="ref-for-RecsObs③">Obsolete</a> or <a href="#RescindedRec" id="ref-for-RescindedRec②">Rescinded Recommendation</a>.

The [Advisory Committee](#AC) _may_ initiate an <a href="#advisory-committee-appeal" id="ref-for-advisory-committee-appeal②">Advisory Committee Appeal</a> of the <a href="#def-Director" id="ref-for-def-Director③③">Director</a>'s decision.

W3C _must_ publish an <a href="#RecsObs" id="ref-for-RecsObs④">Obsolete</a> or <a href="#RescindedRec" id="ref-for-RescindedRec③">Rescinded Recommendation</a> with up to date status. The updated version _may_ remove the main body of the document. The Status of this Document section _should_ link to the explanation of [Obsoleting and Rescinding W3C Specifications](https://www.w3.org/2016/11/obsoleting-rescinding/) [\[OBS-RESC\]](#biblio-obs-resc) as appropriate.

Once W3C has published a Rescinded Recommendation, future W3C technical reports _must not_ include normative references to that technical report.

Note: W3C strives to ensure that all Technical Reports will continue to be available at their version-specific URL.

### <span class="secno">6.3. </span><span class="content"> Working Group and Interest Group Notes</span><a href="#Note" class="self-link"></a>

A Working Group Note or Interest Group Note (NOTE) is published by a chartered <a href="#GroupsWG" id="ref-for-GroupsWG⑦⑧">Working Group</a> or <a href="#GroupsIG" id="ref-for-GroupsIG①①">Interest Group</a> to provide a stable reference for a useful document that is not intended to be a formal standard, or to document work that was abandoned without producing a <a href="#RecsW3C" id="ref-for-RecsW3C⑦①">Recommendation</a>.

<a href="#GroupsWG" id="ref-for-GroupsWG⑦⑨">Working Groups</a> and <a href="#GroupsIG" id="ref-for-GroupsIG①②">Interest Groups</a> _may_ publish work as <a href="#WGNote" id="ref-for-WGNote⑤">W3C Notes</a>. Examples include:

- supporting documentation for a specification, such as explanations of design principles or use cases and requirements,
- non-normative guides to good practices,
- specifications where work has been stopped and there is no longer consensus for making them a new standard.

Some <a href="#WGNote" id="ref-for-WGNote⑥">W3C Notes</a> are developed through successive <a href="#RecsWD" id="ref-for-RecsWD①③">Working Drafts</a>, with an expectation that they will become <a href="#WGNote" id="ref-for-WGNote⑦">Notes</a>, while others are simply <a href="#publishing" id="ref-for-publishing①③">published</a>. There are few formal requirements to <a href="#publishing" id="ref-for-publishing①④">publish</a> a document as a <a href="#WGNote" id="ref-for-WGNote⑧">W3C Note</a>, and they have no standing as a recommendation of W3C but are simply documents preserved for historical reference.

In order to publish a <a href="#WGNote" id="ref-for-WGNote⑨">Note</a>, a <a href="#GroupsWG" id="ref-for-GroupsWG⑧⓪">Working Group</a> or <a href="#GroupsIG" id="ref-for-GroupsIG①③">Interest Group</a>:

- _may_ <a href="#publishing" id="ref-for-publishing①⑤">publish</a> a <a href="#WGNote" id="ref-for-WGNote①⓪">Note</a> with or without its prior publication as a <a href="#RecsWD" id="ref-for-RecsWD①④">Working Draft</a>.
- _must_ record the group’s decision to request publication as a <a href="#WGNote" id="ref-for-WGNote①①">Note</a>, and
- _should_ publish documentation of significant changes to the technical report since any previous publication.

Possible next steps:

- End state: A technical report _may_ remain a Working or Interest Group <a href="#WGNote" id="ref-for-WGNote①②">Note</a> indefinitely
- A <a href="#GroupsWG" id="ref-for-GroupsWG⑧①">Working Group</a> _may_ resume work on a technical report within the scope of its charter at any time, at the maturity level the specification had before publication as a <a href="#WGNote" id="ref-for-WGNote①③">Note</a>

Note: The W3C Patent Policy [\[PATENT-POLICY\]](#biblio-patent-policy) does not specify any licensing requirements or commitments for Working Group Notes.

### <span class="secno">6.4. </span><span class="content"> Further reading</span><a href="#further-reading" class="self-link"></a>

Refer to ["How to Organize a Recommendation Track Transition"](https://www.w3.org/Guide/transitions) [\[TRANSITION\]](#biblio-transition) in the [Art of Consensus](https://www.w3.org/Guide/) [\[GUIDE\]](#biblio-guide) for practical information about preparing for the reviews and announcements of the various steps, and [tips on getting to Recommendation faster](https://www.w3.org/2002/05/rec-tips) [\[REC-TIPS\]](#biblio-rec-tips). Please see also the [Requirements for modification of W3C Technical Reports](https://www.w3.org/2003/01/republishing/) [\[REPUBLISHING\]](#biblio-republishing).

## <span class="secno">7. </span><span class="content"> Advisory Committee Reviews, Appeals, and Votes</span><a href="#ReviewAppeal" class="self-link"></a>

This section describes how the <a href="#advisory-committee" id="ref-for-advisory-committee①④">Advisory Committee</a> reviews proposals from the <a href="#def-Director" id="ref-for-def-Director③④">Director</a> and how <a href="#advisory-committee-representative" id="ref-for-advisory-committee-representative②①">Advisory Committee representatives</a> initiate an <a href="#advisory-committee-appeal" id="ref-for-advisory-committee-appeal③">Advisory Committee Appeal</a> of a <a href="#def-w3c-decision" id="ref-for-def-w3c-decision③">W3C decision</a> or <a href="#def-Director" id="ref-for-def-Director③⑤">Director</a>'s decision. A W3C decision is one where the <a href="#def-Director" id="ref-for-def-Director③⑥">Director</a> decides, after exercising the role of assessing consensus of the W3C Community after an <a href="#advisory-committee-review" id="ref-for-advisory-committee-review⑨">Advisory Committee review</a>.

### <span class="secno">7.1. </span><span class="content"> Advisory Committee Reviews</span><a href="#ACReview" class="self-link"></a>

The Advisory Committee reviews:

- [new and modified Working and Interest Groups](#CharterReview),
- <a href="#RecsPR" id="ref-for-RecsPR①③">Proposed Recommendations</a>, [Proposals to Obsolete, Rescind, Supersede, or Restore Recommendations](#proposed-rescinded-rec), and
- [Proposed changes to the W3C process](#GAProcess).

#### <span class="secno">7.1.1. </span><span class="content"> Start of a Review Period</span><a href="#ACReviewStart" class="self-link"></a>

Each Advisory Committee review period begins with a Call for Review from the <a href="#team" id="ref-for-team②⑧">Team</a> to the <a href="#advisory-committee" id="ref-for-advisory-committee①⑤">Advisory Committee</a>. The Call for Review describes the proposal, raises attention to deadlines, estimates when the decision will be available, and includes other practical information. Each Member organization _may_ send one review, which _must_ be returned by its <a href="#advisory-committee-representative" id="ref-for-advisory-committee-representative②②">Advisory Committee representative</a>.

The Team _must_ provide two channels for Advisory Committee review comments:

1.  an archived <a href="#Team-only" id="ref-for-Team-only⑤">Team-only</a> channel;
2.  an archived <a href="#Member-only" id="ref-for-Member-only⑨">Member-only</a> channel.

The <a href="#reviewform" id="ref-for-reviewform">Call for Review</a> _must_ specify which channel is the default for review comments on that Call.

Reviewers _may_ send information to either or both channels. They _may_ also share their reviews with other Members on the [Advisory Committee discussion list](#ACCommunication).

A Member organization _may_ modify its review during a review period (e.g., in light of comments from other Members).

#### <span class="secno">7.1.2. </span><span class="content"> After the Review Period</span><a href="#ACReviewAfter" class="self-link"></a>

After the review period, the <a href="#def-Director" id="ref-for-def-Director③⑦">Director</a> _must_ announce to the <a href="#advisory-committee" id="ref-for-advisory-committee①⑥">Advisory Committee</a> the level of support for the proposal (<a href="#def-Consensus" id="ref-for-def-Consensus⑧">consensus</a> or <a href="#def-Dissent" id="ref-for-def-Dissent④">dissent</a>). The <a href="#def-Director" id="ref-for-def-Director③⑧">Director</a> _must_ also indicate whether there were any <a href="#FormalObjection" id="ref-for-FormalObjection①⓪">Formal Objections</a>, with attention to [changing confidentiality level](#confidentiality-change). This <a href="#def-w3c-decision" id="ref-for-def-w3c-decision④">W3C decision</a> is generally one of the following:

1.  The proposal is approved, possibly with <a href="#editorial-change" id="ref-for-editorial-change⑤">editorial changes</a> integrated.
2.  The proposal is approved, possibly with <a href="#substantive-change" id="ref-for-substantive-change①①">substantive changes</a> integrated. In this case the Director’s announcement _must_ include rationale for the decision to advance the document despite the proposal for a substantive change.
3.  The proposal is returned for additional work, with a request to the initiator to <a href="#formally-addressed" id="ref-for-formally-addressed⑧">formally address</a> certain issues.
4.  The proposal is rejected.

This document does not specify time intervals between the end of an <a href="#advisory-committee-review" id="ref-for-advisory-committee-review①⓪">Advisory Committee review</a> period and the <a href="#def-w3c-decision" id="ref-for-def-w3c-decision⑤">W3C decision</a>. This is to ensure that the Members and <a href="#team" id="ref-for-team②⑨">Team</a> have sufficient time to consider comments gathered during the review. The <a href="#advisory-committee" id="ref-for-advisory-committee①⑦">Advisory Committee</a> _should not_ expect an announcement sooner than <span class="time-interval">two weeks</span> after the end of a review period. If, after <span class="time-interval">three weeks</span>, the Director has not announced the outcome, the <a href="#def-Director" id="ref-for-def-Director③⑨">Director</a> _should_ provide the <a href="#advisory-committee" id="ref-for-advisory-committee①⑧">Advisory Committee</a> with an update.

### <span class="secno">7.2. </span><span class="content"> Appeal by Advisory Committee Representatives</span><a href="#ACAppeal" class="self-link"></a>

<a href="#advisory-committee-representative" id="ref-for-advisory-committee-representative②③">Advisory Committee representatives</a> _may_ appeal certain decisions, though appeals are only expected to occur in extraordinary circumstances.

When a <a href="#def-w3c-decision" id="ref-for-def-w3c-decision⑥">W3C decision</a> is made following an <a href="#advisory-committee-review" id="ref-for-advisory-committee-review①①">Advisory Committee review</a>, <a href="#advisory-committee-representative" id="ref-for-advisory-committee-representative②④">Advisory Committee representatives</a> _may_ initiate an Advisory Committee Appeal. These <a href="#def-w3c-decision" id="ref-for-def-w3c-decision⑦">W3C decisions</a> include those related to group creation and modification, and transitions to new maturity levels for Recommendation Track documents and the Process document.

<a href="#advisory-committee-representative" id="ref-for-advisory-committee-representative②⑤">Advisory Committee representatives</a> _may_ also initiate an appeal for certain <a href="#def-Director" id="ref-for-def-Director④⓪">Director</a>'s decisions that do not involve an <a href="#advisory-committee-review" id="ref-for-advisory-committee-review①②">Advisory Committee review</a>. These cases are identified in the sections which describe the requirements for the <a href="#def-Director" id="ref-for-def-Director④①">Director</a>'s decision and include additional (non-reviewed) maturity levels of Recommendation Track documents, group <a href="#dfn-charter-extension" id="ref-for-dfn-charter-extension">charter extensions</a> and closures, and <a href="#mou" id="ref-for-mou">Memoranda of Understanding</a>.

In all cases, an <a href="#advisory-committee-appeal" id="ref-for-advisory-committee-appeal④">appeal</a> _must_ be initiated within <span class="time-interval">three weeks</span> of the decision.

An <a href="#advisory-committee-representative" id="ref-for-advisory-committee-representative②⑥">Advisory Committee representative</a> initiates an <a href="#advisory-committee-appeal" id="ref-for-advisory-committee-appeal⑤">appeal</a> by sending a request to the <a href="#team" id="ref-for-team③⓪">Team</a>. The request should say “I appeal this Director’s Decision” and identify the decision. Within one week the <a href="#team" id="ref-for-team③①">Team</a> _must_ announce the appeal process to the <a href="#advisory-committee" id="ref-for-advisory-committee①⑨">Advisory Committee</a> and provide a mechanism for <a href="#advisory-committee-representative" id="ref-for-advisory-committee-representative②⑦">Advisory Committee representatives</a> to respond with a statement of positive support for this appeal. The archive of these statements _must_ be <a href="#Member-only" id="ref-for-Member-only①⓪">member-only</a>. If, within <span class="time-interval">one week</span> of the Team’s announcement, 5% or more of the <a href="#advisory-committee" id="ref-for-advisory-committee②⓪">Advisory Committee</a> support the appeal request, the Team _must_ organize an appeal vote asking the <a href="#advisory-committee" id="ref-for-advisory-committee②①">Advisory Committee</a> “Do you approve of the Director’s Decision?” together with links to the <a href="#def-Director" id="ref-for-def-Director④②">Director</a>'s decision and the appeal support.

The ballot _must_ allow for three possible responses: “Approve”, “Reject”, and “Abstain”, together with Comments.

If the number of votes to reject exceeds the number of votes to approve, the decision is overturned. In that case, there are the following possible next steps:

1.  The proposal is rejected.
2.  The proposal is returned for additional work, after which the applicable decision process is re-initiated.

### <span class="secno">7.3. </span><span class="content"> Advisory Committee Votes</span><a href="#ACVotes" class="self-link"></a>

The <a href="#advisory-committee" id="ref-for-advisory-committee②②">Advisory Committee</a> votes in [elections for seats on the TAG or Advisory Board](#AB-TAG-elections), and in the event of an <a href="#advisory-committee-appeal" id="ref-for-advisory-committee-appeal⑥">Advisory Committee Appeal</a> achieving the required support to trigger an appeal vote. Whenever the <a href="#advisory-committee" id="ref-for-advisory-committee②③">Advisory Committee</a> votes, each Member or group of <a href="#related-member" id="ref-for-related-member③">related Members</a> has one vote. In the case of [Advisory Board and TAG elections](#AB-TAG-elections), “one vote” means “one vote per available seat”.

## <span class="secno">8. </span><span class="content"> Workshops and Symposia</span><a href="#GAEvents" class="self-link"></a>

The Team organizes Workshops and Symposia<a href="#EventsS" class="self-link"></a> to promote early involvement in the development of W3C activities from Members and the public.

The goal of a Workshop is usually either to convene experts and other interested parties for an exchange of ideas about a technology or policy, or to address the pressing concerns of W3C Members. Organizers of the first type of Workshop _may_ solicit position papers for the Workshop program and _may_ use those papers to choose attendees and/or presenters.

The goal of a Symposium is usually to educate interested parties about a particular subject.

The Call for Participation in a Workshop or Symposium _may_ indicate participation requirements or limits, and expected deliverables (e.g., reports and minutes). Organization of an event does not guarantee further investment by W3C in a particular topic, but _may_ lead to proposals for new activities or groups.

Workshops and Symposia generally last one to three days. If a Workshop is being organized to address the pressing concerns of Members, the Team _must_ issue the Call for Participation no later than <span class="time-interval">six weeks</span> prior to the Workshop’s scheduled start date. For other Workshops and Symposia, the Team _must_ issue a Call for Participation no later than <span class="time-interval">eight weeks</span> prior to the meeting’s scheduled start date. This helps ensure that speakers and authors have adequate time to prepare position papers and talks.

## <span class="secno">9. </span><span class="content"> Liaisons</span><a href="#Liaisons" class="self-link"></a>

W3C uses the term liaison<a href="#liaison" class="self-link"></a> to refer to coordination of activities with a variety of organizations, through a number of mechanisms ranging from very informal (e.g., an individual from another organization participates in a W3C Working Group, or just follows its work) to mutual membership, to even more formal agreements. Liaisons are not meant to substitute for W3C membership.

All liaisons _must_ be coordinated by the <a href="#team" id="ref-for-team③②">Team</a> due to requirements for public communication; patent, copyright, and other IPR policies; confidentiality agreements; and mutual membership agreements.

The <a href="#def-Director" id="ref-for-def-Director④③">W3C Director</a> _may_ negotiate a Memorandum of Understanding with another organization. For the purposes of the W3C Process a Memorandum of Understanding (MoU) is a formal agreement or similar contractual framework between W3C and another party or parties, other than agreements between the <a href="#hosts" id="ref-for-hosts②">Hosts</a> or between <a href="#hosts" id="ref-for-hosts③">Hosts</a> and W3C members for the purposes of membership and agreements related to the ordinary provision of services for the purposes of running W3C, that specifies rights and obligations of each party toward the others. These rights and obligations _may_ include joint deliverables, an agreed share of technical responsibilities with due coordination, and/or considerations for confidentiality and specific IPR. The agreement may be called something other than a “Memorandum of Understanding”, and something called a “Memorandum of Understanding” may not be an <a href="#mou" id="ref-for-mou①">MoU</a> for the purposes of the Process.

Before signing the MoU, the Team _must_ inform the <a href="#advisory-committee" id="ref-for-advisory-committee②④">Advisory Committee</a> of the intent to sign and make the MoU available for <a href="#advisory-committee-review" id="ref-for-advisory-committee-review①③">Advisory Committee review</a>; <a href="#advisory-committee-representative" id="ref-for-advisory-committee-representative②⑧">Advisory Committee representatives</a> _may_ initiate an <a href="#advisory-committee-appeal" id="ref-for-advisory-committee-appeal⑦">Advisory Committee Appeal</a> of the decision to sign the <a href="#mou" id="ref-for-mou②">MoU</a>. Unless an <a href="#advisory-committee-appeal" id="ref-for-advisory-committee-appeal⑧">appeal</a> rejects the proposal to sign an MoU, the <a href="#def-Director" id="ref-for-def-Director④④">Director</a> may sign the <a href="#mou" id="ref-for-mou③">MoU</a> on behalf of W3C. A signed <a href="#mou" id="ref-for-mou④">Memorandum of Understanding</a> _should_ be made public.

Information about [W3C liaisons with other organizations](https://www.w3.org/2001/11/StdLiaison) [\[LIAISON\]](#biblio-liaison) and the guidelines W3C follows when creating a liaison is available on the Web.

## <span class="secno">10. </span><span class="content"> Member Submission Process</span><a href="#Submission" class="self-link"></a>

The Member Submission process allows Members to propose technology or other ideas for consideration by the <a href="#team" id="ref-for-team③③">Team</a>. After review, the <a href="#team" id="ref-for-team③④">Team</a> _may_ make the material available at the W3C Web site. The formal process affords Members a record of their contribution and gives them a mechanism for disclosing the details of the transaction with the Team (including IPR claims). The <a href="#team" id="ref-for-team③⑤">Team</a> also makes review comments on the Submitted materials available for W3C Members, the public, and the media.

A Member Submission consists of:

- One or more documents developed outside of the W3C process, and
- Information about the documents, provided by the Submitter.

One or more Members (called the Submitter(s)) _may_ participate in a Member Submission. Only W3C Members _may_ be listed as <a href="#submitter" id="ref-for-submitter">Submitters</a>.

The Submission process consists of the following steps:

1.  One of the <a href="#submitter" id="ref-for-submitter①">Submitters</a> sends a request to the Team to acknowledge the Submission request. The Team and <a href="#submitter" id="ref-for-submitter②">Submitter</a>(s) communicate to ensure that the <a href="#MemberSubmission" id="ref-for-MemberSubmission">Member Submission</a> is complete.
2.  After <a href="#team" id="ref-for-team③⑥">Team</a> review, the <a href="#def-Director" id="ref-for-def-Director④⑤">Director</a> _must_ either acknowledge or reject the Submission request.
    - If [acknowledged](#SubmissionYes), the Team _must_ make the <a href="#MemberSubmission" id="ref-for-MemberSubmission①">Member Submission</a> available at the public W3C Web site, in addition to Team comments about the <a href="#MemberSubmission" id="ref-for-MemberSubmission②">Member Submission</a>.
    - If [rejected](#SubmissionNo), the <a href="#submitter" id="ref-for-submitter③">Submitter</a>(s) _may_ initiate a [Submission Appeal](#SubmissionNo) to either the <a href="#technical-architecture-group" id="ref-for-technical-architecture-group②①">TAG</a> or the <a href="#advisory-board" id="ref-for-advisory-board①⑥">Advisory Board</a>.

Note: To avoid confusion about the Member Submission process, please note that:

- Documents in a <a href="#MemberSubmission" id="ref-for-MemberSubmission③">Member Submission</a> are developed outside of the W3C [technical report development process](#Reports) (and therefore are not included in the [index of W3C technical reports](https://www.w3.org/TR/) [\[TR\]](#biblio-tr)).
- The Submission process is **not** a means by which Members ask for “ratification” of these documents as <a href="#RecsW3C" id="ref-for-RecsW3C⑦②">W3C Recommendations</a>.
- There is no requirement or guarantee that technology which is part of an acknowledged Submission request will receive further consideration by W3C (e.g., by a W3C <a href="#GroupsWG" id="ref-for-GroupsWG⑧②">Working Group</a>).

Making a Member Submission available at the W3C website does not imply endorsement by W3C, including the W3C Team or Members. The acknowledgment of a Submission request does not imply that any action will be taken by W3C. It merely records publicly that the Submission request has been made by the Submitter. A Member Submission made available by W3C _must not_ be referred to as “work in progress” of the W3C.

The list of [acknowledged Member Submissions](https://www.w3.org/Submission/) [\[SUBMISSION-LIST\]](#biblio-submission-list) is available at the W3C Web site.

### <span class="secno">10.1. </span><span class="content"> Submitter Rights and Obligations</span><a href="#SubmissionRights" class="self-link"></a>

When more than one Member jointly participates in a Submission request, only one Member formally sends in the request. That Member _must_ copy each of the <a href="#advisory-committee-representative" id="ref-for-advisory-committee-representative②⑨">Advisory Committee representatives</a> of the other participating Members, and each of those <a href="#advisory-committee-representative" id="ref-for-advisory-committee-representative③⓪">Advisory Committee representatives</a> _must_ confirm (by email to the Team) their participation in the Submission request.

At any time prior to acknowledgment, any <a href="#submitter" id="ref-for-submitter④">Submitter</a> _may_ withdraw support for a Submission request (described in "[How to send a Submission request](https://www.w3.org/2000/09/submission)" [\[SUBMISSION-REQ\]](#biblio-submission-req)). A Submission request is “withdrawn” when no Submitter(s) support it. The Team _must not_ make statements about withdrawn Submission requests.

Prior to acknowledgment, the <a href="#submitter" id="ref-for-submitter⑤">Submitter</a>(s) _must not_, **under any circumstances**, refer to a document as “submitted to the World Wide Web Consortium” or “under consideration by W3C” or any similar phrase either in public or Member communication. The <a href="#submitter" id="ref-for-submitter⑥">Submitter</a>(s) _must not_ imply in public or Member communication that W3C is working (with the <a href="#submitter" id="ref-for-submitter⑦">Submitter</a>(s)) on the material in the <a href="#MemberSubmission" id="ref-for-MemberSubmission④">Member Submission</a>. The <a href="#submitter" id="ref-for-submitter⑧">Submitter</a>(s) _may_ release the documents in the Member Submission to the public prior to acknowledgment (without reference to the Submission request).

After acknowledgment, the <a href="#submitter" id="ref-for-submitter⑨">Submitter</a>(s) _must not_, **under any circumstances**, imply W3C investment in the Member Submission until, and unless, the material has been adopted as a deliverable of a W3C <a href="#GroupsWG" id="ref-for-GroupsWG⑧③">Working Group</a>.

#### <span class="secno">10.1.1. </span><span class="content"> Scope of Member Submissions</span><a href="#SubmissionScope" class="self-link"></a>

When a technology overlaps in scope with the work of a chartered Working Group, Members _should_ [participate in the Working Group](#group-participation) and contribute the technology to the group’s process rather than seek publication through the Member Submission process. The <a href="#GroupsWG" id="ref-for-GroupsWG⑧④">Working Group</a> _may_ incorporate the contributed technology into its deliverables. If the Working Group does not incorporate the technology, it _should not_ publish the contributed documents as <a href="#WGNote" id="ref-for-WGNote①④">Working Group Notes</a> since <a href="#WGNote" id="ref-for-WGNote①⑤">Working Group Notes</a> represent group output, not input to the group.

On the other hand, while W3C is in the early stages of developing a charter, Members _should_ use the Submission process to build consensus around concrete proposals for new work.

Members _should not_ submit materials covering topics well outside the scope of [W3C’s mission](https://www.w3.org/Consortium/mission) [\[MISSION\]](#biblio-mission).

#### <span class="secno">10.1.2. </span><span class="content"> Information Required in a Submission Request</span><a href="#SubmissionReqs" class="self-link"></a>

The <a href="#submitter" id="ref-for-submitter①⓪">Submitter</a>(s) and any other authors of the submitted material _must_ agree that, if the request is acknowledged, the documents in the Member Submission will be subject to the [W3C Document License](https://www.w3.org/Consortium/Legal/copyright-documents) [\[DOC-LICENSE\]](#biblio-doc-license) and will include a reference to it. The <a href="#submitter" id="ref-for-submitter①①">Submitter</a>(s) _may_ hold the copyright for the documents in a Member Submission.

The request _must_ satisfy the Member Submission licensing commitments in “Licensing Commitments in W3C Submissions” in the W3C Patent Policy [\[PATENT-POLICY\]](#biblio-patent-policy).

The <a href="#submitter" id="ref-for-submitter①②">Submitter</a>(s) _must_ include the following information:

- The list of all submitting Members.
- Position statements from all submitting Members (gathered by the Submitter). All position statements _must_ appear in a separate document.
- Complete electronic copies of any documents submitted for consideration (e.g., a technical specification, a position paper, etc.) If the Submission request is acknowledged, these documents will be made available by W3C and therefore _must_ satisfy the Team’s [Publication Rules](https://www.w3.org/pubrules/) [\[PUBRULES\]](#biblio-pubrules). <a href="#submitter" id="ref-for-submitter①③">Submitters</a> _may_ hold the copyright for the material contained in these documents, but when made available by W3C, these documents _must_ be subject to the provisions of the [W3C Document License](https://www.w3.org/Consortium/Legal/copyright-documents) [\[DOC-LICENSE\]](#biblio-doc-license).

The request _must_ also answer the following questions.

- What proprietary technology is required to implement the areas addressed by the request, and what terms are associated with its use? Again, many answers are possible, but the specific answer will affect the Team’s decision.
- What resources, if any, does the Submitter intend to make available if the W3C acknowledges the Submission request and takes action on it?
- What action would the Submitter like W3C to take if the Submission request is acknowledged?
- What mechanisms are there to make changes to the specification being submitted? This includes, but is not limited to, stating where change control will reside if the request is acknowledged.

For other administrative requirements related to Submission requests, see “[How to send a Submission request](https://www.w3.org/2000/09/submission)” [\[MEMBER-SUB\]](#biblio-member-sub).

### <span class="secno">10.2. </span><span class="content"> Team Rights and Obligations</span><a href="#TeamSubmissionRights" class="self-link"></a>

Although they are not technical reports, the documents in a <a href="#MemberSubmission" id="ref-for-MemberSubmission⑤">Member Submission</a> _must_ fulfil the requirements established by the <a href="#team" id="ref-for-team③⑦">Team</a>, including the Team’s [Publication Rules](https://www.w3.org/pubrules/) [\[PUBRULES\]](#biblio-pubrules).

The <a href="#team" id="ref-for-team③⑧">Team</a> sends a validation notice to the <a href="#submitter" id="ref-for-submitter①④">Submitter</a>(s) once the Team has reviewed a Submission request and judged it complete and correct.

Prior to a decision to [acknowledge](#SubmissionYes) or [reject](#SubmissionNo) the request, the request is <a href="#Team-only" id="ref-for-Team-only⑥">Team-only</a>, and the <a href="#team" id="ref-for-team③⑨">Team</a> _must_ hold it in the strictest confidentiality. In particular, the Team _must not_ comment to the media about the Submission request.

### <span class="secno">10.3. </span><span class="content"> Acknowledgment of a Submission Request</span><a href="#SubmissionYes" class="self-link"></a>

The <a href="#def-Director" id="ref-for-def-Director④⑥">Director</a> [acknowledges](#SubmissionYes) a Submission request by sending an announcement to the <a href="#advisory-committee" id="ref-for-advisory-committee②⑤">Advisory Committee</a>. Though the announcement _may_ be made at any time, the <a href="#submitter" id="ref-for-submitter①⑤">Submitter</a>(s) can expect an announcement between <span class="time-interval">four to six weeks</span> after the <a href="#validation-notice" id="ref-for-validation-notice">validation notice</a>. The <a href="#team" id="ref-for-team④⓪">Team</a> _must_ keep the <a href="#submitter" id="ref-for-submitter①⑥">Submitter</a>(s) informed of when an announcement is likely to be made.

Once a Submission request has been acknowledged, the <a href="#team" id="ref-for-team④①">Team</a> _must_:

- Make the <a href="#MemberSubmission" id="ref-for-MemberSubmission⑥">Member Submission</a> available at the W3C website.
- Make the Team comments about the Submission request available at the W3C website.

If the <a href="#submitter" id="ref-for-submitter①⑦">Submitter</a>(s) wishes to modify a document made available as the result of acknowledgment, the Submitter(s) _must_ start the Submission process from the beginning, even just to correct <a href="#editorial-change" id="ref-for-editorial-change⑥">editorial changes</a>.

### <span class="secno">10.4. </span><span class="content"> Rejection of a Submission Request, and Submission Appeals</span><a href="#SubmissionNo" class="self-link"></a>

The <a href="#def-Director" id="ref-for-def-Director④⑦">Director</a> _may_ reject a Submission request for a variety of reasons, including any of the following:

- The ideas expressed in the request overlap in scope with the work of a chartered Working Group, and acknowledgment might jeopardize the progress of the group.
- The IPR statement made by the <a href="#submitter" id="ref-for-submitter①⑧">Submitter</a>(s) is inconsistent with the W3C’s Patent Policy [\[PATENT-POLICY\]](#biblio-patent-policy) and in particular the “Licensing Commitments in W3C Submissions”, [Document License](https://www.w3.org/Consortium/Legal/copyright-documents) [\[DOC-LICENSE\]](#biblio-doc-license), or other IPR policies.
- The ideas expressed in the request are poor, might harm the Web, or run counter to [W3C’s mission](https://www.w3.org/Consortium/mission) [\[MISSION\]](#biblio-mission).
- The ideas expressed in the request lie well outside the scope of W3C’s mission.

In case of a rejection, the <a href="#team" id="ref-for-team④②">Team</a> _must_ inform the <a href="#advisory-committee-representative" id="ref-for-advisory-committee-representative③①">Advisory Committee representative</a>(s) of the <a href="#submitter" id="ref-for-submitter①⑨">Submitter</a>(s). If requested by the <a href="#submitter" id="ref-for-submitter②⓪">Submitter</a>(s), the <a href="#team" id="ref-for-team④③">Team</a> _must_ provide rationale to the <a href="#submitter" id="ref-for-submitter②①">Submitter</a>(s) about the rejection. Other than to the <a href="#submitter" id="ref-for-submitter②②">Submitter</a>(s), the Team _must not_ make statements about why a Submission request was rejected.

The <a href="#advisory-committee-representative" id="ref-for-advisory-committee-representative③②">Advisory Committee representative</a>(s) of the <a href="#submitter" id="ref-for-submitter②③">Submitters</a>(s) _may_ initiate a Submission Appeal of the Team’s Decision to the <a href="#technical-architecture-group" id="ref-for-technical-architecture-group②②">TAG</a> if the reasons are related to Web architecture, or to the <a href="#advisory-board" id="ref-for-advisory-board①⑦">Advisory Board</a> if the request is rejected for other reasons. In this case the <a href="#team" id="ref-for-team④④">Team</a> _should_ make available its rationale for the rejection to the appropriate body. The <a href="#team" id="ref-for-team④⑤">Team</a> will establish a process for such appeals that ensures the appropriate [level of confidentiality](#confidentiality-levels).

## <span class="secno">11. </span><span class="content"> Process Evolution</span><a href="#GAProcess" class="self-link"></a>

Revision of the W3C Process and related documents (see below) undergoes similar <a href="#def-Consensus" id="ref-for-def-Consensus⑨">consensus</a>-building processes as for <a href="#technical-report" id="ref-for-technical-report①④">technical reports</a>, with the <a href="#advisory-board" id="ref-for-advisory-board①⑧">Advisory Board</a>—acting as the sponsoring <a href="#GroupsWG" id="ref-for-GroupsWG⑧⑤">Working Group</a>. The documents may be developed by the <a href="#advisory-board" id="ref-for-advisory-board①⑨">AB</a> or by another group to whom the <a href="#advisory-board" id="ref-for-advisory-board②⓪">AB</a> has delegated development. Review includes soliciting input from the W3C community, and in particular the Team.

The documents covered by this section are:

- the W3C Process (this document)

- the W3C Patent Policy [\[PATENT-POLICY\]](#biblio-patent-policy)

- the W3C Code of Ethics and Professional Conduct [\[CEPC\]](#biblio-cepc)

The <a href="#advisory-board" id="ref-for-advisory-board②①">Advisory Board</a> initiates review as follows:

1.  The <a href="#team" id="ref-for-team④⑥">Team</a> sends a Call for Review to the <a href="#advisory-committee" id="ref-for-advisory-committee②⑥">Advisory Committee</a> and other W3C groups.
2.  After comments have been <a href="#formally-addressed" id="ref-for-formally-addressed⑨">formally addressed</a> and the document possibly modified, the Team seeks endorsement from the Members by initiating an <a href="#advisory-committee-review" id="ref-for-advisory-committee-review①④">Advisory Committee review</a>. The review period _must_ last at least <span class="time-interval">28 days</span>.
3.  [After the Advisory Committee review](#ACReviewAfter), following a <a href="#def-w3c-decision" id="ref-for-def-w3c-decision⑧">W3C decision</a> to adopt the document(s), the Team does so and sends an announcement to the <a href="#advisory-committee" id="ref-for-advisory-committee②⑦">Advisory Committee</a>. Advisory Committee representatives _may_ initiate an <a href="#advisory-committee-appeal" id="ref-for-advisory-committee-appeal⑨">Advisory Committee Appeal</a> to the W3C.

Note: As of June 2020, the [Patent Policy](#biblio-patent-policy) is developed in the [Patents and Standards Interest Group](https://www.w3.org/2004/pp/psig/), the [Code of Ethics and Professional Conduct](#biblio-cepc) in the [Positive Work Environment Community Group](https://www.w3.org/community/pwe/), and the Process in the [W3C Process Community Group](https://www.w3.org/community/w3process/).

## <span class="secno">12. </span><span class="content"> Acknowledgments</span><a href="#acks" class="self-link"></a>

_This section is non-normative._

The editors are grateful to the following people, who as interested individuals and/or with the affiliation(s) listed, have contributed to this proposal for a revised Process: Brian Kardell, Carine Bournez (W3C), Charles McCathie Nevile (ConsenSys), Chris Wilson (Google), David Singer (Apple), Delfí Ramírez, Dominique Hazaël-Massieux (W3C), Elika J. Etemad aka fantasai, Fuqiao Xue (W3C), Jeff Jaffe (W3C), Kevin Fleming (Bloomberg), Léonie Watson (The Paciello Group), Michael Champion (Microsoft), Nigel Megitt (BBC), Philippe Le Hégaret (W3C), Ralph Swick (W3C), Samuel Weiler (W3C), Sandro Hawke (W3C), Tantek Çelik (Mozilla), Virginia Fournier (Apple), Wendy Seltzer (W3C), Yves Lafon (W3C).

The editors are sorry for forgetting any names, and grateful to those who have listened patiently to conversations about this document without feeling a need to add more.

The following individuals contributed to the development of earlier versions of the Process: Alex Russell (Google), Andreas Tai (Institut fuer Rundfunktechnik), Andrew Betts (Fastly), Ann Bassetti (The Boeing Company), Anne van Kesteren, Art Barstow (Nokia, unaffiliated), Bede McCall (MITRE), Ben Wilson, Brad Hill (Facebook), Brian Kardell (JQuery), Carine Bournez (W3C), Carl Cargill (Netscape, Sun Microsystems, Adobe), Chris Lilley (W3C), Chris Wilson (Google), Claus von Riegen (SAP AG), Coralie Mercier (W3C), Cullen Jennings (Cisco), Dan Appelquist (Telefonica, Samsung), Dan Connolly (W3C), Daniel Dardailler (W3C), Daniel Glazman (Disruptive Innovations), David Baron (Mozilla), David Fallside (IBM), David Singer (Apple), David Singer (IBM), Delfí Ramírez, Dominique Hazaël-Massieux (W3C), Don Brutzman (Web3D), Don Deutsch (Oracle), Eduardo Gutentag (Sun Microsystems), Elika J. Etemad aka fantasai, Florian Rivoal, Fuqiao Xue (W3C), Geoffrey Creighton (Microsoft), Geoffrey Snedden, Giri Mandyam (Qualcomm), Gregg Kellogg, Hadley Beeman, Helene Workman (Apple), Henri Sivonen (Mozilla), Håkon Wium Lie (Opera Software), Ian Hickson (Google), Ian Jacobs (W3C), Ivan Herman (W3C), J Alan Bird (W3C), Jay Kishigami 岸上順一 (NTT), Jean-Charles Verdié (MStar), Jean-François Abramatic (IBM, ILOG, W3C), Jeff Jaffe (W3C), Jim Bell (HP), Jim Miller (W3C), Joe Hall (CDT), John Klensin (MCI), Josh Soref (BlackBerry, unaffiliated), Judy Brewer (W3C), Judy Zhu 朱红儒 (Alibaba), Kari Laihonen (Ericsson), Karl Dubost (Mozilla), Ken Laskey (MITRE), Kevin Fleming (Bloomberg), Klaus Birkenbihl (Fraunhofer Gesellschaft), Larry Masinter (Adobe Systems), Lauren Wood (unaffiliated), Liam Quin (W3C), Léonie Watson (The Paciello Group), Marcos Cáceres (Mozilla), Maria Courtemanche (IBM), Mark Crawford (SAP), Mark Nottingham, Michael Champion (Microsoft), Michael Geldblum (Oracle), Mike West (Google), Mitch Stoltz (EFF), Natasha Rooney (GSMA), Nigel Megitt (BBC), Olle Olsson (SICS), Ora Lassila (Nokia), Paul Cotton (Microsoft), Paul Grosso (Arbortext), Peter Linss, Peter Patel-Schneider, Philippe Le Hégaret (W3C), Qiuling Pan (Huawei), Ralph Swick (W3C), Renato Iannella (IPR Systems), Rigo Wenning (W3C), Rob Sanderson (J Paul Getty Trust), Robin Berjon (W3C), Sally Khudairi (W3C), Sam Ruby (IBM), Sandro Hawke (W3C), Sangwhan Moon (Odd Concepts), Scott Peterson (Google), Steve Holbrook (IBM), Steve Zilles (Adobe Systems) Steven Pemberton (CWI), TV Raman (Google), Tantek Çelik (Mozilla), Terence Eden (Her Majesty’s Government), Thomas Reardon (Microsoft), Tim Berners-Lee (W3C), Tim Krauskopf (Spyglass), Travis Leithead (Microsoft), Virginia Fournier (Apple), Virginie Galindo (Gemalto), Wayne Carr (Intel), Wendy Fong (Hewlett-Packard), Wendy Seltzer (W3C), Yves Lafon (W3C).

## <span class="secno">13. </span><span class="content"> Changes</span><a href="#changes" class="self-link"></a>

_This section is non-normative._

### <span class="content"> Changes since the [1 March 2019 Process](https://www.w3.org/2019/Process-20190301/)</span><a href="#changes-2019" class="self-link"></a>

This document is based on the [1 March 2019 Process](https://www.w3.org/2019/Process-20190301/). A [Disposition of Comments](https://w3c.github.io/w3process/issues-20190301), as well as a [detailed log of all changes since then](https://github.com/w3c/w3process/compare/process-2019...2020-candidate) are available.

A [diff comparing it to the 2019 edition of the Process](https://services.w3.org/htmldiff?doc1=https%3A%2F%2Fwww.w3.org%2F2019%2FProcess-20190301%2F&doc2=https%3A%2F%2Fw3c.github.io%2Fw3process%2Fsnapshots%2F2020-06-25) is available. Note that due to overlapping changes, this diff may be somewhat difficult to review. In order to make review easier, several partial diffs, grouping related changes, are available as well, as detailed below.

#### <span class="content"> Major Update to the Recommendation Track</span><a href="#major-changes-2019" class="self-link"></a>

Significant additions and modifications were made to the Recommendation Track. While the meaning of the various maturities and associated transition criteria are unchanged, important additions have been made to what can be done during CR and REC phases. These aim to facilitate maintenance of specifications, and to provide a Living Standards capability as a native capability of the W3C Recommendation Track.

- Work-in-progress updates to CRs can be published on TR as <a href="#candidate-recommendation-draft" id="ref-for-candidate-recommendation-draft⑦">Candidate Recommendation Drafts</a>. This allows the Working Group to publish the latest state of their work and to get wide review on the official copy, without having to direct readers to an unofficial Editor’s Draft.
- An simultaneous update of the Patent Policy is planned and the Process has been adjusted to tie into it. Together, they provide patent protection from the CR stage, as opposed to having to wait for the Recommendation as needed today.
- Errata and related changes can be informatively annotated inline in a Recommendation, and republished without W3C approval. This too allows the Working Group to publish the latest state of their work and to get wide review on the official copy, without having to direct readers to an unofficial Editor’s Draft, or separate errata documents.
- Once some of these <a href="#candidate-change" id="ref-for-candidate-change⑦">candidate changes</a> have reached sufficient maturity to be part of the Recommendation, and once it has secured the usual approvals (Director review, AC Review), the Working Group can fold them into the Recommendation as normative text, republish the Recommendation directly, without intermediate publication as CR or PR.
- Both the addition of new <a href="#candidate-change" id="ref-for-candidate-change⑧">candidate changes</a> and the normative incorporation of mature <a href="#proposed-changes" id="ref-for-proposed-changes①⓪">proposed changes</a> into the Recommendation can be done incrementally, allowing complex specifications to be gradually improved without having to fix everything before anything can be republished.
- Similarly to <a href="#candidate-correction" id="ref-for-candidate-correction④">candidate corrections</a> which correct errors, <a href="#candidate-addition" id="ref-for-candidate-addition③">candidate additions</a> to a Recommendation can be annotated inline, then made normative when sufficiently mature. This is limited to Recommendations explicitly identifying themselves as allowing new features, so as to avoid breaking expectation of feature-set stability on Recommendations that have already been published without this note.
- When certain objective criteria are met, both the CR-to-REC transition and the REC-to-REC update can be automatically approved and skip the usual “transition call”. Further developments in tooling may later reduce friction on this “fast-path”.

Some minor simplifications have also been made:

- Drop the distinction between Recommendation and Edited Recommendation.
- Don’t require documenting editorial changes since the previous CR.

A [diff comparing the state before/after these changes](https://services.w3.org/htmldiff?doc1=https%3A%2F%2Fw3c.github.io%2Fw3process%2Fsnapshots%2F2020-01-09-refactor.html&doc2=https%3A%2F%2Fw3c.github.io%2Fw3process%2Fsnapshots%2Fafter-everblue.html) is available.

#### <span class="content"> Other Substantive Changes and Clarifications</span><a href="#other-changes-2019" class="self-link"></a>

A [diff comparing the state before/after these changes](https://services.w3.org/htmldiff?doc1=https%3A%2F%2Fw3c.github.io%2Fw3process%2Fsnapshots%2F2019-02-04-bikesheded.html&doc2=https%3A%2F%2Fw3c.github.io%2Fw3process%2Fsnapshots%2F2020-01-09-before-everblue.html) is available.

- Retire the “Team Submissions” (_not_ “Member Submissions”) mechanism, as it is unused, does not provide the Team with abilities it doesn’t already have, nor provides meaningful governance of the Team’s communications.
- Define that the process to revise the CEPC and Patent Policy are the same as for revising the Process
- Avoid using the specialized term “<a href="#publishing" id="ref-for-publishing①⑥">publish</a>” to mean anything other than putting documents on TR.
- Avoid using the specialized term “<a href="#def-Dissent" id="ref-for-def-Dissent⑤">dissent</a>” in situations that do not involve Formal Objections.
- Phrasing clarifications and removal of unnecessary text in [§ 2.5.1 Advisory Board and Technical Architecture Group Participation Constraints](#AB-TAG-constraints) and [§ 7.1.2 After the Review Period](#ACReviewAfter).
- Clarify that appeal statements are meant to be member-only.
- Clarify that Working Drafts have some, even if limited, standing.
- Resolve minor wording conflict as to whether charters "should" or "may" include formal voting procedures.
- Delete references to non existing parts of the Patent policy, previously invoked in the TAG participation section.
- Remove a spurious link that made it look like AC-Reps were involved when participants in the TAG or AB resign.
- Add some sub-section headings to improve readability and cross-section linking
- Clarify the rule on vacant seats in [§ 2.5.2 Advisory Board and Technical Architecture Group Elections](#AB-TAG-elections)
- Eliminate the use of the undefined “minor changes” term
- Define and differentiate between Group Decisions and Chair Decisions.
- Add note clarifying when it is appropriate to use the superseding process, and when not.
- Add Note about the flexibility of Consensus.

#### <span class="content"> Notable Editorial Changes</span><a href="#editorial-changes-2019" class="self-link"></a>

- Converted the source code of the process to the [Bikeshed](https://tabatkins.github.io/bikeshed/) document format, improving the ease of maintenance, and gaining better cross linking capabilities as well as an [Index](#index) in the process. Note that while this makes no change to the text of the process, it is a large change of the source code, and source level diffs are unlikely to be of help to compare the before and after state.

  A [diff comparing the state before/after this change](https://services.w3.org/htmldiff?doc1=https%3A%2F%2Fwww.w3.org%2F2019%2FProcess-20190301%2F&doc2=https%3A%2F%2Fw3c.github.io%2Fw3process%2Fsnapshots%2F2019-02-04-bikesheded.html) is available.

- Section [§ 6 W3C Technical Report Development Process](#Reports) has been reorganized, to disentangle definitions of the various maturities from the steps needed to publish and to transition form one maturity to another.

  A [diff comparing the state before/after this change](https://services.w3.org/htmldiff?doc1=https%3A%2F%2Fw3c.github.io%2Fw3process%2Fsnapshots%2F2020-01-09-before-everblue.html&doc2=https%3A%2F%2Fw3c.github.io%2Fw3process%2Fsnapshots%2F2020-01-09-refactor.html) is available. Note that this reorganization was done prior to the major changes to the Recommendation track mentioned earlier.

#### <span class="content"> Final adjustements</span><a href="#additional-changes-2019" class="self-link"></a>

Based on a cycle of review by the Advisory Committee and the broader community of the changes described above, a few final adjustments were made:

- Clarify the definition of W3C Decision, to make it clear that the Director actually has decision power, and does take the input of the whole community into account.
- Adjust the wording of section [§ 11 Process Evolution](#GAProcess) to clarify responsibilities.
- Define the published candidate changes to be treated as Working Drafts for the purpose of the Patent Policy.
- Remove statement from introductory text on the REC track about the kind of feedback the AC is expected to provide during the CR phase.
- Rename "proposed changes" to "candidate changes", and use the term "proposed changes" to refer to the subset which is under AC review.
- Adjust a section title for easier referencing.
- Adjust grammar in a list of requirements so that all entries have the same subject.
- Use consistent terminology to refer to Candidate Recommednation Snapshotsa.
- Fix a typo and use more appropriate vocabulary ("previous" rather than "old")

A [diff comparing the state before/after these changes](https://services.w3.org/htmldiff?doc1=https%3A%2F%2Fw3c.github.io%2Fw3process%2Fsnapshots%2Fafter-everblue.html&doc2=https%3A%2F%2Fw3c.github.io%2Fw3process%2Fsnapshots%2F2020-08-14) is available.

### <span class="content"> Changes since earlier versions</span><a href="#changes-previous" class="self-link"></a>

Changes since earlier version of the Process are detailed in the [changes section of the previous version](https://www.w3.org/2019/Process-20190301/#changes) of the Process.

## <span class="content">References</span><a href="#references" class="self-link"></a>

### <span class="content">Normative References</span><a href="#normative" class="self-link"></a>

\[CEPC\]  
[W3C Code of Ethics and Professional Conduct](https://www.w3.org/Consortium/cepc/). URL: <https://www.w3.org/Consortium/cepc/>

\[COLLABORATORS-AGREEMENT\]  
[Invited expert and collaborators agreement](https://www.w3.org/Consortium/Legal/collaborators-agreement). URL: <https://www.w3.org/Consortium/Legal/collaborators-agreement>

\[CONFLICT-POLICY\]  
[Conflict of Interest Policy for W3C Team Members Engaged in Outside Professional Activities](https://www.w3.org/2000/09/06-conflictpolicy). URL: <https://www.w3.org/2000/09/06-conflictpolicy>

\[DOC-LICENSE\]  
[W3C Document License](https://www.w3.org/Consortium/Legal/copyright-documents). URL: <https://www.w3.org/Consortium/Legal/copyright-documents>

\[PATENT-POLICY\]  
[The W3C 2020 Patent Policy](https://www.w3.org/Consortium/Patent-Policy-20200915/). URL: <https://www.w3.org/Consortium/Patent-Policy-20200915/>

\[PATENT-POLICY-2017\]  
[The W3C 2004 Patent Policy, Updated 2017](https://www.w3.org/Consortium/Patent-Policy-20170801/). URL: <https://www.w3.org/Consortium/Patent-Policy-20170801/>

\[PUBRULES\]  
[Publication Rules](https://www.w3.org/pubrules/). URL: <https://www.w3.org/pubrules/>

\[RFC2119\]  
S. Bradner. [Key words for use in RFCs to Indicate Requirement Levels](https://tools.ietf.org/html/rfc2119). March 1997. Best Current Practice. URL: <https://tools.ietf.org/html/rfc2119>

\[RFC3797\]  
D. Eastlake 3rd. [Publicly Verifiable Nominations Committee (NomCom) Random Selection](https://tools.ietf.org/html/rfc3797). June 2004. Informational. URL: <https://tools.ietf.org/html/rfc3797>

### <span class="content">Informative References</span><a href="#informative" class="self-link"></a>

\[AB-HP\]  
[The Advisory Board home page](https://www.w3.org/2002/ab/). URL: <https://www.w3.org/2002/ab/>

\[AC-MEETING\]  
[Advisory Committee meetings (Member-only access)](https://www.w3.org/Member/Meeting/). URL: <https://www.w3.org/Member/Meeting/>

\[BG-CG\]  
[Community and Business Group Process](https://www.w3.org/community/about/agreements/). URL: <https://www.w3.org/community/about/agreements/>

\[CALENDAR\]  
[Calendar of all scheduled official W3C events](https://www.w3.org/participate/eventscal). URL: <https://www.w3.org/participate/eventscal>

\[CHAIR\]  
[W3C Working/Interest Group Chair](https://www.w3.org/Guide/chair/role.html). URL: <https://www.w3.org/Guide/chair/role.html>

\[CHARTER\]  
[How to Create a Working Group or Interest Group](https://www.w3.org/Guide/process/charter.html). URL: <https://www.w3.org/Guide/process/charter.html>

\[CURRENT-AC\]  
[Current Advisory Committee representatives (Member-only access)](https://www.w3.org/Member/ACList). URL: <https://www.w3.org/Member/ACList>

\[DISCIPLINARY-GL\]  
[Guidelines for Disciplinary Action](https://www.w3.org/2002/09/discipline). URL: <https://www.w3.org/2002/09/discipline>

\[ELECTION-HOWTO\]  
[How to Organize an Advisory Board or TAG election](https://www.w3.org/2002/10/election-howto). URL: <https://www.w3.org/2002/10/election-howto>

\[FELLOWS\]  
[W3C Fellows Program](https://www.w3.org/Consortium/Recruitment/Fellows). URL: <https://www.w3.org/Consortium/Recruitment/Fellows>

\[GROUP-MAIL\]  
[Group mailing lists (Member-only access)](https://www.w3.org/Member/Groups). URL: <https://www.w3.org/Member/Groups>

\[GUIDE\]  
[The Art of Consensus, a guidebook for W3C Working Group Chairs and other collaborators](https://www.w3.org/Guide/). URL: <https://www.w3.org/Guide/>

\[INTRO\]  
[Process, Patent Policy, Finances, Specs management, Strategic vision (Member-only access)](https://www.w3.org/Member/Intro). URL: <https://www.w3.org/Member/Intro>

\[JOIN\]  
[How to Join W3C](https://www.w3.org/Consortium/join). URL: <https://www.w3.org/Consortium/join>

\[LIAISON\]  
[W3C liaisons with other organizations](https://www.w3.org/2001/11/StdLiaison). URL: <https://www.w3.org/2001/11/StdLiaison>

\[MEMBER-AGREEMENT\]  
[W3C Membership Agreement](https://www.w3.org/Consortium/Agreement/Member-Agreement). URL: <https://www.w3.org/Consortium/Agreement/Member-Agreement>

\[MEMBER-HP\]  
[Member Web site (Member-only access)](https://www.w3.org/Member/). URL: <https://www.w3.org/Member/>

\[MEMBER-LIST\]  
[The list of current W3C Members](https://www.w3.org/Consortium/Member/List). URL: <https://www.w3.org/Consortium/Member/List>

\[MEMBER-SUB\]  
[How to send a Submission request](https://www.w3.org/2000/09/submission). URL: <https://www.w3.org/2000/09/submission>

\[MISSION\]  
[The W3C Mission statement](https://www.w3.org/Consortium/mission). URL: <https://www.w3.org/Consortium/mission>

\[OBS-RESC\]  
[Obsoleting and Rescinding W3C Specifications](https://www.w3.org/2016/11/obsoleting-rescinding/). URL: <https://www.w3.org/2016/11/obsoleting-rescinding/>

\[REC-TIPS\]  
[Tips for Getting to Recommendation Faster](https://www.w3.org/2002/05/rec-tips). URL: <https://www.w3.org/2002/05/rec-tips>

\[REPUBLISHING\]  
[In-place modification of W3C Technical Reports](https://www.w3.org/2003/01/republishing/). URL: <https://www.w3.org/2003/01/republishing/>

\[SUBMISSION-LIST\]  
[The list of acknowledged Member Submissions](https://www.w3.org/Submission/). URL: <https://www.w3.org/Submission/>

\[SUBMISSION-REQ\]  
[Make or Withdraw a Member Submission Request (Member-only access)](https://www.w3.org/2000/09/submission). URL: <https://www.w3.org/2000/09/submission>

\[TAG-CHARTER\]  
[Technical Architecture Group (TAG) Charter](https://www.w3.org/2004/10/27-tag-charter.html). URL: <https://www.w3.org/2004/10/27-tag-charter.html>

\[TAG-HP\]  
[The TAG home page](https://www.w3.org/2001/tag/). URL: <https://www.w3.org/2001/tag/>

\[TEAM-CONTACT\]  
[Role of the Team Contact](https://www.w3.org/Guide/teamcontact/role.html). URL: <https://www.w3.org/Guide/teamcontact/role.html>

\[TR\]  
[The W3C technical reports index](https://www.w3.org/TR/). URL: <https://www.w3.org/TR/>

\[TRANSITION\]  
[Organize a Technical Report Transition](https://www.w3.org/Guide/transitions). URL: <https://www.w3.org/Guide/transitions>

\[TRANSLATION\]  
[Translations of W3C technical reports](https://www.w3.org/Consortium/Translation/). URL: <https://www.w3.org/Consortium/Translation/>

## <span class="content">Index</span><a href="#index" class="self-link"></a>

### <span class="content">Terms defined by this specification</span><a href="#index-defined-here" class="self-link"></a>

- [AB](#advisory-board), in §2.3
- [AC](#advisory-committee), in §2.1
- [AC Appeal](#advisory-committee-appeal), in §7.2
- [AC representative](#advisory-committee-representative), in §2.1
- [AC Review](#advisory-committee-review), in §7.1.1
- [adequate implementation experience](#adequate-implementation), in §6.2.2
- [Adopted Draft](#adopted-draft), in §5.2.6
- [Advisory Board](#advisory-board), in §2.3
- [Advisory Committee](#advisory-committee), in §2.1
- [Advisory Committee Appeal](#advisory-committee-appeal), in §7.2
- [Advisory Committee representative](#advisory-committee-representative), in §2.1
- [Advisory Committee review](#advisory-committee-review), in §7.1.1
- [allow new features](#allow-new-features), in §6.2.9
- [Amended Recommendation](#rec-amended), in §6.2.1
- [Appeal](#advisory-committee-appeal), in §7.2
- [at risk](#at-risk), in §6.2.7
- [Call for Review](#reviewform), in §7.1.1
- [candidate addition](#candidate-addition), in §6.1.5
- [candidate change](#candidate-change), in §6.1.5
- [candidate correction](#candidate-correction), in §6.1.5
- [Candidate Recommendation](#RecsCR), in §6.2.1
- [Candidate Recommendation Draft](#candidate-recommendation-draft), in §6.2.1
- [Candidate Recommendation Snapshot](#candidate-recommendation-snapshot), in §6.2.1
- [Chair](#GeneralChairs), in §5.1
- [Chair Decision Appeal](#chair-decision-appeal), in §3.5
- [Chair Decisions](#chair-decisions), in §3.5
- [charter](#charter), in §5.2.6
- [charter extension](#dfn-charter-extension), in §5.2.5
- [Consensus](#def-Consensus), in §3.3
- [CR](#RecsCR), in §6.2.1
- [Director](#def-Director), in §2.2
- [Dissent](#def-Dissent), in §3.3
- [distributed meeting](#distributed-meeting), in §3.2
- [ED](#editors-draft), in §6.2.1
- [Editor Draft](#editors-draft), in §6.2.1
- [editorial changes](#editorial-change), in §6.1.3
- [Editor’s Draft](#editors-draft), in §6.2.1
- [errata](#erratum), in §6.1.4
- [erratum](#erratum), in §6.1.4
- [Exclusion Draft](#exclusion-draft), in §5.2.6
- [face-to-face meeting](#ftf-meeting), in §3.2
- [First Public Working Draft](#fpwd), in §6.2.1
- [formally addressed](#formally-addressed), in §3.3.3
- [Formal Objection](#FormalObjection), in §3.3.2
- [Group Decision Appeal](#wg-decision-appeal), in §3.5
- [Group Decisions](#group-decisions), in §3.5
- [Host institutions](#hosts), in §2.2
- [Hosts](#hosts), in §2.2
- [IG Note](#WGNote), in §6.3
- [Interest Group Note](#WGNote), in §6.3
- [Interest Groups](#GroupsIG), in §5.2
- [Invited Expert in an Interest Group](#invited-expert-in-an-interest-group), in §5.2.1.4
- [Invited Expert in a Working Group](#invited-expert-in-a-working-group), in §5.2.1.3
- [Last Call for Review of Proposed Additions](#last-call-for-review-of-proposed-additions), in §6.2.11.5
- [Last Call for Review of Proposed Changes](#last-call-review), in §6.2.11.5
- [Last Call for Review of Proposed Corrections](#last-call-for-review-of-proposed-corrections), in §6.2.11.5
- [Last Call for Review of Proposed Corrections and Additions](#last-call-for-review-of-proposed-corrections-and-additions), in §6.2.11.5
- [liaison](#liaison), in §9
- [Member Consortia](#fdn-member-consortium), in §2.1.2.1
- [Member Consortium](#fdn-member-consortium), in §2.1.2.1
- [Member-Only](#Member-only), in §4.1
- [Member representative in an Interest Group](#member-representative-in-an-interest-group), in §5.2.1.2
- [Member representative in a Working Group](#member-representative-in-a-working-group), in §5.2.1.1
- [Member Submission](#MemberSubmission), in §10
- [Memoranda of Understanding](#mou), in §9
- [Memorandum of Understanding](#mou), in §9
- [MoU](#mou), in §9
- [Note](#WGNote), in §6.3
- [not required](#not-required), in §Unnumbered section
- [Obsolete Recommendation](#RecsObs), in §6.2.1
- [Other Charter](#other-charter), in §5.2.6
- [participants in an Interest Group](#igparticipant), in §5.2.1
- [participants in a Working Group](#wgparticipant), in §5.2.1
- [participate in a Working Group as an Invited Expert](#inv-expert-info), in §5.2.1.3
- [Patent Review Drafts](#patent-review-drafts), in §6.2
- [PR](#RecsPR), in §6.2.1
- [primary affiliation](#primary-affiliation), in §2.5.2
- [proposed addition](#proposed-addition), in §6.2.11.5
- [proposed changes](#proposed-changes), in §6.2.11.5
- [proposed corrections](#proposed-corrections), in §6.2.11.5
- [Proposed Recommendation](#RecsPR), in §6.2.1
- [proxy](#proxy), in §3.4
- [public participants](#public-participant-ig), in §5.2.1
- [publish](#publishing), in §6.1
- [REC](#RecsW3C), in §6.2.1
- [Recommendation](#RecsW3C), in §6.2.1
- [Recommendation Track](#w3c-recommendation-track), in §6.2
- [REC Track](#w3c-recommendation-track), in §6.2
- [Related Member](#related-member), in §2.1.2.2
- [Rescinded Candidate Recommendation](#rescinded-candidate-recommendation), in §6.2.1
- [Rescinded Recommendation](#RescindedRec), in §6.2.1
- [submitter](#submitter), in §10
- [subsidiary](#subsidiary), in §2.1.2.2
- [substantive changes](#substantive-change), in §6.1.3
- [substitute](#mtg-substitute), in §5.2.1
- [Superseded Recommendation](#RecsSup), in §6.2.1
- [Symposia](#EventsS), in §8
- [Symposium](#EventsS), in §8
- [TAG](#technical-architecture-group), in §2.4
- [Team](#team), in §2.2
- [Team Contact](#TeamContact), in §5.1
- [Team-Only](#Team-only), in §4.1
- [Team representative in an Interest Group](#team-representative-in-an-interest-group), in §5.2.1.6
- [Team representative in a Working Group](#team-representative-in-a-working-group), in §5.2.1.5
- [Technical Architecture Group](#technical-architecture-group), in §2.4
- [Technical Report](#technical-report), in §6.1
- [Transition Requests](#trans-req), in §6.2.3
- [Unanimity](#def-Unanimity), in §3.3
- [Update Requests](#update-requests), in §6.2.4
- [validation notice](#validation-notice), in §10.2
- [W3C Candidate Recommendation](#RecsCR), in §6.2.1
- [W3C decision](#def-w3c-decision), in §7
- [W3C Director](#def-Director), in §2.2
- [W3C Fellows](#fellows), in §2.2
- [W3C Note](#WGNote), in §6.3
- [W3C Proposed Recommendation](#RecsPR), in §6.2.1
- [W3C Recommendation](#RecsW3C), in §6.2.1
- [W3C Recommendation Track](#w3c-recommendation-track), in §6.2
- [W3C Team](#team), in §2.2
- [W3C Working Draft](#RecsWD), in §6.2.1
- [WD](#RecsWD), in §6.2.1
- [WG Note](#WGNote), in §6.3
- [wide review](#dfn-wide-review), in §6.1.2.1
- [Working Draft](#RecsWD), in §6.2.1
- [Working Group Note](#WGNote), in §6.3
- [Working Groups](#GroupsWG), in §5.2
- [Workshops](#EventsW), in §8

**[\#advisory-committee](#advisory-committee)Referenced in:**

- [2.1.3.1. Advisory Committee Mailing Lists](#ref-for-advisory-committee) [(2)](#ref-for-advisory-committee①)
- [2.1.3.2. Advisory Committee Meetings](#ref-for-advisory-committee②)
- [2.3.1. Advisory Board Participation](#ref-for-advisory-committee③)
- [2.4.1. Technical Architecture Group Participation](#ref-for-advisory-committee④)
- [2.5.2. Advisory Board and Technical Architecture Group Elections](#ref-for-advisory-committee⑤) [(2)](#ref-for-advisory-committee⑥)
- [5.2.3. Advisory Committee Review of a Working Group or Interest Group Charter](#ref-for-advisory-committee⑦)
- [5.2.7. Working Group and Interest Group Closure](#ref-for-advisory-committee⑧)
- [6.1.1. General requirements for Technical Reports](#ref-for-advisory-committee⑨)
- [6.2.1. Maturity Levels on the Recommendation Track](#ref-for-advisory-committee①⓪)
- [6.2.7. Transitioning to Candidate Recommendation](#ref-for-advisory-committee①①)
- [6.2.11.5. Incorporating Candidate Changes](#ref-for-advisory-committee①②)
- [6.2.12.4. Process for Rescinding, Obsoleting, Superseding, Restoring a Recommendation](#ref-for-advisory-committee①③)
- [7. Advisory Committee Reviews, Appeals, and Votes](#ref-for-advisory-committee①④)
- [7.1.1. Start of a Review Period](#ref-for-advisory-committee①⑤)
- [7.1.2. After the Review Period](#ref-for-advisory-committee①⑥) [(2)](#ref-for-advisory-committee①⑦) [(3)](#ref-for-advisory-committee①⑧)
- [7.2. Appeal by Advisory Committee Representatives](#ref-for-advisory-committee①⑨) [(2)](#ref-for-advisory-committee②⓪) [(3)](#ref-for-advisory-committee②①)
- [7.3. Advisory Committee Votes](#ref-for-advisory-committee②②) [(2)](#ref-for-advisory-committee②③)
- [9. Liaisons](#ref-for-advisory-committee②④)
- [10.3. Acknowledgment of a Submission Request](#ref-for-advisory-committee②⑤)
- [11. Process Evolution](#ref-for-advisory-committee②⑥) [(2)](#ref-for-advisory-committee②⑦)

**[\#advisory-committee-representative](#advisory-committee-representative)Referenced in:**

- [2.1. Members](#ref-for-advisory-committee-representative)
- [2.1.3. Advisory Committee (AC)](#ref-for-advisory-committee-representative①) [(2)](#ref-for-advisory-committee-representative②) [(3)](#ref-for-advisory-committee-representative③)
- [2.1.3.1. Advisory Committee Mailing Lists](#ref-for-advisory-committee-representative④) [(2)](#ref-for-advisory-committee-representative⑤)
- [2.5.2. Advisory Board and Technical Architecture Group Elections](#ref-for-advisory-committee-representative⑥) [(2)](#ref-for-advisory-committee-representative⑦) [(3)](#ref-for-advisory-committee-representative⑧)
- [3.1. Individual Participation Criteria](#ref-for-advisory-committee-representative⑨)
- [3.1.2. Individuals Representing a Member Organization](#ref-for-advisory-committee-representative①⓪)
- [4.1. Confidentiality Levels](#ref-for-advisory-committee-representative①①) [(2)](#ref-for-advisory-committee-representative①②)
- [4.1.1. Changing Confidentiality Level](#ref-for-advisory-committee-representative①③)
- [5.2.1.1. Member Representative in a Working Group](#ref-for-advisory-committee-representative①④)
- [5.2.1.2. Member Representative in an Interest Group](#ref-for-advisory-committee-representative①⑤)
- [5.2.7. Working Group and Interest Group Closure](#ref-for-advisory-committee-representative①⑥)
- [6.2.9. Transitioning to Proposed Recommendation](#ref-for-advisory-committee-representative①⑦) [(2)](#ref-for-advisory-committee-representative①⑧) [(3)](#ref-for-advisory-committee-representative①⑨)
- [6.2.10. Transitioning to W3C Recommendation](#ref-for-advisory-committee-representative②⓪)
- [7. Advisory Committee Reviews, Appeals, and Votes](#ref-for-advisory-committee-representative②①)
- [7.1.1. Start of a Review Period](#ref-for-advisory-committee-representative②②)
- [7.2. Appeal by Advisory Committee Representatives](#ref-for-advisory-committee-representative②③) [(2)](#ref-for-advisory-committee-representative②④) [(3)](#ref-for-advisory-committee-representative②⑤) [(4)](#ref-for-advisory-committee-representative②⑥) [(5)](#ref-for-advisory-committee-representative②⑦)
- [9. Liaisons](#ref-for-advisory-committee-representative②⑧)
- [10.1. Submitter Rights and Obligations](#ref-for-advisory-committee-representative②⑨) [(2)](#ref-for-advisory-committee-representative③⓪)
- [10.4. Rejection of a Submission Request, and Submission Appeals](#ref-for-advisory-committee-representative③①) [(2)](#ref-for-advisory-committee-representative③②)

**[\#fdn-member-consortium](#fdn-member-consortium)Referenced in:**

- [2.1.2.1. Membership Consortia](#ref-for-fdn-member-consortium) [(2)](#ref-for-fdn-member-consortium①) [(3)](#ref-for-fdn-member-consortium②) [(4)](#ref-for-fdn-member-consortium③) [(5)](#ref-for-fdn-member-consortium④) [(6)](#ref-for-fdn-member-consortium⑤)

**[\#related-member](#related-member)Referenced in:**

- [2.1.2.2. Related Members](#ref-for-related-member)
- [2.5.2. Advisory Board and Technical Architecture Group Elections](#ref-for-related-member①) [(2)](#ref-for-related-member②)
- [7.3. Advisory Committee Votes](#ref-for-related-member③)

**[\#subsidiary](#subsidiary)Referenced in:**

- [2.1.2.2. Related Members](#ref-for-subsidiary) [(2)](#ref-for-subsidiary①)

**[\#team](#team)Referenced in:**

- [2.1.3.1. Advisory Committee Mailing Lists](#ref-for-team) [(2)](#ref-for-team①) [(3)](#ref-for-team②)
- [2.1.3.2. Advisory Committee Meetings](#ref-for-team③) [(2)](#ref-for-team④) [(3)](#ref-for-team⑤)
- [2.3. Advisory Board (AB)](#ref-for-team⑥)
- [2.3.1. Advisory Board Participation](#ref-for-team⑦)
- [2.4. Technical Architecture Group (TAG)](#ref-for-team⑧)
- [2.4.1. Technical Architecture Group Participation](#ref-for-team⑨)
- [2.5.2. Advisory Board and Technical Architecture Group Elections](#ref-for-team①⓪) [(2)](#ref-for-team①①) [(3)](#ref-for-team①②) [(4)](#ref-for-team①③) [(5)](#ref-for-team①④)
- [3.1.1. Conflict of Interest Policy](#ref-for-team①⑤) [(2)](#ref-for-team①⑥)
- [4. Dissemination Policies](#ref-for-team①⑦) [(2)](#ref-for-team①⑧)
- [4.1. Confidentiality Levels](#ref-for-team①⑨)
- [4.1.1. Changing Confidentiality Level](#ref-for-team②⓪) [(2)](#ref-for-team②①) [(3)](#ref-for-team②②) [(4)](#ref-for-team②③)
- [6.1.6. License Grants from Non-Participants](#ref-for-team②④)
- [6.2.1. Maturity Levels on the Recommendation Track](#ref-for-team②⑤)
- [6.2.4.1. Streamlined Publication Approval](#ref-for-team②⑥)
- [6.2.11.3. Revising a Recommendation: Substantive Changes](#ref-for-team②⑦)
- [7.1.1. Start of a Review Period](#ref-for-team②⑧)
- [7.1.2. After the Review Period](#ref-for-team②⑨)
- [7.2. Appeal by Advisory Committee Representatives](#ref-for-team③⓪) [(2)](#ref-for-team③①)
- [9. Liaisons](#ref-for-team③②)
- [10. Member Submission Process](#ref-for-team③③) [(2)](#ref-for-team③④) [(3)](#ref-for-team③⑤) [(4)](#ref-for-team③⑥)
- [10.2. Team Rights and Obligations](#ref-for-team③⑦) [(2)](#ref-for-team③⑧) [(3)](#ref-for-team③⑨)
- [10.3. Acknowledgment of a Submission Request](#ref-for-team④⓪) [(2)](#ref-for-team④①)
- [10.4. Rejection of a Submission Request, and Submission Appeals](#ref-for-team④②) [(2)](#ref-for-team④③) [(3)](#ref-for-team④④) [(4)](#ref-for-team④⑤)
- [11. Process Evolution](#ref-for-team④⑥)

**[\#fellows](#fellows)Referenced in:**

- [2.1.1. Rights of Members](#ref-for-fellows)
- [2.5.2. Advisory Board and Technical Architecture Group Elections](#ref-for-fellows)

**[\#def-Director](#def-Director)Referenced in:**

- [2.1.1. Rights of Members](#ref-for-def-Director)
- [2.2. The W3C Team](#ref-for-def-Director①)
- [2.4.1. Technical Architecture Group Participation](#ref-for-def-Director②) [(2)](#ref-for-def-Director③) [(3)](#ref-for-def-Director④)
- [2.5.2. Advisory Board and Technical Architecture Group Elections](#ref-for-def-Director⑤)
- [3.1. Individual Participation Criteria](#ref-for-def-Director⑥)
- [3.1.1. Conflict of Interest Policy](#ref-for-def-Director⑦)
- [3.1.2. Individuals Representing a Member Organization](#ref-for-def-Director)
- [3.5. Appeal of Chair Decisions and Group Decisions](#ref-for-def-Director)
- [5.2.1.3. Invited Expert in a Working Group](#ref-for-def-Director)
- [5.2.7. Working Group and Interest Group Closure](#ref-for-def-Director⑧) [(2)](#ref-for-def-Director⑨)
- [6.1.2.1. Wide Review](#ref-for-def-Director①⓪)
- [6.2.2. Implementation Experience](#ref-for-def-Director①①)
- [6.2.3. Advancement on the Recommendation Track](#ref-for-def-Director①②) [(2)](#ref-for-def-Director①③) [(3)](#ref-for-def-Director①④)
- [6.2.4. Updating Mature Publications on the Recommendation Track](#ref-for-def-Director①⑤) [(2)](#ref-for-def-Director①⑥) [(3)](#ref-for-def-Director①⑦) [(4)](#ref-for-def-Director①⑧)
- [6.2.5. Publishing a First Public Working Draft](#ref-for-def-Director①⑨)
- [6.2.7. Transitioning to Candidate Recommendation](#ref-for-def-Director②⓪)
- [6.2.8.1. Publishing a Candidate Recommendation Snapshot](#ref-for-def-Director②①)
- [6.2.9. Transitioning to Proposed Recommendation](#ref-for-def-Director②②) [(2)](#ref-for-def-Director②③)
- [6.2.10. Transitioning to W3C Recommendation](#ref-for-def-Director②④) [(2)](#ref-for-def-Director②⑤)
- [6.2.12.1. Abandoning an Unfinished Technical Report](#ref-for-def-Director②⑥) [(2)](#ref-for-def-Director②⑦)
- [6.2.12.4. Process for Rescinding, Obsoleting, Superseding, Restoring a Recommendation](#ref-for-def-Director②⑧) [(2)](#ref-for-def-Director②⑨) [(3)](#ref-for-def-Director③⓪) [(4)](#ref-for-def-Director③①) [(5)](#ref-for-def-Director③②) [(6)](#ref-for-def-Director③③)
- [7. Advisory Committee Reviews, Appeals, and Votes](#ref-for-def-Director③④) [(2)](#ref-for-def-Director③⑤) [(3)](#ref-for-def-Director③⑥)
- [7.1.2. After the Review Period](#ref-for-def-Director③⑦) [(2)](#ref-for-def-Director③⑧) [(3)](#ref-for-def-Director③⑨)
- [7.2. Appeal by Advisory Committee Representatives](#ref-for-def-Director④⓪) [(2)](#ref-for-def-Director④①) [(3)](#ref-for-def-Director④②)
- [9. Liaisons](#ref-for-def-Director④③) [(2)](#ref-for-def-Director④④)
- [10. Member Submission Process](#ref-for-def-Director④⑤)
- [10.3. Acknowledgment of a Submission Request](#ref-for-def-Director④⑥)
- [10.4. Rejection of a Submission Request, and Submission Appeals](#ref-for-def-Director④⑦)

**[\#hosts](#hosts)Referenced in:**

- [2.2. The W3C Team](#ref-for-hosts) [(2)](#ref-for-hosts①)
- [9. Liaisons](#ref-for-hosts②) [(2)](#ref-for-hosts③)

**[\#advisory-board](#advisory-board)Referenced in:**

- [2.3. Advisory Board (AB)](#ref-for-advisory-board) [(2)](#ref-for-advisory-board①)
- [2.3.1. Advisory Board Participation](#ref-for-advisory-board②) [(2)](#ref-for-advisory-board③) [(3)](#ref-for-advisory-board④)
- [2.5. Advisory Board and Technical Architecture Group Participation](#ref-for-advisory-board⑤)
- [2.5.1. Advisory Board and Technical Architecture Group Participation Constraints](#ref-for-advisory-board⑥) [(2)](#ref-for-advisory-board⑦) [(3)](#ref-for-advisory-board⑧)
- [2.5.2. Advisory Board and Technical Architecture Group Elections](#ref-for-advisory-board⑨) [(2)](#ref-for-advisory-board①⓪)
- [2.5.2.1. Verifiable Random Selection Procedure](#ref-for-advisory-board①①)
- [2.5.3. Advisory Board and Technical Architecture Group Vacated Seats](#ref-for-advisory-board①②) [(2)](#ref-for-advisory-board①③) [(3)](#ref-for-advisory-board①④)
- [3.1. Individual Participation Criteria](#ref-for-advisory-board①⑤)
- [10. Member Submission Process](#ref-for-advisory-board①⑥)
- [10.4. Rejection of a Submission Request, and Submission Appeals](#ref-for-advisory-board①⑦)
- [11. Process Evolution](#ref-for-advisory-board①⑧) [(2)](#ref-for-advisory-board①⑨) [(3)](#ref-for-advisory-board②⓪) [(4)](#ref-for-advisory-board②①)

**[\#technical-architecture-group](#technical-architecture-group)Referenced in:**

- [2.4. Technical Architecture Group (TAG)](#ref-for-technical-architecture-group) [(2)](#ref-for-technical-architecture-group①) [(3)](#ref-for-technical-architecture-group②) [(4)](#ref-for-technical-architecture-group③) [(5)](#ref-for-technical-architecture-group④) [(6)](#ref-for-technical-architecture-group⑤) [(7)](#ref-for-technical-architecture-group⑥) [(8)](#ref-for-technical-architecture-group⑦)
- [2.4.1. Technical Architecture Group Participation](#ref-for-technical-architecture-group⑧)
- [2.5. Advisory Board and Technical Architecture Group Participation](#ref-for-technical-architecture-group⑨)
- [2.5.1. Advisory Board and Technical Architecture Group Participation Constraints](#ref-for-technical-architecture-group①⓪)
- [2.5.2. Advisory Board and Technical Architecture Group Elections](#ref-for-technical-architecture-group①①) [(2)](#ref-for-technical-architecture-group①②)
- [2.5.2.1. Verifiable Random Selection Procedure](#ref-for-technical-architecture-group①③)
- [2.5.3. Advisory Board and Technical Architecture Group Vacated Seats](#ref-for-technical-architecture-group①④) [(2)](#ref-for-technical-architecture-group①⑤) [(3)](#ref-for-technical-architecture-group①⑥) [(4)](#ref-for-technical-architecture-group①⑦)
- [3.1. Individual Participation Criteria](#ref-for-technical-architecture-group①⑧)
- [6.2.12.4. Process for Rescinding, Obsoleting, Superseding, Restoring a Recommendation](#ref-for-technical-architecture-group①⑨) [(2)](#ref-for-technical-architecture-group②⓪)
- [10. Member Submission Process](#ref-for-technical-architecture-group②①)
- [10.4. Rejection of a Submission Request, and Submission Appeals](#ref-for-technical-architecture-group②②)

**[\#primary-affiliation](#primary-affiliation)Referenced in:**

- [2.5.1. Advisory Board and Technical Architecture Group Participation Constraints](#ref-for-primary-affiliation) [(2)](#ref-for-primary-affiliation①)
- [2.5.2. Advisory Board and Technical Architecture Group Elections](#ref-for-primary-affiliation②)

**[\#ftf-meeting](#ftf-meeting)Referenced in:**

- [2.1.3.2. Advisory Committee Meetings](#ref-for-ftf-meeting)
- [3.3. Consensus](#ref-for-ftf-meeting)
- [5.2.6. Working Group and Interest Group Charters](#ref-for-ftf-meeting)

**[\#distributed-meeting](#distributed-meeting)Referenced in:**

- [3.3. Consensus](#ref-for-distributed-meeting)

**[\#def-Consensus](#def-Consensus)Referenced in:**

- [2.2. The W3C Team](#DirectorDecision)
- [3.3. Consensus](#ref-for-def-Consensus) [(2)](#ref-for-def-Consensus①)
- [3.5. Appeal of Chair Decisions and Group Decisions](#ref-for-def-Consensus②)
- [6. W3C Technical Report Development Process](#ref-for-def-Consensus③)
- [6.1. W3C Technical Reports](#ref-for-def-Consensus④)
- [6.2.1. Maturity Levels on the Recommendation Track](#ref-for-def-Consensus⑤) [(2)](#ref-for-def-Consensus⑥)
- [6.2.6. Revising a Working Draft](#ref-for-def-Consensus⑦)
- [7.1.2. After the Review Period](#ref-for-def-Consensus⑧)
- [11. Process Evolution](#ref-for-def-Consensus⑨)

**[\#def-Unanimity](#def-Unanimity)Referenced in:**

- [3.3. Consensus](#ref-for-def-Unanimity)

**[\#def-Dissent](#def-Dissent)Referenced in:**

- [3.3.1. Managing Dissent](#ref-for-def-Dissent) [(2)](#ref-for-def-Dissent①)
- [6.2.10. Transitioning to W3C Recommendation](#ref-for-def-Dissent②)
- [6.2.12.4. Process for Rescinding, Obsoleting, Superseding, Restoring a Recommendation](#ref-for-def-Dissent③)
- [7.1.2. After the Review Period](#ref-for-def-Dissent④)
- [Other Substantive Changes and Clarifications](#ref-for-def-Dissent⑤)

**[\#FormalObjection](#FormalObjection)Referenced in:**

- [3.3. Consensus](#ref-for-FormalObjection) [(2)](#ref-for-FormalObjection)
- [3.3.1. Managing Dissent](#ref-for-FormalObjection)
- [3.3.2. Recording and Reporting Formal Objections](#ref-for-FormalObjection) [(2)](#ref-for-FormalObjection①) [(3)](#ref-for-FormalObjection②) [(4)](#ref-for-FormalObjection③) [(5)](#ref-for-FormalObjection④)
- [3.5. Appeal of Chair Decisions and Group Decisions](#ref-for-FormalObjection⑤)
- [5.1. Requirements for All Working and Interest Groups](#ref-for-FormalObjection⑥)
- [6.2.3. Advancement on the Recommendation Track](#ref-for-FormalObjection⑦)
- [6.2.4. Updating Mature Publications on the Recommendation Track](#ref-for-FormalObjection⑧)
- [6.2.4.1. Streamlined Publication Approval](#ref-for-FormalObjection⑨)
- [7.1.2. After the Review Period](#ref-for-FormalObjection①⓪)

**[\#formally-addressed](#formally-addressed)Referenced in:**

- [6.1.2. Reviews and Review Responsibilities](#ref-for-formally-addressed)
- [6.2.3. Advancement on the Recommendation Track](#ref-for-formally-addressed①)
- [6.2.4.1. Streamlined Publication Approval](#ref-for-formally-addressed②)
- [6.2.9. Transitioning to Proposed Recommendation](#ref-for-formally-addressed③)
- [6.2.10. Transitioning to W3C Recommendation](#ref-for-formally-addressed④)
- [6.2.11.5. Incorporating Candidate Changes](#ref-for-formally-addressed⑤) [(2)](#ref-for-formally-addressed⑥)
- [6.2.12.4. Process for Rescinding, Obsoleting, Superseding, Restoring a Recommendation](#ref-for-formally-addressed⑦)
- [7.1.2. After the Review Period](#ref-for-formally-addressed⑧)
- [11. Process Evolution](#ref-for-formally-addressed⑨)

**[\#proxy](#proxy)Referenced in:**

- [5.2.1. Working Group and Interest Group Participation Requirements](#ref-for-proxy)

**[\#chair-decisions](#chair-decisions)Referenced in:**

- [3.5. Appeal of Chair Decisions and Group Decisions](#ref-for-chair-decisions)

**[\#group-decisions](#group-decisions)Referenced in:**

- [3.5. Appeal of Chair Decisions and Group Decisions](#ref-for-group-decisions)

**[\#wg-decision-appeal](#wg-decision-appeal)Referenced in:**

- [2.2. The W3C Team](#ref-for-wg-decision-appeal)

**[\#Member-only](#Member-only)Referenced in:**

- [2.1. Members](#ref-for-Member-only)
- [2.1.1. Rights of Members](#ref-for-Member-only)
- [2.4. Technical Architecture Group (TAG)](#ref-for-Member-only) [(2)](#ref-for-Member-only)
- [4.1. Confidentiality Levels](#ref-for-Member-only①) [(2)](#ref-for-Member-only②) [(3)](#ref-for-Member-only③) [(4)](#ref-for-Member-only④) [(5)](#ref-for-Member-only⑤)
- [4.1.1. Changing Confidentiality Level](#ref-for-Member-only⑥) [(2)](#ref-for-Member-only⑦) [(3)](#ref-for-Member-only⑧)
- [5.1. Requirements for All Working and Interest Groups](#ref-for-Member-only)
- [7.1.1. Start of a Review Period](#ref-for-Member-only⑨)
- [7.2. Appeal by Advisory Committee Representatives](#ref-for-Member-only①⓪)

**[\#Team-only](#Team-only)Referenced in:**

- [2.1. Members](#ref-for-Team-only)
- [2.2. The W3C Team](#ref-for-Team-only)
- [4.1. Confidentiality Levels](#ref-for-Team-only)
- [4.1.1. Changing Confidentiality Level](#ref-for-Team-only①) [(2)](#ref-for-Team-only②) [(3)](#ref-for-Team-only③) [(4)](#ref-for-Team-only④)
- [7.1.1. Start of a Review Period](#ref-for-Team-only⑤)
- [10.2. Team Rights and Obligations](#ref-for-Team-only⑥)

**[\#GeneralChairs](#GeneralChairs)Referenced in:**

- [2.2. The W3C Team](#ref-for-GeneralChairs)
- [3.1.1. Conflict of Interest Policy](#ref-for-GeneralChairs)
- [3.2. Meetings](#ref-for-GeneralChairs①)
- [3.3.1. Managing Dissent](#ref-for-GeneralChairs②) [(2)](#ref-for-GeneralChairs③)
- [3.3.4. Reopening a Decision When Presented With New Information](#ref-for-GeneralChairs④) [(2)](#ref-for-GeneralChairs⑤)
- [3.4. Votes](#ref-for-GeneralChairs⑥) [(2)](#ref-for-GeneralChairs⑦)
- [3.5. Appeal of Chair Decisions and Group Decisions](#ref-for-GeneralChairs⑧) [(2)](#ref-for-GeneralChairs⑨) [(3)](#ref-for-GeneralChairs①⓪)
- [5.1. Requirements for All Working and Interest Groups](#ref-for-GeneralChairs①①) [(2)](#ref-for-GeneralChairs①②) [(3)](#ref-for-GeneralChairs①③) [(4)](#ref-for-GeneralChairs①④)
- [5.2.1. Working Group and Interest Group Participation Requirements](#ref-for-GeneralChairs①⑤) [(2)](#ref-for-GeneralChairs①⑥)
- [5.2.1.1. Member Representative in a Working Group](#ref-for-GeneralChairs①⑦)
- [5.2.1.3. Invited Expert in a Working Group](#ref-for-GeneralChairs①⑧) [(2)](#ref-for-GeneralChairs①⑨) [(3)](#ref-for-GeneralChairs②⓪) [(4)](#ref-for-GeneralChairs②①)
- [5.2.3. Advisory Committee Review of a Working Group or Interest Group Charter](#ref-for-GeneralChairs②②)
- [5.2.4. Call for Participation in a Working Group or Interest Group](#ref-for-GeneralChairs②③)
- [5.2.5. Working Group and Interest Group Charter Extension](#ref-for-GeneralChairs②④) [(2)](#ref-for-GeneralChairs②⑤)
- [6.1.1. General requirements for Technical Reports](#ref-for-GeneralChairs②⑥) [(2)](#ref-for-GeneralChairs②⑦)
- [6.2. The W3C Recommendation Track](#ref-for-GeneralChairs②⑧)
- [6.2.12.4. Process for Rescinding, Obsoleting, Superseding, Restoring a Recommendation](#ref-for-GeneralChairs②⑨)

**[\#TeamContact](#TeamContact)Referenced in:**

- [3.5. Appeal of Chair Decisions and Group Decisions](#ref-for-TeamContact)
- [5.1. Requirements for All Working and Interest Groups](#ref-for-TeamContact) [(2)](#ref-for-TeamContact①)
- [5.2.1. Working Group and Interest Group Participation Requirements](#ref-for-TeamContact)
- [5.2.1.1. Member Representative in a Working Group](#ref-for-TeamContact②)
- [5.2.1.3. Invited Expert in a Working Group](#ref-for-TeamContact③)
- [5.2.3. Advisory Committee Review of a Working Group or Interest Group Charter](#ref-for-TeamContact④)
- [5.2.4. Call for Participation in a Working Group or Interest Group](#ref-for-TeamContact⑤)
- [5.2.5. Working Group and Interest Group Charter Extension](#ref-for-TeamContact⑥)

**[\#GroupsWG](#GroupsWG)Referenced in:**

- [3.2. Meetings](#ref-for-GroupsWG)
- [3.5. Appeal of Chair Decisions and Group Decisions](#ref-for-GroupsWG) [(2)](#ref-for-GroupsWG①)
- [5. Working Groups and Interest Groups](#ref-for-GroupsWG) [(2)](#ref-for-GroupsWG②)
- [5.2.1. Working Group and Interest Group Participation Requirements](#ref-for-GroupsWG③)
- [5.2.1.1. Member Representative in a Working Group](#ref-for-GroupsWG④) [(2)](#ref-for-GroupsWG⑤)
- [5.2.1.3. Invited Expert in a Working Group](#ref-for-GroupsWG⑥)
- [5.2.4. Call for Participation in a Working Group or Interest Group](#ref-for-GroupsWG⑦)
- [5.2.7. Working Group and Interest Group Closure](#ref-for-GroupsWG⑧) [(2)](#ref-for-GroupsWG⑨)
- [6. W3C Technical Report Development Process](#ref-for-GroupsWG①⓪)
- [6.1. W3C Technical Reports](#ref-for-GroupsWG①①) [(2)](#ref-for-GroupsWG①②)
- [6.1.1. General requirements for Technical Reports](#ref-for-GroupsWG①③)
- [6.1.2. Reviews and Review Responsibilities](#ref-for-GroupsWG①④) [(2)](#ref-for-GroupsWG①⑤)
- [6.1.2.1. Wide Review](#ref-for-GroupsWG①⑥) [(2)](#ref-for-GroupsWG①⑦) [(3)](#ref-for-GroupsWG①⑧) [(4)](#ref-for-GroupsWG①⑨)
- [6.1.4. Errata Management](#ref-for-GroupsWG②⓪) [(2)](#ref-for-GroupsWG②①) [(3)](#ref-for-GroupsWG②②) [(4)](#ref-for-GroupsWG②③)
- [6.1.5. Candidate Changes](#ref-for-GroupsWG②④)
- [6.2. The W3C Recommendation Track](#ref-for-GroupsWG②⑤) [(2)](#ref-for-GroupsWG②⑥) [(3)](#ref-for-GroupsWG②⑦) [(4)](#ref-for-GroupsWG②⑧) [(5)](#ref-for-GroupsWG②⑨) [(6)](#ref-for-GroupsWG③⓪)
- [6.2.1. Maturity Levels on the Recommendation Track](#ref-for-GroupsWG③①) [(2)](#ref-for-GroupsWG③②) [(3)](#ref-for-GroupsWG③③) [(4)](#ref-for-GroupsWG③④) [(5)](#ref-for-GroupsWG③⑤) [(6)](#ref-for-GroupsWG③⑥) [(7)](#ref-for-GroupsWG③⑦)
- [6.2.3. Advancement on the Recommendation Track](#ref-for-GroupsWG③⑧) [(2)](#ref-for-GroupsWG③⑨) [(3)](#ref-for-GroupsWG④⓪)
- [6.2.4. Updating Mature Publications on the Recommendation Track](#ref-for-GroupsWG④①) [(2)](#ref-for-GroupsWG④②) [(3)](#ref-for-GroupsWG④③)
- [6.2.4.1. Streamlined Publication Approval](#ref-for-GroupsWG④④) [(2)](#ref-for-GroupsWG④⑤) [(3)](#ref-for-GroupsWG④⑥) [(4)](#ref-for-GroupsWG④⑦) [(5)](#ref-for-GroupsWG④⑧) [(6)](#ref-for-GroupsWG④⑨) [(7)](#ref-for-GroupsWG⑤⓪)
- [6.2.5. Publishing a First Public Working Draft](#ref-for-GroupsWG⑤①)
- [6.2.6. Revising a Working Draft](#ref-for-GroupsWG⑤②)
- [6.2.7. Transitioning to Candidate Recommendation](#ref-for-GroupsWG⑤③) [(2)](#ref-for-GroupsWG⑤④)
- [6.2.8.1. Publishing a Candidate Recommendation Snapshot](#ref-for-GroupsWG⑤⑤)
- [6.2.8.2. Publishing a Candidate Recommendation Draft](#ref-for-GroupsWG⑤⑥)
- [6.2.9. Transitioning to Proposed Recommendation](#ref-for-GroupsWG⑤⑦)
- [6.2.11.1. Revising a Recommendation: Markup Changes](#ref-for-GroupsWG⑤⑧) [(2)](#ref-for-GroupsWG⑤⑨)
- [6.2.11.2. Revising a Recommendation: Editorial Changes](#ref-for-GroupsWG⑥⓪)
- [6.2.11.3. Revising a Recommendation: Substantive Changes](#ref-for-GroupsWG⑥①) [(2)](#ref-for-GroupsWG⑥②) [(3)](#ref-for-GroupsWG⑥③) [(4)](#ref-for-GroupsWG⑥④)
- [6.2.11.4. Revising a Recommendation: New Features](#ref-for-GroupsWG⑥⑤)
- [6.2.11.5. Incorporating Candidate Changes](#ref-for-GroupsWG⑥⑥) [(2)](#ref-for-GroupsWG⑥⑦) [(3)](#ref-for-GroupsWG⑥⑧) [(4)](#ref-for-GroupsWG⑥⑨)
- [6.2.12. Retiring Recommendation Track Documents](#ref-for-GroupsWG⑦⓪)
- [6.2.12.1. Abandoning an Unfinished Technical Report](#ref-for-GroupsWG⑦①) [(2)](#ref-for-GroupsWG⑦②)
- [6.2.12.4. Process for Rescinding, Obsoleting, Superseding, Restoring a Recommendation](#ref-for-GroupsWG⑦③) [(2)](#ref-for-GroupsWG⑦④) [(3)](#ref-for-GroupsWG⑦⑤) [(4)](#ref-for-GroupsWG⑦⑥) [(5)](#ref-for-GroupsWG⑦⑦)
- [6.3. Working Group and Interest Group Notes](#ref-for-GroupsWG⑦⑧) [(2)](#ref-for-GroupsWG⑦⑨) [(3)](#ref-for-GroupsWG⑧⓪) [(4)](#ref-for-GroupsWG⑧①)
- [10. Member Submission Process](#ref-for-GroupsWG⑧②)
- [10.1. Submitter Rights and Obligations](#ref-for-GroupsWG⑧③)
- [10.1.1. Scope of Member Submissions](#ref-for-GroupsWG⑧④)
- [11. Process Evolution](#ref-for-GroupsWG⑧⑤)

**[\#GroupsIG](#GroupsIG)Referenced in:**

- [3.5. Appeal of Chair Decisions and Group Decisions](#ref-for-GroupsIG) [(2)](#ref-for-GroupsIG①)
- [5. Working Groups and Interest Groups](#ref-for-GroupsIG) [(2)](#ref-for-GroupsIG②) [(3)](#ref-for-GroupsIG③)
- [5.2.1. Working Group and Interest Group Participation Requirements](#ref-for-GroupsIG④)
- [5.2.4. Call for Participation in a Working Group or Interest Group](#ref-for-GroupsIG⑤)
- [5.2.7. Working Group and Interest Group Closure](#ref-for-GroupsIG⑥) [(2)](#ref-for-GroupsIG⑦)
- [6.1. W3C Technical Reports](#ref-for-GroupsIG⑧)
- [6.2.1. Maturity Levels on the Recommendation Track](#ref-for-GroupsIG⑨) [(2)](#ref-for-GroupsIG①⓪)
- [6.3. Working Group and Interest Group Notes](#ref-for-GroupsIG①①) [(2)](#ref-for-GroupsIG①②) [(3)](#ref-for-GroupsIG①③)

**[\#wgparticipant](#wgparticipant)Referenced in:**

- [3. General Policies for W3C Groups](#ref-for-wgparticipant)
- [5.2.3. Advisory Committee Review of a Working Group or Interest Group Charter](#ref-for-wgparticipant)

**[\#igparticipant](#igparticipant)Referenced in:**

- [3. General Policies for W3C Groups](#ref-for-igparticipant)
- [5.2.3. Advisory Committee Review of a Working Group or Interest Group Charter](#ref-for-igparticipant)

**[\#public-participant-ig](#public-participant-ig)Referenced in:**

- [5.2.6. Working Group and Interest Group Charters](#ref-for-public-participant-ig)

**[\#mtg-substitute](#mtg-substitute)Referenced in:**

- [3.4. Votes](#ref-for-mtg-substitute)

**[\#member-representative-in-an-interest-group](#member-representative-in-an-interest-group)Referenced in:**

- [5.2.1.2. Member Representative in an Interest Group](#ref-for-member-representative-in-an-interest-group)

**[\#invited-expert-in-a-working-group](#invited-expert-in-a-working-group)Referenced in:**

- [5.2.1.3. Invited Expert in a Working Group](#ref-for-invited-expert-in-a-working-group)
- [5.2.1.4. Invited Expert in an Interest Group](#ref-for-invited-expert-in-a-working-group①)

**[\#inv-expert-info](#inv-expert-info)Referenced in:**

- [2.5.2. Advisory Board and Technical Architecture Group Elections](#ref-for-inv-expert-info)
- [5.2.1.3. Invited Expert in a Working Group](#ref-for-inv-expert-info)

**[\#dfn-charter-extension](#dfn-charter-extension)Referenced in:**

- [7.2. Appeal by Advisory Committee Representatives](#ref-for-dfn-charter-extension)

**[\#charter](#charter)Referenced in:**

- [5.2.4. Call for Participation in a Working Group or Interest Group](#ref-for-charter)
- [6.2. The W3C Recommendation Track](#ref-for-charter①)
- [6.2.3. Advancement on the Recommendation Track](#ref-for-charter②)

**[\#adopted-draft](#adopted-draft)Referenced in:**

- [5.2.6. Working Group and Interest Group Charters](#ref-for-adopted-draft)

**[\#exclusion-draft](#exclusion-draft)Referenced in:**

- [5.2.6. Working Group and Interest Group Charters](#ref-for-exclusion-draft) [(2)](#ref-for-exclusion-draft①)

**[\#publishing](#publishing)Referenced in:**

- [6.1. W3C Technical Reports](#ref-for-publishing)
- [6.1.1. General requirements for Technical Reports](#ref-for-publishing①)
- [6.1.2. Reviews and Review Responsibilities](#ref-for-publishing②)
- [6.1.5. Candidate Changes](#ref-for-publishing③)
- [6.2. The W3C Recommendation Track](#ref-for-publishing④)
- [6.2.1. Maturity Levels on the Recommendation Track](#ref-for-publishing⑤) [(2)](#ref-for-publishing⑥) [(3)](#ref-for-publishing⑦)
- [6.2.6. Revising a Working Draft](#ref-for-publishing⑧)
- [6.2.8.2. Publishing a Candidate Recommendation Draft](#ref-for-publishing⑨)
- [6.2.9. Transitioning to Proposed Recommendation](#ref-for-publishing①⓪)
- [6.2.12.1. Abandoning an Unfinished Technical Report](#ref-for-publishing①①) [(2)](#ref-for-publishing①②)
- [6.3. Working Group and Interest Group Notes](#ref-for-publishing①③) [(2)](#ref-for-publishing①④) [(3)](#ref-for-publishing①⑤)
- [Other Substantive Changes and Clarifications](#ref-for-publishing①⑥)

**[\#technical-report](#technical-report)Referenced in:**

- [5.2.6. Working Group and Interest Group Charters](#ref-for-technical-report)
- [6.1.1. General requirements for Technical Reports](#ref-for-technical-report①) [(2)](#ref-for-technical-report②) [(3)](#ref-for-technical-report③)
- [6.1.4. Errata Management](#ref-for-technical-report④) [(2)](#ref-for-technical-report⑤) [(3)](#ref-for-technical-report⑥) [(4)](#ref-for-technical-report⑦) [(5)](#ref-for-technical-report⑧)
- [6.2.1. Maturity Levels on the Recommendation Track](#ref-for-technical-report⑨)
- [6.2.9. Transitioning to Proposed Recommendation](#ref-for-technical-report①⓪)
- [6.2.11.4. Revising a Recommendation: New Features](#ref-for-technical-report①①)
- [6.2.12.1. Abandoning an Unfinished Technical Report](#ref-for-technical-report①②) [(2)](#ref-for-technical-report①③)
- [11. Process Evolution](#ref-for-technical-report①④)

**[\#dfn-wide-review](#dfn-wide-review)Referenced in:**

- [6.1. W3C Technical Reports](#ref-for-dfn-wide-review)
- [6.2.1. Maturity Levels on the Recommendation Track](#ref-for-dfn-wide-review①)
- [6.2.4. Updating Mature Publications on the Recommendation Track](#ref-for-dfn-wide-review②)
- [6.2.7. Transitioning to Candidate Recommendation](#ref-for-dfn-wide-review③)
- [6.2.9. Transitioning to Proposed Recommendation](#ref-for-dfn-wide-review④)

**[\#editorial-change](#editorial-change)Referenced in:**

- [6.2.3. Advancement on the Recommendation Track](#ref-for-editorial-change)
- [6.2.4. Updating Mature Publications on the Recommendation Track](#ref-for-editorial-change①)
- [6.2.6. Revising a Working Draft](#ref-for-editorial-change②)
- [6.2.8.2. Publishing a Candidate Recommendation Draft](#ref-for-editorial-change③)
- [6.2.11.2. Revising a Recommendation: Editorial Changes](#ref-for-editorial-change④)
- [7.1.2. After the Review Period](#ref-for-editorial-change⑤)
- [10.3. Acknowledgment of a Submission Request](#ref-for-editorial-change⑥)

**[\#substantive-change](#substantive-change)Referenced in:**

- [6.1.2. Reviews and Review Responsibilities](#ref-for-substantive-change)
- [6.2.1. Maturity Levels on the Recommendation Track](#ref-for-substantive-change①)
- [6.2.6. Revising a Working Draft](#ref-for-substantive-change②)
- [6.2.8.1. Publishing a Candidate Recommendation Snapshot](#ref-for-substantive-change③) [(2)](#ref-for-substantive-change④)
- [6.2.8.2. Publishing a Candidate Recommendation Draft](#ref-for-substantive-change⑤) [(2)](#ref-for-substantive-change⑥)
- [6.2.9. Transitioning to Proposed Recommendation](#ref-for-substantive-change⑦) [(2)](#ref-for-substantive-change⑧) [(3)](#ref-for-substantive-change⑨)
- [6.2.10. Transitioning to W3C Recommendation](#ref-for-substantive-change①⓪)
- [7.1.2. After the Review Period](#ref-for-substantive-change①①)

**[\#erratum](#erratum)Referenced in:**

- [6.1.5. Candidate Changes](#ref-for-erratum)

**[\#candidate-correction](#candidate-correction)Referenced in:**

- [6.1.5. Candidate Changes](#ref-for-candidate-correction) [(2)](#ref-for-candidate-correction①) [(3)](#ref-for-candidate-correction②)
- [6.2.11.3. Revising a Recommendation: Substantive Changes](#ref-for-candidate-correction③)
- [Major Update to the Recommendation Track](#ref-for-candidate-correction④)

**[\#candidate-addition](#candidate-addition)Referenced in:**

- [6.1.5. Candidate Changes](#ref-for-candidate-addition)
- [6.2.11.4. Revising a Recommendation: New Features](#ref-for-candidate-addition①) [(2)](#ref-for-candidate-addition②)
- [Major Update to the Recommendation Track](#ref-for-candidate-addition③)

**[\#candidate-change](#candidate-change)Referenced in:**

- [6.1.5. Candidate Changes](#ref-for-candidate-change) [(2)](#ref-for-candidate-change①) [(3)](#ref-for-candidate-change②)
- [6.2.11.3. Revising a Recommendation: Substantive Changes](#ref-for-candidate-change③)
- [6.2.11.4. Revising a Recommendation: New Features](#ref-for-candidate-change④)
- [6.2.11.5. Incorporating Candidate Changes](#ref-for-candidate-change⑤) [(2)](#ref-for-candidate-change⑥)
- [Major Update to the Recommendation Track](#ref-for-candidate-change⑦) [(2)](#ref-for-candidate-change⑧)

**[\#w3c-recommendation-track](#w3c-recommendation-track)Referenced in:**

- [6.1. W3C Technical Reports](#ref-for-w3c-recommendation-track) [(2)](#ref-for-w3c-recommendation-track①)
- [6.1.5. Candidate Changes](#ref-for-w3c-recommendation-track②)
- [6.2. The W3C Recommendation Track](#ref-for-w3c-recommendation-track③)

**[\#patent-review-drafts](#patent-review-drafts)Referenced in:**

- [6.2.1. Maturity Levels on the Recommendation Track](#ref-for-patent-review-drafts) [(2)](#ref-for-patent-review-drafts①)
- [6.2.11.5. Incorporating Candidate Changes](#ref-for-patent-review-drafts②)

**[\#RecsWD](#RecsWD)Referenced in:**

- [5.2.6. Working Group and Interest Group Charters](#ref-for-RecsWD)
- [6.1.5. Candidate Changes](#ref-for-RecsWD①)
- [6.2. The W3C Recommendation Track](#ref-for-RecsWD②) [(2)](#ref-for-RecsWD③)
- [6.2.1. Maturity Levels on the Recommendation Track](#ref-for-RecsWD④) [(2)](#ref-for-RecsWD⑤) [(3)](#ref-for-RecsWD⑥) [(4)](#ref-for-RecsWD⑦) [(5)](#ref-for-RecsWD⑧)
- [6.2.6. Revising a Working Draft](#ref-for-RecsWD⑨) [(2)](#ref-for-RecsWD①⓪) [(3)](#ref-for-RecsWD①①)
- [6.2.9. Transitioning to Proposed Recommendation](#ref-for-RecsWD①②)
- [6.3. Working Group and Interest Group Notes](#ref-for-RecsWD①③) [(2)](#ref-for-RecsWD①④)

**[\#fpwd](#fpwd)Referenced in:**

- [5.2.6. Working Group and Interest Group Charters](#ref-for-fpwd)
- [6.2. The W3C Recommendation Track](#ref-for-fpwd①)
- [6.2.3. Advancement on the Recommendation Track](#ref-for-fpwd②) [(2)](#ref-for-fpwd③)
- [6.2.5. Publishing a First Public Working Draft](#ref-for-fpwd④) [(2)](#ref-for-fpwd⑤)
- [6.2.11.4. Revising a Recommendation: New Features](#ref-for-fpwd⑥)

**[\#RecsCR](#RecsCR)Referenced in:**

- [6.1.2.1. Wide Review](#ref-for-RecsCR)
- [6.1.5. Candidate Changes](#ref-for-RecsCR①)
- [6.2. The W3C Recommendation Track](#ref-for-RecsCR②) [(2)](#ref-for-RecsCR③)
- [6.2.1. Maturity Levels on the Recommendation Track](#ref-for-RecsCR④) [(2)](#ref-for-RecsCR⑤) [(3)](#ref-for-RecsCR⑥) [(4)](#ref-for-RecsCR⑦) [(5)](#ref-for-RecsCR⑧) [(6)](#ref-for-RecsCR⑨) [(7)](#ref-for-RecsCR①⓪) [(8)](#ref-for-RecsCR①①)
- [6.2.3. Advancement on the Recommendation Track](#ref-for-RecsCR①②) [(2)](#ref-for-RecsCR①③)
- [6.2.7. Transitioning to Candidate Recommendation](#ref-for-RecsCR①④) [(2)](#ref-for-RecsCR①⑤)
- [6.2.8.1. Publishing a Candidate Recommendation Snapshot](#ref-for-RecsCR①⑥) [(2)](#ref-for-RecsCR①⑦)
- [6.2.9. Transitioning to Proposed Recommendation](#ref-for-RecsCR①⑧) [(2)](#ref-for-RecsCR①⑨) [(3)](#ref-for-RecsCR②⓪)
- [6.2.12.2. Rescinding a Candidate Recommendation](#ref-for-RecsCR②①)

**[\#candidate-recommendation-snapshot](#candidate-recommendation-snapshot)Referenced in:**

- [6.2.1. Maturity Levels on the Recommendation Track](#ref-for-candidate-recommendation-snapshot) [(2)](#ref-for-candidate-recommendation-snapshot①) [(3)](#ref-for-candidate-recommendation-snapshot②) [(4)](#ref-for-candidate-recommendation-snapshot③) [(5)](#ref-for-candidate-recommendation-snapshot④)
- [6.2.7. Transitioning to Candidate Recommendation](#ref-for-candidate-recommendation-snapshot⑤) [(2)](#ref-for-candidate-recommendation-snapshot⑥) [(3)](#ref-for-candidate-recommendation-snapshot⑦)
- [6.2.8.1. Publishing a Candidate Recommendation Snapshot](#ref-for-candidate-recommendation-snapshot⑧) [(2)](#ref-for-candidate-recommendation-snapshot⑨) [(3)](#ref-for-candidate-recommendation-snapshot①⓪) [(4)](#ref-for-candidate-recommendation-snapshot①①) [(5)](#ref-for-candidate-recommendation-snapshot①②)
- [6.2.8.2. Publishing a Candidate Recommendation Draft](#ref-for-candidate-recommendation-snapshot①③) [(2)](#ref-for-candidate-recommendation-snapshot①④) [(3)](#ref-for-candidate-recommendation-snapshot①⑤)
- [6.2.9. Transitioning to Proposed Recommendation](#ref-for-candidate-recommendation-snapshot①⑥) [(2)](#ref-for-candidate-recommendation-snapshot①⑦) [(3)](#ref-for-candidate-recommendation-snapshot①⑧)

**[\#candidate-recommendation-draft](#candidate-recommendation-draft)Referenced in:**

- [6.2.1. Maturity Levels on the Recommendation Track](#ref-for-candidate-recommendation-draft) [(2)](#ref-for-candidate-recommendation-draft①)
- [6.2.8.2. Publishing a Candidate Recommendation Draft](#ref-for-candidate-recommendation-draft②) [(2)](#ref-for-candidate-recommendation-draft③) [(3)](#ref-for-candidate-recommendation-draft④) [(4)](#ref-for-candidate-recommendation-draft⑤) [(5)](#ref-for-candidate-recommendation-draft⑥)
- [Major Update to the Recommendation Track](#ref-for-candidate-recommendation-draft⑦)

**[\#rescinded-candidate-recommendation](#rescinded-candidate-recommendation)Referenced in:**

- [6.2.1. Maturity Levels on the Recommendation Track](#ref-for-rescinded-candidate-recommendation)

**[\#RecsPR](#RecsPR)Referenced in:**

- [2.1. Members](#ref-for-RecsPR)
- [6.2. The W3C Recommendation Track](#ref-for-RecsPR) [(2)](#ref-for-RecsPR①)
- [6.2.1. Maturity Levels on the Recommendation Track](#ref-for-RecsPR②)
- [6.2.3. Advancement on the Recommendation Track](#ref-for-RecsPR③)
- [6.2.7. Transitioning to Candidate Recommendation](#ref-for-RecsPR④)
- [6.2.8.1. Publishing a Candidate Recommendation Snapshot](#ref-for-RecsPR⑤)
- [6.2.9. Transitioning to Proposed Recommendation](#ref-for-RecsPR⑥) [(2)](#ref-for-RecsPR⑦) [(3)](#ref-for-RecsPR⑧) [(4)](#ref-for-RecsPR⑨) [(5)](#ref-for-RecsPR①⓪) [(6)](#ref-for-RecsPR①①)
- [6.2.10. Transitioning to W3C Recommendation](#ref-for-RecsPR①②)
- [7.1. Advisory Committee Reviews](#ref-for-RecsPR①③)

**[\#RecsW3C](#RecsW3C)Referenced in:**

- [1. Introduction](#ref-for-RecsW3C) [(2)](#ref-for-RecsW3C)
- [5. Working Groups and Interest Groups](#ref-for-RecsW3C)
- [6.1. W3C Technical Reports](#ref-for-RecsW3C①)
- [6.1.4. Errata Management](#ref-for-RecsW3C②) [(2)](#ref-for-RecsW3C③)
- [6.1.5. Candidate Changes](#ref-for-RecsW3C④)
- [6.2. The W3C Recommendation Track](#ref-for-RecsW3C⑤) [(2)](#ref-for-RecsW3C⑥)
- [6.2.1. Maturity Levels on the Recommendation Track](#ref-for-RecsW3C⑦) [(2)](#ref-for-RecsW3C⑧) [(3)](#ref-for-RecsW3C⑨) [(4)](#ref-for-RecsW3C①⓪) [(5)](#ref-for-RecsW3C①①) [(6)](#ref-for-RecsW3C①②) [(7)](#ref-for-RecsW3C①③) [(8)](#ref-for-RecsW3C①④) [(9)](#ref-for-RecsW3C①⑤) [(10)](#ref-for-RecsW3C①⑥) [(11)](#ref-for-RecsW3C①⑦) [(12)](#ref-for-RecsW3C①⑧) [(13)](#ref-for-RecsW3C①⑨) [(14)](#ref-for-RecsW3C②⓪) [(15)](#ref-for-RecsW3C②①) [(16)](#ref-for-RecsW3C②②) [(17)](#ref-for-RecsW3C②③) [(18)](#ref-for-RecsW3C②④)
- [6.2.4.1. Streamlined Publication Approval](#ref-for-RecsW3C②⑤) [(2)](#ref-for-RecsW3C②⑥)
- [6.2.9. Transitioning to Proposed Recommendation](#ref-for-RecsW3C②⑦) [(2)](#ref-for-RecsW3C②⑧) [(3)](#ref-for-RecsW3C②⑨) [(4)](#ref-for-RecsW3C③⓪)
- [6.2.10. Transitioning to W3C Recommendation](#ref-for-RecsW3C③①) [(2)](#ref-for-RecsW3C③②) [(3)](#ref-for-RecsW3C③③) [(4)](#ref-for-RecsW3C③④) [(5)](#ref-for-RecsW3C③⑤) [(6)](#ref-for-RecsW3C③⑥) [(7)](#ref-for-RecsW3C③⑦)
- [6.2.11. Revising a W3C Recommendation](#ref-for-RecsW3C③⑧)
- [6.2.11.1. Revising a Recommendation: Markup Changes](#ref-for-RecsW3C③⑨) [(2)](#ref-for-RecsW3C④⓪) [(3)](#ref-for-RecsW3C④①)
- [6.2.11.2. Revising a Recommendation: Editorial Changes](#ref-for-RecsW3C④②) [(2)](#ref-for-RecsW3C④③) [(3)](#ref-for-RecsW3C④④)
- [6.2.11.3. Revising a Recommendation: Substantive Changes](#ref-for-RecsW3C④⑤) [(2)](#ref-for-RecsW3C④⑥) [(3)](#ref-for-RecsW3C④⑦) [(4)](#ref-for-RecsW3C④⑧)
- [6.2.11.4. Revising a Recommendation: New Features](#ref-for-RecsW3C④⑨) [(2)](#ref-for-RecsW3C⑤⓪) [(3)](#ref-for-RecsW3C⑤①) [(4)](#ref-for-RecsW3C⑤②)
- [6.2.11.5. Incorporating Candidate Changes](#ref-for-RecsW3C⑤③) [(2)](#ref-for-RecsW3C⑤④) [(3)](#ref-for-RecsW3C⑤⑤) [(4)](#ref-for-RecsW3C⑤⑥) [(5)](#ref-for-RecsW3C⑤⑦)
- [6.2.12.2. Rescinding a Candidate Recommendation](#ref-for-RecsW3C⑤⑧)
- [6.2.12.3. Abandoning a W3C Recommendation](#ref-for-RecsW3C⑤⑨) [(2)](#ref-for-RecsW3C⑥⓪) [(3)](#ref-for-RecsW3C⑥①) [(4)](#ref-for-RecsW3C⑥②) [(5)](#ref-for-RecsW3C⑥③) [(6)](#ref-for-RecsW3C⑥④)
- [6.2.12.4. Process for Rescinding, Obsoleting, Superseding, Restoring a Recommendation](#ref-for-RecsW3C⑥⑤) [(2)](#ref-for-RecsW3C⑥⑥) [(3)](#ref-for-RecsW3C⑥⑦) [(4)](#ref-for-RecsW3C⑥⑧) [(5)](#ref-for-RecsW3C⑥⑨) [(6)](#ref-for-RecsW3C⑦⓪)
- [6.3. Working Group and Interest Group Notes](#ref-for-RecsW3C⑦①)
- [10. Member Submission Process](#ref-for-RecsW3C⑦②)

**[\#rec-amended](#rec-amended)Referenced in:**

- [6.2. The W3C Recommendation Track](#ref-for-rec-amended)
- [6.2.7. Transitioning to Candidate Recommendation](#ref-for-rec-amended①) [(2)](#ref-for-rec-amended②)
- [6.2.9. Transitioning to Proposed Recommendation](#ref-for-rec-amended③) [(2)](#ref-for-rec-amended④)
- [6.2.10. Transitioning to W3C Recommendation](#ref-for-rec-amended⑤)
- [6.2.11.3. Revising a Recommendation: Substantive Changes](#ref-for-rec-amended⑥)

**[\#RecsSup](#RecsSup)Referenced in:**

- [6.2.12.3. Abandoning a W3C Recommendation](#ref-for-RecsSup)

**[\#RecsObs](#RecsObs)Referenced in:**

- [6.2.1. Maturity Levels on the Recommendation Track](#ref-for-RecsObs)
- [6.2.12.3. Abandoning a W3C Recommendation](#ref-for-RecsObs①) [(2)](#ref-for-RecsObs②)
- [6.2.12.4. Process for Rescinding, Obsoleting, Superseding, Restoring a Recommendation](#ref-for-RecsObs③) [(2)](#ref-for-RecsObs④)

**[\#RescindedRec](#RescindedRec)Referenced in:**

- [6.2.1. Maturity Levels on the Recommendation Track](#ref-for-RescindedRec)
- [6.2.12.3. Abandoning a W3C Recommendation](#ref-for-RescindedRec①)
- [6.2.12.4. Process for Rescinding, Obsoleting, Superseding, Restoring a Recommendation](#ref-for-RescindedRec②) [(2)](#ref-for-RescindedRec③)

**[\#editors-draft](#editors-draft)Referenced in:**

- [6.2.1. Maturity Levels on the Recommendation Track](#ref-for-editors-draft)

**[\#adequate-implementation](#adequate-implementation)Referenced in:**

- [6.1. W3C Technical Reports](#ref-for-adequate-implementation)
- [6.2.4.1. Streamlined Publication Approval](#ref-for-adequate-implementation①)
- [6.2.7. Transitioning to Candidate Recommendation](#ref-for-adequate-implementation②)
- [6.2.9. Transitioning to Proposed Recommendation](#ref-for-adequate-implementation③)
- [6.2.11.5. Incorporating Candidate Changes](#ref-for-adequate-implementation④)

**[\#trans-req](#trans-req)Referenced in:**

- [6.2.1. Maturity Levels on the Recommendation Track](#ref-for-trans-req)
- [6.2.3. Advancement on the Recommendation Track](#ref-for-trans-req①)
- [6.2.4. Updating Mature Publications on the Recommendation Track](#ref-for-trans-req②)
- [6.2.7. Transitioning to Candidate Recommendation](#ref-for-trans-req③)

**[\#update-requests](#update-requests)Referenced in:**

- [6.2.1. Maturity Levels on the Recommendation Track](#ref-for-update-requests)
- [6.2.4. Updating Mature Publications on the Recommendation Track](#ref-for-update-requests①) [(2)](#ref-for-update-requests②)
- [6.2.4.1. Streamlined Publication Approval](#ref-for-update-requests③) [(2)](#ref-for-update-requests④)
- [6.2.8.1. Publishing a Candidate Recommendation Snapshot](#ref-for-update-requests⑤)
- [6.2.8.2. Publishing a Candidate Recommendation Draft](#ref-for-update-requests⑥)
- [6.2.11.3. Revising a Recommendation: Substantive Changes](#ref-for-update-requests⑦)
- [6.2.11.4. Revising a Recommendation: New Features](#ref-for-update-requests⑧)
- [6.2.11.5. Incorporating Candidate Changes](#ref-for-update-requests⑨)

**[\#at-risk](#at-risk)Referenced in:**

- [6.2.8.1. Publishing a Candidate Recommendation Snapshot](#ref-for-at-risk) [(2)](#ref-for-at-risk①)
- [6.2.8.2. Publishing a Candidate Recommendation Draft](#ref-for-at-risk②)
- [6.2.9. Transitioning to Proposed Recommendation](#ref-for-at-risk③) [(2)](#ref-for-at-risk④)

**[\#allow-new-features](#allow-new-features)Referenced in:**

- [6.2.4.1. Streamlined Publication Approval](#ref-for-allow-new-features)
- [6.2.11.4. Revising a Recommendation: New Features](#ref-for-allow-new-features①)
- [6.2.11.5. Incorporating Candidate Changes](#ref-for-allow-new-features②)

**[\#last-call-review](#last-call-review)Referenced in:**

- [6.2.11.3. Revising a Recommendation: Substantive Changes](#ref-for-last-call-review)
- [6.2.11.4. Revising a Recommendation: New Features](#ref-for-last-call-review①)
- [6.2.11.5. Incorporating Candidate Changes](#ref-for-last-call-review②) [(2)](#ref-for-last-call-review③) [(3)](#ref-for-last-call-review④) [(4)](#ref-for-last-call-review⑤) [(5)](#ref-for-last-call-review⑥) [(6)](#ref-for-last-call-review⑦) [(7)](#ref-for-last-call-review⑧)

**[\#last-call-for-review-of-proposed-corrections](#last-call-for-review-of-proposed-corrections)Referenced in:**

- [6.2.4.1. Streamlined Publication Approval](#ref-for-last-call-for-review-of-proposed-corrections)

**[\#last-call-for-review-of-proposed-additions](#last-call-for-review-of-proposed-additions)Referenced in:**

- [6.2.4.1. Streamlined Publication Approval](#ref-for-last-call-for-review-of-proposed-additions)
- [6.2.11.5. Incorporating Candidate Changes](#ref-for-last-call-for-review-of-proposed-additions①) [(2)](#ref-for-last-call-for-review-of-proposed-additions②)

**[\#last-call-for-review-of-proposed-corrections-and-additions](#last-call-for-review-of-proposed-corrections-and-additions)Referenced in:**

- [6.2.11.5. Incorporating Candidate Changes](#ref-for-last-call-for-review-of-proposed-corrections-and-additions)

**[\#proposed-changes](#proposed-changes)Referenced in:**

- [6.2.11.5. Incorporating Candidate Changes](#ref-for-proposed-changes) [(2)](#ref-for-proposed-changes①) [(3)](#ref-for-proposed-changes②) [(4)](#ref-for-proposed-changes③) [(5)](#ref-for-proposed-changes④) [(6)](#ref-for-proposed-changes⑤) [(7)](#ref-for-proposed-changes⑥) [(8)](#ref-for-proposed-changes⑦) [(9)](#ref-for-proposed-changes⑧) [(10)](#ref-for-proposed-changes⑨)
- [Major Update to the Recommendation Track](#ref-for-proposed-changes①⓪)

**[\#proposed-corrections](#proposed-corrections)Referenced in:**

- [6.2.4.1. Streamlined Publication Approval](#ref-for-proposed-corrections)

**[\#proposed-addition](#proposed-addition)Referenced in:**

- [6.2.4.1. Streamlined Publication Approval](#ref-for-proposed-addition)

**[\#WGNote](#WGNote)Referenced in:**

- [5. Working Groups and Interest Groups](#ref-for-WGNote)
- [6.1. W3C Technical Reports](#ref-for-WGNote) [(2)](#ref-for-WGNote①)
- [6.2.3. Advancement on the Recommendation Track](#ref-for-WGNote②)
- [6.2.12.1. Abandoning an Unfinished Technical Report](#ref-for-WGNote③) [(2)](#ref-for-WGNote④)
- [6.3. Working Group and Interest Group Notes](#ref-for-WGNote⑤) [(2)](#ref-for-WGNote⑥) [(3)](#ref-for-WGNote⑦) [(4)](#ref-for-WGNote⑧) [(5)](#ref-for-WGNote⑨) [(6)](#ref-for-WGNote①⓪) [(7)](#ref-for-WGNote①①) [(8)](#ref-for-WGNote①②) [(9)](#ref-for-WGNote①③)
- [10.1.1. Scope of Member Submissions](#ref-for-WGNote①④) [(2)](#ref-for-WGNote①⑤)

**[\#def-w3c-decision](#def-w3c-decision)Referenced in:**

- [6.2.10. Transitioning to W3C Recommendation](#ref-for-def-w3c-decision) [(2)](#ref-for-def-w3c-decision①)
- [6.2.11.5. Incorporating Candidate Changes](#ref-for-def-w3c-decision②)
- [7. Advisory Committee Reviews, Appeals, and Votes](#ref-for-def-w3c-decision③)
- [7.1.2. After the Review Period](#ref-for-def-w3c-decision④) [(2)](#ref-for-def-w3c-decision⑤)
- [7.2. Appeal by Advisory Committee Representatives](#ref-for-def-w3c-decision⑥) [(2)](#ref-for-def-w3c-decision⑦)
- [11. Process Evolution](#ref-for-def-w3c-decision⑧)

**[\#advisory-committee-review](#advisory-committee-review)Referenced in:**

- [5.2.3. Advisory Committee Review of a Working Group or Interest Group Charter](#ref-for-advisory-committee-review)
- [5.2.4. Call for Participation in a Working Group or Interest Group](#ref-for-advisory-committee-review①)
- [6.2.3. Advancement on the Recommendation Track](#ref-for-advisory-committee-review②)
- [6.2.9. Transitioning to Proposed Recommendation](#ref-for-advisory-committee-review③) [(2)](#ref-for-advisory-committee-review④)
- [6.2.11.5. Incorporating Candidate Changes](#ref-for-advisory-committee-review⑤) [(2)](#ref-for-advisory-committee-review⑥)
- [6.2.12.4. Process for Rescinding, Obsoleting, Superseding, Restoring a Recommendation](#ref-for-advisory-committee-review⑦) [(2)](#ref-for-advisory-committee-review⑧)
- [7. Advisory Committee Reviews, Appeals, and Votes](#ref-for-advisory-committee-review⑨)
- [7.1.2. After the Review Period](#ref-for-advisory-committee-review①⓪)
- [7.2. Appeal by Advisory Committee Representatives](#ref-for-advisory-committee-review①①) [(2)](#ref-for-advisory-committee-review①②)
- [9. Liaisons](#ref-for-advisory-committee-review①③)
- [11. Process Evolution](#ref-for-advisory-committee-review①④)

**[\#reviewform](#reviewform)Referenced in:**

- [7.1.1. Start of a Review Period](#ref-for-reviewform)

**[\#advisory-committee-appeal](#advisory-committee-appeal)Referenced in:**

- [6.2.9. Transitioning to Proposed Recommendation](#ref-for-advisory-committee-appeal)
- [6.2.10. Transitioning to W3C Recommendation](#ref-for-advisory-committee-appeal①)
- [6.2.12.4. Process for Rescinding, Obsoleting, Superseding, Restoring a Recommendation](#ref-for-advisory-committee-appeal②)
- [7. Advisory Committee Reviews, Appeals, and Votes](#ref-for-advisory-committee-appeal③)
- [7.2. Appeal by Advisory Committee Representatives](#ref-for-advisory-committee-appeal④) [(2)](#ref-for-advisory-committee-appeal⑤)
- [7.3. Advisory Committee Votes](#ref-for-advisory-committee-appeal⑥)
- [9. Liaisons](#ref-for-advisory-committee-appeal⑦) [(2)](#ref-for-advisory-committee-appeal⑧)
- [11. Process Evolution](#ref-for-advisory-committee-appeal⑨)

**[\#EventsW](#EventsW)Referenced in:**

- [4. Dissemination Policies](#ref-for-EventsW)

**[\#mou](#mou)Referenced in:**

- [7.2. Appeal by Advisory Committee Representatives](#ref-for-mou)
- [9. Liaisons](#ref-for-mou①) [(2)](#ref-for-mou②) [(3)](#ref-for-mou③) [(4)](#ref-for-mou④)

**[\#MemberSubmission](#MemberSubmission)Referenced in:**

- [10. Member Submission Process](#ref-for-MemberSubmission) [(2)](#ref-for-MemberSubmission①) [(3)](#ref-for-MemberSubmission②) [(4)](#ref-for-MemberSubmission③)
- [10.1. Submitter Rights and Obligations](#ref-for-MemberSubmission④)
- [10.2. Team Rights and Obligations](#ref-for-MemberSubmission⑤)
- [10.3. Acknowledgment of a Submission Request](#ref-for-MemberSubmission⑥)

**[\#submitter](#submitter)Referenced in:**

- [10. Member Submission Process](#ref-for-submitter) [(2)](#ref-for-submitter①) [(3)](#ref-for-submitter②) [(4)](#ref-for-submitter③)
- [10.1. Submitter Rights and Obligations](#ref-for-submitter④) [(2)](#ref-for-submitter⑤) [(3)](#ref-for-submitter⑥) [(4)](#ref-for-submitter⑦) [(5)](#ref-for-submitter⑧) [(6)](#ref-for-submitter⑨)
- [10.1.2. Information Required in a Submission Request](#ref-for-submitter①⓪) [(2)](#ref-for-submitter①①) [(3)](#ref-for-submitter①②) [(4)](#ref-for-submitter①③)
- [10.2. Team Rights and Obligations](#ref-for-submitter①④)
- [10.3. Acknowledgment of a Submission Request](#ref-for-submitter①⑤) [(2)](#ref-for-submitter①⑥) [(3)](#ref-for-submitter①⑦)
- [10.4. Rejection of a Submission Request, and Submission Appeals](#ref-for-submitter①⑧) [(2)](#ref-for-submitter①⑨) [(3)](#ref-for-submitter②⓪) [(4)](#ref-for-submitter②①) [(5)](#ref-for-submitter②②) [(6)](#ref-for-submitter②③)

**[\#validation-notice](#validation-notice)Referenced in:**

- [10.3. Acknowledgment of a Submission Request](#ref-for-validation-notice)
