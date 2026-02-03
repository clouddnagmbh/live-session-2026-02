# 🚀 Step-by-Step Workshop Branches


This repository is structured with individual branches corresponding to each major step covered in the live session `Leveraging PostgreSQL in the SAP Cloud Application Programming Model`.



This allows you to check out any specific stage of the project and see the exact code changes made. The `main` branch contains the final, completed application.


Here is a breakdown of the branches and the topics they cover:



* [**01-data-model**](https://github.com/clouddnagmbh/live-session-2026-02/tree/01-data-model)

    * **Focus:** Defining the core domain model (Teams & Players) using CDS in `db/schema.cds`



* [**02-service-definition**](https://github.com/clouddnagmbh/live-session-2026-02/tree/02-service-definition)

    * **Focus:** Exposing the data model as an OData V4 service using `srv/service.cds`



* [**03-initial-data**](https://github.com/clouddnagmbh/live-session-2026-02/tree/03-initial-data)

    * **Focus:** Seeding the local database with sample data using CSV files



* [**04-postgres**](https://github.com/clouddnagmbh/live-session-2026-02/tree/04-postgres)

    * **Focus:** Switching the persistence layer to PostgreSQL by adding the `@cap-js/postgres` adapter and configuring the environment



* [**05-fiori-ui**](https://github.com/clouddnagmbh/live-session-2026-02/tree/05-fiori-ui)

    * **Focus:** Generating the Fiori Elements List Report and Object Page for the *Teams* entity



* [**06-xsuaa**](https://github.com/clouddnagmbh/live-session-2026-02/tree/06-xsuaa)

    * **Focus:** Integrating the XSUAA service for authentication



* [**07-mta**](https://github.com/clouddnagmbh/live-session-2026-02/tree/07-mta)

    * **Focus:** Creating and configuring the `mta.yaml` file to package the database, service, and UI for cloud deployment



* [**08-app-frontend**](https://github.com/clouddnagmbh/live-session-2026-02/tree/08-app-frontend)

    * **Focus:** Adding the Application Frontend for the final production build

---
### How to Use These Branches

You can explore a specific step locally by checking out the branch:

```bash

# Example: Switch to the PostgreSQL configuration step

git checkout 04-postgres