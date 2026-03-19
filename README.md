# CBallot
Use Case 
```plantUML
@startuml
left to right direction
:Stagiaire: as stag
(Participer aux sessions) as PS
(Accéder à l'interface de \nvote via un code unique) as AIV
stag -- (PS)
(PS) .> (AIV) : includes

:Organisateur de scrutin: as Orga
(Gérer l'organisation et la gestion des scrutins) as Gerer
(Créer des sessions de formation) as CreerSession
(Ajouter et supprimer des stagiaires) as SupprStag
(Planifier des séances de vote) as Seance
(Gérer les binômes de candidats) as Binome
(Saisir le nom de session) as Session
(Saisir date de début et de fin) as Date
(Lister les stagiaires) as lister

Orga -- (Gerer)
(Gerer) <.. (Binome) : extends
(Gerer) <.. (CreerSession) : extends
(CreerSession) ..> (Session) : includes
(CreerSession) ..> (lister) : includes
(lister) <.. (SupprStag) : extends
(Gerer) <.. (Seance) : extends
(CreerSession) ..> (Date) : includes
(Binome) <.. (SupprStag) : extends
@enduml
```
[Image](//www.plantuml.com/plantuml/dpng/XPBFZjGm3CRlUGhVw1ns7c24q2wBj492OgHAdBXaKyzWrAQ3uwpsSRZspXlqnR0JXQ7YprvQfT_F_ZuxlKtYMV8qkX5F0Z83q_cBm42CGMYExj2BFvFNym5yWgGdrnsrY09TaC7dPqYOah9fPyInTzrT2EiogBf-X_4LHK4--O0m87oEJxCWF967727C0-gRlcKinNVlFpcpW9iRw8xzpja3zc-WKsK71w0OnZnWSkxmaSy-KlA2cQrp2fo5OebfckiUreMHDS7SK4q9A31wE6Cg9-tLAcl-1zGQrztpkY0NkOrd9gUPfzAciFUCo7sLTUglSnPaCqZvSc6QMeEsmkhGczZNHOwQwqIDMnSV0nOZsrAbqRvTXr7vaUBwOwfSy76WmKjj_PRYF2dSUqfaCEXPiJP3WLhWHcar6ZEiosCMG2c3KeNVgUYw3vJ4pFySPYoASxRnScjbVtfnzGslztleQYoxFtmMZ4FQoh-lSGDjXRtz1-rq_HV-pjLSMwnzAwQ_Rk6ViUhcNmfa2zhQr6d_PtEhppoDFm40)
