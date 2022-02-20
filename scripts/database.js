/*
 *   Data provider for Daily Journal application
 *
 *      Holds the raw data about each entry and exports
 *      functions that other modules can use to filter
 *      the entries for different purposes.
 */

const database = {
  entries: [
    {
      id: 1,
      date: "07/24/2025",
      concept: "HTML & CSS",
      entry:
        "We talked about HTML components and how to make grid layouts with Flexbox in CSS.",
      mood: "Ok"
    },
    {
      id: 2,
      date: "02/20/2022",
      concept: "IDE",
      entry: "Everyone is finally using darkmode, team delta on same page.",
      mood: "Sassy"
    },
    {
      id: 3,
      date: "05/20/2022",
      concept: "Time travel",
      entry:
        "We accidently discovered time travel when we console.logged(console.log).",
      mood: "Mind-blown"
    }
  ]
};

/*
  You export a function that provides a version of the
  raw data in the format that you want
*/
export const getJournalEntries = () => {
  const copyOfData = database.entries.map((entry) => ({ ...entry }));
  return copyOfData;
};
