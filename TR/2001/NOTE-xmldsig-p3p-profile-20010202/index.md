[<img src="http://www.w3.org/Icons/w3c_home" alt="W3C" width="72" height="48" />](http://www.w3.org/)

A P3P Assurance Signature Profile
=================================

W3C Note 2 February 2001
------------------------

This version:  
<http://www.w3.org/TR/2001/NOTE-xmldsig-p3p-profile-20010202/>

Latest version:  
<http://www.w3.org/TR/xmldsig-p3p-profile/>

Previous version:  
n/a

Author/Editor:  
Joseph Reagle &lt;<reagle@w3.org>&gt;

Contributors  
See [Acknowledgements](#_Acknowledgements)

[Copyright](http://www.w3.org/Consortium/Legal/ipr-notice-20000612#Copyright) © 2001 [W3C](http://www.w3.org/)<sup>®</sup> ([MIT](http://www.lcs.mit.edu/), [INRIA](http://www.inria.fr/), [Keio](http://www.keio.ac.jp/)), All Rights Reserved. W3C [liability](http://www.w3.org/Consortium/Legal/ipr-notice-20000612#Legal_Disclaimer), [trademark](http://www.w3.org/Consortium/Legal/ipr-notice-20000612#W3C_Trademarks), [document use](http://www.w3.org/Consortium/Legal/copyright-documents-19990405) and [software licensing](http://www.w3.org/Consortium/Legal/copyright-software-19980720) rules apply.

------------------------------------------------------------------------

 

Abstract
--------

This document specifies a P3P Assurance Signature Profile: the intended meaning (assures) of the key holder is bound to the signature via a `SignatureProperty`.

Status of this document
-----------------------

This Note is available for W3C-member review. It is not intended to be a normative specification. Instead, it captures the authors' thoughts on how applications might use the XML Signature specification to meet their requirements (defining signature semantics and algorithm profile); the example application is P3P. This is not a product or deliverable of any Working Group, nor does it reflect a consensus on how to use XML Signature's ` SignatureProperty`. Instead this document presents a possible use of `SignatureProperty`, as permitted (but not required) by the XML Signature specification, for further exploration/discussion.

No commitment is made to update this Note. However, if you have comments, please send them to the &lt;<reagle@w3.org>&gt;

A list of current W3C Recommendations and other technical documents can be found at [http://www.w3.org/TR](http://www.w3.org/TR/).

Table of Contents
-----------------

1.  [Introduction](#sec-Introduction)
    1.  [Editorial Conventions](#sec-Editorial)
    2.  [Design Philosophy](#sec-Design)
    3.  [Versions, Namespaces and Identifiers](#sec-Versions)
    4.  [Acknowledgements](#sec-Acknowledgements)
2.  [Overview and Examples](#sec-Overview)
    1.  [Assurance Overview](#sec-AssuranceOverview)
    2.  [XML Signature Overview](#sec-SignatureOverview)
    3.  [p3p.xml Overview](#sec-P3POverview)
3.  [P3P Assurance](#sec-Assurance)
    1.  [Signature Semantics](#sec-Semantics)
4.  [XML Signature Profile](#sec-Signature)
5.  [P3P Policy](#sec-P3P)
6.  [Schema, Transforms, and Examples](#sec-Schema)
7.  [References](#sec-References)

------------------------------------------------------------------------

1.0 <span id="sec-Introduction">Introduction</span>
---------------------------------------------------

This document specifies a P3P \[[P3P](#ref-P3P)\] Assurance Signature \[[XMLDSIG](#ref-XMLDSIG)\] Profile. Perhaps the best introduction to this assurance profile is found within the introduction of its predecessors:

> The Platform for Privacy Preferences Project (P3P) enables Web sites to express their privacy practices in a standard format that can be retrieved automatically and interpreted easily by user agents. P3P user agents will allow users to be informed of site practices (in both machine- and human-readable formats) and to automate decision-making based on these practices when appropriate. Thus users need not read the privacy policies at every site they visit.... It provides a way for a Web site to encode its data-collection and data-use practices in a machine-readable XML format known as a *P3P policy*.

The excerpt from XML Signature also motivates why a XML Signature profile is necessary.

> XML Signature is a method of associating a key with referenced data (octets); it does not normatively specify how keys are associated with persons or institutions, nor the meaning of the data being referenced and signed. Consequently, while this specification is an important component of secure XML applications, it itself is not sufficient to address all application security/trust concerns, particularly with respect to using signed XML (or other data formats) as a basis of human-to-human communication and agreement. Such an application must specify additional key, algorithm, processing and rendering requirements.

Consequently, the purpose of this document is to specify the following:

\[def:\] **<span id="def-P3PSignatureProfile">P3P Assurance Signature Profile</span>**  
(1) a definition of the <a href="#def-assured" class="link-def">assured</a> semantic under its namespace and (2) a profile of XML Signature (constraints over algorithms, transforms, key types, etc.) in a P3P application context.

### 1.1 <span id="sec-Editorial">Editorial</span> and Conformance Conventions

For readability and brevity this document uses the term "signature(s)" to refer to XML Signatures and the application context is always presumed to be P3P. An understanding of \[[XMLDSIG](#ref-XMLDSIG)\] is necessary to understand this specification; understanding of \[[P3P](#ref-P3P)\] is optional though it contributes to this document's motivation.

This specification uses XML Schemas \[[XML-schema](#ref-XML-schema)\].

### 1.2 <span id="sec-Design">Design</span> Philosophy

The design philosophy and requirements of this specification are to:

1.  Define what it means for a P3P Policy to be assured via an XML Signature.
2.  Provide <a href="http://www.w3.org/TR/2000/WD-xmldsig-core-20000918/#def-SignatureDetached" class="link-def">detached</a> signatures for [P3P Policies](http://www.w3.org/TR/2000/WD-P3P-20000915/#P3PPolicies) and <a href="#def-assured" class="link-def">Assurances</a>.
    1.  <a href="http://www.w3.org/TR/2000/WD-xmldsig-core-20000918/#def-SignatureEnveloping" class="link-def">Enveloping</a> signatures MAY contain the P3P [Policy Reference](http://www.w3.org/TR/2000/WD-P3P-20000915/#Referencing). This can be convenient in that all the files are included together, but this has the following two disadvantages: the `Signature` is the root element, and XPointer is required to select portions of the document.
    2.  <a href="http://www.w3.org/TR/2000/WD-xmldsig-core-20000918/#def-SignatureEnveloped" class="link-def">Enveloped</a> signatures are prohibited by P3P's content model.
3.  Be concise and unambiguous.

The following issues still need to be addressed:

1.  P3P: It would be nice if the signature could be included within a P3P policy.
2.  P3P: Should this address the [P3P Policy Reference File](http://www.w3.org/TR/P3P/#ref_file_syntax) as well?

### 1.3 <span id="sec-Versions">Versions</span>, Namespaces and Identifiers

The XML namespace \[[XML-ns](#ref-XML-ns)\] URI that MUST be used by implementations of this (dated) specification is:

    xmlns="http://www.w3.org/2001/02/xmldsig-p3p-profile"

### 1.4  <span id="_Acknowledgements"></span> <span id="sec-Acknowledgements">Acknowledgements</span>

The comments of the following are gratefully acknowledged though any mistakes and daft ideas are solely my own and inclusion does not necessarily mean agreement or consensus:

-   Art Barstow
-   Tim Berners-Lee
-   Dan Connolly
-   Donald Eastlake
-   Matthias Enzmann
-   Rüdiger Grimm
-   Gregor Karlinger
-   Ralph Swick
-   Daniel Weitzner

2.0 <span id="sec-Overview">Overview</span> and Examples
--------------------------------------------------------

This section provides an overview of a P3P Assurance Signature Profile, an XML Signature, and a P3P-Policy.

### 2.1 <span id="sec-AssuranceOverview">Assurance Overview</span>

The following is an XML instance of a P3P Assurance semantic of a signature over a P3P-Policy. The assurances uses the RDF data-model to state that: A **SignatureProperty** *assures* **a P3P Policy.**

<span id="eg-Assurance-Profile">\#Assurance1</span>  
  
&lt;SignatureProperty Id="Assurance1" Target="\#Signature1"  
 xmlns=["http://www.w3.org/2000/09/xmldsig\#](http://www.w3.org/2000/09/xmldsig#)"&gt;  
  &lt;Assures Policy="http://www.example.org/p3p.xml"  
   xmlns="<http://www.w3.org/2000/10/xmldsig-p3p-profile/>"/&gt;  
&lt;/SignatureProperty&gt;

### 2.2 <span id="sec-SignatureOverview">XML Signature Overview</span>

The following abbreviated Signature signs the P3P-Policy, and signs (and is semantically bound to) the assurance itself.

<span id="eg-Signature">http://www.example.org/**Signature**.xml</span>

&lt;Signature Id="Signature1" xmlns="http://www.w3.org/2000/09/xmldsig\#"&gt;  
  &lt;SignedInfo&gt;  
    &lt;CanonicalizationMethod  
     Algorithm="http://www.w3.org/TR/2000/WD-xml-c14n-20000907"/&gt;  
    &lt;SignatureMethod  
     Algorithm="http://www.w3.org/2000/09/xmldsig\#dsa-sha1"/&gt;  
    &lt;Reference URI="[http://www.example.org/**p3p.xml**](#eg-p3p.xml)"&gt;  
      &lt;Transforms&gt;  
        &lt;Transform Algorithm="http://www.w3.org/TR/2000/WD-xml-c14n-20000907"/&gt;  
      &lt;/Transforms&gt;  
     &lt;DigestMethod Algorithm="http://www.w3.org/2000/09/xmldsig\#sha1"/&gt;  
     &lt;DigestValue&gt;j6lwx3rvEPO0vKtMup4NbeVu8nk=&lt;/DigestValue&gt;  
    &lt;/Reference&gt;  
    &lt;Reference URI="\#Assurance1"  
     **Type="http://www.w3.org/2000/09/xmldsig\#SignatureProperties"**&gt;  
     &lt;DigestMethod Algorithm="http://www.w3.org/2000/09/xmldsig\#sha1"/&gt;  
     &lt;DigestValue&gt;1234x3rvEPO0vKtMup4NbeVu8nk=&lt;/DigestValue&gt;  
    &lt;/Reference&gt;  
   &lt;/SignedInfo&gt;  
   &lt;SignatureValue&gt;MC0CFFrVLtRlk=...&lt;/SignatureValue&gt;  
   &lt;KeyInfo&gt;KeyInfo of the Disputes Service&lt;/KeyInfo&gt;  
   &lt;Object&gt;  
     &lt;/SignatureProperties&gt;  
        &lt;**SignatureProperty** Id="**[Assurance1](#eg-Assurance-Profile)**" Target="\#Signature1"  
         xmlns="http://www.w3.org/2000/09/xmldsig\#"&gt;  
           &lt;Assures Policy="http://www.example.org/p3p.xml"  
           xmlns="http://www.w3.org/2001/02/xmldsig-p3p-profile"/&gt;  
       &lt;/SignatureProperty&gt;  
     &lt;/SignatureProperties&gt;  
   &lt;/Object&gt;  
&lt;/Signature&gt;

### 2.2 P3P-Policy <span id="sec-P3POverview">Overview</span>

The following abbreviated example describes the policy being assured, and uses the `p3p:verification` attribute to reference the signature.

<span id="eg-p3p.xml">http://www.example.org/p3p.xml</span>

&lt;POLICY xmlns="http://www.w3.org/2000/09/15/P3Pv1"  
    discuri="http://www.example.com/PrivacyPracticeBrowsing.html"&gt;  
...  
&lt;DISPUTES-GROUP&gt;  
  &lt;DISPUTES resolution-type="independent"  
    service="http://www.PrivacySeal.example.org"  
    short-description="PrivacySeal.example.org"  
    verification="[http://www.example.org/**Signature**.xml](#eg-Signature)"&gt;  
   &lt;IMG src="http://www.PrivacySeal.example.org/Logo.gif"  
        alt="PrivacySeal's logo"/&gt;  
   &lt;REMEDIES&gt;&lt;correct/&gt;&lt;/REMEDIES&gt;  
  &lt;/DISPUTES&gt;  
&lt;/DISPUTES-GROUP&gt;  
&lt;STATEMENT&gt;  
  &lt;PURPOSE&gt;&lt;admin/&gt;&lt;develop/&gt;&lt;/PURPOSE&gt;  
  &lt;RECIPIENT&gt;&lt;ours/&gt;&lt;/RECIPIENT&gt;  
  &lt;RETENTION&gt;&lt;stated-purpose/&gt;&lt;/RETENTION&gt;  
  &lt;DATA-GROUP&gt;  
   &lt;DATA ref="\#dynamic.clickstream.clientip"/&gt;  
   &lt;DATA ref="\#dynamic.http.useragent"/&gt;  
  &lt;/DATA-GROUP&gt;  
&lt;/STATEMENT&gt;  
&lt;/POLICY&gt;

3.0 <span id="sec-Assurance">P3P Assurance</span>
-------------------------------------------------

The assurance semantic is:

**\[def:\] <span id="def-assured">Assured</span>**  
the P3P `DISPUTE service` asserts that the P3P policy is accurate and that the P3P `DISPUTE service` commits to the enumerated `REMEDIES`. Verification of this semantic requires (1) [signature validation](http://www.w3.org/TR/2000/WD-xmldsig-core-20001012/#def-ValidationSignature) where (2) the signature key holder and P3P `DISPUTE service` are the same.

The assurance content model permits the P3P Policy and XML Signature to be referenced as external files, or as internal content.

    Schema Definition:

    <?xml version='1.0'?> 
    <!DOCTYPE schema 
      SYSTEM 'http://www.w3.org/1999/XMLSchema.dtd' 
    > 

    <schema targetNamespace='http://www.w3.org/2001/02/xmldsig-p3p-profile' 
       version='0.1' 
       xmlns='http://www.w3.org/2000/10/XMLSchema'
       xmlns:profile='http://www.w3.org/2001/02/xmldsig-p3p-profile'
       elementFormDefault='qualified'> 

       <element name='Assured'> 
         <complexType>
           <all>
             <element ref='profile:P3P-Policy' minOccurs='0' />
             <element ref='profile:Signature' minOccurs='0' />
           </all> 
           <attribute name='via' type='URI'/> 
           <attribute name='Id' type='ID' use='optional'/> 
         </complexType>
       </element> 

       <element name='P3P-Policy'> 
         <complexType>
           <sequence>
             <any namespace='http://www.w3.org/2000/10/18/P3Pv1'/>
           </sequence> 
           <attribute name='Id' type='ID' use='required'/> 
         </complexType>
       </element> 

       <element name='Signature'> 
         <complexType>
           <sequence>
             <any namespace='http://www.w3.org/2000/09/xmldsig#'/>
           </sequence> 
           <attribute name='Id' type='ID' use='required'/> 
         </complexType>
       </element>

    </schema>
      

### 3.1 <span id="sec-Semantics">Signature Semantics</span>

\[[XMLDSIG](#ref-XMLDSIG)\] specifies a way of providing (primarily) data object integrity by applying his key to the data object via cryptographic algorithms. The fact that one signs the characters, "I saw a UFO" does not mean the signature creator (key-holder) *actually* saw a UFO or even believes he did; maybe someone else spoke of seeing a UFO and the key-holder is merely acting as a notary and wants to secure the statement in the public record. The question then is how does one actually *say* such a thing? How does one bind a semantic (e.g., assert, believe, vouch, notarize, etc.) to the signature? How does one distinguish between signing some document that might be a statement  (e.g., "The sky is blue.") or even a statement about a statement (e.g., "He said, 'the sky is blue.'") and *actually saying it*?

In many cases, the meaning of a signature is inferred from its context. For instance, a payment application might define, as part of its specification, that if a `Signature` appears within an `authorization` element of a payment voucher, it means the author/key-holder is authorizing the payment. In another context, a key-holder may have one or more keys with an associated semantic. For example, one key is used for assertions I make, another key is used for notarized time-stamping; or as one can indicate in \[[RFC2459](#ref-RFC2459)\]'s KeyUsage field, one key is used for non-repudiation and another for certificate signing. However, these techniques rely upon the external (from the signature) specification, or implicit context of the application. Consequently these semantics are lost outside of their context; if they are not well specified they may not even be shared by different users of the same application -- with a likely result of legal action!

Fortunately, \[[XMLDSIG](#ref-XMLDSIG)\] provides a mechanism of making a distinction between the simple bits being signed, and information related to the actual signature creation; this permits one to step outside the circle of lending integrity to bits and explicitly "bootstrap" meaning. The ` SignatureProperty` element provides a mechanism by which "Additional information items concerning the generation of the signature(s) can be placed..."; I use this to include the intent/meaning of the signature generation. This "bootstrapping" happens when the `Reference`'s to the ` SignatureProperty` is identified to be of ` Type="&dsig;SignatureProperties"`.

A time-stamp appearing in a `SignatureProperty` and identified as such via `Type` is not just any old time-stamp that has integrity, but a time-stamp for *that* signature. When a signature semantic (such as "I vouch") is included and signed in a `SignatureProperty` (and identified as such) it is more than some characters with integrity, it's an expression of the key holder about the signature. This means that while some signature applications are willing to sign data without  "understanding it" (e.g., a simple time-stamping service) when it comes to `SignatureProperty`, "... the signing application should be very careful about what it signs (it should understand what is in the `SignatureProperty`)" \[[XMLDSIG](#ref-XMLDSIG): <a href="http://www.w3.org/TR/2000/CR-xmldsig-core-20001031/#sec-o-SignatureProperty" id="sec-o-SignatureProperty">2.2 Extended Example (<code>Object</code> and <code> SignatureProperty</code>)</a>\]

Consequently, this specification permits a signature semantic to be expressed with the natural language semantic [defined is section 3.0](#def-assured) using the following XML syntax as part of a `SignatureProperty`:

\[i0\] &lt;SignatureProperties&gt;  
\[i1\]   &lt;SignatureProperty Id="Property-Assurance" Target="\#Signature1"  
\[i2\]    xmlns="http://www.w3.org/2000/09/xmldsig\#"&gt;  
\[i3\]     &lt;profile:Assures profile:Policy="http://www.example.org/p3p.xml"  
\[i4\]       xmlns:profile="http://www.w3.org/2001/02/xmldsig-p3p-profile" /&gt;  
\[i5\]   &lt;/SignatureProperty&gt;  
\[i6\] &lt;/SignatureProperties&gt;

Which means the same as the following \[[RDF](#ref-RDF)\]:

\[r0\] &lt;rdf:Description ID="Property-Assurance" about="\#Signature1"  
\[r1\]  xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns\#"&gt;  
\[r2\]   &lt;profile:Assures resource="http://www.example.org/p3p.xml"  
\[r3\]     xmlns:profile="http://www.w3.org/2000/12/xmldsig-p3p-profile" /&gt;  
\[r4\] &lt;/rdfDescription&gt;

The reification of this statement (breaking it down into its "grammatical" data model) is

\[rA\] &lt;rdf:type resource="rdf:Statement"/&gt;  
\[rB\] &lt;rdf:subject resource="\#Signature1"/&gt;  
\[rC\] &lt;rdf:predicate resource="profile:Assures"/&gt;  
\[rD\] &lt;rdf:object resource="http://www.example.org/p3p.xml"/&gt;

While this specification chose to model its semantic in the \[[RDF](#ref-RDF)\] data model, not all signature semantics need follow suit. I choose to do so because it results in cleaner design and offers the possibility of agents being able to make inferences if more formal definitions of "`profile:assures`" are made. One might also see instances of natural language statements within the (unfortunately ambiguous) context of HTML's `p` element.

\[n0\] &lt;SignatureProperties&gt;  
\[n1\]   &lt;SignatureProperty Id="Property-Assurance" Target="\#Signature1"  
\[n2\]    xmlns="http://www.w3.org/2000/09/xmldsig\#"&gt;  
\[n3\]     &lt;p xmlns:html="http://www.w3.org/1999/xhtml"&gt;I agree  
         with everything signed&lt;/p&gt;  
\[n5\]   &lt;/SignatureProperty&gt;  
\[n6\] &lt;SignatureProperties&gt;

4.0 <span id="sec-Signature">XML Signature Profile</span>
---------------------------------------------------------

A P3P Signature Profile signature is a <a href="http://www.w3.org/TR/xmldsig-core/#def-ValidationSignature" class="link-def">valid signature</a> \[[XMLDSIG](#ref-XMLDSIG)\] with the following REQUIRED constraints.

1.  The permissible [`CanonicalizationMethod`](http://www.w3.org/TR/xmldsig-core/#sec-CanonicalizationMethod) is Canonical XML:  
    <http://www.w3.org/TR/2000/WD-xml-c14n-20001011>
2.  The permissible ` SignatureMethod`s are [DSA or RSA](http://www.w3.org/TR/xmldsig-core/#sec-SignatureAlg).  
    [<span style="FONT-WEIGHT: normal"> http://www.w3.org/2000/09/xmldsig\#</span>dsa-sha1](http://www.w3.org/2000/09/xmldsig#dsa-sha1)  
    [<span style="FONT-WEIGHT: normal"> http://www.w3.org/2000/09/xmldsig\#</span>rsa-sha1](http://www.w3.org/2000/09/xmldsig#rsa-sha1)
3.  The permissible [`DigestMethod`](http://www.w3.org/TR/2000/WD-xmldsig-core-20001012/#sec-DigestMethod)   is SHA-1  
    <http://www.w3.org/2000/09/xmldsig#sha1>
4.  The permissible ` Transforms` are:
    1.  Canonical XML:  
        <http://www.w3.org/TR/2000/WD-xml-c14n-20000907>
    2.  P3P Statement to HTML/English XSLT: This specification provides a \[[XSLT](#ref-XSLT)\] instance that transforms a P3P statement into an HTML page that uses English to describe that statement.  
        [http://www.w3.org/2001/02/xmldsig-p3p-profileenglish.xsl](english-language.xsl)
5.  The permissible KeyInfo
    1.  `DSAKeyValue` or `RSAKeyValue` [<span style="FONT-WEIGHT: normal"> http://www.w3.org/2000/09/xmldsig\#</span>dsa-sha1](http://www.w3.org/2000/09/xmldsig#dsa-sha1)  
        [<span style="FONT-WEIGHT: normal"> http://www.w3.org/2000/09/xmldsig\#</span>rsa-sha1](http://www.w3.org/2000/09/xmldsig#rsa-sha1)

Note, for purposes of further demonstration I considered refining this profile to actually meet the requirements of the "advanced electronic signature" as specified by the [European Directive 1999/93/EC](http://europa.eu.int/eur-lex/en/lif/dat/1999/en_399L0093.html). This would require the use of `X509Data`, an extension designating it was a "qualified certificate", and as part of the signature, ` dsig:Reference`s over (1) the assurer's signature policy and (2) a timestamp. Given that I wish to focus on the P3P application context and signature semantics in this document, I will forgo that exercise for the time being.

5.0 <span id="sec-P3P">P3P Policy</span>
----------------------------------------

The P3P [` Disputes` `verification`](http://www.w3.org/TR/2000/WD-P3P-20001018/#DISPUTES) attribute should be the URI of the assuring signature. No additional constraints or specification are made over \[[P3P](#ref-P3P)\], nor are any additional semantics introduced via this specification's namespace.

6.0 <span id="sec-Schema">Schema</span>, Transforms and Examples
----------------------------------------------------------------

XSLT P3P Statement to HTML Transform  
This specification provides a \[XSLT\] instance that transforms a P3P statement into an HTML page that uses English to describe that statement.  
[english-language.xsl](english-language.xsl)

P3P Assurance Signature Profile Schema  
[assurance.xsd](assurance.xsd)

7.0 <span id="sec-References">References</span>
-----------------------------------------------

<span id="ref-P3P">P3P</span>  
The Platform for Privacy Preferences 1.0 (P3P1.0) Specification. W3C Working Draft. [Cranor](http://www.research.att.com/~lorrie/), [Langheinrich](http://www.inf.ethz.ch/~langhein/), [Marchiori](http://www.w3.org/People/Massimo/), [Presler-Marshall](mailto:mpresler@us.ibm.com), and [Reagle](http://www.w3.org/People/Reagle/Overview.html), October 2000.  
<http://www.w3.org/TR/2000/WD-P3P-20001018/>

<span id="ref-RDF">RDF</span>  
Resource Description Framework (RDF) Model and Syntax Specification. W3C Recommendation. Lassila and Swick. Febuary 1999.  
<http://www.w3.org/TR/REC-rdf-syntax/>

<span id="ref-RFC2459">RFC2459</span>  
[Internet X.509 Public Key Infrastructure Certificate and CRL Profile](http://www.ietf.org/rfc/rfc2459.txt). R. Housley, W. Ford, W. Polk, D. Solo. January 1999.  
<http://www.ietf.org/rfc/rfc2459.txt>

<span id="ref-XMLDSIG">XMLDSIG</span>  
XML-Signature Syntax and Processing. W3C Working Draft. Eastlake, Reagle, and Solo. September 2000.  
<http://www.w3.org/TR/2000/WD-xmldsig-core-20001012/>

<span id="ref-XML-C14N">XML-C14N</span>  
[Canonical XML.](http://www.w3.org/TR/2000/WD-xml-c14n-20000907) Working Draft. J. Boyer. September 2000.

<http://www.w3.org/TR/2000/WD-xml-c14n-20000907>

<span id="ref-XML-ns">XML-ns</span>  
[Namespaces in XML](http://www.w3.org/TR/1999/REC-xml-names-19990114/) Recommendation. T. Bray, D. Hollander, A. Layman. January 1999.

[http://www.w3.org/TR/1999/REC-xml-names-19990114](http://www.w3.org/TR/1999/REC-xml-names-19990114/)

 <span id="ref-XML-schema">XML-schema</span>  
[XML Schema Part 1: Structures](http://www.w3.org/TR/2000/CR-xmlschema-1-20001024/) Working Draft. D. Beech, M. Maloney, N. Mendelshohn. September 2000.

<http://www.w3.org/TR/2000/CR-xmlschema-1-20001024/>  
[XML Schema Part 2: Datatypes](http://www.w3.org/TR/2000/CR-xmlschema-2-20001024/) Working Draft. P. Biron, A. Malhotra. September 2000.  
[http://www.w3.org/TR/2000/WD-xmlschema-2-20001024/](http://www.w3.org/TR/2000/CR-xmlschema-2-20001024/)

<span id="ref-XSLT">XSLT</span>  
[XSL Transforms (XSLT) Version 1.0](http://www.w3.org/TR/1999/REC-xslt-19991116.html). Recommendation. J. Clark. November 1999.

<http://www.w3.org/TR/1999/REC-xslt-19991116.html>
