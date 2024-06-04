document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("post-activity")
    .addEventListener("click", function () {
      $("#postActivityModal").modal("show");
    });

  document
    .getElementById("save-activity")
    .addEventListener("click", async function () {
      const activityName = document.getElementById("activityName").value.trim();
      const activityDate = document.getElementById("activityDate").value.trim();
      const activityTime = document.getElementById("activityTime").value.trim();
      const activityPlace = document
        .getElementById("activityPlace")
        .value.trim();
      const activityDescription = document
        .getElementById("activityDescription")
        .value.trim();

      if (!activityName) {
        console.log("missing activityName");
        return;
      }
      if (!activityDate) {
        console.log("missing activityDate");
        return;
      }
      if (!activityTime) {
        console.log("missing activityTime");
        return;
      }
      if (!activityPlace) {
        console.log("missing activityPlace");
        return;
      }
      if (!activityDescription) {
        console.log("missing activityDescription");
        return;
      }
      const postData = {
        name: activityName,
        date: activityDate,
        time: activityTime,
        location: activityPlace,
        description: activityDescription,
      };
      const response = await fetch("/api/events", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postData),
      });

      if (response.ok) {
        $("#postActivityModal").modal("hide");
        displayPost(postData);
      } else {
        alert("failed to create post");
      }
    });
});

document
  .getElementById("search-activities")
  .addEventListener("input", function () {
    console.log("Searching for activities:", this.value);
  });
