const formulario = document.getElementById("form");
const getButton = document.getElementById("btnpost");
const getResume = document.getElementById("resume");
const setState = document.getElementById("estate");

const state = [
  "AC, Acre",
  "AL, Alagoas",
  "AP, Amapá",
  "AM, Amazonas",
  "BA, Bahia",
  "CE, Ceará",
  "DF, Distrito Federal",
  "ES, Espirito Santo",
  "GO, Goiás",
  "MA, Maranhão",
  "MS, Mato Grosso do Sul",
  "MT, Mato Grosso",
  "MG, Minas Gerais",
  "PA, Pará",
  "PB, Paraíba",
  "PR, Paraná",
  "PE, Pernambuco",
  "PI, Piauí",
  "RJ, Rio de Janeiro",
  "RN, Rio Grande do Norte",
  "RS, Rio Grande do Sul",
  "RO, Rondônia",
  "RR, Roraima",
  "SC, Santa Catarina",
  "SP, São Paulo",
  "SE, Sergipe",
  "TO, Tocantins",
];

state.forEach((state) => {
  const creatElem = document.createElement("option");
  creatElem.innerText = state;
  setState.appendChild(creatElem);
});

getButton.addEventListener("click", (event) => {
  // event.preventDefault();
  const getForm = new FormData(formulario);
  let inputClear = 0;

  for (let index of getForm.entries()) {
    if (index[1] === "") {
      inputClear += 1;
    }
  }

  if (inputClear === 0) {
    for (let index of getForm.entries()) {
      const creatElem = document.createElement("p");
      creatElem.innerText = `${index[0]}: ${index[1]}`;
      getResume.appendChild(creatElem);
    }
  } else {
    alert("Preencha os campos obrigatórios com ( * )");
  }
});

new window.JustValidate(".js-form", {
  rules: {
    name: {
      required: true,
      name: true,
    },
    email: {
      required: true,
      email: true,
    },
    cpf: {
      required: true,
      cpf: true,
    },
    endereco: {
      required: true,
      endereco: true,
    },
    city: {
      required: true,
      city: true,
    },
    state: {
      required: true,
      state: true,
    },
    resid: {
      required: true,
      resid: true,
    },
    resumec: {
      required: true,
      resumec: true,
    },
    carg: {
      required: true,
      carg: true,
    },
    resumecsrg: {
      required: true,
      resumecsrg: true,
    },
    date: {
      required: true,
      date: true,
    },
  },
  messages: {
    name: "Coloque um nome.",
    email: "Preencha com um e-mail valido.",
    cpf: "Campo obrigatório.",
    endereco: "Campo obrigatório.",
    city: "Campo obrigatório.",
    state: "Campo obrigatório",
    resid: "Campo obrigatório",
    resumec: "Campo obrigatorio.",
    carg: "Campo obrigatório.",
    resumecsrg: "Campo obrigatório.",
    date: "Campo obrigatório.",
  },

  focusWrongField: true,

  submitHandler: function (form, values, ajax) {
    ajax({
      url: "https://just-validate-api.herokuapp.com/submit",
      method: "POST",
      data: values,
      async: true,
      callback: function (response) {
        alert("AJAX submit successful! \nResponse from server:" + response);
      },
      error: function (response) {
        alert("AJAX submit error! \nResponse from server:" + response);
      },
    });
  },

  invalidFormCallback: function (errors) {
    console.log(errors);
  },
});
