[<img src="http://www.w3.org/Icons/w3c_home" alt="W3C" width="72" height="48" />](http://www.w3.org/)

A Semantic Web Primer for Object-Oriented Software Developers
=============================================================

W3C Working Group Note 9 March 2006
-----------------------------------

This version:

<http://www.w3.org/TR/2006/NOTE-sw-oosd-primer-20060309/>

Latest version:

<http://www.w3.org/TR/sw-oosd-primer/>

Previous version:

This is the first published version

Editors:

Holger Knublauch, University of Manchester &lt;<holger@knublauch.com>&gt;  
Daniel Oberle, Universität Karlsruhe &lt;<oberle@fzi.de>&gt;  
Phil Tetlow, IBM &lt;<philip.tetlow@uk.ibm.com>&gt;  
Evan Wallace, National Institute of Standards and Technology &lt;<ewallace@cme.nist.gov>&gt;

Contributors:

Jeff Z. Pan, University of Aberdeen (formerly University of Manchester), &lt;<jpan@csd.abdn.ac.uk>&gt;

Michael Uschold, Boeing, &lt;<michael.f.uschold@boeing.com>&gt;

Also see [Acknowledgements](#acknowledgements).

[Copyright](http://www.w3.org/Consortium/Legal/ipr-notice#Copyright) © 2006 [W3C](http://www.w3.org/)<sup>®</sup> ([MIT](http://www.csail.mit.edu/), [ERCIM](http://www.ercim.org/), [Keio](http://www.keio.ac.jp/)), All Rights Reserved. W3C [liability](http://www.w3.org/Consortium/Legal/ipr-notice#Legal_Disclaimer), [trademark](http://www.w3.org/Consortium/Legal/ipr-notice#W3C_Trademarks) and [document use](http://www.w3.org/Consortium/Legal/copyright-documents) rules apply.

------------------------------------------------------------------------

Abstract
--------

Domain models play a central role throughout the software development cycle, from requirements analysis to design, through implementation and beyond. As such, great progress has been made in the consistent use of models throughout this process. Modern software development tools with support for the UML and code generation as well as Model-Driven Architectures allow for developers to synchronize and verify technical implementation with user requirements using models. However, the reusability of domain models is often limited because they are, by definition, domain specific and only take into consideration abstractions needed to make possible a solution within the confines of their own individual problem space. But the Web is broader than that and provides a multidimensional solution space capable of referencing an almost limitless set of domains. While much of our software becomes increasingly embedded in the Web, our development processes do not fully exploit the potential of model reuse from the Web yet. This note therefore introduces Semantic Web languages such as RDF Schema and OWL, and shows how they can be used in tandem with mainstream object-oriented languages. We show that the Semantic Web can serve as a platform on which domain models can be created, shared and reused.

Status of this Document
-----------------------

*This section describes the status of this document at the time of its publication. Other documents may supersede this document. A list of current W3C publications and the latest revision of this technical report can be found in the [W3C technical reports index](http://www.w3.org/TR/) at http://www.w3.org/TR/.*

This document was created by the Software Engineering Task Force (SE) of the W3C [Semantic Web Best Practices and Deployment Working Group](http://www.w3.org/2001/sw/BestPractices/) (SWBPD). This work is part of the [W3C Semantic Web Activity](http://www.w3.org/2001/sw/Activity).

This document is a W3C Working Group Note and the SWBPD Working Group does not currently plan to create further revisions. Comments are welcome and may be sent to <public-swbp-wg@w3.org>; please include the text "comment" in the subject line. All messages received at this address are viewable in a [public archive](http://lists.w3.org/Archives/Public/public-swbp-wg/). Readers interested in this topic area may also wish to track and contribute to discussion in the Semantic Web Interest Group mail archive.

This document was produced by a group operating under the [5 February 2004 W3C Patent Policy](http://www.w3.org/Consortium/Patent-Policy-20040205/). This document is informative only and therefore has no associated W3C Patent Policy licensing obligations. W3C has a [public list of any patent disclosures](http://www.w3.org/2004/01/pp-impl/35495/status) made in connection with the deliverables of the group; that page also includes instructions for disclosing a patent.

Publication as a Working Group Note does not imply endorsement by the W3C Membership. This is a draft document and may be updated, replaced or obsoleted by other documents at any time. It is inappropriate to cite this document as other than work in progress.

<span id="contents">Table of Contents</span>
--------------------------------------------

-   [1. Introduction](#introduction)
-   [2. Application Development with Semantic Web Technology](#development)
-   [3. Introduction to RDFSchema and OWL](#languages)
    -   [3.1 RDF and RDF Schema](#rdf)
    -   [3.2 OWL](#owl)
    -   [3.3 A Comparison of OWL/RDFand Object-Oriented Languages](#comparison)
-   [4 Programming with RDF Schema and OWL](#programming)  
-   [Appendix: Where to go fromhere](#links)
-   [References](#refs)

<span id="introduction"></span>1 Introduction
---------------------------------------------

It is common for software systems to be centered on domain models to represent aspects of their target problem space. Domain models can describe the relevant concepts and data structures from an application domain and encode knowledge that is useful to drive an application's behavior. For example, assume that our task is to develop an online shopping system. During requirements analysis for this system, we might learn that:

-   1.  Purchase orders associate a customer with a list of products
    2.  Customers have a home country
    3.  Germany, France and Australia are countries
    4.  Germany and France are part of the European Union
    5.  The European Union is a free-trade zone
    6.  Orders from customers who live in a country that has a free-trade agreement with the online shops' country are duty free

After some thinking we may come up with an object-oriented design such as the following UML class diagram.

<img src="uml-diagram.png" alt="simple domain model in UML" width="552" height="166" />

Figure1: A simple domain model in UML syntax.

We can present this schematic to our customer for discussion and after a few iterations we may end up with a data structure that can be implemented in our favoured programming language. We may also begin with user interface components for end-users (maybe JavaServer Pages) and for the online shop managers (who may require a more sophisticated front-end implemented in Java/Swing, C\# or Visual Basic, for example). If our system proves successful, more components can be built around it, for example to access the product catalogue through a Web Service. In these cases, other components would want to share the same data structures and domain knowledge so that they can interoperate. Even if our system is not so successful or the system it ported to a different platform, we may at least want to reuse parts of it. In these cases, it would be useful to have access to the underlying domain model so that we can extract the parts that we need.

Since we anticipate all these potential developments, we design our system with a *Model-View-Control* architecture [\[BMRSS 1996\]](#ref-BMRSS-1996). This well-known pattern suggests the separation of domain models from user interface and control logic. The separation of non-visual parts from visual components makes it potentially easier to reuse and share domain models for other applications and target platforms. Unfortunately, however, the promise of reusability of object-oriented models is often not fulfilled. In many cases, domain models like the above contain hard-coded dependencies with the specific application. Especially once the model is encoded in a programming language, much of the knowledge that went into the initial design is lost. For example, the condition as to whether a purchase order is duty free may be encoded by if-statements deep in some imperative method (such as `totalPrice()`; in the UML diagram), and the fact that each `PurchaseOrder` requires at least one product will also not be clear unless you care to read through the control logic of the user interface implementation. Another typical problem with such systems is interoperability. For example, if some other application wants to interface data or services from our system, it would need to go through a well-defined interface (API) that is strictly coupled with our application. Maybe an intermediate format based on XML is used to exchange information among such applications. If multiple applications with similar tasks shall interoperate, a large number of such interfaces and exchange formats will be needed.

The UML diagram offers the greatest potential for reuse and interoperability in our example scenario. Such diagrams model at a higher level of abstraction and can be used to derive implementation code for multiple purposes. However, even if two components or applications have started with the same UML diagram, they may have incompatible implementations. Still a lot of hand-crafted code will be required to implement them. In which format shall customer data be stored and shared? The UML model may be ambiguous and misunderstood. In one implementation, countries may be stored as string values, while others may want to represent them as instances of a Country class. In either case, it is unclear where and how the specific countries such as Germany and France shall be represented in UML. Furthermore, unless a project follows a consistent model-driven approach, UML diagrams are often only maintained as intermediate artifacts in the development life cycle, used as the foundation for the implementation but then filed away where they are inaccessible to other developers. UML models are often hidden for a good reason, because they may no longer be up to date with the realimplementation. The result of this software development reality is that much time is wasted with unnecessary duplicate work. Domain models need to be crafted from the scratch at the start, and then mapped into intermediate formats to share data among applications.

In an ideal world, developers would discover shareable domain models and knowledge bases from a variety of interrelated repositories and then wire them together with the remaining object-oriented components for user interface and control components - a concept slowly becoming recognised as *Ontology Driven Architecture*. All applications that share overlapping domain models would then have a certain degree of interoperability built in. While this ideal world is still mostly a vision, some promising approaches are begining to appear [\[TPOWUK 2005\]](#ref-TPOWUK-2005).

Rather unnoticed from the main software engineering camps, the World Wide Web Consortium (W3C) has designed some very interesting technology in the context of its *Semantic Web* vision (cf. the W3C's [Semantic Web Activity](http://www.w3.org/2001/sw/)). This technology, including RDF [\[RDF 2004\]](#ref-RDF-2004) and OWL [\[OWL 2004\]](#ref-OWL-2004), has been originally designed with the goal of making web pages easier to understand for intelligent agents and web services. Interestingly, however, it turns out that Semantic Web languages and tools could also play a major role in software development in general.

The Semantic Web community has produced a set of complimentary languages and tools for developing, maintaining, using and sharing domain models for Software Engineering, amongst other purposes. At the core are the languages OWL and RDF Schema, OWL being optimized to represent structural knowledge at a high level of abstraction. Domain models encoded in OWL can be uploaded on the Web and shared among multiple applications. OWL is supported by an unambiguous dialect of formal logic called *Description Logics* [\[BHS 2003\]](#ref-BHS-2003). This formal underpinning makes it possible to exploit intelligent reasoning services such as automatic classification and consistency checking. These services can be used at build-time and therefore facilitate the construction of reusable, well-tested domain models. Reasoning services can also be used at runtime for various purposes. For example, this makes it possible to define classes dynamically, to re-classify instances at runtime and to perform complex logical queries. In addition to their foundation on logics, OWL and RDF Schema operate on similar structures to object-oriented languages, and therefore can be effectively integrated with traditional software components.

To summarize, the key benefits of RDF Schema and OWL compared to object-oriented languages are:

-   **Reuse and interoperability**: RDF and OWL models can be shared among applications and on the web
-   **Flexibility**: RDF and OWL models can operate in an open environment in which classes can be defined dynamically etc
-   **Consistency and Quality Checking** across models
-   **Reasoning**: OWL has rich expressivity supported by automated reasoning tools

Note that some of these benefits, such as consistency checking and automated reasoning, can also be achieved by means of the Object Constraint Language (OCL). OCL is part of the OMG's family of languages for Model-Driven Architecture, and provides similar expressivity to modern Semantic Web languages. For example the constraint from Figure 1 could have been expressed in OCL to formalize the conditions of duty-free orders. However, OCL has not been designed for the Web, but is optimized to represent constraints within rather closed data models. Semantic Web technology has been designed for an open world, in which models are shared among multiple applications and groups. We will show later how this openness manifests itself in the Semantic Web languages. It is worth noting though that the differences between object-oriented languages and OWL are not impossible to bridge. In fact, an OMG working group is defining an Ontology Definition Metamodel [\[ODM 2005\]](#ref-ODM-2005) that will allow developers to use Semantic Web languages in tandem with other formats such as OCL.

This document now goes on to explain how object-oriented applications can be designed and implemented with the help of Semantic Web technologies. Section 2 gives an outline of how the application development life cycle can benefit from Semantic Web approaches. Section 3 introduces the Semantic Web languages RDF Schema and OWL, and compares them to object-oriented modeling languages. Section 4 shows how RDF and OWL models can be embedded into object-oriented programs (here, using Java). The Appendix provides references to further reading, tools and libraries.

<span id="development"></span>2 Application Development with Semantic WebTechnology
-----------------------------------------------------------------------------------

What is the Semantic Web? Most of the current "traditional" web content is geared for human use. Presentation languages such as HTML contain instructions for Web browsers advising how to present multi-media specifically for our visual and auditory perception. However, if we wanted to employ a computer program to search for Web-based information for us, then such methods would find it very difficult to make any sense of these Web pages, unless they had advanced human language skills. Furthermore, contemporary server-side Web languages like JSP or ASP support a random mixture of model and view parts in a single file, leading to very unstructured content.

The vision behind the Semantic Web is to make web content machine-readable so that it can be more easily analyzed by software agents and shared among Web Services. For that purpose, the *World Wide Web Consortium* (W3C) is recommending a number of Web-based languages that can be used to formalize web content. RDF Schema and OWL can be used to describe classes, attributes and relationships similar to object-oriented languages. For example, RDF Schema can be used to define that the class `Product` has a property `hasPrice` which takes values of type float. And you can define a class `Purchase` with a property `hasProducts` which relates it with multiple `Product`s. OWL extends RDF Schema by additional constructs to define more complex classes. For example, OWL can be used to define a class `DutyFreeOrder` as the subclass of all purchases that have a delivery address to a country that is known to have a free-trade agreement. The W3C also works on other languages for describing if-then rules and complex SQL-like queries, but our focus lies on RDF Schema and OWL in this discussion.

Domain models in any of these languages can be uploaded and linked into the Web just like you would publish an HTML page. Once an RDF or OWL file is online, other Web resources or applications can link to it. For example, a HTML page showing a specific product could encode metadata to link back to the corresponding entity in an OWL model so that all applications that understand what a "product" is can make sense out of the HTML page. Or, providers of specific products can instantiate the RDF Schema classes to announce their portfolio to shopping agents in an unambiguous exchange format. A typical scenario for such a Semantic Web application is shown in Figure 2.

<img src="architecture.png" alt="exploiting domain models and services from the Web" width="542" height="398" />

Figure 2: An application using Semantic Web technology can exploit domain models and services from the Web. The yellow boxes represent OWL files in a UML-like graphical notation. Note that UML notation is merely used as an example - other visualizations may be more appropriate to capture the full semantics of OWL.

While a certain level of interoperability could also be achieved using traditional XML-based approaches, Semantic Web languages have richer expressivity. Similar to object-oriented languages, RDF Schema and OWL make it possible to define subclasses and generalizations of concepts. The organization of a domain model into classes suggests natural mappings to integrate models into the remaining software components. Furthermore, since every Semantic Web resource has a unique URI, it is possible to establish links among existing models. This means that whenever a model of a specific domain has been published on the Web, then others are potentially able to build upon it, and thus establish a network of domain, and possibly cross-domain, knowledge.

The extensibility of Semantic Web languages supports reusability on a global scale. Instead of defining the 1000th variation of a product-purchase domain model, application developers may be able to locate a suitable model on the Web and simply reuse or extend it. By reusing an existing model, different applications with similar tasks can share results and data much more easily. Furthermore, it is likely that an application-independent reusable component (such as a shopping basket application or a credit card handling Web Service) can be integrated. While the promise of global knowledge sharing on the Semantic Web is possibly a bit overambitious in the immediate future, RDF Schema and OWL provide at least the infrastructure to build reusable structures among communities of interest. It is beyond the scope of this paper to discuss these issues in detail.

The promise of reusability is partly due to the fact that Semantic Weblanguages are Web-based: each class, property or object in an RDF Schema or OWL file has a unique identifier (URI), so that it can be referenced from anywhere else. The other major strength that makes Semantic Web models highly reusable is that OWL is founded on formal logic. This means that OWL models are not only limited to defining classes and their attributes, but can also restrict the potential instantiations of these classes, so that the classes can be unambiguously shared among groups of humans or machines. Domain models that are based on such well-defined logics are often referred to as *ontologies*. In fact, the abbreviation OWL stands for the "Web Ontology Language". According to [\[OWL 2004\]](#ref-OWL-2004), OWL can be used to explicitly represent the meaning of terms in vocabularies and the relationships between those terms. This representation of terms and their interrelationships is again a form of ontology. From an object-oriented point of view, ontologies are domain classes that contain logical statements that make their meaning explicit. We will show later that tools called reasoners can exploit these logical statements to perform advanced queries which reveal implicit relationships among resources.

Ontologies and domain models often span different levels of abstraction, application-dependency and reusability. Revisiting the example from the introduction, statements 1 and 2 specify data structures that represent customer and purchase data. Statements 3, 4, and 5 are about specific countries, which could be used for geographical or political applications. Statement 6 is independent from these specific countries and describes general domain relationships for countries that fulfill certain criteria. These parts should be made reusable or be reused from standardized solutions. In fact, ontologies are often defined by groups of humans (such as an e-commerce consortium or a national geological survey) in order to interrelate a shared domain vocabulary for information integration.Once a standardized ontology of countries and their relationships exists, there is no need to reinvent this for each individual application. Furthermore, reusing existing ontologies from the Web has the advantage that an application would more directly benefit from updates such as new countries.

However, the specific customers and our online shop's localization to a specific country are application-specific and need to be custom-fitted. Such custom-fitting can be achieved by adding specific subclasses or instances. If shared ontologies/domain models are not optimized for a specific application purpose and thereforeneed to be adapted or built from the scratch, then domain modeling tools (such as those mentioned in the appendix) can be used. These tools are suitable for domain experts who have little or no training in programming languages. Comparable editors for the UML, these tools provide visual editors for classes and relationships, and allow users to create instances of these classes.

The domain modeling activities in such a development process can be compared to requirements analysis and design steps in traditional Software Engineering. The domain experts and eventual users join forces with software designers, developers and testers to come up with suitable abstractions of a domain. Ontologies from the Web are combined, extended and instantiated. Ontology development tools provide facilities to instantiate classes, so that example instances can be created and prototyped. The resulting domain models are then combined with the remaining application components such as user interface and control logic by programmers. In contrast to many traditional object-oriented design methodologies, where analysis and design only leads to intermediate artifacts for code generation, the Semantic Web approach uses the same models for all stages from analysis, design, implementation to testing and even at runtime. The ontologies defined in the early phases determine the classes in the implementation, and at the same time the original design models remain accessible when the application is executing. The formal logic behind ontologies can then even be exploited to derive test cases. If domain models have explicit runtime semantics, it is further possible to use reasoning services. We will look into this in more detail after we have introduced the basics of RDF and OWL.

<span id="languages"></span>3 Introduction to RDF Schema and OWL
----------------------------------------------------------------

In order to implement the Semantic Web vision, the W3C has produced a number of language specifications. RDF and its Schema constitute the base infrastructure to represent classes, properties and instances in a Web compliant format.OWL extends RDF Schema with richer expressivity. Both languages are now supported by tools, parsers and programming APIs. This section will introduce RDF Schema and OWL and compare them to object-oriented languages.

### <span id="rdf"></span>3.1 RDF and RDF Schema

*RDF (Resource Description Framework)* [\[RDF 2004\]](#ref-RDF-2004) is a Web-based language that can be used to describe associations among *resources* formally. A resource can be anything with a Uniform Resource Identifier (URI). Since they have URLs, HTML pages, images, and multi-media files are resources. In RDF, resources can also be classes, properties or instances. For example, the URI `http://ecommerce.example.org/ecommerce.rdf#Product` could represent a class in an RDF file, and you could use this URI to annotate a Web page of a specific product.

RDF just defines the very basic syntax for Semantic Web content, and has an XML serialization that allows users to share models on the Web. *RDF Schema* defines an object-oriented model for RDF. RDF Schema defines how classes, subclass relationships, properties, datatypes etc. are represented. For example,the following RDF Schema file declares a class `Product` and a property `>hasPrice`:

<table><colgroup><col style="width: 100%" /></colgroup><tbody><tr class="odd"><td><blockquote><pre><code>&lt;rdf:RDF xml:base=&quot;http://ecommerce.example.org/ecommerce.rdf&quot;
         xmlns=&quot;http://ecommerce.example.org/ecommerce.rdf#&quot;
         xmlns:rdfs=&quot;http://www.w3.org/2000/01/rdf-schema#&quot;
         xmlns:rdf=&quot;http://www.w3.org/1999/02/22-rdf-syntax-ns#&quot;&gt;

  &lt;rdfs:Class rdf:ID=&quot;Product&quot;/&gt;
  &lt;rdf:Property rdf:ID=&quot;hasPrice&quot;&gt;
    &lt;rdfs:domain rdf:resource=&quot;#Product&quot;/&gt;
    &lt;rdfs:range rdf:resource=&quot;http://www.w3.org/2001/XMLSchema#float&quot;/&gt;
  &lt;/rdf:Property&gt;
&lt;/rdf:RDF</code></pre></blockquote></td></tr></tbody></table>

It is far beyond the scope of this note to introduce the details of RDF, RDF Schema or the XML syntax. For the purpose of this document only a few concepts are important. URIs are often split into namespace and local name, and the namespace can be abbreviated with a prefix notation. For example, `rdfs:Class` is the abbreviation of the URI `http://www.w3.org/2000/01/rdf-schema#Class` if the prefix `rdfs` has been declared in the head of the file. If no prefix is given (such as in `"Product"`), then the default namespace of the file is used. In order to simplify the presentation in this document, we will focus on this short notation based on the localnames.

Namespaces can be compared to *packages* in object-oriented languages. The file above can therefore be regarded to define the package `http://ecommerce.example.org/ecommerce.rdf#`. All resources declared in a namespace are public, so that all RDF files could directly refer to each other. For example, you could create another RDF file that defines an instance of the `Product` class above, and assign a specific price to the instance. Such instances are called *individuals* in RDF. In contrast to many object-oriented languages, individuals can be declared to have more than one direct type. For example, the individual `http://myshop.example.com/products.rdf#Harry` could be declared to be both an instance of `http://ecommerce.example.org/ecommerce.rdf#Product` and of `http://auctioning.example.org/model.rdf#AuctionItem`. This would make it possible to use the same resource (denoted by its URI) in one context as a product and in another context as an auction item.

RDF Schema *classes* are sets of individuals with shared characteristics. Classes can be arranged in a subclass hierarchy very similar to object-oriented systems. Like the UML, RDF Schema supports multiple inheritance. A major difference between RDF and object-oriented languages, however, is that all classes can overlap. Since individuals can have multiple types, this means that some instances may be shared among classes. Furthermore, instances can change their type during their life cycle. A purchase order may start as a plain instance of the `PurchaseOrder` class, and later change its type to `DutyFreeOrder` when the program has collected more information about the customer's delivery address.

Another important difference between Semantic Web and object-oriented languages is that the Semantic Web is an *open world*, in which files can add new information about existing resources. Since the Web is a huge place in which everything can link to anything else, it is impossible to rule out that a statement could be true, or could become true in the future. For example, if we define a class, we usually cannot know all its instances in advance. Likewise, we cannot rule out that a specific `Product` will also be used as an `AuctionItem`. This "open-world assumption" means that modeling domains for the Semantic Web may require a shift in mindset for developers who are used to the closed, finite domains of "classical" object-oriented systems or "traditional" relational databases. On the other hand side, it offers a bounty of flexibility and shared experience as part of a boundless world of opportunties for reuse and interoperability. In particular, the open world approach means that any web-based, communal ontology can add subclasses or additional characteristics to concepts defined in other ontologies to narrow them for a different application case. In closed systems such as Java programs this is not easily possible, or conventional practice.

But let us return to the RDF language for now. RDF *properties* can be compared to attributes, fields or association ends in object-oriented languages. However, while in the UML or Java attributes are attached to a single class only, RDF properties are stand-alone entities which can be defined independently from classes and used in multiple classes. For example, you can define a property `hasPrice` and then attach it to all classes where a price makes sense. This also makes it possible to reuse the same property across multiple files. For example if you create a model for online auctioning software, you could use the price property from the online shopping model to also represent prices for the auction items. Sharing the same property across multiple models means that values can be more easily integrated, for example to compare the current auctioning price with the price for a new product in other online shops.

In order to "attach" or "associate" a property with a class, rdfs:domain statements can be used. rdfs:domain is a tag from the RDF Schema namespace that relates a property to a class using predication. In the example above, the domain of hasPrice is Product. As such, from an object-oriented point of view this would mean that all instances of the Product class could have price values associated with them, hence making Price a Product attribute. However, in RDF and OWL this also has additional connotations: any resource that is the subject of hasPrice is an instance of the Product class. In other words, a domain statement in RDF can be used to classify instances. Therefore, pointing ack to the above example, if something has a price, then it can be handled as an instance of Product, even if it partakes in other declarations (or triples) - a crucial matter that will be discussed in more detail later in the context of reasoning with OWL.

In this manner, primitive values such as prices are called *literals* in RDF, and literals have an XML Schema datatype such as `xsd:string` or `xsd:float` as their types. It is possible to limit the type of values of a property using an `rdfs:range` statement. A property can either have an XML Schema datatype as its range, or a class. Properties that have classes in their range can be compared to relationships in object-oriented languages. For example, if the property `hasCustomer` has the range `Customer`, then all values of the property must be customers. Similar to domain statements, range statements can also be interpreted the other way around: if we know that a resource is related by means of the `hasCustomer` property, then we can infer that the resource is in fact a `Customer`, even if it has other types as well.

### <span id="owl"></span>3.2 OWL

As shown in the previous paragraphs, RDF Schema defines a simple domain modeling language similar to object-oriented languages. You can define classes and their properties and then create instances of these classes. This is useful for many purposes. However, in many application domains, the expressivity of RDF Schema alone is insufficient. For example, RDF Schema cannot express cardinality constraints so that each Product can only have one price.

The *Web Ontology Language (OWL)* [\[OWL 2004\]](#ref-OWL-2004) extends RDF Schema and uses the same RDF syntax as its base grammar. OWL adds the ability to express more information about the characteristics of properties, and to define classes by grouping those instances that meet these characteristics. In order to better understand this, it is important to remember that OWL classes are sets of axioms. As illustrated in Figure 3, these sets may overlap, and they may contain other sets.

<img src="sets.png" alt="OWL classes as sets of instances" width="473" height="281" />

Figure 3: OWL classes can be regarded as sets of instances with common characteristics.

The left circle in Figure 3 describes the class of all things that have their origin in Australia. The right circle represents all instances of the product class. The intersection of the two big circles therefore represents the class of all instances that are products and "from Australia" at the same time, i.e. all Australian products. Illustrated by the small circle within the products circle, the class of those products purchased by someone from Germany is a subset of all products. Finally, the set of all Australian products that have been purchased by someone from Germany are represented by the intersection of all classes.

Now, let us not forget that RDF/OWL properties are independent from particular classes, and can be used in multiple places. For example,the property `hasOrigin` could be used for products, people, customers, music, or whatever. Assuming `Australia` is defined as an instance of `Country` somewhere, somebody could now use OWL to formally define the class of all things where the `hasOrigin` property has the value `Australia`. All instances that anyone else has defined can then be classified according to this definition.

The OWL language element used to express such definitions is called *restriction*. A restriction describes the class of all instances that fulfill a specific condition on a property. There are various types of restrictions in OWL. In the above example, we have a so-called *hasValue* restriction which links a property to a specific individual. Other restrictions limit the cardinality of a property, for example to define the class of all things that have at least two values for the `hasOrigin` property.

It is not necessary to go into the details of restrictions here. The key power of OWL is that classes can be defined by combining multiple restrictions and other classes. For that purpose, OWL provides logical operands to build intersections (and), unions (or) and complements (not) of other classes. For example, you could define "the class of all customers from France who have issued at least 3 purchase orders or at least one order consisting only of books, except those customers who have ordered a DVD".

In object-oriented systems, such statements would typically have been hidden somewhere inside the code base itself. In Semantic Web ontologies, the logical relationships are made explicit through OWL class definitions and other formal statements. This does not only make it easier for other human users of models to understand the specifically intended meaning, but also means that other tools can use the definitions transparently. OWL models simply declare things, and it is entirely up to the applications to do something useful with these declarations.

Some Semantic Web applications can exploit other tools to handle and analyze OWL models. One family of such tools is called reasoners. A *reasoner* is a service that takes the statements encoded (asserted) in an ontology as input and derives (infers) new statements from them. In particular, OWL reasoners can be used to:

-   Reveal subclass/superclass relationships among classes
-   Determine the most specific types of individuals
-   Detect inconsistent class definitions

So, a suitable example can be formed as follows: Assume you have defined a class `DutyFreeOrder`, which consists of all `PurchaseOrder`s that have been issued by customers who belong to the set of all customers that live in a free-trade country. Now assume, a new user logs into the onlineshop and starts putting items into his shopping basket. Internally we will create blank instances of the `Customer` and `PurchaseOrder` classes. Later, when the user proceeds to the check out and enters his delivery address, we can ask a reasoner to classify the `PurchaseOrder`. This will give us the most specific class that the particular order belongs to (here, a `DutyFreeOrder`). The fact that we now have a duty free order will control the future life cycle of this object because the application logic can exploit additional domain knowledge about duty free orders.

In contrast to object-oriented systems, where objects normally cannot change their type, applications based on Semantic Web technology can follow a formal, yet dynamic typing system. RDF and OWL classes themselves are also dynamic, it is possible to create and manipulate them at runtime. For example, one could define a temporary class that is formally represented as an OWL expression and then ask the reasoner about the instances of this class. This means that reasoners can be compared to rich query answering systems. These queries can not only be asked at ontology design time, but also at execution time.

### <span id="comparison"></span>3.3 A Comparison of OWL/RDF and Object-Oriented Languages

Summarizing the introduction of RDF and OWL, the following table shows important differences and similarities between Semantic Web languages and object-oriented languages:

**Object-Oriented Languages**

**OWL and RDF**

Domain models consist of classes, properties and instances (individuals). Classes can be arranged in a subclass hierarchy with inheritance. Properties can take objects or primitive values(literals) as values.

  
**Classes and Instances**

Classes are regarded as types for instances.

Classes are regarded as sets of individuals.

Each instance has one class as its type. Classes cannot share instances.

Each individual can belong to multiple classes.

Instances can not change their type at runtime.

Class membership may change at runtime.

The list of classes is fully known at compile-time and cannot change after that.

Classes can be created and changed at runtime.

Compilers are used at build-time. Compile-time errors indicate problems.

Reasoners can be used for classification and consistency checkingat runtime or build-time.

  
**Properties, Attributes and Values**

Properties are defined locally to a class (and its subclasses through inheritance).

Properties are stand-alone entities that can exist without specific classes.

Instances can have values only for the attached properties. Values must be correctly typed. Range constraints are used for type checking.

Instances can have arbitrary values for any property. Range and domain constraints can be used for type checking and type inference.

Classes encode much of their meaning and behavior through imperative functions and methods.

Classes make their meaning explicit in terms of OWL statements. No imperative code can be attached.

Classes can encapsulate their members to private access.

All parts of an OWL/RDF file are public and can be linked to fromanywhere else.

Closed world: If there is not enough information to prove a statement true, then it is assumed to be false.

Open world: If there is not enough information to prove a statement true, then it may be true or false.

  
**Role in the Design Process**

Some generic APIs are shared among applications. Few (if any) UML diagrams are shared.

RDF and OWL have been designed from the ground up for the Web. Domain models can be shared online.

Domain models are designed as part of a software architecture.

Domain models are designed to represent knowledge about a domain,and for information integration.

UML, Java, C\# etc. are mature technologies supported by many commercial and open-source tools.

The Semantic Web is an emerging technology with some open-source tools and a handful of commercial vendors.

  
**Miscellaneous Features**

Instances are anonymous insofar that they cannot easily be addressed from outside of an executing program.

All named RDF and OWL resources have a unique URI under which they can be referenced.

UML models can be serialized in XMI, which is geared for exchangeamong tools but not really Web-based. Java objects can be serialized intovarious XML-based or native intermediate formats.

RDF and OWL objects have a standard serialization based on XML, with unique URIs for each resource inside the file.

<span id="programming"></span>4 Programming with RDF Schema and OWL
-------------------------------------------------------------------

Many modern software architectures consist of object-oriented components, implemented in mainstream programming languages like Java or C\#. In fat-client systems, most user interface and control code will be written using object-oriented libraries like Swing or SWT. In a client-server setting, the server may host Enterprise JavaBeans (EJB) which communicate with databases and other resources. In Web Services, much of the control logic will be implemented using imperative, object-oriented methods.

In order to exploit the benefits of Semantic Web technology in the context of such object-based systems, software architects need to understand the design patterns and strategies to seamlessly integrate these technologies. While we are only beginning to understand the implications of Semantic Web technology in systems and Software Engineering, many promising candidate solutions are beginning to emerge, including programming APIs and code generators. In this section we will give an overview of the state of the art (at the time of writing this note) of ontology-driven software development and discusssome of its underlying concepts.

The key to understanding ontology-driven architectures is to keep in mind that in ontology languages:

-   Properties are independent from specific classes
-   Instances can have multiple types and change their type as a result of classification
-   Classes can be defined dynamically, at runtime

These key differences imply that it is not sufficient to simply map OWL/RDF Schema classes into OO classes, where attributes are fixed to classes etc. Instead, if an application wants to exploit the weak typing and flexibility of OWL/RDF Schema, it is necessary to map OWL/RDF Schema classes into runtime objects, so that classes in the ontology become instances of some object-oriented class (compare also [\[G 2003\]](#ref-G-2003) or [\[KPBP 2004](#ref-KPBP-2004)\]). As illustrated in As illustrated in Figure 4, a typical object model to represent Semantic Web ontologies would contain classes to represent resources, classes, properties and individuals. Note that the terms RDFSClass and RDFProperty relate to the classes rdfs:Class and rdf:Property defined in RDF Schema, whereas the term RDFIndividual has no direct counterpart defined in RDF Schema.

Further extensions for the various types of OWL classes and properties are easy to imagine (see [Protege OWL Diagram](http://protege.stanford.edu/plugins/owl/api/ProtegeOWLModel.pdf) for a complete OWL object model).

<img src="dom.png" alt="simple model representing RDF Schema" width="433" height="176" />

Figure 4: A simple object-oriented model to represent RDF Schema ontologies.

Applications would load ontologies into such an object model and then manipulate and query the objects at runtime. Since OWL/RDF Schema classes are objects, it is possible to add and modify classes, for example to change the logical characteristics of an ontology at runtime. Since RDF properties are objects (and their values are not stored as object-oriented attributes), it is possible to assign and query values for any resource dynamically. Since individuals are objects, it is possible to dynamically change their type.

This approach is driven by a dynamic approach to development as is known in mainstream software technology as the *Dynamic Object Model* pattern [\[RTJ 2005\]](#ref-RTJ-2005). For certain object-oriented systems, by representing the object types as objects, they can be changed at configuration time or at runtime, making it easy to change and adapt the system to new requirements.

In the Semantic Web community, several APIs implement this pattern. Popular libraries for Java, C and PHP are listed in the [Appendix](#links). In addition to the dynamic object model interfaces, these libraries provide parsers, reasoning interfaces and various other services for ontology handling. To get a feeling of how to use such libraries, the following example Java code snippet (a method that calculates the sum of all purchases of a given customer) has been provided:

<table><colgroup><col style="width: 100%" /></colgroup><tbody><tr class="odd"><td><blockquote><pre><code>public static float getPurchasesSum(RDFIndividual customer) {
    OWLModel owlModel = customer.getOWLModel();
    float sum = 0;
    RDFProperty purchasesProperty = owlModel.getRDFProperty(&quot;purchases&quot;);
    RDFProperty productProperty = owlModel.getRDFProperty(&quot;product&quot;);
    RDFProperty priceProperty = owlModel.getRDFProperty(&quot;price&quot;);
    Iterator purchases = customer.listPropertyValues(purchasesProperty);
    while(purchases.hasNext()) {
        RDFIndividual purchase = (RDFIndividual) purchases.next();
        RDFIndividual product = (RDFIndividual) purchase.getPropertyValue(productProperty);
        Float price = (Float) product.getPropertyValue(priceProperty);
        sum += price.floatValue();
    }
    return sum;
}</code></pre></blockquote></td></tr></tbody></table>

This code is generic and flexible, but at the same time this approach has some disadvantages. If classes and properties are runtime objects, then the advantages of a strong type system cannot be used at compile time. It becomes rather inconvenient, therefore**,** to access property values and the code is bloated with infrastructure calls to access properties etc. Furthermore, resources are accessed by names coded as strings, so most compilers cannot assist with error detection. From an object-oriented implementation point of view, a much nicer implementation of the method above would look as follows:

<table><colgroup><col style="width: 100%" /></colgroup><tbody><tr class="odd"><td><blockquote><pre><code>public class Customer extends RDFIndividual {


    public float getPurchasesSum() {
        float sum = 0;
        Iterator purchases = listPurchases();
        while (purchases.hasNext()) {
            Purchase purchase = (Purchase) purchases.next();
            Product product = purchase.getProduct();
            sum += product.getPrice();
        }
        return sum;
    }
}</code></pre></blockquote></td></tr></tbody></table>

Instead of accessing generic classes such as <span class="style1">RDFIndividual</span> and <span class="style1">RDFProperty</span>, we would access custom-tailored classes such as <span class="style1">Purchase</span> and <span class="style1">Product</span>. Fortunately, it is possible to generate and use such classes without sacrificing the advantages of a dynamic object model. Code generators can take an RDFSchema or OWL ontology as input and create object-oriented interfaces and implementation classes as output. A list of some appropriate code generators is provided in the [Appendix](#links). In the example above,a generator would create a Java interface <span class="style1">Customer</span>, defining get and set methods for the properties that have <span class="style1">Customer</span> in their domain (e.g., <span class="style1">getEMail</span>, <span class="style1">setEMail</span>). These interfaces subclass the generic classes from the Dynamic Object Model API (such as <span class="style1">RDFIndividual</span>). This means that instances of the interfaces are at the same time "normal" <span class="style1">RDFIndividuals</span>, while the generated interfaces serve as an (optional) convenience layer on top of it.

<img src="generated-classes.png" alt="accessing models using generic API or using classes" width="615" height="327" />

Figure 5: Semantic Web models can be accessed either using a generic API or domain-specific classes.

The fact that the runtime objects are also instances of a generic, dynamic API means that developers can implement against two different APIs, depending on the task. For generic services such as reasoning, parsing, querying, and input validation it is possible to reuse or write code against the Dynamic Object Model API. Generic code has the greatest potential for reuse and suggests that more and more freely available components for processing RDF and OWL will become available in the future. This observation has some implications for the development methodology for ontology-driven systems. In particular, if generic components for reasoning and querying exist, then software designers should encode as much as possible in the RDF/OWL domain model, and thus raise the level of abstraction into the domain of generic services. For example, the fact that orders from countries with a free-trade agreement are duty free could be implemented inside the body of a method such as <span class="style1">isDutyFree()</span> in the Java class <span class="style1">PurchaseOrder</span>. However, this would make it impossible to exploit generic reasoners to classify a purchase order automatically. A cleaner solution would be to define a subclass <span class="style1">DutyFreePurchaseOrder</span> in the OWL ontology, and supply it with Description Logic statements that define how duty free orders differ from other orders. The availability of reusable, generic services is an incentive to build domain models with explicit semantics.

Despite the promises of ontology-driven software development, it is also important to understand when *not* to use Semantic Web technology. Most importantly, many of the reasoning engines mentioned in this document currently have scalability and performance problems. The classification of arbitrary OWL DL ontologies can be an extremely lengthy task and may therefore limit the use of classifiers at runtime. Performance is less critical when reasoners are used at ontology build time.

Other problems with the Semantic Web in general have to do with the limits of ontology reusability. It is difficult to build truly domain independent and reusable ontologies. Furthermore, ontologies are often difficult and expensive to build, and therefore represent an investment which many software companies would not just upload and share openly on the Web. These problems are beyond the scope of this paper, but they are important to keep in mind [\[BMT 2005\]](#ref-BMT-2005).

<span id="links"></span>Appendix: Where to go from here
-------------------------------------------------------

-   Links to APIs
    -   Java
        -   Jena - Semantic Web Framework (<http://jena.sourceforge.net/>)
        -   WonderWeb OWL API (<http://wonderweb.man.ac.uk/owl>)
        -   Protege OWL API (<http://protege.stanford.edu/plugins/owl/api>)
    -   C
        -   Redland - RDF Application Framework (<http://librdf.org/>)
    -   PHP
        -   pOWL - Semantic Web Development Platform (<http://powl.sourceforge.net/>)
    -   Code generators
        -   RDFReactor (<http://rdfreactor.ontoware.org/>)
        -   Kazuki (<http://projects.semwebcentral.org/projects/kazuki/>)
        -   Jastor (<http://jastor.sourceforge.net/>)
-   Links to tools and support infrastructure
    -   Protege-OWL Ontology Editor (<http://protege.stanford.edu/plugins/owl>)
    -   OntoEdit/OntoStudio - Engineering Environment for Ontologies (<http://ontoedit.com/>)
    -   SemanticWorks RDF/OWL Editor ( <http://www.altova.com/products_semanticworks.html>)
    -   SMORE - OWL Markup for HTML Pages (<http://www.mindswap.org/2005/SMORE/>)
    -   SWOOP - lightweight ontology editor (<http://www.mindswap.org/2004/SWOOP/>)
    -   OntoMat Annotizer ( <http://annotation.semanticweb.org/ontomat>)
-   Links to further online documents
    -   Semantic Web Activity ([Semantic Web Activity](http://www.w3.org/2001/sw/))
    -   RDF Primer (<http://www.w3.org/TR/rdf-primer/>)
    -   Tutorial on OWL (<http://www.cs.man.ac.uk/~horrocks/ISWC2003/Tutorial/>)
-   Links to example ontologies
    -   SchemaWeb - A comprehensive directory of RDF schemas and OWL ontologies (<http://www.schemaweb.info/default.aspx>)
    -   DAML Ontology Library (<http://www.daml.org/ontologies/>)
    -   Ontoware - Ontology repository ( [http://www.ontoware.org](http://www.ontoware.org/))
    -   Protege-OWL Ontology library (<http://www.owl-ontologies.com/>)
-   Links to example SW applications

    -   SWCLOS - A Semantic Web Processor on Common Lisp Object System (<http://iswc2004.semanticweb.org/demos/32/>)
    -   Swoogle - A Semantic Web Search Engine (<http://swoogle.umbc.edu/>)
    -   Bibster - A Semantics-Based Bibliographic Peer-to-Peer System (<http://bibster.semanticweb.org/>)
    -   Ontoware - Semantic Web related Software Projects (<http://www.ontoware.org/>)

    <span id="refs"></span>Normative References
    -------------------------------------------

    <span id="ref-BEVL-2004"></span>\[BCCG 2004\]

    Visual modeling of OWL DL ontologies using UML. Saartje Brockmans, Andreas Eberhart, Raphael Volz, Peter Löffler In S.A. McIlraith et al., Proceedings of the Third International Semantic Web Conference, Hiroshima, Japan, 2004, pp. 198-213. Springer, November 2004.

    <span id="ref-BHS-2003"></span>\[BHS 2003\]

    Description Logics. Baader, Franz, Horrocks, Ian, and Sattler, Ulrike. Volume *Handbook on Ontologies in Information Systems of International Handbooks on Information Systems*, chapter I: Ontology Representation and Reasoning, pages 3-31. Steffen Staab and Rudi Studer, Eds., Springer. 2003.

    <span id="ref-BMRSS-1996"></span>\[BMRSS 1996\]

    Pattern-Oriented Software Architecture, Volume 1: A System of Patterns. Buschmann, Frank, Meunier, Regine, Rohnert, Hans, Sommerlad, Peter, and Stal, Michael. John Wiley and Son Ltd., 1996.

    <span id="ref-BMT-2005"></span>\[BMT 2005\]

    Case Studies on Ontology Reuse. Elena Paslaru Bontas, Malgorzata Mochol, Robert Tolksdorf. 5th International Conference on Knowledge Management (I-Know=9205). 2005.

    <span id="ref-BCCG-2003"></span>\[BCCG 2003\]

    Reasoning on UML Class Diagrams. Berardi, D., A. Caly, D. Calvanese, and G. De Giacomo TR-11-2003, Dipartimento di Informatica e Sistemistica, Universita di Roma, La Sapienza (2003)

    <span id="ref-G-2003"></span>\[G 2003\]

    Ontology-oriented programming: Static typing for the inconsistent programmer. Neil M. Goldman. In 2nd International Semantic Web Conference (ISWC 2003), Sanibel Island, FL, 2003.

    <span id="ref-KPBP-2004"></span>\[KPBP 2004\]

    Automatic mapping of OWL ontologies into Java. Aditya Kalyanpur, Daniel Jimenez Pastor, Steve Battle, and Julian Padget.In 16th International Conference on Software Engineering and Knowledge Engineering (SEKE), Banff, Canada, 2004.

    <span id="ref-ODM-2005"></span>\[ODM 2005\]

    [Ontology Definition Metamodel](http://www.omg.org/ontology/). OMG Ontology Working Group. 2005.

    <span id="ref-OWL-2004"></span>\[OWL 2004\]

    [Web Ontology Language (OWL) Overview](http://www.w3.org/TR/owl-features/). McGuinness, Deborah L. and van Harmelen, Frank. W3C Recommendation. 2004.

    <span id="ref-RDF-2004"></span>\[RDF 2004\]

    [RDF Primer](http://www.w3.org/TR/rdf-primer/). Frank Manola, Erik Miller. W3C Recommendation. 2004.

    <span id="ref-RTJ-2005"></span>\[RTJ 2005\]

    Dynamic Object Model. Dirk Riehle, Michel Tilman, and Ralph Johnson. In Dragos Manolescu, Markus Völter, James Noble (eds.) *Pattern Languages of Program Design5*. Reading, MA: Addison-Wesley, 2005.

    <span id="ref-TPOWUK-2005"></span>\[TPOWUK 2005\]

    [Ontology Driven Architectures and Potential Uses of the Semantic Web in Software Engineering](http://www.w3.org/2001/sw/BestPractices/SE/ODA/). Tetlow, Phil, Pan, Jeff, Oberle, Daniel,Wallace, Evan, Uschold, Mike, and Kendall, Elisa. W3C Working Draft. 2005

------------------------------------------------------------------------

### <span id="acknowledgements"></span>Acknowledgements

This document is a product of the Software Engineering Task Force of the Semantic Web Best Practices and Deployment Working Group. The editors would like to thank the following reviewers for their helpful comments on this document: Grady Booch, Jeremy Carroll, Elisa Kendall and John McClure.

------------------------------------------------------------------------
