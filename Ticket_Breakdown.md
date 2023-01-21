# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here



1 - Incorporate a new attribute in the Agents table within the database to store the custom identifier specified by the Facility.

    Acceptance Criteria:
         - The new attribute, named facility_identifier, should be able to store a string of up to 50 characters.
         - The attribute should be able to accept null values.
    Time Estimate: 2 hours
    Implementation Details:
          - This can be achieved by adding a new attribute to the table using a SQL query.
          - It may necessitate some adjustment to the existing codebase to ensure that the new attribute is correctly utilized in all relevant queries.

2 - Enhance the getShiftsByFacility function to include the Facility's custom identifier for each Agent when querying the database.

   Acceptance Criteria:
     - The function should return the Facility's custom identifier for each Agent in addition to the rest of the Shift data.
     - The function should continue to function correctly for Facilities that have not yet set custom identifiers for their Agents.
   Time Estimate: 1.5 hour
   Implementation Details:
        - The getShiftsByFacility function can be updated to include a JOIN statement that retrieves the custom identifier from the Agents table.
        - It may necessitate some adjustment to the existing codebase to ensure that the new data is correctly utilized in all relevant queries.

3 - Update the generateReport function to use the Facility's custom identifier for each Agent instead of the internal database id.

    Acceptance Criteria:
        - The function should use the Facility's custom identifier for each Agent when generating the report.
        - The function should continue to function correctly for Facilities that have not yet set custom identifiers for their Agents. 
    Time Estimate: 1 hour
    Implementation Details:
         - The generateReport function can be updated to use the Facility's custom identifier for each Agent instead of the internal database id.
         - It may necessitate some adjustment to the existing codebase to ensure that the new data is correctly utilized in all relevant queries.


4 - Incorporate a feature in the Facility's dashboard to enable them to set custom identifiers for each Agent they work with.

     Acceptance Criteria:
          - The feature should allow the Facility to input a custom identifier for each Agent they work with.
          - The feature should save the custom identifiers to the Agents table within the database.
          - The feature should display the custom identifiers for each Agent already saved by the Facility.
     Time/Effort Estimate: 4 hours
     Implementation Details:
       - This can be achieved by creating a new page within the Facility's dashboard that allows them to input the custom identifiers for each Agent.
       - It may necessitate some adjustment to the existing codebase to ensure that the new data is correctly saved in the database and displayed on the dashboard.

5 - Test and debug the new feature.

    Acceptance Criteria:
        - The feature should function correctly and produce the expected results.
        - The feature should not introduce any new bugs or errors.
    Time Estimate: 2 hours
    Implementation Details:
         - This can be achieved by running various test cases to ensure that the feature is functioning correctly.
         - It may necessitate debugging the code and resolving any errors that are identified
