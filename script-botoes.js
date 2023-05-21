const IconCreatedConfirmation = () => {
    const button = document.querySelector("#copy");
    const classIconAddOrRemove = ["fa-sharp", "fa-solid", "fa-circle-check"];
    const interval = 3000;
    const addIconConfirmation = document.createElement("i");
    for (let i of classIconAddOrRemove) {
      addIconConfirmation.classList.add(i);
    }
    addIconConfirmation.style.width = "2rem";
    addIconConfirmation.style.color = "#ffe4e1";
    button.appendChild(addIconConfirmation);
    button.style.borderColor = "#ffe4e1";
    button.style.color = "#ffe4e1";
  
    setInterval(() => {
      for (let i of classIconAddOrRemove) {
        addIconConfirmation.classList.remove(i);
      }
      addIconConfirmation.style.width = "0";
      button.style.color = "#ffe4e1";
      button.style.borderColor = "#ffe4e1";
      addIconConfirmation.style.animation = "opacityAttribute";
    }, interval);
  };
  
  const copyText = () => {
    const textareaOutput = document.querySelector(".textarea-output");
    textareaOutput.removeAttribute("disabled");
    textareaOutput.select();
    navigator.clipboard.writeText(textareaOutput.value);
    IconCreatedConfirmation();
    textareaOutput.setAttribute("disabled", "");
  };
  