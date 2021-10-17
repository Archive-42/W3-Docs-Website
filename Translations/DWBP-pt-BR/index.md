<a href="#toc" id="toc-jump"><span data-aria-hidden="true">↑</span> <span>Jump to Table of Contents</span></a><a href="#toc" id="toc-toggle"><span data-aria-hidden="true">←</span> <span>Collapse Sidebar</span></a>

<span lang="en" lang="en">Data on the Web Best Practices</span>
===============================================================

**<span lang="pt" lang="pt">Lead translating organization</span>:**  
Núcleo de Informação e Coordenação do Ponto BR

Av. das Nações Unidas, 11.541, 7º andar

São Paulo, SP - Brasil, 04578-907

Sítio Web: <https://www.nic.br>

Coordinator of the translation: Beatriz Rossi Corrales (<biacorrales@nic.br>)

<span lang="fr" lang="fr">Tradução Autorizada em Português do Brasil</span>
===========================================================================

Publicada em 30 de Outubro de 2019
----------------------------------

**Esta versão:**  
<https://www.w3.org/Translations/DWBP-pt-BR-20191030/>

**Versão mais recente:**  
<https://www.w3.org/Translations/DWBP-pt-BR/>

**Versão original em inglês:**  
<https://www.w3.org/TR/dwbp/>

**Errata:**  
<https://www.w3c.br/traducoes/DWBPerrata-pt-br/>

<!-- -->

**Organização coordenadora da tradução (LTO):**  
Núcleo de Informação e Coordenação do Ponto BR

Av. das Nações Unidas, 11.541, 7º andar

São Paulo, SP - Brasil 04578-907

Sítio Web: <https://www.nic.br>

Coordenadora da tradução: Beatriz Rossi Corrales (<biacorrales@nic.br>)

**Parceiros na revisão da tradução:**  
<https://lists.w3.org/Archives/Public/w3c-translators/2018JulSep/0031.html>

**Resumo dos comentários públicos da Candidata a Tradução Autorizada:**  
<https://lists.w3.org/Archives/Public/public-auth-trans-pt-br/2019Oct/0013.html>

