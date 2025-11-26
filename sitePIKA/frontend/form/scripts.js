const form = document.getElementById('form');
    const username = document.getElementById('username');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const passwordconfirmation = document.getElementById('password-confirmation');

  
    const select = document.getElementById("tipo");
    const campoCpf = document.getElementById("campoCpf");
    const campoCnpj = document.getElementById("campoCnpj");
    const cpf = document.getElementById("cpf");
    const cnpj = document.getElementById("cnpj");
  
    function mostrarCampo() {
      if (!select) return;
      if (select.value === "pf") {
        campoCpf.style.display = "block";
        campoCnpj.style.display = "none";
      } else if (select.value === "pj") {
        campoCnpj.style.display = "block";
        campoCpf.style.display = "none";
      } else {
        campoCpf.style.display = "none";
        campoCnpj.style.display = "none";
      }
    }
  
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      checkinputs();
    });
  
    function checkinputs() {
      const usernameValue = username.value;
      const emailValue = email.value;
      const passwordValue = password.value;
      const passwordconfirmationValue = passwordconfirmation.value;
      const cpfValue = cpf.value;
      const cnpjValue = cnpj.value;
  
      if (usernameValue === '') {
        setErrorFor(username, 'campo obrigatório');
      } else {
        setSuccessFor(username);
      }
  
      if (emailValue === '') {
        setErrorFor(email, 'campo obrigatório');
      }
      else if (!checkEmail(emailValue)) {
        setErrorFor(email, 'email inválido');
      } else { 
        setSuccessFor(email); 
      }
  
      if (passwordValue === '') {
        setErrorFor(password, 'campo obrigatório');
      }
      else if (passwordValue.length < 8) {
        setErrorFor(password, 'minimo oito caracteres');
      } else { 
        setSuccessFor(password) 
      }
  
      if (passwordconfirmationValue === '') {
        setErrorFor(passwordconfirmation, 'campo obrigatório');
      }
      else if (passwordconfirmationValue !== passwordValue) {
        setErrorFor(passwordconfirmation, 'senhas não conferem');
      } else { 
        setSuccessFor(passwordconfirmation); 
      }
  

      if (select.value === "pf") { 
        if (cpfValue === "") {
          setErrorFor(cpf, "campo obrigatório");
        } else if (cpfValue.length !== 11) {
          setErrorFor(cpf, "O CPF deve ter 11 números");
        } else {
          setSuccessFor(cpf);
        }
      }
  
      
      if (select.value === "pj") { 
        if (cnpjValue === "") {
          setErrorFor(cnpj, "campo obrigatório");
        } else if (!/^[0-9]{14}$/.test(cnpjValue)) {
          setErrorFor(cnpj, "CNPJ deve conter 14 dígitos");
        } else {
          setSuccessFor(cnpj);
        }
      }
    }
  
    function setErrorFor(input, message) {
      const formControl = input.parentElement;
      const small = formControl.querySelector('small');
  
      small.innerText = message;
  
      formControl.className = 'form-control error';
    }
  
    function setSuccessFor(input) {
      const formControl = input.parentElement;
  
      formControl.className = 'form-control success';
    }
    
    
    function checkEmail(email) {
        return /^(([^<>()\[\]\\.,;:\s@']+(\.[^<>()\[\]\\.,;:\s@']+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
            email
        );
    }