document.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("about");

  let img = document.createElement("img");
  img.src = "../rose-profile-image.png";
  img.alt = "A picture of Rose sitting at a desk";
  img.classList.add("profile-image");

  let paragraph = document.createElement("p");
  const firstLine = "I am Rose and I am a Digital Product Developer ";
  const remainingText =
    "with over 8 years of experience, focusing on creating seamless user experiences and interfaces, particularly in the medical and technology sectors. My journey began with a B.S. in Psychology from Oregon State University and has evolved through a Master’s in Education and multiple certifications in UX, accessibility, and coding. These foundations have informed my holistic approach to design, blending human-centered insights with technical expertise.";

  let firstLineSpan = document.createElement("span");
  firstLineSpan.textContent = firstLine;
  firstLineSpan.classList.add("first-line");

  let remainingTextSpan = document.createElement("span");
  remainingTextSpan.textContent = remainingText;

  paragraph.appendChild(firstLineSpan);
  paragraph.appendChild(remainingTextSpan);
  paragraph.classList.add("text");

  let container = document.createElement("div");
  container.classList.add("container");

  container.appendChild(img);
  container.appendChild(paragraph);

  let mainContent = document.querySelector("main");
  mainContent.appendChild(container);
});
