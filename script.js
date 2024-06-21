const codeDisplay = document.getElementById('code-display');
const toggleButton = document.getElementById('toggle-button');
const pageDropdown = document.getElementById('page-dropdown');
const copyButton = document.getElementById('copy-button');

const longCodePage1 = `
//C++ code
// Define the motor pins
const int leftMotorForward = 5;    // Pin 9 for left motor forward
const int leftMotorBackward = 9;   // Pin 5 for left motor backward
const int rightMotorForward = 6;  // Pin 10 for right motor forward
const int rightMotorBackward = 10;  // Pin 6 for right motor backward

void setup() {
  // Set the motor pins as outputs
  pinMode(leftMotorForward, OUTPUT);
  pinMode(leftMotorBackward, OUTPUT);
  pinMode(rightMotorForward, OUTPUT);
  pinMode(rightMotorBackward, OUTPUT);
}

void loop() {
  // Move backward
  analogWrite(leftMotorForward, 0);  // Set left motor forward to 0 (off)
  analogWrite(rightMotorForward, 0);  // Set right motor forward to 0 (off)
  analogWrite(leftMotorBackward, 128);  // Set left motor backward to 50% power
  analogWrite(rightMotorBackward, 128);  // Set right motor backward to 50% power
  delay(2000);  // Move backward for 5 seconds

  // Stop
  analogWrite(leftMotorForward, 0);
  analogWrite(rightMotorForward, 0);
  analogWrite(leftMotorBackward, 0);
  analogWrite(rightMotorBackward, 0);
  delay(500);  // Stop for 0.5 seconds

  // Spin clockwise
  analogWrite(leftMotorForward, 0);
  analogWrite(rightMotorForward, 128);  // Set right motor forward to 50% power
  analogWrite(leftMotorBackward, 0);
  analogWrite(rightMotorBackward, 0);
  delay(2000);  // Spin clockwise for 2 seconds

  // Stop
  analogWrite(leftMotorForward, 0);
  analogWrite(rightMotorForward, 0);
  analogWrite(leftMotorBackward, 0);
  analogWrite(rightMotorBackward, 0);
  delay(500);  // Stop for 0.5 seconds
}
`;

const longCodePage2 = `
//C++ code
// Define the motor pins
const int leftMotorForward = 5;    // Pin 9 for left motor forward
const int leftMotorBackward = 9;   // Pin 5 for left motor backward
const int rightMotorForward = 6;  // Pin 10 for right motor forward
const int rightMotorBackward = 10;  // Pin 6 for right motor backward

void setup() {
  // Set the motor pins as outputs
  pinMode(leftMotorForward, OUTPUT);
  pinMode(leftMotorBackward, OUTPUT);
  pinMode(rightMotorForward, OUTPUT);
  pinMode(rightMotorBackward, OUTPUT);
}

void loop() {
  // Spin clockwise
  analogWrite(leftMotorForward, 128);  // Set left motor forward to 50% power
  analogWrite(rightMotorForward, 0);  // Set right motor forward to 0 (off)
  analogWrite(leftMotorBackward, 0);  // Set left motor backward to 0 (off)
  analogWrite(rightMotorBackward, 128);  // Set right motor backward to 50% power
}
`;

const longCodePage3 = `
//C++ code

`;

toggleButton.addEventListener('click', () => {
  if (codeDisplay.style.display === 'none') {
    codeDisplay.style.display = 'block';
    toggleButton.textContent = 'Toggle Code';
  } else {
    codeDisplay.style.display = 'none';
    toggleButton.textContent = 'Toggle Code';
  }
});

pageDropdown.addEventListener('change', () => {
  switch (pageDropdown.value) {
    case 'page1':
      codeDisplay.textContent = longCodePage1;
      break;
    case 'page2':
      codeDisplay.textContent = longCodePage2;
      break;
    case 'page3':
      codeDisplay.textContent = longCodePage3;
      break;
    default:
      codeDisplay.textContent = '';
  }
});

copyButton.addEventListener('click', () => {
  const codeToCopy = codeDisplay.textContent;
  const textarea = document.createElement('textarea');
  textarea.value = codeToCopy;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  document.body.removeChild(textarea);
  alert('Code copied to clipboard!');
});

codeDisplay.textContent = longCodePage1;