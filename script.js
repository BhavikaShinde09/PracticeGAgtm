function startPlanning() {
  window.location.href = "itinerary.html";

  dataLayer.push({
    event: "start_planning_click"
  });
}

function generateItinerary() {
  let destination = document.getElementById("destination").value;
  let budget = document.getElementById("budget").value;

  document.getElementById("result").innerHTML =
    `Trip to ${destination} planned under ₹${budget}`;

  // GTM Event
  dataLayer.push({
    event: "generate_itinerary",
    destination: destination,
    budget: budget
  });
}

function submitForm(e) {
  e.preventDefault();

  alert("Form Submitted!");

  dataLayer.push({
    event: "form_submission"
  });
}
