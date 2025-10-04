const userid = document.getElementById("userid");
const pin = document.getElementById("pin");
const sendotp = document.getElementById("sendotp");
const otp = document.getElementById("otp");

sendotp.addEventListener("click", () => {
  if (userid.value.length === 0) {
    alert("userId should not be null");
  } else if (pin.value.length < 10 || pin.value.length > 10) {
    alert("The mobile number should be of 10 character");
  } else {
    validateOtp();
  }
});

function validateOtp() {
  const submitOtp = document.createElement("div");
  const submitbutton = document.createElement("button");
  const inputOTP = document.createElement("input");
  submitOtp.id = "submitotp";
  inputOTP.type = "number";
  inputOTP.id = "inputotp";
  submitbutton.id = "submitbutton";
  submitbutton.innerText = "Submit OTP";

  submitOtp.appendChild(inputOTP);
  submitOtp.appendChild(submitbutton);
  otp.innerHTML = "";
  otp.appendChild(submitOtp);
  const ot = generateOtp();
  console.log(ot);
  submitbutton.addEventListener("click", () => {
    if (OtpValidation(ot)) {
      alert("Otp Validate Succesfully");
    } else {
      alert("Wrong Otp");
    }
  });
}

function generateOtp() {
  let otp = "";
  for (let i = 0; i < 6; i++) {
    otp = otp + Math.floor(Math.random() * 10);
  }
  console.log(otp);
  return otp;
}

function OtpValidation(otp) {
  const inputOtp = document.getElementById("inputotp").value;
  if (otp === inputOtp) {
    return true;
  } else {
    return false;
  }
}