Esta é uma Tradução Autorizada de um documento do W3C. A publicação desta tradução seguiu os passos descritos na [Política para Traduções Autorizadas do W3C](https://www.w3.org/2005/02/TranslationPolicy.html "Link para pagina de politica de traducoes"). No caso de controvérsias a versão oficial da especificação é o documento original, inglês.

  
<a href="https://www.w3.org/" class="logo"><img src="https://www.w3.org/StyleSheets/TR/2016/logos/W3C" alt="W3C" width="72" /></a>

  

Boas Práticas para Dados na Web
===============================

Recomendação do W3C de 31 de janeiro de 2017
--------------------------------------------

Esta versão (em inglês):  
<a href="https://www.w3.org/TR/2017/REC-dwbp-20170131/" class="u-url">https://www.w3.org/TR/2017/REC-dwbp-20170131/</a>

Última versão publicada (em inglês):  
<https://www.w3.org/TR/dwbp/>

Última versão do editor (em inglês):  
<https://w3c.github.io/dwbp/bp.html>

Relatório de Implementação (em inglês):  
<https://w3c.github.io/dwbp/dwbp-implementation-report.html>

Versão anterior (em inglês):  
<https://www.w3.org/TR/2016/PR-dwbp-20161215/>

Editores:  
<span property="rdf:first" typeof="foaf:Person"><span class="p-name fn" property="foaf:name">Bernadette Farias Lóscio</span>, <a href="https://www.ufpe.br/cin" class="p-org org h-org h-card">CIn - UFPE, Brazil</a></span> <span property="rdf:rest" resource="_:editor1"></span>

<span property="rdf:first" typeof="foaf:Person"><span class="p-name fn" property="foaf:name">Caroline Burle</span>, <a href="https://nic.br/" class="p-org org h-org h-card">NIC.br, Brazil</a></span> <span property="rdf:rest" resource="_:editor2"></span>

<span property="rdf:first" typeof="foaf:Person"> </span>

<a href="https://newtoncalegari.com.br/" class="u-url url p-name fn">Newton Calegari</a>, <a href="https://nic.br/" class="p-org org h-org h-card">NIC.br, Brazil</a> <span property="rdf:rest" resource="rdf:nil"></span>

Colaboradores:  
Annette Greiner

Antoine Isaac

Carlos Iglesias

Carlos Laufer

Christophe Guéret

Deirdre Lee

Doug Schepers

Eric G. Stephan

Eric Kauz

Ghislain A. Atemezing

Hadley Beeman

Ig Ibert Bittencourt

João Paulo Almeida

Makx Dekkers

Peter Winstanley

Phil Archer

Riccardo Albertoni

Sumit Purohit

Yasodara Córdova

Modificações:  
[Histórico de modificações](#change-history)

[Diferença para a versão anterior (em inglês)](https://www.w3.org/TR/dwbp/diff)

Verifique a **[errata (em inglês)](https://w3c.github.io/dwbp/errata.html)** para quaisquer erros ou problemas reportados a partir da publicação.

A versão em inglês desta especificação é a única versão normativa. [Traduções (em inglês)](https://www.w3.org/2003/03/Translations/byTechnology?technology=https://www.w3c.br/dwbp/) não normativas também podem estar disponíveis.

[Copyright](https://www.w3.org/Consortium/Legal/ipr-notice#Copyright) © 2017 [W3C](https://www.w3.org/)<sup>®</sup> ([MIT](https://www.csail.mit.edu/), [ERCIM](https://www.ercim.eu/), [Keio](https://www.keio.ac.jp/), [Beihang](https://ev.buaa.edu.cn/)). São aplicáveis as regras de [responsabilidade](https://www.w3.org/Consortium/Legal/ipr-notice#Legal_Disclaimer), [marca registrada](https://www.w3.org/Consortium/Legal/ipr-notice#W3C_Trademarks) e [uso de documento](https://www.w3.org/Consortium/Legal/copyright-documents) do W3C.

------------------------------------------------------------------------

<span property="xhv:role" resource="xhv:heading">Resumo</span>
--------------------------------------------------------------

Este documento apresenta as Boas Práticas relacionadas à publicação e ao uso de dados na Web, concebidas para apoiar um ecossistema autossustentável. Dados devem ser descobertos e compreensíveis por pessoas e máquinas. Em qualquer circunstância em que os dados sejam utilizados de alguma maneira, seja pelo criador original dos dados ou por uma parte externa, tal utilização deve ser igualmente descoberta, assim como devem ser reconhecidos os esforços do publicador dos dados. Ou seja, a adoção destas Boas Práticas facilitará a interação entre publicadores e consumidores.

<span property="xhv:role" resource="xhv:heading">Estado deste Documento</span>
------------------------------------------------------------------------------

*Esta seção descreve o estado deste documento no momento de sua publicação. Outros documentos podem substituí-lo. Uma listagem das publicações atualizadas do W3C, assim como a última revisão deste relatório técnico, podem ser encontradas no índice dos relatórios técnicos do W3C em [https://www.w3.org/TR/ (em inglês)](https://www.w3.org/TR/).*

O [Grupo de Trabalho Boas Práticas para Dados na Web (em inglês)](https://www.w3.org/2013/dwbp/) foi [criado (em inglês)](https://www.w3.org/2013/05/odbp-charter) para desenvolver o ecossistema de dados abertos de maneira a facilitar uma comunicação mais qualificada entre os desenvolvedores e os publicadores; para fortalecer a confiança nos dados entre os desenvolvedores, seja qual for a tecnologia que estes escolham utilizar, potencializando inovações genuínas. Este documento de boas práticas é complementado pelos vocabulários [Qualidade de Dados, do inglês *Data Quality Vocabulary* (em inglês)](https://www.w3.org/TR/vocab-dqv/) e [Uso de Conjunto de Dados, do inglês *Dataset Usage Vocabulary* (em inglês)](https://www.w3.org/TR/vocab-duv/).

Este documento foi publicado pelo [Grupo de Trabalho Boas Práticas para Dados na Web (em inglês)](https://www.w3.org/2013/dwbp/) como uma Recomendação. Caso haja interesse em enviar comentários sobre este documento favor enviá-los para <public-dwbp-comments@w3.org> ([assinatura](mailto:public-dwbp-comments-request@w3.org?subject=subscribe), [arquivos, em inglês](https://lists.w3.org/Archives/Public/public-dwbp-comments/)). Todos os comentários são bem-vindos.

Favor consultar o [relatório de implementação (em inglês)](https://w3c.github.io/dwbp/dwbp-implementation-report.html) do Grupo de Trabalho.

Este documento foi revisado pelos Membros do W3C, por desenvolvedores de *softwares* além de outros grupos e partes interessadas do W3C, e foi endossado pelo Diretor como uma Recomendação do W3C. É um documento estável e pode ser utilizado como material de referência e citado em outro documento. O papel do W3C ao emitir uma Recomendação é chamar atenção para a especificação e promover sua ampla implementação. Isto aperfeiçoa a funcionalidade e a interoperabilidade da Web.

Este documento foi produzido por um grupo operando em conformidade com a <a href="https://www.w3.org/Consortium/Patent-Policy-20040205/" id="sotd_patent">Política de Patentes do W3C de 5 de Fevereiro de 2004 (em inglês)</a>. O W3C mantém uma [lista pública de patentes divulgadas (em inglês)](https://www.w3.org/2004/01/pp-impl/68239/status) relacionadas com os resultados do grupo, e tal página também contém as instruções para divulgação de patentes. Alguém que tenha conhecimento de uma patente que acredite conter [Reivindicações Essenciais (em inglês)](https://www.w3.org/Consortium/Patent-Policy-20040205/#def-essential) deverá divulgar as informações de acordo com a [seção 6 da Política de Patentes do W3C (em inglês)](https://www.w3.org/Consortium/Patent-Policy-20040205/#sec-Disclosure).

Este documento é regido pelo <a href="https://www.w3.org/2015/Process-20150901/" id="w3c_process_revision">Documento Processual de 1º de Setembro de 2015 do W3C (em inglês)</a>.

1.  <a href="#intro" class="tocxref"><span class="secno">1. </span>Introdução</a>
2.  <a href="#audience" class="tocxref"><span class="secno">2. </span>Público</a>
3.  <a href="#scope" class="tocxref"><span class="secno">3. </span>Escopo</a>
4.  <a href="#context" class="tocxref"><span class="secno">4. </span>Contexto</a>
5.  <a href="#namespaces" class="tocxref"><span class="secno">5. </span>Espaços de Nome</a>
6.  <a href="#bp-template" class="tocxref"><span class="secno">6. </span>Modelo de boas práticas</a>
7.  <a href="#bp-summary" class="tocxref"><span class="secno">7. </span>Sumário de Boas Práticas</a>
8.  <a href="#bestPractices" class="tocxref"><span class="secno">8. </span>As Boas Práticas</a>
    1.  <a href="#basicExample" class="tocxref"><span class="secno">8.1 </span>Exemplo</a>
    2.  <a href="#metadata" class="tocxref"><span class="secno">8.2 </span>Metadados</a>
    3.  <a href="#licenses" class="tocxref"><span class="secno">8.3 </span>Licença de Dados</a>
    4.  <a href="#provenance" class="tocxref"><span class="secno">8.4 </span>Procedência de Dados</a>
    5.  <a href="#quality" class="tocxref"><span class="secno">8.5 </span>Qualidade de Dados</a>
    6.  <a href="#dataVersioning" class="tocxref"><span class="secno">8.6 </span>Versionamento de Dados</a>
    7.  <a href="#DataIdentifiers" class="tocxref"><span class="secno">8.7 </span>Identificadores de Dados</a>
    8.  <a href="#dataFormats" class="tocxref"><span class="secno">8.8 </span>Formatos de Dados</a>
    9.  <a href="#dataVocabularies" class="tocxref"><span class="secno">8.9 </span>Vocabulários de Dados</a>
    10. <a href="#dataAccess" class="tocxref"><span class="secno">8.10 </span>Acesso a Dados</a>
        1.  <a href="#accessAPIs" class="tocxref"><span class="secno">8.10.1 </span>APIs de Acesso a Dados</a>
    11. <a href="#dataPreservation" class="tocxref"><span class="secno">8.11 </span>Preservação de Dados</a>
    12. <a href="#feedbacksection" class="tocxref"><span class="secno">8.12 </span><em>Feedback</em></a>
    13. <a href="#enrichment" class="tocxref"><span class="secno">8.13 </span>Enriquecimento de Dados</a>
    14. <a href="#Reuse" class="tocxref"><span class="secno">8.14 </span>Republicação de Dados</a>
9.  <a href="#glossary" class="tocxref"><span class="secno">9. </span>Glossário</a>
10. <a href="#challenges" class="tocxref"><span class="secno">10. </span>Desafios de Dados na Web</a>
11. <a href="#BP_Benefits" class="tocxref"><span class="secno">11. </span>Benefícios das Boas Práticas</a>
12. <a href="#requirements" class="tocxref"><span class="secno">12. </span>Requisitos e Casos de Uso x Boas Práticas</a>
13. <a href="#acknowledgements" class="tocxref"><span class="secno">A. </span>Agradecimentos</a>
14. <a href="#change-history" class="tocxref"><span class="secno">B. </span>Histórico de Modificações</a>
15. <a href="#references" class="tocxref"><span class="secno">C. </span>Referências</a>
    1.  <a href="#informative-references" class="tocxref"><span class="secno">C.1 </span>Referências Informativas</a>

<span property="xhv:role" resource="xhv:heading"><span class="secno">1. </span>Introdução</span>
------------------------------------------------------------------------------------------------

*Esta seção não é normativa.*

As Boas Práticas abaixo descritas foram desenvolvidas com o objetivo de estimular e possibilitar a expansão da Web como um ambiente para a troca de dados. O crescimento do compartilhamento online de dados abertos por parte de governos de todo o mundo \[<a href="#bib-OKFN-INDEX" class="bibref">OKFN-INDEX</a>\] \[<a href="#bib-ODB" class="bibref">ODB</a>\], a crescente publicação online de dados de pesquisa, encorajada por organizações tais como a *Research Data Alliance* \[<a href="#bib-RDA" class="bibref">RDA</a>\], a coleta, análise e publicação online de dados de mídias sociais, crowdsourcing de informações, a progressiva presença na Web de coleções importantes ao patrimônio cultural, tais como o acervo da *Bibliothèque nationale de France* \[<a href="#bib-BNF" class="bibref">BNF</a>\] e o crescimento sustentado na *Linked Open Data Cloud* \[<a href="#bib-LODC" class="bibref">LODC</a>\] são alguns dos exemplos desse crescimento do uso da Web para a publicação de dados.

No entanto, este crescimento não é consistente em termos de estilo e, em muitos casos, não faz pleno uso do potencial da Plataforma Aberta que é a Web para estabelecer conexões entre fatos, descobrir recursos relacionados e criar visualizações interativas.

Em termos gerais os publicadores de dados visam compartilhar dados seja de forma aberta ou por meio de acesso controlado. Por sua vez, os consumidores de dados (que também podem eles mesmos ser publicadores) querem ser capazes de encontrar, usar e relacionar os dados - especialmente se estes forem precisos, regularmente atualizados e tiverem disponibilidade garantida a qualquer momento. Isto leva a necessidade de se alcançar um entendimento comum entre os publicadores e os consumidores de dados. Sem este acordo, os esforços dos publicadores de dados podem se revelar incompatíveis com os desejos dos consumidores de dados.

A abertura e flexibilidade da Web cria novos desafios tanto para publicadores quanto para consumidores de dados, tais como representar, descrever e disponibilizar dados de maneira compreensível e fácil de encontrar. Diferentemente de bases de dados convencionais, por exemplo, em que há um único modelo de dados para representá-las e um sistema de gerenciamento de base de dados (do inglês *database management system*, DBMS) para controlar o acesso aos mesmos, os dados na Web permitem a existência de múltiplas formas de representação e acesso aos dados. Para maiores detalhes sobre os desafios veja a seção [Desafios de Dados na Web](#challenges).

Neste contexto torna-se fundamental prover diretrizes aos publicadores para que o gerenciamento de dados seja mais consistente. Tais orientações ajudam a promover a reutilização dos dados e a fortalecer a confiança nos dados entre os desenvolvedores - seja qual for a tecnologia que estes escolham - incrementando o potencial para inovações genuínas.

Entretanto, nem todos os dados devem ser compartilhados abertamente. A segurança, a sensibilidade comercial e, acima de tudo, a privacidade dos indivíduos devem ser levadas em consideração. Cabe aos publicadores de dados determinar as políticas por meio das quais os dados devem ser compartilhados - e sob quais circunstâncias. Espera-se que as políticas de compartilhamento de dados avaliem o risco de exposição e estabeleçam as medidas de segurança apropriadas para a proteção de dados sensíveis, tais como a autenticação segura e a autorização.

Dependendo das circunstâncias, informações sensíveis sobre indivíduos podem incluir nome completo, endereço residencial, endereço eletrônico, número de identificação nacional, endereço de IP, número de registro de veículo, número de carteira de motorista, rosto, impressões digitais ou de caligrafia, números de cartão de crédito, identidade digital, local de nascimento, informação genética, número de telefone, nomes de login, nome de tela, apelido, históricos de saúde, etc. Embora seja possível que o compartilhamento de algumas destas informações de forma aberta seja seguro, sobretudo em ambientes controlados, os publicadores devem ter em mente que a combinação de dados oriundos de múltiplas fontes pode permitir a identificação inadvertida de indivíduos.

Uma Boa Prática genérica para a publicação de dados na Web é o uso de padrões. Diferentes tipos de organizações especificam padrões que são particularmente dirigidos à publicação de conjuntos de dados relacionados a domínios e aplicações específicas, envolvendo comunidades de usuários interessados nestes dados. Estes padrões definem uma forma comum de comunicar informação entre os usuários destas comunidades. Por exemplo, existem dois padrões que podem ser utilizados para publicar horários de transporte público: o *General Transit Feed Specification* \[<a href="#bib-GTFS" class="bibref">GTFS</a>\] e o *Service Interface for Real Time Information* \[<a href="#bib-SIRI" class="bibref">SIRI</a>\]. Tais padrões especificam de maneira inter-relacionada, conceitos padronizados, formatos e acesso padronizados a dados. Outra Boa Prática genérica é a utilização do Unicode no trato dos caracteres e dos dados em string. O Unicode aprimora o processamento de texto multilíngue e facilita a localização de *softwares*.

As Boas Práticas abarcam diferentes aspectos relacionados à publicação e ao consumo de dados, tal como formatos de dados, acesso a dados, identificadores de dados e metadados. Com a intenção de delimitar o escopo e levantar as características e requisitos necessários para a elaboração de Boas Práticas para Dados na Web (do inglês *Data on the Web Best Practices*, DWBP), o grupo de trabalho DWBP compilou uma série de casos de uso, presentes no documento Requisitos e Casos de Uso das Boas Práticas para Dados na Web, do inglês *Data on the Web Best Practices Use Cases & Requirements* \[<a href="#bib-DWBP-UCR" class="bibref">DWBP-UCR</a>\], que representam cenários sobre como os dados são comumente publicados na Web e como são utilizados. Esta série de requisitos derivada dos casos de uso foi utilizada para orientar o desenvolvimento das Boas Práticas que independem do domínio e da aplicação. No entanto, elas podem ser estendidas ou complementadas por outros documentos ou padrões de Boas Práticas que tratem de contextos mais específicos. No que diz respeito aos vocabulários, por exemplo, a nota Boas Práticas para Publicação de Dados Conectados, do inglês *Best Practices for Publishing Linked Data,* \[<a href="#bib-LD-BP" class="bibref">LD-BP</a>\] do W3C, é uma boa referência. Existem recomendações específicas para expressar licenças, outras permissões e declarações de obrigações em ODRL \[<a href="#bib-ODRL-model" class="bibref">ODRL-model</a>\], um conjunto de padrões relacionados a procedência \[<a href="#bib-PROV-Overview" class="bibref">PROV-Overview</a>\] e as Boas Práticas aqui apresentadas, que foram estendidas para abarcar orientações mais específicas acerca da facilidade de descoberta, facilidade de acesso e interoperabilidade de dados espaciais e temporais da nota do W3C Boas Práticas para Dados Espaciais na Web, do inglês *Spatial Data on the Web Best Practices* \[<a href="#bib-SDW-BP" class="bibref">SDW-BP</a>\].

Mesmo que o DWBP recomende o uso de Dados Conectados, o documento também estimula boas práticas para dados na Web em outros formatos abertos, tais como o CSV. Métodos para o compartilhamento de dados tabulados, inclusive arquivos CSV, de modo a maximizar o potencial da Web para estabelecer links entre pontos de dados, são descritos no *Tabular Data Primer* \[<a href="#bib-Tabular-Data-Primer" class="bibref">Tabular-Data-Primer</a>\].

Com o objetivo de estimular os publicadores de dados a adotarem o DWBP, uma série de benefícios foram identificados: compreensão, facilidade de processamento, facilidade de descoberta, reúso, confiança, capacidade de conexão, facilidade de acesso e interoperabilidade. Tais benefícios foram descritos e relacionados às Boas Práticas na seção [Benefícios das Boas Práticas](#BP_Benefits).

<span property="xhv:role" resource="xhv:heading"><span class="secno">2. </span>Público</span>
---------------------------------------------------------------------------------------------

*Esta seção não é normativa.*

O presente documento define as Boas Práticas dirigidas especialmente àqueles que publicam dados na Web. As Boas Práticas foram elaboradas para atender à demanda das equipes de gestão de informações, desenvolvedores, além de grupos mais amplos, tais como cientistas que estejam interessados em compartilhar e reutilizar dados na Web. Ainda que os publicadores de dados sejam o nosso público principal, encorajamos todos os envolvidos em atividades correlatas a familiarizar-se com o tema. Realizamos todos os esforços possíveis no sentido de tornar este documento legível e utilizável - mantendo a precisão e a clareza que uma especificação técnica demanda.

Espera-se que os leitores deste documento estejam familiarizados com alguns conceitos fundamentais da arquitetura Web \[<a href="#bib-WEBARCH" class="bibref">WEBARCH</a>\], tais como os recursos e os URIs, assim como com uma série de formatos de dados. O elemento normativo de cada Boa Prática é o *resultado pretendido.* Algumas implementações possíveis também são sugeridas e, quando apropriado, tais implementações recomendam a utilização de uma tecnologia específica. Um conhecimento básico de vocabulários e modelos de dados é útil para entender melhor alguns aspectos deste documento.

<span property="xhv:role" resource="xhv:heading"><span class="secno">3. </span>Escopo</span>
--------------------------------------------------------------------------------------------

*Esta seção não é normativa.*

Este documento trata somente de Boas Práticas que:

-   são especificamente relevantes para os dados publicados na Web;
-   incentivam a publicação ou reutilização de dados na Web;
-   possam ser testadas por máquinas, pessoas ou por uma combinação de ambos.

Conforme mencionado acima, a avaliação de que uma Boa Prática foi seguida ou não deve ser realizada à luz do *resultado pretendido* e não sob a perspectiva da *possível abordagem à implementação*, que é indicada no detalhamento de cada Boa Prática apenas como orientação. Uma Boa Prática está sempre sujeita a melhorias, uma vez que, juntos, aprendemos e desenvolvemos a Web.

<span property="xhv:role" resource="xhv:heading"><span class="secno">4. </span>Contexto</span>
----------------------------------------------------------------------------------------------

*Esta seção não é normativa.*

O diagrama a seguir ilustra o contexto levado em consideração neste documento. Em geral, as Boas Práticas propostas para a publicação e o uso de Dados na Web tratam de [conjunto de dados](#dataset) e [distribuições](#distribution). Os dados são publicados em diversas distribuições, que são a forma física específica de um conjunto de dados. Quando nos referimos a dados “queremos dizer: fatos conhecidos que podem ser gravados e que têm significado implícito” \[<a href="#bib-Navathe" class="bibref">Navathe</a>\]. Estas distribuições facilitam o compartilhamento de dados em larga escala, o que viabiliza que conjuntos de dados sejam utilizados por diversos grupos de [consumidores de dados](#data_consumer), independentemente do propósito, público, interesse ou licença. Considerando esta heterogeneidade e o fato de que os publicadores e consumidores de dados possam não se conhecer, faz-se necessário o fornecimento de algumas informações sobre os conjuntos de dados e distribuições, de forma a promover a confiabilidade e a reutilização, tais como: metadados estruturais, metadados descritivos, informações de acesso, informações de qualidade de dados, informações de procedência, informações de licença e informações de uso.

Um aspecto importante da publicação e compartilhamento de dados na Web diz respeito à base arquitetônica da Web \[<a href="#bib-WEBARCH" class="bibref">WEBARCH</a>\]. O princípio de identificação que diz que os URIs devem ser utilizados para identificar recursos decorre desta base arquitetônica. No nosso contexto, um recurso pode ser um conjunto de dados completo ou um item específico de um determinado conjunto de dados. Todos os recursos devem ser publicados com URIs estáveis, de forma que possam ser referenciados e compor conexões entre dois ou mais recursos por meio de URIs. Por último, para promover a interoperabilidade entre os conjuntos de dados, é importante adotar vocabulários de dados e padrões.

Publicação de dados na Web Conjunto de dados Metadados possui Distribuição 1 Conteúdo Metadados … possui Distribuição n Conteúdo Metadados usa Princípios Arquiteturais Web usa Vocabulários e Padrões

<span property="xhv:role" resource="xhv:heading"><span class="secno">5. </span> Espaços de Nome </span>
-------------------------------------------------------------------------------------------------------

*Esta seção não é normativa.*

Os seguintes prefixos de espaços de nome, do inglês *namespaces*, são utilizados ao longo de todo este documento.

<table><caption> Espaços de nome utilizados neste documento </caption><thead><tr class="header"><th>Prefixo</th><th>Espaço de Nome IRI</th><th>Descrição</th></tr></thead><tbody><tr class="odd"><td>dcat</td><td>https://www.w3.org/ns/dcat#</td><td><a href="#bib-VOCAB-DCAT"><em>Data Catalog Vocabulary</em> (DCAT)</a></td></tr><tr class="even"><td>dct</td><td>https://purl.org/dc/terms/</td><td><a href="#bib-DCTERMS"><em>Dublin Core Metadata Initiative</em> (DCMI)</a></td></tr><tr class="odd"><td>dqv</td><td>https://www.w3.org/ns/dqv#</td><td><a href="#bib-VOCAB-DQV">DWBP <em>Data Quality Vocabulary</em> (DQV)</a></td></tr><tr class="even"><td>duv</td><td>https://www.w3.org/ns/duv#</td><td><a href="#bib-VOCAB-DUV">DWBP <em>Dataset Usage Vocabulary</em> (DUV)</a></td></tr><tr class="odd"><td>foaf</td><td>https://xmlns.com/foaf/0.1/</td><td><a href="#bib-FOAF"><em>Friend of a Friend Vocabulary</em> (FOAF)</a></td></tr><tr class="even"><td>oa</td><td>https://www.w3.org/ns/oa#</td><td><a href="#bib-Annotation-Model"><em>Web Annotation Ontology</em></a></td></tr><tr class="odd"><td>owl</td><td>https://www.w3.org/2002/07/owl#</td><td><a href="#bib-OWL2-OVERVIEW"><em>Web Ontology Language</em> (OWL)</a></td></tr><tr class="even"><td>pav</td><td>https://pav-ontology.github.io/pav/</td><td><a href="#bib-PAV"><em>Provenance, Authoring and versioning Ontology</em> (PAV)</a></td></tr><tr class="odd"><td>prov</td><td>https://www.w3.org/ns/prov#</td><td><a href="#bib-PROV-O"><em>Provenance Ontology</em> (PROV)</a></td></tr><tr class="even"><td>rdf</td><td>https://www.w3.org/1999/02/22-rdf-syntax-ns#</td><td><em>Resource Description Framework</em> (RDF)</td></tr><tr class="odd"><td>rdfs</td><td>https://www.w3.org/2000/01/rdf-schema#</td><td><a href="#bib-RDF-SCHEMA">RDF Schema (RDFS)</a></td></tr><tr class="even"><td>skos</td><td>https://www.w3.org/2004/02/skos/core#</td><td><a href="#bib-SKOS-PRIMER"><em>Simple Knowledge Organization System</em> (SKOS)</a></td></tr></tbody></table>

<span property="xhv:role" resource="xhv:heading"><span class="secno">6. </span> Modelo de Boas Práticas </span>
---------------------------------------------------------------------------------------------------------------

Esta seção apresenta o modelo utilizado para descrever as Boas Práticas para Dados na Web.

<span id="template" class="tempPracticelab">Modelo de Boa Prática</span>

Breve descrição da BP

#### <span property="xhv:role" resource="xhv:heading">Porque</span>

Essa seção responde a duas perguntas cruciais:

-   Por que este tema é especificamente relevante para a publicação ou para o reúso de dados na Web?
-   Como esta iniciativa estimula a publicação ou o reúso de dados na Web?

Um texto com a descrição completa do problema abordado pela Boa Prática também pode ser fornecido. O texto pode ter qualquer tamanho, mas é provável que não tenha mais que algumas sentenças.

#### <span property="xhv:role" resource="xhv:heading">Resultado Pretendido</span>

O que deve ser possível alcançar quando um publicador de dados segue as Boas Práticas.

#### <span property="xhv:role" resource="xhv:heading">Possível Abordagem para Implementação </span>

Descrição de uma possível estratégia de implementação. Esta representa a melhor recomendação disponível no momento em que este documento foi escrito, mas circunstâncias específicas e desenvolvimentos futuros poderão denotar que métodos alternativos de implementação sejam mais apropriados para se obter o resultado pretendido.

#### <span property="xhv:role" resource="xhv:heading">Como Testar</span>

Informações sobre como testar se a BP foi cumprida. Os testes podem ser realizados por máquinas ou não.

#### <span property="xhv:role" resource="xhv:heading">Evidência</span>

Informações sobre a relevância da BP. É descrita por um ou mais requisitos relevantes, tal qual registrado no documento Requisitos e Casos de Uso das Boas Práticas para Dados na Web, do inglês *Data on the Web Best Practices Use Cases & Requirements* \[<a href="#bib-DWBP-UCR" class="bibref">DWBP-UCR</a>\].

#### <span property="xhv:role" resource="xhv:heading">Benefícios</span>

Um [benefício](#BP_Benefits) representa uma melhoria na forma como conjuntos de dados são disponibilizados na Web. Uma Boa Prática pode ter um ou mais benefícios.

-   Reuse
-   Comprehension
-   Linkability
-   Discoverability
-   Trust
-   Access
-   Interoperability
-   Processability
-   <img src="https://www.w3c.br/dwbp/images/reuse.svg" alt="Reuse" class="benefitIcon reuseIcon" />
-   <img src="https://www.w3c.br/dwbp/images/comprehension.svg" alt="Comprehension" class="benefitIcon comprehensionIcon" />
-   <img src="https://www.w3c.br/dwbp/images/linkability.svg" alt="Linkability" class="benefitIcon linkabilityIcon" />
-   <img src="https://www.w3c.br/dwbp/images/discoverability.svg" alt="Discoverability" class="benefitIcon discoverabilityIcon" />
-   <img src="https://www.w3c.br/dwbp/images/trust.svg" alt="Trust" class="benefitIcon interoperabilityIcon" />
-   <img src="https://www.w3c.br/dwbp/images/access.svg" alt="Access" class="benefitIcon accessIcon" />
-   <img src="https://www.w3c.br/dwbp/images/interoperability.svg" alt="Interoperability" class="benefitIcon interoperabilityIcon" />
-   <img src="https://www.w3c.br/dwbp/images/processability.svg" alt="Processability" class="benefitIcon interoperabilityIcon" />

<span property="xhv:role" resource="xhv:heading"><span class="secno">7. </span> Sumário de Boas Práticas </span>
----------------------------------------------------------------------------------------------------------------

-   [Boa Prática 1](#ProvideMetadata): Fornecer metadados
-   [Boa Prática 2](#DescriptiveMetadata): Fornecer metadados descritivos
-   [Boa Prática 3](#StructuralMetadata): Fornecer metadados estruturais
-   [Boa Prática 4](#DataLicense): Fornecer informações sobre a licença de dados
-   [Boa Prática 5](#DataProvenance): Fornecer informações de procedência dos dados
-   [Boa Prática 6](#DataQuality): Fornecer informações de qualidade de dados
-   [Boa Prática 7](#VersioningInfo): Fornecer indicador de versão
-   [Boa Prática 8](#VersionHistory): Fornecer o histórico de versão
-   [Boa Prática 9](#UniqueIdentifiers): Usar URIs persistentes como identificadores de conjuntos de dados
-   [Boa Prática 10](#identifiersWithinDatasets): Usar URIs persistentes como identificadores dentro de conjuntos de dados
-   [Boa Prática 11](#VersionIdentifiers): Atribuir URIs para as versões dos conjuntos de dados e séries
-   [Boa Prática 12](#dataFormats): Usar formatos de dados padronizados legíveis por máquinas
-   [Boa Prática 13](#LocaleParametersMetadata): Usar representações de dados que sejam independentes de localidade *(locale neutral)*
-   [Boa Prática 14](#MultipleFormats): Fornecer dados em formatos múltiplos
-   [Boa Prática 15](#ReuseVocabularies): Reutilizar vocabulários, dando preferência aos padronizados
-   [Boa Prática 16](#ChooseRightFormalizationLevel): Escolher o nível de formalização adequado
-   [Boa Prática 17](#BulkAccess): Fornecer *download* em massa *(bulk download)*
-   [Boa Prática 18](#ProvideSubsets): Fornecer subconjuntos para conjuntos de dados extensos
-   [Boa Prática 19](#Conneg): Usar negociação de conteúdo para disponibilizar dados em formatos múltiplos
-   [Boa Prática 20](#AccessRealTime): Fornecer acesso em tempo real
-   [Boa Prática 21](#AccessUptoDate): Fornecer dados atualizados
-   [Boa Prática 22](#DataUnavailabilityReference): Fornecer uma explicação para os dados que não estão disponíveis
-   [Boa Prática 23](#useanAPI): Disponibilizar dados por meio de uma API
-   [Boa Prática 24](#APIHttpVerbs): Usar padrões Web como base para construção de APIs
-   [Boa Prática 25](#documentYourAPI): Fornecer documentação completa para as APIs
-   [Boa Prática 26](#avoidBreakingChangesAPI): Evitar alterações que afetem o funcionamento de sua API
-   [Boa Prática 27](#ResourceStatus): Preservar identificadores
-   [Boa Prática 28](#EvaluateCoverage): Avaliar a cobertura do conjunto de dados
-   [Boa Prática 29](#GatherFeedback): Coletar *feedback* de consumidores de dados
-   [Boa Prática 30](#FeedbackInformation): Compartilhar o *feedback* disponível
-   [Boa Prática 31](#EnrichData): Enriquecer dados por meio da geração de novos dados
-   [Boa Prática 32](#ProvideComplementaryPresentations): Fornecer visualizações complementares
-   [Boa Prática 33](#ProvideFeedbackToPublisher): Fornecer *feedback* para o publicador original
-   [Boa Prática 34](#FollowLicensingTerms): Obedecer os termos de licença
-   [Boa Prática 35](#CiteOriginalPublication): Citar a publicação original do conjunto de dados

<span property="xhv:role" resource="xhv:heading"><span class="secno">8. </span>As Boas Práticas</span>
------------------------------------------------------------------------------------------------------

Esta seção apresenta as Boas Práticas a serem utilizadas por publicadores de dados para auxiliar tanto estes quanto os consumidores de dados, com vista a superar os diferentes desafios enfrentados ao se publicar e consumir dados na Web. Para cada um dos desafios uma ou mais Boas Práticas foram propostas, conforme descritas na seção [Desafios de Dados na Web](#challenges).

Cada BP é relacionada a um ou mais requisitos presentes no documento Requisitos e Casos de Uso das Boas Práticas para Dados na Web, do inglês *Data on the Web Best Practices Use Cases & Requirements* \[<a href="#bib-DWBP-UCR" class="bibref">DWBP-UCR</a>\], que serviu de guia para o seu desenvolvimento. Cada Boa Prática apresenta pelo menos um destes requisitos como evidência de sua relevância.

### <span property="xhv:role" resource="xhv:heading"><span class="secno">8.1 </span>Exemplo de Execução</span>

Adrian trabalha para a Agência de Transportes MyCity e é responsável pela publicação de dados sobre transporte público. Adrian quer publicar estes dados para diferentes tipos de consumidores de dados, tais como desenvolvedores interessados em criar aplicações e também para agentes de *software*. É importante que tanto pessoas quanto agentes de *software* possam compreender e processar dados com facilidade, os quais, por sua vez, devem ser mantidos atualizados e disponibilizados de modo que sejam facilmente descobertos na Web.

Exemplos em RDF da aplicação de algumas Boas Práticas são demonstrados utilizando Turtle \[<a href="#bib-Turtle" class="bibref">Turtle</a>\] ou JSON-LD \[<a href="#bib-JSON-LD" class="bibref">JSON-LD</a>\].

### <span property="xhv:role" resource="xhv:heading"><span class="secno">8.2 </span>Metadados</span>

A Web é um espaço aberto de informações, onde a ausência de um contexto específico, tal como o sistema de informações interno de uma empresa, indica que o fornecimento de metadados é um requisito fundamental. Caso os metadados fornecidos sejam insuficientes, os dados não serão descobertos ou reutilizados por ninguém além do próprio publicador. Os metadados proporcionam informações adicionais que auxiliam os consumidores de dados a compreender melhor o significado dos dados e sua estrutura, além de esclarecer outros temas, tais como direitos e termos da licença, detalhes sobre a organização que gerou os dados, a qualidade dos dados, os métodos de acesso aos dados e o agendamento da atualização dos conjuntos de dados. Os publicadores são incentivados a fornecer informações que sejam legíveis por pessoas em diversos idiomas e, na medida do possível, oferecer as informações por meio de uma linguagem (ou linguagens) que os usuários possam compreender.

Os metadados podem ser utilizados para auxiliar a realização de tarefas tais como a descoberta e reutilização de conjuntos de dados, e podem ser designados de forma a considerar diferentes níveis de granularidade: desde uma propriedade singular de um recurso, até de um conjunto de dados completo ou até mesmo de todos os conjuntos de dados de uma organização específica. Os metadados também podem ser de diversos tipos. Estes tipos podem ser classificados em taxonomias diferentes, seguindo diferentes critérios de agrupamento. Por exemplo, uma taxonomia específica poderia definir três tipos de metadados de acordo com características descritivas, estruturais e administrativas. Uma taxonomia diferente, por sua vez, poderia definir tipos de metadados de acordo com as tarefas nas quais os metadados são utilizados, como por exemplo, a descoberta e reutilização.

<span id="ProvideMetadata" class="practicelab">Boa Prática 1: Fornecer metadados</span>

Fornecer metadados tanto para usuários pessoas quanto para aplicações de computadores.

#### <span property="xhv:role" resource="xhv:heading">Porque</span>

Fornecer metadados é um requisito fundamental na publicação de dados na Web, porque os publicadores de dados e os consumidores de dados podem não se conhecer mutuamente. Portanto, é essencial fornecer informações que auxiliem pessoas e aplicações de computadores a compreenderem os dados, assim como outros aspectos importantes que descrevam o conjunto de dados ou a distribuição.

#### <span property="xhv:role" resource="xhv:heading">Resultado Pretendido</span>

Pessoas serão capazes de compreender os metadados e as aplicações de computadores, especialmente agentes de *software* - responsáveis pela mediação do usuário com a aplicação -, serão capazes de processá-los.

#### <span property="xhv:role" resource="xhv:heading">Possível Abordagem para Implementação</span>

Abordagens possíveis para fornecer *metadados legíveis por pessoas:*

-   fornecer metadados como parte de uma página Web HTML
-   fornecer metadados como um arquivo de texto separado

Possíveis abordagens para o fornecimento de *metadados legíveis por máquina:*

-   metadados legíveis por máquinas podem ser fornecidos em um formato seriado, tal como Turtle ou JSON, ou podem ser incorporados na página de HTML utilizando \[<a href="#bib-HTML-RDFA" class="bibref">HTML-RDFA</a>\] ou \[<a href="#bib-JSON-LD" class="bibref">JSON-LD</a>\]. No caso de múltiplos formatos serem publicados de forma separada, estes devem ser disponibilizados a partir do mesmo URL. Isto deve ser feito por meio de [negociação de conteúdo, do inglês *content negotiation* (em inglês)](https://www.w3.org/Protocols/HTTP/Negotiation), disponibilizando-os sob URIs separados e distintos pelo nome de extensão do arquivo. A manutenção de múltiplos formatos é mais facilmente alcançada por meio da geração de cada formato disponível no momento, com base em uma única fonte de metadados.
-   ao definir os metadados legíveis por máquinas, recomenda-se fortemente reutilizar termos oriundos de padrões e vocabulários populares já existentes. Por exemplo, os termos \[<a href="#bib-DCTERMS" class="bibref">DCTERMS</a>\] *Dublin Core Metadata* (DCMI), e o *Data Catalog Vocabulary* \[<a href="#bib-VOCAB-DCAT" class="bibref">VOCAB-DCAT</a>\] podem ser utilizados para fornecer metadados descritivos. Tais vocabulários foram elaborados para serem extremamente flexíveis, portanto geralmente é muito conveniente utilizar um *perfil* específico ou um vocabulário tal qual o [DCAT-AP (em inglês)](https://joinup.ec.europa.eu/asset/dcat_application_profile/description) da Comissão Europeia.

EXEMPLO 1

#### Dados legíveis por pessoas

[Página de exemplo (em inglês)](https://www.w3.org/TR/dwbp/dwbp-example.html) apresentando uma descrição legível por pessoas de um conjunto de dados disponível.

#### Legível por máquina

[Arquivo de exemplo (em inglês)](https://www.w3.org/TR/dwbp/dwbp-example.ttl) apresentando uma descrição legível por máquina de um conjunto de dados disponível.

#### <span property="xhv:role" resource="xhv:heading">Como Testar</span>

Verifique se os metadados legíveis por pessoas estão disponíveis.

Verifique se os metadados estão disponíveis em um formato válido legível por máquina e sem erros de sintaxe.

#### <span property="xhv:role" resource="xhv:heading">Evidências</span>

Requisitos Relevantes: [R-MetadataAvailable (em inglês)](https://www.w3.org/TR/dwbp-ucr/#R-MetadataAvailable), [R-MetadataDocum (em inglês)](https://www.w3.org/TR/dwbp-ucr/#R-MetadataDocum), [R-MetadataMachineRead (em inglês)](https://www.w3.org/TR/dwbp-ucr/#R-MetadataMachineRead)

#### <span property="xhv:role" resource="xhv:heading">Benefícios</span>

-   R - Reúso (Reuse)
-   C - Compreensão (Comprehension)
-   D - Facilidade de descoberta (Discoverability)
-   P - Facilidade de processamento (Processability)
-   <img src="https://www.w3c.br/dwbp/images/reuse.svg" alt="Reuse" class="benefitIcon reuseIcon" />
-   <img src="https://www.w3c.br/dwbp/images/comprehension.svg" alt="Comprehension" class="benefitIcon comprehensionIcon" />
-   <img src="https://www.w3c.br/dwbp/images/discoverability.svg" alt="Discoverability" class="benefitIcon discoverabilityIcon" />
-   <img src="https://www.w3c.br/dwbp/images/processability.svg" alt="Processability" class="benefitIcon interoperabilityIcon" />

<span id="DescriptiveMetadata" class="practicelab"> Boa Prática 2: Fornecer metadados descritivos </span>

Fornecer metadados que descrevam as características gerais dos conjuntos de dados e das distribuições.

#### <span property="xhv:role" resource="xhv:heading">Porque</span>

Fornecer informações descritivas de conjuntos de dados de forma explícita possibilita que agentes de *software* descubram automaticamente conjuntos de dados disponíveis na Web, e isto permite que pessoas compreendam a natureza do conjunto de dados e suas distribuições.

#### <span property="xhv:role" resource="xhv:heading">Resultado Pretendido</span>

Pessoas serão capazes de interpretar a natureza do conjunto de dados e suas distribuições, e os agentes de *software* poderão automaticamente descobrir conjuntos de dados e distribuições.

#### <span property="xhv:role" resource="xhv:heading">Possível Abordagem para Implementação</span>

Os metadados descritivos podem incluir as seguintes características genéricas de um conjunto de dados:

-   O **título** e a **descrição** do conjunto de dados.
-   As **palavras-chave** que descrevem o conjunto de dados.
-   A **data de publicação** do conjunto de dados.
-   A **entidade responsável (publicadora de dados)** por disponibilizar o conjunto de dados.
-   O **ponto de contato** para o conjunto de dados.
-   A **cobertura espacial** do conjunto de dados.
-   O **período temporal** coberto pelo conjunto de dados.
-   A **data da última modificação** do conjunto de dados.
-   Os **temas/categorias** cobertos por um conjunto de dados.

Os metadados descritivos podem incluir as seguintes características genéricas de uma distribuição:

-   O **título** e a **descrição** da distribuição.
-   A **data da publicação** da distribuição.
-   O **formato de mídia** da distribuição.

A versão legível por máquina dos metadados descritivos pode ser disponibilizada utilizando o vocabulário recomendado pelo W3C para descrever conjuntos de dados, como, por exemplo, o *Data Catalog Vocabulary* \[<a href="#bib-VOCAB-DCAT" class="bibref">VOCAB-DCAT</a>\]. Isto estabelece uma estrutura na qual os conjuntos de dados podem ser descritos como entidades abstratas.

EXEMPLO 2

#### Legível por máquina

O exemplo abaixo demonstra como utilizar \[<a href="#bib-VOCAB-DCAT" class="bibref">VOCAB-DCAT</a>\] para fornecer metadados de facilitação de **descoberta** legíveis por máquina para o conjunto de dados dos pontos de ônibus (`stops-2015-05-05`). O conjunto de dados possui uma distribuição CSV (`stops-2015-05-05.csv`) que também é descrita utilizando o \[<a href="#bib-VOCAB-DCAT" class="bibref">VOCAB-DCAT</a>\]. O conjunto de dados é então classificado sob o domínio representado pelo URI relativo `mobilidade`, do inglês *` mobility`*. Este domínio pode ser definido como parte de um conjunto de domínios identificado pelos `temas`, do inglês *` themes`*, dos URIs. Para descrever tanto o conceito quanto o esquema de conceitos, Adrian utilizou [SKOS (em inglês)](https://www.w3.org/TR/skos-primer/). Para descrever a frequência de atualização foi usada uma instância das [*Content-Oriented Guidelines* (em inglês)](https://www.w3.org/TR/vocab-data-cube/#dsd-cog), que foram desenvolvidas como parte dos esforços do vocabulário do W3C *Data Cube Vocabulary*. Adrian escolheu descrever as coberturas espacial e temporal do conjunto de dados do exemplo utilizando URIs do [*Geonames* (em inglês)](https://www.geonames.org/) e o [*Time Intervals dataset* (em inglês)](https://data.gov.uk/dataset/time-intervals) do data.gov.uk, respectivamente.

      :stops-2015-05-05
          a dcat:Dataset ;
          dct:title "Bus stops of MyCity" ;
          dcat:keyword "transport","mobility","bus" ;
          dct:issued "2015-05-05"^^xsd:date ;
          dcat:contactPoint <http://data.mycity.example.com/transport/contact> ;
          dct:temporal <http://reference.data.gov.uk/id/year/2015> ;
          dct:spatial <http://sws.geonames.org/3399415> ;
          dct:language <http://id.loc.gov/vocabulary/iso639-1/en> ;
          dct:accrualPeriodicity <http://purl.org/linked-data/sdmx/2009/code#freq-A> ;
          dcat:theme :mobility ;
          dcat:distribution :stops-2015-05-05.csv
          .

      :mobility
          a skos:Concept ;
          skos:inScheme :themes ;
          skos:prefLabel "Mobility"@en ;
          skos:prefLabel "Mobilidade"@pt
          .

      :themes
          a skos:ConceptScheme ;
          skos:prefLabel "A set of domains to classify documents"
          .

      :stops-2015-05-05.csv
          a dcat:Distribution ;
          dct:title "CSV distribution of stops-2015-05-05 dataset" ;
          dct:description "CSV distribution of the bus stops dataset of MyCity" ;
          dcat:mediaType "text/csv;charset=UTF-8"
          .

#### Legível por pessoas

[Página de exemplo (em inglês)](https://www.w3.org/TR/dwbp/dwbp-example.html#dataset-description) apresentando uma descrição do conjunto de dados legível por pessoas.

#### <span property="xhv:role" resource="xhv:heading">Como Testar</span>

Verifique se os metadados do conjunto de dados incluem as características genéricas do conjunto de dados em formato legível por pessoas.

Verifique se os metadados descritivos estão disponíveis em um formato válido legível por máquina.

#### <span property="xhv:role" resource="xhv:heading">Evidência</span>

Requisitos Relevantes: [R-MetadataAvailable (em inglês)](https://www.w3.org/TR/dwbp-ucr/#R-MetadataAvailable), [R-MetadataMachineRead (em inglês)](https://www.w3.org/TR/dwbp-ucr/#R-MetadataMachineRead), [R-MetadataStandardized (em inglês)](https://www.w3.org/TR/dwbp-ucr/#R-MetadataStandardized)

#### <span property="xhv:role" resource="xhv:heading">Benefícios</span>

-   R - Reúso (Reuse)
-   C - Compreensão (Comprehension)
-   D - Facilidade de descoberta (Discoverability)
-   <img src="https://www.w3c.br/dwbp/images/reuse.svg" alt="Reuse" class="benefitIcon reuseIcon" />
-   <img src="https://www.w3c.br/dwbp/images/comprehension.svg" alt="Comprehension" class="benefitIcon comprehensionIcon" />
-   <img src="https://www.w3c.br/dwbp/images/discoverability.svg" alt="Discoverability" class="benefitIcon discoverabilityIcon" />

<span id="StructuralMetadata" class="practicelab"> Boa Prática 3: Fornecer metadados estruturais </span>

Fornecer metadados que descrevam o esquema e a estrutura interna de uma distribuição.

#### <span property="xhv:role" resource="xhv:heading">Porque</span>

Fornecer informações sobre a estrutura interna de uma distribuição é fundamental para outros que desejem explorar ou consultar o conjunto de dados. Também auxilia as pessoas a compreender o significado dos dados.

#### <span property="xhv:role" resource="xhv:heading">Resultado Pretendido</span>

Pessoas serão capazes de interpretar o esquema de um conjunto de dados e os agentes de *software* serão capazes de processar as distribuições automaticamente.

#### <span property="xhv:role" resource="xhv:heading">Possível Abordagem para Implementação</span>

Os metadados estruturais legíveis por pessoas geralmente fornecem as propriedades ou as colunas do esquema do conjunto de dados.

Os metadados estruturais legíveis por máquina são disponibilizados de acordo com o formato de uma distribuição específica e podem ser fornecidos dentro de documentos separados ou incorporados ao documento. Para maiores detalhes, acesse os links abaixo:

-   Dados Tabulares: acesse [*Model for Tabular Data and Metadata on the Web* (em inglês)](https://www.w3.org/TR/tabular-data-model/#locating-metadata)
-   JSON-LD: acesse [JSON-LD 1.0 (em inglês)](https://www.w3.org/TR/json-ld/)
-   XML: acesse [XML Schema (em inglês)](https://www.w3.org/XML/Schema)
-   Dados multidimensionais: acesse [*Data Cube* (em inglês)](https://www.w3.org/TR/vocab-data-cube/)

EXEMPLO 3

#### Legível por máquina

Adrian utilizou o [*Model for Tabular Data and Metadata on the Web* (em inglês)](https://www.w3.org/TR/2015/REC-tabular-data-model-20151217/) para a publicação da distribuição CSV do conjunto de dados de pontos de ônibus (`stops-2015-05-05.cvs`). O exemplo abaixo apresenta os metadados estruturais para essa distribuição.

    {
      "@context": ["https://www.w3.org/ns/csvw", {
        "@language": "en"
      }],
      "url": "https://data.mycity.example.com/transport/dataset/bus/stops-2015-05-05.csv",
      "dct:title": "CSV distribution of stops-2015-05-05 dataset",
      "dcat:keyword": ["bus", "stop", "mobility"],
      "dct:publisher": {
        "schema:name": "Transport Agency of MyCity",
        "schema:url": {
          "@id": "https://example.org"
        }
      },
      "dct:license": {
        "@id": "https://opendefinition.org/licenses/cc-by/"
      },
      "dct:issued": {
        "@value": "2015-05-05",
        "@type": "xsd:date"
      },
      "tableSchema": {
        "columns": [{
          "name": "stop_id",
          "titles": "Identifier",
          "dct:description": "An identifier for the bus stop.",
          "datatype": "string",
          "required": true
        }, {
          "name": "stop_name",
          "titles": "Name",
          "dct:description": "The name of the bus stop.",
          "datatype": "string"
        }, {
          "name": "stop_desc",
          "titles": "Description",
          "dct:description": "A description for the bus stop.",
          "datatype": "string"
        }, {
          "name": "stop_lat",
          "titles": "Latitude",
          "dct:description": "The latitude of the bus stop.",
          "datatype": "number"
        }, {
          "name": "stop_long",
          "titles": "Longitude",
          "dct:description": "The longitude of the bus stop.",
          "datatype": "number"
        }, {
          "name": "zone_id",
          "titles": "ZONE",
          "dct:description": "An identifier for the zone where the bus stop is located.",
          "datatype": "string"
        }, {
          "name": "stop_url",
          "titles": "URL",
          "dct:description": "URL that identifies the bus stop.",
          "datatype": "anyURI"
        }],
        "primaryKey": "stop_id"
      }
    }

#### Legível por pessoas

[Página de exemplo (em inglês)](https://www.w3.org/TR/dwbp/dwbp-example.html#dataset-structural-metadata) com a descrição do conjunto de dados legível por pessoas.

#### <span property="xhv:role" resource="xhv:heading">Como Testar</span>

Verifique se os metadados estruturais estão disponibilizados em um formato legível por pessoas.

Verifique se os metadados da distribuição incluem as informações estruturais sobre o conjunto de dados em um formato legível por máquina e sem erros de sintaxe.

#### <span property="xhv:role" resource="xhv:heading">Evidências</span>

Requisitos Relevantes: [R-MetadataAvailable (em inglês)](https://www.w3.org/TR/dwbp-ucr/#R-MetadataAvailable)

#### <span property="xhv:role" resource="xhv:heading">Benefícios</span>

-   R - Reúso (Reuse)
-   C - Compreensão (Comprehension)
-   P - Facilidade de processamento (Processability)
-   <img src="https://www.w3c.br/dwbp/images/reuse.svg" alt="Reuse" class="benefitIcon reuseIcon" />
-   <img src="https://www.w3c.br/dwbp/images/comprehension.svg" alt="Comprehension" class="benefitIcon comprehensionIcon" />
-   <img src="https://www.w3c.br/dwbp/images/processability.svg" alt="Processability" class="benefitIcon interoperabilityIcon" />

### <span property="xhv:role" resource="xhv:heading"><span class="secno">8.3 </span>Licença de Dados</span>

A [licença](#license) é uma informação muito útil e deve ser anexada aos dados na Web. Dependendo do tipo de licença adotado pelo publicador, pode haver mais ou menos restrições no que diz respeito ao compartilhamento e à reutilização dos dados. No contexto dos dados na Web, a licença de um conjunto de dados pode ser especificada dentro ou fora dos metadados, ou em um documento separado ao qual esteja conectado.

<span id="DataLicense" class="practicelab">Boa Prática 4: Fornecer informações sobre a licença de dados</span>

Fornecer um link ou uma cópia dos termos da licença que controla a utilização dos dados.

#### <span property="xhv:role" resource="xhv:heading">Porque</span>

Disponibilizar informações de licença é fundamental para que os consumidores de dados avaliem a utilidade dos dados. Os agentes de *software* podem utilizar a presença/ausência das informações de licença como um gatilho para a inclusão ou exclusão de dados apresentados a um consumidor em potencial.

#### <span property="xhv:role" resource="xhv:heading">Resultado Pretendido</span>

Pessoas serão capazes de compreender a licença de dados, que descreve eventuais restrições impostas à utilização de certos dados, e agentes de *software* serão capazes de detectar automaticamente a licença de dados de uma distribuição.

#### <span property="xhv:role" resource="xhv:heading">Possível Abordagem para Implementação</span>

As informações sobre a licença de dados podem ser disponibilizadas por meio de um link ou de uma cópia embutida dos termos da licença que seja legível por pessoas. Também podem ser disponibilizadas para processamento um link ou cópia embutida dos termos da licença legível por máquina.

Os seguintes vocabulários, que incluem propriedades para vincular uma licença, podem ser usados:

-   Dublin Core \[<a href="#bib-DCTERMS" class="bibref">DCTERMS</a>\] (`dct:license`)
-   *Creative Commons* \[<a href="#bib-CCREL" class="bibref">CCREL</a>\] (`cc:license`)
-   schema.org \[<a href="#bib-SCHEMA-ORG" class="bibref">SCHEMA-ORG</a>\] (`schema:license`)
-   XHTML \[<a href="#bib-XHTML-VOCAB" class="bibref">XHTML-VOCAB</a>\] (`xhtml:license`)

Também existe uma série de linguagens legíveis por máquinas que expressam direitos de propriedade intelectual, tais como:

-   A *Creative Commons Rights Expression Language* \[<a href="#bib-CCREL" class="bibref">CCREL</a>\]
-   A *Open Digital Rights Language* \[<a href="#bib-ODRL-model" class="bibref">ODRL-model</a>\]
-   A *Open Data Rights Statement Vocabulary* \[<a href="#bib-ODRS" class="bibref">ODRS</a>\]

EXEMPLO 4

#### Legível por máquina

A distribuição CSV de um conjunto de dados referentes aos pontos de ônibus (`stops-2015-05-05.csv`) será publicada sob a licença [Creative Commons Attribution-ShareAlike 3.0 Unported (em inglês)](https://creativecommons.org/licenses/by-sa/3.0/). A licença proprietária `dct:license` é utilizada para incluir esta informação como parte da distribuição dos metadados. Neste caso a licença não é escrita em uma linguagem legível por máquinas, porém a licença proprietária `dct:license` permite que um agente de *software* detecte automaticamente a licença de dados de uma certa distribuição.

      :stops-2015-05-05.csv
          a dcat:Distribution ;
          dct:title "CSV distribution of stops-2015-05-05 dataset" ;
          dct:description "CSV distribution of the bus stops dataset of MyCity" ;
          dcat:mediaType "text/csv;charset=UTF-8" ;
          dct:license <http://creativecommons.org/licenses/by-sa/3.0/>
          .

#### Legível por pessoas

[Página de exemplo (em inglês)](https://www.w3.org/TR/dwbp/dwbp-example.html#license-info) com informações de licença da distribuição de dados legíveis por pessoas.

#### <span property="xhv:role" resource="xhv:heading">Como Testar</span>

Verifique se os metadados do conjunto de dados incluem as informações de licença de dados em um formato legível por pessoas.

Verifique se um agente de *software* pode detectar ou descobrir de forma automática a licença do conjunto de dados.

#### <span property="xhv:role" resource="xhv:heading">Evidência</span>

Casos de uso relevantes: [R-LicenseAvailable (em inglês)](https://www.w3.org/TR/dwbp-ucr/#R-LicenseAvailable), [R-MetadataMachineRead (em inglês)](https://www.w3.org/TR/dwbp-ucr/#R-MetadataMachineRead), [R-LicenseLiability (em inglês)](https://www.w3.org/TR/dwbp-ucr/#R-LicenseLiability)

#### <span property="xhv:role" resource="xhv:heading">Benefícios</span>

-   R - Reúso (Reuse)
-   T - Confiança (Trust)
-   <img src="https://www.w3c.br/dwbp/images/reuse.svg" alt="Reuse" class="benefitIcon reuseIcon" />
-   <img src="https://www.w3c.br/dwbp/images/trust.svg" alt="Trust" class="benefitIcon interoperabilityIcon" />

### <span property="xhv:role" resource="xhv:heading"><span class="secno">8.4 </span> Procedência de Dados </span>

A Web reúne negócios, engenharia, comunidades científicas e cria oportunidades colaborativas anteriormente inimagináveis. O desafio da publicação de dados na Web é disponibilizar um detalhamento adequado da origem dos mesmos. O [produtor de dados](#data_producer) pode não ser necessariamente o publicador de tais dados e, portanto, é importante coletar e transmitir os metadados correspondentes. Sem a [procedência](#data_provenance), os consumidores não dispõem de meios para confiar na integridade e credibilidade dos dados que estão sendo compartilhados. Por sua vez, os publicadores de dados precisam estar cientes das necessidades das potenciais comunidades de consumidores para poder adequar os detalhes de procedência.

<span id="DataProvenance" class="practicelab">Boa Prática 5: Fornecer informações de procedência dos dados</span>

Fornecer informações completas sobre as origens dos dados e de quaisquer alterações que você tenha feito.

#### <span property="xhv:role" resource="xhv:heading">Porque</span>

A procedência é uma das formas que os consumidores dispõem para julgar a qualidade de um conjunto de dados. Entender sua origem e história auxilia a determinar se o dado é confiável e fornece um contexto para interpretação dos dados importante.

#### <span property="xhv:role" resource="xhv:heading">Resultado Pretendido</span>

Pessoas saberão a origem e o histórico do conjunto de dados e os agentes de *software* poderão automaticamente processar a informação de procedência.

#### <span property="xhv:role" resource="xhv:heading">Possível Abordagem para Implementação</span>

A versão legível por máquina da procedência de dados pode ser disponibilizada por meio de uma ontologia recomendada para descrever informações de procedência, tais como a *Provenance Ontology* do W3C <a href="#bib-PROV-O" class="bibref">[PROV-O</a>\].

EXEMPLO 5

#### Legível por máquina

O exemplo abaixo demonstra os metadados legíveis por máquina para o conjunto de dados das paradas de ônibus com a inclusão dos metadados de **procedência**. As propriedades `dct:creator`, ` dct:publisher` and `dct:issued ` são utilizadas para fornecer informações sobre a origem do conjunto de dados. A propriedade ` prov:actedOnBehalfOf ` é utilizada para assinalar que Adrian agiu em nome do Departamento de Transportes MyCity.

      :stops-2015-05-05
          a dcat:Dataset, prov:Entity ;
          dct:title "Bus stops of MyCity" ;
          dcat:keyword "transport", "mobility", "bus" ;
          dct:issued "2015-05-05"^^xsd:date ; 
          dcat:contactPoint <http://data.mycity.example.com/transport/contact> ;
          dct:temporal <http://reference.data.gov.uk/id/year/2015> ;
          dct:spatial <http://sws.geonames.org/3399415> ;
          dct:publisher :transport-agency-mycity ; 
          dct:accrualPeriodicity <http://purl.org/linked-data/sdmx/2009/code#freq-A> ;
          dct:language <http://id.loc.gov/vocabulary/iso639-1/en> ;
          dct:creator :adrian 
          .

      :adrian
          a foaf:Person, prov:Agent ;
          foaf:givenName "Adrian" ;
          foaf:mbox <mailto:adrian@mycitytransport.org> ;
          prov:actedOnBehalfOf :transport-agency-mycity 
          .
      :transport-agency-mycity
          a foaf:Organization, prov:Agent ;
          foaf:name "Transport Agency of Mycity"
          .

#### Legível por pessoas

[Página de exemplo (em inglês)](https://www.w3.org/TR/dwbp/dwbp-example.html#provenance-info) com informações de procedência legíveis por pessoas sobre o conjunto de dados das paradas de ônibus.

#### <span property="xhv:role" resource="xhv:heading">Como Testar</span>

Verifique se os metadados do conjunto de dados incluem informações de procedência sobre o conjunto de dados em um formato legível por pessoas.

Verifique se uma aplicação de computador pode processar automaticamente as informações sobre a procedência do conjunto de dados.

#### <span property="xhv:role" resource="xhv:heading">Evidência</span>

Requisitos Relevantes: [R-ProvAvailable (em inglês)](https://www.w3.org/TR/dwbp-ucr/#R-ProvAvailable), [R-MetadataAvailable (em inglês)](https://www.w3.org/TR/dwbp-ucr/#R-MetadataAvailable)

#### <span property="xhv:role" resource="xhv:heading">Benefícios</span>

-   R - Reúso (Reuse)
-   C - Compreensão (Comprehension)
-   T - Confiança (Trust)
-   <img src="https://www.w3c.br/dwbp/images/reuse.svg" alt="Reuse" class="benefitIcon reuseIcon" />
-   <img src="https://www.w3c.br/dwbp/images/comprehension.svg" alt="Comprehension" class="benefitIcon comprehensionIcon" />
-   <img src="https://www.w3c.br/dwbp/images/trust.svg" alt="Trust" class="benefitIcon interoperabilityIcon" />

### <span property="xhv:role" resource="xhv:heading"><span class="secno">8.5 </span>Qualidade de Dados </span>

A qualidade de um conjunto de dados pode ter um grande impacto na qualidade das aplicações que o utilizam. Como consequência, é de fundamental importância a inclusão de informações sobre a [qualidade dos dados](#data_quality) na publicação de dados e em sua distribuição para consumo. Normalmente, a avaliação da qualidade envolve diferentes dimensões de qualidade, cada qual representando grupos de características que são relevantes para publicadores e consumidores. O *Data Quality Vocabulary* define conceitos tais como as medidas e métricas para avaliação da qualidade de cada dimensão \[<a href="#bib-VOCAB-DQV" class="bibref">VOCAB-DQV</a>\]. Existem métodos inteligentes, que adequam-se a situações específicas de avaliação que dependem de indicadores de qualidade, tais como fragmentos de conteúdos de dados, fragmentos de dados de meta informação, e classificações realizadas por pessoas que atribuam indicadores sobre a pertinência dos dados para alguns dos usos pretendidos.

<span id="DataQuality" class="practicelab">Boa Prática 6: Fornecer informações de qualidade de dados</span>

Fornecer informações sobre a qualidade dos dados e adequação para fins específicos.

#### <span property="xhv:role" resource="xhv:heading">Porque</span>

A qualidade dos dados pode afetar seriamente o uso dos dados para aplicações específicas, incluindo aplicações bem diferentes do propósito para o qual estas foram originalmente criadas. Documentar a qualidade dos dados facilita significativamente o processo de seleção de conjuntos de dados, aumentando as chances de reutilização dos mesmos. Independentemente das peculiaridades específicas do domínio, a qualidade dos dados deve ser documentada e os problemas de qualidade que são conhecidos devem ser declarados de forma explícita nos metadados.

#### <span property="xhv:role" resource="xhv:heading">Resultado Pretendido</span>

Pessoas e agentes de *software* serão capazes de avaliar a qualidade e, portanto, a adequação de um conjunto de dados para a sua aplicação.

#### <span property="xhv:role" resource="xhv:heading">Possível Abordagem para Implementação</span>

A versão legível por máquina dos metadados de qualidade do conjunto de dados pode ser fornecida utilizando o vocabulário *Data Quality Vocabulary* desenvolvido pelo grupo de trabalho DWBP \[<a href="#bib-VOCAB-DQV" class="bibref">VOCAB-DQV</a>\].

EXEMPLO 6

#### Legível por máquina

O exemplo abaixo demonstra os metadados para a distribuição CSV do conjunto de dados de paradas de ônibus com a inclusão de metadados de qualidade de dados. Os metadados foram definidos de acordo com o vocabulário *Data Quality Vocabulary*. Mais exemplos podem ser encontrados no documento *Data Quality Vocabulary* \[<a href="#bib-VOCAB-DQV" class="bibref">VOCAB-DQV</a>\].

      :stops-2015-05-05.csv
          a dcat:Distribution ;
          dcat:downloadURL <http://data.mycity.example.com/transport/dataset/bus/stops-2015-05-05.csv> ;
          dct:title "CSV distribution of stops-2015-05-05 dataset" ;
          dct:description "CSV distribution of the bus stops dataset of MyCity" ;
          dcat:mediaType "text/csv;charset=UTF-8" ;
          dct:license <http://creativecommons.org/licenses/by-sa/3.0/> ;
          dqv:hasQualityMeasurement :measure1, :measure2  
          .
      :measure1
          a dqv:QualityMeasurement ;
          dqv:computedOn :stops-2015-05-05.csv ;
          dqv:isMeasurementOf :downloadURLAvailabilityMetric ;
          dqv:value "true"^^xsd:boolean 
          .
      :measure2
          a dqv:QualityMeasurement ;
          dqv:computedOn :stops-2015-05-05.csv ;
          dqv:isMeasurementOf :csvCompletenessMetric ;
          dqv:value "0.5"^^xsd:double 
          .

    #definition of dimensions and metrics
      :availability
          a dqv:Dimension ;
          skos:prefLabel "Availability"@en ;
          skos:definition "Availability of a dataset is the extent to which data (or some portion of it) is present, obtainable and ready for use."@en ;
          dqv:inCategory :accessibility 
          .
      :completeness
          a dqv:Dimension ;
          skos:prefLabel "Completeness"@en ;
          skos:definition "Completeness refers to the degree to which all required information is present in a particular dataset."@en ;
          dqv:inCategory :intrinsicDimensions 
          .
      :downloadURLAvailabilityMetric
          a dqv:Metric ;
          skos:definition "It checks if dcat:downloadURL is available and if its value is dereferenceable."@en ;
          dqv:inDimension :availability
          .
      :csvCompletenessMetric
          a dqv:Metric ;
          skos:definition "Ratio between the number of objects represented in the cvs and the number of objects expected to be represented according to the declared dataset scope."@en ;
          dqv:inDimension :completeness
          .

#### Legível por pessoas

[Página de exemplo (em inglês)](https://www.w3.org/TR/dwbp/dwbp-example.html#dqv-info) com informação de qualidade de dados legível por pessoas.

#### <span property="xhv:role" resource="xhv:heading">Como Testar</span>

Verifique se os metadados do conjunto de dados incluem informações sobre a qualidade deste determinado conjunto de dados.

Verifique se uma aplicação de computador pode processar automaticamente as informações sobre a qualidade do conjunto de dados.

#### <span property="xhv:role" resource="xhv:heading">Evidência</span>

Requisitos Relevantes: [R-QualityMetrics (em inglês)](https://www.w3.org/TR/dwbp-ucr/#R-QualityMetrics), [R-DataMissingIncomplete (em inglês)](https://www.w3.org/TR/dwbp-ucr/#R-DataMissingIncomplete), [R-QualityOpinions (em inglês)](https://www.w3.org/TR/dwbp-ucr/#R-QualityOpinions)

#### <span property="xhv:role" resource="xhv:heading">Benefícios</span>

-   R - Reúso (Reuse)
-   T - Confiança (Trust)
-   <img src="https://www.w3c.br/dwbp/images/reuse.svg" alt="Reuse" class="benefitIcon reuseIcon" />
-   <img src="https://www.w3c.br/dwbp/images/trust.svg" alt="Trust" class="benefitIcon interoperabilityIcon" />

### <span property="xhv:role" resource="xhv:heading"><span class="secno">8.6 </span>Versionamento de Dados</span>

Os conjuntos de dados publicados na Web podem mudar ao longo do tempo. Alguns conjuntos de dados são atualizados regularmente e outros são alterados à medida que melhorias na coleta de dados fazem as atualizações valerem a pena. Com o objetivo de lidar com estas mudanças, novas versões de um conjunto de dados podem ser criadas. Infelizmente não há consenso sobre em qual momento, por conta das alterações em um conjunto de dados, o mesmo deve ser considerado como um conjunto de dados completamente diferente e não somente uma nova versão. A seguir, apresentamos alguns cenários nos quais a maioria dos publicadores concordaria que, com as alterações, deveria ser considerada uma nova versão de um conjunto de dados já existente.

-   Cenário 1: foi instalada uma nova parada de ônibus que deve ser adicionada ao conjunto de dados;
-   Cenário 2: uma parada de ônibus já existente foi removida e deve ser excluída do conjunto de dados;
-   Cenário 3: foi identificado um erro em uma das paradas de ônibus existentes armazenada no conjunto de dados, e este erro deve ser corrigido.

Em geral, múltiplos conjuntos de dados que representam séries temporais ou espaciais - por exemplo, o mesmo tipo de dados para diferentes regiões ou para anos diferentes - não são considerados múltiplas versões do mesmo conjunto de dados. Neste caso cada conjunto de dados cobre um conjunto diferente de observações sobre o mundo e, então, deve ser tratado como um novo conjunto de dados. Este também é o caso de um conjunto de dados que coleta dados sobre as previsões meteorológicas semanais para uma determinada cidade, onde toda semana um novo conjunto de dados é criado para armazenar dados sobre aquela semana especificamente.

Os Cenários 1 e 2 podem desencadear uma versão principal, enquanto o Cenário 3 provavelmente desencadearia somente uma versão a mais. No entanto, decidir se as versões devem ser principais ou não é menos importante do que realizar qualquer alteração sem incrementar o indicador de versão. Até mesmo para pequenas alterações é importante que se mantenha um registro das diferentes versões do conjuntos de dados de forma a tornar o conjunto de dados confiável. Os publicadores devem lembrar que um determinado conjunto de dados pode ser utilizado por um ou mais consumidores de dados, então devem tomar medidas sensatas para informar os consumidores quando uma nova versão é lançada. Para dados em tempo real, uma marca temporal automatizada pode servir como identificador de versão. Para cada conjunto de dados o publicador deve abordar o versionamento de forma consistente e informativa de modo que os consumidores de dados possam compreender e trabalhar com os dados alterados.

<span id="VersioningInfo" class="practicelab">Boa Prática 7: Fornecer indicador de versão</span>

Designar e indicar um número de versão ou data para cada conjunto de dados.

#### <span property="xhv:role" resource="xhv:heading">Porque</span>

As informações sobre a versão tornam a revisão de um conjunto de dados identificável de forma única. Esta unicidade pode ser utilizada pelos consumidores de dados para determinar especificamente com qual versão de um conjunto de dados estão trabalhando. O bom versionamento dos dados possibilita aos consumidores entender se uma nova versão de um conjunto de dados está disponível. O versionamento explícito leva em conta a repetitividade na pesquisa, permite comparações e evita confusão. A utilização de números únicos de versão com uma abordagem padronizada também pode contribuir na expectativas do consumidor, acerca da diferença entre versões.

#### <span property="xhv:role" resource="xhv:heading">Resultado Pretendido</span>

Pessoas e agentes de *software* poderão facilmente identificar com qual versão do conjunto de dados estão trabalhando.

#### <span property="xhv:role" resource="xhv:heading">Possível Abordagem para Implementação</span>

O melhor método para o fornecimento de informações sobre o versionamento irá variar de acordo com o contexto. No entanto, existem algumas diretrizes básicas que podem ser seguidas, como por exemplo:

-   Incluir um único número de versão ou data como parte dos metadados para o conjunto de dados.
-   Utilizar um mecanismo numérico consistente com uma abordagem significativa para incrementar dígitos, tal como \[<a href="#bib-SchemaVer" class="bibref">SchemaVer</a>\].
-   Caso os dados estejam sendo disponibilizados por meio de uma API, o URI utilizado para solicitar a versão mais recente dos dados não deve ser alterado à medida em que as versões se modifiquem. Porém deve ser possível requisitar uma versão específica por meio de uma API.
-   Utilizar Memento \[<a href="#bib-RFC7089" class="bibref">RFC7089</a>\], ou seus componentes para evidenciar o versionamento temporal de um conjunto de dados e para acessar a versão que estava operante em uma determinada data e hora. O protocolo Memento alinha-se intimamente com a abordagem para designação de URIs para versões que são utilizadas nas especificações do W3C, descritas abaixo.

A *Web Ontology Language* \[<a href="#bib-OWL2-QUICK-REFERENCE" class="bibref">OWL2-QUICK-REFERENCE</a>\] e a *Provenance, Authoring and versioning Ontology* \[<a href="#bib-PAV" class="bibref">PAV</a>\] fornecem uma série de propriedades de anotações para a informação sobre versões.

EXEMPLO 7

#### Legível por máquina

O exemplo abaixo traz os metadados para as paradas de ônibus com a inclusão dos metadados de versionamento. As propriedades owl:versionInfo e pav:version são utilizadas para denotar a versão do conjunto de dados.

      :stops-2015-05-05
          a dcat:Dataset ;
          dct:title "Bus stops of MyCity" ;
          dcat:keyword "transport","mobility","bus" ;
          dct:issued "2015-05-05"^^xsd:date ;
          dcat:contactPoint <http://data.mycity.example.com/transport/contact> ;
          dct:temporal <http://reference.data.gov.uk/id/year/2015> ;
          dct:spatial <http://sws.geonames.org/3399415> ;
          dct:publisher :transport-agency-mycity ;
          dct:accrualPeriodicity <http://purl.org/linked-data/sdmx/2009/code#freq-A> ;
          dct:language <http://id.loc.gov/vocabulary/iso639-1/en> ;
          dct:creator :adrian ;
          owl:versionInfo "1.0" ; 
          pav:version "1.0" 
          .
       

**Ao utilizar Memento**

Considere:

-   ` https://data.mycity.example.com/transport/dataset/bus/stops ` é o “URI genérico” no qual a atual versão do conjunto de dados sempre está disponível
-   ` https://data.mycity.example.com/transport/dataset/bus/stops-2015-12-17 ` é o URI versionado para o presente banco de dados
-   ` https://data.mycity.example.com/transport/dataset/bus/stops-2015-05-05 ` é o URI versionado da versão anterior do conjunto de dados

No protocolo Memento os URIs versionados fornecem informações de cabeçalho de resposta HTTP para expressar sua versão de data e hora e sua relação com o URI genérico:

    curl -I http://data.mycity.example.com/transport/dataset/bus/stops-2015-12-17
    HTTP/1.1 200 OK Memento-Datetime: Thu, 17 Dec 2015 00:00:00 GMT
    Link:<http://data.mycity.example.com/transport/dataset/bus/stops>;
    rel=“original”

O URI genérico fornece um link para um *TimeGate*, ferramenta que dá suporte a uma negociação de data e hora como um meio para determinar qual versão de um determinado conjunto de dados estava operante em um determinado momento no tempo. Uma vez que o URI genérico não é versionado, nenhuma versão de data e hora é fornecida nos cabeçalhos.

    curl -i -H http://data.mycity.example.com/transport/dataset/bus/stops

    HTTP/1.1 200 OK
    Link: <http://data.mycity.example.com/transport/dataset/bus/timegate/stops>;
    rel=“timegate” 

Os URIs versionados também podem fornecer um link para um *TimeGate*:

    curl -I http://data.mycity.example.com/transport/dataset/bus/stops-2015-05-05

    HTTP/1.1 200 OK
    Memento-Datetime: Tue, 05 May 2015 00:00:00 GMT
    Link: <http://data.mycity.example.com/transport/dataset/bus/stops>;
    rel=“original”,
     <http://data.mycity.example.com/transport/dataset/bus/timegate/stops>;
    rel=“timegate” 

É assim que um cliente determina qual versão do conjunto de dados estava operando em 20 de junho de 2015:

    curl -I -H "Accept-Datetime: Sat, 20 Jun 2015  12:00:00 GMT" http://data.mycity.example.com/transport/dataset/bus/timegate/stops

    HTTP/1.1 302 Found
    Vary: accept-datetime
    Location: http://data.mycity.example.com/transport/dataset/bus/stops-2015-05-05
    Link: <http://data.mycity.example.com/transport/dataset/bus/stops>
    rel="original" 

#### Legível por pessoas

[Página de exemplo (em inglês)](https://www.w3.org/TR/dwbp/dwbp-example.html#dataset-versioning-information) com informações sobre o versionamento de dados legíveis por pessoas.

#### <span property="xhv:role" resource="xhv:heading">Como Testar</span>

Verifique se os metadados para o conjunto de dados ou distribuição fornece um número de versão ou data específico em um formato legível por pessoas.

Verifique se a aplicação de computador pode detectar/descobrir automaticamente o número de versão ou data específicos de um conjunto de dados ou uma distribuição, e se pode processá-lo.

#### <span property="xhv:role" resource="xhv:heading">Evidência</span>

Requisitos Relevantes: [R-DataVersion (em inglês)](https://www.w3.org/TR/dwbp-ucr/#R-DataVersion)

#### <span property="xhv:role" resource="xhv:heading">Benefícios</span>

-   R - Reúso (Reuse)
-   T - Confiança (Trust)
-   <img src="https://www.w3c.br/dwbp/images/reuse.svg" alt="Reuse" class="benefitIcon reuseIcon" />
-   <img src="https://www.w3c.br/dwbp/images/trust.svg" alt="Trust" class="benefitIcon interoperabilityIcon" />

<span id="VersionHistory" class="practicelab">Boa Prática 8: Fornecer o histórico de versão</span>

Fornecer um histórico completo de versão que explique as alterações feitas em cada versão.

#### <span property="xhv:role" resource="xhv:heading">Porque</span>

Ao criar aplicações que utilizam dados é útil compreender a variação destes ao longo do tempo. A interpretação de dados também é potencializada pela compreensão de sua dinâmica. Determinar como diversas versões de um conjunto de dados diferenciam umas das outras é geralmente muito trabalhoso, a não ser que um sumário destas diferenças seja fornecido.

#### <span property="xhv:role" resource="xhv:heading">Resultado Pretendido</span>

Pessoas e os agentes de *software* serão capazes de entender como o conjunto de dados se altera tipicamente de versão à versão, assim como poderão especificar como duas versões em particular diferenciam-se uma da outra.

#### <span property="xhv:role" resource="xhv:heading">Possível Abordagem para Implementação</span>

Fornecer uma lista de versões publicadas e uma descrição para cada versão que explique como esta difere da anterior. Uma API pode demonstrar o histórico da versão como um único URL dedicado que recupere a última versão a partir do histórico completo.

EXEMPLO 8

#### Legível por máquina

Suponha que uma nova parada de ônibus foi criada e que um novo conjunto de dados (`stops-2015-12-17`) seja publicado com o objetivo de manter os dados atualizados. O novo conjunto de dados é uma versão de `stops-2015-05-05`. Os metadados legíveis por máquina do novo conjunto de dados são demonstrados abaixo com as informações do seu histórico de versionamento correspondente.

      :stops-2015-12-17
          a dcat:Dataset ;
          dct:title "Bus stops of MyCity" ;
          dcat:keyword "transport","mobility","bus" ;
          dct:issued "2015-12-17"^^xsd:date ;
          dcat:contactPoint <http://data.mycity.example.com/transport/contact> ;
          dct:temporal <http://reference.data.gov.uk/id/year/2015> ;
          dct:spatial <http://sws.geonames.org/3399415> ;
          dct:publisher :transport-agency-mycity ;
          dct:accrualPeriodicity <http://purl.org/linked-data/sdmx/2009/code#freq-A> ;
          dct:language <http://id.loc.gov/vocabulary/iso639-1/en> ;
          dct:creator :adrian ;
           ...
          dct:isVersionOf :stops-2015-05-05 ;
          pav:previousVersion :stops-2015-05-05 ;
          rdfs:comment "O conjunto de dados de pontos de ônibus (stops) foi atualizado para refletir a criação de um novo ponto de ônibus na rua Pear, 1115 (1115 Pearl Street)." ;
          owl:versionInfo "1.1" ;
          pav:version "1.1" 
          .

**Ao Utilizar Memento:**

Considere:

-   `https://data.mycity.example.com/transport/dataset/bus/stops ` é um “URI genérico” no qual a versão corrente do conjunto de dados está sempre disponível.
-   `https://data.mycity.example.com/transport/dataset/bus/stops-2015-12-17` é o URI versionado para o atual conjunto de dados
-   `https://data.mycity.example.com/transport/dataset/bus/stops-2015-05-05` é o URI versionado para a versão anterior do conjunto de dados
-   https://example.org/stops-2015-01-01 é o URI versionado da primeira versão do conjunto de dados

Os URIs versionados, o URI genérico e o *TimeGate* podem fornecer um link para o *TimeMap*, mapa que fornece um panorama de todas as versões temporais do conjunto de dados:

    curl -I http://data.mycity.example.com/transport/dataset/bus/stops-2015-05-05

    HTTP/1.1 200 OK
    Memento-Datetime: Tue, 05 May 2015 00:00:00 GMT
    Link: <http://data.mycity.example.com/transport/dataset/bus/stops>;
    rel=“original”,
     <http://data.mycity.example.com/transport/dataset/bus/timemap/stops>;
    rel=“timemap”;
     type="application/link-format" 

O *TimeMap* é recuperado desta forma:

    curl -I https://data.mycity.example.com/transport/dataset/bus/timemap/stops

    HTTP/1.1 200 OK
    Content-Type: application/link-format

    <http://data.mycity.example.com/transport/dataset/bus/stops>;rel="original”,
    <http://data.mycity.example.com/transport/dataset/bus/timegate/stops>;rel="timegate”,
    <http://data.mycity.example.com/transport/dataset/bus/timemap/stops>;rel="timemap”;
     type="application/link-format",
    <http://data.mycity.example.com/transport/dataset/bus/stops-2015-01-01>;
    rel=“first memento"; datetime="Thu, 01 Jan 2015 00:00:00 GMT",
    <http://data.mycity.example.com/transport/dataset/bus/stops-2015-05-05>;
    rel=“memento"; datetime=“Tue, 05 May 2015 00:00:00 GMT"
    <http://data.mycity.example.com/transport/dataset/bus/stops-2015-12-07>;
    rel=“last memento"; datetime="Thu, 17 Dec 2015 00:00:00 GMT"

O URI versionado pode fornecer informações sobre as relações com outras versões do conjunto de dados:

    curl -I https://data.mycity.example.com/transport/dataset/bus/stops-2015-05-05

    HTTP/1.1 200 OK
    Memento-Datetime: Tue, 05 May 2015 00:00:00 GMT
    Link: <http://data.mycity.example.com/transport/dataset/bus/stops>;
    rel=“original”,
     <http://data.mycity.example.com/transport/dataset/bus/stops-2015-01-01>;
    rel=“prev first memento";
     datetime="Thu, 01 Jan 2015 00:00:00 GMT",
     <http://data.mycity.example.com/transport/dataset/bus/stops-2015-12-17>;
    rel=“next last memento";
     datetime="Thu, 17 Dec 2015 00:00:00 GMT"

#### Legível por pessoas

[Página de exemplo (em inglês)](https://www.w3.org/TR/dwbp/dwbp-example.html#dataset-versioning-information) com informações do histórico de versionamento de dados legíveis por pessoas.

#### <span property="xhv:role" resource="xhv:heading">Como Testar</span>

Verifique se uma lista das versões já publicadas está disponível assim como o histórico de modificações, do inglês *change log*. Este último deve descrever exatamente em que cada uma das novas versões difere da versão anterior.

#### <span property="xhv:role" resource="xhv:heading">Evidência</span>

Requisitos Relevantes: [R-DataVersion (em inglês)](https://www.w3.org/TR/dwbp-ucr/#R-DataVersion)

#### <span property="xhv:role" resource="xhv:heading">Benefícios</span>

-   R - Reúso (Reuse)
-   T - Confiança (Trust)
-   <img src="https://www.w3c.br/dwbp/images/reuse.svg" alt="Reuse" class="benefitIcon reuseIcon" />
-   <img src="https://www.w3c.br/dwbp/images/trust.svg" alt="Trust" class="benefitIcon interoperabilityIcon" />

### <span property="xhv:role" resource="xhv:heading"><span class="secno">8.7 </span>Identificadores de Dados</span>

Identificadores assumem diversas formas e são extensivamente utilizados em todos os sistemas de informação. A descoberta de dados, o uso e a citação na Web dependem fundamentalmente do uso de URIs HTTP (ou HTTPS): identificadores globalmente únicos que podem ser buscados ao serem desreferenciados por meio da Internet \[<a href="#bib-RFC3986" class="bibref">RFC3986</a>\]. Talvez seja válido enfatizar alguns pontos-chave sobre os URIs no presente contexto:

1.  URIs são “*strings* burros”, do inglês *dumb strings*, o que quer dizer que não carregam nenhuma semântica. Sua função é puramente identificar um recurso.
2.  Embora seja verdadeiro o ponto anterior, seria perverso para um URI tal qual https://example.com/dataset.csv retornar nada além de do que um arquivo CSV. É recomendável que seja legível por pessoas.
3.  Ao ser dereferenciado (buscado), um único URI pode oferecer o mesmo recurso em mais de um formato. https://example.com/dataset pode oferecer os mesmos dados em CSV, JSON e XML, por exemplo. O servidor retorna o formato mais apropriado com base na [negociação de conteúdo (em inglês)](https://www.w3.org/Protocols/HTTP/Negotiation).
4.  Um URI pode redirecionar-se a outro.
5.  Dereferenciar um URI aciona a execução de um programa de computador em um servidor que pode fazer algo tão simples como retornar um arquivo único e estático, ou pode realizar processamentos complexos. Precisamente qual processamento é realizado - por exemplo, o *software* no servidor - é completamente independente do URI em si.

<span id="UniqueIdentifiers" class="practicelab">Boa Prática 9: Usar URIs persistentes como identificadores de conjuntos de dados</span>

Identificar cada conjunto de dados por meio de um URI persistente e cuidadosamente escolhido.

#### <span property="xhv:role" resource="xhv:heading">Porque</span>

Adotar um sistema de identificação comum permite a identificação básica dos dados e a comparação dos processos por qualquer um dos atores envolvidos de forma confiável. São pré-condições essenciais para o gerenciamento e reutilização dos dados de forma adequada.

Os desenvolvedores podem construir URIs dentro de seus códigos e, para isso, é importante que tais URIs sejam persistentes e que desreferenciem para o mesmo recurso ao longo do tempo, sem a necessidade de intervenção humana.

#### <span property="xhv:role" resource="xhv:heading">Resultado Pretendido</span>

Os conjuntos de dados ou as informações sobre os conjuntos de dados serão encontrados e citados com facilidade em qualquer momento, independentemente do status, da disponibilidade ou do formato dos dados.

#### <span property="xhv:role" resource="xhv:heading">Possível Abordagem para Implementação</span>

Para serem persistentes os URIs devem ser designadas como tal. Muito já foi escrito sobre este tópico, veja por exemplo o Estudo da Comissão Europeia sobre URIs Persistentes \[<a href="#bib-PURI" class="bibref">PURI</a>\] que por sua vez propõe conexões a muitos outros recursos.

No caso de um publicador de dados não ser capaz ou estiver relutante em gerenciar um espaço de URI diretamente para persistência, uma abordagem alternativa seria utilizar um serviço de redirecionamento tal qual [*Permanent Identifiers for the Web* (em inglês)](https://w3id.org/) ou [purl.org (em inglês)](https://purl.org/). Estes oferecem URIs persistentes que podem ser redirecionados conforme necessário de forma que a eventual localização possa ser efêmera. O [*software* por trás destes serviços (em inglês)](http://www.purlz.org/) encontra-se disponível gratuitamente e, portanto, pode ser instalado e gerenciado localmente caso necessário.

Identificadores de Objetos Digitais ([DOIs, em inglês)](https://www.doi.org/) oferecem uma alternativa similar. Estes identificadores são definidos independentemente de qualquer tecnologia Web, mas podem ser anexados a um *stub* URI, uma ponta de URI. Os DOIs são parte importante da infraestrutura digital para a pesquisa de dados e bibliotecas.

EXEMPLO 9

O URI `https://data.mycity.example.com/transport/dataset/bus/stops` possui diversas características que oferecem suporte à persistência:

-   Todos os nomes estão sujeitos a mudanças ao longo do tempo, no entanto ao escolher um nome de domínio é razoável que Adrian assuma que MyCity vá continuar a existir e que continuará a ter um governo. Portanto, enquanto casos como a Iugoslávia comprovam que até mesmo nomes de países mudam e que domínios de nível superior podem desaparecer (tal como .yu), um nome de domínio baseado no nome da própria cidade é tão persistente quanto qualquer nome de domínio pode ser.
-   Ao inserir dados no subdomínio `data.mycity.example.com`, Adrian está criando um domínio específico que pode ser gerenciado independentemente de qualquer departamento em particular.
-   *Não* é seguro assumir que um *departamento* específico vá persistir. As autoridades em MyCity podem muito bem decidir que o Departamento de Transportes deve fundir-se com outro departamento e criar, por exemplo, o Departamento de Transportes e Meio Ambiente. Está correto, portanto, não inserir o nome do Departamento de Transportes no URI, mas sim inserir a tarefa para a qual os dados são designados, neste caso o fornecimento de transporte público.
-   O seguimento de caminho (do inglês *path segment*) referente ao `/dataset` é um indicativo de que o URI identifica um conjunto de dados em vez de, por exemplo, uma rota de ônibus específica.
-   Da mesma forma o segmento de caminho `/bus` nos leva mais além em direção ao conjunto de dados específico pela qual Adrian é responsável.
-   Finalmente, `/stops` nos conduz ao conjunto de dados que diz respeito às paradas de ônibus em MyCity.
-   Nos termos do vocabulário DCAT este seria o identificador para o conjunto de dados. Distribuições específicas do conjunto de dados provavelmente serão identificadas pela adição de extensões de arquivo relevantes ao URI, tais como: `https://data.mycity.example.com/transport/dataset/bus/stops.csv`, `https://data.mycity.example.com/transport/dataset/bus/stops.json`, `https://data.mycity.example.com/transport/dataset/bus/stops.ttl` etc.

#### <span property="xhv:role" resource="xhv:heading">Como Testar</span>

Verifique se cada conjunto de dados encontra-se identificado utilizando um URI que tenha sido designado para ser persistente. O ideal é que o sítio Web relevante inclua uma descrição de uma esquema de design e uma proposta plausível de persistência caso o publicador não puder manter o espaço URI por si só.

#### <span property="xhv:role" resource="xhv:heading">Evidência</span>

Requisitos Relevantes: [R-UniqueIdentifier (em inglês)](https://www.w3.org/TR/dwbp-ucr/#R-UniqueIdentifier), [R-Citable (em inglês)](https://www.w3.org/TR/dwbp-ucr/#R-Citable)

#### <span property="xhv:role" resource="xhv:heading">Benefícios</span>

-   R - Reúso (Reuse)
-   L - Capacidade de conexão (Linkability)
-   D - Facilidade de descoberta (Discoverability)
-   I - Interoperabilidade (Interoperability)
-   <img src="https://www.w3c.br/dwbp/images/reuse.svg" alt="Reuse" class="benefitIcon reuseIcon" />
-   <img src="https://www.w3c.br/dwbp/images/linkability.svg" alt="Linkability" class="benefitIcon linkabilityIcon" />
-   <img src="https://www.w3c.br/dwbp/images/discoverability.svg" alt="Discoverability" class="benefitIcon discoverabilityIcon" />
-   <img src="https://www.w3c.br/dwbp/images/interoperability.svg" alt="Interoperability" class="benefitIcon interoperabilityIcon" />

<span id="identifiersWithinDatasets" class="practicelab">Boa Prática 10: Usar URIs persistentes como identificadores dentro de conjuntos de dados</span>

Reutilizar os URIs de terceiros como identificadores dentro dos conjuntos de dados quando possível.

#### <span property="xhv:role" resource="xhv:heading">Porque</span>

O poder da Web reside no *Efeito de Rede.* O primeiro telefone somente tornou-se útil quando um segundo telefone abriu a possibilidade de ter alguém para telefonar; o terceiro telefone tornou os dois primeiros ainda mais úteis. Os dados tornam-se mais valiosos caso refiram-se a dados de outras pessoas sobre o mesmo tema, o mesmo local, o mesmo conceito, o mesmo evento, a mesma pessoa, e assim por diante.

Isto significa utilizar os mesmos identificadores por meio de diversos conjuntos de dados e garantir que os seus identificadores possam ser referidos por outros conjuntos de dados. Quando tais identificadores são URIs HTTP, estes podem ser consultados e mais dados podem ser descobertos.

Estas ideias são o foco central das Cinco Estrelas dos Dados Conectados, do inglês [*5 Stars of Linked Data* (em inglês)](https://www.w3.org/DesignIssues/LinkedData.html), onde um ponto de dados conecta-se a outro, e do [Hypermedia (em inglês)](http://webdata.systems/), onde links podem ser utilizados por serviços que podem atuar ou se relacionar com os dados de alguma forma.

Isto é a Web dos Dados.

#### <span property="xhv:role" resource="xhv:heading">Resultado Pretendido</span>

Os itens dos dados serão relacionados por meio da Web criando um espaço de informação global, acessível tanto para pessoas quanto para máquinas.

#### <span property="xhv:role" resource="xhv:heading">Possível Abordagem para Implementação</span>

Este é um tópico em si mesmo, e um documento genérico como este comporta somente um detalhamento superficial.

Os desenvolvedores sabem que muito frequentemente o problema que estão tentando resolver já foi solucionado por outras pessoas. Da mesma forma, caso você esteja buscando um conjunto de identificadores para coisas padronizadas tais como países, moedas correntes, disciplinas, espécies, proteínas, cidades e regiões, ganhadores de Prêmios Nobel e produtos - alguém já percorreu o mesmo caminho. Os passos descritos em [descobrindo vocabulários já existentes (em inglês)](https://www.w3.org/TR/ld-bp/#how-to-find-existing-vocabularies) \[<a href="#bib-LD-BP" class="bibref">LD-BP</a>\] podem ser prontamente adaptados.

-   certifique-se de que os conjuntos de URIs que você utiliza tenham sido publicados por um grupo ou uma organização confiável;
-   certifique-se de que os conjuntos de URIs são de URIs persistentes.

Caso não seja possível encontrar um conjunto de identificadores já existente e que atenda às suas necessidades, será preciso criar o seu próprio conjunto seguindo os padrões para persistência do URI, de forma que outros possam adicionar valor aos seus dados ao estabelecer conexões com os mesmos.

EXEMPLO 10

O URI utilizado como exemplo na Boa Prática anterior (`https://data.mycity.example.com/transport/dataset/bus/stops`) identifica um conjunto de dados. Uma parte significativa do URI pode ser reutilizada para identificar paradas de ônibus, rotas, além do tipo de ônibus utilizado em um determinado serviço. Por exemplo, um URI persistente e adequado para a rota “Aeroporto - Bullfrog” seria:

`https://data.mycity.example.com/transport/route/bus/id/AB`

Este URI tem a mesma estrutura inicial do conjunto de dados, mas em vez de `/dataset`, agora inclui o seguimento de caminho `/route`, de forma que as pessoas possam ver que o que está sendo identificado é uma rota de ônibus. O segmento `/id` indica que o URI identifica algo que não é um recurso de informação, algo que não se pode recuperar por meio da Internet por exemplo, e `/AB` é o identificador local para a rota de ônibus real. Isto é consistente com a recomendação dada pela *GS1's SmartSearch Implementation Guideline* \[<a href="#bib-GS1" class="bibref">GS1</a>\] que declara que onde os identificadores padrão forem utilizados para um produto, uma localidade, etc., é recomendável que o URI inclua o tipo de identificador que está sendo utilizado. Por exemplo, caso um Número Global do Item Comercial, do inglês *Global Trade Identification Number*, GTIN, esteja sendo utilizado para identificar um produto, então o URI deve seguir o seguinte formato: `https://data.myproduct.example.com/gtin/05011476100885`. Dereferenciar URIs para recursos não informativos deve resultar em um HTTP 303, redirecionado a um URL similar, tal como `https://data.mycity.example.com/transport/route/bus/doc/AB` que *seja descritivo*, ou seja, que forneça informaçoes sobre a rota de ônibus AB (observe a substituição de `/doc` por `/id`). O trabalho de Jeni Tennison sobre os URLs em Dados tem muito a acrescentar a este tópico \[<a href="#bib-URLs-in-data" class="bibref">URLs-in-data</a>\].

Ao sugerir esta recomendação reconhecemos que URIs podem ficar extensos. Em um conjunto de dados, mesmo os de tamanho moderado, armazenar cada URI será provavelmente repetitivo e obviamente um desperdício. Como alternativa, é possível definir localmente identificadores únicos para cada elemento (tal qual `AB` neste exemplo), e fornecer dados que permita que sejam convertidos em URIs únicos globais de forma programática. O *Metadata Vocabulary for Tabular Data* \[<a href="#bib-Tabular-Metadata" class="bibref">Tabular-Metadata</a>\] fornece mecanismos para fazer isto no âmbito de dados tabulares tais como arquivos CSV, particularmente utilizando [propriedades de templates de URI (em inglês)](https://www.w3.org/TR/tabular-metadata/#uri-template-properties) tais como a propriedade [sobre URL (em inglês)](https://www.w3.org/TR/tabular-metadata/#cell-aboutUrl).

#### <span property="xhv:role" resource="xhv:heading">Como Testar</span>

Verifique se dentro do conjunto de dados as referências à elementos que não se modificam ou que se modificam lentamente - tais como países, regiões, organizações e pessoas - são referenciados por meio de URIs ou por identificadores curtos que possam ser anexados a um *stub* URI. A princípio os URIs deveriam solucionar, no entanto eles têm valor como variáveis ​​de escopo global, sejam elas resolvidas ou não.

#### <span property="xhv:role" resource="xhv:heading">Evidência</span>

Requisitos Relevantes: [R-UniqueIdentifier (em inglês)](https://www.w3.org/TR/dwbp-ucr/#R-UniqueIdentifier)

#### <span property="xhv:role" resource="xhv:heading">Benefícios</span>

-   R - Reúso (Reuse)
-   L - Capacidade de conexão (Linkability)
-   D - Facilidade de descoberta (Discoverability)
-   I - Interoperabilidade (Interoperability)
-   <img src="https://www.w3c.br/dwbp/images/reuse.svg" alt="Reuse" class="benefitIcon reuseIcon" />
-   <img src="https://www.w3c.br/dwbp/images/linkability.svg" alt="Linkability" class="benefitIcon linkabilityIcon" />
-   <img src="https://www.w3c.br/dwbp/images/discoverability.svg" alt="Discoverability" class="benefitIcon discoverabilityIcon" />
-   <img src="https://www.w3c.br/dwbp/images/interoperability.svg" alt="Interoperability" class="benefitIcon interoperabilityIcon" />

<span id="VersionIdentifiers" class="practicelab">Boa Prática 11: Atribuir URIs para as versões dos conjuntos de dados e séries </span>

Atribuir URIs a versões individuais de conjuntos de dados assim como a séries em geral.

#### <span property="xhv:role" resource="xhv:heading">Porque</span>

Assim como documentos, muitos conjuntos de dados são naturalmente passíveis de serem categorizados em séries ou grupos. Por exemplo:

-   paradas de ônibus em MyCity (que se modificam ao longo do tempo);
-   uma listagem dos representantes eleitos em MyCity;
-   versões de um documento em progresso até sua conclusão.

Em diferentes circunstâncias seria apropriado fazer uma referência à situação corrente (o conjunto de paradas de ônibus atuais, os representantes eleitos atuais, etc.). Em outras, pode ser apropriado fazer referência à situação tal como ela se apresentava em um momento específico.

#### <span property="xhv:role" resource="xhv:heading">Resultado Pretendido</span>

Pessoas e agentes de *software* serão capazes de recorrer a versões específicas de um conjunto de dados e a conceitos tais como “séries de conjuntos de dados” e “a versão mais recente”.

#### <span property="xhv:role" resource="xhv:heading">Possível Abordagem para Implementação</span>

O W3C fornece um bom exemplo sobre como fazê-lo. O URI (persistente) para este documento (em inglês) é `https://www.w3.org/TR/2016/PR-dwbp-20161215/`. Este identificador aponta para um *snapshot* (registro dos dados em um determinado momento imutável) deste documento no dia de sua publicação. O URI para a 'versão mais recente' deste documento (em inglês) é `https://www.w3.org/TR/dwbp/`, o qual é um identificador para o próprio documento, que está sujeito à alterações ao longo do tempo. No momento da publicação ambos URIs indicavam para este documento. No entanto, quando a próxima versão deste documento for publicada, o URI da 'versão mais recente' será alterado e redirecionado àquele; o URI datado, porém, permanecerá inalterado.

Exemplo 11

Suponha que uma nova parada de ônibus tenha sido criada. Para manter `stops-2015-05-05 ` atualizado, uma nova versão do conjunto de dados (`stops-2015-12-17`) é criada. `stops-2015-12-17 ` inclui todos os dados das paradas de ônibus `stops-2015-05-05 ` além dos dados sobre a nova parada de ônibus. Ambas as versões podem ser identificadas pelos seguintes URIs:

`https://data.mycity.example.com/transport/dataset/bus/stops-2015-05-05` é o URI versionado da primeira versão do conjunto de dados

`https://data.mycity.example.com/transport/dataset/bus/stops-2015-12-17` é o URI da versão atualizada do conjunto de dados

`https://data.mycity.example.com/transport/dataset/bus/stops` sempre redireciona para a última versão e, portanto, redirecionou para `stops-2015-05-05` *até* 17 de Dezembro de 2015, quando a configuração do servidor foi atualizada de forma a direcionar aquele URL para `stops-2015-12-17`.

#### <span property="xhv:role" resource="xhv:heading">Como Testar</span>

Verifique se cada versão do conjunto de dados possui seu próprio URI e também se a 'versão mais recente' do URI está disponível.

#### <span property="xhv:role" resource="xhv:heading">Evidência</span>

Requisitos Relevantes: [R-UniqueIdentifier (em inglês)](https://www.w3.org/TR/dwbp-ucr/#R-UniqueIdentifier), [R-Citable (em inglês)](https://www.w3.org/TR/dwbp-ucr/#R-Citable)

#### <span property="xhv:role" resource="xhv:heading">Benefícios</span>

-   R - Reúso (Reuse)
-   D - Facilidade de descoberta (Discoverability)
-   T - Confiança (Trust)
-   <img src="https://www.w3c.br/dwbp/images/reuse.svg" alt="Reuse" class="benefitIcon reuseIcon" />
-   <img src="https://www.w3c.br/dwbp/images/discoverability.svg" alt="Discoverability" class="benefitIcon discoverabilityIcon" />
-   <img src="https://www.w3c.br/dwbp/images/trust.svg" alt="Trust" class="benefitIcon interoperabilityIcon" />

### <span property="xhv:role" resource="xhv:heading"><span class="secno">8.8 </span>Formatos de Dados</span>

O formato no qual os dados são disponibilizados aos consumidores é um aspecto chave para garantir que os dados sejam passíveis de serem usados. O melhor e mais flexível mecanismo de acesso a dados do mundo é inútil caso não se disponibilize dados em formatos que permitam seu uso e reúso. Abaixo detalhamos as Boas Práticas para selecionar formatos para os seus dados, tanto em nível de arquivos quanto de campos individuais. O W3C incentiva o uso de formatos que possam ser utilizados por um público mais amplo possível e que possam ser processados de forma simples por sistemas computacionais. Formatos de fontes, tais como os depósitos de bases de dados ou de planilhas, utilizados para gerar o formato final a ser publicado, estão fora do escopo. Este documento trata do que de fato foi publicado e não de sistemas internos utilizados para gerar os dados publicados.

<span id="VersionIdentifiers2" class="practicelab"> Boa Prática 12: Usar formatos de dados padronizados legíveis por máquinas </span>

Disponibilize os dados em um formato padronizado e legível por máquinas que seja apropriado para seu propósito ou uso em potencial.

#### <span property="xhv:role" resource="xhv:heading">Porque</span>

Na medida que os dados passam a ser mais ubíquos e os conjuntos de dados maiores e mais complexos, o processamento por computadores torna-se a cada dia mais relevante. Disponibilizar dados em um formato que não seja [legível por máquinas](#machine_readable) impõe severas limitações para a utilidade dos dados. Os dados tornam-se úteis ao serem processados e transformados em informação. Observe que há uma importante distinção entre formatos que podem ser lidos e editados por pessoas utilizando um computador e formatos que são legíveis por máquinas. O último termo implica que os dados sejam prontamente extraídos, transformados e processados por um computador.

Utilizar formatos de dados não padronizados é caro e ineficiente, e os dados podem perder significado conforme são transformados. Em contrapartida, formatos de dados padronizados viabilizam tanto a interoperabilidade quanto usos futuros, tais como a remixagem ou a visualização, muitos dos quais não podem ser antecipados quando os dados são publicados pela primeira vez. Também é importante observar que a maior parte dos formatos padronizados que são legíveis por máquinas também são neutros no que se refere à localidade.

#### <span property="xhv:role" resource="xhv:heading">Resultado Pretendido</span>

Máquinas serão capazes de ler e processar facilmente os dados publicados na Web e as pessoas poderão utilizar as ferramentas computacionais usualmente disponíveis para trabalhar com dados.

#### <span property="xhv:role" resource="xhv:heading">Possível Abordagem para Implementação</span>

Disponibilize os dados em um formato padronizado e legível por máquinas, que seja facilmente analisável e que inclua, mas não se limite, à serialização de sintaxes CSV, XML, HDF5, JSON e RDF como RDF/XML, JSON-LD ou Turtle.

EXEMPLO 12

Adrian sabe que dados tabulares são comumente utilizados na Web e decide utilizar CSV como o formato de dados para uma das distribuições do conjunto de dados dos pontos de ônibus. Para facilitar o processamento de dados, ele utiliza o [*Model for Tabular Data and Metadata on the Web* (em inglês)](https://www.w3.org/TR/2015/REC-tabular-data-model-20151217/) para a publicação da distribuição CSV (`stops-2015-05-05.csv`). O exemplo abaixo apresenta um fragmento da distribuição CSV que está de acordo com os metadados estruturais definidos no [Exemplo 4](#licenses).

    Identificador, Nome, Descrição, Latitude, Longitude, ZONA, URL
    345,Castle Avenue,Sunset Drive,-3.731862,-38.526670,x20,http://data.mycity.example.com/transport/road/bus/stop/id/345
    483,Main Street,Lily Park,-3.731541,-38.535157,x20,http://data.mycity.example.com/transport/road/bus/stop/id/483

#### <span property="xhv:role" resource="xhv:heading">Como Testar</span>

Verifique se o formato de dados está em conformidade com as especificações de um formato de dados legível por máquinas.

#### <span property="xhv:role" resource="xhv:heading">Evidência</span>

Requisitos Relevantes: [R-FormatMachineRead (em inglês)](https://www.w3.org/TR/dwbp-ucr/#R-FormatMachineRead), [R-FormatStandardized (em inglês)](https://www.w3.org/TR/dwbp-ucr/#R-FormatStandardized), [R-FormatOpen (em inglês)](https://www.w3.org/TR/dwbp-ucr/#R-FormatOpen)

#### <span property="xhv:role" resource="xhv:heading">Benefícios</span>

-   R - Reúso (Reuse)
-   P - Facilidade de processamento (Processability)
-   <img src="https://www.w3c.br/dwbp/images/reuse.svg" alt="Reuse" class="benefitIcon reuseIcon" />
-   <img src="https://www.w3c.br/dwbp/images/processability.svg" alt="Processability" class="benefitIcon interoperabilityIcon" />

<span id="LocaleParametersMetadata" class="practicelab">Boa Prática 13: Usar representações de dados que sejam independentes de localidade (*locale neutral*)</span>

Utilize estruturas e conteúdo de dados de localidade neutra ou, quando isso não for possível, forneça metadados sobre os parâmetros regionais dos conteúdos de dados.

#### <span property="xhv:role" resource="xhv:heading">Porque</span>

Dados cujos conteúdos são legíveis por máquinas e não são específicos de nenhum idioma ou cultura em particular são mais duráveis e menos suscetíveis a interpretações errôneas do que dados que usam uma das muitas possíveis interpretações culturais em seus conteúdos. Coisas como datas, moedas e números podem soar parecidas, mas têm significados diferentes em locais distintos. Por exemplo, a 'data' 4/7 tanto pode ser lida como 04 de julho ou como 07 de abril, dependendo de onde os dados foram criados. Da mesma forma, €2,000 pode tanto significar dois mil Euros quanto uma representação excessivamente precisa de dois Euros. Utilizar um formato de localidade neutra evita a necessidade de estabelecer regras intercambiáveis específicas que variam de acordo com o idioma ou com a localização do usuário. Quando os dados já estão em um formato de localidade específica, explicitar o local e a linguagem por meio do fornecimento de parâmetros de [localidade](#locale_parameter) permite aos usuários determinar se poderão trabalhar com os dados e habilitar serviços de tradução automatizados prontamente ou não.

#### <span property="xhv:role" resource="xhv:heading">Resultado Pretendido</span>

Pessoas e agentes de *software* serão capazes de interpretar o significado de *strings* que representam datas, horários, moedas, números, etc., de forma precisa.

#### <span property="xhv:role" resource="xhv:heading">Possível Abordagem para Implementação</span>

Os formatos de serialização de dados mais comuns são de localidade neutra. Por exemplo, tipos XML Schema como `xsd:integer` e ` xsd:date ` destinam-se a intercâmbios de dados de localidade neutra. Utilizar representações de localidade neutra permite que os conteúdos dos dados sejam processados de forma precisa sem análises complexas ou interpretações errôneas, e também permite que os dados sejam apresentados em um formato mais confortável aos consumidores de dados em qualquer localidade. Por exemplo, em vez de armazenar "€2000,00" como um string é altamente preferível substituir por uma estrutura de dados tal como:

    …
    "price" {
        "value": 2000.00,
        "currency": "EUR"
    }
    …

O conteúdo de alguns conjuntos de dados não são ou não podem ser disponibilizados em um formato de localidade neutra. Isto é particularmente verdadeiro para todos os dados com conteúdo de texto em linguagem natural. Para cada campo de dados que possa conter textos afetados por conta da localidade ou de linguagem natural, deverá ser associada uma *tag* (etiqueta) do idioma, a qual indica o idioma e a localização do dado. O consumidor de dados pode usar essa informação de localidade tanto para analisar os dados quanto para garantir uma apresentação e processamento adequados do conteúdo. A BCP47 \[<a href="#bib-BCP47" class="bibref">BCP47</a>\] fornece o padrão para a identificação do idioma e da localidade e, de maneira informativa, o repositório CLDR \[<a href="#bib-CLDR" class="bibref">CLDR</a>\] é a fonte tanto para representação de formatos de localidades específicas, quanto para referências de conteúdos de dados de locais específicos.

EXEMPLO 13

#### Legível por máquinas

O exemplo abaixo demonstra os metadados legíveis por máquinas para o conjunto de dados dos pontos de ônibus (`stops-2015-05-05`) com a inclusão de metadados de **parâmetros de localidade.** A propriedade ` dct:language ` é utilizada para declarar os idiomas nos quais o conjunto de dados foi publicado. Caso o conjunto de dados esteja disponível em diversos idiomas, utilize valores múltiplos para esta propriedade. A propriedade ` dct:conformsTo (em inglês)` é utilizada para especificar o padrão adotado para os formatos de datas e horários.

      :stops-2015-05-05
          a dcat:Dataset ;
          dct:title "Bus stops of MyCity" ;
          dcat:keyword "transport","mobility","bus" ;
          dct:issued "2015-05-05"^^xsd:date ;
          dcat:contactPoint <http://data.mycity.example.com/transport/contact> ;
          dct:temporal <http://reference.data.gov.uk/id/year/2015> ;
          dct:spatial <http://sws.geonames.org/3399415> ;
          dct:publisher :transport-agency-mycity ;
          dct:accrualPeriodicity <http://purl.org/linked-data/sdmx/2009/code#freq-A> ;
          dcat:theme :mobility ;
          dcat:distribution :stops-2015-05-05.csv ;
          dct:language <http://id.loc.gov/vocabulary/iso639-1/en> ,
                       <http://id.loc.gov/vocabulary/iso639-1/pt> ;
          dct:conformsTo <http://www.iso.org/iso/home/standards/iso8601.htm>
          .

O exemplo abaixo demonstra uma **representação de localidade neutra** de uma tarifa de ônibus.

      tarifa_id,preço,tipo_moeda,método_pagamento,transfências,duração_transferência
      p,1.25,USD,0,0,0
      a,5.25,USD,0,0,0

#### Legível por pessoas

[Página de exemplo (em inglês)](https://www.w3.org/TR/dwbp/dwbp-example.html#locale-parameters) com uma descrição de conjunto de dados legível por pessoas.

#### <span property="xhv:role" resource="xhv:heading">Como Testar</span>

Verifique se os dados com conteúdo sensíveis à localidade estão representados em um formato de localidade neutra ou que, caso isso não seja possível, sejam fornecidos metadados de localidade relevante.

#### <span property="xhv:role" resource="xhv:heading">Evidência</span>

Requisitos Relevantes: [R-FormatLocalize (em inglês)](https://www.w3.org/TR/dwbp-ucr/#R-FormatLocalize), [R-MetadataAvailable (em inglês)](https://www.w3.org/TR/dwbp-ucr/#R-MetadataAvailable), [R-GeographicalContext (em inglês)](https://www.w3.org/TR/dwbp-ucr/#R-GeographicalContext), [R-FormatMachineRead (em inglês)](https://www.w3.org/TR/dwbp-ucr/#R-FormatMachineRead)

#### <span property="xhv:role" resource="xhv:heading">Benefícios:</span>

-   R - Reúso (Reuse)
-   C - Compreensão (Comprehension)
-   <img src="https://www.w3c.br/dwbp/images/reuse.svg" alt="Reuse" class="benefitIcon reuseIcon" />
-   <img src="https://www.w3c.br/dwbp/images/comprehension.svg" alt="Comprehension" class="benefitIcon comprehensionIcon" />

<span id="MultipleFormats" class="practicelab">Boa Prática 14: Fornecer dados em formatos múltiplos</span>

Disponibilize os dados em vários formatos quando mais de um formato for adequado ao potencial ou pretendido uso do dado.

#### <span property="xhv:role" resource="xhv:heading">Porque</span>

Disponibilizar dados em mais de um formato reduz os custos decorrentes da transformação de dados e minimiza a possibilidade de erros no processo de transformação. Caso muitos usuários precisem transformar os dados em um formato específico, publicá-los neste formato desde o início poupa tempo, dinheiro e evita erros de uma forma mais eficiente. Por último, aumenta o número de ferramentas e aplicações que podem processar os dados.

#### <span property="xhv:role" resource="xhv:heading">Resultado Pretendido</span>

O maior número possível de usuários será capaz de utilizar os dados sem ter que primeiramente transformá-los para seu formato de preferência.

#### <span property="xhv:role" resource="xhv:heading">Possível Abordagem para Implementação</span>

Considere os formatos de dados que provavelmente serão necessários e também alternativas que possivelmente serão úteis no futuro. Os publicadores de dados devem equilibrar o esforço necessário para disponibilizar os dados em muitos formatos com relação ao custo de fazê-lo; no entanto, fornecer pelo menos uma alternativa aumentará significativamente a utilidade dos dados. Para disponibilizar dados em mais de um formato você pode utilizar negociação de conteúdo conforme descrito na [Boa Prática Usar negociação de conteúdo para disponibilizar dados em formatos múltiplos](#Conneg).

Um aviso: identificadores de localidade dentro de conjuntos de dados, que podem ser expostos como identificadores de fragmentos em URIs, devem ser consistentes nos vários formatos.

EXEMPLO 14

Para alcançar uma ampla gama de consumidores de dados, Adrian decide também fornecer uma distribuição JSON do conjunto de dados dos pontos de ônibus. No exemplo a seguir a propriedade `dcat:distribution` é utilizada para associar o conjunto de dados `stops-2015-05-05` com suas duas distribuições: `stops-2015-05-05.csv` e ` stops-2015-05-05.json.`

      :stops-2015-05-05
          a dcat:Dataset ; 
          dcat:distribution :stops-2015-05-05.csv ;
          dcat:distribution :stops-2015-05-05.json
          .
      :stops-2015-05-05.csv
          a dcat:Distribution ;
          dcat:downloadURL <http://data.mycity.example.com/transport/dataset/bus/stops-2015-05-05.csv> ;
          dct:title "CSV distribution of stops-2015-05-05 dataset" ;
          dct:description "CSV distribution of the bus stops dataset of MyCity" ;
          dcat:mediaType "text/csv;charset=UTF-8" ;
          dct:license <http://creativecommons.org/licenses/by-sa/3.0/>
          .
      :stops-2015-05-05.json
          a dcat:Distribution ;
          dcat:downloadURL <http://data.mycity.example.com/transport/dataset/bus/stops-2015-05-05.json> ;
          dct:title "JSON distribution of stops-2015-05-05 dataset" ;
          dct:description "JSON distribution of the bus stops dataset of MyCity" ;
          dcat:mediaType "application/json" ;
          dct:license <http://creativecommons.org/licenses/by-sa/3.0/>
          .

#### <span property="xhv:role" resource="xhv:heading">Como Testar</span>

Verifique se o conjunto de dados completo está disponível em mais de um formato de dados.

#### <span property="xhv:role" resource="xhv:heading">Evidência</span>

Requisitos Relevantes: [R-FormatMultiple (em inglês)](https://www.w3.org/TR/dwbp-ucr/#R-FormatMultiple)

#### <span property="xhv:role" resource="xhv:heading">Benefícios</span>

-   R - Reúso (Reuse)
-   P - Facilidade de processamento (Processability)
-   <img src="https://www.w3c.br/dwbp/images/reuse.svg" alt="Reuse" class="benefitIcon reuseIcon" />
-   <img src="https://www.w3c.br/dwbp/images/processability.svg" alt="Processability" class="benefitIcon interoperabilityIcon" />

### <span property="xhv:role" resource="xhv:heading"><span class="secno">8.9 </span>Vocabulários de Dados</span>

[Vocabulários (em inglês)](https://www.w3.org/standards/semanticweb/ontology) definem os conceitos e as relações (também conhecidas como 'termos' ou 'atributos') utilizados para descrever e representar uma área de interesse. São utilizados para classificar os termos que podem ser utilizados em uma aplicação específica, caracterizar possíveis relações, e definir possíveis limitações na utilização destes termos. Vários sinônimos próximos de 'vocabulário' já foram cunhados, como por exemplo, ontologia, vocabulário controlado, glossário, taxonomia, lista de códigos, rede semântica.

Não há uma divisão precisa entre os artefatos referidos por estas denominações. No entanto, 'Ontologia' tende a denotar vocabulários de classes e propriedades que estruturam as descrições de recursos em conjuntos de dados (conectados). Em bases de dados relacionais, estes correspondem a nomes de tabelas e colunas; em XML, correspondem aos elementos definidos por um Schema XML. As ontologias são os principais blocos de construção para técnicas de inferência na Web Semântica. O primeiro meio oferecido pelo W3C para a criação de ontologias é RDF Schema \[<a href="#bib-RDF-SCHEMA" class="bibref">RDF-SCHEMA</a>\]. É possível definir ontologias mais expressivas com axiomas adicionais utilizando linguagens tais como as da Ontologia de Linguagens Web \[<a href="#bib-OWL2-OVERVIEW" class="bibref">OWL2-OVERVIEW</a>\].

Por outro lado, 'vocabulários controlados', 'esquematizações conceituais' e 'sistemas de organização de conhecimento' enumeram e definem recursos que podem ser empregados nas descrições realizadas com o tipo de vocabulário prévio como, por exemplo, vocabulários que estruturam as descrições de recursos em conjuntos de dados (conectados). Um conceito advindo de um glossário, como 'arquitetura', será utilizado, por exemplo, no campo de assunto para a descrição de um livro, (onde 'assunto' tenha sido definido em uma ontologia para livros). Geralmente não são necessários formalismos complexos para definir termos nestes vocabulários. Modelos mais simples foram propostos para representá-los e substituí-los, tais como o modelo de dados ISO 25964 \[<a href="#bib-ISO-25964" class="bibref">ISO-25964</a>\] ou o *Simple Knowledge Organization System* do W3C \[<a href="#bib-SKOS-PRIMER" class="bibref">SKOS-PRIMER</a>\].

<span id="ReuseVocabularies" class="practicelab">Boa Prática 15: Reutilizar vocabulários, dando preferência aos padronizados</span>

Utilize termos oriundos de vocabulários compartilhados, preferencialmente os padronizados, para codificar dados e metadados.

#### <span property="xhv:role" resource="xhv:heading">Porque</span>

A utilização de vocabulários já em uso por outros estimula e facilita o consenso em comunidades. Aumenta a interoperabilidade e reduz as redundâncias, incentivando assim a reutilização de seus próprios dados. Particularmente, a aplicação de vocabulários compartilhados para metadados (especialmente os metadados estruturais, de procedência, de qualidade e de versionamento) auxilia o processo de comparação e o processamento automático - tanto dos dados quanto dos metadados. Além disso, a referência a códigos e termos padronizados ajuda a evitar ambiguidade e conflitos entre elementos e valores similares.

#### <span property="xhv:role" resource="xhv:heading">Resultado Pretendido</span>

Melhorar a interoperabilidade e o consenso entre os publicadores e consumidores de dados.

#### <span property="xhv:role" resource="xhv:heading">Possível Abordagem para Implementação</span>

A seção de [Vocabulários (em inglês)](https://www.w3.org/TR/ld-bp/#VOCABULARIES) no documento *Best Practices for Publishing Linked Data* \[<a href="#bib-LD-BP" class="bibref">LD-BP</a>\] do W3C fornece orientação sobre a descoberta, avaliação e seleção de vocabulários existentes.

Organizações tais como a *Open Geospatial Consortium* (OGC), ISO, W3C, WMO, bibliotecas e serviços de pesquisa de dados, etc., disponibilizam listas de códigos, terminologias e vocabulários de Dados Conectados que podem ser utilizados por todos. Uma questão fundamental é garantir que o conjunto de dados, ou sua documentação, forneça contextualização suficiente (tanto em formatos legíveis por pessoas e por máquinas) para que os consumidores de dados possam recuperar e explorar o significado padronizado dos valores. No contexto da Web uma forma eficiente de fazer isto é utilizar identificadores (URIs) baseados na Web para recursos de vocabulário padronizado, tendo em mente que o mesmo URI pode ter rótulos multilíngues anexados para uma maior interoperabilidade em diferentes países. O glossário multilíngue da União Europeia, [Eurovoc (em inglês)](https://publications.europa.eu/en/web/eu-vocabularies), fornece um exemplo excelente.

Exemplo 15

1.  O vocabulário DCAT expressa os metadados referentes aos conjuntos de dados \[<a href="#bib-VOCAB-DCAT" class="bibref">VOCAB-DCAT</a>\] e reutiliza elementos de diversos vocabulários pré-existentes: Dublin Core, FOAF, SKOS e vCard. Reutilizar as propriedades do Dublin Core, tais como `dct:title`, em vez de criar novos (`dcat:title`, por exemplo) possibilita que os metadados baseados em DCAT possam ser consumidos por qualquer aplicação que seja capaz de ler e manipular as declarações do Dublin Core.
2.  No setor da cultura digital, o modelo de dados usado pela [Europeana](https://europeana.eu) ([EDM, em inglês](https://pro.europeana.eu/page/edm-documentation)) também faz uso extensivo de vocabulários compartilhados existentes, como Dublin Core, FOAF, SKOS, etc. Isto facilitou a adoção do EDM pelos fornecedores de dados da Europeana e auxiliou a posicioná-la como uma Boa Prática para iniciativas similares no mesmo setor. Por exemplo, o [perfil de aplicação de metadados (em inglês)](https://dp.la/info/developers/map/) da [*Digital Public Library of America* (em inglês)](https://dp.la) reutiliza o EDM e, portanto, emprega os diversos vocabulários em que o EDM se baseia. Como resultado, grandes quantidades de dados da cultura digital tornaram-se mais interoperáveis dentro do setor. Estes dados também são mais fáceis de reutilizar por consumidores de outras comunidades que não estejam familiarizados como os modelos e as terminologias tradicionais utilizados pelas bibliotecas, arquivos e museus.
3.  A Biblioteca do Congresso dos Estados Unidos publica listagens de idiomas ISO 639 como Dados Conectados (consulte \[<a href="#bib-ISO639-1-LOC" class="bibref">ISO639-1-LOC</a>\] para códigos de dois dígitos):  

        :stops
           dct:language <http://id.loc.gov/vocabulary/iso639-1/en> .

4.  A rede australiana [*Solid Earth and Environment Grid* (em inglês)](https://www.seegrid.csiro.au/) publica uma listagem de referências de URIs para elementos de escalas temporais geológicas da *International Commission on Stratigraphy's Chronostratigraphic Chart* tais como: `https://resource.geosciml.org/classifier/ics/ischart/Paleozoic` (em inglês) para a Era Paleozóica:  

        :dataset-005 a dcat:Dataset ;
            dct:temporal <http://resource.geosciml.org/classifier/ics/ischart/Paleozoic> .

5.  O Google mantém a especificação [*General Transit Feed Specification*](https://developers.google.com/transit/gtfs/) que define um formato para a publicação de dados de transporte público. Este formato baseia-se em um conjunto de campos tais como `nome_atalho_rota` (do inglês `route_short_name`) ou `tipo_rota` (do inglês `route_type`), que são cuidadosamente definidos e expostos a constantes *feedbacks* da comunidade para facilitar o consenso. As definições incluem especificações de valores codificados tais como os utilizados em `tipo_rota:`:  

        0 - Bondes, veículos leves sobre trilhos. Qualquer sistema  de veículo leve sobre trilhos ou no nível da rua dentro de uma área metropolitana.
        1 - Metrô, transporte subterrâneo. Qualquer tipo de sistema de transporte por trilhos dentro de uma área metropolitana.
        2 - Trilhos. Utilizados para transporte intermunicipal e viagem de longa distância.

    Observe que em uma modalidade que não seja de Dados Conectados, estes campos e códigos não possuem identificadores Web individuais, nem tampouco uma semântica legível por máquinas. Portanto, explorá-los demanda que os implementadores analisem a documentação e codifiquem interpretações em cada aplicação individual que consome os dados.

#### <span property="xhv:role" resource="xhv:heading">Como Testar</span>

Utilize repositórios de vocabulários como o repositório [*Linked Open Vocabularies* (em inglês)](https://lov.okfn.org) ou listagens de serviços mencionados em documentos de Boas Práticas específicas de tecnologia, tais como o *Best Practices for Publishing Linked Data* \[<a href="#bib-LD-BP" class="bibref">LD-BP</a>\] ou o [*Core Initial Context for RDFa and JSON-LD* (em inglês)](https://www.w3.org/2011/rdfa-context/rdfa-1.1); certifique-se de que as classes, propriedades, termos, elementos ou atributos utilizados para representar um conjunto de dados não repliquem aqueles definidos por vocabulários utilizados para outros conjuntos de dados.

Verifique se os termos ou códigos no vocabulário a serem utilizados estão definidos em uma organização de desenvolvimento de padrões tal como IETF, OGC e W3C etc., ou tenham sido publicados por uma autoridade adequada, tais como agências governamentais.

#### <span property="xhv:role" resource="xhv:heading">Evidência</span>

Requisitos Relevantes: [R-MetadataStandardize (em inglês)](https://www.w3.org/TR/dwbp-ucr/#R-MetadataStandardized), [R-MetadataDocum (em inglês)](https://www.w3.org/TR/dwbp-ucr/#R-MetadataDocum), [R-QualityComparable (em inglês)](https://www.w3.org/TR/dwbp-ucr/#R-QualityComparable), [R-VocabOpen (em inglês)](https://www.w3.org/TR/dwbp-ucr/#R-VocabOpen), [R-VocabReference (em inglês)](https://www.w3.org/TR/dwbp-ucr/#R-VocabReference)

#### <span property="xhv:role" resource="xhv:heading">Benefícios</span>

-   R - Reúso (Reuse)
-   P - Facilidade de processamento (Processability)
-   C - Compreensão (Comprehension)
-   T - Confiança (Trust)
-   I - Interoperabilidade (Interoperability)
-   <img src="https://www.w3c.br/dwbp/images/reuse.svg" alt="Reuse" class="benefitIcon reuseIcon" />
-   <img src="https://www.w3c.br/dwbp/images/processability.svg" alt="Processability" class="benefitIcon interoperabilityIcon" />
-   <img src="https://www.w3c.br/dwbp/images/comprehension.svg" alt="Comprehension" class="benefitIcon comprehensionIcon" />
-   <img src="https://www.w3c.br/dwbp/images/trust.svg" alt="Trust" class="benefitIcon interoperabilityIcon" />
-   <img src="https://www.w3c.br/dwbp/images/interoperability.svg" alt="Interoperability" class="benefitIcon interoperabilityIcon" />

<span id="ChooseRightFormalizationLevel" class="practicelab">Boa Prática 16: Escolher o nível de formalização adequado</span>

Escolha um nível de semântica formal que se ajuste tanto aos dados quanto às aplicações mais prováveis de serem utilizadas.

#### <span property="xhv:role" resource="xhv:heading">Porque</span>

Como Albert Einstein pode ou não ter dito: tudo deve ser feito da forma mais simples o possível, mas não de forma simplória.

A semântica formal auxilia a estabelecer especificações precisas que transmitam significados detalhados e, por um lado, utilizar um vocabulário complexo (ontologia), pode servir como base para tarefas tais como o raciocínio automatizado. Por outro lado, tais vocabulários complexos exigem mais esforços de produção e compreensão, o que pode dificultar seu reúso, sua comparação e conexão com bases de dados que os utilizem.

Caso os dados sejam suficientemente ricos, a ponto de permitir perguntas de pesquisa detalhadas (o fato de A, B e C serem verdadeiros e D, falso, leva à conclusão E), então algo semelhante ao Perfil OWL seria bastante apropriado \[<a href="#bib-OWL2-PROFILES" class="bibref">OWL2-PROFILES</a>\].

No entanto, não há nada de complicado em listagens de pontos de ônibus.

Escolher um vocabulário muito simples é sempre atrativo, mas há um perigo: o desejo de manter a simplicidade pode induzir o publicador a omitir alguns dados que fornecem informações importantes, tais como a localização geográfica dos pontos de ônibus, o que impediria que fossem exibidos em um mapa. Portanto, o equilíbrio deve ser atingido tendo em mente que o objetivo não é simplesmente compartilhar seus dados, mas que outros possam reutilizá-los.

#### <span property="xhv:role" resource="xhv:heading">Resultado Pretendido</span>

As aplicações mais prováveis serão suportadas sem um grau de complexidade maior que o necessário.

#### <span property="xhv:role" resource="xhv:heading">Possível Abordagem para Implementação</span>

Observe o que os seus pares já vêm fazendo. É provável que você irá se deparar com um vocabulário utilizado com frequência, que vem ao encontro de suas necessidades - mesmo que de forma aproximada. Provavelmente este é o vocabulário a ser utilizado.

Talvez você encontre um vocabulário que gostaria de utilizar, mas perceba uma restrição semântica que dificulta fazê-lo, como um domínio ou um grupo de restrições que não se aplica ao seu caso. Neste cenário, muitas vezes vale a pena entrar em contato com o editor do vocabulário para conversar sobre isso. É possível que os editores consigam remover tais restrição e proporcionar uma orientação adicional sobre como o vocabulário é utilizado de forma mais ampla.

O W3C disponibiliza uma lista de discussão em <public-vocabs@w3.org> \[[arquivo (em inglês)](https://lists.w3.org/Archives/Public/public-dwbp-vocabs/)\] onde questões referentes ao uso e desenvolvimento dos vocabulários são discutidas.

Caso esteja criando seu próprio vocabulário, mantenha as restrições semânticas ao mínimo que atenda às suas necessidades de modo a, novamente, incentivar a possibilidade de reúso por terceiros. Como exemplo, os *designers* da ontologia SKOS (muito utilizada), minimizaram seu compromisso ontológico questionando todos os axiomas formais sugeridos para suas classes e propriedades. Muitas vezes estes foram rejeitados porque seu uso, embora benéfico para muitas aplicações, criaria inconsistências formais para os dados de outras aplicações, o que tornaria a ontologia SKOS inteiramente não utilizável para estas. A propriedade skos:broader, por exemplo, não foi definida como uma propriedade transitiva, muito embora teria se adequado à forma como links hierárquicos entre conceitos são criados em muitos glossários \[<a href="#bib-SKOS-DESIGN" class="bibref">SKOS-DESIGN</a>\]. Ao selecionar um vocabulário busque evidências do tipo 'design para amplo uso'.

Outro exemplo de 'design para amplo uso' pode ser encontrado no [schema.org](https://schema.org/). Lançado em junho de 2011, schema.org foi adotado massivamente em pouco tempo em parte por conta de sua abordagem informativa - e não normativa - para definir os tipos de objetos com os quais as propriedades podem ser usadas. Por exemplo, os valores da propriedade [`autor`](https://schema.org/author) são apenas 'esperados' que sejam do tipo `Organização` ou `Pessoa`. No tipo `CreativeWork,` 'pode ser usado' `Autor`, mas esta não é uma restrição rigorosa. Novamente, esta abordagem de design torna o schema.org uma boa escolha como vocabulário a ser usado ao codificar dados para compartilhamento.

EXEMPLO 16

Adrian codifica os dados dos pontos de ônibus utilizando a especificação GTFS \[<a href="#bib-GTFS" class="bibref">GTFS</a>\] porque:

-   seu uso é generalizado;
-   oferece um nível de detalhamento que permite ajuste aos seus dados;
-   a motivação para publicar dados dos pontos de ônibus é oferecer suporte para o desenvolvimento de aplicações que auxiliem usuários de ônibus, e a GTFS é elaborada justamente com este propósito.

#### <span property="xhv:role" resource="xhv:heading">Como Testar</span>

Esta é quase sempre uma questão de análise subjetiva, para a qual não há um teste objetivo. Como diretriz geral:

-   Vocabulários comuns, como o Dublin Core e o schema.org, estão sendo utilizados?
-   Os fatos estão declarados de forma simples e podem ser facilmente recuperados?
-   Para linguagens de representação de conhecimento formal, a aplicação de um mecanismo de inferência sobre dados que usam um determinado vocabulário não produz muitas instruções desnecessárias para os aplicativos desejados.

#### <span property="xhv:role" resource="xhv:heading">Evidência</span>

Requisitos Relevantes: [R-VocabReference (em inglês)](https://www.w3.org/TR/dwbp-ucr/#R-VocabReference), [R-QualityComparable (em inglês)](https://www.w3.org/TR/dwbp-ucr/#R-QualityComparable)

#### <span property="xhv:role" resource="xhv:heading">Benefícios </span>

-   R - Reúso (Reuse)
-   C - Compreensão (Comprehension)
-   I - Interoperabilidade (Interoperability)
-   <img src="https://www.w3c.br/dwbp/images/reuse.svg" alt="Reuse" class="benefitIcon reuseIcon" />
-   <img src="https://www.w3c.br/dwbp/images/comprehension.svg" alt="Comprehension" class="benefitIcon comprehensionIcon" />
-   <img src="https://www.w3c.br/dwbp/images/interoperability.svg" alt="Interoperability" class="benefitIcon interoperabilityIcon" />

### <span property="xhv:role" resource="xhv:heading"><span class="secno">8.10 </span>Acesso a Dados</span>

Garantir acesso fácil aos dados na Web permite que tanto pessoas quanto máquinas beneficiem-se do compartilhamento de dados utilizando a infraestrutura Web. Por padrão, a Web oferece acesso através dos métodos do Protocolo de Transferência de Hipertexto, do inglês *Hypertext Transfer Protocol (HTTP)*. Isto proporciona acesso aos dados em um nível atômico de transação. Este acesso pode ocorrer por meio de um simples *download* em massa de um arquivo ou, quando os dados são distribuídos por meio de arquivos múltiplos ou requerem métodos de recuperação mais sofisticados, por meio de uma API. Estes dois métodos básicos - *download* em massa e API - não são mutuamente excludentes.

No *download* em massa os dados geralmente estão do lado do servidor pré-processado, onde múltiplos arquivos ou árvores de diretório de arquivos são fornecidos como um único arquivo para *download*. Quando dados em massa estão sendo recuperados a partir de soluções de sistema que não são arquivos, dependendo das comunidades de usuários de dados, o publicador de dados pode oferecer APIs para dar suporte a uma séries de operações de recuperação, que representam uma única transação.

Para dados que são gerados em tempo real (ou quase em tempo real) os publicadores devem utilizar um sistema automatizado que permita acesso imediato a dados cronologicamente sensíveis, tais como informações sobre emergências, dados de previsão do tempo ou métricas de monitoramento do sistema. Em geral, as APIs devem ser disponibilizadas para permitir que terceiros pesquisem e recuperem automaticamente estes dados.

Além de auxiliar a automatizar as sequências de dados em tempo real, as APIs são adequadas para todos os tipos de dados na Web. Embora geralmente demande mais trabalho em relação à disponibilização de arquivos para *download*, os publicadores vêm progressivamente considerando que a entrega de uma API estável, bem documentada e baseada em padrões, vale o esforço.

Para alguns publicadores de dados é importante saber quem fez *download* dos dados e como os utilizaram. Existem duas abordagens possíveis para reunir estas informações. Primeiramente, os publicadores podem convidar os usuários a fornecê-las, de modo que a publicação continuada dos dados e a promoção de seu próprio trabalho funciona como incentivo. Uma segunda abordagem menos amistosa é exigir o registro antes que os dados possam ser acessados. Em ambos os casos, o vocabulário *Dataset Usage Vocabulary* \[<a href="#bib-VOCAB-DUV" class="bibref">VOCAB-DUV</a>\] fornece uma estrutura para a representação de tais informações. Ao coletar dados dos usuários, o publicador deve explicar porque e como as informações coletadas dos usuários (explícita ou implicitamente) serão utilizadas. Sem uma política clara, os usuários podem ter receio de fornecer informações, o que resultaria na redução do valor do conjunto de dados.

<span id="BulkAccess" class="practicelab">Boa Prática 17: Fornecer *download* em massa *(bulk download)*</span>

Permitir que os consumidores acessem o conjunto de dados completo em uma única solicitação.

#### <span property="xhv:role" resource="xhv:heading">Porque</span>

Quando dados na Web estiverem distribuídos através de muitos URIs, mas podem ser organizados logicamente como um pacote, acessar os dados em massa pode ser útil. O acesso em massa garante uma forma consistente de tratar os dados como um conjunto de dados. Acessar dados individualmente ao longo de muitas consultas pode ser difícil e, caso forem usados para remontar o conjunto de dados completo, isso pode levar a uma manipulação inconsistentes dos dados.

#### <span property="xhv:role" resource="xhv:heading">Resultado Pretendido</span>

Transferências de arquivos grandes, que exigiriam mais tempo do que um usuário típico consideraria razoável, serão possíveis por meio de protocolos de transferência de arquivos, do inglês *file-transfer protocols* (FTP)

#### <span property="xhv:role" resource="xhv:heading">Possível Abordagem para Implementação</span>

Dependendo da natureza dos dados e das necessidades dos consumidores, possíveis abordagens de *download* em massa podem incluir:

-   Para conjuntos de dados que existem inicialmente como arquivos múltiplos, o pré-processamento de uma cópia dos dados em um único arquivo tornando-os acessíveis para *download* a partir de um URI. Para conjuntos de dados maiores, o arquivo também pode ser comprimido.
-   Hospedagem de uma API que permita acessar um *download* em massa, além de consultas dinâmicas. Este método é útil para que seja possível capturar um snapshot completo dos dados dinâmicos.
-   Para conjuntos de dados muito grandes, transferências de arquivos em massa podem ser viabilizados por outros meios que não HTTP, como [bbcp (em inglês)](https://www.slac.stanford.edu/%7Eabh/bbcp/) ou [GridFTP (em inglês)](https://en.wikipedia.org/wiki/GridFTP).

O *download* em massa deve incluir os metadados que descrevem o conjunto de dados. Metadados de descoberta \[<a href="#bib-VOCAB-DCAT" class="bibref">VOCAB-DCAT</a>\] também devem ser disponibilizados além do *download* em massa.

EXEMPLO 17

O Departamento de Trânsito MyCity pode ter um conjunto de dados extenso, com horários de chegada para diversos modais de transporte coletados ao longo de um ano inteiro. Os dados podem ser armazenados na forma de um arquivo CSV para cada mês. Suponha que o departamento queira disponibilizar os dados por meio de um *download* em massa que contenha todos os arquivos CSV para uma hackatona. Uma vez que todos os dados de chegada, para todos os serviços de trânsito, seriam uma quantidade enorme de dados e, que eles querem fornecer todos os meses do ano como um único conjunto de dados, devem oferecê-lo como um único arquivo comprimido (tarred e gzipped).

#### <span property="xhv:role" resource="xhv:heading">Como Testar</span>

Verifique se o conjunto de dados completo pode ser acessado com apenas uma única solicitação.

#### <span property="xhv:role" resource="xhv:heading">Evidência</span>

Requisitos Relevantes: [R-AccessBulk (em inglês)](https://www.w3.org/TR/dwbp-ucr/#R-AccessBulk)

#### <span property="xhv:role" resource="xhv:heading">Benefícios </span>

-   R - Reúso (Reuse)
-   A - Facilidade de acesso (Access)
-   <img src="https://www.w3c.br/dwbp/images/reuse.svg" alt="Reuse" class="benefitIcon reuseIcon" />
-   <img src="https://www.w3c.br/dwbp/images/access.svg" alt="Access" class="benefitIcon accessIcon" />

<span id="ProvideSubsets" class="practicelab"> Boa Prática 18: Fornecer subconjuntos para conjuntos de dados extensos </span>

Caso seu conjunto de dados seja grande, permitir que usuários e aplicações trabalhem prontamente por meio do uso de subconjuntos de seus dados.

#### <span property="xhv:role" resource="xhv:heading">Porque</span>

Conjuntos de dados muito extensos podem ser difíceis de mover de um lugar para outro. Também pode ser inconveniente para os usuários armazenar ou analisar um conjunto de dados grande. Os usuários não deveriam ter que fazer *download* de um conjunto de dados completo caso apenas necessitem um subconjunto do mesmo. Além disso, aplicações Web que acessam conjuntos de dados grandes operam com melhor desempenho caso seus desenvolvedores consigam apropriar-se das vantagens do ‘carregamento lento’, pois é possível trabalhar com porções menores de um todo e acessar novas porções apenas quando necessário. A possibilidade de trabalhar com subconjuntos de dados também permite que o processamento offline funcione com mais eficiência. Em particular, as aplicações em tempo real beneficiam-se bastante desta possibilidade pois podem ser atualizadas mais rapidamente.

#### <span property="xhv:role" resource="xhv:heading">Resultado Pretendido</span>

Pessoas e aplicações serão capazes de acessar subconjuntos de um conjunto de dados ao invés de necessariamente acessar o conjunto como um todo, com uma proporção maior de dados necessários em relação aos não necessários para o maior número de usuários. Conjuntos de dados estáticos que os usuários do domínio considerem grandes demais, serão passíveis de serem descarregados em porções menores. As APIs tornarão subconjuntos ou partes filtradas de dados disponíveis, com granularidade dependendo das necessidades do domínio e das demandas de desempenho da aplicação Web.

#### <span property="xhv:role" resource="xhv:heading">Possível Abordagem para Implementação</span>

Considere os possíveis casos para os quais seu conjunto de dados será usado e determine quais tipos de subconjuntos são provavelmente os mais úteis. Uma API é normalmente a abordagem mais flexível para servir subconjuntos de dados, pois permite a personalização dos dados transferidos, tornando os subconjuntos disponíveis muito mais propensos a fornecer os dados requisitados – e poucos dados não requisitados – para qualquer situação. A granularidade deve ser adequada para velocidades de acesso de aplicações Web. (Uma chamada API que retorna dentro de um segundo permite que uma aplicação apresente uma interatividade que pareça natural. Dados que demoram mais do que dez segundos provavelmente farão com que os usuários suspeitem de falha).

Outro modo de formar subconjuntos a partir de um conjunto de dados é dividi-lo em unidades menores e tornar tais unidades disponíveis individualmente para *download* ou para visualizações.

Também pode ser útil marcar um conjunto de dados de forma que seções individuais (ou até mesmo porções ainda menores, se por acaso os casos de uso assim o justifiquem) possam ser processadas separadamente. Uma forma de fazê-lo é indicando “fatias” utilizando o vocabulário [*RDF Data Cube Vocabulary* (em inglês)](https://www.w3.org/TR/vocab-data-cube/#cubes-slices).

EXEMPLO 18

O Departamento de Trânsito MyCity vem coletando dados detalhados sobre utilização de passageiros há vários anos. Este é um conjunto de dados muito grande, abarcando quantidade de passageiros por tipo de trânsito, rotas, veículos, motoristas, ponto de partida e de chegada, tipos de tíquetes, horários de início dos serviços, etc. O departamento também descobriu que uma grande variedade de stakeholders estão interessados em fazer *downloads* de diversos subconjuntos de tais dados. As pessoas que gerenciam cada um destes sistemas de trânsito querem acessar somente os dados referentes ao seu próprio modal de transporte, os planejadores urbanos querem somente os números de embarque ou desembarque em cada parada, o departamento de finanças quer apenas os números dos diversos tipos de tíquetes vendidos e outros stakeholders querem ainda outros tipos de subconjuntos diversos. O departamento criou um sítio Web onde os usuários podem selecionar quais variáveis são de seu interesse, definir intervalos entre algumas destas variáveis e fazer *download* somente do subconjunto de que necessita.

#### <span property="xhv:role" resource="xhv:heading">Como Testar</span>

Verifique se o conjunto de dados como um todo pode ser acessado por meio de solicitações múltiplas que acessem unidades menores.

#### <span property="xhv:role" resource="xhv:heading">Evidência</span>

Requisitos Relevantes: [R-Citable (em inglês)](https://www.w3.org/TR/dwbp-ucr/#R-Citable), [R-GranularityLevels (em inglês)](https://www.w3.org/TR/dwbp-ucr/#R-GranularityLevels), [R-UniqueIdentifier (em inglês)](https://www.w3.org/TR/dwbp-ucr/#R-UniqueIdentifier), [R-AccessRealTime (em inglês)](https://www.w3.org/TR/dwbp-ucr/#R-AccessRealTime)

#### <span property="xhv:role" resource="xhv:heading">Benefícios </span>

-   R - Reúso (Reuse)
-   L - Capacidade de conexão (Linkability)
-   A - Facilidade de acesso (Access)
-   P - Facilidade de processamento (Processability)
-   <img src="https://www.w3c.br/dwbp/images/reuse.svg" alt="Reuse" class="benefitIcon reuseIcon" />
-   <img src="https://www.w3c.br/dwbp/images/linkability.svg" alt="Linkability" class="benefitIcon linkabilityIcon" />
-   <img src="https://www.w3c.br/dwbp/images/access.svg" alt="Access" class="benefitIcon accessIcon" />
-   <img src="https://www.w3c.br/dwbp/images/processability.svg" alt="Processability" class="benefitIcon interoperabilityIcon" />

<span id="Conneg" class="practicelab">Boa Prática 19: Usar negociação de conteúdo para disponibilizar dados em formatos múltiplos</span>

Usar negociação de conteúdo para disponibilizar dados em formatos múltiplos, para além de extensões de arquivos.

#### <span property="xhv:role" resource="xhv:heading">Porque</span>

É possível disponibilizar dados em uma página HTML com dados legíveis por pessoas mesclados a dados legíveis por máquina usando RDFa, por exemplo. No entanto, como a Arquitetura da Web \[<a href="#bib-WEBARCH" class="bibref">WEBARCH</a>\] e o vocabulário DCAT \[<a href="#bib-VOCAB-DCAT" class="bibref">VOCAB-DCAT</a>\] deixam claro, um recurso como um conjunto de dados, por exemplo, pode ter muitas representações. Os mesmos dados podem estar disponíveis em JSON, XML, RDF, CSV e HTML. Estas representações múltiplas podem ser disponibilizadas por meio de uma API, no entanto devem ser disponibilizadas a partir do *mesmo* URL utilizando-se a [negociação de conteúdo (em inglês)](https://www.w3.org/DesignIssues/Conneg) para retornar a representação apropriada (o que o DCAT denomina uma distribuição). URIs específicos podem ser usados para identificar representações individuais dos dados diretamente, ignorando a negociação de conteúdo.

#### <span property="xhv:role" resource="xhv:heading">Resultado Pretendido</span>

A negociação de conteúdo permitirá habilitar recursos diversos ou representações diferentes do mesmo recurso, a ser disponibilizado de acordo com a solicitação feita pelo cliente.

#### <span property="xhv:role" resource="xhv:heading">Possível Abordagem para Implementação</span>

Uma abordagem possível para implementação é configurar o servidor Web para lidar com a negociação de conteúdo do recurso solicitado.

O formato específico da representação do recurso pode ser acessado pelo URI ou pelo tipo de conteúdo da Solicitação HTTP.

EXEMPLO 19

Representações diferentes do conjunto de dados dos pontos de ônibus podem ser disponibilizadas conforme o tipo de conteúdo específico da Solicitação HTTP:  
Utilizar `cURL` para obter o conteúdo de `https://data.mycity.example.com/transport/dataset/bus/stops` representado nos formatos CSV e JSON-LD.

    curl -L -H "Accept: text/csv" http://data.mycity.example.com/transport/dataset/bus/stops

    curl -L -H "Accept: application/ld+json" http://data.mycity.example.com/transport/dataset/bus/stops

#### <span property="xhv:role" resource="xhv:heading">Como Testar</span>

Verifique as representações disponíveis do recurso e tente obtê-las especificando o conteúdo aceito no cabeçalho da Solicitação HTTP.

#### <span property="xhv:role" resource="xhv:heading">Evidência</span>

Requisitos Relevantes: [R-FormatMachineRead (em inglês)](https://www.w3.org/TR/dwbp-ucr/#R-FormatMachineRead), [R-FormatMultiple (em inglês)](https://www.w3.org/TR/dwbp-ucr/#R-FormatMultiple)

#### <span property="xhv:role" resource="xhv:heading">Benefícios</span>

-   R - Reúso (Reuse)
-   A - Facilidade de acesso (Access)
-   <img src="https://www.w3c.br/dwbp/images/reuse.svg" alt="Reuse" class="benefitIcon reuseIcon" />
-   <img src="https://www.w3c.br/dwbp/images/access.svg" alt="Access" class="benefitIcon accessIcon" />

<span id="AccessRealTime" class="practicelab"> Boa Prática 20: Fornecer acesso em tempo real </span>

Quando os dados forem produzidos em tempo real, disponibilizá-los na Web em tempo real ou quase em tempo real.

#### <span property="xhv:role" resource="xhv:heading">Porque</span>

A presença de dados em tempo real na Web viabiliza o acesso a dados cronologicamente sensíveis e incentiva o desenvolvimento de aplicações Web em tempo real. O acesso em tempo real depende de que os produtores de dados em tempo real disponibilizem seus dados prontamente ao publicador de dados. A necessidade de fornecer acesso em tempo real para uma determinada aplicação precisará ser avaliada caso a caso, considerando as taxas de atualização, a latência introduzida pelos passos de pós-processamento de dados, a disponibilidade de infraestrutura e os dados de que os consumidores necessitam. Além de tornar os dados acessíveis, os publicadores de dados podem fornecer informações adicionais descrevendo lacunas, erros e anomalias de dados bem como atrasos de publicações.

#### <span property="xhv:role" resource="xhv:heading">Resultado Pretendido</span>

As aplicações serão capazes de acessar dados temporalmente críticos em tempo real ou quase em tempo real, onde tempo real significa um intervalo de milissegundos até poucos segundos após a criação dos dados.

#### <span property="xhv:role" resource="xhv:heading">Possível Abordagem para Implementação</span>

Uma possível abordagem para implementação é que os publicadores configurem um serviço Web que forneça uma conexão de forma que, ao receberem dados em tempo real pelo serviço Web, estes possam ser instantaneamente disponibilizados aos consumidores por *polling* ou *streaming.*

Caso os dados sejam consultados com pouca frequência pelos consumidores, os dados em tempo real poderão ser acessados após solicitação do consumidor para os dados dados mais recentes por meio de uma API. Os publicadores de dados fornecerão uma API para facilitar estas solicitações de somente de leitura.

Caso os dados sejam consultados com frequência pelos consumidores, a disponibilização dos dados por *streaming* poderá ser mais apropriada quando os dados forem enviados por meio de uma API. Embora técnicas de *streaming* não fazem parte do escopo desta boa prática, há muitos protocolos e tecnologias padronizados disponíveis (por exemplo, *Server-sent Events, WebSocket, EventSourceAPI*) para clientes que recebem atualizações automáticas do servidor.

EXEMPLO 20

Neste exemplo, o Departamento de Transportes de MyCity mantém um registro de todos os dados de GPS dos ônibus. A API fornece aos consumidores informações de status em tempo real usando uma API REST. A API permite que o consumidor selecione:

-   Atual localização do ônibus
-   Tempo de chegada do ônibus
-   Status do ônibus

#### Descrição da API

<table><thead><tr class="header"><th>Descrição</th><th>API</th><th>Parâmetros</th></tr></thead><tbody><tr class="odd"><td>Posição do ônibus</td><td><code>{root}/bus/position/current</code></td><td>bus_id</td></tr><tr class="even"><td>Tempo de chegada do ônibus a um determinado ponto de ônibus</td><td><code>{root}/bus/arrival_time</code></td><td>bus_id, stop_id</td></tr><tr class="odd"><td>Status do ônibus<br />
(Possibilidade de retorno: “no horário”, “atrasado”, “fora de serviço”)</td><td><code>{root}/bus/status</code></td><td>bus_id</td></tr></tbody></table>

#### <span property="xhv:role" resource="xhv:heading">Como Testar</span>

Para testar acesso de dados em tempo real de forma adequada os dados terão que ser rastreados desde o instante em que são inicialmente coletados até o momento em que são publicados e acessados. \[<a href="#bib-PROV-O" class="bibref">PROV-O</a>\] pode ser usado para descrever estas atividades. Deve-se tomar cuidado ao analisar acesso em tempo real para sistemas formados por vários sistemas de computador. Por exemplo, testes que dependam de registros temporais de relógios de parede podem refletir inconsistências entre os sistemas de computadores individuais em oposição à latência de tempo de publicação dos dados.

#### <span property="xhv:role" resource="xhv:heading">Evidência</span>

Requisitos Relevantes: [R-AccessRealTime (em inglês)](https://www.w3.org/TR/dwbp-ucr/#R-AccessRealTime)

#### <span property="xhv:role" resource="xhv:heading">Benefícios</span>

-   R - Reúso (Reuse)
-   A - Facilidade de acesso (Access)
-   <img src="https://www.w3c.br/dwbp/images/reuse.svg" alt="Reuse" class="benefitIcon reuseIcon" />
-   <img src="https://www.w3c.br/dwbp/images/access.svg" alt="Access" class="benefitIcon accessIcon" />

<span id="AccessUptoDate" class="practicelab"> Boa Prática 21: Fornecer dados atualizados </span>

Disponibilizar dados de forma atualizada e explicitar a frequência de atualização

#### <span property="xhv:role" resource="xhv:heading">Porque</span>

A disponibilidade dos dados na Web deve corresponder rigorosamente à data de criação ou coleta dos dados, eventualmente após estes terem sido processados ou alterados. Sincronizar cuidadosamente a publicação dos dados com a frequência de atualização incentiva a confiança do consumidor e o reúso dos dados.

#### <span property="xhv:role" resource="xhv:heading">Resultado Pretendido</span>

Os dados na Web serão atualizados em tempo hábil para que a maior parte dos dados mais recentes disponibilizados online reflitam os dados mais recentes divulgados por qualquer outro canal. Quando novos dados estiverem disponíveis, serão publicados na Web o mais rapidamente possível.

#### <span property="xhv:role" resource="xhv:heading">Possível Abordagem para Implementação</span>

Novas versões do conjunto de dados podem ser publicadas na Web em uma programação padrão, seguindo as [Boas Práticas para Versionamento de Dados.](#dataVersioning) A publicação na Web pode fazer parte do processo de lançamento de novas versões dos dados. Vincular a publicação na Web a este processo e nomear uma pessoa específica como responsável para esta tarefa pode ajudar a prevenir que os dados fiquem desatualizados. Para limitar as expectativas do consumidor por atualizações futuras, você pode incluir um texto legível por pessoas com a frequência esperada de publicação e também fornecer metadados legíveis por máquinas indicando a frequência.

EXEMPLO 21

Suponha que a frequência de atualização do conjunto de dados dos pontos de ônibus seja anual. Para descrever a frequência com que novos dados são adicionados ao conjunto de dados, pode ser utilizada a propriedade `dct:accrualPeriodicity`. Para refletir o cronograma atualizado dos dados, é criada uma nova versão do conjunto de dados (`stops-2016-05-05`). É importante notar que novas versões podem ser criadas antes da data programada, porém o publicador deve se assegurar de que versões adicionais sejam publicadas na Web tão prontamente quanto as versões equivalentes programadas.

       :stops-2016-05-05
          a dcat:Dataset ;
          dct:title "Bus stops of MyCity" ;
          dcat:keyword "transport","mobility","bus" ;
          dct:issued "2016-05-05"^^xsd:date ;
          ...
          dct:accrualPeriodicity <http://purl.org/linked-data/sdmx/2009/code#freq-A> ;
          ...
          dct:isVersionOf :stops-2015-05-05 ;
          pav:previousVersion stops-2015-12-17 ;
          rdfs:comment "O conjunto de dados pontos de ônibus (bus stops) foi atualizado para refletir a criação de novos pontos de parada de ônibus e para acompanhar a frequência das atualizações” ;
          owl:versionInfo "1.2" ;
          pav:version "1.2"
          .
          

#### <span property="xhv:role" resource="xhv:heading">Como Testar</span>

Verifique se a frequência das atualizações encontra-se declarada e se a última cópia publicada na Web não é mais antiga do que a data prevista pela frequência de atualização declarada.

#### <span property="xhv:role" resource="xhv:heading">Evidência</span>

Requisitos Relevantes: [R-AccessUptodate (em inglês)](https://www.w3.org/TR/dwbp-ucr/#R-AccessUpToDate)

#### <span property="xhv:role" resource="xhv:heading">Benefícios</span>

-   R - Reúso (Reuse)
-   A - Facilidade de acesso (Access)
-   <img src="https://www.w3c.br/dwbp/images/reuse.svg" alt="Reuse" class="benefitIcon reuseIcon" />
-   <img src="https://www.w3c.br/dwbp/images/access.svg" alt="Access" class="benefitIcon accessIcon" />

<span id="DataUnavailabilityReference" class="practicelab">Boa Prática 22: Fornecer uma explicação para os dados que não estão disponíveis</span>

Para dados que não estão disponibilizados fornecer uma explicação sobre como os dados podem ser acessados e quem pode fazê-lo.

#### <span property="xhv:role" resource="xhv:heading">Porque</span>

Publicar documentação online sobre dados não disponíveis fornece meios para que os publicadores identifiquem explicitamente lacunas de conhecimento. Isto fornece uma explicação contextual para comunidades de consumidores e desta forma incentiva o uso dos dados que *estão* disponíveis.

#### <span property="xhv:role" resource="xhv:heading">Resultado Pretendido</span>

Os consumidores saberão que os dados referidos, extraídos do conjunto de dados corrente, não estão disponíveis ou apenas podem ser disponibilizados sob condições diferentes.

#### <span property="xhv:role" resource="xhv:heading">Possível Abordagem para Implementação</span>

Dependendo do contexto da máquina e/ou das pessoas, existem várias maneiras de indicar indisponibilidade de dados. Os publicadores de dados podem publicar um documento em HTML – que dá uma explicação legível por pessoas para a indisponibilidade de dados. Da perspectiva da interface de aplicação de uma máquina, podem ser utilizados códigos de status HTTP apropriados, com mensagens personalizadas e legíveis por pessoas. Exemplos dos códigos de status incluem: 303 (veja outros, do inglês *see other*), 410 (removido permanentemente, do inglês *permanently removed*), 503 (serviço \*fornecer dados\* não disponível, do inglês *service \*providing data\* unavailable*).

EXEMPLO 22

O conjunto de dados criado para os pontos de ônibus pode conter dados sensíveis do motorista do ônibus, por exemplo. Neste caso o publicador fornece uma justificativa informando aos potenciais usuários que os dados pessoais do motorista de ônibus não estão disponíveis.

#### <span property="xhv:role" resource="xhv:heading">Como Testar</span>

Quando o conjunto de dados incluir referências a dados que não estejam mais disponíveis ou que não estejam disponíveis para todos os usuários, verifique se explicações sobre o que está faltando e instruções para obter acesso (se possível) são fornecidas. Verifique se um código de resposta HTTP legítimo é recebido na faixa de 400 ou 500 ao tentar obter dados indisponíveis.

#### <span property="xhv:role" resource="xhv:heading">Evidência</span>

Requisitos Relevantes: [R-AccessLevel (em inglês)](https://www.w3.org/TR/dwbp-ucr/#R-AccessLevel), [R-SensitivePrivacy (em inglês)](https://www.w3.org/TR/dwbp-ucr/#R-SensitivePrivacy), [R-SensitiveSecurity (em inglês)](https://www.w3.org/TR/dwbp-ucr/#R-SensitiveSecurity)

#### <span property="xhv:role" resource="xhv:heading">Benefícios</span>

-   R - Reúso (Reuse)
-   T - Confiança (Trust)
-   <img src="https://www.w3c.br/dwbp/images/reuse.svg" alt="Reuse" class="benefitIcon reuseIcon" />
-   <img src="https://www.w3c.br/dwbp/images/trust.svg" alt="Trust" class="benefitIcon interoperabilityIcon" />

#### <span property="xhv:role" resource="xhv:heading"><span class="secno">8.10.1 </span> APIs de Acesso a Dados</span>

<span id="useanAPI" class="practicelab"> Boa Prática 23: Disponibilizar dados por meio de uma API</span>

Disponibilizar uma API para servir os dados caso você tenha recursos para tanto.

##### <span property="xhv:role" resource="xhv:heading">Porque</span>

Uma APIoferece aos consumidores de seus dados maior flexibilidade e facilidade de processamento. Ela pode habilitar o uso de dados em tempo real, realizar filtragens a partir de solicitações e permite trabalhar com os dados em um nível atômico. Caso o seu conjunto de dados seja grande, frequentemente atualizado ou altamente complexo, é provável que uma API seja a melhor opção para publicar seus dados.

##### <span property="xhv:role" resource="xhv:heading">Resultado Pretendido</span>

Os desenvolvedores terão acesso programático aos dados para usar em suas próprias aplicações, com os dados atualizados e sem exigir esforço por parte dos consumidores. As aplicações Web terão a capacidade de obter dados específicos consultando uma interface programática.

##### <span property="xhv:role" resource="xhv:heading">Possível Abordagem para implementação</span>

Criar uma API é um pouco mais complexo do que publicar dados para *download*.Demanda algum conhecimento de como construir uma aplicação Web. No entanto, não é necessário construir uma a partir do zero. Caso uma plataforma de gerenciamento de dados seja utilizada, tal como a CKAN, você poderá habilitar uma API já existente. Muitas estruturas de desenvolvimento Web incluem suporte para APIs e também disponibilizam estruturas projetadas especificamente para a construção de APIs personalizadas.

Rails (Ruby), Django (Python) e Express (NodeJS) são alguns exemplos de estruturas de desenvolvimento Web que oferecem suporte para criação de APIs. Exemplos de estruturas API incluem Swagger, Apigility, Restify e Restlet.

EXEMPLO 23

Além de fornecer *downloads* de dados em massa sobre transporte público, Adrian decide oferecer um mecanismo mais flexível de acesso aos dados. Para tanto ele desenvolve uma API para oferecer acesso aos pontos de ônibus, às rotas de ônibus e às informações em tempo real sobre os pontos de ônibus. Consulte os [exemplos deste uso (em inglês)](https://www.w3.org/TR/dwbp/dwbp-api-example.html).

##### <span property="xhv:role" resource="xhv:heading">Como Testar</span>

Verifique se um cliente de teste pode simular chamadas e se a API responde de acordo com o previsto.

##### <span property="xhv:role" resource="xhv:heading">Evidência</span>

Requisitos Relevantes: [R-AccessRealTime (em inglês)](https://www.w3.org/TR/dwbp-ucr/#R-AccessRealTime), [R-AccessUpToDate (em inglês)](https://www.w3.org/TR/dwbp-ucr/#R-AccessUpToDate)

##### <span property="xhv:role" resource="xhv:heading">Benefícios</span>

-   R - Reúso (Reuse)
-   P - Facilidade de processamento (Processability)
-   I - Interoperabilidade (Interoperability)
-   A - Facilidade de acesso (Access)
-   <img src="https://www.w3c.br/dwbp/images/reuse.svg" alt="Reuse" class="benefitIcon reuseIcon" />
-   <img src="https://www.w3c.br/dwbp/images/processability.svg" alt="Processability" class="benefitIcon interoperabilityIcon" />
-   <img src="https://www.w3c.br/dwbp/images/interoperability.svg" alt="Interoperability" class="benefitIcon interoperabilityIcon" />
-   <img src="https://www.w3c.br/dwbp/images/access.svg" alt="Access" class="benefitIcon accessIcon" />

<span id="APIHttpVerbs" class="practicelab"> Boa Prática 24: Usar padrões Web como base para construção de APIs </span>

Ao desenvolver APIs, utilizar um estilo arquitetônico baseado nas tecnologias da própria Web.

##### <span property="xhv:role" resource="xhv:heading">Porque</span>

As APIs construídas com base nos padrões Web fortalecem a Web. Por exemplo, utilizar verbos HTTP (do inglês, *HTTP verbs*) como métodos e URLs que se orientam diretamente a recursos individuais, ajuda a evitar o acoplamento apertado entre solicitações e respostas, produzindo assim uma API de manutenção simples, e que pode ser facilmente compreendida e utilizada por muitos desenvolvedores. O fato de que a Web é apátrida pode ser um reforço para um escalonamento rápido de permissão, e o uso da hipermídia possibilita interações ricas com sua API.

##### <span property="xhv:role" resource="xhv:heading">Resultado Pretendido</span>

Desenvolvedores com alguma experiência em APIs baseadas em padrões Web, como REST, terão um entendimento inicial de como utilizar a API. A manutenção da API será também mais fácil.

##### <span property="xhv:role" resource="xhv:heading">Possível Abordagem para implementação</span>

REST (do inglês *Representational State Transfer*) \[<a href="#bib-Fielding" class="bibref">Fielding</a>\]\[<a href="#bib-Richardson" class="bibref">Richardson</a>\] é um estilo arquitetônico que, quando usado em uma API, Web, beneficia-se da arquitetura da própria Web. Uma discussão completa sobre como criar uma API RESTful está além do escopo deste documento, porém existem muitos recursos e uma comunidade consolidada que pode auxiliar a iniciar este trabalho. Ademais, há muitas estruturas de desenvolvimento RESTful disponíveis. Caso você já esteja usando uma estrutura de desenvolvimento Web que suporte a construção de APIs REST, considere o uso desta. Caso contrário, considere uma estrutura somente de API que utilize REST.

Outro aspecto da implementação que deve ser considerado é fazer uma API, de hipermídia, que responda com links e também com dados. São os links que tornam a Web uma rede e APIs de dados podem ser mais úteis e utilizadas com a inclusão de links em suas respostas. Os links podem oferecer recursos adicionais, documentação e navegação. Mesmo para uma API que não atenda a todas as restrições do REST, retornar links nas respostas pode resultar em um serviço rico e com documentação própria.

EXEMPLO 24

Um exemplo de resposta para a solicitação de informações sobre uma determinada rota de ônibus fornecida por uma API de hipermídia pode ter a seguinte aparência:

     {
      "code": "200",
      "text": "OK",
      "data": {
        "update_time": "2013-01-01T03:00:02Z",
        "route_id": "52",
        "route_name": "Lexington South",
        "route_description": "Lexington corridor south of Market",
        "route_type": "3"
      },
      "links": [{
        "href": "https://data.mycity.example.com/transport/api/v2/routes/52",
        "rel": "self",
        "type": "application/json",
        "method": "GET"
      }, {
      "href": "https://data.mycity.example.com/transport/api/v2/routes",
        "rel": "collection",
        "type": "application/json",
        "method": "GET"
      }, {
        "href": "https://data.mycity.example.com/transport/api/v2/schedules/52",
        "rel": "describedby",
        "type": "application/json",
        "method": "GET"
      }, {
        "href": "https://data.mycity.example.com/transport/api/v2/maps/52",
        "rel": "describedby",
        "type": "application/json",
        "method": "GET"
      }]
     }

##### <span property="xhv:role" resource="xhv:heading">Como Testar</span>

Verifique se o serviço evita a utilização do http como um canal de chamadas destinadas a métodos personalizados, e verifique se os URLs não contêm nomes de métodos.

##### <span property="xhv:role" resource="xhv:heading">Evidência</span>

Requisitos Relevantes: [R-APIDocumented (em inglês)](https://www.w3.org/TR/dwbp-ucr/#R-APIDocumented), [R-UniqueIdentifier (em inglês)](https://www.w3.org/TR/dwbp-ucr/#R-UniqueIdentifier)

##### <span property="xhv:role" resource="xhv:heading">Benefícios</span>

-   R - Reúso (Reuse)
-   L - Capacidade de conexão (Linkability)
-   I - Interoperabilidade (Interoperability)
-   D - Facilidade de descoberta (Discoverability)
-   A - Facilidade de acesso (Access)
-   P - Facilidade de processamento (Processability)
-   <img src="https://www.w3c.br/dwbp/images/reuse.svg" alt="Reuse" class="benefitIcon reuseIcon" />
-   <img src="https://www.w3c.br/dwbp/images/linkability.svg" alt="Linkability" class="benefitIcon linkabilityIcon" />
-   <img src="https://www.w3c.br/dwbp/images/interoperability.svg" alt="Interoperability" class="benefitIcon interoperabilityIcon" />
-   <img src="https://www.w3c.br/dwbp/images/discoverability.svg" alt="Discoverability" class="benefitIcon discoverabilityIcon" />
-   <img src="https://www.w3c.br/dwbp/images/access.svg" alt="Access" class="benefitIcon accessIcon" />
-   <img src="https://www.w3c.br/dwbp/images/processability.svg" alt="Processability" class="benefitIcon interoperabilityIcon" />

<span id="documentYourAPI" class="practicelab"> Boa Prática 25: Fornecer documentação completa para as APIs</span>

Fornecer informações completas na Web sobre a API. Atualizar a documentação conforme características adicionadas ou modificações realizadas.

##### <span property="xhv:role" resource="xhv:heading">Porque</span>

Os desenvolvedores são os principais consumidores de uma API e a documentação é a primeira indicação sobre a qualidade e utilidade da mesma. Quando a documentação da API é completa e fácil de compreender, os desenvolvedores provavelmente ficarão mais dispostos a continuar utilizando-a. Fornecer a documentação de forma abrangente em um único lugar permite que os desenvolvedores possam codificar com eficiência. Realçar as modificações proporciona aos usuários que aproveitem os novos recursos e ajustem seus próprios códigos, se necessário.

##### <span property="xhv:role" resource="xhv:heading">Resultado Pretendido</span>

Os desenvolvedores serão capazes de obter informações detalhadas sobre cada chamada à API, inclusive os parâmetros suportados e quais se espera que retorne, como por exemplo, o conjunto completo das informações referentes à API. O conjunto de valores – como utilizá-la, aviso de modificações recentes, informações de contato e assim por diante – deve ser descrito e facilmente navegável na Web. Isto irá permitir também que as máquinas acessem a documentação da API de forma a auxiliar os desenvolvedores a construir um *software* cliente da API.

##### <span property="xhv:role" resource="xhv:heading">Possível Abordagem para Implementação</span>

Uma referência típica de API fornece uma lista abrangente das chamadas que a API pode suportar, com a descrição do objetivo de cada uma, detalhando os parâmetros que esta permite, assim como quais retorna, e dando um ou mais exemplos de seu uso. Um registro interessante na documentação de API é fornecer um formulário no qual os desenvolvedores possam inserir chamadas específicas para testes, para ver o que a API retorna em seus casos de utilização. Já existem ferramentas disponíveis para criar este tipo de documentação de forma rápida, como [Swagger (em inglês)](https://swagger.io/), [*io-docs* (em inglês)](https://www.mashery.com/api/io-docs), [*OpenApis* (em inglês)](https://www.openapis.org/), entre outras. É importante dizer que a API também deve ter documentação própria, de forma que as chamadas retornem informações úteis sobre erros e utilização. Os usuários da API devem poder entrar em contato com os mantenedores com perguntas, sugestões ou relatórios de erros.

A qualidade da documentação também está relacionada ao uso de *feedback* dos desenvolvedores. Tente obter *feedbacks* constantes de seus usuários sobre a documentação.

EXEMPLO 25

Visando ajudar os desenvolvedores, o Departamento de Transportes oferece uma documentação completa sobre a API que fornece acesso aos dados sobre pontos de ônibus e rotas. A [documentação da API (em inglês)](https://www.w3.org/TR/dwbp/dwbp-api-example.html) inclui uma lista das chamadas suportadas pela API, os respectivos parâmetros e alguns exemplos.

##### <span property="xhv:role" resource="xhv:heading">Como Testar</span>

Verifique se todas as chamadas habilitadas por sua API estão descritas na documentação. Assegure-se de estar fornecendo detalhes sobre quais parâmetros são obrigatórios e quais são opcionais, e o que cada chamada retorna.

Verifique o Tempo para a Primeira Chamada Bem Sucedida, do inglês *Time To First Successful Call* (por exemplo, ser capaz de fazer um pedido com sucesso à API em poucos minutos aumentará as possibilidades do desenvolvedor continuar a usar a sua API).

##### <span property="xhv:role" resource="xhv:heading">Evidência</span>

Requisitos Relevantes: [R-APIDocumented (em inglês)](https://www.w3.org/TR/dwbp-ucr/#R-APIDocumented)

##### <span property="xhv:role" resource="xhv:heading">Benefícios</span>

-   R - Reúso (Reuse)
-   T - Confiança (Trust)
-   <img src="https://www.w3c.br/dwbp/images/reuse.svg" alt="Reuse" class="benefitIcon reuseIcon" />
-   <img src="https://www.w3c.br/dwbp/images/trust.svg" alt="Trust" class="benefitIcon interoperabilityIcon" />

<span id="avoidBreakingChangesAPI" class="practicelab"> Boa Prática 26: Evitar alterações que afetem o funcionamento de sua API</span>

Evitar alterações em sua API que afetem o código do cliente e, quando houver evolução, informar seus desenvolvedores sobre quaisquer modificações feitas na API.

##### <span property="xhv:role" resource="xhv:heading">Porque</span>

Quando desenvolvedores implementam um cliente à sua API,podem estar contando com características específicas que você incorporou à API, tais como o esquema ou o formato de uma resposta. Evitar modificações que afetam o funcionamento de sua API minimiza erros no código do cliente. Comunicar as modificações quando estas ocorrerem permite aos desenvolvedores beneficiarem-se de novos recursos e, no caso raro em que haja uma modificação que afete o funcionamento da API, tomem providências.

##### <span property="xhv:role" resource="xhv:heading">Resultado Pretendido</span>

O código do desenvolvedor continuará funcionando. O desenvolvedor saberá das melhorias que você implementou e poderá utilizá-las. Modificações que afetem o funcionamento de sua API serão raras e, caso sejam necessárias, os desenvolvedores terão tempo e informação suficientes para ajustar seus códigos. Isto possibilitará que erros sejam evitados, aumentando a confiança. Modificações à API serão anunciadas no sítio de documentação da API.

##### <span property="xhv:role" resource="xhv:heading">Possível Abordagem para Implementação</span>

Ao enriquecer sua API, concentre-se em adicionar novas chamadas ou novas opções em vez de modificar a maneira como as chamadas existentes operam. Os clientes existentes podem ignorar tais modificações e continuarão a funcionar.

Caso estiver usando um estilo RESTful de forma integral, você deve ser capaz de evitar modificações que afetem os desenvolvedores, mantendo URIs de recurso constantes e modificar somente elementos que seus usuários não codifiquem diretamente. Caso precise alterar seus dados de uma maneira não compatível com os pontos de extensão projetados inicialmente, será necessário um design completamente novo – o que significa modificações que afetam o funcionamento do código do cliente. Neste caso é melhor implementar as alterações como uma nova RESTAPI, com um URI de recurso diferente.

Se você está utilizando um estilo arquitetônico que não permite fazer alterações relativamente significantes, sem afetar o código do cliente, utilize o versionamento. Indique a versão no cabeçalho de resposta. Os números da versão devem estar refletidos em seus URIs ou nos cabeçalhos de solicitação de “aceite” (usando negociação do conteúdo). Ao utilizar o versionamento nos URIs inclua o número da versão mais à esquerda o possível. Mantenha a versão anterior disponível para os desenvolvedores cujos códigos ainda não foram adaptados à nova versão.

EXEMPLO 26

Alguns exemplos de modificações que afetam uma API são:

-   Remover uma chamada;
-   Alterar o método usado para fazer uma chamada;
-   Alterar o URI de um recurso utilizado em uma chamada;
-   Adicionar um parâmetro necessário para uma chamada;
-   Alterar o tipo de dado de um parâmetro;
-   Alterar o nome de uma chave em uma resposta valor-chave;
-   Alterar a estrutura de uma resposta XML
-   Alterar o tipo de dado de um valor em uma resposta, por exemplo, alterar de um *string* para um arranjo (do inglês *array*).

Suponha que a API do Departamento de Trânsito de MyCity responda a uma solicitação sobre o horário de chegada de um determinado ônibus a uma estação como `https://data.mycity.example.com/transport/api/arrivals/buses/53/stop/12`, porém o Departamento decide que quer que seja possível consultar sobre diversas paradas de uma só vez. Em vez de alterar o formulário de solicitação para pedir uma série, como em `https://data.mycity.example.com/transport/api/arrivals/buses/53/stop/12-12`, o Departamento pode manter a antiga chamada da API e adicionar uma nova para chegadas múltiplas, como `https://data.mycity.example.com/transport/api/arrivals/buses/53/stops/1-12`.

Para notificar aos usuários diretamente sobre as modificações, é uma boa ideia criar uma lista de discussão e incentivar os desenvolvedores a inscreverem-se. Por este meio, você poderá anunciar modificações e proporcionar também um bom mecanismo para receber *feedbacks*. Além disso, a lista permite que os usuários ajudem-se mutuamente.

##### <span property="xhv:role" resource="xhv:heading">Como Testar</span>

Libere modificações inicialmente em uma versão de teste da sua API antes de inseri-las na versão de produção. Convide os desenvolvedores a testar suas aplicações na versão de teste e fornecer *feedbacks*.

##### <span property="xhv:role" resource="xhv:heading">Evidência</span>

Requisitos Relevantes: [R-PersistentIdentification (em inglês)](https://www.w3.org/TR/dwbp-ucr/#R-PersistentIdentification), [R-APIDocumented (em inglês)](https://www.w3.org/TR/dwbp-ucr/#R-APIDocumented)

##### <span property="xhv:role" resource="xhv:heading">Benefícios</span>

-   T - Confiança (Trust)
-   I - Interoperabilidade (Interoperability)
-   <img src="https://www.w3c.br/dwbp/images/trust.svg" alt="Trust" class="benefitIcon interoperabilityIcon" />
-   <img src="https://www.w3c.br/dwbp/images/interoperability.svg" alt="Interoperability" class="benefitIcon interoperabilityIcon" />

### <span property="xhv:role" resource="xhv:heading"><span class="secno">8.11 </span>Preservação de Dados</span>

O grupo de trabalho reconhece que não é realista assumir que todos os dados da Web estarão disponíveis sob demanda o tempo todo até um futuro indefinido. Por uma ampla gama de motivos, os publicadores provavelmente irão querer ou precisar remover dados da Web – aspecto que foge do escopo do presente trabalho para entrar na área dos arquivistas de dados. O que *faz parte* do escopo aqui, no entanto, é o que é deixado para trás – isto é, o que deve ser feito pelos publicadores para indicar quais dados foram removidos ou arquivados. Simplesmente deletar um recurso da Web é uma má prática. Nesta circunstância, dereferenciar o URI conduziria a um código de resposta HTTP 404, que simplesmente informa ao usuário que o recurso não foi encontrado – nada além disto. As Boas Práticas a seguir oferecem abordagens mais produtivas.

<span id="ResourceStatus" class="practicelab">Boa Prática 27: Preservar identificadores</span>

Ao remover dados da Web, preservar o identificador e fornecer informações sobre o recurso arquivado.

#### <span property="xhv:role" resource="xhv:heading">Porque</span>

O dereferenciamento do URI é a interface primária para os dados na Web. Caso o dereferenciamento de um URI conduza ao infame código 404 (Não Encontrado), o usuário não saberá se a falta de disponibilidade é permanente ou temporária, planejada ou acidental. Caso o publicador ou um terceiro tenha arquivado o dado, é muito menos provável que aquela cópia arquivada possa ser encontrada se o URI esteja efetivamente inacessível.

#### <span property="xhv:role" resource="xhv:heading">Resultado Pretendido</span>

O URI de um recurso irá sempre dereferenciar para o recurso ou redirecionar para informações a respeito.

#### <span property="xhv:role" resource="xhv:heading">Possível Abordagem para Implementação</span>

Há dois cenários a considerar:

1.  O recurso foi totalmente deletado e não está mais disponível através de nenhuma rota;
2.  O recurso foi arquivado e está disponível somente por meio de uma solicitação ao arquivo.

No primeiro caso, o servidor deve ser configurado para responder com um código de Resposta HTTP [410 (Perdido, do inglês *Gone*) (em inglês)](https://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html#sec10.4.11). A partir da especificação:

> A resposta 410 destina-se principalmente a auxiliar na tarefa de manutenção da Web, notificando o destinatário de que o recurso encontra-se intencionalmente indisponível e que os proprietários do servidor desejam que os links remotos para este recurso sejam removidos.

No segundo caso, em que os dados tenham sido arquivados, é mais apropriado redirecionar as solicitações para uma página Web que forneça informações sobre o arquivo no qual os dados estão armazenados, e como um usuário em potencial pode acessá-lo.

Em ambos os casos, o URI original continua identificando o recurso e apontando para informações úteis – mesmo que o dado já não se encontre diretamente disponível.

EXEMPLO 27

Adrian decide arquivar versões de dados de pontos de ônibus que tenham sido substituídas por versões mais recentes há pelo menos um ano – como a versão de 30-03-2012. O servidor é configurado de tal forma que as solicitações para o conjunto de dados de março de 2012 sejam redirecionadas a uma página da Web, utilizando um Código HTTP 303, que inclui a seguinte notificação.

#### Arquivado

Os dados que você solicitou foram arquivados. Isto está de acordo com a política de MyCity de arquivamento de dados substituídos há mais de 12 meses. No entanto, pode-se solicitar uma cópia a qualquer momento por meio da [página de contato.](#archiveEg)

#### <span property="xhv:role" resource="xhv:heading">Como Testar</span>

Garanta que a dereferência de um URI de um conjunto de dados que não esteja mais disponível retorne informações tanto sobre a situação atual quanto sobre a disponibilidade do conjunto de dados em questão – quer seja utilizando o código de resposta 410 ou o código 303, conforme o mais apropriado.

#### <span property="xhv:role" resource="xhv:heading">Evidência</span>

Requisitos Relevantes: [R-AccessLevel (em inglês)](https://www.w3.org/TR/dwbp-ucr/#R-AccessLevel), [R-PersistentIdentification (em inglês)](https://www.w3.org/TR/dwbp-ucr/#R-PersistentIdentification)

#### <span property="xhv:role" resource="xhv:heading">Benefícios</span>

-   R - Reúso (Reuse)
-   T - Confiança (Trust)
-   <img src="https://www.w3c.br/dwbp/images/reuse.svg" alt="Reuse" class="benefitIcon reuseIcon" />
-   <img src="https://www.w3c.br/dwbp/images/trust.svg" alt="Trust" class="benefitIcon interoperabilityIcon" />

<span id="EvaluateCoverage" class="practicelab">Boa Prática 28: Avaliar a cobertura do conjunto de dados</span>

Avaliar a cobertura de um conjunto de dados antes de sua preservação.

#### <span property="xhv:role" resource="xhv:heading">Porque</span>

Um bloco de dados na Web é, por definição, dependente do resto do diagrama global. Este contexto global influencia o significado da descrição dos recursos encontrados no conjunto de dados. A princípio, a preservação de um determinado conjunto de dados envolveria a conservação de todo o seu contexto. Ou seja, toda a Web de Dados.

Para arquivar, é necessário avaliar as conexões do descarte do conjunto de dados para recursos já preservados e para os vocabulários utilizados. Conjuntos de dados nos quais muito pouco dos vocabulários utilizados e/ou recursos apontados já se encontram preservados em algum lugar, devem ser assinalados como conjunto de dados em risco.

#### <span property="xhv:role" resource="xhv:heading">Resultado Pretendido</span>

Os usuários poderão fazer uso dos dados arquivados por muito tempo.

#### <span property="xhv:role" resource="xhv:heading">Possível Abordagem para Implementação</span>

Verifique se todos os recursos utilizados já se encontram preservados em algum lugar ou precisam ser fornecidos junto com o conjunto de dados cuja preservação está sendo considerada.

EXEMPLO 28

Um conjunto de dados RDF direcionado para preservação é formado pelas seguintes triplas:

     
      <https://data.mycity.example.com/transport/route/bus/ABtimetable>
          a gtfs:Route ;
          gtfs:color "ff0000" ;
          gtfs:shortname "10" ;
          gtfs:longName "Airport - Bullfrog" ;
          gtfs:agency <https://data.mycity.example.com/transport-agency/DTA> ;
          gtfs:routeType ex:three ;
          ex:usualVehicleType dbpedia:Routemaster ;
          foaf:isPrimaryTopicOf ex:Airport_Bullfrog
          .

      <https://data.mycity.example.com/ransport/route/bus/BFC>
          a gtfs:Route ;
          gtfs:color "ffff00" ;
          gtfs:shortname "20" ;
          gtfs:longName "Bullfrog - Furnace Creek Resort" ;
          gtfs:agency <https://data.mycity.example.com/transport-agency/DTA> ;
          gtfs:routeType ex:three ;
          ex:usualVehicleType dbpedia:Articulated_bus ;
          foaf:isPrimaryTopicOf ex:Bullfrog_Furnace_Creek_Resort
          .
      …

Estas triplas utilizam o vocabulário “gtfs” e um vocabulário personalizado definido no domínio de teste “ex”. Também utilizam entidades definidas em “foaf”, "dbpedia" e "ex". Embora não sejam padrões formais, FOAF e GTFS \[<a href="#bib-GTFS" class="bibref">GTFS</a>\] são ontologias bem estabelecidas, arquivadas em vários lugares na Web (veja, por exemplo, o [repositório LOV (em inglês)](https://lov.okfn.org). Entidades definidas em DBpedia também são preservadas por meio de seu [Gateway Memento (em inglês)](https://mementoweb.org/depot/native/dbpedia/) e o conjunto de dados também continuam em depósito de arquivos. Os riscos relacionados à preservação da tripla fazendo uso deste recurso externo são mínimos. Uma preocupação maior surge da utilização de recursos definidos em “ex”, um espaço de nome que, por seu design, não existe fora do conjunto de dados. A não ser que as descrições dos dados "ex:usualVehicleType", "ex:Airport\_Bullfrog" e "ex:Bullfrog\_Furnace\_Creek\_Resort" sejam preservadas juntamente com as triplas, seu significado no contexto será perdido. Este fato é especialmente crítico para "ex:usualVehicleType", pois sem ele a relação entre a rota descrita e os recursos dbpedia será desconhecida para uma aplicação de consumidor (por mais óbvio que possa ser para uma pessoa).

Considerando esta avaliação, um conjunto de dados revisado, incluindo a definição de "ex:usualVehicleType", pode ser considerado para preservação:

     <https://data.mycity.example.com/transport/route/bus/AB> a gtfs:Route;
          gtfs:color "ff0000" ;
          gtfs:shortname "10" ;
          gtfs:longName "Airport - Bullfrog" ;
          gtfs:agency <https://data.mycity.example.com/transport-agency/DTA> ;
          gtfs:routeType ex:three ;
          ex:usualVehicleType dbpedia:Routemaster ;
          foaf:isPrimaryTopicOf ex:Airport_Bullfrog
          .

      <https://data.mycity.example.com/transport/route/bus/BFC>
          a gtfs:Route;
          gtfs:color "ffff00";
          gtfs:shortname "20";
          gtfs:longName "Bullfrog - Furnace Creek Resort";
          gtfs:agency <https://data.mycity.example.com/transport-agency/DTA>;
          gtfs:routeType ex:three;
          ex:usualVehicleType dbpedia:Articulated_bus;
          foaf:isPrimaryTopicOf ex:Bullfrog_Furnace_Creek_Resort
          .
      …

      # Custom vocabulary element
      ex:usualVehicleType 
          a rdf:Property ;
          rdfs:subPropertyOf gtfs:routeType ;
          rdfs:range gtfs:Bus
          .

Este segundo e mais completo conjunto de dados adapta-se melhor à preservação, pois é mais auto descritivo e utiliza somente entidades externas, cuja preservação é confiável.

#### <span property="xhv:role" resource="xhv:heading">Como Testar</span>

Não é possível determinar o que estará disponível em 50 anos, por exemplo. No entanto, pode-se verificar se um conjunto de dados arquivado depende unicamente de recursos e vocabulários externos de ampla utilização. Verifique se as dependências exclusivas ou pouco utilizadas estão preservadas como parte do arquivo.

#### <span property="xhv:role" resource="xhv:heading">Evidências</span>

Requisitos Relevantes: [R-VocabReference (em inglês)](https://www.w3.org/TR/dwbp-ucr/#R-VocabReference)

#### <span property="xhv:role" resource="xhv:heading">Benefícios </span>

-   R - Reúso (Reuse)
-   T - Confiança (Trust)
-   <img src="https://www.w3c.br/dwbp/images/reuse.svg" alt="Reuse" class="benefitIcon reuseIcon" />
-   <img src="https://www.w3c.br/dwbp/images/trust.svg" alt="Trust" class="benefitIcon interoperabilityIcon" />

### <span property="xhv:role" resource="xhv:heading"><span class="secno">8.12 </span>*Feedback*</span>

Publicar material na Web viabiliza o compartilhamento de dados em grande escala para uma diversidade de públicos com diferentes níveis de conhecimento. Os publicadores de dados querem garantir que os dados publicados atendam às necessidades dos consumidores de dados e, para esta finalidade, o *feedback* do usuário é crucial. *Feedbacks* agregam benefícios tanto para publicadores como consumidores, ajudando os primeiros a melhorar a integridade dos dados publicados, assim como incentivando-os a publicar novos dados. O *feedback* permite aos consumidores de dados terem uma voz descrevendo experiências de uso (por exemplo, aplicações usando dados), preferências e necessidades. Quando possível, *feedbacks* também devem ser disponibilizados publicamente para que outros consumidores de dados possam examiná-los. Disponibilizar *feedbacks* publicamente permite aos usuários conscientizarem-se de outros consumidores de dados, incentiva um ambiente colaborativo e possibilita que suas experiências comunitárias, preocupações ou perguntas sejam sempre atendidas.

Da perspectiva da interface do usuário existem diversas maneiras para coletar *feedbacks* de consumidores de dados, incluindo o registro no sítio, formulários de contato, seleção de avaliações de qualidade, pesquisas e caixas de comentários. Sob a perspectiva de de uma máquina, o publicador de dados pode também registrar métricas sobre utilização de dados ou informações sobre aplicações específicas que utilizam os dados. *feedbacks* como estes estabelecem um canal de comunicação entre publicadores e consumidores de dados. *feedbacks* disponibilizados publicamente devem ser exibidos em um formato legível por pessoas.

Esta seção fornece algumas Boas Práticas a serem seguidas por publicadores de dados visando possibilitar que os consumidores deem *feedbacks*. Tais *feedbacks* podem servir para pessoas ou máquinas.

<span id="GatherFeedback" class="practicelab"> Boa Prática 29: Coletar *feedback* de consumidores de dados </span>

Fornecer meios fáceis de se encontrar para que os consumidores deem *feedback*.

#### <span property="xhv:role" resource="xhv:heading">Porque</span>

Receber *feedbacks* ajuda os publicadores a compreenderem as necessidades de seus consumidores de dados, além de auxiliá-los a melhorar a qualidade dos dados publicados. Também aumenta a confiança na medida em que demonstra aos consumidores que o publicador se importa e se preocupa em atender às suas necessidades. Especificar claramente um mecanismo de *feedback* remove a inconveniência para o consumidor de dados de ter que procurar uma maneira de fornecer *feedbacks*.

#### <span property="xhv:role" resource="xhv:heading">Resultado Pretendido</span>

Os consumidores de dados poderão fornecer *feedbacks* e avaliações sobre os conjuntos de dados e suas distribuições.

#### <span property="xhv:role" resource="xhv:heading">Possível Abordagem para implementação</span>

Forneça aos consumidores de dados um ou mais mecanismos para o envio de *feedbacks*, incluindo (mas não limitando a) um formulário de contato, botões para ranquear a qualidade de dados ou uma caixa de comentários. Para aproveitar ao máximo os *feedbacks* recebidos de consumidores, uma boa ideia é coletá-lo por meio de um sistema de rastreamento que captura cada item em uma base de dados, assim permitindo quantificação e análise. Outra boa ideia é a captura por tipo de item de *feedbacks* por exemplo, sua motivação (edição, classificação \[avaliação\], comentário ou questionamento), de maneira que cada item possa ser expresso utilizando o vocabulário *Dataset Usage Vocabulary* \[<a href="#bib-VOCAB-DUV" class="bibref">VOCAB-DUV</a>\].

EXEMPLO 29

[Exemplo de formulário de *feedback* (em inglês)](https://www.w3.org/TR/dwbp/dwbp-example.html#duv-section)

#### <span property="xhv:role" resource="xhv:heading">Como Testar</span>

Verifique se pelo menos um mecanismo de *feedback* foi fornecido e se este pode ser facilmente encontrado por consumidores de dados

#### <span property="xhv:role" resource="xhv:heading">Evidência</span>

Requisitos Relevantes: [R-UsageFeedback (em inglês)](https://www.w3.org/TR/dwbp-ucr/#R-UsageFeedback), [R-QualityOpinions (em inglês)](https://www.w3.org/TR/dwbp-ucr/#R-QualityOpinions)

#### <span property="xhv:role" resource="xhv:heading">Benefícios</span>

-   R - Reúso (Reuse)
-   C - Compreensão (Comprehension)
-   T - Confiança (Trust)
-   <img src="https://www.w3c.br/dwbp/images/reuse.svg" alt="Reuse" class="benefitIcon reuseIcon" />
-   <img src="https://www.w3c.br/dwbp/images/comprehension.svg" alt="Comprehension" class="benefitIcon comprehensionIcon" />
-   <img src="https://www.w3c.br/dwbp/images/trust.svg" alt="Trust" class="benefitIcon interoperabilityIcon" />

<span id="FeedbackInformation" class="practicelab">Boa Prática 30: Compartilhar o *feedback* disponível</span>

Disponibilizar publicamente mecanismos de *feedback* de consumidor sobre conjuntos de dados e distribuições.

#### <span property="xhv:role" resource="xhv:heading">Porque</span>

Ao compartilhar *feedback* com consumidores, os publicadores demonstram aos usuários que suas contribuições estão sendo levadas em conta, e podem evitar o envio de relatórios de erros duplicados. Compartilhar *feedback* também ajuda os consumidores a compreender quaisquer questões que possam afetar sua capacidade de utilizar dados, assim como estimula um sentimento de comunidade entre eles.

#### <span property="xhv:role" resource="xhv:heading">Resultado Pretendido</span>

Os consumidores serão capazes de avaliar os tipos de erros que afetam o conjunto de dados, analisar as experiências de outros usuários com o mesmo, e assegurar-se de que o publicador está abordando ativamente os problemas conforme o necessário. Também poderão determinar se outros usuários já forneceram *feedbacks* semelhantes, poupando-os do trabalho de enviar relatórios desnecessários e evitando que os responsáveis tenham que lidar com duplicidade.

#### <span property="xhv:role" resource="xhv:heading"> Possível Abordagem para implementação </span>

O *feedback* pode ficar disponível como parte de uma página Web em HTML, mas também pode ser fornecido em um formato legível por máquinas utilizando o vocabulário *Dataset Usage Vocabulary* \[<a href="#bib-VOCAB-DUV" class="bibref">VOCAB-DUV</a>\].

Example 30

      :stops-2015-05-05
          a dcat:Dataset ;
          dct:title "Bus stops of MyCity" ;
          dcat:keyword "transport","mobility","bus" ;
          dct:issued "2015-05-05"^^xsd:date ;
          dcat:contactPoint <http://data.mycity.example.com/transport/contact> ;
          dct:temporal <http://reference.data.gov.uk/id/year/2015> ;
          dct:spatial <http://sws.geonames.org/3399415> ;
          dct:publisher :transport-agency-mycity ;
          dct:accrualPeriodicity <http://purl.org/linked-data/sdmx/2009/code#freq-A> ;
          dcat:theme :mobility ;
          dcat:distribution :stops-2015-05-05.csv 
          .

      :stops-2015-05-05.csv
          a dcat:Distribution ;
          dct:title "CSV distribution of stops-2015-05-05 dataset" ; 
          dct:description "CSV distribution of the bus stops dataset of MyCity" ;
          dcat:mediaType "text/csv;charset=UTF-8" 
          .
      :comment1Content 
          a oa:TextualBody ;
          rdf:value "This dataset is missing stop 3" 
          .

      :comment1
          a oa:Annotation ;
          a duv:UserFeedback ;
          oa:hasBody :comment1Content ;
          oa:hasTarget :stops-2015-05-05 ;
          dct:creator :localresident ;
          oa:motivatedBy oa:assessing 
          .    

      :comment2Content 
          a oa:TextualBody ;
          rdf:value "Are tab delimited formats also available?" 
          .

      :comment2
          a oa:Annotation ;
          a duv:UserFeedback ;
          oa:hasBody :comment2Content ;
          oa:hasTarget :stops-2015-05-05.csv ;    
          dct:creator :localresident ;
          oa:motivatedBy oa:assessing 
          .

      :localresident
          a foaf:Person ;
          foaf:Name "Alan Law" 
          .

#### <span property="xhv:role" resource="xhv:heading">Como Testar</span>

Verifique se qualquer *feedback* fornecido por consumidores de dados para um determinado conjunto de dados ou distribuição esteja publicamente disponível.

#### <span property="xhv:role" resource="xhv:heading">Evidência</span>

Requisitos Relevantes: [R-UsageFeedback (em inglês)](https://www.w3.org/TR/dwbp-ucr/#R-UsageFeedback), [R-QualityOpinions (em inglês)](https://www.w3.org/TR/dwbp-ucr/#R-QualityOpinions)

#### <span property="xhv:role" resource="xhv:heading">Benefícios</span>

-   R - Reúso (Reuse)
-   T - Confiança (Trust)
-   <img src="https://www.w3c.br/dwbp/images/reuse.svg" alt="Reuse" class="benefitIcon reuseIcon" />
-   <img src="https://www.w3c.br/dwbp/images/trust.svg" alt="Trust" class="benefitIcon interoperabilityIcon" />

### <span property="xhv:role" resource="xhv:heading"><span class="secno">8.13 </span> Enriquecimento de Dados </span>

Enriquecimento de dados refere-se a um conjunto de processos que pode ser utilizado para aperfeiçoar, aprimorar ou outra forma de melhorar dados brutos ou dados previamente processados. Esta ideia e outros conceitos semelhantes contribuem para transformar os dados em um bem valioso para quase todas as empresas ou empreendimentos modernos. É um tema diverso em si, cujos detalhes vão além do escopo deste documento. No entanto, vale a pena notar que algumas destas técnicas devem ser abordadas com cuidado, pois limites éticos podem vir à tona. Na pesquisa científica, cuidados devem ser tomados para evitar que o enriquecimento distorça resultados ou conclusões estatísticas. No tocante a dados sobre pessoas, questões de privacidade podem surgir quando conjuntos de dados são combinados. Ou seja, enriquecer um conjunto de dados com outro, quando nenhum dos dois contém informações suficientes sobre qualquer indivíduo a ponto de identificá-lo, pode resultar em um conjunto de dados combinado que comprometa a privacidade. Além disso, estas técnicas podem ser realizadas em escala, o que por sua vez realça a necessidade de cautela.

Esta seção fornece algumas recomendações a serem seguidas por publicadores de dados com a finalidade de enriquecimento de dados.

<span id="EnrichData" class="practicelab">Boa Prática 31: Enriquecer dados por meio da geração de novos dados</span>

Enriqueça seus dados gerando novos dados, pois ao fazê-lo você estará aumentando o valor dos mesmos.

#### <span property="xhv:role" resource="xhv:heading">Porque</span>

O enriquecimento pode acentuar consideravelmente a facilidade de processamento, especialmente no caso de dados não estruturados. Em algumas circunstâncias, dados faltantes podem ser adicionados e novas atribuições e mensurações podem ser acrescentadas a partir de dados brutos pré-existentes. Conjuntos de dados também podem ser enriquecidos por meio de coletas adicionais da mesma forma como os dados originais foram coletados, ou combinando dados originais com outros conjuntos de dados. Publicar conjuntos de dados mais completos pode aumentar a confiança, se feito de maneira adequada e ética. Derivar valores adicionais que sejam úteis economiza tempo para o usuário e incentiva mais tipos de reúsos. Há muitas técnicas inteligentes que podem ser utilizadas para enriquecer dados, tornando o conjunto de dados um bem ainda mais valioso.

#### <span property="xhv:role" resource="xhv:heading">Resultado Pretendido</span>

Conjuntos de dados com dados faltantes serão melhorados por meio do preenchimento destes valores. A estrutura do conjunto de dados será verificada e a utilidade potencializada caso providências ou atributos relevantes sejam adicionados, porém somente se este incremento não distorcer os resultados analíticos, a significância ou a potência estatística.

#### <span property="xhv:role" resource="xhv:heading">Possível Abordagem para Implementação</span>

As técnicas para o enriquecimento de dados são complexas e se estendem além do escopo deste documento, que visa somente indicar tais possibilidades.

A técnica de aprendizado de máquina pode ser facilmente aplicada para promover enriquecimento de dados. Os métodos incluem aqueles focados na categorização de dados, desambiguação, reconhecimento de entidades, análise de sentimentos e topificação, entre outros. Novos valores de dados podem ser criados tão simplesmente quanto executar um cálculo matemático por meio de colunas existentes. Outros exemplos incluem a inspeção visual para identificar recursos em dados espaciais e a referência cruzada com bancos de dados externos para informações demográficas. E por último, a geração de novos dados pode ser impulsionada por demanda, onde valores faltantes são calculados ou determinados de forma direta.

Valores gerados a partir de técnicas com base em inferência devem ser indicados como tal, e deve ser possível recuperar qualquer valor original substituído por enriquecimento.

Sempre que a licença permitir, o código usado para enriquecer os dados deve estar disponível junto com o conjunto de dados. Compartilhar tal código é particularmente importante para dados científicos.

A priorização das atividades de enriquecimento deve ser baseada no valor que o mesmo tem para o consumidor de dados, bem como pelo esforço necessário. O valor para o consumidor pode ser avaliado pela mensuração da demanda (por meio de pesquisas ou pelo rastreio de pedidos diretos. por exemplo). Documentar como você mensura a demanda pode tornar dar transparência ao valor agregado.

Caso você venha a enriquecer dados de outra pessoa, seria uma boa ideia oferecer estes enriquecimentos ao publicador original.

EXEMPLO 31

1.  O Departamento de Transportes de MyCity possui endereços físicos para cada um de seus pontos de ônibus. O Departamento quer facilitar a vida dos consumidores destes dados ao combinar esta informação com mapas, de forma a adicionar informações de latitude e longitude para cada ponto utilizando uma base de dados geográfica.
2.  O Departamento de Trânsito possui uma vasta coleção de correspondência de correios eletrônicos enviados por usuários. Parte destas mensagens contém elogios, outra parte reclamações, e algumas são pedidos de informação. O Departamento realiza uma combinação de análise de opiniões e categorização de forma a extrair metadados para cada uma das mensagens, tais como modal de transporte, numeração da rota e posição do passageiro para criar um conjunto de dados semiestruturado.

#### <span property="xhv:role" resource="xhv:heading">Como Testar</span>

Verifique se não há valores faltantes no conjunto de dados ou campos adicionais prováveis de serem necessitados por outros, que poderiam ser facilmente fornecidos. Verifique se qualquer dado adicionado por técnicas de enriquecimento através de inferência esteja identificado como tal, e se quaisquer possíveis dados substituídos ainda estejam disponíveis.

#### <span property="xhv:role" resource="xhv:heading">Evidência</span>

Requisitos Relevantes: [R-DataEnrichment (em inglês)](https://www.w3.org/TR/dwbp-ucr/#R-DataEnrichment), [R-FormatMachineRead (em inglês)](https://www.w3.org/TR/dwbp-ucr/#R-FormatMachineRead), [R-ProvAvailable (em inglês)](https://www.w3.org/TR/dwbp-ucr/#R-ProvAvailable)

#### <span property="xhv:role" resource="xhv:heading">Benefícios</span>

-   R - Reúso (Reuse)
-   C - Compreensão (Comprehension)
-   T - Confiança (Trust)
-   P - Facilidade de processamento (Processability)
-   <img src="https://www.w3c.br/dwbp/images/reuse.svg" alt="Reuse" class="benefitIcon reuseIcon" />
-   <img src="https://www.w3c.br/dwbp/images/comprehension.svg" alt="Comprehension" class="benefitIcon comprehensionIcon" />
-   <img src="https://www.w3c.br/dwbp/images/trust.svg" alt="Trust" class="benefitIcon interoperabilityIcon" />
-   <img src="https://www.w3c.br/dwbp/images/processability.svg" alt="Processability" class="benefitIcon interoperabilityIcon" />

<span id="ProvideComplementaryPresentations" class="practicelab">Boa Prática 32: Fornecer visualizações complementares</span>

Enriqueça seus dados apresentando-os em formas complementares e diretamente informativas, tais como visualizações, tabelas, aplicações Web ou resumos.

#### <span property="xhv:role" resource="xhv:heading">Porque</span>

Dados publicados online destinam-se a passar informações para terceiros sobre seu tema. Porém, apenas publicar conjuntos de dados para *download* ou através de API delega ao consumidor o esforço de interpretá-los. A Web oferece oportunidades sem paralelos para a apresentação de dados de forma a permitir que os usuários aprendam e explorem sem ter que criar suas próprias ferramentas.

#### <span property="xhv:role" resource="xhv:heading"> Resultado Pretendido </span>

Visualizações complementares dos dados irão permitir que consumidores tenham uma percepção imediata dos mesmos por meio de visualizações de fácil entendimento.

#### <span property="xhv:role" resource="xhv:heading">Possível Abordagem para Implementação</span>

Uma maneira muito simples de proporcionar entendimentos imediatos é publicar um resumo analítico em uma página HTML. Incluir dados que se somam em gráficos ou tabelas pode ajudar o usuário a explorar o resumo e entender com mais rapidez o sentido dos dados.

Caso você tenha meios de criar visualizações ou aplicações Web interativas que utilizem os dados, proporcionará aos seus consumidores uma capacidade ampliada de compreender e descobrir padrões em tais dados. Estas abordagens também demonstram a aptidão dos seus dados para o processamento e estimulam seu reúso.

EXEMPLO 32

O Departamento de Trânsito de MyCity publica dados detalhados sobre todas as suas linhas de transporte por meio de uma API, porém o Departamento também tem muitos usuários que não são desenvolvedores Web e querem saber como usar o sistema para se deslocar na cidade. O Departamento pode construir uma aplicação Web que permita aos usuários entrar com um endereço de partida e um destino e receber orientações passo a passo para realizar sua viagem por meio do transporte público.

#### <span property="xhv:role" resource="xhv:heading">Como Testar</span>

Verifique se o conjunto de dados se encontra acompanhado de algum conteúdo adicional de interpretação que possa ser percebido sem o *download* dos dados ou a necessidade de invocar uma API.

#### <span property="xhv:role" resource="xhv:heading">Evidência</span>

Requisitos Relevantes: [R-DataEnrichment (em inglês)](https://www.w3.org/TR/dwbp-ucr/#R-DataEnrichment)

#### <span property="xhv:role" resource="xhv:heading">Benefícios</span>

-   R - Reúso (Reuse)
-   C - Compreensão (Comprehension)
-   A - Facilidade de acesso (Access)
-   T - Confiança (Trust)
-   <img src="https://www.w3c.br/dwbp/images/reuse.svg" alt="Reuse" class="benefitIcon reuseIcon" />
-   <img src="https://www.w3c.br/dwbp/images/comprehension.svg" alt="Comprehension" class="benefitIcon comprehensionIcon" />
-   <img src="https://www.w3c.br/dwbp/images/access.svg" alt="Access" class="benefitIcon accessIcon" />
-   <img src="https://www.w3c.br/dwbp/images/trust.svg" alt="Trust" class="benefitIcon interoperabilityIcon" />

### <span property="xhv:role" resource="xhv:heading"><span class="secno">8.14 </span>Republicação de Dados</span>

Reutilizar dados é outra forma de publicar dados; é simplesmente republicá-los. Pode tomar a forma de uma combinação de dados existentes com outros conjuntos de dados, uma criação de aplicações ou visualizações Web, ou uma reempacotamento de dados em um novo formato, como uma tradução. Quem republica dados tem algumas responsabilidades que são exclusivas desta forma de publicação na Web. Este seção fornece recomendações que devem ser observadas ao republicar dados.

<span id="ProvideFeedbackToPublisher" class="practicelab">Boa Prática 33: Fornecer *feedback* para o publicador original</span>

Informar ao publicador original quando você está promovendo o reúso de seus dados. Informe-o caso encontre um erro, ou tenha sugestões ou elogios a tecer.

#### <span property="xhv:role" resource="xhv:heading">Porque</span>

Os publicadores geralmente querem saber se os dados que publicam têm sido úteis. Ademais, eles podem ser obrigados a relatar estatísticas de uso a fim de alocar recursos para atividades de publicação de dados. Ao informar como dos dados publicados foram usados, você estará ajudando os publicadores originais a justificar a aplicação de recursos no lançamento de dados. Fornecer *feedback* recompensa os publicadores por seus esforços e os ajuda diretamente a melhorar seu conjunto de dados para futuros usuários.

#### <span property="xhv:role" resource="xhv:heading"> Resultado Pretendido </span>

Uma melhor comunicação facilitará para os publicadores originais determinar como os dados que postaram estão sendo usados, o que por sua vez os ajuda a justificar a publicação dos dados. Eles também terão clareza sobre quais medidas podem adotar para melhorar seus dados. Isto conduz a mais e melhores dados para todos.

#### <span property="xhv:role" resource="xhv:heading"> Possível Abordagem para Implementação </span>

Quando iniciar a utilização de um conjunto de dados em um produto novo, faça uma nota com o endereço e contato dos publicadores, o URI do conjunto de dados que você utilizou, e a data em que os contatou. Isto pode ser feito em comentários dentro do seu código, onde o conjunto de dados é usado. Utilize os meios disponibilizados pelos publicadores para dar *feedback*. Caso a possibilidade de *feedback* não seja oferecida, procure esta informação de contato no sítio Web que hospeda os dados.

EXEMPLO 33

    #Chamar a API de transporte de MyCity, https://data.mycity.example.com/transport/api/docs/
    #Publicado pelo Departamento de Transportes de  MyCity,
    # notificado de nossa reutilização por e-mail para opendata@mycitytransit.example.org
    # por Newton Calegari on 24/03/2016.

#### <span property="xhv:role" resource="xhv:heading">Como Testar</span>

Verifique se você tem um registro de pelo menos um comunicado informando ao publicador sobre a utilização de tais dados.

#### <span property="xhv:role" resource="xhv:heading">Evidência</span>

Requisitos Relevantes: [R-TrackDataUsage (em inglês)](https://www.w3.org/TR/dwbp-ucr/#R-TrackDataUsage), [R-UsageFeedback (em inglês)](https://www.w3.org/TR/dwbp-ucr/#R-UsageFeedback), [R-QualityOpinions (em inglês)](https://www.w3.org/TR/dwbp-ucr/#R-QualityOpinions)

#### <span property="xhv:role" resource="xhv:heading">Benefícios</span>

-   R - Reúso (Reuse)
-   I - Interoperabilidade (Interoperability)
-   T - Confiança (Trust)
-   <img src="https://www.w3c.br/dwbp/images/reuse.svg" alt="Reuse" class="benefitIcon reuseIcon" />
-   <img src="https://www.w3c.br/dwbp/images/interoperability.svg" alt="Interoperability" class="benefitIcon interoperabilityIcon" />
-   <img src="https://www.w3c.br/dwbp/images/trust.svg" alt="Trust" class="benefitIcon interoperabilityIcon" />

<span id="FollowLicensingTerms" class="practicelab">Boa Prática 34: Obedecer os termos de licença</span>

Encontrar e seguir os requisitos de licença indicada pelo publicador original do conjunto de dados.

#### <span property="xhv:role" resource="xhv:heading">Porque</span>

A licença fornece uma estrutura jurídica para utilizar o trabalho de outra pessoa. Ao respeitar os requisitos do publicador original, você promove relações amigáveis entre você e o publicador. Não é necessário preocupar-se com ações jurídicas caso respeite o que o publicador original deseja. Além disso, compreender a licença original ajudará a determinar qual licença escolher para sua reutilização.

#### <span property="xhv:role" resource="xhv:heading">Resultado Pretendido</span>

Os publicadores de dados poderão confiar que seus trabalhos estarão sendo utilizados de acordo com as condições de licença, o que provavelmente os estimulará a continuar publicando dados. Quem republicar dados poderá definir a licença de seus trabalhos derivados de maneira adequada.

#### <span property="xhv:role" resource="xhv:heading">Possível Abordagem para Implementação</span>

Leia a licença original e respeite seus requisitos. Caso este solicitar licença específico de trabalhos derivados, tome providências para que sua licença seja compatível com este requisito. Caso nenhuma licença seja fornecida, contate o publicador original e pergunte a ele qual é a licença aplicável.

EXEMPLO 34

Caso o conjunto de dados que você esteja utilizando estiver sob os termos da Licença Creative Commons Attribution 3.0, você deverá respeitar os termos especificados neste [acordo de licença específica (em inglês)](https://creativecommons.org/licenses/by/3.0/us/legalcode).

#### <span property="xhv:role" resource="xhv:heading">Como Testar</span>

Leia todo a licença original e certifique-se de que sua utilização dos dados não viola qualquer um de seus termos.

#### <span property="xhv:role" resource="xhv:heading">Evidência</span>

Requisitos Relevantes: [R-LicenseAvailable (em inglês)](https://www.w3.org/TR/dwbp-ucr/#R-LicenseAvailable), [R-LicenseLiability (em inglês)](https://www.w3.org/TR/dwbp-ucr/#R-LicenseLiability),

#### <span property="xhv:role" resource="xhv:heading">Benefícios</span>

-   R - Reúso (Reuse)
-   T - Confiança (Trust)
-   <img src="https://www.w3c.br/dwbp/images/reuse.svg" alt="Reuse" class="benefitIcon reuseIcon" />
-   <img src="https://www.w3c.br/dwbp/images/trust.svg" alt="Trust" class="benefitIcon interoperabilityIcon" />

<span id="CiteOriginalPublication" class="practicelab">Boa Prática 35: Citar a publicação original do conjunto de dados</span>

Reconhecer a fonte de seus dados nos metadados. Caso forneça uma interface de usuário, inclua a citação claramente na interface.

#### <span property="xhv:role" resource="xhv:heading">Porque</span>

Dados só são úteis quando são confiáveis. Citar a fonte é o maior indicativo de confiança por dois motivos: em primeiro lugar, o usuário pode julgar a confiança em seus dados a partir da reputação da fonte e, em segundo, citar a fonte sugere que você mesmo é confiável como republicador de dados. Além de informar o usuário final, citar a fonte ajuda os publicadores dando crédito ao seu trabalho. Publicadores que disponibilizam dados na Web merecem reconhecimento e ficam mais propensos a continuar compartilhando seus dados caso percebam que estão sendo creditados. A citação também mantém a procedência e ainda ajuda outros a trabalhar com os dados.

#### <span property="xhv:role" resource="xhv:heading">Resultado Pretendido</span>

Usuários finais poderão avaliar a confiança nos dados que estão visualizando e os esforços dos publicadores originais serão reconhecidos. Também será possível rastrear a procedência dos dados na Web até o publicador original.

#### <span property="xhv:role" resource="xhv:heading"> Possível Abordagem para Implementação</span>

A citação da fonte original pode ser apresentada em uma interface de usuário fornecendo o texto bibliográfico e um link operável.

EXEMPLO 35

Fonte dos dados: Departamento de Transportes de MyCity. "Horário de ônibus de MyCity" (séries 1.2). MyCity. 05 de maio de 2015. Disponível em: https://data.mycity.example.com/transport/dataset/bus/stops.

#### <span property="xhv:role" resource="xhv:heading">Como Testar</span>

Verifique se a fonte original de quaisquer dados reutilizados se encontra citada nos metadados fornecidos.

Verifique se há uma citação legível por pessoas claramente visível em qualquer interface de usuário.

#### <span property="xhv:role" resource="xhv:heading">Evidência:</span>

Requisitos Relevantes: [R-Citable (em inglês)](https://www.w3.org/TR/dwbp-ucr/#R-Citable), [R-ProvAvailable (em inglês)](https://www.w3.org/TR/dwbp-ucr/#R-ProvAvailable), [R-MetadataAvailable (em inglês)](https://www.w3.org/TR/dwbp-ucr/#R-MetadataAvailable), [R-TrackDataUsage (em inglês)](https://www.w3.org/TR/dwbp-ucr/#R-TrackDataUsage)

#### <span property="xhv:role" resource="xhv:heading">Benefícios</span>

-   R - Reúso (Reuse)
-   D - Facilidade de descoberta (Discoverability)
-   T - Confiança (Trust)
-   <img src="https://www.w3c.br/dwbp/images/reuse.svg" alt="Reuse" class="benefitIcon reuseIcon" />
-   <img src="https://www.w3c.br/dwbp/images/discoverability.svg" alt="Discoverability" class="benefitIcon discoverabilityIcon" />
-   <img src="https://www.w3c.br/dwbp/images/trust.svg" alt="Trust" class="benefitIcon interoperabilityIcon" />

<span property="xhv:role" resource="xhv:heading"><span class="secno">9. </span>Glossário</span>
-----------------------------------------------------------------------------------------------

*Esta seção não é normativa.*

Arquivamento de dados  
O arquivamento de dados é um conjunto de práticas em torno do armazenamento e monitoramento do estado do material digital ao longo dos anos.

Estas tarefas são de responsabilidade de um Repositório Digital Confiável, do inglês *Trusted Digital Repository* (TDR), também chamado eventualmente de Serviço de Arquivamento de Longo Prazo, do inglês [*Long-Term Archive Service* (LTA) (em inglês)](https://tools.ietf.org/html/rfc4810). Muitas vezes, tais serviços seguem o Sistema de Informação de Arquivos Abertos, do inglês *Open Archival Information System* \[<a href="#bib-OAIS" class="bibref">OAIS</a>\] que define o processo de arquivamento em termos de consumo, monitoramento e reutilização de dados.

Citação  
Uma Citação pode ser direta e explícita (como uma lista de referências de um artigo de periódico), indireta (como, por exemplo, a citação a um documento mais recente do mesmo grupo de pesquisa sobre o mesmo assunto) ou implícita (como em citações artísticas, paródias ou em casos de plágio).

De: [CiTO, the *Citation Typing Ontology* (em inglês)](https://sparontologies.github.io/cito/current/cito.html).

Conjunto de dados  
Define-se um conjunto de dados como uma coleção de dados, publicados ou curados por um único operador e disponíveis para acesso ou *download* em um ou mais formatos. Um conjunto de dados não tem que ser disponibilizado como arquivo para *download.*

De: [*Data Catalog Vocabulary* (DCAT) (em inglês)](https://www.w3.org/TR/vocab-dcat/) \[<a href="#bib-VOCAB-DCAT" class="bibref">VOCAB-DCAT</a>\]

Consumidor de Dados  
Para os fins deste Grupo de Trabalho, um Consumidor de Dados é uma pessoa ou um grupo que acessa, usa, e potencialmente executa passos após o processamento dos dados.

De: Strong, Diane M., Yang W. Lee, e Richard Y. Wang. *Data quality in context. Communications of the ACM* 40.5 (1997): 103-110.

Dados Estruturados  
Dados Estruturados referem-se a dados que estão em conformidade com um esquema fixo. Bancos de dados e planilhas relacionais são exemplos de dados estruturados.

Dados legíveis por máquinas  
Dados legíveis por máquinas são dados em formato padronizado que podem ser lidos e processados automaticamente por um sistema computacional. Documentos tradicionais de editores de texto e formato de documento portátil (PDF) são facilmente lidos por pessoas, porém normalmente são complicados para interpretação e manipulação por máquinas. Formatos tais como XML, JSON, HDF5, RDF e CSV são formatos legíveis por máquinas.

Adaptado da [Wikipedia (em inglês)](https://en.wikipedia.org/wiki/Machine-readable_data).

Dados sensíveis  
Dados sensíveis são quaisquer dados ou metadados de uso limitado e/ou destinados a públicos restritos. Podem incluir dados pessoais, dados corporativos ou governamentais. Maus usos a dados sensíveis podem levar a danos a indivíduos ou organizações.

Distribuição  
Uma distribuição representa um determinado formato disponível de um conjunto de dados. Cada conjunto de dados pode ser disponibilizado em diferentes formatos; estes podem representar formatos diferentes do conjunto de dados ou pontos diferentes de término. Exemplos de distribuições incluem um arquivo CSV para *download,* uma API ou um feed RSS.

De: [*Data Catalog Vocabulary* (DCAT) (em inglês)](https://www.w3.org/TR/vocab-dcat/) \[<a href="#bib-VOCAB-DCAT" class="bibref">VOCAB-DCAT</a>\]

*Feedback*  
Utiliza-se um fórum de *feedback* para coletar mensagens publicadas pelos consumidores sobre um assunto específico. Estas mensagens podem incluir respostas para outros consumidores. Registros temporais de data são associadas a cada mensagem e estas podem ser associadas a uma pessoa ou submetidas anonimamente.

De: *Semantically-Interlinked Online Communities* [(SIOC) (em inglês)](http://rdfs.org/sioc/spec/#sec-modules-types) e *Annotation Model* \[<a href="#bib-Annotation-Model" class="bibref">Annotation-Model</a>\]

Para compreender melhor porque uma anotação foi criada, um esquema conceitual SKOS, do inglês *SKOS Concept Scheme* \[<a href="#bib-SKOS-PRIMER" class="bibref">SKOS-PRIMER</a>\] é utilizado para mostrar anotações inter-relacionadas entre comunidades com diferenciações mais significativas do que uma simples árvore de classe e subclasse.

Formato de Arquivo  
O Formato de Arquivo é uma maneira padronizada por meio da qual a informação é codificada para armazenamento em um arquivo de computador. Ele especifica como os bits são usados para codificar informação em um meio digital de armazenamento. Formatos de arquivos podem ser proprietários ou livres e também novos ou disponíveis.

Exemplos de formatos de arquivos incluem: texto simples (em uma codificação de caracteres especificada, idealmente UTF-8),*Comma Separated Variable* (CSV) \[<a href="#bib-RFC4180" class="bibref">RFC4180</a>\], *Portable Document Format* \[<a href="#bib-PDF" class="bibref">PDF</a>\], [XML (em inglês)](https://www.w3.org/standards/xml/), JSON \[<a href="#bib-RFC4627" class="bibref">RFC4627</a>\], Turtle \[<a href="#bib-Turtle" class="bibref">Turtle</a>\] e [HDF5 (em inglês)](https://www.hdfgroup.org/HDF5/).

Formato de Dados  
O Formato de Dados é definido como uma convenção específica para a representação de dados, ou seja, a maneira como a informação é codificada e armazenada para uso em um sistema de computador, possivelmente restringida por um tipo de dados formal ou um conjunto de padrões.

De: [*Digital Humanities Curation Guide* (em inglês)](https://guide.dhcuration.org/representation/)

Licença  
Uma licença é um documento jurídico que concede permissão oficial para fazer algo com dados a que se está associado.

De: [DCTERMS](https://dublincore.org/documents/2010/10/11/dcmi-terms/) \[<a href="#bib-DCTERMS" class="bibref">DCTERMS</a>\]

Localidade  
Uma coleção de preferências internacionais, normalmente relacionadas a um idioma e a uma região geográfica que uma (determinada categoria) de usuários necessita. São geralmente identificadas por um identificador abreviado ou código, tal como uma etiqueta de idioma, que é indicada a partir do ambiente para vários processos de forma a obter um comportamento culturalmente afetado.

De: [*Language Tags and Locale Identifiers for the World Wide Web* (em inglês)](https://www.w3.org/TR/ltli/#locale) \[<a href="#bib-LTLI" class="bibref">LTLI</a>\].

Padrão  
Um padrão técnico é uma norma ou requisito estabelecido a respeito de sistemas técnicos. Normalmente é um documento formal que estabelece critérios técnicos ou de engenharia padronizadas, métodos, processos e práticas. Em contraste, um costume, uma convenção, um produto de uma empresa, um padrão corporativo, etc., que se torna comumente aceito e dominante é frequentemente chamado de “padrão de fato”.

De: [Wikipedia (em inglês)](https://en.wikipedia.org/wiki/Technical_standard)

Preservação de dados  
A Preservação de Dados é definida pela [*Alliance for Permanent Access Network* (em inglês)](http://www.alliancepermanentaccess.org/index.php/consultancy/dpglossary/#Preservation) como “os processos e operações para assegurar a sobrevivência técnica e intelectual de objetos através do tempo”. Isto faz parte de um processo de gerenciamento de dados com foco no [planejamento da preservação e dos metadados (em inglês)](https://guide.dhcuration.org/preservation/). Avaliar se vale a pena esforçar-se pela preservação depende do valor (futuro) dos dados, dos recursos disponíveis e da opinião da comunidade designada de *stakeholders.*

Procedência de dados  
Procedência deriva do termo francês *provenir* (vir de), usado para descrever o processo de curadoria de objetos de arte quando são passados de proprietário para proprietário. De forma semelhante, a procedência de dados é um metadado que permite que os fornecedores de dados passem detalhes sobre o histórico de dados aos usuários.

Produtor de dados  
O Produtor de Dados é uma pessoa ou um grupo responsável pela geração e manutenção de dados.

De: Strong, Diane M., Yang W. Lee, e Richard Y. Wang. *Data quality in context. Communications of the ACM* 40.5 (1997): 103-110.

 Qualidade de dados   
A qualidade de dados é geralmente definida como “aptidão para uso” para uma aplicação específica ou um caso de uso.

Quase em tempo real  
A expressão “quase em tempo real” ou “praticamente em tempo real” usada em telecomunicações e computação refere-se ao atraso de tempo decorrente do processamento automatizado de dados ou pela transmissão em rede, entre a ocorrência de um evento e o uso dos dados processados, tal como para a finalidade de exibição ou *feedback* e controle. Por exemplo, uma exibição em quase tempo real mostra um evento ou situação como se esta existisse no momento corrente menos o tempo de processamento, como praticamente no tempo do evento ao vivo.

De: [Wikipedia (em inglês)](https://en.wikipedia.org/wiki/Real-time_computing#Near_real-time)

Vocabulário  
Um vocabulário é uma coletânea de “termos” para uma determinada finalidade. Os vocabulários podem variar desde os mais simples, tais como os frequentemente utilizados RDF Schema \[<a href="#bib-RDF-SCHEMA" class="bibref">RDF-SCHEMA</a>\], FOAF \[<a href="#bib-FOAF" class="bibref">FOAF</a>\] e Dublin Core \[<a href="#bib-DCTERMS" class="bibref">DCTERMS</a>\] até vocabulários complexos, com milhares de termos, como aqueles usados nos cuidados de saúde para descrever sintomas, doenças e tratamentos. Os vocabulários têm um papel importante nos Dados Conectados, especialmente no suporte à integração de dados. O uso deste termo sobrepõe-se à Ontologia.

De: [*Linked Data Glossary* (em inglês)](https://www.w3.org/TR/ld-glossary/#vocabulary)

<span property="xhv:role" resource="xhv:heading"><span class="secno">10. </span>Desafios de Dados na Web</span>
---------------------------------------------------------------------------------------------------------------

*Esta seção não é normativa*

O diagrama a seguir resume alguns dos principais desafios enfrentados ao publicar ou consumir dados na Web. Estes desafios foram identificados a partir do documento Requisitos e Casos de Uso das Boas Práticas para Dados na Web, do inglês *Data on the Web Best Practices Use Cases & Requirements* \[<a href="#bib-DWBP-UCR" class="bibref">DWBP-UCR</a>\] e, como apresentado no diagrama, são mencionados por uma ou mais Boas Práticas.

Desafios de Dados na Web

Desafios de Dados na Web Metadados Como eu forneço medatados para pessoas & máquinas? [Fornecer metadados](#ProvideMetadata) [Fornecer metadados descritivos](#DescriptiveMetadata) [Fornecer metadados estruturais](#StructuralMetadata) Licença de Dados Como forneço & restrinjo o acesso? [Fornecer informações sobre a licença de dados](#DataLicense) Proveniência & Qualidade Como posso aumentar a confiança? [Fornecer informações de proveniência dos dados](#DataProvenance) [Fornecer informações de qualidade dos dados](#DataQuality) Versionamento de Dados Como posso rastrear versões & histórico de versões? [Fornecer indicador de versão](#VersioningInfo) [Fornecer o histórico de versão](#VersionHistory) Identificadores de Dados Como posso identificar conjuntos de dados & distribuições? [Usar URIs persistentes como identificadores de conjuntos de dados](#UniqueIdentifiers) [Usar URIs persistentes como identificadores dentro de conjuntos de dados](#identifiersWithinDatasets) [Atribuir URIs para as versões dos conjuntos de dados e séries](#VersionIdentifiers) Formato de Dados Quais formatos de dados devo usar? [Usar formatos de dados padronizados e legíveis por máquinas](#dataFormats) [Usar representações de dados que sejam independentes de localidade (locale neutral)](#LocaleParametersMetadata) [Fornecer dados em vários formatos](#MultipleFormats) Vocabulário de Dados Como melhorar a interoperabildiade do dado? [Reutilizar vocabulários, dando preferencia aos padronizados](#ReuseVocabularies) [Escolher o nível de formalização adequado](#ChooseRightFormalizationLevel) Acesso a Dados Como posso fornecer acesso ao dado? [Fornecer download em massa (bulk download)](#BulkAccess) [Fornecer subconjuntos para conjuntos de dados grandes](#ProvideSubsets) [Usar negociação de conteúdo para servir os dados disponíveis em vários formatos](#Conneg) [Fornecer acesso em tempo real](#AccessRealTime) [Fornecer dados atualizados](#AccessUptoDate) [Fornecer uma explicação para os dados que não estão disponíveis](#DataUnavailabilityReference) [Tornar os dados disponíveis por meio de uma API](#useanAPI) [Usar padrões Web como base para construção de APIs](#APIHttpVerbs) [Fornecer documentação completa para as APIs](#documentYourAPI) [Evitar alterações que afetem o funcionamento de sua API](#avoidBreakingChangesAPI) Preservação de Dados Como os dados podem ser arquivados? [Preservar identificadores](#ResourceStatus) [Avaliar a cobertura do conjunto de dados](#EvaluateCoverage) Feedback Como posso engajar usuários? [Coletar feedback dos consumidores de dados](#GatherFeedback) [Compartilhar o feedback disponível](#FeedbackInformation) Enriquecimento de Dados Como posso agregar valor ao dado? [Enriquecer dados por meio da geração de novos dados](#EnrichData) [Fornecer visualizações complementares](#ProvideComplementaryPresentations) Republicação de Dados Como posso reutilizar dados responsavelmente? [Fornecer feedback para o publicador original](#ProvideFeedbackToPublisher) [Obedecer os termos de licença](#FollowLicensingTerms) [Citar a publicação original do conjunto de dados](#CiteOriginalPublication)

<span property="xhv:role" resource="xhv:heading"><span class="secno">11. </span>Benefícios das Boas Práticas</span>
-------------------------------------------------------------------------------------------------------------------

*Esta seção não é normativa.*

A lista abaixo descreve os principais benefícios da aplicação da recomendação DWBP. Cada benefício representa uma melhoria na maneira como os conjuntos de dados são disponibilizados na Web.

-   Compreensão: as pessoas terão um melhor entendimento sobre a estrutura e o significado dos dados, os metadados e a natureza do conjunto de dados.
-   Facilidade de Processamento: as máquinas serão capazes de processar e manipular automaticamente os dados dentro de um conjunto de dados.
-   Facilidade de Descoberta: as máquinas serão capazes de descobrir automaticamente um conjunto de dados ou dados dentro de um conjunto de dados.
-   Reúso: aumentarão as possibilidades de reutilização do conjunto de dados por diferentes grupos de consumidores de dados.
-   Confiança: a confiança que os clientes depositam no conjunto de dados se ampliará.
-   Capacidade de Conexão: será possível criar conexões entre os recursos de dados (conjuntos de dados e itens de dados).
-   Facilidade de Acesso: pessoas e máquinas serão capazes de acessar dados atualizados de várias maneiras.
-   Interoperabilidade: será mais fácil alcançar um consenso entre publicadores de dados e consumidores.

A tabela a seguir relaciona Boas Práticas e Benefícios

Boas Práticas e Benefícios

Boa Prática

Benefícios

[Fornecer metadados](#ProvideMetadata)

-   Reúso
-   Compreensão
-   Facilidade de Descoberta
-   Processability
-   <img src="https://www.w3c.br/dwbp/images/Reuse.png" alt="Reuse" class="benefitIcon reuseIcon" />
-   <img src="https://www.w3c.br/dwbp/images/Comprehension.png" alt="Comprehension" class="benefitIcon comprehensionIcon" />
-   <img src="https://www.w3c.br/dwbp/images/Discoverability.png" alt="Discoverability" class="benefitIcon discoverabilityIcon" />
-   <img src="https://www.w3c.br/dwbp/images/Processability.png" alt="Processability" class="benefitIcon interoperabilityIcon" />

[Fornecer metadados descritivos](#DescriptiveMetadata)

-   Reúso
-   Compreensão
-   Facilidade de Descoberta
-   <img src="https://www.w3c.br/dwbp/images/Reuse.png" alt="Reuse" class="benefitIcon reuseIcon" />
-   <img src="https://www.w3c.br/dwbp/images/Comprehension.png" alt="Comprehension" class="benefitIcon comprehensionIcon" />
-   <img src="https://www.w3c.br/dwbp/images/Discoverability.png" alt="Discoverability" class="benefitIcon discoverabilityIcon" />

[Fornecer metadados estruturais](#StructuralMetadata)

-   Reúso
-   Compreensão
-   Facilidade de Processamento
-   <img src="https://www.w3c.br/dwbp/images/Reuse.png" alt="Reuse" class="benefitIcon reuseIcon" />
-   <img src="https://www.w3c.br/dwbp/images/Comprehension.png" alt="Comprehension" class="benefitIcon comprehensionIcon" />
-   <img src="https://www.w3c.br/dwbp/images/Processability.png" alt="Processability" class="benefitIcon interoperabilityIcon" />

[Fornecer informações sobre a licença de dados](#DataLicense)

-   Reúso
-   Confiança
-   <img src="https://www.w3c.br/dwbp/images/Reuse.png" alt="Reuse" class="benefitIcon reuseIcon" />
-   <img src="https://www.w3c.br/dwbp/images/Trust.png" alt="Trust" class="benefitIcon interoperabilityIcon" />

[Fornecer informações de procedência dos dados](#DataProvenance)

-   Reúso
-   Compreensão
-   Confiança
-   <img src="https://www.w3c.br/dwbp/images/Reuse.png" alt="Reuse" class="benefitIcon reuseIcon" />
-   <img src="https://www.w3c.br/dwbp/images/Comprehension.png" alt="Comprehension" class="benefitIcon comprehensionIcon" />
-   <img src="https://www.w3c.br/dwbp/images/Trust.png" alt="Trust" class="benefitIcon interoperabilityIcon" />

[Fornecer informações de qualidade de dados](#DataQuality)

-   Reúso
-   Confiança
-   <img src="https://www.w3c.br/dwbp/images/Reuse.png" alt="Reuse" class="benefitIcon reuseIcon" />
-   <img src="https://www.w3c.br/dwbp/images/Trust.png" alt="Trust" class="benefitIcon interoperabilityIcon" />

[Fornecer indicador de versão](#VersioningInfo)

-   Reúso
-   Confiança
-   <img src="https://www.w3c.br/dwbp/images/Reuse.png" alt="Reuse" class="benefitIcon reuseIcon" />
-   <img src="https://www.w3c.br/dwbp/images/Trust.png" alt="Trust" class="benefitIcon interoperabilityIcon" />

[Fornecer o histórico de versão](#VersionHistory)

-   Reúso
-   Confiança
-   <img src="https://www.w3c.br/dwbp/images/Reuse.png" alt="Reuse" class="benefitIcon reuseIcon" />
-   <img src="https://www.w3c.br/dwbp/images/Trust.png" alt="Trust" class="benefitIcon interoperabilityIcon" />

[Usar URIs persistentes como identificadores de conjuntos de dados](#UniqueIdentifiers)

-   Reúso
-   Facilidade de Conexão
-   Interoperabildade
-   <img src="https://www.w3c.br/dwbp/images/Reuse.png" alt="Reuse" class="benefitIcon reuseIcon" />
-   <img src="https://www.w3c.br/dwbp/images/Linkability.png" alt="Linkability" class="benefitIcon linkabilityIcon" />
-   <img src="https://www.w3c.br/dwbp/images/Interoperability.png" alt="Interoperability" class="benefitIcon interoperabilityIcon" />

[Usar URIs persistentes como identificadores dentro de conjuntos de dados](#identifiersWithinDatasets)

-   Reúso
-   Facilidade de Conexão
-   Facilidade de Descoberta
-   Interoperabildade
-   <img src="https://www.w3c.br/dwbp/images/Reuse.png" alt="Reuse" class="benefitIcon reuseIcon" />
-   <img src="https://www.w3c.br/dwbp/images/Linkability.png" alt="Linkability" class="benefitIcon linkabilityIcon" />
-   <img src="https://www.w3c.br/dwbp/images/Discoverability.png" alt="Discoverability" class="benefitIcon discoverabilityIcon" />
-   <img src="https://www.w3c.br/dwbp/images/Interoperability.png" alt="Interoperability" class="benefitIcon interoperabilityIcon" />

[Atribuir URIs para as versões dos conjuntos de dados e séries](#VersionIdentifiers)

-   Reúso
-   Facilidade de Descoberta
-   Confiança
-   <img src="https://www.w3c.br/dwbp/images/Reuse.png" alt="Reuse" class="benefitIcon reuseIcon" />
-   <img src="https://www.w3c.br/dwbp/images/Discoverability.png" alt="Discoverability" class="benefitIcon discoverabilityIcon" />
-   <img src="https://www.w3c.br/dwbp/images/Trust.png" alt="Trust" class="benefitIcon interoperabilityIcon" />

[Usar formatos de dados padronizados legíveis por máquinas](#dataFormats)

-   Reúso
-   Facilidade de Processamento
-   <img src="https://www.w3c.br/dwbp/images/Reuse.png" alt="Reuse" class="benefitIcon reuseIcon" />
-   <img src="https://www.w3c.br/dwbp/images/Processability.png" alt="Processability" class="benefitIcon interoperabilityIcon" />

[Usar representações de dados que sejam independentes de localidade *(locale neutral)*](#LocaleParametersMetadata)

-   Reúso
-   Compreensão
-   <img src="https://www.w3c.br/dwbp/images/Reuse.png" alt="Reuse" class="benefitIcon reuseIcon" />
-   <img src="https://www.w3c.br/dwbp/images/Comprehension.png" alt="Comprehension" class="benefitIcon comprehensionIcon" />

[Fornecer dados em formatos múltiplos](#MultipleFormats)

-   Reúso
-   Facilidade de Processamento
-   <img src="https://www.w3c.br/dwbp/images/Reuse.png" alt="Reuse" class="benefitIcon reuseIcon" />
-   <img src="https://www.w3c.br/dwbp/images/Processability.png" alt="Processability" class="benefitIcon interoperabilityIcon" />

[Reutilizar vocabulários, dando preferência aos padronizados](#ReuseVocabularies)

-   Reúso
-   Facilidade de Processamento
-   Compreensão
-   Confiança
-   Interoperabilidade
-   <img src="https://www.w3c.br/dwbp/images/Reuse.png" alt="Reuse" class="benefitIcon reuseIcon" />
-   <img src="https://www.w3c.br/dwbp/images/Processability.png" alt="Processability" class="benefitIcon interoperabilityIcon" />
-   <img src="https://www.w3c.br/dwbp/images/Comprehension.png" alt="Comprehension" class="benefitIcon comprehensionIcon" />
-   <img src="https://www.w3c.br/dwbp/images/Trust.png" alt="Trust" class="benefitIcon interoperabilityIcon" />
-   <img src="https://www.w3c.br/dwbp/images/Interoperability.png" alt="Interoperability" class="benefitIcon interoperabilityIcon" />

[Escolher o nível de formalização adequado](#ChooseRightFormalizationLevel)

-   Reúso
-   Compreensão
-   Interoperabilidade
-   <img src="https://www.w3c.br/dwbp/images/Reuse.png" alt="Reuse" class="benefitIcon reuseIcon" />
-   <img src="https://www.w3c.br/dwbp/images/Comprehension.png" alt="Comprehension" class="benefitIcon comprehensionIcon" />
-   <img src="https://www.w3c.br/dwbp/images/Interoperability.png" alt="Interoperability" class="benefitIcon interoperabilityIcon" />

[Fornecer download em massa *(bulk download)*](#BulkAccess)

-   Reúso
-   Facilidade de Acesso
-   <img src="https://www.w3c.br/dwbp/images/Reuse.png" alt="Reuse" class="benefitIcon reuseIcon" />
-   <img src="https://www.w3c.br/dwbp/images/Access.png" alt="Access" class="benefitIcon accessIcon" />

[Fornecer subconjuntos para conjuntos de dados extensos](#ProvideSubsets)

-   Reúso
-   Capacidade de Conexão
-   Facilidade de Acesso
-   Facilidade de Processamento
-   <img src="https://www.w3c.br/dwbp/images/Reuse.png" alt="Reuse" class="benefitIcon reuseIcon" />
-   <img src="https://www.w3c.br/dwbp/images/Linkability.png" alt="Linkability" class="benefitIcon linkabilityIcon" />
-   <img src="https://www.w3c.br/dwbp/images/Access.png" alt="Access" class="benefitIcon accessIcon" />
-   <img src="https://www.w3c.br/dwbp/images/Processability.png" alt="Processability" class="benefitIcon interoperabilityIcon" />

[Usar negociação de conteúdo para disponibilizar dados em formatos múltiplos](#Conneg)

-   Reúso
-   Facilidade de Acesso
-   <img src="https://www.w3c.br/dwbp/images/Reuse.png" alt="Reuse" class="benefitIcon reuseIcon" />
-   <img src="https://www.w3c.br/dwbp/images/Access.png" alt="Access" class="benefitIcon accessIcon" />

[Fornecer acesso em tempo real](#AccessRealTime)

-   Reúso
-   Facilidade de Acesso
-   <img src="https://www.w3c.br/dwbp/images/Reuse.png" alt="Reuse" class="benefitIcon reuseIcon" />
-   <img src="https://www.w3c.br/dwbp/images/Access.png" alt="Access" class="benefitIcon accessIcon" />

[Fornecer dados atualizados](#AccessUptoDate)

-   Reúso
-   Facilidade de Acesso
-   <img src="https://www.w3c.br/dwbp/images/Reuse.png" alt="Reuse" class="benefitIcon reuseIcon" />
-   <img src="https://www.w3c.br/dwbp/images/Access.png" alt="Access" class="benefitIcon accessIcon" />

[Fornecer uma explicação para os dados que não estão disponíveis](#DataUnavailabilityReference)

-   Reúso
-   Confiança
-   <img src="https://www.w3c.br/dwbp/images/Reuse.png" alt="Reuse" class="benefitIcon reuseIcon" />
-   <img src="https://www.w3c.br/dwbp/images/Trust.png" alt="Trust" class="benefitIcon interoperabilityIcon" />

[Disponibilizar dados por meio de uma API](#useanAPI)

-   Reúso
-   Facilidade de Processamento
-   Interoperabilidade
-   Facilidade de Acesso
-   <img src="https://www.w3c.br/dwbp/images/Reuse.png" alt="Reuse" class="benefitIcon reuseIcon" />
-   <img src="https://www.w3c.br/dwbp/images/Processability.png" alt="Processability" class="benefitIcon interoperabilityIcon" />
-   <img src="https://www.w3c.br/dwbp/images/Interoperability.png" alt="Interoperability" class="benefitIcon interoperabilityIcon" />
-   <img src="https://www.w3c.br/dwbp/images/Access.png" alt="Access" class="benefitIcon accessIcon" />

[Usar padrões Web como base para construção de APIs](#APIHttpVerbs)

-   Reúso
-   Capacidade de Conexão
-   Facilidade de Descoberta
-   Facilidade de Acesso
-   Facilidade de Processamento
-   <img src="https://www.w3c.br/dwbp/images/Reuse.png" alt="Reuse" class="benefitIcon reuseIcon" />
-   <img src="https://www.w3c.br/dwbp/images/Linkability.png" alt="Linkability" class="benefitIcon linkabilityIcon" />
-   <img src="https://www.w3c.br/dwbp/images/Discoverability.png" alt="Discoverability" class="benefitIcon discoverabilityIcon" />
-   <img src="https://www.w3c.br/dwbp/images/Access.png" alt="Access" class="benefitIcon accessIcon" />
-   <img src="https://www.w3c.br/dwbp/images/Processability.png" alt="Processability" class="benefitIcon interoperabilityIcon" />

[Fornecer documentação completa para as APIs](#documentYourAPI)

-   Reúso
-   Confiança
-   <img src="https://www.w3c.br/dwbp/images/Reuse.png" alt="Reuse" class="benefitIcon reuseIcon" />
-   <img src="https://www.w3c.br/dwbp/images/Trust.png" alt="Trust" class="benefitIcon interoperabilityIcon" />

[Evitar alterações que afetem o funcionamento de sua API](#avoidBreakingChangesAPI)

-   Confiança
-   Interoperabilidade
-   <img src="https://www.w3c.br/dwbp/images/Trust.png" alt="Trust" class="benefitIcon interoperabilityIcon" />
-   <img src="https://www.w3c.br/dwbp/images/Interoperability.png" alt="Interoperability" class="benefitIcon interoperabilityIcon" />

[Preservar identificadores](#ResourceStatus)

-   Reúso
-   Confiança
-   <img src="https://www.w3c.br/dwbp/images/Reuse.png" alt="Reuse" class="benefitIcon reuseIcon" />
-   <img src="https://www.w3c.br/dwbp/images/Trust.png" alt="Trust" class="benefitIcon interoperabilityIcon" />

[Avaliar a cobertura do conjunto de dados](#EvaluateCoverage)

-   Reúso
-   Confiança
-   <img src="https://www.w3c.br/dwbp/images/Reuse.png" alt="Reuse" class="benefitIcon reuseIcon" />
-   <img src="https://www.w3c.br/dwbp/images/Trust.png" alt="Trust" class="benefitIcon interoperabilityIcon" />

[Coletar *feedback* de consumidores de dados](#GatherFeedback)

-   Reúso
-   Compreensão
-   Confiança
-   <img src="https://www.w3c.br/dwbp/images/Reuse.png" alt="Reuse" class="benefitIcon reuseIcon" />
-   <img src="https://www.w3c.br/dwbp/images/Comprehension.png" alt="Comprehension" class="benefitIcon comprehensionIcon" />
-   <img src="https://www.w3c.br/dwbp/images/Trust.png" alt="Trust" class="benefitIcon interoperabilityIcon" />

[Compartilhar o *feedback* disponível](#FeedbackInformation)

-   Reúso
-   Confiança
-   <img src="https://www.w3c.br/dwbp/images/Reuse.png" alt="Reuse" class="benefitIcon reuseIcon" />
-   <img src="https://www.w3c.br/dwbp/images/Trust.png" alt="Trust" class="benefitIcon interoperabilityIcon" />

[Enriquecer dados por meio da geração de novos dados](#EnrichData)

-   Reúso
-   Compreensão
-   Confiança
-   Facilidade de Processamento
-   <img src="https://www.w3c.br/dwbp/images/Reuse.png" alt="Reuse" class="benefitIcon reuseIcon" />
-   <img src="https://www.w3c.br/dwbp/images/Comprehension.png" alt="Comprehension" class="benefitIcon comprehensionIcon" />
-   <img src="https://www.w3c.br/dwbp/images/Trust.png" alt="Trust" class="benefitIcon interoperabilityIcon" />
-   <img src="https://www.w3c.br/dwbp/images/Processability.png" alt="Processability" class="benefitIcon interoperabilityIcon" />

[Fornecer visualizações complementares](#ProvideComplementaryPresentations)

-   Reúso
-   Compreensão
-   Facilidade de Acesso
-   Confiança
-   <img src="https://www.w3c.br/dwbp/images/Reuse.png" alt="Reuse" class="benefitIcon reuseIcon" />
-   <img src="https://www.w3c.br/dwbp/images/Comprehension.png" alt="Comprehension" class="benefitIcon comprehensionIcon" />
-   <img src="https://www.w3c.br/dwbp/images/Access.png" alt="Access" class="benefitIcon accessIcon" />
-   <img src="https://www.w3c.br/dwbp/images/Trust.png" alt="Trust" class="benefitIcon interoperabilityIcon" />

[Fornecer *feedback* para o publicador original](#ProvideFeedbackToPublisher)

-   Reúso
-   Interoperabilidade
-   Confiança
-   <img src="https://www.w3c.br/dwbp/images/Reuse.png" alt="Reuse" class="benefitIcon reuseIcon" />
-   <img src="https://www.w3c.br/dwbp/images/Interoperability.png" alt="Interoperability" class="benefitIcon interoperabilityIcon" />
-   <img src="https://www.w3c.br/dwbp/images/Trust.png" alt="Trust" class="benefitIcon interoperabilityIcon" />

[Obedecer os termos de licença](#FollowLicensingTerms)

-   Reúso
-   Confiança
-   <img src="https://www.w3c.br/dwbp/images/Reuse.png" alt="Reuse" class="benefitIcon reuseIcon" />
-   <img src="https://www.w3c.br/dwbp/images/Trust.png" alt="Trust" class="benefitIcon interoperabilityIcon" />

[Citar a publicação original do conjunto de dados](#CiteOriginalPublication)

-   Reúso
-   Facilidade de Descoberta
-   Confiança
-   <img src="https://www.w3c.br/dwbp/images/Reuse.png" alt="Reuse" class="benefitIcon reuseIcon" />
-   <img src="https://www.w3c.br/dwbp/images/Discoverability.png" alt="Discoverability" class="benefitIcon discoverabilityIcon" />
-   <img src="https://www.w3c.br/dwbp/images/Trust.png" alt="Trust" class="benefitIcon interoperabilityIcon" />

A figura abaixo demonstra os benefícios que os publicadores de dados obterão ao optar pela adoção das Boas Práticas.

REÚSO

Todas as Boas Práticas

FACILIDADE DE ACESSO

-   [Fornecer download em massa *(bulk download)*](#BulkAccess)
-   [Fornecer subconjuntos para conjuntos de dados extensos](#ProvideSubsets)
-   [Usar negociação de conteúdo para disponibilizar dados em formatos múltiplos](#Conneg)
-   [Fornecer acesso em tempo real](#AccessRealTime)
-   [Fornecer dados atualizados](#AccessUptoDate)
-   [Disponibilizar dados por meio de uma API](#useanAPI)
-   [Usar padrões Web como base para construção de APIs](#APIHttpVerbs)
-   [Fornecer visualizações complementares](#ProvideComplementaryPresentations)

FACILIDADE DE DESCOBERTA

-   [Fornecer metadados](#ProvideMetadata)
-   [Fornecer metadados descritivos](#DescriptiveMetadata)
-   [Usar URIs persistentes como identificadores de conjuntos de dados](#UniqueIdentifiers)
-   [Usar URIs persistentes como identificadores dentro de conjuntos de dados](#identifiersWithinDatasets)
-   [Atribuir URIs para as versões dos conjuntos de dados e séries](#VersionIdentifiers)
-   [Usar padrões Web como base para construção de APIs](#APIHttpVerbs)
-   [Citar a publicação original do conjunto de dados](#CiteOriginalPublication)

FACILIDADE DE PROCESSAMENTO

-   [Fornecer metadados](#ProvideMetadata)
-   [Fornecer metadados estruturais](#StructuralMetadata)
-   [Usar formatos de dados padronizados legíveis por máquinas](#dataFormats)
-   [Fornecer dados em formatos múltiplos](#MultipleFormats)
-   [Reutilizar vocabulários, dando preferência aos padronizados](#ReuseVocabularies)
-   [Fornecer subconjuntos para conjuntos de dados extensos](#ProvideSubsets)
-   [Disponibilizar os dados por meio de uma API](#useanAPI)
-   [Usar padrões Web como base para construção de APIs](#APIHttpVerbs)
-   [Enriquecer dados por meio da geração de novos dados](#EnrichData)

CONFIANÇA

-   [Fornecer informações sobre a licença de dados](#DataLicense)
-   [Fornecer informações de procedência dos dados](#DataProvenance)
-   [Fornecer informações de qualidade de dados](#DataQuality)
-   [Fornecer indicador de versão](#VersioningInfo)
-   [Fornecer o histórico de versão](#VersionHistory)
-   [Atribuir URIs para as versões dos conjuntos de dados e séries](#VersionIdentifiers)
-   [Reutilizar vocabulários, dando preferência aos padronizados](#ReuseVocabularies)
-   [Fornecer uma explicação para os dados que não estão disponíveis](#DataUnavailabilityReference)
-   [Fornecer documentação completa para as APIs](#documentYourAPI)
-   [Evitar alterações que afetem o funcionamento de sua API](#avoidBreakingChangesAPI)
-   [Preservar identificadores](#ResourceStatus)
-   [Avaliar a cobertura do conjunto de dados](#EvaluateCoverage)
-   [Coletar *feedback* de consumidores de dados](#GatherFeedback)
-   [Compartilhar o *feedback* disponível](#FeedbackInformation)
-   [Enriquecer dados por meio da geração de novos dados](#EnrichData)
-   [Fornecer visualizações complementares](#ProvideComplementaryPresentations)
-   [Fornecer *feedback* para o publicador original](#ProvideFeedbackToPublisher)
-   [Obedecer os termos de licença](#FollowLicensingTerms)
-   [Citar a publicação original do conjunto de dados](#CiteOriginalPublication)

INTEROPERABILIDADE

-   [Usar URIs persistentes como identificadores de conjuntos de dados](#UniqueIdentifiers)
-   [Usar URIs persistentes como identificadores dentro de conjuntos de dados](#identifiersWithinDatasets)
-   [Reutilizar vocabulários, dando preferência aos padronizados](#ReuseVocabularies)
-   [Escolher o nível de formalização adequado](#ChooseRightFormalizationLevel)
-   [Disponibilizar dados por meio de uma API](#useanAPI)
-   [Usar padrões Web como base para construção de APIs](#APIHttpVerbs)
-   [Evitar alterações que afetem o funcionamento de sua API](#avoidBreakingChangesAPI)
-   [Fornecer *feedback* para o publicador original](#ProvideFeedbackToPublisher)

FACILIDADE DE CONEXÃO

-   [Usar URIs persistentes como identificadores de conjuntos de dados](#UniqueIdentifiers)
-   [Usar URIs persistentes como identificadores dentro de conjuntos de dados](#identifiersWithinDatasets)
-   [Fornecer subconjuntos para conjuntos de dados extensos](#ProvideSubsets)
-   [Usar padrões Web como base para construção de APIs](#APIHttpVerbs)

COMPREENSÃO

-   [Fornecer metadados](#ProvideMetadata)
-   [Fornecer metadados descritivos](#DescriptiveMetadata)
-   [Fornecer metadados estruturais](#StructuralMetadata)
-   [Fornecer informações de procedência dos dados](#DataProvenance)
-   [Usar representações de dados que sejam independentes de localidade *(locale neutral)*](#LocaleParametersMetadata)
-   [Reutilizar vocabulários, dando preferência aos padronizados](#ReuseVocabularies)
-   [Escolher o nível de formalização adequado](#ChooseRightFormalizationLevel)
-   [Coletar *feedback* de consumidores de dados](#GatherFeedback)
-   [Enriquecer dados por meio da geração de novos dados](#EnrichData)
-   [Fornecer visualizações complementares](#ProvideComplementaryPresentations)

<span property="xhv:role" resource="xhv:heading"><span class="secno">12. </span>Requisitos de Casos de Uso x Boas Práticas</span>
---------------------------------------------------------------------------------------------------------------------------------

*Esta seção não é normativa*

<table><caption>Requirements x Best Practices</caption><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><thead><tr class="header"><th>Requisitos</th><th>Boas Práticas</th></tr></thead><tbody><tr class="odd"><td><a href="https://www.w3.org/TR/dwbp-ucr/#R-MetadataAvailable">R-MetadataAvailable</a></td><td><p><a href="#ProvideMetadata">Fornecer metadados</a></p><p><a href="#DescriptiveMetadata">Fornecer metadados descritivos</a></p><p><a href="#StructuralMetadata">Fornecer metadados estruturais</a></p><p><a href="#DataProvenance">Fornecer informações de procedência dos dados</a></p><p><a href="#LocaleParametersMetadata">Usar representações de dados que sejam independentes de localidade <em>(locale neutral)</em></a></p><p><a href="#CiteOriginalPublication">Citar a publicação original do conjunto de dados</a></p></td></tr><tr class="even"><td><a href="https://www.w3.org/TR/dwbp-ucr/#R-MetadataDocum">R-MetadataDocum</a></td><td><p><a href="#ProvideMetadata">Fornecer metadados</a></p><p><a href="#ReuseVocabularies">Reutilizar vocabulários, dando preferência aos padronizados</a></p></td></tr><tr class="odd"><td><a href="https://www.w3.org/TR/dwbp-ucr/#R-MetadataMachineRead">R-MetadataMachineRead</a></td><td><p><a href="#ProvideMetadata">Fornecer metadados</a></p><p><a href="#DescriptiveMetadata">Fornecer metadados descritivos</a></p><p><a href="#DataLicense">Fornecer informações sobre a licença de dados</a></p></td></tr><tr class="even"><td><a href="https://www.w3.org/TR/dwbp-ucr/#R-MetadataStandardized">R-MetadataStandardized</a></td><td><p><a href="#DescriptiveMetadata">Fornecer metadados descritivos</a></p><p><a href="#ReuseVocabularies">Reutilizar vocabulários, dando preferência aos padronizados</a></p></td></tr><tr class="odd"><td><a href="https://www.w3.org/TR/dwbp-ucr/#R-LicenseAvailable">R-LicenseAvailable</a></td><td><p><a href="#DataLicense">Fornecer informações sobre a licença de dados</a></p><p><a href="#FollowLicensingTerms">Obedecer os termos de licença</a></p></td></tr><tr class="even"><td><a href="https://www.w3.org/TR/dwbp-ucr/#R-LicenseLiability">R-LicenseLiability</a></td><td><p><a href="#DataLicense">Fornecer informações sobre a licença de dados</a></p><p><a href="#FollowLicensingTerms">Obedecer os termos de licença</a></p></td></tr><tr class="odd"><td><a href="https://www.w3.org/TR/dwbp-ucr/#R-ProvAvailable">R-ProvAvailable</a></td><td><p><a href="#DataProvenance">Fornecer informações de procedência dos dados</a></p><p><a href="#EnrichData">Enriquecer dados por meio da geração de novos dados</a></p><p><a href="#CiteOriginalPublication">Citar a publicação original do conjunto de dados</a></p></td></tr><tr class="even"><td><a href="https://www.w3.org/TR/dwbp-ucr/#R-QualityMetrics">R-QualityMetrics</a></td><td><p><a href="#DataQuality">Fornecer informações de qualidade de dados</a></p></td></tr><tr class="odd"><td><a href="https://www.w3.org/TR/dwbp-ucr/#R-DataMissingIncomplete">R-DataMissingIncomplete</a></td><td><p><a href="#DataQuality">Fornecer informações de qualidade de dados</a></p></td></tr><tr class="even"><td><a href="https://www.w3.org/TR/dwbp-ucr/#R-QualityOpinions">R-QualityOpinions</a></td><td><p><a href="#DataQuality">Fornecer informações de qualidade de dados</a></p><p><a href="#GatherFeedback">Coletar <em>feedback</em> de consumidores de dados</a></p><p><a href="#FeedbackInformation">Compartilhar o <em>feedback</em> disponível</a></p><p><a href="#ProvideFeedbackToPublisher">Fornecer <em>feedback</em> para o publicador original</a></p></td></tr><tr class="odd"><td><a href="https://www.w3.org/TR/dwbp-ucr/#R-DataVersion">R-DataVersion</a></td><td><p><a href="#VersioningInfo">Fornecer indicador de versão</a></p><p><a href="#VersionHistory">Fornecer o histórico de versão</a></p></td></tr><tr class="even"><td><a href="https://www.w3.org/TR/dwbp-ucr/#R-UniqueIdentifier">R-UniqueIdentifier</a></td><td><p><a href="#UniqueIdentifiers">Usar URIs persistentes como identificadores de conjuntos de dados</a></p><p><a href="#identifiersWithinDatasets">Usar URIs persistentes como identificadores dentro de conjuntos de dados</a></p><p><a href="#VersionIdentifiers">Atribuir URIs para as versões dos conjuntos de dados e séries</a></p><p><a href="#ProvideSubsets">Fornecer subconjuntos para conjuntos de dados extensos</a></p><p><a href="#APIHttpVerbs">Usar padrões Web como base para construção de APIs</a></p></td></tr><tr class="odd"><td><a href="https://www.w3.org/TR/dwbp-ucr/#R-Citable">R-Citable</a></td><td><p><a href="#UniqueIdentifiers">Usar URIs persistentes como identificadores de conjuntos de dados</a></p><p><a href="#VersionIdentifiers">Atribuir URIs para as versões dos conjuntos de dados e séries</a></p><p><a href="#ProvideSubsets">Fornecer subconjuntos para conjuntos de dados extensos</a></p><p><a href="#CiteOriginalPublication">Citar a publicação original do conjunto de dados</a></p></td></tr><tr class="even"><td><a href="https://www.w3.org/TR/dwbp-ucr/#R-FormatMachineRead">R-FormatMachineRead</a></td><td><p><a href="#dataFormats">Usar formatos de dados padronizados legíveis por máquinas</a></p><p><a href="#Conneg">Usar negociação de conteúdo para disponibilizar dados em formatos múltiplos</a></p><p><a href="#EnrichData">Enriquecer dados por meio da geração de novos dados</a></p></td></tr><tr class="odd"><td><a href="https://www.w3.org/TR/dwbp-ucr/#R-FormatStandardized">R-FormatStandardized</a></td><td><p><a href="#dataFormats">Usar formatos de dados padronizados legíveis por máquinas</a></p></td></tr><tr class="even"><td><a href="https://www.w3.org/TR/dwbp-ucr/#R-FormatOpen">R-FormatOpen</a></td><td><p><a href="#MachineReadableStandardizedFormat">Usar formatos de dados padronizados legíveis por máquinas</a></p></td></tr><tr class="odd"><td><a href="https://www.w3.org/TR/dwbp-ucr/#R-FormatLocalize">R-FormatLocalize</a></td><td><p><a href="#LocaleParametersMetadata">Usar representações de dados que sejam independentes de localidade <em>(locale neutral)</em></a></p></td></tr><tr class="even"><td><a href="https://www.w3.org/TR/dwbp-ucr/#R-GeographicalContext">R-GeographicalContext</a></td><td><p><a href="#LocaleParametersMetadata">Usar representações de dados que sejam independentes de localidade <em>(locale neutral)</em></a></p></td></tr><tr class="odd"><td><a href="https://www.w3.org/TR/dwbp-ucr/#R-FormatMultiple">R-FormatMultiple</a></td><td><p><a href="#MultipleFormats">Fornecer dados em formatos múltiplos</a></p><p><a href="#Conneg">Usar negociação de conteúdo para disponibilizar dados em formatos múltiplos</a></p></td></tr><tr class="even"><td><a href="https://www.w3.org/TR/dwbp-ucr/#R-QualityComparable">R-QualityComparable</a></td><td><p><a href="#ReuseVocabularies">Reutilizar vocabulários, dando preferência aos padronizados</a></p><p><a href="#ChooseRightFormalizationLevel">Escolher o nível de formalização adequado</a></p></td></tr><tr class="odd"><td><a href="https://www.w3.org/TR/dwbp-ucr/#R-VocabOpen">R-VocabOpen</a></td><td><p><a href="#ReuseVocabularies">Reutilizar vocabulários, dando preferência aos padronizados</a></p></td></tr><tr class="even"><td><a href="https://www.w3.org/TR/dwbp-ucr/#R-VocabReference">R-VocabReference</a></td><td><p><a href="#ReuseVocabularies">Reutilizar vocabulários, dando preferência aos padronizados</a></p><p><a href="#ChooseRightFormalizationLevel">Escolher o nível de formalização adequado</a></p><p><a href="#EvaluateCoverage">Avaliar a cobertura do conjunto de dados</a></p></td></tr><tr class="odd"><td><a href="https://www.w3.org/TR/dwbp-ucr/#R-AccessBulk">R-AccessBulk</a></td><td><p><a href="#BulkAccess">Fornecer download em massa <em>(bulk download)</em></a></p></td></tr><tr class="even"><td><a href="https://www.w3.org/TR/dwbp-ucr/#R-GranularityLevels">R-GranularityLevels</a></td><td><p><a href="#ProvideSubsets">Fornecer subconjuntos para conjuntos de dados extensos</a></p></td></tr><tr class="odd"><td><a href="https://www.w3.org/TR/dwbp-ucr/#R-AccessRealTime">R-AccessRealTime</a></td><td><p><a href="#ProvideSubsets">Fornecer subconjuntos para conjuntos de dados extensos</a></p><p><a href="#AccessRealTime">Fornecer acesso em tempo real</a></p><p><a href="#useanAPI">Disponibilizar dados por meio de uma API</a></p></td></tr><tr class="even"><td><a href="https://www.w3.org/TR/dwbp-ucr/#R-AccessUpToDate">R-AccessUpToDate</a></td><td><p><a href="#AccessUptoDate">Fornecer dados atualizados</a></p><p><a href="#useanAPI">Disponibilizar dados por meio de uma API</a></p></td></tr><tr class="odd"><td><a href="https://www.w3.org/TR/dwbp-ucr/#R-AccessLevel">R-AccessLevel</a></td><td><p><a href="#DataUnavailabilityReference">Fornecer uma explicação para os dados que não estão disponíveis</a></p><p><a href="#ResourceStatus">Preservar identificadores</a></p></td></tr><tr class="even"><td><a href="https://www.w3.org/TR/dwbp-ucr/#R-SensitivePrivacy">R-SensitivePrivacy</a></td><td><p><a href="#DataUnavailabilityReference">Fornecer uma explicação para os dados que não estão disponíveis</a></p></td></tr><tr class="odd"><td><a href="https://www.w3.org/TR/dwbp-ucr/#R-SensitiveSecurity">R-SensitiveSecurity</a></td><td><p><a href="#DataUnavailabilityReference">Fornecer uma explicação para os dados que não estão disponíveis</a></p></td></tr><tr class="even"><td><a href="https://www.w3.org/TR/dwbp-ucr/#R-APIDocumented">R-APIDocumented</a></td><td><p><a href="#APIHttpVerbs">Usar padrões Web como base para construção de APIs</a></p><p><a href="#documentYourAPI">Fornecer documentação completa para as APIs</a></p><p><a href="#avoidBreakingChangesAPI">Evitar alterações que afetem o funcionamento de sua API</a></p></td></tr><tr class="odd"><td><a href="https://www.w3.org/TR/dwbp-ucr/#R-PersistentIdentification">R-PersistentIdentification</a></td><td><p><a href="#avoidBreakingChangesAPI">Evitar alterações que afetem o funcionamento de sua API</a></p><p><a href="#ResourceStatus">Preservar identificadores</a></p></td></tr><tr class="even"><td><a href="https://www.w3.org/TR/dwbp-ucr/#R-UsageFeedback">R-UsageFeedback</a></td><td><p><a href="#GatherFeedback">Coletar <em>feedback</em> de consumidores de dados</a></p><p><a href="#FeedbackInformation">Compartilhar o <em>feedback</em> disponível</a></p><p><a href="#ProvideFeedbackToPublisher">Fornecer <em>feedback</em> para o publicador original</a></p></td></tr><tr class="odd"><td><a href="https://www.w3.org/TR/dwbp-ucr/#R-DataEnrichment">R-DataEnrichment</a></td><td><p><a href="#EnrichData">Enriquecer dados por meio da geração de novos dados</a></p><p><a href="#ProvideComplementaryPresentations">Fornecer visualizações complementares</a></p></td></tr><tr class="even"><td><a href="https://www.w3.org/TR/dwbp-ucr/#R-TrackDataUsage">R-TrackDataUsage</a></td><td><p><a href="#ProvideFeedbackToPublisher">Fornecer <em>feedback</em> para o publicador original</a></p><p><a href="#CiteOriginalPublication">Citar a publicação original do conjunto de dados</a></p></td></tr></tbody></table>

<span property="xhv:role" resource="xhv:heading"><span class="secno">A. </span>Agradecimentos</span>
----------------------------------------------------------------------------------------------------

Os editores agradecem as contribuições feitas a este documento por todos os membros do grupo de trabalho. Especialmente o grande esforço realizado por Annette Greiner e os subsídios recebidos de Antoine Isaac, Eric Stephan e Phil Archer.

Este documento beneficiou-se da colaboração de muitos membros do Grupo de Trabalho em Dados Espaciais na Web, do inglês *Spatial Data on the Web Working Group*. Devemos agradecimentos especiais aos colegas Andrea Perego, Dan Brickley, Linda van den Brink e Jeremy Tandy.

Os editores gostariam também de agradecer pelos comentários recebidos de Addison Phillips, Adriano Machado, Adriano Veloso, Andreas Kuckartz, Augusto Herrmann, Bart van Leeuwen, Christophe Gueret, Erik Wilde, Giancarlo Guizzardi, Gisele Pappa, Gregg Kellogg, Herbert Van de Sompel, Ivan Herman, Leigh Dodds, Lewis John McGibbney, Makx Dekkers, Manuel Tomas Carrasco-Benitez, Maurino Andrea, Michel Dumontier, Nandana Mihindukulasooriya, Nathalia Sautchuk Patrício, Peter Winstanley, Renato Iannella, Steven Adler, Vagner Diniz, e Wagner Meira.

Os editores também querem agradecer os presidentes deste Grupo de Trabalho: Deirdre Lee, Hadley Beeman, Yaso Córdova e o contato administrativo Phil Archer.

<span property="xhv:role" resource="xhv:heading"><span class="secno">B. </span>Histórico de Modificações</span>
---------------------------------------------------------------------------------------------------------------

Modificações realizadas desde a [versão anterior (em inglês)](https://www.w3.org/TR/dwbp/diff):

-   A introdução foi reorganizada e [levemente ampliada](#pr) para deixar claro que a recomendação DWBP é um documento geral complementado de forma mais detalhada em áreas mais específicas.
-   Atributos adicionais foram incorporados aos diagramas SVG para aumentar sua acessibilidade.
-   Nomes descritivos foram adicionados à [tabela de espaços de nome](#namespaces)
-   O nome usado no exemplo em execução, John, foi trocado para Adrian por ser mais neutro no que se refere a gênero, considerando o idioma original dos nomes, inglês.

<span property="xhv:role" resource="xhv:heading"><span class="secno">C. </span>Referências</span>
-------------------------------------------------------------------------------------------------

### <span property="xhv:role" resource="xhv:heading"><span class="secno">C.1 </span>Referências Informativas</span>

\[Annotation-Model\]  
Robert Sanderson; Paolo Ciccarese; Benjamin Young. W3C. [Web Annotation Data Model (em inglês)](https://www.w3.org/TR/annotation-model/). 17 de Janeiro de 2017. W3C Proposed Recommendation. URL: [https://www.w3.org/TR/annotation-model/ (em inglês)](https://www.w3.org/TR/annotation-model/)

\[BCP47\]  
A. Phillips; M. Davis. IETF. [Tags for Identifying Languages (em inglês)](https://tools.ietf.org/html/bcp47). Setembro de 2009. IETF Best Current Practice. URL: [https://tools.ietf.org/html/bcp47 (em inglês)](https://tools.ietf.org/html/bcp47)

\[BNF\]  
Bibliothèque nationale de France. [Reference information about authors, works, topics (em inglês)](https://data.bnf.fr/). URL: [https://data.bnf.fr/ (em inglês)](https://data.bnf.fr/)

\[CCREL\]  
Hal Abelson; Ben Adida; Mike Linksvayer; Nathan Yergler. W3C/Creative Commons. [ccREL: The Creative Commons Rights Expression Language (em inglês)](https://www.w3.org/Submission/ccREL/). 1 de Maio de 2008. W3C Member Submission. URL: [https://www.w3.org/Submission/ccREL/ (em inglês)](https://www.w3.org/Submission/ccREL/)

\[CLDR\]  
Unicode Consortium. [Unicode Common Locale Data Repository (em inglês)](http://cldr.unicode.org/). URL: [https://cldr.unicode.org/ (em inglês)](http://cldr.unicode.org/)

\[DCTERMS\]  
Dublin Core metadata initiative. [DCMI Metadata Terms (em inglês)](https://dublincore.org/documents/dcmi-terms/). 14 de Junho de 2012. DCMI Recommendation. URL: [https://dublincore.org/documents/dcmi-terms/ (em inglês)](https://dublincore.org/documents/dcmi-terms/)

\[DWBP-UCR\]  
Deirdre Lee; Bernadette Farias Loscio; Phil Archer. W3C. [Data on the Web Best Practices Use Cases & Requirements (em inglês)](https://www.w3.org/TR/dwbp-ucr/). 24 de Fevereiro de 2015. W3C Note. URL: [https://www.w3.org/TR/dwbp-ucr/ (em inglês)](https://www.w3.org/TR/dwbp-ucr/)

\[FOAF\]  
Dan Brickley; Libby Miller. FOAF project. [FOAF Vocabulary Specification 0.99 (Paddington Edition) (em inglês)](http://xmlns.com/foaf/spec/). 14 de Janeiro de 2014. URL: [http://xmlns.com/foaf/spec/ (em inglês)](http://xmlns.com/foaf/spec/)

\[Fielding\]  
Roy Thomas Fielding. University of California, Irvine. [Representational State Transfer (REST), Chapter 5 of Architectural Styles and the Design of Network-based Software Architectures (em inglês)](https://www.ics.uci.edu/%7Efielding/pubs/dissertation/rest_arch_style.htm). 2000. URL: [https://www.ics.uci.edu/~fielding/pubs/dissertation/rest\_arch\_style.htm (em inglês)](https://www.ics.uci.edu/%7Efielding/pubs/dissertation/rest_arch_style.htm)

\[GS1\]  
Mark Harrison; Ken Traub. GS1. [SmartSearch Implementation Guideline (em inglês)](https://www.gs1.org/gs1-smartsearch/guideline/gtin-web-implementation-guideline). Novembro de 2015. URL: [https://www.gs1.org/gs1-smartsearch/guideline/gtin-web-implementation-guideline (em inglês)](https://www.gs1.org/gs1-smartsearch/guideline/gtin-web-implementation-guideline)

\[GTFS\]  
Pieter Colpaert; Andrew Byrd. [General Transit Feed Specification (em inglês)](http://vocab.gtfs.org/gtfs.ttl#). URL: [http://vocab.gtfs.org/gtfs.ttl\# (em inglês)](http://vocab.gtfs.org/gtfs.ttl#)

\[HTML-RDFA\]  
Manu Sporny. W3C. [HTML+RDFa 1.1 - Second Edition (em inglês)](https://www.w3.org/TR/html-rdfa/). 17 de Março de 2015. W3C Recommendation. URL: [https://www.w3.org/TR/html-rdfa/ (em inglês)](https://www.w3.org/TR/html-rdfa/)

\[ISO-25964\]  
Stella Dextre Clarke et al. ISO/NISO. [ISO 25964 – the international standard for thesauri and interoperability with other vocabularies (em inglês)](https://www.niso.org/schemas/iso25964/). URL: [https://www.niso.org/schemas/iso25964/ (em inglês)](https://www.niso.org/schemas/iso25964/)

\[ISO639-1-LOC\]  
Library of Congress. [Ontology for ISO 639-1 Languages (em inglês)](https://id.loc.gov/ontologies/iso639-1_Languages). URL: [https://id.loc.gov/ontologies/iso639-1\_Languages (em inglês)](https://id.loc.gov/ontologies/iso639-1_Languages)

\[JSON-LD\]  
Manu Sporny; Gregg Kellogg; Markus Lanthaler. W3C. [JSON-LD 1.0 (em inglês)](https://www.w3.org/TR/json-ld/). 16 de Janeiro de 2014. W3C Recommendation. URL: [https://www.w3.org/TR/json-ld/ (em inglês)](https://www.w3.org/TR/json-ld/)

\[LD-BP\]  
Bernadette Hyland; Ghislain Auguste Atemezing; Boris Villazón-Terrazas. W3C. [Best Practices for Publishing Linked Data (em inglês)](https://www.w3.org/TR/ld-bp/). 9 de Janeiro de 2014. W3C Note. URL: [https://www.w3.org/TR/ld-bp/ (em inglês)](https://www.w3.org/TR/ld-bp/)

\[LODC\]  
Max Schmachtenberg; Christian Bizer; Anja Jentzsch; Richard Cyganiak. [The Linking Open Data Cloud Diagram (em inglês)](https://lod-cloud.net/). URL: [https://lod-cloud.net/ (em inglês)](https://lod-cloud.net/)

\[LTLI\]  
Felix Sasaki; Addison Phillips. W3C. [Language Tags and Locale Identifiers for the World Wide Web (em inglês)](https://www.w3.org/TR/ltli/). 23 de Abril de 2015. W3C Working Draft. URL: [https://www.w3.org/TR/ltli/ (em inglês)](https://www.w3.org/TR/ltli/)

\[Navathe\]  
Ramez Elmasri; Shamkant B. Navathe. Addison Wesley. Fundamentals of Database Systems. 2010.

\[OAIS\]  
ISO/TC 20/SC 13. ISO. [Space data and information transfer systems -- Open archival information system (OAIS) -- Reference model (em inglês)](https://www.iso.org/iso/home/store/catalogue_ics/catalogue_detail_ics.htm?csnumber=57284). 21 de Agosto de 2012. ISO Standard. URL: [https://www.iso.org/iso/home/store/catalogue\_ics/catalogue\_detail\_ics.htm?csnumber=57284 (em inglês)](https://www.iso.org/iso/home/store/catalogue_ics/catalogue_detail_ics.htm?csnumber=57284)

\[ODB\]  
World Wide Web Foundation. [Open Data Barometer (em inglês)](http://opendatabarometer.org/). URL: [http://opendatabarometer.org/ (em inglês)](http://opendatabarometer.org/)

\[ODRL-model\]  
Renato Iannella; Serena Villata. W3C. [ODRL Information Model (em inglês)](https://www.w3.org/TR/odrl-model/). 21 de Julho de 2016. W3C Working Draft. URL: [https://www.w3.org/TR/odrl-model/ (em inglês)](https://www.w3.org/TR/odrl-model/)

\[ODRS\]  
Leigh Dodds. The Open Data Institute. [Open Data Rights Statement Vocabulary (em inglês)](https://schema.theodi.org/odrs/). 29 de Julho de 2013. URL: [https://schema.theodi.org/odrs/ (em inglês)](https://schema.theodi.org/odrs/)

\[OKFN-INDEX\]  
Open Knowledge Foundation. [Global Open Data Index (em inglês)](https://index.okfn.org/). URL: [https://index.okfn.org/ (em inglês)](https://index.okfn.org/)

\[OWL2-OVERVIEW\]  
W3C OWL Working Group. W3C. [OWL 2 Web Ontology Language Document Overview (Second Edition) (em inglês)](https://www.w3.org/TR/owl2-overview/). 11 de Dezembro de 2012. W3C Recommendation. URL: [https://www.w3.org/TR/owl2-overview/ (em inglês)](https://www.w3.org/TR/owl2-overview/)

\[OWL2-PROFILES\]  
Boris Motik; Bernardo Cuenca Grau; Ian Horrocks; Zhe Wu; Achille Fokoue. W3C. [OWL 2 Web Ontology Language Profiles (Second Edition) (em inglês)](https://www.w3.org/TR/owl2-profiles/). 11 de Dezembro de 2012. W3C Recommendation. URL: [https://www.w3.org/TR/owl2-profiles/ (em inglês)](https://www.w3.org/TR/owl2-profiles//)

\[OWL2-QUICK-REFERENCE\]  
Jie Bao; Elisa Kendall; Deborah McGuinness; Peter Patel-Schneider. W3C. [OWL 2 Web Ontology Language Quick Reference Guide (Second Edition) (em inglês)](https://www.w3.org/TR/owl2-quick-reference/). 11 de Dezembro de 2012. W3C Recommendation. URL: [https://www.w3.org/TR/owl2-quick-reference/ (em inglês)](https://www.w3.org/TR/owl2-quick-reference/)

\[PAV\]  
Paolo Ciccarese; Stian Soiland-Reyes. [PAV - Provenance, Authoring and Versioning (em inglês)](https://purl.org/pav/). 28 de Agosto de 2014. URL: [https://purl.org/pav/ (em inglês)](https://purl.org/pav/)

\[PDF\]  
[Document management — Portable document format — Part 1: PDF (em inglês)](https://www.adobe.com/devnet/acrobat/pdfs/PDF32000_2008.pdf). ISO.

\[PROV-O\]  
Timothy Lebo; Satya Sahoo; Deborah McGuinness. W3C. [PROV-O: The PROV Ontology (em inglês)](https://www.w3.org/TR/prov-o/). 30 de Abril de 2013. W3C Recommendation. URL: [https://www.w3.org/TR/prov-o/ (em inglês)](https://www.w3.org/TR/prov-o/)

\[PROV-Overview\]  
Paul Groth; Luc Moreau. W3C. [PROV-Overview (em inglês)](https://www.w3.org/TR/prov-overview/). 30 de Abril de 2013. W3C Note. URL: [https://www.w3.org/TR/prov-overview/ (em inglês)](https://www.w3.org/TR/prov-overview/)

\[PURI\]  
Phil Archer; Nikos Loutas; Stijn Goedertier; Saky Kourtidis. [Study On Persistent URIs (em inglês)](https://philarcher.org/diary/2013/uripersistence/). 17 de Dezembro de 2012. URL: [https://philarcher.org/diary/2013/uripersistence/ (em inglês)](https://philarcher.org/diary/2013/uripersistence/)

\[RDA\]  
[Research Data Alliance (em inglês)](https://rd-alliance.org). URL: [https://rd-alliance.org (em inglês)](https://rd-alliance.org)

\[RDF-SCHEMA\]  
Dan Brickley; Ramanathan Guha. W3C. [RDF Schema 1.1 (em inglês)](https://www.w3.org/TR/rdf-schema/). 25 de Fevereiro de 2014. W3C Recommendation. URL: [https://www.w3.org/TR/rdf-schema/ (em inglês)](https://www.w3.org/TR/rdf-schema/)

\[RFC3986\]  
T. Berners-Lee; R. Fielding; L. Masinter. IETF. [Uniform Resource Identifier (URI): Generic Syntax (em inglês)](https://tools.ietf.org/html/rfc3986). Janeiro de 2005. Internet Standard. URL: [https://tools.ietf.org/html/rfc3986 (em inglês)](https://tools.ietf.org/html/rfc3986)

\[RFC4180\]  
Y. Shafranovich. IETF. [Common Format and MIME Type for Comma-Separated Values (CSV) Files (em inglês)](https://tools.ietf.org/html/rfc4180). Outubro de 2005. Informational. URL: [https://tools.ietf.org/html/rfc4180 (em inglês)](https://tools.ietf.org/html/rfc4180)

\[RFC4627\]  
D. Crockford. IETF. [The application/json Media Type for JavaScript Object Notation (JSON) (em inglês)](https://tools.ietf.org/html/rfc4627). Julho de 2006. Informational. URL: [https://tools.ietf.org/html/rfc4627 (em inglês)](https://tools.ietf.org/html/rfc4627)

\[RFC7089\]  
H. Van de Sompel; M. Nelson; R. Sanderson. IETF. [HTTP Framework for Time-Based Access to Resource States -- Memento (em inglês)](https://tools.ietf.org/html/rfc7089). Dezembro de 2013. Informational. URL: [https://tools.ietf.org/html/rfc7089 (em inglês)](https://tools.ietf.org/html/rfc7089)

\[Richardson\]  
Richardson L.; Sam Ruby. O'Reilly. [RESTful Web Services (em inglês)](http://restfulwebapis.org/rws.html). 2007. URL: [https://restfulwebapis.org/rws.html (em inglês)](http://restfulwebapis.org/rws.html)

\[SCHEMA-ORG\]  
[Schema.org (em inglês)](https://schema.org/). URL: [https://schema.org/ (em inglês)](https://schema.org/)

\[SDW-BP\]  
Jeremy Tandy; Payam Barnaghi; Linda van den Brink. W3C. [Spatial Data on the Web Best Practices (em inglês)](https://www.w3.org/TR/sdw-bp/). 5 de Janeiro de 2017. W3C Note. URL: [https://www.w3.org/TR/sdw-bp/ (em inglês)](https://www.w3.org/TR/sdw-bp/)

\[SIRI\]  
CEN. [Service Interface for Real Time Information CEN/TS 15531 (prCEN/TS-OO278181) (em inglês)](http://user47094.vs.easily.co.uk/siri/). Outubro de 2006. URL: [http://user47094.vs.easily.co.uk/siri/ (em inglês)](http://user47094.vs.easily.co.uk/siri/)

\[SKOS-DESIGN\]  
Tom Baker; Sean Bechhofer; Antoine Isaac; Alistair Miles; Guus Schreiber; Ed Summers. Elsevier. [Key Choices in the Design of Simple Knowledge Organization System (SKOS) (em inglês)](https://dx.doi.org/10.1016/j.websem.2013.05.001).Maio de 2013. Journal of Web Semantics 20: 35-49. URL: <https://dx.doi.org/10.1016/j.websem.2013.05.001>

\[SKOS-PRIMER\]  
Antoine Isaac; Ed Summers. W3C. [SKOS Simple Knowledge Organization System Primer (em inglês)](https://www.w3.org/TR/skos-primer/). 18 de Agosto de 2009. W3C Note. URL: [https://www.w3.org/TR/skos-primer/ (em inglês)](https://www.w3.org/TR/skos-primer/)

\[SchemaVer\]  
Alex Dean. [Introducing SchemaVer for semantic versioning of schemas (em inglês)](https://snowplowanalytics.com/blog/2014/05/13/introducing-schemaver-for-semantic-versioning-of-schemas/). 2014. URL: [https://snowplowanalytics.com/blog/2014/05/13/introducing-schemaver-for-semantic-versioning-of-schemas/ (em inglês)](https://snowplowanalytics.com/blog/2014/05/13/introducing-schemaver-for-semantic-versioning-of-schemas/)

\[Tabular-Data-Primer\]  
Jeni Tennison. W3C. [CSV on the Web: A Primer (em inglês)](https://www.w3.org/TR/tabular-data-primer/). 25 de Fevereiro de 2016. W3C Note. URL: [https://www.w3.org/TR/tabular-data-primer/ (em inglês)](https://www.w3.org/TR/tabular-data-primer/)

\[Tabular-Metadata\]  
Jeni Tennison; Gregg Kellogg. W3C. [Metadata Vocabulary for Tabular Data (em inglês)](https://www.w3.org/TR/tabular-metadata/). 17 de Dezembro de 2015. W3C Recommendation. URL: [https://www.w3.org/TR/tabular-metadata/ (em inglês)](https://www.w3.org/TR/tabular-metadata/)

\[Turtle\]  
Eric Prud'hommeaux; Gavin Carothers. W3C. [RDF 1.1 Turtle (em inglês)](https://www.w3.org/TR/turtle/).25 de Fevereiro de 2014. W3C Recommendation. URL: [https://www.w3.org/TR/turtle/ (em inglês)](https://www.w3.org/TR/turtle/)

\[URLs-in-data\]  
Jeni Tennison. W3C. [URLs in Data Primer (em inglês)](https://www.w3.org/TR/urls-in-data/). 4 de Junho de 2013. W3C Working Draft. URL: [https://www.w3.org/TR/urls-in-data/ (em inglês)](https://www.w3.org/TR/urls-in-data/)

\[VOCAB-DCAT\]  
Fadi Maali; John Erickson. W3C. [Data Catalog Vocabulary (DCAT) (em inglês)](https://www.w3.org/TR/vocab-dcat/). 16 de Janeiro de 2014. W3C Recommendation. URL: [https://www.w3.org/TR/vocab-dcat/ (em inglês)](https://www.w3.org/TR/vocab-dcat/)

\[VOCAB-DQV\]  
Riccardo Albertoni; Antoine Isaac. W3C. [Data on the Web Best Practices: Data Quality Vocabulary (em inglês)](https://www.w3.org/TR/vocab-dqv/). 15 de Dezembro de 2016. W3C Note. URL: [https://www.w3.org/TR/vocab-dqv/ (em inglês)](https://www.w3.org/TR/vocab-dqv/)

\[VOCAB-DUV\]  
Bernadette Farias Loscio; Eric Stephan; Sumit Purohit. W3C. [Data on the Web Best Practices: Dataset Usage Vocabulary (em inglês)](https://www.w3.org/TR/vocab-duv/). 15 de Dezembro de 2016. W3C Note. URL: [https://www.w3.org/TR/vocab-duv/ (em inglês)](https://www.w3.org/TR/vocab-duv/)

\[WEBARCH\]  
Ian Jacobs; Norman Walsh. W3C. [Architecture of the World Wide Web, Volume One (em inglês)](https://www.w3.org/TR/webarch/). 15 de Dezembro de 2004. W3C Recommendation. URL: [https://www.w3.org/TR/webarch/ (em inglês)](https://www.w3.org/TR/webarch/)

\[XHTML-VOCAB\]  
XHTML 2 Working Group. W3C. [XHTML Vocabulary (em inglês)](https://www.w3.org/1999/xhtml/vocab). 27 de Outubro de 2010. URL: [https://www.w3.org/1999/xhtml/vocab (em inglês)](https://www.w3.org/1999/xhtml/vocab)

[↑](#title)
