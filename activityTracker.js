const myWeek = [
    {day: "Monday", activity: "studying", category: "educational", hoursSpent: 4, enjoyment: 5, timeOfDay: "evening"},
    {day: "Tuesday", activity: "tennis", category: "physical", hoursSpent: 2, enjoyment: 10, timeOfDay: "morning"},
    {day: "Wednesday", activity: "studying", category: "educational", hoursSpent: 3, enjoyment: 5, timeOfDay: "afternoon"},
    {day: "Thursday", activity: "fitness", category: "physical", hoursSpent: 1.5, enjoyment: 4, timeOfDay: "afternoon"},
    {day: "Friday", activity: "going out", category: "social", hoursSpent: 4, enjoyment: 8, timeOfDay: "evening"},
    {day: "Saturday", activity: "fitness", category: "physical", hoursSpent: 1.5, enjoyment: 4, timeOfDay: "morning"},
    {day: "Sunday", activity: "paintball", category: "social", hoursSpent: 2, enjoyment: 7, timeOfDay: "afternoon"}
];


// I predict that "tennis" will have the highest enjoyment.
// I predict that the "physical" category will dominate my week. 
// I predict a pattern in which the physical activities are done predominantly earlier during the day. 


// Calculate total hours spent on physical activity.
function totalPhysicalHours(log) {
    // First, filter the physical activities.
    const physicalActivity = log.filter(day => day.category === "physical");
    // Then calculate their total by using the reduce() function.
    const totalPhysicalActivities = physicalActivity.reduce((total, day) => total + day.hoursSpent, 0);
    return totalPhysicalActivities;
}

// Calculate average enjoyment for afternoon.
function averageAfternoonEnjoyment(log) {
    // First, filter out the activies, so we just keep the "afternoon".
    const afternoonActivities = log.filter(entry => entry.timeOfDay === "afternoon");
    // Now, create a new array that just has "enjoyment" scores.
    const scores = afternoonActivities.map(entry => entry.enjoyment);
    // Lastly, calculate the average. 
    return scores.reduce((total, score) => total + score, 0) / afternoonActivities.length;
}

console.log(`Total time spent on physical activities: ${totalPhysicalHours(myWeek)} hours`);
console.log("Average afternoon enjoyment:", averageAfternoonEnjoyment(myWeek));
