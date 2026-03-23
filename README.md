# CBallot
[UseCase](//www.plantuml.com/plantuml/dpng/XPBFZjGm3CRlUGhVw1ns7c24q2wBj492OgHAdBXaKyzWrAQ3uwpsSRZspXlqnR0JXQ7YprvQfT_F_ZuxlKtYMV8qkX5F0Z83q_cBm42CGMYExj2BFvFNym5yWgGdrnsrY09TaC7dPqYOah9fPyInTzrT2EiogBf-X_4LHK4--O0m87oEJxCWF967727C0-gRlcKinNVlFpcpW9iRw8xzpja3zc-WKsK71w0OnZnWSkxmaSy-KlA2cQrp2fo5OebfckiUreMHDS7SK4q9A31wE6Cg9-tLAcl-1zGQrztpkY0NkOrd9gUPfzAciFUCo7sLTUglSnPaCqZvSc6QMeEsmkhGczZNHOwQwqIDMnSV0nOZsrAbqRvTXr7vaUBwOwfSy76WmKjj_PRYF2dSUqfaCEXPiJP3WLhWHcar6ZEiosCMG2c3KeNVgUYw3vJ4pFySPYoASxRnScjbVtfnzGslztleQYoxFtmMZ4FQoh-lSGDjXRtz1-rq_HV-pjLSMwnzAwQ_Rk6ViUhcNmfa2zhQr6d_PtEhppoDFm40)
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

[Diagramme de Séquence](//www.plantuml.com/plantuml/png/XP91RjL038RtSmhhRG0XBi02bP8kkW8HmTva_9wCafdAzaJgRLYIS-HYE9qcBn68Ij5evFb--_UltAYXM1dwW9rbWSzomSIAHaMUIwtXXP65meEZtF439eFsKOq60jJr6Y8Q_a0bEDqkP-DVJccUI4yBTjiqXmwdbcJaZk1kGEuNfDv2s9k0Tn-sMU_XatWx0ILLpWdUNirfMAb5uRESlaj25rQJWuIM8Vg_ALzwVpZpekga62-g3bFaYFRYdAe8A-PKNUk96_EZCzK1l6whf_jct_zDgBZhjkLSMukHOCn68MnFU-UEVUowUOeaC3B2llyt9Rblzgwgz-_p97NNIZYwoKB0tjRwY3r72W2mytM8hSrb83Ef7YjvpEeOrR-ekkSrgYwdCyk0veQUsB_3yRzY1sqHKQ-qUkTKtKCk4EVfv_mBYd7FEaz70yU-N-bS5E8hz51_As1vxfnYkF6Z3FqV)
```PlantUML
@startuml
actor Organisateur
actor Stagiaire
participant Systeme as Systeme
database "Base De Données" as BDD
participant "Service Email" as Email

Organisateur -> Systeme : Créer session + Stagiaires
Systeme  -> BDD : Enregistrer session + emails

Organisateur -> Systeme : Planifier scrutin + candidats
Systeme  -> BDD : Enregistrer scrutin

Systeme -> Email : Envoyer emails (SessionID + candidats)
Email -> Stagiaire : Email de vote

Stagiaire -> Systeme  : Accéder via SessionID + UserID
Systeme -> BDD : Vérifier UserID + SessionID

alt UserID valide
    Stagiaire -> Systeme : Soumettre vote
    Systeme  -> BDD: Enregistrer vote
    Systeme  -> Email: Envoyer confirmation
    Email -> Stagiaire: Confirmation de vote
else UserID invalide ou déjà utilisé
    Systeme  -> Stagiaire: Refus d'accès au vote
end
@enduml
```
