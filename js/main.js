console.log("init");

const fileUploader = (
  e,
  [labelId, labelTextId, fileInputId, warningTextId, infoTextId]
) => {
  const label = document.getElementById(labelId);
  const labelText = document.getElementById(labelTextId);
  const fileInput = document.getElementById(fileInputId);
  const warningElem = document.getElementById(warningTextId);
  const infoElem = document.getElementById(infoTextId);

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

const uploadHandler = (e, fileInputId) => {
  e.preventDefault();
  const file_element = document.getElementById(fileInputId);
  file_element.click();
};
