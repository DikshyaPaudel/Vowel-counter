window.addEventListener("load", () => {
  const fillForm = document.getElementById("fill-form");
  const check = document.getElementById("check");
  const input = document.getElementById("input");
  const stringInput = document.getElementById("stringInput");
  const vowelCountShow = document.querySelector("#vowel-count");
  vowelCountShow.innerHTML = 0;

  fillForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let count = 0;
    const vowels = ["a", "e", "i", "o", "u"];
    for (let letter of stringInput.value.toLowerCase()) {
      if (vowels.includes(letter)) {
        count++;
      }
    }
    vowelCountShow.innerHTML = count;
    


    //alert(stringInput);
  });
});
