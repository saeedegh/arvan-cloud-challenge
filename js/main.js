console.log("init");
const typesElem = document.getElementById("types");
const typeItems = typesElem.getElementsByClassName("list-item");
const levelsElem = document.getElementById("levels");
const levelItems = levelsElem.getElementsByClassName("list-item");

typesElem.style.display = "none";
levelsElem.style.display = "none";
//
const selectBoxHandler = (e, index, inputID, listID) => {
  let selectedType = "";
  if (index === 0) {
    selectedType = "";
  } else {
    selectedType = e.target.innerText;
  }

  document.getElementById(listID).style.display = "none";
  document.getElementById(inputID).value = selectedType;
};

for (let index = 0; index < typeItems.length; index++) {
  const listItem = typeItems[index];
  listItem.addEventListener("click", (e) =>
    selectBoxHandler(e, index, "user-type", "types")
  );
}
//
for (let index = 0; index < levelItems.length; index++) {
  const listItem = levelItems[index];
  listItem.addEventListener("click", (e) =>
    selectBoxHandler(e, index, "user-level", "levels")
  );
}
//

const displayTypeItems = (inputId, listId) => {
  document.getElementById(listId).style.display = "block";
};

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
//
const uploadHandler = (e, fileInputId) => {
  e.preventDefault();
  const file_element = document.getElementById(fileInputId);
  file_element.click();
};
//

function checkForm(form) {
  console.log(form);
  // validation fails if the input is blank
  // if (form.inputfield.value == "") {
  //   alert("Error: Input is empty!");
  //   form.inputfield.focus();
  //   return false;
  // }

  // // regular expression to match only alphanumeric characters and spaces
  // var re = /^[\w ]+$/;

  // // validation fails if the input doesn't match our regular expression
  // if (!re.test(form.inputfield.value)) {
  //   alert("Error: Input contains invalid characters!");
  //   form.inputfield.focus();
  //   return false;
  // }

  // // validation was successful
  // return true;
}

const formSubmitHandler = (event) => {
  event.preventDefault();
  const myForm = document.getElementById("myForm");
  const formData = new FormData(myForm);

  const request = new XMLHttpRequest();
  request.open("post", "https://coda.io/@saeede-work/test1");
  request.send(formData);
};
