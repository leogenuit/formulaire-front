const submit = document.querySelector("#submit");
submit.addEventListener("submit", async (event) => {
  event.preventDefault();
  const response = await axios.post(
    "https://site--formulaire--jb29wjf8x9mr.code.run/send-email",
    {
      firstname: document.querySelector("#firstname"),
      lastname: document.querySelector("#lastname"),
      email: document.querySelector("#email"),
      subject: document.querySelector("#subject"),
      message: document.querySelector("#message"),
    }
  );
  console.log(response.data);
  alert("message envoyé");
});
