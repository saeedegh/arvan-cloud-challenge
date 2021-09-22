console.log("init");

const uploadResum = (e) => {
  const label = document.getElementById("resume-file-label");
  if (e.target.files.length > 0) {
    // console.log("!!!file", e.target.files[0]);
    var text = document.createTextNode(e.target.files[0].name);
    label.appendChild(text);
    label.classList.add("active-file-x");
  } else {
    label.classList.remove("active-file-x");
  }
};

const uploadBtnHandler = (e) => {
  e.preventDefault();
  const file_element = document.getElementById("resume-file");
  file_element.click();
};
