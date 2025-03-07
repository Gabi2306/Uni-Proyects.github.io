// Display elements
const previousOperandElement = document.getElementById("previous-operand")
const currentOperandElement = document.getElementById("current-operand")

// Calculator state
let currentOperand = "0"
let previousOperand = ""
let memory = 0
let shouldResetScreen = false

// Helper functions
function updateDisplay() {
  currentOperandElement.textContent = currentOperand
  previousOperandElement.textContent = previousOperand
}

function appendValue(value) {
  if (currentOperand === "0" || shouldResetScreen) {
    currentOperand = value
    shouldResetScreen = false
  } else {
    currentOperand += value
  }
  updateDisplay()
}

function clearAll() {
  currentOperand = "0"
  previousOperand = ""
  updateDisplay()
}

function clearEntry() {
  currentOperand = "0"
  updateDisplay()
}

function backspace() {
  if (currentOperand.length === 1) {
    currentOperand = "0"
  } else {
    currentOperand = currentOperand.slice(0, -1)
  }
  updateDisplay()
}

function calculate() {
  try {
    // Replace × with * and handle other special characters
    const expression = currentOperand.replace(/×/g, "*")

    // Evaluate the expression
    const result = eval(expression)

    // Update display
    previousOperand = currentOperand + " ="
    currentOperand = result.toString()
    shouldResetScreen = true
    updateDisplay()
  } catch (error) {
    currentOperand = "Error"
    shouldResetScreen = true
    updateDisplay()
  }
}

// Scientific functions
function calculateSin() {
  try {
    const value = Number.parseFloat(currentOperand)
    const result = Math.sin(value * (Math.PI / 180)) // Convert to radians
    previousOperand = `sin(${currentOperand})`
    currentOperand = result.toString()
    shouldResetScreen = true
    updateDisplay()
  } catch (error) {
    currentOperand = "Error"
    shouldResetScreen = true
    updateDisplay()
  }
}

function calculateCos() {
  try {
    const value = Number.parseFloat(currentOperand)
    const result = Math.cos(value * (Math.PI / 180)) // Convert to radians
    previousOperand = `cos(${currentOperand})`
    currentOperand = result.toString()
    shouldResetScreen = true
    updateDisplay()
  } catch (error) {
    currentOperand = "Error"
    shouldResetScreen = true
    updateDisplay()
  }
}

function calculateTan() {
  try {
    const value = Number.parseFloat(currentOperand)
    const result = Math.tan(value * (Math.PI / 180)) // Convert to radians
    previousOperand = `tan(${currentOperand})`
    currentOperand = result.toString()
    shouldResetScreen = true
    updateDisplay()
  } catch (error) {
    currentOperand = "Error"
    shouldResetScreen = true
    updateDisplay()
  }
}

function calculateLog() {
  try {
    const value = Number.parseFloat(currentOperand)
    const result = Math.log10(value)
    previousOperand = `log(${currentOperand})`
    currentOperand = result.toString()
    shouldResetScreen = true
    updateDisplay()
  } catch (error) {
    currentOperand = "Error"
    shouldResetScreen = true
    updateDisplay()
  }
}

function calculateLn() {
  try {
    const value = Number.parseFloat(currentOperand)
    const result = Math.log(value)
    previousOperand = `ln(${currentOperand})`
    currentOperand = result.toString()
    shouldResetScreen = true
    updateDisplay()
  } catch (error) {
    currentOperand = "Error"
    shouldResetScreen = true
    updateDisplay()
  }
}

function calculateSquare() {
  try {
    const value = Number.parseFloat(currentOperand)
    const result = Math.pow(value, 2)
    previousOperand = `sqr(${currentOperand})`
    currentOperand = result.toString()
    shouldResetScreen = true
    updateDisplay()
  } catch (error) {
    currentOperand = "Error"
    shouldResetScreen = true
    updateDisplay()
  }
}

function calculateSquareRoot() {
  try {
    const value = Number.parseFloat(currentOperand)
    const result = Math.sqrt(value)
    previousOperand = `√(${currentOperand})`
    currentOperand = result.toString()
    shouldResetScreen = true
    updateDisplay()
  } catch (error) {
    currentOperand = "Error"
    shouldResetScreen = true
    updateDisplay()
  }
}

function calculateInverse() {
  try {
    const value = Number.parseFloat(currentOperand)
    const result = 1 / value
    previousOperand = `1/(${currentOperand})`
    currentOperand = result.toString()
    shouldResetScreen = true
    updateDisplay()
  } catch (error) {
    currentOperand = "Error"
    shouldResetScreen = true
    updateDisplay()
  }
}

function percentage() {
  try {
    const value = Number.parseFloat(currentOperand)
    const result = value / 100
    previousOperand = `${currentOperand}%`
    currentOperand = result.toString()
    shouldResetScreen = true
    updateDisplay()
  } catch (error) {
    currentOperand = "Error"
    shouldResetScreen = true
    updateDisplay()
  }
}

// Memory functions
function clearMemory() {
  memory = 0
}

function recallMemory() {
  currentOperand = memory.toString()
  updateDisplay()
}

function storeInMemory() {
  memory = Number.parseFloat(currentOperand)
}

function addToMemory() {
  memory += Number.parseFloat(currentOperand)
}

function subtractFromMemory() {
  memory -= Number.parseFloat(currentOperand)
}

// Initialize display
updateDisplay()

