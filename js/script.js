// Simple nav highlight
document.querySelectorAll("nav a").forEach(link => {
  if (link.href === window.location.href) {
    link.classList.add("active");
  }
});

// Example: Alert on course card click
document.querySelectorAll(".card").forEach(card => {
  card.addEventListener("click", () => {
    alert(`You clicked on ${card.textContent} course!`);
  });
});


