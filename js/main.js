console.log("init");

const uploadResum = (e) => {
  const label = document.getElementById("resume-file-label");
  const labelText = document.getElementById("resume-label-text");
  const fileInput = document.getElementById("resume-file");
  const warningElem = document.getElementById("resum-warn");
  const infoElem = document.getElementById("resum-info");

  if (e.target.files.length > 0) {
    if (e.target.files[0].size > 1000000) {
      fileInput.value = "";
      label.classList.add("warning-file");
      label.classList.remove("active-file-x");
      warningElem.style.display = "block";
      infoElem.style.display = "none";
    } else {
      label.classList.add("active-file-x");
      label.classList.remove("warning-file");
      warningElem.style.display = "none";
      infoElem.style.display = "block";
    }

    const name = e.target.files[0]?.name;
    labelText.textContent = name ? name : "";
  } else {
    label.classList.remove("active-file-x", "warning-file");
  }
};

const resumeBtnClickHandler = (e) => {
  e.preventDefault();
  const file_element = document.getElementById("resume-file");
  file_element.click();
};
