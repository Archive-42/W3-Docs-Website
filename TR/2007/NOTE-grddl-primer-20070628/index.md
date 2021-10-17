[<img src="http://www.w3.org/Icons/w3c_home" alt="W3C" width="72" height="48" />](http://www.w3.org/)

GRDDL Primer
============

W3C Working Group Note 28 June 2007
-----------------------------------

This version:  
<http://www.w3.org/TR/2007/NOTE-grddl-primer-20070628/>

Latest version:  
<http://www.w3.org/TR/grddl-primer/>

Previous version:  
<http://www.w3.org/TR/2006/WD-grddl-primer-20061002/>

Editors:  
<a href="http://www.ibiblio.org/hhalpin" class="url fn">Harry Halpin</a>, <span class="org">University of Edinburgh</span>

<a href="http://purl.org/NET/iand" class="url fn">Ian Davis</a>, <span class="org">Talis</span>

Authors and Contributors:  
see [Acknowledgments](#acknowledgements)

[Copyright](http://www.w3.org/Consortium/Legal/ipr-notice#Copyright) © 2006-2007 [W3C](http://www.w3.org/)<sup>®</sup> ([MIT](http://www.csail.mit.edu/), [ERCIM](http://www.ercim.org/), [Keio](http://www.keio.ac.jp/)), All Rights Reserved. W3C [liability](http://www.w3.org/Consortium/Legal/ipr-notice#Legal_Disclaimer), [trademark](http://www.w3.org/Consortium/Legal/ipr-notice#W3C_Trademarks) and [document use](http://www.w3.org/Consortium/Legal/copyright-documents) rules apply.

------------------------------------------------------------------------

<span id="abstract"></span>Abstract
-----------------------------------

GRDDL is a mechanism for **G**leaning **R**esource **D**escriptions from **D**ialects of **L**anguages. It is a technique for obtaining RDF data from XML documents and in particular XHTML pages. Authors may explicitly associate documents with transformation algorithms, typically represented in XSLT, using a `link` element in the `head` of the document. Alternatively, the information needed to obtain the transformation may be held in an associated metadata profile document or namespace document. Clients reading the document can follow links across the Web using techniques described in the [GRDDL specification](http://www.w3.org/TR/grddl/) to discover the appropriate transformations. This document uses a number of examples from the [GRDDL Use Cases](http://www.w3.org/TR/grddl-scenarios/) document to illustrate, in detail, the techniques GRDDL provides for associating documents with appropriate instructions for extracting any embedded data.

Status of this Document
-----------------------

*This section describes the status of this document at the time of its publication. Other documents may supersede this document. A list of current W3C publications and the latest revision of this technical report can be found in the [W3C technical reports index](http://www.w3.org/TR/) at http://www.w3.org/TR/.*

This document is a Working Group Note, developed by the [GRDDL Working Group](http://www.w3.org/2001/sw/grddl-wg/).

As of the publication of this Working Group Note the [GRDDL Working Group](http://www.w3.org/2001/sw/grddl-wg/) has completed work on this document. Changes from the previous Working Draft are indicated in a [log of changes](#changes). Comments on this document may be sent to <public-grddl-comments@w3.org> (with [public archive](http://lists.w3.org/Archives/Public/public-grddl-comments/)). Further discussion on this material may be sent to the Semantic Web Interest Group mailing list, <semantic-web@w3.org> (also with [public archive](http://lists.w3.org/Archives/Public/semantic-web/)).

Publication as a Working Group Note does not imply endorsement by the W3C Membership. This is a draft document and may be updated, replaced or obsoleted by other documents at any time. It is inappropriate to cite this document as other than work in progress.

This document was produced by a group operating under the [5 February 2004 W3C Patent Policy](http://www.w3.org/Consortium/Patent-Policy-20040205/). W3C maintains a [public list of any patent disclosures](http://www.w3.org/2004/01/pp-impl/39407/status) made in connection with the deliverables of the group; that page also includes instructions for disclosing a patent. An individual who has actual knowledge of a patent which the individual believes contains [Essential Claim(s)](http://www.w3.org/Consortium/Patent-Policy-20040205/#def-essential) must disclose the information in accordance with [section 6 of the W3C Patent Policy](http://www.w3.org/Consortium/Patent-Policy-20040205/#sec-Disclosure).

------------------------------------------------------------------------

Table of Contents
-----------------

-   [Introduction](#introduction)
-   [GRDDL and XHTML: Scheduling a Meeting](#scheduling)
-   [Mashing-Up Microformats: Booking a Hotel](#hotel)
-   [GRDDL and XML: Integrating Spreadsheets](#spreadsheets-section)
-   [GRDDL and Inference: Solving Health Care Problems](#hl7)
-   [References](#references)
-   [Acknowledgements](#acknowledgements)
-   [Change Log](#changes)

Introduction
------------

GRDDL provides an inexpensive set of mechanisms for bootstrapping RDF content from XML and XHTML. GRDDL does this by shifting the burden of formulating RDF away from the author to transformation algorithms written specifically for XML dialects such as XHTML. In this document the term HTML is used to refer to the XHTML dialect of HTML [\[XHTML\]](#XHTML).

GRDDL works through associating transformations with an individual document either through direct inclusion of references or indirectly through profile and namespace documents. For XML dialects the transformations are commonly expressed using XSLT 1.0, although other methods are permissible. Generally, if the transformation can be fully expressed in XSLT 1.0 then it is preferable to use that format since GRDDL processors should be capable of interpreting an XSLT 1.0 document.

While anyone can create a transformation, a [standard transform library](http://www.w3.org/2001/sw/grddl-wg/library) has been provided that can extract RDF that's embedded directly in XML or HTML using `<rdf:RDF>` tags as well as extract any profile transformations. GRDDL transformations can be made for almost any dialect, including microformats.

This document may be read in conjunction with the GRDDL Use Cases [\[GRDDL-SCENARIOS\]](#GRDDL-SCENARIOS) which describes a series of common scenarios for which GRDDL may be suitable. Readers desiring the technical details of the GRDDL mechanism or wishing to implement GRDDL themselves should refer to the GRDDL Specification [\[GRDDL\]](#GRDDL).

GRDDL and XHTML: Scheduling a Meeting
-------------------------------------

One persistent and troublesome problem is discovering precisely when and where your friends are together so that you can [schedule](http://www.w3.org/TR/grddl-scenarios/#scheduling_use_case) a meeting. In our example, a frequent traveller called Jane is trying see if at any point next year she can schedule a meeting with all three of her friends, despite the fact that all of her friends publish their calendar data in different ways. With GRDDL, she can discover if they can meet up without forcing her friends to all use the same centralized Web-based calendar system.

GRDDL provides a number of ways for GRDDL transformations to be associated with content, each of which is appropriate in different situations. The simplest method for authors of HTML content is to embed a reference to the transformations directly using a `link` element in the head of the document.

[Microformats](http://microformats.org/) are simple conventions for embedding semantic markup for a specific domain in human-readable documents. One of Jane's friends has marked up their [schedule](robin-hcal-no-grddl.html) using the [hCalendar](http://microformats.org/wiki/hcalendar) microformat. The hCalendar microformat uses HTML `class` attributes to associate event-related semantics with elements in the markup, as shown in [Robin's calendar](robin-hcal-grddl.html):

    <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1//EN" "http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd">
    <html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
      <head>
        <title>Robin's Schedule</title>
      </head>
      <body>
        <ol class="schedule">
          <li>2006
            <ol>
              <li class="vevent">
                <strong class="summary">Fashion Expo</strong> in 
                <span class="location">Paris, France</span>:
                <abbr class="dtstart" title="2006-10-20">Oct 20</abbr> to 
                <abbr class="dtend" title="2006-10-23">22</abbr>
              </li>
              <li class="vevent">
                <strong class="summary">New line review</strong> in 
                <span class="location">Cologne, Germany</span>:
                <abbr class="dtstart" title="2006-10-26">Oct 26</abbr> to 
                <abbr class="dtend" title="2006-10-28">27</abbr>
              </li>
              <li class="vevent">
                <strong class="summary">Clothing 2006</strong> in 
                <span class="location">Rome, Italy</span>:
                <abbr class="dtstart" title="2006-12-01">Dec 1</abbr> to 
                <abbr class="dtend" title="2006-12-06">5</abbr>
              </li>
            </ol>
          </li>
          <li>2007
            <ol>
              <li class="vevent">
                <strong class="summary">Web Design Conference</strong> in 
                <span class="location">Edinburgh, UK</span>:
                <abbr class="dtstart" title="2007-01-08">Jan 8</abbr> to 
                <abbr class="dtend" title="2007-01-11">10</abbr>
              </li>
              <li class="vevent">
                <strong class="summary">Board Review</strong> in 
                <span class="location">New York, USA</span>:
                <abbr class="dtstart" title="2007-02-23">Feb 23</abbr> to 
                <abbr class="dtend" title="2007-02-25">24</abbr>
              </li>
            </ol>
          </li>
        </ol>
      </body>
    </html>

To explicitly relate the data in this document to the RDF data model the author needs to make two changes. First, she needs to add a `profile` attribute to the head element to denote that her document contains GRDDL metadata. In HTML, profiles are used to link documents to descriptions of the metadata schemes they employ (see HTML specification, [Meta data profiles](http://www.w3.org/TR/html401/struct/global.html#h-7.4.4.3)). The profile URI for GRDDL is `http://www.w3.org/2003/g/data-view` and by including this URI in her document Robin is declaring that her markup can be interpreted using GRDDL.

The resulting HTML looks like this

    <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1//EN" "http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd">
    <html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
      <head profile="http://www.w3.org/2003/g/data-view">
        <title>Robin's Schedule</title>
      </head>
      <body>
      ...

Then she needs to add a `link` element containing the reference to the specific GRDDL transformation for converting HTML containing hCalendar patterns into RDF. She can either write her own GRDDL transformation or re-use an existing transformation, and in this case there's one available for calendar data. The `link` element contains the token `transformation` in the `rel` attribute and the URI of the GRDDL transformation itself for extracting RDF is given by the value of the `href` attribute.

    <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1//EN" "http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd">
    <html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
     <head profile="http://www.w3.org/2003/g/data-view">
        <title>Robin's Schedule</title>
        <link rel="transformation" href="http://www.w3.org/2002/12/cal/glean-hcal"/>
      </head>
      <body>
      ...

The profile URI in the [Robin's new GRDDL-enabled calendar file](robin-hcal-grddl.html) signals that the receiver of the document may look for link elements with a `rel` attribute containing the token `transformation` and use any or all of those links to determine how to extract the data as [RDF from Robin's calendar](robin-hcal-grddl.rdf).

<img src="hCalendar.png" alt="A diagram indicating the sequence of steps described for obtaining RDF fro m a document using an explicit link to the transformation as described in the preceding paragraph." width="886" height="125" />

### Referencing Through Profile Documents

Individual publishers of data using popular vocabularies can also give users of their data of being transformed into RDF without having to even add any new markup to individual documents. This is done by referencing GRDDL transformations in a **profile document** referenced in the head of the HTML. Other XML vocabularies may use their namespace documents for the same purpose. or namespace document. This method requires no work from the content author of individual documents but requires that the profile document contain a reference to a GRDDL transformation and be accessible to the GRDDL client, and so may require work from the creator and maintainer of the dialect. Yet this is a good use of time, since once the transformation has been linked to the profile document, all the users of the dialect get the added value of RDF.

Another of Jane's friends, David, has chosen to mark up his [schedule](david-erdf.html) using [Embedded RDF](http://research.talis.com/2005/erdf/wiki/Main/RdfInHtml). Embedded RDF has a link to a GRDDL transformation in its profile document.

    <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1//EN" "http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd">
    <html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
      <head profile="http://purl.org/NET/erdf/profile">
        <title>Where Am I</title>
        <link rel="schema.cal" href="http://www.w3.org/2002/12/cal#" />
      </head>

      <body>
        <p class="-cal-Vevent" id="tiddlywinks">
          From <span class="cal-dtstart" title="2006-10-07">7 October, 2006</span>
          to <span class="cal-dtend"  title="2006-10-13">12 October, 2006</span> 
          I will be attending the <span class="cal-summary">National Tiddlywinks
          Championship</span> in 
          <span class="cal-location">Bognor Regis, UK</span>.
        </p>

       
        <p class="-cal-Vevent" id="holiday">
          Then I'm <span class="cal-summary">on holiday</span> in the 
          <span class="cal-location">Cayman Islands</span> between
          <span class="cal-dtstart" title="2006-11-14">14 November, 2006</span>

          and <span class="cal-dtend"  title="2007-01-02">1 January, 2007</span>. 
        </p>

        <p class="-cal-Vevent" id="award">
          I then visit Scotland on <span class="cal-dtstart" title="2007-01-08">the 8th
          January</span> to <span class="cal-summary">pick up a lifetime
          achievement award from the world gamers association</span>. This time
          the ceremony is in <span class="cal-location">Edinburgh, UK</span>. I'll be
          taking the train home on the <span class="cal-dtend"  title="2007-01-11">10th</span>. 
        </p>

      </body>
    </html>
      

Note that in this document the profile attribute does not contain a reference to the GRDDL profile. Instead it references the standard profile URI for Embedded RDF which *does* contain the GRDDL metadata. Anyone wishing to get the RDF data out of David's page can fetch the [Embedded RDF profile URI](http://purl.org/NET/erdf/profile) to obtain the following profile document:

    <html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">

      <head profile="http://www.w3.org/2003/g/data-view">
        <title>Embedded RDF HTML Profile</title>
        <link rel="transformation" href="http://www.w3.org/2003/g/glean-profile" />
      </head>
      <body>

        <p>
          <a rel="profileTransformation" 
              href="http://purl.org/NET/erdf/extract-rdf.xsl">GRDDL transform</a>
        </p>
      </body>
    </html>
      

This document contains a reference to the GRDDL profile which again indicates that the profile may contain references to GRDDL transformations that can be applied to David's calendar, even if David does not explicitly link these transformations to his calendar. Jane's agent applies a standard transformation for profile documents to the [Embedded RDF profile document](http://purl.org/NET/erdf/profile) in order to find a link to a transformation for all Embedded RDF documents, including David's HTML document. This transformation for all Embedded RDF documents, <http://purl.org/NET/erdf/extract-rdf.xsl>, is identified in the profile document using the `rel` attribute of`profileTransformation`. This process may be replicated with any vocabulary that has a profile URI.

<img src="embeddedRDF.png" alt="A diagram indicating the sequence of steps for obtaining RDF from a document using the profile URI as described in the preceding paragraph" width="890" height="308" />

Microformat-enabled web-pages on the Web may not be valid XHTML. For this purpose, one may wish to use [a program like Tidy (or some other algorithm) to make the web-page equivalent to valid XHTML](http://www.w3.org/TR/grddl-scenarios/#html_tidy_use_case) before applying GRDDL [\[GRDDL-SCENARIOS\]](#GRDDL-SCENARIOS). Also, many microformats may not have profiles with transformations. A user can always take matters into their own hands by applying [a GRDDL transformation for a microformat](http://esw.w3.org/topic/CustomRdfDialects) directly to the web page in order to get RDF. This is risky since if the author of the document or microformat vocabulary does not explicitly license a GRDDL transformation, the responsibility for those RDF is now in the hands of the user.

Jane would like to meet with David and Robin, but does not want to manually check all their calendars, a process that is tiresome and prone to human error. To solve this problem, Jane decides to use a [GRDDL implementation](http://www.w3.org/2004/01/rdxh/spec#implExp) that converts both Robin and David's calendar to RDF. Jane stores [her calendar](janeschedule.html) directly in [RDFa](#RDFA), a way of embedding RDF directly into HTML. She can use a [GRDDL Transformation for RDFa](RDFa2RDFXML.xsl) to convert RDFa to RDF/XML, in order to get her [entire schedule in RDF/XML](janeschedule.rdf).

One of the advantages of the RDF data model is that RDF data can be easily merged by adding it to a RDF store, so Jane can merge and query all the calendars together once they are transformed into RDF. Jane uses SPARQL [\[SPARQL\]](#SPARQL) to query her data, which automatically merges the calendar data sources before running the query. SPARQL (The SPARQL Protocol and RDF Query Language) is a query language for RDF with a syntax similar to well-known data-base query languages. Online forms for submitting SPARQL queries can be found at [on the this wiki.](http://esw.w3.org/topic/SparqlEndpoints). Her [scheduling SPARQL query](schedulequery.rq) looks like this:

    PREFIX ical: <http://www.w3.org/2002/12/cal/icaltzd#>
    PREFIX xs: <http://www.w3.org/2001/XMLSchema#>

    SELECT ?start1 ?stop1 ?loc1 ?summ1 ?summ2 ?summ3

    FROM <http://www.w3.org/TR/grddl-primer/janeschedule.rdf>
    FROM <http://www.w3.org/TR/grddl-primer/robin-hcal-grddl.rdf>
    FROM <http://www.w3.org/TR/grddl-primer/david-erdf.rdf>

    WHERE
      { 
        ?event1 a ical:Vevent;
                  ical:summary ?summ1 ;
              ical:dtstart ?start1 ;
                  ical:dtend ?stop1 ;
                  ical:location ?loc1.
        ?event2 a ical:Vevent;
                  ical:summary ?summ2 ;
              ical:dtstart ?start2;
                  ical:dtend ?stop2;
                  ical:location ?loc2.
        ?event3 a ical:Vevent;
                  ical:summary ?summ3 ;
              ical:dtstart ?start3;
                  ical:dtend ?stop3;
                  ical:location ?loc3.
          FILTER (  ?event1 != ?event2 &&  ?event2 != ?event3  &&  ?event1 != ?event3  ) .
          FILTER ( xs:string(?start1) = xs:string(?start2) ).
          FILTER ( xs:string(?stop1) = xs:string(?stop2) ).
          FILTER ( xs:string(?loc1) = xs:string(?loc2) ).
          FILTER ( xs:string(?start1) = xs:string(?start3) ).
          FILTER ( xs:string(?stop1) = xs:string(?stop3) ).
          FILTER ( xs:string(?loc1) = xs:string(?loc3) ).
          FILTER ( xs:string(?start3) = xs:string(?start2) ).
          FILTER ( xs:string(?stop3) = xs:string(?stop2) ).
          FILTER ( xs:string(?loc3) = xs:string(?loc2) ).
          FILTER ( xs:string(?summ1) <= xs:string(?summ2) ). 
          FILTER ( xs:string(?summ2) <= xs:string(?summ3) ).
    }

The SELECT line determines which variable will appear in the results, here one of the start dates, one of the stop dates, a location and a summary. The FROM lines identify the data sources to use in the query, in this case the RDF/XML derived from Jane, David and Robin's original documents. The WHERE section provides a pattern which can match three events. The first block of FILTERs match up identical start and stop dates as well as locations between the three events. These values, which may be differently typed, are simplified to simple literals with the `str()` operator. The final two FILTER lines are idiomatic expressions which prevent multiple results returning due to the interchangeability of the variables.

The relevant results of querying the results of GRDDL is:

<table><tbody><tr class="odd"><td>start1</td><td>stop1</td><td>loc1</td><td>summ1</td></tr><tr class="even"><td>"2007-01-08</td><td>"2007-01-11"</td><td>Edinburgh, UK"</td><td>Web Design Conference"</td></tr></tbody></table>

So Jane discovers her friends Robin and David are both in town with her in Edinburgh on January 8th through 10th for the Web Design Conference. Since this is such as useful SPARQL script, she considers bundling it up as a web service so her friends can use it easily without writing SPARQL from scratch.

Mashing-Up Microformats: Booking a Hotel
----------------------------------------

In this example, we will combine data dialects as different as reviews and social networks in order to guarantee the booking a hotel with a high review from a trusted friend. This process of booking a hotel highlights the role of GRDDL in aggregating data from a variety of different formats and of using RDF as a common format to "mashup" all sorts of data, not just calendar data. We can of course write code in our favorite language to extract and combine these calendar data formats without using RDF. This ability to combine and query multiple kinds of microformat data from different web-pages shows functionality that RDF delivers that simple extraction of microformats to a custom data format can not. This example is similar to [the guitar review use case](http://www.w3.org/2001/sw/grddl-wg/doc43/scenario-gallery.htm#use_case_3).

Jane is pleased that she has found out all her friends can finally meet up in Edinburgh. However, she is not sure of where to stay in Edinburgh, so she decides to check reviews. There are various special interest publications online which feature hotel reviews, and blogs which contain reviews by individuals. The reviewers include friends and colleagues of Jane and people whose opinion Jane values (e.g. friends and people whose reviews Jane has found useful in the past). There may also be reviews planted by hotel advertisers which offer biased views in an attempt to attract customers.

First, Jane needs to get a list of people she considers trusted sources into some sort of machine readable document. One choice would be [FOAF](http://www.foaf-project.org/) (Friend of a Friend), a popular RDF vocabulary for describing social networks of friends and personal data. Other choices include a collection of contacts stored in vCard using RDF [\[VCARD\]](#VCARD).

Another choice is to use microformats. A microformat that allows for more information about friends to be gleaned from the document is [XFN](http://gmpg.org/xfn/), " **X**HTML **F**riends **N**etwork". Examples of such relationships are friends, colleagues, co-workers, and so on, as given in this [example file](janefriends.html).

Since XFN relationships are embedded in anchor (`a`) elements, they can be expressed in RDF in a variety of ways. Given Jane's HTML document uses the XFN microformat, a GRDDL transformation can extract RDF data. These descriptions would allow a RDF spider (a "scutter") to follow links to additional RDF content that may include more XFN, vCard, or FOAF descriptions. Jane's [XFN list](janefriends.html), is given as:


    <html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en">
        <head profile="
           http://www.w3.org/2003/g/data-view
            http://dublincore.org/documents/dcq-html/
            http://gmpg.org/xfn/11">
    <link rel="transformation" href="grokXFN.xsl" />
            <title>Jane's XFN List</title>
        </head>
        <body>
            <h1>Jane's <abbr title="XHTML Friends Network">XFN</abbr> List</h1>

            <ul class="xoxo">
                <li class="vcard"><a href="http://peter.example.org" class="url fn" rel="met collegue friend">Peter Smith</a></li>
                <li class="vcard"><a href="http://john.example.org" class="url fn" rel="met">John Doe</a></li>
                <li class="vcard"><a href="http://paul.example.org" class="url fn" rel="met">Paul Revere</a></li>
            </ul>
        </body>
    </html>

This XFN file can be converted to RDF with the use of another [GRDDL Transform for XFN](grokXFN.xsl), resulting in the [example RDF result file](janefriends.rdf).

Hotel review sites include a number of reviews, including some in Edinburgh. This [particular hotel review file](hotel-data.html) is also marked up with the [hReview](http://microformats.org/wiki/hreview) that we can also convert to RDF using a [transform](hreview2rdfxml.xsl), resulting in [a RDF version of the hotel reviews](review.rdf). A portion of the [hotel file example in HTML](hotel-data.html) is given below to illustrate the use of the hReview microformat:


    <html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en">
      <head profile="http://www.w3.org/2003/g/data-view">
        <title>Hotel Reviews from Example.com</title>
        <link rel="transformation" 
           href="http://www.w3.org/TR/grddl-primer/hreview2rdfxml.xsl"/> 
    </head>
    <div class="hreview" id="_665">
      <div class="item vcard">
      <b class="fn org">Witch's Caldron Hotel, Edinburgh</b>
      <ul>
        <li>
          <a class="url" href="http://witches.example.com/">Homepage</a>    </li>
      </ul>
      <span><span class="rating">5</span> out of 5 stars</span>
      <ul>
        <li class="adr">
          <div class="type">intl postal parcel work</div>
          <div class="street-address">313 Cannongate</div>
          <div><span class="locality">Edinburgh</span>, <span class="postal-code">EH8 8DD </span> <span class="country-name">United Kingdom</span></div>
        </li>
      </ul>
      <div class="tel"><abbr class="type" title="work msg">Homepage</abbr>: <a class="value" href="tel:+44 1317861235">+44 1317862235</a></div>

With this combined "mashed-up" data we can find Jane's friends and find the hotel reviews that those friends created. Using GRDDL we can glean information, including the ratings, about the hotels. Once we have this data as RDF we can "mash-up" the data of the friends and the hotel reviews.

![Diagram of hotel data relationships](hotel-answer.png)

Diagram of hotel data relationships

In order to find hotels with specific ratings or higher from a group of her trusted friends, we can now query the "mashed-up" data with SPARQL. [SPARQL (The SPARQL Protocol and RDF Query Language)](http://www.w3.org/TR/rdf-sparql-query/) is a query language for RDF that can automatically "mash-up" data from multiple sources.

    PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
    PREFIX rev: <http://www.purl.org/stuff/rev#>
    PREFIX vcard: <http://www.w3.org/2006/vcard/ns#>
    PREFIX dc: <http://purl.org/dc/elements/1.1/>
    PREFIX foaf: <http://xmlns.com/foaf/0.1/>

    SELECT DISTINCT ?rating ?name ?region ?hotelname

    FROM <http://www.w3.org/TR/grddl-primer/hotel-data.rdf>

    WHERE {
    ?x rev:hasReview ?review;
        vcard:ADR ?address;
        vcard:FN ?hotelname .
    ?review rev:rating ?rating .
    ?address vcard:Locality ?region.

    FILTER (?rating > "2").

    ?review rev:reviewer ?reviewer.
    ?reviewer foaf:name ?name;
        foaf:homepage ?homepage

    }

This query results in:

<table><thead><tr class="header"><th>rating</th><th>name</th><th>region</th><th>hotelname</th></tr></thead><tbody><tr class="odd"><td>"5"</td><td>"RexR"</td><td>"Edinburgh"</td><td>"McRae Palace, Edinburgh"</td></tr><tr class="even"><td>"5"</td><td>"MaryV"</td><td>"Philadelphia"</td><td>"Franklin Hotel Philadelphia"</td></tr><tr class="odd"><td>"5"</td><td>"JohnD"</td><td>"Helsinki"</td><td>"Elena Plaza Hotel"</td></tr><tr class="even"><td>"5"</td><td>"PeterS"</td><td>"Amsterdam"</td><td>"Enlightenment Amsterdam Hotel"</td></tr><tr class="odd"><td>"4"</td><td>"PeterS"</td><td>"Cambridge"</td><td>"Fano Hotel"</td></tr><tr class="even"><td>"5"</td><td>"PeterS"</td><td>"Edinburgh"</td><td>"Witch's Caldron Hotel, Edinburgh"</td></tr><tr class="odd"><td>"3"</td><td>"JennyR"</td><td>"Atlanta"</td><td>"Merton Atlanta"</td></tr><tr class="even"><td>"5"</td><td>"RexR"</td><td>"LEIDEN"</td><td>"Pilgrim Hostel"</td></tr><tr class="odd"><td>"5"</td><td>"Simon"</td><td>"Edinburgh"</td><td>"Forest Cafe Youth Hostel, Edinburgh"</td></tr><tr class="even"><td>"5"</td><td>"PeterS"</td><td>"Cambridge"</td><td>"Royal Moon Hotel Boston"</td></tr><tr class="odd"><td>"3"</td><td>"RexR"</td><td>"Washington"</td><td>"Bond Plaza Hotel"</td></tr><tr class="even"><td>"5"</td><td>"RexR"</td><td>"Edinburgh"</td><td>"Ritchie Centre, Edinburgh"</td></tr><tr class="odd"><td>"4"</td><td>"JohnD"</td><td>"Edinburgh"</td><td>"Walter Scot Hotel, Edinburgh"</td></tr><tr class="even"><td>"5"</td><td>"PeterS"</td><td>"New York"</td><td>"Maximus New York Hotel &amp; Towers"</td></tr></tbody></table>

The query unfortunately gets us all hotels from anywhere in the world with more than 2 stars, so we need to further restrict the results to only hotels in Edinburgh, as we do in [this improved query](hotelquery2.rq).

    PREFIX foaf: <http://xmlns.com/foaf/0.1/>
    PREFIX rev: <http://www.purl.org/stuff/rev#>
    PREFIX vcard: <http://www.w3.org/2006/vcard/ns#>

    SELECT DISTINCT ?rating ?name ?hotelname ?region

    FROM <http://www.w3.org/TR/grddl-primer/hotel-data.rdf>

    WHERE {
    ?x rev:hasReview ?review;
        vcard:ADR ?address;
        vcard:FN ?hotelname .
    ?review rev:rating ?rating .
    ?address vcard:Locality ?region.

    FILTER (?rating > "2" && ?region = "Edinburgh").

    ?review rev:reviewer ?reviewer.
    ?reviewer foaf:name ?name;
        foaf:homepage ?homepage

    }

This results in:

<table><tbody><tr class="odd"><td><strong>rating</strong></td><td><strong>name</strong></td><td><strong>hotelname</strong></td><td><strong>region</strong></td></tr><tr class="even"><td>"5"</td><td>"RexR"</td><td>"Ritchie Centre, Edinburgh"</td><td>"Edinburgh"</td></tr><tr class="odd"><td>"5"</td><td>"PeterS"</td><td>"Witch's Caldron Hotel, Edinburgh"</td><td>"Edinburgh"</td></tr><tr class="even"><td>"5"</td><td>"Simon"</td><td>"Forest Cafe Youth Hostel, Edinburgh"</td><td>"Edinburgh"</td></tr><tr class="odd"><td>"5"</td><td>"RexR"</td><td>"McRae Palace, Edinburgh"</td><td>"Edinburgh"</td></tr><tr class="even"><td>"4"</td><td>"JohnD"</td><td>"Walter Scott Hotel, Edinburgh"</td><td>"Edinburgh"</td></tr></tbody></table>

Now the results will be hotels with a rating of 2 stars or higher that are located in Edinburgh. The problem with the possible list of results is that there could be biased reviews. The next step is to further restrict the results to only reviews by our trusted list of contacts. Using the XFN links in Jane's page which identifies the URIs of people Jane trusts, by matching URIs we can select only those reviewers who are Jane's friends, as done in [this further improved query](hotelquery3.rq).

    PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
    PREFIX foaf: <http://xmlns.com/foaf/0.1/>
    PREFIX rev: <http://www.purl.org/stuff/rev#>
    PREFIX vcard: <http://www.w3.org/2006/vcard/ns#>
    PREFIX xfn: <http://gmpg.org/xfn/11#>

    SELECT DISTINCT ?rating ?name ?region ?homepage ?xfnhomepage ?hotelname

    FROM <http://www.w3.org/TR/grddl-primer/janefriends.rdf>
    FROM <http://www.w3.org/TR/grddl-primer/hotel-data.rdf>


    WHERE {
    ?x rev:hasReview ?review;
       vcard:ADR ?address;
       vcard:FN ?hotelname.
    ?review rev:rating ?rating .
    ?address vcard:Locality ?region.

    FILTER (?rating > "2" && ?region = "Edinburgh").

    ?review rev:reviewer ?reviewer.
    ?reviewer foaf:name ?name;
                  foaf:homepage ?homepage.

    ?y xfn:friend ?xfnfriend.
    ?xfnfriend foaf:homepage ?xfnhomepage.

    FILTER (?xfnhomepage = ?homepage).
    }

We finally get the result we want: A hotel with a ranking of 5 reviewed by a trusted friend.

<table><tbody><tr class="odd"><td><strong>rating</strong></td><td><strong>name</strong></td><td><strong>region</strong></td><td><strong>homepage</strong></td><td><strong>xfnhomepage</strong></td><td><strong>hotelname</strong></td></tr><tr class="even"><td>"5"</td><td>"PeterS"</td><td>"Edinburgh"</td><td>&lt;http://peter.example.org/&gt;</td><td>&lt;http://peter.example.org/&gt;</td><td>"Witch's Caldron Hotel, Edinburgh"</td></tr></tbody></table>

SPARQL results can be obtained as XML or JSON and can easily be consumed by another application. This can display the results on screen, email them to Jane or it can be pulled into another application to search the web for the best prices on the short list of hotels.

GRDDL and XML: Integrating Spreadsheets
---------------------------------------

GRDDL is also useful for integrating data from general-purpose XML dialects produced by everyday applications. A trove of accumulated information is stored in spreadsheets, and spreadsheets can be saved using a general-purpose XML format. Integrating, reusing, and "mashing-up" information stored in spreadsheets can be valuable, and GRDDL provides a mechanism for accessing this information as RDF in order to accomplish this. In this example, we will specifically consider the problem of gleaning information from Microsoft® Excel spreadsheets, although other spreadsheet-like XML dialects would be able to take advantage of the same basic mechanism.

Jane serves as the secretary for a small group with her two friends, David and Robin, that meets once a month. She tracks the attendance at these meetings using a simple Excel spreadsheet, and she starts a new spreadsheet each year. She wants the members of this group to be able to query these accumulated statistics freely, and she recognizes that RDF would support this kind of merging and querying functionality. She decides to use GRDDL to allow any of the members of the group to glean RDF from any of these attendance records and query the data along with any other RDF that may be available.

Jane intends to use a GRDDL transformation called [`xcel-mf2rdf.xsl`](xcel-mf2rdf.xsl), which requires the Excel spreadsheet to conform to a particular profile. She first must identify which cells in her spreadsheet are *data cells*. In the case of an attendance spreadsheet, the data cells are the attendance indicators, and she identifies these cells by giving them the name "Data". She must also identify the *header cells*. In this case, the header cells are the cells containing names and dates; Jane identifies these cells by giving them the name "Header". Next, Jane gives each data and header cell an additional name, which serves as the local name of the property for that cell. She names the date cells "date", the member name cells "name", and the attendance cells "present". Finally, Jane must set two custom properties globally on the spreadsheet. The first property is called "profile", and this particular profile has profile URI `http://www.mnot.net/2005/08/xcel-mf`. The second property is called "namespace", and provides the namespace to be used for RDF properties in the GRDDL results; Jane chooses the namespace URI `http://example.org/attendance/`.

![Resulting Excel spreadsheet screenshot](attendance-screenshot.png)

Attendance spreadsheet with header cells selected

Since GRDDL operates on XML documents, she saves her Excel files using the XML dialect that Excel provides. After saving them as XML, she adds the reference to this transformation to the root element of each attendance document. Following the directives of the Excel profile, and including the appropriate GRDDL reference, this is a slice of [the resulting spreadsheet document](attendance.xml):

    <?xml version="1.0"?>
    <?mso-application progid="Excel.Sheet"?>
    <Workbook
      xmlns="urn:schemas-microsoft-com:office:spreadsheet"
      xmlns:o="urn:schemas-microsoft-com:office:office"
      xmlns:x="urn:schemas-microsoft-com:office:excel"
      xmlns:dt="uuid:C2F41010-65B3-11d1-A29F-00AA00C14882"
      xmlns:ss="urn:schemas-microsoft-com:office:spreadsheet"
      xmlns:html="http://www.w3.org/TR/REC-html40"
      xmlns:grddl="http://www.w3.org/2003/g/data-view#"
      grddl:transformation="xcel-mf2rdf.xsl">
     <!-- ... -->
     <CustomDocumentProperties xmlns="urn:schemas-microsoft-com:office:office">
      <profile dt:dt="string">http://www.mnot.net/2005/08/xcel-mf</profile>
      <namespace dt:dt="string">http://example.org/attendance/</namespace>
     </CustomDocumentProperties>
     <!-- ... -->
     <Worksheet ss:Name="Sheet1">
      <Table>
       <!-- ... -->
       <Row ss:Index="3">
        <!-- ... -->
        <Cell ss:StyleID="s26"><Data ss:Type="String">2006-04</Data><NamedCell
          ss:Name="Header"/><NamedCell ss:Name="date"/></Cell>
        <!-- ... -->
       </Row>
       <!-- ... -->
       <Row>
        <Cell ss:StyleID="s25"><Data ss:Type="String">Robin</Data><NamedCell
          ss:Name="name"/><NamedCell ss:Name="Header"/></Cell>
        <!-- ... -->
        <Cell><Data ss:Type="String">n</Data><NamedCell ss:Name="present"/><NamedCell
          ss:Name="Data"/></Cell>
        <!-- ... -->
       </Row>
       <!-- ... -->
      </Table>
      <!-- ... -->
     </Worksheet>
    </Workbook>

When processed by a GRDDL-aware agent, a document such as this will be transformed into [RDF that preserves the meaning of the spreadsheet](attendance.rdf):

    <?xml version="1.0" encoding="UTF-8"?>
    <rdf:RDF
      xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
      xmlns="http://example.org/attendance/">
     <!-- ... -->
     <rdf:Description>
      <name>Robin</name>
      <date>2006-04</date>
      <present>n</present>
     </rdf:Description>
     <!-- ... -->
    </rdf:RDF>

Jane and the other members of the group can now use this data in a variety of situations. For example, suppose there exist other records of decisions that were made at these meetings, and [the record of one of those meeting was also stored in a spreadsheet that was converted to RDF](events.rdf).

Merging these triples with the GRDDL results from the attendance record spreadsheets, Jane can now ask questions such as "who attended the meeting at which we decided to choose the new meeting location?" In SPARQL, [the corresponding spreadsheet query](spreadsheetquery.rq) is:

    PREFIX att: <http://example.org/attendance/>
    PREFIX ev: <http://example.org/events/>

    SELECT ?name 

    FROM <http://www.w3.org/TR/grddl-primer/events.rdf>
    FROM <http://www.w3.org/TR/grddl-primer/attendance.rdf>

    WHERE
    {
      ?event ev:label "choose new meeting location" .
      ?event ev:date ?date .
      ?attendance att:date ?date .
      ?attendance att:name ?name .
      ?attendance att:present "y" .
    }

Which would give the following results:

<table><tbody><tr class="odd"><td><strong>name</strong></td></tr><tr class="even"><td>Jane</td></tr><tr class="odd"><td>David</td></tr></tbody></table>

This indicates that Jane and David were present at the meeting where that decision was made.

In this example, the link to the GRDDL transformation was added by hand. However, as shown in detail in the GRDDL specification [\[GRDDL\]](#GRDDL) for [XML Schema, RDF, and HTML namespace documents](http://www.w3.org/TR/grddl/#ns-bind) may also have links to transformations for XML dialects; so a GRDDL-aware agent can also retrieve the namespace document of an XML dialect to find a GRDDL transformation by "following its nose" from the namespace on the root element of the GRDDL source document to the namespace document. The use of a namespace on the root element represents a declaration that the document conforms to the authoritative definition of that namespace as defined by the namespace owner, which may include a transformation from that XML dialect into RDF using GRDDL.

There are a few rules of thumb for XML namespace owners wanting to make GRDDL transformations available for their particular dialect of XML. Given an XML document representation, a GRDDL-aware agent that wishes to determine namespace or profile transformations may resolve the namespace or profile URI to obtain a representation. Because of content negotiation and other factors, different GRDDL-aware agents resolving the same namespace or profile URI could receive different representations, which could in turn specify different namespace or profile transformations, which could in turn produce different GRDDL results. In particular, a GRDDL-aware agent that receives a namespace or profile representation that specifies GRDDL transformations may not even be aware that some other representation, specifying more or different transformations, is available. This may pose problems to users that intend to retrieve all of the available GRDDL results associated with the original XML document representation.

To help prevent this problem, namespace and profile document authors that choose to serve representations that indicate namespace or profile transformations are advised to ensure that all such representations specify the *same* namespace or profile transformations.

GRDDL and Inference: Solving Health Care Problems
-------------------------------------------------

GRDDL can not only be used for combining HTML data, but for XML data as well. This section uses HL7 CDA, a widely deployed XML vocabulary for use in clinical data, as an example of how an XML dialect can be gleaned for RDF. This part of the primer walks through step-by-step the [Health Care: Querying XML-based clinical data](http://www.w3.org/TR/grddl-scenarios/#health_care_use_case) use-case.

Kayode wants to write software components which can extract RDF descriptions from [XML HL7 CDA](http://www.hl7.org/) documents transmitted from various devices in a healthcare system using a clinical ontology so that he can merge together clinical reports and use inferences to detect possible problems. CDA is a very well-designed information model and heavily optimized for messaging between computerized hospital systems, and [an example CDA document](hl7-sample.xml) is given. Below is a section of this document that describes the author of a clinical document and the patient that the document describes.

This [GRDDL-enhanced CDA document](hl7-sample-grddl.xml) can be processed by an XSLT pipeline resulting in [a corresponding RDF graph](hl7-sample.rdf) which expresses clinical content in expressive, heavily deployed consensus vocabularies such as [Open GALEN](http://www.opengalen.org/), [DOLCE: Descriptive Ontology of Linguistics and Cognitive Engineering](http://www.loa-cnr.it/DOLCE.html), [FOAF](http://xmlns.com/foaf/0.1/), and an OWL translation of HL7 RIM [\[OWL\]](#OWL). An [example OWL ontology](RIMV3OWL.owl) describes the basic concepts in a medical record for the purposes of this example.

In a manner similar to enabling the use of GRDDL with HTML, we can add a `glean:transformation` attribute to the root of the document in order for a GRDDL-aware agent to interpret an HL7 CDA message transmitted using widely-used and interoperable ontologies.


    <ClinicalDocument
      xmlns="urn:hl7-org:v3" xmlns:voc="urn:hl7-org:v3/voc"
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      templateId="2.16.840.1.113883.3.27.1776"
      xmlns:grddl="http://www.w3.org/2003/g/data-view#" 
      grddl:transformation="http://www.w3.org/TR/grddl-primer/hl7-rim-to-pomr.xslt">
    ...
        <Observation>

        <id root="10.23.4573.15877"/>

        <code code="282290005" codeSystem="2.16.840.1.113883.6.96" codeSystemName="SNOMED CT" displayName="Imaging interpretation"/>
        <value xsi:type="CD" code="249674001" codeSystem="2.16.840.1.113883.6.96" codeSystemName="SNOMED CT" displayName="Chest hyperinflated"/>
        <reference typeCode="SPRT">
            <ExternalObservation classCode="DGIMG">
                <id root="123.456.2557"/>

                <code code="56350004" codeSystem="2.16.840.1.113883.6.96" codeSystemName="SNOMED CT" displayName="Chest-X-ray"/>

            </ExternalObservation>
        </reference>
    </Observation>

Once the transformation has been added to the root node of the [example HL7 document](hl7-sample-grddl.xml), a GRDDL-aware agent can then transform the data into [this HL7 RDF](hl7-sample.rdf) using the linked XSLT. People sometimes confuse RDF, an abstract graph-based data model [\[RDFC\]](#RDFC), with one of its common syntactic serializations, RDF/XML [\[RDFXML\]](#RDFXML). RDF can be serialized into a number of different data formats, ranging from RDF/XML to a more human-readable serialization known as [Turtle](http://www.dajobe.org/2004/01/turtle/), and so RDF gives the user or application the freedom to choose the syntax most useful for the task at hand. All the merging and querying of data is done on the level of the abstract graphs, not the concrete syntax. So an RDF parser can parse the same GRDDL result expressed in either Turtle, RDF/XML, or another syntax like [NTriples](http://www.w3.org/TR/rdf-testcases/#ntriples), and on the level of the data model, the graph produced will be equivalent.

<img src="rdf-syntaxes.png" alt="A diagram indicating the relationship between concrete RDF serializations and abstract syntax." width="434" height="590" />

Once the data is expressed in RDF, one can discover several useful facts about the patient's diagnosis that would be unclear in the original XML document. Most important is that the patient's chest X-ray (a `cyc:XRayImage` or `foaf:Image`) concludes a medical problem (`cpr:medical-sign`). A SNOMED CT code is used which corresponds to a specific term in the description-logic inspired language which [SNOMED CT](http://www.snomed.org/snomedct/index.html) is expressed in. Here's a snippet from the result of running the GRDDL transformation, expressed in the brief [Turtle](http://www.dajobe.org/2004/01/turtle/) syntax for RDF.


    [ a cpr:patient-record;
             dc:date "2000-04-07";
             edns:about [ a galen:Patient;
                          foaf:family_name "Levin";
                          foaf:firstName "Henry"];
             foaf:maker [ a foaf:Person;
                          foaf:family_name "Dolin";
                          foaf:firstName "Robert"]]


    [ a cpr:clinical-description;
                     cpr:description-of [ a cpr:screening-act;
                                          edns:realizes [ a cpr:medical-sign;
                                          cpr:interpretant-of [
                                             a foaf:Image;
                                             skos:prefLabel "Chest-X-ray"];
                                          skos:prefLabel "Chest hyperinflated"];
                                          skos:prefLabel "Imaging interpretation"]]

Given the amount of images in a collection of patient record system, it would be useful if there was some sort of way to easily detect images that were actually diagnoses of medical problems. We can use an OWL class called `DiagnosingImage` (both a [RDF/XML example](diagnosingimage.rdf) and [Turtle example](diagnosingimage.turtle)) that detects if images in the record have been interpreted as having some medical significance.

    @prefix : <http://www.w3.org/2002/07/owl#> .
    @prefix g: <http://www.example.org/grddl-primer#> .
    @prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .

    g:DiagnosingImage     a :Class;
         :intersectionOf  (
        <http://xmlns.com/foaf/0.1/Image>
         [
                 a :Restriction;
                 :onProperty g:indicates;
                 :someValuesFrom <http://purl.org/cpr/0.5#medical-problem> ] ) .

    g:indicates     a :ObjectProperty;
         rdfs:comment """Property relating a foaf:Image to a medical sign it 
    indicates""";
         rdfs:domain <http://xmlns.com/foaf/0.1/Image>;
         rdfs:range <http://purl.org/cpr/0.5#medical-sign>;
         :inverseOf <http://purl.org/cpr/0.5#interpretant-of> .

    <http://xmlns.com/foaf/0.1/Image>     a :Thing .

Once an [OWL reasoner such as the Closed World Machine](http://infomesh.net/2001/cwm/) is run against the merge of the resulting RDF graph with the ontology, the size of our data-set is increased by additional RDF statements indicating that some of the images were actually members `DiagnosingImage` class. These can then be discovered in the resulting RDF graph by the use of the following [example SPARQL medical query](medicalquery.rq):

    PREFIX cpr: <http://purl.org/cpr/0.5#>
    PREFIX ex: <http://www.example.org/grddl-primer#>
    PREFIX skos: <http://www.w3.org/2004/02/skos/core#>
    SELECT ?sign ?image

    FROM <http://www.w3.org/TR/grddl-primer/hl7-sample-plus-owl.rdf>

    WHERE {
      ?image a ex:DiagnosingImage;
             ex:indicates [ skos:prefLabel ?sign ]
    }

If we run this SPARQL query over our [data-set that has been enlarged by the use of OWL reasoning](hl7-sample-plus-owl.rdf), then we can detect that a chest has been hyperinflated. Knowing that the original CDA contains the an image with medical significance would be of importance to the patient.

<table><tbody><tr class="odd"><td><strong>image</strong></td><td><strong>sign</strong></td></tr><tr class="even"><td>_:foo</td><td>"Chest hyperinflated"</td></tr></tbody></table>

In this manner GRDDL allows one to bootstrap Semantic Web data from common XML dialects, and so help these XML dialects interoperate by reference to well-known ontologies and allow their content to be extended by the use of inference.

### Further Information

This concludes the GRDDL Primer. Full technical detail of the GRDDL mechanism may be found in the corresponding [Gleaning Resource Descriptions from Dialects of Languages (GRDDL) Working Draft](http://www.w3.org/TR/grddl/).

References
----------

 <span id="GRDDL">\[GRDDL\]</span>   
[Gleaning Resource Descriptions from Dialects of Languages (GRDDL)](http://www.w3.org/TR/2007/CR-grddl-20070502/) , D. Connolly, Editor, W3C Candidate Recommendation (work in progress), 2 May 2007, http://www.w3.org/TR/2007/CR-grddl-20070502/ . [Latest version](http://www.w3.org/TR/grddl/ "Latest version of Gleaning Resource Descriptions from Dialects of Languages (GRDDL)") available at http://www.w3.org/TR/grddl/ .

<!-- -->

 <span id="GRDDL-SCENARIOS">\[GRDDL-SCENARIOS\]</span>   
[GRDDL Use Cases: Scenarios of extracting RDF data from XML documents](http://www.w3.org/TR/2007/NOTE-grddl-scenarios-20070406/) , F. Gandon, Editor, W3C Working Group Note, 6 April 2007, http://www.w3.org/TR/2007/NOTE-grddl-scenarios-20070406/ . [Latest version](http://www.w3.org/TR/grddl-scenarios/ "Latest version of GRDDL Use Cases: Scenarios of extracting RDF data from XML documents") available at http://www.w3.org/TR/grddl-scenarios/ .

<!-- -->

<span id="HTML">\[HTML\]</span>  
[HTML 4.01 Specification](http://www.w3.org/TR/1999/REC-html401-19991224) , I. Jacobs, D. Raggett, A. Le Hors, Editors, W3C Recommendation, 24 December 1999, http://www.w3.org/TR/1999/REC-html401-19991224 . [Latest version](http://www.w3.org/TR/html401 "Latest version of HTML 4.01 Specification") available at http://www.w3.org/TR/html401 .

<!-- -->

<span id="OWL">\[OWL\]</span>  
[OWL Web Ontology Language Overview](http://www.w3.org/TR/2004/REC-owl-features-20040210/) , F. van Harmelen, D. L. McGuinness, Editors, W3C Recommendation, 10 February 2004, http://www.w3.org/TR/2004/REC-owl-features-20040210/ . [Latest version](http://www.w3.org/TR/owl-features/ "Latest version of OWL Web Ontology Language Overview") available at http://www.w3.org/TR/owl-features/ .

<!-- -->

<span id="RDFA">\[RDFA\]</span>   
[RDFa Primer 1.0](http://www.w3.org/TR/2007/WD-xhtml-rdfa-primer-20070312/) , B. Adida, M. Birbeck, Editors, W3C Working Draft (work in progress), 12 March 2007, http://www.w3.org/TR/2007/WD-xhtml-rdfa-primer-20070312/ . [Latest version](http://www.w3.org/TR/xhtml-rdfa-primer/ "Latest version of RDFa Primer 1.0") available at http://www.w3.org/TR/xhtml-rdfa-primer/ .

<!-- -->

<span id="RDFC">\[RDFC\]</span>  
[Resource Description Framework (RDF): Concepts and Abstract Syntax](http://www.w3.org/TR/2004/REC-rdf-concepts-20040210/) , G. Klyne, J. J. Carroll, Editors, W3C Recommendation, 10 February 2004, http://www.w3.org/TR/2004/REC-rdf-concepts-20040210/ . [Latest version](http://www.w3.org/TR/rdf-concepts/ "Latest version of Resource Description Framework (RDF): Concepts and Abstract Syntax") available at http://www.w3.org/TR/rdf-concepts/ .

<!-- -->

<span id="RDFXML"></span>\[RDFXML\]  
[RDF/XML Syntax Specification (Revised)](http://www.w3.org/TR/2004/REC-rdf-syntax-grammar-20040210/), Beckett D. (Editor), W3C Recommendation, 10 February 2004. [This version](http://www.w3.org/TR/2004/REC-rdf-syntax-grammar-20040210/) http://www.w3.org/TR/2004/REC-rdf-syntax-grammar-20040210/. The [latest version](http://www.w3.org/TR/rdf-syntax-grammar/) is http://www.w3.org/TR/rdf-syntax-grammar/.

<!-- -->

 <span id="SPARQL">\[SPARQL\]</span>   
[SPARQL Query Language for RDF](http://www.w3.org/TR/2007/WD-rdf-sparql-query-20070326/) , E. Prud'hommeaux, A. Seaborne, Editors, W3C Working Draft (work in progress), 26 March 2007, http://www.w3.org/TR/2007/WD-rdf-sparql-query-20070326/ . [Latest version](http://www.w3.org/TR/rdf-sparql-query/ "Latest version of SPARQL Query Language for RDF") available at http://www.w3.org/TR/rdf-sparql-query/ .

<!-- -->

<span id="VCARD">\[VCARD\]</span>  
[VCard Ontology](http://www.w3.org/2006/vcard/ns), H. Halpin, B. Suda, and N. Walsh, W3C Semantic Web Interest Group Note (in progress). [Latest version](http://www.w3.org/2006/vcard/ns "Latest version of avaiable") available at <http://www.w3.org/2006/vcard/ns>.

<!-- -->

<span id="XHTML">\[XHTML\]</span>  
[Modularization of XHTML 1.0 - Second Edition](http://www.w3.org/TR/2004/WD-xhtml-modularization-20040218) , Editor, W3C Working Draft (work in progress), 18 February 2004, http://www.w3.org/TR/2004/WD-xhtml-modularization-20040218 . [Latest version](http://www.w3.org/TR/xhtml-modularization/ "Latest version of Modularization of XHTML 1.0 - Second Edition") available at http://www.w3.org/TR/xhtml-modularization/ .

<!-- -->

<span id="XSLT">\[XSLT\]</span>  
[XSL Transformations (XSLT) Version 1.0](http://www.w3.org/TR/1999/REC-xslt-19991116) , J. Clark, Editor, W3C Recommendation, 16 November 1999, http://www.w3.org/TR/1999/REC-xslt-19991116 . [Latest version](http://www.w3.org/TR/xslt "Latest version of XSL Transformations (XSLT) Version 1.0") available at http://www.w3.org/TR/xslt .

This output can be regenerated by putting the following input in the [Technical Reports Bibliography extractor](http://www.w3.org/2002/01/tr-automation/tr-biblio-ui):

    HTML http://www.w3.org/TR/1999/REC-html401-19991224
    RDFC http://www.w3.org/TR/2004/REC-rdf-concepts-20040210/
    SPARQL http://www.w3.org/TR/2006/WD-rdf-sparql-query-20061004/
    VCARD http://www.w3.org/2006/vcard/ns
    XHTML http://www.w3.org/TR/xhtml-modularization/
    XSLT http://www.w3.org/TR/1999/REC-xslt-19991116

------------------------------------------------------------------------

### <span id="acknowledgements"></span>Acknowledgements

The editor would like to thank the following Working Group members for authoring this document:

-   Jeremy Carroll and David Booth, Hewlett-Packard
-   John Clark, Cleveland Clinic Foundation
-   [Fabien Gandon](http://www-sop.inria.fr/acacia/personnel/Fabien.Gandon/), INRIA
-   [Chimezie Ogbuji](http://copia.ogbuji.net/), Cleveland Clinic Foundation
-   Ronald P. Reck
-   [Brian Suda](http://suda.co.uk)

This document is a product of the [GRDDL Working Group](http://www.w3.org/2001/sw/grddl-wg/).

The [spreadsheets example](#spreadsheets-section) is based on work by Mark Nottingham in ["Adding Semantics to Excel with Microformats and GRDDL"](http://www.mnot.net/blog/2005/08/13/excel_microformats). The version of the transformation script used in that example has a few significant changes from Mark's original.

### Change Log

Changes since the [WG decision to publish on 27 Sep](http://lists.w3.org/Archives/Public/public-grddl-wg/2006Sep/att-0185/27-grddl-wg-irc.html#item03) include


    $Log: Overview.html,v $
    Revision 1.3  2018/10/09 13:16:44  denis
    fix validation of xhtml documents

    Revision 1.2  2017/10/02 10:33:16  denis
    add fixup.js to old specs

    Revision 1.1  2007/06/27 18:39:11  jean-gui
    primer renamed to Overview

    Revision 1.1  2007/06/27 18:38:18  jean-gui
    NOTE-grddl-primer-20070628

    Revision 1.125  2007/06/27 17:30:29  hhalpin
    updated acknowledgements

    Revision 1.123  2007/06/27 17:24:48  hhalpin
    updated URIs of versions

    Revision 1.122  2007/06/27 17:21:53  hhalpin
    updated URIs of versions

    Revision 1.121  2007/06/27 17:20:51  hhalpin
    updated URIs of versions

    Revision 1.120  2007/06/27 17:18:09  jclark4
    Add diagram to hotel-finding example.

    Revision 1.119  2007/06/27 17:10:15  hhalpin
    fixed dates for Note pub

    Revision 1.118  2007/06/27 16:58:53  jclark4
    Undo the iframe scariness.

    Revision 1.117  2007/06/27 16:44:37  hhalpin
    updated with danja and chime's comments

    Revision 1.116  2007/06/27 14:55:25  connolly
    remove "microformat" from excel section; move mnot to acks section

    Revision 1.115  2007/06/27 14:52:37  connolly
    ids for authors to join across hCard and trdoc transformations

    Revision 1.114  2007/06/27 14:51:07  connolly
    add hCard markup for authors (with profile)

    Revision 1.113  2007/06/27 00:55:10  hhalpin
    moved link of hl7 tranform from test-cases to primer directory

    Revision 1.112  2007/06/27 00:49:19  hhalpin
    replaced doc29 with primer URI


    Revision 1.86  2007/06/26 18:56:16  jclark4
    Make the inline SPARQL equivalent to the linked SPARQL in the
    spreadsheet section, and fix several well-formedness errors.

    Revision 1.85  2007/06/26 14:14:04  jclark4
    Minor consistency changes to the primer and the spreadsheet for the
    spreadsheet example and some typo and wording changes to the primer.

    Revision 1.84  2007/06/24 20:04:49  hhalpin
    added danja's edits

    Revision 1.83  2007/06/22 18:53:03  bsuda
    fixed sparql #3 and updated primer

    Revision 1.82  2007/06/22 18:48:58  bsuda
    updated sparql queries, rdf and html and primer document to reflect the new queries

    Revision 1.81  2007/06/20 14:05:38  connolly
    uncomment embeddedRDF.png image; add hCalendar.png image back in

    Revision 1.80  2007/06/20 02:02:34  hhalpin
    minor updates to spreadsheet section, linking files

    Revision 1.77  2007/06/14 10:56:48  jcarroll
    switched to using local RDFa2RDFXML rather than td one

    Revision 1.76  2007/06/13 17:43:27  jclark4
    Convert SPARQL results to an HTML table in the "Reusing Spreadsheets"
    section and fix numerous well-formedness errors.

    Revision 1.75  2007/06/13 17:27:47  jclark4
    Add entry in the table of contents for the new "Reusing Spreadsheets"
    section.

    Revision 1.74  2007/06/13 17:15:23  connolly
    @@ around transition between spreadsheets and health care

    Revision 1.73  2007/06/13 17:11:09  connolly
    paste in spreadsheet example
    from John Clark Tue, 12 Jun 2007 16:16:36 -0400

    Revision 1.72  2007/06/13 16:54:06  hhalpin
    updated xslt for hl7

    Revision 1.71  2007/05/06 04:46:50  hhalpin
    hotel-data.rdf replacced by review.rdf

    Revision 1.70  2007/05/06 00:55:12  connolly
    linebreaks in the ClinicalDocument

    Revision 1.69  2007/05/06 00:53:02  connolly
    linebreaks to make the examples less wide

    Revision 1.68  2007/05/05 22:09:26  connolly
    fix pre/p markup problem, copyright unicode characters

    Revision 1.67  2007/05/05 20:43:24  hhalpin
    removed errant SPARQL query, added XFN and hReview code back in

    Revision 1.66  2007/05/05 20:36:11  hhalpin
    reverting to 1.55 plus fixes in 1.65 in Healthcare section

    Revision 1.55  2007/04/24 17:57:37  hhalpin
    added more of Chime's test case and changed some text for easier reading

    Revision 1.54  2007/04/11 08:21:45  hhalpin
    added transform library mention

    Revision 1.50  2007/04/11 08:18:35  hhalpin
    added transform library mention

    Revision 1.49  2007/03/21 04:35:42  hhalpin
    cleaned up healthcare example

    Revision 1.48  2007/03/14 08:11:13  hhalpin
    fixed rdfa transform, fixed part 2

    Revision 1.45  2007/02/21 06:52:53  hhalpin
    added danja's comments

    Revision 1.43  2007/02/19 19:07:53  idavis
    Updated date of draft

    Revision 1.42  2007/02/19 19:02:21  idavis
    Fixed typo in SPARQL reference

    Revision 1.41  2007/02/19 18:55:36  idavis
    Addresses rreck comment, fixed typos and minor layout changes, added references in clinical data section

    Revision 1.40  2007/02/12 01:38:28  hhalpin
    added RDFa example

    Revision 1.39  2007/02/12 00:57:18  hhalpin
    added chime's test case

    Revision 1.37  2007/02/07 15:09:22  hhalpin
    updated sparql query

    Revision 1.36  2007/01/13 00:00:26  hhalpin
    edited some links

    Revision 1.31  2007/01/12 18:57:21  hhalpin
    dates fixed

    Revision 1.30  2007/01/12 18:55:16  hhalpin
    dates fixed

    Revision 1.29  2007/01/12 03:56:21  hhalpin
    edited

    Revision 1.28  2007/01/12 03:50:11  hhalpin
    minor edits

    Revision 1.27  2007/01/12 03:49:45  hhalpin
    minor edits

    Revision 1.25  2007/01/09 23:54:10  hhalpin
    fixed formatting

    Revision 1.22  2007/01/09 23:43:15  hhalpin
    using new vcard RDF

    Revision 1.21  2006/12/13 00:34:29  hhalpin
    fixing syntactic quibbles

    Revision 1.18  2006/10/19 07:56:45  idavis
    Revised references, corrected title from WD to editors draft


    Revision 1.17  2006/10/19 07:07:51  idavis
    Various minor editorial changes, spellings, grammar etc

    Revision 1.16  2006/10/02 22:51:19  connolly
    turned public-grddl-comments mailbox into a link

    Revision 1.15  2006/09/30 00:38:47  connolly
    note in the status section that some examples are incomplete

    Revision 1.14  2006/09/30 00:35:01  connolly
    removed some links to the glossary that were copied from the use cases document
    updated link to suda.co.uk

    Revision 1.13  2006/09/30 00:27:26  connolly
    fix link from title page to acknowledgements section

    Revision 1.12  2006/09/30 00:26:10  connolly
    update parts of the status section that are different between
    use cases and primer

    Revision 1.11  2006/09/30 00:24:34  connolly
    - remove "previous version" link to talis copy from title page
    - move pubrules check to status section
    - expand change log to give full audit trail since WG decision
    - remove XHTML 1.1 icon, since pubrules requires 1.0 :-/

    Revision 1.10  2006/09/29 23:54:08  hhalpin
    fixed minor errors and links

    revision 1.9
    date: 2006/09/29 23:20:05;  author: hhalpin;  state: Exp;  lines: +5 -90
    primer chnages for pubrules
    ----------------------------
    revision 1.8
    date: 2006/09/29 23:10:58;  author: hhalpin;  state: Exp;  lines: +1 -1
    primer changes again
    ----------------------------
    revision 1.7
    date: 2006/09/29 23:07:42;  author: hhalpin;  state: Exp;  lines: +170 -42
    primer changes again
    ----------------------------
    revision 1.6
    date: 2006/09/29 22:43:53;  author: hhalpin;  state: Exp;  lines: +2 -2
    primer changes again spelling errors
    ----------------------------
    revision 1.5
    date: 2006/09/29 22:35:39;  author: hhalpin;  state: Exp;  lines: +6 -7
    primer changes again
    ----------------------------
    revision 1.4
    date: 2006/09/29 22:33:00;  author: hhalpin;  state: Exp;  lines: +33 -70
    primer changes
    ----------------------------

    Revision 1.3  2006/09/29 22:05:17  connolly
    "under construction" sign atop the section with XFN in it

    Revision 1.2  2006/09/29 19:49:46  connolly
    copied from devcvs v 1.4 2006/09/29 19:00:43 idavis

    Revision 1.4  2006/09/29 19:00:43  idavis
    Fixed formatting of CVS log at end of document

    ----------------------------
    revision 1.3
    date: 2006/09/29 18:58:18;  author: idavis;  state: Exp;  lines: +22 -13
    Revised abstract to align more with use cases; checked in supporting HTML and PNG files
    ----------------------------
    revision 1.2
    date: 2006/09/29 18:22:17;  author: idavis;  state: Exp;  lines: +591 -437
    Inserted current, latest and previous version links; revised abstract completely; normalised to linefeed line endings
    ----------------------------
    revision 1.1
    date: 2006/09/29 16:38:15;  author: connolly;  state: Exp;
    6180 2006-09-27 13:29:57Z http://research.talis.com/2006/grddl-wg/primer.html
