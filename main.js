// main.js - menu, hamburger, simple toast and input masks (CPF/phone/CEP)
document.addEventListener('DOMContentLoaded', function(){
  const btn = document.getElementById('btn-hamburger');
  const nav = document.getElementById('main-nav');
  btn.addEventListener('click', function(){
    nav.classList.toggle('open');
  });

  // Toast helper
  const toast = document.getElementById('toast');
  function showToast(msg, duration=3000){
    toast.textContent = msg;
    toast.classList.add('show');
    setTimeout(()=>toast.classList.remove('show'), duration);
  }

  // Simple form submit demo
  const form = document.getElementById('cadastro');
  form && form.addEventListener('submit', function(e){
    if(!form.checkValidity()){
      form.reportValidity();
      e.preventDefault();
      return;
    }
    e.preventDefault();
    showToast('Formulário enviado (demo)');
    form.reset();
  });

  // Input masks - CPF basic formatting
  function maskCPF(v){
    const d = v.replace(/\D/g,'').slice(0,11);
    if(d.length<=3) return d;
    if(d.length<=6) return d.replace(/(\d{3})(\d+)/,'$1.$2');
    if(d.length<=9) return d.replace(/(\d{3})(\d{3})(\d+)/,'$1.$2.$3');
    return d.replace(/(\d{3})(\d{3})(\d{3})(\d{0,2})/,'$1.$2.$3-$4');
  }
  const cpf = document.getElementById('cpf');
  if(cpf){
    cpf.addEventListener('input', function(e){
      cpf.value = maskCPF(cpf.value);
    });
  }

});
