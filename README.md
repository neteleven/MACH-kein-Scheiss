# MACH kein Scheiß! 💩
Demo-Projekt eines MACH Microservices mit einer REST API und einem kleinen Web-Frontend.

## REST API
Die REST API ist mit Java und Spring Boot implementiert. Sie verwendet verschiedene Abhängigkeiten, um die Implementierung zu vereinfachen. Unter anderem:
- Spring JPA & Hibernate mit dem MySQL Driver für die Datenbankanbindung
- Lombok um Boilerplate Code (wie Getter, Setter & Konstruktoren) zu reduzieren
- MapStruct um zwischen den Entitäten und den DTOs zu konvertieren
- Spring Web um die REST Endpunkte zu definieren

Zusätzlich lässt sich das Maven-Projekt als Docker-Container bauen und ausführen (z.B. in einer Cloud auf einem entsprechenden Cluster).

URL: https://d1hg44dt3lynuo.cloudfront.net

## Web-Frontend
Das Web-Frontend bietet eine sehr simple Oberfläche um die REST API anzufragen. Es ist mit Javascript & REACT implementiert und bietet eine Möglichkeit den GET Endpunkt abzufragen und an den POST Endpunkt Daten zu senden.

Die React-APP kann zu einfachen HTML, CSS und Javascript Dateien gebaut werden, die dann in einem Webserver ausgeliefert werden können.

URL: https://d1vjn6dipu3c0u.cloudfront.net
