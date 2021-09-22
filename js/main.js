console.log("init");

const uploadResum = (e) => {
  const label = document.getElementById("resume-file-label");
  if (e.target.files.length > 0) {
    console.log("!file", e.target.files[0]);
    var text = document.createTextNode(e.target.files[0].name);
    label.appendChild(text);

    if (e.target.files[0].size > 10) {
      label.classList.add("warning-file");

      console.log("!file2", e.target.files[0]);
    } else {
      label.classList.add("active-file-x");
    }
  } else {
    label.classList.remove("active-file-x");
    label.classList.remove("warning-file");
  }
};

const uploadBtnHandler = (e) => {
  e.preventDefault();
  const file_element = document.getElementById("resume-file");
  file_element.click();
};
