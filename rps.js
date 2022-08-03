// script --> rps.js


const rps_buttons = document.querySelectorAll(".rps-buttons")
const clear_btn = document.getElementById("clear-btn")
const result = document.getElementById("result")
const score_value = document.getElementById("score-value")


// user input of rps.
const user_input = () => {
  rps_buttons.forEach(element => {
    element.onclick = () => {
      result.innerText = check_fn(element.name, system_input());
      score_value.innerText = score
      clear();
    }
  });
}

let score = 0;

const clear = () => {
  clear_btn.onclick = () => {
    score = 0;
    score_value.innerText = 0;
    result.innerText = "results ."
  }
}


// rps choices.
const rps_choice = ["rock", "paper", "scissor"];
// system input of rps.
const system_input = () => rps_choice[Math.floor(Math.random() * rps_choice.length)]


const check_fn = (user_ip, sys_ip) => {
  if (user_ip == "rock" && sys_ip == "scissor") {
    score++;
    return `You win. ${user_ip} beats ${sys_ip}`
  } else if (user_ip == "rock" && sys_ip == "paper"){
    score--;
    return `You lose! ${sys_ip} beats ${user_ip}`
  } else if (user_ip == "scissor" && sys_ip == "rock") {
    score--;
    return `You lose! ${sys_ip} beats ${user_ip}`
  } else if (user_ip == "scissor" && sys_ip == "paper") {
    score++;
    return `You win. ${user_ip} beats ${sys_ip}`
  } else if (user_ip == "paper" && sys_ip == "rock") {
    score++;
    return `You win. ${user_ip} beats ${sys_ip}`
  } else if (user_ip == "paper" && sys_ip == "scissor") {
    score--;
    return `You lose! ${sys_ip} beats ${user_ip}`
  } else {
    return `Draw! ${user_ip} ties with ${sys_ip}`
  }
}


user_input();
