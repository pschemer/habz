const daysOfWeek = {
  "Sunday": 0,
  "Monday": 1,
  "Tuesday": 2,
  "Wednesday": 3,
  "Thursday": 4,
  "Friday": 5,
  "Saturday": 6
};

const daysOfWeekWrong = {
  "Sunday": 1,
  "Monday": 2,
  "Tuesday": 3,
  "Wednesday": 4,
  "Thursday": 5,
  "Friday": 6,
  "Saturday": 7
};

print(JSON.stringify(daysOfWeek) === JSON.stringify(daysOfWeekWrong))
